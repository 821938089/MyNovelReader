import Setting from './Setting'
// import config from './config'
import Parser from './parser'
import Rule from './rule'
import { toggleConsole, L_setValue, isChrome } from './lib'
import Res from './res'
import App from './app'
import bus, { SHOW_SPEECH } from './app/bus'

const SAVE_MESSAGE_NAME = 'userscript-MyNovelReader-Setting-Saved'

var UI = {
    tpl_footer_nav: '\
        <div class="chapter-footer-nav">\
            <a class="prev-page" href="{prevUrl}">上一页</a> | \
            <a class="index-page" href="{indexUrl}" title="Enter 键打开目录">目录</a> | \
            <a class="next-page" style="color:{theEndColor}" href="{nextUrl}">下一页</a>\
        </div>\
        '.uiTrans(),
    skins: {},
    // 站点字体
    siteFontFamily: '',

    init: function(){
        UI.refreshMainStyle();

        UI.refreshSkinStyle(Setting.skin_name, true);

        UI.refreshExtraStyle(Setting.extra_css);

        UI.fixMobile();

        // 初始变量
        UI.$menu = $('#menu');
        UI.$menuBar = $('#menu-bar');
        UI.$content = $('#mynovelreader-content');
        UI.$preferencesBtn = $('#preferencesBtn');

        // 初始化是否隐藏
        if(Setting.hide_footer_nav){
            UI.hideFooterNavStyle(true);
        }

        // UI.toggleQuietMode();  // 初始化安静模式
        UI.hideMenuList(Setting.menu_list_hiddden);  // 初始化章节列表是否隐藏
        UI.hidePreferencesButton(Setting.hide_preferences_button);  // 初始化设置按钮是否隐藏
    },
    refreshMainStyle: function(){
        // 添加站点字体到样式中
        if (App.site.useSiteFont && App.siteFontInfo) {
            UI.siteFontFamily = App.siteFontInfo.siteFontFamily
        }

        var mainCss = Res.CSS_MAIN
                .replace("{font_family}", UI.siteFontFamily + Setting.font_family)
                .replace("{font_size}", UI.calcContentFontSize(Setting.font_size))
                .replace("{title_font_size}", UI.calcTitleFontSize(Setting.font_size))
                .replace("{content_width}", Setting.content_width)
                .replace("{text_line_height}", Setting.text_line_height)
                .replace("{paragraph_height}", Setting.paragraph_height)
                .replace("{menu-bar-hidden}", Setting.menu_bar_hidden ? "display:none;" : "");

        if(UI.$mainStyle){
            UI.$mainStyle.text(mainCss);
            return;
        }

        UI.$mainStyle = $('<style id="main">')
            .text(mainCss)
            .appendTo('head');
    },
    hideFooterNavStyle: function(hidden){
        var navStyle = $("#footer_nav_css");
        if(hidden) {
            if(navStyle.length === 0) {
                $('<style>')
                    .attr("id", "footer_nav_css")
                    .text(".chapter-footer-nav { display: none; }")
                    .appendTo('head');
            }
        } else {
            navStyle.remove();
        }
    },
    hideMenuList: function(hidden){
        if(typeof(hidden) === "undefined"){
            hidden = !UI.menu_list_hiddden;
        }

        if(hidden){
            UI.$menu.addClass('hidden');
            UI.$content.css("margin-left", "");
        }else{
            UI.$menu.removeClass('hidden');
            UI.$content.css("margin-left", "320px");
        }
        UI.menu_list_hiddden = hidden;
    },
    hidePreferencesButton: function(hidden) {
        hidden = _.isUndefined(hidden) ? Setting.hide_preferences_button : hidden;

        UI.$preferencesBtn.toggle(!hidden);
    },
    hideMenuBar: function(hidden) {
        hidden = _.isUndefined(hidden) ? Setting.menu_bar_hidden : hidden;

        UI.$menuBar.toggle(!hidden);
    },
    refreshSkinStyle: function(skin_name, isFirst){
        var $style = $("#skin_style");
        if($style.length === 0){
            $style = $('<style id="skin_style">').appendTo('head');
        }

        // 图片章节夜间模式会变的无法看
        if (isFirst && skin_name.indexOf('夜间'.uiTrans()) != -1 && Setting.picNightModeCheck) {
            setTimeout(function(){
                var img = $('#mynovelreader-content img')[0];
                // console.log(img.width, img.height)
                if (img && img.width > 500 && img.height > 1000) {
                    $style.text(UI.skins['缺省皮肤'.uiTrans()]);
                    return;
                }
            }, 200);
        }

        $style.text(UI.skins[skin_name]);
    },
    refreshExtraStyle: function(css){
        var style = $("#extra_style");
        if(style.length === 0){
            style = $('<style id="extra_style">').appendTo('head');
        }

        style.text(css);
    },
    toggleQuietMode: function() {
        this._isQuietMode = !this._isQuietMode;
        var selector = '#menu-bar, #menu, #preferencesBtn, .readerbtn';

        if (this.$_quietStyle) {
            this.$_quietStyle.remove();
            this.$_quietStyle = null;
        }

        if (this._isQuietMode) {
            $(selector).addClass("quiet-mode");
        } else {
            $(selector).removeClass("quiet-mode");
        }
    },
    addButton: async function(){
        GM_addStyle('\
            .readerbtn {\
                position: fixed;\
                right: 10px;\
                bottom: 10px;\
                z-index: 2247483648;\
                padding: 20px 5px!important;\
                width: 50px;\
                height: 20px;\
                line-height: 20px!important;\
                text-align: center;\
                border: 1px solid;\
                border-color: #888;\
                border-radius: 50%;\
                background: rgba(0,0,0,.5);\
                color: #FFF;\
                font: 12px/1.5 "微软雅黑","宋体",Arial;\
                cursor: pointer;\
                box-sizing: content-box;\
                letter-spacing: normal;\
            }\
        ');

        $("<div>")
            .addClass("readerbtn")
            .html(App.isEnabled ? "退出".uiTrans() : "阅读模式".uiTrans())
            .mousedown(async function(event){
                if(event.which == 1){
                    await App.toggle();
                }else if(event.which == 2){
                    event.preventDefault();
                    L_setValue("mynoverlreader_disable_once", true);

                    var url = App.activeUrl || App.curPageUrl;
                    App.openUrl(url);
                }
            })
            .appendTo('body');
    },
    calcContentFontSize: function(fontSizeStr) {
        var m = fontSizeStr.match(/([\d\.]+)(px|r?em|pt)/);
        if(m) {
            var size = m[1],
                type = m[2];
            return parseFloat(size, 10) + type;
        }

        m = fontSizeStr.match(/([\d\.]+)/);
        if (m) {
            return parseFloat(m[1], 10) + 'px';
        }

        return "";
    },
    calcTitleFontSize: function(fontSizeStr){
        var m = fontSizeStr.match(/([\d\.]+)(px|r?em|pt)/);
        if(m) {
            var size = m[1],
                type = m[2];
            return parseFloat(size, 10) * 1.8 + type;
        }

        m = fontSizeStr.match(/([\d\.]+)/);
        if (m) {
            return parseFloat(m[1], 10) * 1.8 + 'px';
        }

        return "";
    },
    fixMobile: function(){  // 自适应网页设计
        var meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.setAttribute("content", "width=device-width, initial-scale=1");
        document.head.appendChild(meta);
    },
    preferencesShow: function(event){
        if($("#reader_preferences").length){
            return;
        }

        UI._loadBlocker();

        UI.$prefs = $('<div id="reader_preferences">')
            .css('cssText', 'position:fixed; top:12%; left:50%; transform: translateX(-50%); width:500px; z-index:300000;')
            .append(
                $('<style>').text(Res.preferencesCSS))
            .append(
                $('<div class="body">').html(Res.preferencesHTML))
            .appendTo('body');

        UI.preferencesLoadHandler();
    },
    _loadBlocker: function() {
        UI.$blocker = $('<div>').attr({
            id: 'uil_blocker',
            style: 'position:fixed;top:0px;left:0px;right:0px;bottom:0px;background-color:#000;opacity:0.5;z-index:100000;'
        }).appendTo('body');
    },
    hide: function(){
        if(UI.$prefs) UI.$prefs.remove();
        if(UI.$blocker) UI.$blocker.remove();
        UI.$prefs = null;
        UI.$blocker = null;
    },
    preferencesLoadHandler: function(){
        var $form = $("#preferences");

        // checkbox
        // $form.find("#enable-cn2tw").get(0).checked = Setting.cn2tw;
        // $form.find("#disable-auto-launch").get(0).checked = Setting.getDisableAutoLaunch();
        $form.find("#booklink-enable").get(0).checked = Setting.booklink_enable;
        $form.find("#debug").get(0).checked = Setting.debug;
        $form.find("#quietMode").get(0).checked = Setting.isQuietMode;
        $form.find("#pic-nightmode-check").get(0).checked = Setting.picNightModeCheck;
        $form.find("#copyCurTitle").get(0).checked = Setting.copyCurTitle;

        $form.find("#hide-menu-list").get(0).checked = Setting.menu_list_hiddden;
        $form.find("#hide-footer-nav").get(0).checked = Setting.hide_footer_nav;
        $form.find("#hide-preferences-button").get(0).checked = Setting.hide_preferences_button;
        $form.find("#add-nextpage-to-history").get(0).checked = Setting.addToHistory;
        $form.find("#enable-dblclick-pause").get(0).checked = Setting.dblclickPause;

        $form.find("#font-family").get(0).value = Setting.font_family;
        $form.find("#font-size").get(0).value = Setting.font_size;
        $form.find("#content_width").get(0).value = Setting.content_width;
        $form.find("#text_line_height").get(0).value = Setting.text_line_height;
        $form.find("#paragraph_height").get(0).value = Setting.paragraph_height;
        $form.find("#split_content").get(0).checked = Setting.split_content;
        $form.find("#scroll_animate").get(0).checked = Setting.scrollAnimate;

        $form.find("#remain-height").get(0).value = Setting.remain_height;
        $form.find("#extra_css").get(0).value = Setting.extra_css;
        $form.find("#custom_siteinfo").get(0).value = Setting.customSiteinfo;
        UI._rules = $form.find("#custom_replace_rules").get(0).value = Setting.customReplaceRules;

        $form.find('#preload-next-page').get(0).checked = Setting.preloadNextPage

        // 启动模式
        $form.find(`#launch-mode-${Setting.launchMode}`).get(0).checked = true

        // 繁简转换
        $form.find(`#chinese-conversion-${Setting.chineseConversion}`).get(0).checked = true

        // 内容标准化
        $form.find('#enable-content-normalize').get(0).checked = Setting.contentNormalize
        $form.find('#merge-qoutes-content').get(0).checked = Setting.mergeQoutesContent

        // 快速启动
        $form.find('#fastboot').get(0).checked = Setting.fastboot

        // 删除含网站域名行
        $form.find('#remove-domain-line').get(0).checked = Setting.removeDomainLine

        // 界面语言
        var $lang = $form.find("#lang");
        $("<option>").text("zh-CN").appendTo($lang);
        $("<option>").text("zh-TW").appendTo($lang);
        $lang.val(Setting.lang).change(function(){
            var key = $(this).find("option:selected").text();
            Setting.lang = key;
        });

        // 皮肤
        var $skin = $form.find("#skin");
        for(var key in UI.skins){
            $("<option>").text(key).appendTo($skin);
        }
        $skin.val(Setting.skin_name).change(function(){
            var key = $(this).find("option:selected").text();
            UI.refreshSkinStyle(key);
            Setting.skin_name = key;
        });

        // 字体大小等预览
        var preview = _.debounce(function(){
            switch(this.id){
                case "font-size":
                    var contentFontSize = UI.calcContentFontSize(this.value);
                    var titleFontSize = UI.calcTitleFontSize(this.value);
                    if(titleFontSize) {
                        UI.$content.css("font-size", contentFontSize);
                        UI.$content.find("h1").css("font-size", titleFontSize);
                    }
                    break;
                case "font-family":
                    UI.$content.css("font-family", UI.siteFontFamily + this.value);
                    break;
                case "content_width":
                    UI.$content.css("width", this.value);
                    break;
                case "text_line_height":
                    UI.$content.css("line-height", this.value);
                    break;
                case "paragraph_height":
                    $(App.curFocusElement).find('p').css("margin", `${this.value} 0`);
                    break;
                default:
                    break;
            }
        }, 300);
        $form.on("input", "input", preview);

        // 初始化设置按键
        $form.find("#quietModeKey").get(0).value = Setting.quietModeKey;
        $form.find("#openPreferencesKey").get(0).value = Setting.openPreferencesKey;
        $form.find("#setHideMenuListKey").get(0).value = Setting.hideMenuListKey;
        $form.find("#setOpenSpeechKey").get(0).value = Setting.openSpeechKey;

        // 点击事件
        $form.on('click', 'input:checkbox, input:button', function(event){
            UI.preferencesClickHandler(event.target); // 不用 await
        });
    },
    cleanPreview: function() {
        UI.$content.find("h1").css("font-size", "");

        // 恢复初始设置（有误操作）
        // UI.$content.removeAttr('style');
    },
    preferencesClickHandler: async function(target){
        var key;
        switch (target.id) {
            case 'close_button':
                UI.preferencesCloseHandler();
                break;
            case 'save_button':
                UI.preferencesSaveHandler();
                break;
            case 'debug':
                Setting.debug = !Setting.debug;
                toggleConsole(Setting.debug);
                break;
            case 'quietMode':
                UI.toggleQuietMode(target.checked);
                break;
            case 'hide-menu-list':
                UI.hideMenuList(target.checked);
                break;
            case 'hide-preferences-button':
                UI.hidePreferencesButton(target.checked);
                if (target.checked) {
                    alert('隐藏后通过快捷键或 Greasemonkey 用户脚本命令处调用'.uiTrans());
                }
                break;
            case 'hide-footer-nav':
                break;
            case 'quietModeKey':
                key = prompt('请输入打开设置的快捷键：'.uiTrans(), Setting.quietModeKey);
                if (key) {
                    Setting.quietModeKey = key;
                    $(target).val(key);
                }
                break;
            case 'openPreferencesKey':
                key = prompt('请输入打开设置的快捷键：'.uiTrans(), Setting.openPreferencesKey);
                if (key) {
                    Setting.openPreferencesKey = key;
                    $(target).val(key);
                }
                break;
            case 'setHideMenuListKey':
                key = prompt('请输入切换左侧章节列表的快捷键：'.uiTrans(), Setting.hideMenuListKey);
                if (key) {
                    Setting.hideMenuListKey = key;
                    $(target).val(key);
                }
                break;
            case 'setOpenSpeechKey':
                key = prompt('请输入打开朗读的快捷键：'.uiTrans(), Setting.openSpeechKey);
                if (key) {
                    Setting.openSpeechKey = key;
                    $(target).val(key);
                }
                break;
            case 'saveAsTxt':
                UI.preferencesCloseHandler();
                await App.saveAsTxt();
                break;
            case 'speech':
                UI.preferencesCloseHandler();
                bus.$emit(SHOW_SPEECH)
                break;
            default:
                break;
        }
    },
    preferencesCloseHandler: function(){
        UI.cleanPreview();

        UI.hide();
    },
    preferencesSaveHandler: function(){
        var $form = $("#preferences");

        // Setting.setDisableAutoLaunch($form.find("#disable-auto-launch").get(0).checked);

        // Setting.cn2tw = $form.find("#enable-cn2tw").get(0).checked;
        Setting.booklink_enable = $form.find("#booklink-enable").get(0).checked;
        Setting.isQuietMode = $form.find("#quietMode").get(0).checked;
        Setting.debug = $form.find("#debug").get(0).checked;
        Setting.picNightModeCheck = $form.find("#pic-nightmode-check").get(0).checked;
        Setting.setCopyCurTitle($form.find("#copyCurTitle").get(0).checked);

        Setting.addToHistory = $form.find("#add-nextpage-to-history").get(0).checked;
        Setting.dblclickPause = $form.find("#enable-dblclick-pause").get(0).checked;

        var skinName = $form.find("#skin").find("option:selected").text();
        Setting.skin_name = skinName;
        UI.refreshSkinStyle(skinName);

        Setting.font_family = $form.find("#font-family").get(0).value;
        UI.$content.css("font-family", Setting.font_family);

        Setting.font_size = $form.find("#font-size").get(0).value;
        Setting.text_line_height = $form.find("#text_line_height").get(0).value;
        Setting.paragraph_height = $form.find("#paragraph_height").get(0).value;
        Setting.content_width = $form.find("#content_width").get(0).value;
        Setting.remain_height = $form.find("#remain-height").get(0).value;
        Setting.split_content = $form.find("#split_content").get(0).checked;
        Setting.scrollAnimate = $form.find("#scroll_animate").get(0).checked;

        Setting.menu_list_hiddden = $form.find("#hide-menu-list").get(0).checked;
        UI.hideMenuList(Setting.menu_list_hiddden);

        Setting.hide_footer_nav = $form.find("#hide-footer-nav").get(0).checked;
        UI.hideFooterNavStyle(Setting.hide_footer_nav);

        Setting.hide_preferences_button = $form.find("#hide-preferences-button").get(0).checked;

        var css = $form.find("#extra_css").get(0).value;
        UI.refreshExtraStyle(css);
        Setting.extra_css = css;

        Setting.customSiteinfo = $form.find("#custom_siteinfo").get(0).value;

        Setting.preloadNextPage = $form.find("#preload-next-page").get(0).checked;

        // 启动模式
        $form.find('#launch-mode input').each(function () {
            if (this.checked) {
                Setting.launchMode = this.value
            }
        })

        // 繁简转换
        $form.find('#chinese-conversion input').each(function () {
            if (this.checked) {
                Setting.chineseConversion = this.value
            }
        })

        // 内容标准化
        Setting.contentNormalize = $form.find('#enable-content-normalize').get(0).checked
        Setting.mergeQoutesContent = $form.find('#merge-qoutes-content').get(0).checked

        // 快速启动
        Setting.fastboot = $form.find('#fastboot').get(0).checked

        // 删除含网站域名行
        Setting.removeDomainLine = $form.find('#remove-domain-line').get(0).checked

        // 自定义替换规则直接生效
        var rules = $form.find("#custom_replace_rules").get(0).value;
        Setting.customReplaceRules = rules;
        if (rules != UI._rules) {
            var contentHtml = App.oArticles.join('\n');
            if (rules) {
                // 转换规则
                rules = Rule.parseCustomReplaceRules(rules);
                // 替换
                contentHtml = Parser.prototype.replaceHtml(contentHtml, rules);
            }

            UI.$content.html(contentHtml);

            App.resetCache();

            UI._rules = rules;
        }

        // 重新载入样式
        UI.cleanPreview();
        UI.refreshMainStyle();

        UI.hide();
    },
    openHelp: function() {

    },
    notice: function (htmlText, ms){
        var $noticeDiv = $("#alert");
        if (!ms) {
            ms = 1666;
        }

        clearTimeout(UI.noticeDivto);
        $noticeDiv.find("p").html(htmlText);
        $noticeDiv.fadeIn("fast");

        UI.noticeDivto = setTimeout(function(){
            $noticeDiv.fadeOut(500);
        }, ms);

        return $noticeDiv;
    }
};

