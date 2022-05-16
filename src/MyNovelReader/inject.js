import App from './app'

const { HTMLElement, EventTarget, MutationObserver, Navigator, Proxy, Reflect, Object } = unsafeWindow

// 防止 iframe 中的脚本调用 focus 方法导致页面发生滚动
const _focus = HTMLElement.prototype.focus
HTMLElement.prototype.focus = function focus() {
  _focus.call(this, { preventScroll: true })
}

// Hook addEventListener 以便需要时移除事件监听器
const _addEventListener = EventTarget.prototype.addEventListener
function addEventListener(type, listener, options) {
  _addEventListener.apply(this, arguments)
  App.listenerAndObserver.push(() => {
    try {
      this.removeEventListener(...arguments)
    } catch (e) {}
  })
}
EventTarget.prototype.addEventListener = addEventListener
document.addEventListener = addEventListener

// Hook MutationObserver 以便需要时移除观察器
const _observe = MutationObserver.prototype.observe
const _disconnect = MutationObserver.prototype.disconnect
function observe(target, options) {
  _observe.apply(this, arguments)
  App.listenerAndObserver.push(() => {
    try {
      _disconnect.apply(this, arguments)
    } catch (e) {}
  })
}
MutationObserver.prototype.observe = observe

Object.defineProperty(Navigator.prototype, 'platform', {
  get: function platform() {
    return ''
  }
})

unsafeWindow.console.clear = () => {}

const proxies = new WeakMap()

unsafeWindow.Proxy = new Proxy(Proxy, {
  construct: function (target, argumentsList, newTarget) {
    const proxy = Reflect.construct(target, argumentsList, newTarget)
    proxies.set(proxy, argumentsList[0])
    return proxy
  }
})

export function isProxy(obj) {
  return proxies.has(obj)
}

export function getProxyTarget(proxy) {
  return isProxy(proxy) ? proxies.get(proxy) : proxy
}

export function setPropertyReadOnly(obj, prop, target) {
  const value = target || obj[prop]
  Object.defineProperty(obj, prop, {
    get() {
      return value
    },
    set() {}
  })
}