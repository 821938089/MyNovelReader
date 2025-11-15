// ==UserScript==
// @id             mynovelreader@ywzhaiqi@gmail.com
// @name           My Novel Reader
// @name:zh-CN     小说阅读脚本
// @name:zh-TW     小說閱讀腳本
// @version        8.0.2
// @namespace      https://github.com/ywzhaiqi
// @author         ywzhaiqi
// @contributor    Roger Au, shyangs, JixunMoe、akiba9527 及其他网友
// @description    小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @description:zh-CN  小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @description:zh-TW  小說閱讀腳本，統一閱讀樣式，內容去廣告、修正拼音字、段落整理，自動下一頁
// @license        GPL version 3
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceURL
// @grant          GM_openInTab
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          GM_info
// @grant          unsafeWindow
// @homepageURL    https://greasyfork.org/scripts/292/
// @require        https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/vue/2.2.6/vue.min.js#sha256=7166598e78fdf6bca707e6fc15a346522bf17359094916bc64cfc4efb703ab42
// @require        https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/jquery/2.1.1/jquery.min.js#sha256=c0d4098bc8b34c6f87a3d7723988ae81214a53a0bb4a1d4d36a67640f98ed079
// @require        https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/underscore.js/1.7.0/underscore-min.js#sha256=7b6fbd8af1c538408f2fe7eef5f6c52b85db12ab91b63277287e5e9ea83a4931
// @require        https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/keymaster/1.6.1/keymaster.min.js#sha256=b5db262c4377030dc22c1ed176f1b8f1a29e557d0fa8afae0d185e5dc57dd3fb
// @require        https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/crypto-js/4.1.1/crypto-js.min.js#sha256=8e3b0117f4df4be452c0b6af5b8f0a0acf9d4ade23d08d55d7e312af22077762

// @connect        *
// @connect        *://*.qidian.com/
// @connect        bgme.bid
// @connect        xrzww.com
// @connect        qidian.com

// @include        *://vipreader.qidian.com/chapter/*/*
// @include        *://www.qdmm.com/BookReader/*,*.aspx
// @include        *://chuangshi.qq.com/read/bookreader/*.html*
// @include        *://chuangshi.qq.com/*bk/*/*-r-*.html*
// @include        *://yunqi.qq.com/*bk/*/*.html
// @include        *://dushu.qq.com/read.html?bid=*
// @include        *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @include        *://my.jjwxc.net/onebook_vip.php?novelid=*&chapterid=*
// @include        *://book.zongheng.com/chapter/*/*.html
// @include        *://www.xxsy.net/chapter/*.html
// @include        *://book.zhulang.com/*/*.html
// @include        *://www.17k.com/chapter/*/*.html
// @include        *://mm.17k.com/chapter/*/*.html
// @include        *://www.xkzw.org/*/*.html
// @include        *://shouda8.com/*/*.html
// @include        *://novel.hongxiu.com/*/*/*.shtml
// @include        *://www.readnovel.com/novel/*.html
// @include        *://shushan.zhangyue.net/book/*/*/
// @include        *://weread.qq.com/web/reader/*
// @match          *://www.qimao.com/shuku/*-*/
// @match          *://www.qidian.com/chapter/*/*
// @match          *://m.qidian.com/chapter/*/*
// @match          *://read.zongheng.com/chapter/*/*.html
// @match          *://www.duread.cn/chapter/book_chapter_detail/*
// @match          *://www.duyuedu.net/chapter/book_chapter_detail/*
// http://www.tianyabook.com/*/*.htm

// @include        *://tieba.baidu.com/p/*
// @include        *://booklink.me/*

// booklink.me
// @include        *://www.dudukan.net/html/*/*/*.html
// @include        *://www.tadu.com/book/*/*/
// @exclude        *://www.tadu.com/book/*/toc/
// @include        *://www.50zw.com/book_*/*.html
// @include        *://www.wenxue8.org/html/*/*/*.html
// @match          *://www.bixia.org/book/*/*.html
// @match          *://www.67book.net/book/*/*.html
// @match          *://www.50zw.org/book/*/*.html
// @match          *://www.luoqiuzw.com/book/*/*.html
// @match          *://www.xiaoshuo.cc/*/*.html
// @match          *://www.tyue.net/*/*.html
// @match          *://www.biduoxs.com/biquge/*/*.html
// @match          *://www.aixswx.com/xs/*/*/*.html
// @match          *://www.wucuoxs.com/*/*.html
// @match          *://www.7017k.com/*/*.html
// @match          *://www.piaotianwenxue.com/book/*/*/*.html
// @match          *://www.txtshuku.org/so/*/*.html
// @match          *://www.wcxsw.org/*/*.html
// @match          *://www.min-yuan.com/book/*/*.html
// @match          *://www.tatajk.net/book/*/*.html
// @match          *://www.147xs.org/book/*/*.html
// @match          *://www.biqugeso.org/biquge_*/*.html


// 其它网站
// @include        *://book.sfacg.com/Novel/*/*/*/
// @include        *://www.zhaoshuyuan.com/*/*/*.html*
// @include        *://book.kanunu.org/*/*/*.html
// @include        *://www.kanunu8.com/book*/*.html
// @include        *://www.epzww.com/book/*/*
// @include        *://www.biqudu.com/*/*.html
// @include        *://www.qududu.com/book/*/*/*.html
// @include        *://b.faloo.com/p/*/*.html
// @include        *://b.faloo.com/*_*.html
// @include        *://www.my285.com/*/*/*/*.htm
// @include        *://www.hjwzw.com/Book/Read/*,*
// @include        *://www.hjwzw.com/Book/Read/*_*
// @include        *://www.69shu.top/txt/*/*
// @include        *://www.biquge5200.cc/*/*.html
// @include        *://read.qidian.com/chapter/*
// @include        *://www.piaotia.com/html/*/*/*.html
// @include        *://www.miaobige.com/*/*/*.html
// @include        *://www.shuhai.com/read/*/*.html
// @include        *://www.23qb.com/book/*/*.html
// @include        *://www.lucifer-club.com/chapter-*-*.html
// @include        *://www.quanben.io/*/*/*.html
// @include        *://www.b5200.org/*/*.html
// @include        *://www.b5200.net/*/*.html
// @include        *://novel.tingroom.com/*/*/*.html
// @include        *://www.ciweimao.com/chapter/*
// @include        *://m.zwduxs.com/*_*/*.html
// @include        *://www.ranwen.la/files/article/*/*/*.html
// @include        *://www.3xs.cc/*/*.html
// @include        *://www.nuanyuehanxing.cc/*/*/*.html
// @include        *://www.gongzicp.com/read-*.html
// @include        *://www.xs321.net/book/*/*/*.html
// @include        *://www.hetushu.com/book/*/*.html
// @include        *://www.zhaishuyuan.org/book/*/*.html
// @include        *://www.00ksw.com/html/*/*/*.html
// @include        *://www.99bxwx.com/b/*/*.html
// @match          *://www.81zw.com/book/*/*.html
// @match          *://www.biqu5200.net/*/*.html
// @match          *://www.biqusa.com/*/*.html
// @match          *://www.biququ.com/html/*/*.html
// @match          *://www.ddxs.com/*/*.html
// @match          *://www.xn--fiq228cu93a4kh.com/Html/*/*.html
// @match          *://www.555x.org/read/*/*.html
// @match          *://www.soxscc.net/*/*.html
// @match          *://www.linovelib.com/novel/*/*.html
// @match          *://www.uuks.org/b/*/*.html
// @match          *://www.230book.net/book/*/*.html
// @match          *://www.exiaoshuo.com/*/*/
// @match          *://www.877zw.com/*/*.html
// @match          *://www.zhuixsw.com/*/*.html
// @match          *://www.ddxs.com/*/*.html
// @match          *://www.bqxs520.com/*/*.html
// @match          *://www.bidige.com/book/*/*.html
// @match          *://www.yushubo.com/read_*.html
// @match          *://www.bqwxg8.com/wenzhang/*/*/*.html
// @match          *://www.zpxsw.com/*/*.html
// @match          *://www.xbiqukan.com/book/*/*.html
// @match          *://www.51kanshu.cc/book/*/*.html
// @match          *://www.mibaoge.com/*/*.html
// @match          *://www.asxs.com/view/*/*.html
// @match          *://www.xinshuw.cc/*/*.html
// @match          *://www.yodu.org/book/*/*.html
// @match          *://www.fantuantanshu.com/*/*.html
// @match          *://www.tsxsw.net/html/*/*/*.html
// @match          *://www.xiaoshuting.org/book/*/*.html
// @match          *://www.xiaoshuting.la/*/*/*.html
// @match          *://www.xiaoshuting.cc/xiaoshuo/*/*/*.html
// @match          *://www.xiaoshuting.info/read/*/*/*.html
// @match          *://www.xiaoshutingapp.com/html/*/*.html
// @match          *://www.fantuankanshu.com/html/*/*/*.html
// @match          *://www.loubiqu.net/html/*/*.html
// @match          *://www.1200ksw.net/html/*/*/*.html
// @match          *://www.ranwena.net/files/article/*/*/*.html
// @match          *://www.biququ.info/html/*/*.html
// @match          *://www.fqxsw.org/html/*/*.html
// @match          *://www.cxzww.com/read/*/*/*.html
// @match          *://www.5ebook.net/book/*/*/*.html
// @match          *://www.yyxs.la/html/*/*/*.html
// @match          *://www.slkslk.com/*/*/*/*.html
// @match          *://www.siluke.com/*/*/*/*.html
// @match          *://www.bqgxsydw.com/html/*/*/*.html
// @match          *://www.lingdiankanshu.com/html/*/*/*.html
// @match          *://www.beqege.cc/*/*.html
// @match          *://www.yqxsw.org/html/*/*/*.html
// @match          *://www.2kxiaoshuo.com/xiaoshuo/*/*/*.html
// @match          *://www.2kxs.la/xiaoshuo/*/*/*.html
// @match          *://www.31xs.org/*/*/*.html
// @match          *://www.31xs.net/*/*/*.html
// @match          *://www.01xs.com/xiaoshuo/*/*.html
// @match          *://www.biquge.name/html/*/*/*.html
// @match          *://www.yawenba.net/book/*/*.html
// @match          *://www.aiyueshuxiang.com/html/*/*.html
// @match          *://www.zhenhunxiaoshuo.com/*.html
// @match          *://www.xiyuwx.com/*/*.html
// @match          *://www.waptxt.com/*/*.html
// @match          *://www.5xw.net/*/*/*.html
// @match          *://www.5ycn.com/*/*/*.html
// @match          *://www.67shu.net/book/*/*.html
// @match          *://zerifeisheng.com/book/*/*.html
// @match          *://quanxiaoshuo.com/*/*/
// @match          *://www.bg3.co/novel/pagea/*.html
// @match          *://cn.bg3.co/novel/pagea/*.html
// @match          *://tw.bg3.co/novel/pagea/*.html
// @match          *://www.babahome.net/*/*.html
// @match          *://wufangdao.com/html/*/*/*.html
// @match          *://www.jinghuashuge.cc/id/*/*.html
// @match          *://www.qbiqus.com/*/*.html
// @match          *://www.123dua.com/dudu-*/*/*.html
// @match          *://www.17yue.com/*/*.html
// @match          *://www.nuoqiu.com/*/*.html
// @match          *://www.yawen8.com/*/*/*.html
// @match          *://www.bookxuan.org/book/*/*/*.html
// @match          *://www.shenmaxiaoshuo.com/book/*/*.html
// @match          *://www.16kbook.org/book/*/*.html
// @match          *://www.1kanshu.com/html/*/*.html
// @match          *://www.dawenxue.net/*/*.html
// @match          *://www.tbxsww.com/html/*/*/*.html
// @match          *://www.33yq.org/read/*/*.shtml
// @match          *://www.3uxiaoshuo.com/xiaoshuo/*/*.html
// @match          *://www.zrfsxs.com/xiaoshuo/*/*.html
// @match          *://www.31xs.com/*/*/*.html
// @match          *://www.70sw.net/read/*/*/*.html
// @match          *://www.qisxs.com/*/*.html
// @match          *://www.zhswx.com/zhsread/*.html
// @match          *://www.zfxwx.com/read/*/*.html
// @match          *://www.622zw.com/books/*/*.html
// @match          *://www.deqixs.com/xiaoshuo/*/*.html
// @match          *://www.fkxs.net/*/*.html
// @match          *://www.09k.net/kkb/*/*.html
// @match          *://www.yulusy.com/yulus/*/*.html
// @match          *://sangtacviet.vip/truyen/*/1/*/*/
// @match          *://www.shoujix.com/*.html
// @match          *://www.twking.cc/*_*/*.html
// @match          *://www.bilinovel.com/novel/*/*.html
// @match          *://tw.bilinovel.com/novel/*/*.html
// @match          *://tw.linovelib.com/novel/*/*.html
// @match          *://www.wenku8.net/novel/*/*/*.htm
// @match          *://www.uuread.tw/chapter/*/*.html
// @match          *://69shux.com/txt/*/*
// @match          *://www.biquxs.com/book/*/*.html
// @match          *://www.dbxsc.com/book/*/*.html
// @match          *://www.weifengxs.com/chapter/*/*.html
// @match          *://m.wfxs.tw/xiaoshuo/*/*/
// @match          *://www.wfxs.tw/xiaoshuo/*/*/
// @match          *://feibzw.com/Html/*/*.html
// @match          *://www.xsbiquge.la/book/*/*.html
// @match          *://www.bqgege.com/reader/*/*
// @match          *://www.dxmwx.org/read/*_*.html
// @match          *://ixdzs8.com/read/*/*.html
// @match          *://69shuba.cx/txt/*/*

// legado-webui
// @match          *://localhost:5000/bookshelf/*/*/

// 移动版
// @include        *://m.jjwxc.net/book2/*/*
// @include        *://m.jjwxc.com/book2/*/*
// @include        *://wap.jjwxc.net/book2/*/*
// @include        *://wap.jjwxc.com/book2/*/*
// @include        *://wap.jjwxc.com/vip/*/*?ctime=*
// @include        *://wap.jjwxc.com/vip/*/*
// @include        *://wap.jjwxc.net/vip/*/*
// @include        *://m.jjwxc.net/vip/*/*
// @include        *://m.jjwxc.com/vip/*/*
// @match          *://m.xindingdianxsw.com/*/*/*.html
// @match          *://m.123dua.com/dudu-*/*/*.html
// @match          *://m.biquxs.com/book/*/*.html
// @match          *://m.yulusy.com/yulus/*/*.html
// @match          *://m.xianqihaotianmi.org/*/*.html

// @exclude        */List.htm
// @exclude        */List.html
// @exclude        */List.shtml
// @exclude        */index.htm
// @exclude        */index.html
// @exclude        */index.shtml
// @exclude        */Default.htm
// @exclude        */Default.html
// @exclude        */Default.shtml

// @run-at         document-body
// ==/UserScript==

/* This script build by rollup. */
(function (Vue) {
  'use strict';

  

  function __$styleInject ( css ) {
      if(!css) return ;
  
      if(typeof(window) == 'undefined') return ;
      let style = document.createElement('style');
      style.setAttribute('media', 'screen');
      style.setAttribute('class', 'noRemove');
  
      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

  // 其它设置
  const config = {
    lang: 'zh-CN',

    soduso: false,                  // www.sodu.so 跳转
    // content_replacements: true,     // 小说屏蔽字修复
    fixImageFloats: true,           // 图片居中修正
    paragraphBlank: true,           // 统一段落开头的空格为 2个全角空格
    end_color: "#666666",           // 最后一页的链接颜色
    // PRELOADER: true,                // 提前预读下一页

    xhr_time: 15 * 1000,
    download_delay: 0,  // 毫秒。0 毫秒下载起点 vip 限时免费章节会被封
    dumpContentMinLength: 3,        // 检测重复内容的最小行数
  };

  var uiTrans = {
      "将小说网页文本转换为繁体。\n\n注意：内置的繁简转换表，只收录了简单的单字转换，启用本功能后，如有错误转换的情形，请利用脚本的自订字词取代规则来修正。\n例如：「千里之外」，会错误转换成「千里之外」，你可以加入规则「千里之外=千里之外」来自行修正。": "將小說網頁文字轉換為繁體。\n\n注意：內建的繁簡轉換表，只收錄了簡單的單字轉換，啟用本功能後，如有錯誤轉換的情形，請利用腳本的自訂字詞取代規則來修正。\n例如：「千里之外」，會錯誤轉換成「千裡之外」，你可以加入規則「千裡之外=千里之外」來自行修正。",
      "图片章节用夜间模式没法看，这个选项在启动时会自动切换到缺省皮肤": "圖片章節無法以夜間模式觀看，這個選項在啟動時會自動切換到預設佈景",
      "通过快捷键切换或在 Greasemonkey 用户脚本命令处打开设置窗口": "通過熱鍵切換或在 Greasemonkey 使用者腳本命令處開啟設定視窗",
      "隐藏后通过快捷键或 Greasemonkey 用户脚本命令处调用": "隱藏後通過熱鍵或 Greasemonkey 使用者腳本命令處調用",
      "一行一个，每行第一个 = 为分隔符\n需要刷新页面生效": "一行一條規則，每一行第一個 = 為分隔符\n（需重新載入頁面才能生效）",
      "错误：没有找到下一页的内容，使用右键翻到下一页": "錯誤：沒有找到下一頁的內容，使用右鍵翻到下一頁",
      "左键滚动，中键打开链接（无阅读模式）": "左鍵捲動畫面至該章節，中鍵開啟連結（無閱讀模式）",
      "请输入切换左侧章节列表的快捷键：": "請輸入切換左側章節列表的熱鍵：",
      "详见脚本代码的 Rule.specialSite": "詳見腳本代碼的 Rule.specialSite",
      "booklink.me 点击的网站强制启用": "booklink.me 點擊的網站強制啟用",
      "部分选项需要刷新页面才能生效": "部份選項需重新載入頁面才能生效",
      "取消本次设定，所有选项还原": "取消本次設定，所有選項還原",
      "不影响 booklink.me 的启用": "不影響 booklink.me 的啟用",
      "请输入打开设置的快捷键：": "請輸入開啟設定視窗的熱鍵：",
      "微软雅黑,宋体,黑体,楷体": "Microsoft YaHei,新細明體,PMingLiU,MingLiU,細明體,標楷體",
      "夜间模式的图片章节检测": "夜間模式的圖片章節檢測",
      "点击显示隐藏章节列表": "點此以顯示或隱藏章節列表",
      "添加下一页到历史记录": "加入下一頁到歷史記錄",
      "booklink 自动启用": "booklink 自動啟用",
      "Enter 键打开目录": "Enter 鍵開啟目錄",
      "隐藏左侧章节列表": "隱藏左側章節列表",
      "小说阅读脚本设置":"小說閱讀腳本設定",
      "已到达最后一页": "已到達最後一頁",
      "正在载入下一页": "正在載入下一頁",
      "通过快捷键切换": "通過熱鍵切換",
      "隐藏底部导航栏": "隱藏底部導航列",
      "隐藏左侧导航条": "隱藏左側章節列表彈出鈕",
      "主页链接没有找到": "未找到主頁連結",
      "自定义站点规则": "自訂網站規則",
      "自定义替换规则": "自訂字詞取代規則",
      "网页：转繁体": "網頁：轉繁體",
      "双击暂停翻页": "雙擊暫停翻頁",
      "隐藏设置按钮": "隱藏設定按鈕",
      "强制手动启用": "強制手動啟用",
      "调用阅读器": "調用閱讀器",
      "自定义样式": "自訂樣式",
      "界面语言": "介面語言",
      "打开目录": "開啟本書目錄頁",
      "自动翻页": "自動翻頁",
      "缺省皮肤": "預設佈景",
      "暗色皮肤": "暗色佈景",
      "夜间模式": "夜間模式",
      "夜间模式1": "夜間模式1",
      "夜间模式2": "夜間模式2",
      "橙色背景": "橙色背景",
      "绿色背景": "綠色背景",
      "绿色背景2": "綠色背景2",
      "蓝色背景": "藍色背景",
      "棕黄背景": "棕黃背景",
      "经典皮肤": "經典背景",
      "阅读模式": "閱讀模式",
      "调试模式": "偵錯模式",
      "反馈地址": "反饋與討論",
      "安静模式": "安靜模式",
      "√ 确认": "√ 確定",
      "X 取消": "X 取消",
      "上一页": "上一頁",
      "下一页": "下一頁",
      "状态": "狀態",
      "已经": "已經",
      "暂停": "暫停",
      "启用": "啟用",
      "退出": "離開",
      "测试": "測試",
      "距离": "距離",
      "加载": "載入",
      "字体": "字型",
      "行高": "行距",
      "行宽": "版面寬度",
      "目录": "目錄"
  };

  if(!String.prototype.uiTrans){
      Object.defineProperty(String.prototype, 'uiTrans', {
          value: function(){
              var _this = this.valueOf(), key, regexp;
              if(config.lang !== 'zh-TW') return _this;

              if(uiTrans.hasOwnProperty(_this)) return uiTrans[_this];

              for (key in uiTrans) {
                  regexp = new RegExp(key, 'g');
                  _this = _this.replace(regexp, uiTrans[key]);
              }
              return _this;
          },
          enumerable: false
      });
  }

  // 参考 https://github.com/madrobby/zepto/blob/master/src/detect.js

  const ua = navigator.userAgent;
  const platform = navigator.platform;

  const isFirefox = ua.match(/Firefox\/([\d.]+)/);

  const isChrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);

  const isWindows = /Win\d{2}|Windows/.test(platform);

  //------------------- 辅助函数 ----------------------------------------

  var nullFn = function() {};

  // @require https://greasyfork.org/scripts/2599-gm-2-port-function-override-helper/code/GM%202%20port%20-%20Function%20Override%20Helper.js?version=184155
  // Check if is GM 2.x
  if (typeof window.exportFunction == 'undefined') {
      // For GM 1.x backward compatibility, should work.
      window.exportFunction = (function(foo, scope, defAs) {
          scope[defAs.defineAs] = foo;
      }).bind(unsafeWindow);
  }

  var C;

  function toggleConsole(debug) {
      if (debug) {
          C = console;
      } else {
          C = {
              log: nullFn,
              debug: nullFn,
              error: console.error,
              warn: console.warn,
              group: nullFn,
              groupCollapsed: nullFn,
              groupEnd: nullFn,
              time: nullFn,
              timeEnd: nullFn,
          };
      }
  }

  function L_getValue(key) { // 个别用户禁用本地存储会报错
      try {
          return localStorage.getItem(key);
      } catch (e) {}
  }

  function L_setValue(key, value) {
      try {
          localStorage.setItem(key, value);
      } catch (e) {}
  }

  function L_removeValue(key) {
      try {
          localStorage.removeItem(key);
      } catch (e) {}
  }


  function parseHTML(str) {
      var doc;
      try {
          // firefox and chrome 30+，Opera 12 会报错
          doc = new DOMParser().parseFromString(str, "text/html");
      } catch (ex) {}

      if (!doc) {
          doc = document.implementation.createHTMLDocument("");
          doc.querySelector("html").innerHTML = str;
      }
      return doc;
  }

  const _regexCache = {};

  function toRE(obj, flag = 'igm') {
      if (obj instanceof RegExp) {
          return obj;
      } else if (_regexCache[obj] && _regexCache[obj][flag]) {
          const re = _regexCache[obj][flag];
          re.lastIndex = 0;
          return re
      } else if (!_regexCache[obj]) {
          const re = new RegExp(obj, flag);
          _regexCache[obj] = { [flag]: re };
          return re
      } else if (!_regexCache[obj][flag]) {
          const re = new RegExp(obj, flag);
          _regexCache[obj][flag] = re;
          return re
      }
  }

  function toReStr(str) {  // 处理字符串，否则可能会无法用正则替换
      return str.replace(/[()\[\]{}|+.,^$?\\*]/g, "\\$&");
  }

  function wildcardToRegExpStr(urlstr) {
      if (urlstr.source) return urlstr.source;
      var reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, function(str){
          return str === "*" ? ".*" : "[^/]*";
      });
      return "^" + reg + "$";
  }

  function getUrlHost(url) {
      var a = document.createElement('a');
      a.href = url;
      return a.host;
  }

  function sleep(timeout) {
      return new Promise(resolve => setTimeout(resolve, timeout))
  }

  // 等待 DOMContentLoaded 事件触发
  function DOMContentLoaded(){
      return new Promise(resolve => $(resolve))
  }

  // GM_xmlhttpRequest Promise 版
  function Request(options) {
      return new Promise((resolve, reject) => {
          options.onerror = options.ontimeout = reject;
          options.onload = resolve;
          GM_xmlhttpRequest(options);
      })
  }

  // https://stackoverflow.com/a/4232971
  // 删除包裹着文本的标签
  function unwrapTag(doc, tagName) {
      const tags = doc.getElementsByTagName(tagName);

      while (tags.length) {
          var parent = tags[0].parentNode;
          while (tags[0].firstChild) {
              parent.insertBefore(tags[0].firstChild, tags[0]);
          }
          parent.removeChild(tags[0]);
      }
      doc.normalize();
  }

  // https://stackoverflow.com/a/4399718
  // 获取所有文本节点
  function getTextNodesIn(node, includeWhitespaceNodes) {
      var textNodes = [],
          nonWhitespaceMatcher = /\S/;

      function getTextNodes(node) {
          if (node.nodeType == 3) {
              if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
                  textNodes.push(node);
              }
          } else {
              for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                  getTextNodes(node.childNodes[i]);
              }
          }
      }
      node.normalize();
      getTextNodes(node);
      return textNodes
  }


  // 模板
  $.nano = function(template, data) {
      return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
          var keys = key.split("."),
              v = data[keys.shift()];
          try {
              for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
          } catch (e) {}
          return (typeof v !== "undefined" && v !== null) ? v : "";
      });
  };

  // jQuery text 完全匹配. e.g. a:econtains('最新章节')
  $.expr[":"].econtains = function(obj, index, meta, stack) {
      return (obj.textContent || obj.innerText || $(obj).text() || "").toLowerCase() == meta[3].toLowerCase();
  };

  /* jshint ignore: start */

  function $x(aXPath, aContext) {
      var nodes = [];
      var doc = document;
      aContext = aContext || doc;

      try {
          var results = doc.evaluate(aXPath, aContext, null,
              XPathResult.ANY_TYPE, null);
          var node;
          while (node = results.iterateNext()) {
              nodes.push(node);
          }
      } catch (ex) {}

      return nodes;
  }

  if (typeof String.prototype.startsWith != 'function') {
      String.prototype.startsWith = function(str) {
          return this.slice(0, str.length) == str;
      };
  }

  if (typeof String.prototype.endsWith != 'function') {
      String.prototype.endsWith = function(str) {
          return this.slice(-str.length) == str;
      };
  }

  if (!String.prototype.includes) {
      String.prototype.includes = function(search, start) {
          if (typeof start !== 'number') {
              start = 0;
          }
          if (start + search.length > this.length) {
              return false;
          } else {
              return this.indexOf(search, start) !== -1;
          }
      };
  }


  /*
   * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
   */
  jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return -d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return (b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return (b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return -d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return (b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return (b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return -d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return -d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return -d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return (b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c)},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:2==(b/=e/2)?c+d:(g||(g=e*.3*1.5),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return (b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});

  /* jshint ignore: end */

  // import UI from './UI'

  var getBooleanConfig = function(configName, defaultValue) {
      var config = GM_getValue(configName);
      if(config === undefined) {
          GM_setValue(configName, defaultValue);
          config = defaultValue;
      }
      return config;
  };

  const Setting = {
      // getDisableAutoLaunch: function() {  // 强制手动启用模式
      //     return getBooleanConfig("disable_auto_launch", false);
      // },
      // setDisableAutoLaunch: function(bool) {
      //     GM_setValue("disable_auto_launch", bool);
      // },

      // 按键调用会遇到问题： Greasemonkey 访问违规：unsafeWindow 无法调用 GM_getValue
      // 故改成这种形式
      copyCurTitle: getBooleanConfig("copyCurTitle", true),
      setCopyCurTitle: function (bool) {
          this.copyCurTitle = !!bool;
          GM_setValue("copyCurTitle", !!bool);
      },

      // get cn2tw() {
      //     if (_.isUndefined(this._cn2tw)) {
      //         this._cn2tw = getBooleanConfig('cn2tw', this.lang === 'zh-TW' ? true : false);
      //     }
      //     return this._cn2tw;
      // },
      // set cn2tw(bool) {
      //     GM_setValue('cn2tw', bool);
      //     this._cn2tw = bool;
      // },

      get booklink_enable() {  // booklink.me 跳转的自动启动
          return getBooleanConfig("booklink_enable", true);
      },
      set booklink_enable(bool) {
          GM_setValue("booklink_enable", bool);
      },

      get debug() {  // 调试
          if (_.isUndefined(this._debug)) {
              this._debug = getBooleanConfig("debug", false);
          }
          return this._debug;
      },
      set debug(bool) {
          this._debug = bool;
          GM_setValue("debug", bool);
          toggleConsole(bool);
      },

      get addToHistory() {
          if (_.isUndefined(this._addToHistory)) {
              this._addToHistory = getBooleanConfig("add_nextpage_to_history", true);
          }
          return this._addToHistory;
      },
      set addToHistory(bool) {
          this._addToHistory = bool;
          GM_setValue("add_nextpage_to_history", bool);
      },

      get dblclickPause() {
          return getBooleanConfig('dblclick_pause', true);
      },
      set dblclickPause(bool) {
          GM_setValue('dblclick_pause', bool);
      },

      get remain_height() {  // 距离底部多少高度（px）开始加载下一页
          if(_.isUndefined(this._remain_height)){
              this._remain_height = parseInt(GM_getValue("remain_height"), 10) || 400;
          }
          return this._remain_height;
      },
      set remain_height(val) {
          this._remain_height = val;
          GM_setValue("remain_height", val);
      },

      get lang() {
          if (_.isUndefined(this._lang)) {
              this._lang = GM_getValue("lang") || ((navigator.language === "zh-TW" || navigator.language === "zh-HK") ? "zh-TW" : "zh-CN");
          }
          return this._lang;
      },
      set lang(val) {
          this._lang = val;
          config.lang = val;
          GM_setValue("lang", val);
      },

      get font_family() {
          return GM_getValue("font_family") || "微软雅黑,宋体,黑体,楷体".uiTrans();
      },
      set font_family(val) {
          GM_setValue("font_family", val);
      },

      get font_size() {  // 字体大小
          return GM_getValue("font_size") || "18px";
      },
      set font_size(val) {
          GM_setValue("font_size", val);
      },

      get text_line_height(){
          return GM_getValue("text_line_height") || "2em";
      },
      set text_line_height(val){
          GM_setValue("text_line_height", val);
      },

      get paragraph_height(){
          return GM_getValue("paragraph_height") || "1em";
      },
      set paragraph_height(val){
          GM_setValue("paragraph_height", val);
      },

      get content_width() {  // 内容宽度
          return GM_getValue("content_width") || "800px";
      },
      set content_width(val) {
          GM_setValue("content_width", val);
      },

      get extra_css() {
          return GM_getValue("extra_css", "");
      },
      set extra_css(val) {
          GM_setValue("extra_css", val);
      },

      get customSiteinfo() {
          return GM_getValue('custom_siteinfo', '[]');
      },
      set customSiteinfo(val) {
          GM_setValue('custom_siteinfo', val);
      },

      get customReplaceRules() {
          var rules = GM_getValue('custom_replace_rules', 'b[āà]ng=棒\n『(.)』=$1');

          return rules;
      },
      set customReplaceRules(val) {
          GM_setValue('custom_replace_rules', val);
      },

      get skin_name() {
          return GM_getValue("skin_name") || "缺省皮肤".uiTrans();
      },
      set skin_name(val) {
          GM_setValue("skin_name", val);
      },

      get menu_list_hiddden() {
          return getBooleanConfig("menu_list_hiddden", false);
      },
      set menu_list_hiddden(bool) {
          GM_setValue("menu_list_hiddden", bool);
      },

      get hide_footer_nav() {
          return getBooleanConfig("hide_footer_nav", true);
      },
      set hide_footer_nav(bool) {
          GM_setValue("hide_footer_nav", bool);
      },

      get hide_preferences_button() {
          return getBooleanConfig("hide_preferences_button", false);
      },
      set hide_preferences_button(bool) {
          GM_setValue('hide_preferences_button', bool);
      },

      // === 快捷键

      // 安静模式切换快捷键
      get quietModeKey() {
          if (this._quietModeKey) {
              return this._quietModeKey;
          }
          this._quietModeKey = GM_getValue('quietModeKey') || 'q';

          return this._quietModeKey;
      },
      set quietModeKey(keyCode) {
          this._quietModeKey = keyCode;
          GM_setValue('quietModeKey', keyCode);
      },

      // 打开设置窗口的快捷键
      get openPreferencesKey() {
          if (this._openPreferencesKey) {
              return this._openPreferencesKey;
          }
          this._openPreferencesKey = GM_getValue('open_preferences_key') || 's';

          return this._openPreferencesKey;
      },
      set openPreferencesKey(keyCode) {
          this._openPreferencesKey = keyCode;
          GM_setValue('open_preferences_key', keyCode);
      },

      // 隐藏左侧章节列表的快捷键
      get hideMenuListKey() {  // 默认为 c
          // 'C'.charCodeAt(0) = 67
          if (this._hideMenuListKey) {
              return this._hideMenuListKey;
          }
          this._hideMenuListKey = GM_getValue('hide_menulist_key') || 'c';

          return this._hideMenuListKey;
      },
      set hideMenuListKey(key) {
          this._hideMenuListKey = key;
          GM_setValue("hide_menulist_key", key);
      },

      // 打开朗读快捷键
      get openSpeechKey() {
          return GM_getValue('openSpeechKey') || 'a';
      },
      set openSpeechKey(key) {
          GM_setValue('openSpeechKey', key);
      },

      get picNightModeCheck() {
          return getBooleanConfig('picNightModeCheck', true);
      },
      set picNightModeCheck(bool) {
          GM_setValue('picNightModeCheck', bool);
      },

      get split_content() {
          if (_.isUndefined(this._split_content)) {
              this._split_content = GM_getValue('split_content', false);
          }
          return this._split_content;
      },
      set split_content(bool) {
          this._split_content = bool;
          GM_setValue('split_content', bool);
      },

      get scrollAnimate() {
          return GM_getValue('scrollAnimate', false);
      },
      set scrollAnimate(bool) {
          GM_setValue('scrollAnimate', bool);
      },

      get launchMode() { // 记忆 memory 自动 auto 手动 manual
          return GM_getValue('launchMode', 'memory');
      },
      set launchMode(value) {
          GM_setValue('launchMode', value);
      },

      get preloadNextPage() {
          return GM_getValue('preloadNextPage', true);
      },
      set preloadNextPage(bool) {
          GM_setValue('preloadNextPage', bool);
      },

      get chineseConversion() {
          return GM_getValue('chineseConversion', this.lang === 'zh-TW' ? 'to-tw' : 'disable');
      },
      set chineseConversion(value) {
          GM_setValue('chineseConversion', value);
      },

      // 内容标准化
      get contentNormalize() {
          return GM_getValue('contentNormalize', true);
      },
      set contentNormalize(bool) {
          GM_setValue('contentNormalize', bool);
      },

      // 合并双引号中的多行内容
      get mergeQoutesContent() {
          return GM_getValue('mergeQoutesContent', false);
      },
      set mergeQoutesContent(bool) {
          GM_setValue('mergeQoutesContent', bool);
      },

      // 快速启动
      get fastboot() {
          return GM_getValue('fastboot', false)
      },
      set fastboot(bool) {
          GM_setValue('fastboot', bool);
      },

      // 删除含网站域名行
      get removeDomainLine() {
          return GM_getValue('removeDomainLine', true);
      },
      set removeDomainLine(bool) {
          GM_setValue('removeDomainLine', bool);
      }
  };

  function getMiddleStr(str, leftStr, rightStr) {
      var leftIndex = str.indexOf(leftStr) + leftStr.length;
      var rightIndex = str.indexOf(rightStr, leftIndex);
      if (leftIndex > -1 && rightIndex > -1) {
          return str.substring(leftIndex, rightIndex)
      } else {
          return ''
      }
  }

  // https://greasyfork.org/scripts/425673-%E6%99%8B%E6%B1%9F%E6%96%87%E5%AD%A6%E5%9F%8E%E9%98%B2%E7%9B%97%E5%AD%97%E7%AC%A6%E8%A7%A3%E7%A0%81/code/%E6%99%8B%E6%B1%9F%E6%96%87%E5%AD%A6%E5%9F%8E%E9%98%B2%E7%9B%97%E5%AD%97%E7%AC%A6%E8%A7%A3%E7%A0%81.js?version=987740

  async function replaceJjwxcCharacter(fontName, inputText) {
    let outputText = inputText;
    const jjwxcFontTable = await getJjwxcFontTable(fontName);
    if (jjwxcFontTable) {
      for (const jjwxcCharacter of Object.keys(jjwxcFontTable)) {
        const normalCharacter = jjwxcFontTable[jjwxcCharacter];
        outputText = outputText.replaceAll(jjwxcCharacter, normalCharacter);
      }
      outputText = outputText.replaceAll('\u200c', '');
    }
    return outputText
  }

  async function getJjwxcFontTable(fontName) {
    return await fetchRemoteFont(fontName)
  }

  async function fetchRemoteFont(fontName) {
    const url = `https://jjwxc.bgme.bid/${fontName}.json`;
    const options = { url, method: 'GET' };
    let retry = 3;
    let resp;

    C.info(`[jjwxc-font]开始请求远程字体对照表 ${fontName}`);

    while (retry--) {
      try {
        resp = await Request(options);
        break
      } catch (e) {
        await sleep(3000);
        C.error(e);
      }
    }

    if (!resp || resp.status !== 200) {
      C.info(`[jjwxc-font]远程字体对照表 ${fontName} 下载失败`);
      return
    }

    try {
      const table = JSON.parse(resp.responseText);
      C.info(`[jjwxc-font]远程字体对照表 ${fontName} 下载成功`);
      return table
    } catch (error) {
      C.error(error);
      C.info(`[jjwxc-font]远程字体对照表 ${fontName} 下载失败`);
    }
  }

  // ===== 自定义站点规则 =====

  /**@typedef { import("../../typings/MyNovelReader").SiteConfigs } SiteConfigs */

  /**@type {SiteConfigs} */
  const sites = [
    // 详细版规则示例。注：该网站已无法访问。
    {siteName: "泡书吧",                                               // 站点名字... (可选)
        url: "^https?://www\\.paoshu8\\.net/Html/\\S+\\.shtm$",          // // 站点正则... (~~必须~~)

        // 获取标题
        titleReg: /(.*?)最新章节 [-_\\\/](.*?)[-_\/].*/,         // 书籍标题、章节标题正则 (可选)
        titlePos: 0,                                          // 书籍标题位置：0 或 1 (可选，默认为 0)
        titleSelector: "#title h1",

        indexSelector: "a:contains('回目录')",                    // 首页链接 jQuery 选择器 (不填则尝试自动搜索)
        prevSelector: "a:contains('翻上页')",                      // 上一页链接 jQuery 选择器 (不填则尝试自动搜索)
        nextSelector: "a:contains('翻下页')",                     // 下一页链接 jQuery 选择器  (不填则尝试自动搜索)

        // nDelay: 500,  // 延迟0.5秒加载下一页
        // style: '',  // 站点样式

        // 获取内容
        contentSelector: "#BookText",                             // 内容 jQuery 选择器 (不填则尝试自动搜索)
        useiframe: false,                                          // (可选)下一页加载是否使用 iframe
        // mutationSelector: "#chaptercontainer",                    // (可选)内容生成监视器
        // 对内容的处理
        contentHandle: false,   // (可选)是否对内容进行特殊处理，诸如拼音字修复等，诸如起点等网站可禁用
        fixImage: true,         // (可选)，图片居中，不分大小
        contentReplace: /(\*W|（w|\(w).{10,25}(吧\*|）|\))|看小说就上|本书首发|泡.{1,6}吧|百度搜索阅读最新最全的小说|http:\/\/www.paoshu8.com\/|无弹窗/g,                                // 需要移除的内容正则 (可选)
        contentPatch: function(fakeStub){                          // (可选)内容补丁。解决翻页是脚本的情况
            var $next = fakeStub.find('#LinkMenu');
            $next.html($next.html().replace(/<script>ShowLinkMenu.*?(<a.*?a>).*?(<a.*?a>).*?script>/,'$1$2') +
                '<a href=\'List.shtm\'>回目录</a>');
        }
    },
    {siteName: '起点新版-阅文',
      url: '^https?://(?:read|vipreader)\\.qidian\\.com/chapter/.*',
      exclude: ' /lastpage/',
      bookTitleSelector: '#bookImg',
      titleSelector: 'h3.j_chapterName',

      prevSelector: '#j_chapterPrev',
      nextSelector: '#j_chapterNext',
      indexSelector: '.chapter-control a:contains("目录"), #my_index',
      // indexSelector: function(obj) {
      //     var url = obj.find(".chapter-control a:contains('目录')").attr('href');
      //     return url;
      // },

      contentSelector: '.read-content.j_readContent',
      // contentHandle: false,
      contentRemove: '',
      // fastboot: true,
      contentReplace: [
          '手机用户请到m.qidian.com阅读。',
          '起点中文网www.qidian.com欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在起点原创！.*'
      ],
      isVipChapter: function($doc) {
          if ($doc.find('.vip-limit-wrap').length) {
              return true;
          }
      },
      contentPatch: function($doc) {
          // 移除本章说评论数气泡
          $doc.find('.review-count').remove();

          // $doc.find('.content-wrap').contents().unwrap()

          // $doc.find('.read-content.j_readContent style').remove()

          // const cId = $doc.find('.read-content.j_readContent').attr('id').slice(2)
          // const style = $doc.find('link[href^=blob]').attr('class', 'noRemove')

          // if (style.length) {
          //     this.$content = $doc.find('.read-content.j_readContent')
          //         .prepend($(`<style>
          //         #j_${cId} p[class^='p'] {
          //             display: flex;
          //             display: -ms-flexbox;
          //             flex-wrap: wrap;
          //             align-items: flex-end;
          //         }
          //         #j_${cId} p {
          //             line-height: 1.8;
          //             overflow: hidden;
          //             margin: 0.8em 0;
          //         }</style>`))
          //         .prepend(style)
          //         .wrapInner(`<div id="j_${cId}">`)
          // }

          const { vipStatus } = g_data.data.chapterInfo;
          const { nextVipStatus } = g_data.data.chapterInfo.extra;

          if (vipStatus === 0 && nextVipStatus === 1) {
              this.info.useiframe = true;
              this.info.mutationSelector = '.read-content.j_readContent';
              this.info.mutationChildCount = 0;
          }

              // 滚屏的方式无法获取下一页
              if ($doc.find('#j_chapterPrev').length === 0) {
                  var $node = $doc.find('div[id^="chapter-"]');
                  const prevUrl = $node.attr('data-purl').replace("www", "read");
                  const nextUrl = $node.attr('data-nurl').replace("www", "read");
                  // 加上一页链接
                  $('<div id="j_chapterPrev">')
                      .attr('href', prevUrl)
                      .appendTo($doc.find('body'));
                  // 加下一页链接
                  $('<div id="j_chapterNext">')
                      .attr('href', nextUrl)
                      .appendTo($doc.find('body'));
                  // 目录
                  var indexUrl = $('#bookImg').attr('href') + '#Catalog';
                  $('<div id="my_index">目录</div>')
                      .attr('href', indexUrl)
                      .appendTo($doc.find('body'));
              }
          },
          startLaunch($doc) {
              const win = $doc[0].defaultView;
              if (win.g_data.chapter.vipStatus === 1) { // 是 vip 章节
                  this.useiframe = true;
                  this.mutationSelector = '.read-content.j_readContent';
                  this.mutationChildCount = 0;
              }
              if (win.g_data.chapter.cES === 2) { // vip 加密 + Html、Css 混淆章节
                  // 不支持
                  this.contentSelector = "";
                  this.isVipChapter = () => true;
                  // this.useRawContent = true;
                  // this.cloneNode = true;
              }
          },
      },
      {
          siteName: "起点新版-20230517",
          url: "^https?://(www|m)\\.qidian\\.com/chapter/.*",

          //bookTitleSelector: ".bookTitle",
          titleReg: "(.*?)《(.*?)》(.*?)",
          titlePos: 1,
          titleSelector: "h1.text-1\\.3em",

          prevSelector: '.prev_chapter',
          nextSelector: '.next_chapter',
          indexSelector: '.catalog',

          useiframe: true,
          contentSelector: '.content',
          mutationSelector: 'main.content',
          mutationChildCount: 0,

          isVipChapter($doc) {
              const json = $doc.find('#vite-plugin-ssr_pageContext').text();
              const { pageContext } = JSON.parse(json);
              const { vipStatus, isBuy } = pageContext.pageProps.pageData.chapterInfo;
              if (vipStatus && !isBuy) {
                  return true
              }
          },

          contentPatch($doc) {
              $doc.find('.review').remove();

              const json = $doc.find('#vite-plugin-ssr_pageContext').text();
              const { pageContext } = JSON.parse(json);
              const { next, prev, vipStatus } = pageContext.pageProps.pageData.chapterInfo;
              // const { nextVipStatus } = pageContext.pageProps.pageData.chapterInfo.extra
              // if (vipStatus === 0 && nextVipStatus === 1) {
              //     this.info.useiframe = true;
              // }
              const { bookId } = pageContext.pageProps.pageData.bookInfo;

              const $body = $doc.find("body");
              const chapterUrl = `/chapter/${bookId}/`;
              const catalogUrl = `/book/${bookId}/catalog/`;
              const prevUrl = prev !== -1 ? `${chapterUrl}${prev}/` : '';
              const nextUrl = next !== -1 ? `${chapterUrl}${next}/` : '';
              $('<div class="catalog">').attr("href", catalogUrl).appendTo($body);
              $('<div class="prev_chapter">').attr("href", prevUrl).appendTo($body);
              $('<div class="next_chapter">').attr("href", nextUrl).appendTo($body);
         },

          startLaunch($doc) {
              const json = $doc.find('#vite-plugin-ssr_pageContext').text();
              const { pageContext } = JSON.parse(json);
              const { chapterInfo } = pageContext.pageProps.pageData;

              if (chapterInfo.cES === 2) { // vip 加密 + Html、Css 混淆章节
                  // 不支持
                  this.isVipChapter = () => true;
              }
          },

      },

    {siteName: "创世中文网",
        url: "^https?://(?:chuangshi|yunqi)\\.qq\\.com/|^http://dushu\\.qq\\.com/read.html\\?bid=",
        bookTitleSelector: '.bookNav > a:last()',
        titleSelector: '.story_title > h1',

        nextSelector: '#rightFloatBar_nextChapterBtn',
        prevSelector: '#rightFloatBar_preChapterBtn',
        indexSelector: function() {
            var m = location.href.match(/\/bk\/\w+\/(.*?)-r-\d+.html/);
            if (m) {
                return 'http://chuangshi.qq.com/bk/ls/' + m[1] + '-l.html';
            } else {
                return 'http://chuangshi.qq.com/bk/ls/' + unsafeWindow.bid + '-l.html';
            }
        },

        contentSelector: ".bookreadercontent",
        contentHandle: false,
        mutationSelector: "#chaptercontainer",  // 内容生成监视器，第一次运行用到，以后用下面的 getContent 函数
            mutationChildCount: 1,
        useSiteFont: true,
        startFilter: function() {
            // 下一页需要提前加 1
            unsafeWindow.uuid = parseInt(unsafeWindow.uuid) + 1 + '';
        },
        getContent: function($doc, callback) {  // this 指 parser
            function _getReadPageUrl(uuid) {
                if (!uuid) {
                    return 'javascript:void(0);';
                }
                var url = location.href.replace(/[?|#].*/gi, '');
                return url.replace(/(\d)+\.html/, uuid + '.html');
            }

            function getPageUrlHtml(preChapterUUID, nextChapterUUID) {
                var preReadUrl = _getReadPageUrl(preChapterUUID),
                    nextReadUrl = _getReadPageUrl(nextChapterUUID);

                return '<a id="rightFloatBar_preChapterBtn" href="' + preReadUrl + '">上一页</a>' +
                        '<a id="rightFloatBar_nextChapterBtn" href="' + nextReadUrl + '">下一页</a>' + '\n';
            }

            var done = function (data) {
                unsafeWindow.uuid = data.nextuuid;  // 给下一页用

                callback({
                    html: getPageUrlHtml(data.preuuid, data.nextuuid) + data.Content
                });
            };
            exportFunction(done, unsafeWindow, { defineAs: "gm_mnr_cs_callback" });

            unsafeWindow.CS.page.read.main.getChapterContent(unsafeWindow.bid, unsafeWindow.uuid,
                unsafeWindow.gm_mnr_cs_callback);
        },
    },
    {siteName: "纵横中文网",
        url: "^https?://book\\.zongheng\\.com/\\S+\\/\\d+\\.html$",
        contentHandle: false,
        // titleReg: "(.*?)-(.*)",
        titleSelector: "em[itemprop='headline']",
        bookTitleSelector: ".tc h2",
        contentSelector: '#readerFt',
        contentPatch: function(fakeStub){
            fakeStub.find('.watermark').remove();
            // 给第几章添加空格
            var chapterTitle = fakeStub.find(".tc > h2").text();
            var chapterTitle1 = fakeStub.find(".tc > h2 em").text();
            if(chapterTitle1) {
                chapterTitle = chapterTitle.replace(chapterTitle1, " ") + chapterTitle1;
            }
            fakeStub.find("title").text(
                fakeStub.find(".tc > h1").text() + "-" + chapterTitle
            );
        }
    },

      {siteName: "纵横中文网",
          url: "https?://read\\.zongheng\\.com/chapter/\\d+\\/\\d+\\.html",
          exampleUrl: 'https://read.zongheng.com/chapter/1251858/72302352.html',

          titleSelector: ".title_txtbox",
          contentSelector: '.content',

          contentPatch($doc) {
              $doc.find('.Jfcounts').remove();
          }
      },

    {siteName: "晋江文学网",
        url: /^https?:\/\/(www|my)\.jjwxc\.net\/onebook(|_vip)\.php\S*/,
        titleReg: /《(.*?)》.*[ˇ^](.*?)[ˇ^].*/,
        titlePos: 0,
      //   titleSelector: 'h2',
        titleSelector: '#chapter_list > option:first',
        // bookTitleSelector: 'h1 .bigtext',
        indexSelector: ".noveltitle > h1 > a",
        contentSelector: '.novelbody',
        contentHandle: false,
        contentRemove: 'font[color], hr',
        contentPatchAsync: async function ($doc) {
            // 移除 h2 的标题
            $doc.find('div:has(>#yrt3)').remove();
            $doc.find('div:has(>h2)').remove();
            $doc.find('#six_list, #sendKingTickets').parent().remove();
            $doc.find("div.noveltext").find("div:first, h1").remove();

            $doc.find("div[align=right], .readsmall").remove();
            $doc.find("script").remove();

            // 移除VIP章节方块
            var $node = $doc.find('.noveltext');
            if ($node.attr("class").split(/\s+/).length === 2) {
                var fontName = $node.attr("class").split(/\s+/)[1];
                const html = await replaceJjwxcCharacter(fontName, $node.html());
                $node.html(html);
            }
        },
        contentReplace: [
            '@无限好文，尽在晋江文学城'
        ],
        startLaunch($doc) {
          const win = $doc[0].defaultView;
          if (win.location.href.includes('onebook_vip')) { // vip 章节
              this.useiframe = true;
              this.mutationSelector = 'div[id^=content]';
              this.mutationChildCount = 0;
              this.iframeSandbox = 'allow-same-origin allow-scripts';
          }
      }
    },
    {siteName: '晋江文学城_手机版',
        url: '^https?://(?:wap|m)\\.jjwxc\\.(?:net|com)/(?:book2|vip)/\\d+/\\d+',
        titleReg: /《(.*?)》.*[ˇ^](.*?)[ˇ^].*/,
        titlePos: 0,
        titleSelector: 'h2',
        contentSelector: 'div.grid-c > div > .b.module > div:first',
    },
    {siteName: "潇湘书院",
        url: "^https?://www\\.xxsy\\.net/chapter/.*\\.html",
        titleReg: "(.*?)_(.*)_全文阅读",
        nextSelector: ".chapter-next",
        indexSelector: '.bread > a:last()',
        contentSelector: "#auto-chapter",
        contentHandle: false,
        contentReplace: "本书由潇湘书院首发，请勿转载！",
    },
    {siteName: "逐浪",
        url: /^https?:\/\/book\.zhulang\.com\/.*\.html/,
        titleReg: /(.*?)-(.*)/,
        contentSelector: "#readpage_leftntxt",
        contentHandle: false,
        contentPatch: function(fakeStub){
            var title = fakeStub.find(".readpage_leftnzgx a:first").text() + "-" +
                fakeStub.find(".readpage_leftntit").text();
            fakeStub.find('title').html(title);
        }
    },
    {siteName: "小说阅读网",
        url: "^https?://www\\.readnovel\\.com/novel/.*\\.html",
        titleSelector: ".bgtop > h1",
        bookTitleSelector: ".nownav > a:eq(4)",
        contentSelector: "#article, .zhangjie",
        contentRemove: "div[style], .miaoshu, .zhichi, .bottomAdbanner",
        contentPatch: function(fakeStub) {
            // 删除标题不需要的部分
            fakeStub.find(".bgtop > h1 > span").remove();
        }
    },
    {siteName: "百度贴吧（手动启用）",
        enable: false,
        url: /^https?:\/\/tieba\.baidu.com\/p\//,
        titleSelector: "h1.core_title_txt",
        bookTitleSelector: ".card_title_fname",
        nextSelector: false,
        indexSelector: 'a.card_title_fname',
        prevSelector: false,

        contentSelector: "#j_p_postlist",
        contentRemove: "#sofa_post, .d_author, .share_btn_wrapper, .core_reply, .j_user_sign",
        style: ".clear { border-top:1px solid #cccccc; margin-bottom: 50px; visibility: visible !important;}",  // 显示楼层的分割线
    },
    {siteName: "17k小说网",
        url: /^https?:\/\/\S+\.17k\.com\/chapter\/\S+\/\d+\.html$/,
        titleReg: /(.*?)-(.*?)-.*/,
        contentSelector: "#chapterContent",
        contentRemove: ".chapter_update_time, h1, .qrcode, #authorSpenk, .like_box, #hotRecommend, .ct0416, .recent_read, #miniVoteBox, .copy",
    },
    {siteName: "塔读文学",
        url: "^https?://www\\.tadu\\.com/book/\\d+/\\d+/?",
        bookTitleSelector: '.chapter_details > span',
        bookTitleReplace: '书名：',
        titleSelector: 'h4',
        useiframe: true,
      //   nDelay: 2000,  // 延迟2秒加载下一页
        contentSelector: "#partContent",
        mutationSelector: "#partContent",
        mutationChildCount: 0,
      //   contentPatch: function(fakeStub){
      //       var m = fakeStub.find("body").html().match(/\.html\(unescape\("(.*)"\)/);
      //       if(m){
      //           var unescapeContent = m[1];
      //           fakeStub.find("#partContent").html(unescape(unescapeContent));
      //       }
      //   }
    },

    {siteName: "SF 轻小说",
        url: '^https?://book.sfacg.com/Novel/\\d+/\\d+/\\d+/',
        exampleUrl: 'https://book.sfacg.com/Novel/601991/795722/7137683/',
        titleReg: '(.*?)-(.*?)-.*',
        contentSelector: '#ChapterBody',
    },

    // === 内容补丁
  //   {siteName: "给力文学小说阅读网",
  //       url: "^https?://www\\.geiliwx\\.com/.*\\.shtml",
  //       titleReg: "-?(.*)_(.*)最新章节_给力",
  //       titlePos: 1,
  //       contentRemove: 'h1, font[color], center',
  //       contentReplace: [
  //           "网站升级完毕！感谢对给力文学网的支持！",
  //           "（百度搜索给力文学网更新最快最稳定\\)",
  //           "【sogou,360,soso搜免费下载小说】",
  //           "\\[乐\\]\\[读\\]小说.２3.[Ｃc]m",
  //           "给力文学网",
  //           "看最快更新",
  //           "小说网不跳字",
  //           "\\.com",
  //           "BAIDU_CLB_fillSlot\\(.*",
  //           "--小-说-www-23wx-com",
  //           "&nbsp;&nbsp;，请",
  //           '\\.www\\.GEILIWX开心阅读每一天',
  //       ],
  //       contentPatch: function(d) {
  //           if (!d.find('#content').length) {
  //               var html = d.find('body').html();
  //               var content = html.match(/<!--go-->([\s\S]*?)<!--over-->/i)[1];

  //               content = $('<div id="content">').html(content);
  //               if (content.find('#adright').size()) {
  //                   content = content.find('#adright');
  //               }
  //               content.appendTo(d.find('body'));
  //           }
  //       }
  //   },

    // ================== 采用 iframe 方式获取的 ====================
  //   {siteName: "16K小说网",
  //       url: "^https?://www\\.16kbook\\.org/Html/Book/\\d+/\\d+/\\d+\\.shtml$",
  //       titleReg: '(\\S+) (.*)- 16K小说网',
  //       useiframe: true,
  //       contentRemove: '.bdlikebutton',
  //       contentReplace: {
  //           '(<center>)?<?img src..(http://www.16kbook.org)?(/tu/\\S+\\.jpg).(>| alt."\\d+_\\d+_\\d*\\.jpg" />)(</center>)?': "$3",
  //           "/tu/shijie.jpg":"世界", "/tu/xiangdao.jpg":"想到", "/tu/danshi.jpg":"但是", "/tu/huilai.jpg":"回来", "/tu/yijing.jpg":"已经", "/tu/zhende.jpg":"真的", "/tu/liliang.jpg":"力量", "/tu/le.jpg":"了", "/tu/da.jpg":"大", "/tu/shengli.jpg":"胜利", "/tu/xiwang.jpg":"希望", "/tu/wandan.jpg":"完蛋", "/tu/de.jpg":"的",
  //           "16kbook\\s*(首发更新|小说网)": "",
  //       }
  //   },
  //   {siteName: "读读看",
  //       url: "^https?://www\\.dudukan\\.net/html/.*\\.html$",
  //       contentReplace: "看小说“就爱读书”|binhuo|www\\.92to\\.com",
  //       useiframe: true,
  //       mutationSelector: "#main",
  //       mutationChildCount: 0,
  //   },
    // 2页合并一章
  //   {siteName: "读零零（有问题，只显示一半内容）",
  //       url: "https?://www\\.du00\\.(?:com|cc)/read/\\d+/\\d+/[\\d_]+\\.html",
  //       exampleUrl: 'https://du00.com/Read/0/1/17.html',
  //       titleReg: "(.*?)(?:第\\d+段)?,(.*) - 读零零小说网",
  //       titlePos: 1,
  //       // prevSelector: "#footlink a:first",
  //       // indexSelector: "#footlink a:contains('目录')",
  //       // nextSelector: "#footlink a:last",
  //       // 内容
  //       contentSelector: "#pagecontent, .divimage",
  //       // useiframe: true,
  //       // mutationSelector: "#pagecontent",
  //       // mutationChildCount: 2,
  //       contentRemove: "font",
  //       contentReplace: [
  //           "读零零小说网欢迎您的光临.*?txt格式下载服务",
  //           "，好看的小说:|本书最新免费章节请访问。",
  //           "\\*文學馆\\*",
  //           "\\(未完待续请搜索，小说更好更新更快!",
  //           "www\\.DU00\\.com",
  //       ],
  //       checkSection: true
  //   },
    // ================== 采用 iframe 并存在 mutationSelector 的 ====================
    {siteName: '全本小说网',
      exampleUrl: 'http://www.quanben.io/n/wuxianwanxiangtongminglu/1.html',
      url: '^https?://www\\.quanben\\.io/.*?/.*?/\\d+\\.html',
      bookTitleSelector: '.name',
      useiframe: true,
      mutationSelector: "#content",  // 内容生成监视器
          // mutationChildCount: 5,
          mutationChildText: '请到 quanben.io阅读完整章节内容',
    },
    {siteName: '刺猬猫',
      exampleUrl: 'https://www.ciweimao.com/chapter/102930784',
      url: '^https?://www\\.ciweimao\\.com/chapter/\\d+',
      bookTitleSelector: '.breadcrumb > a:last()',
      useiframe: true,
      mutationSelector: "#J_BookRead",  // 内容生成监视器
          mutationChildCount: 1,
      contentSelector: '#J_BookRead',
      contentRemove: 'i.J_Num, .chapter span',
    },
    // 上下页链接难搞
    {siteName: '长佩文学网',
      exampleUrl: 'https://www.gongzicp.com/read-246381.html',
      url: '^https?://www\\.gongzicp\\.com/read-\\d+\\.html',
      bookTitleSelector: '.novel',
      useiframe: true,
      contentSelector: '.content',
      mutationSelector: '.novel',
      mutationChildCount: 2,
      contentReplace: [
          '来源长佩文学网（https://www.gongzicp.com）',
      ]
    },

    // ===========================================================
    {siteName: "E品中文网",
        url: "^https?://www\\.epzww\\.com/book/\\d+/\\d+",
        exampleUrl: 'http://www.epzww.com/book/0/1/4.html',
        titleReg: "(.*?),(.*?),",
        contentSelector: "#showcontent",
    },
    {siteName: "飘天文学",
        url: "^https?://www\\.piaotia\\.com/html/\\d+/\\d+/\\d+\\.html",
        exampleUrl: 'https://www.piaotia.com/html/15/15083/10323993.html',
        // titleReg: "(.*)最新章节,(.*),飘天文学",
        bookTitleSelector: '#content > h1 > a',
        contentSelector: "#content",
        useiframe: true,  // 否则 content 在 body 下面
        contentRemove: "h1, table, .toplink",
        contentReplace: [
            /[{〖]请在百度搜索.*[}〗]|.(?:百度搜索飄天|无弹窗小说网).*\.Net.|\[飄天.*无弹窗小说网\]/ig,
            '\\{飘天文学www.piaotian.net感谢各位书友的支持，您的支持就是我们最大的动力\\}',
            '章节更新最快',
            '支持网站发展，逛淘宝买东西.*',
            '天才壹秒記住，為您提供精彩閱讀。.*'
        ],
    },
    {siteName: "努努书坊",
        url: "^https?://(?:book\\.kanunu\\.org|www\\.kanunu8\\.com)/.*/\\d+\\.html",
        exampleUrl: 'https://www.kanunu8.com/book3/7748/170164.html',
        titleReg: /(.*) - (.*) - 小说在线阅读 - .* - 努努书坊/,
        titlePos: 1,
        contentSelector: "table:eq(4) p",
        indexSelector: "a[href^='./']",
        noSection: true,
    },

    {siteName: "找书苑",
        url: "^https?://www\\.zhaoshuyuan\\.com/.*/\\d+/\\d+.html.*",
        exampleUrl: 'https://www.zhaoshuyuan.com/b/174835/10801.html',
        contentReplace: [
            '找书苑\\s*[wｗ]+.[zｚ][hｈ][aａ][oｏ][sｓ][hｈ][uｕ][yｙ][uｕ][aａ][nｎ].[cｃ][oｏ][mｍ]\\s*',
        ],
    },
    {siteName: "黄金屋中文网",
        url: /tw\.hjwzw\.com\/Book\/Read\/\d+[,_]\d+$/,
        exampleUrl: 'https://tw.hjwzw.com/Book/Read/1889,577987',
        titleSelector: "h1",
        indexSelector: "td a[href='./']",
        contentSelector: "#AllySite+div",
        contentRemove: "b, b+p",
        contentReplace: [
            "请记住本站域名:"
        ]
    },

    // ===== 特殊的获取下一页链接
  //   {siteName: "看书啦",
  //       url: "^https?://www.kanshu.la/book/\\w+/\\d+\\.shtml",
  //       titleReg: "(.*)-(.*)-看书啦",
  //       titlePos: 1,
  //       nextUrl: function($doc){
  //           var html = $doc.find('script:contains(next_page = ")').html();
  //           var m = html.match(/next_page = "(.*?)";/);
  //           if (m) return m[1];
  //       },
  //       prevUrl: function($doc){
  //           var html = $doc.find('script:contains(preview_page = ")').html();
  //           var m = html.match(/preview_page = "(.*?)";/);
  //           if (m) return m[1];
  //       }
  //   },
    {siteName: '书海小说',
       url: '^https?://www\\.shuhai\\.com/read/\\d+/\\d+\\.html',
       exampleUrl: 'http://www.shuhai.com/read/110773/1.html',
       contentRemove: '.chaper-info',
       bookTitleSelector: '.tip > a:last',
       titleSelector: '.chapter-name',
       withReferer: true,
       prevSelector($doc) {
          return $doc.find("#pre").attr("data-url")
       },
       indexSelector: '.tip > a:last',
       nextSelector($doc) {
          return $doc.find("#next").attr("data-url")
       },
       contentSelector: '.chapter-item',
    },
    {siteName: "露西弗俱乐部",
      exampleUrl: 'https://www.lucifer-club.com/chapter-83716-1.html',
      url: /^https:\/\/www\.lucifer\-club\.com\/.*\.html/,
      bookTitleSelector: "#luf_local > a:nth-child(3)",

      indexSelector: '.luf_news_title > a:contains("目录")',

      contentSelector: "#luf_news_contents",
      contentHandle: false,
      contentRemove: "> form, #luf_local, .luf_top_ad, .luf_news_title, .luf_page_control, .luf_comment",
      contentReplace: [
          '保护版权 尊重作者 @ 露西弗俱乐部 www.lucifer-club.com',
      ],
    },
    {siteName: '英文小说网',
      url: '^https?://novel\\.tingroom\\.com/.*/\\d+/\\d+\\.html',

      bookTitleSelector: '.gundong1  a:nth-child(3)',
      titleSelector: '#tt_text p:nth-child(2)',

      indexSelector: ".book_showtitle",
      prevSelector: "#zhang_top",
      nextSelector: "#zhang_down",

      contentSelector: "#tt_text",
      contentRemove: "#tt_text tbody tr",
      contentReplace: [
          '欢迎访问英文小说网http://novel.tingroom.com'
      ],
    },
    {siteName: '笔趣阁 nuanyuehanxing',
      url: '^https?://www\\.nuanyuehanxing\\.cc/\\w+/\\d+/\\d+\\.html',
      exampleUrl: 'https://www.nuanyuehanxing.cc/shu/56388575/111040667.html',
      bookTitleSelector: '.bookname',
      timeout: 500,
      useiframe: true,
      contentRemove: 'a',
    },

    // 这网站为了防抓取，内容顺序都是不对的，只好采用 iframe 方式
    {siteName: '和图书',
      exampleUrl: 'http://www.hetushu.com/book/1421/964983.html',
      url: '^https?://www.hetushu.com/book/\\d+/\\d+.html',
      bookTitleSelector: '#left h3',
      nextSelector: 'a#next',
      prevSelector: 'a#pre',
      indexSelector: '#left h3 a',
      useiframe: true,
      // 后面的是 和图书 的干扰码
      contentRemove: 'h2, acronym, bdo, big, cite, code, dfn, kbd, q, s, samp, strike, tt, u, var, ins',
      contentPatch: function($doc) {
          // 转换 div 到 p
          $doc.find('#content div').each(function() {
              let html = $(this).html();
              $(this).replaceWith(
                  $('<p>').html(html)
              );
          });
      }
    },

    {siteName: "69书吧",
      // www.69shu.com
      // www.69shuba.com
      // www.69xinshu.com
      // www.69shu.pro
      // www.69shu.top
      // www.69shuba.pro
      // www.69shu.cx
      // www.69shuba.cx
      // www.69shu.me
      // www.69shuba.me
      // www.69shu.ac
      // www.69yuedu.net
      // www.69yuedu.pro
      // www.69yuedu.co
      // www.69shu.biz
      // www.69shuba.biz
      url: "https?://www.69shuba\\.com/txt/\\d+/\\d+",
      exampleUrl: "https://www.69shuba.com/txt/46867/31307961",
      // contentHandle: false,
      titleSelector: 'h1',
      contentSelector: ".txtnav",
      contentRemove: ".txtinfo.hide720, #txtright, .bottom-ad, .bottom-ad2",
      nextSelector: '.page1 a:nth-child(4)',
      prevSelector: '.page1 a:nth-child(1)',
      indexSelector: '.page1 a:nth-child(3)',
      useiframe: true,
      withReferer: true,
      },

    {siteName: "书山中文网",
      url: "https?://shushan\\.zhangyue\\.net/book/\\d+/\\d+/",
      exampleUrl: 'https://shushan.zhangyue.net/book/105835/15038074/',
      contentSelector: ".art_con",
      nextSelector: '.next-cha',
      prevSelector: '.last-cha',
      indexSelector: 'a:contains(书页)',
      },
    
    {siteName: "微信读书",
      url: "https?://weread\\.qq\\.com/web/reader/.*?",
      contentSelector: ".wr_canvasContainer",
      nextSelector: '#nextchapter',
      prevSelector: '#prevchapter',
      indexSelector: '#bookindex',
      titleSelector: '.chapterTitle',
      contentHandle: false,
      useRawContent: true, // 完全关闭 handleContentText 内容处理函数，使用原始内容
      useiframe: true,
      mutationSelector: '.wr_canvasContainer',
      mutationChildCount: 1,
      contentPatchAsync: async function ($doc) {
          // ---------------参数编解码---------------
          // 编码
          function encode(plainText) {
              if (('number' == typeof plainText && (plainText = plainText.toString()), 'string' != typeof plainText))
                  return plainText
              var md5Hash = CryptoJS.MD5(plainText).toString(CryptoJS.enc.Hex),
                  _0xf208b6 = md5Hash.substr(0, 3),
                  _0x2045c1 = (function (plainText) {
                      if (/^\d*$/.test(plainText)) {
                          for (
                              var _0x1c7c70 = plainText.length, _0x9fd207 = [], _0x2fd6ee = 0;
                              _0x2fd6ee < _0x1c7c70;
                              _0x2fd6ee += 9
                          ) {
                              var _0x4089d1 = plainText.slice(_0x2fd6ee, Math.min(_0x2fd6ee + 9, _0x1c7c70));
                              _0x9fd207.push(parseInt(_0x4089d1).toString(16));
                          }
                          return ['3', _0x9fd207]
                      }
                      for (var _0x4b46c9 = '', _0x1f2538 = 0; _0x1f2538 < plainText.length; _0x1f2538++)
                          _0x4b46c9 += plainText.charCodeAt(_0x1f2538).toString(16);
                      return ['4', [_0x4b46c9]]
                  })(plainText)
              ;(_0xf208b6 += _0x2045c1[0]), (_0xf208b6 += 2 + md5Hash.substr(md5Hash.length - 2, 2));
              for (var _0x59bebd = _0x2045c1[1], _0x1aafd3 = 0; _0x1aafd3 < _0x59bebd.length; _0x1aafd3++) {
                  var _0x1af4ac = _0x59bebd[_0x1aafd3].length.toString(16);
                  1 === _0x1af4ac.length && (_0x1af4ac = '0' + _0x1af4ac),
                      (_0xf208b6 += _0x1af4ac),
                      (_0xf208b6 += _0x59bebd[_0x1aafd3]),
                      _0x1aafd3 < _0x59bebd.length - 1 && (_0xf208b6 += 'g');
              }
              return (
                  _0xf208b6.length < 20 && (_0xf208b6 += md5Hash.substr(0, 20 - _0xf208b6.length)),
                  (_0xf208b6 += CryptoJS.MD5(_0xf208b6).toString(CryptoJS.enc.Hex).substr(0, 3))
              )
          }
          // 解码
          function decode(encodedText) {
              if ('string' != typeof encodedText || encodedText.length <= 3) return ''
              for (
                  var _0x25eace = encodedText.charAt(3),
                      _0x6aad1d = 5 + parseInt(encodedText.charAt(4)),
                      _0x23fa2c = encodedText.length - 3,
                      _0xb4db26 = '',
                      _0x2bf2ee = _0x6aad1d;
                  _0x2bf2ee < _0x23fa2c && (_0x2bf2ee === _0x6aad1d || 'g' === encodedText.charAt(_0x2bf2ee));

              ) {
                  if ((_0x2bf2ee !== _0x6aad1d && _0x2bf2ee++, _0x2bf2ee + 2 > _0x23fa2c)) return ''
                  var _0x436006 = parseInt(encodedText.substr(_0x2bf2ee, 2), 16);
                  if (_0x2bf2ee + 2 + _0x436006 > _0x23fa2c) return ''
                  var _0x3f72db = encodedText.substr(_0x2bf2ee + 2, _0x436006),
                      _0x41cdae = '';
                  if ('3' === _0x25eace) {
                      var _0x3c987c = parseInt(_0x3f72db, 16);
                      if (isNaN(_0x3c987c)) return ''
                      _0x41cdae = '' + _0x3c987c;
                  } else
                      for (var _0x293868 = 0, _0x14b43a = _0x3f72db.length; _0x293868 < _0x14b43a; _0x293868 += 2) {
                          var _0x4f2610 = parseInt(_0x3f72db.substr(_0x293868, 2), 16);
                          _0x41cdae += String.fromCharCode(_0x4f2610);
                      }
  (_0xb4db26 += _0x41cdae), (_0x2bf2ee = _0x2bf2ee + 2 + _0x436006);
              }
              return _0xb4db26
          }
          // ---------------参数编解码---------------

          if (!this.__weReadJson) {
              var reqObj = {
                  url: this.curPageUrl,
                  method: "GET",
                  overrideMimeType: "text/html;charset=utf-8",
                  headers: {},
              };
              const res = await Request(reqObj);
              var text = res.responseText;
              this.__weReadJson = JSON.parse(getMiddleStr(text, 'window.__INITIAL_STATE__=', ';'));
          }

          var chapterList = this.__weReadJson.reader.chapterInfos;

          const re = /\/web\/reader\/([0-9a-f]+)k?([0-9a-f]+)?/g;
          const matchs = [...this.curPageUrl.matchAll(re)];
          let bookId,
              chapterUid = null;
          if (matchs) {
              bookId = decode(matchs[0][1]);
              if (matchs[0].length === 3) {
                  chapterUid = parseInt(decode(matchs[0][2]));
              }
          }

          var currentChapter = chapterList.find(e => e.chapterUid === chapterUid);

          var { chapterIdx } = currentChapter || { chapterIdx: 1 };

          var nextUrl, prevUrl, indexUrl;

          indexUrl = '/web/reader/' + encode(bookId);

          if (chapterIdx === chapterList.length) {
              nextUrl = '';
          } else {
              var nextChapterUid = chapterList[chapterIdx].chapterUid;
              nextUrl = indexUrl + 'k' + encode(nextChapterUid);
          }

          if (chapterUid && chapterUid > 1) {
              var prevChapterUid = chapterList[chapterIdx - 2].chapterUid;
              prevUrl = indexUrl + 'k' + encode(prevChapterUid);
          } else {
              prevUrl = '';
          }

          var dataUrls = [];

          $doc.find('.wr_canvasContainer canvas').each(function () {
              dataUrls.push(this.toDataURL());
              $(this).remove();
          });

          var $body = $doc.find('body');
          if (nextUrl) {
              // 加上一页链接
              $('<div id="nextchapter">').attr('href', nextUrl).appendTo($body);
          }
          if (prevUrl) {
              // 加下一页链接
              $('<div id="prevchapter">').attr('href', prevUrl).appendTo($body);
          }
          // 目录
          $('<div id="bookindex">目录</div>').attr('href', indexUrl).appendTo($body);
          // 正文
          var $container = $doc.find('.wr_canvasContainer');
          for (const dataUrl of dataUrls) {
              $('<img>').attr('src', dataUrl).appendTo($container);
          }
          
      }
      },

      {siteName: "飞卢小说网",
          url: "^https?://b\\.faloo\\.com/\\d+_\\d+\\.html",
          titleSelector: "h1",
          bookTitleSelector: "#novelName",

          nextSelector: "a#next_page",
          prevSelector: "a#pre_page",
          indexSelector: "a#huimulu",

          contentSelector: ".noveContent",
      
          contentReplace: [
              "飞卢小说网 b.faloo.com 欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在飞卢小说网！",
          ],
      },

      {siteName: '小说321',
          url: 'https?://www\\.xs321\\.net/book/\\d+/\\d+/\\d+(_\\d+)?.html',
          exampleUrl: 'http://www.xs321.net/book/671/671539/1.html',
          useSiteFont: true,
          checkSection: true,
          contentReplace: ['.*www\\.xs321\\.net.*',
                          '本章未完，请点击下一页继续阅读！',
                          '^.*?提示您：看后求收藏（小说321xs321.net），接着再看更方便。', '.*xs321.net.*']
      },

      {siteName: '斋书院',
          url: 'https?://www\\.zhaishuyuan\\.org/book/\\d+/\\d+(_\\d+)?.html',
          exampleUrl: 'https://www.zhaishuyuan.org/book/4985/4553175.html',
          checkSection: true,
      },

      {siteName: 'YY文轩',
          url: 'https?://www\\.xiyuwx\\.com/\\d+/.*?\\.html',
          exampleUrl: 'http://www.xiyuwx.com/523903/13063045.html',
          useiframe: true,
          contentSelector: '#ad'
      },

      {siteName: '飞速中文',
          url: 'https://(?:www.)?(?:feiazw|feibzw|xn--fiq228cu93a4kh).com/Html/\\d+/\\d+.html',
          exampleUrl: 'https://www.feiazw.com/Html/21975/18399024.html',

          contentRemove: 'p[style], .l',
          noSection: true,

      },

      {siteName: '顶点小说',
          url: 'https?://www\\.ddxs\\.com/.*?/\\d+.html',
          exampleUrl: 'http://www.ddxs.com/yuanzun/1.html',

          contentSelector: '#contents',
          bookTitleSelector: 'dl > dt > a:last',
          noSection: true,

      },

      {siteName: '铅笔小说',
          url: 'https?://www.23qb.com/book/\\d+/\\d+(?:_\\d+)?.html',
          exampleUrl: 'https://www.23qb.com/book/187203/70954846.html',

          contentPatch($doc) {
              const re = toRE("\\{url_previous:'(.*?)',url_next:'(.*?)',url_index:'(.*?)',\\}");
              const ReadParams = $doc.find('script:contains(ReadParams)').text();
              const [_, url_previous, url_next, url_index] = re.exec(ReadParams);

              const nextName = url_next.includes("_") ? '下一页' : '下一章';

              const body = $doc.find('body');

              $doc.find('p:contains(（继续下一页）)').remove();

              $('<a>').attr('href', url_previous).text('上一章').appendTo(body);
              $('<a>').attr('href', url_next).text(nextName).appendTo(body);
              $('<a>').attr('href', url_index).text('目录').appendTo(body);

          },
          contentReplace: ['铅笔小说 23qb.com']
      },

      {siteName: '爱尚小说',
          url: 'https://www.asxs.com/view/\\d+/\\d+.html',
          exampleUrl: 'https://www.asxs.com/view/174811/2330811.html',

          noSection: true

      },

      {siteName: 'legado-webui',
          url: 'http://localhost:5000/bookshelf/\\d+/\\d+/',
          githubRepo: 'https://github.com/letterk/legado-webui',

          contentPatch($doc) {
              const js = $doc.find('script:contains(saveMark)').text();
              const hostIP = document.cookie.replace(
                  /(?:(?:^|.*;\s*)hostip\s*\=\s*([^;]*).*$)|^.*$/,
                  '$1'
              );
              const body = getMiddleStr(js, 'var str = "', '";').replace(/&#39;|&#34;/gi, '"');
              fetch(`http://${hostIP}/saveBookProgress`, {
                  method: 'POST',
                  mode: 'no-cors',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body
              });
          }

      },

      {siteName: '有度中文网',
          url: 'https://www.yodu.org/book/\\d+/\\d+.html',
          exampleUrl: 'https://www.yodu.org/book/11542/1472213.html',
          useSiteFont: true,
          // style: '@font-face{font-family:read;font-display:block;src:url(/en/common/read.ttf);}#mynovelreader-content{font-family: "read" !important;}',

          contentPatch($doc) {
              const re = toRE("\\{t\\d+_0:'(.*?)',t\\d+_1:'(.*?)',t\\d+_index:'(.*?)',\\}");
              const ReadParams = $doc.find('script:contains(fuck)').text();
              const [_, url_previous, url_next, url_index] = re.exec(ReadParams);

              let previousName = $doc.find('#readbg > p > a:nth-child(1)').text();
              let nextName = $doc.find('#readbg > p > a:nth-child(5)').text();
              previousName = previousName === '<--' ? '上一页' : '上一章';
              nextName = nextName === '-->' ? '下一页' : '下一章';

              const body = $doc.find('body');

              $doc.find('a:contains(目录)').remove();
              $doc.find('p:contains(（本章未完）)').remove();

              $('<a>').attr('href', url_previous).text(previousName).appendTo(body);
              $('<a>').attr('href', url_next).text(nextName).appendTo(body);
              $('<a>').attr('href', url_index).text('目录').appendTo(body);
          }

      },

      {siteName: '小书亭',
          url: 'https://www.xiaoshuting.la/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.xiaoshuting.la/4/4325/72082213.html',

          noSection: true

      },

      {siteName: '小书亭',
          url: 'https://www.xiaoshutingapp.com/html/\\d+/\\d+.html',
          exampleUrl: 'https://www.xiaoshutingapp.com/html/11341/151211.html',

          noSection: true

      },

      {siteName: '饭团看书',
          url: 'https://www.fantuankanshu.com/html/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.fantuankanshu.com/html/6/6286/83813065.html',

          noSection: true

      },

      {siteName: 'E品中文',
          url: 'https://www.epzw.com/html/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.epzw.com/html/92/92675/1.html',

          noSection: true

      },

      {siteName: '第一小说',
          url: 'https://www.01xs.com/xiaoshuo/\\d+/\\d+.html',
          exampleUrl: 'https://www.01xs.com/xiaoshuo/120924/1.html',

          noSection: true

      },

      {siteName: '思路客',
          url: 'https://www.slkslk.com/\\d+/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.slkslk.com/0/8/8342/139031.html',

          noSection: true

      },

      {siteName: '思路客',
          url: 'https://www.siluke.com/\\d+/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.siluke.com/0/112/112444/1874061.html',

          noSection: true

      },

      {siteName: '小书亭',
          url: 'https://www.xiaoshuting.cc/xiaoshuo/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.xiaoshuting.cc/xiaoshuo/4/4469/62562.html',

          contentSelector: '.Text',
          bookTitleSelector: '.summary a'

      },

      {siteName: '2k小说网',
          url: 'https://www.2kxiaoshuo.com/xiaoshuo/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.2kxiaoshuo.com/xiaoshuo/18/18207/254891.html',

          contentSelector: '.Text',
          bookTitleSelector: '.summary a'

      },

      {siteName: '2k小说网',
          url: 'https://www.2kxs.la/xiaoshuo/\\d+/\\d+/\\d+.html',
          exampleUrl: 'https://www.2kxs.la/xiaoshuo/11/11245/202411.html',

          contentSelector: '.Text',
          bookTitleSelector: '.summary a'

      },

      {siteName: '镇魂',
          url: 'https://www.zhenhunxiaoshuo.com/\\d+.html',
          exampleUrl: 'https://www.zhenhunxiaoshuo.com/1.html',

          contentSelector: '.article-content',
          bookTitleSelector: 'a[rel~=category]',
          indexUrl: 'a[rel~=category]',
          nextUrl: 'a[rel=next]',
          prevUrl: 'a[rel=prev]',

      },

      {siteName: '精华书阁',
          // url: 'https?://(?:www.)?(?:2ksk|jhssd|xbyuan|richvv).com/\\d+/.*?.html',
          url: 'https?://www.babahome.net/\\d+/.*?.html',
          exampleUrl: 'https://www.richvv.com/172/652.html',

          contentSelector: '#nr_content, #hp_coonten, #jb_contsen, #wr_consten',
          contentReplace: [
              // '温馨提示:为防止/内容/获取不/全和文/字乱序，请勿使用浏览器(A/p/p)阅.读.模.式。',
              // '温馨告知：为防止\\内容\\获取不全和文字\\乱序，请勿使用浏览器(A\\p\\p)阅\\读\\模\\式。',
              // '提示:如果内*容获取*不全和文字*乱*序，请退出浏览器(A*p*p)阅/读/模/式。',
              // '告示：如果.内容获.取.不全和文.字乱序，请退出浏览器(A.p.p)阅-读-模-式。',
              '^.*阅.读.模.式.*$',
              String.raw`\(本章未完，请点击下一页继续阅读\)`,
              '^.*?提醒您：看完记得收藏【精华书阁】w w w.jhssd.com，下次我更新您才方便继续阅读哦，期待精彩继续！您也可以用手机版: wap.jhssd.com，随时随地都可以畅阅无阻....',
              '【讲真，最近一直用@精华书阁@看书追更，换源切换，朗读音色多，.安卓苹果均可。】',
              '【认识十年的老书友给我推荐的追书，@精华书阁@！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载\\.?】',
              '【推荐下，@精华书阁@追书真的好用，大家去快可以试试吧。】',
              '【新章节更新迟缓的问题，在能精华书阁的上终于有了解决之道，这里下载精华书阁.精华书阁，同时查看本书在多个站点的最新章节。】',
              '【.*?精华书阁.*?】',
              '^…\\.',
              { '「': '“', '」': '”' }
          ],
          // contentRemove: '.txtinfos, .textinfo, .infotext, .infostet',
          // handleContentText ($content, info) {
          //     const $html = $('<div>').html(this.handleContentText($content, info))
          //     const style = this.$doc.find('style').filter(function () {
          //         return $(this).text().indexOf("@font-face") > -1
          //     })
          //     $html.prepend(style)
          //     const contentReplace = [
          //         '无../错../更../新`.j`.h`.s`.s`.d`.c`.o`.m',
          //         'j._/h._/s._/s._/d._/.._/c._/o._/m',
          //         '精../华../书../阁../无../错../首../发~~',
          //         '首../发../更../新`.精`.华`.书`.阁',
          //         '精../华../书../阁../首../发../更../新~~',
          //         '@精华书阁首发',
          //         {'「': '“', '」': '”'}
          //     ]
          //     return this.replaceText($html[0].outerHTML, contentReplace)
          // }

      },

      {siteName: '天天看小说',
          url: 'https?://(?:www|cn|tw).bg3.co/novel/pagea/.*?.html',
          exampleUrl: 'https://www.bg3.co/novel/pagea/lingjingxingzhe-maibaoxiaolangjun_1.html',

          nextSelector($doc) {
              if ($doc.find(".novel_end").length) {
                  return null
              }
              return $doc.find('.next_page_links > a:first').attr("href")
          },
          indexSelector: '.bread_crumbs a:last',
          prevSelector: '.prev_page > a:first',
          contentReplace: [
              /*
              www¸t tkan¸Сo 
              щшш◆ t t k a n◆ C 〇
              щшш◆ttκǎ n◆C○
              WWW⊕ тTk án⊕ ￠O
              Wшw ●ttκǎ n ●Сo
              шшш¸Tтkan¸C〇
              шшш. t tkan. c ○
              ωωω• ttκan• c○
              шωш¸ т tκa n¸ CΟ
              www＿тtkan＿℃O
              ¸ тt kǎn¸ C〇
              wWW¤ тt kдn¤ ￠O
              */
              "[wWщшω]{0,3} ?[¸◆⊕●.•＿¤☢⊙▲✿★▪]? ?(?:[tTтⓣ] ?){2}[kKκКⓚ] ?[aAǎáдāΛⓐ] ?[nNⓝ] ?[¸◆⊕●.•＿¤☢⊙▲✿★▪]? ?[cCС￠℃] ?[oO〇○Ο] ?"
          ],
          contentRemove: '.div_feedback, .social_share_frame'


      },

      {siteName: "无防盗小说网",
          url: "https://wufangdao\\.com/html/\\d+/\\d+/\\d+\\.html",
          exampleUrl: "https://wufangdao.com/html/17/17078/455411.html",

          noSection: true

      },

      {siteName: "ESJ",
          url: "^https?://www\\.esjzone\\.(?:me|cc)/forum/\\d+/\\d+\\.html",
          exampleUrl: "https://www.esjzone.cc/forum/1677032544/162585.html",

          titleSelector: "h2",
          contentSelector: ".mt-3.forum-content",
          indexSelector: ".view-all.btn-outline-secondary.btn",
          prevSelector: ".btn-prev.btn-sm.btn-outline-secondary.btn",
          nextSelector: ".btn-next.btn-sm.btn-outline-secondary.btn",
      },

      {siteName: "真白萌",
          url: "^https?://masiro\\.me/admin/novelReading*",

          contentSelector: ".nvl-content.box-body",
          prevSelector: "a:contains('上一话')",
          nextSelector: "a:contains('下一话')",
      },

      {siteName: "独步小说网",
          url: "https?://www.dbxsc.com/book/.*?/.*?\\.html",
          exampleUrl: "https://www.dbxsc.com/book/p1693/565590.html",

          contentSelector: "#cont-body",
          prevSelector: ".col-md-6.text-center a:first",
          nextSelector: ".col-md-6.text-center a:last"
      },
      {
          siteName: '123读',
          url: 'https?://www\\.123dua?\\.(com|vip)/dudu-\\d+/\\d+/\\d+(-\\d+)?.html',
          checkSection: true,
          contentSelector: '#content',
          nextSelector: '#PageSet a:contains("下一页"), .bottem2 a:contains("下一章")',
          contentReplace: ['…。。\\s本章未完，请点击下一页继续阅读！', '^"$']
      },

      {siteName: '阿拉法小说网',
          url: 'https?://www.alafaxs.com/du/\\d+/\\d+.html',
          exampleUrl: 'https://www.alafaxs.com/du/80/856585.html',
          bookTitleSelector: '.chapter-nav > p:first > a:last()',
          useiframe: true,
          mutationSelector: "#txt",
          mutationChildCount: 0,
          contentSelector: '#txt',
      },

      {siteName: "梦远书城",
          url: /www\.my285\.com(?:\/\w+){3,5}\/\d+\.htm$/,
          useiframe: true,
          noSection: true,
          titleSelector: ".t50",
          contentSelector: "table tr:nth-child(4) > td",
      },

      {siteName: "飞翔鸟中文网",
          url: "https?://www\\.fxnzw\\.com/fxnread/\\d+_\\d+.html",
          exampleUrl: "https://www.fxnzw.com/fxnread/50217_11878551.html",

          bookTitleSelector: "#breadCrumb a:nth-child(2)",
          contentSelector: "#content > div[style]:last",

      },

      {siteName: "三优小说网",
          url: "https?://www\\.(?:3uxiaoshuo|zrfsxs)\\.com/xiaoshuo/\\d+/\\d+.html",
          titleReg: "(.*?)-(.*?)-",
          titlePos: 1,
          contentSelector: ".con",
          contentReplace: [
              '^必.?应.?搜.?索.?:.?三.?优.?小.?说.?网.?,.?最.?快.?更.?新.?,.?无.?弹.?窗。', 
              '^必.?应.?搜.?索.?:.?择.?日.?小.?说.?网.?,.?最.?快.?更.?新.?,.?无.?弹.?窗。'
          ]

      },

      {siteName: "奇书网",
          url: "https://www.qisxs.com/.*?/\\d+.html",
          exampleUrl: "https://www.qisxs.com/shenhaiyujin/7570735.html",

          bookTitleSelector: ".info a",
          contentSelector: ".box_box"

      },

      {
          siteName: "622中文",
          url: "https://www.622zw.com/books/\\d+/\\d+(_)?\\d+.html",
          exampleUrl: "https://www.622zw.com/books/175956/57627355.html",

          checkSection: true,

          titleSelector: ".reader-main h1.title",
          contentReplace: ["(www.)?622zw.com"]
      },

      {
          siteName: "东流小说",
          url: "https://www.zfxwx.com/read/.*/\\d+(_)?\\d+.html",
          exampleUrl: "https://www.zfxwx.com/read/AgVVAApc/1644315500.html",

          titleSelector: "h1",
          bookTitleSelector: ".breadcrumb > li:nth-child(2) > a",
          contentSelector: ".content"
      },
      {
          siteName: "UU看书网",
          url: "https://www.uuks.org/b/\\d+/\\d+.html",
          exampleUrl: "https://www.uuks.org/b/73675/920931.html",

          bookTitleSelector: function () {
              return unsafeWindow.booktitle;
          },
          contentSelector: "#content"
      },
      {
          siteName: "123读书网-手机站",
          url: "https://m.123duw?.(com|vip)/dudu-\\d+/\\d+/\\d+(-\\d+)?.html",
          exampleUrl: "https://m.123dua.com/dudu-31/8452541/55196666.html",

          titleReg: "(.*?)-(.*?)-(.*?)",
          titlePos: 1,
          checkSection: true,
          prevSelector: "#PageSet a:contains('上'):contains('页')",
          nextSelector: "#PageSet a:contains('下'):contains('页')",
          contentSelector: ".TxtContent",
          contentReplace: [
              '本章没完，请点击下.?页继续阅读！如果被转码了请退出转码或者更换.?.?器即可。',
              '….$',
              '^.*提醒您：看完记得收藏【123读书网】 123duw.com，下次我更新您才方便继续阅读哦，期待精彩继续！$',
              '^"$'
          ]
      },
      {
          siteName: "宙斯小说",
          url: "https?://www.zhswx.com/read/\\d+_\\d+.html",
          exampleUrl: "http://www.zhswx.com/read/63755_22738751.html",

          bookTitleSelector: "#form1 > table > tbody > tr > td > div[align='center'] > a:last-child",
          contentSelector: "#form1 > table > tbody > tr > td > div:has(p)",
          contentReplace: [
              '^新书(、)*$',
              '^本站(、)*$'
          ]
      },
      {
          siteName: "得奇小说网",
          url: "https://www.deqixs.com/xiaoshuo/\\d+/\\d+(-\\d+)?.html",
          exampleUrl: "https://www.deqixs.com/xiaoshuo/4/74219.html",

          bookTitleSelector: function ($doc) {
              return unsafeWindow.Title;
          },
          titleReg: "(.*?)-(.*?)-(.*?)",
          titlePos: 1,
          useiframe: true,
          contentSelector: ".con",
          contentReplace: [
              { 'II': '二' },
              { '壹': '一' }
          ]
      },

      {siteName: "逛笔趣阁小说网",
          url: "https?://www\\.fkxs\\.net/.*?/.*?\\.html",
          exampleUrl: 'https://www.fkxs.net/241_241951/117822179.html',

          checkSection: true,
          titleSelector: '.bookname h1',
          contentSelector: ".content",
          nextSelector: '.bottem2 a:nth-child(4)',
          prevSelector: '.bottem2 a:nth-child(2)',
          indexSelector: '.bottem2 a:nth-child(3)',
      },
      {
          siteName: "永久看小说",
          url: "https://www.09k.net/kkb/\\d+/\\d+(-\\d+)?.html",
          exampleUrl: "https://www.09k.net/kkb/021338893523/56870262.html",

          checkSection: true,
          prevSelector: "#PageSet a:contains('上'):contains('页')",
          nextSelector: "#PageSet a:contains('下'):contains('页')",
          contentReplace: [
              "…\\."
          ]
      },

      {siteName: "息壤中文网",
          url: "https://xrzww.com/bookread",

          titleSelector: ".chapter_name",
          contentSelector: ".novel_box",
          mutationSelector: ".novel_box",
          mutationChildCount: 1,

          nextUrl($doc) {
              return `https://xrzww.com/bookread#${new Date().getTime()}`
          },

          contentPatch($doc) {
              $doc.find(".chapter_name span").remove();
              $doc.find(".novel_box div span").remove();
              $doc.find(".novel_box .others").remove();
          },

          async getContent($doc) {
              if (!this.info.readinfo) {
                  this.info.readinfo = JSON.parse(localStorage.getItem("readinfo"));
                  let { next_chapter, next_chapter_order, chapter_ispay } = await this.info._getChapterData();
                  if (chapter_ispay === 1) {
                      this.info.isVipChapter = () => true;
                      return
                  }

                  this.info.readinfo.chapter_id = next_chapter;
                  this.info.readinfo.chapter_order = next_chapter_order;
              }

              const { next_chapter, next_chapter_order, chapter_ispay, chapter_name, content } = await this.info._getChapterData();
              if (chapter_ispay === 1) {
                  this.info.isVipChapter = () => true;
                  return
              }
              const contentHtml = content.split("\n").map(s => `<p>${s}</p>`).join("\n");
              const html = `<h1>${chapter_name}</h1><div class="content">${contentHtml}</div>`;
              
              this.info.readinfo.chapter_id = next_chapter;
              this.info.readinfo.chapter_order = next_chapter_order;

              return {
                  html
              }
          },

          async _getChapterData({ nid, vid, chapter_id, chapter_order, showpic } = this.readinfo) {
              const options = {
                  url: `https://pre-api.xrzww.com/api/readNovelByWeb?nid=${nid}&vid=${vid}&chapter_id=${chapter_id}&chapter_order=${chapter_order}&showpic=${showpic}`,
                  method: "GET",
                  overrideMimeType: "text/html;charset=utf-8",
                  headers: {},
              };
              const res = await Request(options);
              return JSON.parse(res.responseText).data
          }

      },

      {siteName: "独阅读|深度阅读",
          url: "^https?://www\\.(duread\\.cn|duyuedu\\.net)/chapter/book_chapter_detail/\\d+$",
          exampleUrl: 'https://www.duread.cn/chapter/book_chapter_detail/100081563',

          useiframe: true,
          titleSelector: ".article-title",
          contentSelector: '.article-content',
          indexSelector: '.btn-group-vertical a:nth-child(1)',

          prevSelector($doc) {
              return $doc.find("#J_BtnPagePrev").attr("data-href")
          },

          nextSelector($doc) {
              return $doc.find("#J_BtnPageNext").attr("data-href")
          },

          contentPatch($doc) {
              $doc.find('.J_Num').remove();
          }

      },

      {
          siteName: '笔趣阁',
          url: 'http://m.biquxs.com/book/\\d+/.*?.html',
          exampleUrl: 'http://m.biquxs.com/book/13516/9382746.html',

          checkSection: true,

          contentSelector: "#chaptercontent",
          contentPatch($doc) {
              $doc.find("#chaptercontent p:not(.content_detail)").remove();
          }
      },
      {
          siteName: '语录书院',
          url: 'https://www.yulusy.com/yulus/\\d+/.*?.html',
          exampleUrl: 'https://www.yulusy.com/yulus/17410287770/59700783-2.html',

          checkSection: true,
          prevSelector: "#PageSet a:contains('上'):contains('页')",
          nextSelector: "#PageSet a:contains('下'):contains('页')",
          contentSelector: "#content",
      },
      {
          siteName: '语录书院-移动版',
          url: 'https://m.yulusy.com/yulus/\\d+/.*?.html',
          exampleUrl: 'https://m.yulusy.com/yulus/17710148533/59468382-2.html',

          checkSection: true,
          prevSelector: "#PageSet a:contains('上'):contains('页')",
          nextSelector: "#PageSet a:contains('下'):contains('页')",
          contentSelector: ".TxtContent",
          contentReplace: [
              "…..*$",
              "^.*本章没完，请点击下—页继续阅读！如果被转码了请退出转码或者更换浏揽器即可。.*$",
              "^\\d+.$"
          ]
      },

      {siteName: 'Sangtacviet',
          url: 'https://sangtacviet.vip/truyen/.*?/1/\\d+/\\d+/',
          exampleUrl: 'https://sangtacviet.vip/truyen/faloo/1/1361906/',

          prevSelector: '#navprevtop',
          nextSelector: '#navnexttop',
          indexSelector: '#navcentertop',
          titleSelector($doc) {
              return $doc.find('#bookchapnameholder').text() || 'No Title'
          },
          bookTitleSelector: '#booknameholder',
          contentSelector: '#content-container > .contentbox',
          contentReplace: ['@Bạn đang đọc bản lưu trong hệ thống'],

          useiframe: true,
          contentHandle: false,

          mutationSelector: '#content-container > .contentbox',
          mutationChildText: 'Đang tải nội dung chương...',
          mutationCheck($doc) {
              const href = $doc.find("#navnexttop").attr("href");
              return !href.endsWith("/0/")
          }
      },

      {siteName: '手机小说',
          url: 'https://www.shoujix.com/shoujixs_\\d+_\\d+.html',
          exampleUrl: 'https://www.shoujix.com/shoujixs_199607_47546183.html',

          contentSelector: '#zjny'

      },
      {
          siteName: '言情小说阁-移动版',
          url: 'http://m.xianqihaotianmi.org/book_\\d+/\\d+(_\\d+)?.html',
          exampleUrl: 'http://m.xianqihaotianmi.org/book_86899/47598965_2.html',

          checkSection: true,
          titleReg: "(.*?)_(.*?)_(.*?)",
          titlePos: 1,
          prevSelector: "#pt_prev",
          nextSelector: "#pt_next",
          contentSelector: "#chaptercontent",
          contentPatch($doc) {
          //contentPatch: function (fakeStub) {
              $doc.find('#chaptercontent p').remove();
              $doc.find('#chaptercontent a').remove();
              const _title = $doc.find('title').text().match(/(第\d+章\s+[\u4e00-\u9fa5]+)/)[0];
              $doc.find('#chaptercontent').contents().filter(function() {
                  return this.nodeType === 3 && new RegExp(_title.replace(/\s+/g, "\\s+")).test($(this).text());
              }).remove();
          }
      },
      {
          siteName: '哔哩轻小说',
          url: 'https://(www|tw)\.(bilinovel|linovelib)\.com/novel/\\d+/\\d+(_\\d+)?\.html',
          exampleUrl: 'https://www.bilinovel.com/novel/4048/227859.html',
          useiframe: true,
          checkSection: true,

          bookTitleSelector: function () {
              return unsafeWindow.ReadParams.articlename;
          },
          titleSelector: "#atitle",
          prevSelector: "#footlink > a:nth-child(1)",
          nextSelector: "#footlink > a:nth-child(4)",
          indexSelector: "#footlink > a:nth-child(2)",
          contentSelector: ".acontent, .bcontent",
          contentPatch($doc) {
              const scriptText = $doc.find('body > script:nth-child(1)').text();
              const urls = scriptText.match(/url_(previous|index|articleinfo|next):'([^']+)'/g).map(url => url.split(':')[1].slice(1, -1));
              const footlinkAnchors = $doc.find("#footlink a");
              const anchorIndex = [0, 2, 3, 1];

              footlinkAnchors.each(function(index) {
                  $(this).removeAttr('onclick').attr('href', urls[anchorIndex[index]]);
              });
          }
      },
      {
          siteName: '轻小说文库',
          url: 'https://www\.wenku8\.net/novel/\\d+/\\d+/\\d+\.htm',
          exampleUrl: 'https://www.wenku8.net/novel/2/2449/91347.htm',
          noSection: true,

          bookTitleSelector: "#linkleft > a:nth-child(3)",
          titleSelector: "#title",
          prevSelector: "#foottext > a:nth-child(3)",
          nextSelector: "#footlink > a:nth-child(4)",
          indexSelector: "#footlink > a:nth-child(5)",
          contentSelector: "#content"
      },
      {
          siteName: 'UU看书',
          url: 'https://www\.uuread\.tw/chapter/\\d+/\\d+(_\\d+)?\.html',
          exampleUrl: 'https://www.uuread.tw/chapter/11681/3006418.html',
          checkSection: true,

          bookTitleSelector: ".bread > li:nth-child(4) > a:nth-child(1)",
          titleSelector: [".chatit", "（.*）$"],
          prevSelector: "a.btn-primary:nth-child(1)",
          nextSelector: "a.btn-primary:nth-child(4)",
          indexSelector: "a.btn-primary:nth-child(3)",
          contentSelector: ".txt_tcontent"
      },

      {siteName: '69shux',
          url: 'https://69shux.com/txt/\\d+/\\d+',
          exampleUrl: 'https://69shux.com/txt/59608/41087519',

          titleSelector: 'h1',
          contentSelector: ".txtnav",
          contentRemove: ".txtinfo.hide720, #txtright, .err_tips",
          nextSelector: '.page1 a:nth-child(4)',
          prevSelector: '.page1 a:nth-child(1)',
          indexSelector: '.page1 a:nth-child(3)',

          useiframe: true,
          iframeSandbox: "allow-same-origin allow-scripts"

      },

      {siteName: '笔趣阁',
          url: 'http://www.biquxs.com/book/\\d+/\\d+.html',
          exampleUrl: 'http://www.biquxs.com/book/17539/9351052.html',

          titleReg: '(.*?)_(.*?)_',
          titlePos: 1,

          contentSelector: '#content',
          nextSelector: '.page_chapter .next',
          prevSelector: '.page_chapter .pre',
          indexSelector: '.page_chapter .back',

      },

      {siteName: '微风小说',
          url: 'https?://(?:m|www).wfxs.tw/xiaoshuo/\\d+/\\d+/',
          exampleUrl: 'https://m.wfxs.tw/xiaoshuo/22454/7990959/',

          contentReplace: ['本章尚未完結,請點擊下一頁繼續閱讀---->>>', '本章已閱讀完畢\\(請點擊下一章繼續閱讀!\\)']

      },

      {siteName: '新笔趣阁',
          url: 'http://www.xsbiquge.la/book/\\d+/\\d+.html',
          exampleUrl: 'http://www.xsbiquge.la/book/2066/1417147.html',

          titleReg: '(.*?)_(.*?)_',
          titlePos: 1,

          contentSelector: '#content',
          nextSelector: '.page_chapter .next',
          prevSelector: '.page_chapter .pre',
          indexSelector: '.page_chapter .back',

      },

      // 需要配合 ignore-x-frame-headers 扩展使用 
      // https://chromewebstore.google.com/detail/ignore-x-frame-headers/ohgdnhkppgeemnmjebhedjneajcedppf
      // https://addons.mozilla.org/firefox/addon/ignore-x-frame-options-header/
      {siteName: '笔趣阁',
          url: 'http://www.bqgege.com/reader/.*?/',
          exampleUrl: 'http://www.bqgege.com/reader/mXEmgH8/',

          bookTitleSelector: '.breadcrumb ol li a:last',
          titleSelector: '.breadcrumb ol li:last',
          contentSelector: '.__b',
          mutationSelector: '.__b',
          mutationChildCount: 1,
          useiframe: true,

          contentPatch($doc) {
              var sectionEls = Array.from($doc.find(".page a")).reverse();
              var foundActive = false;
              var nextSectionEl, prevSectionEl;
              for (const el of sectionEls) {
                  var $el = $(el);
                  if (foundActive) {
                      nextSectionEl = $el;
                      break
                  }
                  foundActive = $el.hasClass("active");
                  if (!foundActive) {
                      prevSectionEl = $el;
                  }
              }
              if (nextSectionEl) {
                  nextSectionEl.text("下一页");
              }
              if (prevSectionEl) {
                  prevSectionEl.text("上一页");
              }
          }

      },

      {siteName: '大熊猫文学网',
          url: 'https://www.dxmwx.org/read/\\d+_\\d+.html',
          exampleUrl: 'https://www.dxmwx.org/read/40004_9947948.html',

          contentSelector: '#Lab_Contents'

      },

      {siteName: '爱下电子书',
          url: 'https://ixdzs8.com/read/\\d+/p\\d+.html',
          exampleUrl: 'https://ixdzs8.com/read/42730/p1.html',

          prevSelector: '.chapter-pre',
          nextSelector: '.chapter-next',
          indexSelector: 'a:contains(书籍页)',

          contentSelector: '.page-content section'

      }
  ];

  // ===== 小说拼音字、屏蔽字修复 =====
  // 运行在未替换 <br> 之前，.* 可能会造成全部替换
  const replace = {
    // ===格式整理===
    // "\\(|\\[|\\{|（|【|｛":"（",
    // "\\)|\\]|\\}|）|】|｝":"）",

    // 需要？
    //",\\s*": "，",
    // ":": "：", "\\?":"？",  // 会造成起点的图片无法替换

    // "\\*|＊": "*",
    // "[wWｗＷ]{3}": "www",
    // "w{3}(\u3001|\u3002)": "www.",
    // "[cCｃＣ][oOｏＯ][mMｍＭ]": "com",
    // "[nNｎＮ][eｅEＥ][tｔTＴ]": "net",
    // "[cCｃＣ][nNｎＮ]": "cn",
    // "(\\.|\u3001|\u3002)com": ".com",
    // "(\\.|\u3001|\u3002)net": ".net",
    // "(\\.|\u3001|\u3002)cn": ".cn",
    // "[pPｐＰ][sSｓＳ][:：]": "ps:",
    // "。{5,7}": "……", "~{2,50}": "——", "…{3,40}": "……", "－{3,20}": "——",
    //"。(,|，|。)": "。",
    // "？(,|，)": "？",
    //"”(,|，|。)": "”",
    "@{3,}": "",

    // === 段末的多余的r ===
    "\\\\r<br>": "<br>",

    // === 一些特殊的替换 ===
    "\\[+CP.*(http://file.*\\.jpg)\\]+": "<img src='$1'>",
    // "『(.)』": "$1",  // "『色』": "色",

    // === 去广告 ===
    "\\[搜索最新更新尽在[a-z\\.]+\\]": "",
    "<a>手机用户请到m.qidian.com阅读。</a>": "",
    ".{2,4}中文网欢迎广大书友": "",
    // "访问下载txt小说|◎雲來閣免费万本m.yunlaige.com◎": "",
    // "〖∷更新快∷无弹窗∷纯文字∷.*?〗": "",
    // '超快稳定更新小说[,，]': '', "本文由　。。　首发": "",
    // '”小说“小说章节更新最快': '',
    '如果觉得好看，请把本站网址推荐给您的朋友吧！': '',
    '本站手机网址：&nbsp;&nbsp;请互相通知向您QQ群【微博/微信】论坛贴吧推荐宣传介绍!': '',
    // "fqXSw\\.com": "", "\\.5ｄｕ|\\.５du５\\.": "",
    // "\\[\\]": "",
    // "如果您觉得网不错就多多分享本站谢谢各位读者的支持": "",
    // "全文字无广告|\\(看书窝&nbsp;看书窝&nbsp;无弹窗全文阅读\\)": "",
    // "。。+[\\s　]*看最新最全小说": "",
    "水印广告测试": "",
    // "\\(平南文学网\\)": "", "讀蕶蕶尐說網": "",
    // "比奇提示：如何快速搜自己要找的书籍": "", "《百度书名\\+比奇》即可快速直达": "",
    // "~无~错~小~说": "",

    "\\(一秒记住小说界\\）|\\*一秒记住\\*": "",
    // "uutxt\\.org|3vbook\\.cn|www\\.qbwx\\.com|WWw\\.YaNkuai\\.com|www\\.btzw\\.com|www\\.23uS\\.com": "",
    // "txt53712/": "",
    "\xa0{4,12}": "\xa0\xa0\xa0\xa0\xa0\xa0\xa0",

    // === 通用去广告
    // "[wｗＷ]{1,3}[．\\.]２３ｕＳ[．\\.](?:ｃｏＭ|com)": "",

    // === 星号屏蔽字还原 ===
    // === 八九 ===
    "十有(\\*{2})": "十有八九",
    "十有bā'九": "十有八九",
    "(\\*{2})不离十": "八九不离十",
    "(\\*{2})点": "八九点",
    "(\\*{2})个": "八九个",
    "(\\*{2})岁": "八九岁",
    "(\\*{2})成": "八九成",
    "(\\*{2})年": "八九年",
    "一八(\\*{2})": "一八八九",

    // === SM ===
    "G(\\*{2})": "GSM",

    // === 情色 ===
    "感(\\*{2})彩": "感情色彩",

    // === 大法 ===
    "强(\\*{2})u5B9D": "强大法宝",
    "强(\\*{2})宝": "强大法宝",
    "种魔(\\*{2})": "种魔大法",
    "巨(\\*{2})": "巨大法",
    "强(\\*{2})术": "强大法术",
    "(\\*{2})师": "大法师",

    // === 肉体 ===
    "(\\*{2})凡胎": "肉体凡胎",
    "夺取她的(\\*{2})": "夺取她的肉体",
    "夺取他的(\\*{2})": "夺取他的肉体",
    "(\\*{2})与精神": "肉体与精神",
    "(\\*{2})素材": "肉体素材",
    "(\\*{2})材料": "肉体材料",
    "在(\\*{2})上": "在肉体上",

    // === 赤裸 ===
    "(\\*{4})着": "赤裸着",
    "(\\*{2})裸": "赤裸裸",
    "浑身(\\*{2})": "浑身赤裸",

    // === 射 ===
    "枪(\\*{4})": "枪发射",
    "(\\*{4})而出": "喷射而出",
    "光(\\*{2})": "光四射",

    // === 鱼水 ===
    "(\\*{2})之欢": "鱼水之欢",

    // === 国军 ===
    "(\\*{2})队": "国军队",
    "(\\*{2})舰": "国军舰",
    "(\\*{2})方": "国军方",

    // === 露阴 ===
    "暴(\\*{2})谋": "暴露阴谋",

    // === 欲望 ===
    "的(\\*{2})是无止境的": "的欲望是无止境的",
    "邪恶的(\\*{2})": "邪恶的欲望",
    "被(\\*{2})支配": "被欲望支配",
    "掀桌的(\\*{2})": "掀桌的欲望",
    "控制不住(\\*{2})": "控制不住欲望",
    "求生的(\\*{2})": "求生的欲望",
    "求生(\\*{2})": "求生欲望",
    "购买(\\*{2})": "购买欲望",
    "永无止境的(\\*{2})": "永无止境的欲望",
    "(\\*{2})的发泄": "欲望的发泄",
    "发泄(\\*{2})": "发泄欲望",
    "杀戮(\\*{2})": "杀戮欲望",
    "(\\*{2})和本能": "欲望和本能",

    // === 呻吟 ===
    "不堪重负的(\\*{2})": "不堪重负的呻吟",
    "(\\*{2})声": "呻吟声",
    "颤抖(\\*{2})": "颤抖呻吟",
    "(\\*{2})颤抖": "呻吟颤抖",

    // === 独立 ===
    "宣布(\\*{2})": "宣布独立",
    "(\\*{2})空间": "独立空间",

    // === 荡漾 ===
    "波纹(\\*{2})": "波纹荡漾",

    // === 喘息 ===
    "(\\*{2})之机": "喘息之机",

    // === 大波 ===
    "一(\\*{2})": "一大波",

    // === 上供 ===
    "(\\*{2})奉": "上供奉",

    // === 奸淫 ===
    "(\\*{2})掳掠": "奸淫掳掠",

    // === 失身 ===
    "有(\\*{2})份": "有失身份",

    // === 六合 ===
    "(\\*{2})八荒": "六合八荒",

    // === 人祸 ===
    "天灾(\\*{2})": "天灾人祸",

    // === 轮红 ===
    "一(\\*{2})日": "一轮红日",

    // === 西藏 ===
    "东躲(\\*{2})": "东躲西藏",

    // === 被操 ===
    "(\\*{2})纵": "被操纵",

    // === 穷屌 ===
    "(\\*{2})丝": "穷屌丝",

    // === 销魂 ===
    "(\\*{2})滋味": "销魂滋味",

    // === 色水 ===
    "血(\\*{2})晶": "血色水晶",

    // === 偷用 ===
    "偷(\\*{2})": "偷偷用",

    // === 乳交 ===
    "水(\\*{2})融": "水乳交融",


    // === 多字替换 ===
    "cao之过急": "操之过急", "chunguang大泄": "春光大泄",
    "大公无si": "大公无私",
    "fu道人家": "妇道人家", "放sōng'xià来": "放松下来",
    "奸yin掳掠": "奸淫掳掠",
    "空dangdang": "空荡荡",
    "突发qing况": "突发情况",
    "yin奉阳违": "阴奉阳违", "一yin一阳": "一阴一阳",

    // === 双字替换 ===
    "暧m[eè][iì]":"暧昧",
    "bàn\\s*fǎ":"办法", "bucuo":"不错", "不liáng":"不良", "b[ěe]i(\\s|&nbsp;)*j[īi]ng":"北京", "bǐ\\s*shǒu":"匕首", "半shen":"半身", "b[ìi]j[ìi]ng":"毕竟", "报(了?)jing":"报$1警", "bèi'pò":"被迫", "包yǎng":"包养", "(?:biǎo|婊\\\\?)子":"婊子", "biǎo\\s*xiàn\\s*":"表现",
    "chifan":"吃饭", "ch[oō]ngd[oò]ng":"冲动", "chong物":"宠物", "cao(练|作)":"操$1", "出gui":"出轨", "chu\\s*xian":"出现", "缠mian":"缠绵", "成shu":"成熟", "(?:赤|chi)\\s*lu[oǒ]":"赤裸", "春guang":"春光", "chun风":"春风", "chuang伴":"床伴", "沉mi":"沉迷", "沉lun":"沉沦", "刺ji":"刺激", "chao红":"潮红", "初chun":"初春", "＂ｃｈｉ\\s*ｌｕｏ＂":"赤裸", "cí\\s*zhí":"辞职",
    "dān\\s*xīn":"当心", "dang校":"党校", "da子":"鞑子", "大tui":"大腿", "dǎ\\s*suàn":"打算", "dá\\s*àn":"答案", "dài\\s*lǐ":"代理", "dengdai":"等待", "电huà":"电话", "diàn\\s*huà":"电话", "diàn\\s*yǐng":"电影", "diao丝":"屌丝", "d[úu](?:\\s|&nbsp;|<br/>)*l[ìi]":"独立", "d[uú]\\s{0,2}c[áa]i":"独裁", "d?[iì]f[āa]ng":"地方", "d[ìi]\\s*d[ūu]":"帝都", "di国|帝guo":"帝国", "du[oò]落":"堕落", "坠luò":"坠落",
    "f[ǎa]ngf[óo]":"仿佛", "fei踢":"飞踢", "fēi\\s*wén":"飞吻", "feng流":"风流", "风liu":"风流", "f[èe]nn[ùu]":"愤怒", "fǎn\\s*yīng":"反应", "fú\\s*wù":"服务", "fù\\s*chóu":"复仇",
    "gao潮":"高潮", "高氵朝":"高潮", "gāo\\s*xìng\\s*":"高兴", "干chai":"干柴", "勾yin":"勾引", "gu[oò]ch[ée]ng":"过程", "gu[āa]n\\s*x[iì]":"关系", "官\\s*fāng":"官方", "g[ǎa]nji[àa]o":"感觉", "国wu院":"国务院", "gù\\s*yì\\s*":"故意", "guofen":"过分", "guān\\s*fāng":"官方",
    "hā\\s*hā\\s*":"哈哈", "h[aǎ]ode":"好的", "hù士":"护士", "火qiang":"火枪", "huó\\s*dòng":"活动", "há'guó":"韩国", "han住":"含住", "hai洛因":"海洛因", "红fen":"红粉", "火yao":"火药", "h[ǎa]oxi[àa]ng":"好像", "hu[áa]ngs[èe]":"黄色", "皇d[ìi]":"皇帝", "昏昏yu睡":"昏昏欲睡", "回dang":"回荡", "huí\\s*qù\\s*":"回去", "hé\\s*shì\\s*":"合适", "hàn\\s*jiān":"汉奸",
    "jian(臣|细)":"奸$1", "奸yin":"奸淫", "jiànmiàn":"见面", "jian货":"贱货", "jing察":"警察", "jǐng\\s*chá":"警察", "j[ìi]nháng":"进行", "jīng\\s*guò":"经过", "ji烈":"激烈", "j[iì](nv|女)":"妓女", "jirou":"鸡肉", "ji者":"记者", "jì\\s*xù\\s*":"继续", "ju花":"菊花", "j[īi]动":"激动", "jili[èe]":"激烈", "肌r[òo]u":"肌肉", "ji射":"激射", "ji[ēe]ch[uù]":"接触", "jiù\\s*shì":"就是", "j[ùu]li[èe]":"剧烈", "jǐng惕":"警惕", "节cao":"节操", "浸yin":"浸淫", "jù\\s*jué\\s*":"拒绝", "jue色":"角色",
    "k[ěe]n[ée]ng":"可能", "开bao":"开苞", "k[àa]o近":"靠近", "口wen":"口吻", "kankan":"看看",
    "ling辱":"凌辱", "luan蛋":"卵蛋", "脸sè":"脸色", "lu出":"露出", "流máng":"流氓", "lun理":"伦理", "lì\\s*qì":"力气", "lán\\s*jié":"拦截", "lìng\\s*lèi":"另类", "lè\\s*suǒ":"勒索", "lòudòng":"漏洞",
    "m[ǎa]ny[ìi]":"满意", "m[ǎa]sh[àa]ng":"马上", "m[ée]iy[oǒ]u":"没有", "mei国":"美国", "měi\\s*nǚ":"美女", "mèi\\s*mèi":"妹妹", "m[íi]ngb[áa]i":"明白", "迷huan":"迷幻", "mi茫":"迷茫", "mó\\s*yàng":"模样", "m[íi]n\\s{0,2}zh[ǔu]":"民主", "迷jian":"迷奸", "mimi糊糊":"迷迷糊糊", "mì\\s*shū":"秘书", "末(?:\\s|<br/?>)*ì":"末日", "面se":"面色", "mengmeng":"蒙蒙", "màn\\s*huà":"漫画",
    "nàme":"那么", "n[ǎa]o\\s*d[àa]i":"脑袋", "n[ée]ngg[oò]u":"能够", "nán\\s{0,2}hǎi":"那会", "内jian":"内奸", "[内內]y[iī]":"内衣", "内ku":"内裤",
    "pi[áa]o客":"嫖客", "p[áa]ngbi[āa]n":"旁边",
    "q[íi]gu[àa]i":"奇怪", "qì\\s*chē":"汽车", "qing\\s*(ren|人)":"情人", "qin兽":"禽兽", "q[iī]ngch[uǔ]":"清楚", "què\\s*dìng":"确定", "球mi":"球迷", "青chun":"青春", "青lou":"青楼", "qingkuang":"情况", "qiang[　\\s]*jian":"强奸",
    "re\\s*nao":"热闹", "r[úu]gu[oǒ]":"如果", "r[oó]ngy[ìi]":"容易", "ru(房|白色)":"乳$1", "rén员":"人员", "rén形":"人形", "人chao":"人潮", "renmen":"人名", "ruǎn\\s*jiàn":"软件", "rì\\s*běn":"日本", "日\\s*běn":"日本",
    "shàng\\s*mén":"上门", "上jiang":"上将", "she(门|术|手|程|击)":"射$1", "sudu":"速度", "shú\\s*nǚ":"熟女", "shuijue":"睡觉", "shide":"是的", "sh[iì]ji[eè]":"世界", "sh[ií]ji[aā]n":"时间", "sh[ií]h[oò]u":"时候", "sh[ií]me":"什么", "si人":"私人", "shi女":"侍女", "shi身":"失身", "sh[ūu]j[ìi]":"书记", "shu女":"熟女", "shu[　\\s]?xiong":"酥胸", "(?:上|shang)chuang":"上床", "shǒu\\s*jī":"手机", "呻y[íi]n":"呻吟", "sh[ēe]ngzh[íi]":"生殖", "深gu":"深谷", "双xiu":"双修", "生r[ìi]":"生日", "si盐":"私盐", "shi卫":"侍卫", "si下":"私下", "sao扰":"骚扰", "ｓｈｕａｎｇ\\s*ｆｅｎｇ":"双峰", "shǎo\\s*fù":"少妇", "shì\\s*pín":"视频", "shè\\s*xiàng":"摄像",
    "t[uū]r[áa]n":"突然", "tiaojiao":"调教", "tí\\s*gòng":"提供", "偷qing":"偷情", "推dao":"推倒", "脱guang":"脱光", "t[èe]bi[ée]":"特别", "t[ōo]nggu[òo]":"通过", "同ju":"同居", "tian来tian去":"舔来舔去",
    "w[ēe]ixi[ée]":"威胁", "wèizh[ìi]":"位置", "wei员":"委员", "w[èe]nti":"问题", "wèi\\s*dào\\s*":"味道", "wú\\s*nài":"无奈", "wǔ\\s*qì":"武器",  "weilai":"未来",
    "xiu长":"修长", "亵du":"亵渎", "xing福":"幸福", "xìng\\s*yùn":"幸运", "小bo\\b":"小波", "小niū":"小妞", "xiong([^a-z])":"胸$1", "小tui":"小腿", "xiang港":"香港", "xiàohuà":"笑话", "xiāo\\s*shòu":"销售", "xiàn\\'zhì":"限制", "xiàn\\s*jīn":"现金", "xiāng\\s*zǐ":"箱子", "xiōng\\s*dì":"兄弟", "选zé":"选择", "xìn\\s*hào":"信号", "xìng\\s*gǎn":"性感", "xiǎo\\s*jiě":"小姐", "xìn\\s*hào":"信号", "xià\\s*zhù":"下注",
    "yì\\s*wài\\s*":"意外", "yin(冷|暗|谋|险|沉|沟|癸派|后)":"阴$1", "y[iī]y[àa]ng":"一样", "y[īi]di[ǎa]n":"一点", "yī\\s*zhèn":"一阵", "y[ǐi]j[īi]ng":"已经", "疑huo":"疑惑", "yí\\s*huò":"疑惑", "影mi":"影迷", "yin荡":"淫荡", "yin贼":"淫贼", "阳w[ěe]i":"阳痿", "yao头":"摇头", "yaotou":"摇头", "摇tou":"摇头", "yezhan":"野战", "you饵":"诱饵", "(?:you|诱)(?:惑|huo)":"诱惑", "you导":"诱导", "引you":"引诱", "you人":"诱人", "youshi":"有事", "you\\s*xiu":"优秀", "御yòng":"御用", "旖ni":"旖旎", "yu念":"欲念", "you敌深入":"诱敌深入", "影she":"影射", "牙qian":"牙签", "一yè情":"一夜情", "yīng\\s*yǔ":"英语",
    "z[iì]j[iǐ]":"自己", "z[ìi](?:\\s|<br/?>|&nbsp;)*y[oó]u":"自由", "zh[iī]d?[àa]u?o":"知道", "zixin":"自信", "zhì'fú":"制服", "zhì\\s*fú":"制服", "zha药":"炸药", "zhan有":"占有", "zhào\\s*piàn":"照片", "zhè\\s*gè":"这个", "政f[ǔu]|zheng府":"政府", "zh[èe]ng\\s{0,2}f[uǔ]":"政府", "zong理":"总理", "zh[ōo]ngy[āa]ng":"中央", "中yang":"中央", "zu[oǒ]\\s*y[oò]u":"左右", "zhǔ\\s*dòng":"主动", "zh[oō]uw[ée]i":"周围", "zhōu\\s*nián":"周年", "中nan海":"中南海", "中j委":"中纪委", "中zu部":"中组部", "政zhi局":"政治局", "(昨|一|时|余)(?:<br/?>|&nbsp;|\\s)*ì":"$1日", "照she":"照射", "zhǔn\\s*bèi\\s*":"准备", "zhu义":"主义",

    "</p>\\n<p>\\s*ì":"日",

    '曹艹': '曹操',
    'JI昂': '激昂',
    '□□无暇': '自顾无暇',
    '法律/界': '法律界',
    '人/类': '人类',
    '恐怖/主义': '恐怖主义',
    '颠/覆': '颠覆',
    '民.事.司.法.裁.判': '民事司法裁判',
    '南海/问题': '南海问题',
    '圈圈/功': '法轮功',
    '镇/压': '镇压',
    '赤.裸': '赤裸',
    '欲·望': '欲望',
    'nv真': '女真',
    '土gai': '土改',
    '狗·屎': '狗屎',
    'du立': '独立',
    '发sao': '发骚',
    '奸/夫/淫/妇': '奸夫淫妇',
    '爱qing': '爱情',
    '抚mo': '抚摸',
    '神qing': '神情',
    '公~务~员': '公务员',
    '原着': '原著',
    '□□部分': '高潮部分',
    '角□□面': '角色情面',
    '艹': '操',
    '淫/靡/香/艳': '淫靡香艳',
    '毒丨药': '毒药',
    '登6': '登陆',
    '天□□美': '天性爱美',
    '双丨飞': '双飞',
    '高chao': '高潮',
    'pi股': '屁股',
    '情/趣': '情趣',
    '情/欲': '情欲',
    '炸/弹': '炸弹',
    '赤/身': '赤身',
    '果/体': '裸体',
    'zhong国': '中国',
    '帝国#主义': '帝国主义',
    '形形□□': '形形色色',
    'yuwang': '欲望',
    'shuangtui': '双腿',
    '城／管': '城管',
    '调丨教': '调教',
    '银/行/卡': '银行卡',
    '裸/体': '裸体',
    '光/裸': '光裸',
    '嫩/女': '嫩女',
    '维/谷': '维谷',
    '开□□谈': '开始交谈',
    '破碎的□□': '破碎的呻吟',
    'pi霜': '砒霜',
    'ma醉': '麻醉',
    '麻zui': '麻醉',
    'nue杀': '虐杀',
    '后gong': '后宫',
    '林荫dao': '林荫道',
    '分/身': '分身',
    '克/隆': '克隆',
    '性/需要': '性需要',
    '黑/帮': '黑帮',
    '政-府': '政府',
    '八/九': '八九',
    '不～着~寸～缕': '不着寸缕',
    '肉~体': '肉体',
    '蹲□子': '蹲下身子',
    'ji情': '激情',
    'xie恶': '邪恶',
    'Z国': '中国',
    '创/世': '创世',
    '紫jin城': '紫禁城',
    '□□在外': '裸露在外',
    '光怪6离': '光怪陆离',
    '邪/教': '邪教',
    '粗bao': '粗暴',
    'yin邪': '淫邪',
    '小biao砸': '小婊砸',

    '牛1b': '牛b', '微1博': '微博', '内1衣': '内衣',

    '虫\\*{2}流': '虫族交流', '合成\\*{2}流': '合成兽交流',
    '虫\\*{2}战': '虫族交战',
    '东XZ': '东西藏', '东躲XZ': '东躲西藏',
    '幸苦': '辛苦', '就就给': '就交给', 
    'DU犯': '毒贩', '网络招piao': '网络招嫖', 
    '犯du': '贩毒', 
    'ZZ秩序': '政治秩序',
    '(市|世界|国)ZF': '$1政府',
    'Z-F': '政府',
    'GS勾结': '官商勾结',
    '高级GY': '高级官员',
    'guo家': '国家',
    '加na大': '加拿大',
    'jian杀': '奸杀',
    '火jian弹': '火箭弹',
    'zha弹': '炸弹',
    'GW员': '公务员',
    'jun火': '军火',
    '外jun': '外军',
    'JDZ瓷器': '景德镇瓷器',
    'zz正确': '政治正确',
    'WJ特战': '武警特战',
    '\\*{2}手': '兽交手',
    '[÷➗]生CH': '畜生策划',
    '野\\*{2}战': '野兽交战',
    '妖\\*{2}锋': '妖兽交锋',
    'CTM的': '操他妈的',
    '云N': '云南',

    '[AM霉]国': '美国',
    '[CZ]国': '中国',
    '[JR]国': '日本',
    'E国': '俄国',
    '[BY]国': '英国',
    'F国': '法国',
    'D国': '德国',

    'Z传': '中传', 'Z戏': '中戏', 'Y美': '央美', 'B影': '北影',
    //'P大': '北大', 'T大': '清华', 'N大': '南大',

    '迸\\*{2}光': '迸射精光',
    '十之八\\*' : '十之八九',
    '关键\\*{3}': '关键性交流',
    '\\*{3}主播': '性视频主播',
    '奶\\*{2}上': '奶奶头上',
    '狭\\*{2}仄': '狭小逼仄', // 狭窄逼仄
    '(男|女)\\*{3}玩家': '$1性游戏玩家',
    '(switc)\\*{3}': 'Switch游戏',
    'flas\\*{3}': 'Flash游戏',
    '注\\*{2}神': '注射精神',
    '瞎\\*{2}掰扯': '瞎鸡巴掰扯',

    '\\.asxs\\.': '起点',
    '\\b(?:boos|boso)\\b': 'BOSS',

    '伱': '你', '勐': '猛', '澹': '淡', '桉': '案', '莪': '我',
    '個': '个',
  };

  const r = String.raw;

  const replaceAll = [
    // 长文字替换
    // 排序代码：newArr = arr.sort((a, b) => { var diff = a.charCodeAt(1) - b.charCodeAt(1); if (diff == 0) return b.length - a.length; return diff; })
    '(?=<!--)([\\s\\S]*?)-->',
    '本站域名已经更换为.*，老域名(?:已经|即将)停用，请大家重新收藏，并使用新域名访问。',
    // "\\(跪求订阅、打赏、催更票、月票、鲜花的支持!\\)",
    // "\\(?未完待续请搜索飄天文學，小说更好更新更快!",
    // "\\(跪求订阅、打赏、催更票、月票、鲜花的支持!",
    // "狂沙文学网 www.kuangsha.net",
    // "\\(看小说到网\\)",
    "\\(未完待续。\\)",
    "\\(本章完\\)",
    // "16977小游戏每天更新好玩的小游戏，等你来发现！",
    // "（800小说网 www.800Book.net 提供Txt免费下载）最新章节全文阅读-..-",
    // "（800小说网 www.800Book.net 提供Txt免费下载）",
    // "\\[800\\]\\[站页面清爽，广告少，",
    // "\\[看本书最新章节请到求书 .\\]",
    // "（\\s*君子聚义堂）",
    // "readx;",
    // "txt电子书下载/",
    // "txt全集下载",
    // "txt小说下载",
    // "\\|优\\|优\\|小\\|说\\|更\\|新\\|最\\|快\\|www.uuxs.cc\\|",
    // "\\|每两个看言情的人当中，就有一个注册过可°乐°小°说°网的账号。",
    // "思ˊ路ˋ客，更新最快的！",
    // "恋上你看书网 630bookla ，最快更新.*",
    "[，,]举报后维护人员会在两分钟内校正章节内容[，,]请耐心等待[，,]并刷新页面。",
    // "追书必备",
    // "-优－优－小－说－更－新－最－快-www.ＵＵＸＳ.ＣＣ-",
    // "-优－优－小－说－更－新－最－快x",
    // "来可乐网看小说",
    // "纯文字在线阅读本站域名手机同步阅读请访问",
    // "本文由　　首发",
    // "樂文小说",
    // '最快更新无错小说阅读，请访问 请收藏本站阅读最新小说!',
    // "最新章节全文阅读看书神器\\.yankuai\\.",
    // "最新章节全文阅读（..首发）",
    // "最新章节全文阅读【首发】",
    // "最新章节全文阅读",
    // "看本书最新章节请到800小说网（www.800book.net）",
    "（本章未完，请翻页）",
    // "手机用户请浏览m.biqugezw.com阅读，更优质的阅读体验。",
    // "手机用户请浏览阅读，更优质的阅读体验。",
    // "阅读，更优质的阅读体验。",
    // "手机最省流量无广告的站点。",
    // "手机看小说哪家强手机阅",
    // "如果你喜欢本站[〖]?一定要记住[】]?(?:网址|地址)哦",
    // "看清爽的小说就到",
    // "请用搜索引擎(?:搜索关键词)?.*?完美破防盗章节，各种小说任你观看",
    // "完美破防盗章节，请用搜索引擎各种小说任你观看",
    // "破防盗章节，请用搜索引擎各种小说任你观看",
    // "(?:搜索引擎)?各种小说任你观看，破防盗章节",
    "章节错误，点此举报\\(免注册\\)",
    // "热门小说最新章节全文阅读.。 更新好快。",
    // "【阅读本书最新章节，请搜索800】",
    // "亲，百度搜索眼&amp;快，大量小说免费看。",
    // "亲，眼&快，大量小说免费看。",
    // '下载免费阅读器!!',
    // '笔趣阁&nbsp;.，最快更新.*最新章节！',
    // '请大家搜索（书迷楼）看最全！更新最快的小说',
    // '更新快无广告。',
    // '【鳳.{1,2}凰.{1,2}小说网 更新快 无弹窗 请搜索f.h.xiao.shuo.c.o.m】',
    // '【可换源APP看书软件：书掌柜APP或直接访问官方网站shuzh.net】',
    // '[●★▲]手机下载APP看书神器.*',
    // "m.?手机最省流量的站点。",
    // 'm.?手机最省流量.无广告的站点。',
    // '底部字链推广位',
    // 'us最快',
    // 'APPapp',
    // '久看中文网首发',
    // '顶点小说 ２３ＵＳ．com更新最快',
    '7017k',
    '(?:请记住:.*?)?没有弹窗,更新及时 !',
    '如果你还没注册会员就先注册个会员吧，使用书架书签更方便哦。',
    '内容更新后，请重新刷新页面，即可获取最新更新！',
    '如果此章是作者求票之类废话的，请跳过继续看下一章',
    '提示：担心找不到本站？在也可以直接',
    '输入小说名可以少字但不要错字',
    '本网站提供的最新小说，电子书资源均系收集于网络，本网站只提供web页面服务，并不提供小资源存储，也不参与上传等服务。',
    '您可以按"CRTLD"将"傲宇阁"加入收藏夹！方便下次阅读。',
    '我是超级大美女，每天要美美的，做个精致的女人，让我身边的每个人感受到我的美丽！详情搜索微信公众号我是超级大美女或者复制微信号meinv92k扫描下面二维码快速加入！',
    '温馨提示：按回车\\[Enter\\]键返回书目，按←键返回上一页，按→键进入下一页。',
    '手机阅读点这里',
    '手机阅读请访问',
    '&#x25B2;&#x624B;&#x673a;&#x4e0B;&#x8f7d;app&#x770B;&#x4e66;&#x795e;&#x5668;&#xff0c;&#x767e;&#x5ea6;&#x641c;&#x5173;&#x952e;&#x8Bcd;&#xff1a;&#x4e66;&#x638c;&#x67dc;app&#x6216;&#x76f4;&#x63a5;&#x8BBf;&#x95ee;&#x5B98;&#x65B9;&#x7f51;&#x7ad9;;#x25B2;',
    '亲,点击进去,给个好评呗,分数越高更新越快,据说给新打满分的最后都找到了漂亮的老婆哦!',
    '猫扑中文',
    '点击下载本站APP,海量小说，免费畅读！',
    ', 报送后维护人员会在两分钟内校正章节内容,请耐心等待。?',
    ',刷新后小编会在两分钟内校正章节内容,请稍后再试。',
    '举报后请耐心等待,并刷新页面。',
    r`try\{mad1\('gad2'\);\} catch\(ex\)\{\}`,
    '：。：',
    '『加入书签，方便阅读』',
    r`本章节内容更新中\.\.\.`,
    '【本站首发，最快更新】',
    r`chaptererror\(\);`,
    'xqqxs[八8]\\.$',
    '韆釺哾$',
    '亲，本章已完，祝您阅读愉快！\\^0\\^',
    '亲，本章未完，还有下一页哦\\^0\\^',
    '感謝大家熱情支持，大家在(?:起點)?訂閱的同時，別忘了在微信、qq、微博、抖音和快手等渠道上幫探花宣傳，再次感謝了',
    '感谢大家热情支持，大家在(?:起点)?订阅的同时，别忘了在微信、qq、微博、抖音和快手等渠道上帮探花宣传，再次感谢了',
    '頂點小說網首發|顶点小说网首发',
    '|',
    '章节报错',
    '有梯子的书友加电报书友圈@shuyouquan看最新章节。?',
    '\\+ 加入书签 \\+',
    '看《.*?》最快更新请浏览器输入-.*?-到精华书阁进行查看',
    '有的人死了，但没有完全死……',
    '【书友福利】看书即可得现金or点币，还有iPhone12、Switch等你抽！关注vx公众号【书友大本营】可领！',
    '关注公众号：书粉基地，关注即送现金、点币！',
    '【看书领红包】关注公..众号【看文基地】，看书抽最高888现金红包！',
    '小主，这个章节后面还有哦^\\.^，请点击下一页继续阅读，后面更精彩！',

    '这候.*?章汜[。.]?',
    '强牺.*?读牺[。.]?',
    '制大.*?制枭[。.]?',
    
    // 复杂规则的替换
    // '(看小说到|爱玩爱看就来|就爱上|喜欢)?(\\s|<|>|&| |[+@＠=:;｀`%？》《〈︾-])?[乐樂](\\s|&lt;|&gt;|&amp;|&nbsp;|[+@＠=:;｀`%？》《〈︾-])?[文].*?[说說][网]?[|]?(.*(3w|[ｗωＷw]{1,3}|[Ｍm]).*[ｍＭm])?[}。\\s]?(乐文小说)?',
    // '(本文由|小说)?(\\s| )?((3w|[wＷｗ]{1,3}|[Ｍm]).)?\\s?[lしｌL][ｗωＷw][ｘχＸx][ｓＳs][５5][２2][０0].*[ｍＭm][|\\s]?(首发(哦亲)?)?',
    '([『【↑△↓＠︾]+[\u4E00-\u9FA5]){2,6}[】|]',
    /[ＵｕUu]+看书\s*[wｗ]+.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[cｃ][oｏ][mｍ]\s*/g,

    // 包含 \P 的替换
    '\\P{1,2}[顶頂].{1,3}[点小].*?o?[mw，]',
    '\\P.?长.{1,2}风.{1,2}文.{1,2}学.*?[tx]',
    '\\P无.错.*?[cＣ][oＯ][mＭ]',
    // '[;\\(]顶.{0,2}点.小说',
    // '2长2风2文2学，w￠＄',
    // '》长>风》',

    // 包含 .* 的，可能有多余的替换
    '看无防盗章节的小说，请用搜索引擎搜索关键词.*',
    '(?:完美)?破防盗章节，请用搜索引擎搜索关键词.*',
    '搜索引擎搜索关键词，各种任你观看，破防盗章节',
    // '.*搜索引擎搜索关键词.*',
    '破防盗完美章节，请用搜索引擎.*各种小说任你观看',
    // '如您已(?:閱讀|阅读)到此章节.*?敬请记住我们新的网址\\s*。',
    '如您已(?:閱讀|阅读)到此章[节節].*?(?:敬请记住我们新的网址|敬請記住我們新的網址).*',
    // '↗百度搜：.*?直达网址.*?↖',
    // "[:《〈｜~∨∟∑]{1,2}长.{1,2}风.*?et",
    '\\[限时抢购\\].*',
    '支持网站发展.逛淘宝买东西就从这里进.*',
    'ps[：:]想听到更多你们的声音，想收到更多你们的建议，现在就搜索微信公众号“qdread”并加关注，给.*?更多支持！',
    '(?:ps[:：])?看《.*?》背后的独家故事.*?告诉我吧！',
    '（?天上掉馅饼的好活动.*?微信公众号！）?',
    '（微信添加.*qdread微信公众号！）',
    // 'jiemei如您已阅读到此章节，请移步到.*?\\[ads:本站换新网址啦，速记方法：，.\\]',
    // '先给自己定个小目标：比如收藏笔趣阁.*',
    '请记住本书首发域名.*',
    '记住手机版网址.*',
    // '.*关注微信公众号.*',
    '天才一秒记住本站地址：.*?最快更新！无广告！',
    '先定个小目标，比如1秒记住：.*',
    '(?:天才)?一秒记住.*',
    '(?:天才)?1秒记住.*',
    '\\(?本章未完.*',
    '笔趣阁.*最快更新.*',
    '最新网址：.*?[ \\xa0\\u3000]',
    '最新网址：.*',
    '^先定个小目标，比如1秒记住： .*',
    '^热门推荐：.*',
    '^猜您喜欢：.*',
    '^更新最快.*',
    '^.*请你先收藏此页吧，方便等下阅读咯……',
    '^.*更新中……努力更新中…….*',
    '^本站已更改域名，最新域名：.*',
    '^.*正在手打中，请稍等片刻[，。].*',
    '^.*全文字更新,牢记网址:.*',
    '^小说分类：.*',
    '^本书来源.*',
    '^本书来自.*',
    '新阅读网址：.*?，感謝支持，希望大家能支持一下手机网站：.*',
    '【本章节首发.*?,请记住网址（.*?）】.*',
    '\\[记住网址.*?\\]',
    '(?:8\\)|a)更多精彩小说，欢迎访问.*',
    '▲手机下载app看书神器，百度搜关键词：.*?或直接访问官方网站.*?▲',
    '手机用户看.*?请浏览.*?，更优质的用户体验。',
    '，最快更新.*?最新章节！',
    '推荐.*?大神.*?新书:.*',
    '^.*欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在.*',
    '^恋上你看书网.*',
    '(?:您可以在百度里搜索)?“.*?”查找最新章节！',
    // '“.*?\\(.*?\\)”',
    '为了方便下次阅读，你可以在?点击下方的"收藏"记录本次（.*?）阅读记录，下次打开书架即可看到！',
    '(?:喜欢《.*?》)请向你的朋友（QQ、博客、微信等方式）推荐本书，谢谢您的支持！！',
    '^.*手机阅读地址.*',
    '小说.*?首发，欢迎读者登录.*?最新章节。',
    '为您提供大神.*?最快更新，为了您下次还能查看到本书的最快更新，请务必保存好书签！',
    '为您提供.*?大神的《.*?》最快更新，为了您下次还能查看到本书的最新章节，请务必保存好书签！',
    '^.*为你提供最快的.*?更新，.*',
    '^.*最新章节 请关注\\(\\)',
    '^.*老域名(?:\\(.*?\\))?被墙，请您牢记本站最新域名(?:\\(.*?\\))?',

    // '.*笔下文学更新速度最快.*',
    // '.*(?:下载)?爱阅(?:小说)?app.*?。(?:活动推广期间.*。)?',
    '为您提供.*最快更新',
    '喜欢.*?请大家收藏：\\(.*?\\).*?更新速度最快。',
    '《.*?》无错章节将持续在.*?更新.站内无任何广告.还请大家收藏和推荐.*?！.*?$',
    '注：如你看到本章节内容是防盗错误内容、本书断更等问题请登录后→→',
    '手机站全新改版升级地址：.*?，数据和书签与电脑站同步，无广告清新阅读！',
    '第.*?章.*?免费阅读[.。]?',
    'Copyright.*?联系我们：.*',
    '^正文$',
    '.杂.志.虫.',
    '^作者：.*?分类：.*',
    '^@@\\?\\s*',
    '\\)(?: 下载免费阅读器)?!!$',
    '^txt下载地址：.*',
    '^.*手机版阅读网址：.*',
    '^(?:本书)?手机阅读：.*',
    '/txt/\\d+/',

    // 爱阅小说app广告
    '特大好消息,退出转码页面,下载爱阅小说app后，全部小说免广告看，还能优先看最新章节。',
    '想要看最新章节内容，请下载爱阅小说app，无广告免费阅读最新章节内容。',
    '网站已经不更新最新章节内容，最新章节内容已经在爱阅小说APP更新。',
    '网站已经不更新最新章节内容，已经爱阅小说APP更新最新章节内容。',
    '活动推广期间，用户还可以免费领取礼包100块钱话费。',
    '下载爱阅小说app，阅读最新章节内容无广告免费',
    '下载爱阅app阅读完整内容，无广告无弹窗。',
    '看最新内容，请下载爱阅小说app阅读最新章节。',
    '网页版章节内容慢，请下载爱阅小说app阅读最新内容。?',
    '领取红包，请下载爱阅app免费看最新内容。',
    '网站即将关闭，下载爱阅app免费看最新内容。?',
    '网站即将关闭，下载爱阅app为您提供大神.*?的.*',
    '网站即将关闭，下载爱阅app为您提供大神小说免费阅读的.*',
    '请退出转码页面，请下载爱阅小说app 阅读最新章节。',
    '下载app爱阅小说免费看最新内容',
    '爱阅小说app',

    // 咪咪阅读app广告
    // 野果阅读app广告
    // 换源app广告
    // '广个告，【\\咪\\咪\\阅读\\app\\mimiread\\】真心不错，值得装个，毕竟可以缓存看书，离线朗读！'
    // '插播一个app:完美复刻追书神器旧版本可换源的APP——咪咪阅读mimiread。'
    '广个告，【.*?】真心不错，值得装个，(?:毕竟可以缓存看书，离线朗读|竟然安卓苹果手机都支持|毕竟书源多，书籍全，更新快)！',
    '^(?:广个告|插一句)，我最近在用的小说app，【.*?】安卓苹果手机都支持！',
    '插播一个app: ?完美复刻追书神器旧版本可换源的APP.*?。',
    '【?推荐下，.*?追书真的好用，这里下载.*大家去快可以试试吧。】?',
    '【?话说，目前朗读听书最好用的.*?安装最新版。】?',
    '【讲真，最近一直用.*?看书追更，换源切换，朗读音色多，.*?安卓苹果均可。】',
    '插一句，【.*?】真心不错，值得装个，毕竟书源多，书籍全，快！',
    '插一句，我最近在用的(?:追|看)书.*?(?:缓存看书，离线朗读|书源多，书籍全，更新快)！',
    '推荐下，我最近在用的看书app，【.*?】书源多，书籍全，更新快！',
    '推荐下，【.*?】真心不错，值得书友都装个，安卓苹果手机都支持！',
    '求助下，【.*?】可以像偷菜一样的偷书票了，快来偷好友的书票投给我的书吧。',
    '【认识十年的老书友给我推荐的追书app，.*?！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载.*?】',
    '书友们之前用的小书亭\\s*已经挂了，现在基本上都在用.*?。',
    '推荐一个app，媲美旧版追书神器，可换源书籍全的.*?！',
    '【告知书友，时代在变化，免费站点难以长存，手机app多书源站点切换看书大势所趋，站长给你推荐的这个咪咪阅读app，听书音色多、换源、找书都好使！】',
    '【告知苹果书友，以后能免费稳定看书的网站、app只会更少，站长推荐赶快安装一个专为苹果书友打造的听书，换源，找书都很棒的咪咪阅读，解决书荒不迷路！】',
    '【告知安卓书友，越来越多免费站点将会关闭失效，安卓app鱼目混珠，找一个安全稳定看书的app非常有必要，站长强烈推荐咪咪阅读，听书、换源、找书超好使！】',
    'mimiread',
    '咪咪阅读app',
    '【.*?咪咪阅读.*?】',
    '【.*?野果阅读.*?】',
    '【.*?换源app.*?】',
    '小书亭(?:app)?',

    // 悠阅书城app广告
    '^【?(?:悠阅书城|悠閱書城).*',
    // '【悠阅书城APP，免费看小说全网无广告，IOS需海外苹果ID下载】',
    // '【悠閱書城一個免費看書的換源APP軟體，安卓手機需下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
    // '【悠阅书城的換源app軟體，安卓手機需google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
    // '【悠閱書城一個免費看書的換源APP軟體，安卓手機需Google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
    // '【悠阅书城uc书盟的換源app軟體，安卓手機需下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',
    // '【悠阅书城小说的換源app軟體，安卓手機需google 下載安裝，蘋果手機需登陸非中國大陸賬戶下載安裝】',

    // 删除组合字符
    // https://en.wikipedia.org/wiki/Combining_character
    // '[\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F]',

    // 起点新广告
    '本.章.未.完.，.登.录.「.起.点.读.书.」.和.书.友.一.起.读.正.版.原.文.！.新.用.户.立.享.7.天.免.费.畅.读.，.快.来.试.试.吧.！.(?:（.新.设.备.新.账.号.可.享.）.)?',
    '本.章.未.完.，.登.錄.「.起.點.讀.書.」.和.書.友.一.起.讀.正.版.原.文.！.新.用.戶.立.享.7.天.免.費.暢.讀.，.快.來.試.試.吧.！.(?:（.新.設.備.新.賬.號.可.享.）.)?',
    '总是一个人静悄悄地(?:看小说)?(?:, |，)没有人一起讨论很无趣？快来.?起.点.?读书，和书友们一起畅所欲言',
    '總是一個人靜悄悄地(?:看小說)?(?:, |，)沒有人一起討論很無趣？快來.?起.點.?讀書，和書友們一起暢所欲言',

    '\\(未完待续。如果您喜欢这部作品，欢迎您来起点（.*?）投推荐票、月票，您的支持，就是我最大的动力。手机用户请到.*?阅读。\\)',
    '\\[bookid=\\d+,bookname=.*?\\]',
    
    // 小说站点名字/域名
    '(?:吞噬|ABC|无错)小说网',
    '(?:好看的言情|番茄|2k|YY)小说',
    '(?:23shu8*com|biquge.name)',
    '(?:八壹|八一|零点|315|畅想)中文网',
    '记住网址(?:m.ｘｂｅｑｕｇｅ．com|m.ｘｂｅｑｕｇｅ．ｃｏｍ)',
    '(?:紫笔文学|饭团看书|百盟书|燃文|零点看书网|小说阅读网|思路客|雅文库|搜读)',


    // 短文字替换
    // '\\[txt全集下载\\]',
    // '\\[\\s*超多好看小说\\]',
    // '⊙四⊙五⊙中⊙文☆→',
    // '\\[ads:本站换新网址啦，速记方法：.*?\\]',
    // '[》《｜～]无(?:.|&gt;)错(?:.|&gt;)小说',
    // '`无`错`小说`www.``com', '＋无＋错＋小说＋3w＋＋',
    // '\\|优\\|优\\|小\\|说\\|更\\|新\\|最\\|快Ｘ',
    '▲∴', '8，ww←',
    // /www.23＋?[Ｗw][Ｘx].[Ｃc]om/ig,
    // /热门推荐:、+/g,
    // /h2&gt;/g,
    // '[《〈》>\\+｜～［\\]]无\\1错\\1', '》无>错》',

    // '女凤免费小说抢先看', '女凤小说网全文字 无广告',
    // '乐文小说网?', '《乐〈文《小说', '乐文移动网', '頂点小说', '頂點小說',
    // '追小说哪里快去眼快',
    // '\\[书库\\].\\[774\\]\\[buy\\].kuai',
    // 'www.938xs.com',
    // '小說，.biquge5200.',
    
    /'ads_wz_txt;',|百度搜索|无弹窗小说网|更新快无弹窗纯文字|高品质更新|小说章节更新最快|\(百度搜.\)|全文字手打|“”&nbsp;看|无.弹.窗.小.说.网|追书网|〖∷∷无弹窗∷纯文字∷ 〗/g,
    
    // '谷[婸秇鯪鐰愱瞻桮袁狲梋荬瑏鐲惗钲鉦鮪歄鎣刬頲櫦磆铩睎]',
    // '^谷[\\u4e00-\\u9fa5]{0,1}|谷[\\u4e00-\\u9fa5]{0,1}$',
    '谷.\\s*<?/span>?',
    '^谷[\\u4e00-\\u9fa5]$',
    '谷[\\u4e00-\\u9fa5]?$',

    // 低优先级替换
    ' https?://.*',
    '^.*\\(?https?://.*',
    '\\(\\)',
    '\\[\\]',
    '【】',
    '《》',
    '^[。？！.?!`|]',
    '^[()]$'
    
  ];

  // import _ from 'underscore'

  // 单字替换，可能会误替换，所以需要特殊处理
  var oneWordReplace = {
    "b[āà]ng":"棒","bào":"爆","bà":"吧","bī":"逼","bō":"波", "biàn":"便",
    "cāo":"操", "cǎo":"草", "cào":"操", "chāng":"娼", "chang":"娼", "cháo":"潮", "chā":"插", "chéng":"成", "chōu":"抽", "chuáng":"床", "chún":"唇", "chūn":"春", "cuō":"搓", "cū":"粗",
    "dǎng":"党", "dàng":"荡", "dāo":"刀", "dòng":"洞", "diao":"屌", "diǎn":"点",
    "fǎ":"法", "féi":"肥", "fù":"妇",
    "guān":"官",
    "hán":"含", "hóu":"喉", "hòu":"后", "h(u)?ā":"花", "huá":"华", "huì":"会", "huò":"惑", "hùn":"混", "hún":"魂",
    "jiǔ":"九", "j[īi]ng":"精", "jìn":"禁", "jǐng":"警", "jiāng":"江", "jiān":"奸", "jiāo":"交", "jūn":"军", "jū":"拘", "jú":"局", "jī":"激", "激ān":"奸",
    "kù":"裤", "kàn":"看",
    "[1l]àng":"浪", "liáo":"撩", "liú":"流", "lì":"莉", "liè":"烈", "[1l]uàn":"乱", "lún":"伦", "luǒ":"裸", "lòu":"露", "[l1]ù":"露", "lǜ":"绿", "liàn":"练",
    "mǎi":"买", "mài":"卖", "máo":"毛", "mā":"妈", "méng":"蒙", "mén":"门", "miè":"灭", "mí":"迷", "mì":"蜜", "mō":"摸", "miàn":"面",
    "nǎi":"奶", "nèn":"嫩", "niào":"尿", "niē":"捏", "nòng":"弄", "nǚ":"女",
    "pào":"炮", "piàn":"片", "pò":"破",
    "qi[āa]ng":"枪", "qíng":"情", "qīn":"亲", "qiú":"求", "quán":"全", "qù":"去",
    "rén":"人", "r[ìi]":"日", "rǔ":"乳",

    // s
    "sǎ":"洒", "sāo":"骚", "sǎo":"骚", "sè":"色", "se":"色", "shā":"杀",
    "shēn":"身", "shēn":"呻",   // 2个重复的，误替换且是单字怎么办
    "shén":"神", "shè":"射", "shǐ":"屎", "shì":"侍", "sǐ":"死", "sī":"私", "shǔn":"吮", "sǔn":"吮", "sū":"酥", "shào":"绍",

    "tān":"贪", "tiǎn":"舔", "t[ǐi]ng":"挺", "tǐ":"体", "tǒng":"捅", "tōu":"偷", "tou":"偷", "tuǐ":"腿", "tūn":"吞", "tún":"臀", "tiáo":"调", "tài":"态", "tào":"套",
    "wēn":"温", "wěn":"吻",
    "xiǎo":"小", "xiào":"笑", "xìng":"性", "xing":"性", "xiōng":"胸", "xī":"吸", "xí":"习", "xì":"系", "xìn":"信", "xué":"穴", "xuè":"穴", "xùe":"穴",  "xuan":"宣", "xiàng":"象",
    "yāng":"央", "yàn":"艳", "yīn":"阴", "yào":"药", "yé":"爷", "yòu":"诱", "zàng":"脏", "y[ùu]":"欲", "yín":"淫", "yì":"意", "yà":"讶",
    "zhēn":"针", "zēn":"针", "zhà":"炸", "zhèng":"政", "zǒu":"走", "zuì":"罪", "zuò":"做", "zhōng":"中",
  };

  var replaceFix = {
    // ===误替换还原===
    "碧欲":"碧玉", "美欲":"美玉","欲石":"玉石","惜欲":"惜玉","宝欲":"宝玉",
    "品性":"品行", "德性":"德行",
    "波ok":"book", "波SS":"BOSS",

    // ===其他修正===
    "弥俩":"你俩",
    "妳":"你",
    // "圞|垩|卝|龘":"",
    "大6":"大陆",
  };

  function extendRule(replaceRule) {
    _.each(oneWordReplace, function(value, key) {
      // 这个替换会把 yùn 替换为 yù
      // replace['\\b' + key + '(?:\\b|\\s*)'] = value;

      // 这个不会替换 rén： shā rén偿命 => 杀 rén偿命
      // replaceRule['([^a-z\\s])' + key + '(?![a-z])'] = '$1' + value;

      replaceRule['\\b' + key + '(?![a-z])'] = value;
    });

    _.extend(replaceRule, replaceFix);
  }
  // test()

  // Unicode/2000-2FFF：http://zh.wikibooks.org/wiki/Unicode/2000-2FFF
  // Unicode/F000-FFFF：https://zh.wikibooks.org/wiki/Unicode/F000-FFFF

  // replace 中的简写
  var CHAR_ALIAS = {
    '\\P': '[\\u2000-\\u2FFF\\u3004-\\u303F\\uFE00-\\uFF60\\uFFC0-\\uFFFF]',  // 小说中添加的特殊符号
  };

  // ===== 自动尝试的规则 =====
  var Rule = {
    titleRegExp: /第?\s*[一二两三四五六七八九十○零百千万亿0-9１２３４５６７８９０〇]{1,6}\s*[章回卷节折篇幕集话話]/i,
    titleReplace: /^章节目录|^文章正文|^正文卷?|全文免费阅读|最新章节|\(文\)/,

    // nextRegExp: /[上前下后][一]?[页张个篇章节步]/,
    nextSelector: "a[rel='next'], a:contains('下一页'), a:contains('下一頁'), a:contains('下一章'), a:contains('下一节'), a:contains('下页'), a:contains('下章')",
    prevSelector: "a[rel='prev'], a:contains('上一页'), a:contains('上一頁'), a:contains('上一章'), a:contains('上一节'), a:contains('上页'), a:contains('上章')",
    // 忽略的下一页链接，匹配 href
    nextUrlIgnore: [
        /(?:(?:index|list|last|LastPage|end)\.)|BuyChapterUnLogin|^javascript:/i,

        // qidian
        // /BookReader\/LastPageNew\.aspx/i,
        // /read\.qidian\.com\/BookReader\/\d+,0\.aspx$/i,
        /read\.qidian\.com\/$/i,
        // /free\.qidian\.com\/Free\/ShowBook\.aspx\?bookid=/i,

        /book\.zongheng\.com\/readmore/i,
        /www\.shumilou\.com\/to-n-[a-z]+-\d+\.html/i,
        /\/0\.html$/i,
    ],
    nextUrlCompare: /\/\d+([_-]\d+)?\.html?$|\/wcxs-\d+-\d+\/$|chapter-\d+\.html$|\/\d+_\d+\/$|\/\d+\/\d+$/i,  // 忽略的下一页链接（特殊），跟上一页比较

    // 按顺序匹配，匹配到则停止。econtains 完全相等
    indexSelectors: ["a[href='index.html']", "a:contains('返回书目')", "a:contains('章节目录')", "a:contains('章节列表')",
        "a:econtains('最新章节')", "a:contains('回目录')","a:contains('回书目')", "a:contains('目 录')", "a:contains('目录')"],

    contentSelectors: ["#pagecontent", "#contentbox", "#bmsy_content", "#bookpartinfo", "#htmlContent",
        "#text_area", "#chapter_content", "#chapterContent", "#chaptercontent", "#partbody", "#BookContent", "#read-content",
        "#article_content", "#BookTextRead", "#booktext", "#book_text", "#BookText", "#BookTextt", "#readtext", "#readcon", "#read",
        "#TextContent", "#txtContent" , "#text_c", "#txt_td", "#TXT", "#txt", "#zjneirong",
        "#contentTxt", "#oldtext", "#a_content", "#contents", "#content2", "#contentts", "#content1", "#content", 
        "#booktxt", "#nr", "#rtext", "#articlecontent", "#novelcontent", "#text-content", "#articlebody",
        "#ChapterContents", "#acontent", "#chapterinfo", "#read_content", "#chapter-content",
        ".novel_content", ".readmain_inner", ".noveltext", ".booktext", ".yd_text2",
        ".articlecontent", ".readcontent", ".txtnav", ".content", ".art_con", ".article",
        "article",
    ],

    // 尝试查找书名。顶部章节导航的最后一个链接可能是书名。
    bookTitleSelector: [
      '.h1title > .shuming > a[title]',
      '.chapter_nav > div:first > a:last',
      '#header > .readNav > span > a:last',
      'div[align="center"] > .border_b > a:last',
      '.ydselect > .weizhi > a:last',
      '.bdsub > .bdsite > a:last',
      '#sitebar > a:last',
      '.con_top > a:eq(1)',
      '.con_top > a:last',
      '.breadCrumb > a:last',
      '.breadcrumb > a:last',
      '.bookNav > a:last',
      '.srcbox > a:last',
      '.con_top > .nr_s1 > a:last',
      '.location > a:last',
      '.nav > a:last',
      '.DivCurrentPos > a:last',
      '.layout-tit > a:last',
      '.ymdz > a:last',
      '.articletitle > a',
      '.chepnav > a:last',
      '.bread_crumbs a:last',
      '.weizhi a:last',
      '.breadcrumbs a:last',
      '.cover-nav a:last',
      '.path > .p > a:last',
      '.headlink > .linkleft > a:last',
      '.path a:last',
      '.readNav a:last',
      '.chapter-nav a:last',
      '.bread > a:nth-child(3)',
      '.bread a:last',
    ],
    bookTitleReplace: [
        '全文阅读$', '在线阅读$', '最新章节$', '^正文卷',
    ],

    contentRemove: "script, iframe, a, audio, style, button",          // 内容移除选择器
    removeLineRegExp: /<p>[　\s。;，！\.∷〖]*<\/p>/g,  // 移除只有一个字符的行

    // 以下不常改
    replaceBrs: /(<br[^>]*>[ \n\r\t]*){1,}/gi,    // 替换为<p>

    specialSite: sites,
    replace, replaceAll,

    customRules: [],
    customReplace: {},
    parseCustomReplaceRules,

  };

  // Rule.specialSite = sites

  // Rule.replace = replace

  extendRule(Rule.replace);

  // ===== 全局移除，在替换 <br> 为 \n 之后 =====
  // Rule.replaceAll = replaceAll


  // 自定义的
  // Rule.customRules = [];
  // Rule.customReplace = {};

  function parseCustomReplaceRules(str) {
    var arr = str.split(/\n/);
    var rules = {};
    _.each(arr, function(b) {
        var pos = b.indexOf('=');
        if (pos === -1) return;

        var key = b.substring(0, pos),
            value = b.substring(pos + 1, b.length);
        rules[key] = value;
    });
    return rules;
  }

  var tpl_mainHtml = "<div id=\"container\">\r\n    <div id=\"menu-bar\" title=\"点击显示隐藏章节列表\"></div>\r\n    <div id=\"menu\">\r\n        <div id=\"header\" title=\"打开目录\">\r\n            <a href=\"{indexUrl}\" target=\"_blank\">{bookTitle}</a>\r\n        </div>\r\n        <div id=\"divider\"></div>\r\n        <ul id=\"chapter-list\" title=\"左键滚动，中键打开链接（无阅读模式）\">\r\n        </ul>\r\n    </div>\r\n    <div id=\"mynovelreader-content\"></div>\r\n    <div id=\"loading\" style=\"display:none\"></div>\r\n    <div id=\"preferencesBtn\">\r\n        <img style=\"width:16px\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwklEQVRIibVVzWrCQBAeQk/bdk+bm0aWDQEPHtwVahdavLU9aw6KAQ+SQ86Sa19Aqu0T9NafSw8ttOgr1CewUB9CBL3Yy26x1qRp0A8GhsnO9yUzmxmAhKjX68cAMAeAufK3C875FQAsAWCp/O3CsqyhFlB+Oti2/cAYewrD8FDHarXahWEYUy1gGMbUdd1z/TwMw0PG2JNt2/ex5IyxR02CEJpIKbuEkJGOrRshZCSl7CKEJjrGGHuIFMjlcs9RZElNcWxGEAQHGONxWnKM8TgIgoPYMkkpL9MKqNx4xNX8LyOEvMeSq5uxMZlz3vN9v+D7foFz3os6V61Wz36QNhqNUyHENaV0CACLTUnFYvF6/WVUbJPIglI6FELctFqtMiT59Ha7TdcFVCxJ6XYs0Gw2T1SJBlsq0ZxSOhBC3Hied/QjSTUoqsn9lSb3o879avI61FXbzTUFACiXy7v70Tqdzj7G+COtwJ+jIpPJvKYl12ZZ1kucwJs+iBD6lFJ2TdOMHB2mab7/a1xXKpW9fD5/6zjO3erCcV33PMnCcRwnfuHEYXVlZrPZQWqiKJRKpe8Bt5Ol73leCQBmADBTfiJ8AebTYCRbI3BUAAAAAElFTkSuQmCC\"/>\r\n    </div>\r\n    <div id=\"alert\" style=\"display: none;\">\r\n        <p id=\"App-notice\"></p>\r\n    </div>\r\n\r\n    <div id=\"mynovelreader-app\">\r\n\r\n    </div>\r\n</div>";

  const autoBookTitleSelector = Rule.bookTitleSelector;

  function autoGetBookTitle($doc) {
      let bookTitle = '';
      // 依次获取
      for (let s of autoBookTitleSelector) {
          let $node = $doc.find(s);
          if ($node.length === 1) {
              bookTitle = $node.text();
              break
          }
      }

      // 排除一些无效的？
      C.log('autoGetBookTitle', bookTitle);

      return bookTitle
  }

  // 正文内容标准化替换

  let replaceNormalizeMap = null;

  function getNormalizeMap() {
    if (replaceNormalizeMap) {
      return replaceNormalizeMap
    }
    const rule = {
      '[,，]\\s*': '，', // 合并每一行以"，"结束的段落和去除"，"后的空格
      '\\s^，': '，', // 合并每一行以"，"开头的段落
      '\\s^”': '”', // 合并每一行以右引号开头的段落
      '\\. *$': '。',
      '\\.([”"])': '。$1',
      '([。！？”]) +': '$1',
      '，+': '，',
      '"(.*?)"': '“$1”',
      '”“': '”\n“', // 将一段中的相邻的对话分段
      // 将一段中的含多个句号、感叹号、问号的句子每句分为多段
      '([。！？])([\\u4e00-\\u9fa5“][\\u4e00-\\u9fa5“，]{20,})': '$1\n$2',
      // 将一段中的第一句后接对话（引号）句子的第一句话分段
      '(^.*?[.。])(“.*?”)': '$1\n$2',
      // 将一段中的右引号后面的内容分为一段
      '([。！？])”(?![\\u4e00-\\u9fa5，]+，“)([\\u4e00-\\u9fa5“，]{20,})':
        '$1”\n$2',
      '“([\\s\\S]*?)”': Setting.mergeQoutesContent
        ? match => match.replace(toRE('\n'), '')
        : undefined,
      '「(.*?)」': '“$1”',
      '『(.)』': '$1',
      '!': '！',
      ':': '：',
      '[┅。…·.]{3,20}': '……',
      '[~－]{3,50}': '——'
    };
    Object.keys(rule).forEach(key => !rule[key] && delete rule[key]);
    replaceNormalizeMap = rule;
    return rule
  }

  // 不转换 ，？：；（）！
  const excludeCharCode = new Set([
    65292, 65311, 65306, 65307, 65288, 65289, 65281
  ]);

  // 全角转半角
  function toCDB(str) {
    let tmp = '',
      charCode;
    for (let i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      if (
        charCode > 65248 &&
        charCode < 65375 &&
        !excludeCharCode.has(charCode)
      ) {
        tmp += String.fromCharCode(charCode - 65248);
      } else {
        tmp += str.charAt(i);
      }
    }
    return tmp
  }

  const includeCharCode = new Set([44, 63, 58, 59, 40, 41, 33]);

  // 半角转全角
  // 只转换，？：；（）！
  function toDBC(str) {
    let tmp = '',
      charCode;
    for (let i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      if (includeCharCode.has(charCode)) {
        tmp += String.fromCharCode(charCode + 65248);
      } else {
        tmp += str.charAt(i);
      }
    }
    return tmp
  }

  // 代码来自 https://github.com/hirak/phpjs
  // 有修改

  const fromLengthCache = new Map();

  function strtr(str, from, to) {
    var i = 0,
      j = 0,
      lenStr = 0,
      lenFrom = 0,
      fromTypeStr = '',
      toTypeStr = '',
      istr = '',
      fromLengthArray,
      matchTo,
      fromLength;
    var ret = '';
    var match = false;

    if (_.isObject(from)) {
      fromLengthArray = fromLengthCache.get(from);
      if (!fromLengthArray) {
        fromLengthArray = [...new Set(Object.keys(from).map(s => s.length))].sort(
          (a, b) => b - a
        );
        fromLengthCache.set(from, fromLengthArray);
      }
    }

    // Walk through subject and replace chars when needed
    lenStr = str.length;
    lenFrom = from.length;
    fromTypeStr = typeof from === 'string';
    toTypeStr = typeof to === 'string';

    for (i = 0; i < lenStr; i++) {
      match = false;
      if (fromTypeStr) {
        istr = str.charAt(i);
        for (j = 0; j < lenFrom; j++) {
          if (istr == from.charAt(j)) {
            match = true;
            break
          }
        }
      } else {
        for (fromLength of fromLengthArray) {
          if (from[str.substr(i, fromLength)]) {
            matchTo = from[str.substr(i, fromLength)];
            match = true;
            // Fast forward
            i += fromLength - 1;
            break
          }
        }
      }
      if (match) {
        ret += toTypeStr ? to.charAt(j) : matchTo;
      } else {
        ret += str.charAt(i);
      }
    }

    return ret
  }

  const $zh2Hant={"㐷":"傌","㐹":"㑶","㐽":"偑","㑇":"㑳","㑈":"倲","㑔":"㑯","㑩":"儸","㓥":"劏","㔉":"劚","㖊":"噚","㖞":"喎","㘎":"㘚","㚯":"㜄","㛀":"媰","㛟":"𡞵","㛠":"𡢃","㛣":"㜏","㛤":"孋","㛿":"𡠹","㟆":"㠏","㟜":"𡾱","㟥":"嵾","㡎":"幓","㤖":"懧","㤘":"㥮","㤭":"憍","㤽":"懤","㥪":"慺","㦈":"𢣏","㧏":"掆","㧐":"㩳","㧑":"撝","㧛":"擥","㧟":"擓","㧰":"擽","㨫":"㩜","㭎":"棡","㭏":"椲","㭣":"𣙎","㭤":"樢","㭴":"樫","㮠":"𣞁","㱩":"殰","㱮":"殨","㲿":"瀇","㳔":"濧","㳠":"澾","㳡":"濄","㳢":"𣾷","㳽":"瀰","㴋":"潚","㶉":"鸂","㶶":"燶","㶽":"煱","㺍":"獱","㻅":"璯","㻏":"𤫩","㻘":"𤪺","㾡":"𤷽","䀥":"䁻","䁖":"瞜","䂵":"碽","䃅":"磾","䅉":"稏","䅟":"穇","䅪":"𥢢","䇚":"𥵜","䇲":"筴","䉤":"籔","䌶":"䊷","䌷":"紬","䌸":"縳","䌹":"絅","䌺":"䋙","䌻":"䋚","䌼":"綐","䌽":"綵","䌾":"䋻","䌿":"䋹","䍀":"繿","䍁":"繸","䎬":"䎱","䏝":"膞","䓓":"薵","䓖":"藭","䖼":"𧍕","䗖":"螮","䘛":"𧝞","䘞":"𧜗","䙊":"𧜵","䙌":"䙡","䙓":"襬","䛓":"譼","䜣":"訢","䜤":"鿁","䜥":"𧩙","䜧":"䜀","䜩":"讌","䝙":"貙","䞌":"𧵳","䞍":"䝼","䞎":"𧶧","䞐":"賰","䟢":"躎","䢀":"𨊰","䢁":"𨊸","䢂":"𨋢","䥺":"釾","䥽":"鏺","䥾":"䥱","䥿":"𨯅","䦀":"𨦫","䦁":"𨧜","䦂":"䥇","䦃":"鐯","䦅":"鐥","䦆":"钁","䦶":"䦛","䦷":"䦟","䩄":"靦","䭪":"𩞯","䯃":"𩣑","䯄":"騧","䯅":"䯀","䲝":"䱽","䲞":"𩶘","䲟":"鮣","䲠":"鰆","䲡":"鰌","䲢":"鰧","䲣":"䱷","䲤":"鿐","䴓":"鳾","䴔":"鵁","䴕":"鴷","䴖":"鶄","䴗":"鶪","䴘":"鷈","䴙":"鷿","䶮":"龑","万":"萬","与":"與","专":"專","业":"業","丛":"叢","东":"東","丝":"絲","丢":"丟","两":"兩","严":"嚴","丧":"喪","个":"個","丰":"豐","临":"臨","为":"為","丽":"麗","举":"舉","么":"麼","义":"義","乌":"烏","乐":"樂","乔":"喬","习":"習","乡":"鄉","书":"書","买":"買","乱":"亂","争":"爭","于":"於","亏":"虧","云":"雲","亚":"亞","产":"產","亩":"畝","亲":"親","亵":"褻","亸":"嚲","亿":"億","仅":"僅","从":"從","仑":"侖","仓":"倉","仪":"儀","们":"們","价":"價","众":"眾","优":"優","会":"會","伛":"傴","伞":"傘","伟":"偉","传":"傳","伡":"俥","伣":"俔","伤":"傷","伥":"倀","伦":"倫","伧":"傖","伪":"偽","伫":"佇","体":"體","佣":"傭","佥":"僉","侠":"俠","侣":"侶","侥":"僥","侦":"偵","侧":"側","侨":"僑","侩":"儈","侪":"儕","侬":"儂","俣":"俁","俦":"儔","俨":"儼","俩":"倆","俪":"儷","俫":"倈","俭":"儉","债":"債","倾":"傾","偬":"傯","偻":"僂","偾":"僨","偿":"償","傥":"儻","傧":"儐","储":"儲","傩":"儺","儿":"兒","兑":"兌","兖":"兗","党":"黨","兰":"蘭","关":"關","兴":"興","兹":"茲","养":"養","兽":"獸","冁":"囅","内":"內","冈":"岡","册":"冊","写":"寫","军":"軍","农":"農","冯":"馮","冲":"沖","决":"決","况":"況","冻":"凍","净":"淨","凄":"淒","凉":"涼","减":"減","凑":"湊","凛":"凜","几":"幾","凤":"鳳","凫":"鳧","凭":"憑","凯":"凱","击":"擊","凿":"鑿","刍":"芻","划":"劃","刘":"劉","则":"則","刚":"剛","创":"創","删":"刪","别":"別","刬":"剗","刭":"剄","刹":"剎","刽":"劊","刾":"㓨","刿":"劌","剀":"剴","剂":"劑","剐":"剮","剑":"劍","剥":"剝","剧":"劇","劝":"勸","办":"辦","务":"務","劢":"勱","动":"動","励":"勵","劲":"勁","劳":"勞","势":"勢","勋":"勛","勚":"勩","匀":"勻","匦":"匭","匮":"匱","区":"區","医":"醫","华":"華","协":"協","单":"單","卖":"賣","卢":"盧","卤":"鹵","卧":"臥","卫":"衛","却":"卻","厂":"廠","厅":"廳","历":"歷","厉":"厲","压":"壓","厌":"厭","厍":"厙","厐":"龎","厕":"廁","厢":"廂","厣":"厴","厦":"廈","厨":"廚","厩":"廄","厮":"廝","县":"縣","叁":"叄","参":"參","叆":"靉","叇":"靆","双":"雙","发":"發","变":"變","叙":"敘","叠":"疊","叶":"葉","号":"號","叹":"嘆","叽":"嘰","后":"後","吓":"嚇","吕":"呂","吗":"嗎","吣":"唚","吨":"噸","听":"聽","启":"啟","吴":"吳","呐":"吶","呒":"嘸","呓":"囈","呕":"嘔","呖":"嚦","呗":"唄","员":"員","呙":"咼","呛":"嗆","呜":"嗚","咏":"詠","咙":"嚨","咛":"嚀","咝":"噝","响":"響","哑":"啞","哒":"噠","哓":"嘵","哔":"嗶","哕":"噦","哗":"嘩","哙":"噲","哜":"嚌","哝":"噥","哟":"喲","唛":"嘜","唝":"嗊","唠":"嘮","唡":"啢","唢":"嗩","唤":"喚","啧":"嘖","啬":"嗇","啭":"囀","啮":"齧","啯":"嘓","啰":"囉","啴":"嘽","啸":"嘯","喂":"餵","喷":"噴","喽":"嘍","喾":"嚳","嗫":"囁","嗳":"噯","嘘":"噓","嘤":"嚶","嘱":"囑","噜":"嚕","嚣":"囂","团":"團","园":"園","囱":"囪","围":"圍","囵":"圇","国":"國","图":"圖","圆":"圓","圣":"聖","圹":"壙","场":"場","坏":"壞","块":"塊","坚":"堅","坛":"壇","坜":"壢","坝":"壩","坞":"塢","坟":"墳","坠":"墜","垄":"壟","垅":"壠","垆":"壚","垒":"壘","垦":"墾","垩":"堊","垫":"墊","垭":"埡","垯":"墶","垱":"壋","垲":"塏","埘":"塒","埙":"塤","埚":"堝","堑":"塹","堕":"墮","塆":"壪","墙":"牆","壮":"壯","声":"聲","壳":"殼","壶":"壺","壸":"壼","处":"處","备":"備","复":"復","够":"夠","头":"頭","夹":"夾","夺":"奪","奁":"奩","奂":"奐","奋":"奮","奖":"獎","奥":"奧","妆":"妝","妇":"婦","妈":"媽","妩":"嫵","妪":"嫗","妫":"媯","姗":"姍","姹":"奼","娄":"婁","娅":"婭","娆":"嬈","娇":"嬌","娈":"孌","娱":"娛","娲":"媧","娴":"嫻","婳":"嫿","婴":"嬰","婵":"嬋","婶":"嬸","媪":"媼","媭":"嬃","嫒":"嬡","嫔":"嬪","嫱":"嬙","嬷":"嬤","孙":"孫","学":"學","孪":"孿","宁":"寧","宝":"寶","实":"實","宠":"寵","审":"審","宪":"憲","宫":"宮","宽":"寬","宾":"賓","寝":"寢","对":"對","寻":"尋","导":"導","寿":"壽","将":"將","尔":"爾","尘":"塵","尝":"嘗","尧":"堯","尴":"尷","尸":"屍","尽":"盡","层":"層","屃":"屓","屉":"屜","届":"屆","属":"屬","屡":"屢","屦":"屨","屿":"嶼","岁":"歲","岂":"豈","岖":"嶇","岗":"崗","岘":"峴","岚":"嵐","岛":"島","岭":"嶺","岽":"崬","岿":"巋","峃":"嶨","峄":"嶧","峡":"峽","峣":"嶢","峤":"嶠","峥":"崢","峦":"巒","崂":"嶗","崃":"崍","崄":"嶮","崭":"嶄","嵘":"嶸","嵚":"嶔","嵝":"嶁","巅":"巔","巩":"鞏","巯":"巰","币":"幣","帅":"帥","师":"師","帏":"幃","帐":"帳","帘":"簾","帜":"幟","带":"帶","帧":"幀","帮":"幫","帱":"幬","帻":"幘","帼":"幗","幂":"冪","并":"並","广":"廣","庄":"莊","庆":"慶","庐":"廬","庑":"廡","库":"庫","应":"應","庙":"廟","庞":"龐","废":"廢","庼":"廎","廪":"廩","开":"開","异":"異","弃":"棄","弑":"弒","张":"張","弥":"彌","弪":"弳","弯":"彎","弹":"彈","强":"強","归":"歸","当":"當","录":"錄","彟":"彠","彦":"彥","彨":"彲","彻":"徹","径":"徑","徕":"徠","忆":"憶","忏":"懺","忧":"憂","忾":"愾","怀":"懷","态":"態","怂":"慫","怃":"憮","怄":"慪","怅":"悵","怆":"愴","怜":"憐","总":"總","怼":"懟","怿":"懌","恋":"戀","恒":"恆","恳":"懇","恶":"惡","恸":"慟","恹":"懨","恺":"愷","恻":"惻","恼":"惱","恽":"惲","悦":"悅","悫":"愨","悬":"懸","悭":"慳","悮":"悞","悯":"憫","惊":"驚","惧":"懼","惨":"慘","惩":"懲","惫":"憊","惬":"愜","惭":"慚","惮":"憚","惯":"慣","愠":"慍","愤":"憤","愦":"憒","愿":"願","慑":"懾","慭":"憖","懑":"懣","懒":"懶","懔":"懍","戆":"戇","戋":"戔","戏":"戲","戗":"戧","战":"戰","戬":"戩","戯":"戱","户":"戶","扑":"撲","执":"執","扩":"擴","扪":"捫","扫":"掃","扬":"揚","扰":"擾","抚":"撫","抛":"拋","抟":"摶","抠":"摳","抡":"掄","抢":"搶","护":"護","报":"報","担":"擔","拟":"擬","拢":"攏","拣":"揀","拥":"擁","拦":"攔","拧":"擰","拨":"撥","择":"擇","挂":"掛","挚":"摯","挛":"攣","挜":"掗","挝":"撾","挞":"撻","挟":"挾","挠":"撓","挡":"擋","挢":"撟","挣":"掙","挤":"擠","挥":"揮","挦":"撏","捝":"挩","捞":"撈","损":"損","捡":"撿","换":"換","捣":"搗","据":"據","掳":"擄","掴":"摑","掷":"擲","掸":"撣","掺":"摻","掼":"摜","揽":"攬","揾":"搵","揿":"撳","搀":"攙","搁":"擱","搂":"摟","搅":"攪","携":"攜","摄":"攝","摅":"攄","摆":"擺","摇":"搖","摈":"擯","摊":"攤","撄":"攖","撑":"撐","撵":"攆","撷":"擷","撸":"擼","撺":"攛","擜":"㩵","擞":"擻","攒":"攢","敌":"敵","敛":"斂","敩":"斆","数":"數","斋":"齋","斓":"斕","斩":"斬","断":"斷","无":"無","旧":"舊","时":"時","旷":"曠","旸":"暘","昙":"曇","昼":"晝","昽":"曨","显":"顯","晋":"晉","晒":"曬","晓":"曉","晔":"曄","晕":"暈","晖":"暉","暂":"暫","暧":"曖","术":"術","机":"機","杀":"殺","杂":"雜","权":"權","杠":"槓","条":"條","来":"來","杨":"楊","杩":"榪","杰":"傑","极":"極","构":"構","枞":"樅","枢":"樞","枣":"棗","枥":"櫪","枧":"梘","枨":"棖","枪":"槍","枫":"楓","枭":"梟","柜":"櫃","柠":"檸","柽":"檉","栀":"梔","栅":"柵","标":"標","栈":"棧","栉":"櫛","栊":"櫳","栋":"棟","栌":"櫨","栎":"櫟","栏":"欄","树":"樹","栖":"棲","样":"樣","栾":"欒","桠":"椏","桡":"橈","桢":"楨","档":"檔","桤":"榿","桥":"橋","桦":"樺","桧":"檜","桨":"槳","桩":"樁","桪":"樳","梦":"夢","梼":"檮","梾":"棶","梿":"槤","检":"檢","棁":"梲","棂":"欞","椁":"槨","椝":"槼","椟":"櫝","椠":"槧","椢":"槶","椤":"欏","椫":"樿","椭":"橢","椮":"槮","楼":"樓","榄":"欖","榅":"榲","榇":"櫬","榈":"櫚","榉":"櫸","槚":"檟","槛":"檻","槟":"檳","槠":"櫧","横":"橫","樯":"檣","樱":"櫻","橥":"櫫","橱":"櫥","橹":"櫓","橼":"櫞","檩":"檁","欢":"歡","欤":"歟","欧":"歐","歼":"殲","殁":"歿","殇":"殤","残":"殘","殒":"殞","殓":"殮","殚":"殫","殡":"殯","殴":"毆","毁":"毀","毂":"轂","毕":"畢","毙":"斃","毡":"氈","毵":"毿","毶":"𣯶","氇":"氌","气":"氣","氢":"氫","氩":"氬","氲":"氳","汇":"匯","汉":"漢","汤":"湯","汹":"洶","沟":"溝","没":"沒","沣":"灃","沤":"漚","沥":"瀝","沦":"淪","沧":"滄","沨":"渢","沩":"溈","沪":"滬","泞":"濘","泪":"淚","泶":"澩","泷":"瀧","泸":"瀘","泺":"濼","泻":"瀉","泼":"潑","泽":"澤","泾":"涇","洁":"潔","洒":"灑","洼":"窪","浃":"浹","浅":"淺","浆":"漿","浇":"澆","浈":"湞","浉":"溮","浊":"濁","测":"測","浍":"澮","济":"濟","浏":"瀏","浐":"滻","浑":"渾","浒":"滸","浓":"濃","浔":"潯","浕":"濜","涂":"塗","涛":"濤","涝":"澇","涞":"淶","涟":"漣","涠":"潿","涡":"渦","涢":"溳","涣":"渙","涤":"滌","润":"潤","涧":"澗","涨":"漲","涩":"澀","渊":"淵","渌":"淥","渍":"漬","渎":"瀆","渐":"漸","渑":"澠","渔":"漁","渖":"瀋","渗":"滲","温":"溫","湾":"灣","湿":"濕","溁":"濚","溃":"潰","溅":"濺","溆":"漵","溇":"漊","滗":"潷","滚":"滾","滞":"滯","滟":"灩","滠":"灄","满":"滿","滢":"瀅","滤":"濾","滥":"濫","滦":"灤","滨":"濱","滩":"灘","滪":"澦","漤":"灠","潆":"瀠","潇":"瀟","潋":"瀲","潍":"濰","潜":"潛","潴":"瀦","澛":"瀂","澜":"瀾","濑":"瀨","濒":"瀕","灏":"灝","灭":"滅","灯":"燈","灵":"靈","灾":"災","灿":"燦","炀":"煬","炉":"爐","炖":"燉","炜":"煒","炝":"熗","点":"點","炼":"煉","炽":"熾","烁":"爍","烂":"爛","烃":"烴","烛":"燭","烟":"煙","烦":"煩","烧":"燒","烨":"燁","烩":"燴","烫":"燙","烬":"燼","热":"熱","焕":"煥","焖":"燜","焘":"燾","煴":"熅","爱":"愛","爷":"爺","牍":"牘","牦":"氂","牵":"牽","牺":"犧","犊":"犢","状":"狀","犷":"獷","犸":"獁","犹":"猶","狈":"狽","狝":"獮","狞":"獰","独":"獨","狭":"狹","狮":"獅","狯":"獪","狰":"猙","狱":"獄","狲":"猻","猃":"獫","猎":"獵","猕":"獼","猡":"玀","猪":"豬","猫":"貓","猬":"蝟","献":"獻","獭":"獺","玑":"璣","玙":"璵","玚":"瑒","玛":"瑪","玮":"瑋","环":"環","现":"現","玱":"瑲","玺":"璽","珐":"琺","珑":"瓏","珰":"璫","珲":"琿","琎":"璡","琏":"璉","琐":"瑣","琼":"瓊","瑶":"瑤","瑷":"璦","瑸":"璸","璎":"瓔","瓒":"瓚","瓯":"甌","电":"電","画":"畫","畅":"暢","畴":"疇","疖":"癤","疗":"療","疟":"瘧","疠":"癘","疡":"瘍","疬":"癧","疭":"瘲","疮":"瘡","疯":"瘋","痈":"癰","痉":"痙","痒":"癢","痖":"瘂","痨":"癆","痪":"瘓","痫":"癇","痳":"痲","瘅":"癉","瘆":"瘮","瘗":"瘞","瘘":"瘺","瘪":"癟","瘫":"癱","瘾":"癮","瘿":"癭","癞":"癩","癣":"癬","癫":"癲","皑":"皚","皱":"皺","皲":"皸","盏":"盞","盐":"鹽","监":"監","盖":"蓋","盗":"盜","盘":"盤","眍":"瞘","眦":"眥","眬":"矓","睁":"睜","睐":"睞","睑":"瞼","瞆":"瞶","瞒":"瞞","瞩":"矚","矫":"矯","矶":"磯","矾":"礬","矿":"礦","砀":"碭","码":"碼","砖":"磚","砗":"硨","砚":"硯","砜":"碸","砺":"礪","砻":"礱","砾":"礫","础":"礎","硁":"硜","硕":"碩","硖":"硤","硗":"磽","硙":"磑","硚":"礄","确":"確","硵":"磠","硷":"鹼","碍":"礙","碛":"磧","碜":"磣","碱":"鹼","礼":"禮","祃":"禡","祎":"禕","祢":"禰","祯":"禎","祷":"禱","祸":"禍","禀":"稟","禄":"祿","禅":"禪","离":"離","秃":"禿","秆":"稈","种":"種","积":"積","称":"稱","秽":"穢","秾":"穠","稆":"穭","税":"稅","稣":"穌","稳":"穩","穑":"穡","穷":"窮","窃":"竊","窍":"竅","窎":"窵","窑":"窯","窜":"竄","窝":"窩","窥":"窺","窦":"竇","窭":"窶","竖":"豎","竞":"競","笃":"篤","笋":"筍","笔":"筆","笕":"筧","笺":"箋","笼":"籠","笾":"籩","筑":"築","筚":"篳","筛":"篩","筜":"簹","筝":"箏","筹":"籌","筼":"篔","签":"簽","简":"簡","箓":"籙","箦":"簀","箧":"篋","箨":"籜","箩":"籮","箪":"簞","箫":"簫","篑":"簣","篓":"簍","篮":"籃","篯":"籛","篱":"籬","簖":"籪","籁":"籟","籴":"糴","类":"類","籼":"秈","粜":"糶","粝":"糲","粤":"粵","粪":"糞","粮":"糧","糁":"糝","糇":"餱","紧":"緊","絷":"縶","纟":"糹","纠":"糾","纡":"紆","红":"紅","纣":"紂","纤":"纖","纥":"紇","约":"約","级":"級","纨":"紈","纩":"纊","纪":"紀","纫":"紉","纬":"緯","纭":"紜","纮":"紘","纯":"純","纰":"紕","纱":"紗","纲":"綱","纳":"納","纴":"紝","纵":"縱","纶":"綸","纷":"紛","纸":"紙","纹":"紋","纺":"紡","纻":"紵","纼":"紖","纽":"紐","纾":"紓","线":"線","绀":"紺","绁":"紲","绂":"紱","练":"練","组":"組","绅":"紳","细":"細","织":"織","终":"終","绉":"縐","绊":"絆","绋":"紼","绌":"絀","绍":"紹","绎":"繹","经":"經","绐":"紿","绑":"綁","绒":"絨","结":"結","绔":"絝","绕":"繞","绖":"絰","绗":"絎","绘":"繪","给":"給","绚":"絢","绛":"絳","络":"絡","绝":"絕","绞":"絞","统":"統","绠":"綆","绡":"綃","绢":"絹","绣":"繡","绤":"綌","绥":"綏","绦":"絛","继":"繼","绨":"綈","绩":"績","绪":"緒","绫":"綾","绬":"緓","续":"續","绮":"綺","绯":"緋","绰":"綽","绱":"鞝","绲":"緄","绳":"繩","维":"維","绵":"綿","绶":"綬","绷":"繃","绸":"綢","绹":"綯","绺":"綹","绻":"綣","综":"綜","绽":"綻","绾":"綰","绿":"綠","缀":"綴","缁":"緇","缂":"緙","缃":"緗","缄":"緘","缅":"緬","缆":"纜","缇":"緹","缈":"緲","缉":"緝","缊":"縕","缋":"繢","缌":"緦","缍":"綞","缎":"緞","缏":"緶","缐":"線","缑":"緱","缒":"縋","缓":"緩","缔":"締","缕":"縷","编":"編","缗":"緡","缘":"緣","缙":"縉","缚":"縛","缛":"縟","缜":"縝","缝":"縫","缞":"縗","缟":"縞","缠":"纏","缡":"縭","缢":"縊","缣":"縑","缤":"繽","缥":"縹","缦":"縵","缧":"縲","缨":"纓","缩":"縮","缪":"繆","缫":"繅","缬":"纈","缭":"繚","缮":"繕","缯":"繒","缰":"韁","缱":"繾","缲":"繰","缳":"繯","缴":"繳","缵":"纘","罂":"罌","网":"網","罗":"羅","罚":"罰","罢":"罷","罴":"羆","羁":"羈","羟":"羥","羡":"羨","翘":"翹","翙":"翽","翚":"翬","耢":"耮","耧":"耬","耸":"聳","耻":"恥","聂":"聶","聋":"聾","职":"職","聍":"聹","联":"聯","聩":"聵","聪":"聰","肃":"肅","肠":"腸","肤":"膚","肮":"骯","肾":"腎","肿":"腫","胀":"脹","胁":"脅","胆":"膽","胜":"勝","胧":"朧","胨":"腖","胪":"臚","胫":"脛","胶":"膠","脉":"脈","脍":"膾","脏":"髒","脐":"臍","脑":"腦","脓":"膿","脔":"臠","脚":"腳","脱":"脫","脶":"腡","脸":"臉","腊":"臘","腌":"醃","腘":"膕","腭":"齶","腻":"膩","腼":"靦","腽":"膃","腾":"騰","膑":"臏","臜":"臢","舆":"輿","舣":"艤","舰":"艦","舱":"艙","舻":"艫","艰":"艱","艳":"艷","艺":"藝","节":"節","芈":"羋","芗":"薌","芜":"蕪","芦":"蘆","苁":"蓯","苇":"葦","苈":"藶","苋":"莧","苌":"萇","苍":"蒼","苎":"苧","苏":"蘇","苧":"薴","茎":"莖","茏":"蘢","茑":"蔦","茔":"塋","茕":"煢","茧":"繭","荆":"荊","荐":"薦","荙":"薘","荚":"莢","荛":"蕘","荜":"蓽","荝":"萴","荞":"蕎","荟":"薈","荠":"薺","荡":"盪","荣":"榮","荤":"葷","荥":"滎","荦":"犖","荧":"熒","荨":"蕁","荩":"藎","荪":"蓀","荫":"蔭","荬":"蕒","荭":"葒","荮":"葤","药":"藥","莅":"蒞","莱":"萊","莲":"蓮","莳":"蒔","莴":"萵","莶":"薟","获":"獲","莸":"蕕","莹":"瑩","莺":"鶯","莼":"蓴","萚":"蘀","萝":"蘿","萤":"螢","营":"營","萦":"縈","萧":"蕭","萨":"薩","葱":"蔥","蒇":"蕆","蒉":"蕢","蒋":"蔣","蒌":"蔞","蓝":"藍","蓟":"薊","蓠":"蘺","蓣":"蕷","蓥":"鎣","蓦":"驀","蔂":"虆","蔷":"薔","蔹":"蘞","蔺":"藺","蔼":"藹","蕰":"薀","蕲":"蘄","蕴":"蘊","薮":"藪","藓":"蘚","蘖":"櫱","虏":"虜","虑":"慮","虚":"虛","虫":"蟲","虮":"蟣","虽":"雖","虾":"蝦","虿":"蠆","蚀":"蝕","蚁":"蟻","蚂":"螞","蚃":"蠁","蚕":"蠶","蚬":"蜆","蛊":"蠱","蛎":"蠣","蛏":"蟶","蛮":"蠻","蛰":"蟄","蛱":"蛺","蛲":"蟯","蛳":"螄","蛴":"蠐","蜕":"蛻","蜗":"蝸","蜡":"蠟","蝇":"蠅","蝈":"蟈","蝉":"蟬","蝎":"蠍","蝼":"螻","蝾":"蠑","螀":"螿","螨":"蟎","蟏":"蠨","衅":"釁","衔":"銜","补":"補","衬":"襯","衮":"袞","袄":"襖","袅":"裊","袆":"褘","袜":"襪","袭":"襲","袯":"襏","装":"裝","裆":"襠","裈":"褌","裢":"褳","裣":"襝","裤":"褲","裥":"襉","褛":"褸","褴":"襤","襕":"襴","见":"見","观":"觀","觃":"覎","规":"規","觅":"覓","视":"視","觇":"覘","览":"覽","觉":"覺","觊":"覬","觋":"覡","觌":"覿","觍":"覥","觎":"覦","觏":"覯","觐":"覲","觑":"覷","觞":"觴","触":"觸","觯":"觶","訚":"誾","詟":"讋","誉":"譽","誊":"謄","讠":"訁","计":"計","订":"訂","讣":"訃","认":"認","讥":"譏","讦":"訐","讧":"訌","讨":"討","让":"讓","讪":"訕","讫":"訖","讬":"託","训":"訓","议":"議","讯":"訊","记":"記","讱":"訒","讲":"講","讳":"諱","讴":"謳","讵":"詎","讶":"訝","讷":"訥","许":"許","讹":"訛","论":"論","讻":"訩","讼":"訟","讽":"諷","设":"設","访":"訪","诀":"訣","证":"證","诂":"詁","诃":"訶","评":"評","诅":"詛","识":"識","诇":"詗","诈":"詐","诉":"訴","诊":"診","诋":"詆","诌":"謅","词":"詞","诎":"詘","诏":"詔","诐":"詖","译":"譯","诒":"詒","诓":"誆","诔":"誄","试":"試","诖":"詿","诗":"詩","诘":"詰","诙":"詼","诚":"誠","诛":"誅","诜":"詵","话":"話","诞":"誕","诟":"詬","诠":"詮","诡":"詭","询":"詢","诣":"詣","诤":"諍","该":"該","详":"詳","诧":"詫","诨":"諢","诩":"詡","诪":"譸","诫":"誡","诬":"誣","语":"語","诮":"誚","误":"誤","诰":"誥","诱":"誘","诲":"誨","诳":"誑","说":"說","诵":"誦","诶":"誒","请":"請","诸":"諸","诹":"諏","诺":"諾","读":"讀","诼":"諑","诽":"誹","课":"課","诿":"諉","谀":"諛","谁":"誰","谂":"諗","调":"調","谄":"諂","谅":"諒","谆":"諄","谇":"誶","谈":"談","谊":"誼","谋":"謀","谌":"諶","谍":"諜","谎":"謊","谏":"諫","谐":"諧","谑":"謔","谒":"謁","谓":"謂","谔":"諤","谕":"諭","谖":"諼","谗":"讒","谘":"諮","谙":"諳","谚":"諺","谛":"諦","谜":"謎","谝":"諞","谞":"諝","谟":"謨","谠":"讜","谡":"謖","谢":"謝","谣":"謠","谤":"謗","谥":"諡","谦":"謙","谧":"謐","谨":"謹","谩":"謾","谪":"謫","谫":"譾","谬":"謬","谭":"譚","谮":"譖","谯":"譙","谰":"讕","谱":"譜","谲":"譎","谳":"讞","谴":"譴","谵":"譫","谶":"讖","豮":"豶","贝":"貝","贞":"貞","负":"負","贠":"貟","贡":"貢","财":"財","责":"責","贤":"賢","败":"敗","账":"賬","货":"貨","质":"質","贩":"販","贪":"貪","贫":"貧","贬":"貶","购":"購","贮":"貯","贯":"貫","贰":"貳","贱":"賤","贲":"賁","贳":"貰","贴":"貼","贵":"貴","贶":"貺","贷":"貸","贸":"貿","费":"費","贺":"賀","贻":"貽","贼":"賊","贽":"贄","贾":"賈","贿":"賄","赀":"貲","赁":"賃","赂":"賂","赃":"贓","资":"資","赅":"賅","赆":"贐","赇":"賕","赈":"賑","赉":"賚","赊":"賒","赋":"賦","赌":"賭","赍":"齎","赎":"贖","赏":"賞","赐":"賜","赑":"贔","赒":"賙","赓":"賡","赔":"賠","赕":"賧","赖":"賴","赗":"賵","赘":"贅","赙":"賻","赚":"賺","赛":"賽","赜":"賾","赝":"贗","赞":"贊","赟":"贇","赠":"贈","赡":"贍","赢":"贏","赣":"贛","赪":"赬","赵":"趙","赶":"趕","趋":"趨","趱":"趲","趸":"躉","跃":"躍","跄":"蹌","跞":"躒","践":"踐","跶":"躂","跷":"蹺","跸":"蹕","跹":"躚","跻":"躋","踊":"踴","踌":"躊","踪":"蹤","踬":"躓","踯":"躑","蹑":"躡","蹒":"蹣","蹰":"躕","蹿":"躥","躏":"躪","躜":"躦","躯":"軀","车":"車","轧":"軋","轨":"軌","轩":"軒","轪":"軑","轫":"軔","转":"轉","轭":"軛","轮":"輪","软":"軟","轰":"轟","轱":"軲","轲":"軻","轳":"轤","轴":"軸","轵":"軹","轶":"軼","轷":"軤","轸":"軫","轹":"轢","轺":"軺","轻":"輕","轼":"軾","载":"載","轾":"輊","轿":"轎","辀":"輈","辁":"輇","辂":"輅","较":"較","辄":"輒","辅":"輔","辆":"輛","辇":"輦","辈":"輩","辉":"輝","辊":"輥","辋":"輞","辌":"輬","辍":"輟","辎":"輜","辏":"輳","辐":"輻","辑":"輯","辒":"轀","输":"輸","辔":"轡","辕":"轅","辖":"轄","辗":"輾","辘":"轆","辙":"轍","辚":"轔","辞":"辭","辩":"辯","辫":"辮","边":"邊","辽":"遼","达":"達","迁":"遷","过":"過","迈":"邁","运":"運","还":"還","这":"這","进":"進","远":"遠","违":"違","连":"連","迟":"遲","迩":"邇","迳":"逕","迹":"跡","适":"適","选":"選","逊":"遜","递":"遞","逦":"邐","逻":"邏","遗":"遺","遥":"遙","邓":"鄧","邝":"鄺","邬":"鄔","邮":"郵","邹":"鄒","邺":"鄴","邻":"鄰","郏":"郟","郐":"鄶","郑":"鄭","郓":"鄆","郦":"酈","郧":"鄖","郸":"鄲","酂":"酇","酝":"醞","酦":"醱","酱":"醬","酽":"釅","酾":"釃","酿":"釀","释":"釋","鉴":"鑒","銮":"鑾","錾":"鏨","钅":"釒","钆":"釓","钇":"釔","针":"針","钉":"釘","钊":"釗","钋":"釙","钌":"釕","钍":"釷","钎":"釺","钏":"釧","钐":"釤","钑":"鈒","钒":"釩","钓":"釣","钔":"鍆","钕":"釹","钖":"鍚","钗":"釵","钘":"鈃","钙":"鈣","钚":"鈈","钛":"鈦","钜":"鉅","钝":"鈍","钞":"鈔","钟":"鍾","钠":"鈉","钡":"鋇","钢":"鋼","钣":"鈑","钤":"鈐","钥":"鑰","钦":"欽","钧":"鈞","钨":"鎢","钩":"鈎","钪":"鈧","钫":"鈁","钬":"鈥","钭":"鈄","钮":"鈕","钯":"鈀","钰":"鈺","钱":"錢","钲":"鉦","钳":"鉗","钴":"鈷","钵":"缽","钶":"鈳","钷":"鉕","钸":"鈽","钹":"鈸","钺":"鉞","钻":"鑽","钼":"鉬","钽":"鉭","钾":"鉀","钿":"鈿","铀":"鈾","铁":"鐵","铂":"鉑","铃":"鈴","铄":"鑠","铅":"鉛","铆":"鉚","铇":"鉋","铈":"鈰","铉":"鉉","铊":"鉈","铋":"鉍","铌":"鈮","铍":"鈹","铎":"鐸","铏":"鉶","铐":"銬","铑":"銠","铒":"鉺","铓":"鋩","铔":"錏","铕":"銪","铖":"鋮","铗":"鋏","铘":"鋣","铙":"鐃","铚":"銍","铛":"鐺","铜":"銅","铝":"鋁","铞":"銱","铟":"銦","铠":"鎧","铡":"鍘","铢":"銖","铣":"銑","铤":"鋌","铥":"銩","铦":"銛","铧":"鏵","铨":"銓","铩":"鎩","铪":"鉿","铫":"銚","铬":"鉻","铭":"銘","铮":"錚","铯":"銫","铰":"鉸","铱":"銥","铲":"鏟","铳":"銃","铴":"鐋","铵":"銨","银":"銀","铷":"銣","铸":"鑄","铹":"鐒","铺":"鋪","铻":"鋙","铼":"錸","铽":"鋱","链":"鏈","铿":"鏗","销":"銷","锁":"鎖","锂":"鋰","锃":"鋥","锄":"鋤","锅":"鍋","锆":"鋯","锇":"鋨","锈":"鏽","锉":"銼","锊":"鋝","锋":"鋒","锌":"鋅","锍":"鋶","锎":"鐦","锏":"鐧","锐":"銳","锑":"銻","锒":"鋃","锓":"鋟","锔":"鋦","锕":"錒","锖":"錆","锗":"鍺","锘":"鍩","错":"錯","锚":"錨","锛":"錛","锜":"錡","锝":"鍀","锞":"錁","锟":"錕","锠":"錩","锡":"錫","锢":"錮","锣":"鑼","锤":"錘","锥":"錐","锦":"錦","锧":"鑕","锨":"杴","锩":"錈","锪":"鍃","锫":"錇","锬":"錟","锭":"錠","键":"鍵","锯":"鋸","锰":"錳","锱":"錙","锲":"鍥","锳":"鍈","锴":"鍇","锵":"鏘","锶":"鍶","锷":"鍔","锸":"鍤","锹":"鍬","锺":"鍾","锻":"鍛","锼":"鎪","锽":"鍠","锾":"鍰","锿":"鎄","镀":"鍍","镁":"鎂","镂":"鏤","镃":"鎡","镄":"鐨","镅":"鎇","镆":"鏌","镇":"鎮","镈":"鎛","镉":"鎘","镊":"鑷","镋":"钂","镌":"鐫","镍":"鎳","镎":"鎿","镏":"鎦","镐":"鎬","镑":"鎊","镒":"鎰","镓":"鎵","镔":"鑌","镕":"鎔","镖":"鏢","镗":"鏜","镘":"鏝","镙":"鏍","镚":"鏰","镛":"鏞","镜":"鏡","镝":"鏑","镞":"鏃","镟":"鏇","镠":"鏐","镡":"鐔","镢":"钁","镣":"鐐","镤":"鏷","镥":"鑥","镦":"鐓","镧":"鑭","镨":"鐠","镩":"鑹","镪":"鏹","镫":"鐙","镬":"鑊","镭":"鐳","镮":"鐶","镯":"鐲","镰":"鐮","镱":"鐿","镲":"鑔","镳":"鑣","镴":"鑞","镵":"鑱","镶":"鑲","长":"長","门":"門","闩":"閂","闪":"閃","闫":"閆","闬":"閈","闭":"閉","问":"問","闯":"闖","闰":"閏","闱":"闈","闲":"閒","闳":"閎","间":"間","闵":"閔","闶":"閌","闷":"悶","闸":"閘","闹":"鬧","闺":"閨","闻":"聞","闼":"闥","闽":"閩","闾":"閭","闿":"闓","阀":"閥","阁":"閣","阂":"閡","阃":"閫","阄":"鬮","阅":"閱","阆":"閬","阇":"闍","阈":"閾","阉":"閹","阊":"閶","阋":"鬩","阌":"閿","阍":"閽","阎":"閻","阏":"閼","阐":"闡","阑":"闌","阒":"闃","阓":"闠","阔":"闊","阕":"闋","阖":"闔","阗":"闐","阘":"闒","阙":"闕","阚":"闞","阛":"闤","队":"隊","阳":"陽","阴":"陰","阵":"陣","阶":"階","际":"際","陆":"陸","陇":"隴","陈":"陳","陉":"陘","陕":"陝","陦":"隯","陧":"隉","陨":"隕","险":"險","随":"隨","隐":"隱","隶":"隸","隽":"雋","难":"難","雏":"雛","雠":"讎","雳":"靂","雾":"霧","霁":"霽","霡":"霢","霭":"靄","靓":"靚","静":"靜","靥":"靨","鞑":"韃","鞒":"鞽","鞯":"韉","韦":"韋","韧":"韌","韨":"韍","韩":"韓","韪":"韙","韫":"韞","韬":"韜","韵":"韻","页":"頁","顶":"頂","顷":"頃","顸":"頇","项":"項","顺":"順","须":"須","顼":"頊","顽":"頑","顾":"顧","顿":"頓","颀":"頎","颁":"頒","颂":"頌","颃":"頏","预":"預","颅":"顱","领":"領","颇":"頗","颈":"頸","颉":"頡","颊":"頰","颋":"頲","颌":"頜","颍":"潁","颎":"熲","颏":"頦","颐":"頤","频":"頻","颒":"頮","颓":"頹","颔":"頷","颕":"頴","颖":"穎","颗":"顆","题":"題","颙":"顒","颚":"顎","颛":"顓","颜":"顏","额":"額","颞":"顳","颟":"顢","颠":"顛","颡":"顙","颢":"顥","颣":"纇","颤":"顫","颥":"顬","颦":"顰","颧":"顴","风":"風","飏":"颺","飐":"颭","飑":"颮","飒":"颯","飓":"颶","飔":"颸","飕":"颼","飖":"颻","飗":"飀","飘":"飄","飙":"飆","飚":"飈","飞":"飛","飨":"饗","餍":"饜","饣":"飠","饤":"飣","饥":"飢","饦":"飥","饧":"餳","饨":"飩","饩":"餼","饪":"飪","饫":"飫","饬":"飭","饭":"飯","饮":"飲","饯":"餞","饰":"飾","饱":"飽","饲":"飼","饳":"飿","饴":"飴","饵":"餌","饶":"饒","饷":"餉","饸":"餄","饹":"餎","饺":"餃","饻":"餏","饼":"餅","饽":"餑","饾":"餖","饿":"餓","馀":"餘","馁":"餒","馂":"餕","馃":"餜","馄":"餛","馅":"餡","馆":"館","馇":"餷","馈":"饋","馉":"餶","馊":"餿","馋":"饞","馌":"饁","馍":"饃","馎":"餺","馏":"餾","馐":"饈","馑":"饉","馒":"饅","馓":"饊","馔":"饌","馕":"饢","马":"馬","驭":"馭","驮":"馱","驯":"馴","驰":"馳","驱":"驅","驲":"馹","驳":"駁","驴":"驢","驵":"駔","驶":"駛","驷":"駟","驸":"駙","驹":"駒","驺":"騶","驻":"駐","驼":"駝","驽":"駑","驾":"駕","驿":"驛","骀":"駘","骁":"驍","骂":"罵","骃":"駰","骄":"驕","骅":"驊","骆":"駱","骇":"駭","骈":"駢","骉":"驫","骊":"驪","骋":"騁","验":"驗","骍":"騂","骎":"駸","骏":"駿","骐":"騏","骑":"騎","骒":"騍","骓":"騅","骔":"騌","骕":"驌","骖":"驂","骗":"騙","骘":"騭","骙":"騤","骚":"騷","骛":"騖","骜":"驁","骝":"騮","骞":"騫","骟":"騸","骠":"驃","骡":"騾","骢":"驄","骣":"驏","骤":"驟","骥":"驥","骦":"驦","骧":"驤","髅":"髏","髋":"髖","髌":"髕","鬓":"鬢","鬶":"鬹","魇":"魘","魉":"魎","鱼":"魚","鱽":"魛","鱾":"魢","鱿":"魷","鲀":"魨","鲁":"魯","鲂":"魴","鲃":"䰾","鲄":"魺","鲅":"鮁","鲆":"鮃","鲇":"鯰","鲈":"鱸","鲉":"鮋","鲊":"鮓","鲋":"鮒","鲌":"鮊","鲍":"鮑","鲎":"鱟","鲏":"鮍","鲐":"鮐","鲑":"鮭","鲒":"鮚","鲓":"鮳","鲔":"鮪","鲕":"鮞","鲖":"鮦","鲗":"鰂","鲘":"鮜","鲙":"鱠","鲚":"鱭","鲛":"鮫","鲜":"鮮","鲝":"鮺","鲞":"鯗","鲟":"鱘","鲠":"鯁","鲡":"鱺","鲢":"鰱","鲣":"鰹","鲤":"鯉","鲥":"鰣","鲦":"鰷","鲧":"鯀","鲨":"鯊","鲩":"鯇","鲪":"鮶","鲫":"鯽","鲬":"鯒","鲭":"鯖","鲮":"鯪","鲯":"鯕","鲰":"鯫","鲱":"鯡","鲲":"鯤","鲳":"鯧","鲴":"鯝","鲵":"鯢","鲶":"鯰","鲷":"鯛","鲸":"鯨","鲹":"鰺","鲺":"鯴","鲻":"鯔","鲼":"鱝","鲽":"鰈","鲾":"鰏","鲿":"鱨","鳀":"鯷","鳁":"鰮","鳂":"鰃","鳃":"鰓","鳄":"鱷","鳅":"鰍","鳆":"鰒","鳇":"鰉","鳈":"鰁","鳉":"鱂","鳊":"鯿","鳋":"鰠","鳌":"鰲","鳍":"鰭","鳎":"鰨","鳏":"鰥","鳐":"鰩","鳑":"鰟","鳒":"鰜","鳓":"鰳","鳔":"鰾","鳕":"鱈","鳖":"鱉","鳗":"鰻","鳘":"鰵","鳙":"鱅","鳚":"䲁","鳛":"鰼","鳜":"鱖","鳝":"鱔","鳞":"鱗","鳟":"鱒","鳠":"鱯","鳡":"鱤","鳢":"鱧","鳣":"鱣","鳤":"䲘","鸟":"鳥","鸠":"鳩","鸡":"雞","鸢":"鳶","鸣":"鳴","鸤":"鳲","鸥":"鷗","鸦":"鴉","鸧":"鶬","鸨":"鴇","鸩":"鴆","鸪":"鴣","鸫":"鶇","鸬":"鸕","鸭":"鴨","鸮":"鴞","鸯":"鴦","鸰":"鴒","鸱":"鴟","鸲":"鴝","鸳":"鴛","鸴":"鷽","鸵":"鴕","鸶":"鷥","鸷":"鷙","鸸":"鴯","鸹":"鴰","鸺":"鵂","鸻":"鴴","鸼":"鵃","鸽":"鴿","鸾":"鸞","鸿":"鴻","鹀":"鵐","鹁":"鵓","鹂":"鸝","鹃":"鵑","鹄":"鵠","鹅":"鵝","鹆":"鵒","鹇":"鷳","鹈":"鵜","鹉":"鵡","鹊":"鵲","鹋":"鶓","鹌":"鵪","鹍":"鵾","鹎":"鵯","鹏":"鵬","鹐":"鵮","鹑":"鶉","鹒":"鶊","鹓":"鵷","鹔":"鷫","鹕":"鶘","鹖":"鶡","鹗":"鶚","鹘":"鶻","鹙":"鶖","鹚":"鶿","鹛":"鶥","鹜":"鶩","鹝":"鷊","鹞":"鷂","鹟":"鶲","鹠":"鶹","鹡":"鶺","鹢":"鷁","鹣":"鶼","鹤":"鶴","鹥":"鷖","鹦":"鸚","鹧":"鷓","鹨":"鷚","鹩":"鷯","鹪":"鷦","鹫":"鷲","鹬":"鷸","鹭":"鷺","鹮":"䴉","鹯":"鸇","鹰":"鷹","鹱":"鸌","鹲":"鸏","鹳":"鸛","鹴":"鸘","鹾":"鹺","麦":"麥","麸":"麩","麹":"麴","黄":"黃","黉":"黌","黡":"黶","黩":"黷","黪":"黲","黾":"黽","鼋":"黿","鼍":"鼉","鼗":"鞀","鼹":"鼴","齐":"齊","齑":"齏","齿":"齒","龀":"齔","龁":"齕","龂":"齗","龃":"齟","龄":"齡","龅":"齙","龆":"齠","龇":"齜","龈":"齦","龉":"齬","龊":"齪","龋":"齲","龌":"齷","龙":"龍","龚":"龔","龛":"龕","龟":"龜","鿎":"䃮","鿏":"䥑","鿔":"鎶","鿭":"鉨","𠆲":"儣","𠆿":"𠌥","𠉂":"㒓","𠉗":"𠏢","𠚳":"𠠎","𠛅":"剾","𠛆":"𠞆","𠯟":"哯","𠯠":"噅","𠲥":"𡅏","𠴢":"𡄔","𠵸":"𡄣","𠵾":"㗲","𡋀":"𡓾","𡋗":"𡑭","𡒄":"壈","𡝠":"㜷","𡞱":"㜢","𡭜":"𡮉","𡭬":"𡮣","𡶴":"嵼","𢀖":"巠","𢋈":"㢝","𢘝":"𢣚","𢘞":"𢣭","𢙓":"懀","𢛯":"㦎","𢫊":"𢷮","𢫞":"𢶫","𢫬":"摋","𢬦":"𢹿","𢭏":"擣","𢽾":"斅","𣆐":"曥","𣍨":"𦢈","𣍯":"腪","𣍰":"脥","𣎑":"臗","𣐤":"欍","𣑶":"𣠲","𣗋":"欓","𣘓":"𣞻","𣘴":"檭","𣘷":"𣝕","𣭤":"𣯴","𣲗":"湋","𣲘":"潕","𣶩":"澅","𣶫":"𣿉","𣸣":"濆","𣺼":"灙","𣺽":"𤁣","𣽷":"瀃","𤆡":"熓","𤇃":"爄","𤇄":"熌","𤈶":"熉","𤈷":"㷿","𤊀":"𤒎","𤋏":"熡","𤞤":"玁","𤠋":"㺏","𤦀":"瓕","𤩽":"瓛","𤳄":"𤳸","𤶧":"𤸫","𤽯":"㿧","𤾀":"皟","𥅘":"𥌃","𥅴":"䀹","𥆧":"瞤","𥇢":"䁪","𥐟":"礒","𥐯":"𥖅","𥐰":"𥕥","𥐻":"碙","𥧂":"𥨐","𥬀":"䉙","𥬞":"籋","𥬠":"篘","𥭉":"𥵊","𥮋":"𥸠","𥮜":"䉲","𥱔":"𥵃","𥹥":"𥼽","𥺅":"䊭","𥺇":"𥽖","𦈈":"𥿊","𦈉":"緷","𦈋":"綇","𦈌":"綀","𦈎":"繟","𦈏":"緍","𦈐":"縺","𦈑":"緸","𦈒":"𦂅","𦈓":"䋿","𦈔":"縎","𦈕":"緰","𦈖":"䌈","𦈗":"𦃄","𦈘":"䌋","𦈙":"䌰","𦈚":"縬","𦈛":"繓","𦈜":"䌖","𦈝":"繏","𦈞":"䌟","𦈟":"䌝","𦈠":"䌥","𦈡":"繻","𦛨":"朥","𦝼":"膢","𦟗":"𦣎","𦨩":"𦪽","𦰴":"䕳","𧉞":"䗿","𧒭":"𧔥","𧮪":"詀","𧳕":"𧳟","𧹑":"䞈","𧹓":"𧶔","𧹕":"䝻","𧹖":"賟","𧹗":"贃","𧿈":"𨇁","𨀱":"𨄣","𨁴":"𨅍","𨂺":"𨈊","𨄄":"𨈌","𨅫":"𨇞","𨅬":"躝","𨉗":"軉","𨐅":"軗","𨐆":"𨊻","𨐇":"𨏠","𨐈":"輄","𨐉":"𨎮","𨐊":"𨏥","𨑹":"䢨","𨤰":"𨤻","𨰾":"鎷","𨰿":"釳","𨱀":"𨥛","𨱁":"鈠","𨱂":"鈋","𨱃":"鈲","𨱄":"鈯","𨱅":"鉁","𨱆":"龯","𨱇":"銶","𨱈":"鋉","𨱉":"鍄","𨱊":"𨧱","𨱋":"錂","𨱌":"鏆","𨱍":"鎯","𨱎":"鍮","𨱏":"鎝","𨱐":"𨫒","𨱑":"鐄","𨱒":"鏉","𨱓":"鐎","𨱔":"鐏","𨱕":"𨮂","𨱖":"䥩","𨷿":"䦳","𨸀":"𨳕","𨸁":"𨳑","𨸂":"閍","𨸃":"閐","𨸄":"䦘","𨸅":"𨴗","𨸆":"𨵩","𨸇":"𨵸","𨸉":"𨶀","𨸊":"𨶏","𨸋":"𨶲","𨸌":"𨶮","𨸎":"𨷲","𨸘":"𨽏","𨸟":"䧢","𩏼":"䪏","𩏽":"𩏪","𩏾":"𩎢","𩏿":"䪘","𩐀":"䪗","𩖕":"𩓣","𩖖":"顃","𩖗":"䫴","𩙥":"颰","𩙦":"𩗀","𩙧":"𩗡","𩙨":"𩘹","𩙩":"𩘀","𩙪":"颷","𩙫":"颾","𩙬":"𩘺","𩙭":"𩘝","𩙮":"䬘","𩙯":"䬝","𩙰":"𩙈","𩟿":"𩚛","𩠀":"𩚥","𩠁":"𩚵","𩠂":"𩛆","𩠃":"𩛩","𩠅":"𩟐","𩠆":"𩜦","𩠇":"䭀","𩠈":"䭃","𩠉":"𩜇","𩠊":"𩜵","𩠋":"𩝔","𩠌":"餸","𩠎":"𩞄","𩠏":"𩞦","𩠠":"𩠴","𩧦":"𩡺","𩧨":"駎","𩧩":"𩤊","𩧪":"䮾","𩧫":"駚","𩧬":"𩢡","𩧭":"䭿","𩧮":"𩢾","𩧯":"驋","𩧰":"䮝","𩧱":"𩥉","𩧲":"駧","𩧳":"𩢸","𩧴":"駩","𩧵":"𩢴","𩧶":"𩣏","𩧺":"駶","𩧻":"𩣵","𩧼":"𩣺","𩧿":"䮠","𩨀":"騔","𩨁":"䮞","𩨃":"騝","𩨄":"騪","𩨅":"𩤸","𩨆":"𩤙","𩨇":"䮫","𩨈":"騟","𩨉":"𩤲","𩨊":"騚","𩨋":"𩥄","𩨌":"𩥑","𩨍":"𩥇","𩨎":"龭","𩨏":"䮳","𩨐":"𩧆","𩬣":"𩭙","𩬤":"𩰀","𩯒":"𩯳","𩲒":"𩳤","𩽹":"魥","𩽺":"𩵩","𩽻":"𩵹","𩽼":"鯶","𩽽":"𩶱","𩽾":"鮟","𩽿":"𩶰","𩾁":"鯄","𩾂":"䲖","𩾃":"鮸","𩾄":"𩷰","𩾅":"𩸃","𩾆":"𩸦","𩾇":"鯱","𩾈":"䱙","𩾊":"䱬","𩾋":"䱰","𩾌":"鱇","𩾎":"𩽇","𪉂":"䲰","𪉃":"鳼","𪉄":"𩿪","𪉅":"𪀦","𪉆":"鴲","𪉈":"鴜","𪉉":"𪁈","𪉊":"鷨","𪉋":"𪀾","𪉌":"𪁖","𪉍":"鵚","𪉎":"𪂆","𪉏":"𪃏","𪉐":"𪃍","𪉑":"鷔","𪉒":"𪄕","𪉓":"𪈼","𪉔":"𪄆","𪉕":"𪇳","𪎈":"䴬","𪎉":"麲","𪎊":"麨","𪎋":"䴴","𪎌":"麳","𪎍":"𪋿","𪔭":"𪔵","𪚏":"𪘀","𪚐":"𪘯","𪞝":"凙","𪟝":"勣","𪡏":"嗹","𪢮":"圞","𪣻":"塿","𪨊":"㞞","𪨗":"屩","𪨶":"輋","𪩘":"巘","𪻐":"瑽","𪾢":"睍","𫁡":"鴗","𫂈":"䉬","𫄧":"綖","𫄨":"絺","𫄷":"繶","𫄸":"纁","𫇭":"蒍","𫌀":"襀","𫌨":"覼","𫍙":"訑","𫍢":"譊","𫍣":"詷","𫍯":"諴","𫍰":"諰","𫍲":"謏","𫍽":"譞","𫏋":"蹻","𫐄":"軏","𫐆":"轣","𫐉":"軨","𫐐":"輗","𫐓":"輮","𫑡":"鄳","𫓧":"鈇","𫓩":"鏦","𫓯":"銈","𫓶":"鋗","𫓹":"錤","𫔍":"鐇","𫔎":"鐍","𫔶":"闑","𫖮":"顗","𫖯":"頫","𫖳":"頵","𫖸":"願","𫗠":"餦","𫗦":"餔","𫗧":"餗","𫗮":"餭","𫗴":"饘","𫘜":"馼","𫘝":"駃","𫘣":"駻","𫘤":"騃","𫘦":"騊","𫘧":"騄","𫘨":"騠","𫘪":"騵","𫘬":"騱","𫚈":"鱮","𫚉":"魟","𫚒":"鮄","𫚔":"鮰","𫚕":"鰤","𫚖":"鮆","𫚙":"鯆","𫚭":"鱲","𫛛":"鳷","𫛞":"鴃","𫛢":"鸋","𫛭":"鵟","𫛶":"鶒","𫛸":"鶗","𫞩":"璊","𫟅":"綡","𫟦":"䡵","𫟷":"鉝","𫟹":"鉷","𫟼":"鐽","𫠆":"頍","𫠊":"䮄","𫠜":"齯","𫢸":"僤","𫫇":"噁","𫭟":"塸","𫭢":"埨","𫭼":"𡑍","𫮃":"墠","𫰛":"娙","𫵷":"㠣","𫶇":"嵽","𫷷":"廞","𫸩":"彄","𬀩":"暐","𬀪":"晛","𬂩":"梜","𬃊":"櫍","𬇕":"澫","𬇙":"浿","𬇹":"漍","𬉼":"熰","𬊈":"燖","𬊤":"燀","𬍛":"瓅","𬍡":"璗","𬍤":"璕","𬒈":"礐","𬒗":"𥗽","𬓼":"穨","𬕂":"篢","𬘓":"紃","𬘘":"紞","𬘡":"絪","𬘩":"綎","𬘫":"綄","𬘬":"綪","𬘭":"綝","𬘯":"綧","𬙂":"縯","𬙊":"纆","𬙋":"纕","𬜬":"蔄","𬜯":"䓣","𬟁":"虉","𬟽":"蝀","𬣙":"訏","𬣞":"詝","𬣡":"諓","𬣳":"詪","𬤇":"諲","𬤊":"諟","𬤝":"譓","𬤥":"譔","𬨂":"軝","𬨎":"輶","𬩽":"鄩","𬪩":"醲","𬬩":"釴","𬬭":"錀","𬬮":"鋹","𬬱":"釿","𬬸":"鉥","𬬹":"鉮","𬬻":"鑪","𬬿":"鉊","𬭁":"鉧","𬭊":"𨧀","𬭎":"鋐","𬭚":"錞","𬭛":"𨨏","𬭤":"鍭","𬭩":"鎓","𬭬":"鏏","𬭯":"䥕","𬭳":"𨭎","𬭶":"𨭆","𬭸":"鏻","𬭼":"鐩","𬮱":"闉","𬮿":"隑","𬯀":"隮","𬯎":"隤","𬱖":"頔","𬱟":"頠","𬳵":"駓","𬳶":"駉","𬳽":"駪","𬳿":"駼","𬴂":"騑","𬴃":"騞","𬴊":"驎","𬶋":"鮈","𬶍":"鮀","𬶏":"鮠","𬶐":"鮡","𬶟":"鯻","𬶠":"鰊","𬶨":"鱀","𬶭":"鰶","𬶮":"鱚","𬷕":"鵏","𬸘":"鶠","𬸚":"鸑","𬸣":"鶱","𬸦":"鷟","𬸪":"鷭","𬹼":"齘","𬺈":"齮","𬺓":"齼","𰻝":"𰻞","0只支持":"0只支持","0只支援":"0只支援","0周后":"0周後","0天后":"0天後","0只":"0隻","0余":"0餘","0出。":"0齣。","0出电影":"0齣電影","0出，":"0齣，","1只支持":"1只支持","1只支援":"1只支援","1周后":"1周後","1天后":"1天後","1只":"1隻","1余":"1餘","2只支持":"2只支持","2只支援":"2只支援","2周后":"2周後","2天后":"2天後","2只":"2隻","2余":"2餘","3只支持":"3只支持","3只支援":"3只支援","3周后":"3周後","3天后":"3天後","3只":"3隻","3余":"3餘","4只支持":"4只支持","4只支援":"4只支援","4周后":"4周後","4天后":"4天後","4只":"4隻","4余":"4餘","5只支持":"5只支持","5只支援":"5只支援","5周后":"5周後","5天后":"5天後","5只":"5隻","5余":"5餘","6只支持":"6只支持","6只支援":"6只支援","6周后":"6周後","6天后":"6天後","6只":"6隻","6余":"6餘","7只支持":"7只支持","7只支援":"7只支援","7周后":"7周後","7天后":"7天後","7只":"7隻","7余":"7餘","8只支持":"8只支持","8只支援":"8只支援","8周后":"8周後","8天后":"8天後","8只":"8隻","8余":"8餘","9只支持":"9只支持","9只支援":"9只支援","9周后":"9周後","9天后":"9天後","9只":"9隻","9余":"9餘","I’":"I’","e’":"e’","u’":"u’","·范":"·范","’m":"’m","’re":"’re","’s":"’s","’t":"’t","、面点":"、麵點","。个中":"。箇中","〇周后":"〇周後","〇只":"〇隻","〇余":"〇餘","》里":"》裡","“":"「","”":"」","‘":"『","’":"』","一干二净":"一乾二淨","一伙人":"一伙人","一伙头":"一伙頭","一伙食":"一伙食","一并":"一併","一个":"一個","一个准":"一個準","一划":"一划","一半只":"一半只","一吊钱":"一吊錢","一周后":"一周後","一地里":"一地裡","一伙":"一夥","一天后":"一天後","一天钟":"一天鐘","一干人":"一干人","一干家中":"一干家中","一干弟兄":"一干弟兄","一干弟子":"一干弟子","一干部下":"一干部下","一斗斗":"一斗斗","一树百获":"一樹百穫","一准":"一準","一争两丑":"一爭兩醜","一物克一物":"一物剋一物","一目了然":"一目了然","一碗面":"一碗麵","一扎":"一紮","一冲":"一衝","一厘一毫":"一釐一毫","一锅面":"一鍋麵","一只":"一隻","一面食":"一面食","一余":"一餘","一发千钧":"一髮千鈞","一哄而散":"一鬨而散","一出剧":"一齣劇","一出喜剧":"一齣喜劇","一出好戏":"一齣好戲","一出子":"一齣子","一出悲剧":"一齣悲劇","一出戏":"一齣戲","一出电影":"一齣電影","丁丁当当":"丁丁當當","丁丑":"丁丑","七个":"七個","七周后":"七周後","七天后":"七天後","七情六欲":"七情六慾","七扎":"七紮","七只":"七隻","七余":"七餘","万俟":"万俟","万旗":"万旗","三个":"三個","三周后":"三周後","三天后":"三天後","三征七辟":"三徵七辟","三准":"三準","三扎":"三紮","三统历":"三統曆","三统历史":"三統歷史","三只":"三隻","三余":"三餘","三出戏":"三齣戲","上天里":"上天里","上梁山":"上梁山","上台面":"上檯面","上签了":"上簽了","上签名":"上簽名","上签字":"上簽字","上签定":"上簽定","上签写":"上簽寫","上签收":"上簽收","上签发":"上簽發","上签约":"上簽約","上签署":"上簽署","上签订":"上簽訂","上签证":"上簽證","上签":"上籤","上系上":"上繫上","上课钟":"上課鐘","上面糊":"上面糊","下文里":"下文裡","下注解":"下注解","下签了":"下簽了","下签名":"下簽名","下签字":"下簽字","下签定":"下簽定","下签写":"下簽寫","下签收":"下簽收","下签发":"下簽發","下签约":"下簽約","下签署":"下簽署","下签订":"下簽訂","下签证":"下簽證","下签":"下籤","下课钟":"下課鐘","不干不净":"不乾不淨","不干胶":"不乾膠","不克自制":"不克自制","不加自制":"不加自制","不占凶吉":"不占凶吉","不占卜":"不占卜","不占吉凶":"不占吉凶","不占算":"不占算","不只":"不只","不太准":"不太準","不好干涉":"不好干涉","不好干預":"不好干預","不好干预":"不好干預","不嫌母丑":"不嫌母醜","不寒而栗":"不寒而慄","不吊，":"不弔，","不卷":"不捲","不采":"不採","不斗胆":"不斗膽","不斗膽":"不斗膽","不断发":"不斷發","不每只":"不每只","不谷":"不穀","不托":"不託","不负所托":"不負所托","不通吊庆":"不通弔慶","不丑":"不醜","不采声":"不采聲","不采聲":"不采聲","不食乾腊":"不食乾腊","不食干腊":"不食乾腊","不斗":"不鬥","丑三":"丑三","丑年":"丑年","丑日":"丑日","丑旦":"丑旦","丑时":"丑時","丑月":"丑月","丑表功":"丑表功","丑角":"丑角","世界杯":"世界盃","世纪里":"世紀裡","世纪钟":"世紀鐘","世纪钟表":"世紀鐘錶","丢丑":"丟醜","并合并":"並合併","并吞下":"並吞下","并发动":"並發動","并发展":"並發展","并发布":"並發布","并发现":"並發現","并发表":"並發表","并行":"並行","中国国际信托投资公司":"中國國際信托投資公司","中型钟":"中型鐘","中型钟表面":"中型鐘表面","中型钟表":"中型鐘錶","中型钟面":"中型鐘面","中境里":"中境里","中岳":"中嶽","中庄子":"中庄子","中文里":"中文裡","中断发":"中斷發","中签了":"中簽了","中签名":"中簽名","中签字":"中簽字","中签定":"中簽定","中签写":"中簽寫","中签收":"中簽收","中签发":"中簽發","中签约":"中簽約","中签署":"中簽署","中签订":"中簽訂","中签证":"中簽證","中签":"中籤","中风后":"中風後","丰仪":"丰儀","丰儀":"丰儀","丰姿":"丰姿","丰容":"丰容","丰情":"丰情","丰标":"丰標","丰標":"丰標","丰标不凡":"丰標不凡","丰標不凡":"丰標不凡","丰神":"丰神","丰茸":"丰茸","丰采":"丰采","丰韵":"丰韻","丰韻":"丰韻","丹棱":"丹稜","主仆":"主僕","主干":"主幹","主钟差":"主鐘差","主钟曲线":"主鐘曲線","乃系":"乃係","么九":"么九","么二三":"么二三","么元":"么元","么兒":"么兒","么半":"么半","么叔":"么叔","么喝":"么喝","么女":"么女","么妹":"么妹","么姓":"么姓","么姨":"么姨","么娘":"么娘","么媽":"么媽","么孃":"么孃","么子":"么子","么弟":"么弟","么正":"么正","么氏":"么氏","么爸":"么爸","么爹":"么爹","么爺":"么爺","么篇":"么篇","么舅":"么舅","么蛾子":"么蛾子","么雞":"么雞","么鳳":"么鳳","么麼":"么麼","之一只":"之一只","之二只":"之二只","之八九只":"之八九只","之子于归":"之子于歸","之子于歸":"之子于歸","之征":"之徵","之托":"之託","之钟":"之鐘","之鉴":"之鑑","之余":"之餘","乙丑":"乙丑","九世之仇":"九世之讎","九个":"九個","九周后":"九周後","九天后":"九天後","九谷":"九穀","九扎":"九紮","九只":"九隻","九余":"九餘","干干":"乾乾","干干净净":"乾乾淨淨","干井":"乾井","干个够":"乾個夠","干儿":"乾兒","干冰":"乾冰","干冷":"乾冷","干刻版":"乾刻版","干剥剥":"乾剝剝","干咳":"乾咳","干咽":"乾咽","干哥":"乾哥","干哭":"乾哭","干唱":"乾唱","干啼":"乾啼","干乔":"乾喬","干呕":"乾嘔","干哕":"乾噦","干嚎":"乾嚎","干回付":"乾回付","干圆洁净":"乾圓潔淨","干坞":"乾塢","干女儿":"乾女兒","干奴才":"乾奴才","干妹":"乾妹","干姊":"乾姊","干姐":"乾姐","干娘":"乾娘","干妈":"乾媽","干子":"乾子","干季":"乾季","干尸":"乾屍","干屎橛":"乾屎橛","干巴":"乾巴","干式":"乾式","干弟":"乾弟","干急":"乾急","干性":"乾性","干打雷":"乾打雷","干折":"乾折","干拌面":"乾拌麵","干撂台":"乾撂台","干撇下":"乾撇下","干擦":"乾擦","干支剌":"乾支剌","干支支":"乾支支","干料":"乾料","干旱":"乾旱","干暖":"乾暖","干材":"乾材","干村沙":"乾村沙","干杯":"乾杯","干果":"乾果","干枯":"乾枯","干柴":"乾柴","干柴烈火":"乾柴烈火","干梅":"乾梅","干死":"乾死","干池":"乾池","干没":"乾沒","干洗":"乾洗","干涸":"乾涸","干凉":"乾涼","干净":"乾淨","干渠":"乾渠","干渴":"乾渴","干沟":"乾溝","干漆":"乾漆","干涩":"乾澀","干湿":"乾濕","干熬":"乾熬","干热":"乾熱","干灯盏":"乾燈盞","干燥":"乾燥","干爸":"乾爸","干爹":"乾爹","干爽":"乾爽","干片":"乾片","干物":"乾物","干生受":"乾生受","干生子":"乾生子","干产":"乾產","干田":"乾田","干疥":"乾疥","干瘦":"乾瘦","干瘪":"乾癟","干癣":"乾癬","干瘾":"乾癮","干白儿":"乾白兒","干白葡萄酒":"乾白葡萄酒","干眼":"乾眼","干瞪眼":"乾瞪眼","干礼":"乾禮","干稿":"乾稿","干笑":"乾笑","干等":"乾等","干篾片":"乾篾片","干粉":"乾粉","干粮":"乾糧","干红葡萄酒":"乾紅葡萄酒","干结":"乾結","干丝":"乾絲","干纲":"乾綱","干绷":"乾繃","干耗":"乾耗","干肉片":"乾肉片","干股":"乾股","干肥":"乾肥","干脆":"乾脆","干脆面":"乾脆麵","干花":"乾花","干刍":"乾芻","干苔":"乾苔","干茨腊":"乾茨臘","干茶钱":"乾茶錢","干草":"乾草","干菜":"乾菜","干落":"乾落","干姜":"乾薑","干薪":"乾薪","干虔":"乾虔","干号":"乾號","干血浆":"乾血漿","干衣":"乾衣","干裂":"乾裂","干亲":"乾親","乾象历":"乾象曆","乾象曆":"乾象曆","干贝":"乾貝","干货":"乾貨","干躁":"乾躁","干逼":"乾逼","干酪":"乾酪","干酵母":"乾酵母","干醋":"乾醋","干重":"乾重","干量":"乾量","干锅":"乾鍋","干阿奶":"乾阿奶","干雷":"乾雷","干电":"乾電","干霍乱":"乾霍亂","干颡":"乾顙","干食":"乾食","干饭":"乾飯","干馆":"乾館","干糇":"乾餱","干馏":"乾餾","干鱼":"乾魚","干鲜":"乾鮮","干面":"乾麵","乱斗":"亂鬥","乱哄哄":"亂鬨鬨","了然后":"了然後","事有斗巧":"事有鬥巧","事里":"事裡","二不棱登":"二不稜登","二个":"二個","二只得":"二只得","二周后":"二周後","二天后":"二天後","二缶钟惑":"二缶鐘惑","二老板":"二老板","二虎相斗":"二虎相鬥","二里头":"二里頭","二里頭":"二里頭","二只":"二隻","二余":"二餘","于于":"于于","于仁泰":"于仁泰","于仲文":"于仲文","于佳卉":"于佳卉","于來山":"于來山","于来山":"于來山","于伟国":"于偉國","于偉國":"于偉國","于光远":"于光遠","于光遠":"于光遠","于克-兰多县":"于克-蘭多縣","于克-蘭多縣":"于克-蘭多縣","于克勒":"于克勒","于再清":"于再清","于冕":"于冕","于冠华":"于冠華","于冠華":"于冠華","于凌奎":"于凌奎","于凌辰":"于凌辰","于勒":"于勒","于化虎":"于化虎","于占元":"于占元","于友泽":"于友澤","于友澤":"于友澤","于台烟":"于台煙","于台煙":"于台煙","于右任":"于右任","于吉":"于吉","于和伟":"于和偉","于和偉":"于和偉","于品海":"于品海","于国桢":"于國楨","于國楨":"于國楨","于坚":"于堅","于堅":"于堅","于大宝":"于大寶","于大寶":"于大寶","于天仁":"于天仁","于天龍":"于天龍","于天龙":"于天龍","于奇库杜克":"于奇庫杜克","于奇庫杜克":"于奇庫杜克","于姓":"于姓","于娜":"于娜","于娟":"于娟","于子千":"于子千","于孔兼":"于孔兼","于学忠":"于學忠","于學忠":"于學忠","于家堡":"于家堡","于寘":"于寘","于宝轩":"于寶軒","于寶軒":"于寶軒","于小伟":"于小偉","于小偉":"于小偉","于小彤":"于小彤","于小惠":"于小惠","于少保":"于少保","于山国":"于山國","于山國":"于山國","于山岛":"于山島","于山島":"于山島","于帅":"于帥","于帥":"于帥","于幼军":"于幼軍","于幼軍":"于幼軍","于康震":"于康震","于广洲":"于廣洲","于廣洲":"于廣洲","于建嵘":"于建嶸","于建嶸":"于建嶸","于式枚":"于式枚","于从濂":"于從濂","于從濂":"于從濂","于德海":"于德海","于志宁":"于志寧","于志寧":"于志寧","于忠肃集":"于忠肅集","于忠肅集":"于忠肅集","于慎行":"于慎行","于慧":"于慧","于成龍":"于成龍","于成龙":"于成龍","于承惠":"于承惠","于振":"于振","于振武":"于振武","于敏":"于敏","于斌":"于斌","于斯塔德":"于斯塔德","于斯納爾斯貝里":"于斯納爾斯貝里","于斯纳尔斯贝里":"于斯納爾斯貝里","于斯达尔":"于斯達爾","于斯達爾":"于斯達爾","于明涛":"于明濤","于明濤":"于明濤","于是之":"于是之","于晨楠":"于晨楠","于晴":"于晴","于会泳":"于會泳","于會泳":"于會泳","于根伟":"于根偉","于根偉":"于根偉","于格":"于格","于枫":"于楓","于楓":"于楓","于榮光":"于榮光","于荣光":"于榮光","于樂":"于樂","于树洁":"于樹潔","于樹潔":"于樹潔","于欣":"于欣","于欣源":"于欣源","于正昇":"于正昇","于正昌":"于正昌","于氏":"于氏","于永波":"于永波","于江震":"于江震","于波":"于波","于洋":"于洋","于洪区":"于洪區","于洪區":"于洪區","于浩威":"于浩威","于湘兰":"于湘蘭","于湘蘭":"于湘蘭","于汉超":"于漢超","于漢超":"于漢超","于澄":"于澄","于泽尔":"于澤爾","于澤爾":"于澤爾","于涛":"于濤","于濤":"于濤","于熙珍":"于熙珍","于尔岑":"于爾岑","于爾岑":"于爾岑","于尔根":"于爾根","于爾根":"于爾根","于尔里克":"于爾里克","于爾里克":"于爾里克","于特森":"于特森","于玉立":"于玉立","于田":"于田","于禁":"于禁","于秀敏":"于秀敏","于立成":"于立成","于素秋":"于素秋","于美人":"于美人","于芷山":"于芷山","于若木":"于若木","于荫霖":"于蔭霖","于蔭霖":"于蔭霖","于衡":"于衡","于西翰":"于西翰","于謙":"于謙","于谦":"于謙","于謹":"于謹","于谨":"于謹","于貝爾":"于貝爾","于贝尔·":"于貝爾·","于贝尔桑":"于貝爾桑","于贈":"于贈","于赠":"于贈","于越":"于越","于軍":"于軍","于逸堯":"于逸堯","于道泉":"于道泉","于远伟":"于遠偉","于遠偉":"于遠偉","于都县":"于都縣","于都縣":"于都縣","于里察":"于里察","于闐":"于闐","于阗":"于闐","于双戈":"于雙戈","于雙戈":"于雙戈","于云鹤":"于雲鶴","于雲鶴":"于雲鶴","于震":"于震","于靖":"于靖","于非暗":"于非闇","于非闇":"于非闇","于韋斯屈萊":"于韋斯屈萊","于韦斯屈莱":"于韋斯屈萊","于風政":"于風政","于风政":"于風政","于余曲折":"于餘曲折","于鬯":"于鬯","于魁智":"于魁智","于凤桐":"于鳳桐","于鳳桐":"于鳳桐","于凤至":"于鳳至","于鳳至":"于鳳至","于默奥":"于默奧","于默奧":"于默奧","云乎":"云乎","云云":"云云","云何":"云何","云敞":"云敞","云为":"云為","云為":"云為","云然":"云然","云尔":"云爾","云：":"云：","五个":"五個","五周后":"五周後","五天后":"五天後","五峰县":"五峯縣","五岳":"五嶽","五谷":"五穀","五扎":"五紮","五脏":"五臟","五行生克":"五行生剋","五谷王北街":"五谷王北街","五谷王南街":"五谷王南街","五只":"五隻","五余":"五餘","井干":"井幹","井里":"井裡","亘古":"亙古","交托":"交託","交游":"交遊","交哄":"交鬨","亦云":"亦云","京沈":"京瀋","亮丑":"亮醜","亮钟":"亮鐘","人云":"人云","人如风后入江云":"人如風後入江雲","人干的":"人幹的","人欲":"人慾","人数只":"人數只","人数里":"人數裡","人物志":"人物誌","人生天里":"人生天里","人发指":"人髮指","什锦面":"什錦麵","仁贵":"仁貴","介胄":"介冑","他干的":"他幹的","付托":"付託","仙后":"仙后","仙后座":"仙后座","仙游":"仙遊","代数里":"代數裡","代理发":"代理發","代码表":"代碼表","代表":"代表","以自制":"以自制","仲裁制":"仲裁制","件钟":"件鐘","价川":"价川","仿制":"仿製","伊于湖底":"伊于湖底","伊府面":"伊府麵","伊斯兰教历":"伊斯蘭教曆","伊斯兰教历史":"伊斯蘭教歷史","伊斯兰历":"伊斯蘭曆","伊斯兰历史":"伊斯蘭歷史","伊东怜":"伊東怜","伊東怜":"伊東怜","伊尔汗历表":"伊爾汗曆表","伊达里子":"伊達里子","伊适杰":"伊適杰","伊適杰":"伊適杰","伊里布":"伊里布","伊郁":"伊鬱","伏几":"伏几","伐罪吊民":"伐罪弔民","休克期":"休克期","休征":"休徵","伙头":"伙頭","伴游":"伴遊","但云":"但云","位准":"位準","低洼":"低洼","住扎":"住紮","占毕":"佔畢","占头筹":"佔頭籌","占高枝儿":"佔高枝兒","何杰":"何杰","余三勝":"余三勝","余三胜":"余三勝","余光中":"余光中","余光生":"余光生","余力为":"余力為","余力為":"余力為","余威德":"余威德","余子明":"余子明","余思敏":"余思敏","余杰":"余杰","佛历":"佛曆","佛罗棱萨":"佛羅稜薩","佛钟":"佛鐘","作品里":"作品裡","作准":"作準","你夸":"你誇","佣金":"佣金","佣鈿":"佣鈿","佣钿":"佣鈿","佣錢":"佣錢","佣钱":"佣錢","佳里鎮":"佳里鎮","佳肴":"佳餚","并一不二":"併一不二","并入":"併入","并兼":"併兼","并到":"併到","并力":"併力","并合":"併合","并名":"併名","并吞":"併吞","并拢":"併攏","并查集":"併查集","并案":"併案","并为一家":"併為一家","并为一体":"併為一體","并叠":"併疊","并发型模式":"併發型模式","并发模式":"併發模式","并发症":"併發症","并发重症":"併發重症","并科":"併科","并网":"併網","并线":"併線","并肩子":"併肩子","并购":"併購","并集":"併集","并骨":"併骨","使其斗":"使其鬥","來栖":"來栖","来栖":"來栖","侍仆":"侍僕","依依不舍":"依依不捨","依托":"依託","侵并":"侵併","局促":"侷促","系指":"係指","系数":"係數","系为":"係為","保险柜":"保險柜","信井里":"信井里","信托贸易":"信托貿易","信托":"信託","修杰楷":"修杰楷","修筑前":"修築前","修筑后":"修築後","修胡刀":"修鬍刀","俯冲":"俯衝","个月里":"個月裡","个里":"個裡","个钟":"個鐘","个钟表":"個鐘錶","们干的":"們幹的","幸免":"倖免","幸存":"倖存","幸幸":"倖幸","候复":"候覆","倚闲":"倚閑","倛丑":"倛醜","借鉴":"借鑑","倦游":"倦遊","假发票":"假發票","假里":"假裡","假托":"假託","假发":"假髮","偎干":"偎乾","停停当当":"停停當當","停征":"停徵","停制":"停製","备注":"備註","家伙":"傢伙","催并":"催併","佣仆":"傭僕","傲游":"傲遊","傲霜斗雪":"傲霜鬥雪","传位于四太子":"傳位于四太子","傳位于四太子":"傳位于四太子","债累累":"債纍纍","傻里傻气":"傻裡傻氣","仅余":"僅餘","像赞":"像讚","仆人":"僕人","仆使":"僕使","仆仆":"僕僕","仆僮":"僕僮","仆吏":"僕吏","仆固怀恩":"僕固懷恩","仆夫":"僕夫","仆姑":"僕姑","仆婢":"僕婢","仆妇":"僕婦","仆射":"僕射","仆少":"僕少","仆役":"僕役","仆从":"僕從","仆憎":"僕憎","仆欧":"僕歐","仆程":"僕程","仆虽罢驽":"僕雖罷駑","侥幸":"僥倖","僮仆":"僮僕","雇人":"僱人","雇佣":"僱傭","雇到":"僱到","雇工":"僱工","雇船":"僱船","雇请":"僱請","雇车":"僱車","雇农":"僱農","仪征":"儀徵","仪范":"儀範","亿个":"億個","亿周后":"億周後","亿天后":"億天後","亿只":"億隻","亿余":"億餘","俭仆":"儉僕","俭朴":"儉樸","俭确之教":"儉确之教","儉确之教":"儉确之教","儒略改革历":"儒略改革曆","儒略改革历史":"儒略改革歷史","儒略历":"儒略曆","儒略历史":"儒略歷史","尽尽":"儘儘","尽先":"儘先","尽其所有":"儘其所有","尽可能":"儘可能","尽快":"儘快","尽早":"儘早","尽是":"儘是","尽管":"儘管","尽自":"儘自","尽速":"儘速","尽量":"儘量","优游":"優遊","兀术":"兀朮","元凶":"元兇","兆个":"兆個","兆余":"兆餘","凶刀":"兇刀","凶器":"兇器","凶嫌":"兇嫌","凶巴巴":"兇巴巴","凶徒":"兇徒","凶悍":"兇悍","凶恶":"兇惡","凶手":"兇手","凶案":"兇案","凶枪":"兇槍","凶横":"兇橫","凶残":"兇殘","凶杀":"兇殺","凶犯":"兇犯","凶狠":"兇狠","凶猛":"兇猛","凶疑":"兇疑","凶相":"兇相","凶险":"兇險","先采":"先採","先进制造":"先進製造","光致致":"光緻緻","克期間":"克期間","克期间":"克期間","免征":"免徵","党太尉":"党太尉","党姓":"党姓","党家":"党家","党怀英":"党懷英","党懷英":"党懷英","党进":"党進","党進":"党進","党項":"党項","党项":"党項","入侵并":"入侵並","内卷化":"內捲化","内脏":"內臟","内制":"內製","内面包":"內面包","内面包的":"內面包的","内斗":"內鬥","内哄":"內鬨","全干":"全乾","两个":"兩個","两周后":"兩周後","两天后":"兩天後","两杆":"兩桿","两扎":"兩紮","两虎共斗":"兩虎共鬥","两只":"兩隻","两余":"兩餘","两鼠斗穴":"兩鼠鬥穴","两出":"兩齣","八个":"八個","八周后":"八周後","八天后":"八天後","八字胡":"八字鬍","八扎":"八紮","八蜡":"八蜡","八只":"八隻","八余":"八餘","公仔面":"公仔麵","公仆":"公僕","公孙丑":"公孫丑","公寓里":"公寓裡","公寓里弄":"公寓里弄","公干":"公幹","公历":"公曆","公历史":"公歷史","公里海":"公里海","公余":"公餘","六么":"六么","六个":"六個","六周后":"六周後","六天后":"六天後","六楼后座":"六樓后座","六樓后座":"六樓后座","六谷":"六穀","六扎":"六紮","六冲":"六衝","六只":"六隻","六余":"六餘","共和历":"共和曆","共和历史":"共和歷史","其一只":"其一只","其二只":"其二只","其八九只":"其八九只","其次辟地":"其次辟地","其余":"其餘","典范":"典範","兼并":"兼併","冉有仆":"冉有僕","冗余":"冗餘","冤仇":"冤讎","冥蒙":"冥濛","冬山庄":"冬山庄","冬游":"冬遊","冰山里":"冰山裡","冶游":"冶遊","冷面天使":"冷面天使","冷面杀手":"冷面殺手","冷面殺手":"冷面殺手","冷面相":"冷面相","冷面笑匠":"冷面笑匠","冷面":"冷麵","准三后":"准三后","准保护":"准保護","准保護":"准保護","准保释":"准保釋","准保釋":"准保釋","凌蒙初":"凌濛初","凝炼":"凝鍊","几上":"几上","几几":"几几","几凳":"几凳","几子":"几子","几旁":"几旁","几杖":"几杖","几案":"几案","几椅":"几椅","几榻":"几榻","几净窗明":"几淨窗明","几淨窗明":"几淨窗明","几筵":"几筵","几面上":"几面上","凶征":"凶徵","凶相毕露":"凶相畢露","出乖弄丑":"出乖弄醜","出乖露丑":"出乖露醜","出征收":"出征收","出游":"出遊","出丑":"出醜","函数里":"函數裡","分别致":"分别致","分半钟":"分半鐘","分多钟":"分多鐘","分子钟":"分子鐘","分子云":"分子雲","分钟":"分鐘","分钟里":"分鐘裡","刑余":"刑餘","划一桨":"划一槳","划一槳":"划一槳","划不來":"划不來","划不来":"划不來","划了一会":"划了一會","划了一會":"划了一會","划來划去":"划來划去","划来划去":"划來划去","划具":"划具","划到岸":"划到岸","划到江心":"划到江心","划动":"划動","划動":"划動","划去":"划去","划子":"划子","划得來":"划得來","划得来":"划得來","划拳":"划拳","划桨":"划槳","划槳":"划槳","划水":"划水","划着独木舟":"划着獨木舟","划着獨木舟":"划着獨木舟","划着竹筏":"划着竹筏","划着船":"划着船","划算":"划算","划船":"划船","划艇":"划艇","划著":"划著","划行":"划行","划走":"划走","划起":"划起","划进":"划進","划進":"划進","划过":"划過","划過":"划過","划龍舟":"划龍舟","划龙舟":"划龍舟","划龍船":"划龍船","划龙船":"划龍船","判断发":"判斷發","别辟":"別闢","利欲":"利慾","刮起来":"刮起來","刮胡":"刮鬍","到山里":"到山裡","制冷机":"制冷機","制钟":"制鐘","刻半钟":"刻半鐘","刻多钟":"刻多鐘","刻钟":"刻鐘","剃发":"剃髮","剃胡":"剃鬍","剃须":"剃鬚","削发":"削髮","削面":"削麵","克剥":"剋剝","克扣":"剋扣","克星":"剋星","克期":"剋期","克死":"剋死","克薄":"剋薄","前往":"前往","前冲":"前衝","前面店":"前面店","剖厘":"剖釐","刚干":"剛乾","刚雇":"剛僱","剥制":"剝製","剩余":"剩餘","剪其发":"剪其髮","剪发":"剪髮","割舍":"割捨","创获":"創穫","创制":"創製","铲出":"剷出","铲刈":"剷刈","铲平":"剷平","铲除":"剷除","铲头":"剷頭","划入":"劃入","划为":"劃為","刘芸后":"劉芸后","劉芸后":"劉芸后","力争上游":"力爭上遊","功勋":"功勳","加氢精制":"加氫精制","劫余":"劫餘","勃郁":"勃鬱","勤仆":"勤僕","勤朴":"勤樸","勋劳":"勳勞","勋业":"勳業","勋爵":"勳爵","勋章":"勳章","勋绩":"勳績","勾干":"勾幹","勾心斗角":"勾心鬥角","勾魂荡魄":"勾魂蕩魄","包干":"包幹","包准":"包準","包谷":"包穀","包扎":"包紮","包制":"包製","匏系":"匏繫","北山索面":"北山索麵","北仑河":"北崙河","北岳":"北嶽","北干山":"北幹山","北干街道":"北幹街道","北回线":"北迴線","北回铁路":"北迴鐵路","匪干":"匪幹","区里有":"區裡有","区里的":"區裡的","十个":"十個","十出家":"十出家","十出击":"十出擊","十出生":"十出生","十出祁山":"十出祁山","十出头":"十出頭","十出頭":"十出頭","十周后":"十周後","十天后":"十天後","十扎":"十紮","十只":"十隻","十余":"十餘","十出":"十齣","千个":"千個","千只可":"千只可","千只够":"千只夠","千只夠":"千只夠","千只怕":"千只怕","千只能":"千只能","千只足够":"千只足夠","千只足夠":"千只足夠","千周后":"千周後","千天后":"千天後","千扎":"千紮","千回百折":"千迴百折","千回百转":"千迴百轉","千钧一发":"千鈞一髮","千只":"千隻","千余":"千餘","升高后":"升高後","半干":"半乾","半制品":"半制品","半只可":"半只可","半只够":"半只夠","半只":"半隻","协防":"協防","南京钟":"南京鐘","南京钟表":"南京鐘錶","南宫适":"南宮适","南宮适":"南宮适","南屏晚钟":"南屏晚鐘","南岳":"南嶽","南筑":"南筑","南回线":"南迴線","南回铁路":"南迴鐵路","南游":"南遊","博采":"博採","博杰普尔":"博杰普爾","博杰普爾":"博杰普爾","博尔术":"博爾朮","占了卜":"占了卜","印累绶若":"印纍綬若","印制":"印製","印鉴":"印鑑","卵与石斗":"卵與石鬥","卷发动":"卷發動","卷发售":"卷發售","卷发展":"卷發展","卷发布":"卷發布","卷发现":"卷發現","卷发生":"卷發生","卷发行":"卷發行","卷发表":"卷發表","卷发起":"卷發起","卷须":"卷鬚","厂部":"厂部","原子钟":"原子鐘","原文里":"原文裡","原钟":"原鐘","历物之意":"厤物之意","去山里":"去山裡","参数只":"參數只","参数里":"參數裡","反反复复":"反反覆覆","反应制得":"反應製得","反朴归真":"反樸歸真","反冲":"反衝","反复制":"反複製","反复":"反覆","反覆":"反覆","取舍":"取捨","受雇":"受僱","受托":"受託","丛林里":"叢林裡","口干":"口乾","口干冒":"口干冒","口干政":"口干政","口干涉":"口干涉","口干犯":"口干犯","口干预":"口干預","口燥唇干":"口燥唇乾","口腹之欲":"口腹之慾","口里":"口裡","口钟":"口鐘","古人有云":"古人有云","古文里":"古文裡","古书云":"古書云","古書云":"古書云","古柯咸":"古柯鹹","古朴":"古樸","古語云":"古語云","古语云":"古語云","古迹":"古蹟","古钟":"古鐘","古钟表":"古鐘錶","另辟":"另闢","叩钟":"叩鐘","只占卜":"只占卜","只占吉":"只占吉","只占神问卜":"只占神問卜","只占算":"只占算","只影响":"只影響","只影響":"只影響","只采":"只採","只冲":"只衝","只身上已":"只身上已","只身上有":"只身上有","只身上沒":"只身上沒","只身上没":"只身上沒","只身上无":"只身上無","只身上無":"只身上無","只身上的":"只身上的","只身世":"只身世","只身份":"只身份","只身前":"只身前","只身受":"只身受","只身子":"只身子","只身形":"只身形","只身影":"只身影","只身后":"只身後","只身後":"只身後","只身心":"只身心","只身旁":"只身旁","只身材":"只身材","只身段":"只身段","只身为":"只身為","只身為":"只身為","只身边":"只身邊","只身邊":"只身邊","只身首":"只身首","只身体":"只身體","只身體":"只身體","只身高":"只身高","只采声":"只采聲","叮叮当当":"叮叮噹噹","叮当":"叮噹","可紧可松":"可緊可鬆","可能干預":"可能干預","可能干预":"可能干預","可自制":"可自制","可鉴":"可鑑","台子女":"台子女","台子孙":"台子孫","台州":"台州","台历史":"台歷史","台钟":"台鐘","台风奖":"台風獎","台风稳健":"台風穩健","史鉴":"史鑑","叶不二子":"叶不二子","叶志穗":"叶志穗","叶恭弘":"叶恭弘","叶音":"叶音","叶韵":"叶韻","叶韻":"叶韻","吃板刀面":"吃板刀麵","吃碗面":"吃碗麵","吃姜":"吃薑","吃里扒外":"吃裡扒外","吃里爬外":"吃裡爬外","吃面":"吃麵","各辟":"各闢","各类钟":"各類鐘","合伙人":"合伙人","合并":"合併","合伙":"合夥","合府上":"合府上","合采":"合採","合历":"合曆","合历史":"合歷史","合准":"合準","吉凶庆吊":"吉凶慶弔","吉征":"吉徵","吊钟":"吊鐘","同人志":"同人誌","同伙":"同夥","同余":"同餘","名单于":"名單於","后冠":"后冠","后北街":"后北街","后土":"后土","后妃":"后妃","后姓":"后姓","后安路":"后安路","后平路":"后平路","后庄":"后庄","后母戊":"后母戊","后海湾":"后海灣","后海灣":"后海灣","后瑞站":"后瑞站","后稷":"后稷","后綜":"后綜","后羿":"后羿","后翼弃兵":"后翼棄兵","后翼棄兵":"后翼棄兵","后苍":"后蒼","后蒼":"后蒼","后街":"后街","后角":"后角","后丰":"后豐","后豐":"后豐","后里":"后里","后发FK型星":"后髮FK型星","后髮FK型星":"后髮FK型星","后发座":"后髮座","后髮座":"后髮座","后发星系团":"后髮星系團","后髮星系團":"后髮星系團","吐哺捉发":"吐哺捉髮","吐哺握发":"吐哺握髮","向往来":"向往來","向往常":"向往常","向往日":"向往日","向往时":"向往時","吞并":"吞併","吟游":"吟遊","吧台":"吧檯","含齿戴发":"含齒戴髮","吸干":"吸乾","吹干":"吹乾","吾为之范我驰驱":"吾爲之範我馳驅","吕后":"呂后","呂后":"呂后","呆致致":"呆緻緻","呆里呆气":"呆裡呆氣","告札":"告劄","告里":"告裡","呦喂":"呦喂","周后":"周后","周惠后":"周惠后","周历":"周曆","周杰":"周杰","周历史":"周歷史","周游列国":"周遊列國","呵喂":"呵喂","呼吁":"呼籲","命中注定":"命中注定","和奸":"和姦","和平之后":"和平之后","和制汉":"和製漢","和制英语":"和製英語","咎征":"咎徵","咕咕钟":"咕咕鐘","咣当":"咣噹","咪表":"咪錶","咬姜呷醋":"咬薑呷醋","咯当":"咯噹","哀吊":"哀弔","哀挽":"哀輓","品鉴":"品鑑","哄堂大笑":"哄堂大笑","哈啰喂":"哈囉喂","哈囉喂":"哈囉喂","員山庄":"員山庄","哪里":"哪裡","唁吊":"唁弔","呗赞":"唄讚","唇干":"唇乾","唯一只":"唯一只","唱游":"唱遊","唾面自干":"唾面自乾","唾余":"唾餘","商历":"商曆","商标准许":"商標准許","商历史":"商歷史","啊喂":"啊喂","启发式":"啟發式","啷当":"啷噹","喂。":"喂。","喂了一声":"喂了一聲","喂了一聲":"喂了一聲","喂喂":"喂喂","喂喂喂":"喂喂喂","喂哟":"喂喲","喂喲":"喂喲","喂！":"喂！","喂，":"喂，","喂？":"喂？","喝干":"喝乾","喧哗两成败":"喧嘩兩成敗","喧哗":"喧譁","喧哄":"喧鬨","丧钟":"喪鐘","乔岳":"喬嶽","单于":"單于","單于":"單于","单向":"單向","單向":"單向","单单于":"單單於","单干":"單幹","单打独斗":"單打獨鬥","哟喂":"喲喂","喲喂":"喲喂","嘉谷":"嘉穀","嘴里":"嘴裡","恶心":"噁心","噙齿戴发":"噙齒戴髮","当啷":"噹啷","当当":"噹噹","尝粪":"嚐糞","噜苏":"嚕囌","啮合":"嚙合","啮齿类":"嚙齒類","向导":"嚮導","向往":"嚮往","向慕":"嚮慕","向迩":"嚮邇","严云农":"嚴云農","嚴云農":"嚴云農","嚼谷":"嚼穀","啰啰苏苏":"囉囉囌囌","啰苏":"囉囌","嘱托":"囑託","啮虫":"囓蟲","四个":"四個","四出征收":"四出徵收","四分历":"四分曆","四分历史":"四分歷史","四周后":"四周後","四天后":"四天後","四舍五入":"四捨五入","四舍六入":"四捨六入","四杆铁笔":"四桿鐵筆","四扎":"四紮","四只":"四隻","四面包":"四面包","四面钟":"四面鐘","四余":"四餘","回佣":"回佣","回采":"回採","回旋加速":"回旋加速","回历":"回曆","回历史":"回歷史","回复中":"回覆中","回复你":"回覆你","回复帖子":"回覆帖子","回复意见":"回覆意見","回复说":"回覆說","回覆通告":"回覆通告","回复邮件":"回覆郵件","回复：":"回覆：","回游":"回遊","困倦起来":"困倦起來","困兽之斗":"困獸之鬥","困兽犹斗":"困獸猶鬥","困斗":"困鬥","固定制":"固定制","固征":"固徵","圈里":"圈裡","国之桢干":"國之楨榦","国干网":"國幹網","国历":"國曆","国历代":"國歷代","国历任":"國歷任","国历来":"國歷來","国历史":"國歷史","国历届":"國歷屆","国历经":"國歷經","国仇":"國讎","园里":"園裡","园游会":"園遊會","图里的":"圖裡的","图里，":"圖裡，","图鉴":"圖鑑","土索面":"土索麵","土里":"土裡","土制":"土製","在制品":"在制品","在山里":"在山裡","地图里":"地圖裡","地心历表":"地心曆表","地志":"地誌","地丑德齐":"地醜德齊","坐台鐵":"坐台鐵","坐台铁":"坐台鐵","坐如钟":"坐如鐘","坐台":"坐檯","坐钟":"坐鐘","坑口里":"坑口里","坑里":"坑裡","坤范":"坤範","坦荡":"坦蕩","坦荡荡":"坦蕩蕩","坱郁":"坱鬱","垂范":"垂範","垂发":"垂髮","型范":"型範","埃及历":"埃及曆","埃及历史":"埃及歷史","埃及艳后":"埃及豔后","埃荣冲":"埃榮衝","城市里":"城市裡","城里":"城裡","埔子里":"埔子里","域里":"域裡","基干":"基幹","基准":"基準","坚致":"堅緻","堙淀":"堙澱","堡子里":"堡子里","场里":"場裡","塘栖":"塘栖","塞耳盗钟":"塞耳盜鐘","境里":"境裡","境游":"境遊","境里程":"境里程","墓志铭":"墓志銘","墓志":"墓誌","增辟":"增闢","墨子里":"墨子里","墨斗":"墨斗","墨沈沈":"墨沈沈","墨沈":"墨瀋","垦辟":"墾闢","压制出":"壓製出","压制机":"壓製機","壮游":"壯遊","壮面":"壯麵","壹郁":"壹鬱","壶里":"壺裡","壸范":"壼範","壽天里":"壽天里","寿面":"壽麵","夏于乔":"夏于喬","夏于喬":"夏于喬","夏后氏":"夏后氏","夏历":"夏曆","夏历史":"夏歷史","夏游":"夏遊","外强中干":"外強中乾","外制":"外製","外面包":"外面包","多半只":"多半只","多只包括":"多只包括","多只可":"多只可","多只含":"多只含","多只在":"多只在","多只是":"多只是","多只会":"多只會","多只會":"多只會","多只有":"多只有","多只比":"多只比","多只用":"多只用","多只能":"多只能","多只限":"多只限","多只需":"多只需","多只須":"多只須","多只须":"多只須","多周后":"多周後","多天后":"多天後","多冲":"多衝","多丑":"多醜","多只":"多隻","多余":"多餘","多出电影":"多齣電影","夜晚里":"夜晚裡","夜里":"夜裡","夜游":"夜遊","梦里":"夢裡","梦游":"夢遊","伙伴":"夥伴","伙友":"夥友","伙同":"夥同","伙众":"夥眾","伙计":"夥計","大伙儿":"大伙兒","大只可":"大只可","大只在":"大只在","大只是":"大只是","大只会":"大只會","大只有":"大只有","大只能":"大只能","大只需":"大只需","大周后":"大周后","大型钟":"大型鐘","大型钟表面":"大型鐘表面","大型钟表":"大型鐘錶","大型钟面":"大型鐘面","大多只":"大多只","大伙":"大夥","大干一":"大幹一","大批涌到":"大批湧到","大折儿":"大摺兒","大明历":"大明曆","大明历史":"大明歷史","大历":"大曆","大本钟":"大本鐘","大历史":"大歷史","大历险":"大歷險","大病初愈":"大病初癒","大目干连":"大目乾連","大笨钟":"大笨鐘","大蜡":"大蜡","大衍历":"大衍曆","大衍历史":"大衍歷史","大言非夸":"大言非夸","大夸":"大誇","大赞":"大讚","大周折":"大週摺","大丑":"大醜","大金发苔":"大金髮苔","大钟":"大鐘","大只":"大隻","大风后":"大風後","天主之仆":"天主之僕","天保历":"天保曆","天克地冲":"天克地衝","天台":"天台","天后":"天后","天后宫":"天后宮","天地志狼":"天地志狼","天地为范":"天地為範","天后来":"天後來","天后半":"天後半","天后天":"天後天","天文学钟":"天文學鐘","天文历表":"天文曆表","天文钟":"天文鐘","天历":"天曆","天历史":"天歷史","天神之后":"天神之后","天里":"天裡","天里昂":"天里昂","天里村":"天里村","太仆":"太僕","太凶":"太兇","太初历":"太初曆","太初历史":"太初歷史","太后":"太后","太丑":"太醜","太阁":"太閤","夸克":"夸克","夸父":"夸父","夸特":"夸特","夸脱":"夸脫","奇勋":"奇勳","奇迹":"奇蹟","奇丑":"奇醜","奏折":"奏摺","夺斗":"奪鬥","奋斗":"奮鬥","女丑":"女丑","女仆":"女僕","奴仆":"奴僕","奸淫掳掠":"奸淫擄掠","好家伙":"好傢夥","好凶":"好兇","好勇斗狠":"好勇鬥狠","好斗大":"好斗大","好斗室":"好斗室","好斗笠":"好斗笠","好斗篷":"好斗篷","好斗胆":"好斗膽","好斗膽":"好斗膽","好斗蓬":"好斗蓬","好困":"好睏","好丑":"好醜","好斗":"好鬥","如果干":"如果幹","如饥似渴":"如饑似渴","妖后":"妖后","妖气冲天":"妖氣衝天","妆台":"妝檯","姆万扎":"姆萬扎","姓么":"姓么","委托":"委託","委托书":"委託書","奸夫":"姦夫","奸妇":"姦婦","奸情":"姦情","奸杀":"姦殺","奸污":"姦污","奸淫":"姦淫","威棱":"威稜","婢仆":"婢僕","嫌凶":"嫌兇","嫌好道丑":"嫌好道醜","嫩姜":"嫩薑","嬉游":"嬉遊","嬖幸":"嬖倖","嬴余":"嬴餘","子之丰兮":"子之丰兮","子云":"子云","子里":"子裡","子里甲":"子里甲","字汇":"字彙","字母后":"字母後","字码表":"字碼表","字里":"字裡","存折":"存摺","孛里海":"孛里海","孝惠后":"孝惠后","孙杰":"孫杰","孫杰":"孫杰","学家":"學家","学里":"學裡","宇宙志":"宇宙誌","安沈铁路":"安瀋鐵路","宋王台":"宋王臺","宗周钟":"宗周鐘","官不怕大只怕管":"官不怕大只怕管","官地为采":"官地為寀","官历":"官曆","官历史":"官歷史","定准":"定準","定制":"定製","宜云":"宜云","宣泄":"宣洩","宦游":"宦遊","宫里":"宮裡","宫斗":"宮鬥","宴游":"宴遊","家仆":"家僕","家里":"家裡","家丑":"家醜","容范":"容範","宿舍":"宿舍","寄托在":"寄托在","寄托":"寄託","密致":"密緻","寇准":"寇準","寇仇":"寇讎","富余":"富餘","寒栗":"寒慄","寓禁于征":"寓禁於徵","寡欲":"寡慾","实干":"實幹","实累累":"實纍纍","实验里":"實驗裡","审干":"審幹","写字台":"寫字檯","宽余":"寬餘","宽松":"寬鬆","宽松松":"寬鬆鬆","寮采":"寮寀","寶山庄":"寶山庄","宝历":"寶曆","寶曆":"寶曆","宝历史":"寶歷史","宝里宝气":"寶裡寶氣","宝鉴":"寶鑑","寸发千金":"寸髮千金","寺钟":"寺鐘","封后":"封后","封为后":"封為后","封為后":"封為后","封面里":"封面裡","射雕":"射鵰","专辑里":"專輯裡","尊后":"尊后","对不准":"對不準","对折":"對摺","对准":"對準","对准表":"對準錶","对准钟":"對準鐘","对准钟表":"對準鐘錶","对着干":"對着幹","對着幹":"對着幹","对华发":"對華發","对表中":"對表中","对表扬":"對表揚","对表明":"對表明","对表演":"對表演","对表现":"對表現","对表达":"對表達","导游":"導遊","小丑":"小丑","小井里":"小井里","小价":"小价","小仆":"小僕","小几":"小几","小只可":"小只可","小只在":"小只在","小只是":"小只是","小只会":"小只會","小只有":"小只有","小只能":"小只能","小只需":"小只需","小周后":"小周后","小型钟":"小型鐘","小型钟表面":"小型鐘表面","小型钟表":"小型鐘錶","小型钟面":"小型鐘面","小时里":"小時裡","小米面":"小米麵","小只":"小隻","小鸟游":"小鳥遊","少采":"少採","就范":"就範","就里":"就裡","尸位素餐":"尸位素餐","尸佼":"尸佼","尸利":"尸利","尸子":"尸子","尸居余气":"尸居餘氣","尸弃佛":"尸棄佛","尸棄佛":"尸棄佛","尸祝":"尸祝","尸祿":"尸祿","尸禄":"尸祿","尸罗":"尸羅","尸羅":"尸羅","尸罗精舍":"尸羅精舍","尸羅精舍":"尸羅精舍","尸臣":"尸臣","尸谏":"尸諫","尸逐":"尸逐","尸魂界":"尸魂界","尸鳩":"尸鳩","尸鸠":"尸鳩","局促不安":"局促不安","局里":"局裡","屋里":"屋裡","屏风后":"屏風後","屡顾尔仆":"屢顧爾僕","属托":"屬託","屯扎":"屯紮","屯里":"屯裡","山仔后":"山仔后","山崩钟应":"山崩鐘應","山岳":"山嶽","山棱":"山稜","山羊胡":"山羊鬍","山里有":"山裡有","山里的":"山裡的","山谷":"山谷","山重水复":"山重水複","岑子杰":"岑子杰","岩松了":"岩松了","岫岩":"岫巖","岱岳":"岱嶽","峇里海":"峇里海","峰回":"峰迴","峻岭":"峻岭","昆剧":"崑劇","昆山":"崑山","昆冈":"崑岡","昆仑":"崑崙","昆嵛":"崑嵛","昆承湖":"崑承湖","昆曲":"崑曲","昆玉市":"崑玉市","昆腔":"崑腔","昆苏":"崑蘇","昆调":"崑調","崖广":"崖广","崖姜":"崖薑","嶒棱":"嶒稜","岳岳":"嶽嶽","岳麓":"嶽麓","巡回医疗":"巡回醫療","巡回":"巡迴","巡游":"巡遊","工作台":"工作檯","左冲右突":"左衝右突","巧干":"巧幹","巧历":"巧曆","巧历史":"巧歷史","巨制":"巨製","差之毫厘":"差之毫厘","己丑":"己丑","已占卜":"已占卜","已占算":"已占算","巴尔干":"巴爾幹","巴而术":"巴而朮","巷里":"巷裡","市里的":"市裡的","布谷":"布穀","布谷鸟":"布穀鳥","布谷鸟钟":"布穀鳥鐘","布里海":"布里海","希伯来历":"希伯來曆","希伯来历史":"希伯來歷史","帘子":"帘子","帘布":"帘布","帛尸梨":"帛尸梨","帝后":"帝后","师范":"師範","席卷":"席捲","带征":"帶徵","带余":"帶餘","带发修行":"帶髮修行","幅图里":"幅圖裡","干系":"干係","平平当当":"平平當當","平准":"平準","年代里":"年代裡","年历":"年曆","年历史":"年歷史","年历次":"年歷次","年谷":"年穀","年里":"年裡","年里約":"年里約","年里约":"年里約","年鉴":"年鑑","并州":"并州","并日而食":"并日而食","并迭":"并迭","幸运胡":"幸運鬍","干上":"幹上","干下去":"幹下去","干不了":"幹不了","干不成":"幹不成","干了":"幹了","干事":"幹事","干些":"幹些","干什么":"幹什麼","干仗":"幹仗","干个":"幹個","干劲":"幹勁","干吏":"幹吏","干员":"幹員","干啥":"幹啥","干吗":"幹嗎","干嘛":"幹嘛","干坏事":"幹壞事","干大事":"幹大事","干完":"幹完","干家":"幹家","干得":"幹得","干性油":"幹性油","干才":"幹才","干掉":"幹掉","干探":"幹探","干校":"幹校","干活":"幹活","干流":"幹流","干济":"幹濟","干营生":"幹營生","干父之蛊":"幹父之蠱","干球温度":"幹球溫度","干甚么":"幹甚麼","干略":"幹略","干当":"幹當","干的事":"幹的事","干的好事":"幹的好事","干细胞":"幹細胞","干线":"幹線","干练":"幹練","干缺":"幹缺","干群关系":"幹群關係","干蛊":"幹蠱","干警":"幹警","干起来":"幹起來","干路":"幹路","干办":"幹辦","干这":"幹這","干过":"幹過","干道":"幹道","干部":"幹部","干革命":"幹革命","干头":"幹頭","干么":"幹麼","幽并":"幽并","几个":"幾個","几周后":"幾周後","几天后":"幾天後","几进几出":"幾進幾出","几只":"幾隻","几出":"幾齣","广部":"广部","庄內":"庄內","庄内地方":"庄內地方","庄司":"庄司","庄野":"庄野","床席":"床蓆","店里":"店裡","府干卿":"府干卿","府干扰":"府干擾","府干擾":"府干擾","府干政":"府干政","府干涉":"府干涉","府干犯":"府干犯","府干預":"府干預","府干预":"府干預","府干":"府幹","座钟":"座鐘","廍子里":"廍子里","廓子里":"廓子里","厨余":"廚餘","厮斗":"廝鬥","庙里":"廟裡","废后":"廢后","廢后":"廢后","广征":"廣徵","广舍":"廣捨","广播里":"廣播裡","延历":"延曆","建制":"建制","建筑前":"建築前","建筑后":"建築後","弄干":"弄乾","弄丑":"弄醜","弄脏胸":"弄髒胸","弄松":"弄鬆","弄鬼吊猴":"弄鬼弔猴","吊卷":"弔卷","吊取":"弔取","吊古":"弔古","吊唁":"弔唁","吊问":"弔問","吊喉":"弔喉","吊丧":"弔喪","吊喭":"弔喭","吊奠":"弔奠","吊孝":"弔孝","吊客":"弔客","吊宴":"弔宴","吊影":"弔影","吊恤":"弔恤","吊慰":"弔慰","吊扣":"弔扣","吊拷":"弔拷","吊撒":"弔撒","吊文":"弔文","吊旗":"弔旗","吊民":"弔民","吊祭":"弔祭","吊纸":"弔紙","吊者大悦":"弔者大悅","吊腰撒跨":"弔腰撒跨","吊脚儿事":"弔腳兒事","吊膀子":"弔膀子","吊词":"弔詞","吊诡":"弔詭","吊谎":"弔謊","吊贺迎送":"弔賀迎送","吊头":"弔頭","吊鹤":"弔鶴","引发":"引發","引斗":"引鬥","弘历":"弘曆","弘历史":"弘歷史","弱水三千只取一瓢":"弱水三千只取一瓢","张三丰":"張三丰","張三丰":"張三丰","张勋":"張勳","张杰":"張杰","張杰":"張杰","张柏芝":"張栢芝","张乐于张徐":"張樂于張徐","張樂于張徐":"張樂于張徐","強制":"強制","强制":"強制","强制作用":"強制作用","强奸":"強姦","强干":"強幹","别扭":"彆扭","别拗":"彆拗","别气":"彆氣","弹子台":"彈子檯","弹珠台":"彈珠檯","汇刊":"彙刊","汇算":"彙算","汇纂":"彙纂","汇辑":"彙輯","形单影只":"形單影隻","彭于晏":"彭于晏","影后":"影后","影相吊":"影相弔","往复式":"往復式","往日无仇":"往日無讎","往里":"往裡","待复":"待覆","很干":"很乾","很凶":"很兇","很准":"很準","很丑":"很醜","很松":"很鬆","律历志":"律曆志","后印":"後印","后台老板":"後台老板","后天":"後天","後庄":"後庄","后面店":"後面店","徐干":"徐幹","徒杠":"徒杠","徒托空言":"徒託空言","得到回复":"得到回覆","得力干将":"得力幹將","从仆":"從僕","从图里":"從圖裡","从山里":"從山裡","从里到外":"從裡到外","从里向外":"從裡向外","御岳山":"御嶽山","御制":"御製","复始":"復始","复活节历表":"復活節曆表","复苏":"復甦","征令":"徵令","征信":"徵信","征候":"徵候","征兆":"徵兆","征兵":"徵兵","征到":"徵到","征募":"徵募","征友":"徵友","征召":"徵召","征名责实":"徵名責實","征吏":"徵吏","征咎":"徵咎","征启":"徵啟","征地":"徵地","征士":"徵士","征婚":"徵婚","征实":"徵實","征庸":"徵庸","征引":"徵引","征得":"徵得","征怪":"徵怪","征才":"徵才","征招":"徵招","征收":"徵收","征效":"徵效","征文":"徵文","征求":"徵求","征状":"徵狀","征用":"徵用","征发":"徵發","征税":"徵稅","征稿":"徵稿","征答":"徵答","征结":"徵結","征圣":"徵聖","征聘":"徵聘","征训":"徵訓","征询":"徵詢","征调":"徵調","征象":"徵象","征购":"徵購","征迹":"徵跡","征车":"徵車","征辟":"徵辟","征逐":"徵逐","征选":"徵選","征集":"徵集","征风召雨":"徵風召雨","征验":"徵驗","心细如发":"心細如髮","心系一":"心繫一","心系世":"心繫世","心系中":"心繫中","心系五":"心繫五","心系京":"心繫京","心系人":"心繫人","心系他":"心繫他","心系伊":"心繫伊","心系何":"心繫何","心系你":"心繫你","心系健":"心繫健","心系传":"心繫傳","心系全":"心繫全","心系两":"心繫兩","心系功":"心繫功","心系动":"心繫動","心系募":"心繫募","心系北":"心繫北","心系十":"心繫十","心系千":"心繫千","心系南":"心繫南","心系台":"心繫台","心系和":"心繫和","心系哪":"心繫哪","心系唐":"心繫唐","心系乔":"心繫喬","心系嘱":"心繫囑","心系四":"心繫四","心系困":"心繫困","心系国":"心繫國","心系在":"心繫在","心系地":"心繫地","心系大":"心繫大","心系天":"心繫天","心系夫":"心繫夫","心系奥":"心繫奧","心系女":"心繫女","心系她":"心繫她","心系妻":"心繫妻","心系妇":"心繫婦","心系子":"心繫子","心系它":"心繫它","心系宣":"心繫宣","心系家":"心繫家","心系富":"心繫富","心系小":"心繫小","心系山":"心繫山","心系川":"心繫川","心系幼":"心繫幼","心系广":"心繫廣","心系彼":"心繫彼","心系德":"心繫德","心系您":"心繫您","心系慈":"心繫慈","心系我":"心繫我","心系摩":"心繫摩","心系故":"心繫故","心系新":"心繫新","心系日":"心繫日","心系昌":"心繫昌","心系晓":"心繫曉","心系曼":"心繫曼","心系东":"心繫東","心系林":"心繫林","心系母":"心繫母","心系民":"心繫民","心系江":"心繫江","心系汶":"心繫汶","心系沈":"心繫沈","心系沙":"心繫沙","心系泰":"心繫泰","心系浙":"心繫浙","心系港":"心繫港","心系湖":"心繫湖","心系澳":"心繫澳","心系灾":"心繫災","心系父":"心繫父","心系生":"心繫生","心系病":"心繫病","心系百":"心繫百","心系的":"心繫的","心系众":"心繫眾","心系社":"心繫社","心系祖":"心繫祖","心系神":"心繫神","心系红":"心繫紅","心系美":"心繫美","心系群":"心繫群","心系老":"心繫老","心系舞":"心繫舞","心系英":"心繫英","心系茶":"心繫茶","心系万":"心繫萬","心系兰":"心繫蘭","心系西":"心繫西","心系贫":"心繫貧","心系输":"心繫輸","心系农":"心繫農","心系近":"心繫近","心系远":"心繫遠","心系选":"心繫選","心系重":"心繫重","心系长":"心繫長","心系阮":"心繫阮","心系震":"心繫震","心系非":"心繫非","心系风":"心繫風","心系香":"心繫香","心系高":"心繫高","心系麦":"心繫麥","心系黄":"心繫黃","心脏":"心臟","心脏痳痹":"心臟痲痺","心荡":"心蕩","心里面":"心裏面","心里":"心裡","心长发短":"心長髮短","心余":"心餘","必须":"必須","忙里":"忙裡","忙里偷闲":"忙裡偷閒","忠人之托":"忠人之托","忠仆":"忠僕","快快当当":"快快當當","快冲":"快衝","怎么干":"怎麼幹","怒气冲天":"怒氣衝天","怒火冲天":"怒火衝天","怒发冲冠":"怒髮衝冠","怜奈":"怜奈","思如泉涌":"思如泉湧","急冲而下":"急衝而下","性别扭曲":"性別扭曲","性征":"性徵","性欲":"性慾","怨气冲天":"怨氣衝天","怪里怪气":"怪裡怪氣","怫郁":"怫鬱","恂栗":"恂慄","恒基":"恒基","恒生":"恒生","恒隆":"恒隆","恕乏价催":"恕乏价催","恢复":"恢復","息交绝游":"息交絕遊","息谷":"息穀","悒郁":"悒鬱","悠悠荡荡":"悠悠蕩蕩","悠荡":"悠蕩","悠游":"悠遊","悲凄":"悲悽","悲筑":"悲筑","悲郁":"悲鬱","悸栗":"悸慄","凄厉":"悽厲","凄怨":"悽怨","凄惋":"悽惋","凄惶":"悽惶","凄恻":"悽惻","凄怆":"悽愴","凄惨":"悽慘","凄戾":"悽戾","凄然":"悽然","凄美":"悽美","凄苦":"悽苦","凄酸":"悽酸","情欲":"情慾","惇朴":"惇樸","惠文后":"惠文后","恶仆":"惡僕","恶直丑正":"惡直醜正","恶斗":"惡鬥","惴栗":"惴慄","意大利面临":"意大利面臨","意大利面臨":"意大利面臨","意大利面":"意大利麵","愛河里花子":"愛河里花子","爱河里花子":"愛河里花子","爱困":"愛睏","愿朴":"愿樸","愿樸":"愿樸","愿而恭":"愿而恭","栗冽":"慄冽","栗栗":"慄慄","慈溪":"慈谿","慌里慌张":"慌裡慌張","惨淡":"慘澹","庆吊":"慶弔","庆历":"慶曆","庆历史":"慶歷史","欲令智昏":"慾令智昏","欲壑难填":"慾壑難填","欲念":"慾念","欲海":"慾海","欲火":"慾火","欲障":"慾障","忧郁":"憂鬱","凭几":"憑几","憑几":"憑几","凭吊":"憑弔","凭折":"憑摺","凭准":"憑準","凭借":"憑藉","凭闲":"憑閑","宪法里":"憲法裡","恳托":"懇託","懈松":"懈鬆","应制得":"應制得","應制得":"應制得","应征":"應徵","应钟":"應鐘","懔栗":"懍慄","懞懞懂懂":"懞懞懂懂","懞直":"懞直","惩忿窒欲":"懲忿窒欲","怀里":"懷裡","怀表":"懷錶","怀钟":"懷鐘","悬挂":"懸掛","悬钟":"懸鐘","懿范":"懿範","恋恋不舍":"戀戀不捨","成于思":"成於思","戬谷":"戩穀","战天斗地":"戰天鬥地","战栗":"戰慄","战斗":"戰鬥","戏里":"戲裡","戲院里":"戲院里","戴表元":"戴表元","戴发含齿":"戴髮含齒","房里":"房裡","所云":"所云","所云云":"所云云","所占卜":"所占卜","所占星":"所占星","所占算":"所占算","所有只":"所有只","所托":"所託","扁拟谷盗虫":"扁擬穀盜蟲","手冢治虫":"手塚治虫","手塚治虫":"手塚治虫","手折":"手摺","手机里":"手機裡","手表态":"手表態","手表態":"手表態","手表明":"手表明","手表决":"手表決","手表決":"手表決","手表演":"手表演","手表现":"手表現","手表現":"手表現","手表示":"手表示","手表达":"手表達","手表達":"手表達","手表露":"手表露","手表面":"手表面","手里剑":"手裏劍","手里":"手裡","手游":"手遊","手表":"手錶","手链":"手鍊","手松":"手鬆","才干休":"才干休","才干戈":"才干戈","才干扰":"才干擾","才干政":"才干政","才干涉":"才干涉","才干预":"才干預","才干":"才幹","扎好底子":"扎好底子","扎好根":"扎好根","扑作教刑":"扑作教刑","扑打":"扑打","扑挞":"扑撻","扑撻":"扑撻","打干哕":"打乾噦","打出吊入":"打出弔入","打卡钟":"打卡鐘","打吨":"打吨","打干":"打幹","打断发":"打斷發","打卤":"打滷","打谷":"打穀","打钟":"打鐘","打风后":"打風後","打斗":"打鬥","托管国":"托管國","扯面":"扯麵","扶余":"扶餘","批准":"批准","批准确定":"批准確定","批复":"批覆","批注":"批註","批斗":"批鬥","抑制":"抑制","抑郁":"抑鬱","抓奸":"抓姦","抓斗":"抓斗","抗御":"抗禦","折子戏":"折子戲","折子戲":"折子戲","折戟沈河":"折戟沈河","折冲":"折衝","披榛采兰":"披榛採蘭","披头散发":"披頭散髮","披发":"披髮","抱朴而长吟兮":"抱朴而長吟兮","抱素怀朴":"抱素懷樸","抵御":"抵禦","抹干":"抹乾","抽干":"抽乾","抽公签":"抽公籤","抽签":"抽籤","抿发":"抿髮","拂钟无声":"拂鐘無聲","拆伙":"拆夥","拈须":"拈鬚","拉克施尔德钟":"拉克施爾德鐘","拉纤":"拉縴","拉面上":"拉面上","拉面具":"拉面具","拉面前":"拉面前","拉面巾":"拉面巾","拉面无":"拉面無","拉面皮":"拉面皮","拉面罩":"拉面罩","拉面色":"拉面色","拉面部":"拉面部","拉面":"拉麵","拌面":"拌麵","拓朴":"拓樸","拔发":"拔髮","拔须":"拔鬚","拗别":"拗彆","拙朴":"拙樸","拚舍":"拚捨","拜托":"拜託","拭干":"拭乾","拮据":"拮据","拳局":"拳跼","拼斗":"拼鬥","拾沈":"拾瀋","拿不准":"拿不準","拿准":"拿準","拿破仑":"拿破崙","挌斗":"挌鬥","挑斗":"挑鬥","捉奸徒":"捉奸徒","捉奸细":"捉奸細","捉奸贼":"捉奸賊","捉奸党":"捉奸黨","捉奸":"捉姦","捍御":"捍禦","捏面人":"捏麵人","舍不得":"捨不得","舍入":"捨入","舍出":"捨出","舍去":"捨去","舍命":"捨命","舍堕":"捨墮","舍安就危":"捨安就危","舍实":"捨實","舍己从人":"捨己從人","舍己救人":"捨己救人","舍己为人":"捨己為人","舍己为公":"捨己為公","舍己为国":"捨己為國","舍得":"捨得","舍我其谁":"捨我其誰","舍本逐末":"捨本逐末","舍弃":"捨棄","舍死忘生":"捨死忘生","舍生":"捨生","舍短取长":"捨短取長","舍身":"捨身","舍车保帅":"捨車保帥","舍近求远":"捨近求遠","卷住":"捲住","卷来":"捲來","卷儿":"捲兒","卷入":"捲入","卷动":"捲動","卷去":"捲去","卷图":"捲圖","卷土重来":"捲土重來","卷地":"捲地","卷尺":"捲尺","卷尾猴":"捲尾猴","卷心菜":"捲心菜","卷成":"捲成","卷曲":"捲曲","卷款":"捲款","卷毛":"捲毛","卷烟盒":"捲煙盒","卷瓣":"捲瓣","卷积云":"捲積雲","卷筒":"捲筒","卷帘":"捲簾","卷纸":"捲紙","卷缩":"捲縮","卷舌":"捲舌","卷烟":"捲菸","卷叶蛾":"捲葉蛾","卷袖":"捲袖","卷走":"捲走","卷起":"捲起","卷轴":"捲軸","卷逃":"捲逃","卷铺盖":"捲鋪蓋","卷云":"捲雲","卷风":"捲風","卷发":"捲髮","捵面":"捵麵","捶炼":"捶鍊","扫荡":"掃蕩","授勋":"授勳","授时历":"授時曆","掌柜":"掌柜","排干":"排乾","排干部":"排幹部","排骨面":"排骨麵","挂名":"掛名","挂历":"掛曆","挂钩":"掛鈎","挂面":"掛麵","采下":"採下","采伐":"採伐","采住":"採住","采信":"採信","采光":"採光","采到":"採到","采制":"採制","采区":"採區","采去":"採去","采取":"採取","采回":"採回","采在":"採在","采好":"採好","采得":"採得","采拾":"採拾","采挖":"採挖","采掘":"採掘","采摘":"採摘","采摭":"採摭","采择":"採擇","采撷":"採擷","采收":"採收","采料":"採料","采暖":"採暖","采桑":"採桑","采棉":"採棉","采样":"採樣","采樵人":"採樵人","采树种":"採樹種","采气":"採氣","采油":"採油","采为":"採為","采煤":"採煤","采获":"採獲","采猎":"採獵","采珠":"採珠","采生折割":"採生折割","采用":"採用","采石":"採石","采砂":"採砂","采矿":"採礦","采种":"採種","采空区":"採空區","采空采穗":"採空採穗","采纳":"採納","采给":"採給","采编":"採編","采花":"採花","采芹人":"採芹人","采茶":"採茶","采菊":"採菊","采莲":"採蓮","采薇":"採薇","采薪":"採薪","采药":"採藥","采血":"採血","采行":"採行","采补":"採補","采访":"採訪","采证":"採證","采买":"採買","采购":"採購","采办":"採辦","采运":"採運","采过":"採過","采选":"採選","采金":"採金","采录":"採錄","采铁":"採鐵","采集":"採集","采风":"採風","采风问俗":"採風問俗","采食":"採食","采盐":"採鹽","掣签":"掣籤","控制":"控制","推情准理":"推情準理","推托之词":"推托之詞","推托":"推託","提子干":"提子乾","提心吊胆":"提心弔膽","提摩太后书":"提摩太後書","提高后":"提高後","换只":"換隻","握发":"握髮","揩干":"揩乾","揪采":"揪採","揪发":"揪髮","揪须":"揪鬚","揭丑":"揭醜","挥手表":"揮手表","揮手表":"揮手表","搋面":"搋麵","搏斗":"搏鬥","捣鬼吊白":"搗鬼弔白","扼肮":"搤肮","搤肮":"搤肮","扼肮拊背":"搤肮拊背","搬斗":"搬鬥","搭干铺":"搭乾鋪","搭伙":"搭夥","抢注":"搶註","摧坚获丑":"摧堅獲醜","摭采":"摭採","摸棱":"摸稜","摸钟":"摸鐘","折奏":"摺奏","折子":"摺子","折尺":"摺尺","折扇":"摺扇","折梯":"摺梯","折椅":"摺椅","折台":"摺檯","折叠":"摺疊","折痕":"摺痕","折篷":"摺篷","折纸":"摺紙","折裙":"摺裙","撇吊":"撇弔","捞干":"撈乾","捞面":"撈麵","撚须":"撚鬚","撞钟":"撞鐘","撞阵冲军":"撞陣衝軍","撤并":"撤併","拨谷":"撥穀","撩斗":"撩鬥","扑冬":"撲鼕","扑咚":"撲鼕","扑咚咚":"撲鼕鼕","擀面":"擀麵","击扑":"擊扑","擊扑":"擊扑","击钟":"擊鐘","操作钟":"操作鐘","担仔面":"擔仔麵","担担面":"擔擔麵","据云":"據云","擢发":"擢髮","擦干":"擦乾","拧干":"擰乾","摆钟":"擺鐘","摄制":"攝製","支干":"支幹","支配欲":"支配慾","收回":"收回","收获":"收穫","改制成":"改制成","改征":"改徵","改采":"改採","放懞挣":"放懞掙","放荡":"放蕩","放松":"放鬆","政斗":"政鬥","故云":"故云","教学钟":"教學鐘","教范":"教範","敢干、":"敢幹、","敢干的":"敢幹的","敢干，":"敢幹，","敢情欲":"敢情欲","散伙":"散夥","散荡":"散蕩","敦朴":"敦樸","敬挽":"敬輓","敲扑":"敲扑","敲钟":"敲鐘","整只":"整隻","整风后":"整風後","整发用品":"整髮用品","整出剧":"整齣劇","整出戏":"整齣戲","整出电影":"整齣電影","敌忾同仇":"敵愾同讎","数只包括":"數只包括","数只可":"數只可","数只含":"數只含","数只在":"數只在","数只应":"數只應","数只是":"數只是","数只会":"數只會","数只有":"數只有","数只比":"數只比","数只能":"數只能","数只限":"數只限","数只需":"數只需","数只须":"數只須","数天后":"數天後","数字钟":"數字鐘","数字钟表":"數字鐘錶","数罪并罚":"數罪併罰","数只":"數隻","文丑":"文丑","文学志":"文學誌","文征明":"文徵明","文思泉涌":"文思泉湧","文杰":"文杰","文采郁郁":"文采郁郁","斗法会":"斗法會","斗牛星":"斗牛星","斫雕为朴":"斫雕為樸","新井里美":"新井里美","新干县":"新幹縣","新庄子":"新庄子","新历":"新曆","新历史":"新歷史","新扎":"新紮","斲雕为朴":"斲雕為樸","断发现":"斷發現","断发":"斷髮","断发文身":"斷髮文身","方便面":"方便麵","方向":"方向","方法里":"方法裡","于吉林":"於吉林","于吉尔吉斯":"於吉爾吉斯","于吉隆坡":"於吉隆坡","于敏感":"於敏感","于格林":"於格林","于格陵兰":"於格陵蘭","于格鲁":"於格魯","于波特":"於波特","于禁止":"於禁止","于越南":"於越南","于越过":"於越過","于震中":"於震中","于震前":"於震前","于震区":"於震區","于震度":"於震度","于震后":"於震後","于震灾":"於震災","施舍":"施捨","施舍之道":"施舍之道","旁征博引":"旁徵博引","旁注":"旁註","旅游":"旅遊","旋回":"旋迴","旋松":"旋鬆","族里":"族裡","日心历表":"日心曆表","日历":"日曆","日历史":"日歷史","日里":"日裡","日志":"日誌","旱干":"旱乾","升州":"昇州","升平":"昇平","升阳":"昇陽","昊天不吊":"昊天不弔","明征":"明徵","明目张胆":"明目張胆","明窗净几":"明窗淨几","明范":"明範","明鉴":"明鑑","昔人有云":"昔人有云","星历":"星曆","星期后":"星期後","星历史":"星歷史","星露谷物语":"星露谷物語","春游":"春遊","春香斗学":"春香鬥學","昭惠后":"昭惠后","是发小":"是髮小","时代里":"時代裡","时钟":"時鐘","时间不准":"時間不準","晃荡":"晃蕩","晚钟":"晚鐘","晞发":"晞髮","晨钟":"晨鐘","普咚咚":"普鼕鼕","晾干":"晾乾","暗地里":"暗地裡","暗沟里":"暗溝裡","暗里":"暗裡","暗斗":"暗鬥","畅游":"暢遊","昵称":"暱稱","暴敛横征":"暴斂橫徵","历元":"曆元","历命":"曆命","历始":"曆始","历室":"曆室","历尾":"曆尾","历局":"曆局","历数书":"曆數書","历日":"曆日","历书":"曆書","历本":"曆本","历法":"曆法","历狱":"曆獄","历纪":"曆紀","历象":"曆象","晒干":"曬乾","晒谷":"曬穀","曰云":"曰云","更仆难数":"更僕難數","更钟情":"更鍾情","更钟意":"更鍾意","更钟爱":"更鍾愛","更钟":"更鐘","书签":"書籤","书面":"書面","曹子里":"曹子里","曹廷杰":"曹廷杰","曼谷":"曼谷","曾朴":"曾樸","最多":"最多","最多只":"最多只","会干扰":"會干擾","会干涉":"會干涉","会干预":"會干預","会干":"會幹","会吊":"會弔","会里":"會裡","月历":"月曆","月历史":"月歷史","月球历表":"月球曆表","月里来":"月裡來","月面":"月面","有事之无范":"有事之無範","有仆":"有僕","有只不":"有只不","有只允":"有只允","有只容":"有只容","有只採":"有只採","有只采":"有只採","有只是":"有只是","有只用":"有只用","有只能":"有只能","有回复":"有回覆","有够赞":"有夠讚","有征伐":"有征伐","有征战":"有征戰","有征戰":"有征戰","有征服":"有征服","有征討":"有征討","有征讨":"有征討","有征":"有徵","有恒街":"有恒街","有栖":"有栖","有准":"有準","有棱有角":"有稜有角","有只":"有隻","有余":"有餘","有发头陀寺":"有髮頭陀寺","望了望":"望了望","望后石":"望后石","朝钟":"朝鐘","朝鲜于":"朝鮮於","朦胧":"朦朧","蒙胧":"朦朧","木偶戏扎":"木偶戲紮","木材干馏":"木材乾餾","木梁":"木樑","木签":"木籤","木制":"木製","木钟":"木鐘","未干":"未乾","未干涉":"未干涉","未干預":"未干預","未干预":"未干預","本庄":"本庄","本征":"本徵","本出戏":"本齣戲","术忽":"朮忽","术虎高":"朮虎高","术赤":"朮赤","朱庆余":"朱慶餘","朱理安历":"朱理安曆","朱理安历史":"朱理安歷史","朴子里":"朴子里","李志喜":"李志喜","李适":"李适","李连杰":"李連杰","李連杰":"李連杰","材干":"材幹","村落发":"村落發","村里有":"村裡有","村里的":"村裡的","杜琪峰":"杜琪峯","杜老志道":"杜老誌道","杞宋无征":"杞宋無徵","束发":"束髮","杠人":"杠人","杠梁":"杠梁","杠毂":"杠轂","杠轂":"杠轂","杯干":"杯乾","杯面":"杯麵","杰伦":"杰倫","杰倫":"杰倫","杰威尔":"杰威爾","杰威爾":"杰威爾","东周钟":"東周鐘","东岳":"東嶽","東湖里":"東湖里","东冲西突":"東衝西突","东游":"東遊","松口蘑":"松口蘑","松口镇":"松口鎮","松山庄":"松山庄","松溪县":"松谿縣","松开始":"松開始","板荡":"板蕩","林宏岳":"林宏嶽","林杰樑":"林杰樑","林郁方":"林郁方","林钟":"林鐘","林鹅峰":"林鵞峰","果干":"果乾","果子干":"果子乾","果累累":"果纍纍","枝干":"枝幹","枯干":"枯乾","架钟":"架鐘","某只":"某隻","染殿后":"染殿后","染发生":"染發生","染发":"染髮","柜上":"柜上","柜子":"柜子","柜柳":"柜柳","查封后":"查封後","柳斌杰":"柳斌杰","柳诒征":"柳詒徵","栗栖":"栗栖","校准":"校準","校舍":"校舍","核准":"核准","格范":"格範","格里历":"格里曆","格里高利历":"格里高利曆","格斗":"格鬥","桂圆干":"桂圓乾","框里":"框裡","桌几":"桌几","桌历":"桌曆","桌历史":"桌歷史","桌游":"桌遊","桑干":"桑乾","杆枪":"桿槍","杆秤":"桿秤","杆菌":"桿菌","梁凌杰":"梁凌杰","梁启超":"梁啓超","梅干":"梅乾","梅干提克":"梅干提克","条文里":"條文裡","梨干":"梨乾","梯冲":"梯衝","械系":"械繫","械斗":"械鬥","弃舍":"棄捨","棉里":"棉裡","棉制":"棉製","棒子面":"棒子麵","棫朴":"棫樸","森林里":"森林裡","棺材里":"棺材裡","植发":"植髮","椒面":"椒麵","椰枣干":"椰棗乾","杨雅筑":"楊雅筑","楊雅筑":"楊雅筑","桢干":"楨幹","业余":"業餘","榨干":"榨乾","枪杆":"槍桿","杠杆":"槓桿","乐器钟":"樂器鐘","乐游原":"樂遊原","樗里子":"樗里子","标标致致":"標標致致","标准":"標準","标签":"標籤","标致":"標緻","标注":"標註","标志":"標誌","模棱":"模稜","模范":"模範","模范七棒":"模范七棒","模范三军":"模范三軍","模范三軍":"模范三軍","模范棒棒堂":"模范棒棒堂","模制":"模製","样范":"樣範","樵采":"樵採","朴修斯":"樸修斯","朴厚":"樸厚","朴学":"樸學","朴实":"樸實","朴念仁":"樸念仁","朴拙":"樸拙","朴樕":"樸樕","朴父":"樸父","朴直":"樸直","朴素":"樸素","朴茨茅斯":"樸茨茅斯","朴讷":"樸訥","朴质":"樸質","朴鄙":"樸鄙","朴重":"樸重","朴野":"樸野","朴钝":"樸鈍","朴陋":"樸陋","朴马":"樸馬","朴鲁":"樸魯","树干":"樹幹","树林里":"樹林裡","机械系":"機械系","機械系":"機械系","机械表":"機械錶","机械钟":"機械鐘","机械钟表":"機械鐘錶","横亘":"橫亙","横峰县":"橫峯縣","横征暴敛":"橫徵暴斂","横冲":"橫衝","台历":"檯曆","台灯":"檯燈","台球":"檯球","台面上":"檯面上","台面化":"檯面化","柜台":"櫃檯","柜里":"櫃裡","栉发工":"櫛髮工","权斗":"權鬥","欲海难填":"欲海難填","欺蒙":"欺矇","歌后":"歌后","歌钟":"歌鐘","欧游":"歐遊","正官庄":"正官庄","正文里":"正文裡","正杰":"正杰","武丑":"武丑","武后":"武后","武斗":"武鬥","岁聿云暮":"歲聿云暮","歲聿云暮":"歲聿云暮","历史里":"歷史裡","归并":"歸併","归余":"歸餘","歹斗":"歹鬥","死里求生":"死裡求生","死里逃生":"死裡逃生","殖谷":"殖穀","残余":"殘餘","僵尸":"殭屍","殷师牛斗":"殷師牛鬥","殷鉴":"殷鑑","壳里":"殼裡","殿里":"殿裡","殿钟自鸣":"殿鐘自鳴","毁钟为铎":"毀鐘為鐸","殴斗":"毆鬥","母后":"母后","母范":"母範","母丑":"母醜","每每只":"每每只","每只":"每隻","毗婆尸佛":"毗婆尸佛","毛坏":"毛坏","毛姜":"毛薑","毛发":"毛髮","毫厘":"毫釐","毫发":"毫髮","气冲斗牛":"氣沖斗牛","气郁":"氣鬱","氤郁":"氤鬱","水并流":"水併流","水来汤里去":"水來湯裡去","水准":"水準","水表示":"水表示","水表面":"水表面","水里":"水裡","水里商工":"水里商工","水里溪":"水里溪","水里濁水溪":"水里濁水溪","水里鄉":"水里鄉","水里高級商工":"水里高級商工","水里鳳林":"水里鳳林","水表":"水錶","永历":"永曆","永历史":"永歷史","永志不忘":"永誌不忘","求知欲":"求知慾","求签":"求籤","江并流":"江併流","池里":"池裡","污蔑":"污衊","汤卤":"汤滷","汤滷":"汤滷","决斗":"決鬥","沈淀":"沈澱","沈郁":"沈鬱","沉淀":"沉澱","沉郁":"沉鬱","没干没净":"沒乾沒淨","没事干":"沒事幹","没干":"沒幹","没折至":"沒摺至","没样范":"沒樣範","没准":"沒準","冲冠发怒":"沖冠髮怒","冲天":"沖天","沙坪坝":"沙坪垻","沙琅":"沙瑯","沙羡":"沙羡","沙里淘金":"沙裡淘金","河岳":"河嶽","河里":"河裡","油泼面":"油潑麵","油斗":"油鬥","油面":"油麵","治愈":"治癒","沿溯":"沿泝","法自制":"法自制","法里，":"法裡，","泛游":"泛遊","泡制":"泡製","泡面":"泡麵","波棱菜":"波稜菜","波发藻":"波髮藻","注云":"注云","注释":"注釋","泱郁":"泱鬱","泳气钟":"泳氣鐘","洋河大曲":"洋河大麯","洒家":"洒家","洒淅":"洒淅","洒濯":"洒濯","洒然":"洒然","洗炼":"洗鍊","洗练":"洗鍊","洗发":"洗髮","洛钟东应":"洛鐘東應","洞里":"洞裡","洞里萨":"洞里薩","洞里薩":"洞里薩","泄欲":"洩慾","洪范":"洪範","洪谷子":"洪谷子","洪适":"洪适","洪钟":"洪鐘","汹涌":"洶湧","流征":"流徵","流荡":"流蕩","流风余俗":"流風餘俗","流风余韵":"流風餘韻","浩浩荡荡":"浩浩蕩蕩","浩荡":"浩蕩","浪荡":"浪蕩","浪游":"浪遊","浮荡":"浮蕩","浮夸":"浮誇","浮松":"浮鬆","海干":"海乾","海淀山后":"海淀山後","海淀山後":"海淀山後","浸卤":"浸滷","涂善妮":"涂善妮","涂坤":"涂坤","涂壮勋":"涂壯勳","涂壯勳":"涂壯勳","涂天相":"涂天相","涂姓":"涂姓","涂序瑄":"涂序瑄","涂敏恆":"涂敏恆","涂敏恒":"涂敏恆","涂泽民":"涂澤民","涂澤民":"涂澤民","涂尔干":"涂爾幹","涂爾幹":"涂爾幹","涂紹煃":"涂紹煃","涂绍煃":"涂紹煃","涂羽卿":"涂羽卿","涂謹申":"涂謹申","涂谨申":"涂謹申","涂逢年":"涂逢年","涂醒哲":"涂醒哲","涂長望":"涂長望","涂长望":"涂長望","涂鴻欽":"涂鴻欽","涂鸿钦":"涂鴻欽","涌水塘":"涌水塘","涳蒙":"涳濛","涸干":"涸乾","凉席":"涼蓆","凉面":"涼麵","淋余土":"淋餘土","淑范":"淑範","泪干":"淚乾","泪如泉涌":"淚如泉湧","淡蒙蒙":"淡濛濛","净余":"淨餘","净发":"淨髮","淫欲":"淫慾","淫荡":"淫蕩","淬炼":"淬鍊","深山何处钟":"深山何處鐘","深山里":"深山裡","淳于":"淳于","淳朴":"淳樸","渊淳岳峙":"淵淳嶽峙","渊里":"淵裡","浅淀":"淺澱","清心寡欲":"清心寡欲","渠冲":"渠衝","温岚":"温嵐","温嵐":"温嵐","测不准":"測不準","港制度":"港制度","港制":"港製","游离":"游離","浑朴":"渾樸","浑个":"渾箇","湖南岳阳":"湖南岳陽","湖里":"湖裡","湖里区":"湖里區","湘累":"湘纍","涌上":"湧上","涌来":"湧來","涌入":"湧入","涌出":"湧出","涌向":"湧向","涌水":"湧水","涌泉":"湧泉","涌现":"湧現","涌起":"湧起","涌进":"湧進","湮郁":"湮鬱","汤下面":"湯下麵","汤团":"湯糰","汤面":"湯麵","准不准":"準不準","准例":"準例","准保":"準保","准备":"準備","准儿":"準兒","准分子":"準分子","准则":"準則","准噶尔":"準噶爾","准定":"準定","准平原":"準平原","准度":"準度","准式":"準式","准拿督":"準拿督","准据":"準據","准拟":"準擬","准新娘":"準新娘","准新郎":"準新郎","准星":"準星","准是":"準是","准时":"準時","准会":"準會","准格尔":"準格爾","准决赛":"準決賽","准的":"準的","准直":"準直","准确":"準確","准线":"準線","准绳":"準繩","准话":"準話","准谱":"準譜","准货币":"準貨幣","准军事":"準軍事","准头":"準頭","准点":"準點","沟大曲":"溝大麯","沟谷":"溝谷","溟蒙":"溟濛","温洛克期":"溫洛克期","溫洛克期":"溫洛克期","溲面":"溲麵","滃郁":"滃鬱","滑借":"滑藉","汇丰":"滙豐","渗漓":"滲灕","卤了":"滷了","卤五花":"滷五花","卤味":"滷味","卤好":"滷好","卤子":"滷子","卤料":"滷料","卤水":"滷水","卤汁":"滷汁","卤湖":"滷湖","卤煮":"滷煮","卤牛":"滷牛","卤的":"滷的","卤肉":"滷肉","卤菜":"滷菜","卤蛋":"滷蛋","卤虾":"滷蝦","卤制":"滷製","卤豆":"滷豆","卤鸡":"滷雞","卤鸭":"滷鴨","卤鹅":"滷鵝","卤面":"滷麵","满满当当":"滿滿當當","满头洋发":"滿頭洋髮","漂荡":"漂蕩","漕挽":"漕輓","沤郁":"漚鬱","漠里":"漠裡","汉弥登钟":"漢彌登鐘","漫卷":"漫捲","漫游":"漫遊","潜意识里":"潛意識裡","潜水表":"潛水錶","潜水钟":"潛水鐘","潜水钟表":"潛水鐘錶","潭里":"潭裡","潮涌":"潮湧","涩谷区":"澀谷區","澄江县":"澂江縣","澄澹精致":"澄澹精致","澒蒙":"澒濛","淀山":"澱山","淀浦":"澱浦","淀淀":"澱澱","淀积":"澱積","淀粉":"澱粉","淀解物":"澱解物","淀谓之滓":"澱謂之滓","澹台":"澹臺","澹荡":"澹蕩","激斗":"激鬥","浓发":"濃髮","蒙汜":"濛汜","蒙蒙细雨":"濛濛細雨","蒙雾":"濛霧","蒙松雨":"濛鬆雨","蒙鸿":"濛鴻","浚州":"濬州","浚县":"濬縣","滨田里佳子":"濱田里佳子","沈丹客运":"瀋丹客運","沈丹线":"瀋丹線","沈丹铁路":"瀋丹鐵路","沈丹高":"瀋丹高","沈北":"瀋北","沈吉":"瀋吉","沈大线":"瀋大線","沈大铁路":"瀋大鐵路","沈大高速":"瀋大高速","沈山线":"瀋山線","沈山铁路":"瀋山鐵路","沈州":"瀋州","沈抚":"瀋撫","沈水":"瀋水","沈河":"瀋河","沈海铁路":"瀋海鐵路","沈海高速":"瀋海高速","沈阳":"瀋陽","泸州大曲":"瀘州大麯","沥干":"瀝乾","弥山遍野":"瀰山遍野","弥漫":"瀰漫","弥弥":"瀰瀰","漓水":"灕水","漓江":"灕江","漓湘":"灕湘","漓然":"灕然","滩涂":"灘涂","灘涂":"灘涂","滩席":"灘蓆","火并非":"火並非","火并":"火併","火山里":"火山裡","火折子":"火摺子","火签":"火籤","灰蒙":"灰濛","灰蒙蒙":"灰濛濛","炆面":"炆麵","炒面":"炒麵","炮制":"炮製","炸酱面":"炸醬麵","为帝后，":"為帝後，","为准":"為準","为鉴":"為鑑","乌冬面":"烏冬麵","乌兹冲锋枪":"烏茲衝鋒槍","乌苏里":"烏蘇里","乌发":"烏髮","乌龙面":"烏龍麵","烘干":"烘乾","烘制":"烘製","烤干":"烤乾","烤卤":"烤滷","烹制":"烹製","焙干":"焙乾","无征不信":"無徵不信","无业游民":"無業游民","无余":"無餘","炼制":"煉製","煎面":"煎麵","烟卷":"煙捲","烟台":"煙臺","照入签":"照入籤","照相干片":"照相乾片","煨干":"煨乾","煮制":"煮製","煮面":"煮麵","熊杰":"熊杰","荧郁":"熒鬱","熬制":"熬製","炖制":"燉製","燎发":"燎髮","烧干":"燒乾","燕几":"燕几","燕游":"燕遊","烫一个发":"燙一個髮","烫一次发":"燙一次髮","烫个发":"燙個髮","烫完发":"燙完髮","烫次发":"燙次髮","烫发":"燙髮","烫面":"燙麵","营干":"營幹","烩面":"燴麵","烬余":"燼餘","爆发":"爆發","争奇斗妍":"爭奇鬥妍","争奇斗异":"爭奇鬥異","争奇斗艳":"爭奇鬥豔","争妍斗奇":"爭妍鬥奇","争妍斗艳":"爭妍鬥豔","争红斗紫":"爭紅鬥紫","争斗":"爭鬥","爰定祥历":"爰定祥厤","爽荡":"爽蕩","尔冬升":"爾冬陞","墙里":"牆裡","片里":"片裡","片言只语":"片言隻語","版图里":"版圖裡","版本里":"版本裡","牙签":"牙籤","牛街庄":"牛街莊","牛只":"牛隻","牢里":"牢裡","物欲":"物慾","抵牾":"牴牾","抵触":"牴觸","特别致":"特别致","特制住":"特制住","特制定":"特制定","特制止":"特制止","特制订":"特制訂","特征":"特徵","特制":"特製","牵一发":"牽一髮","牵系":"牽繫","犖确":"犖确","荦确":"犖确","狂并潮":"狂併潮","狄志杰":"狄志杰","狄那里克":"狄那里克","狐借虎威":"狐藉虎威","猛冲":"猛衝","猜三划五":"猜三划五","狱里":"獄裡","奖杯":"獎盃","独裁制":"獨裁制","獨裁制":"獨裁制","独辟蹊径":"獨闢蹊徑","获匪其丑":"獲匪其醜","兽欲":"獸慾","献丑":"獻醜","玉历":"玉曆","玉历史":"玉歷史","玉米面":"玉米面","王侯后":"王侯后","王后":"王后","王添灯":"王添灯","王田里":"王田里","王鉴":"王鑑","王余鱼":"王餘魚","珍肴":"珍餚","班里":"班裡","球台":"球檯","理一个发":"理一個髮","理一次发":"理一次髮","理个发":"理個髮","理完发":"理完髮","理次发":"理次髮","理发动":"理發動","理发展":"理發展","理发放":"理發放","理发现":"理發現","理发生":"理發生","理发表":"理發表","理发":"理髮","琴钟":"琴鐘","珐琅":"琺瑯","瑞城里":"瑞城里","瑞征":"瑞徵","瑶签":"瑤籤","环游":"環遊","瓷制":"瓷製","甄后":"甄后","瓮安":"甕安","甜、咸":"甜、鹹","甜水面":"甜水麵","甜咸":"甜鹹","甜面酱":"甜麵醬","生力面":"生力麵","生物钟":"生物鐘","生华发":"生華髮","生姜":"生薑","生发剂":"生髮劑","生发水":"生髮水","生发油":"生髮油","生发液":"生髮液","生发药":"生髮藥","苏醒":"甦醒","用法里":"用法裡","甩发":"甩髮","田子里":"田子里","田庄英雄":"田庄英雄","田里":"田裡","田里穗":"田里穗","由余":"由余","甲胄":"甲冑","甲后路":"甲后路","男仆":"男僕","界里":"界裡","留发展":"留發展","留发生":"留發生","留发行":"留發行","留长发":"留長髮","留发":"留髮","画里":"畫裡","当准":"當準","当当丁丁":"當當丁丁","当当网":"當當網","叠席":"疊蓆","疏松":"疏鬆","疑凶":"疑兇","疲困":"疲睏","病征":"病徵","病愈":"病癒","病余":"病餘","痊愈":"痊癒","痒疹":"痒疹","痒痒":"痒痒","痳木":"痳木","痳疹":"痳疹","痳病":"痳病","痳痹":"痳痺","痳疯":"痳瘋","愈合":"癒合","症结":"癥結","癸丑":"癸丑","发干":"發乾","发状态":"發狀態","发状况":"發狀況","发签":"發籤","发表":"發表","发松":"發鬆","发面":"發麵","白干儿":"白乾兒","白术":"白朮","白朴":"白樸","白净面皮":"白淨面皮","白发其事":"白發其事","白皮松":"白皮松","白粉面":"白粉麵","白里透红":"白裡透紅","白面包青天":"白面包青天","白发":"白髮","白霉":"白黴","百个":"百個","百只可":"百只可","百只够":"百只夠","百只夠":"百只夠","百只怕":"百只怕","百只足够":"百只足夠","百只足夠":"百只足夠","百周后":"百周後","百天后":"百天後","百子里":"百子里","百拙千丑":"百拙千醜","百科里":"百科裡","百谷":"百穀","百扎":"百紮","百花历":"百花曆","百花历史":"百花歷史","百炼":"百鍊","百只":"百隻","百余":"百餘","的回复":"的回覆","的图里":"的圖裡","的山里":"的山裡","的干将":"的幹將","的个中":"的箇中","的钟":"的鐘","的长发":"的長髮","的发小":"的髮小","皆可作淀":"皆可作澱","皆准":"皆準","皇后":"皇后","皇历":"皇曆","皇极历":"皇極曆","皇极历史":"皇極歷史","皇历史":"皇歷史","皓发":"皓髮","皮制服":"皮制服","皮托管":"皮托管","皮肤":"皮膚","皮里春秋":"皮裡春秋","皮里阳秋":"皮裡陽秋","皮制":"皮製","皮松":"皮鬆","皱折":"皺摺","盆吊":"盆弔","盈余":"盈餘","盒里":"盒裡","盛赞":"盛讚","盗采":"盜採","盗钟":"盜鐘","监制":"監製","盘里":"盤裡","盘回":"盤迴","卢棱伽":"盧稜伽","荡气回肠":"盪氣迴腸","盲干":"盲幹","直冲":"直衝","相并":"相併","相克制":"相克制","相克服":"相克服","相克":"相剋","相干":"相干","相冲":"相衝","相斗":"相鬥","盼复":"盼覆","看法里":"看法裡","看准":"看準","看钟":"看鐘","真凶":"真兇","真个":"真箇","真丑":"真醜","眼干":"眼乾","眼帘":"眼帘","眼眶里":"眼眶裡","眼睛里":"眼睛裡","眼里":"眼裡","困乏":"睏乏","困倦":"睏倦","困觉":"睏覺","睡游病":"睡遊病","瞄准":"瞄準","瞎蒙":"瞎矇","了如指掌":"瞭如指掌","了然":"瞭然","了若指掌":"瞭若指掌","瞳蒙":"瞳矇","蒙事":"矇事","蒙昧无知":"矇昧無知","蒙混":"矇混","蒙瞍":"矇瞍","蒙眬":"矇矓","蒙聩":"矇聵","蒙头转":"矇頭轉","蒙骗":"矇騙","瞩托":"矚託","矜夸":"矜誇","短发生":"短發生","短发":"短髮","短须":"短鬚","矮几":"矮几","石几":"石几","石杠":"石杠","石梁":"石樑","石英钟":"石英鐘","石英钟表":"石英鐘錶","石钟":"石鐘","研制":"研製","砰当":"砰噹","破鉴":"破鑑","朱卷":"硃卷","朱批":"硃批","朱砂":"硃砂","朱笔":"硃筆","朱谕":"硃諭","硬干":"硬幹","确瘠":"确瘠","碑志":"碑誌","碗里":"碗裡","碧河里":"碧河里","碰钟":"碰鐘","确系":"確係","码码表":"碼碼表","码表示":"碼表示","码表":"碼錶","磁制":"磁製","磨蝎":"磨蝎","磨制":"磨製","磨炼":"磨鍊","磨面":"磨麵","磬钟":"磬鐘","硗确":"磽确","磽确":"磽确","砻谷":"礱穀","示范":"示範","社里":"社裡","祝赞":"祝讚","祝发":"祝髮","神奈川冲浪里":"神奈川沖浪裏","神荼郁垒":"神荼鬱壘","神游":"神遊","神雕像":"神雕像","神雕":"神鵰","祭吊":"祭弔","禁欲":"禁慾","禁欲主义":"禁欲主義","御侮":"禦侮","御寇":"禦寇","御寒":"禦寒","御敌":"禦敵","礼赞":"禮讚","禾谷":"禾穀","秃妃之发":"禿妃之髮","秃发":"禿髮","秀发动":"秀發動","秀发展":"秀發展","秀发布":"秀發布","秀发村":"秀發村","秀发现":"秀發現","秀发生":"秀發生","秀发表":"秀發表","秀发起":"秀發起","秀发":"秀髮","私下里":"私下裡","私欲":"私慾","私斗":"私鬥","秋游":"秋遊","种丹妮":"种丹妮","种师中":"种師中","种師中":"种師中","种师道":"种師道","种師道":"种師道","种放":"种放","科尼亚克期":"科尼亞克期","科尼亞克期":"科尼亞克期","科斗":"科斗","科范":"科範","秒表明":"秒表明","秒表示":"秒表示","秒钟":"秒鐘","秤杆":"秤桿","秦沈客运":"秦瀋客運","稀松":"稀鬆","程十发":"程十髮","棱台":"稜台","棱子":"稜子","棱层":"稜層","棱柱":"稜柱","棱登":"稜登","棱棱":"稜稜","棱等登":"稜等登","棱线":"稜線","棱缝":"稜縫","棱角":"稜角","棱锥":"稜錐","棱镜":"稜鏡","棱体":"稜體","种谷":"種穀","称帝后":"稱帝後","称赞":"稱讚","稻谷":"稻穀","稽征":"稽徵","谷保家商":"穀保家商","谷仓":"穀倉","谷圭":"穀圭","谷城县":"穀城縣","谷场":"穀場","谷子":"穀子","谷日":"穀日","谷旦":"穀旦","谷梁":"穀梁","谷壳":"穀殼","谷氨":"穀氨","谷物":"穀物","谷皮":"穀皮","谷神":"穀神","谷禄":"穀祿","谷米":"穀米","谷粒":"穀粒","谷精草":"穀精草","谷胱":"穀胱","谷舱":"穀艙","谷苗":"穀苗","谷茬":"穀茬","谷草":"穀草","谷贵饿农":"穀貴餓農","谷贱伤农":"穀賤傷農","谷雨":"穀雨","谷类":"穀類","谷食":"穀食","谷饶":"穀饒","穆棱":"穆稜","穆罕默德历":"穆罕默德曆","穆罕默德历史":"穆罕默德歷史","积淀":"積澱","积谷":"積穀","积谷防饥":"積穀防饑","积郁":"積鬱","稳健的台风":"穩健的台風","稳扎":"穩紮","空蒙":"空濛","空荡":"空蕩","空荡荡":"空蕩蕩","空里":"空裡","空钟":"空鐘","空余":"空餘","窒欲":"窒慾","窗明几亮":"窗明几亮","窗明几净":"窗明几淨","窗帘":"窗簾","窝里":"窩裡","窝里斗":"窩裡鬥","穷追不舍":"窮追不捨","穷发":"窮髮","窃钟掩耳":"竊鐘掩耳","立范":"立範","童仆":"童僕","竞斗":"競鬥","竹几":"竹几","竹林之游":"竹林之遊","竹签":"竹籤","竹席":"竹蓆","竹制":"竹製","竹溪县":"竹谿縣","笑里藏刀":"笑裡藏刀","笔杆":"筆桿","笔秃墨干":"筆禿墨乾","等级里":"等級裡","笋干":"筍乾","筑前":"筑前","筑北":"筑北","筑州":"筑州","筑后":"筑後","筑後":"筑後","筑波":"筑波","筑紫":"筑紫","筑肥":"筑肥","筑西":"筑西","筑邦":"筑邦","筑阳":"筑陽","筑陽":"筑陽","答复":"答覆","筵几":"筵几","个中原因":"箇中原因","个中奥":"箇中奧","个中好手":"箇中好手","个中强手":"箇中強手","个中滋味":"箇中滋味","个中玄机":"箇中玄機","个中理由":"箇中理由","个中翘楚":"箇中翹楚","个中道理":"箇中道理","个中高手":"箇中高手","个旧市":"箇舊市","算历":"算曆","算历史":"算歷史","算准":"算準","管制":"管制","管干":"管幹","箱里":"箱裡","节欲":"節慾","节目里":"節目裡","节余":"節餘","范亭":"範亭","范例":"範例","范围":"範圍","范字":"範字","范式":"範式","范性形变":"範性形變","范数":"範數","范文":"範文","范本":"範本","范畴":"範疇","范金":"範金","简并":"簡併","简朴":"簡樸","简短发":"簡短發","簸荡":"簸蕩","签幐":"籤幐","签押":"籤押","签条":"籤條","签诗":"籤詩","吁天":"籲天","吁求":"籲求","吁请":"籲請","米哈游":"米哈遊","米沈":"米瀋","米团":"米糰","米余":"米餘","米面":"米麵","粗制":"粗製","精制伏":"精制伏","精制住":"精制住","精制服":"精制服","精干":"精幹","精准":"精準","精致":"精緻","精制":"精製","精辟":"精闢","精松":"精鬆","糊里糊涂":"糊裡糊塗","糕干":"糕乾","粪秽蔑面":"糞穢衊面","团子":"糰子","系列里":"系列裡","系指的":"系指的","系统里":"系統裡","系里":"系裡","纪历":"紀曆","纪历史":"紀歷史","紅后假說":"紅后假說","红后假说":"紅后假說","红绳系足":"紅繩繫足","红钟":"紅鐘","红发":"紅髮","纡回":"紆迴","纡余":"紆餘","纡郁":"紆鬱","纳征":"納徵","纯朴":"純樸","纸扎":"紙紮","纸制":"紙製","素数里":"素數裡","素朴":"素樸","素发现":"素發現","素发生":"素發生","素发电":"素發電","素发":"素髮","索馬里":"索馬里","索马里":"索馬里","索面":"索麵","紫姜":"紫薑","扎上":"紮上","扎下":"紮下","扎囮":"紮囮","扎好":"紮好","扎实":"紮實","扎寨":"紮寨","扎带子":"紮帶子","扎成":"紮成","扎根":"紮根","扎营":"紮營","扎紧":"紮緊","扎脚":"紮腳","扎裹":"紮裹","扎诈":"紮詐","扎起":"紮起","扎铁":"紮鐵","细不容发":"細不容髮","细如发":"細如髮","细致":"細緻","细炼":"細鍊","细面":"細麵","组里":"組裡","结伴同游":"結伴同遊","结伙":"結夥","结发育":"結發育","结发表":"結發表","结扎":"結紮","结余":"結餘","结发":"結髮","绞干":"絞乾","络腮胡":"絡腮鬍","丝恩发怨":"絲恩髮怨","丝发现":"絲發現","丝发生":"絲發生","丝制":"絲製","丝发":"絲髮","绑扎":"綁紮","绥棱":"綏稜","捆扎":"綑紮","经文里":"經文裡","經有云":"經有云","经有云":"經有云","综合征":"綜合徵","绿发":"綠髮","维系统":"維系統","维系":"維繫","绾发":"綰髮","纲鉴":"綱鑑","網球台":"網球台","网球台":"網球台","网站里":"網站裡","网里":"網裡","网志":"網誌","网游":"網遊","绵亘":"綿亙","紧致":"緊緻","紧追不舍":"緊追不捨","绪余":"緒餘","线图里":"線圖裡","缉凶":"緝兇","编制法":"編制法","编采":"編採","编码表":"編碼表","编钟":"編鐘","编余":"編餘","缓征":"緩徵","缓冲":"緩衝","致密":"緻密","萦回":"縈迴","缜致":"縝緻","县里":"縣裡","县志":"縣誌","缝里":"縫裡","缝制":"縫製","缩栗":"縮慄","缩短发":"縮短發","纵欲":"縱慾","纤夫":"縴夫","纤手":"縴手","纤绳":"縴繩","总数只":"總數只","总数里":"總數裡","总裁制":"總裁制","總裁制":"總裁制","繁复":"繁複","繁钟":"繁鐘","绷扒吊拷":"繃扒弔拷","绘制":"繪製","系上。":"繫上。","系上了":"繫上了","系上安全":"繫上安全","系上红":"繫上紅","系上丝":"繫上絲","系上绳":"繫上繩","系上头":"繫上頭","系上黑":"繫上黑","系上，":"繫上，","系到":"繫到","系囚":"繫囚","系心":"繫心","系念":"繫念","系怀":"繫懷","系恋":"繫戀","系于":"繫於","系于一发":"繫於一髮","系着":"繫着","繫着":"繫着","系结":"繫結","系紧":"繫緊","系绳":"繫繩","系累":"繫纍","系膜":"繫膜","系舟":"繫舟","系船":"繫船","系辞":"繫辭","系鞋带":"繫鞋帶","系风捕影":"繫風捕影","累囚":"纍囚","累堆":"纍堆","累瓦结绳":"纍瓦結繩","累绁":"纍紲","累臣":"纍臣","缠斗":"纏鬥","坛子":"罈子","坛坛罐罐":"罈罈罐罐","坛𬴃":"罈騞","置言成范":"置言成範","置鲇":"置鮎","罗马历":"羅馬曆","罗马历代":"羅馬歷代","罗马历史":"羅馬歷史","羁系":"羈繫","美容美发":"美容美髮","美丑":"美醜","美发学":"美髮學","美发师":"美髮師","美发店":"美髮店","美发业":"美髮業","美发沙龙":"美髮沙龍","美发馆":"美髮館","群丑":"群醜","羡余":"羨餘","义仆":"義僕","義联":"義联","翁子里":"翁子里","翕辟":"翕闢","翱游":"翱遊","翻涌":"翻湧","翻松":"翻鬆","老么":"老么","老干":"老乾","老仆":"老僕","老干部":"老幹部","老懞":"老懞","老爷钟":"老爺鐘","老白干":"老白乾","老坛":"老罈","老姜":"老薑","老板":"老闆","老面皮":"老面皮","考征":"考徵","考试制度":"考試制度","耍斗":"耍鬥","耕获":"耕穫","耳余":"耳餘","耶律术烈":"耶律朮烈","聊斋志异":"聊齋志異","圣于贝尔":"聖于貝爾","圣人历":"聖人曆","圣后":"聖后","聖后":"聖后","圣马尔谷日":"聖馬爾谷日","聖馬爾谷日":"聖馬爾谷日","聘雇":"聘僱","聚药雄蕊":"聚葯雄蕊","闻风后":"聞風後","联系":"聯繫","声母后":"聲母後","肉干":"肉乾","肉欲":"肉慾","肉丝面":"肉絲麵","肉羹面":"肉羹麵","肉松":"肉鬆","肉面":"肉麵","肚里":"肚裡","肝脏":"肝臟","肝郁":"肝鬱","股栗":"股慄","肥筑方言":"肥筑方言","肺脏":"肺臟","胃脏":"胃臟","胃里":"胃裡","背地里":"背地裡","胎发展":"胎發展","胎发生":"胎發生","胎发育":"胎發育","胎发":"胎髮","胜肽":"胜肽","胜鍵":"胜鍵","胜键":"胜鍵","胡云":"胡云","胡子婴":"胡子嬰","胡子彤":"胡子彤","胡子昂":"胡子昂","胡杰":"胡杰","胡朴安":"胡樸安","胡里胡涂":"胡裡胡塗","胰脏":"胰臟","能干休":"能干休","能干戈":"能干戈","能干扰":"能干擾","能干政":"能干政","能干涉":"能干涉","能干预":"能干預","能干":"能幹","能自制":"能自制","脉冲":"脈衝","脱谷机":"脫穀機","脱发":"脫髮","脺脏":"脺臟","脾脏":"脾臟","腊味":"腊味","腊毒":"腊毒","腊笔":"腊筆","腌臜":"腌臢","腌臢":"腌臢","肾脏":"腎臟","腐干":"腐乾","腐余":"腐餘","腑脏":"腑臟","腕表":"腕錶","脑干":"腦幹","腰里":"腰裡","脚注":"腳註","肠脏":"腸臟","胶卷":"膠捲","胶制":"膠製","膨松":"膨鬆","膵脏":"膵臟","臊子面":"臊子麵","脏器":"臟器","脏胸":"臟胸","脏腑":"臟腑","臣仆":"臣僕","卧游":"臥遊","臧谷亡羊":"臧穀亡羊","临潼斗宝":"臨潼鬥寶","自干五":"自乾五","自制一下":"自制一下","自制下来":"自制下來","自制不":"自制不","自制之力":"自制之力","自制之能":"自制之能","自制他":"自制他","自制伏":"自制伏","自制你":"自制你","自制力":"自制力","自制地":"自制地","自制她":"自制她","自制情":"自制情","自制我":"自制我","自制服":"自制服","自制的能":"自制的能","自制能力":"自制能力","自然数里":"自然數裡","自由钟":"自由鐘","自制":"自製","自觉自愿":"自覺自愿","自夸":"自誇","臭气冲天":"臭氣衝天","至多":"至多","至多只":"至多只","台佟":"臺佟","台静农":"臺靜農","舂谷":"舂穀","举手表":"舉手表","舉手表":"舉手表","舊庄":"舊庄","旧历":"舊曆","旧历史":"舊歷史","旧游":"舊遊","旧表":"舊錶","旧钟":"舊鐘","旧钟表":"舊鐘錶","舌干唇焦":"舌乾唇焦","舌叶音":"舌葉音","舍入口":"舍入口","舒卷":"舒捲","舞台风格":"舞台風格","舞后":"舞后","舞台灯":"舞臺燈","航海历":"航海曆","航海历史":"航海歷史","船只得":"船只得","船只有":"船只有","船只能":"船只能","船钟":"船鐘","船只":"船隻","舰只":"艦隻","色欲":"色慾","色长发":"色長髮","艳后":"艷后","艷后":"艷后","艸木丰丰":"艸木丰丰","芒果干":"芒果乾","花不要采":"花不要採","花盆里":"花盆裡","花菴词选":"花菴詞選","花药":"花葯","花钟":"花鐘","花马吊嘴":"花馬弔嘴","花哄":"花鬨","苑里":"苑裡","若干":"若干","苦干":"苦幹","苦里":"苦裡","苦斗":"苦鬥","苧麻":"苧麻","英文里":"英文裡","茂都淀":"茂都澱","范文同":"范文同","范文正公":"范文正公","范文澜":"范文瀾","范文瀾":"范文瀾","范文照":"范文照","范文程":"范文程","范文芳":"范文芳","范文藤":"范文藤","范文虎":"范文虎","范登堡":"范登堡","茅于軾":"茅于軾","茅于轼":"茅于軾","茶几":"茶几","茶余":"茶餘","茶面":"茶麵","草丛里":"草叢裡","草荐":"草荐","草席":"草蓆","荐居":"荐居","荐臻":"荐臻","荐饑":"荐饑","荐饥":"荐饑","庄里":"莊裡","茎干":"莖幹","莜面":"莜麵","莪术":"莪朮","莽荡":"莽蕩","菜干":"菜乾","菜坛":"菜罈","菜肴":"菜餚","菠棱菜":"菠稜菜","菠萝干":"菠蘿乾","华严钟":"華嚴鐘","万一只":"萬一只","萬一只":"萬一只","万个":"萬個","万周后":"萬周後","万天后":"萬天後","万年历表":"萬年曆錶","万历":"萬曆","万历史":"萬歷史","万签插架":"萬籤插架","万扎":"萬紮","万象":"萬象","万只":"萬隻","万余":"萬餘","落腮胡":"落腮鬍","落发":"落髮","叶叶琴":"葉叶琴","葉叶琴":"葉叶琴","叶叶琹":"葉叶琹","葉叶琹":"葉叶琹","叶阳后":"葉陽后","葉陽后":"葉陽后","葡萄干":"葡萄乾","董家里":"董家里","董氏封发":"董氏封髮","葫芦里卖甚么药":"葫蘆裡賣甚麼藥","蒙雾露":"蒙霧露","蒜发":"蒜髮","蒲席":"蒲蓆","蒸干":"蒸乾","蒸制":"蒸製","苍术":"蒼朮","苍发":"蒼髮","苍郁":"蒼鬱","蓄发":"蓄髮","蓄胡":"蓄鬍","蓄须":"蓄鬚","席子":"蓆子","蓊郁":"蓊鬱","蓬发":"蓬髮","蓬松":"蓬鬆","蓬松松":"蓬鬆鬆","参绥":"蔘綏","葱郁":"蔥鬱","荞麦面":"蕎麥麵","芸薹":"蕓薹","荡来荡去":"蕩來蕩去","荡女":"蕩女","荡妇":"蕩婦","荡寇":"蕩寇","荡平":"蕩平","荡气":"蕩氣","荡涤":"蕩滌","荡漾":"蕩漾","荡然":"蕩然","荡产":"蕩產","荡舟":"蕩舟","荡船":"蕩船","荡荡":"蕩蕩","萧参":"蕭蔘","薄幸":"薄倖","薄干":"薄幹","姜啤":"薑啤","姜是老的辣":"薑是老的辣","姜末":"薑末","姜桂":"薑桂","姜母":"薑母","姜汁":"薑汁","姜汤":"薑湯","姜片":"薑片","姜糖":"薑糖","姜丝":"薑絲","姜老辣":"薑老辣","姜茶":"薑茶","姜蓉":"薑蓉","姜还是老的辣":"薑還是老的辣","姜酮":"薑酮","姜饼":"薑餅","姜黄":"薑黃","薙发":"薙髮","薝卜":"薝蔔","熏心":"薰心","熏染":"薰染","熏沐":"薰沐","熏习":"薰習","熏陶":"薰陶","熏风":"薰風","熏香":"薰香","苧悴":"薴悴","苧烯":"薴烯","薴烯":"薴烯","借以":"藉以","借助":"藉助","借口":"藉口","借寇兵":"藉寇兵","借手":"藉手","借故":"藉故","借机":"藉機","借此":"藉此","借由":"藉由","借箸代筹":"藉箸代籌","借资":"藉資","蓝淀":"藍澱","藏历":"藏曆","藏历史":"藏歷史","藏蒙歌儿":"藏矇歌兒","藤席":"藤蓆","藤制":"藤製","药签":"藥籤","药面儿":"藥麵兒","苏昆":"蘇崑","𬞟":"蘋","苹婆":"蘋婆","苹果":"蘋果","苹果干":"蘋果乾","兰溪市":"蘭谿市","萝卜":"蘿蔔","萝卜干":"蘿蔔乾","虎须":"虎鬚","虎斗":"虎鬥","虚夸":"虛誇","号志":"號誌","虫部":"虫部","蚊动牛斗":"蚊動牛鬥","蛇发女妖":"蛇髮女妖","蛋白发":"蛋白發","蛋里":"蛋裡","蜂后":"蜂后","蜂涌":"蜂湧","蜂准":"蜂準","蜜里调油":"蜜裡調油","蜡月":"蜡月","蜡祭":"蜡祭","蝎虎":"蝎虎","蝎蝎螫螫":"蝎蝎螫螫","蝎谮":"蝎譖","虾面":"蝦麵","虮虱相吊":"蟣蝨相弔","蛏干":"蟶乾","蚁后":"蟻后","蟻后":"蟻后","蚃干":"蠁幹","蛮干":"蠻幹","血余":"血餘","行事历":"行事曆","行事历史":"行事歷史","行凶":"行兇","行家里手":"行家裡手","街庄":"街庄","卫后庄公":"衛後莊公","卫星钟":"衛星鐘","冲上":"衝上","冲下":"衝下","冲来":"衝來","冲倒":"衝倒","冲冠":"衝冠","冲出":"衝出","冲到":"衝到","冲刺":"衝刺","冲克":"衝剋","冲力":"衝力","冲劲":"衝勁","冲动":"衝動","冲去":"衝去","冲口":"衝口","冲呀":"衝呀","冲啊":"衝啊","冲垮":"衝垮","冲堂":"衝堂","冲坚陷阵":"衝堅陷陣","冲压":"衝壓","冲天炮":"衝天炮","冲州撞府":"衝州撞府","冲心":"衝心","冲掉":"衝掉","冲撞":"衝撞","冲击":"衝擊","冲散":"衝散","冲杀":"衝殺","冲决":"衝決","冲波":"衝波","冲浪":"衝浪","冲激":"衝激","冲然":"衝然","冲盹":"衝盹","冲着":"衝着","衝着":"衝着","冲破":"衝破","冲程":"衝程","冲突":"衝突","冲线":"衝線","冲要":"衝要","冲起":"衝起","冲车":"衝車","冲进":"衝進","冲过":"衝過","冲量":"衝量","冲锋":"衝鋒","冲锋枪":"衝鋒鎗","冲陷":"衝陷","冲头阵":"衝頭陣","冲风":"衝風","衡鉴":"衡鑑","衣摆":"衣襬","表征":"表徵","表面包":"表面包","袋杆":"袋桿","袋里":"袋裡","袋表":"袋錶","袖里":"袖裡","被废后":"被廢後","被卷回":"被捲回","被系上":"被繫上","被里":"被裡","被夸":"被誇","被发佯狂":"被髮佯狂","被发入山":"被髮入山","被发左衽":"被髮左衽","被发缨冠":"被髮纓冠","被发阳狂":"被髮陽狂","夹衣":"袷衣","夹裙":"袷裙","裁并":"裁併","裁制":"裁製","里水镇":"裏水鎮","里海":"裏海","里白":"裏白","里运河":"裏運河","裙摆":"裙襬","补注":"補註","装折":"裝摺","里勾外连":"裡勾外連","里屋":"裡屋","里层":"裡層","里带":"裡帶","里弦":"裡弦","里应外合":"裡應外合","里衣":"裡衣","里通外国":"裡通外國","里通外敌":"裡通外敵","里边":"裡邊","里间":"裡間","里面":"裡面","里面包":"裡面包","里头":"裡頭","制件":"製件","制作":"製作","制做":"製做","制备":"製備","制冰":"製冰","制冷":"製冷","制剂":"製劑","制取":"製取","制品":"製品","制售":"製售","制图":"製圖","制得":"製得","制成":"製成","制毒":"製毒","制法":"製法","制汉字":"製漢字","制浆":"製漿","制片":"製片","制版":"製版","制发":"製發","制程":"製程","制糖":"製糖","制纸":"製紙","制丝":"製絲","制药":"製藥","制衣":"製衣","制表键":"製表鍵","制贩":"製販","制造":"製造","制酒":"製酒","制铁":"製鐵","制革":"製革","制鞋":"製鞋","制盐":"製鹽","复元音":"複元音","复函数":"複函數","复分数":"複分數","复分析":"複分析","复分解":"複分解","复列":"複列","复利":"複利","复印":"複印","复句":"複句","复合":"複合","复壁":"複壁","复姓":"複姓","复字键":"複字鍵","复写":"複寫","复对数":"複對數","复平面":"複平面","复式":"複式","复数":"複數","复方":"複方","复本":"複本","复查":"複查","复次":"複次","复比":"複比","复决":"複決","复流":"複流","复测":"複測","复目":"複目","复眼":"複眼","复种":"複種","复穗":"複穗","复线":"複線","复习":"複習","复色":"複色","复叶":"複葉","复制":"複製","复诊":"複診","复评":"複評","复词":"複詞","复试":"複試","复课":"複課","复议":"複議","复读机":"複讀機","复变函数":"複變函數","复赛":"複賽","复辅音":"複輔音","复述":"複述","复选":"複選","复钱":"複錢","复阅":"複閱","复杂":"複雜","复音":"複音","复韵":"複韻","褒赞":"褒讚","衬里":"襯裡","西井里":"西井里","西周钟":"西周鐘","西昆":"西崑","西岳":"西嶽","西历":"西曆","西历代":"西歷代","西历任":"西歷任","西历史":"西歷史","西历次":"西歷次","西湖里":"西湖里","西西里":"西西里","西谷米":"西谷米","西游":"西遊","要自制":"要自制","要冲":"要衝","复信":"覆信","复审":"覆審","复核":"覆核","见棱见角":"見稜見角","见素抱朴":"見素抱樸","见钟不打":"見鐘不打","规划":"規劃","规范":"規範","观采":"觀採","角抵":"角牴","角落发":"角落發","角落里":"角落裡","觚棱":"觚稜","解雇":"解僱","解封后":"解封後","解铃仍须系铃人":"解鈴仍須繫鈴人","解铃还须系铃人":"解鈴還須繫鈴人","解发佯狂":"解髮佯狂","触须":"觸鬚","言云":"言云","言大而夸":"言大而夸","言里":"言裡","订制":"訂製","计划":"計劃","计时表":"計時錶","托了":"託了","托事":"託事","托交":"託交","托付":"託付","托克逊":"託克遜","托古讽今":"託古諷今","托名":"託名","托命":"託命","托咎":"託咎","托梦":"託夢","托孤":"託孤","托庇":"託庇","托故":"託故","托疾":"託疾","托病":"託病","托管":"託管","托言":"託言","托词":"託詞","托买":"託買","托卖":"託賣","托身":"託身","托辞":"託辭","托运":"託運","托过":"託過","托里县":"託里縣","托附":"託附","許愿起經":"許愿起經","许愿起经":"許愿起經","許聖杰":"許聖杰","注上":"註上","注册":"註冊","注失":"註失","注定":"註定","注明":"註明","注标":"註標","注生娘娘":"註生娘娘","注疏":"註疏","注脚":"註腳","注里":"註裡","注解":"註解","注记":"註記","注译":"註譯","注销":"註銷","注：":"註：","证谏":"証諫","评断发":"評斷發","评注":"評註","评鉴":"評鑑","词干":"詞幹","词汇":"詞彙","词里":"詞裡","词余":"詞餘","试制":"試製","詩云":"詩云","诗云":"詩云","诗赞":"詩讚","诗钟":"詩鐘","诗余":"詩餘","话里有话":"話裡有話","该钟":"該鐘","详征博引":"詳徵博引","详注":"詳註","诔赞":"誄讚","夸下海口":"誇下海口","夸了":"誇了","夸人":"誇人","夸他":"誇他","夸你":"誇你","夸来夸去":"誇來誇去","夸别":"誇別","夸功":"誇功","夸胜道强":"誇勝道強","夸口":"誇口","夸嘴":"誇嘴","夸多斗靡":"誇多鬥靡","夸大":"誇大","夸她":"誇她","夸姣":"誇姣","夸官":"誇官","夸容":"誇容","夸张":"誇張","夸强说会":"誇強說會","夸得":"誇得","夸成":"誇成","夸我":"誇我","夸才":"誇才","夸毗":"誇毗","夸海口":"誇海口","夸奖":"誇獎","夸示":"誇示","夸称":"誇稱","夸耀":"誇耀","夸能":"誇能","夸能斗智":"誇能鬥智","夸诩":"誇詡","夸夸":"誇誇","夸夸其谈":"誇誇其談","夸诞":"誇誕","夸说":"誇說","夸赞":"誇讚","夸起":"誇起","夸辩":"誇辯","夸过":"誇過","夸饰":"誇飾","夸丽":"誇麗","志哀":"誌哀","志喜":"誌喜","志庆":"誌慶","志异":"誌異","认准":"認準","诱奸":"誘姦","语云":"語云","语汇":"語彙","語有云":"語有云","语有云":"語有云","语法里":"語法裡","语里":"語裡","诚征":"誠徵","诚朴":"誠樸","诬蔑":"誣衊","说不准":"說不準","谁干的":"誰幹的","课征":"課徵","课余":"課餘","调准":"調準","调制":"調製","调钟表":"調鐘錶","谈征":"談徵","请君入瓮":"請君入甕","请托":"請託","论文里":"論文裡","咨询":"諮詢","咨议":"諮議","诸余":"諸餘","谋干":"謀幹","謝杰":"謝杰","谢杰":"謝杰","謝華后":"謝華后","谢华后":"謝華后","谬采虚声":"謬採虛聲","谬赞":"謬讚","謷丑":"謷醜","謹愿":"謹愿","谨愿":"謹愿","哗噪":"譁噪","哗嚣":"譁囂","哗然":"譁然","哗众":"譁眾","哗笑":"譁笑","哗变":"譁變","噪诈":"譟詐","警世钟":"警世鐘","警报钟":"警報鐘","警示钟":"警示鐘","警钟":"警鐘","译文里":"譯文裡","译制":"譯製","译注":"譯註","护发展":"護發展","护发":"護髮","变征":"變徵","变丑":"變醜","仇隙":"讎隙","赞一个":"讚一個","赞不绝口":"讚不絕口","赞佩":"讚佩","赞呗":"讚唄","赞叹":"讚嘆","赞岐":"讚岐","赞扬":"讚揚","赞乐":"讚樂","赞歌":"讚歌","赞美":"讚美","赞羡":"讚羨","赞许":"讚許","赞词":"讚詞","赞誉":"讚譽","赞赏":"讚賞","赞辞":"讚辭","赞颂":"讚頌","谷子敬":"谷子敬","豆干":"豆乾","豆腐干":"豆腐乾","丰度":"豐度","丰滨":"豐濱","丰滨乡":"豐濱鄉","丰台":"豐臺","豔后":"豔后","象征":"象徵","贪欲":"貪慾","貴价":"貴价","贵价":"貴价","貴子里":"貴子里","贵干":"貴幹","贵征":"貴徵","买凶":"買兇","买断发":"買斷發","費米面":"費米面","费米面":"費米面","贻范":"貽範","賈后":"賈后","贾后":"賈后","赈饥":"賑饑","赏赞":"賞讚","賢后":"賢后","贤后":"賢后","卖断发":"賣斷發","賦范":"賦范","赋范":"賦范","质数里":"質數裡","质朴":"質樸","賭后":"賭后","赌后":"賭后","赌台":"賭檯","赌斗":"賭鬥","购并":"購併","购买欲":"購買慾","赘余":"贅餘","赢余":"贏餘","赤术":"赤朮","赤绳系足":"赤繩繫足","走回路":"走回路","起哄":"起鬨","超市里":"超市裡","超级杯":"超級盃","超赞":"超讚","赶制":"趕製","赶面棍":"趕麵棍","赵威后":"趙威后","趙威后":"趙威后","赵惠后":"趙惠后","趙惠后":"趙惠后","赵治勋":"趙治勳","趱干":"趲幹","足协杯":"足協盃","足球台":"足球台","足总杯":"足總盃","跌扑":"跌扑","路图里":"路圖裡","路签":"路籤","路面":"路面","跳荡":"跳蕩","局蹐":"跼蹐","局躅":"跼躅","踡局":"踡跼","逾闲":"踰閑","蹒局":"蹣跼","蹭棱子":"蹭稜子","躁郁":"躁鬱","身体发肤":"身體髮膚","躯干":"軀幹","车库里":"車庫裡","车站里":"車站裡","车里":"車裡","车里雅宾斯克":"車里雅賓斯克","轨范":"軌範","轩辟":"軒闢","挽曲":"輓曲","挽歌":"輓歌","挽联":"輓聯","挽词":"輓詞","挽诗":"輓詩","挽车":"輓車","挽输":"輓輸","挽辞":"輓辭","轻松":"輕鬆","轻松松":"輕鬆鬆","轮奸":"輪姦","轮回":"輪迴","轉向":"轉向","转向":"轉向","转托":"轉託","转斗千里":"轉鬥千里","辛丑":"辛丑","辟谷":"辟穀","辣面":"辣麵","办公台":"辦公檯","辞汇":"辭彙","辫发":"辮髮","辩斗":"辯鬥","辰溪县":"辰谿縣","农历":"農曆","农历史":"農歷史","农民历":"農民曆","农民历史":"農民歷史","迂回":"迂迴","近日无仇":"近日無讎","返朴":"返樸","迥然回异":"迥然迴異","回光返照":"迴光返照","回圈":"迴圈","回廊":"迴廊","回形夹":"迴形夾","回文序列":"迴文序列","回文数":"迴文數","回文构词":"迴文構詞","回文结构":"迴文結構","回文联":"迴文聯","回文诗":"迴文詩","回文锦":"迴文錦","回旋":"迴旋","回环":"迴環","回纹针":"迴紋針","回绕":"迴繞","回翔":"迴翔","回肠":"迴腸","回肠荡气":"迴腸盪氣","回荡":"迴蕩","回诵":"迴誦","回路":"迴路","回转":"迴轉","回递性":"迴遞性","回避":"迴避","回銮":"迴鑾","回响":"迴響","回风":"迴風","迷蒙":"迷濛","追凶":"追兇","退伙":"退夥","送钟":"送鐘","逆钟":"逆鐘","逆钟向":"逆鐘向","逆风后":"逆風後","逋发":"逋髮","逍遥游":"逍遙遊","透辟":"透闢","这出世":"這出世","这出乎":"這出乎","这出人":"這出人","这出版":"這出版","这出现":"這出現","这出生":"這出生","这出色":"這出色","这出身":"這出身","这出道":"這出道","这只不":"這只不","这只不过":"這只不過","这只允":"這只允","这只包括":"這只包括","这只可":"這只可","这只在":"這只在","这只容":"這只容","这只应":"這只應","这只采":"這只採","这只是":"這只是","这只会":"這只會","这只比":"這只比","这只用":"這只用","这只能":"這只能","这只要":"這只要","这只限":"這只限","这只需":"這只需","这只须":"這只須","这伙人":"這夥人","这里":"這裡","这钟":"這鐘","这只":"這隻","这么干":"這麼幹","这出":"這齣","通奸":"通姦","通心面":"通心麵","通历":"通曆","通历史":"通歷史","通鉴":"通鑑","逞凶斗狠":"逞兇鬥狠","造钟":"造鐘","连三并四":"連三併四","连亘":"連亙","连采":"連採","连发式":"連發式","连系":"連繫","周游":"週遊","进两出":"進兩出","进制":"進制","進制":"進制","逼并":"逼併","遇风后":"遇風後","游了":"遊了","游人":"遊人","游仙":"遊仙","游伴":"遊伴","游侠":"遊俠","游冶":"遊冶","游刃":"遊刃","游动":"遊動","游园":"遊園","游子":"遊子","游学":"遊學","游客":"遊客","游宦":"遊宦","游山玩水":"遊山玩水","游廊":"遊廊","游必有方":"遊必有方","游憩":"遊憩","游戏":"遊戲","游戏里":"遊戲裡","游手好闲":"遊手好閒","游方":"遊方","游族网络":"遊族網絡","游星":"遊星","游春":"遊春","游乐":"遊樂","游历":"遊歷","游民":"遊民","游河":"遊河","游猎":"遊獵","游玩":"遊玩","游目骋怀":"遊目騁懷","游研社":"遊研社","游程":"遊程","游丝":"遊絲","游美学务":"遊美學務","游兴":"遊興","游船":"遊船","游艇":"遊艇","游荡":"遊蕩","游艺":"遊藝","游行":"遊行","游街":"遊街","游览":"遊覽","游记":"遊記","游说":"遊說","游资":"遊資","游走":"遊走","游踪":"遊蹤","游轮":"遊輪","游逛":"遊逛","游错":"遊錯","游骑兵":"遊騎兵","游魂":"遊魂","过水面":"過水麵","遏制":"遏制","道范":"道範","道里区":"道裏區","递回":"遞迴","远游":"遠遊","遨游":"遨遊","遮丑":"遮醜","选手表明":"選手表明","选手表决":"選手表決","选手表现":"選手表現","选手表示":"選手表示","选手表达":"選手表達","遗传钟":"遺傳鐘","遗范":"遺範","遗迹":"遺蹟","辽沈":"遼瀋","邀天之幸":"邀天之倖","还采":"還採","还冲":"還衝","邋里邋遢":"邋裡邋遢","邢台":"邢臺","那只不过":"那只不過","那只包括":"那只包括","那只可":"那只可","那只在":"那只在","那只好":"那只好","那只怕":"那只怕","那只应":"那只應","那只是":"那只是","那只会":"那只會","那只有":"那只有","那只比":"那只比","那只用":"那只用","那只能":"那只能","那只要":"那只要","那只限":"那只限","那只需":"那只需","那只须":"那只須","那卷":"那捲","那美克星":"那美克星","那里":"那裡","那只":"那隻","邱于庭":"邱于庭","郁朴":"郁樸","郁郁菲菲":"郁郁菲菲","郁郁青青":"郁郁青青","郊游":"郊遊","郘钟":"郘鐘","部子里":"部子里","部落发":"部落發","郭后":"郭后","都市里":"都市裡","乡愿":"鄉愿","鄉愿":"鄉愿","郑凯云":"鄭凱云","鄭凱云":"鄭凱云","郑苹如":"鄭蘋如","配制饲料":"配制飼料","配图里":"配圖裡","配制":"配製","酒帘":"酒帘","酒气冲天":"酒氣衝天","酒坛":"酒罈","酒肴":"酒餚","酒曲":"酒麴","酒麹":"酒麴","酥松":"酥鬆","酸姜":"酸薑","腌制":"醃製","醇朴":"醇樸","醋坛":"醋罈","丑丫头":"醜丫頭","丑事":"醜事","丑人":"醜人","丑侪":"醜儕","丑八怪":"醜八怪","丑剌剌":"醜剌剌","丑剧":"醜劇","丑化":"醜化","丑史":"醜史","丑名":"醜名","丑吒":"醜吒","丑地":"醜地","丑夷":"醜夷","丑女":"醜女","丑女效颦":"醜女效顰","丑奴儿":"醜奴兒","丑妇":"醜婦","丑媳":"醜媳","丑媳妇":"醜媳婦","丑小鸭":"醜小鴨","丑巴怪":"醜巴怪","丑徒":"醜徒","丑恶":"醜惡","丑态":"醜態","丑毙了":"醜斃了","丑末":"醜末","丑样":"醜樣","丑死":"醜死","丑比":"醜比","丑沮":"醜沮","丑男":"醜男","丑闻":"醜聞","丑声":"醜聲","丑声远播":"醜聲遠播","丑脸":"醜臉","丑虏":"醜虜","丑行":"醜行","丑言":"醜言","丑诋":"醜詆","丑话":"醜話","丑语":"醜語","丑贼生":"醜賊生","丑辞":"醜辭","丑辱":"醜辱","丑逆":"醜逆","丑丑":"醜醜","丑陋":"醜陋","丑杂":"醜雜","丑头怪脸":"醜頭怪臉","丑类":"醜類","酿制":"釀製","衅钟":"釁鐘","采石之役":"采石之役","采石之战":"采石之戰","采石之戰":"采石之戰","采石矶":"采石磯","采石磯":"采石磯","里海大学":"里海大學","里海大學":"里海大學","里海崖":"里海崖","里海茨":"里海茨","里铺":"里舖","重回":"重回","重罗面":"重羅麵","重制":"重製","重复":"重複","重托":"重託","重游":"重遊","野姜":"野薑","野游":"野遊","量不准":"量不準","厘改":"釐改","厘整":"釐整","厘正":"釐正","厘毫":"釐毫","厘清":"釐清","厘订":"釐訂","厘革":"釐革","金仆姑":"金僕姑","金城里":"金城里","金发放":"金發放","金范":"金範","金圣叹":"金聖歎","金表情":"金表情","金表态":"金表態","金表扬":"金表揚","金表明":"金表明","金表演":"金表演","金表现":"金表現","金表示":"金表示","金表达":"金表達","金表露":"金表露","金表面":"金表面","金装玉里":"金裝玉裡","金溪县":"金谿縣","金链":"金鍊","金钟":"金鐘","金发":"金髮","钩心斗角":"鈎心鬥角","银朱":"銀硃","银发":"銀髮","铜范":"銅範","铜制":"銅製","铜钟":"銅鐘","铯钟":"銫鐘","锈病":"銹病","铝制":"鋁製","锌制":"鋅製","钢之炼金术师":"鋼之鍊金術師","钢制":"鋼製","录制":"錄製","锤炼":"錘鍊","钱谷":"錢穀","钱范":"錢範","锦卤":"錦滷","锦绣花园":"錦綉花園","表停":"錶停","表冠":"錶冠","表带":"錶帶","表板":"錶板","表王":"錶王","表盘":"錶盤","表蒙子":"錶蒙子","表转":"錶轉","表速":"錶速","表针":"錶針","炼冶":"鍊冶","炼句":"鍊句","炼字":"鍊字","炼师":"鍊師","炼度":"鍊度","炼形":"鍊形","炼气":"鍊氣","炼汞":"鍊汞","炼石":"鍊石","链表":"鍊表","炼贫":"鍊貧","炼金术":"鍊金術","锲而不舍":"鍥而不捨","镰仓":"鎌倉","镇里":"鎮裡","镜图里":"鏡圖裡","钟上":"鐘上","钟下":"鐘下","钟不":"鐘不","钟不扣不鸣":"鐘不扣不鳴","钟不撞不鸣":"鐘不撞不鳴","钟不敲不响":"鐘不敲不響","钟不空则哑":"鐘不空則啞","钟乳洞":"鐘乳洞","钟乳石":"鐘乳石","钟停":"鐘停","钟匠":"鐘匠","钟口":"鐘口","钟在寺里":"鐘在寺裡","钟塔":"鐘塔","钟壁":"鐘壁","钟太":"鐘太","钟好":"鐘好","钟山":"鐘山","钟左右":"鐘左右","钟差":"鐘差","钟座":"鐘座","钟形":"鐘形","钟形虫":"鐘形蟲","钟律":"鐘律","钟摆":"鐘擺","钟敲":"鐘敲","钟有":"鐘有","钟楼":"鐘樓","钟模":"鐘模","钟没":"鐘沒","钟漏":"鐘漏","钟王":"鐘王","钟琴":"鐘琴","钟发音":"鐘發音","钟的":"鐘的","钟盘":"鐘盤","钟相":"鐘相","钟磬":"鐘磬","钟纽":"鐘紐","钟罩":"鐘罩","钟声":"鐘聲","钟腰":"鐘腰","钟花":"鐘花","钟螺":"鐘螺","钟行":"鐘行","钟表面":"鐘表面","钟被":"鐘被","钟调":"鐘調","钟身":"鐘身","钟速":"鐘速","钟表":"鐘錶","钟表停":"鐘錶停","钟表盘":"鐘錶盤","钟表速":"鐘錶速","钟关":"鐘關","钟陈列":"鐘陳列","钟面":"鐘面","钟响":"鐘響","钟顶":"鐘頂","钟头":"鐘頭","钟体":"鐘體","钟鸣":"鐘鳴","钟鹊":"鐘鵲","钟点":"鐘點","钟鼎":"鐘鼎","钟鼓":"鐘鼓","铁制":"鐵製","铁钟":"鐵鐘","铸钟":"鑄鐘","鉴别":"鑑別","鉴古":"鑑古","鉴定":"鑑定","鉴察":"鑑察","鉴往知来":"鑑往知來","鉴戒":"鑑戒","鉴于":"鑑於","鉴湖":"鑑湖","鉴藏":"鑑藏","鉴谅":"鑑諒","鉴证":"鑑證","鉴识":"鑑識","鉴赏":"鑑賞","長几":"長几","长几":"長几","长得丑":"長得醜","长历":"長曆","长历史":"長歷史","长发公主":"長髮公主","长发妹":"長髮妹","长发姑娘":"長髮姑娘","长须":"長鬚","门帘":"門帘","门吊儿":"門弔兒","门里":"門裡","闫怀礼":"閆懷禮","开封后":"開封後","開山辟谷":"開山辟谷","开山辟谷":"開山闢谷","开吊":"開弔","开征":"開徵","开采":"開採","开发":"開發","开辟":"開闢","开哄":"開鬨","闲邪":"閑邪","闲情逸致":"閒情逸緻","闲荡":"閒蕩","闲游":"閒遊","间不容发":"間不容髮","间里":"間裡","闵采尔":"閔採爾","闺范":"閨範","阃范":"閫範","闯荡":"闖蕩","闯炼":"闖鍊","关系":"關係","关注：":"關注：","關注：":"關注：","关系列":"關系列","关系所":"關系所","关系科":"關系科","关系统":"關系統","辟佛":"闢佛","辟作":"闢作","辟划":"闢劃","辟土":"闢土","辟地":"闢地","辟室":"闢室","辟建":"闢建","辟为":"闢為","辟田":"闢田","辟筑":"闢築","辟谣":"闢謠","辟辟":"闢辟","辟邪以律":"闢邪以律","防制法":"防制法","防水表":"防水錶","防御":"防禦","防范":"防範","阿里":"阿里","附注":"附註","限制":"限制","院里":"院裡","陪吊":"陪弔","阴干":"陰乾","阴历":"陰曆","阴历史":"陰歷史","阴沟里翻船":"陰溝裡翻船","阴郁":"陰鬱","陳冲":"陳冲","陳士杰":"陳士杰","陈升":"陳昇","陈有后":"陳有后","陳有后":"陳有后","陈杰":"陳杰","陳杰":"陳杰","陈炼":"陳鍊","陶制":"陶製","阳春面":"陽春麵","阳历":"陽曆","阳历史":"陽歷史","阳谷":"陽穀","隆准许":"隆准許","隆准":"隆準","队里":"隊裡","隐占":"隱佔","隐几":"隱几","隱几":"隱几","只字":"隻字","只影":"隻影","只手遮天":"隻手遮天","只眼":"隻眼","只言片语":"隻言片語","只身":"隻身","雄斗斗":"雄斗斗","雅范":"雅範","集团":"集團","集数里":"集數裡","集里":"集裡","集游法":"集遊法","双折射":"雙折射","双折":"雙摺","双胜类":"雙胜類","雙胜類":"雙胜類","双雕":"雙鵰","杂合面儿":"雜合麵兒","杂志":"雜誌","杂面":"雜麵","鸡吵鹅斗":"雞吵鵝鬥","鸡奸":"雞姦","鸡争鹅斗":"雞爭鵝鬥","鸡丝":"雞絲","鸡丝面":"雞絲麵","鸡腿面":"雞腿麵","鸡只":"雞隻","难舍":"難捨","雨蒙蒙":"雨濛濛","雪窗萤几":"雪窗螢几","雪窗螢几":"雪窗螢几","雪里":"雪裡","雪里红":"雪裡紅","雪里蕻":"雪裡蕻","云南个旧":"雲南箇舊","云吞":"雲吞","云吞面":"雲吞麵","云笈七签":"雲笈七籤","云里雾里":"雲裡霧裡","云游":"雲遊","云须":"雲鬚","零个":"零個","零周后":"零周後","零天后":"零天後","零只":"零隻","零余":"零餘","电子表格":"電子表格","电子制表":"電子製表","电子钟":"電子鐘","电子钟表":"電子鐘錶","电影后":"電影後","电影里":"電影裡","电梯里":"電梯裡","电波钟":"電波鐘","电码表":"電碼表","电冲":"電衝","电视台风":"電視台風","电视里":"電視裡","电表":"電錶","电钟":"電鐘","震栗":"震慄","霉气冲天":"霉氣衝天","沾化":"霑化","沾益":"霑益","雾里":"霧裡","露丑":"露醜","霁范":"霽範","灵昆":"靈崑","青山一发":"青山一髮","青春斗":"青春鬥","青霉":"青黴","非常准":"非常準","面包住":"面包住","面包含":"面包含","面包围":"面包圍","面包圍":"面包圍","面包容":"面包容","面包庇":"面包庇","面包厢":"面包廂","面包抄":"面包抄","面包括":"面包括","面包揽":"面包攬","面包涵":"面包涵","面包管":"面包管","面包扎":"面包紮","面包罗":"面包羅","面包着":"面包著","面包藏":"面包藏","面包装":"面包裝","面包裝":"面包裝","面包裹":"面包裹","面包起":"面包起","面包办":"面包辦","面店铺":"面店鋪","面条目":"面條目","面條目":"面條目","面粉碎":"面粉碎","面粉红":"面粉紅","面食饭":"面食飯","鞋里":"鞋裡","鞣制":"鞣製","秋千":"鞦韆","鞭辟入里":"鞭辟入裡","韦席":"韋蓆","韩国制":"韓國製","韩制":"韓製","音不准":"音不準","音准":"音準","音声如钟":"音聲如鐘","韶山冲":"韶山沖","响钟":"響鐘","頁面":"頁面","页面":"頁面","顶凶":"頂兇","頂多":"頂多","顶多":"頂多","项链":"項鍊","顺钟向":"順鐘向","顺风后":"順風後","须根据":"須根據","颂系":"頌繫","颂赞":"頌讚","预报不准":"預報不準","预制":"預製","领袖欲":"領袖慾","头乱发":"頭亂髮","頭前庄":"頭前庄","头发动":"頭發動","头发展":"頭發展","头发现":"頭發現","头发生":"頭發生","头里":"頭裡","头长发":"頭長髮","头发":"頭髮","颊须":"頰鬚","颈须":"頸鬚","额征":"額徵","额我略历":"額我略曆","额我略历史":"額我略歷史","颜范":"顏範","颛顼历":"顓頊曆","顛顛仆仆":"顛顛仆仆","颠颠仆仆":"顛顛仆仆","颤栗":"顫慄","显示表明":"顯示表明","显示表格":"顯示表格","显示表现":"顯示表現","显示表示":"顯示表示","显示表达":"顯示表達","显示表面":"顯示表面","显示表头":"顯示表頭","显示表":"顯示錶","显示钟":"顯示鐘","显示钟表":"顯示鐘錶","风干":"風乾","風后":"風后","风后":"風后","风土志":"風土誌","风后，":"風後，","风卷残云":"風捲殘雲","风物志":"風物誌","风范":"風範","风里":"風裡","风起云涌":"風起雲湧","风刮":"風颳","台风":"颱風","台风后":"颱風後","刮了":"颳了","刮倒":"颳倒","刮大风":"颳大風","刮得":"颳得","刮走":"颳走","刮起":"颳起","刮雪":"颳雪","刮风":"颳風","刮风后":"颳風後","飘荡":"飄蕩","飘游":"飄遊","飘飘荡荡":"飄飄蕩蕩","飘发":"飄髮","飞扎":"飛紮","飞刍挽粟":"飛芻輓粟","飞行钟":"飛行鐘","食欲":"食慾","食欲不振":"食欲不振","食面":"食麵","饭后钟":"飯後鐘","饭团":"飯糰","饼干":"餅乾","养脏":"養臟","餐台":"餐檯","馂余":"餕餘","余0":"餘0","余1":"餘1","余2":"餘2","余3":"餘3","余4":"餘4","余5":"餘5","余6":"餘6","余7":"餘7","余8":"餘8","余9":"餘9","余〇":"餘〇","余一":"餘一","余七":"餘七","余三":"餘三","余下":"餘下","余九":"餘九","余事":"餘事","余二":"餘二","余五":"餘五","余人":"餘人","余俗":"餘俗","余倍":"餘倍","余僇":"餘僇","余光":"餘光","余八":"餘八","余六":"餘六","余刃":"餘刃","余切":"餘切","余利":"餘利","余割":"餘割","余力":"餘力","余勇":"餘勇","余十":"餘十","余味":"餘味","余喘":"餘喘","余四":"餘四","余地":"餘地","余墨":"餘墨","余外":"餘外","余妙":"餘妙","余姚":"餘姚","余威":"餘威","余子式":"餘子式","余存":"餘存","余孽":"餘孽","余干":"餘干","余年":"餘年","余式":"餘式","余弦":"餘弦","余思":"餘思","余悸":"餘悸","余庆":"餘慶","余数":"餘數","余明":"餘明","余映":"餘映","余暇":"餘暇","余晖":"餘暉","余暨":"餘暨","余杭":"餘杭","余杯":"餘杯","余桃":"餘桃","余桶":"餘桶","余业":"餘業","余款":"餘款","余欢":"餘歡","余步":"餘步","余殃":"餘殃","余毒":"餘毒","余气":"餘氣","余江":"餘江","余波":"餘波","余温":"餘溫","余泽":"餘澤","余沥":"餘瀝","余烈":"餘烈","余热":"餘熱","余烬":"餘燼","余珍":"餘珍","余生":"餘生","余留":"餘留","余众":"餘眾","余窍":"餘竅","余粮":"餘糧","余绪":"餘緒","余缺":"餘缺","余罪":"餘罪","余羡":"餘羨","余声":"餘聲","余膏":"餘膏","余兴":"餘興","余蓄":"餘蓄","余荫":"餘蔭","余裕":"餘裕","余角":"餘角","余论":"餘論","余责":"餘責","余貾":"餘貾","余辉":"餘輝","余辜":"餘辜","余部":"餘部","余酲":"餘酲","余量":"餘量","余闰":"餘閏","余闲":"餘閒","余零":"餘零","余震":"餘震","余霞":"餘霞","余音":"餘音","余韵":"餘韻","余响":"餘響","余项":"餘項","余额":"餘額","余风":"餘風","余食":"餘食","余党":"餘黨","肴羞":"餚羞","肴馔":"餚饌","馄饨面":"餛飩麵","馆谷":"館穀","馆里":"館裡","饥寒":"饑寒","饥民":"饑民","饥渴":"饑渴","饥溺":"饑溺","饥荒":"饑荒","饥饱":"饑飽","饥馑":"饑饉","首当其冲":"首當其衝","首发":"首發","首只":"首隻","首出电影":"首齣電影","香干":"香乾","香山庄":"香山庄","马干":"馬乾","馬占山":"馬占山","马德钟":"馬德鐘","馬斯垂克期":"馬斯垂克期","马斯垂克期":"馬斯垂克期","馬格里布":"馬格里布","马格里布":"馬格里布","马回岭":"馬迴嶺","马云：":"馬雲：","驻扎":"駐紮","骀荡":"駘蕩","腾格里":"騰格里","騰格里":"騰格里","腾涌":"騰湧","腾冲":"騰衝","惊栗":"驚慄","惊赞":"驚讚","惊钟":"驚鐘","骨干":"骨幹","骨灰坛":"骨灰罈","骨坛":"骨罈","体征":"體徵","体范":"體範","体系":"體系","体里":"體裡","高几":"高几","高后":"高后","高干扰":"高干擾","高干预":"高干預","高干":"高幹","高度自制":"高度自制","高涌泉":"高涌泉","高清愿":"高清愿","髡发":"髡髮","髭胡":"髭鬍","髭须":"髭鬚","发上指冠":"髮上指冠","发上冲冠":"髮上沖冠","发乳":"髮乳","发光可鉴":"髮光可鑑","发匪":"髮匪","发及腰":"髮及腰","发型":"髮型","发夹":"髮夾","发妻":"髮妻","发屋":"髮屋","发已霜白":"髮已霜白","发带":"髮帶","发廊":"髮廊","发式":"髮式","发引千钧":"髮引千鈞","发披肩":"髮披肩","发卷":"髮捲","发根":"髮根","发油":"髮油","发漂":"髮漂","发为血之本":"髮為血之本","发状":"髮狀","发癣":"髮癬","发短心长":"髮短心長","发禁":"髮禁","发笺":"髮箋","发簪":"髮簪","发纱":"髮紗","发结":"髮結","发丝":"髮絲","发网菌":"髮網菌","发脚":"髮腳","发肤":"髮膚","发胶":"髮膠","发菜":"髮菜","发蜡":"髮蠟","发踊冲冠":"髮踊沖冠","髮踊沖冠":"髮踊沖冠","发辫":"髮辮","发钗":"髮釵","发长":"髮長","发际":"髮際","发雕":"髮雕","发霜":"髮霜","发饰":"髮飾","发髻":"髮髻","发鬓":"髮鬢","髯胡":"髯鬍","髼松":"髼鬆","鬅松":"鬅鬆","松一口气":"鬆一口氣","松了":"鬆了","松些":"鬆些","松元音":"鬆元音","松劲":"鬆勁","松动":"鬆動","松化":"鬆化","松口":"鬆口","松喉":"鬆喉","松土":"鬆土","松宽":"鬆寬","松弛":"鬆弛","松快":"鬆快","松懈":"鬆懈","松手":"鬆手","松掉":"鬆掉","松散":"鬆散","松柔":"鬆柔","松气":"鬆氣","松浮":"鬆浮","松糕":"鬆糕","松绑":"鬆綁","松紧":"鬆緊","松缓":"鬆緩","松耦合":"鬆耦合","松脆":"鬆脆","松脱":"鬆脫","松蛋":"鬆蛋","松软":"鬆軟","松通":"鬆通","松开":"鬆開","松饼":"鬆餅","松松地":"鬆鬆地","鬈发":"鬈髮","胡子":"鬍子","胡梢":"鬍梢","胡渣":"鬍渣","胡髭":"鬍髭","胡髯":"鬍髯","胡须":"鬍鬚","胡魁蛤":"鬍魁蛤","鬒发":"鬒髮","须根":"鬚根","须毛":"鬚毛","须生":"鬚生","须眉":"鬚眉","须叶藤":"鬚葉藤","须发":"鬚髮","须胡":"鬚鬍","须须":"鬚鬚","须鲨":"鬚鯊","须鲸":"鬚鯨","鬓发":"鬢髮","斗不过":"鬥不過","斗了":"鬥了","斗来斗去":"鬥來鬥去","斗倒":"鬥倒","斗分子":"鬥分子","斗剑":"鬥劍","斗力":"鬥力","斗劲":"鬥勁","斗勇":"鬥勇","斗胜":"鬥勝","斗合":"鬥合","斗嘴":"鬥嘴","斗地主":"鬥地主","斗垮":"鬥垮","斗士":"鬥士","斗富":"鬥富","斗巧":"鬥巧","斗幌子":"鬥幌子","斗弄":"鬥弄","斗引":"鬥引","斗别气":"鬥彆氣","斗彩":"鬥彩","斗心眼":"鬥心眼","斗志":"鬥志","斗闷":"鬥悶","斗成":"鬥成","斗战":"鬥戰","斗打":"鬥打","斗批改":"鬥批改","斗技":"鬥技","斗败":"鬥敗","斗文":"鬥文","斗智":"鬥智","斗暴":"鬥暴","斗武":"鬥武","斗殴":"鬥毆","斗气":"鬥氣","斗法":"鬥法","斗争":"鬥爭","斗争斗合":"鬥爭鬥合","斗牌":"鬥牌","斗牙拌齿":"鬥牙拌齒","斗牙斗齿":"鬥牙鬥齒","斗牛":"鬥牛","斗犀台":"鬥犀臺","斗犬":"鬥犬","斗狗":"鬥狗","斗狠":"鬥狠","斗兽":"鬥獸","斗叠":"鬥疊","斗百草":"鬥百草","斗眼":"鬥眼","斗私批修":"鬥私批修","斗而铸兵":"鬥而鑄兵","斗而铸锥":"鬥而鑄錐","斗脚":"鬥腳","斗舰":"鬥艦","斗茶":"鬥茶","斗草":"鬥草","斗叶儿":"鬥葉兒","斗叶子":"鬥葉子","斗蛐":"鬥蛐","斗蟋蟀":"鬥蟋蟀","斗话":"鬥話","斗艳":"鬥豔","斗起":"鬥起","斗趣":"鬥趣","斗闲气":"鬥閒氣","斗鸡":"鬥雞","斗雪红":"鬥雪紅","斗头":"鬥頭","斗风":"鬥風","斗饤":"鬥飣","斗斗":"鬥鬥","斗哄":"鬥鬨","斗鱼":"鬥魚","斗鸭":"鬥鴨","斗鹌鹑":"鬥鵪鶉","斗丽":"鬥麗","斗龙":"鬥龍","闹表":"鬧錶","闹钟":"鬧鐘","哄动":"鬨動","哄堂":"鬨堂","哄笑":"鬨笑","郁伊":"鬱伊","郁勃":"鬱勃","郁卒":"鬱卒","郁南":"鬱南","郁堙不偶":"鬱堙不偶","郁塞":"鬱塞","郁垒":"鬱壘","郁律":"鬱律","郁悒":"鬱悒","郁闷":"鬱悶","郁愤":"鬱憤","郁抑":"鬱抑","郁挹":"鬱挹","郁林":"鬱林","郁气":"鬱氣","郁江":"鬱江","郁沉沉":"鬱沉沉","郁泱":"鬱泱","郁火":"鬱火","郁热":"鬱熱","郁燠":"鬱燠","郁症":"鬱症","郁积":"鬱積","郁纡":"鬱紆","郁结":"鬱結","郁蒸":"鬱蒸","郁蓊":"鬱蓊","郁血":"鬱血","郁邑":"鬱邑","郁郁":"鬱郁","郁金":"鬱金","郁闭":"鬱閉","郁陶":"鬱陶","郁郁不平":"鬱鬱不平","郁郁不乐":"鬱鬱不樂","郁郁寡欢":"鬱鬱寡歡","郁郁而终":"鬱鬱而終","郁郁苍苍":"鬱鬱蒼蒼","郁郁葱葱":"鬱鬱蔥蔥","郁黑":"鬱黑","鬼气冲天":"鬼氣衝天","鬼谷子":"鬼谷子","魂牵梦系":"魂牽夢繫","魏征":"魏徵","魔表":"魔錶","魔鬼克星":"魔鬼克星","鱼干":"魚乾","鱼松":"魚鬆","鲇川":"鮎川","鮮于":"鮮于","鲜于":"鮮于","鲸须":"鯨鬚","鳥栖":"鳥栖","鸟栖":"鳥栖","凤凰于飞":"鳳凰于飛","鳳凰于飛":"鳳凰于飛","凤梨干":"鳳梨乾","鸣钟":"鳴鐘","鸿范":"鴻範","鹅准":"鵝準","鹄发":"鵠髮","雕心雁爪":"鵰心雁爪","雕悍":"鵰悍","雕翎":"鵰翎","雕鹗":"鵰鶚","鹤峰县":"鶴峯縣","鹤吊":"鶴弔","鹤发":"鶴髮","鸾鉴":"鸞鑑","鹰雕":"鹰鵰","鹰鵰":"鹰鵰","咸、甜":"鹹、甜","咸吃":"鹹吃","咸味":"鹹味","咸嘴淡舌":"鹹嘴淡舌","咸土":"鹹土","咸度":"鹹度","咸得":"鹹得","咸批":"鹹批","咸水":"鹹水","咸派":"鹹派","咸海":"鹹海","咸淡":"鹹淡","咸湖":"鹹湖","咸汤":"鹹湯","咸潟":"鹹潟","咸湿":"鹹濕","咸甜":"鹹甜","咸的":"鹹的","咸粥":"鹹粥","咸肉":"鹹肉","咸菜":"鹹菜","咸菜干":"鹹菜乾","咸蛋":"鹹蛋","咸猪":"鹹豬","咸酥":"鹹酥","咸类":"鹹類","咸食":"鹹食","咸鱼":"鹹魚","咸鸭蛋":"鹹鴨蛋","咸卤":"鹹鹵","咸咸":"鹹鹹","盐打怎么咸":"鹽打怎麼鹹","盐卤":"鹽滷","盐余":"鹽餘","鹿場里":"鹿場里","麟游":"麟遊","麥人杰":"麥人杰","麥仁杰":"麥仁杰","麦面":"麥麵","曲酒":"麯酒","曲尘":"麴塵","曲櫱":"麴櫱","曲秀才":"麴秀才","曲车":"麴車","曲道士":"麴道士","曲钱":"麴錢","曲霉":"麴黴","麹霉":"麴黴","面人儿":"麵人兒","面包":"麵包","面团":"麵團","面坊":"麵坊","面坯儿":"麵坯兒","面塑":"麵塑","面店":"麵店","面厂":"麵廠","面摊":"麵攤","面杖":"麵杖","面条":"麵條","面汤":"麵湯","面浆":"麵漿","面疙瘩":"麵疙瘩","面皮":"麵皮","面码儿":"麵碼兒","面筋":"麵筋","面粉":"麵粉","面糊":"麵糊","面缸":"麵缸","面肺子":"麵肺子","面茶":"麵茶","面制品":"麵製品","面食":"麵食","面饺":"麵餃","面饼":"麵餅","面馆":"麵館","面点、":"麵點、","面点师":"麵點師","麻将席":"麻將蓆","麻酱面":"麻醬麵","黄干黑瘦":"黃乾黑瘦","黄岩区":"黃巖區","黄岩县":"黃巖縣","黄历":"黃曆","黃杰":"黃杰","黄杰":"黃杰","黄历史":"黃歷史","黄白术":"黃白術","黃詩杰":"黃詩杰","黄金表":"黃金表","黃鈺筑":"黃鈺筑","黄钰筑":"黃鈺筑","黄钟":"黃鐘","黄发":"黃髮","黄曲毒素":"黃麴毒素","黎克特制":"黎克特制","黑奴吁天录":"黑奴籲天錄","黑干将":"黑幹將","黑长发":"黑長髮","黑发":"黑髮","点个赞":"點個讚","点札":"點劄","点半钟":"點半鐘","点多钟":"點多鐘","点里":"點裡","点赞":"點讚","点里程":"點里程","点钟":"點鐘","霉毒":"黴毒","霉素":"黴素","霉菌":"黴菌","霉黑":"黴黑","霉黧":"黴黧","鼓里":"鼓裡","鼓噪":"鼓譟","冬冬鼓":"鼕鼕鼓","咚咚鼓":"鼕鼕鼓","鼠曲草":"鼠麴草","鼻准":"鼻準","齐王舍牛":"齊王捨牛","齿危发秀":"齒危髮秀","齿落发白":"齒落髮白","龙岩":"龍巖","龙卷":"龍捲","龙眼干":"龍眼乾","龙须":"龍鬚","龙须面":"龍鬚麵","龙斗虎伤":"龍鬥虎傷","龜山庄":"龜山庄","龟鉴":"龜鑑","鿒":"鿓","，并力":"，並力","，并力討":"，并力討","，并力讨":"，并力討","，个中":"，箇中"};const $zh2Hans={"㑯":"㑔","㑳":"㑇","㑶":"㐹","㒓":"𠉂","㒺":"罔","㓂":"寇","㓨":"刾","㕁":"却","㕑":"厨","㕘":"参","㕥":"以","㗲":"𠵾","㘚":"㘎","㘭":"坳","㜄":"㚯","㜏":"㛣","㜢":"𡞱","㜷":"𡝠","㝛":"宿","㝠":"冥","㞞":"𪨊","㠀":"岛","㠏":"㟆","㠣":"𫵷","㠯":"以","㠶":"帆","㡌":"帽","㢘":"廉","㢝":"𢋈","㤙":"恩","㥦":"惬","㥮":"㤘","㦎":"𢛯","㨗":"捷","㨪":"晃","㨿":"据","㩗":"携","㩜":"㨫","㩦":"携","㩳":"㧐","㩵":"擜","㪚":"散","㪟":"敦","㬉":"暖","㬪":"叠","㯭":"橹","㱃":"饮","㳒":"法","㴱":"深","㷿":"𤈷","㺏":"𤠋","㼝":"碗","㽞":"留","㿜":"瘪","㿧":"𤽯","䀹":"𥅴","䁪":"𥇢","䁻":"䀥","䃮":"鿎","䈰":"筲","䉙":"𥬀","䉬":"𫂈","䉲":"𥮜","䊀":"糊","䊭":"𥺅","䊷":"䌶","䋙":"䌺","䋚":"䌻","䋹":"䌿","䋻":"䌾","䋿":"𦈓","䌈":"𦈖","䌋":"𦈘","䌖":"𦈜","䌝":"𦈟","䌟":"𦈞","䌥":"𦈠","䌰":"𦈙","䎱":"䎬","䓣":"𬜯","䕳":"𦰴","䗬":"蜂","䗿":"𧉞","䘏":"恤","䘑":"脉","䘚":"卒","䙡":"䙌","䛐":"词","䛡":"话","䜀":"䜧","䝔":"獾","䝻":"𧹕","䝼":"䞍","䞈":"𧹑","䠀":"蹚","䠶":"射","䡵":"𫟦","䢨":"𨑹","䥇":"䦂","䥑":"鿏","䥕":"𬭯","䥥":"镰","䥩":"𨱖","䥱":"䥾","䦘":"𨸄","䦛":"䦶","䦟":"䦷","䦳":"𨷿","䧢":"𨸟","䪏":"𩏼","䪗":"𩐀","䪘":"𩏿","䫴":"𩖗","䬃":"飒","䬘":"𩙮","䬝":"𩙯","䬞":"𩙧","䭀":"𩠇","䭃":"𩠈","䭾":"驮","䭿":"𩧭","䮄":"𫠊","䮝":"𩧰","䮞":"𩨁","䮠":"𩧿","䮫":"𩨇","䮳":"𩨏","䮾":"𩧪","䯀":"䯅","䰟":"魂","䰾":"鲃","䱙":"𩾈","䱬":"𩾊","䱰":"𩾋","䱷":"䲣","䱽":"䲝","䲁":"鳚","䲖":"𩾂","䲘":"鳤","䲰":"𪉂","䳘":"鹅","䴉":"鹮","䴬":"𪎈","䴴":"𪎋","䶊":"衄","丟":"丢","丣":"卯","並":"并","乗":"乘","乹":"干","亁":"干","亂":"乱","亙":"亘","亝":"斋","亞":"亚","亱":"夜","亷":"廉","亾":"亡","佇":"伫","佈":"布","佔":"占","併":"并","來":"来","侖":"仑","侶":"侣","俁":"俣","係":"系","俔":"伣","俠":"侠","俥":"伡","俻":"备","倀":"伥","倆":"俩","倈":"俫","倉":"仓","個":"个","倐":"倏","們":"们","倖":"幸","倣":"仿","倫":"伦","倲":"㑈","倸":"睬","偉":"伟","偑":"㐽","側":"侧","偵":"侦","偽":"伪","傌":"㐷","傑":"杰","傖":"伧","傘":"伞","備":"备","傚":"效","傢":"家","傭":"佣","傯":"偬","傳":"传","傴":"伛","債":"债","傷":"伤","傾":"倾","僂":"偻","僅":"仅","僉":"佥","僊":"仙","働":"动","僑":"侨","僕":"仆","僞":"伪","僤":"𫢸","僥":"侥","僨":"偾","僱":"雇","價":"价","儀":"仪","儂":"侬","億":"亿","儈":"侩","儉":"俭","儌":"侥","儐":"傧","儔":"俦","儕":"侪","儘":"尽","償":"偿","儣":"𠆲","優":"优","儲":"储","儷":"俪","儸":"㑩","儺":"傩","儻":"傥","儼":"俨","兇":"凶","兌":"兑","兎":"兔","兒":"儿","兗":"兖","兠":"兜","內":"内","兩":"两","冄":"冉","冊":"册","冐":"冒","冑":"胄","冪":"幂","冺":"泯","凈":"净","凍":"冻","凙":"𪞝","凜":"凛","凢":"凡","凱":"凯","凴":"凭","別":"别","刦":"劫","刧":"劫","刪":"删","刼":"劫","剄":"刭","則":"则","剉":"锉","剋":"克","剎":"刹","剏":"创","剗":"刬","剙":"创","剛":"刚","剝":"剥","剮":"剐","剳":"札","剴":"剀","創":"创","剷":"铲","剹":"戮","剾":"𠛅","劃":"划","劄":"札","劇":"剧","劉":"刘","劊":"刽","劌":"刿","劍":"剑","劏":"㓥","劑":"剂","劒":"剑","劚":"㔉","効":"效","勁":"劲","勅":"敕","勌":"倦","勑":"敕","動":"动","務":"务","勛":"勋","勝":"胜","勞":"劳","勢":"势","勣":"𪟝","勦":"剿","勩":"勚","勱":"劢","勳":"勋","勵":"励","勸":"劝","勻":"匀","匟":"炕","匭":"匦","匯":"汇","匱":"匮","匲":"奁","匳":"奁","區":"区","協":"协","卹":"恤","卻":"却","卽":"即","厀":"膝","厙":"厍","厠":"厕","厤":"历","厭":"厌","厰":"厂","厲":"厉","厴":"厣","參":"参","叄":"叁","叢":"丛","吚":"咿","吳":"吴","吶":"呐","呂":"吕","呌":"叫","呪":"咒","咊":"和","咼":"呙","員":"员","哯":"𠯟","哶":"咩","唄":"呗","唕":"唣","唘":"启","唚":"吣","唸":"念","啎":"忤","問":"问","啑":"喋","啓":"启","啗":"啖","啞":"哑","啟":"启","啢":"唡","啣":"衔","喎":"㖞","喚":"唤","喪":"丧","喫":"吃","喬":"乔","單":"单","喲":"哟","嗁":"啼","嗆":"呛","嗇":"啬","嗊":"唝","嗎":"吗","嗚":"呜","嗩":"唢","嗶":"哔","嗹":"𪡏","嘆":"叹","嘍":"喽","嘑":"呼","嘓":"啯","嘔":"呕","嘖":"啧","嘗":"尝","嘜":"唛","嘠":"嘎","嘩":"哗","嘮":"唠","嘯":"啸","嘰":"叽","嘵":"哓","嘷":"嗥","嘸":"呒","嘽":"啴","噁":"𫫇","噅":"𠯠","噉":"啖","噓":"嘘","噚":"㖊","噝":"咝","噠":"哒","噥":"哝","噦":"哕","噯":"嗳","噲":"哙","噴":"喷","噸":"吨","噹":"当","嚀":"咛","嚇":"吓","嚌":"哜","嚐":"尝","嚕":"噜","嚙":"啮","嚥":"咽","嚦":"呖","嚨":"咙","嚮":"向","嚲":"亸","嚳":"喾","嚴":"严","嚶":"嘤","囀":"啭","囁":"嗫","囂":"嚣","囅":"冁","囈":"呓","囉":"啰","囌":"苏","囑":"嘱","囓":"啮","囙":"因","囪":"囱","圅":"函","圇":"囵","國":"国","圍":"围","園":"园","圓":"圆","圖":"图","團":"团","圞":"𪢮","坿":"附","垜":"垛","垻":"坝","埡":"垭","埨":"𫭢","執":"执","堅":"坚","堊":"垩","堝":"埚","堯":"尧","報":"报","場":"场","塊":"块","塋":"茔","塏":"垲","塒":"埘","塗":"涂","塚":"冢","塟":"葬","塢":"坞","塤":"埙","塲":"场","塵":"尘","塸":"𫭟","塹":"堑","塿":"𪣻","墊":"垫","墖":"塔","墜":"坠","墠":"𫮃","墮":"堕","墰":"坛","墳":"坟","墶":"垯","墻":"墙","墾":"垦","壇":"坛","壈":"𡒄","壋":"垱","壎":"埙","壓":"压","壘":"垒","壙":"圹","壚":"垆","壜":"坛","壞":"坏","壟":"垄","壠":"垅","壢":"坜","壩":"坝","壪":"塆","壯":"壮","壺":"壶","壻":"婿","壼":"壸","壽":"寿","夘":"卯","夠":"够","夢":"梦","夥":"伙","夾":"夹","奐":"奂","奧":"奥","奩":"奁","奪":"夺","奬":"奖","奮":"奋","奼":"姹","妝":"妆","妬":"妒","妳":"你","妷":"侄","姉":"姊","姍":"姗","姙":"妊","姦":"奸","姪":"侄","姸":"妍","娙":"𫰛","娛":"娱","婁":"娄","婣":"姻","婦":"妇","婬":"淫","婭":"娅","媍":"妇","媧":"娲","媯":"妫","媰":"㛀","媼":"媪","媽":"妈","媿":"愧","嫋":"袅","嫗":"妪","嫰":"嫩","嫵":"妩","嫺":"娴","嫻":"娴","嫿":"婳","嬀":"妫","嬃":"媭","嬈":"娆","嬋":"婵","嬌":"娇","嬙":"嫱","嬝":"袅","嬡":"嫒","嬤":"嬷","嬪":"嫔","嬭":"奶","嬰":"婴","嬸":"婶","嬾":"懒","孃":"娘","孋":"㛤","孌":"娈","孫":"孙","學":"学","孼":"孽","孿":"孪","宂":"冗","宮":"宫","寀":"采","寃":"冤","寑":"寝","寢":"寝","實":"实","寧":"宁","審":"审","寫":"写","寬":"宽","寳":"宝","寵":"宠","寶":"宝","尅":"克","將":"将","專":"专","尋":"寻","對":"对","導":"导","尒":"尔","尙":"尚","尟":"鲜","尠":"鲜","尷":"尴","屆":"届","屍":"尸","屓":"屃","屛":"屏","屜":"屉","屢":"屡","層":"层","屨":"屦","屩":"𪨗","屬":"属","屭":"屃","岅":"坂","岡":"冈","峝":"峒","峴":"岘","島":"岛","峽":"峡","崍":"崃","崗":"岗","崙":"仑","崢":"峥","崬":"岽","嵐":"岚","嵗":"岁","嵼":"𡶴","嵽":"𫶇","嵾":"㟥","嶁":"嵝","嶃":"崭","嶄":"崭","嶇":"岖","嶔":"嵚","嶗":"崂","嶠":"峤","嶢":"峣","嶧":"峄","嶨":"峃","嶮":"崄","嶸":"嵘","嶺":"岭","嶼":"屿","嶽":"岳","巋":"岿","巒":"峦","巔":"巅","巖":"岩","巗":"岩","巘":"𪩘","巠":"𢀖","巰":"巯","巵":"卮","帀":"匝","帋":"纸","帥":"帅","師":"师","帬":"裙","帳":"帐","帶":"带","幀":"帧","幃":"帏","幇":"帮","幑":"徽","幓":"㡎","幗":"帼","幘":"帻","幙":"幕","幚":"帮","幟":"帜","幣":"币","幫":"帮","幬":"帱","幹":"干","幾":"几","庫":"库","庻":"庶","庽":"寓","廁":"厕","廂":"厢","廄":"厩","廈":"厦","廎":"庼","廐":"厩","廕":"荫","廚":"厨","廝":"厮","廞":"𫷷","廟":"庙","廠":"厂","廡":"庑","廢":"废","廣":"广","廩":"廪","廬":"庐","廳":"厅","廵":"巡","廹":"迫","廻":"回","弒":"弑","弔":"吊","弳":"弪","張":"张","強":"强","彄":"𫸩","彆":"别","彈":"弹","彌":"弥","彎":"弯","彙":"汇","彞":"彝","彠":"彟","彥":"彦","彫":"雕","彲":"彨","徃":"往","後":"后","徑":"径","從":"从","徠":"徕","徧":"遍","復":"复","徵":"征","徹":"彻","怱":"匆","怳":"恍","恆":"恒","恠":"怪","恡":"吝","恥":"耻","悅":"悦","悞":"悮","悤":"匆","悵":"怅","悶":"闷","悽":"凄","惏":"婪","惡":"恶","惥":"恿","惱":"恼","惲":"恽","惷":"蠢","惻":"恻","愛":"爱","愜":"惬","愨":"悫","愴":"怆","愷":"恺","愽":"博","愾":"忾","慄":"栗","態":"态","慍":"愠","慘":"惨","慙":"惭","慚":"惭","慟":"恸","慣":"惯","慤":"悫","慪":"怄","慫":"怂","慮":"虑","慳":"悭","慴":"慑","慶":"庆","慺":"㥪","慼":"戚","慽":"戚","慾":"欲","憂":"忧","憇":"憩","憊":"惫","憍":"㤭","憐":"怜","憑":"凭","憒":"愦","憖":"慭","憚":"惮","憤":"愤","憫":"悯","憮":"怃","憲":"宪","憶":"忆","懀":"𢙓","懇":"恳","應":"应","懌":"怿","懍":"懔","懟":"怼","懣":"懑","懤":"㤽","懧":"㤖","懨":"恹","懲":"惩","懶":"懒","懷":"怀","懸":"悬","懺":"忏","懼":"惧","懾":"慑","戀":"恋","戇":"戆","戔":"戋","戞":"戛","戧":"戗","戩":"戬","戯":"戏","戰":"战","戱":"戯","戲":"戏","戶":"户","戹":"厄","扞":"捍","抝":"拗","拋":"抛","拚":"拼","挩":"捝","挱":"挲","挵":"弄","挾":"挟","捄":"救","捨":"舍","捫":"扪","捲":"卷","掃":"扫","掄":"抡","掆":"㧏","掗":"挜","掙":"挣","掛":"挂","採":"采","掽":"碰","揀":"拣","揑":"捏","揚":"扬","換":"换","揫":"揪","揮":"挥","揷":"插","揹":"背","搆":"构","搇":"揿","搉":"榷","損":"损","搖":"摇","搗":"捣","搤":"扼","搥":"捶","搨":"拓","搯":"掏","搵":"揾","搶":"抢","搾":"榨","摃":"扛","摋":"𢫬","摑":"掴","摜":"掼","摟":"搂","摯":"挚","摳":"抠","摶":"抟","摺":"折","摻":"掺","撈":"捞","撏":"挦","撐":"撑","撓":"挠","撝":"㧑","撟":"挢","撡":"操","撣":"掸","撥":"拨","撦":"扯","撫":"抚","撲":"扑","撳":"揿","撻":"挞","撾":"挝","撿":"捡","擁":"拥","擄":"掳","擇":"择","擊":"击","擋":"挡","擓":"㧟","擔":"担","擕":"携","據":"据","擠":"挤","擡":"抬","擣":"𢭏","擥":"㧛","擧":"举","擬":"拟","擯":"摈","擰":"拧","擱":"搁","擲":"掷","擴":"扩","擷":"撷","擺":"摆","擻":"擞","擼":"撸","擽":"㧰","擾":"扰","攄":"摅","攆":"撵","攏":"拢","攔":"拦","攖":"撄","攙":"搀","攛":"撺","攜":"携","攝":"摄","攢":"攒","攣":"挛","攤":"摊","攩":"挡","攪":"搅","攬":"揽","攷":"考","敂":"叩","敍":"叙","敗":"败","敘":"叙","敵":"敌","數":"数","敺":"驱","斂":"敛","斃":"毙","斅":"𢽾","斆":"敩","斕":"斓","斬":"斩","斷":"断","於":"于","旂":"旗","旣":"既","旤":"祸","旹":"时","旾":"春","昬":"昏","時":"时","晉":"晋","晛":"𬀪","晝":"昼","暈":"晕","暉":"晖","暐":"𬀩","暘":"旸","暢":"畅","暫":"暂","暱":"昵","曄":"晔","曆":"历","曇":"昙","曉":"晓","曖":"暧","曠":"旷","曡":"叠","曥":"𣆐","曨":"昽","曬":"晒","書":"书","會":"会","朞":"期","朢":"望","朥":"𦛨","朧":"胧","朮":"术","朶":"朵","東":"东","杴":"锨","枱":"台","柵":"栅","柺":"拐","査":"查","栁":"柳","栢":"柏","栰":"筏","桒":"桑","桮":"杯","桺":"柳","桿":"杆","梔":"栀","梘":"枧","梜":"𬂩","條":"条","梟":"枭","梲":"棁","棄":"弃","棊":"棋","棖":"枨","棗":"枣","棟":"栋","棡":"㭎","棧":"栈","棲":"栖","棶":"梾","椏":"桠","椗":"碇","椲":"㭏","椶":"棕","椷":"缄","椾":"笺","楊":"杨","楓":"枫","楥":"楦","楨":"桢","業":"业","極":"极","榦":"干","榪":"杩","榮":"荣","榲":"榅","榿":"桤","構":"构","槍":"枪","槓":"杠","槕":"桌","槤":"梿","槧":"椠","槨":"椁","槮":"椮","槳":"桨","槶":"椢","槼":"椝","樁":"桩","樂":"乐","樅":"枞","樑":"梁","樓":"楼","標":"标","樞":"枢","樢":"㭤","樣":"样","樫":"㭴","樳":"桪","樸":"朴","樹":"树","樺":"桦","樿":"椫","橈":"桡","橋":"桥","橜":"橛","機":"机","橢":"椭","橫":"横","檁":"檩","檉":"柽","檔":"档","檜":"桧","檟":"槚","檢":"检","檣":"樯","檭":"𣘴","檮":"梼","檯":"台","檳":"槟","檸":"柠","檻":"槛","櫃":"柜","櫈":"凳","櫍":"𬃊","櫓":"橹","櫚":"榈","櫛":"栉","櫝":"椟","櫞":"橼","櫟":"栎","櫥":"橱","櫧":"槠","櫨":"栌","櫪":"枥","櫫":"橥","櫬":"榇","櫱":"蘖","櫳":"栊","櫸":"榉","櫻":"樱","欄":"栏","欅":"榉","權":"权","欍":"𣐤","欏":"椤","欒":"栾","欓":"𣗋","欖":"榄","欝":"郁","欞":"棂","欵":"款","欽":"钦","歎":"叹","歐":"欧","歛":"敛","歟":"欤","歡":"欢","歲":"岁","歴":"历","歷":"历","歸":"归","歿":"殁","殀":"夭","殘":"残","殞":"殒","殤":"殇","殨":"㱮","殫":"殚","殭":"僵","殮":"殓","殯":"殡","殰":"㱩","殲":"歼","殺":"杀","殻":"壳","殼":"壳","毀":"毁","毆":"殴","毧":"绒","毬":"球","毿":"毵","氂":"牦","氈":"毡","氊":"毡","氌":"氇","氣":"气","氫":"氢","氬":"氩","氳":"氲","氷":"冰","汙":"污","汚":"污","決":"决","沒":"没","沖":"冲","況":"况","泝":"溯","洩":"泄","洶":"汹","浹":"浃","浿":"𬇙","涇":"泾","涖":"莅","涼":"凉","淒":"凄","淚":"泪","淛":"浙","淥":"渌","淨":"净","淩":"凌","淪":"沦","淵":"渊","淶":"涞","淺":"浅","渙":"涣","減":"减","渢":"沨","渦":"涡","測":"测","渾":"浑","湊":"凑","湋":"𣲗","湞":"浈","湧":"涌","湯":"汤","湼":"涅","溈":"沩","準":"准","溝":"沟","溫":"温","溮":"浉","溳":"涢","溼":"湿","滄":"沧","滅":"灭","滌":"涤","滎":"荥","滙":"汇","滛":"淫","滬":"沪","滯":"滞","滲":"渗","滷":"卤","滸":"浒","滻":"浐","滾":"滚","滿":"满","漁":"渔","漊":"溇","漍":"𬇹","漚":"沤","漢":"汉","漣":"涟","漬":"渍","漲":"涨","漵":"溆","漸":"渐","漿":"浆","潁":"颍","潄":"漱","潑":"泼","潔":"洁","潕":"𣲘","潙":"沩","潚":"㴋","潛":"潜","潤":"润","潯":"浔","潰":"溃","潷":"滗","潿":"涠","澀":"涩","澁":"涩","澅":"𣶩","澆":"浇","澇":"涝","澐":"沄","澗":"涧","澠":"渑","澤":"泽","澦":"滪","澩":"泶","澫":"𬇕","澮":"浍","澱":"淀","澾":"㳠","濁":"浊","濃":"浓","濄":"㳡","濆":"𣸣","濇":"涩","濕":"湿","濘":"泞","濚":"溁","濜":"浕","濟":"济","濤":"涛","濧":"㳔","濫":"滥","濰":"潍","濱":"滨","濶":"阔","濺":"溅","濼":"泺","濾":"滤","瀂":"澛","瀃":"𣽷","瀅":"滢","瀆":"渎","瀇":"㲿","瀉":"泻","瀋":"沈","瀏":"浏","瀕":"濒","瀘":"泸","瀝":"沥","瀟":"潇","瀠":"潆","瀦":"潴","瀧":"泷","瀨":"濑","瀰":"弥","瀲":"潋","瀾":"澜","灃":"沣","灄":"滠","灋":"法","灑":"洒","灕":"漓","灘":"滩","灙":"𣺼","灝":"灏","灠":"漤","灣":"湾","灤":"滦","灧":"滟","灩":"滟","災":"灾","為":"为","烏":"乌","烖":"灾","烴":"烃","無":"无","煉":"炼","煑":"煮","煒":"炜","煗":"暖","煙":"烟","煢":"茕","煥":"焕","煩":"烦","煬":"炀","煱":"㶽","熅":"煴","熈":"熙","熉":"𤈶","熌":"𤇄","熒":"荧","熓":"𤆡","熗":"炝","熡":"𤋏","熰":"𬉼","熱":"热","熲":"颎","熾":"炽","燀":"𬊤","燁":"烨","燄":"焰","燈":"灯","燉":"炖","燒":"烧","燖":"𬊈","燙":"烫","燜":"焖","營":"营","燦":"灿","燬":"毁","燭":"烛","燴":"烩","燶":"㶶","燻":"熏","燼":"烬","燾":"焘","爄":"𤇃","爍":"烁","爐":"炉","爗":"烨","爛":"烂","爭":"争","爲":"为","爺":"爷","爾":"尔","牀":"床","牆":"墙","牋":"笺","牎":"窗","牐":"闸","牓":"榜","牕":"窗","牘":"牍","牠":"它","牴":"抵","牽":"牵","犖":"荦","犢":"犊","犧":"牺","狀":"状","狥":"徇","狹":"狭","狽":"狈","猂":"悍","猙":"狰","猨":"猿","猶":"犹","猻":"狲","獁":"犸","獃":"呆","獄":"狱","獅":"狮","獎":"奖","獘":"毙","獧":"狷","獨":"独","獪":"狯","獫":"猃","獮":"狝","獰":"狞","獱":"㺍","獲":"获","獵":"猎","獷":"犷","獸":"兽","獺":"獭","獻":"献","獼":"猕","玀":"猡","玁":"𤞤","玅":"妙","現":"现","琖":"盏","琱":"雕","琺":"珐","琿":"珲","瑇":"玳","瑋":"玮","瑒":"玚","瑣":"琐","瑤":"瑶","瑩":"莹","瑪":"玛","瑯":"琅","瑲":"玱","瑽":"𪻐","璉":"琏","璊":"𫞩","璕":"𬍤","璗":"𬍡","璡":"琎","璢":"瑠","璣":"玑","璦":"瑷","璫":"珰","璯":"㻅","環":"环","璵":"玙","璸":"瑸","璽":"玺","瓅":"𬍛","瓊":"琼","瓏":"珑","瓔":"璎","瓕":"𤦀","瓚":"瓒","瓛":"𤩽","甌":"瓯","甎":"砖","甕":"瓮","甖":"罂","甞":"尝","產":"产","産":"产","畂":"亩","畆":"亩","畝":"亩","畢":"毕","畧":"略","畫":"画","畮":"亩","異":"异","畱":"留","畵":"画","當":"当","疇":"畴","疊":"叠","疎":"疏","疘":"肛","疿":"痱","痐":"蛔","痙":"痉","痠":"酸","痲":"痳","痺":"痹","瘂":"痖","瘉":"愈","瘋":"疯","瘍":"疡","瘓":"痪","瘖":"喑","瘞":"瘗","瘡":"疮","瘧":"疟","瘮":"瘆","瘲":"疭","瘺":"瘘","瘻":"瘘","療":"疗","癄":"憔","癅":"瘤","癆":"痨","癇":"痫","癈":"废","癉":"瘅","癒":"愈","癘":"疠","癟":"瘪","癡":"痴","癢":"痒","癤":"疖","癥":"症","癧":"疬","癩":"癞","癬":"癣","癭":"瘿","癮":"瘾","癰":"痈","癱":"瘫","癲":"癫","發":"发","皁":"皂","皐":"皋","皚":"皑","皜":"皓","皟":"𤾀","皰":"疱","皷":"鼓","皸":"皲","皺":"皱","盃":"杯","盇":"盍","盌":"碗","盜":"盗","盞":"盏","盡":"尽","監":"监","盤":"盘","盧":"卢","盪":"荡","眎":"视","眞":"真","眡":"视","眥":"眦","眾":"众","睍":"𪾢","睏":"困","睜":"睁","睞":"睐","睠":"眷","睪":"睾","瞇":"眯","瞖":"翳","瞘":"眍","瞜":"䁖","瞞":"瞒","瞤":"𥆧","瞭":"了","瞶":"瞆","瞼":"睑","矁":"瞅","矇":"蒙","矓":"眬","矙":"瞰","矚":"瞩","矯":"矫","砲":"炮","硃":"朱","硜":"硁","硤":"硖","硨":"砗","硯":"砚","碙":"𥐻","碩":"硕","碪":"砧","碭":"砀","碸":"砜","確":"确","碼":"码","碽":"䂵","磑":"硙","磚":"砖","磟":"碌","磠":"硵","磣":"碜","磧":"碛","磯":"矶","磽":"硗","磾":"䃅","礄":"硚","礆":"碱","礎":"础","礐":"𬒈","礒":"𥐟","礙":"碍","礦":"矿","礪":"砺","礫":"砾","礬":"矾","礮":"炮","礱":"砻","祕":"秘","祘":"算","祿":"禄","禍":"祸","禎":"祯","禕":"祎","禡":"祃","禦":"御","禪":"禅","禮":"礼","禰":"祢","禱":"祷","禿":"秃","秈":"籼","秊":"年","秌":"秋","秖":"只","稅":"税","稈":"秆","稉":"粳","稏":"䅉","稜":"棱","稟":"禀","稬":"糯","稭":"秸","種":"种","稱":"称","稾":"稿","穀":"谷","穇":"䅟","穌":"稣","積":"积","穎":"颖","穠":"秾","穡":"穑","穢":"秽","穤":"糯","穨":"颓","穩":"稳","穫":"获","穭":"稆","穽":"阱","窓":"窗","窩":"窝","窪":"洼","窮":"穷","窯":"窑","窰":"窑","窵":"窎","窶":"窭","窺":"窥","窻":"窗","竄":"窜","竅":"窍","竇":"窦","竈":"灶","竊":"窃","竚":"伫","竝":"并","竢":"俟","竪":"竖","競":"竞","筆":"笔","筍":"笋","筞":"策","筧":"笕","筩":"筒","筯":"箸","筴":"䇲","箇":"个","箋":"笺","箏":"筝","箒":"帚","箠":"棰","節":"节","範":"范","築":"筑","篋":"箧","篔":"筼","篘":"𥬠","篛":"箬","篢":"𬕂","篤":"笃","篩":"筛","篳":"筚","簀":"箦","簍":"篓","簑":"蓑","簒":"篡","簞":"箪","簡":"简","簣":"篑","簫":"箫","簮":"簪","簷":"檐","簹":"筜","簽":"签","簾":"帘","籃":"篮","籋":"𥬞","籌":"筹","籐":"藤","籔":"䉤","籙":"箓","籛":"篯","籜":"箨","籟":"籁","籠":"笼","籤":"签","籩":"笾","籪":"簖","籬":"篱","籮":"箩","籲":"吁","粃":"秕","粧":"妆","粵":"粤","糉":"粽","糝":"糁","糞":"粪","糧":"粮","糰":"团","糲":"粝","糴":"籴","糶":"粜","糹":"纟","糾":"纠","紀":"纪","紂":"纣","紃":"𬘓","約":"约","紅":"红","紆":"纡","紇":"纥","紈":"纨","紉":"纫","紋":"纹","納":"纳","紐":"纽","紓":"纾","純":"纯","紕":"纰","紖":"纼","紗":"纱","紘":"纮","紙":"纸","級":"级","紛":"纷","紜":"纭","紝":"纴","紞":"𬘘","紡":"纺","紥":"扎","紬":"䌷","紮":"扎","細":"细","紱":"绂","紲":"绁","紳":"绅","紵":"纻","紹":"绍","紺":"绀","紼":"绋","紿":"绐","絀":"绌","終":"终","絃":"弦","組":"组","絅":"䌹","絆":"绊","絎":"绗","絏":"绁","結":"结","絕":"绝","絛":"绦","絝":"绔","絞":"绞","絡":"络","絢":"绚","給":"给","絨":"绒","絪":"𬘡","絰":"绖","統":"统","絲":"丝","絳":"绛","絶":"绝","絹":"绢","絺":"𫄨","綀":"𦈌","綁":"绑","綃":"绡","綄":"𬘫","綆":"绠","綇":"𦈋","綈":"绨","綉":"绣","綌":"绤","綎":"𬘩","綏":"绥","綐":"䌼","綑":"捆","經":"经","綖":"𫄧","綜":"综","綝":"𬘭","綞":"缍","綠":"绿","綡":"𫟅","綢":"绸","綣":"绻","綧":"𬘯","綪":"𬘬","綫":"线","綬":"绶","維":"维","綯":"绹","綰":"绾","綱":"纲","網":"网","綴":"缀","綵":"彩","綸":"纶","綹":"绺","綺":"绮","綻":"绽","綽":"绰","綾":"绫","綿":"绵","緄":"绲","緇":"缁","緊":"紧","緋":"绯","緍":"𦈏","緐":"繁","緑":"绿","緒":"绪","緓":"绬","緔":"绱","緗":"缃","緘":"缄","緙":"缂","線":"线","緜":"绵","緝":"缉","緞":"缎","締":"缔","緡":"缗","緣":"缘","緥":"褓","緦":"缌","編":"编","緩":"缓","緬":"缅","緯":"纬","緰":"𦈕","緱":"缑","緲":"缈","練":"练","緶":"缏","緷":"𦈉","緸":"𦈑","緹":"缇","緻":"致","緼":"缊","縈":"萦","縉":"缙","縊":"缢","縋":"缒","縎":"𦈔","縐":"绉","縑":"缣","縕":"缊","縗":"缞","縛":"缚","縝":"缜","縞":"缟","縟":"缛","縣":"县","縧":"绦","縫":"缝","縬":"𦈚","縭":"缡","縮":"缩","縯":"𬙂","縱":"纵","縲":"缧","縳":"䌸","縴":"纤","縵":"缦","縶":"絷","縷":"缕","縹":"缥","縺":"𦈐","總":"总","績":"绩","繃":"绷","繅":"缫","繆":"缪","繏":"𦈝","繐":"穗","繒":"缯","繓":"𦈛","織":"织","繕":"缮","繖":"伞","繙":"翻","繚":"缭","繞":"绕","繟":"𦈎","繡":"绣","繢":"缋","繦":"襁","繩":"绳","繪":"绘","繫":"系","繭":"茧","繮":"缰","繯":"缳","繰":"缲","繳":"缴","繶":"𫄷","繸":"䍁","繹":"绎","繻":"𦈡","繼":"继","繽":"缤","繾":"缱","繿":"䍀","纁":"𫄸","纆":"𬙊","纇":"颣","纈":"缬","纊":"纩","續":"续","纍":"累","纏":"缠","纓":"缨","纔":"才","纕":"𬙋","纖":"纤","纘":"缵","纜":"缆","缽":"钵","罇":"樽","罈":"坛","罋":"瓮","罌":"罂","罎":"坛","罰":"罚","罵":"骂","罷":"罢","罸":"罚","羅":"罗","羆":"罴","羈":"羁","羋":"芈","羗":"羌","羢":"绒","羣":"群","羥":"羟","羨":"羡","義":"义","羶":"膻","翄":"翅","習":"习","翬":"翚","翶":"翱","翹":"翘","翽":"翙","耡":"锄","耬":"耧","耮":"耢","聖":"圣","聞":"闻","聯":"联","聰":"聪","聲":"声","聳":"耸","聵":"聩","聶":"聂","職":"职","聹":"聍","聽":"听","聾":"聋","肅":"肃","肎":"肯","肐":"胳","肧":"胚","胷":"胸","脃":"脆","脅":"胁","脇":"胁","脈":"脉","脗":"吻","脛":"胫","脣":"唇","脥":"𣍰","脫":"脱","脹":"胀","腁":"胼","腎":"肾","腖":"胨","腡":"脶","腦":"脑","腪":"𣍯","腫":"肿","腳":"脚","腸":"肠","膃":"腽","膓":"肠","膕":"腘","膚":"肤","膞":"䏝","膠":"胶","膢":"𦝼","膩":"腻","膽":"胆","膾":"脍","膿":"脓","臈":"腊","臉":"脸","臋":"臀","臍":"脐","臏":"膑","臕":"膘","臗":"𣎑","臘":"腊","臙":"胭","臚":"胪","臝":"裸","臟":"脏","臠":"脔","臢":"臜","臥":"卧","臨":"临","臯":"皋","臺":"台","與":"与","興":"兴","舉":"举","舊":"旧","舖":"铺","舘":"馆","舩":"船","艙":"舱","艢":"樯","艣":"橹","艤":"舣","艦":"舰","艪":"橹","艫":"舻","艱":"艰","艷":"艳","芲":"花","芻":"刍","苧":"苎","茘":"荔","茲":"兹","荊":"荆","荳":"豆","莊":"庄","莖":"茎","莢":"荚","莧":"苋","華":"华","菸":"烟","萇":"苌","萊":"莱","萬":"万","萲":"萱","萴":"荝","萵":"莴","葉":"叶","葒":"荭","葠":"参","葤":"荮","葦":"苇","葯":"药","葷":"荤","蒍":"𫇭","蒓":"莼","蒔":"莳","蒞":"莅","蒼":"苍","蓀":"荪","蓆":"席","蓋":"盖","蓡":"参","蓮":"莲","蓯":"苁","蓴":"莼","蓽":"荜","蔄":"𬜬","蔔":"卜","蔕":"蒂","蔘":"参","蔞":"蒌","蔣":"蒋","蔥":"葱","蔦":"茑","蔭":"荫","蔿":"𫇭","蕁":"荨","蕆":"蒇","蕎":"荞","蕒":"荬","蕓":"芸","蕕":"莸","蕘":"荛","蕚":"萼","蕢":"蒉","蕩":"荡","蕪":"芜","蕭":"萧","蕷":"蓣","蕿":"萱","薀":"蕰","薈":"荟","薊":"蓟","薌":"芗","薑":"姜","薔":"蔷","薘":"荙","薟":"莶","薦":"荐","薩":"萨","薴":"苧","薵":"䓓","薺":"荠","藍":"蓝","藎":"荩","藝":"艺","藥":"药","藪":"薮","藭":"䓖","藴":"蕴","藶":"苈","藷":"薯","藹":"蔼","藺":"蔺","藼":"萱","蘀":"萚","蘄":"蕲","蘆":"芦","蘇":"苏","蘊":"蕴","蘋":"𬞟","蘐":"萱","蘓":"苏","蘚":"藓","蘞":"蔹","蘢":"茏","蘤":"花","蘭":"兰","蘺":"蓠","蘿":"萝","虆":"蔂","虉":"𬟁","處":"处","虛":"虚","虜":"虏","號":"号","虧":"亏","虯":"虬","蚘":"蛔","蛕":"蛔","蛺":"蛱","蛻":"蜕","蜆":"蚬","蜋":"螂","蜖":"蛔","蜨":"蝶","蝀":"𬟽","蝕":"蚀","蝟":"猬","蝦":"虾","蝨":"虱","蝯":"猿","蝱":"虻","蝸":"蜗","螄":"蛳","螎":"融","螞":"蚂","螡":"蚊","螢":"萤","螮":"䗖","螻":"蝼","螿":"螀","蟁":"蚊","蟄":"蛰","蟇":"蟆","蟈":"蝈","蟎":"螨","蟣":"虮","蟬":"蝉","蟯":"蛲","蟲":"虫","蟶":"蛏","蟻":"蚁","蠁":"蚃","蠅":"蝇","蠆":"虿","蠍":"蝎","蠏":"蟹","蠐":"蛴","蠑":"蝾","蠒":"茧","蠔":"蚝","蠟":"蜡","蠣":"蛎","蠨":"蟏","蠭":"蜂","蠱":"蛊","蠶":"蚕","蠻":"蛮","衂":"衄","衆":"众","衇":"脉","衊":"蔑","術":"术","衕":"同","衚":"胡","衛":"卫","衝":"冲","衞":"卫","衺":"邪","袞":"衮","袟":"帙","袵":"衽","裊":"袅","裌":"袷","裏":"里","補":"补","裝":"装","裠":"裙","裡":"里","製":"制","複":"复","褌":"裈","褘":"袆","褭":"袅","褲":"裤","褳":"裢","褸":"褛","褻":"亵","襀":"𫌀","襃":"褒","襉":"裥","襍":"杂","襏":"袯","襖":"袄","襝":"裣","襠":"裆","襤":"褴","襪":"袜","襬":"摆","襯":"衬","襲":"袭","襴":"襕","覇":"霸","覈":"核","覊":"羁","見":"见","覎":"觃","規":"规","覓":"觅","覔":"觅","視":"视","覘":"觇","覡":"觋","覥":"觍","覦":"觎","覩":"睹","親":"亲","覬":"觊","覯":"觏","覲":"觐","覷":"觑","覺":"觉","覼":"𫌨","覽":"览","覿":"觌","觀":"观","觝":"抵","觴":"觞","觶":"觯","觸":"触","訁":"讠","訂":"订","訃":"讣","計":"计","訊":"讯","訌":"讧","討":"讨","訏":"𬣙","訐":"讦","訑":"𫍙","訒":"讱","訓":"训","訕":"讪","訖":"讫","託":"托","記":"记","訛":"讹","訝":"讶","訟":"讼","訢":"䜣","訣":"诀","訥":"讷","訩":"讻","訪":"访","設":"设","許":"许","訴":"诉","訶":"诃","診":"诊","註":"注","証":"证","詀":"𧮪","詁":"诂","詆":"诋","詎":"讵","詐":"诈","詒":"诒","詔":"诏","評":"评","詖":"诐","詗":"诇","詘":"诎","詛":"诅","詝":"𬣞","詞":"词","詠":"咏","詡":"诩","詢":"询","詣":"诣","試":"试","詩":"诗","詪":"𬣳","詫":"诧","詬":"诟","詭":"诡","詮":"诠","詰":"诘","話":"话","該":"该","詳":"详","詵":"诜","詶":"酬","詷":"𫍣","詼":"诙","詿":"诖","誄":"诔","誅":"诛","誆":"诓","誇":"夸","誌":"志","認":"认","誑":"诳","誒":"诶","誕":"诞","誖":"悖","誘":"诱","誚":"诮","語":"语","誠":"诚","誡":"诫","誣":"诬","誤":"误","誥":"诰","誦":"诵","誨":"诲","說":"说","説":"说","誰":"谁","課":"课","誶":"谇","誹":"诽","誼":"谊","誾":"訚","調":"调","諂":"谄","諄":"谆","談":"谈","諉":"诿","請":"请","諍":"诤","諏":"诹","諑":"诼","諒":"谅","諓":"𬣡","論":"论","諗":"谂","諛":"谀","諜":"谍","諝":"谞","諞":"谝","諟":"𬤊","諡":"谥","諢":"诨","諤":"谔","諦":"谛","諧":"谐","諫":"谏","諭":"谕","諮":"谘","諰":"𫍰","諱":"讳","諲":"𬤇","諳":"谙","諴":"𫍯","諶":"谌","諷":"讽","諸":"诸","諺":"谚","諼":"谖","諾":"诺","謀":"谋","謁":"谒","謂":"谓","謄":"誊","謅":"诌","謊":"谎","謌":"歌","謎":"谜","謏":"𫍲","謐":"谧","謔":"谑","謖":"谡","謗":"谤","謙":"谦","謚":"谥","講":"讲","謝":"谢","謠":"谣","謡":"谣","謨":"谟","謫":"谪","謬":"谬","謭":"谫","謳":"讴","謹":"谨","謾":"谩","譁":"哗","譆":"嘻","證":"证","譊":"𫍢","譌":"讹","譎":"谲","譏":"讥","譓":"𬤝","譔":"撰","譖":"谮","識":"识","譙":"谯","譚":"谭","譜":"谱","譞":"𫍽","譟":"噪","譫":"谵","譭":"毁","譯":"译","議":"议","譴":"谴","護":"护","譸":"诪","譼":"䛓","譽":"誉","譾":"谫","讀":"读","讁":"谪","變":"变","讋":"詟","讌":"䜩","讎":"仇","讐":"雠","讒":"谗","讓":"让","讕":"谰","讖":"谶","讚":"赞","讜":"谠","讞":"谳","豈":"岂","豎":"竖","豐":"丰","豓":"艳","豔":"艳","豬":"猪","豶":"豮","貍":"狸","貓":"猫","貙":"䝙","貛":"獾","貝":"贝","貞":"贞","貟":"贠","負":"负","財":"财","貢":"贡","貧":"贫","貨":"货","販":"贩","貪":"贪","貫":"贯","責":"责","貯":"贮","貰":"贳","貲":"赀","貳":"贰","貴":"贵","貶":"贬","買":"买","貸":"贷","貺":"贶","費":"费","貼":"贴","貽":"贻","貿":"贸","賀":"贺","賁":"贲","賂":"赂","賃":"赁","賄":"贿","賅":"赅","資":"资","賈":"贾","賉":"恤","賊":"贼","賑":"赈","賒":"赊","賓":"宾","賕":"赇","賙":"赒","賚":"赉","賛":"赞","賜":"赐","賞":"赏","賟":"𧹖","賠":"赔","賡":"赓","賢":"贤","賣":"卖","賤":"贱","賦":"赋","賧":"赕","質":"质","賫":"赍","賬":"账","賭":"赌","賰":"䞐","賴":"赖","賵":"赗","賷":"赍","賺":"赚","賻":"赙","購":"购","賽":"赛","賾":"赜","贃":"𧹗","贄":"贽","贅":"赘","贇":"赟","贈":"赠","贊":"赞","贋":"赝","贍":"赡","贏":"赢","贐":"赆","贑":"赣","贓":"赃","贔":"赑","贖":"赎","贗":"赝","贛":"赣","贜":"赃","赬":"赪","趂":"趁","趕":"赶","趙":"赵","趨":"趋","趲":"趱","跡":"迹","跥":"跺","踁":"胫","踐":"践","踫":"碰","踰":"逾","踴":"踊","蹌":"跄","蹏":"蹄","蹔":"暂","蹕":"跸","蹟":"迹","蹠":"跖","蹣":"蹒","蹤":"踪","蹧":"糟","蹵":"蹴","蹺":"跷","蹻":"𫏋","躂":"跶","躉":"趸","躊":"踌","躋":"跻","躍":"跃","躎":"䟢","躑":"踯","躒":"跞","躓":"踬","躕":"蹰","躘":"𨀁","躚":"跹","躝":"𨅬","躡":"蹑","躥":"蹿","躦":"躜","躪":"躏","躭":"耽","躳":"躬","躶":"裸","軀":"躯","軉":"𨉗","車":"车","軋":"轧","軌":"轨","軍":"军","軏":"𫐄","軑":"轪","軒":"轩","軔":"轫","軗":"𨐅","軛":"轭","軝":"𬨂","軟":"软","軤":"轷","軨":"𫐉","軫":"轸","軲":"轱","軸":"轴","軹":"轵","軺":"轺","軻":"轲","軼":"轶","軾":"轼","較":"较","輄":"𨐈","輅":"辂","輇":"辁","輈":"辀","載":"载","輊":"轾","輋":"𪨶","輒":"辄","輓":"挽","輔":"辅","輕":"轻","輗":"𫐐","輙":"辄","輛":"辆","輜":"辎","輝":"辉","輞":"辋","輟":"辍","輥":"辊","輦":"辇","輩":"辈","輪":"轮","輬":"辌","輭":"软","輮":"𫐓","輯":"辑","輳":"辏","輶":"𬨎","輸":"输","輻":"辐","輼":"辒","輾":"辗","輿":"舆","轀":"辒","轂":"毂","轄":"辖","轅":"辕","轆":"辘","轉":"转","轍":"辙","轎":"轿","轔":"辚","轟":"轰","轡":"辔","轢":"轹","轣":"𫐆","轤":"轳","辠":"罪","辢":"辣","辤":"辞","辦":"办","辭":"辞","辮":"辫","辯":"辩","農":"农","辳":"农","迴":"回","迻":"移","逈":"迥","逕":"迳","這":"这","連":"连","逥":"回","逩":"奔","逬":"迸","週":"周","進":"进","遉":"侦","遊":"游","運":"运","過":"过","達":"达","違":"违","遙":"遥","遜":"逊","遞":"递","遠":"远","遡":"溯","適":"适","遯":"遁","遲":"迟","遶":"绕","遷":"迁","選":"选","遺":"遗","遼":"辽","邁":"迈","還":"还","邇":"迩","邊":"边","邏":"逻","邐":"逦","郟":"郏","郵":"邮","鄆":"郓","鄉":"乡","鄒":"邹","鄔":"邬","鄖":"郧","鄧":"邓","鄩":"𬩽","鄭":"郑","鄰":"邻","鄲":"郸","鄳":"𫑡","鄴":"邺","鄶":"郐","鄺":"邝","酇":"酂","酈":"郦","酖":"鸩","酧":"酬","醃":"腌","醆":"盏","醕":"醇","醜":"丑","醞":"酝","醣":"糖","醫":"医","醬":"酱","醯":"酰","醱":"酦","醲":"𬪩","醻":"酬","醼":"宴","釀":"酿","釁":"衅","釃":"酾","釅":"酽","釋":"释","釒":"钅","釓":"钆","釔":"钇","釕":"钌","釗":"钊","釘":"钉","釙":"钋","針":"针","釣":"钓","釤":"钐","釦":"扣","釧":"钏","釩":"钒","釬":"焊","釳":"𨰿","釴":"𬬩","釵":"钗","釷":"钍","釹":"钕","釺":"钎","釾":"䥺","釿":"𬬱","鈀":"钯","鈁":"钫","鈃":"钘","鈄":"钭","鈅":"钥","鈇":"𫓧","鈈":"钚","鈉":"钠","鈋":"𨱂","鈍":"钝","鈎":"钩","鈐":"钤","鈑":"钣","鈒":"钑","鈔":"钞","鈕":"钮","鈞":"钧","鈠":"𨱁","鈣":"钙","鈥":"钬","鈦":"钛","鈧":"钪","鈮":"铌","鈯":"𨱄","鈰":"铈","鈲":"𨱃","鈳":"钶","鈴":"铃","鈷":"钴","鈸":"钹","鈹":"铍","鈺":"钰","鈽":"钸","鈾":"铀","鈿":"钿","鉀":"钾","鉁":"𨱅","鉄":"铁","鉅":"钜","鉆":"钻","鉈":"铊","鉉":"铉","鉊":"𬬿","鉋":"铇","鉍":"铋","鉑":"铂","鉕":"钷","鉗":"钳","鉚":"铆","鉛":"铅","鉝":"𫟷","鉞":"钺","鉢":"钵","鉤":"钩","鉥":"𬬸","鉦":"钲","鉧":"𬭁","鉨":"鿭","鉬":"钼","鉭":"钽","鉮":"𬬹","鉶":"铏","鉷":"𫟹","鉸":"铰","鉺":"铒","鉻":"铬","鉿":"铪","銀":"银","銃":"铳","銅":"铜","銈":"𫓯","銍":"铚","銑":"铣","銓":"铨","銖":"铢","銘":"铭","銚":"铫","銛":"铦","銜":"衔","銠":"铑","銣":"铷","銥":"铱","銦":"铟","銨":"铵","銩":"铥","銪":"铕","銫":"铯","銬":"铐","銱":"铞","銲":"焊","銳":"锐","銶":"𨱇","銷":"销","銹":"锈","銻":"锑","銼":"锉","鋁":"铝","鋃":"锒","鋅":"锌","鋇":"钡","鋉":"𨱈","鋌":"铤","鋏":"铗","鋐":"𬭎","鋒":"锋","鋗":"𫓶","鋙":"铻","鋝":"锊","鋟":"锓","鋣":"铘","鋤":"锄","鋥":"锃","鋦":"锔","鋨":"锇","鋩":"铓","鋪":"铺","鋭":"锐","鋮":"铖","鋯":"锆","鋰":"锂","鋱":"铽","鋶":"锍","鋸":"锯","鋹":"𬬮","鋼":"钢","錀":"𬬭","錁":"锞","錂":"𨱋","錄":"录","錆":"锖","錇":"锫","錈":"锩","錏":"铔","錐":"锥","錒":"锕","錕":"锟","錘":"锤","錙":"锱","錚":"铮","錛":"锛","錞":"𬭚","錟":"锬","錠":"锭","錡":"锜","錢":"钱","錤":"𫓹","錦":"锦","錨":"锚","錩":"锠","錫":"锡","錮":"锢","錯":"错","録":"录","錳":"锰","錶":"表","錸":"铼","鍀":"锝","鍁":"锨","鍃":"锪","鍄":"𨱉","鍆":"钔","鍇":"锴","鍈":"锳","鍊":"炼","鍋":"锅","鍍":"镀","鍔":"锷","鍘":"铡","鍚":"钖","鍛":"锻","鍠":"锽","鍤":"锸","鍥":"锲","鍩":"锘","鍫":"锹","鍬":"锹","鍭":"𬭤","鍮":"𨱎","鍰":"锾","鍳":"鉴","鍵":"键","鍶":"锶","鍺":"锗","鍾":"锺","鎂":"镁","鎄":"锿","鎇":"镅","鎊":"镑","鎌":"镰","鎓":"𬭩","鎔":"镕","鎖":"锁","鎗":"枪","鎘":"镉","鎚":"锤","鎛":"镈","鎝":"𨱏","鎡":"镃","鎢":"钨","鎣":"蓥","鎦":"镏","鎧":"铠","鎩":"铩","鎪":"锼","鎬":"镐","鎭":"镇","鎮":"镇","鎯":"𨱍","鎰":"镒","鎲":"镋","鎳":"镍","鎵":"镓","鎶":"鿔","鎷":"𨰾","鎸":"镌","鎻":"锁","鎿":"镎","鏃":"镞","鏆":"𨱌","鏇":"镟","鏈":"链","鏉":"𨱒","鏌":"镆","鏍":"镙","鏏":"𬭬","鏐":"镠","鏑":"镝","鏗":"铿","鏘":"锵","鏚":"戚","鏜":"镗","鏝":"镘","鏞":"镛","鏟":"铲","鏡":"镜","鏢":"镖","鏤":"镂","鏦":"𫓩","鏨":"錾","鏰":"镚","鏵":"铧","鏷":"镤","鏹":"镪","鏺":"䥽","鏻":"𬭸","鏽":"锈","鐃":"铙","鐄":"𨱑","鐇":"𫔍","鐋":"铴","鐍":"𫔎","鐎":"𨱓","鐏":"𨱔","鐐":"镣","鐒":"铹","鐓":"镦","鐔":"镡","鐘":"钟","鐙":"镫","鐝":"镢","鐠":"镨","鐥":"䦅","鐦":"锎","鐧":"锏","鐨":"镄","鐩":"𬭼","鐫":"镌","鐮":"镰","鐯":"䦃","鐲":"镯","鐳":"镭","鐵":"铁","鐶":"镮","鐸":"铎","鐺":"铛","鐽":"𫟼","鐿":"镱","鑄":"铸","鑈":"鿭","鑊":"镬","鑌":"镔","鑑":"鉴","鑒":"鉴","鑔":"镲","鑕":"锧","鑚":"钻","鑛":"矿","鑞":"镴","鑠":"铄","鑣":"镳","鑤":"刨","鑥":"镥","鑪":"𬬻","鑭":"镧","鑰":"钥","鑱":"镵","鑲":"镶","鑵":"罐","鑷":"镊","鑹":"镩","鑼":"锣","鑽":"钻","鑾":"銮","鑿":"凿","钁":"䦆","钂":"镋","長":"长","門":"门","閂":"闩","閃":"闪","閆":"闫","閈":"闬","閉":"闭","開":"开","閌":"闶","閍":"𨸂","閎":"闳","閏":"闰","閐":"𨸃","閑":"闲","閒":"闲","間":"间","閔":"闵","閘":"闸","閙":"闹","閡":"阂","閣":"阁","閤":"阁","閥":"阀","閧":"哄","閨":"闺","閩":"闽","閫":"阃","閬":"阆","閭":"闾","閱":"阅","閲":"阅","閶":"阊","閹":"阉","閻":"阎","閼":"阏","閽":"阍","閾":"阈","閿":"阌","闃":"阒","闆":"板","闇":"暗","闈":"闱","闉":"𬮱","闊":"阔","闋":"阕","闌":"阑","闍":"阇","闐":"阗","闑":"𫔶","闒":"阘","闓":"闿","闔":"阖","闕":"阙","闖":"闯","闚":"窥","關":"关","闞":"阚","闠":"阓","闡":"阐","闢":"辟","闤":"阛","闥":"闼","阨":"厄","阬":"坑","陗":"峭","陘":"陉","陜":"陕","陝":"陕","陣":"阵","陰":"阴","陳":"陈","陸":"陆","陻":"堙","陽":"阳","陿":"狭","隂":"阴","隄":"堤","隉":"陧","隊":"队","階":"阶","隑":"𬮿","隕":"陨","隖":"坞","際":"际","隣":"邻","隤":"𬯎","隨":"随","險":"险","隮":"𬯀","隯":"陦","隱":"隐","隴":"陇","隷":"隶","隸":"隶","隻":"只","雋":"隽","雖":"虽","雙":"双","雛":"雏","雜":"杂","雞":"鸡","離":"离","難":"难","雲":"云","電":"电","霢":"霡","霧":"雾","霽":"霁","靂":"雳","靄":"霭","靆":"叇","靈":"灵","靉":"叆","靚":"靓","靜":"静","靦":"䩄","靨":"靥","靭":"韧","靱":"韧","鞀":"鼗","鞏":"巩","鞝":"绱","鞦":"秋","鞵":"鞋","鞽":"鞒","鞾":"靴","韁":"缰","韃":"鞑","韆":"千","韈":"袜","韉":"鞯","韋":"韦","韌":"韧","韍":"韨","韓":"韩","韙":"韪","韜":"韬","韞":"韫","韤":"袜","韮":"韭","韻":"韵","響":"响","頁":"页","頂":"顶","頃":"顷","項":"项","順":"顺","頇":"顸","須":"须","頊":"顼","頌":"颂","頍":"𫠆","頎":"颀","頏":"颃","預":"预","頑":"顽","頒":"颁","頓":"顿","頔":"𬱖","頗":"颇","領":"领","頜":"颌","頟":"额","頠":"𬱟","頡":"颉","頤":"颐","頦":"颏","頫":"𫖯","頭":"头","頮":"颒","頰":"颊","頲":"颋","頴":"颕","頵":"𫖳","頷":"颔","頸":"颈","頹":"颓","頻":"频","頼":"赖","頽":"颓","顃":"𩖖","顆":"颗","顇":"悴","顋":"腮","題":"题","額":"额","顎":"颚","顏":"颜","顒":"颙","顓":"颛","顔":"颜","顗":"𫖮","願":"愿","顙":"颡","顛":"颠","類":"类","顢":"颟","顥":"颢","顦":"憔","顧":"顾","顫":"颤","顬":"颥","顯":"显","顰":"颦","顱":"颅","顳":"颞","顴":"颧","風":"风","颭":"飐","颮":"飑","颯":"飒","颰":"𩙥","颱":"台","颳":"刮","颶":"飓","颷":"𩙪","颸":"飔","颺":"飏","颻":"飖","颼":"飕","颾":"𩙫","飀":"飗","飃":"飘","飄":"飘","飆":"飙","飈":"飚","飛":"飞","飜":"翻","飠":"饣","飢":"饥","飣":"饤","飤":"饲","飥":"饦","飩":"饨","飪":"饪","飫":"饫","飭":"饬","飯":"饭","飱":"飧","飲":"饮","飴":"饴","飼":"饲","飽":"饱","飾":"饰","飿":"饳","餁":"饪","餃":"饺","餄":"饸","餅":"饼","餈":"糍","餉":"饷","養":"养","餌":"饵","餎":"饹","餏":"饻","餑":"饽","餒":"馁","餓":"饿","餔":"𫗦","餕":"馂","餖":"饾","餗":"𫗧","餘":"馀","餚":"肴","餛":"馄","餜":"馃","餞":"饯","餡":"馅","餦":"𫗠","館":"馆","餭":"𫗮","餱":"糇","餳":"饧","餵":"喂","餶":"馉","餷":"馇","餸":"𩠌","餹":"糖","餺":"馎","餻":"糕","餼":"饩","餽":"馈","餾":"馏","餿":"馊","饁":"馌","饃":"馍","饅":"馒","饈":"馐","饉":"馑","饊":"馓","饋":"馈","饌":"馔","饍":"膳","饑":"饥","饒":"饶","饗":"飨","饘":"𫗴","饜":"餍","饝":"馍","饞":"馋","饢":"馕","馬":"马","馭":"驭","馮":"冯","馱":"驮","馳":"驰","馴":"驯","馹":"驲","馼":"𫘜","駁":"驳","駃":"𫘝","駈":"驱","駉":"𬳶","駎":"𩧨","駐":"驻","駑":"驽","駒":"驹","駓":"𬳵","駔":"驵","駕":"驾","駘":"骀","駙":"驸","駚":"𩧫","駛":"驶","駝":"驼","駟":"驷","駡":"骂","駢":"骈","駧":"𩧲","駩":"𩧴","駪":"𬳽","駭":"骇","駰":"骃","駱":"骆","駶":"𩧺","駸":"骎","駻":"𫘣","駼":"𬳿","駿":"骏","騁":"骋","騂":"骍","騃":"𫘤","騄":"𫘧","騅":"骓","騊":"𫘦","騌":"骔","騍":"骒","騎":"骑","騏":"骐","騐":"验","騑":"𬴂","騔":"𩨀","騖":"骛","騙":"骗","騚":"𩨊","騝":"𩨃","騞":"𬴃","騟":"𩨈","騠":"𫘨","騣":"鬃","騤":"骙","騧":"䯄","騪":"𩨄","騫":"骞","騭":"骘","騮":"骝","騰":"腾","騱":"𫘬","騵":"𫘪","騶":"驺","騷":"骚","騸":"骟","騾":"骡","驀":"蓦","驁":"骜","驂":"骖","驃":"骠","驄":"骢","驅":"驱","驊":"骅","驋":"𩧯","驌":"骕","驍":"骁","驎":"𬴊","驏":"骣","驕":"骄","驗":"验","驘":"骡","驚":"惊","驛":"驿","驟":"骤","驢":"驴","驤":"骧","驥":"骥","驦":"骦","驪":"骊","驫":"骉","骯":"肮","骽":"腿","骾":"鲠","髈":"膀","髏":"髅","髒":"脏","體":"体","髕":"髌","髖":"髋","髥":"髯","髮":"发","鬀":"剃","鬆":"松","鬉":"鬃","鬍":"胡","鬚":"须","鬢":"鬓","鬥":"斗","鬦":"斗","鬧":"闹","鬨":"哄","鬩":"阋","鬪":"斗","鬮":"阄","鬰":"郁","鬱":"郁","鬹":"鬶","魎":"魉","魘":"魇","魚":"鱼","魛":"鱽","魟":"𫚉","魢":"鱾","魥":"𩽹","魨":"鲀","魯":"鲁","魴":"鲂","魷":"鱿","魺":"鲄","鮀":"𬶍","鮁":"鲅","鮃":"鲆","鮄":"𫚒","鮆":"𫚖","鮈":"𬶋","鮊":"鲌","鮋":"鲉","鮍":"鲏","鮎":"鲇","鮐":"鲐","鮑":"鲍","鮒":"鲋","鮓":"鲊","鮚":"鲒","鮜":"鲘","鮝":"鲞","鮞":"鲕","鮟":"𩽾","鮠":"𬶏","鮡":"𬶐","鮣":"䲟","鮦":"鲖","鮪":"鲔","鮫":"鲛","鮭":"鲑","鮮":"鲜","鮰":"𫚔","鮳":"鲓","鮶":"鲪","鮸":"𩾃","鮺":"鲝","鯀":"鲧","鯁":"鲠","鯄":"𩾁","鯆":"𫚙","鯇":"鲩","鯉":"鲤","鯊":"鲨","鯒":"鲬","鯔":"鲻","鯕":"鲯","鯖":"鲭","鯗":"鲞","鯛":"鲷","鯝":"鲴","鯡":"鲱","鯢":"鲵","鯤":"鲲","鯧":"鲳","鯨":"鲸","鯪":"鲮","鯫":"鲰","鯰":"鲶","鯱":"𩾇","鯴":"鲺","鯶":"𩽼","鯷":"鳀","鯻":"𬶟","鯽":"鲫","鯿":"鳊","鰁":"鳈","鰂":"鲗","鰃":"鳂","鰆":"䲠","鰈":"鲽","鰉":"鳇","鰊":"𬶠","鰌":"䲡","鰍":"鳅","鰏":"鲾","鰐":"鳄","鰒":"鳆","鰓":"鳃","鰛":"鳁","鰜":"鳒","鰟":"鳑","鰠":"鳋","鰣":"鲥","鰤":"𫚕","鰥":"鳏","鰧":"䲢","鰨":"鳎","鰩":"鳐","鰭":"鳍","鰮":"鳁","鰱":"鲢","鰲":"鳌","鰳":"鳓","鰵":"鳘","鰶":"𬶭","鰷":"鲦","鰹":"鲣","鰺":"鲹","鰻":"鳗","鰼":"鳛","鰾":"鳔","鱀":"𬶨","鱂":"鳉","鱅":"鳙","鱇":"𩾌","鱈":"鳕","鱉":"鳖","鱒":"鳟","鱔":"鳝","鱖":"鳜","鱗":"鳞","鱘":"鲟","鱚":"𬶮","鱝":"鲼","鱟":"鲎","鱠":"鲙","鱣":"鳣","鱤":"鳡","鱧":"鳢","鱨":"鲿","鱭":"鲚","鱮":"𫚈","鱯":"鳠","鱷":"鳄","鱸":"鲈","鱺":"鲡","鳥":"鸟","鳧":"凫","鳩":"鸠","鳬":"凫","鳲":"鸤","鳳":"凤","鳴":"鸣","鳶":"鸢","鳷":"𫛛","鳼":"𪉃","鳾":"䴓","鴃":"𫛞","鴆":"鸩","鴇":"鸨","鴈":"雁","鴉":"鸦","鴒":"鸰","鴕":"鸵","鴗":"𫁡","鴛":"鸳","鴜":"𪉈","鴝":"鸲","鴞":"鸮","鴟":"鸱","鴣":"鸪","鴦":"鸯","鴨":"鸭","鴯":"鸸","鴰":"鸹","鴲":"𪉆","鴴":"鸻","鴷":"䴕","鴻":"鸿","鴿":"鸽","鵁":"䴔","鵂":"鸺","鵃":"鸼","鵏":"𬷕","鵐":"鹀","鵑":"鹃","鵒":"鹆","鵓":"鹁","鵚":"𪉍","鵜":"鹈","鵝":"鹅","鵞":"鹅","鵟":"𫛭","鵠":"鹄","鵡":"鹉","鵪":"鹌","鵬":"鹏","鵮":"鹐","鵯":"鹎","鵰":"雕","鵲":"鹊","鵶":"鸦","鵷":"鹓","鵾":"鹍","鶄":"䴖","鶇":"鸫","鶉":"鹑","鶊":"鹒","鶒":"𫛶","鶓":"鹋","鶖":"鹙","鶗":"𫛸","鶘":"鹕","鶚":"鹗","鶠":"𬸘","鶡":"鹖","鶥":"鹛","鶩":"鹜","鶪":"䴗","鶬":"鸧","鶯":"莺","鶱":"𬸣","鶲":"鹟","鶴":"鹤","鶹":"鹠","鶺":"鹡","鶻":"鹘","鶼":"鹣","鶿":"鹚","鷀":"鹚","鷁":"鹢","鷂":"鹞","鷄":"鸡","鷈":"䴘","鷊":"鹝","鷓":"鹧","鷔":"𪉑","鷖":"鹥","鷗":"鸥","鷙":"鸷","鷚":"鹨","鷟":"𬸦","鷥":"鸶","鷦":"鹪","鷨":"𪉊","鷫":"鹔","鷭":"𬸪","鷯":"鹩","鷰":"燕","鷲":"鹫","鷳":"鹇","鷴":"鹇","鷸":"鹬","鷹":"鹰","鷺":"鹭","鷽":"鸴","鷿":"䴙","鸂":"㶉","鸇":"鹯","鸋":"𫛢","鸌":"鹱","鸎":"莺","鸏":"鹲","鸑":"𬸚","鸕":"鸬","鸘":"鹴","鸚":"鹦","鸛":"鹳","鸝":"鹂","鸞":"鸾","鹵":"卤","鹹":"咸","鹺":"鹾","鹻":"碱","鹼":"碱","鹽":"盐","麗":"丽","麥":"麦","麨":"𪎊","麩":"麸","麪":"面","麫":"面","麯":"曲","麲":"𪎉","麳":"𪎌","麴":"麹","麵":"面","麼":"么","麽":"么","黃":"黄","黌":"黉","點":"点","黨":"党","黲":"黪","黴":"霉","黶":"黡","黷":"黩","黽":"黾","黿":"鼋","鼃":"蛙","鼇":"鳌","鼈":"鳖","鼉":"鼍","鼕":"咚","鼴":"鼹","齊":"齐","齋":"斋","齎":"赍","齏":"齑","齒":"齿","齔":"龀","齕":"龁","齗":"龂","齘":"𬹼","齙":"龅","齜":"龇","齟":"龃","齠":"龆","齡":"龄","齣":"出","齦":"龈","齧":"啮","齩":"咬","齪":"龊","齬":"龉","齮":"𬺈","齯":"𫠜","齲":"龋","齶":"腭","齷":"龌","齼":"𬺓","龍":"龙","龎":"厐","龐":"庞","龑":"䶮","龔":"龚","龕":"龛","龜":"龟","龭":"𩨎","龯":"𨱆","鿁":"䜤","鿐":"䲤","𠌥":"𠆿","𠏢":"𠉗","𠕂":"再","𠕅":"再","𠞆":"𠛆","𠞰":"剿","𠠎":"𠚳","𡄔":"𠴢","𡄣":"𠵸","𡅏":"𠲥","𡑍":"𫭼","𡑭":"𡋗","𡓾":"𡋀","𡚁":"弊","𡞵":"㛟","𡠹":"㛿","𡢃":"㛠","𡨥":"寇","𡮉":"𡭜","𡮣":"𡭬","𡻕":"岁","𡾱":"㟜","𢣏":"㦈","𢣚":"𢘝","𢣭":"𢘞","𢶫":"𢫞","𢷮":"𢫊","𢹿":"𢬦","𣙎":"㭣","𣙜":"榷","𣝕":"𣘷","𣞁":"㮠","𣞻":"𣘓","𣠲":"𣑶","𣯴":"𣭤","𣯶":"毶","𣾷":"㳢","𣿉":"𣶫","𤁣":"𣺽","𤋮":"熙","𤒎":"𤊀","𤨏":"琐","𤪺":"㻘","𤫩":"㻏","𤱈":"亩","𤳸":"𤳄","𤷽":"㾡","𤸫":"𤶧","𤺥":"瘩","𥌃":"𥅘","𥕥":"𥐰","𥖅":"𥐯","𥗽":"𬒗","𥢢":"䅪","𥨐":"𥧂","𥵃":"𥱔","𥵊":"𥭉","𥵜":"䇚","𥸠":"𥮋","𥼽":"𥹥","𥽖":"𥺇","𥿊":"𦈈","𦂅":"𦈒","𦃄":"𦈗","𦊱":"挂","𦍑":"羌","𦕈":"眇","𦢈":"𣍨","𦣎":"𦟗","𦪽":"𦨩","𦵏":"葬","𧍕":"䖼","𧔥":"𧒭","𧜗":"䘞","𧜵":"䙊","𧝞":"䘛","𧩙":"䜥","𧳟":"𧳕","𧵳":"䞌","𧶔":"𧹓","𧶧":"䞎","𨄣":"𨀱","𨅍":"𨁴","𨇁":"𧿈","𨇞":"𨅫","𨈊":"𨂺","𨈌":"𨄄","𨊰":"䢀","𨊸":"䢁","𨊻":"𨐆","𨋢":"䢂","𨎮":"𨐉","𨏠":"𨐇","𨏥":"𨐊","𨤻":"𨤰","𨥛":"𨱀","𨦫":"䦀","𨧀":"𬭊","𨧜":"䦁","𨧱":"𨱊","𨨏":"𬭛","𨫒":"𨱐","𨭆":"𬭶","𨭎":"𬭳","𨮂":"𨱕","𨯅":"䥿","𨳑":"𨸁","𨳕":"𨸀","𨴗":"𨸅","𨵩":"𨸆","𨵸":"𨸇","𨶀":"𨸉","𨶏":"𨸊","𨶮":"𨸌","𨶲":"𨸋","𨷲":"𨸎","𨽏":"𨸘","𨽻":"隶","𩎢":"𩏾","𩏪":"𩏽","𩓐":"脖","𩓣":"𩖕","𩗀":"𩙦","𩗗":"飓","𩗡":"𩙧","𩘀":"𩙩","𩘝":"𩙭","𩘹":"𩙨","𩘺":"𩙬","𩙈":"𩙰","𩚛":"𩟿","𩚥":"𩠀","𩚵":"𩠁","𩛆":"𩠂","𩛩":"𩠃","𩜇":"𩠉","𩜦":"𩠆","𩜵":"𩠊","𩝔":"𩠋","𩞄":"𩠎","𩞦":"𩠏","𩞯":"䭪","𩟐":"𩠅","𩠴":"𩠠","𩡺":"𩧦","𩢡":"𩧬","𩢴":"𩧵","𩢸":"𩧳","𩢾":"𩧮","𩣏":"𩧶","𩣑":"䯃","𩣵":"𩧻","𩣺":"𩧼","𩤊":"𩧩","𩤙":"𩨆","𩤲":"𩨉","𩤸":"𩨅","𩥄":"𩨋","𩥇":"𩨍","𩥉":"𩧱","𩥑":"𩨌","𩧆":"𩨐","𩭙":"𩬣","𩯳":"𩯒","𩰀":"𩬤","𩳤":"𩲒","𩵩":"𩽺","𩵹":"𩽻","𩶘":"䲞","𩶰":"𩽿","𩶱":"𩽽","𩷰":"𩾄","𩸃":"𩾅","𩸦":"𩾆","𩽇":"𩾎","𩿪":"𪉄","𪀦":"𪉅","𪀾":"𪉋","𪁈":"𪉉","𪁖":"𪉌","𪂆":"𪉎","𪃍":"𪉐","𪃏":"𪉏","𪄆":"𪉔","𪄕":"𪉒","𪇳":"𪉕","𪈼":"𪉓","𪋿":"𪎍","𪔵":"𪔭","𪘀":"𪚏","𪘯":"𪚐","𰻞":"𰻝","『":"‘","』":"’","「":"“","｢":"“","」":"”","｣":"”","。陞":"。升","一釐":"一厘","上昇":"上升","不穀":"不穀","專著":"专著","乾阳":"乾阳","乾陽":"乾阳","五箇山":"五箇山","仇讎":"仇雠","以微知著":"以微知著","仰屋著書":"仰屋著书","彷彿":"仿佛","伊東豊雄":"伊东丰雄","夥計":"伙计","何光暐":"何光暐","佛頭著糞":"佛头著粪","偵蒐":"侦搜","倖一郎":"倖一郎","倖田":"倖田","候覆":"候复","藉助":"借助","藉口":"借口","藉手":"借手","藉故":"借故","藉機":"借机","藉此":"借此","藉由":"借由","藉端":"借端","藉詞":"借词","傒倖":"傒倖","先名後姓":"先名后姓","兒宽":"兒宽","兒寬":"兒宽","六么":"六幺","蘭質薰心":"兰质薰心","內聯陞":"内联升","憑藉":"凭借","擊沈":"击沉","初昇":"初升","利欲薰心":"利欲薰心","剋了":"剋了","剋架":"剋架","剖釐":"剖厘","陞為":"升为","陞了":"升了","昇仙":"升仙","陞任":"升任","昇華":"升华","昇天":"升天","陞官":"升官","昇平":"升平","昇汞":"升汞","陞用":"升用","陞補":"升补","昇起":"升起","陞遷":"升迁","昇降":"升降","卓著":"卓著","博和託":"博和讬","歷陞":"历升","釐改":"厘改","釐整":"厘整","釐正":"厘正","釐毫":"厘毫","釐清":"厘清","釐米":"厘米","釐訂":"厘订","釐革":"厘革","原著":"原著","又陞":"又升","反反覆覆":"反反复复","反覆":"反复","可穿著":"可穿著","吃衣著飯":"吃衣著饭","合著":"合著","同陞和":"同升和","名著":"名著","吳克羣":"吴克羣","吴克羣":"吴克羣","諠譁":"喧哗","回覆":"回复","土著":"土著","墨瀋":"墨渖","覆審":"复审","覆查":"复查","覆核":"复核","覆檢":"复检","復甦":"复苏","大麴":"大曲","奧區":"奧区","如瀋":"如渖","姓么":"姓幺","子餘":"子馀","宏碁":"宏碁","官陞":"官升","尋陞":"寻升","將軍抽俥":"将军抽俥","將軍抽車":"将军抽車","爾冬陞":"尔冬升","侷促":"局促","跼促":"局促","侷限":"局限","跼限":"局限","山崎闇斋":"山崎闇斋","山崎闇齋":"山崎闇斋","岳託":"岳讬","峯會":"峰会","巔峯":"巅峰","巨著":"巨著","乾乾淨淨":"干干净净","乾乾脆脆":"干干脆脆","乾泉水":"干泉水","年陞":"年升","么九":"幺九","么二三":"幺二三","么兒":"幺儿","么元":"幺元","么鳳":"幺凤","么半":"幺半","么叔":"幺叔","么喝":"幺喝","么女":"幺女","么媽":"幺妈","么妹":"幺妹","么姓":"幺姓","么姨":"幺姨","么娘":"幺娘","么孃":"幺娘","么子":"幺子","么弟":"幺弟","么正":"幺正","么氏":"幺氏","么爺":"幺爷","么爸":"幺爸","么爹":"幺爹","么篇":"幺篇","么舅":"幺舅","么蛾子":"幺蛾子","么雞":"幺鸡","么麼":"幺麽","幺麽":"幺麽","慶餘":"庆馀","彰明較著":"彰明较著","待覆":"待复","後姓":"後姓","徵羽":"徵羽","慫慂":"怂恿","恩威並著":"恩威并著","噁心":"恶心","情蒐":"情搜","情鍾":"情钟","惏悷":"惏悷","惏慄":"惏慄","慘澹":"惨淡","成效顯著":"成效显著","成績顯著":"成绩显著","所鍾":"所钟","手鍊":"手链","扞格":"扞格","執著":"执著","批覆":"批复","拉鍊":"拉链","拙著":"拙著","拚却":"拚却","拚卻":"拚却","拚弃":"拚弃","拚棄":"拚弃","拚生尽死":"拚生尽死","拚生盡死":"拚生尽死","拾瀋":"拾渖","挨剋":"挨剋","振乾":"振乾","提昇":"提升","蒐錄":"搜录","蒐索":"搜索","蒐羅":"搜罗","蒐藏":"搜藏","蒐證":"搜证","蒐購":"搜购","蒐輯":"搜辑","蒐採":"搜采","蒐采":"搜采","蒐集":"搜集","搥打":"搥打","搥胸頓足":"搥胸顿足","撰著":"撰著","效果顯著":"效果显著","文徵明":"文徵明","觔斗":"斤斗","新著":"新著","於世成":"於世成","於之瑩":"於之莹","於之莹":"於之莹","於乎":"於乎","於乙于同":"於乙于同","於乙宇同":"於乙宇同","於于同":"於于同","於哲":"於哲","於夫罗":"於夫罗","於夫羅":"於夫罗","於姓":"於姓","於宇同":"於宇同","於崇文":"於崇文","於志賀":"於志贺","於志贺":"於志贺","於戏":"於戏","於戲":"於戏","於梨华":"於梨华","於梨華":"於梨华","於氏":"於氏","於潜":"於潜","於潛縣":"於潜县","於潜县":"於潜县","於祥玉":"於祥玉","於菟":"於菟","於賢德":"於贤德","於除鞬":"於除鞬","施讎":"施雠","無言不讎":"无言不雠","曠若發矇":"旷若发矇","崑崙":"昆仑","崑岡":"昆冈","崑劇":"昆剧","崑山":"昆山","崑嵛":"昆嵛","崑承湖":"昆承湖","崑曲":"昆曲","崑玉市":"昆玉市","崑腔":"昆腔","崑蘇":"昆苏","崑調":"昆调","昭著":"昭著","顯著":"显著","顯著地":"显著地","顯著地位":"显著地位","顯著性":"显著性","顯著成績":"显著成绩","顯著效果":"显著效果","顯著特點":"显著特点","晉陞":"晋升","暗闇":"暗闇","麴黴":"曲霉","月陞":"月升","朱有燉":"朱有燉","朱淛":"朱淛","朴於宇同":"朴於宇同","李澤鉅":"李泽钜","李祕":"李祕","李譔":"李譔","柳詒徵":"柳诒徵","柳诒徵":"柳诒徵","校讎":"校雠","楈枒":"楈枒","樊於期":"樊於期","殘瀋":"残渖","慇勤":"殷勤","慇懃":"殷勤","比較顯著":"比较显著","毫釐":"毫厘","氆氌":"氆氌","沈沒":"沉没","沈澱":"沉淀","沈積":"沉积","沈船":"沉船","沈重":"沉重","氾濫":"泛滥","洗鍊":"洗练","瀋液":"渖液","满拚自尽":"满拚自尽","滿拚自盡":"满拚自尽","靈崑":"灵昆","薰習":"熏习","薰心":"熏心","薰沐":"熏沐","薰陶":"熏陶","薰香":"熏香","獨鍾":"独钟","王餘魚":"王馀鱼","甚夥":"甚夥","療效顯著":"疗效显著","白瀋":"白渖","皁保":"皁保","目劄":"目劄","直昇":"直升","盼覆":"盼复","睹微知著":"睹微知著","瞭台":"瞭台","瞭臺":"瞭台","瞭望":"瞭望","矇眬":"矇眬","矇矓":"矇眬","石碁":"石碁","石碁鎮":"石碁镇","硃山湖":"硃山湖","碩託":"硕讬","鹼菜":"硷菜","碁圣":"碁圣","碁聖":"碁圣","碁所":"碁所","祕宜":"祕宜","穀旦":"穀旦","穀梁":"穀梁","穀水":"穀水","穀阳":"穀阳","穀陽":"穀阳","穿著者":"穿着者","竹昇":"竹升","答覆":"答复","米泽瑠美":"米泽瑠美","米瀋":"米渖","餬口":"糊口","絪縕":"絪缊","繙㠾":"繙㠾","線國安":"缐国安","線姓":"缐姓","編著":"编著","老么":"老幺","肘手鍊足":"肘手链足","蘇崑":"苏昆","甦醒":"苏醒","苧烯":"苧烯","薴烯":"苧烯","蘋婆":"苹婆","蘋果":"苹果","荠苧":"荠苧","榮陞":"荣升","著書":"著书","著書立說":"著书立说","著作":"著作","著名":"著名","著錄":"著录","著錄規則":"著录规则","著文":"著文","著有":"著有","著稱":"著称","著者":"著者","著身":"著身","著述":"著述","蔡絛":"蔡絛","行餘":"行馀","西崑":"西昆","覆蓋":"覆盖","見微知著":"见微知著","見著":"见著","視微知著":"视微知著","言幾析理":"言幾析理","諲譔":"諲譔","譩譆":"譩譆","託庸":"讬庸","託恩多":"讬恩多","託麻":"讬麻","論著":"论著","譯著":"译著","謝肇淛":"谢肇淛","谢肇淛":"谢肇淛","躊躇滿志":"踌躇滿志","較著":"较著","近角聪信":"近角聪信","造麴":"造曲","遺著":"遗著","鄭蘋如":"郑苹如","酒麴":"酒曲","醉瀋":"醉渖","醯壶":"醯壶","醯壺":"醯壶","醯酱":"醯酱","醯醬":"醯酱","醯醋":"醯醋","醯醢":"醯醢","醯雞":"醯鸡","醯鸡":"醯鸡","重覆":"重复","金鍊":"金链","鍾南山":"钟南山","鍾情":"钟情","鍾意":"钟意","鍾靈":"钟灵","鍾愛":"钟爱","鍾祥":"钟祥","鐵鍊":"铁链","鉸鍊":"铰链","銀鍊":"银链","鍊子":"链子","鍊條":"链条","鍊狀":"链状","鍊表":"链表","鍊鎖":"链锁","鍊錘":"链锤","鎖鍊":"锁链","闇公":"闇公","閻懷禮":"闫怀礼","陰沈":"阴沉","阿部正瞭":"阿部正瞭","陆徵祥":"陆徵祥","陸徵祥":"陆徵祥","陈元扞":"陈元扞","陳元扞":"陈元扞","讎夷":"雠夷","讎定":"雠定","讎校":"雠校","讎正":"雠正","讎問":"雠问","雪鍊":"雪链","頂峯":"顶峰","項鍊":"项链","飛昇":"飞升","飭令":"飭令","飽託":"饱讬","餘慶":"馀庆","餘瀋":"馀渖","馬鞌":"马鞍","高昇":"高升","高陞":"高升","鬱姓":"鬱姓","鬱氏":"鬱氏","魏徵":"魏徵","麼氏":"麽氏","麽氏":"麽氏","黃麴毒素":"黄曲毒素","黃霄雲":"黄霄雲","黄霄雲":"黄霄雲","龍鍾":"龙钟","鿓":"鿒","，陞":"，升"};const $zh2TW={"0字节":"0位元組","0杆":"0桿","1字节":"1位元組","1杆":"1桿","2字节":"2位元組","2杆":"2桿","3字节":"3位元組","3杆":"3桿","4字节":"4位元組","4杆":"4桿","5字节":"5位元組","5杆":"5桿","6字节":"6位元組","6杆":"6桿","7字节":"7位元組","7杆":"7桿","8字节":"8位元組","8杆":"8桿","9字节":"9位元組","9杆":"9桿","甲型肝炎":"A型肝炎","甲肝":"A肝","乙型肝炎":"B型肝炎","乙肝":"B肝","丙型肝炎":"C型肝炎","丙肝":"C肝","IP地址":"IP位址","乔戈里峰":"K2","·威尔士":"·威爾士","·威爾士":"·威爾士","一杆":"一桿","七杆":"七桿","三杆":"三桿","三极管":"三極體","三極管":"三極體","达累斯萨拉姆":"三蘭港","上落客":"上下客","上樑":"上梁","下樑":"下梁","落車":"下車","卑詩省":"不列顛哥倫比亞省","不來梅":"不萊梅","不来梅":"不萊梅","幺":"么","以太网":"乙太網","九杆":"九桿","了結他":"了結他","二手烟":"二手菸","二手煙":"二手菸","二杆":"二桿","二极管":"二極體","二極管":"二極體","交互设计":"互動設計","五杆":"五桿","阿塞拜疆":"亞塞拜然","阿斯旺":"亞斯文","亚里士多德":"亞里斯多德","亞里士多德":"亞里斯多德","人工智能":"人工智慧","人机交互":"人機互動","行人路":"人行道","石勒苏益格":"什勒斯維希","石勒蘇益格":"什勒斯維希","伊利诺伊州":"伊利諾州","伊斯坦布尔":"伊斯坦堡","伊斯坦布爾":"伊斯坦堡","伊斯兰堡":"伊斯蘭瑪巴德","伊斯蘭堡":"伊斯蘭瑪巴德","埃博拉":"伊波拉","伊丽莎白":"伊莉莎白","伊利沙伯二世":"伊莉莎白二世","俯卧撑":"伏地挺身","掌上壓":"伏地挺身","伯明翰":"伯明罕","服务器":"伺服器","佛罗伦萨":"佛羅倫斯","操作系统":"作業系統","系数":"係數","避孕套":"保險套","傅里叶":"傅立葉","光盘":"光碟","光驱":"光碟機","开普勒":"克卜勒","開普勒":"克卜勒","克罗地亚":"克羅埃西亞","克羅地亞":"克羅埃西亞","克里斯托弗":"克里斯多福","全角":"全形","万维网":"全球資訊網","全角度":"全角度","全角色":"全角色","八杆":"八桿","公共交通":"公共運輸","六杆":"六桿","凯瑟琳":"凱薩琳","嘉芙蓮":"凱薩琳","划着独木舟":"划著獨木舟","划着竹筏":"划著竹筏","划着船":"划著船","打印":"列印","列支敦士登":"列支敦斯登","前波美拉尼亚":"前波莫瑞","前波美拉尼亞":"前波莫瑞","加蓬":"加彭","加泰罗尼亚":"加泰隆尼亞","加泰羅尼亞":"加泰隆尼亞","加沙地带":"加薩走廊","加沙地帶":"加薩走廊","包豪斯":"包浩斯","局域网":"區域網","局域网络":"區域網路","十杆":"十桿","特立尼达和多巴哥":"千里達及托巴哥","特立尼達和多巴哥":"千里達及托巴哥","南斯拉夫联盟共和国":"南斯拉夫聯邦共和國","南斯拉夫聯盟共和國":"南斯拉夫聯邦共和國","南希·佩洛西":"南西·裴洛西","蘭茜·佩洛西":"南西·裴洛西","卡斯特罗":"卡斯楚","卡塔尔":"卡達","卡塔爾":"卡達","铆足":"卯足","打印机":"印表機","打印機":"印表機","厄利垂亚":"厄利垂亞","厄立特里亚":"厄利垂亞","厄立特里亞":"厄利垂亞","厄瓜多":"厄瓜多","厄瓜多尔":"厄瓜多","厄瓜多爾":"厄瓜多","源代码":"原始碼","圆珠笔":"原子筆","反烟":"反菸","反煙":"反菸","可卡因":"古柯鹼","便携式":"可攜式","叱咤":"叱吒","叱咤9":"叱咤9","叱咤M":"叱咤M","叱咤叱":"叱咤叱","叱咤咤":"叱咤咤","叱咤樂壇":"叱咤樂壇","斯坦福大学":"史丹福大學","斯皮尔伯格":"史匹柏","斯特劳斯":"史特勞斯","斯威士兰":"史瓦帝尼","斯威士蘭":"史瓦帝尼","斯蒂芬":"史蒂芬","斯大林":"史達林","斯科普里":"史高比耶","士碌架":"司諾克","斯诺克":"司諾克","結他":"吉他","乞力馬札羅":"吉力馬札羅","乞力马扎罗":"吉力馬札羅","吉布堤":"吉布地","吉布提":"吉布地","基里巴斯":"吉里巴斯","图瓦卢":"吐瓦魯","圖瓦盧":"吐瓦魯","吸烟":"吸菸","吸煙":"吸菸","吕宋烟":"呂宋菸","呂宋煙":"呂宋菸","格丁根":"哥廷根","哥特式":"哥德式","哥斯达黎加":"哥斯大黎加","哥斯達黎加":"哥斯大黎加","唐纳德·特朗普":"唐納·川普","當勞·特朗普":"唐納·川普","當奴·特朗普":"唐納·川普","卡拉奇":"喀拉蚩","乔治·奥威尔":"喬治·歐威爾","佐治亚":"喬治亞","佐治亞":"喬治亞","格魯吉亞":"喬治亞","格鲁吉亚":"喬治亞","单反相机":"單眼相機","單鏡反光機":"單眼相機","嘯咤":"嘯吒","四杆":"四桿","圈樑":"圈梁","图卢兹":"土魯斯","圖盧茲":"土魯斯","圭亚那大区":"圭亞那大區","圭亚那省":"圭亞那省","戛纳":"坎城","堪培拉":"坎培拉","坦桑尼亚":"坦尚尼亞","坦桑尼亞":"坦尚尼亞","端口":"埠","首席执行官":"執行長","报道":"報導","塑料袋":"塑膠袋","塞舌尔":"塞席爾","塞舌爾":"塞席爾","萨拉热窝":"塞拉耶佛","薩拉熱窩":"塞拉耶佛","塞尔维亚和黑山":"塞爾維亞與蒙特內哥羅","塞爾維亞和黑山":"塞爾維亞與蒙特內哥羅","塞爾維亞與蒙特內哥羅":"塞爾維亞與蒙特內哥羅","塞维利亚":"塞維亞","西維爾":"塞維亞","塞黑":"塞蒙","多美和普林西比":"多美普林西比","塔希提":"大溪地","共和联邦":"大英國協","英联邦":"大英國協","英聯邦":"大英國協","太空飛行員":"太空人","宇航员":"太空人","穿梭機":"太空梭","航天飞机":"太空梭","宇航服":"太空衣","航天器":"太空飛行器","尼日利亚":"奈及利亞","尼日利亞":"奈及利亞","內羅畢":"奈洛比","内罗毕":"奈洛比","奥拉夫·朔尔茨":"奧拉夫·蕭茲","奧拉夫·朔爾茨":"奧拉夫·蕭茲","忌廉":"奶油","荷里活":"好萊塢","威廉姆斯":"威廉士","威斯特法伦":"威斯伐倫","威斯特法倫":"威斯伐倫","威士顿康星":"威斯康辛","威尔士":"威爾斯","威爾士":"威爾斯","西部数据":"威騰電子","存盘":"存檔","孟德爾遜":"孟德爾頌","门德尔松":"孟德爾頌","安哈尔特":"安哈特","安哈爾特":"安哈特","安提瓜":"安地卡","安提瓜和巴布达":"安地卡及巴布達","安提瓜和巴布達":"安地卡及巴布達","洪都拉斯":"宏都拉斯","宿务":"宿霧","密歇根":"密西根","老挝人民民主共和国":"寮人民民主共和國","老撾人民民主共和國":"寮人民民主共和國","老挝保护国":"寮保護國","老撾保護國":"寮保護國","老挝":"寮國","老撾":"寮國","老挝语":"寮語","老撾語":"寮語","波里活":"寶萊塢","对着干":"對著幹","高峰时段":"尖峰時段","高峰时间":"尖峰時間","贊比亞":"尚比亞","赞比亚":"尚比亞","尼克松":"尼克森","尼日尔":"尼日","尼日爾":"尼日","屋樑":"屋梁","山樑":"山梁","雅马哈":"山葉","巴厘":"峇里","特朗普":"川普","机床":"工具機","機床":"工具機","珍寶客機":"巨無霸客機","巴塞罗那":"巴塞隆納","巴塞隆拿":"巴塞隆納","巴布亚新几内亚":"巴布亞紐幾內亞","巴布亞新幾內亞":"巴布亞紐幾內亞","巴士拉":"巴斯拉","巴巴多斯":"巴貝多","布基納法索":"布吉納法索","布基纳法索":"布吉納法索","布什":"布希","布殊":"布希","布拉迪斯拉发":"布拉提斯拉瓦","布拉迪斯拉發":"布拉提斯拉瓦","勃兰登堡":"布蘭登堡","勃蘭登堡":"布蘭登堡","布里斯托尔":"布里斯托","布隆方丹":"布隆泉","希拉克略":"希拉克略","希拉莉":"希拉蕊","希拉里":"希拉蕊","希特拉":"希特勒","残疾人奥林匹克":"帕拉林匹克","殘疾人奧林匹克":"帕拉林匹克","残奥":"帕運","殘奧":"帕運","巴尔米拉环礁":"帕邁拉環礁","帕劳":"帛琉","帕勞":"帛琉","希拉克":"席哈克","账":"帳","干着急":"干著急","干着":"幹著","畿內亞":"幾內亞","几内亚比绍":"幾內亞比索","幾內亞比紹":"幾內亞比索","比利牛斯":"庇里牛斯","库尔德人":"庫德人","庫爾德人":"庫德人","库尔德斯坦":"庫德斯坦","庫爾德斯坦":"庫德斯坦","庫爾德族":"庫德斯坦","库尔德族":"庫德族","康涅狄格":"康乃狄克","约翰斯顿岛":"強斯頓環礁","汇编":"彙編","形而上学":"形上學","形而上學":"形上學","得克萨斯":"德克薩斯","得克薩斯":"德克薩斯","德累斯頓":"德勒斯登","德累斯顿":"德勒斯登","德里达":"德希達","特拉华":"德拉瓦","特拉華":"德拉瓦","文翠珊":"德蕾莎·梅伊","特蕾莎·梅":"德蕾莎·梅伊","快闪存储器":"快閃記憶體","闪存":"快閃記憶體","恩賈梅納":"恩將納","恩贾梅纳":"恩將納","情景喜剧":"情境喜劇","處境喜劇":"情境喜劇","想象":"想像","愛德文":"愛德溫","艾滋":"愛滋","艾奧瓦":"愛荷華","爱德华州":"愛達荷州","应用程序":"應用程式","懸樑":"懸梁","懸臂樑":"懸臂梁","戈尔巴乔夫":"戈巴契夫","戈爾巴喬夫":"戈巴契夫","戒烟":"戒菸","戒煙":"戒菸","戴克里先":"戴克里先","打印度":"打印度","扛大樑":"扛大梁","披头士":"披頭四","抽烟":"抽菸","抽煙":"抽菸","拒烟":"拒菸","拒煙":"拒菸","挑大樑":"挑大梁","卷烟":"捲菸","捲煙":"捲菸","積架":"捷豹","控件":"控制項","推杆":"推桿","第比利斯":"提比里西","挥杆":"揮桿","揮杆":"揮桿","搜索引擎":"搜尋引擎","莫士比港":"摩斯比港","莫尔斯比港":"摩斯比港","摩根士丹利":"摩根史坦利","阿拉伯撒哈拉":"撒拉威阿拉伯","台球":"撞球","攻打":"攻打","数字化":"數位化","數碼化":"數位化","数字技术":"數位技術","數碼技術":"數位技術","数字照相机":"數位照相機","数码照相机":"數位照相機","數碼照相機":"數位照相機","数码相机":"數位相機","數碼相機":"數位相機","数字信号":"數位訊號","數碼訊號":"數位訊號","数字电视":"數位電視","數碼電視":"數位電視","数字音乐":"數位音樂","數碼音樂":"數位音樂","調制解調器":"數據機","调制解调器":"數據機","斯堪的納維亞":"斯堪地那維亞","斯堪的纳维亚":"斯堪地那維亞","斯洛文尼亚":"斯洛維尼亞","斯洛文尼亞":"斯洛維尼亞","新罕布什尔":"新罕布夏","施罗德":"施洛德","旱烟":"旱菸","旱煙":"旱菸","太阳微系统":"昇陽電腦","太陽電腦":"昇陽電腦","比勒陀利":"普利托利","普利策":"普利茲","普利策奖":"普立茲獎","芯片":"晶片","智能卡":"智慧卡","智能手机":"智慧型手機","智能手機":"智慧型手機","智能电话":"智慧型電話","智能電話":"智慧型電話","智能机器人":"智慧機器人","智能機械人":"智慧機器人","知識產權":"智慧財產權","知识产权":"智慧財產權","萌島":"曼島","马恩岛":"曼島","木杆":"木桿","木樑":"木梁","尾班車":"末班車","列奥纳多":"李奧納多","杜塞尔多夫":"杜塞道夫","杜塞爾多夫":"杜塞道夫","迪拜":"杜拜","汤加王国":"東加王國","湯加王國":"東加王國","东盟":"東協","亚细安":"東協","東盟":"東協","东南亚国家联盟":"東南亞國家協會","東南亞國家聯盟":"東南亞國家協會","柏林墙":"柏林圍牆","柏林牆":"柏林圍牆","乍得":"查德","查韦斯":"查維茲","克林頓":"柯林頓","克林顿":"柯林頓","柱樑":"柱梁","戴卓爾":"柴契爾","撒切尔":"柴契爾","格仔山":"格仔山","格仔":"格子","格林納丁斯":"格瑞那丁","格林纳丁斯":"格瑞那丁","格林納達":"格瑞那達","格林纳达":"格瑞那達","桃金娘":"桃金孃","台式电脑":"桌上型電腦","乒乓":"桌球","乒乓球":"桌球","杆弟":"桿弟","杆身":"桿身","杆头":"桿頭","杆頭":"桿頭","樑上":"梁上","樑柱":"梁柱","梅尔·吉布森":"梅爾·吉勃遜","梵高":"梵谷","棟樑":"棟梁","桑巴舞":"森巴舞","榴莲":"榴槤","榴蓮":"榴槤","枪支":"槍枝","标准杆":"標準桿","標準杆":"標準桿","毛里求斯":"模里西斯","毛里裘斯":"模里西斯","樸茨茅夫":"樸茨茅斯","樹樑":"樹梁","橋樑":"橋梁","機械人":"機器人","几率":"機率","電單車":"機車","橫樑":"橫梁","枱":"檯","字段":"欄位","奥巴马":"歐巴馬","奧巴馬":"歐巴馬","正在叱咤":"正在叱咤","圣佩德罗苏拉":"汕埠","文莱":"汶萊","沙律":"沙拉","沙地阿拉伯":"沙烏地阿拉伯","沙特阿拉伯":"沙烏地阿拉伯","法属圭亚那":"法屬圭亞那","波斯尼亚":"波士尼亞","波斯尼亞":"波士尼亞","波斯尼亚和黑塞哥维那":"波士尼亞與赫塞哥維納","波斯尼亞和黑塞哥維那":"波士尼亞與赫塞哥維納","博茨瓦納":"波札那","博茨瓦纳":"波札那","博索納羅":"波索納洛","博索纳罗":"波索納洛","波黑":"波赫","洋烟":"洋菸","洋煙":"洋菸","帕特里克":"派屈克","海洛英":"海洛因","侯賽因":"海珊","侯赛因":"海珊","温得和克":"溫荷克","溫得和克":"溫荷克","鼠标":"滑鼠","满杆":"滿桿","汉诺威":"漢諾瓦","漢诺威":"漢諾瓦","泽连斯基":"澤倫斯基","澤連斯基":"澤倫斯基","乌冬面":"烏龍麵","烤烟":"烤菸","烤煙":"烤菸","無樑樓蓋":"無梁樓蓋","无烟日":"無菸日","無煙日":"無菸日","无烟环境":"無菸環境","無煙環境":"無菸環境","烟熏":"煙燻","首席运营官":"營運長","熏烤":"燻烤","熏肉":"燻肉","熏黑":"燻黑","版权信息":"版權資訊","疯牛病":"狂牛症","瘋牛症":"狂牛症","鐵托":"狄托","铁托":"狄托","塞拉利昂":"獅子山","独联体":"獨立國協","獨聯體":"獨立國協","独立国家联合体":"獨立國家國協","獨立國家聯合體":"獨立國家國協","多民族玻利維亞國":"玻利維亞多民族國","多民族玻利维亚国":"玻利維亞多民族國","波利尼西亚":"玻里尼西亞","波利尼西亞":"玻里尼西亞","本傑明":"班傑明","本杰明":"班傑明","球杆":"球桿","理查德":"理察","卢塞恩":"琉森","危地馬拉":"瓜地馬拉","危地马拉":"瓜地馬拉","巴伦西亚":"瓦倫西亞","華倫西亞":"瓦倫西亞","冈比亚":"甘比亞","岡比亞":"甘比亞","肯尼迪":"甘迺迪","留尼汪":"留尼旺","毕加索":"畢卡索","综合征":"症候群","徵狀":"症狀","勃朗宁":"白朗寧","百慕大":"百慕達","卢旺达":"盧安達","盧旺達":"盧安達","真人騷":"真人秀","睾":"睪","知識產權局":"知識產權局","知识产权局":"知識產權局","知識產權署":"知識產權署","知识产权署":"知識產權署","石樑":"石梁","硅":"矽","硅藻":"硅藻","硬盘":"硬碟","硬件":"硬體","盘片":"碟片","磁盘":"磁碟","磁道":"磁軌","禁烟":"禁菸","禁煙":"禁菸","福尔马林":"福馬林","福爾馬林":"福馬林","私烟":"私菸","私煙":"私菸","程序员":"程式設計師","编程语言":"程式語言","空中客车":"空中巴士","空气质量":"空氣品質","空氣質素":"空氣品質","突尼斯":"突尼西亞","绑紧跳":"笨豬跳","蹦极跳":"笨豬跳","短信":"簡訊","約翰內斯堡":"約翰尼斯堡","约翰内斯堡":"約翰尼斯堡","纽黑文":"紐哈芬","新奥尔良":"紐奧良","新奧爾良":"紐奧良","新西兰":"紐西蘭","新西蘭":"紐西蘭","紙煙":"紙菸","纸烟":"紙菸","索尔仁尼琴":"索忍尼辛","索贊尼辛":"索忍尼辛","所罗门群岛":"索羅門群島","所羅門群島":"索羅門群島","索馬里":"索馬利亞","索马里":"索馬利亞","索馬里蘭":"索馬利蘭","索马里兰":"索馬利蘭","維爾京群島":"維京群島","维尔京群岛":"維京群島","弗吉尼亚":"維吉尼亞","佛得角":"維德角","维特根斯坦":"維根斯坦","網絡遊戲":"網路遊戲","网络游戏":"網路遊戲","互联网":"網際網路","互联网络":"網際網路","互聯網":"網際網路","互聯網絡":"網際網路","因特网":"網際網路","繞樑":"繞梁","系着":"繫著","卢瓦尔":"羅亞爾","盧瓦爾":"羅亞爾","卢浮宫":"羅浮宮","樂行童軍":"羅浮童軍","意大利":"義大利","意大利面":"義大利麵","意裔":"義裔","昂山素姬":"翁山蘇姬","昂山素季":"翁山蘇姬","圣基茨和尼维斯":"聖克里斯多福及尼維斯","聖吉斯納域斯":"聖克里斯多福及尼維斯","聖佐治":"聖喬治","圣地亚哥":"聖地牙哥","圣迭戈":"聖地牙哥","厄尔尼诺":"聖嬰","厄爾尼諾":"聖嬰","圣文森特和格林纳丁斯":"聖文森及格瑞那丁","聖文森特和格林納丁斯":"聖文森及格瑞那丁","圣赫勒拿":"聖赫倫那","圣卢西亚":"聖露西亞","聖盧西亞":"聖露西亞","圣马力诺":"聖馬利諾","聖馬力諾":"聖馬利諾","肯尼亚":"肯亞","氨基酸":"胺基酸","脊樑":"脊梁","自由泳":"自由式","三藩市":"舊金山","艾森豪威尔":"艾森豪","埃菲尔":"艾菲爾","阿里埃勒·沙龍":"艾里爾·夏隆","阿里埃勒·沙龙":"艾里爾·夏隆","帕塔亚":"芭達亞","黎克特制":"芮氏","里氏0":"芮氏0","里氏1":"芮氏1","里氏2":"芮氏2","里氏3":"芮氏3","里氏4":"芮氏4","里氏5":"芮氏5","里氏6":"芮氏6","里氏7":"芮氏7","里氏8":"芮氏8","里氏9":"芮氏9","里氏地震规模":"芮氏地震規模","里氏规模":"芮氏規模","里氏震级":"芮氏規模","当且仅当":"若且唯若","味美思":"苦艾酒","毛里塔尼亚":"茅利塔尼亞","毛里塔尼亞":"茅利塔尼亞","霍尔木兹":"荷姆茲","霍爾木茲":"荷姆茲","霍尼亚拉":"荷尼阿拉","霍尼亞拉":"荷尼阿拉","荷里活廣場":"荷里活廣場","荷里活道":"荷里活道","莫桑比克":"莫三比克","瓦文萨":"華勒沙","華里沙":"華勒沙","瓦格纳":"華格納","烟具":"菸具","煙具":"菸具","烟品":"菸品","煙品":"菸品","烟嘴":"菸嘴","煙嘴":"菸嘴","烟卷":"菸捲","煙捲":"菸捲","烟斗":"菸斗","煙斗":"菸斗","烟民":"菸民","煙民":"菸民","烟灰":"菸灰","煙灰":"菸灰","烟瘾":"菸癮","煙癮":"菸癮","烟丝":"菸絲","煙絲":"菸絲","烟草":"菸草","煙草":"菸草","烟叶":"菸葉","煙葉":"菸葉","烟蒂":"菸蒂","煙蒂":"菸蒂","烟袋":"菸袋","煙袋":"菸袋","烟农":"菸農","煙農":"菸農","烟酒":"菸酒","煙酒":"菸酒","烟头":"菸頭","煙頭":"菸頭","烟鬼":"菸鬼","煙鬼":"菸鬼","烟碱":"菸鹼","煙鹼":"菸鹼","万历朝鲜战争":"萬曆朝鮮戰爭","瓦努阿图":"萬那杜","瓦努阿圖":"萬那杜","叶利钦":"葉爾欽","葉利欽":"葉爾欽","埃里温":"葉里溫","埃里溫":"葉里溫","也門":"葉門","也门":"葉門","着":"著","着眼于":"著眼於","科摩罗":"葛摩","科摩羅":"葛摩","格林美獎":"葛萊美獎","格莱美奖":"葛萊美獎","黑山共和国":"蒙特內哥羅共和國","黑山共和國":"蒙特內哥羅共和國","蒙特利尔":"蒙特婁","蒙特利爾":"蒙特婁","普密蓬":"蒲美蓬","布隆迪":"蒲隆地","圭亚那":"蓋亞那","基地组织":"蓋達組織","阿爾蓋達組織":"蓋達組織","肖斯塔科维奇":"蕭士塔高維奇","蕭士達高維契":"蕭士塔高維奇","肖邦":"蕭邦","薛定谔":"薛丁格","扎伊尔":"薩伊","扎伊爾":"薩伊","素檀":"蘇丹","苏里南":"蘇利南","蘇里南":"蘇利南","浮罗交怡":"蘭卡威","浮羅交怡":"蘭卡威","劳拉":"蘿拉","虚拟现实":"虛擬實境","荧光":"螢光","荧屏":"螢屏","行人路权":"行人路權","行人路權":"行人路權","流動作業系統":"行動作業系統","移动操作系统":"行動作業系統","流動應用程式":"行動應用程式","移动应用程序":"行動應用程式","流動支付":"行動支付","移动支付":"行動支付","流動網絡":"行動網路","移动网络":"行動網路","流動互聯網":"行動網際網路","移动互联网":"行動網際網路","流動裝置":"行動裝置","移动设备":"行動裝置","流動電話":"行動電話","移动电话":"行動電話","冲着":"衝著","埃塞俄比亚":"衣索比亞","埃塞俄比亞":"衣索比亞","佩洛西":"裴洛西","克隆人":"複製人","国际象棋":"西洋棋","國際象棋":"西洋棋","赫梯":"西臺","分辨率":"解析度","解像度":"解析度","译码":"解碼","触摸屏":"觸控螢幕","出租车":"計程車","约翰逊":"詹森","努瓦克肖特":"諾克少","诺曼底":"諾曼第","瑙魯":"諾魯","瑙鲁":"諾魯","科特迪瓦":"象牙海岸","碧咸":"貝克漢","貝寧共和國":"貝南共和國","贝宁共和国":"貝南共和國","貝爾格萊德":"貝爾格勒","贝尔格莱德":"貝爾格勒","伯利兹":"貝里斯","伯利茲":"貝里斯","首席财务官":"財務長","集装箱":"貨櫃","数据库":"資料庫","數據庫":"資料庫","信息时代":"資訊時代","信息论":"資訊理論","乔布斯":"賈伯斯","本·拉登":"賓·拉登","宾西法尼亚":"賓夕法尼亞","本拉登":"賓拉登","利比里亚":"賴比瑞亞","利比里亞":"賴比瑞亞","莱索托":"賴索托","萊索托":"賴索托","塞浦路斯":"賽普勒斯","赫丘勒·波洛":"赫丘勒·白羅","赫鲁晓夫":"赫魯雪夫","跳樑小丑":"跳梁小丑","切尔诺贝利":"車諾比","软驱":"軟碟機","軟件":"軟體","软件":"軟體","津巴布韋":"辛巴威","津巴布韦":"辛巴威","德特里克堡":"迪特里克堡","径入":"逕入","径到":"逕到","径取":"逕取","径启":"逕啟","径寄":"逕寄","径庭":"逕庭","径往":"逕往","径自":"逕自","径行":"逕行","径迎":"逕迎","链接":"連結","連結他":"連結他","进制":"進位","道琼斯":"道瓊","道瓊斯":"道瓊","达·芬奇":"達·文西","达芬奇":"達文西","溫納圖萬":"那杜","丘吉尔":"邱吉爾","多普勒":"都卜勒","酰":"醯","里士满":"里奇蒙","金沙萨":"金夏沙","金沙薩":"金夏沙","健力士世界紀錄":"金氏世界紀錄","健力士世界纪录":"金氏世界紀錄","吉尼斯世界纪录":"金氏世界紀錄","钚":"鈽","鈎":"鉤","钩":"鉤","锎":"鉲","锫":"鉳","镅":"鋂","鋼樑":"鋼梁","镎":"錼","钫":"鍅","炼金":"鍊金","锻炼":"鍛鍊","锝":"鎝","鐵杆":"鐵桿","铁杆":"鐵桿","泰坦尼克号":"鐵達尼號","锿":"鑀","关系着":"關係著","写保护":"防寫","阿布扎比":"阿布達比","阿拉伯联合酋长国":"阿拉伯聯合大公國","阿拉伯聯合酋長國":"阿拉伯聯合大公國","亚拉巴马":"阿拉巴馬","阿联酋":"阿聯","阿聯酋":"阿聯","亚的斯亚贝巴":"阿迪斯阿貝巴","亞的斯亞貝巴":"阿迪斯阿貝巴","罗纳德·里根":"隆納·雷根","私隱":"隱私","耶加達":"雅加達","雅尔塔":"雅爾達","雅爾塔":"雅爾達","雅穆苏克雷":"雅穆索戈","雅穆蘇克雷":"雅穆索戈","雕樑畫棟":"雕梁畫棟","悉尼":"雪梨","雪茄烟":"雪茄菸","雪茄煙":"雪茄菸","莱特湾":"雷伊泰灣","萊特灣":"雷伊泰灣","激光":"雷射","雷诺阿":"雷諾瓦","电子烟":"電子菸","電子煙":"電子菸","晶体管":"電晶體","晶體管":"電晶體","电杆":"電桿","电线杆":"電線桿","电脑程序":"電腦程式","计算机程序":"電腦程式","电脑网络":"電腦網路","電腦網絡":"電腦網路","荷尔斯泰因":"霍爾斯坦","荷爾斯泰因":"霍爾斯坦","面包着":"面包著","朝鲜战争":"韓戰","声卡":"音效卡","缺省":"預設","导弹":"飛彈","糊口":"餬口","香烟":"香菸","香煙":"香菸","馬里共和國":"馬利共和國","马里共和国":"馬利共和國","馬拉維":"馬拉威","马拉维":"馬拉威","馬勒當拿":"馬拉度納","马拉多纳":"馬拉度納","馬斯特里赫特":"馬斯垂克","马斯特里赫特":"馬斯垂克","马耳他":"馬爾他","馬爾代夫":"馬爾地夫","马尔代夫":"馬爾地夫","高清化":"高畫質化","高清电视":"高畫質電視","高清電視":"高畫質電視","斗着":"鬥著","魯賓斯·巴里切羅":"魯本·巴瑞切羅","迈克尔":"麥可","麦克尔":"麥可","迈凯轮":"麥拿輪","邁凱輪":"麥拿輪","马萨诸塞":"麻薩諸塞","粘膜":"黏膜","戴安娜":"黛安娜","狄安娜":"黛安娜","点烟":"點菸","點煙":"點菸","霉素":"黴素","鼻樑":"鼻梁"};const $zh2CN={"16進位制":"16进位制","16進位":"16进制","IP位址":"IP地址","乙個":"一个","乙份":"一份","一份子":"一分子","乙隻":"一只","全球資訊網":"万维网","三十六著":"三十六着","三極體":"三极管","上落客":"上下客","下著":"下着","下著作":"下著作","下著名":"下著名","下著录":"下著录","下著錄":"下著录","下著有":"下著有","下著称":"下著称","下著稱":"下著称","下著述":"下著述","落車":"下车","卑詩省":"不列颠哥伦比亚省","不著":"不着","不著書":"不著书","不著名":"不著名","不著錄":"不著录","不著稱":"不著称","不著述":"不著述","與著":"与着","與著書":"与著书","與著作":"与著作","與著名":"与著名","與著錄":"与著录","與著稱":"与著称","與著者":"与著者","與著述":"与著述","醜著":"丑着","醜著作":"丑著作","醜著名":"丑著名","醜著稱":"丑著称","邱吉爾":"丘吉尔","C型肝炎":"丙型肝炎","C肝":"丙肝","東協會":"东协会","東協助":"东协助","東協議":"东协议","東南亞國家協會":"东南亚国家联盟","亚细安":"东盟","東協":"东盟","仲介":"中介","臨著":"临着","臨著作":"临著作","臨著名":"临著名","臨著稱":"临著称","臨著述":"临著述","為著":"为着","為著《":"为著《","為著作":"为著作","為著名":"为著名","為著錄":"为著录","為著稱":"为著称","為著者":"为著者","為著述":"为著述","主機板":"主板","麼著":"么着","烏龍麵":"乌冬面","樂著":"乐着","樂著《":"乐著《","樂著書":"乐著书","樂著作":"乐著作","樂著名":"乐著名","樂著稱":"乐著称","樂著述":"乐著述","賈伯斯":"乔布斯","喬治·歐威爾":"乔治·奥威尔","乘著":"乘着","乘著作":"乘著作","乘著名":"乘著名","乘著称":"乘著称","乘著稱":"乘著称","乘著述":"乘著述","B型肝炎":"乙型肝炎","B肝":"乙肝","吉力馬札羅":"乞力马扎罗","葉門":"也门","買帳":"买账","了結他":"了结他","爭著":"争着","爭著作":"争著作","爭著名":"争著名","爭著稱":"争著称","爭著述":"争著述","二極體":"二极管","二進位制":"二进位制","二進位":"二进制","網際網絡":"互联网","網際網路":"互联网","亞歷山卓":"亚历山大","阿迪斯阿貝巴":"亚的斯亚贝巴","雅穆索戈":"亚穆苏克罗","亞里斯多德":"亚里士多德","交帳":"交账","亮著":"亮着","亮著《":"亮著《","亮著作":"亮著作","亮著名":"亮著名","亮著称":"亮著称","亮著稱":"亮著称","亮著述":"亮著述","人工智慧":"人工智能","行人路":"人行道","甚麼":"什么","甚麽":"什么","仗著":"仗着","仗著作":"仗著作","仗著名":"仗著名","仗著稱":"仗著称","付帳":"付账","代表著":"代表着","代表著作":"代表著作","代表著名":"代表著名","代表著錄":"代表著录","代表著稱":"代表著称","代表著者":"代表著者","代表著述":"代表著述","乙太網":"以太网","份外卖":"份外卖","份外，":"份外，","伊莉莎白":"伊丽莎白","伊利沙伯二世":"伊丽莎白二世","伊利諾":"伊利诺伊","伊利諾伊":"伊利诺伊","伊斯蘭瑪巴德":"伊斯兰堡","伊斯坦堡":"伊斯坦布尔","伏著":"伏着","優先順序":"优先级","傳著":"传着","傳著作":"传著作","傳著名":"传著名","傳著稱":"传著称","傳著述":"传著述","伯明罕":"伯明翰","伴著":"伴着","伴著作":"伴著作","伴著名":"伴著名","伴著稱":"伴著称","伴著述":"伴著述","點陣圖":"位图","低著":"低着","低著作":"低著作","低著名":"低著名","低著称":"低著称","低著稱":"低著称","住著":"住着","住著作":"住著作","住著名":"住著名","住著称":"住著称","住著稱":"住著称","住著述":"住著述","餘":"余","維德角":"佛得角","裴洛西":"佩洛西","侏儸紀":"侏罗纪","側著":"侧着","側著作":"侧著作","側著名":"侧著名","側著稱":"侧著称","側著述":"侧著述","可攜式":"便携式","攜帶型":"便携式","促著":"促着","奧勒岡":"俄勒冈","保護著":"保护着","保鑣":"保镖","保障著":"保障着","保障著作":"保障著作","保障著名":"保障著名","保障著称":"保障著称","保障著稱":"保障著称","保障著者":"保障著者","保障著述":"保障著述","資訊時代":"信息时代","資訊理論":"信息论","信著":"信着","信著《":"信著《","信著作":"信著作","信著名":"信著名","信著称":"信著称","信著稱":"信著称","信著述":"信著述","伏地挺身":"俯卧撑","掌上壓":"俯卧撑","倒帳":"倒账","候著":"候着","候著作":"候著作","候著名":"候著名","候著稱":"候著称","候著述":"候著述","倚著":"倚着","借著":"借着","藉著":"借着","借著作":"借著作","借著名":"借著名","借著錄":"借著录","借著稱":"借著称","借著述":"借著述","假帳":"假账","做著":"做着","做著作":"做著作","做著名":"做著名","做著稱":"做著称","偷著":"偷着","偷著作":"偷著作","偷著名":"偷著名","偷著稱":"偷著称","傅利葉":"傅里叶","光著":"光着","光著《":"光著《","光著作":"光著作","光著名":"光著名","光著称":"光著称","光著稱":"光著称","光著述":"光著述","光碟機":"光驱","柯林頓":"克林顿","克羅埃西亞":"克罗地亚","轉殖":"克隆","複製人":"克隆人","入帳":"入账","八進位制":"八进位制","八進位":"八进制","西元1":"公元1","西元2":"公元2","西元3":"公元3","西元4":"公元4","西元5":"公元5","西元6":"公元6","西元7":"公元7","西元8":"公元8","西元9":"公元9","西元前":"公元前","公帳":"公账","六進位制":"六进位制","六進位":"六进制","關著":"关着","關係著":"关系着","關著書":"关著书","關著作":"关著作","關著名":"关著名","關著錄":"关著录","關著稱":"关著称","關著者":"关著者","關著述":"关著述","關帳":"关账","記憶體":"内存","奈洛比":"内罗毕","甘比亞":"冈比亚","冒著":"冒着","冒著作":"冒著作","冒著名":"冒著名","冒著稱":"冒著称","寫著":"写着","寫著作":"写著作","寫著名":"写著名","寫著錄":"写著录","寫著稱":"写著称","寫著述":"写著述","沖著":"冲着","衝著":"冲着","沖著。":"冲著。","沖著《":"冲著《","沖著（":"冲著（","沖著，":"冲著，","沖帳":"冲账","涼著":"凉着","涼著作":"凉著作","涼著名":"凉著名","涼著稱":"凉著称","湊合著":"凑合着","畿內亞":"几内亚","幾內亞比索":"几内亚比绍","機率":"几率","憑著":"凭着","憑著作":"凭著作","憑著名":"凭著名","憑著者":"凭著者","凱薩琳":"凯瑟琳","嘉芙蓮":"凯瑟琳","份內":"分内","份外":"分外","分佈著":"分布着","分布著":"分布着","解像度":"分辨率","解析度":"分辨率","份量":"分量","車諾比":"切尔诺贝利","劃著":"划着","李奧納多":"列奥那多","列支敦斯登":"列支敦士登","賴比瑞亞":"利比里亚","別著":"别着","刮著":"刮着","颳著":"刮着","到帳":"到账","制著":"制着","制著作":"制著作","制著名":"制著名","制著稱":"制著称","制著述":"制著述","煞車":"刹车","刻著":"刻着","刻著作":"刻著作","刻著名":"刻著名","刻著称":"刻著称","刻著稱":"刻著称","前波莫瑞":"前波美拉尼亚","辦著":"办着","辦著作":"办著作","辦著名":"办著名","辦著稱":"办著称","加薩走廊":"加沙地带","加泰隆尼亞":"加泰罗尼亚","迦納":"加纳","加彭":"加蓬","動著":"动着","動著作":"动著作","動著名":"动著名","動著稱":"动著称","努力著":"努力着","努力著書":"努力著书","努力著作":"努力著作","努力著名":"努力著名","努力著称":"努力著称","努力著稱":"努力著称","努力著述":"努力著述","諾克少":"努瓦克肖特","蘿拉":"劳拉","布蘭登堡":"勃兰登堡","白朗寧":"勃朗宁","包著":"包着","十進位制":"十进位制","十進位":"十进制","公升":"升","單眼相機":"单反相机","單鏡反光機":"单反相机","南西·裴洛西":"南希·佩洛西","蘭茜·佩洛西":"南希·佩洛西","南斯拉夫聯邦共和國":"南斯拉夫联盟共和国","波索納洛":"博索纳罗","波札那":"博茨瓦纳","占著":"占着","占著作":"占著作","占著名":"占著名","喀拉蚩":"卡拉奇","卡斯楚":"卡斯特罗","卡佩雅蒂":"卡普里亚蒂","盧安達":"卢旺达","羅浮宮":"卢浮宫","羅亞爾":"卢瓦尔","印著":"印着","印著《":"印著《","印著作":"印著作","印著名":"印著名","印著錄":"印著录","印著稱":"印著称","印著述":"印著述","瓜地馬拉":"危地马拉","聖嬰現象":"厄尔尼诺现象","厄瓜多":"厄瓜多尔","厄瓜多尔":"厄瓜多尔","厄瓜多爾":"厄瓜多尔","厄利垂亚":"厄立特里亚","厄利垂亞":"厄立特里亚","厄立特里亞":"厄立特里亚","壓著":"压着","壓著作":"压著作","壓著名":"压著名","壓著稱":"压著称","發著":"发着","發著《":"发著《","發著作":"发著作","發著名":"发著名","發著稱":"发著称","受著":"受着","受著作":"受著作","受著名":"受著名","受著稱":"受著称","受著述":"受著述","變著":"变着","變著作":"变著作","變著名":"变著名","變著稱":"变著称","變著述":"变著述","隻字片語":"只字片语","隻言片語":"只言片语","唯讀":"只读","叫著":"叫着","叫著作":"叫著作","叫著名":"叫著名","叫著稱":"叫著称","桌上型電腦":"台式电脑","撞球":"台球","台帳":"台账","叱吒":"叱咤","吃著":"吃着","結他":"吉他","健力士世界紀錄":"吉尼斯世界纪录","金氏世界紀錄":"吉尼斯世界纪录","吉布地":"吉布提","吊著":"吊着","名份":"名分","向著":"向着","向著書":"向著书","向著作":"向著作","向著名":"向著名","向著稱":"向著称","向著者":"向著者","向著述":"向著述","含著":"含着","含著作":"含著作","含著名":"含著名","含著稱":"含著称","含著述":"含著述","聽著":"听着","聽著作":"听著作","聽著名":"听著名","聽著稱":"听著称","聽著述":"听著述","吹著":"吹着","吹著作":"吹著作","吹著名":"吹著名","吹著稱":"吹著称","呆著":"呆着","呆帳":"呆账","味著":"味着","味著作":"味著作","味著名":"味著名","味著称":"味著称","味著稱":"味著称","咖哩":"咖喱","諮":"咨","咬著":"咬着","響著":"响着","響著作":"响著作","響著名":"响著名","響著稱":"响著称","哥斯大黎加":"哥斯达黎加","哥德式":"哥特式","哭著":"哭着","哭著作":"哭著作","哭著名":"哭著名","哭著稱":"哭著称","唐納·川普":"唐纳德·特朗普","當勞·特朗普":"唐纳德·特朗普","當奴·特朗普":"唐纳德·特朗普","唱著":"唱着","唱著作":"唱著作","唱著名":"唱著名","唱著稱":"唱著称","啸吒":"啸咤","喊著":"喊着","喜歡著":"喜欢着","喝著":"喝着","喝著作":"喝著作","喝著名":"喝著名","喝著稱":"喝著称","嗅著":"嗅着","雜訊":"噪声","嚷著":"嚷着","嚷著作":"嚷著作","嚷著名":"嚷著名","嚷著稱":"嚷著称","回著":"回着","回著名":"回著名","因著":"因着","因著〈":"因著〈","因著《":"因著《","因著作":"因著作","因著名":"因著名","因著录":"因著录","因著稱":"因著称","因著述":"因著述","困著":"困着","困著作":"困著作","困著名":"困著名","困著稱":"困著称","圍著":"围着","圍著作":"围著作","圍著名":"围著名","圍著稱":"围著称","韌體":"固件","固著":"固着","西洋棋":"国际象棋","土魯斯":"图卢兹","吐瓦魯":"图瓦卢","原子筆":"圆珠笔","聖佐治":"圣乔治","汕埠":"圣佩德罗苏拉","聖露西亞":"圣卢西亚","聖地牙哥":"圣地亚哥","聖克里斯多福及尼維斯":"圣基茨和尼维斯","聖吉斯納域斯":"圣基茨和尼维斯","聖多美普林西比":"圣多美和普林西比","聖文森及格瑞那丁":"圣文森特和格林纳丁斯","聖文森國":"圣文森特和格林纳丁斯","聖馬利諾":"圣马力诺","在等著":"在等着","蓋亞那":"圭亚那","坐著":"坐着","坐著書":"坐著书","坐著作":"坐著作","坐著名":"坐著名","坐著稱":"坐著称","坚杜拜":"坚杜拜","堅杜拜":"坚杜拜","堅貞著":"坚贞着","坦尚尼亞":"坦桑尼亚","伊波拉":"埃博拉","衣索匹亞":"埃塞俄比亚","衣索比亞":"埃塞俄比亚","艾菲爾":"埃菲尔","葉里溫":"埃里温","埋著":"埋着","功能變數名稱":"域名","網域名稱":"域名","蓋達組織":"基地组织","阿爾蓋達組織":"基地组织","吉里巴斯":"基里巴斯","堂姊":"堂姐","菫":"堇","坎培拉":"堪培拉","塑膠袋":"塑料袋","塞爾維亞與蒙特內哥羅":"塞尔维亚和黑山","獅子山共和國":"塞拉利昂共和国","塞普勒斯":"塞浦路斯","賽普勒斯":"塞浦路斯","塞維亞":"塞维利亚","西維爾":"塞维利亚","塞席爾":"塞舌尔","音效卡":"声卡","備著":"备着","備著作":"备著作","備著名":"备著名","備著稱":"备著称","備著述":"备著述","外部連結":"外部链接","托巴哥":"多巴哥","都卜勒":"多普勒","玻利維亞多民族國":"多民族玻利维亚国","多明尼加":"多米尼加","大姊":"大姐","大姊姊":"大姐姐","大寮":"大寮","天份":"天分","太陽電腦":"太阳微系统","昇陽電腦":"太阳微系统","夾著":"夹着","夾著作":"夹著作","夾著名":"夹著名","夾著稱":"夹著称","賓士":"奔驰","歐巴馬":"奥巴马","奧拉夫·蕭茲":"奥拉夫·朔尔茨","柯德莉·夏萍":"奥黛丽·赫本","忌廉":"奶油","荷里活":"好莱坞","姊夫":"姐夫","姊姊":"姐姐","姊弟":"姐弟","威爾斯":"威尔士","威斯伐倫":"威斯特法伦","字型大小":"字号","欄位":"字段","位元組":"字节","存在著":"存在着","存著":"存着","存著作":"存著作","存著名":"存著名","學姊":"学姐","學著":"学着","學著書":"学著书","學著作":"学著作","學著名":"学著名","學著稱":"学著称","學著述":"学著述","太空飛行員":"宇航员","太空衣":"宇航服","守著":"守着","守著作":"守著作","守著名":"守著名","守著称":"守著称","守著稱":"守著称","守著述":"守著述","安哈特":"安哈尔特","安地卡":"安提瓜","安地卡及巴布達":"安提瓜和巴布达","巨集":"宏","定著":"定着","定著《":"定著《","定著作":"定著作","定著名":"定著名","定著称":"定著称","定著稱":"定著称","定著述":"定著述","波里活":"宝莱坞","宣告著":"宣告着","宿霧":"宿务","密执安":"密歇根","密西根":"密歇根","對著":"对着","對著書":"对著书","對著作":"对著作","對著名":"对著名","對著錄":"对著录","對著稱":"对著称","對著者":"对著者","對著述":"对著述","對帳":"对账","尋著":"寻着","尋著作":"寻著作","尋著名":"寻著名","尋著稱":"寻著称","尋著述":"寻著述","飛彈":"导弹","尊敬著":"尊敬着","祖雲達斯":"尤文图斯","就等著":"就等着","奈及利亞":"尼日利亚","尼日共和國":"尼日尔共和国","區域網":"局域网","區域網路":"局域网络","展著":"展着","展著《":"展著《","展著作":"展著作","展著名":"展著名","展著稱":"展著称","展著述":"展著述","瓦倫西亞":"巴伦西亚","華倫西亞":"巴伦西亚","峇里":"巴厘","巴塞隆拿":"巴塞罗那","巴塞隆納":"巴塞罗那","巴斯拉":"巴士拉","帕邁拉環礁":"巴尔米拉环礁","巴貝多":"巴巴多斯","布殊":"布什","布吉納法索":"布基纳法索","布拉提斯拉瓦":"布拉迪斯拉发","布隆泉":"布隆方丹","蒲隆地":"布隆迪","希冀著":"希冀着","席哈克":"希拉克","希拉莉":"希拉里","希拉蕊":"希拉里","希特拉":"希特勒","帛琉":"帕劳","派屈克":"帕特里克","頻寬":"带宽","帶著":"带着","帶著作":"带著作","帶著名":"带著名","帶著稱":"带著称","帶著述":"带著述","幫著":"帮着","幫著作":"帮著作","幫著名":"帮著名","幫著稱":"帮著称","幫著述":"帮著述","乾姊":"干姐","幹著":"干着","幹著名":"幹著名","幹著稱":"幹著称","庇護著":"庇护着","庫德人":"库尔德人","庫德斯坦":"库尔德斯坦","庫德族":"库尔德族","應用程式":"应用程序","應著":"应着","應著作":"应著作","應著名":"应著名","應著稱":"应著称","應著述":"应著述","建帳":"建账","克卜勒":"开普勒","開機率":"开机率","開著":"开着","開著書":"开著书","開著作":"开著作","開著名":"开著名","開著稱":"开著称","開著述":"开著述","開帳":"开账","非同步":"异步","若且唯若":"当且仅当","當著":"当着","當著書":"当著书","當著作":"当著作","當著名":"当著名","當著稱":"当著称","當著者":"当著者","當著述":"当著述","錄影帶":"录像带","形上學":"形而上学","澈底":"彻底","逕入":"径入","逕到":"径到","逕取":"径取","逕啟":"径启","逕寄":"径寄","逕庭":"径庭","逕往":"径往","逕流":"径流","逕自":"径自","逕行":"径行","逕迎":"径迎","待著":"待着","待著作":"待著作","待著名":"待著名","待著稱":"待著称","待著述":"待著述","得著":"得着","得著書":"得著书","得著作":"得著作","得著名":"得著名","得著錄":"得著录","得著稱":"得著称","得著者":"得著者","得著述":"得著述","御姊":"御姐","迴圈":"循环","循著":"循着","循著作":"循著作","循著名":"循著名","循著稱":"循著称","循著述":"循著述","迪特里克堡":"德特里克堡","德勒斯登":"德累斯顿","德希達":"德里达","心著":"心着","心著《":"心著《","心著書":"心著书","心著作":"心著作","心著名":"心著名","心著称":"心著称","心著稱":"心著称","心著述":"心著述","忍著":"忍着","忍著作":"忍著作","忍著名":"忍著名","忍著稱":"忍著称","忙著":"忙着","忙著作":"忙著作","忙著名":"忙著名","忙著稱":"忙著称","忙著述":"忙著述","忠貞著":"忠贞着","懷著":"怀着","懷著《":"怀著《","懷著作":"怀著作","懷著名":"怀著名","懷著稱":"怀著称","懷著述":"怀著述","急著":"急着","急著作":"急著作","急著名":"急著名","急著稱":"急著称","匯流排":"总线","總帳":"总账","戀著":"恋着","戀著作":"恋著作","戀著名":"恋著名","戀著稱":"恋著称","恩將納":"恩贾梅纳","恰如其份":"恰如其分","悠著":"悠着","悠著作":"悠著作","悠著名":"悠著名","悠著稱":"悠著称","情境喜劇":"情景喜剧","處境喜劇":"情景喜剧","慣著":"惯着","慣著作":"惯著作","慣著名":"惯著名","慣著稱":"惯著称","想著":"想着","想著作":"想著作","想著名":"想著名","想著称":"想著称","想著稱":"想著称","想著述":"想著述","義大利":"意大利","義裔":"意裔","戈巴契夫":"戈尔巴乔夫","成份股":"成份股","成份":"成分","戰著":"战着","戰著作":"战著作","戰著名":"战著名","戰著稱":"战著称","坎城":"戛纳","黛安娜":"戴安娜","戴著":"戴着","戴著作":"戴著作","戴著名":"戴著名","戴著稱":"戴著称","索羅門群島":"所罗门群岛","扎著":"扎着","紮著":"扎着","扎著。":"扎著。","扎著《":"扎著《","紮著作":"扎著作","紮著名":"扎著名","紮著稱":"扎著称","扎著（":"扎著（","扎著，":"扎著，","列印":"打印","印表機":"打印机","打著":"打着","打著作":"打著作","打著名":"打著名","打著稱":"打著称","扛著":"扛着","扛著作":"扛著作","扛著名":"扛著名","扛著稱":"扛著称","掃瞄":"扫描","掃瞄器":"扫描仪","抓著":"抓着","抓著作":"抓著作","抓著名":"抓著名","抓著稱":"抓著称","投機份子":"投机分子","搶著":"抢着","護著":"护着","護著作":"护著作","護著名":"护著名","護著稱":"护著称","護著述":"护著述","報帳":"报账","披頭四":"披头士","披著":"披着","披著作":"披著作","披著名":"披著名","披著稱":"披著称","抬著":"抬着","抬著作":"抬著作","抬著名":"抬著名","抬著稱":"抬著称","抱著":"抱着","抱著作":"抱著作","抱著名":"抱著名","抱著稱":"抱著称","擔著":"担着","拉著":"拉着","拉著作":"拉著作","拉著名":"拉著名","拉著稱":"拉著称","拎著":"拎着","拎著作":"拎著作","拎著名":"拎著名","拎著稱":"拎著称","拖著":"拖着","拖著作":"拖著作","拖著名":"拖著名","拖著稱":"拖著称","拼著":"拼着","拼著作":"拼著作","拼著名":"拼著名","拼著稱":"拼著称","拿著":"拿着","拿著作":"拿著作","拿著名":"拿著名","拿著稱":"拿著称","持著":"持着","持著作":"持著作","持著名":"持著名","持著稱":"持著称","掛著":"挂着","挑著":"挑着","挑著作":"挑著作","挑著名":"挑著名","挑著稱":"挑著称","擋著":"挡着","擋著作":"挡著作","擋著名":"挡著名","擋著稱":"挡著称","掙著":"挣着","掙著作":"挣著作","掙著名":"挣著名","掙著稱":"挣著称","揮著":"挥着","揮著作":"挥著作","揮著名":"挥著名","揮著稱":"挥著称","挨著":"挨着","挨著作":"挨著作","挨著名":"挨著名","挨著稱":"挨著称","捆著":"捆着","捆著作":"捆著作","捆著名":"捆著名","捆著稱":"捆著称","據著":"据着","據著作":"据著作","據著名":"据著名","據著稱":"据著称","積架":"捷豹","掖著":"掖着","掖著作":"掖著作","掖著名":"掖著名","掖著稱":"掖著称","接著":"接着","接著作":"接著作","接著名":"接著名","接著稱":"接著称","控制項":"控件","揉著":"揉着","揉著作":"揉著作","揉著名":"揉著名","揉著稱":"揉著称","提著":"提着","提著作":"提著作","提著名":"提著名","提著稱":"提著称","外掛程式":"插件","握著":"握着","握著作":"握著作","握著名":"握著名","摟著":"搂着","摟著作":"搂著作","摟著名":"搂著名","摟著稱":"搂著称","搜尋引擎":"搜索引擎","擺著":"摆着","擺著作":"摆著作","擺著名":"摆著名","擺著稱":"摆著称","電單車":"摩托车","摸著":"摸着","撑著":"撑着","戴卓爾":"撒切尔","柴契爾":"撒切尔","撼著":"撼着","撼著作":"撼著作","撼著名":"撼著名","撼著稱":"撼著称","作業系統":"操作系统","收錄著":"收录着","收帳":"收账","放著":"放着","放著作":"放著作","放著名":"放著名","放著称":"放著称","放著稱":"放著称","放帳":"放账","敞著":"敞着","敞著作":"敞著作","敞著名":"敞著名","敞著稱":"敞著称","散佈著":"散布着","散布著":"散布着","數位訊號":"数字信号","數碼訊號":"数字信号","數位化":"数字化","數位技術":"数字技术","數位電視":"数字电视","數碼電視":"数字电视","數位音樂":"数字音乐","資料庫":"数据库","數著":"数着","數位照相機":"数码照相机","數位相機":"数码相机","數著作":"数著作","數著名":"数著名","數著稱":"数著称","數著述":"数著述","敲著":"敲着","汶萊":"文莱","鬥著":"斗着","鬥著作":"斗著作","鬥著名":"斗著名","鬥著稱":"斗著称","斥著":"斥着","斥著作":"斥著作","斥著名":"斥著名","斥著稱":"斥著称","史丹福大學":"斯坦福大学","斯堪地那維亞":"斯堪的纳维亚","史達林":"斯大林","史瓦帝尼":"斯威士兰","史瓦濟蘭":"斯威士兰","斯洛維尼亞":"斯洛文尼亚","史特勞斯":"斯特劳斯","史高比耶":"斯科普里","司諾克":"斯诺克","士碌架":"斯诺克","紐幾內亞":"新几内亚","紐澤西":"新泽西","紐西蘭":"新西兰","舊帳":"旧账","三藩市":"旧金山","昂山素姬":"昂山素季","翁山蘇姬":"昂山素季","昂著":"昂着","昂著作":"昂著作","昂著名":"昂著名","昂著稱":"昂著称","明白帳":"明白账","映著":"映着","映著作":"映著作","映著名":"映著名","映著稱":"映著称","顯示卡":"显卡","显著":"显著","顯著":"显著","晃著":"晃着","晃著作":"晃著作","晃著名":"晃著名","晃著稱":"晃著称","普利茲":"普利策","普立茲獎":"普利策奖","蒲美蓬":"普密蓬","蒲朗克":"普朗克","電晶體":"晶体管","智慧型":"智能","智慧卡":"智能卡","智慧手機":"智能手机","智慧機器人":"智能机器人","暗著":"暗着","暗著作":"暗著作","暗著名":"暗著名","暗著稱":"暗著称","有著":"有着","有著書":"有著书","有著作":"有著作","有著名":"有著名","有著錄":"有著录","有著稱":"有著称","有著者":"有著者","有著述":"有著述","伺服器":"服务器","望著":"望着","望著作":"望著作","望著名":"望著名","望著稱":"望著称","望著述":"望著述","朝著":"朝着","朝著作":"朝著作","朝著名":"朝著名","朝著稱":"朝著称","朝著述":"朝著述","韓戰":"朝鲜战争","尾班車":"末班车","賓·拉登":"本·拉登","本份":"本分","賓拉登":"本拉登","本本份份":"本本分分","班傑明":"本杰明","本著":"本着","本著書":"本著书","本著作":"本著作","本著名":"本著名","本著錄":"本著录","本著稱":"本著称","本著者":"本著者","本著述":"本著述","本帳":"本账","樸茨茅夫":"朴茨茅斯","機械人":"机器人","工具機":"机床","殺著":"杀着","殺著作":"杀著作","殺著名":"杀著名","殺著稱":"杀著称","雜著":"杂着","雜著作":"杂著作","雜著名":"杂著名","雜著稱":"杂著称","雜著述":"杂著述","杜塞道夫":"杜塞尔多夫","束著":"束着","來著":"来着","來著作":"来著作","來著名":"来著名","來著稱":"来著称","來著述":"来著述","板著臉":"板着脸","枕著":"枕着","枕著作":"枕著作","枕著名":"枕著名","枕著稱":"枕著称","槍枝":"枪支","柏林圍牆":"柏林墙","查帳":"查账","查維茲":"查韦斯","標志著":"标志着","標誌著":"标志着","格仔山":"格仔山","格仔":"格子","格瑞那丁":"格林纳丁斯","格瑞那達":"格林纳达","格林美獎":"格莱美奖","葛萊美獎":"格莱美奖","喬治亞字母":"格鲁吉亚字母","喬治亞語":"格鲁吉亚语","森巴舞":"桑巴舞","梅赫西迪":"梅赛德斯","夢著":"梦着","夢著《":"梦著《","夢著作":"梦著作","夢著名":"梦著名","夢著稱":"梦著称","夢著述":"梦著述","梳著":"梳着","梳著作":"梳著作","梳著名":"梳著名","梳著稱":"梳著称","梵谷":"梵高","欠帳":"欠账","正等著":"正等着","死帳":"死账","帕運":"残奥","帕拉林匹克":"残疾人奥林匹克","庇里牛斯":"比利牛斯","普利托利亞":"比勒陀利亚","披索":"比索","畢卡索":"毕加索","茅利塔尼亞":"毛里塔尼亚","模里西斯":"毛里求斯","毛里裘斯":"毛里求斯","公厘":"毫米","公釐":"毫米","氧份":"氧分","胺基酸":"氨基酸","水份":"水分","水氣":"水汽","求著":"求着","求著書":"求著书","求著作":"求著作","求著名":"求著名","求著稱":"求著称","求著述":"求著述","漢諾瓦":"汉诺威","東加王國":"汤加王国","沈著":"沉着","沉著":"沉着","沉著作":"沉著作","沉著名":"沉著名","沉著稱":"沉著称","沙地阿拉伯":"沙特阿拉伯","沙烏地阿拉伯":"沙特阿拉伯","沿著":"沿着","沿著作":"沿著作","沿著名":"沿著名","沿著稱":"沿著称","沿著述":"沿著述","玻里尼西亞":"波利尼西亚","波士尼亞":"波斯尼亚","波士尼亞與赫塞哥維納":"波斯尼亚和黑塞哥维那","鐵達尼號":"泰坦尼克号","幫浦":"泵","澤倫斯基":"泽连斯基","辛巴威":"津巴布韦","宏都拉斯":"洪都拉斯","活著":"活着","活著作":"活著作","活著名":"活著名","活著稱":"活著称","活著述":"活著述","流水帳":"流水账","流著":"流着","流著作":"流著作","流著名":"流著名","流著稱":"流著称","流著述":"流著述","流露著":"流露着","浮著":"浮着","蘭卡威":"浮罗交怡","浮著作":"浮著作","浮著名":"浮著名","浮著稱":"浮著称","浮著述":"浮著述","海洛英":"海洛因","海浬":"海里","塗著":"涂着","潤著":"润着","潤著作":"润著作","潤著名":"润著名","潤著稱":"润著称","潤著述":"润著述","混著":"混着","混帳":"混账","清澈":"清澈","清帳":"清账","溫荷克":"温得和克","渴著":"渴着","渴著作":"渴著作","渴著名":"渴著名","渴著稱":"渴著称","原始碼":"源代码","溢著":"溢着","溢著作":"溢著作","溢著名":"溢著名","溢著稱":"溢著称","滑鼠蛇":"滑鼠蛇","滿16進位":"满16进位","滿二進位":"满二进位","滿八進位":"满八进位","滿六進位":"满六进位","滿十六進位":"满十六进位","滿十進位":"满十进位","滿著":"满着","滿著作":"满著作","滿著名":"满著名","演著":"演着","演著作":"演著作","演著名":"演著名","演著稱":"演著称","演著述":"演著述","漫著":"漫着","漫著作":"漫著作","漫著名":"漫著名","漫著稱":"漫著称","漫著述":"漫著述","潮寮":"潮寮","雷射":"激光","點著":"点着","點著作":"点著作","點著名":"点著名","點著稱":"点著称","點著述":"点著述","爛帳":"烂账","燒著":"烧着","燒著作":"烧著作","燒著名":"烧著名","燒著稱":"烧著称","照著":"照着","照著作":"照著作","照著名":"照著名","照著稱":"照著称","愛護著":"爱护着","愛著":"爱着","愛著書":"爱著书","愛著作":"爱著作","愛著名":"爱著名","愛著稱":"爱著称","愛著述":"爱著述","牽著":"牵着","牽著作":"牵著作","牽著名":"牵著名","牽著稱":"牵著称","千里達":"特立尼达","千里達及托巴哥":"特立尼达和多巴哥","德蕾莎·梅伊":"特蕾莎·梅","文翠珊":"特蕾莎·梅","狗隻":"犬只","猶豫著":"犹豫着","獨立國家國協":"独立国家联合体","獨立國協":"独联体","猜著":"猜着","猜著作":"猜著作","猜著名":"猜著名","猜著稱":"猜著称","玩著":"玩着","班固著":"班固著","溫納圖":"瓦努阿图","萬那杜":"瓦努阿图","華勒沙":"瓦文萨","華里沙":"瓦文萨","甜著":"甜着","甜著作":"甜著作","甜著名":"甜著名","甜著稱":"甜著称","用著":"用着","用著書":"用著书","用著作":"用著作","用著名":"用著名","用著稱":"用著称","用著者":"用著者","用著述":"用著述","A型肝炎":"甲型肝炎","A肝":"甲肝","電視劇集":"电视剧","電視影集":"电视系列剧","畫著":"画着","畫著作":"画著作","畫著名":"画著名","畫著稱":"画著称","介面":"界面","留尼旺":"留尼汪","留著":"留着","留著作":"留著作","留著名":"留著名","留著稱":"留著称","留著述":"留著述","疑著":"疑着","疑著作":"疑著作","疑著名":"疑著名","疑著稱":"疑著称","疑著述":"疑著述","狂牛症":"疯牛病","瘋牛症":"疯牛病","徵狀":"症状","百慕達":"百慕大","皮雅斯·布士南":"皮尔斯·布鲁斯南","皺著":"皱着","皺著作":"皱著作","皺著名":"皱著名","皺著稱":"皱著称","鹽份":"盐分","蓋著":"盖着","蓋著作":"盖著作","蓋著名":"盖著名","蓋著稱":"盖著称","盛著":"盛着","盛著作":"盛著作","盛著名":"盛著名","盛著稱":"盛著称","盯著":"盯着","盯著作":"盯著作","盯著名":"盯著名","盯著稱":"盯著称","看著":"看着","看著作":"看著作","看著名":"看著名","看著稱":"看著称","看著者":"看著者","看著述":"看著述","真人騷":"真人秀","著業":"着业","著絲":"着丝","著麼":"着么","著人":"着人","著什":"着什","著甚麼":"着什么","著他":"着他","著令":"着令","著位":"着位","著體":"着体","著你":"着你","著妳":"着你","著便":"着便","著涼":"着凉","著力":"着力","著勁":"着劲","著號":"着号","著呢":"着呢","著哩":"着哩","著地":"着地","著墨":"着墨","著聲":"着声","著處":"着处","著她":"着她","著它":"着它","著牠":"着它","著定":"着定","著實":"着实","著己":"着己","著帳":"着帐","著床":"着床","著庸":"着庸","著式":"着式","著心":"着心","著志":"着志","著忙":"着忙","著急":"着急","著惱":"着恼","著驚":"着惊","著想":"着想","著意":"着意","著慌":"着慌","著我":"着我","著手":"着手","著抹":"着抹","著摸":"着摸","著撰":"着撰","著數":"着数","著明":"着明","著末":"着末","著極":"着极","著格":"着格","著棋":"着棋","著氣":"着气","著法":"着法","著淺":"着浅","著火":"着火","著然":"着然","著甚":"着甚","著生":"着生","著疑":"着疑","著白":"着白","著相":"着相","著眼":"着眼","著著":"着着","著祂":"着祂","著積":"着积","著稿":"着稿","著筆":"着笔","著籍":"着籍","著緊":"着紧","著緑":"着緑","著絆":"着绊","著績":"着绩","著緋":"着绯","著綠":"着绿","著肉":"着肉","著腳":"着脚","著艦":"着舰","著色":"着色","著節":"着节","著花":"着花","著莫":"着莫","著落":"着落","著槁":"着藁","著衣":"着衣","著裝":"着装","著要":"着要","著警":"着警","著趣":"着趣","著邊":"着边","著迷":"着迷","著跡":"着迹","著重":"着重","著録":"着録","著聞":"着闻","著陸":"着陆","著雝":"着雝","著鞭":"着鞭","著題":"着题","著魔":"着魔","睡著":"睡着","睡著作":"睡著作","睡著名":"睡著名","睡著稱":"睡著称","瞞著":"瞒着","瞞著作":"瞒著作","瞞著名":"瞒著名","瞞著稱":"瞒著称","瞧著":"瞧着","瞧著作":"瞧著作","瞧著名":"瞧著名","瞧著稱":"瞧著称","瞪著":"瞪着","瞪著作":"瞪著作","瞪著名":"瞪著名","瞪著稱":"瞪著称","矛盾著":"矛盾着","智慧財產權":"知识产权","智財權":"知识产权","知識份子":"知识分子","什勒斯維希":"石勒苏益格","矽塵":"矽尘","矽尘":"矽尘","矽肺":"矽肺","矽鋼":"矽钢","矽钢":"矽钢","矽":"硅","矽片":"硅片","矽谷":"硅谷","硬體":"硬件","硬碟":"硬盘","磁碟":"磁盘","磁軌":"磁道","福馬林":"福尔马林","富比士":"福布斯","福著":"福着","福著作":"福著作","福著名":"福著名","福著稱":"福著称","福著述":"福著述","私帳":"私账","葛摩":"科摩罗","象牙海岸":"科特迪瓦","積極份子":"积极分子","流動互聯網":"移动互联网","行動網際網路":"移动互联网","流動應用程式":"移动应用程序","行動應用程式":"移动应用程序","流動作業系統":"移动操作系统","行動作業系統":"移动操作系统","流動支付":"移动支付","行動支付":"移动支付","流動電話":"移动电话","行動電話":"移动电话","流動網絡":"移动网络","行動網路":"移动网络","流動裝置":"移动设备","行動裝置":"移动设备","程式設計師":"程序员","程式控制":"程控","空中巴士":"空中客车","空氣品質":"空气质量","空氣質素":"空气质量","空著":"空着","空著作":"空著作","空著名":"空著名","空著稱":"空著称","空著述":"空著述","穿著":"穿着","穿著作":"穿著作","穿著名":"穿著名","穿著稱":"穿著称","突尼西亞":"突尼斯","立著":"立着","立著《":"立著《","立著作":"立著作","立著名":"立著名","立著有":"立著有","立著称":"立著称","立著稱":"立著称","立著（":"立著（","豎著":"竖着","豎著作":"竖著作","豎著名":"竖著名","豎著稱":"竖著称","站著":"站着","站著作":"站著作","站著名":"站著名","站著稱":"站著称","笑著":"笑着","笑著作":"笑著作","笑著名":"笑著名","笑著稱":"笑著称","筆帳":"笔账","提比里西":"第比利斯","等著被":"等着被","策畫":"策划","簽著":"签着","簽帳":"签账","運算元":"算子","演算法":"算法","算帳":"算账","管著":"管着","管著作":"管著作","管著名":"管著名","管著稱":"管著称","管著述":"管著述","管帳":"管账","公尺":"米","糊塗帳":"糊涂账","糖份":"糖分","動畫影集":"系列动画片","繫著":"系着","索忍尼辛":"索尔仁尼琴","索贊尼辛":"索尔仁尼琴","蘇辛尼津":"索尔仁尼琴","索馬利亞":"索马里","索馬利蘭":"索马里兰","正體中文":"繁体中文","約翰尼斯堡":"约翰内斯堡","強斯頓環礁":"约翰斯顿岛","紀錄著":"纪录着","縱著":"纵着","組份":"组分","織著":"织着","經常帳":"经常账","經濟帳":"经济账","綁著":"绑着","綁著作":"绑著作","綁著名":"绑著名","綁著稱":"绑著称","結帳":"结账","繞著":"绕着","繞著作":"绕著作","繞著名":"绕著名","繞著稱":"绕著称","繪著":"绘着","繪著。":"绘著。","繪著名":"绘著名","繪著称":"绘著称","繪著稱":"绘著称","繪著，":"绘著，","維根斯坦":"维特根斯坦","繃著":"绷着","緣份":"缘分","纏著":"缠着","纏著作":"缠著作","纏著名":"缠著名","纏著稱":"缠著称","網站連結":"网站链接","網路":"网络","網頁連結":"网页链接","羅蘋":"罗宾","罩著":"罩着","罩著作":"罩著作","罩著名":"罩著名","罩著稱":"罩著称","美著":"美着","美著作":"美著作","美著名":"美著名","美著称":"美著称","美著稱":"美著称","美著述":"美著述","耀著":"耀着","耀著作":"耀著作","耀著名":"耀著名","耀著稱":"耀著称","耀著述":"耀著述","寮國":"老挝","寮人民民主共和國":"老挝人民民主共和国","寮保護國":"老挝保护国","寮語":"老挝语","考著":"考着","考著作":"考著作","考著名":"考著名","考著稱":"考著称","考著述":"考著述","職份":"职分","辛康納利":"肖恩·康纳利","蕭士塔高維奇":"肖斯塔科维奇","蕭士達高維契":"肖斯塔科维奇","甘迺迪":"肯尼迪","背著":"背着","背著作":"背著作","背著名":"背著名","背著稱":"背著称","膠著":"胶着","膠著作":"胶著作","膠著名":"胶著名","膠著稱":"胶著称","舒麥加":"舒马赫","太空梭":"航天飞机","穿梭機":"航天飞机","愛滋":"艾滋","晶元":"芯片","晶片":"芯片","蘇利南":"苏里南","苦著":"苦着","苦著作":"苦著作","苦著名":"苦著名","苦著稱":"苦著称","英吋":"英寸","英呎":"英尺","共和联邦":"英联邦","大英國協":"英联邦","士多啤梨":"草莓","螢光棒":"荧光棒","螢屏":"荧屏","霍爾斯坦":"荷尔斯泰因","荷里活廣場":"荷里活广场","荷里活道":"荷里活道","摩斯比港":"莫尔斯比港","莫士比港":"莫尔斯比港","莫三比克":"莫桑比克","雷伊泰灣":"莱特湾","賴索托":"莱索托","獲著":"获着","穫著":"获着","獲著作":"获著作","獲著名":"获著名","獲著錄":"获著录","獲著稱":"获著称","獲著者":"获著者","獲著述":"获著述","菁寮":"菁寮","塞拉耶佛":"萨拉热窝","落著":"落着","落著作":"落著作","落著名":"落著名","落著稱":"落著称","落著述":"落著述","蒙特婁":"蒙特利尔","蒙著":"蒙着","蒙著作":"蒙著作","蒙著名":"蒙著名","蒙著稱":"蒙著称","蒙著述":"蒙著述","藍芽":"蓝牙","蘊涵著":"蕴涵着","薛丁格":"薛定谔","藏著":"藏着","藏著作":"藏著作","藏著名":"藏著名","藏著稱":"藏著称","藏著述":"藏著述","蘸著":"蘸着","蘸著作":"蘸著作","蘸著名":"蘸著名","蘸著稱":"蘸著称","虛擬實境":"虚拟现实","蚵寮":"蚵寮","行人路权":"行人路权","行人路權":"行人路权","行著":"行着","行著書":"行著书","行著作":"行著作","行著名":"行著名","行著稱":"行著称","行著述":"行著述","衣著":"衣着","衣著作":"衣著作","衣著名":"衣著名","衣著称":"衣著称","衣著稱":"衣著称","表姊":"表姐","裝著":"装着","裝著作":"装著作","裝著名":"装著名","裝著稱":"装著称","裹著":"裹着","裹著作":"裹著作","裹著名":"裹著名","裹著稱":"裹著称","威騰電子":"西部数据","要帳":"要账","覆蓋著":"覆盖着","覆著":"覆着","見著":"见着","見著作":"见著作","見著名":"见著名","見著錄":"见著录","見著稱":"见著称","見著者":"见著者","見著述":"见著述","規畫":"规划","視著":"视着","視著作":"视著作","視著名":"视著名","視著稱":"视著称","占士邦":"詹姆斯·邦德","警戒著":"警戒着","計畫":"计划","電腦程式":"计算机程序","認帳":"认账","記錄著":"记录着","記著":"记着","記著作":"记著作","記著名":"记著名","記著稱":"记著称","記著述":"记著述","記帳":"记账","片語":"词组","試著":"试着","試著書":"试著书","試著作":"试著作","試著名":"试著名","試著稱":"试著称","試著述":"试著述","語著":"语着","語著作":"语著作","語著名":"语著名","語著稱":"语著称","語著述":"语著述","說著":"说着","說著作":"说著作","說著稱":"说著称","說著述":"说著述","諾曼第":"诺曼底","數據機":"调制解调器","象徵著":"象征着","象徵著名":"象征著名","碧咸":"贝克汉姆","貝南共和國":"贝宁共和国","貝爾格勒":"贝尔格莱德","負著":"负着","貢寮":"贡寮","帳上":"账上","帳冊":"账册","帳務":"账务","帳單":"账单","帳號":"账号","帳外":"账外","帳戶":"账户","帳房":"账房","帳本":"账本","帳款":"账款","帳目":"账目","帳簿":"账簿","帳面":"账面","賒帳":"赊账","賴帳":"赖账","尚比亞":"赞比亚","西臺人":"赫梯人","西臺國":"赫梯国","西臺帝":"赫梯帝","西臺文":"赫梯文","西臺族":"赫梯族","西臺王":"赫梯王","西臺語":"赫梯语","赫魯雪夫":"赫鲁晓夫","走為上著":"走为上着","走著":"走着","走著作":"走著作","走著名":"走著名","走著稱":"走著称","趕著":"赶着","趕著作":"赶著作","趕著名":"赶著名","趕著稱":"赶著称","趁著":"趁着","超連結":"超链接","趴著":"趴着","趴著作":"趴著作","趴著名":"趴著名","趴著稱":"趴著称","躍著":"跃着","躍著作":"跃著作","躍著名":"跃著名","躍著稱":"跃著称","跑著":"跑着","跑著作":"跑著作","跑著名":"跑著名","跑著稱":"跑著称","跟著":"跟着","跟著作":"跟著作","跟著名":"跟著名","跟著稱":"跟著称","跪著":"跪着","跪著作":"跪著作","跪著名":"跪著名","跪著稱":"跪著称","跳著":"跳着","跳著作":"跳著作","跳著名":"跳著名","跳著稱":"跳著称","踏著":"踏着","踏著作":"踏著作","踏著名":"踏著名","踏著稱":"踏著称","踩著":"踩着","踩著作":"踩著作","踩著名":"踩著名","踩著稱":"踩著称","笨豬跳":"蹦极跳","绑紧跳":"蹦极跳","蹲著":"蹲着","身份":"身份","身分":"身份","身著":"身着","身著書":"身著书","身著作":"身著作","身著名":"身著名","身著稱":"身著称","身著述":"身著述","躺著":"躺着","躺著作":"躺著作","躺著名":"躺著名","躺著稱":"躺著称","轉著":"转着","轉著作":"转著作","轉著名":"转著名","轉著稱":"转著称","轉著述":"转著述","轉帳":"转账","軟體":"软件","軟體動物":"软体动物","軟體家具":"软体家具","軟體操":"软体操","軟體生物":"软体生物","軟碟機":"软驱","載著":"载着","載著作":"载著作","載著名":"载著名","載著錄":"载著录","載著稱":"载著称","載著述":"载著述","達·文西":"达·芬奇","達著":"达着","三蘭港":"达累斯萨拉姆","達文西":"达芬奇","達著作":"达著作","達著名":"达著名","達著稱":"达著称","達著述":"达著述","過份":"过分","過著":"过着","過著作":"过著作","過著名":"过著名","過著稱":"过著称","過著述":"过著述","米高·奧雲":"迈克尔·欧文","還帳":"还账","演化論":"进化论","進帳":"进账","連著":"连着","連結他":"连结他","連著作":"连著作","連著名":"连著名","連著稱":"连著称","連著述":"连著述","杜拜":"迪拜","迫著":"迫着","疊代":"迭代","追著":"追着","追著作":"追著作","追著名":"追著名","追著稱":"追著称","逆著":"逆着","逆著作":"逆著作","逆著名":"逆著名","逆著稱":"逆著称","逼著":"逼着","逼著作":"逼著作","逼著名":"逼著名","逼著稱":"逼著称","遇著":"遇着","遇著作":"遇著作","遇著名":"遇著名","遇著称":"遇著称","遇著稱":"遇著称","遇著述":"遇著述","遍佈著":"遍布着","遍布著":"遍布着","道瓊":"道琼斯","道瓊斯":"道琼斯","部份":"部分","都等著":"都等着","配合著":"配合着","配合著名":"配合著名","配著":"配着","配著作":"配著作","配著名":"配著名","配著稱":"配著称","配著述":"配著述","釀著":"酿着","釀著作":"酿著作","釀著名":"酿著名","釀著稱":"酿著称","黎克特制":"里氏","芮氏0":"里氏0","芮氏1":"里氏1","芮氏2":"里氏2","芮氏3":"里氏3","芮氏4":"里氏4","芮氏5":"里氏5","芮氏6":"里氏6","芮氏7":"里氏7","芮氏8":"里氏8","芮氏9":"里氏9","芮氏地震規模":"里氏地震规模","芮氏規模":"里氏震级","金夏沙":"金沙萨","鈽":"钚","鍅":"钫","卯足":"铆足","鋪著":"铺着","鋪著作":"铺著作","鋪著名":"铺著名","鋪著稱":"铺著称","鏈結":"链接","銷帳":"销账","鉲":"锎","鎝":"锝","鉳":"锫","鑀":"锿","鋂":"镅","錼":"镎","孟德爾遜":"门德尔松","孟德爾頌":"门德尔松","快閃記憶體":"闪存","閉著":"闭着","閉著作":"闭著作","閉著名":"闭著名","閉著稱":"闭著称","閉著述":"闭著述","閑著":"闲着","閒著":"闲着","閑著作":"闲著作","閑著名":"闲著名","閑著稱":"闲著称","悶著":"闷着","鬧著":"闹着","聞著":"闻着","亞塞拜然":"阿塞拜疆","阿布達比":"阿布扎比","撒拉威阿拉伯":"阿拉伯撒哈拉","阿拉伯聯合大公國":"阿拉伯联合酋长国","亞斯文":"阿斯旺","附著":"附着","附著作":"附著作","附著名":"附著名","附著稱":"附著称","附著述":"附著述","陋著":"陋着","陋著作":"陋著作","陋著名":"陋著名","陋著稱":"陋著称","陪著":"陪着","陪著作":"陪著作","陪著名":"陪著名","陪著稱":"陪著称","隨著":"随着","隨著作":"随著作","隨著名":"随著名","隨著稱":"随著称","隨著述":"随著述","私隱":"隐私","隔著":"隔着","隔著作":"隔著作","隔著名":"隔著名","隔著稱":"隔著称","耶加達":"雅加达","雅爾達":"雅尔塔","雅著":"雅着","雅著書":"雅著书","雅著作":"雅著作","雅著名":"雅著名","雅著称":"雅著称","雅著稱":"雅著称","雷諾瓦":"雷诺阿","荷姆茲":"霍尔木兹","荷尼阿拉":"霍尼亚拉","非份":"非分","靠著":"靠着","靠著作":"靠著作","靠著名":"靠著名","靠著稱":"靠著称","南韓":"韩国","音樂錄影帶":"音乐录影带","頂著":"顶着","頂著作":"顶著作","頂著名":"顶著名","頂著稱":"顶著称","順著":"顺着","順著作":"顺著作","順著名":"顺著名","順著稱":"顺著称","頓內次克":"顿涅茨克","領著":"领着","領著作":"领著作","領著名":"领著名","領著稱":"领著称","飃著":"飘着","飄著":"飘着","飄著作":"飘著作","飄著名":"飘著名","飄著稱":"飘著称","行政總裁":"首席执行官","執行長、":"首席执行官、","執行長。":"首席执行官。","執行長，":"首席执行官，","財務長、":"首席财务官、","財務長。":"首席财务官。","財務長，":"首席财务官，","營運長、":"首席运营官、","營運長。":"首席运营官。","營運長，":"首席运营官，","馬爾地夫":"马尔代夫","萌島":"马恩岛","馬勒當拿":"马拉多纳","馬拉度納":"马拉多纳","馬拉威":"马拉维","馬斯垂克":"马斯特里赫特","馬爾他":"马耳他","麻薩諸塞":"马萨诸塞","馬利共和國":"马里共和国","駛著":"驶着","駕著":"驾着","駕著作":"驾著作","駕著名":"驾著名","駕著稱":"驾著称","罵著":"骂着","罵著作":"骂著作","罵著名":"骂著名","罵著稱":"骂著称","騎著":"骑着","騎著作":"骑著作","騎著名":"骑著名","騎著稱":"骑著称","騙著":"骗着","騙著作":"骗著作","騙著名":"骗著名","騙著稱":"骗著称","尖峰時段":"高峰时段","尖峰時間":"高峰时间","高畫質":"高清","高著":"高着","高著書":"高著书","高著作":"高著作","高著名":"高著名","高著称":"高著称","高著稱":"高著称","魚雷":"鱼雷","鱼雷":"鱼雷","鹿寮":"鹿寮","麥寮":"麦寮","黏著":"黏着","黏著作":"黏著作","黏著名":"黏著名","黏著稱":"黏著称","蒙特內哥羅":"黑山","滑鼠":"鼠标"};const tw2cnTable={...$zh2CN,...$zh2Hans};const cn2twTable={...$zh2TW,...$zh2Hant};

  function chineseConversion(text) {
    switch (Setting.chineseConversion) {
      case 'disable':
        return text
      case 'to-cn':
        return strtr(text, tw2cnTable)
      case 'to-tw':
        return strtr(text, cn2twTable)
    }
  }

  // 等待页面上的元素出现
  function observeElement(
    doc,
    {
      contentSelector,
      mutationSelector,
      mutationChildText,
      mutationChildCount,
      mutationCheck
    }
  ) {
    var $doc = $(doc);

    var contentSize = $doc.find(contentSelector).size();

    if (contentSize && !mutationSelector) {
      return
    }

    var target = $doc.find(mutationSelector)[0];

    if (!target) {
      return
    }

    var check = true;

    if (_.isFunction(mutationCheck)) {
      check = mutationCheck($doc);
    }

    var beforeTargetChilren = target.children.length;
    C.log(`target.children.length = ${target.children.length}`, target);

    // 未找到加载中标志文本
    const textNotFound = mutationChildText && !target.textContent.includes(mutationChildText);

    if (textNotFound && check) {
      return
    }

    // 节点孩子数量足够多（一般正文的节点数量会多于加载时）
    const childCountEnough = mutationChildCount !== undefined && target.children.length > mutationChildCount;

    if (childCountEnough && check) {
      return
    }

    if ((textNotFound || childCountEnough) && !check) {
      // 正文已生成，但检查函数还未通过，设置为 0 使得 nodeAdded 始终为 true
      beforeTargetChilren = 0;
    }

    return new Promise(resolve => {
      var observer = new MutationObserver(function () {
        const target = $doc.find(mutationSelector)[0];
        var nodeAdded = target.children.length > beforeTargetChilren;
        var check = true;
        if (nodeAdded && _.isFunction(mutationCheck)) {
          check = mutationCheck($doc);
        }

        if (nodeAdded && check) {
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document, {
        childList: true,
        subtree: true
      });

      C.log('添加 MutationObserve 成功：', mutationSelector);
    })
  }

  // 等待 DOM 稳定
  function domMutation() {
    return new Promise(resolve => {
      const fn = _.debounce(() => {
        observer.disconnect();
        resolve();
      }, 100);
      const observer = new MutationObserver(fn);
      observer.observe(document, {
        childList: true,
        subtree: true
      });
      fn();
    })
  }

  const r$1 = String.raw;
  const spaceRegex = toRE(r$1`&nbsp;|&ensp;|&emsp;`),
    noPrintRegex = toRE(r$1`&thinsp;|&zwnj;|&zwj;`),
    wrapHtmlRegex = toRE(r$1`</?(?:div|p|br|hr|h\d|article|dd|dl)[^>]*>`),
    indent1Regex = toRE(r$1`\s*\n+\s*`),
    indent2Regex = toRE(r$1`^[\n\s]+`),
    lastRegex = toRE(r$1`[\n\s]+$`),
    otherHtmlRegex = toRE(r$1`</?[a-zA-Z]+(?=[ >])[^<>]*>`);

  function htmlFmt(text, otherRegex = otherHtmlRegex) {
    text = text.replace(toRE('\ufeff|\u200b'), '');
    text = text.replace(spaceRegex, ' ');
    text = text.replace(noPrintRegex, '');
    text = text.replace(wrapHtmlRegex, '\n');
    text = text.replace(otherRegex, '');
    text = text.replace(indent1Regex, '\n');
    text = text.replace(indent2Regex, '');
    text = text.replace(lastRegex, '');
    // Unescape HTML entities
    text = parseHTML(text).documentElement.textContent;

    return text
  }

  /**
   * 清除 HTML 代码，保留格式
   * @param {Document} doc
   * @returns {string}
   */
  function cleanHTML(doc) {
    const treeWalker = document.createTreeWalker(doc, NodeFilter.SHOW_COMMENT);
    while (treeWalker.nextNode()) {
      treeWalker.currentNode.remove();
    }

    // 模拟渲染文本节点
    getTextNodesIn(doc, true)
      .filter(n => n.data !== '\n')
      .forEach(n => (n.data = n.data.trim().replace(/\s+/g, ' ')));

    return htmlFmt(doc.outerHTML)
  }

  function renderHTML(text) {
    text = text
      .split('\n')
      .filter(t => !!t.trim())
      .map(t => `<p>　　${escapeHtml(t)}</p>`)
      .join('\n');

    return `<div class="content">${text}</div>`
  }

  // https://stackoverflow.com/a/22706073
  const p = document.createElement("p");
  function escapeHtml(text) {
    p.textContent = text;
    return p.innerHTML
  }

  function getElemFontSize(_heading) {
      var fontSize = 0;
      var _heading_style = window.getComputedStyle(_heading, null);
      if (_heading_style) {
          // firefox57 2017年9月10日 会错误
          try {
              var str = _heading_style.getPropertyValue("font-size") || 0;
              fontSize = parseInt(str, 10);
          } catch(e) { }
      }

      return fontSize
  }

  function Parser(){
      this.init.apply(this, arguments);
  }

  Parser.prototype = {
      constructor: Parser,
      get contentTxt() {  // callback 才有用
          var text = $('<div>').html(this.content).text().trimRight();

          // 解决第二个段落和第一个锻炼合在一起的问题
          text = text.replace(/([^\n])　　/, '$1\n　　');

          return text;
      },

      init: function (info, doc, curPageUrl) {
          // 站点规则
          this.info = info || {};
          this.doc = (info.cloneNode && doc.defaultView) ? doc.cloneNode(true) : doc;
          this.$doc = $(this.doc);
          this.curPageUrl = curPageUrl || doc.URL;
          this._curPageHost = getUrlHost(this.curPageUrl);  // 当前页的 host，后面用到

          // 设置初始值
          this.isTheEnd = false;
          this.isSection = false;

          if (doc.defaultView && doc.defaultView.$cleanupEvents) {
              doc.defaultView.$cleanupEvents(true);
          }
          
      },
      applyPatch: function(){
          var contentPatch = this.info.contentPatch;
          if(contentPatch){
              try {
                  contentPatch.call(this, this.$doc);
                  C.log("Apply Content Patch Success.");
              } catch (e) {
                  C.log("Error: Content Patch Error!", e);
              }
          }
      },
      applyAsyncPatch: async function() {
          var contentPatch = this.info.contentPatchAsync;
          if(contentPatch){
              try {
                  await contentPatch.call(this, this.$doc);
                  C.log("Apply Content Patch[Async] Success.");
              } catch (e) {
                  C.log("Error: Content Patch[Async] Error!", e);
              }
          }
      },
      getAll: async function(){

          C.log('开始解析页面');

          this.applyPatch();

          await this.applyAsyncPatch();

          await this.preProcessDoc();

          this.parse();

          return this;
      },
      preProcessDoc: async function() {
          let data;

          if (!this.hasContent() && this.info.getContent) {
              C.log('开始 info.getContent');
              data = await this.info.getContent.call(this, this.$doc);
              this.$content = null;
          } /* else {
              // 特殊处理，例如起点
              var ajaxScript = this.$doc.find('.' + READER_AJAX);
              if (ajaxScript.length > 0) {
                  var url = ajaxScript.attr('src');
                  if(!url) return;
                  var charset = ajaxScript.attr('charset') || 'utf-8';

                  C.log('Ajax 获取内容: ', url, ". charset=" + charset);

                  var reqObj = {
                      url: url,
                      method: "GET",
                      overrideMimeType: "text/html;charset=" + charset,
                      headers: {},
                  };

                  // Jixun: Allow post data
                  var postData = ajaxScript.data('post');

                  if (postData) {
                      reqObj.method = 'POST';
                      reqObj.data = $.param(postData);
                      reqObj.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                  }

                  let res = await Request(reqObj)
                  var text = res.responseText;
                  text = text.replace(/document.write(ln)?\('/, "")
                          .replace("');", "")
                          .replace(/[\n\r]+/g, '</p><p>');

                  data = { content: text }

              }
          } */
          if (data) {
              var div;
              if (data.content) {
                  div = $('<div id="content"></div>').html(data.content);
              } else if (data.html) {
                  div = $('<div></div>').html(data.html);
              }

              this.$doc.find('body').prepend(div);
          }

      },
      parse: function() {
          C.group('开始获取链接');
          this.getPrevUrl();
          this.getIndexUrl();
          this.getNextUrl();
          C.groupEnd();

          C.group('开始获取标题');
          this.getTitles();
          C.groupEnd();

          this.getContent();
      },

      hasContent: function() {
          if (this.$content) {
              return this.$content.size() > 0;
          }

          var $content;

          // var $ajaxScript = this.$doc.find('.' + READER_AJAX);
          // if ($ajaxScript.length > 0) {
          //     return true;
          // }

          // 排除 qidian 需付费的页面
          if (this.info.isVipChapter) {
              if (this.info.isVipChapter(this.$doc)) {
                  this.isTheEnd = 'vip';
                  return false;
              }
          }

          if(this.info.contentSelector){
              $content = this.$doc.find(this.info.contentSelector);
          }

          if (!$content || !$content.length) {
              // 按照顺序选取
              var selectors = Rule.contentSelectors;
              for(var i = 0, l = selectors.length; i < l; i++){
                  $content = this.$doc.find(selectors[i]);
                  if($content.length){
                      C.log("自动查找内容选择器: " + selectors[i]);
                      break;
                  }
              }
          }

          this.$content = $content;
          // C.debug($content);

          return $content.size() > 0;
      },
      // 获取书名和章节标题
      getTitles: function(){
          var info = this.info,
              chapterTitle,
              bookTitle,
              docTitle = this.$doc.find("title").text();

          // 获取章节标题
          if (info.titleReg){
              var matches = docTitle.match(toRE(info.titleReg, 'i'));
              if(matches && matches.length >= 2){
                  var titlePos = ( info.titlePos || 0 ) + 1;
                  var chapterPos = (titlePos == 1) ? 2 : 1;

                  bookTitle = matches[titlePos];
                  chapterTitle = matches[chapterPos];
              }

              C.log("TitleReg:", info.titleReg, matches);
          }

          // 如果有 titleSelector 则覆盖从 titleReg 中获取的
          var tmpChapterTitle = this.getTitleFromRule(info.titleSelector);
          if (tmpChapterTitle) {
              chapterTitle = tmpChapterTitle;
          }

          if(!chapterTitle){
              chapterTitle = this.autoGetChapterTitle(this.doc);
          }
          if (info.chapterTitleReplace) {
              chapterTitle = chapterTitle.replace(toRE(info.chapterTitleReplace), '');
          }

          // get bookTitle
          if (!bookTitle && info.bookTitleSelector) {
              bookTitle = this.getTitleFromRule(info.bookTitleSelector);
          }
          if (!bookTitle) {
              bookTitle = autoGetBookTitle(this.$doc);
              bookTitle = this.replaceText(bookTitle, Rule.bookTitleReplace);
          }
          if (info.bookTitleReplace) {
              bookTitle = bookTitle.replace(toRE(info.bookTitleReplace), '');
          }

          // 标题间增加一个空格，不准确，已注释
          chapterTitle = chapterTitle
                  .replace(Rule.titleReplace, "")
                  .trim();
                  // .replace(/(第?\S+?[章节卷回])(.*)/, "$1 $2");

          if (chapterTitle.startsWith(bookTitle)) {
              var _chapterTitle = chapterTitle.replace(bookTitle, '').trim();
              if (_chapterTitle.length > 0) {
                  chapterTitle = _chapterTitle;
              }
          }

          bookTitle = bookTitle.replace(/(?:最新章节|章节目录)$/, '');

          docTitle = bookTitle ?
                  bookTitle + ' - ' + chapterTitle :
                  docTitle;

          // if (Setting.cn2tw) {
          //     bookTitle = this.convert2tw(bookTitle);
          //     chapterTitle = this.convert2tw(chapterTitle);
          //     docTitle = this.convert2tw(docTitle);
          // }

          this.originChapterTitle = chapterTitle;

          bookTitle = chineseConversion(bookTitle);
          chapterTitle = chineseConversion(chapterTitle);
          docTitle = chineseConversion(docTitle);

          this.bookTitle = (bookTitle || '目录').trim();
          this.chapterTitle = chapterTitle;
          this.docTitle = docTitle;

          C.log("Book Title: " + this.bookTitle);
          C.log("Chapter Title: " + this.chapterTitle);
          C.log("Document Title: " + this.docTitle);
      },
      getTitleFromRule: function(selectorOrArray) {
          var title = '';
          if (!selectorOrArray) {
              return '';
          }

          if (_.isFunction(selectorOrArray)) {
              try {
                  title = selectorOrArray(this.$doc);
              } catch (e) {
                  C.error("执行获取标题函数规则出错", e);
              }
              if (!title) {
                  C.error('无法找到标题', selectorOrArray, this.doc);
                  return ''
              }
              return title
          }

          var selector,
              replace;

          if (_.isArray(selectorOrArray)) {
              selector = selectorOrArray[0];
              replace = selectorOrArray[1];
          } else {
              selector = selectorOrArray;
          }

          var $title = this.$doc.find(selector);
          if (!$title.length) {
              C.error('无法找到标题', selector, this.doc);
              return '';
          }

          title = $title.remove().first().text().trim();

          if (replace) {
              title = title.replace(toRE(replace), '');
          }

          return title;
      },
      // 智能获取章节标题
      autoGetChapterTitle: function (document) {
          var
              _main_selector = "h1, h2, h3",
              _second_selector = "#TextTitle, #title, .ChapterName, #lbChapterName, div.h1, #nr_title",
              _positive_regexp = Rule.titleRegExp,
              // _positive_regexp = /第?\S+[章节卷回]|\d{2,4}/,
              // _negative_regexp = /[上前下后][一]?[页张个篇章节步]/,
              _title_remove_regexp = /最新章节|书书网/,
              $doc = $(document),
              _document_title = document.title || $doc.find("title").text(),
              _search_document_title = ' ' + _document_title.replace(/\s+/gi, ' ') + ' '
          ;

          var _headings = $doc.find(_main_selector);
          // 加上 second selector 并去除包含的
          $doc.find(_second_selector).each(function(){
              if($(this).find(_main_selector).length === 0){
                  _headings.push(this);
              }
          });

          var possibleTitles = {},
              _heading_text;

          C.groupCollapsed('自动查找章节标题');

          $(_headings).each(function(){
              var _heading = this,
                  _heading_text = _heading.textContent.trim();

              if (!_heading_text || _heading_text in possibleTitles) {
                  return;
              }

              C.group('开始计算 "' + _heading_text + '" 的得分');

              // h1 为 1， h2 为 2
              var
                  nodeNum = parseInt(_heading.nodeName.slice(1), 10) || 10,
                  score = 10 / nodeNum,
                  _heading_words = _heading_text.replace(/\s+/g, " ").split(" "),
                  _matched_words = ""
              ;

              C.log("初始得分：" + score);

              // 后面这种是特殊的判断
              if (_positive_regexp.test(_heading_text) || /\d{2,4}/.test(_heading_text)) {
                  score += 50;
              }
              // if(_negative_regexp.test(_heading_text)){
              //     score -= 100;
              // }

              C.log("符合正则计算后得分：" + score);

              //  count words present in title
              for (var j = 0, _j = _heading_words.length; j < _j; j++) {
                  if (_search_document_title.indexOf(_heading_words[j]) > -1) {
                      _matched_words += _heading_words[j] + ' ';
                  }
              }
              score += _matched_words.length * 1.5;

              C.log("跟页面标题比较后得分：" + score);

              var _font_size_add_score = getElemFontSize(_heading) * 1.5;
              score +=  _font_size_add_score;

              C.log("计算大小后得分：" + score);

              possibleTitles[_heading_text] = score;

              C.groupEnd();
          });

          // 找到分数最高的值
          var topScoreTitle,
              score_tmp = 0;
          for (_heading_text in possibleTitles) {
              if (possibleTitles[_heading_text] > score_tmp) {
                  topScoreTitle = _heading_text;
                  score_tmp = possibleTitles[_heading_text];
              }
          }

          var curTitle = topScoreTitle;
          if (!curTitle) {
              curTitle = _document_title;

              // 下面的正则从
              //     Firefox-Firefox浏览器论坛-卡饭论坛 - 互助分享 - 大气谦和!
              // 变为
              //     Firefox-Firefox浏览器论坛-卡饭论坛
              curTitle = curTitle.replace(/\s-\s.*/i, "")
                  .replace(/_[^\[\]【】]+$/, "");
              curTitle = curTitle.trim();
              curTitle = curTitle.replace(_title_remove_regexp, '');
          }

          curTitle = curTitle.replace(Rule.titleReplace, "");

          C.groupEnd();

          return curTitle;
      },

      // 获取和处理内容
      getContent: function(){

          this.hasContent();

          if (!this.$content || this.$content.size() <= 0) {
              // callback(this);
              C.error('没有找到内容', this.$doc);
              return;
          }

          if (_.isFunction(this.info.handleContentText)) {
              try {
                  this.content = this.info.handleContentText.call(this, this.$content[0], this.info);
              } catch (e) {
                  this.content = this.handleContentText2(this.$content[0], this.info);
                  C.error("执行内容处理函数规则出错，使用默认函数处理", e);
              }
          } else {
              this.content = this.handleContentText2(this.$content[0], this.info);
          }

      },
      handleContentText: function(node, info){ // 已弃用
          if(!node) return null;

          if (info.useRawContent) {
              C.log('内容处理已被自定义站点规则 useRawContent 关闭');
              return node.outerHTML
          }


          // 贴吧的内容处理比较耗时间
          C.group('开始内容处理');
          C.time('内容处理');

          var contentHandle = (typeof(info.contentHandle) == 'undefined') ? true : info.contentHandle;

          // 拼音字、屏蔽字修复
          // if(contentHandle){
          //     text = this.replaceHtml(text, Rule.replace);
          // }

          /* Turn all double br's into p's */
          // text = text.replace(Rule.replaceBrs, '</p>\n<p>');
          // text = text.replace(/<\/p><p>/g, "</p>\n<p>");

          // GM_setClipboard(text);

          // // 规则替换
          // if (info.contentReplace) {
          //     text = this.replaceText(text, info.contentReplace);
          // }

          // // 移除文字广告等
          // text = this.replaceText(text, Rule.replaceAll);

          // 去除内容中的标题
          // if(this.chapterTitle && Rule.titleRegExp.test(this.chapterTitle)){
          //     try {
          //         var reg = toReStr(this.chapterTitle).replace(/\s+/g, '\\s*');
          //         // reg = new RegExp(reg, 'ig');
          //         text = text.replace(toRE(reg), "");
          //         C.log('去除内容中的标题', reg);
          //     } catch(e) {
          //         C.error(e);
          //     }
          // }

          // if (this.bookTitle) {
          //     var regStr = '（' + toReStr(this.bookTitle) + '\\d*章）'
          //     text = text.replace(toRE(regStr), "");
          // }

          // 移除 html 注释
          // text = text.replace(toRE('<!--[\\s\\S]*?-->'), '')

          // if (Setting.cn2tw) {
          //     text = this.convert2tw(text);
          // }

          // try {
          //     text = this.contentCustomReplace(text);
          // } catch(ex) {
          //     console.error('自定义替换错误', ex);
          // }

          // 采用 DOM 方式进行处理
          // var $div = $("<div>").html(node);
          var $div = $(node.cloneNode(true));

          // 移除 html 注释
          const treeWalker = document.createTreeWalker($div[0], NodeFilter.SHOW_COMMENT);

          while (treeWalker.nextNode()) {
              treeWalker.currentNode.remove();
          }

          // 尝试删除正文中的章节标题
          $div.find('h1, h2, h3').remove();

          // 删除带默认样式的标签
          const styledTags = ['i', 'b', 'em', 'strong'];
          styledTags.forEach(name => unwrapTag($div[0], name));

          // contentRemove
          $div.find(Rule.contentRemove).remove();
          if(info.contentRemove){
              $div.find(info.contentRemove).remove();
          }

          var $contents = $div.children();
          if ($contents.length === 1) {   // 可能里面还包裹着一个 div
              $contents.children().unwrap();
          }

          // 净化文本节点内容
          // 会进行拼音字修复，规则替换，广告净化，自定义替换
          this.clearContent($div[0], info);

          // 给独立的文本加上 p
          // var $contents = $div.contents();
          // if ($contents.length === 1) {   // 可能里面还包裹着一个 div
          //     $contents = $contents.contents()
          // }
          // $contents.filter(function() {
          //     return this.nodeType == 3 &&
          //         this.textContent != '\n' &&
          //         (!this.nextElementSibling || this.nextElementSibling.nodeName != 'A') &&
          //         (!this.previousElementSibling || this.previousElementSibling.nodeName != 'A');
          // }).wrap('<p>');

          // 删除无效的 p，排除对大块文本的判断
          $div.find('p, h1, div').filter(function() {
              var $this = $(this);
              if ($this.find('img').size())  // 排除有图片的
                  return false;

              // 有效文本（排除注释、换行符、空白）个数为 0
              return $this.contents().filter(function() {
                  return this.nodeType != 8 &&
                          !this.textContent.match(/^\s*$/);
              }).size() == 0;
          }).remove();

          // 把一大块的文本分段
          if (Setting.split_content) {
              var $p = $div.find('p'),
                  $newP;
              if ($p.length == 0 ) {
                  $newP = $div;
              } else if ($p.length == 1) {
                  $newP = $p;
              }

              if ($newP) {
                  $newP.replaceWith('<p>' + this.splitContent($newP.html()).join('</p>\n<p>') + '</p>');
              }
          }

          if(contentHandle){
              // $div.find('br').remove();

              $div.find('*').removeAttr('style');
          }

          // $div.find('p').removeAttr('class');

          // 图片居中，所有图像？
          // if(info.fixImage){
          //     $div.find("img").each(function(){
          //         this.className += " blockImage";
          //     });
          // }

          let text = $div.html();

          // 修复第一行可能是空的情况
          text = text.replace(/(?:\s|&nbsp;)+<p>/, "<p>");

          // 修复当行就一个字符的
          text = text.replace(/<\/p><p>([。])/, "$1");

          {
              text = text.replace(/<p[^>]*>(?:\s|&nbsp;)*/g, "<p>　　");
                      // .replace(/<p>/g, "<p>　　");
          }

          // 删除空白的、单个字符的 p
          text = text.replace(Rule.removeLineRegExp, "");

          // text = this.removeDump(text)

          C.timeEnd('内容处理');
          C.groupEnd();

          return text;
      },
      clearContent: function(dom, info) { // 已弃用
          // 将br，转换为p段落
          let elements = [];
          let brCount = 0;
          $(dom).contents().each(function (index, element) {
              if (element.nodeName === "BR") {
                  brCount++;
                  $(element).remove();
              } else {
                  elements.push(element);
              }
              if (brCount === 2) {
                  brCount = 0;
                  $(elements).wrapAll("<p>");
                  elements = [];
              }
          });

          const textNodes = getTextNodesIn(dom, true).filter(node => {
              // 不处理内嵌图片的文本节点
              if (
                  node.previousSibling &&
                  (node.previousSibling.nodeName === 'IMG' ||
                  node.previousSibling.nodeName === 'SPAN')
              ) {
                  return false
              }
              if (
                  node.nextSibling &&
                  (node.nextSibling.nodeName === 'IMG' ||
                  node.nextSibling.nodeName === 'SPAN')
              ) {
                  return false
              }
              if (node.data === '\n') {
                  return false
              }
              return true
          });

          // 获取节点文本并去重
          // 例如 https://www.biquge.name/html/3/3165/71213641.html
          const contents = textNodes.map(node => node.data.trim().replace(/\s+/g, ' '));
          const deDupeConetents = [...new Set(contents)];

          let content;

          // 查重率超过 10% 则使用去重后内容
          const dupeRate = (contents.length - deDupeConetents.length) / contents.length;
          if (dupeRate > 0.1) {
              content = deDupeConetents.join('\n');
              C.log(`去除了 ${contents.length - deDupeConetents.length} 段重复内容`);
          } else {
              content = contents.join('\n');
          }

          var contentHandle = (typeof(info.contentHandle) == 'undefined') ? true : info.contentHandle;

          C.log(`本章字数：${content.length}`);

          // 去除内容中的标题
          if (this.chapterTitle) {
              try {
                  var reg = toReStr(this.chapterTitle.trim()).replace(/\s+/g, '\\s*');
                  content = content.replace(toRE(`^${reg}$`), '');
                  C.log('去除内容中的标题', reg);
              } catch (e) {
                  C.error(e);
              }
          }

          // 拼音字、屏蔽字修复
          if (contentHandle) {
              content = this.replaceText(content, Rule.replace);
          }

          // 删除含网站域名行文本
          const removeText = [];
          const hostRe = toRE(`^.*?${this._curPageHost}.*?$`);
          content = content.replace(hostRe, match => {
              removeText.push(match);
              return ''
          });  
          C.log(`删除含网站域名行`, hostRe, removeText);

          // 规则替换
          if (info.contentReplace) {
              content = this.replaceText(content, info.contentReplace);
          }

          content = this.replaceText(content, Rule.replaceAll);
          
          // 内容标准化处理
          if (Setting.contentNormalize) {
              content = this.replaceText(content, getNormalizeMap());
              content = toCDB(content);
          }

          // 繁简转换
          content = chineseConversion(content);

          try {
              content = this.contentCustomReplace(content);
          } catch(ex) {
              C.error('自定义替换错误', ex);
          }

          // dom.innerHTML = content
          //     .split('\n')
          //     .filter(t => !!t)
          //     .map(t => `<p>${t}</p>`)
          //     .join('\n')
          
          // return

          // 给独立的文本节点包裹一个p标签，同时去掉它们之间的 br
          // textNodes
          //     .filter(node => {
          //         if (node.parentNode.nodeName === 'P') {
          //             return false
          //         }
          //         if (node.previousSibling && node.previousSibling.nodeName === 'BR') {
          //             if (node.nextSibling && node.nextSibling.nodeName === 'BR') {
          //                 node.nextSibling.remove()
          //             }
          //             node.previousSibling.remove()
          //             return true
          //         }
          //         if (node.nextSibling && node.nextSibling.nodeName === 'BR') {
          //             if (node.previousSibling && node.previousSibling.nodeName === 'BR') {
          //                 node.previousSibling.remove()
          //             }
          //             node.nextSibling.remove()
          //             return true
          //         }
          //         return node.parentNode.childNodes.length > 1
          //     })
          //     .forEach(node => $(node).wrap('<p>'))
          
          // $(dom).find('br').remove()

          const finalContents = content.split('\n');
          
          // 将内容写回到文本节点中
          if (finalContents.length <= textNodes.length) {
              textNodes.forEach((node, index) => {
                  if (!finalContents[index]) {
                      node.data = '';
                  } else if (node.data.trim() !== finalContents[index]) {
                      node.data = finalContents[index];
                  }
              });
          } else {
              const centerTextNode = textNodes[parseInt(textNodes.length / 2)];
              const parentNode = $(centerTextNode).closest('div');
              const nodeAncestors = $(centerTextNode, parentNode).parents().slice(1);
              let appended = false; // 是否手动添加过p标签
              finalContents.forEach((text, index) => {
                  if (_.isUndefined(textNodes[index])) {
                      $('<p>').text(text).appendTo(parentNode);
                  } else if (textNodes[index].data.trim() !== text) {
                      const textNodeAncestors = $(textNodes[index], parentNode).parents().slice(1);
                      if (
                          !appended &&
                          nodeAncestors.not(textNodeAncestors).length === 0 &&
                          textNodes[index].parentNode.nodeName === 'P'
                      ) {
                          textNodes[index].data = text;
                      } else {
                          appended = true;
                          textNodes[index].remove();
                          $('<p>').text(text).appendTo(parentNode);
                      }
                  }
              });
          }

      },
      handleContentText2(node, info) {
          if(!node) return null;

          if (info.useRawContent) {
              C.log('内容处理已被自定义站点规则 useRawContent 关闭');
              return node.outerHTML
          }

          C.group('开始内容处理');
          C.time('内容处理');

          var $div = $(node.cloneNode(true));

          // 尝试删除正文中的章节标题
          $div.find('h1, h2, h3').remove();

          // contentRemove
          $div.find(Rule.contentRemove).remove();
          if(info.contentRemove){
              $div.find(info.contentRemove).remove();
          }

          let content = cleanHTML($div[0]);

          C.groupCollapsed('文本内容');
          C.log(content);
          C.groupEnd();

          // 去重
          const contents = content.split('\n');
          const deDupeConetents = [...new Set(contents)];

          // 查重率超过 10% 则使用去重后内容
          const dupeRate = (contents.length - deDupeConetents.length) / contents.length;
          if (dupeRate > 0.1) {
              content = deDupeConetents.join('\n');
              C.log(`去除了 ${contents.length - deDupeConetents.length} 段重复内容`);
          }

          var contentHandle = (typeof(info.contentHandle) == 'undefined') ? true : info.contentHandle;

          C.log(`本章字数：${content.length}`);

          // 去除内容中的标题
          if (this.originChapterTitle) {
              try {
                  var reg = toReStr(this.originChapterTitle.trim()).replace(/\s+/g, '\\s*');
                  reg = "(" + this.bookTitle.trim() + "\\s*)*" + "\\s*" + "(" + reg + ")*";
                  content = content.replace(toRE(`^${reg}$`), '');
                  C.log('去除内容中的标题', reg);
              } catch (e) {
                  C.error(e);
              }
          }

          // C.groupCollapsed('文本内容 - replace')
          // C.log(content)
          // C.groupEnd()

          // 拼音字、屏蔽字修复
          if (contentHandle) {
              content = this.replaceText(content, Rule.replace);
          }

          // 删除含网站域名行文本
          if (Setting.removeDomainLine) {
              const removeText = [];
              const hostRe = toRE(`^.*?${this._curPageHost}.*?$`);
              content = content.replace(hostRe, match => {
                  removeText.push(match);
                  return ''
              });  
              C.log(`删除含网站域名行`, hostRe, removeText);
          }

          // C.groupCollapsed('文本内容 - contentReplace')
          // C.log(content)
          // C.groupEnd()

          // 规则替换
          if (info.contentReplace) {
              content = this.replaceText(content, info.contentReplace);
          }

          // C.groupCollapsed('文本内容 - replaceAll')
          // C.log(content)
          // C.groupEnd()

          // 广告过滤
          content = this.replaceText(content, Rule.replaceAll);

          // C.groupCollapsed('文本内容 - end')
          // C.log(content)
          // C.groupEnd()
          
          // 繁简转换
          content = chineseConversion(content);

          // 自定义替换
          try {
              content = this.contentCustomReplace(content);
          } catch(ex) {
              C.error('自定义替换错误', ex);
          }

          // 内容标准化处理
          if (Setting.contentNormalize) {
              content = toDBC(toCDB(content));
              content = this.replaceText(content, getNormalizeMap());
          }

          const contentHTML = renderHTML(content);

          C.timeEnd('内容处理');
          C.groupEnd();

          return contentHTML

      },
      normalizeContent: function(html) {
          html = html.replace(/<\/p><p>/g, '</p>\n<p>');

          return html;
      },
      /**
       * 移除内容中大块的重复。
       * 例如：http://www.wangshuge.com/books/109/109265/28265316.html
       *
       * @param  {string} html 内容
       * @return {string}      处理后的内容
       */
      removeDump: function(html) {
          html = this.normalizeContent(html);
          var newContent = html;

          var lines = html.split('\n');
          var firstLine = lines[0];
          // 有重复
          if (firstLine.length > 10) {
              // 因为 indexOf 只查找第一个
              var dumpIndex = lines.slice(1).indexOf(firstLine) + 1;
              if (dumpIndex >= config.dumpContentMinLength) {
                  var firstPart = lines.slice(0, dumpIndex).join('\n');
                  var restPart = lines.slice(dumpIndex).join('\n')
                      .replace(/^<\/p>\n/, '');
                  if (restPart.startsWith(firstPart)) {
                      newContent = restPart;
                  }
              }
          }

          return newContent;
      },
      replaceHtml: function(text, replaceRule) {  // replaceRule 给“自定义替换规则直接生效”用
          if (!replaceRule) {
              replaceRule = Rule.replace;
          }

          // 先提取出 img
          var imgs = {};
          var i = 0;
          text = text.replace(/<(img|a)[^>]*>/g, function(img){
              imgs[i] = img;
              return "{" + (i++) + "}";
          });

          // 修正拼音字等
          text = this.contentReplacements(text, replaceRule);

          // 还原图片
          text = $.nano(text, imgs);

          return text;
      },
      contentReplacements: function (text, rule) {
          if (!text) return text;

          for (var key in rule) {
              text = text.replace(toRE(key, "ig"), rule[key]);
          }
          return text;
      },
      replaceText: function(text, rule){
          var self = this;
          switch(true) {
              case _.isRegExp(rule):
                  text = text.replace(rule, '');
                  break;
              case _.isString(rule):
                  // 还原简写
                  _.each(CHAR_ALIAS, function(value, key) {
                      rule = rule.replace(key, value);
                  });
                  text = text.replace(toRE(rule), '');
                  break;
              case _.isArray(rule):
                  rule.forEach(function(r){
                      text = self.replaceText(text, r);
                  });
                  break;
              case _.isObject(rule):
                  var key;
                  for(key in rule){
                      text = text.replace(toRE(key), rule[key]);
                  }
                  break;
          }
          return text;
      },
      convert2tw: function (text) {
          if (!text) return text;

          var ii, len, str;
          str = text.split("");
          len = str.length;
          for (ii = 0; ii < len; ii++) {
              str[ii] = cn2tw[str[ii]] || str[ii];
          }

          str = str.join("");

          return str;
      },
      contentCustomReplace: function (text) {
          if (!text) return text;

          for (var key in Rule.customReplace) {
              text = text.replace(toRE(key), Rule.customReplace[key]);
          }
          return text;
      },
      splitContent: function (text) {  // 有些章节整个都集中在一起，没有分段，这个函数用于简易分段
          if (text.indexOf('。') == -1) {
              return [text];
          }

          var hasMark = false,
              lines = [],
              charCotainer = [];

          text.split('').forEach(function(c) {
              charCotainer.push(c);

              if (c == '“') {
                  hasMark = true;
              } else if (c == '”') {
                  hasMark = false;
              } else if (c == '。' && !hasMark) {
                  lines.push(charCotainer.join(''));
                  charCotainer = [];
              }
          });

          return lines;
      },

      getIndexUrl: function(){
          var url = '',
              selector = this.info.indexSelector || this.info.indexUrl;

          if (selector === false) {
              this.indexUrl = url;
              return url;
          }

          // 先尝试站点规则
          if (selector && _.isFunction(selector)) {
              try {
                  url = selector(this.$doc);
              } catch (e) {
                  C.error("执行获取目录链接函数规则出错", e);
              }
          } else if(this.info.indexSelector){
              url = this.$doc.find(this.info.indexSelector);
          }

          // 再尝试通用规则
          if (!url || !url.length) {
              var selectors = Rule.indexSelectors;
              var _indexLink;
              // 按照顺序选取目录链接
              for(var i = 0, l = selectors.length; i < l; i++){
                  _indexLink = this.$doc.find(selectors[i]);
                  if(_indexLink.length > 0){
                      url = _indexLink;
                      break;
                  }
              }
          }

          if(url){
              url = this.checkLinks(url);
              C.log("找到目录链接: " + url);
          }

          if (!url) {
              C.log("无法找到目录链接.");
          }

          this.indexUrl = url;
          return url;
      },
      getNextUrl: function(){
          var url = '',
              selector = this.info.nextSelector || this.info.nextUrl,
              noSection = this.info.noSection;

          if (selector === false) {
              this.nextUrl = url;
              return url;
          }

          var urlElement, isSectionUrl = false;

          // 先尝试站点规则
          if (selector) {
              if (_.isFunction(selector)) {
                  try {
                      urlElement = selector(this.$doc);
                  } catch (e) {
                      C.error("执行获取下一页链接函数规则出错", e);
                  }
              } else {
                  urlElement = this.$doc.find(selector);
              }

              url = this.checkLinks(urlElement);
          }

          // 再尝试通用规则
          if (!url) {
              urlElement = this.$doc.find(Rule.nextSelector);
              url = this.checkLinks(urlElement);
          }

          if (!noSection && url && urlElement && !_.isString(urlElement)) {
              // 一般第一页下一章按钮文本含页就是多页章节
              // 判断是否分页章节在获取上一页链接函数中处理
              // 这里如果是分页章节则跳过下一页地址的检查
              var t = urlElement.text();
              if (!this.isSection && (t.includes('页') || t.includes('頁'))) {
                  isSectionUrl = true;
              }
          }

          if (url) {
              C.log("找到下一页链接: " + url);
          } else {
              C.log("无法找到下一页链接");
          }

          this.nextUrl = url || '';

          if (!isSectionUrl) {
              this.isTheEnd = !this.checkNextUrl(url);
              if (this.isTheEnd) {
                  C.log('已到达最后一页');
                  this.theEndColor = config.end_color;
              }
          }
          
          return url;
      },
      // 获取上下页及目录页链接
      getPrevUrl: function(){
          var url = '',
              selector = this.info.prevSelector || this.info.prevUrl,
              noSection = this.info.noSection;

          if (selector === false) {
              this.prevUrl = url;
              return url;
          }

          var urlElement;

          // 先尝试站点规则
          if (selector) {
              if (_.isFunction(selector)) {
                  try {
                      urlElement = selector(this.$doc);
                  } catch (e) {
                      C.error("执行获取上一页链接函数规则出错", e);
                  }
              } else {
                  urlElement = this.$doc.find(selector);
              }

              url = this.checkLinks(urlElement);
          }

          // 再尝试通用规则
          if (!url) {
              urlElement = this.$doc.find(Rule.prevSelector);
              url = this.checkLinks(urlElement);
          }

          if (!noSection && url && urlElement && !_.isString(urlElement)) {
              // 一般第二页的上一章按钮文本含页就是多页章节
              // 这里如果判断成功则是第二页之后的内容
              // 设置 isSection 为 true 就可以将第二页之后的内容合并到第一页里面
              var t = urlElement.text();
              if (url && !this.isSection && (t.includes('页') || t.includes('頁'))) {
                  C.log('检测到多页章节链接，开启多页章节合并为一章模式');
                  this.isSection = true;
              }
          }

          if (url) {
              C.log("找到上一页链接: " + url);
          } else {
              C.log("无法找到上一页链接");
          }

          this.prevUrl = url || '';
          return url;
      },
      checkNextUrl: function (url) {
          const sectionUrlRegex = /\/\d+([_-]\d+|\/\d)\.html?$/;
          if (url && this.info.checkSection) {
              // 如果第一页的下一页地址和第二页（当前解析页）的上一页地址都不能通过分页地址正则的检测，则不是分页章节
              if (!sectionUrlRegex.test(this.curPageUrl) &&
                  !sectionUrlRegex.test(this.prevUrl)) {
                  this.isSection = false;
              } else if (sectionUrlRegex.test(this.curPageUrl)) {
                  this.isSection = true;
              } else {
                  this.isSection = false;
              }
          }

          // 跟 include 比较
          var includeUrl = this.info.includeUrl || this.getIncludeUrl();
          if (!toRE(includeUrl).test(url))
              return false;

          switch(true){
              case url === '':
                  return false
              case this.info.exclude && toRE(this.info.exclude).test(url):
                  return false
              case Rule.nextUrlIgnore.some(function(re) { return toRE(re).test(url) }):
                  return false
              case url === this.indexUrl:
                  return false
              case url === this.prevUrl:
                  return false
              case url === this.curPageUrl:
                  return false
              // 分页章节不能比较、第一章的上一页如果是目录页，也不能比较
              case !this.isSection && this.prevUrl !== this.indexUrl && Rule.nextUrlCompare.test(this.prevUrl.split('?')[0]) && !Rule.nextUrlCompare.test(url.split('?')[0]):
                  return false
              default:
                  return true
          }
      },
      getIncludeUrl: function() {
          var includeUrl = this.info.url;

          if (!includeUrl && typeof GM_info !== 'undefined') {
              var locationHref = location.href;
              GM_info.script.includes.some(function(includeStr) {
                  var iUrl = wildcardToRegExpStr(includeStr);
                  if (toRE(iUrl).test(locationHref)) {
                      includeUrl = iUrl;
                      return true;
                  }
              });
          }

          this.info.includeUrl = includeUrl;
          return includeUrl;
      },
      checkLinks: function(links){
          var self = this;
          var url = '';

          if (!links) return ''

          if (_.isString(links)) {
              return this.getFullHref(links);
          }

          links && links.each(function(){
              url = $(this).attr("href");
              if(!url || url.indexOf("#") === 0 || url.indexOf("javascript:") === 0)
                  return;

              url = self.getFullHref(this);
              return false;
          });

          return url;
      },
      getLinkUrl: function(linkOrUrl) {
          // if (linkOrUrl && )
          return linkOrUrl;
      },
      getFullHref: function(href) {
          if(!href) return '';

          if (!_.isString(href)) {
              href = href.getAttribute('href');
          }

          if (/^https?:\/\//.test(href)) {
              return href;
          }

          var a = this.a;
          if (!a) {
              this.a = a = document.createElement('a');
          }
          a.href = href.trim();

          // // 检测 host 是否和 当前页的一致
          // if (a.host != this._curPageHost) {
          //     a.host = this._curPageHost;
          // }

          return a.href;
      },
  };

  var tpl_mainCss = "@font-face {\r\n    font-family: 'FontAwesome';\r\n    src: url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0');\r\n    src: url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\r\n    src: url('data:application/font-woff2;base64,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') format('woff2');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n  }\r\n\r\nbody > a { display:none !important; }\r\n.hidden {\r\n    display: none;\r\n}\r\n.quiet-mode {\r\n    display: none;\r\n}\r\nbody {\r\n    background: #F3F2EE;\r\n    color: #1F0909;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: \"Microsoft YaHei UI\", 微软雅黑, 新宋体, 宋体, arial;\r\n}\r\na { color: #065488; }\r\na:link { text-decoration: none; }\r\n\r\n#mynovelreader-content {\r\n    width: auto;\r\n    max-width: {content_width};\r\n    font-size: {font_size};\r\n    font-family: {font_family};\r\n    line-height: {text_line_height};\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding-bottom: 15px;\r\n}\r\n#mynovelreader-content img{\r\n    max-width: 100%;\r\n}\r\n\r\narticle {\r\n    margin-top: 55px;\r\n    word-wrap: break-word;\r\n}\r\n\r\narticle p {\r\n    margin: {paragraph_height} 0;\r\n}\r\n\r\narticle h1 {\r\n    clear: both;\r\n    line-height: 50px;\r\n    font-size: {title_font_size};\r\n    font-weight: normal;\r\n    margin: 25px -20px;\r\n    padding: 0 20px 10px;\r\n    border-bottom: 1px solid rgba(0,0,0,.25);\r\n    font-weight: normal;\r\n    text-transform: none;\r\n}\r\n\r\narticle li {\r\n    list-style: none;\r\n}\r\n\r\n.chapter-footer-nav {\r\n    text-align:center;\r\n    font-size:0.9em;\r\n    margin:-10px 0px 30px 0px;\r\n}\r\n#loading {\r\n    color: white;\r\n    text-align: center;\r\n    font: 12px \"微软雅黑\", \"宋体\", \"Times New Roman\", \"Verdana\";\r\n    margin-top: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 376px;\r\n    height: 32px;\r\n    line-height: 32px;\r\n    border-radius: 20px;\r\n    border: 1px solid #666;\r\n    background-color: #333;\r\n}\r\n#loading img {\r\n    vertical-align: middle;\r\n}\r\n#loading a {\r\n    color: white;\r\n}\r\n#preferencesBtn{\r\n    position: fixed;\r\n    top: 10px;\r\n    right: 10px;\r\n    z-index: 1597;\r\n}\r\n\r\n#alert {\r\n    position: fixed;\r\n    z-index: 100;\r\n    float: auto;\r\n    width: auto;\r\n    height: auto;\r\n    top: 30px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background: rgba(215, 240, 253, 0.65);\r\n    color: #2d7091;\r\n    border: 1px solid rgba(45,112,145,0.3);\r\n    border-radius: 4px;\r\n}\r\n#alert p {\r\n    font-size: 15px;\r\n    margin: 6px;\r\n}\r\n\r\n#message {\r\n    position: fixed;\r\n    z-index: 1010;\r\n    width: auto;\r\n    height: auto;\r\n    top: 30px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n    padding: 8px 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 8px rgba(0,0,0,.2);\r\n    background: #fff;\r\n    display: inline-block;\r\n    pointer-events: all;\r\n\r\n    font-size: 12px;\r\n}\r\n#message .fa-spinner {\r\n    font-size: 13px;\r\n    margin-right: 4px;\r\n}\r\n#message p {\r\n    margin: 0;\r\n}\r\n\r\nimg.blockImage {clear: both;float: none;display: block;margin-left: auto;margin-right: auto;}\r\n\r\n#menu-bar {\r\n    border: solid rgba(0, 100, 255, .9);\r\n    border-width: 3px 2px 3px 0px;\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 40%;\r\n    height: 100px;\r\n    width: 2px;\r\n    z-index: 199;\r\n    {menu-bar-hidden}\r\n}\r\n#menu-bar {\r\n    top: 0px;\r\n    height: 100%;\r\n    width: 1px;\r\n    background: transparent;\r\n    border: none;\r\n}\r\n#menu {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n    width: 270px;\r\n    max-width: 100%;\r\n    background: #333;\r\n    overflow-y: auto;\r\n}\r\n#menu:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 46px;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 1px;\r\n    background: rgba(0,0,0,0.6);\r\n    box-shadow: 0 0 5px 2px rgba(0,0,0,0.6);\r\n}\r\n#header{\r\n    color: #777;\r\n    margin-top: 0;\r\n    border-top: 1px solid rgba(0,0,0,0.3);\r\n    background: #404040;\r\n    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);\r\n    text-shadow: 0 1px 0 rgba(0,0,0,0.5);\r\n    padding: 10px 12px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n#header a {\r\n    color: #777777;\r\n}\r\n#divider {\r\n    position: relative;\r\n    z-index: 300;\r\n    border-top: 1px solid rgba(255,255,255,0.01);\r\n    border-bottom: 1px solid rgba(0,0,0,0.3);\r\n    margin: 0;\r\n    height: 4px;\r\n    background: rgba(0,0,0,0.2);\r\n    box-shadow: 0 1px 0 rgba(255,255,255,0.05), inset 0 1px 3px rgba(0,0,0,0.3);\r\n}\r\n#chapter-list {\r\n    position: relative;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 200;\r\n    margin: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    list-style: none;\r\n    overflow-y: auto;\r\n}\r\n.chapter {\r\n    list-style: none;\r\n}\r\n.chapter:last-child {\r\n    border-bottom: 1px solid rgba(0,0,0,0.3);\r\n    box-shadow: 0 1px 0 rgba(255,255,255,0.05);\r\n}\r\n.chapter div {\r\n    color: #ccc;\r\n    font-size: 15px;\r\n    padding: 8px 20px;\r\n    border-top: 1px solid rgba(0,0,0,0.3);\r\n    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);\r\n    text-shadow: 0 1px 0 rgba(0,0,0,0.5);\r\n    display: block;\r\n    text-decoration: none;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n.chapter div:before {\r\n    content: \"\\f105\";\r\n    width: 20px;\r\n    margin-left: -10px;\r\n    float: left;\r\n    font-family: \"FontAwesome\" !important;\r\n    text-align: center;\r\n}\r\n.chapter div:hover {\r\n    background: #404040;\r\n    color: #fff;\r\n    outline: 0;\r\n}\r\n.chapter.active div {\r\n    background: #1a1a1a;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);\r\n}\r\n::-webkit-scrollbar {\r\n    height: 9px !important;\r\n    width: 9px !important;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #7D7D7D !important;\r\n    border-radius: 3px !important;\r\n}\r\n::-webkit-scrollbar-track-piece {\r\n    background-color: rgba(0,0,0,.25) !important;\r\n}\r\n";

  var tpl_preferencesHTML = "<form id=\"preferences\" name=\"preferences\">\r\n    <div id=\"setting_table1\">\r\n        <span id=\"top-buttons\">\r\n            <input title=\"部分选项需要刷新页面才能生效\" id=\"save_button\" value=\"√ 确认\" type=\"button\">\r\n            <input title=\"取消本次设定，所有选项还原\" id=\"close_button\" value=\"X 取消\" type=\"button\">\r\n        </span>\r\n        <div class=\"form-row\">\r\n            <label>\r\n                界面语言<select id=\"lang\">\r\n                </select>\r\n            </label>\r\n            <!-- <label title=\"将小说网页文本转换为繁体。\\n\\n注意：内置的繁简转换表，只收录了简单的单字转换，启用本功能后，如有错误转换的情形，请利用脚本的自订字词取代规则来修正。\\n例如：「千里之外」，会错误转换成「千里之外」，你可以加入规则「千里之外=千里之外」来自行修正。\">\r\n                <input type=\"checkbox\" id=\"enable-cn2tw\" name=\"enable-cn2tw\"/>网页：转繁体\r\n            </label> -->\r\n            <label>\r\n                <input type=\"checkbox\" id=\"debug\" name=\"debug\"/>调试模式\r\n            </label>\r\n            <a href=\"https://greasyfork.org/scripts/292-my-novel-reader/feedback\" target=\"_blank\">反馈地址</a>\r\n            <label id=\"quietMode\" class=\"right\" title=\"隐藏其他，只保留正文，适用于全屏状态下\">\r\n                <input class=\"key\" type=\"button\" id=\"quietModeKey\"/>安静模式\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <fieldset id=\"launch-mode\" style=\"width: 195px; display: inline-block;\">\r\n                <legend title=\"不影响 booklink.me 的启用\" style=\"cursor: default;\">启动模式</legend>\r\n                <input type=\"radio\" id=\"launch-mode-memory\" name=\"launch-mode\" value=\"memory\">\r\n                <label for=\"launch-mode-memory\">记忆</label>\r\n                <input type=\"radio\" id=\"launch-mode-auto\" name=\"launch-mode\" value=\"auto\">\r\n                <label for=\"launch-mode-auto\">自动</label>\r\n                <input type=\"radio\" id=\"launch-mode-manual\" name=\"launch-mode\" value=\"manual\">\r\n                <label for=\"launch-mode-manual\">手动</label>\r\n            </fieldset>\r\n            <fieldset id=\"chinese-conversion\" style=\"width: 195px; display: inline-block;\">\r\n                <legend title=\"将小说网页文本转换为简/繁体。\\n\\n注意：内置的繁简转换表，词库覆盖有限，可能会有误转换，启用本功能后，如有错误转换的情形，可以使用浏览器自带的翻译功能来转换或请利用脚本的自订字词取代规则来修正。\\n例如：「千里之外」，会错误转换成「千里之外」，你可以加入规则「千里之外=千里之外」来自行修正。\" style=\"cursor: default;\">繁简转换</legend>\r\n                <input type=\"radio\" id=\"chinese-conversion-disable\" name=\"chinese-conversion\" value=\"disable\">\r\n                <label for=\"chinese-conversion-disable\">关闭</label>\r\n                <input type=\"radio\" id=\"chinese-conversion-to-cn\" name=\"chinese-conversion\" value=\"to-cn\">\r\n                <label for=\"chinese-conversion-to-cn\">简体</label>\r\n                <input type=\"radio\" id=\"chinese-conversion-to-tw\" name=\"chinese-conversion\" value=\"to-tw\">\r\n                <label for=\"chinese-conversion-to-tw\">繁体</label>\r\n            </fieldset>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <fieldset id=\"content-normalize\">\r\n                <legend style=\"cursor: default;\">\r\n                    <label title=\"包含自动分段/合并、标点符号替换等功能\">\r\n                        <input type=\"checkbox\" id=\"enable-content-normalize\" name=\"content-normalize\"/>内容标准化\r\n                    </label>\r\n                </legend>\r\n                <label>\r\n                    <input type=\"checkbox\" name=\"content-normalize\" id=\"merge-qoutes-content\">合并双引号中的多行内容\r\n                </label>\r\n            </fieldset>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label style=\"display: inline-block;\">\r\n                <input type=\"checkbox\" id=\"preload-next-page\" name=\"preload-next-page\"/>预载下一页\r\n            </label>\r\n            <label style=\"display: inline-block;\">\r\n                <input type=\"checkbox\" id=\"fastboot\" name=\"fastboot\"/>快速启动\r\n            </label>\r\n            <!-- <label title=\"不影响 booklink.me 的启用\">\r\n                <input type=\"checkbox\" id=\"disable-auto-launch\" name=\"disable-auto-launch\"/>强制手动启用\r\n            </label> -->\r\n            <label title=\"booklink.me 点击的网站强制启用\">\r\n                <input type=\"checkbox\" id=\"booklink-enable\" name=\"booklink-enable\"/>booklink 自动启用\r\n            </label>\r\n            <label>\r\n                <input type=\"checkbox\" id=\"remove-domain-line\" name=\"remove-domain-line\"/>删除含网站域名行\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label title=\"图片章节用夜间模式没法看，这个选项在启动时会自动切换到缺省皮肤\">\r\n                <input type=\"checkbox\" id=\"pic-nightmode-check\" name=\"pic-nightmode-check\"/>\r\n                夜间模式的图片章节检测\r\n            </label>\r\n            <label>\r\n                <input type=\"checkbox\" id=\"copyCurTitle\"/>\r\n                打开目录复制当前标题\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label title=\"通过快捷键切换\">\r\n                <input type=\"checkbox\" id=\"hide-menu-list\"/>隐藏左侧章节列表\r\n            </label>\r\n            <label>\r\n                <input type=\"checkbox\" id=\"hide-footer-nav\"/>隐藏底部导航栏\r\n            </label>\r\n            <label class=\"right\" title=\"导出之后的所有章节\">\r\n                <input type=\"button\" id=\"saveAsTxt\" value=\"存为 txt（测试）\" />\r\n                <input type=\"button\" id=\"speech\" value=\"朗读\" />\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label>\r\n                左侧导航栏切换快捷键：\r\n            </label>\r\n            <input class=\"key\" type=\"button\" id=\"setHideMenuListKey\" />\r\n            <label title=\"通过快捷键切换或在 Greasemonkey 用户脚本命令处打开设置窗口\">\r\n                <input type=\"checkbox\" id=\"hide-preferences-button\"/>隐藏设置按钮\r\n            </label>\r\n            <input class=\"key\" type=\"button\" id=\"openPreferencesKey\"/>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label>\r\n                打开朗读快捷键：\r\n            </label>\r\n            <input class=\"key\" type=\"button\" id=\"setOpenSpeechKey\" />\r\n            <label>\r\n                <input type=\"checkbox\" id=\"enable-dblclick-pause\"/>双击暂停翻页\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label>\r\n                距离底部\r\n                <input type=\"textbox\" id=\"remain-height\" name=\"remain-height\" size=\"5\"/>\r\n                px 加载下一页\r\n            </label>\r\n            <label>\r\n                <input type=\"checkbox\" id=\"add-nextpage-to-history\"/>添加下一页到历史记录\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label>\r\n                <select id=\"skin\">\r\n                </select>\r\n            </label>\r\n            <label>\r\n                字体\r\n                <input type=\"textbox\" id=\"font-family\" style=\"min-width:200px;\"/>\r\n            </label>\r\n            <br/><br/>\r\n            <label>\r\n                字体大小\r\n                <input type=\"textbox\" id=\"font-size\" name=\"font-size\" size=\"6\"/>\r\n            </label>\r\n            <label>\r\n                行高\r\n                <input type=\"textbox\" id=\"text_line_height\" size=\"6\"/>\r\n            </label>\r\n            <label>\r\n                段高\r\n                <input type=\"textbox\" id=\"paragraph_height\" size=\"6\"/>\r\n            </label>\r\n            <br/><br/>\r\n            <label>\r\n                行宽\r\n                <input type=\"textbox\" id=\"content_width\" size=\"6\"/>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <label title=\"把一大块未分段的内容文本按照句号分段\">\r\n                <input type=\"checkbox\" id=\"split_content\"/>对一坨内容进行强制分段\r\n            </label>\r\n            <label>\r\n                <input type=\"checkbox\" id=\"scroll_animate\"/>章节直达滚动效果\r\n            </label>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"prefs_title\">自定义样式</div>\r\n            <textarea id=\"extra_css\" class=\"prefs_textarea\" placeholder=\"自定义样式\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div id=\"setting_table2\">\r\n        <div class=\"form-row\" title=\"详见脚本代码的 Rule.specialSite\">\r\n            <div class=\"prefs_title\">自定义站点规则</div>\r\n            <textarea id=\"custom_siteinfo\" class=\"prefs_textarea\" placeholder=\"自定义站点规则\" />\r\n        </div>\r\n        <div class=\"form-row\" title=\"一行一个，每行的第一个 = 为分隔符。\\n保存后生效\">\r\n            <div class=\"prefs_title\">自定义替换规则</div>\r\n            <textarea id=\"custom_replace_rules\" class=\"prefs_textarea\" placeholder=\"b[āà]ng=棒\" />\r\n        </div>\r\n    </div>\r\n</form>";

  var tpl_preferencesCSS = ".body {\r\n     color:#333;\r\n     margin: 0 auto;\r\n     background: white;\r\n     padding: 10px;\r\n     height: 420px;\r\n     overflow-y: auto;\r\n }\r\n #top-buttons {\r\n     background: none repeat scroll 0% 0% rgb(255, 255, 255);\r\n     display: block;\r\n     position: absolute;\r\n     top: -35px;\r\n     border-right: 12px solid rgb(224, 224, 224);\r\n     border-top: 12px solid rgb(224, 224, 224);\r\n     border-left: 12px solid rgb(224, 224, 224);\r\n     text-align: center;\r\n }\r\n input {\r\n     font-size: 12px;\r\n     margin-right: 3px;\r\n     vertical-align: middle;\r\n }\r\n .form-row {\r\n     overflow: hidden;\r\n     padding: 8px 12px;\r\n     margin-top: 3px;\r\n     font-size: 11px;\r\n }\r\n .form-row label {\r\n     padding-right: 10px;\r\n }\r\n .form-row input {\r\n     vertical-align: middle;\r\n     margin-top: 0px;\r\n }\r\n textarea, .form-row input {\r\n     padding: 2px 4px;\r\n     border: 1px solid #e5e5e5;\r\n     background: #fff;\r\n     border-radius: 4px;\r\n     color: #666;\r\n     -webkit-transition: all linear .2s;\r\n     transition: all linear .2s;\r\n }\r\n textarea {\r\n     width: 100%;\r\n     overflow: auto;\r\n     vertical-align: top;\r\n }\r\n textarea:focus, input:focus {\r\n     border-color: #99baca;\r\n     outline: 0;\r\n     background: #f5fbfe;\r\n     color: #666;\r\n }\r\n .prefs_title {\r\n     font-size: 12px;\r\n     font-weight: bold;\r\n }\r\n .prefs_textarea {\r\n     font-size: 12px;\r\n     margin-top: 5px;\r\n     height: 100px;\r\n }\r\n .right {\r\n    float: right;\r\n }";

  var Res = {
    CSS_MAIN: tpl_mainCss,

    preferencesHTML: tpl_preferencesHTML
        .uiTrans().replace(/\\n/g, '\n'),

    preferencesCSS: tpl_preferencesCSS,
  };

  const bus = new Vue();

  // 显示 语音朗读 对话框
  const SHOW_SPEECH = 'show-speech';

  const APPEND_NEXT_PAGE = 'appended_next_page';

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
          if (App$1.site.useSiteFont && App$1.siteFontInfo) {
              UI.siteFontFamily = App$1.siteFontInfo.siteFontFamily;
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
          }else {
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
              .html(App$1.isEnabled ? "退出".uiTrans() : "阅读模式".uiTrans())
              .mousedown(async function(event){
                  if(event.which == 1){
                      await App$1.toggle();
                  }else if(event.which == 2){
                      event.preventDefault();
                      L_setValue("mynoverlreader_disable_once", true);

                      var url = App$1.activeUrl || App$1.curPageUrl;
                      App$1.openUrl(url);
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

          $form.find('#preload-next-page').get(0).checked = Setting.preloadNextPage;

          // 启动模式
          $form.find(`#launch-mode-${Setting.launchMode}`).get(0).checked = true;

          // 繁简转换
          $form.find(`#chinese-conversion-${Setting.chineseConversion}`).get(0).checked = true;

          // 内容标准化
          $form.find('#enable-content-normalize').get(0).checked = Setting.contentNormalize;
          $form.find('#merge-qoutes-content').get(0).checked = Setting.mergeQoutesContent;

          // 快速启动
          $form.find('#fastboot').get(0).checked = Setting.fastboot;

          // 删除含网站域名行
          $form.find('#remove-domain-line').get(0).checked = Setting.removeDomainLine;

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
                      $(App$1.curFocusElement).find('p').css("margin", `${this.value} 0`);
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
                  await App$1.saveAsTxt();
                  break;
              case 'speech':
                  UI.preferencesCloseHandler();
                  bus.$emit(SHOW_SPEECH);
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
                  Setting.launchMode = this.value;
              }
          });

          // 繁简转换
          $form.find('#chinese-conversion input').each(function () {
              if (this.checked) {
                  Setting.chineseConversion = this.value;
              }
          });

          // 内容标准化
          Setting.contentNormalize = $form.find('#enable-content-normalize').get(0).checked;
          Setting.mergeQoutesContent = $form.find('#merge-qoutes-content').get(0).checked;

          // 快速启动
          Setting.fastboot = $form.find('#fastboot').get(0).checked;

          // 删除含网站域名行
          Setting.removeDomainLine = $form.find('#remove-domain-line').get(0).checked;

          // 自定义替换规则直接生效
          var rules = $form.find("#custom_replace_rules").get(0).value;
          Setting.customReplaceRules = rules;
          if (rules != UI._rules) {
              var contentHtml = App$1.oArticles.join('\n');
              if (rules) {
                  // 转换规则
                  rules = Rule.parseCustomReplaceRules(rules);
                  // 替换
                  contentHtml = Parser.prototype.replaceHtml(contentHtml, rules);
              }

              UI.$content.html(contentHtml);

              App$1.resetCache();

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

  let $messageDiv;
  let _messageTimeId;

  function notice(html, duration, noticeType, onClose) {
    if (typeof duration === 'undefined')
        duration = 2000;

    var closeMessage = function() {
        $messageDiv.remove();
        $messageDiv = null;

        if (typeof onClose === 'function') {
            onClose();
        }
    };

    if (!$messageDiv) {
        var iconHtml = '';
        if (noticeType === 'loading') {
            iconHtml = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>';
        }

        $messageDiv = $('<div id="message" class="noRemove">' + iconHtml + '<span id="content"></span></div>')
            .appendTo('body');

        if (duration == 0) {
            $messageDiv.on('click', closeMessage);
        }
    }

    $messageDiv.find('#content').html(html);

    if (duration > 0) {
        clearTimeout(_messageTimeId);
        _messageTimeId = setTimeout(closeMessage, duration);
    }
  }

  function loading(html, duration, onClose) {
    notice(html, duration, 'loading', onClose);
  }

  function saveAs(data, filename) {
    if(!filename) filename = 'console.json';

    if (typeof data == 'object') {
        data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], { type: 'application/octet-stream' });
    var blobUrl = window.URL.createObjectURL(blob);
    var tmpLink = document.createElement('a');
    tmpLink.href = blobUrl;
    tmpLink.style.display = 'none';
    tmpLink.setAttribute('download', filename);
    tmpLink.setAttribute('target', '_blank');
    document.body.appendChild(tmpLink);

    tmpLink.click();
    document.body.removeChild(tmpLink);
    window.URL.revokeObjectURL(blobUrl);
  }

  /**
   * 获取 substring 在 string 所有位置的数组
   *
   * @param {string} substring
   * @param {string} string
   * @returns {number[]}
   */
  function locations(substring, string){
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
  }

  /**
   * 22000 毫秒 => 00:00:02
   *
   * @param {number} distanceMillis
   * @returns {string}
   */
  function formatMillisencod(distanceMillis) {
    var sec_num = parseInt(Math.abs(distanceMillis) / 1000, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

  function cnNum2ArabNum(cn){
    var arab, parts, cnChars = '零一二三四五六七八九';

    if (!cn) {
        return 0
    }

    if (cn.indexOf('亿') !== -1){
        parts = cn.split('亿');
        return cnNum2ArabNum(parts[0]) * 1e8 + cnNum2ArabNum(parts[1])
    }

    if (cn.indexOf('万') !== -1){
        parts = cn.split('万');
        return cnNum2ArabNum(parts[0]) * 1e4 + cnNum2ArabNum(parts[1])
    }

    if (cn.indexOf('十') === 0){
        cn = '一' + cn;
    }

    arab = cn
        .replace(/[零一二三四五六七八九]/g, function (a) {
            return '+' + cnChars.indexOf(a)
        })
        .replace(/(十|百|千)/g, function(a, b){
            return '*' + (
                b == '十' ? 1e1 :
                b == '百' ? 1e2 : 1e3
            )
        });

    return (new Function('return ' + arab))()
  }

  function getNumFromChapterTitle(title) {
    if (!title) return;

    var m = title.match(/第(\d+)章|^(\d+)、/);
    if (m) {
      return parseInt(m[1], 10)
    }

    // 第二十二章
    m = title.match(/(?:第|^)([一二两三四五六七八九十○零百千万亿\d]+){1,6}章/);
    if (m) {
      return cnNum2ArabNum(m[1])
    }

    // 九十二 休想套路我
    m = title.match(/^([一二两三四五六七八九十○零百千万亿\d]+){1,6} /);
    if (m) {
      return cnNum2ArabNum(m[1])
    }
  }

  const chapters = [];

  let lastRequestUrl = "";

  const fileName = {
    bookTitle: '',
    ext: '.txt',
    start: 0,
    end: 0,

    setBookTitle(bookTitle) {
      this.bookTitle = bookTitle;
    },
    setStart(chapterTitle) {
      let num = getNumFromChapterTitle(chapterTitle);
      if (num) {
        this.start = num;
      }
    },
    setEnd(chapterTitle) {
      let num = getNumFromChapterTitle(chapterTitle);
      if (num) {
        this.end = num;
      }
    },

    toString() {
      let start = this.start || '';
      let end = this.end || '';
      let count = chapters.length;

      return `${this.bookTitle || '未知名称'}(${start} - ${end},共${count}章)${this.ext}`
    }
  };

  function toTxt(parser) {
    var html = $.nano('{chapterTitle}\n\n{contentTxt}', parser);
    chapters.push(html);

    var msg = '已下载 ' + chapters.length + ' 章，' +
        (parser.chapterTitle || '');

    loading(msg, 0);
  }
  function finish(parser) {
    var allTxt = chapters.join('\n\n');
    if (isWindows) {
        allTxt = allTxt.replace(/\n/g, '\r\n');
    }

    if (parser) {
      fileName.setEnd(parser.chapterTitle);
    }

    saveAs(allTxt, fileName.toString());
  }
  async function getOnePage(parser, nextUrl) {
    var isEnd = false;
    if (parser && parser.content) {
        toTxt(parser);
        nextUrl = parser.nextUrl;
        isEnd = parser.isTheEnd;
    }

    if (!nextUrl || isEnd) {
        C.log('全部获取完毕');
        finish(parser);
        return;
    }

    await sleep(config.download_delay);

    getNextPage(nextUrl);
  }
  async function getNextPage(nextUrl) {
    C.log('[存为txt]正在获取：', nextUrl);

    const referer = lastRequestUrl || location.href;
    lastRequestUrl = nextUrl;
    let request, doc;

    if (App$1.site.useiframe) {
      request = App$1.iframeRequest;
    } else {
      request = App$1.httpRequest;
    }

    if (App$1.site.withReferer) {
      doc = await request.send(nextUrl, referer);
    } else {
      doc = await request.send(nextUrl);
    }

    if (doc) {
        var par = new Parser(App$1.site, doc, nextUrl);
        await par.getAll();
        await getOnePage(par);
    } else {
        C.error('超时或连接出错');
        finish();
    }
  }

  async function run(cachedParsers=[]) {
    C.log(`[存为txt]每章下载延时 ${config.download_delay} 毫秒`);
    
    lastRequestUrl = "";

    cachedParsers.forEach(toTxt);

    var firstParser = cachedParsers[0];
    fileName.setBookTitle(firstParser.bookTitle);
    fileName.setStart(firstParser.chapterTitle);

    var lastParser = cachedParsers[cachedParsers.length - 1];
    await getOnePage(null, lastParser.nextUrl);
  }

  __$styleInject(".speech {\n  position: fixed;\n  z-index: 100;\n  background-color: white;\n  top: 10px;\n  right: 35px;\n}\n");

  __$styleInject(".speech .close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.speech .loader {\n  text-align: center;\n}\n.speech .auto-stop-input {\n  width: 30px;\n}\n.speech .tips {\n  font-size: 0.8em;\n}\n");

  __$styleInject("/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/\n@-webkit-keyframes v-pulseStretchDelay {\n  0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n  }\n  45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n  }\n}\n@keyframes v-pulseStretchDelay {\n  0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n  }\n  45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n  }\n}\n");

  var PulseLoader = {
  render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"v-spinner"},[_c('div',{staticClass:"v-pulse v-pulse1",style:([_vm.spinnerStyle,_vm.spinnerDelay1])}),_c('div',{staticClass:"v-pulse v-pulse2",style:([_vm.spinnerStyle,_vm.spinnerDelay2])}),_c('div',{staticClass:"v-pulse v-pulse3",style:([_vm.spinnerStyle,_vm.spinnerDelay3])})])},
  staticRenderFns: [],

    name: 'PulseLoader',
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: '#5dc596'
      },
      size: {
        type: String,
        default: '15px'
      },
      margin: {
        type: String,
        default: '2px'
      },
      radius: {
        type: String,
        default: '100%'
      }
    },
    data () {
      return {
        spinnerStyle: {
        	backgroundColor: this.color,
        	width: this.size,
          height: this.size,
        	margin: this.margin,
        	borderRadius: this.radius,
          display: 'inline-block',
          animationName: 'v-pulseStretchDelay',
          animationDuration: '0.75s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
          animationFillMode: 'both'
        },
        spinnerDelay1: {
          animationDelay: '0.12s'
        },
        spinnerDelay2: {
          animationDelay: '0.24s'
        },
        spinnerDelay3: {
          animationDelay: '0.36s'
        }
      }
    }
  };

  const STATE = {
    playing: 1,
    pausing: 2,
    stoping: 0,
  };

  var Speech = {
  render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"speech"},[(_vm.playState == _vm.STATE.playing)?_c('span',[_c('button',{on:{"click":_vm.pause}},[_vm._v("暂停朗读")]),_vm._v(" "),_c('button',{on:{"click":_vm.stop}},[_vm._v("停止朗读")])]):_c('span',[(_vm.playState == _vm.STATE.stoping)?_c('button',{on:{"click":_vm.start}},[_vm._v("开始朗读")]):_vm._e(),_vm._v(" "),(_vm.playState == _vm.STATE.pausing)?_c('button',{on:{"click":_vm.resume}},[_vm._v("继续朗读")]):_vm._e(),_vm._v(" "),(_vm.elapsedTime)?_c('span',[_vm._v("已朗读 "+_vm._s(_vm.formatMillisencod(_vm.elapsedTime)))]):_c('span',{staticClass:"tips"},[_vm._v("Tips: 可从选择文本处开始朗读")]),_vm._v(" "),_c('button',{staticClass:"close-btn",on:{"click":_vm.closeSpeech}},[_vm._v("X")])]),_vm._v(" "),(_vm.playState == _vm.STATE.playing)?_c('div',{staticClass:"loader"},[_c('pulse-loader')],1):_c('div',[_c('div',[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStop),expression:"autoStop"}],attrs:{"type":"radio","value":"time"},domProps:{"checked":_vm._q(_vm.autoStop,"time")},on:{"change":function($event){_vm.autoStop="time";}}}),_vm._v("\n        定时朗读：\n        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStopTime),expression:"autoStopTime"}],staticClass:"auto-stop-input",attrs:{"type":"text"},domProps:{"value":(_vm.autoStopTime)},on:{"input":function($event){if($event.target.composing){ return; }_vm.autoStopTime=$event.target.value;}}}),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStopTimeUnit),expression:"autoStopTimeUnit"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.autoStopTimeUnit=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},[_c('option',{attrs:{"value":"minute"}},[_vm._v("分钟")]),_vm._v(" "),_c('option',{attrs:{"value":"hour"}},[_vm._v("小时")])]),_vm._v("\n        后停止\n      ")]),_c('br'),_vm._v(" "),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStop),expression:"autoStop"}],attrs:{"type":"radio","value":"chapter"},domProps:{"checked":_vm._q(_vm.autoStop,"chapter")},on:{"change":function($event){_vm.autoStop="chapter";}}}),_vm._v("\n        定章朗读：\n        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStopChapter),expression:"autoStopChapter"}],staticClass:"auto-stop-input",attrs:{"type":"text"},domProps:{"value":(_vm.autoStopChapter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.autoStopChapter=$event.target.value;}}}),_vm._v("章后停止\n      ")]),_c('br'),_vm._v(" "),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.autoStop),expression:"autoStop"}],attrs:{"type":"radio","value":""},domProps:{"checked":_vm._q(_vm.autoStop,"")},on:{"change":function($event){_vm.autoStop="";}}}),_vm._v("一直朗读")])]),_vm._v(" "),_c('div',[_c('label',{attrs:{"for":"speech-dialog-rate"}},[_vm._v("语速")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rate),expression:"rate"}],attrs:{"type":"range","min":"0.5","max":"3","step":"0.1","id":"speech-dialog-rate"},domProps:{"value":(_vm.rate)},on:{"__r":function($event){_vm.rate=$event.target.value;}}}),_vm._v(" "),_c('span',{staticClass:"rate-value"},[_vm._v(_vm._s(_vm.rate))])]),_vm._v(" "),_c('div',[_c('label',{attrs:{"for":"speech-dialog-pitch"}},[_vm._v("音高")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pitch),expression:"pitch"}],attrs:{"type":"range","min":"0","max":"2","step":"0.1","id":"speech-dialog-pitch"},domProps:{"value":(_vm.pitch)},on:{"__r":function($event){_vm.pitch=$event.target.value;}}}),_vm._v(" "),_c('span',{staticClass:"pitch-value"},[_vm._v(_vm._s(_vm.pitch))])]),_vm._v(" "),_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedVoice),expression:"selectedVoice"}],staticClass:"voices",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selectedVoice=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},_vm._l((_vm.voiceList),function(voice,index){return _c('option',{key:index,domProps:{"value":index}},[_vm._v("\n          "+_vm._s(voice.name)+" "+_vm._s(voice.lang)+"\n        ")])}),0)])])])},
  staticRenderFns: [],
    name: 'speech',
    data() {
      return {
        text: '',
        // 播放状态
        STATE,
        playState: STATE.stoping,  // 监控朗读的状态
        isPlaying: false,  // 按钮的状态
        elapsedTime: 0,

        voiceList: [],
        selectedVoice: 0,
        rate: 1,
        pitch: 1,

        autoStop: '',
        autoStopTime: 2,  // 2 小时
        autoStopTimeUnit: 'hour',
        autoStopChapter: 5,  // 5章

        synth: window.speechSynthesis,
        utterance: new SpeechSynthesisUtterance(),
      }
    },
    components: {
      PulseLoader
    },
    mounted() {
      // 载入语音列表
      this.voiceList = this.synth.getVoices();
      this.synth.onvoiceschanged = () => {
        this.voiceList = this.synth.getVoices();
      };

      this.loadSetting();
    },
    beforeDestory() {
      clearTimeout(this.autoStopTimeId);
    },
    methods: {
      formatMillisencod,
      closeSpeech() {
        this.$emit('closeSpeech');
      },
      loadSetting() {
        this.rate = GM_getValue('speech.rate', 1);
        this.pitch = GM_getValue('speech.pitch', 1);
        this.selectedVoice = GM_getValue('speech.selectedVoice', 0);

        this.autoStop = GM_getValue('speech.autoStop', '');
        this.autoStopTime = GM_getValue('speech.autoStopTime', 2);
        this.autoStopTimeUnit = GM_getValue('speech.autoStopTimeUnit', 'hour');
        this.autoStopChapter = GM_getValue('speech.autoStopChapter', 5);
      },
      saveSetting() {
        GM_setValue('speech.rate', this.rate);
        GM_setValue('speech.pitch', this.pitch);
        GM_setValue('speech.selectedVoice', this.selectedVoice);

        GM_setValue('speech.autoStop', this.autoStop);
        GM_setValue('speech.autoStopTime', this.autoStopTime);
        GM_setValue('speech.autoStopTimeUnit', this.autoStopTimeUnit);
        GM_setValue('speech.autoStopChapter', this.autoStopChapter);
      },
      async start() {
        this.isPlaying = true;

        // 获取当前所在的章节
        this.speakIndex = App$1.curFocusIndex;
        this.startSpeakIndex = App$1.curFocusIndex;
        let toSpeekText = this.getToSpeekText(true);

        bus.$off(APPEND_NEXT_PAGE, this.waitForNext);
        bus.$on(APPEND_NEXT_PAGE, this.waitForNext);

        // fix 可能的问题：点击开始朗读无效，需要 cancel 才有效
        window.speechSynthesis.cancel();

        this.speak(toSpeekText, this.checkNext);

        if (this.autoStop == 'time') {
          clearTimeout(this.autoStopTimeId);
          this.autoStopTimeId = setTimeout(this.stop, this.getAutoStopMillisecond());
        }

        // 保存设置
        this.saveSetting();
      },
      getAutoStopMillisecond() {
        if (this.autoStopTimeUnit == 'minute') {
          return this.autoStopTime * 60 * 1000
        } else {
          return this.autoStopTime * 3600 * 1000
        }
      },
      async checkNext() {
        if (!this.isPlaying) return

        this.speakIndex += 1;
        await this.checkAgin();
      },
      async checkAgin() {
        let speakedChapters = this.speakIndex - this.startSpeakIndex;
        if (this.autoStop == 'chapter' && speakedChapters >= this.autoStopChapter) {
          this.stop();
          return
        }

        // 是否有新章节
        let nextText = this.getToSpeekText();
        if (nextText) {
          this.isFindingNext = false;
          this.speak(nextText, this.checkNext);

          this.scrollToNext();
        } else {
          this.isFindingNext = true;
          // 加载下一章
          await App$1.scrollForce();
        }
      },
      async waitForNext() {
        if (this.isFindingNext && this.isPlaying) {
          await this.checkAgin();
        }
      },
      scrollToNext() {
        let elem = App$1.scrollItems.get(this.speakIndex);
        if (elem) {
          App$1.scrollToArticle(elem);
        }
      },
      getToSpeekText(fromSelection=false) {
        let startIndex = this.speakIndex;

        // 这是 jQuery 对象
        let text = App$1.scrollItems
          .toArray()
          .filter((elem, i) => {
            return i == startIndex
          })
          // .map(elem => elem.textContent.slice(0, 10))  // debug
          .map(elem => elem.textContent)
          .join('\n');

        if (fromSelection) {
          let newText = this.getSelectionAfterText(text);
          if (newText) {
            return newText
          }
        }

        return text
      },
      getSelectionAfterText(text) {
        const selObj = getSelection();
        const selStr = selObj.toString();
        let afterText;

        if (!selStr) return

        let indexes = locations(selStr, text);
        if (indexes.length == 0) {
          return
        } else if (indexes.length == 1) {
          afterText = text.substring(indexes[0]);
        } else {  // 多个
          indexes = locations(selObj.anchorNode.data, text);
          if (indexes.length == 0) return
          else if (indexes.length == 1) {
            let start = indexes[0] + selObj.anchorOffset;
            afterText = text.substring(start);
          } else {
            console.error('getSelectionAfterText() 无法判断唯一');
          }
        }

        selObj.removeAllRanges();
        return afterText
      },
      speak(text, endFn) {
        this.utterance = new SpeechSynthesisUtterance(text);
        this.utterance.voice = this.voiceList[this.selectedVoice];
        this.utterance.pitch = this.pitch;
        this.utterance.rate = this.rate;

        this.listenForSpeechEvents(endFn);

        this.synth.speak(this.utterance);
      },
      listenForSpeechEvents (endFn) {
        this.utterance.onstart = () => {
          this.playState = STATE.playing;
        };
        this.utterance.onpause = (event) => {
          this.playState = STATE.pausing;
          this.elapsedTime = event.elapsedTime;
        };
        this.utterance.onresume = (e) => {
          this.playState = STATE.playing;
        };
        this.utterance.onend = (event) => {
          this.playState = STATE.stoping;
          // this.elapsedTime = event.elapsedTime
          this.elapsedTime = null;

          if (endFn) {
            endFn();
          }
        };
      },
      pause() {
        this.isPlaying = false;

        this.synth.pause();
      },
      resume() {
        this.isPlaying = true;

        this.synth.resume();
      },
      stop() {
        this.isPlaying = false;

        this.synth.cancel();

        clearTimeout(this.autoStopTimeId);
      }
    }
  };

  var App = {
  render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"mynovelreader-app"}},[(_vm.speechDialogVisible)?_c('speech',{staticClass:"speech",on:{"closeSpeech":_vm.hideSpeech}}):_vm._e()],1)},
  staticRenderFns: [],
    data() {
      return {
        speechDialogVisible: false,
      }
    },
    components: {
      Speech,
    },
    created() {
      bus.$on(SHOW_SPEECH, this.showSpeech);
    },
    beforeDestory() {
      bus.$off(SHOW_SPEECH, this.hideSpeech);
    },
    methods: {
      showSpeech() {
        this.speechDialogVisible = true;
      },
      hideSpeech() {
        this.speechDialogVisible = false;
      }
    }
  };

  function runVue() {
    new Vue({
      el: '#mynovelreader-app',
      render: h => h(App)
    });
  }

  const {
    HTMLElement,
    EventTarget,
    MutationObserver: MutationObserver$1,
    Navigator,
    Proxy,
    Reflect,
    Object: Object$1,
    setTimeout: setTimeout$1,
    clearTimeout: clearTimeout$1,
    console: console$1
  } = unsafeWindow;

  // 防止 iframe 中的脚本调用 focus 方法导致页面发生滚动
  const _focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function focus() {
    _focus.call(this, { preventScroll: true });
  };

  const clenaupEventArray = [];

  const _addEventListener = EventTarget.prototype.addEventListener;
  const addEventListenerProxy = new Proxy(_addEventListener, {
    apply(target, thisArg, argumentsList) {
      Reflect.apply(target, thisArg, argumentsList);
      clenaupEventArray.push(() => {
        try {
          thisArg.removeEventListener(...argumentsList);
        } catch (e) {}
      });
    }
  });
  EventTarget.prototype.addEventListener = addEventListenerProxy;
  document.addEventListener = addEventListenerProxy;

  const _observe = MutationObserver$1.prototype.observe;
  const _disconnect = MutationObserver$1.prototype.disconnect;
  const observeProxy = new Proxy(_observe, {
    apply(target, thisArg, argumentsList) {
      Reflect.apply(target, thisArg, argumentsList);
      clenaupEventArray.push(() => {
        try {
          _disconnect.apply(thisArg, argumentsList);
        } catch (e) {}
      });
    }
  });
  MutationObserver$1.prototype.observe = observeProxy;

  function cleanupEvents(iframe) {
    let func;
    const length = clenaupEventArray.length;
    while ((func = clenaupEventArray.pop())) func();
    C.log(`${iframe ? '[iframe] ' : ''}已移除 ${length} 个事件监听器和观察器`);

    var highestTimeoutId = setTimeout$1(';');
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout$1(i);
    }

    try {
      unsafeWindow.$(unsafeWindow).off();
      unsafeWindow.$(document).off();
    } catch (e) {}
  }

  if (window.name === 'mynovelreader-iframe') {
    unsafeWindow.$cleanupEvents = cleanupEvents;
  }

  Object$1.defineProperty(Navigator.prototype, 'platform', {
    get: function platform() {
      return ''
    }
  });

  console$1.clear = () => {};

  const proxies = new WeakMap();

  unsafeWindow.Proxy = new Proxy(Proxy, {
    construct: function (target, argumentsList, newTarget) {
      const proxy = Reflect.construct(target, argumentsList, newTarget);
      proxies.set(proxy, argumentsList[0]);
      return proxy
    }
  });

  /** @enum {number} */
  const RequestStatus = {
    Idle: 0,
    Loading: 1,
    Finish: 2,
    Fail: 3
  };

  const iframeHeight = unsafeWindow.innerHeight;

  class BaseRequest {
    /**@param { import("../typings/MyNovelReader").SiteConfig } siteInfo */
    constructor(siteInfo) {
      this.errorHandle = () => {};
      this.finishHandle = () => {};
      // 站点规则
      this.siteInfo = siteInfo;
    }

    setErrorHandle(func) {
      this.errorHandle = func;
    }

    setFinishHandle(func) {
      this.finishHandle = func;
    }
  }

  class HttpRequest extends BaseRequest {
    constructor(siteInfo) {
      super(siteInfo);
      this.status = RequestStatus.Idle;
      this.doc = null;
    }

    async send(url, referer) {
      this.status = RequestStatus.Loading;
      this.doc = null;
      const options = {
        url,
        method: 'GET',
        overrideMimeType: 'text/html;charset=' + document.characterSet,
        timeout: config.xhr_time
      };

      if (referer) {
        options.headers = { Referer: referer };
      }

      let retry = 3;
      let error = null;

      while (retry--) {
        try {
          const res = await Request(options);
          this.doc = parseHTML(res.responseText);
          this.status = RequestStatus.Finish;
          this.finishHandle();
          break
        } catch (e) {
          error = e;
          C.error(`HttpRequest 请求过程出现异常，第 ${3 - retry} 次请求`, error);
        }
      }

      if (!this.doc) {
        this.status = RequestStatus.Fail;
        this.errorHandle();
        C.error('HttpRequest 请求失败', error);
      }

      return this.doc
    }

    getDocument() {
      this.status = RequestStatus.Idle;
      return this.doc
    }

    hide() {}
    show() {}
  }

  class IframeRequest extends BaseRequest {
    constructor(siteInfo) {
      super(siteInfo);
      this.status = RequestStatus.Idle;
      this.iframe = null;
      this.doc = null;
      this.win = null;
    }

    get display() {
      return this.iframe && !this.iframe.style.display
    }

    async send(url) {
      if (!this.iframe) {
        this.iframe = createIframe(this.loaded.bind(this), this.siteInfo);
      }
      this.status = RequestStatus.Loading;
      this.doc = this.win = null;

      if (!this.display) {
        this.show();
      }

      const src = url + '#mynovelreader';

      if (this.iframe.src === src) {
        this.iframe.setAttribute('src', 'about:blank');
        await sleep(100);
        this.iframe.setAttribute('src', src);
      } else {
        this.iframe.setAttribute('src', src);
      }

      return new Promise(resolve => (this.resolve = resolve))
    }

    async loaded() {
      this.doc = this.iframe.contentDocument;
      this.win = this.iframe.contentWindow;

      if (!this.doc) {
        this.status = RequestStatus.Fail;
        this.hide();
        this.errorHandle();
        this.resolve(null);
        C.error('IframeRequest 请求过程出现异常');
        return
      }

      this.win.dispatchEvent(new WheelEvent('mousewheel', { deltaY: -100 }));
      this.win.scrollTo(0, this.doc.body.scrollHeight - this.win.innerHeight * 2);

      if (this.siteInfo.startLaunch) {
        this.siteInfo.startLaunch($(this.doc));
      }

      if (this.siteInfo.mutationSelector) {
        await observeElement(this.doc, this.siteInfo);
      } else {
        const timeout = this.siteInfo.timeout || 0;
        if (timeout) {
          await sleep(timeout);
        }
      }
      this.hide();
      this.status = RequestStatus.Finish;
      this.finishHandle();
      this.resolve(this.doc);
    }

    getDocument() {
      this.status = RequestStatus.Idle;
      return this.doc
    }

    hide() {
      this.iframe.style.display = 'none';
    }

    show() {
      this.iframe.style.display = '';
    }
  }

  function createIframe(onload, { iframeSandbox, withReferer }) {
    const iframe = document.createElement('iframe');
    iframe.name = 'mynovelreader-iframe';
    iframe.style.cssText = `
    width:100%;
    height:${iframeHeight}px;
    border:0!important;
    margin:0!important;
    padding:0!important;
    visibility:hidden!important;
    display:none;
  `;
    if (Setting.preloadNextPage && !withReferer) {
      iframe.referrerPolicy = 'no-referrer';
    }
    if (!_.isUndefined(iframeSandbox)) {
      iframe.sandbox = iframeSandbox;
    }
    document.body.appendChild(iframe);
    iframe.onload = onload;
    return iframe
  }

  function mousedownEventTest() {
    let clicked;
    const $div = $('<div>')
      .on('mousedown', () => (clicked = true))
      .appendTo('html');
    $div[0].dispatchEvent(new MouseEvent('mousedown'));
    $div.remove();
    if (!clicked) {
      C.error(
        'mousedown 事件测试失败，请检查浏览器是否有扩展或脚本（尤其是右键/复制限制解除类）与小说阅读脚本冲突！'
      );
    }
  }

  function minFontSizeTest() {
    const $div = $('<div>')
      .text('阅读模式')
      .css('font-size', '12px')
      .appendTo('html');
    const fontSize = +getComputedStyle($div[0]).fontSize.slice(0, -2);
    $div.remove();
    if (fontSize > 12) {
      C.warn('浏览器最小字号超过 12px ，将会导致阅读模式按钮文字显示位置异常！');
    }
  }

  function logLevelTest() {
    toggleConsole(true);
    C.log('这是一条测试日志信息。');
    C.warn('这是一条测试警告信息。');
    C.error('这是一条测试错误信息。');
    toggleConsole(Setting.debug);
  }

  function envCheckInit() {
    logLevelTest();
    mousedownEventTest();
    minFontSizeTest();
  }

  var App$1 = {
      isEnabled: false,
      parsedPages: {},
      pageNum: 1,
      paused: false,
      curPageUrl: location.href,
      requestUrl: null,
      lastRequestUrl: null,
      iframe: null,
      remove: [],
      // 滚动激活相关
      curFocusElement: null,
      curFocusIndex: 1,
      // 站点字体信息
      siteFontInfo: null,
      /**@type { HttpRequest | IframeRequest } */
      request: null,
      /**@type { HttpRequest } */
      httpRequest: null,
      /**@type { IframeRequest } */
      iframeRequest: null,
      // 站点规则
      site: null,
      preloadNextPagePromiseResolve: null,

      init: async function() {
          if (["mynovelreader-iframe", "superpreloader-iframe"].indexOf(window.name) != -1) { // 用于加载下一页的 iframe
              return;
          }

          if (location.href.indexOf('#mynovelreader') > -1) {
              history.replaceState({}, '', location.href.replace('#mynovelreader', ''));
              return
          }

          let parent = window;
          let nestCount = 0;

          while (parent !== window.top) {
              nestCount++;
              parent = parent.parent;
          }

          if (nestCount > 2) {
              C.error('窗口的嵌套层级过深。');
              return
          }

          // 浏览器环境自检
          envCheckInit();

          // 手动调用
          var readx = App$1.launch;

          try {
              exportFunction(readx, unsafeWindow, {defineAs: "readx"});
          } catch(ex) {
              C.error('无法定义 readx 函数');
          }


          App$1.loadCustomSetting();
          App$1.site = App$1.getCurSiteInfo();

          // 等待 DOMContentLoaded 事件触发
          if (!App$1.site.fastboot && !Setting.fastboot) {
              await DOMContentLoaded();
          }

          if (App$1.site.startLaunch) {
              try {
                  App$1.site.startLaunch($(document));
              } catch (e) {
                  C.error("执行startLaunch函数出错", e);
              }
          }

          var autoLaunch = App$1.isAutoLaunch();

          if (autoLaunch === -1) {
              return;
          } else if (autoLaunch) {
              if (App$1.site.mutationSelector) { // 特殊的启动：等待js把内容生成完毕
                  // await App.addMutationObserve(document);
                  await observeElement(document, App$1.site);
              } else if (App$1.site.timeout) { // 延迟启动
                  await sleep(App$1.site.timeout);
              }
              if (!App$1.site.fastboot && !Setting.fastboot) {
                  await domMutation();
              }
              await App$1.launch();
          } else {
              await domMutation();
              await UI.addButton();
          }
      },
      loadCustomSetting: function() {
          var customRules;
          try {
              customRules = eval(Setting.customSiteinfo);
          } catch (e) {
              C.error('载入自定义站点配置错误', e);
          }

          if (_.isArray(customRules)) {
              Rule.customRules = customRules;
              C.log('载入自定义站点规则成功', customRules);
          }

          // load custom replace rules
          Rule.customReplace = Rule.parseCustomReplaceRules(Setting.customReplaceRules);

          C.log('载入自定义替换规则成功', Rule.customReplace);
      },
      getCurSiteInfo: function() {
          var rules = Rule.customRules.concat(Rule.specialSite);
          var locationHref = location.href;

          var info = _.find(rules, function(x) {
              return toRE(x.url).test(locationHref);
          });

          if (!info) {
              info = {};
              C.log("没有找到规则，尝试自动模式。");
          } else {
              C.log("找到规则：", info);
          }
          return info;
      },
      isAutoLaunch: function() {
          var locationHost = location.host,
              referrer = document.referrer;

          switch (true) {
              case L_getValue("mynoverlreader_disable_once") == 'true':
                  L_removeValue("mynoverlreader_disable_once");
                  return false;
              // case location.hostname == 'www.fkzww.net' && !document.title.match(/网文快讯/):  // 啃书只自动启用一个地方
              //     return false;
              case Setting.booklink_enable && /booklink\.me/.test(referrer):
                  return true;
              case locationHost == 'tieba.baidu.com':
                  var title = $('.core_title_txt').text();
                  if (title.match(Rule.titleRegExp)) {
                      return false;
                  } else {
                      return -1;
                  }
              case Setting.launchMode === 'manual':
                  return false
              // case Setting.getDisableAutoLaunch():
              //     return false;
              case Setting.launchMode === 'auto':
              case GM_getValue("auto_enable"):
              case config.soduso :
                  return true;
              default:
                  return false;
          }
      },
      addMutationObserve: function(doc) {
          var shouldAdd = false;
          var $doc = $(doc);

          var contentSize = $doc.find(App$1.site.contentSelector).size();
          if (contentSize && !App$1.site.mutationSelector) {
              shouldAdd = false;
          } else {
              var mutationSelector = App$1.site.mutationSelector;
              var target = $doc.find(mutationSelector)[0];
              if (target) {
                  var beforeTargetChilren = target.children.length;
                  C.log(`target.children.length = ${target.children.length}`, target);
                  if (App$1.site.mutationChildText) {
                      if (target.textContent.indexOf(App$1.site.mutationChildText) > -1) {
                          shouldAdd = true;
                      }
                  } else {
                      var childCount = App$1.site.mutationChildCount;
                      if (childCount === undefined || target.children.length <= childCount) {
                          shouldAdd = true;
                      }
                  }
              }
          }

          if (shouldAdd) {
              return new Promise(resolve => {
                  var observer = new MutationObserver(function (mutations) {
                      target = $doc.find(mutationSelector)[0];
                      var nodeAdded = target.children.length > beforeTargetChilren;

                      if (nodeAdded) {
                          observer.disconnect();
                          resolve();
                      }
                  });

                  observer.observe(document, {
                      childList: true,
                      subtree: true
                  });

                  C.log('添加 MutationObserve 成功：', mutationSelector);
              })
          }
      },
      launch: async function() {
          // 只解析一次，防止多次重复解析一个页面
          if (document.body && document.body.getAttribute("name") == "MyNovelReader") {
              return await App$1.toggle();
          }

          if (!App$1.site) {
              App$1.site = App$1.getCurSiteInfo();
          }

          if (App$1.site.startFilter) {
              try {
                  App$1.site.startFilter();
                  C.log('run startFilter function success');
              } catch (ex) {
                  C.error('运行 startFilter function 错误', ex);
              }
          }

          // 使用站点字体
          if (App$1.site.useSiteFont) {
              if (_.isBoolean(App$1.site.useSiteFont)) {
                  App$1.siteFontInfo = App$1.getSiteFontInfo();
              } else if (_.isString(App$1.site.useSiteFont)) {
                  if (!App$1.site.useSiteFont.trim().endsWith(',')) {
                      App$1.site.useSiteFont = App$1.site.useSiteFont.trim() + ',';
                  }
                  App$1.siteFontInfo = { siteFontFamily: App$1.site.useSiteFont.trim() };
              }
          }

          var parser = new Parser(App$1.site, document);
          var hasContent = !!parser.hasContent();
          if (hasContent) {
              cleanupEvents();
              document.body.setAttribute("name", "MyNovelReader");
              App$1.parsedPages[window.location.href] = true;
              await parser.getAll();
              await App$1.processPage(parser);
          } else {
              App$1.isEnabled = true;
              $('.readerbtn').remove();
              await UI.addButton();
              $('.readerbtn').text('无内容');
              C.error("当前页面没有找到内容");
          }

          // 初始化, 取消页面限制等
          if (App$1.site.fInit)
              App$1.site.fInit();
      },
      processPage: async function(parser) {
          // 对 Document 进行处理
          document.body.innerHTML = '';
          App$1.prepDocument();
          App$1.initDocument(parser);

          runVue();

          // cache vars
          App$1.$doc = $(document);
          App$1.$menuBar = App$1.$doc.find("#menu-bar");
          App$1.$menu = App$1.$doc.find("#menu");
          App$1.$content = App$1.$doc.find("#mynovelreader-content");
          App$1.$loading = App$1.$doc.find("#loading");
          App$1.$preferencesBtn = App$1.$doc.find("#preferencesBtn");

          App$1.$menuHeader = App$1.$menu.find("#chapter-list");
          App$1.$chapterList = App$1.$menu.find("#chapter-list");

          App$1.indexUrl = parser.indexUrl;
          App$1.prevUrl = parser.prevUrl; // 第一个上一页

          App$1.oArticles = [];  // 原始的内容，用于替换的无需刷新
          App$1.parsers = [];

          // 加入上一章的链接
          if (parser.prevUrl) {
              $("<li>")
                  .addClass('chapter')
                  .append(
                      $("<div>")
                      .attr({
                          "realHref": parser.prevUrl,
                          "onclick": "return false;"
                      })
                      .text("上一章".uiTrans())
                  )
                  .prependTo(App$1.$chapterList);
          }

          // 插入站点样式
          if (App$1.site.style) {
              GM_addStyle(App$1.site.style);
          }

          // 插入站点字体样式
          if (App$1.site.useSiteFont && App$1.siteFontInfo) {
              const { external, internal } = App$1.siteFontInfo;
              if (internal) {
                  $('<style class="noRemove siteFont">')
                      .text(internal.map(e => e.cssText).join('\n'))
                      .appendTo('head');
              }
              // 插入外部样式表可能会影响阅读界面样式
              // if (external) {
              //     for (const href of external) {
              //         $('<link class="noRemove siteFont" rel="stylesheet">').attr('href', href).prependTo('head')
              //     }
              // }
          }

          App$1.appendPage(parser, true);

          App$1.registerControls();

          // UI 的初始化
          UI.init();

          App$1.curFocusElement = $("article:first").get(0); // 初始化当前关注的 element
          App$1.requestUrl = parser.nextUrl;
          App$1.isTheEnd = parser.isTheEnd;

          App$1.isEnabled = true;
          await UI.addButton();

          // // 如果已经把当前焦点链接添加到历史记录，则滚动到顶部
          // if (Setting.addToHistory) {
          //     window.scrollTo(0, 0);
          // }

          history.scrollRestoration = 'manual';
          window.scrollTo(0, 0);

          // 初始化 request
          App$1.initRequest();

          // 有些图片网站高度随着图片加载而变长
          setTimeout(App$1.scroll, 1000);

          App$1.cleanAgain();

          if (Setting.preloadNextPage) {
              await App$1.doRequest();
          }
      },
      initRequest: function() {
          App$1.httpRequest = new HttpRequest(App$1.site);
          App$1.iframeRequest = new IframeRequest(App$1.site);

          App$1.request = App$1.site.useiframe ? App$1.iframeRequest : App$1.httpRequest;

          App$1.httpRequest.setErrorHandle(() => App$1.scrollForce());
          App$1.httpRequest.setFinishHandle(() => App$1.scroll());

          App$1.iframeRequest.setErrorHandle(() => App$1.scrollForce());
          App$1.iframeRequest.setFinishHandle(() => App$1.scroll());
      },
      prepDocument: function() {
          window.onload = window.onunload = function() {};

          // 破解右键限制
          var doc = document;
          var bd = doc.body;
          bd.onclick = bd.ondblclick = bd.onselectstart = bd.oncopy = bd.onpaste = bd.onkeydown = bd.oncontextmenu = bd.onmousemove = bd.onselectstart = bd.ondragstart = doc.onselectstart = doc.oncopy = doc.onpaste = doc.onkeydown = doc.oncontextmenu = null;
          doc.onclick = doc.ondblclick = doc.onselectstart = doc.oncontextmenu = doc.onmousedown = doc.onkeydown = function() {
              return true;
          };

          doc = document.wrappedJSObject || document;
          doc.onmouseup = null;
          doc.onmousedown = null;
          doc.oncontextmenu = null;

          var arAllElements = document.getElementsByTagName('*');
          for (var i = arAllElements.length - 1; i >= 0; i--) {
              var elmOne = arAllElements[i];
              elmOne = elmOne.wrappedJSObject || elmOne;
              elmOne.onmouseup = null;
              elmOne.onmousedown = null;
          }


          // remove body style
          $('link[rel="stylesheet"], script').remove();
          $('html, body')
              .removeAttr('style')
              .removeAttr('bgcolor');

          $('style:not(.noRemove)').filter(function() {
              var $style = $(this);
              if($style.text().indexOf('#cVim-link-container') != -1) {  // chrome 的 cVim 扩展
                  return false;
              }
              return true;
          }).remove();

          // 移除 html 标签中非 head 和 body 的元素
          $('html').children().filter(function () {
              let tagName = $(this).prop('tagName').toLowerCase();
              if (tagName !== 'head' && tagName !== 'body') {
                  return true
              }
              return false
          }).remove();
      },
      initDocument: function(parser) {
          document.title = parser.docTitle;

          document.body.innerHTML = $.nano(tpl_mainHtml.uiTrans(), parser);
      },
      clean: function() {
          $('body > *:not("#container, .readerbtn, .noRemove, #reader_preferences, #uil_blocker,iframe[name=\'mynovelreader-iframe\']")').remove();
          $('link[rel="stylesheet"]:not(.noRemove)').remove();
          $('body, #container').removeAttr('style').removeAttr('class');

          if (unsafeWindow.jQuery && location.host.indexOf('qidian') > 0) {
              unsafeWindow.jQuery(document).off("selectstart").off("contextmenu");
          }
      },
      cleanAgain: function() {
          // var host = location.host;
          // if (!host.match(/qidian\.com|zongheng\.com/)) {  // 只在起点、纵横等网站运行
          //     return;
          // }

          // 再次移除其它不相关的，起点，纵横中文有时候有问题
          setTimeout(App$1.clean, 2000);
          setTimeout(App$1.clean, 5000);
          setTimeout(App$1.clean, 8000);
          // TM 用 addEventListener('load') 有问题
          window.onload = function() {
              App$1.clean();
              setTimeout(App$1.clean, 500);
          };
      },
      toggle: async function() {
          if (App$1.isEnabled) { // 退出
              GM_setValue("auto_enable", false);
              L_setValue("mynoverlreader_disable_once", true);

              location.href = App$1.activeUrl || App$1.curPageUrl;
              location.reload();
          } else {
              GM_setValue("auto_enable", true);
              L_removeValue("mynoverlreader_disable_once");
              App$1.isEnabled = true;
              await App$1.launch();
          }
      },
      removeListener: function() {
          C.log("移除各种事件监听");
          App$1.remove.forEach(function(_remove) {
              _remove();
          });
      },
      appendPage: function(parser, isFirst) {
          var chapter = $("article:last");
          if (chapter.length && parser.isSection) { // 每次获取的不是一章，而是一节
              var lastText = chapter.find("p:last").remove().text().trimRight();
              var newPage = parser.content.replace(/<p>\s+/, "<p>" + lastText);

              chapter
                  .find(".chapter-footer-nav").remove()
                  .end()
                  .append(newPage);

              if (!Setting.hide_footer_nav) {
                  chapter.append($.nano(UI.tpl_footer_nav, parser));
              }

          } else {
              chapter = $("<article>")
                  .attr("id", "page-" + App$1.pageNum)
                  .append(
                      $("<h1>").addClass("title").text(parser.chapterTitle)
                  )
                  .append(parser.content)
                  .appendTo(App$1.$content);

              if (!Setting.hide_footer_nav) {
                  chapter.append($.nano(UI.tpl_footer_nav, parser));
              }

              // App.fixImageFloats(chapter.get(0));

              // 添加到章节列表
              var chapterItem = $("<li>")
                  .addClass('chapter')
                  .append(
                      $("<div>")
                      .attr({
                          href: "#page-" + App$1.pageNum,
                          "realHref": parser.curPageUrl,
                          onclick: "return false;",
                          title: parser.chapterTitle
                      })
                      .text(parser.chapterTitle)
                  )
                  .prependTo(App$1.$chapterList);

              if (isFirst) {
                  chapterItem.addClass('active');
              }

              App$1.resetCache();
          }

          App$1.pageNum += 1;

          App$1.oArticles.push(chapter[0].outerHTML);
          App$1.parsers.push(parser);

          bus.$emit(APPEND_NEXT_PAGE);
      },
      resetCache: function() {  // 更新缓存变量
          App$1.menuItems = App$1.$chapterList.find("div");
          App$1.scrollItems = $("article[id^=page-]");
      },
      registerControls: function() {
          // 内容滚动
          var throttled = _.throttle(App$1.scroll, 200);
          $(window).scroll(throttled);

          App$1.registerKeys();

          if (Setting.dblclickPause) {
              App$1.$content.on("dblclick", function() {
                  App$1.pauseHandler();
              });
          }

          // 左侧章节列表
          App$1.$menuHeader.click(function() {
              App$1.copyCurTitle();
          });

          App$1.$menuBar.click(function() {
              UI.hideMenuList();
          });

          App$1.$doc.on("mousedown", "#chapter-list div", function(event) {
              switch (event.which) {
                  case 1:
                      var href = $(this).attr("href");
                      if (href) {
                          App$1.scrollToArticle($(href));
                      } else {
                          location.href = $(this).attr("realHref");
                      }
                      break;
                  case 2: // middle click
                      L_setValue("mynoverlreader_disable_once", true);
                      App$1.openUrl($(this).attr("realHref"));
                      break;
              }
          });

          $("#preferencesBtn").click(function(event) {
              event.preventDefault();
              UI.preferencesShow();
          });

          GM_registerMenuCommand("小说阅读脚本设置".uiTrans(), UI.preferencesShow.bind(UI));
      },
      registerKeys: function() {
          key('enter', function(event) {
              if (UI.$prefs) {
                  return;
              }

              App$1.openUrl(App$1.indexUrl, "主页链接没有找到".uiTrans());
              App$1.copyCurTitle();

              event.stopPropagation();
              event.preventDefault();
          });

          key('left', function(event) {
              var scrollTop = $(window).scrollTop();
              if (scrollTop === 0) {
                  location.href = App$1.prevUrl;
              } else {
                  var offsetTop = $(App$1.curFocusElement).offset().top;
                  // 在视野窗口内
                  if (offsetTop > scrollTop && offsetTop < (scrollTop + $(window).height())) {
                      App$1.scrollToArticle(App$1.curFocusElement.previousSibling || 0);
                  } else {
                      App$1.scrollToArticle(App$1.curFocusElement);
                  }
              }
              return false;
          });

          key('right', function(event) {
              if (App$1.getRemain() === 0) {
                  location.href = App$1.lastRequestUrl || App$1.requestUrl;
              } else {
                  App$1.scrollToArticle(App$1.curFocusElement.nextSibling || App$1.$doc.height());
              }

              event.preventDefault();
              event.stopPropagation();
              return false;
          });

          key('esc', function(){
              if (UI.$prefs) {
                  UI.hide();
                  return false;
              }
          });

          key('shift+/', function() {
              UI.openHelp();
              return false;
          });

          key(Setting.quietModeKey, function(){
              UI.toggleQuietMode();
              return false;
          });

          key(Setting.hideMenuListKey, function(){
              UI.hideMenuList();
              return false;
          });

          key(Setting.openPreferencesKey, function(){
              UI.preferencesShow();
              return false;
          });

          key(Setting.openSpeechKey, function() {
              bus.$emit(SHOW_SPEECH);
              return false;
          });

          // PageUp
          key(',', function() {
              let { scrollX, scrollY, innerHeight } = window;
              window.scrollTo(scrollX, scrollY - innerHeight * .9);
          });
          // PageDown
          key('.', function() {
              let { scrollX, scrollY, innerHeight } = window;
              window.scrollTo(scrollX, scrollY + innerHeight * .9);
          });
      },
      copyCurTitle: function() {
          if (Setting.copyCurTitle) {
              var title = $(App$1.curFocusElement).find(".title").text()
                  .replace(/第?\S+章/, "").trim();

              GM_setClipboard(title, "text");
          }
      },
      scrollToArticle: function(elem) {
          var offsetTop;
          if (typeof elem == "number") {
              offsetTop = elem;
          } else {
              offsetTop = $(elem).offset().top - parseInt($(elem).css("margin-top"), 10);
          }

          if (Setting.scrollAnimate) {
              $("html, body").stop().animate({
                  scrollTop: offsetTop
              }, 750, "easeOutExpo");
          } else {
              $("html, body").stop().scrollTop(offsetTop);
          }
      },
      openUrl: function(url, errorMsg) {
          if (url) {
              // ff30 Greasemonkey 会报错：Greasemonkey 访问违规：unsafeWindow 无法调用 GM_openInTab。新建脚本采用按键调用也这样。
              setTimeout(function() {
                  GM_openInTab(url, false);
              }, 0);
          } else if (errorMsg) {
              UI.notice(errorMsg);
          }
      },
      pauseHandler: async function() {
          App$1.paused = !App$1.paused;
          if (App$1.paused) {
              UI.notice('<b>状态</b>:自动翻页<span style="color:red!important;"><b>暂停</b></span>'.uiTrans());
              App$1.$loading.html('自动翻页已经<span style="color:red!important;"><b>暂停</b></span>'.uiTrans()).show();
          } else {
              UI.notice('<b>状态</b>:自动翻页<span style="color:red!important;"><b>启用</b></span>'.uiTrans());
              await App$1.scroll();
          }
      },
      scroll: async function() {
          if (App$1.request.display && Math.floor(App$1.getRemain() - iframeHeight) < 0) {
              window.scrollTo(0, document.body.scrollHeight - window.innerHeight - iframeHeight  + 51);
          }

          if (!App$1.paused && App$1.getRemain() < Setting.remain_height) {
              await App$1.scrollForce();
          }

          if (App$1.isTheEnd) {
              App$1.$loading.html("已到达最后一页...".uiTrans()).show();
          }

          App$1.updateCurFocusElement();
      },
      scrollForce: async function() {
          switch (App$1.request.status) {
              case RequestStatus.Idle:
                  await App$1.doRequest();
                  break;
              case RequestStatus.Finish:
                  await App$1.loaded(App$1.request.getDocument());
                  break;
              case RequestStatus.Fail:
                  const nextUrl = App$1.curPageUrl;
                  App$1.$loading.html("<a href='" + nextUrl + "'>无法获取下一页，请手动点击</a>").show();
                  break;
          }
      },
      updateCurFocusElement: function() { // 滚动激活章节列表
          // Get container scroll position
          var fromTop = $(window).scrollTop() + $(window).height() / 2;

          // Get id of current scroll item
          var cur = App$1.scrollItems.map(function() {
              if ($(this).offset().top < fromTop)
                  return this;
          });
          var visitedLength = cur.length;
          // Get the id of the current element
          App$1.curFocusIndex = cur.length - 1;
          cur = cur[cur.length - 1];
          var id = cur ? cur.id : "";

          if (App$1.lastId !== id) {
              App$1.lastId = id;

              var activeItem = App$1.menuItems.filter("[href=#" + id + "]"),
                  activeTitle = activeItem.text(),
                  activeUrl = activeItem.attr("realHref");

              // Set/remove active class
              App$1.menuItems.parent().removeClass("active");
              activeItem.parent().addClass("active");

              App$1.curFocusElement = cur;
              App$1.activeUrl = activeUrl;

              if (Setting.addToHistory) {
                  var curNum = id.match(/\d+/)[0] - 1;  // 当前是第几个
                  var curTitle = App$1.parsers[curNum].docTitle;

                  // 有域名的限制，起点过渡到 vip 章节无法生效
                  var url = activeUrl.replace('http://read.qidian.com', '');
                  try {
                      history.pushState(null, curTitle, url);
                  } catch (e) {
                      C.error('添加下一页到历史记录失败', e);
                  }

                  document.title = curTitle;

              }

              if (this.preloadNextPagePromiseResolve && App$1.scrollItems.length === visitedLength) {
                  this.preloadNextPagePromiseResolve();
                  this.preloadNextPagePromiseResolve = null;
              }

          }
      },
      getRemain: function() {
          var scrollHeight = Math.max(document.documentElement.scrollHeight,
              document.body.scrollHeight);
          var remain = scrollHeight - window.innerHeight - window.scrollY;
          return remain;
      },
      doRequest: async function() {
          var nextUrl = App$1.requestUrl;
          const referer = App$1.lastRequestUrl || App$1.curPageUrl;
          App$1.lastRequestUrl = App$1.requestUrl;

          if (nextUrl && !App$1.isTheEnd && !(nextUrl in App$1.parsedPages)) {
              // App.parsedPages[nextUrl] = 0;
              App$1.curPageUrl = App$1.requestUrl;
              App$1.requestUrl = null;

              var useiframe = App$1.site.useiframe;

              App$1.$loading
                  .show()
                  .html("")
                  .append($("<img>").attr("src", "data:image/gif;base64,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"))
                  .append("<a href='" + nextUrl + "' title='点击打开下一页链接' tabindex='-1'>正在载入下一页".uiTrans() + (useiframe ? "(iframe)" : "") + "...</a>");

              await sleep(App$1.site.nDelay || 0);

              if (useiframe) {
                  App$1.request = App$1.iframeRequest;
              } else {
                  App$1.request = App$1.httpRequest;
              }
              
              C.log('获取下一页', nextUrl);
              if (App$1.site.withReferer) {
                  App$1.request.send(nextUrl, referer);
              } else {
                  App$1.request.send(nextUrl);
              }
      
          }
      },
      loaded: async function(doc) {
          var parser = new Parser(App$1.site, doc, App$1.curPageUrl);
          await parser.getAll();
          await App$1.addNextPage(parser);
      },
      addNextPage: async function(parser) {
          if (parser.content) {
              App$1.appendPage(parser);

              // App.$loading.hide();
              App$1.requestUrl = parser.nextUrl;
              App$1.isTheEnd = parser.isTheEnd;

              await App$1.afterLoad();
          } else {
              App$1.removeListener();

              var msg = (parser.isTheEnd == 'vip') ?
                  'vip 章节，需付费。' :
                  '错误：没有找到下一页的内容。';
              App$1.$loading.html(
                  '<a href="' + App$1.curPageUrl + '">' + msg + '点此打开下一页。</a>'.uiTrans())
                  .show();
          }

      },
      afterLoad: async function() {

          if (Setting.preloadNextPage) {
              await new Promise(resolve => this.preloadNextPagePromiseResolve = resolve);
              await sleep(200);
              App$1.doRequest();  // 不用 await
          }
      },
      fixImageFloats: function(articleContent) {

          articleContent = articleContent || document;

          var imageWidthThreshold = Math.min(articleContent.offsetWidth, 800) * 0.55,
              images = articleContent.querySelectorAll('img:not(.blockImage)');

          for (var i = 0, il = images.length; i < il; i += 1) {
              var image = images[i];

              if (image.offsetWidth > imageWidthThreshold) {
                  image.className += " blockImage";
              }
          }
      },

      isSaveing: false,
      saveAsTxt: async function() {
          // if (App.site.useiframe) {
          //     UI.notice('暂不支持', 3000);
          //     return;
          // }

          if (App$1.isSaveing) {
              alert('正在保存中，请稍后');
              return;
          }

          App$1.isSaveing = true;

          await run(App$1.parsers);
          App$1.isSaveing = false;
      },
      getSiteFontInfo: function () {
          const fonts = { external: [], internal: [], family: [] };
          const { external, internal, family, siteFontFamily } = fonts;

          // 获取所有的字体名字
          for (const font of document.fonts) {
              family.push(font.family);
          }

          // 获取外部 css 地址和内部 css 样式文本
          for (const styleSheet of document.styleSheets) {
              try {
                  for (const cssRule of styleSheet.cssRules) {
                      if (cssRule instanceof CSSFontFaceRule) {
                          const fontFamily = cssRule.style.fontFamily;
                          const cssText = cssRule.cssText;
                          if (!internal.find(o => o.fontFamily === fontFamily)) {
                              internal.push({ fontFamily, cssText });
                          }
                      }
                  }
              } catch (e) {
                  external.push(styleSheet.href);
              }
          }
          
          // 处理成 font-family 样式格式
          let familyList = [];

          // 内部样式优先
          internal.forEach(e => {
              familyList.push(e.fontFamily);
          });

          family.forEach(e => {
              if (!familyList.includes(e)) {
                  familyList.push(e);
              }
          });
          // 含空格字体名补双引号
          familyList = familyList.map(e => {
              if (e.includes(' ')) {
                  return `"${e}"`
              } else {
                  return e
              }
          });

          fonts.siteFontFamily = familyList.join(',') + ',';
          
          return fonts
      }
  };

  var BookLinkMe = {
    clickedColor: "666666",

    init: function() {

        this.addUnreadButton();

        // if (location.pathname.indexOf("/book-") === 0) {
        //     this.chapterPageAddTiebaLink();
        // }
    },
    addUnreadButton: function(){  // 添加一键打开所有未读链接
        var $parent = $('td[colspan="2"]:contains("未读"):first, td[colspan="2"]:contains("未讀"):first');
        if(!$parent.length) return;

        var openAllUnreadLinks = async function(event){
            event.preventDefault();

            var links = $x('./ancestor::table[@width="100%"]/descendant::a[img[@alt="未读"]]', event.target);
            for (let link of links) {
              // 忽略没有盗版的
              let chapterLink = link.parentNode.nextSibling.nextSibling.querySelector('a');
              if (chapterLink.querySelector('font[color*="800000"]')) {
                 continue;
              }

              await delay(200);

              if(isFirefox)
                  link.click();
              else
                  GM_openInTab(link.href);

              // 设置点击后的样式
              // 未读左边的 1x 链接
              link.parentNode.previousSibling.querySelector('font')
                  .setAttribute('color', BookLinkMe.clickedColor);
              chapterLink.classList.add('mclicked');
            }
        };


        $('<a>')
            .attr({ href: 'javascript:;', title: '一键打开所有未读链接', style: 'width:auto;' })
            .click(openAllUnreadLinks)
            .append($('<img src="me.png" style="max-width: 20px;">'))
            .appendTo($parent);
    },
    chapterPageAddTiebaLink: function() {
        var link = $('font:contains("贴吧")').parent().get(0);
        if (!link) return;

        var tiebaUrl = 'http://tieba.baidu.com/f?kw=' + $('h1').text();
        console.log('GM_xmlhttpRequest', tiebaUrl);
        GM_xmlhttpRequest({
            method: "GET",
            url: tiebaUrl,
            onload: function(response) {
                var doc = parseHTML(response.responseText);
                BookLinkMe.load(doc);
            }
        });
    },
    load: function(doc) {
        var $data = $(doc).find('.threadlist_text > a').map(function() {
            return {
                title: $(this).text(),
                url: 'http://tieba.baidu.com' + $(this).attr('href')
            }
        });

        var trimTitle = function(title, strict) {
            title = title.trim()
                .replace(/\.\.\.$/, '');

            if (strict) {
                title = title.replace(/第.*?章\s*/, '');
            }

            // if (toNum) {
            //     title = title.replace(/[零一二三四五六七八九十百千万亿]+/, cnNum2ArabNum);
            // }

            return title;
        };

        var findUrl = function(sTitle) {
            if (!sTitle) return;

            var url;
            $data.each(function(i, item) {
                var tiebaTitle = item.title;
                if (tiebaTitle.indexOf(trimTitle(sTitle)) > 0 ||
                    sTitle.indexOf(trimTitle(tiebaTitle, true)) > 0  // 包含贴吧标题的部分
                ) {
                    url = item.url;
                    return true;
                }
            });

            return url;
        };

        $('a:contains("搜索本章节")').each(function(){
            var $this = $(this),
                $thisLine = $this.parent().parent(),
                chapterTitle = $thisLine.prev().find('a[href^="/jump.php"]:first').text();

            var url = findUrl(chapterTitle);
            if (url) {
                $('<a>')
                    .attr({ target: '_blank', href: url })
                    .text('贴吧')
                    .appendTo($this.parent());
            }
        });
    }
  };

  toggleConsole(Setting.debug);

  if (location.host.indexOf('booklink.me') > -1) {
    BookLinkMe.init();
  } else {
    App$1.init();
  }

}(Vue));