UI.skins["缺省皮肤".uiTrans()] = "";
UI.skins["暗色皮肤".uiTrans()] = "body { color: #666; background-color: rgba(0,0,0,.1); }\
                .title { color: #222; }";
UI.skins["白底黑字".uiTrans()] = "body { color: black; background-color: white;}\
                .title { font-weight: bold; border-bottom: 0.1em solid; margin-bottom: 1.857em; padding-bottom: 0.857em;}";

UI.skins["夜间模式".uiTrans()] = "body { color: #939392; background: #2d2d2d; } #preferencesBtn { filter: invert(90%); } #mynovelreader-content img { background-color: #c0c0c0; } .chapter.active div{color: #939392;}";
UI.skins["夜间模式1".uiTrans()] = "body { color: #679; background-color: black; } #preferencesBtn { filter: invert(90%); } .title { color: #3399FF; background-color: #121212; }";
UI.skins["夜间模式2".uiTrans()] = "body { color: #AAAAAA; background-color: #121212; } #preferencesBtn { filter: invert(90%); } #mynovelreader-content img { background-color: #c0c0c0; } .title { color: #3399FF; background-color: #121212; }   body a { color: #E0BC2D; } body a:link { color: #E0BC2D; } body a:visited { color:#AAAAAA; } body a:hover { color: #3399FF; } body a:active { color: #423F3F; }";
UI.skins["夜间模式（多看）".uiTrans()] = "body { color: #4A4A4A; background: #101819; } #preferencesBtn { filter: invert(90%); } #mynovelreader-content img { background-color: #c0c0c0; }";

