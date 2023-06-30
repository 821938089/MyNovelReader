import getMiddleStr from '../utils/string'
import { C, Request, toRE } from '../lib';
import { replaceJjwxcCharacter } from '../utils/jjwxcFontDecode';

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
        $doc.find('.review-count').remove()

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

        const { vipStatus } = g_data.data.chapterInfo
        const { nextVipStatus } = g_data.data.chapterInfo.extra

        if (vipStatus === 0 && nextVipStatus === 1) {
            this.info.useiframe = true;
            this.info.mutationSelector = '.read-content.j_readContent'
            this.info.mutationChildCount = 0
        }

        // 滚屏的方式无法获取下一页
        if ($doc.find('#j_chapterPrev').length === 0) {
            var $node = $doc.find('div[id^="chapter-"]');
            const prevUrl = $node.attr('data-purl').replace("www", "read")
            const nextUrl = $node.attr('data-nurl').replace("www", "read")
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
        const win = $doc[0].defaultView
        if (win.g_data.chapter.vipStatus === 1) { // 是 vip 章节
            this.useiframe = true;
            this.mutationSelector = '.read-content.j_readContent'
            this.mutationChildCount = 0
        }
        if (win.g_data.chapter.cES === 2) { // vip 加密 + Html、Css 混淆章节
            // 不支持
            this.contentSelector = "" 
            this.isVipChapter = () => true
            // this.useRawContent = true;
            // this.cloneNode = true;
        }
    },
  },
    {siteName: "起点新版-20230517",
        url: "^https?://(www|m)\\.qidian\\.com/chapter/.*",

        bookTitleSelector: "#r-breadcrumbs > a:last",
        titleSelector: "h1.text-1\\.3em",

        prevSelector: '.prev_chapter',
        nextSelector: '.next_chapter',
        indexSelector: '#r-breadcrumbs > a:last',


        contentSelector: '.content',
        // contentHandle: false,
        timeout: 3000,

        isVipChapter($doc) {
            const json = $doc.find('#vite-plugin-ssr_pageContext').text()
            const { pageContext } = JSON.parse(json)
            const { vipStatus, isBuy } = pageContext.pageProps.pageData.chapterInfo
            if (vipStatus && !isBuy) {
                return true
            }
        },

        contentPatch($doc) {
            $doc.find('.review').remove()

            const json = $doc.find('#vite-plugin-ssr_pageContext').text()
            const { pageContext } = JSON.parse(json)
            const { next, prev, vipStatus } = pageContext.pageProps.pageData.chapterInfo
            const { nextVipStatus } = pageContext.pageProps.pageData.chapterInfo.extra
            if (vipStatus === 0 && nextVipStatus === 1) {
                this.info.useiframe = true;
            }
            const { bookId } = pageContext.pageProps.pageData.bookInfo

            // 滚动翻页
            if ($doc.find('.nav-btn-group > a').length < 3) {
                const $body = $doc.find("body")
                const chapterUrl = `/chapter/${bookId}/`
                $('<div class="next_chapter">')
                    .attr("href", chapterUrl + next.toString())
                    .appendTo($body)
                $('<div class="prev_chapter">')
                    .attr("href", chapterUrl + prev.toString())
                    .appendTo($body)
            }
        },

        startLaunch($doc) {
            const json = $doc.find('#vite-plugin-ssr_pageContext').text()
            const { pageContext } = JSON.parse(json)
            const { chapterInfo } = pageContext.pageProps.pageData

            if (chapterInfo.vipStatus === 1) { // 是 vip 章节
                this.useiframe = true;
                this.mutationSelector = '.content'
                this.mutationChildCount = 0
            }
            if (chapterInfo.cES === 2) { // vip 加密 + Html、Css 混淆章节
                // 不支持
                this.isVipChapter = () => true
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

          $doc.find("div[align=right], .readsmall").remove()
          $doc.find("script").remove()

          // 移除VIP章节方块
          var $node = $doc.find('.noveltext');
          if ($node.attr("class").split(/\s+/).length === 2) {
              var fontName = $node.attr("class").split(/\s+/)[1];
              const html = await replaceJjwxcCharacter(fontName, $node.html())
              $node.html(html);
          }
      },
      contentReplace: [
          '@无限好文，尽在晋江文学城'
      ],
      startLaunch($doc) {
        const win = $doc[0].defaultView
        if (win.location.href.includes('onebook_vip')) { // vip 章节
            this.useiframe = true
            this.mutationSelector = 'div[id^=content]'
            this.mutationChildCount = 0
            this.iframeSandbox = 'allow-same-origin allow-scripts'
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
  {siteName: "顶点小说",
      url: "^https?://www\\.(?:23us|x23us|23wx|xs222)\\.(?:com|cc)/html/\\d+/\\d+/\\d+\\.html$",
      exampleUrl: "https://www.23us.cc/html/378/378125/3929174.html",
      bookTitleSelector: '.crumbs > div > a:last, #amain > dl > dt > a:last',
      indexSelector: "#footlink a:contains('返回目录')",
      prevSelector: "#footlink a:contains('上一页')",
      nextSelector: "#footlink a:contains('下一页')",
      contentSelector: "#contents",
      contentReplace: [
          "\\(看小说到顶点小说网.*\\)|\\(\\)|【记住本站只需一秒钟.*】",
          '一秒记住【.*读及下载。',
          'www.xstxt.org',
          'wenxuemi.com',
          '23us．com',
          '顶点小说 Ｘ２３ＵＳ．com更新最快',
          'www．23us．cc更新最快',
          '免费小说门户',
          '\\|顶\\|点\\|小\\|說\\|網更新最快',
          '\\\\\\|顶\\\\\\|点\\\\\\|小\\\\\\|说\\\\\\|2\\|3\\|u\\|s\\|.\\|c\\|c\\|',
      ],
      contentPatch: function(fakeStub){
          var temp=fakeStub.find('title').text();
          var realtitle = temp.replace(/第.*卷\s/,'');
          fakeStub.find('title').html(realtitle);
      }
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
  {siteName: "读零零（有问题，只显示一半内容）",
      url: "https?://www\\.du00\\.(?:com|cc)/read/\\d+/\\d+/[\\d_]+\\.html",
      exampleUrl: 'https://du00.com/Read/0/1/17.html',
      titleReg: "(.*?)(?:第\\d+段)?,(.*) - 读零零小说网",
      titlePos: 1,
      // prevSelector: "#footlink a:first",
      // indexSelector: "#footlink a:contains('目录')",
      // nextSelector: "#footlink a:last",
      // 内容
      contentSelector: "#pagecontent, .divimage",
      // useiframe: true,
      // mutationSelector: "#pagecontent",
      // mutationChildCount: 2,
      contentRemove: "font",
      contentReplace: [
          "读零零小说网欢迎您的光临.*?txt格式下载服务",
          "，好看的小说:|本书最新免费章节请访问。",
          "\\*文學馆\\*",
          "\\(未完待续请搜索，小说更好更新更快!",
          "www\\.DU00\\.com",
      ],
      checkSection: true
  },
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
      url: "^https?://www\\.ptwxz\\.(net|com)/html/\\d+/\\d+/\\d+\\.html",
      exampleUrl: 'https://www.ptwxz.com/html/12/12450/8654958.html',
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
  {siteName: "UU看书",
      url: "^https?://www\\.uukanshu\\.(?:com|net)/.*/\\d+/\\d+.html",
      exampleUrl: 'https://www.uukanshu.com/b/174835/10801.html',
      contentReplace: [
          /* 替换以下
              ＵU看书 www.uukanｓhｕ.net
              'UU看书 www.uｕkanshu.net '
              'UU看书 www.uuｋanshu．net'
              'ＵU看书 www.ｕuｋanｓhu.net'
              'UU看书 www.uuｋanshu.net '
              'ＵU看书www．uukansｈu.net '
              'UU看书 www.uukanshu.net'
              'ＵU看书 www.uukanshu.net'
              'ＵU看书 www.ｕukanshu.net '
              'UU看书 www.uukａnshu.net '
              ‘UU看书 www.uukanshu．net ’
              ‘UU看书 www.uukａnｓhu．net ’
              ‘UU看书 www.uｕkansｈu．net ’
              UU看书 www.ｕukaｎshu.net
          */
          /[ＵｕUu]+看书\s*[wｗ]+.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[nｎ][eｅ][tｔ]\s*/g,
          /[ＵｕUu]+看书\s*[wｗ]+.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[cｃ][oｏ][mｍ]\s*/g,
          '[UＵ]*看书[（\\(].*?[）\\)]文字首发。',
          '请记住本书首发域名：。笔趣阁手机版阅读网址：',
        //   '\\(\\)',
      ],
      contentRemove: '.ad_content'
  },
  {siteName: "黄金屋中文网",
      url: /www\.hjwzw\.com\/Book\/Read\/\d+[,_]\d+$/,
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
    url: '^https?://www\\.nuanyuehanxing\\.com/\\w+/\\d+/\\d+\\.html',
    exampleUrl: 'https://www.nuanyuehanxing.com/shu/56388575/111040667.html',
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
            let html = $(this).html()
            $(this).replaceWith(
                $('<p>').html(html)
            )
        })
    }
  },

  {siteName: "69书吧",
    url: "https?://www\\.69shu\\.com/txt/\\d+/\\d+",
    // contentHandle: false,
    titleSelector: 'h1',
    contentSelector: ".txtnav",
    contentRemove: ".txtinfo.hide720, #txtright, .bottom-ad, .bottom-ad2",
    nextSelector: '.page1 a:nth-child(4)',
    prevSelector: '.page1 a:nth-child(1)',
    indexSelector: '.page1 a:nth-child(3)',
    },

  {siteName: "读万卷",
    url: "https?://www\\.duwanjuan\\.com/html/\\d+/\\d+/\\d+\\.html",
    exampleUrl: 'http://www.duwanjuan.com/html/995/995791/105890775.html',
    titleSelector: 'h1',
    contentSelector: "#acontent",
    contentRemove: ".tishi",
    nextSelector: '.footlink a:nth-child(3)',
    prevSelector: '.footlink a:nth-child(1)',
    indexSelector: '.footlink a:nth-child(2)',
    contentReplace: ['\\(读万卷 www.duwanjuan.com\\)','读万卷 www\\.duwanjuan\\.com'],
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
                            var _0x4089d1 = plainText.slice(_0x2fd6ee, Math.min(_0x2fd6ee + 9, _0x1c7c70))
                            _0x9fd207.push(parseInt(_0x4089d1).toString(16))
                        }
                        return ['3', _0x9fd207]
                    }
                    for (var _0x4b46c9 = '', _0x1f2538 = 0; _0x1f2538 < plainText.length; _0x1f2538++)
                        _0x4b46c9 += plainText.charCodeAt(_0x1f2538).toString(16)
                    return ['4', [_0x4b46c9]]
                })(plainText)
            ;(_0xf208b6 += _0x2045c1[0]), (_0xf208b6 += 2 + md5Hash.substr(md5Hash.length - 2, 2))
            for (var _0x59bebd = _0x2045c1[1], _0x1aafd3 = 0; _0x1aafd3 < _0x59bebd.length; _0x1aafd3++) {
                var _0x1af4ac = _0x59bebd[_0x1aafd3].length.toString(16)
                1 === _0x1af4ac.length && (_0x1af4ac = '0' + _0x1af4ac),
                    (_0xf208b6 += _0x1af4ac),
                    (_0xf208b6 += _0x59bebd[_0x1aafd3]),
                    _0x1aafd3 < _0x59bebd.length - 1 && (_0xf208b6 += 'g')
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
                var _0x436006 = parseInt(encodedText.substr(_0x2bf2ee, 2), 16)
                if (_0x2bf2ee + 2 + _0x436006 > _0x23fa2c) return ''
                var _0x3f72db = encodedText.substr(_0x2bf2ee + 2, _0x436006),
                    _0x41cdae = ''
                if ('3' === _0x25eace) {
                    var _0x3c987c = parseInt(_0x3f72db, 16)
                    if (isNaN(_0x3c987c)) return ''
                    _0x41cdae = '' + _0x3c987c
                } else
                    for (var _0x293868 = 0, _0x14b43a = _0x3f72db.length; _0x293868 < _0x14b43a; _0x293868 += 2) {
                        var _0x4f2610 = parseInt(_0x3f72db.substr(_0x293868, 2), 16)
                        _0x41cdae += String.fromCharCode(_0x4f2610)
                    }
                ;(_0xb4db26 += _0x41cdae), (_0x2bf2ee = _0x2bf2ee + 2 + _0x436006)
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
            const res = await Request(reqObj)
            var text = res.responseText;
            this.__weReadJson = JSON.parse(getMiddleStr(text, 'window.__INITIAL_STATE__=', ';'))
        }

        var chapterList = this.__weReadJson.reader.chapterInfos

        const re = /\/web\/reader\/([0-9a-f]+)k?([0-9a-f]+)?/g
        const matchs = [...this.curPageUrl.matchAll(re)]
        let bookId,
            chapterUid = null
        if (matchs) {
            bookId = decode(matchs[0][1])
            if (matchs[0].length === 3) {
                chapterUid = parseInt(decode(matchs[0][2]))
            }
        }

        var currentChapter = chapterList.find(e => e.chapterUid === chapterUid)

        var { chapterIdx } = currentChapter || { chapterIdx: 1 }

        var nextUrl, prevUrl, indexUrl

        indexUrl = '/web/reader/' + encode(bookId)

        if (chapterIdx === chapterList.length) {
            nextUrl = ''
        } else {
            var nextChapterUid = chapterList[chapterIdx].chapterUid
            nextUrl = indexUrl + 'k' + encode(nextChapterUid)
        }

        if (chapterUid && chapterUid > 1) {
            var prevChapterUid = chapterList[chapterIdx - 2].chapterUid
            prevUrl = indexUrl + 'k' + encode(prevChapterUid)
        } else {
            prevUrl = ''
        }

        var dataUrls = []

        $doc.find('.wr_canvasContainer canvas').each(function () {
            dataUrls.push(this.toDataURL())
            $(this).remove()
        })

        var $body = $doc.find('body')
        if (nextUrl) {
            // 加上一页链接
            $('<div id="nextchapter">').attr('href', nextUrl).appendTo($body)
        }
        if (prevUrl) {
            // 加下一页链接
            $('<div id="prevchapter">').attr('href', prevUrl).appendTo($body)
        }
        // 目录
        $('<div id="bookindex">目录</div>').attr('href', indexUrl).appendTo($body)
        // 正文
        var $container = $doc.find('.wr_canvasContainer')
        for (const dataUrl of dataUrls) {
            $('<img>').attr('src', dataUrl).appendTo($container)
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
        url: 'https?://www\\.yywenxuan\\.com/\\d+/.*?\\.html',
        exampleUrl: 'http://www.yywenxuan.com/523903/13063045.html',
        useiframe: true,
        contentSelector: '#ad'
    },

    {siteName: '霹雳书坊',
        url: 'https?://(?:www|m).pilibook.com/\\d+/\\d+/\\d+.html',
        exampleUrl: 'https://www.pilibook.com/2/2781/692547.html',

        nextSelector($doc) {
            return $doc.find('img[src="https://m.pilibook.com/17mb/style/03.png"]')
                .parent()
                .attr('href')
        },
        prevSelector($doc) {
            return $doc.find('img[src="https://m.pilibook.com/17mb/style/01.png"]')
                .parent()
                .attr('href')
        },
        indexSelector($doc) {
            return $doc.find('img[src="https://m.pilibook.com/17mb/style/05.png"]')
                .parent()
                .attr('href')
        },

    },

    {siteName: '飞速中文',
        url: 'https://(?:www.)?(?:feiazw|xn--fiq228cu93a4kh).com/Html/\\d+/\\d+.html',
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
            const re = toRE("\\{url_previous:'(.*?)',url_next:'(.*?)',url_index:'(.*?)',\\}")
            const ReadParams = $doc.find('script:contains(ReadParams)').text()
            const [_, url_previous, url_next, url_index] = re.exec(ReadParams)
            let previousName = $doc.find('#readbg > p > a:nth-child(1)').text()
            switch (previousName) {
                case '<-':
                    previousName = '上一页'
                    break;
                case '<<':
                    previousName = '上一章'
                    break;
                default:
                    break;
            }
            let nextName = $doc.find('#readbg > p > a:nth-child(5)').text()
            switch (nextName) {
                case '->':
                    nextName = '下一页'
                    break;
                case '>>':
                    nextName = '下一章'
                    break;
                default:
                    break;
            }
            const body = $doc.find('body')

            $doc.find('p:contains(（继续下一页）)').remove()

            $('<a>').attr('href', url_previous).text(previousName).appendTo(body)
            $('<a>').attr('href', url_next).text(nextName).appendTo(body)
            $('<a>').attr('href', url_index).text('目录').appendTo(body)

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
            const js = $doc.find('script:contains(saveMark)').text()
            const hostIP = document.cookie.replace(
                /(?:(?:^|.*;\s*)hostip\s*\=\s*([^;]*).*$)|^.*$/,
                '$1'
            )
            const body = getMiddleStr(js, 'var str = "', '";').replace(/&#39;|&#34;/gi, '"')
            fetch(`http://${hostIP}/saveBookProgress`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            })
        }

    },

    {siteName: '有度中文网',
        url: 'https://www.yodu.org/book/\\d+/\\d+.html',
        exampleUrl: 'https://www.yodu.org/book/11542/1472213.html',
        useSiteFont: true,
        // style: '@font-face{font-family:read;font-display:block;src:url(/en/common/read.ttf);}#mynovelreader-content{font-family: "read" !important;}',

        contentPatch($doc) {
            const re = toRE("\\{t\\d+_0:'(.*?)',t\\d+_1:'(.*?)',t\\d+_index:'(.*?)',\\}")
            const ReadParams = $doc.find('script:contains(fuck)').text()
            const [_, url_previous, url_next, url_index] = re.exec(ReadParams)

            let previousName = $doc.find('#readbg > p > a:nth-child(1)').text()
            let nextName = $doc.find('#readbg > p > a:nth-child(5)').text()
            previousName = previousName === '<--' ? '上一页' : '上一章'
            nextName = nextName === '-->' ? '下一页' : '下一章'

            const body = $doc.find('body')

            $doc.find('a:contains(目录)').remove()
            $doc.find('p:contains(（本章未完）)').remove()

            $('<a>').attr('href', url_previous).text(previousName).appendTo(body)
            $('<a>').attr('href', url_next).text(nextName).appendTo(body)
            $('<a>').attr('href', url_index).text('目录').appendTo(body)
        }

    },

    {siteName: '小书亭',
        url: 'http://www.xiaoshuting.la/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.xiaoshuting.la/4/4325/72082213.html',

        noSection: true

    },

    {siteName: '小书亭',
        url: 'http://www.xiaoshutingapp.com/html/\\d+/\\d+.html',
        exampleUrl: 'http://www.xiaoshutingapp.com/html/11341/151211.html',

        noSection: true

    },

    {siteName: '饭团看书',
        url: 'http://www.fantuankanshu.com/html/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.fantuankanshu.com/html/6/6286/83813065.html',

        noSection: true

    },

    {siteName: 'E品中文',
        url: 'http://www.epzw.com/html/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.epzw.com/html/92/92675/1.html',

        noSection: true

    },

    {siteName: '爱好中文网',
        url: 'http://www.ahzww.org/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.ahzww.org/10/10922/254841.html',

        noSection: true

    },

    {siteName: '第一小说',
        url: 'https://www.01xs.com/xiaoshuo/\\d+/\\d+.html',
        exampleUrl: 'https://www.01xs.com/xiaoshuo/120924/1.html',

        noSection: true

    },

    {siteName: '思路客',
        url: 'http://www.slkslk.com/\\d+/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.slkslk.com/0/8/8342/139031.html',

        noSection: true

    },

    {siteName: '思路客',
        url: 'http://www.siluke.com/\\d+/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.siluke.com/0/112/112444/1874061.html',

        noSection: true

    },

    {siteName: '小书亭',
        url: 'http://www.xiaoshuting.cc/xiaoshuo/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.xiaoshuting.cc/xiaoshuo/4/4469/62562.html',

        contentSelector: '.Text',
        bookTitleSelector: '.summary a'

    },

    {siteName: '2k小说网',
        url: 'http://www.2kxiaoshuo.com/xiaoshuo/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.2kxiaoshuo.com/xiaoshuo/18/18207/254891.html',

        contentSelector: '.Text',
        bookTitleSelector: '.summary a'

    },

    {siteName: '2k小说网',
        url: 'http://www.2kxs.la/xiaoshuo/\\d+/\\d+/\\d+.html',
        exampleUrl: 'http://www.2kxs.la/xiaoshuo/11/11245/202411.html',

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

    {siteName: '360小说网',
        url: 'https://www.360xs.com/mulu/\\d+/\\d+-\\d+.html',
        exampleUrl: 'https://www.360xs.com/mulu/215/215007-100695232.html',

        titleSelector($doc) {
            return $doc.find('#read_title h1').contents()[0].data.split(' 章节目录 ')[1]
        },
        noSection: true

    },

    {siteName: '顶点小说',
        url: 'https://www.23tr.com/book/\\d+/\\d+.html',
        exampleUrl: 'https://www.23tr.com/book/313476/49823231.html',

        titleSelector: '.atitle',
        bookTitleSelector: '.linkleft > a:nth-child(3)',
        contentReplace: ['^【重要提醒】$'],

    },

    {siteName: '52小说网 ',
        url: 'http://www.5ixsw.net/html/\\d+/\\d+/.*?.html',
        exampleUrl: 'http://www.5ixsw.net/html/100/100075/4.html',

        checkSection: true,

    },

    {siteName: '笔趣阁',
        url: 'https://www.biqiudu.com/novel/\\d+/\\d+.html',
        exampleUrl: 'https://www.biqiudu.com/novel/41797/15459802.html',

        contentReplace: ['ｈttpｓ://m\\.biqiudu\\.com笔趣阁', '笔趣阁网址ｍ．biqiudu。com']

    },

    {siteName: '八一中文',
        url: 'https?://www.8181zw.com/book/\\d+/\\d+(?:_\\d+)?.html',
        exampleUrl: 'https://www.8181zw.com/book/383529/2047155.html',

        checkSection: true,
        handleContentText ($content, info) {
            const $html = $(this.handleContentText2($content, info))
            const className = `content-${new Date().getTime()}`
            $html.addClass(className)
            const style = this.$doc.find('style').filter(function () {
                return $(this).text().indexOf("@font-face") > -1
            })
            style.text(style.text().replace("content", className))
            $html.prepend(style)
            return $html[0].outerHTML
        }

    },

    {siteName: '精华书阁',
        url: 'https?://(?:www.)?(?:2ksk|jhssd|xbyuan).com/\\d+/.*?.html',
        exampleUrl: 'https://www.jhssd.com/172/652.html',

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

    {siteName: '看书啦',
        url: 'https?://www.kanshu5.net/\\d+/\\d+/\\d+.html',

        contentReplace: [
            'wΑΡ.ＫāйsΗυ伍.net',
            'ΚáИδんǔ5.ζá',
            'kΑnShú伍.ξà',
            'wΑΡ.KāйsΗυ伍.Lα',
            'wǎp.kāΝsHμ⑤.ξA',
            'wΑΡ.KāйsΗυ伍.net',
            'ΚáИδんǔ5.net',
            'wǎp.kāΝsＨμ⑤.net',
            'wwＷ.ＫaИδＨＵ五.net',
            'ωωw.ΚＡЙδhυ㈤.net',
            'kΑnＳhú伍.ξà',          
        ]

    },

    {siteName: '一五文学',
        url: 'https?://www.15zw.net/xs/\\d+/\\d+/.*?.html',

        contentSelector: '.word_in',
        checkSection: true,
        prevSelector: '.hjiyj6j',
        titleSelector: '.mt10',
        nextUrl($doc) {
            const script = $doc.find("script:contains(lidetkld)").text()
            var asdiekert = script.match(/var asdiekert = '(.*?)';/)[1];
            var asdfaert = script.match(/var asdfaert = '(.*?)';/)[1];
            var asdfaegd = script.match(/var asdfaegd = '(.*?)';/)[1];
            var xlsw = script.match(/var xlsw = '(.*?)';/)[1];
            var xadtp = script.match(/var xadtp = '(.*?)';/)[1];
            var asdfaetd
            if (xlsw != "1515") {
                if (xadtp != "0") {
                    asdfaetd = asdfaert + asdfaegd + "_" + xadtp + ".html"
                } else {
                    asdfaetd = asdfaert + xlsw + ".html"
                }
            } else {
                if (xadtp == "0") {
                    asdfaetd = window.location.protocol + "//" + window.location.host + asdiekert
                } else {
                    asdfaetd = asdfaert + asdfaegd + "_" + xadtp + ".html"
                }
            }
            return asdfaetd
        }

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
        ]

    },

    {siteName: "mjj小说",
        url: "https://mjjxs.net/chapter/\\d+/\\d+.html",
        exampleUrl: "https://mjjxs.net/chapter/61559303/1.html?4299",

        contentSelector: ".content",
        contentReplace: ["你正在阅读章节 【.*?】", "你正在阅读 《.*?》 章节： .*", 
        "\\[ 百万网络书库,已开启防爬虫,只支持浏览器阅读,如果显示不正常,请浏览器访问 mjjxs.com \\]", 
        "\\[ 免费无广告，书架自动追更，百万书库 mjjxs.com 啥书都能找到 \\]",
        "\\[ 免费无广告，书架自动追更，百万书库 mjjxs.com 你要的书几乎都有 \\]"
    ],

        chapterTitleReplace: "《.*?》 - ",

        useiframe: true,
        withReferer: true

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
        url: "https?://www.dubuxiaoshuo.com/book/.*?/.*?\\.html",
        exampleUrl: "https://www.dubuxiaoshuo.com/book/p1693/565590.html",

        contentSelector: "#cont-body",
        prevSelector: ".col-md-6.text-center a:first",
        nextSelector: ".col-md-6.text-center a:last"

    },

    {siteName: '123读',
        url: 'https?://www\\.123duw\\.com/dudu-\\d+/\\d+/\\d+(-\\d+)?.html',
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
        siteName: "611中文",
        url: "https://www.611zw.com/books/\\d+/\\d+(_)?\\d+.html",
        exampleUrl: "https://www.611zw.com/books/175956/57627355.html",

        checkSection: true,

        titleSelector: ".reader-main h1.title",
        contentReplace: ["(www.)?611zw.com"]
    },

    {
        siteName: "东流小说",
        url: "https://www.bifengzw.com/read/.*/\\d+(_)?\\d+.html",
        exampleUrl: "https://www.bifengzw.com/read/AgVVAApc/1644315500.html",

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
    }
];

export default sites
