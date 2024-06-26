// 代码来自 https://github.com/hirak/phpjs
// 有修改

const fromLengthCache = new Map()

export function strtr(str, from, to) {
  var i = 0,
    j = 0,
    lenStr = 0,
    lenFrom = 0,
    fromTypeStr = '',
    toTypeStr = '',
    istr = '',
    fromLengthArray,
    matchTo,
    fromLength
  var ret = ''
  var match = false

  if (_.isObject(from)) {
    fromLengthArray = fromLengthCache.get(from)
    if (!fromLengthArray) {
      fromLengthArray = [...new Set(Object.keys(from).map(s => s.length))].sort(
        (a, b) => b - a
      )
      fromLengthCache.set(from, fromLengthArray)
    }
  }

  // Walk through subject and replace chars when needed
  lenStr = str.length
  lenFrom = from.length
  fromTypeStr = typeof from === 'string'
  toTypeStr = typeof to === 'string'

  for (i = 0; i < lenStr; i++) {
    match = false
    if (fromTypeStr) {
      istr = str.charAt(i)
      for (j = 0; j < lenFrom; j++) {
        if (istr == from.charAt(j)) {
          match = true
          break
        }
      }
    } else {
      for (fromLength of fromLengthArray) {
        if (from[str.substr(i, fromLength)]) {
          matchTo = from[str.substr(i, fromLength)]
          match = true
          // Fast forward
          i += fromLength - 1
          break
        }
      }
    }
    if (match) {
      ret += toTypeStr ? to.charAt(j) : matchTo
    } else {
      ret += str.charAt(i)
    }
  }

  return ret
}