UI.skins["橙色背景".uiTrans()] = "body { color: #24272c; background-color: #FEF0E1; }";
UI.skins["绿色背景".uiTrans()] = "body { color: black; background-color: #d8e2c8; }";
UI.skins["绿色背景2".uiTrans()] = "body { color: black; background-color: #CCE8CF; }";
UI.skins["蓝色背景".uiTrans()] = "body { color: black; background-color: #E7F4FE; }";
UI.skins["棕黄背景".uiTrans()] = "body { color: black; background-color: #C2A886; }";
UI.skins["经典皮肤".uiTrans()] = "body { color: black; background-color: #EAEAEE; } .title { background-color: #f0f0f0; }";

// UI.skins["起点牛皮纸（深色）".uiTrans()] = "body { color: black; background: url(\"http://qidian.gtimg.com/qd/images/read.qidian.com/theme/body_theme1_bg_2x.0.3.png\"); }";
// UI.skins["起点牛皮纸（浅色）".uiTrans()] = "body { color: black; background: url(\"http://qidian.gtimg.com/qd/images/read.qidian.com/theme/theme_1_bg_2x.0.3.png\"); }";
// UI.skins["起点黑色".uiTrans()] = "body, #menu, #header { color: #666; background: #111 url(\"https://qidian.gtimg.com/qd/images/read.qidian.com/theme/theme_6_bg.45ad3.png\") repeat; } #preferencesBtn { background: white; }";
UI.skins["起点牛皮纸（深色）".uiTrans()] = "body { color: black; background: url('data:image/png;base64,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'); }";
UI.skins["起点牛皮纸（浅色）".uiTrans()] = "body { color: black; background: url('data:image/png;base64,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'); }";

