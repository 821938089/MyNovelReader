// 正文内容标准化替换

import { toRE } from '../lib'
import Setting from '../Setting'

let replaceNormalizeMap = null

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
    '[┅。…·.]{3,20}': '……',
    '[~－]{3,50}': '——'
  }
  Object.keys(rule).forEach(key => !rule[key] && delete rule[key])
  replaceNormalizeMap = rule
  return rule
}

// 不转换 ，？：；（）！
const excludeCharCode = new Set([
  65292, 65311, 65306, 65307, 65288, 65289, 65281
])

// 全角转半角
function toCDB(str) {
  let tmp = '',
    charCode
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i)
    if (
      charCode > 65248 &&
      charCode < 65375 &&
      !excludeCharCode.has(charCode)
    ) {
      tmp += String.fromCharCode(charCode - 65248)
    } else {
      tmp += str.charAt(i)
    }
  }
  return tmp
}

const includeCharCode = new Set([44, 63, 58, 59, 40, 41, 33])

// 半角转全角
// 只转换，？：；（）！
function toDBC(str) {
  let tmp = '',
    charCode
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i)
    if (includeCharCode.has(charCode)) {
      tmp += String.fromCharCode(charCode + 65248)
    } else {
      tmp += str.charAt(i)
    }
  }
  return tmp
}

export { getNormalizeMap, toCDB, toDBC }
