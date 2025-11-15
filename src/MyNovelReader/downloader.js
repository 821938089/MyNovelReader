import config from './config'
import Parser from './parser'
import { loading } from './components/message'
import App from './app'
import {saveAs, isWindows} from './utils'
import getNumFromChapterTitle from './utils/getNumFromChapterTitle'
import { sleep, C } from './lib'

const chapters = [];

let lastRequestUrl = ""

const fileName = {
  bookTitle: '',
  ext: '.txt',
  start: 0,
  end: 0,

  setBookTitle(bookTitle) {
    this.bookTitle = bookTitle
  },
  setStart(chapterTitle) {
    let num = getNumFromChapterTitle(chapterTitle)
    if (num) {
      this.start = num
    }
  },
  setEnd(chapterTitle) {
    let num = getNumFromChapterTitle(chapterTitle)
    if (num) {
      this.end = num
    }
  },

  toString() {
    let start = this.start || ''
    let end = this.end || ''
    let count = chapters.length;

    return `${this.bookTitle || '未知名称'}(${start} - ${end},共${count}章)${this.ext}`
  }
};

function toTxt(parser) {
  var html = $.nano('{chapterTitle}\n\n{contentTxt}', parser);
  chapters.push(html);

  var msg = '已下载 ' + chapters.length + ' 章，' +
      (parser.chapterTitle || '')

  loading(msg, 0);
};

function finish(parser) {
  var allTxt = chapters.join('\n\n');
  if (isWindows) {
      allTxt = allTxt.replace(/\n/g, '\r\n');
  }

  if (parser) {
    fileName.setEnd(parser.chapterTitle)
  }

  saveAs(allTxt, fileName.toString());
};

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

  await sleep(config.download_delay)

  getNextPage(nextUrl)
};

async function getNextPage(nextUrl) {
  C.log('[存为txt]正在获取：', nextUrl)

  const referer = lastRequestUrl || location.href
  lastRequestUrl = nextUrl
  let request, doc

  if (App.site.useiframe) {
    request = App.iframeRequest
  } else {
    request = App.httpRequest
  }

  if (App.site.withReferer) {
    doc = await request.send(nextUrl, referer);
  } else {
    doc = await request.send(nextUrl);
  }

  if (doc) {
      var par = new Parser(App.site, doc, nextUrl);
      await par.getAll()
      await getOnePage(par)
  } else {
      C.error('超时或连接出错');
      finish();
  }
}

async function run(cachedParsers=[]) {
  C.log(`[存为txt]每章下载延时 ${config.download_delay} 毫秒`)
  
  lastRequestUrl = ""

  cachedParsers.forEach(toTxt);

  var firstParser = cachedParsers[0]
  fileName.setBookTitle(firstParser.bookTitle);
  fileName.setStart(firstParser.chapterTitle)

  var lastParser = cachedParsers[cachedParsers.length - 1];
  await getOnePage(null, lastParser.nextUrl);
}

export default run