UI.skins["起点黑色".uiTrans()] = "body, #menu, #header { color: #666; background: #111 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==') repeat; } #preferencesBtn { filter: invert(90%); }";
UI.skins["绿色亮字".uiTrans()] = "body, #menu, #header, .chapter.active div { color: rgb(187,215,188); background-color: rgb(18,44,20); } #preferencesBtn { filter: invert(90%); }";

UI.skins["图书双层".uiTrans()] = `body { color: #black; background: #ECE8D7 url('https://s3.bmp.ovh/imgs/2022/01/c08287428c0e16e2.png') repeat; } #mynovelreader-content{ letter-spacing: 1.3px; background: #E8E6DA url('https://s3.bmp.ovh/imgs/2022/01/71f45b2d4773b393.png') repeat; padding-left: 4rem ;padding-right: 4rem ; border-style:solid; border-width:1px;border-width:1px; border-color:rgba(211,211,211,0.25); }`;

UI.skins["起点背景".uiTrans()] = `body { color: #black; background: #EBE6DA url('data:image/png;base64,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') repeat; } #mynovelreader-content{ letter-spacing: 1.3px; background: #F0ECE3 url('data:image/png;base64,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') repeat; padding-left: 4rem ;padding-right: 4rem ; border-style:solid; border-width:1px;border-width:1px; border-color:rgba(211,211,211,0.25); }`;

export default UI

