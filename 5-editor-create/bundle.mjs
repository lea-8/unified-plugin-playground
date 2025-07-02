var D2 = Object.create
var Zf = Object.defineProperty
var o2 = Object.getOwnPropertyDescriptor
var s2 = Object.getOwnPropertyNames
var E2 = Object.getPrototypeOf,
  r2 = Object.prototype.hasOwnProperty
var Lu = (u, t) => () => (t || u((t = {exports: {}}).exports, t), t.exports)
var A2 = (u, t, l, e) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let a of s2(t))
      !r2.call(u, a) &&
        a !== l &&
        Zf(u, a, {get: () => t[a], enumerable: !(e = o2(t, a)) || e.enumerable})
  return u
}
var Aa = (u, t, l) => (
  (l = u != null ? D2(E2(u)) : {}),
  A2(
    t || !u || !u.__esModule ? Zf(l, 'default', {value: u, enumerable: !0}) : l,
    u
  )
)
var z0 = Lu((V) => {
  'use strict'
  function ei(u, t) {
    var l = u.length
    u.push(t)
    u: for (; 0 < l; ) {
      var e = (l - 1) >>> 1,
        a = u[e]
      if (0 < ha(a, t)) ((u[e] = t), (u[l] = a), (l = e))
      else break u
    }
  }
  function Ju(u) {
    return u.length === 0 ? null : u[0]
  }
  function ma(u) {
    if (u.length === 0) return null
    var t = u[0],
      l = u.pop()
    if (l !== t) {
      u[0] = l
      u: for (var e = 0, a = u.length, n = a >>> 1; e < n; ) {
        var i = 2 * (e + 1) - 1,
          c = u[i],
          f = i + 1,
          o = u[f]
        if (0 > ha(c, l))
          f < a && 0 > ha(o, c)
            ? ((u[e] = o), (u[f] = l), (e = f))
            : ((u[e] = c), (u[i] = l), (e = i))
        else if (f < a && 0 > ha(o, l)) ((u[e] = o), (u[f] = l), (e = f))
        else break u
      }
    }
    return t
  }
  function ha(u, t) {
    var l = u.sortIndex - t.sortIndex
    return l !== 0 ? l : u.id - t.id
  }
  V.unstable_now = void 0
  typeof performance == 'object' && typeof performance.now == 'function'
    ? ((m0 = performance),
      (V.unstable_now = function () {
        return m0.now()
      }))
    : ((ui = Date),
      (C0 = ui.now()),
      (V.unstable_now = function () {
        return ui.now() - C0
      }))
  var m0,
    ui,
    C0,
    et = [],
    Ft = [],
    C2 = 1,
    _u = null,
    Eu = 3,
    ai = !1,
    fe = !1,
    De = !1,
    ni = !1,
    S0 = typeof setTimeout == 'function' ? setTimeout : null,
    B0 = typeof clearTimeout == 'function' ? clearTimeout : null,
    F0 = typeof setImmediate < 'u' ? setImmediate : null
  function va(u) {
    for (var t = Ju(Ft); t !== null; ) {
      if (t.callback === null) ma(Ft)
      else if (t.startTime <= u)
        (ma(Ft), (t.sortIndex = t.expirationTime), ei(et, t))
      else break
      t = Ju(Ft)
    }
  }
  function ii(u) {
    if (((De = !1), va(u), !fe))
      if (Ju(et) !== null) ((fe = !0), yl || ((yl = !0), dl()))
      else {
        var t = Ju(Ft)
        t !== null && ci(ii, t.startTime - u)
      }
  }
  var yl = !1,
    oe = -1,
    p0 = 5,
    b0 = -1
  function T0() {
    return ni ? !0 : !(V.unstable_now() - b0 < p0)
  }
  function ti() {
    if (((ni = !1), yl)) {
      var u = V.unstable_now()
      b0 = u
      var t = !0
      try {
        u: {
          ;((fe = !1), De && ((De = !1), B0(oe), (oe = -1)), (ai = !0))
          var l = Eu
          try {
            t: {
              for (
                va(u), _u = Ju(et);
                _u !== null && !(_u.expirationTime > u && T0());

              ) {
                var e = _u.callback
                if (typeof e == 'function') {
                  ;((_u.callback = null), (Eu = _u.priorityLevel))
                  var a = e(_u.expirationTime <= u)
                  if (((u = V.unstable_now()), typeof a == 'function')) {
                    ;((_u.callback = a), va(u), (t = !0))
                    break t
                  }
                  ;(_u === Ju(et) && ma(et), va(u))
                } else ma(et)
                _u = Ju(et)
              }
              if (_u !== null) t = !0
              else {
                var n = Ju(Ft)
                ;(n !== null && ci(ii, n.startTime - u), (t = !1))
              }
            }
            break u
          } finally {
            ;((_u = null), (Eu = l), (ai = !1))
          }
          t = void 0
        }
      } finally {
        t ? dl() : (yl = !1)
      }
    }
  }
  var dl
  typeof F0 == 'function'
    ? (dl = function () {
        F0(ti)
      })
    : typeof MessageChannel < 'u'
      ? ((li = new MessageChannel()),
        (g0 = li.port2),
        (li.port1.onmessage = ti),
        (dl = function () {
          g0.postMessage(null)
        }))
      : (dl = function () {
          S0(ti, 0)
        })
  var li, g0
  function ci(u, t) {
    oe = S0(function () {
      u(V.unstable_now())
    }, t)
  }
  V.unstable_IdlePriority = 5
  V.unstable_ImmediatePriority = 1
  V.unstable_LowPriority = 4
  V.unstable_NormalPriority = 3
  V.unstable_Profiling = null
  V.unstable_UserBlockingPriority = 2
  V.unstable_cancelCallback = function (u) {
    u.callback = null
  }
  V.unstable_forceFrameRate = function (u) {
    0 > u || 125 < u
      ? console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        )
      : (p0 = 0 < u ? Math.floor(1e3 / u) : 5)
  }
  V.unstable_getCurrentPriorityLevel = function () {
    return Eu
  }
  V.unstable_next = function (u) {
    switch (Eu) {
      case 1:
      case 2:
      case 3:
        var t = 3
        break
      default:
        t = Eu
    }
    var l = Eu
    Eu = t
    try {
      return u()
    } finally {
      Eu = l
    }
  }
  V.unstable_requestPaint = function () {
    ni = !0
  }
  V.unstable_runWithPriority = function (u, t) {
    switch (u) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break
      default:
        u = 3
    }
    var l = Eu
    Eu = u
    try {
      return t()
    } finally {
      Eu = l
    }
  }
  V.unstable_scheduleCallback = function (u, t, l) {
    var e = V.unstable_now()
    switch (
      (typeof l == 'object' && l !== null
        ? ((l = l.delay), (l = typeof l == 'number' && 0 < l ? e + l : e))
        : (l = e),
      u)
    ) {
      case 1:
        var a = -1
        break
      case 2:
        a = 250
        break
      case 5:
        a = 1073741823
        break
      case 4:
        a = 1e4
        break
      default:
        a = 5e3
    }
    return (
      (a = l + a),
      (u = {
        id: C2++,
        callback: t,
        priorityLevel: u,
        startTime: l,
        expirationTime: a,
        sortIndex: -1
      }),
      l > e
        ? ((u.sortIndex = l),
          ei(Ft, u),
          Ju(et) === null &&
            u === Ju(Ft) &&
            (De ? (B0(oe), (oe = -1)) : (De = !0), ci(ii, l - e)))
        : ((u.sortIndex = a),
          ei(et, u),
          fe || ai || ((fe = !0), yl || ((yl = !0), dl()))),
      u
    )
  }
  V.unstable_shouldYield = T0
  V.unstable_wrapCallback = function (u) {
    var t = Eu
    return function () {
      var l = Eu
      Eu = t
      try {
        return u.apply(this, arguments)
      } finally {
        Eu = l
      }
    }
  }
})
var N0 = Lu((Ad, O0) => {
  'use strict'
  O0.exports = z0()
})
var Z0 = Lu((b) => {
  'use strict'
  var Di = Symbol.for('react.transitional.element'),
    F2 = Symbol.for('react.portal'),
    g2 = Symbol.for('react.fragment'),
    S2 = Symbol.for('react.strict_mode'),
    B2 = Symbol.for('react.profiler'),
    p2 = Symbol.for('react.consumer'),
    b2 = Symbol.for('react.context'),
    T2 = Symbol.for('react.forward_ref'),
    z2 = Symbol.for('react.suspense'),
    O2 = Symbol.for('react.memo'),
    q0 = Symbol.for('react.lazy'),
    M0 = Symbol.iterator
  function N2(u) {
    return u === null || typeof u != 'object'
      ? null
      : ((u = (M0 && u[M0]) || u['@@iterator']),
        typeof u == 'function' ? u : null)
  }
  var Y0 = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    x0 = Object.assign,
    G0 = {}
  function vl(u, t, l) {
    ;((this.props = u),
      (this.context = t),
      (this.refs = G0),
      (this.updater = l || Y0))
  }
  vl.prototype.isReactComponent = {}
  vl.prototype.setState = function (u, t) {
    if (typeof u != 'object' && typeof u != 'function' && u != null)
      throw Error(
        'takes an object of state variables to update or a function which returns an object of state variables.'
      )
    this.updater.enqueueSetState(this, u, t, 'setState')
  }
  vl.prototype.forceUpdate = function (u) {
    this.updater.enqueueForceUpdate(this, u, 'forceUpdate')
  }
  function X0() {}
  X0.prototype = vl.prototype
  function oi(u, t, l) {
    ;((this.props = u),
      (this.context = t),
      (this.refs = G0),
      (this.updater = l || Y0))
  }
  var si = (oi.prototype = new X0())
  si.constructor = oi
  x0(si, vl.prototype)
  si.isPureReactComponent = !0
  var _0 = Array.isArray,
    L = {H: null, A: null, T: null, S: null, V: null},
    Q0 = Object.prototype.hasOwnProperty
  function Ei(u, t, l, e, a, n) {
    return (
      (l = n.ref),
      {$$typeof: Di, type: u, key: t, ref: l !== void 0 ? l : null, props: n}
    )
  }
  function M2(u, t) {
    return Ei(u.type, t, void 0, void 0, void 0, u.props)
  }
  function ri(u) {
    return typeof u == 'object' && u !== null && u.$$typeof === Di
  }
  function _2(u) {
    var t = {'=': '=0', ':': '=2'}
    return (
      '$' +
      u.replace(/[=:]/g, function (l) {
        return t[l]
      })
    )
  }
  var U0 = /\/+/g
  function fi(u, t) {
    return typeof u == 'object' && u !== null && u.key != null
      ? _2('' + u.key)
      : t.toString(36)
  }
  function R0() {}
  function U2(u) {
    switch (u.status) {
      case 'fulfilled':
        return u.value
      case 'rejected':
        throw u.reason
      default:
        switch (
          (typeof u.status == 'string'
            ? u.then(R0, R0)
            : ((u.status = 'pending'),
              u.then(
                function (t) {
                  u.status === 'pending' &&
                    ((u.status = 'fulfilled'), (u.value = t))
                },
                function (t) {
                  u.status === 'pending' &&
                    ((u.status = 'rejected'), (u.reason = t))
                }
              )),
          u.status)
        ) {
          case 'fulfilled':
            return u.value
          case 'rejected':
            throw u.reason
        }
    }
    throw u
  }
  function hl(u, t, l, e, a) {
    var n = typeof u
    ;(n === 'undefined' || n === 'boolean') && (u = null)
    var i = !1
    if (u === null) i = !0
    else
      switch (n) {
        case 'bigint':
        case 'string':
        case 'number':
          i = !0
          break
        case 'object':
          switch (u.$$typeof) {
            case Di:
            case F2:
              i = !0
              break
            case q0:
              return ((i = u._init), hl(i(u._payload), t, l, e, a))
          }
      }
    if (i)
      return (
        (a = a(u)),
        (i = e === '' ? '.' + fi(u, 0) : e),
        _0(a)
          ? ((l = ''),
            i != null && (l = i.replace(U0, '$&/') + '/'),
            hl(a, t, l, '', function (o) {
              return o
            }))
          : a != null &&
            (ri(a) &&
              (a = M2(
                a,
                l +
                  (a.key == null || (u && u.key === a.key)
                    ? ''
                    : ('' + a.key).replace(U0, '$&/') + '/') +
                  i
              )),
            t.push(a)),
        1
      )
    i = 0
    var c = e === '' ? '.' : e + ':'
    if (_0(u))
      for (var f = 0; f < u.length; f++)
        ((e = u[f]), (n = c + fi(e, f)), (i += hl(e, t, l, n, a)))
    else if (((f = N2(u)), typeof f == 'function'))
      for (u = f.call(u), f = 0; !(e = u.next()).done; )
        ((e = e.value), (n = c + fi(e, f++)), (i += hl(e, t, l, n, a)))
    else if (n === 'object') {
      if (typeof u.then == 'function') return hl(U2(u), t, l, e, a)
      throw (
        (t = String(u)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]'
              ? 'object with keys {' + Object.keys(u).join(', ') + '}'
              : t) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    }
    return i
  }
  function Ca(u, t, l) {
    if (u == null) return u
    var e = [],
      a = 0
    return (
      hl(u, e, '', '', function (n) {
        return t.call(l, n, a++)
      }),
      e
    )
  }
  function R2(u) {
    if (u._status === -1) {
      var t = u._result
      ;((t = t()),
        t.then(
          function (l) {
            ;(u._status === 0 || u._status === -1) &&
              ((u._status = 1), (u._result = l))
          },
          function (l) {
            ;(u._status === 0 || u._status === -1) &&
              ((u._status = 2), (u._result = l))
          }
        ),
        u._status === -1 && ((u._status = 0), (u._result = t)))
    }
    if (u._status === 1) return u._result.default
    throw u._result
  }
  var H0 =
    typeof reportError == 'function'
      ? reportError
      : function (u) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof u == 'object' &&
                u !== null &&
                typeof u.message == 'string'
                  ? String(u.message)
                  : String(u),
              error: u
            })
            if (!window.dispatchEvent(t)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', u)
            return
          }
          console.error(u)
        }
  function H2() {}
  b.Children = {
    map: Ca,
    forEach: function (u, t, l) {
      Ca(
        u,
        function () {
          t.apply(this, arguments)
        },
        l
      )
    },
    count: function (u) {
      var t = 0
      return (
        Ca(u, function () {
          t++
        }),
        t
      )
    },
    toArray: function (u) {
      return (
        Ca(u, function (t) {
          return t
        }) || []
      )
    },
    only: function (u) {
      if (!ri(u))
        throw Error(
          'React.Children.only expected to receive a single React element child.'
        )
      return u
    }
  }
  b.Component = vl
  b.Fragment = g2
  b.Profiler = B2
  b.PureComponent = oi
  b.StrictMode = S2
  b.Suspense = z2
  b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L
  b.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (u) {
      return L.H.useMemoCache(u)
    }
  }
  b.cache = function (u) {
    return function () {
      return u.apply(null, arguments)
    }
  }
  b.cloneElement = function (u, t, l) {
    if (u == null)
      throw Error(
        'The argument must be a React element, but you passed ' + u + '.'
      )
    var e = x0({}, u.props),
      a = u.key,
      n = void 0
    if (t != null)
      for (i in (t.ref !== void 0 && (n = void 0),
      t.key !== void 0 && (a = '' + t.key),
      t))
        !Q0.call(t, i) ||
          i === 'key' ||
          i === '__self' ||
          i === '__source' ||
          (i === 'ref' && t.ref === void 0) ||
          (e[i] = t[i])
    var i = arguments.length - 2
    if (i === 1) e.children = l
    else if (1 < i) {
      for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2]
      e.children = c
    }
    return Ei(u.type, a, void 0, void 0, n, e)
  }
  b.createContext = function (u) {
    return (
      (u = {
        $$typeof: b2,
        _currentValue: u,
        _currentValue2: u,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }),
      (u.Provider = u),
      (u.Consumer = {$$typeof: p2, _context: u}),
      u
    )
  }
  b.createElement = function (u, t, l) {
    var e,
      a = {},
      n = null
    if (t != null)
      for (e in (t.key !== void 0 && (n = '' + t.key), t))
        Q0.call(t, e) &&
          e !== 'key' &&
          e !== '__self' &&
          e !== '__source' &&
          (a[e] = t[e])
    var i = arguments.length - 2
    if (i === 1) a.children = l
    else if (1 < i) {
      for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2]
      a.children = c
    }
    if (u && u.defaultProps)
      for (e in ((i = u.defaultProps), i)) a[e] === void 0 && (a[e] = i[e])
    return Ei(u, n, void 0, void 0, null, a)
  }
  b.createRef = function () {
    return {current: null}
  }
  b.forwardRef = function (u) {
    return {$$typeof: T2, render: u}
  }
  b.isValidElement = ri
  b.lazy = function (u) {
    return {$$typeof: q0, _payload: {_status: -1, _result: u}, _init: R2}
  }
  b.memo = function (u, t) {
    return {$$typeof: O2, type: u, compare: t === void 0 ? null : t}
  }
  b.startTransition = function (u) {
    var t = L.T,
      l = {}
    L.T = l
    try {
      var e = u(),
        a = L.S
      ;(a !== null && a(l, e),
        typeof e == 'object' &&
          e !== null &&
          typeof e.then == 'function' &&
          e.then(H2, H0))
    } catch (n) {
      H0(n)
    } finally {
      L.T = t
    }
  }
  b.unstable_useCacheRefresh = function () {
    return L.H.useCacheRefresh()
  }
  b.use = function (u) {
    return L.H.use(u)
  }
  b.useActionState = function (u, t, l) {
    return L.H.useActionState(u, t, l)
  }
  b.useCallback = function (u, t) {
    return L.H.useCallback(u, t)
  }
  b.useContext = function (u) {
    return L.H.useContext(u)
  }
  b.useDebugValue = function () {}
  b.useDeferredValue = function (u, t) {
    return L.H.useDeferredValue(u, t)
  }
  b.useEffect = function (u, t, l) {
    var e = L.H
    if (typeof l == 'function')
      throw Error(
        'useEffect CRUD overload is not enabled in this build of React.'
      )
    return e.useEffect(u, t)
  }
  b.useId = function () {
    return L.H.useId()
  }
  b.useImperativeHandle = function (u, t, l) {
    return L.H.useImperativeHandle(u, t, l)
  }
  b.useInsertionEffect = function (u, t) {
    return L.H.useInsertionEffect(u, t)
  }
  b.useLayoutEffect = function (u, t) {
    return L.H.useLayoutEffect(u, t)
  }
  b.useMemo = function (u, t) {
    return L.H.useMemo(u, t)
  }
  b.useOptimistic = function (u, t) {
    return L.H.useOptimistic(u, t)
  }
  b.useReducer = function (u, t, l) {
    return L.H.useReducer(u, t, l)
  }
  b.useRef = function (u) {
    return L.H.useRef(u)
  }
  b.useState = function (u) {
    return L.H.useState(u)
  }
  b.useSyncExternalStore = function (u, t, l) {
    return L.H.useSyncExternalStore(u, t, l)
  }
  b.useTransition = function () {
    return L.H.useTransition()
  }
  b.version = '19.1.0'
})
var Fa = Lu((yd, j0) => {
  'use strict'
  j0.exports = Z0()
})
var L0 = Lu((yu) => {
  'use strict'
  var q2 = Fa()
  function V0(u) {
    var t = 'https://react.dev/errors/' + u
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      u +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function gt() {}
  var du = {
      d: {
        f: gt,
        r: function () {
          throw Error(V0(522))
        },
        D: gt,
        C: gt,
        L: gt,
        m: gt,
        X: gt,
        S: gt,
        M: gt
      },
      p: 0,
      findDOMNode: null
    },
    Y2 = Symbol.for('react.portal')
  function x2(u, t, l) {
    var e =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: Y2,
      key: e == null ? null : '' + e,
      children: u,
      containerInfo: t,
      implementation: l
    }
  }
  var se = q2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function ga(u, t) {
    if (u === 'font') return ''
    if (typeof t == 'string') return t === 'use-credentials' ? t : ''
  }
  yu.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = du
  yu.createPortal = function (u, t) {
    var l =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
      throw Error(V0(299))
    return x2(u, t, null, l)
  }
  yu.flushSync = function (u) {
    var t = se.T,
      l = du.p
    try {
      if (((se.T = null), (du.p = 2), u)) return u()
    } finally {
      ;((se.T = t), (du.p = l), du.d.f())
    }
  }
  yu.preconnect = function (u, t) {
    typeof u == 'string' &&
      (t
        ? ((t = t.crossOrigin),
          (t =
            typeof t == 'string' ? (t === 'use-credentials' ? t : '') : void 0))
        : (t = null),
      du.d.C(u, t))
  }
  yu.prefetchDNS = function (u) {
    typeof u == 'string' && du.d.D(u)
  }
  yu.preinit = function (u, t) {
    if (typeof u == 'string' && t && typeof t.as == 'string') {
      var l = t.as,
        e = ga(l, t.crossOrigin),
        a = typeof t.integrity == 'string' ? t.integrity : void 0,
        n = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0
      l === 'style'
        ? du.d.S(u, typeof t.precedence == 'string' ? t.precedence : void 0, {
            crossOrigin: e,
            integrity: a,
            fetchPriority: n
          })
        : l === 'script' &&
          du.d.X(u, {
            crossOrigin: e,
            integrity: a,
            fetchPriority: n,
            nonce: typeof t.nonce == 'string' ? t.nonce : void 0
          })
    }
  }
  yu.preinitModule = function (u, t) {
    if (typeof u == 'string')
      if (typeof t == 'object' && t !== null) {
        if (t.as == null || t.as === 'script') {
          var l = ga(t.as, t.crossOrigin)
          du.d.M(u, {
            crossOrigin: l,
            integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
            nonce: typeof t.nonce == 'string' ? t.nonce : void 0
          })
        }
      } else t == null && du.d.M(u)
  }
  yu.preload = function (u, t) {
    if (
      typeof u == 'string' &&
      typeof t == 'object' &&
      t !== null &&
      typeof t.as == 'string'
    ) {
      var l = t.as,
        e = ga(l, t.crossOrigin)
      du.d.L(u, l, {
        crossOrigin: e,
        integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
        nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        type: typeof t.type == 'string' ? t.type : void 0,
        fetchPriority:
          typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0,
        referrerPolicy:
          typeof t.referrerPolicy == 'string' ? t.referrerPolicy : void 0,
        imageSrcSet: typeof t.imageSrcSet == 'string' ? t.imageSrcSet : void 0,
        imageSizes: typeof t.imageSizes == 'string' ? t.imageSizes : void 0,
        media: typeof t.media == 'string' ? t.media : void 0
      })
    }
  }
  yu.preloadModule = function (u, t) {
    if (typeof u == 'string')
      if (t) {
        var l = ga(t.as, t.crossOrigin)
        du.d.m(u, {
          as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
          crossOrigin: l,
          integrity: typeof t.integrity == 'string' ? t.integrity : void 0
        })
      } else du.d.m(u)
  }
  yu.requestFormReset = function (u) {
    du.d.r(u)
  }
  yu.unstable_batchedUpdates = function (u, t) {
    return u(t)
  }
  yu.useFormState = function (u, t, l) {
    return se.H.useFormState(u, t, l)
  }
  yu.useFormStatus = function () {
    return se.H.useHostTransitionStatus()
  }
  yu.version = '19.1.0'
})
var w0 = Lu((vd, J0) => {
  'use strict'
  function K0() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)
      } catch (u) {
        console.error(u)
      }
  }
  ;(K0(), (J0.exports = L0()))
})
var $s = Lu((Ln) => {
  'use strict'
  var eu = N0(),
    y1 = Fa(),
    G2 = w0()
  function v(u) {
    var t = 'https://react.dev/errors/' + u
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      u +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function h1(u) {
    return !(!u || (u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11))
  }
  function Pe(u) {
    var t = u,
      l = u
    if (u.alternate) for (; t.return; ) t = t.return
    else {
      u = t
      do ((t = u), (t.flags & 4098) !== 0 && (l = t.return), (u = t.return))
      while (u)
    }
    return t.tag === 3 ? l : null
  }
  function v1(u) {
    if (u.tag === 13) {
      var t = u.memoizedState
      if (
        (t === null && ((u = u.alternate), u !== null && (t = u.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function W0(u) {
    if (Pe(u) !== u) throw Error(v(188))
  }
  function X2(u) {
    var t = u.alternate
    if (!t) {
      if (((t = Pe(u)), t === null)) throw Error(v(188))
      return t !== u ? null : u
    }
    for (var l = u, e = t; ; ) {
      var a = l.return
      if (a === null) break
      var n = a.alternate
      if (n === null) {
        if (((e = a.return), e !== null)) {
          l = e
          continue
        }
        break
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === l) return (W0(a), u)
          if (n === e) return (W0(a), t)
          n = n.sibling
        }
        throw Error(v(188))
      }
      if (l.return !== e.return) ((l = a), (e = n))
      else {
        for (var i = !1, c = a.child; c; ) {
          if (c === l) {
            ;((i = !0), (l = a), (e = n))
            break
          }
          if (c === e) {
            ;((i = !0), (e = a), (l = n))
            break
          }
          c = c.sibling
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === l) {
              ;((i = !0), (l = n), (e = a))
              break
            }
            if (c === e) {
              ;((i = !0), (e = n), (l = a))
              break
            }
            c = c.sibling
          }
          if (!i) throw Error(v(189))
        }
      }
      if (l.alternate !== e) throw Error(v(190))
    }
    if (l.tag !== 3) throw Error(v(188))
    return l.stateNode.current === l ? u : t
  }
  function m1(u) {
    var t = u.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return u
    for (u = u.child; u !== null; ) {
      if (((t = m1(u)), t !== null)) return t
      u = u.sibling
    }
    return null
  }
  var j = Object.assign,
    Q2 = Symbol.for('react.element'),
    Sa = Symbol.for('react.transitional.element'),
    Ce = Symbol.for('react.portal'),
    pl = Symbol.for('react.fragment'),
    C1 = Symbol.for('react.strict_mode'),
    Li = Symbol.for('react.profiler'),
    Z2 = Symbol.for('react.provider'),
    F1 = Symbol.for('react.consumer'),
    ft = Symbol.for('react.context'),
    Xc = Symbol.for('react.forward_ref'),
    Ki = Symbol.for('react.suspense'),
    Ji = Symbol.for('react.suspense_list'),
    Qc = Symbol.for('react.memo'),
    pt = Symbol.for('react.lazy')
  Symbol.for('react.scope')
  var wi = Symbol.for('react.activity')
  Symbol.for('react.legacy_hidden')
  Symbol.for('react.tracing_marker')
  var j2 = Symbol.for('react.memo_cache_sentinel')
  Symbol.for('react.view_transition')
  var k0 = Symbol.iterator
  function Ee(u) {
    return u === null || typeof u != 'object'
      ? null
      : ((u = (k0 && u[k0]) || u['@@iterator']),
        typeof u == 'function' ? u : null)
  }
  var V2 = Symbol.for('react.client.reference')
  function Wi(u) {
    if (u == null) return null
    if (typeof u == 'function')
      return u.$$typeof === V2 ? null : u.displayName || u.name || null
    if (typeof u == 'string') return u
    switch (u) {
      case pl:
        return 'Fragment'
      case Li:
        return 'Profiler'
      case C1:
        return 'StrictMode'
      case Ki:
        return 'Suspense'
      case Ji:
        return 'SuspenseList'
      case wi:
        return 'Activity'
    }
    if (typeof u == 'object')
      switch (u.$$typeof) {
        case Ce:
          return 'Portal'
        case ft:
          return (u.displayName || 'Context') + '.Provider'
        case F1:
          return (u._context.displayName || 'Context') + '.Consumer'
        case Xc:
          var t = u.render
          return (
            (u = u.displayName),
            u ||
              ((u = t.displayName || t.name || ''),
              (u = u !== '' ? 'ForwardRef(' + u + ')' : 'ForwardRef')),
            u
          )
        case Qc:
          return (
            (t = u.displayName || null),
            t !== null ? t : Wi(u.type) || 'Memo'
          )
        case pt:
          ;((t = u._payload), (u = u._init))
          try {
            return Wi(u(t))
          } catch {}
      }
    return null
  }
  var Fe = Array.isArray,
    B = y1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = G2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    It = {pending: !1, data: null, method: null, action: null},
    ki = [],
    bl = -1
  function ut(u) {
    return {current: u}
  }
  function fu(u) {
    0 > bl || ((u.current = ki[bl]), (ki[bl] = null), bl--)
  }
  function J(u, t) {
    ;(bl++, (ki[bl] = u.current), (u.current = t))
  }
  var $u = ut(null),
    xe = ut(null),
    Ht = ut(null),
    Ia = ut(null)
  function un(u, t) {
    switch ((J(Ht, t), J(xe, u), J($u, null), t.nodeType)) {
      case 9:
      case 11:
        u = (u = t.documentElement) && (u = u.namespaceURI) ? l1(u) : 0
        break
      default:
        if (((u = t.tagName), (t = t.namespaceURI)))
          ((t = l1(t)), (u = Gs(t, u)))
        else
          switch (u) {
            case 'svg':
              u = 1
              break
            case 'math':
              u = 2
              break
            default:
              u = 0
          }
    }
    ;(fu($u), J($u, u))
  }
  function Ll() {
    ;(fu($u), fu(xe), fu(Ht))
  }
  function $i(u) {
    u.memoizedState !== null && J(Ia, u)
    var t = $u.current,
      l = Gs(t, u.type)
    t !== l && (J(xe, u), J($u, l))
  }
  function tn(u) {
    ;(xe.current === u && (fu($u), fu(xe)),
      Ia.current === u && (fu(Ia), (we._currentValue = It)))
  }
  var Pi = Object.prototype.hasOwnProperty,
    Zc = eu.unstable_scheduleCallback,
    Ai = eu.unstable_cancelCallback,
    L2 = eu.unstable_shouldYield,
    K2 = eu.unstable_requestPaint,
    Pu = eu.unstable_now,
    J2 = eu.unstable_getCurrentPriorityLevel,
    g1 = eu.unstable_ImmediatePriority,
    S1 = eu.unstable_UserBlockingPriority,
    ln = eu.unstable_NormalPriority,
    w2 = eu.unstable_LowPriority,
    B1 = eu.unstable_IdlePriority,
    W2 = eu.log,
    k2 = eu.unstable_setDisableYieldValue,
    Ie = null,
    Tu = null
  function Mt(u) {
    if (
      (typeof W2 == 'function' && k2(u),
      Tu && typeof Tu.setStrictMode == 'function')
    )
      try {
        Tu.setStrictMode(Ie, u)
      } catch {}
  }
  var zu = Math.clz32 ? Math.clz32 : I2,
    $2 = Math.log,
    P2 = Math.LN2
  function I2(u) {
    return ((u >>>= 0), u === 0 ? 32 : (31 - (($2(u) / P2) | 0)) | 0)
  }
  var Ba = 256,
    pa = 4194304
  function kt(u) {
    var t = u & 42
    if (t !== 0) return t
    switch (u & -u) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return u & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return u & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return u
    }
  }
  function Nn(u, t, l) {
    var e = u.pendingLanes
    if (e === 0) return 0
    var a = 0,
      n = u.suspendedLanes,
      i = u.pingedLanes
    u = u.warmLanes
    var c = e & 134217727
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (a = kt(e))
            : ((i &= c),
              i !== 0
                ? (a = kt(i))
                : l || ((l = c & ~u), l !== 0 && (a = kt(l)))))
        : ((c = e & ~n),
          c !== 0
            ? (a = kt(c))
            : i !== 0
              ? (a = kt(i))
              : l || ((l = e & ~u), l !== 0 && (a = kt(l)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            (t & n) === 0 &&
            ((n = a & -a),
            (l = t & -t),
            n >= l || (n === 32 && (l & 4194048) !== 0))
          ? t
          : a
    )
  }
  function ua(u, t) {
    return (u.pendingLanes & ~(u.suspendedLanes & ~u.pingedLanes) & t) === 0
  }
  function uE(u, t) {
    switch (u) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function p1() {
    var u = Ba
    return ((Ba <<= 1), (Ba & 4194048) === 0 && (Ba = 256), u)
  }
  function b1() {
    var u = pa
    return ((pa <<= 1), (pa & 62914560) === 0 && (pa = 4194304), u)
  }
  function di(u) {
    for (var t = [], l = 0; 31 > l; l++) t.push(u)
    return t
  }
  function ta(u, t) {
    ;((u.pendingLanes |= t),
      t !== 268435456 &&
        ((u.suspendedLanes = 0), (u.pingedLanes = 0), (u.warmLanes = 0)))
  }
  function tE(u, t, l, e, a, n) {
    var i = u.pendingLanes
    ;((u.pendingLanes = l),
      (u.suspendedLanes = 0),
      (u.pingedLanes = 0),
      (u.warmLanes = 0),
      (u.expiredLanes &= l),
      (u.entangledLanes &= l),
      (u.errorRecoveryDisabledLanes &= l),
      (u.shellSuspendCounter = 0))
    var c = u.entanglements,
      f = u.expirationTimes,
      o = u.hiddenUpdates
    for (l = i & ~l; 0 < l; ) {
      var d = 31 - zu(l),
        y = 1 << d
      ;((c[d] = 0), (f[d] = -1))
      var A = o[d]
      if (A !== null)
        for (o[d] = null, d = 0; d < A.length; d++) {
          var r = A[d]
          r !== null && (r.lane &= -536870913)
        }
      l &= ~y
    }
    ;(e !== 0 && T1(u, e, 0),
      n !== 0 && a === 0 && u.tag !== 0 && (u.suspendedLanes |= n & ~(i & ~t)))
  }
  function T1(u, t, l) {
    ;((u.pendingLanes |= t), (u.suspendedLanes &= ~t))
    var e = 31 - zu(t)
    ;((u.entangledLanes |= t),
      (u.entanglements[e] = u.entanglements[e] | 1073741824 | (l & 4194090)))
  }
  function z1(u, t) {
    var l = (u.entangledLanes |= t)
    for (u = u.entanglements; l; ) {
      var e = 31 - zu(l),
        a = 1 << e
      ;((a & t) | (u[e] & t) && (u[e] |= t), (l &= ~a))
    }
  }
  function jc(u) {
    switch (u) {
      case 2:
        u = 1
        break
      case 8:
        u = 4
        break
      case 32:
        u = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        u = 128
        break
      case 268435456:
        u = 134217728
        break
      default:
        u = 0
    }
    return u
  }
  function Vc(u) {
    return (
      (u &= -u),
      2 < u ? (8 < u ? ((u & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    )
  }
  function O1() {
    var u = q.p
    return u !== 0 ? u : ((u = window.event), u === void 0 ? 32 : Ws(u.type))
  }
  function lE(u, t) {
    var l = q.p
    try {
      return ((q.p = u), t())
    } finally {
      q.p = l
    }
  }
  var Kt = Math.random().toString(36).slice(2),
    ru = '__reactFiber$' + Kt,
    Fu = '__reactProps$' + Kt,
    le = '__reactContainer$' + Kt,
    Ii = '__reactEvents$' + Kt,
    eE = '__reactListeners$' + Kt,
    aE = '__reactHandles$' + Kt,
    $0 = '__reactResources$' + Kt,
    la = '__reactMarker$' + Kt
  function Lc(u) {
    ;(delete u[ru], delete u[Fu], delete u[Ii], delete u[eE], delete u[aE])
  }
  function Tl(u) {
    var t = u[ru]
    if (t) return t
    for (var l = u.parentNode; l; ) {
      if ((t = l[le] || l[ru])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (u = n1(u); u !== null; ) {
            if ((l = u[ru])) return l
            u = n1(u)
          }
        return t
      }
      ;((u = l), (l = u.parentNode))
    }
    return null
  }
  function ee(u) {
    if ((u = u[ru] || u[le])) {
      var t = u.tag
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return u
    }
    return null
  }
  function ge(u) {
    var t = u.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return u.stateNode
    throw Error(v(33))
  }
  function Yl(u) {
    var t = u[$0]
    return (
      t ||
        (t = u[$0] = {hoistableStyles: new Map(), hoistableScripts: new Map()}),
      t
    )
  }
  function iu(u) {
    u[la] = !0
  }
  var N1 = new Set(),
    M1 = {}
  function ol(u, t) {
    ;(Kl(u, t), Kl(u + 'Capture', t))
  }
  function Kl(u, t) {
    for (M1[u] = t, u = 0; u < t.length; u++) N1.add(t[u])
  }
  var nE = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    P0 = {},
    I0 = {}
  function iE(u) {
    return Pi.call(I0, u)
      ? !0
      : Pi.call(P0, u)
        ? !1
        : nE.test(u)
          ? (I0[u] = !0)
          : ((P0[u] = !0), !1)
  }
  function Xa(u, t, l) {
    if (iE(t))
      if (l === null) u.removeAttribute(t)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            u.removeAttribute(t)
            return
          case 'boolean':
            var e = t.toLowerCase().slice(0, 5)
            if (e !== 'data-' && e !== 'aria-') {
              u.removeAttribute(t)
              return
            }
        }
        u.setAttribute(t, '' + l)
      }
  }
  function ba(u, t, l) {
    if (l === null) u.removeAttribute(t)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          u.removeAttribute(t)
          return
      }
      u.setAttribute(t, '' + l)
    }
  }
  function at(u, t, l, e) {
    if (e === null) u.removeAttribute(l)
    else {
      switch (typeof e) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          u.removeAttribute(l)
          return
      }
      u.setAttributeNS(t, l, '' + e)
    }
  }
  var yi, uD
  function gl(u) {
    if (yi === void 0)
      try {
        throw Error()
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/)
        ;((yi = (t && t[1]) || ''),
          (uD =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''))
      }
    return (
      `
` +
      yi +
      u +
      uD
    )
  }
  var hi = !1
  function vi(u, t) {
    if (!u || hi) return ''
    hi = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var y = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(y.prototype, 'props', {
                  set: function () {
                    throw Error()
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(y, [])
                } catch (r) {
                  var A = r
                }
                Reflect.construct(u, [], y)
              } else {
                try {
                  y.call()
                } catch (r) {
                  A = r
                }
                u.call(y.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (r) {
                A = r
              }
              ;(y = u()) &&
                typeof y.catch == 'function' &&
                y.catch(function () {})
            }
          } catch (r) {
            if (r && A && typeof r.stack == 'string') return [r.stack, A.stack]
          }
          return [null, null]
        }
      }
      e.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var a = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        'name'
      )
      a &&
        a.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot'
        })
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1]
      if (i && c) {
        var f = i.split(`
`),
          o = c.split(`
`)
        for (
          a = e = 0;
          e < f.length && !f[e].includes('DetermineComponentFrameRoot');

        )
          e++
        for (; a < o.length && !o[a].includes('DetermineComponentFrameRoot'); )
          a++
        if (e === f.length || a === o.length)
          for (
            e = f.length - 1, a = o.length - 1;
            1 <= e && 0 <= a && f[e] !== o[a];

          )
            a--
        for (; 1 <= e && 0 <= a; e--, a--)
          if (f[e] !== o[a]) {
            if (e !== 1 || a !== 1)
              do
                if ((e--, a--, 0 > a || f[e] !== o[a])) {
                  var d =
                    `
` + f[e].replace(' at new ', ' at ')
                  return (
                    u.displayName &&
                      d.includes('<anonymous>') &&
                      (d = d.replace('<anonymous>', u.displayName)),
                    d
                  )
                }
              while (1 <= e && 0 <= a)
            break
          }
      }
    } finally {
      ;((hi = !1), (Error.prepareStackTrace = l))
    }
    return (l = u ? u.displayName || u.name : '') ? gl(l) : ''
  }
  function cE(u) {
    switch (u.tag) {
      case 26:
      case 27:
      case 5:
        return gl(u.type)
      case 16:
        return gl('Lazy')
      case 13:
        return gl('Suspense')
      case 19:
        return gl('SuspenseList')
      case 0:
      case 15:
        return vi(u.type, !1)
      case 11:
        return vi(u.type.render, !1)
      case 1:
        return vi(u.type, !0)
      case 31:
        return gl('Activity')
      default:
        return ''
    }
  }
  function tD(u) {
    try {
      var t = ''
      do ((t += cE(u)), (u = u.return))
      while (u)
      return t
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      )
    }
  }
  function Ru(u) {
    switch (typeof u) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return u
      case 'object':
        return u
      default:
        return ''
    }
  }
  function _1(u) {
    var t = u.type
    return (
      (u = u.nodeName) &&
      u.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function fE(u) {
    var t = _1(u) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(u.constructor.prototype, t),
      e = '' + u[t]
    if (
      !u.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var a = l.get,
        n = l.set
      return (
        Object.defineProperty(u, t, {
          configurable: !0,
          get: function () {
            return a.call(this)
          },
          set: function (i) {
            ;((e = '' + i), n.call(this, i))
          }
        }),
        Object.defineProperty(u, t, {enumerable: l.enumerable}),
        {
          getValue: function () {
            return e
          },
          setValue: function (i) {
            e = '' + i
          },
          stopTracking: function () {
            ;((u._valueTracker = null), delete u[t])
          }
        }
      )
    }
  }
  function en(u) {
    u._valueTracker || (u._valueTracker = fE(u))
  }
  function U1(u) {
    if (!u) return !1
    var t = u._valueTracker
    if (!t) return !0
    var l = t.getValue(),
      e = ''
    return (
      u && (e = _1(u) ? (u.checked ? 'true' : 'false') : u.value),
      (u = e),
      u !== l ? (t.setValue(u), !0) : !1
    )
  }
  function an(u) {
    if (
      ((u = u || (typeof document < 'u' ? document : void 0)), typeof u > 'u')
    )
      return null
    try {
      return u.activeElement || u.body
    } catch {
      return u.body
    }
  }
  var DE = /[\n"\\]/g
  function Yu(u) {
    return u.replace(DE, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function uc(u, t, l, e, a, n, i, c) {
    ;((u.name = ''),
      i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean'
        ? (u.type = i)
        : u.removeAttribute('type'),
      t != null
        ? i === 'number'
          ? ((t === 0 && u.value === '') || u.value != t) &&
            (u.value = '' + Ru(t))
          : u.value !== '' + Ru(t) && (u.value = '' + Ru(t))
        : (i !== 'submit' && i !== 'reset') || u.removeAttribute('value'),
      t != null
        ? tc(u, i, Ru(t))
        : l != null
          ? tc(u, i, Ru(l))
          : e != null && u.removeAttribute('value'),
      a == null && n != null && (u.defaultChecked = !!n),
      a != null &&
        (u.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      c != null &&
      typeof c != 'function' &&
      typeof c != 'symbol' &&
      typeof c != 'boolean'
        ? (u.name = '' + Ru(c))
        : u.removeAttribute('name'))
  }
  function R1(u, t, l, e, a, n, i, c) {
    if (
      (n != null &&
        typeof n != 'function' &&
        typeof n != 'symbol' &&
        typeof n != 'boolean' &&
        (u.type = n),
      t != null || l != null)
    ) {
      if (!((n !== 'submit' && n !== 'reset') || t != null)) return
      ;((l = l != null ? '' + Ru(l) : ''),
        (t = t != null ? '' + Ru(t) : l),
        c || t === u.value || (u.value = t),
        (u.defaultValue = t))
    }
    ;((e = e ?? a),
      (e = typeof e != 'function' && typeof e != 'symbol' && !!e),
      (u.checked = c ? u.checked : !!e),
      (u.defaultChecked = !!e),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (u.name = i))
  }
  function tc(u, t, l) {
    ;(t === 'number' && an(u.ownerDocument) === u) ||
      u.defaultValue === '' + l ||
      (u.defaultValue = '' + l)
  }
  function xl(u, t, l, e) {
    if (((u = u.options), t)) {
      t = {}
      for (var a = 0; a < l.length; a++) t['$' + l[a]] = !0
      for (l = 0; l < u.length; l++)
        ((a = t.hasOwnProperty('$' + u[l].value)),
          u[l].selected !== a && (u[l].selected = a),
          a && e && (u[l].defaultSelected = !0))
    } else {
      for (l = '' + Ru(l), t = null, a = 0; a < u.length; a++) {
        if (u[a].value === l) {
          ;((u[a].selected = !0), e && (u[a].defaultSelected = !0))
          return
        }
        t !== null || u[a].disabled || (t = u[a])
      }
      t !== null && (t.selected = !0)
    }
  }
  function H1(u, t, l) {
    if (
      t != null &&
      ((t = '' + Ru(t)), t !== u.value && (u.value = t), l == null)
    ) {
      u.defaultValue !== t && (u.defaultValue = t)
      return
    }
    u.defaultValue = l != null ? '' + Ru(l) : ''
  }
  function q1(u, t, l, e) {
    if (t == null) {
      if (e != null) {
        if (l != null) throw Error(v(92))
        if (Fe(e)) {
          if (1 < e.length) throw Error(v(93))
          e = e[0]
        }
        l = e
      }
      ;(l == null && (l = ''), (t = l))
    }
    ;((l = Ru(t)),
      (u.defaultValue = l),
      (e = u.textContent),
      e === l && e !== '' && e !== null && (u.value = e))
  }
  function Jl(u, t) {
    if (t) {
      var l = u.firstChild
      if (l && l === u.lastChild && l.nodeType === 3) {
        l.nodeValue = t
        return
      }
    }
    u.textContent = t
  }
  var oE = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function lD(u, t, l) {
    var e = t.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === ''
      ? e
        ? u.setProperty(t, '')
        : t === 'float'
          ? (u.cssFloat = '')
          : (u[t] = '')
      : e
        ? u.setProperty(t, l)
        : typeof l != 'number' || l === 0 || oE.has(t)
          ? t === 'float'
            ? (u.cssFloat = l)
            : (u[t] = ('' + l).trim())
          : (u[t] = l + 'px')
  }
  function Y1(u, t, l) {
    if (t != null && typeof t != 'object') throw Error(v(62))
    if (((u = u.style), l != null)) {
      for (var e in l)
        !l.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf('--') === 0
            ? u.setProperty(e, '')
            : e === 'float'
              ? (u.cssFloat = '')
              : (u[e] = ''))
      for (var a in t)
        ((e = t[a]), t.hasOwnProperty(a) && l[a] !== e && lD(u, a, e))
    } else for (var n in t) t.hasOwnProperty(n) && lD(u, n, t[n])
  }
  function Kc(u) {
    if (u.indexOf('-') === -1) return !1
    switch (u) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var sE = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height']
    ]),
    EE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Qa(u) {
    return EE.test('' + u)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : u
  }
  var lc = null
  function Jc(u) {
    return (
      (u = u.target || u.srcElement || window),
      u.correspondingUseElement && (u = u.correspondingUseElement),
      u.nodeType === 3 ? u.parentNode : u
    )
  }
  var zl = null,
    Gl = null
  function eD(u) {
    var t = ee(u)
    if (t && (u = t.stateNode)) {
      var l = u[Fu] || null
      u: switch (((u = t.stateNode), t.type)) {
        case 'input':
          if (
            (uc(
              u,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = u; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll(
                'input[name="' + Yu('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var e = l[t]
              if (e !== u && e.form === u.form) {
                var a = e[Fu] || null
                if (!a) throw Error(v(90))
                uc(
                  e,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                )
              }
            }
            for (t = 0; t < l.length; t++)
              ((e = l[t]), e.form === u.form && U1(e))
          }
          break u
        case 'textarea':
          H1(u, l.value, l.defaultValue)
          break u
        case 'select':
          ;((t = l.value), t != null && xl(u, !!l.multiple, t, !1))
      }
    }
  }
  var mi = !1
  function x1(u, t, l) {
    if (mi) return u(t, l)
    mi = !0
    try {
      var e = u(t)
      return e
    } finally {
      if (
        ((mi = !1),
        (zl !== null || Gl !== null) &&
          (Xn(), zl && ((t = zl), (u = Gl), (Gl = zl = null), eD(t), u)))
      )
        for (t = 0; t < u.length; t++) eD(u[t])
    }
  }
  function Ge(u, t) {
    var l = u.stateNode
    if (l === null) return null
    var e = l[Fu] || null
    if (e === null) return null
    l = e[t]
    u: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((e = !e.disabled) ||
          ((u = u.type),
          (e = !(
            u === 'button' ||
            u === 'input' ||
            u === 'select' ||
            u === 'textarea'
          ))),
          (u = !e))
        break u
      default:
        u = !1
    }
    if (u) return null
    if (l && typeof l != 'function') throw Error(v(231, t, typeof l))
    return l
  }
  var dt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    ec = !1
  if (dt)
    try {
      ;((ml = {}),
        Object.defineProperty(ml, 'passive', {
          get: function () {
            ec = !0
          }
        }),
        window.addEventListener('test', ml, ml),
        window.removeEventListener('test', ml, ml))
    } catch {
      ec = !1
    }
  var ml,
    _t = null,
    wc = null,
    Za = null
  function G1() {
    if (Za) return Za
    var u,
      t = wc,
      l = t.length,
      e,
      a = 'value' in _t ? _t.value : _t.textContent,
      n = a.length
    for (u = 0; u < l && t[u] === a[u]; u++);
    var i = l - u
    for (e = 1; e <= i && t[l - e] === a[n - e]; e++);
    return (Za = a.slice(u, 1 < e ? 1 - e : void 0))
  }
  function ja(u) {
    var t = u.keyCode
    return (
      'charCode' in u
        ? ((u = u.charCode), u === 0 && t === 13 && (u = 13))
        : (u = t),
      u === 10 && (u = 13),
      32 <= u || u === 13 ? u : 0
    )
  }
  function Ta() {
    return !0
  }
  function aD() {
    return !1
  }
  function gu(u) {
    function t(l, e, a, n, i) {
      ;((this._reactName = l),
        (this._targetInst = a),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null))
      for (var c in u)
        u.hasOwnProperty(c) && ((l = u[c]), (this[c] = l ? l(n) : n[c]))
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ta
          : aD),
        (this.isPropagationStopped = aD),
        this
      )
    }
    return (
      j(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Ta))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ta))
        },
        persist: function () {},
        isPersistent: Ta
      }),
      t
    )
  }
  var sl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (u) {
        return u.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Mn = gu(sl),
    ea = j({}, sl, {view: 0, detail: 0}),
    rE = gu(ea),
    Ci,
    Fi,
    re,
    _n = j({}, ea, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wc,
      button: 0,
      buttons: 0,
      relatedTarget: function (u) {
        return u.relatedTarget === void 0
          ? u.fromElement === u.srcElement
            ? u.toElement
            : u.fromElement
          : u.relatedTarget
      },
      movementX: function (u) {
        return 'movementX' in u
          ? u.movementX
          : (u !== re &&
              (re && u.type === 'mousemove'
                ? ((Ci = u.screenX - re.screenX), (Fi = u.screenY - re.screenY))
                : (Fi = Ci = 0),
              (re = u)),
            Ci)
      },
      movementY: function (u) {
        return 'movementY' in u ? u.movementY : Fi
      }
    }),
    nD = gu(_n),
    AE = j({}, _n, {dataTransfer: 0}),
    dE = gu(AE),
    yE = j({}, ea, {relatedTarget: 0}),
    gi = gu(yE),
    hE = j({}, sl, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
    vE = gu(hE),
    mE = j({}, sl, {
      clipboardData: function (u) {
        return 'clipboardData' in u ? u.clipboardData : window.clipboardData
      }
    }),
    CE = gu(mE),
    FE = j({}, sl, {data: 0}),
    iD = gu(FE),
    gE = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    SE = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    BE = {Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'}
  function pE(u) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(u)
      : (u = BE[u])
        ? !!t[u]
        : !1
  }
  function Wc() {
    return pE
  }
  var bE = j({}, ea, {
      key: function (u) {
        if (u.key) {
          var t = gE[u.key] || u.key
          if (t !== 'Unidentified') return t
        }
        return u.type === 'keypress'
          ? ((u = ja(u)), u === 13 ? 'Enter' : String.fromCharCode(u))
          : u.type === 'keydown' || u.type === 'keyup'
            ? SE[u.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wc,
      charCode: function (u) {
        return u.type === 'keypress' ? ja(u) : 0
      },
      keyCode: function (u) {
        return u.type === 'keydown' || u.type === 'keyup' ? u.keyCode : 0
      },
      which: function (u) {
        return u.type === 'keypress'
          ? ja(u)
          : u.type === 'keydown' || u.type === 'keyup'
            ? u.keyCode
            : 0
      }
    }),
    TE = gu(bE),
    zE = j({}, _n, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    cD = gu(zE),
    OE = j({}, ea, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wc
    }),
    NE = gu(OE),
    ME = j({}, sl, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
    _E = gu(ME),
    UE = j({}, _n, {
      deltaX: function (u) {
        return 'deltaX' in u
          ? u.deltaX
          : 'wheelDeltaX' in u
            ? -u.wheelDeltaX
            : 0
      },
      deltaY: function (u) {
        return 'deltaY' in u
          ? u.deltaY
          : 'wheelDeltaY' in u
            ? -u.wheelDeltaY
            : 'wheelDelta' in u
              ? -u.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    RE = gu(UE),
    HE = j({}, sl, {newState: 0, oldState: 0}),
    qE = gu(HE),
    YE = [9, 13, 27, 32],
    kc = dt && 'CompositionEvent' in window,
    Be = null
  dt && 'documentMode' in document && (Be = document.documentMode)
  var xE = dt && 'TextEvent' in window && !Be,
    X1 = dt && (!kc || (Be && 8 < Be && 11 >= Be)),
    fD = ' ',
    DD = !1
  function Q1(u, t) {
    switch (u) {
      case 'keyup':
        return YE.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Z1(u) {
    return ((u = u.detail), typeof u == 'object' && 'data' in u ? u.data : null)
  }
  var Ol = !1
  function GE(u, t) {
    switch (u) {
      case 'compositionend':
        return Z1(t)
      case 'keypress':
        return t.which !== 32 ? null : ((DD = !0), fD)
      case 'textInput':
        return ((u = t.data), u === fD && DD ? null : u)
      default:
        return null
    }
  }
  function XE(u, t) {
    if (Ol)
      return u === 'compositionend' || (!kc && Q1(u, t))
        ? ((u = G1()), (Za = wc = _t = null), (Ol = !1), u)
        : null
    switch (u) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return X1 && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var QE = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  }
  function oD(u) {
    var t = u && u.nodeName && u.nodeName.toLowerCase()
    return t === 'input' ? !!QE[u.type] : t === 'textarea'
  }
  function j1(u, t, l, e) {
    ;(zl ? (Gl ? Gl.push(e) : (Gl = [e])) : (zl = e),
      (t = Sn(t, 'onChange')),
      0 < t.length &&
        ((l = new Mn('onChange', 'change', null, l, e)),
        u.push({event: l, listeners: t})))
  }
  var pe = null,
    Xe = null
  function ZE(u) {
    qs(u, 0)
  }
  function Un(u) {
    var t = ge(u)
    if (U1(t)) return u
  }
  function sD(u, t) {
    if (u === 'change') return t
  }
  var V1 = !1
  dt &&
    (dt
      ? ((Oa = 'oninput' in document),
        Oa ||
          ((Si = document.createElement('div')),
          Si.setAttribute('oninput', 'return;'),
          (Oa = typeof Si.oninput == 'function')),
        (za = Oa))
      : (za = !1),
    (V1 = za && (!document.documentMode || 9 < document.documentMode)))
  var za, Oa, Si
  function ED() {
    pe && (pe.detachEvent('onpropertychange', L1), (Xe = pe = null))
  }
  function L1(u) {
    if (u.propertyName === 'value' && Un(Xe)) {
      var t = []
      ;(j1(t, Xe, u, Jc(u)), x1(ZE, t))
    }
  }
  function jE(u, t, l) {
    u === 'focusin'
      ? (ED(), (pe = t), (Xe = l), pe.attachEvent('onpropertychange', L1))
      : u === 'focusout' && ED()
  }
  function VE(u) {
    if (u === 'selectionchange' || u === 'keyup' || u === 'keydown')
      return Un(Xe)
  }
  function LE(u, t) {
    if (u === 'click') return Un(t)
  }
  function KE(u, t) {
    if (u === 'input' || u === 'change') return Un(t)
  }
  function JE(u, t) {
    return (u === t && (u !== 0 || 1 / u === 1 / t)) || (u !== u && t !== t)
  }
  var Mu = typeof Object.is == 'function' ? Object.is : JE
  function Qe(u, t) {
    if (Mu(u, t)) return !0
    if (
      typeof u != 'object' ||
      u === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var l = Object.keys(u),
      e = Object.keys(t)
    if (l.length !== e.length) return !1
    for (e = 0; e < l.length; e++) {
      var a = l[e]
      if (!Pi.call(t, a) || !Mu(u[a], t[a])) return !1
    }
    return !0
  }
  function rD(u) {
    for (; u && u.firstChild; ) u = u.firstChild
    return u
  }
  function AD(u, t) {
    var l = rD(u)
    u = 0
    for (var e; l; ) {
      if (l.nodeType === 3) {
        if (((e = u + l.textContent.length), u <= t && e >= t))
          return {node: l, offset: t - u}
        u = e
      }
      u: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break u
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = rD(l)
    }
  }
  function K1(u, t) {
    return u && t
      ? u === t
        ? !0
        : u && u.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? K1(u, t.parentNode)
            : 'contains' in u
              ? u.contains(t)
              : u.compareDocumentPosition
                ? !!(u.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function J1(u) {
    u =
      u != null &&
      u.ownerDocument != null &&
      u.ownerDocument.defaultView != null
        ? u.ownerDocument.defaultView
        : window
    for (var t = an(u.document); t instanceof u.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) u = t.contentWindow
      else break
      t = an(u.document)
    }
    return t
  }
  function $c(u) {
    var t = u && u.nodeName && u.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (u.type === 'text' ||
          u.type === 'search' ||
          u.type === 'tel' ||
          u.type === 'url' ||
          u.type === 'password')) ||
        t === 'textarea' ||
        u.contentEditable === 'true')
    )
  }
  var wE = dt && 'documentMode' in document && 11 >= document.documentMode,
    Nl = null,
    ac = null,
    be = null,
    nc = !1
  function dD(u, t, l) {
    var e = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    nc ||
      Nl == null ||
      Nl !== an(e) ||
      ((e = Nl),
      'selectionStart' in e && $c(e)
        ? (e = {start: e.selectionStart, end: e.selectionEnd})
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset
          })),
      (be && Qe(be, e)) ||
        ((be = e),
        (e = Sn(ac, 'onSelect')),
        0 < e.length &&
          ((t = new Mn('onSelect', 'select', null, t, l)),
          u.push({event: t, listeners: e}),
          (t.target = Nl))))
  }
  function Wt(u, t) {
    var l = {}
    return (
      (l[u.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + u] = 'webkit' + t),
      (l['Moz' + u] = 'moz' + t),
      l
    )
  }
  var Ml = {
      animationend: Wt('Animation', 'AnimationEnd'),
      animationiteration: Wt('Animation', 'AnimationIteration'),
      animationstart: Wt('Animation', 'AnimationStart'),
      transitionrun: Wt('Transition', 'TransitionRun'),
      transitionstart: Wt('Transition', 'TransitionStart'),
      transitioncancel: Wt('Transition', 'TransitionCancel'),
      transitionend: Wt('Transition', 'TransitionEnd')
    },
    Bi = {},
    w1 = {}
  dt &&
    ((w1 = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ml.animationend.animation,
      delete Ml.animationiteration.animation,
      delete Ml.animationstart.animation),
    'TransitionEvent' in window || delete Ml.transitionend.transition)
  function El(u) {
    if (Bi[u]) return Bi[u]
    if (!Ml[u]) return u
    var t = Ml[u],
      l
    for (l in t) if (t.hasOwnProperty(l) && l in w1) return (Bi[u] = t[l])
    return u
  }
  var W1 = El('animationend'),
    k1 = El('animationiteration'),
    $1 = El('animationstart'),
    WE = El('transitionrun'),
    kE = El('transitionstart'),
    $E = El('transitioncancel'),
    P1 = El('transitionend'),
    I1 = new Map(),
    ic =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  ic.push('scrollEnd')
  function Vu(u, t) {
    ;(I1.set(u, t), ol(t, [u]))
  }
  var yD = new WeakMap()
  function xu(u, t) {
    if (typeof u == 'object' && u !== null) {
      var l = yD.get(u)
      return l !== void 0
        ? l
        : ((t = {value: u, source: t, stack: tD(t)}), yD.set(u, t), t)
    }
    return {value: u, source: t, stack: tD(t)}
  }
  var Uu = [],
    _l = 0,
    Pc = 0
  function Rn() {
    for (var u = _l, t = (Pc = _l = 0); t < u; ) {
      var l = Uu[t]
      Uu[t++] = null
      var e = Uu[t]
      Uu[t++] = null
      var a = Uu[t]
      Uu[t++] = null
      var n = Uu[t]
      if (((Uu[t++] = null), e !== null && a !== null)) {
        var i = e.pending
        ;(i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (e.pending = a))
      }
      n !== 0 && uo(l, a, n)
    }
  }
  function Hn(u, t, l, e) {
    ;((Uu[_l++] = u),
      (Uu[_l++] = t),
      (Uu[_l++] = l),
      (Uu[_l++] = e),
      (Pc |= e),
      (u.lanes |= e),
      (u = u.alternate),
      u !== null && (u.lanes |= e))
  }
  function Ic(u, t, l, e) {
    return (Hn(u, t, l, e), nn(u))
  }
  function ae(u, t) {
    return (Hn(u, null, null, t), nn(u))
  }
  function uo(u, t, l) {
    u.lanes |= l
    var e = u.alternate
    e !== null && (e.lanes |= l)
    for (var a = !1, n = u.return; n !== null; )
      ((n.childLanes |= l),
        (e = n.alternate),
        e !== null && (e.childLanes |= l),
        n.tag === 22 &&
          ((u = n.stateNode), u === null || u._visibility & 1 || (a = !0)),
        (u = n),
        (n = n.return))
    return u.tag === 3
      ? ((n = u.stateNode),
        a &&
          t !== null &&
          ((a = 31 - zu(l)),
          (u = n.hiddenUpdates),
          (e = u[a]),
          e === null ? (u[a] = [t]) : e.push(t),
          (t.lane = l | 536870912)),
        n)
      : null
  }
  function nn(u) {
    if (50 < qe) throw ((qe = 0), (Tc = null), Error(v(185)))
    for (var t = u.return; t !== null; ) ((u = t), (t = u.return))
    return u.tag === 3 ? u.stateNode : null
  }
  var Ul = {}
  function PE(u, t, l, e) {
    ;((this.tag = u),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function bu(u, t, l, e) {
    return new PE(u, t, l, e)
  }
  function uf(u) {
    return ((u = u.prototype), !(!u || !u.isReactComponent))
  }
  function rt(u, t) {
    var l = u.alternate
    return (
      l === null
        ? ((l = bu(u.tag, t, u.key, u.mode)),
          (l.elementType = u.elementType),
          (l.type = u.type),
          (l.stateNode = u.stateNode),
          (l.alternate = u),
          (u.alternate = l))
        : ((l.pendingProps = t),
          (l.type = u.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = u.flags & 65011712),
      (l.childLanes = u.childLanes),
      (l.lanes = u.lanes),
      (l.child = u.child),
      (l.memoizedProps = u.memoizedProps),
      (l.memoizedState = u.memoizedState),
      (l.updateQueue = u.updateQueue),
      (t = u.dependencies),
      (l.dependencies =
        t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
      (l.sibling = u.sibling),
      (l.index = u.index),
      (l.ref = u.ref),
      (l.refCleanup = u.refCleanup),
      l
    )
  }
  function to(u, t) {
    u.flags &= 65011714
    var l = u.alternate
    return (
      l === null
        ? ((u.childLanes = 0),
          (u.lanes = t),
          (u.child = null),
          (u.subtreeFlags = 0),
          (u.memoizedProps = null),
          (u.memoizedState = null),
          (u.updateQueue = null),
          (u.dependencies = null),
          (u.stateNode = null))
        : ((u.childLanes = l.childLanes),
          (u.lanes = l.lanes),
          (u.child = l.child),
          (u.subtreeFlags = 0),
          (u.deletions = null),
          (u.memoizedProps = l.memoizedProps),
          (u.memoizedState = l.memoizedState),
          (u.updateQueue = l.updateQueue),
          (u.type = l.type),
          (t = l.dependencies),
          (u.dependencies =
            t === null
              ? null
              : {lanes: t.lanes, firstContext: t.firstContext})),
      u
    )
  }
  function Va(u, t, l, e, a, n) {
    var i = 0
    if (((e = u), typeof u == 'function')) uf(u) && (i = 1)
    else if (typeof u == 'string')
      i = Pr(u, l, $u.current)
        ? 26
        : u === 'html' || u === 'head' || u === 'body'
          ? 27
          : 5
    else
      u: switch (u) {
        case wi:
          return ((u = bu(31, l, t, a)), (u.elementType = wi), (u.lanes = n), u)
        case pl:
          return ul(l.children, a, n, t)
        case C1:
          ;((i = 8), (a |= 24))
          break
        case Li:
          return (
            (u = bu(12, l, t, a | 2)),
            (u.elementType = Li),
            (u.lanes = n),
            u
          )
        case Ki:
          return ((u = bu(13, l, t, a)), (u.elementType = Ki), (u.lanes = n), u)
        case Ji:
          return ((u = bu(19, l, t, a)), (u.elementType = Ji), (u.lanes = n), u)
        default:
          if (typeof u == 'object' && u !== null)
            switch (u.$$typeof) {
              case Z2:
              case ft:
                i = 10
                break u
              case F1:
                i = 9
                break u
              case Xc:
                i = 11
                break u
              case Qc:
                i = 14
                break u
              case pt:
                ;((i = 16), (e = null))
                break u
            }
          ;((i = 29),
            (l = Error(v(130, u === null ? 'null' : typeof u, ''))),
            (e = null))
      }
    return (
      (t = bu(i, l, t, a)),
      (t.elementType = u),
      (t.type = e),
      (t.lanes = n),
      t
    )
  }
  function ul(u, t, l, e) {
    return ((u = bu(7, u, e, t)), (u.lanes = l), u)
  }
  function pi(u, t, l) {
    return ((u = bu(6, u, null, t)), (u.lanes = l), u)
  }
  function bi(u, t, l) {
    return (
      (t = bu(4, u.children !== null ? u.children : [], u.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: u.containerInfo,
        pendingChildren: null,
        implementation: u.implementation
      }),
      t
    )
  }
  var Rl = [],
    Hl = 0,
    cn = null,
    fn = 0,
    Hu = [],
    qu = 0,
    tl = null,
    Dt = 1,
    ot = ''
  function $t(u, t) {
    ;((Rl[Hl++] = fn), (Rl[Hl++] = cn), (cn = u), (fn = t))
  }
  function lo(u, t, l) {
    ;((Hu[qu++] = Dt), (Hu[qu++] = ot), (Hu[qu++] = tl), (tl = u))
    var e = Dt
    u = ot
    var a = 32 - zu(e) - 1
    ;((e &= ~(1 << a)), (l += 1))
    var n = 32 - zu(t) + a
    if (30 < n) {
      var i = a - (a % 5)
      ;((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (a -= i),
        (Dt = (1 << (32 - zu(t) + a)) | (l << a) | e),
        (ot = n + u))
    } else ((Dt = (1 << n) | (l << a) | e), (ot = u))
  }
  function tf(u) {
    u.return !== null && ($t(u, 1), lo(u, 1, 0))
  }
  function lf(u) {
    for (; u === cn; )
      ((cn = Rl[--Hl]), (Rl[Hl] = null), (fn = Rl[--Hl]), (Rl[Hl] = null))
    for (; u === tl; )
      ((tl = Hu[--qu]),
        (Hu[qu] = null),
        (ot = Hu[--qu]),
        (Hu[qu] = null),
        (Dt = Hu[--qu]),
        (Hu[qu] = null))
  }
  var hu = null,
    W = null,
    H = !1,
    ll = null,
    Wu = !1,
    cc = Error(v(519))
  function il(u) {
    var t = Error(v(418, ''))
    throw (Ze(xu(t, u)), cc)
  }
  function hD(u) {
    var t = u.stateNode,
      l = u.type,
      e = u.memoizedProps
    switch (((t[ru] = u), (t[Fu] = e), l)) {
      case 'dialog':
        ;(O('cancel', t), O('close', t))
        break
      case 'iframe':
      case 'object':
      case 'embed':
        O('load', t)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < Le.length; l++) O(Le[l], t)
        break
      case 'source':
        O('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        ;(O('error', t), O('load', t))
        break
      case 'details':
        O('toggle', t)
        break
      case 'input':
        ;(O('invalid', t),
          R1(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          en(t))
        break
      case 'select':
        O('invalid', t)
        break
      case 'textarea':
        ;(O('invalid', t), q1(t, e.value, e.defaultValue, e.children), en(t))
    }
    ;((l = e.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      e.suppressHydrationWarning === !0 ||
      xs(t.textContent, l)
        ? (e.popover != null && (O('beforetoggle', t), O('toggle', t)),
          e.onScroll != null && O('scroll', t),
          e.onScrollEnd != null && O('scrollend', t),
          e.onClick != null && (t.onclick = jn),
          (t = !0))
        : (t = !1),
      t || il(u))
  }
  function vD(u) {
    for (hu = u.return; hu; )
      switch (hu.tag) {
        case 5:
        case 13:
          Wu = !1
          return
        case 27:
        case 3:
          Wu = !0
          return
        default:
          hu = hu.return
      }
  }
  function Ae(u) {
    if (u !== hu) return !1
    if (!H) return (vD(u), (H = !0), !1)
    var t = u.tag,
      l
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = u.type),
          (l =
            !(l !== 'form' && l !== 'button') || Uc(u.type, u.memoizedProps))),
        (l = !l)),
      l && W && il(u),
      vD(u),
      t === 13)
    ) {
      if (((u = u.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
        throw Error(v(317))
      u: {
        for (u = u.nextSibling, t = 0; u; ) {
          if (u.nodeType === 8)
            if (((l = u.data), l === '/$')) {
              if (t === 0) {
                W = ju(u.nextSibling)
                break u
              }
              t--
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++
          u = u.nextSibling
        }
        W = null
      }
    } else
      t === 27
        ? ((t = W), Jt(u.type) ? ((u = qc), (qc = null), (W = u)) : (W = t))
        : (W = hu ? ju(u.stateNode.nextSibling) : null)
    return !0
  }
  function aa() {
    ;((W = hu = null), (H = !1))
  }
  function mD() {
    var u = ll
    return (
      u !== null &&
        (Cu === null ? (Cu = u) : Cu.push.apply(Cu, u), (ll = null)),
      u
    )
  }
  function Ze(u) {
    ll === null ? (ll = [u]) : ll.push(u)
  }
  var fc = ut(null),
    rl = null,
    st = null
  function Tt(u, t, l) {
    ;(J(fc, t._currentValue), (t._currentValue = l))
  }
  function At(u) {
    ;((u._currentValue = fc.current), fu(fc))
  }
  function Dc(u, t, l) {
    for (; u !== null; ) {
      var e = u.alternate
      if (
        ((u.childLanes & t) !== t
          ? ((u.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        u === l)
      )
        break
      u = u.return
    }
  }
  function oc(u, t, l, e) {
    var a = u.child
    for (a !== null && (a.return = u); a !== null; ) {
      var n = a.dependencies
      if (n !== null) {
        var i = a.child
        n = n.firstContext
        u: for (; n !== null; ) {
          var c = n
          n = a
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ;((n.lanes |= l),
                (c = n.alternate),
                c !== null && (c.lanes |= l),
                Dc(n.return, l, u),
                e || (i = null))
              break u
            }
          n = c.next
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null)) throw Error(v(341))
        ;((i.lanes |= l),
          (n = i.alternate),
          n !== null && (n.lanes |= l),
          Dc(i, l, u),
          (i = null))
      } else i = a.child
      if (i !== null) i.return = a
      else
        for (i = a; i !== null; ) {
          if (i === u) {
            i = null
            break
          }
          if (((a = i.sibling), a !== null)) {
            ;((a.return = i.return), (i = a))
            break
          }
          i = i.return
        }
      a = i
    }
  }
  function na(u, t, l, e) {
    u = null
    for (var a = t, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0
        else if ((a.flags & 262144) !== 0) break
      }
      if (a.tag === 10) {
        var i = a.alternate
        if (i === null) throw Error(v(387))
        if (((i = i.memoizedProps), i !== null)) {
          var c = a.type
          Mu(a.pendingProps.value, i.value) ||
            (u !== null ? u.push(c) : (u = [c]))
        }
      } else if (a === Ia.current) {
        if (((i = a.alternate), i === null)) throw Error(v(387))
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (u !== null ? u.push(we) : (u = [we]))
      }
      a = a.return
    }
    ;(u !== null && oc(t, u, l, e), (t.flags |= 262144))
  }
  function Dn(u) {
    for (u = u.firstContext; u !== null; ) {
      if (!Mu(u.context._currentValue, u.memoizedValue)) return !0
      u = u.next
    }
    return !1
  }
  function cl(u) {
    ;((rl = u),
      (st = null),
      (u = u.dependencies),
      u !== null && (u.firstContext = null))
  }
  function Au(u) {
    return eo(rl, u)
  }
  function Na(u, t) {
    return (rl === null && cl(u), eo(u, t))
  }
  function eo(u, t) {
    var l = t._currentValue
    if (((t = {context: t, memoizedValue: l, next: null}), st === null)) {
      if (u === null) throw Error(v(308))
      ;((st = t),
        (u.dependencies = {lanes: 0, firstContext: t}),
        (u.flags |= 524288))
    } else st = st.next = t
    return l
  }
  var IE =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var u = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, e) {
                  u.push(e)
                }
              })
            this.abort = function () {
              ;((t.aborted = !0),
                u.forEach(function (l) {
                  return l()
                }))
            }
          },
    ur = eu.unstable_scheduleCallback,
    tr = eu.unstable_NormalPriority,
    tu = {
      $$typeof: ft,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    }
  function ef() {
    return {controller: new IE(), data: new Map(), refCount: 0}
  }
  function ia(u) {
    ;(u.refCount--,
      u.refCount === 0 &&
        ur(tr, function () {
          u.controller.abort()
        }))
  }
  var Te = null,
    sc = 0,
    wl = 0,
    Xl = null
  function lr(u, t) {
    if (Te === null) {
      var l = (Te = [])
      ;((sc = 0),
        (wl = Tf()),
        (Xl = {
          status: 'pending',
          value: void 0,
          then: function (e) {
            l.push(e)
          }
        }))
    }
    return (sc++, t.then(CD, CD), t)
  }
  function CD() {
    if (--sc === 0 && Te !== null) {
      Xl !== null && (Xl.status = 'fulfilled')
      var u = Te
      ;((Te = null), (wl = 0), (Xl = null))
      for (var t = 0; t < u.length; t++) (0, u[t])()
    }
  }
  function er(u, t) {
    var l = [],
      e = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          l.push(a)
        }
      }
    return (
      u.then(
        function () {
          ;((e.status = 'fulfilled'), (e.value = t))
          for (var a = 0; a < l.length; a++) (0, l[a])(t)
        },
        function (a) {
          for (e.status = 'rejected', e.reason = a, a = 0; a < l.length; a++)
            (0, l[a])(void 0)
        }
      ),
      e
    )
  }
  var FD = B.S
  B.S = function (u, t) {
    ;(typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      lr(u, t),
      FD !== null && FD(u, t))
  }
  var el = ut(null)
  function af() {
    var u = el.current
    return u !== null ? u : Z.pooledCache
  }
  function La(u, t) {
    t === null ? J(el, el.current) : J(el, t.pool)
  }
  function ao() {
    var u = af()
    return u === null ? null : {parent: tu._currentValue, pool: u}
  }
  var ca = Error(v(460)),
    no = Error(v(474)),
    qn = Error(v(542)),
    Ec = {then: function () {}}
  function gD(u) {
    return ((u = u.status), u === 'fulfilled' || u === 'rejected')
  }
  function Ma() {}
  function io(u, t, l) {
    switch (
      ((l = u[l]),
      l === void 0 ? u.push(t) : l !== t && (t.then(Ma, Ma), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((u = t.reason), BD(u), u)
      default:
        if (typeof t.status == 'string') t.then(Ma, Ma)
        else {
          if (((u = Z), u !== null && 100 < u.shellSuspendCounter))
            throw Error(v(482))
          ;((u = t),
            (u.status = 'pending'),
            u.then(
              function (e) {
                if (t.status === 'pending') {
                  var a = t
                  ;((a.status = 'fulfilled'), (a.value = e))
                }
              },
              function (e) {
                if (t.status === 'pending') {
                  var a = t
                  ;((a.status = 'rejected'), (a.reason = e))
                }
              }
            ))
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((u = t.reason), BD(u), u)
        }
        throw ((ze = t), ca)
    }
  }
  var ze = null
  function SD() {
    if (ze === null) throw Error(v(459))
    var u = ze
    return ((ze = null), u)
  }
  function BD(u) {
    if (u === ca || u === qn) throw Error(v(483))
  }
  var bt = !1
  function nf(u) {
    u.updateQueue = {
      baseState: u.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {pending: null, lanes: 0, hiddenCallbacks: null},
      callbacks: null
    }
  }
  function rc(u, t) {
    ;((u = u.updateQueue),
      t.updateQueue === u &&
        (t.updateQueue = {
          baseState: u.baseState,
          firstBaseUpdate: u.firstBaseUpdate,
          lastBaseUpdate: u.lastBaseUpdate,
          shared: u.shared,
          callbacks: null
        }))
  }
  function qt(u) {
    return {lane: u, tag: 0, payload: null, callback: null, next: null}
  }
  function Yt(u, t, l) {
    var e = u.updateQueue
    if (e === null) return null
    if (((e = e.shared), (x & 2) !== 0)) {
      var a = e.pending
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (e.pending = t),
        (t = nn(u)),
        uo(u, null, l),
        t
      )
    }
    return (Hn(u, e, t, l), nn(u))
  }
  function Oe(u, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var e = t.lanes
      ;((e &= u.pendingLanes), (l |= e), (t.lanes = l), z1(u, l))
    }
  }
  function Ti(u, t) {
    var l = u.updateQueue,
      e = u.alternate
    if (e !== null && ((e = e.updateQueue), l === e)) {
      var a = null,
        n = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          }
          ;(n === null ? (a = n = i) : (n = n.next = i), (l = l.next))
        } while (l !== null)
        n === null ? (a = n = t) : (n = n.next = t)
      } else a = n = t
      ;((l = {
        baseState: e.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }),
        (u.updateQueue = l))
      return
    }
    ;((u = l.lastBaseUpdate),
      u === null ? (l.firstBaseUpdate = t) : (u.next = t),
      (l.lastBaseUpdate = t))
  }
  var Ac = !1
  function Ne() {
    if (Ac) {
      var u = Xl
      if (u !== null) throw u
    }
  }
  function Me(u, t, l, e) {
    Ac = !1
    var a = u.updateQueue
    bt = !1
    var n = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      c = a.shared.pending
    if (c !== null) {
      a.shared.pending = null
      var f = c,
        o = f.next
      ;((f.next = null), i === null ? (n = o) : (i.next = o), (i = f))
      var d = u.alternate
      d !== null &&
        ((d = d.updateQueue),
        (c = d.lastBaseUpdate),
        c !== i &&
          (c === null ? (d.firstBaseUpdate = o) : (c.next = o),
          (d.lastBaseUpdate = f)))
    }
    if (n !== null) {
      var y = a.baseState
      ;((i = 0), (d = o = f = null), (c = n))
      do {
        var A = c.lane & -536870913,
          r = A !== c.lane
        if (r ? (M & A) === A : (e & A) === A) {
          ;(A !== 0 && A === wl && (Ac = !0),
            d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null
                }))
          u: {
            var g = u,
              C = c
            A = t
            var U = l
            switch (C.tag) {
              case 1:
                if (((g = C.payload), typeof g == 'function')) {
                  y = g.call(U, y, A)
                  break u
                }
                y = g
                break u
              case 3:
                g.flags = (g.flags & -65537) | 128
              case 0:
                if (
                  ((g = C.payload),
                  (A = typeof g == 'function' ? g.call(U, y, A) : g),
                  A == null)
                )
                  break u
                y = j({}, y, A)
                break u
              case 2:
                bt = !0
            }
          }
          ;((A = c.callback),
            A !== null &&
              ((u.flags |= 64),
              r && (u.flags |= 8192),
              (r = a.callbacks),
              r === null ? (a.callbacks = [A]) : r.push(A)))
        } else
          ((r = {
            lane: A,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }),
            d === null ? ((o = d = r), (f = y)) : (d = d.next = r),
            (i |= A))
        if (((c = c.next), c === null)) {
          if (((c = a.shared.pending), c === null)) break
          ;((r = c),
            (c = r.next),
            (r.next = null),
            (a.lastBaseUpdate = r),
            (a.shared.pending = null))
        }
      } while (!0)
      ;(d === null && (f = y),
        (a.baseState = f),
        (a.firstBaseUpdate = o),
        (a.lastBaseUpdate = d),
        n === null && (a.shared.lanes = 0),
        (Lt |= i),
        (u.lanes = i),
        (u.memoizedState = y))
    }
  }
  function co(u, t) {
    if (typeof u != 'function') throw Error(v(191, u))
    u.call(t)
  }
  function fo(u, t) {
    var l = u.callbacks
    if (l !== null)
      for (u.callbacks = null, u = 0; u < l.length; u++) co(l[u], t)
  }
  var Wl = ut(null),
    on = ut(0)
  function pD(u, t) {
    ;((u = vt), J(on, u), J(Wl, t), (vt = u | t.baseLanes))
  }
  function dc() {
    ;(J(on, vt), J(Wl, Wl.current))
  }
  function cf() {
    ;((vt = on.current), fu(Wl), fu(on))
  }
  var jt = 0,
    T = null,
    X = null,
    I = null,
    sn = !1,
    Ql = !1,
    fl = !1,
    En = 0,
    je = 0,
    Zl = null,
    ar = 0
  function $() {
    throw Error(v(321))
  }
  function ff(u, t) {
    if (t === null) return !1
    for (var l = 0; l < t.length && l < u.length; l++)
      if (!Mu(u[l], t[l])) return !1
    return !0
  }
  function Df(u, t, l, e, a, n) {
    return (
      (jt = n),
      (T = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (B.H = u === null || u.memoizedState === null ? Xo : Qo),
      (fl = !1),
      (n = l(e, a)),
      (fl = !1),
      Ql && (n = oo(t, l, e, a)),
      Do(u),
      n
    )
  }
  function Do(u) {
    B.H = rn
    var t = X !== null && X.next !== null
    if (((jt = 0), (I = X = T = null), (sn = !1), (je = 0), (Zl = null), t))
      throw Error(v(300))
    u === null || cu || ((u = u.dependencies), u !== null && Dn(u) && (cu = !0))
  }
  function oo(u, t, l, e) {
    T = u
    var a = 0
    do {
      if ((Ql && (Zl = null), (je = 0), (Ql = !1), 25 <= a)) throw Error(v(301))
      if (((a += 1), (I = X = null), u.updateQueue != null)) {
        var n = u.updateQueue
        ;((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0))
      }
      ;((B.H = sr), (n = t(l, e)))
    } while (Ql)
    return n
  }
  function nr() {
    var u = B.H,
      t = u.useState()[0]
    return (
      (t = typeof t.then == 'function' ? fa(t) : t),
      (u = u.useState()[0]),
      (X !== null ? X.memoizedState : null) !== u && (T.flags |= 1024),
      t
    )
  }
  function of() {
    var u = En !== 0
    return ((En = 0), u)
  }
  function sf(u, t, l) {
    ;((t.updateQueue = u.updateQueue), (t.flags &= -2053), (u.lanes &= ~l))
  }
  function Ef(u) {
    if (sn) {
      for (u = u.memoizedState; u !== null; ) {
        var t = u.queue
        ;(t !== null && (t.pending = null), (u = u.next))
      }
      sn = !1
    }
    ;((jt = 0), (I = X = T = null), (Ql = !1), (je = En = 0), (Zl = null))
  }
  function vu() {
    var u = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    }
    return (I === null ? (T.memoizedState = I = u) : (I = I.next = u), I)
  }
  function uu() {
    if (X === null) {
      var u = T.alternate
      u = u !== null ? u.memoizedState : null
    } else u = X.next
    var t = I === null ? T.memoizedState : I.next
    if (t !== null) ((I = t), (X = u))
    else {
      if (u === null) throw T.alternate === null ? Error(v(467)) : Error(v(310))
      ;((X = u),
        (u = {
          memoizedState: X.memoizedState,
          baseState: X.baseState,
          baseQueue: X.baseQueue,
          queue: X.queue,
          next: null
        }),
        I === null ? (T.memoizedState = I = u) : (I = I.next = u))
    }
    return I
  }
  function rf() {
    return {lastEffect: null, events: null, stores: null, memoCache: null}
  }
  function fa(u) {
    var t = je
    return (
      (je += 1),
      Zl === null && (Zl = []),
      (u = io(Zl, u, t)),
      (t = T),
      (I === null ? t.memoizedState : I.next) === null &&
        ((t = t.alternate),
        (B.H = t === null || t.memoizedState === null ? Xo : Qo)),
      u
    )
  }
  function Yn(u) {
    if (u !== null && typeof u == 'object') {
      if (typeof u.then == 'function') return fa(u)
      if (u.$$typeof === ft) return Au(u)
    }
    throw Error(v(438, String(u)))
  }
  function Af(u) {
    var t = null,
      l = T.updateQueue
    if ((l !== null && (t = l.memoCache), t == null)) {
      var e = T.alternate
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (a) {
                return a.slice()
              }),
              index: 0
            })))
    }
    if (
      (t == null && (t = {data: [], index: 0}),
      l === null && ((l = rf()), (T.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(u), e = 0; e < u; e++) l[e] = j2
    return (t.index++, l)
  }
  function yt(u, t) {
    return typeof t == 'function' ? t(u) : t
  }
  function Ka(u) {
    var t = uu()
    return df(t, X, u)
  }
  function df(u, t, l) {
    var e = u.queue
    if (e === null) throw Error(v(311))
    e.lastRenderedReducer = l
    var a = u.baseQueue,
      n = e.pending
    if (n !== null) {
      if (a !== null) {
        var i = a.next
        ;((a.next = n.next), (n.next = i))
      }
      ;((t.baseQueue = a = n), (e.pending = null))
    }
    if (((n = u.baseState), a === null)) u.memoizedState = n
    else {
      t = a.next
      var c = (i = null),
        f = null,
        o = t,
        d = !1
      do {
        var y = o.lane & -536870913
        if (y !== o.lane ? (M & y) === y : (jt & y) === y) {
          var A = o.revertLane
          if (A === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: o.action,
                  hasEagerState: o.hasEagerState,
                  eagerState: o.eagerState,
                  next: null
                }),
              y === wl && (d = !0))
          else if ((jt & A) === A) {
            ;((o = o.next), A === wl && (d = !0))
            continue
          } else
            ((y = {
              lane: 0,
              revertLane: o.revertLane,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null
            }),
              f === null ? ((c = f = y), (i = n)) : (f = f.next = y),
              (T.lanes |= A),
              (Lt |= A))
          ;((y = o.action),
            fl && l(n, y),
            (n = o.hasEagerState ? o.eagerState : l(n, y)))
        } else
          ((A = {
            lane: y,
            revertLane: o.revertLane,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }),
            f === null ? ((c = f = A), (i = n)) : (f = f.next = A),
            (T.lanes |= y),
            (Lt |= y))
        o = o.next
      } while (o !== null && o !== t)
      if (
        (f === null ? (i = n) : (f.next = c),
        !Mu(n, u.memoizedState) && ((cu = !0), d && ((l = Xl), l !== null)))
      )
        throw l
      ;((u.memoizedState = n),
        (u.baseState = i),
        (u.baseQueue = f),
        (e.lastRenderedState = n))
    }
    return (a === null && (e.lanes = 0), [u.memoizedState, e.dispatch])
  }
  function zi(u) {
    var t = uu(),
      l = t.queue
    if (l === null) throw Error(v(311))
    l.lastRenderedReducer = u
    var e = l.dispatch,
      a = l.pending,
      n = t.memoizedState
    if (a !== null) {
      l.pending = null
      var i = (a = a.next)
      do ((n = u(n, i.action)), (i = i.next))
      while (i !== a)
      ;(Mu(n, t.memoizedState) || (cu = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (l.lastRenderedState = n))
    }
    return [n, e]
  }
  function so(u, t, l) {
    var e = T,
      a = uu(),
      n = H
    if (n) {
      if (l === void 0) throw Error(v(407))
      l = l()
    } else l = t()
    var i = !Mu((X || a).memoizedState, l)
    ;(i && ((a.memoizedState = l), (cu = !0)), (a = a.queue))
    var c = Ao.bind(null, e, a, u)
    if (
      (Da(2048, 8, c, [u]),
      a.getSnapshot !== t || i || (I !== null && I.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        kl(9, xn(), ro.bind(null, e, a, l, t), null),
        Z === null)
      )
        throw Error(v(349))
      n || (jt & 124) !== 0 || Eo(e, t, l)
    }
    return l
  }
  function Eo(u, t, l) {
    ;((u.flags |= 16384),
      (u = {getSnapshot: t, value: l}),
      (t = T.updateQueue),
      t === null
        ? ((t = rf()), (T.updateQueue = t), (t.stores = [u]))
        : ((l = t.stores), l === null ? (t.stores = [u]) : l.push(u)))
  }
  function ro(u, t, l, e) {
    ;((t.value = l), (t.getSnapshot = e), yo(t) && ho(u))
  }
  function Ao(u, t, l) {
    return l(function () {
      yo(t) && ho(u)
    })
  }
  function yo(u) {
    var t = u.getSnapshot
    u = u.value
    try {
      var l = t()
      return !Mu(u, l)
    } catch {
      return !0
    }
  }
  function ho(u) {
    var t = ae(u, 2)
    t !== null && Nu(t, u, 2)
  }
  function yc(u) {
    var t = vu()
    if (typeof u == 'function') {
      var l = u
      if (((u = l()), fl)) {
        Mt(!0)
        try {
          l()
        } finally {
          Mt(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = u),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yt,
        lastRenderedState: u
      }),
      t
    )
  }
  function vo(u, t, l, e) {
    return ((u.baseState = l), df(u, X, typeof e == 'function' ? e : yt))
  }
  function ir(u, t, l, e, a) {
    if (Gn(u)) throw Error(v(485))
    if (((u = t.action), u !== null)) {
      var n = {
        payload: a,
        action: u,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i)
        }
      }
      ;(B.T !== null ? l(!0) : (n.isTransition = !1),
        e(n),
        (l = t.pending),
        l === null
          ? ((n.next = t.pending = n), mo(t, n))
          : ((n.next = l.next), (t.pending = l.next = n)))
    }
  }
  function mo(u, t) {
    var l = t.action,
      e = t.payload,
      a = u.state
    if (t.isTransition) {
      var n = B.T,
        i = {}
      B.T = i
      try {
        var c = l(a, e),
          f = B.S
        ;(f !== null && f(i, c), bD(u, t, c))
      } catch (o) {
        hc(u, t, o)
      } finally {
        B.T = n
      }
    } else
      try {
        ;((n = l(a, e)), bD(u, t, n))
      } catch (o) {
        hc(u, t, o)
      }
  }
  function bD(u, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (e) {
            TD(u, t, e)
          },
          function (e) {
            return hc(u, t, e)
          }
        )
      : TD(u, t, l)
  }
  function TD(u, t, l) {
    ;((t.status = 'fulfilled'),
      (t.value = l),
      Co(t),
      (u.state = l),
      (t = u.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (u.pending = null) : ((l = l.next), (t.next = l), mo(u, l))))
  }
  function hc(u, t, l) {
    var e = u.pending
    if (((u.pending = null), e !== null)) {
      e = e.next
      do ((t.status = 'rejected'), (t.reason = l), Co(t), (t = t.next))
      while (t !== e)
    }
    u.action = null
  }
  function Co(u) {
    u = u.listeners
    for (var t = 0; t < u.length; t++) (0, u[t])()
  }
  function Fo(u, t) {
    return t
  }
  function zD(u, t) {
    if (H) {
      var l = Z.formState
      if (l !== null) {
        u: {
          var e = T
          if (H) {
            if (W) {
              t: {
                for (var a = W, n = Wu; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null
                    break t
                  }
                  if (((a = ju(a.nextSibling)), a === null)) {
                    a = null
                    break t
                  }
                }
                ;((n = a.data), (a = n === 'F!' || n === 'F' ? a : null))
              }
              if (a) {
                ;((W = ju(a.nextSibling)), (e = a.data === 'F!'))
                break u
              }
            }
            il(e)
          }
          e = !1
        }
        e && (t = l[0])
      }
    }
    return (
      (l = vu()),
      (l.memoizedState = l.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fo,
        lastRenderedState: t
      }),
      (l.queue = e),
      (l = Yo.bind(null, T, e)),
      (e.dispatch = l),
      (e = yc(!1)),
      (n = mf.bind(null, T, !1, e.queue)),
      (e = vu()),
      (a = {state: t, dispatch: null, action: u, pending: null}),
      (e.queue = a),
      (l = ir.bind(null, T, a, n, l)),
      (a.dispatch = l),
      (e.memoizedState = u),
      [t, l, !1]
    )
  }
  function OD(u) {
    var t = uu()
    return go(t, X, u)
  }
  function go(u, t, l) {
    if (
      ((t = df(u, t, Fo)[0]),
      (u = Ka(yt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var e = fa(t)
      } catch (i) {
        throw i === ca ? qn : i
      }
    else e = t
    t = uu()
    var a = t.queue,
      n = a.dispatch
    return (
      l !== t.memoizedState &&
        ((T.flags |= 2048), kl(9, xn(), cr.bind(null, a, l), null)),
      [e, n, u]
    )
  }
  function cr(u, t) {
    u.action = t
  }
  function ND(u) {
    var t = uu(),
      l = X
    if (l !== null) return go(t, l, u)
    ;(uu(), (t = t.memoizedState), (l = uu()))
    var e = l.queue.dispatch
    return ((l.memoizedState = u), [t, e, !1])
  }
  function kl(u, t, l, e) {
    return (
      (u = {tag: u, create: l, deps: e, inst: t, next: null}),
      (t = T.updateQueue),
      t === null && ((t = rf()), (T.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = u.next = u)
        : ((e = l.next), (l.next = u), (u.next = e), (t.lastEffect = u)),
      u
    )
  }
  function xn() {
    return {destroy: void 0, resource: void 0}
  }
  function So() {
    return uu().memoizedState
  }
  function Ja(u, t, l, e) {
    var a = vu()
    ;((e = e === void 0 ? null : e),
      (T.flags |= u),
      (a.memoizedState = kl(1 | t, xn(), l, e)))
  }
  function Da(u, t, l, e) {
    var a = uu()
    e = e === void 0 ? null : e
    var n = a.memoizedState.inst
    X !== null && e !== null && ff(e, X.memoizedState.deps)
      ? (a.memoizedState = kl(t, n, l, e))
      : ((T.flags |= u), (a.memoizedState = kl(1 | t, n, l, e)))
  }
  function MD(u, t) {
    Ja(8390656, 8, u, t)
  }
  function Bo(u, t) {
    Da(2048, 8, u, t)
  }
  function po(u, t) {
    return Da(4, 2, u, t)
  }
  function bo(u, t) {
    return Da(4, 4, u, t)
  }
  function To(u, t) {
    if (typeof t == 'function') {
      u = u()
      var l = t(u)
      return function () {
        typeof l == 'function' ? l() : t(null)
      }
    }
    if (t != null)
      return (
        (u = u()),
        (t.current = u),
        function () {
          t.current = null
        }
      )
  }
  function zo(u, t, l) {
    ;((l = l != null ? l.concat([u]) : null), Da(4, 4, To.bind(null, t, u), l))
  }
  function yf() {}
  function Oo(u, t) {
    var l = uu()
    t = t === void 0 ? null : t
    var e = l.memoizedState
    return t !== null && ff(t, e[1]) ? e[0] : ((l.memoizedState = [u, t]), u)
  }
  function No(u, t) {
    var l = uu()
    t = t === void 0 ? null : t
    var e = l.memoizedState
    if (t !== null && ff(t, e[1])) return e[0]
    if (((e = u()), fl)) {
      Mt(!0)
      try {
        u()
      } finally {
        Mt(!1)
      }
    }
    return ((l.memoizedState = [e, t]), e)
  }
  function hf(u, t, l) {
    return l === void 0 || (jt & 1073741824) !== 0
      ? (u.memoizedState = t)
      : ((u.memoizedState = l), (u = Cs()), (T.lanes |= u), (Lt |= u), l)
  }
  function Mo(u, t, l, e) {
    return Mu(l, t)
      ? l
      : Wl.current !== null
        ? ((u = hf(u, l, e)), Mu(u, t) || (cu = !0), u)
        : (jt & 42) === 0
          ? ((cu = !0), (u.memoizedState = l))
          : ((u = Cs()), (T.lanes |= u), (Lt |= u), t)
  }
  function _o(u, t, l, e, a) {
    var n = q.p
    q.p = n !== 0 && 8 > n ? n : 8
    var i = B.T,
      c = {}
    ;((B.T = c), mf(u, !1, t, l))
    try {
      var f = a(),
        o = B.S
      if (
        (o !== null && o(c, f),
        f !== null && typeof f == 'object' && typeof f.then == 'function')
      ) {
        var d = er(f, e)
        _e(u, t, d, Ou(u))
      } else _e(u, t, e, Ou(u))
    } catch (y) {
      _e(u, t, {then: function () {}, status: 'rejected', reason: y}, Ou())
    } finally {
      ;((q.p = n), (B.T = i))
    }
  }
  function fr() {}
  function vc(u, t, l, e) {
    if (u.tag !== 5) throw Error(v(476))
    var a = Uo(u).queue
    _o(
      u,
      a,
      t,
      It,
      l === null
        ? fr
        : function () {
            return (Ro(u), l(e))
          }
    )
  }
  function Uo(u) {
    var t = u.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: It,
      baseState: It,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yt,
        lastRenderedState: It
      },
      next: null
    }
    var l = {}
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yt,
          lastRenderedState: l
        },
        next: null
      }),
      (u.memoizedState = t),
      (u = u.alternate),
      u !== null && (u.memoizedState = t),
      t
    )
  }
  function Ro(u) {
    var t = Uo(u).next.queue
    _e(u, t, {}, Ou())
  }
  function vf() {
    return Au(we)
  }
  function Ho() {
    return uu().memoizedState
  }
  function qo() {
    return uu().memoizedState
  }
  function Dr(u) {
    for (var t = u.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ou()
          u = qt(l)
          var e = Yt(t, u, l)
          ;(e !== null && (Nu(e, t, l), Oe(e, t, l)),
            (t = {cache: ef()}),
            (u.payload = t))
          return
      }
      t = t.return
    }
  }
  function or(u, t, l) {
    var e = Ou()
    ;((l = {
      lane: e,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
      Gn(u)
        ? xo(t, l)
        : ((l = Ic(u, t, l, e)), l !== null && (Nu(l, u, e), Go(l, t, e))))
  }
  function Yo(u, t, l) {
    var e = Ou()
    _e(u, t, l, e)
  }
  function _e(u, t, l, e) {
    var a = {
      lane: e,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }
    if (Gn(u)) xo(t, a)
    else {
      var n = u.alternate
      if (
        u.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, l)
          if (((a.hasEagerState = !0), (a.eagerState = c), Mu(c, i)))
            return (Hn(u, t, a, 0), Z === null && Rn(), !1)
        } catch {
        } finally {
        }
      if (((l = Ic(u, t, a, e)), l !== null))
        return (Nu(l, u, e), Go(l, t, e), !0)
    }
    return !1
  }
  function mf(u, t, l, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Tf(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }),
      Gn(u))
    ) {
      if (t) throw Error(v(479))
    } else ((t = Ic(u, l, e, 2)), t !== null && Nu(t, u, 2))
  }
  function Gn(u) {
    var t = u.alternate
    return u === T || (t !== null && t === T)
  }
  function xo(u, t) {
    Ql = sn = !0
    var l = u.pending
    ;(l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (u.pending = t))
  }
  function Go(u, t, l) {
    if ((l & 4194048) !== 0) {
      var e = t.lanes
      ;((e &= u.pendingLanes), (l |= e), (t.lanes = l), z1(u, l))
    }
  }
  var rn = {
      readContext: Au,
      use: Yn,
      useCallback: $,
      useContext: $,
      useEffect: $,
      useImperativeHandle: $,
      useLayoutEffect: $,
      useInsertionEffect: $,
      useMemo: $,
      useReducer: $,
      useRef: $,
      useState: $,
      useDebugValue: $,
      useDeferredValue: $,
      useTransition: $,
      useSyncExternalStore: $,
      useId: $,
      useHostTransitionStatus: $,
      useFormState: $,
      useActionState: $,
      useOptimistic: $,
      useMemoCache: $,
      useCacheRefresh: $
    },
    Xo = {
      readContext: Au,
      use: Yn,
      useCallback: function (u, t) {
        return ((vu().memoizedState = [u, t === void 0 ? null : t]), u)
      },
      useContext: Au,
      useEffect: MD,
      useImperativeHandle: function (u, t, l) {
        ;((l = l != null ? l.concat([u]) : null),
          Ja(4194308, 4, To.bind(null, t, u), l))
      },
      useLayoutEffect: function (u, t) {
        return Ja(4194308, 4, u, t)
      },
      useInsertionEffect: function (u, t) {
        Ja(4, 2, u, t)
      },
      useMemo: function (u, t) {
        var l = vu()
        t = t === void 0 ? null : t
        var e = u()
        if (fl) {
          Mt(!0)
          try {
            u()
          } finally {
            Mt(!1)
          }
        }
        return ((l.memoizedState = [e, t]), e)
      },
      useReducer: function (u, t, l) {
        var e = vu()
        if (l !== void 0) {
          var a = l(t)
          if (fl) {
            Mt(!0)
            try {
              l(t)
            } finally {
              Mt(!1)
            }
          }
        } else a = t
        return (
          (e.memoizedState = e.baseState = a),
          (u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: u,
            lastRenderedState: a
          }),
          (e.queue = u),
          (u = u.dispatch = or.bind(null, T, u)),
          [e.memoizedState, u]
        )
      },
      useRef: function (u) {
        var t = vu()
        return ((u = {current: u}), (t.memoizedState = u))
      },
      useState: function (u) {
        u = yc(u)
        var t = u.queue,
          l = Yo.bind(null, T, t)
        return ((t.dispatch = l), [u.memoizedState, l])
      },
      useDebugValue: yf,
      useDeferredValue: function (u, t) {
        var l = vu()
        return hf(l, u, t)
      },
      useTransition: function () {
        var u = yc(!1)
        return (
          (u = _o.bind(null, T, u.queue, !0, !1)),
          (vu().memoizedState = u),
          [!1, u]
        )
      },
      useSyncExternalStore: function (u, t, l) {
        var e = T,
          a = vu()
        if (H) {
          if (l === void 0) throw Error(v(407))
          l = l()
        } else {
          if (((l = t()), Z === null)) throw Error(v(349))
          ;(M & 124) !== 0 || Eo(e, t, l)
        }
        a.memoizedState = l
        var n = {value: l, getSnapshot: t}
        return (
          (a.queue = n),
          MD(Ao.bind(null, e, n, u), [u]),
          (e.flags |= 2048),
          kl(9, xn(), ro.bind(null, e, n, l, t), null),
          l
        )
      },
      useId: function () {
        var u = vu(),
          t = Z.identifierPrefix
        if (H) {
          var l = ot,
            e = Dt
          ;((l = (e & ~(1 << (32 - zu(e) - 1))).toString(32) + l),
            (t = '\xAB' + t + 'R' + l),
            (l = En++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '\xBB'))
        } else ((l = ar++), (t = '\xAB' + t + 'r' + l.toString(32) + '\xBB'))
        return (u.memoizedState = t)
      },
      useHostTransitionStatus: vf,
      useFormState: zD,
      useActionState: zD,
      useOptimistic: function (u) {
        var t = vu()
        t.memoizedState = t.baseState = u
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        }
        return (
          (t.queue = l),
          (t = mf.bind(null, T, !0, l)),
          (l.dispatch = t),
          [u, t]
        )
      },
      useMemoCache: Af,
      useCacheRefresh: function () {
        return (vu().memoizedState = Dr.bind(null, T))
      }
    },
    Qo = {
      readContext: Au,
      use: Yn,
      useCallback: Oo,
      useContext: Au,
      useEffect: Bo,
      useImperativeHandle: zo,
      useInsertionEffect: po,
      useLayoutEffect: bo,
      useMemo: No,
      useReducer: Ka,
      useRef: So,
      useState: function () {
        return Ka(yt)
      },
      useDebugValue: yf,
      useDeferredValue: function (u, t) {
        var l = uu()
        return Mo(l, X.memoizedState, u, t)
      },
      useTransition: function () {
        var u = Ka(yt)[0],
          t = uu().memoizedState
        return [typeof u == 'boolean' ? u : fa(u), t]
      },
      useSyncExternalStore: so,
      useId: Ho,
      useHostTransitionStatus: vf,
      useFormState: OD,
      useActionState: OD,
      useOptimistic: function (u, t) {
        var l = uu()
        return vo(l, X, u, t)
      },
      useMemoCache: Af,
      useCacheRefresh: qo
    },
    sr = {
      readContext: Au,
      use: Yn,
      useCallback: Oo,
      useContext: Au,
      useEffect: Bo,
      useImperativeHandle: zo,
      useInsertionEffect: po,
      useLayoutEffect: bo,
      useMemo: No,
      useReducer: zi,
      useRef: So,
      useState: function () {
        return zi(yt)
      },
      useDebugValue: yf,
      useDeferredValue: function (u, t) {
        var l = uu()
        return X === null ? hf(l, u, t) : Mo(l, X.memoizedState, u, t)
      },
      useTransition: function () {
        var u = zi(yt)[0],
          t = uu().memoizedState
        return [typeof u == 'boolean' ? u : fa(u), t]
      },
      useSyncExternalStore: so,
      useId: Ho,
      useHostTransitionStatus: vf,
      useFormState: ND,
      useActionState: ND,
      useOptimistic: function (u, t) {
        var l = uu()
        return X !== null
          ? vo(l, X, u, t)
          : ((l.baseState = u), [u, l.queue.dispatch])
      },
      useMemoCache: Af,
      useCacheRefresh: qo
    },
    jl = null,
    Ve = 0
  function _a(u) {
    var t = Ve
    return ((Ve += 1), jl === null && (jl = []), io(jl, u, t))
  }
  function de(u, t) {
    ;((t = t.props.ref), (u.ref = t !== void 0 ? t : null))
  }
  function Ua(u, t) {
    throw t.$$typeof === Q2
      ? Error(v(525))
      : ((u = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            u === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : u
          )
        ))
  }
  function _D(u) {
    var t = u._init
    return t(u._payload)
  }
  function Zo(u) {
    function t(s, D) {
      if (u) {
        var E = s.deletions
        E === null ? ((s.deletions = [D]), (s.flags |= 16)) : E.push(D)
      }
    }
    function l(s, D) {
      if (!u) return null
      for (; D !== null; ) (t(s, D), (D = D.sibling))
      return null
    }
    function e(s) {
      for (var D = new Map(); s !== null; )
        (s.key !== null ? D.set(s.key, s) : D.set(s.index, s), (s = s.sibling))
      return D
    }
    function a(s, D) {
      return ((s = rt(s, D)), (s.index = 0), (s.sibling = null), s)
    }
    function n(s, D, E) {
      return (
        (s.index = E),
        u
          ? ((E = s.alternate),
            E !== null
              ? ((E = E.index), E < D ? ((s.flags |= 67108866), D) : E)
              : ((s.flags |= 67108866), D))
          : ((s.flags |= 1048576), D)
      )
    }
    function i(s) {
      return (u && s.alternate === null && (s.flags |= 67108866), s)
    }
    function c(s, D, E, h) {
      return D === null || D.tag !== 6
        ? ((D = pi(E, s.mode, h)), (D.return = s), D)
        : ((D = a(D, E)), (D.return = s), D)
    }
    function f(s, D, E, h) {
      var m = E.type
      return m === pl
        ? d(s, D, E.props.children, h, E.key)
        : D !== null &&
            (D.elementType === m ||
              (typeof m == 'object' &&
                m !== null &&
                m.$$typeof === pt &&
                _D(m) === D.type))
          ? ((D = a(D, E.props)), de(D, E), (D.return = s), D)
          : ((D = Va(E.type, E.key, E.props, null, s.mode, h)),
            de(D, E),
            (D.return = s),
            D)
    }
    function o(s, D, E, h) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== E.containerInfo ||
        D.stateNode.implementation !== E.implementation
        ? ((D = bi(E, s.mode, h)), (D.return = s), D)
        : ((D = a(D, E.children || [])), (D.return = s), D)
    }
    function d(s, D, E, h, m) {
      return D === null || D.tag !== 7
        ? ((D = ul(E, s.mode, h, m)), (D.return = s), D)
        : ((D = a(D, E)), (D.return = s), D)
    }
    function y(s, D, E) {
      if (
        (typeof D == 'string' && D !== '') ||
        typeof D == 'number' ||
        typeof D == 'bigint'
      )
        return ((D = pi('' + D, s.mode, E)), (D.return = s), D)
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case Sa:
            return (
              (E = Va(D.type, D.key, D.props, null, s.mode, E)),
              de(E, D),
              (E.return = s),
              E
            )
          case Ce:
            return ((D = bi(D, s.mode, E)), (D.return = s), D)
          case pt:
            var h = D._init
            return ((D = h(D._payload)), y(s, D, E))
        }
        if (Fe(D) || Ee(D))
          return ((D = ul(D, s.mode, E, null)), (D.return = s), D)
        if (typeof D.then == 'function') return y(s, _a(D), E)
        if (D.$$typeof === ft) return y(s, Na(s, D), E)
        Ua(s, D)
      }
      return null
    }
    function A(s, D, E, h) {
      var m = D !== null ? D.key : null
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return m !== null ? null : c(s, D, '' + E, h)
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case Sa:
            return E.key === m ? f(s, D, E, h) : null
          case Ce:
            return E.key === m ? o(s, D, E, h) : null
          case pt:
            return ((m = E._init), (E = m(E._payload)), A(s, D, E, h))
        }
        if (Fe(E) || Ee(E)) return m !== null ? null : d(s, D, E, h, null)
        if (typeof E.then == 'function') return A(s, D, _a(E), h)
        if (E.$$typeof === ft) return A(s, D, Na(s, E), h)
        Ua(s, E)
      }
      return null
    }
    function r(s, D, E, h, m) {
      if (
        (typeof h == 'string' && h !== '') ||
        typeof h == 'number' ||
        typeof h == 'bigint'
      )
        return ((s = s.get(E) || null), c(D, s, '' + h, m))
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case Sa:
            return (
              (s = s.get(h.key === null ? E : h.key) || null),
              f(D, s, h, m)
            )
          case Ce:
            return (
              (s = s.get(h.key === null ? E : h.key) || null),
              o(D, s, h, m)
            )
          case pt:
            var z = h._init
            return ((h = z(h._payload)), r(s, D, E, h, m))
        }
        if (Fe(h) || Ee(h)) return ((s = s.get(E) || null), d(D, s, h, m, null))
        if (typeof h.then == 'function') return r(s, D, E, _a(h), m)
        if (h.$$typeof === ft) return r(s, D, E, Na(D, h), m)
        Ua(D, h)
      }
      return null
    }
    function g(s, D, E, h) {
      for (
        var m = null, z = null, F = D, S = (D = 0), au = null;
        F !== null && S < E.length;
        S++
      ) {
        F.index > S ? ((au = F), (F = null)) : (au = F.sibling)
        var _ = A(s, F, E[S], h)
        if (_ === null) {
          F === null && (F = au)
          break
        }
        ;(u && F && _.alternate === null && t(s, F),
          (D = n(_, D, S)),
          z === null ? (m = _) : (z.sibling = _),
          (z = _),
          (F = au))
      }
      if (S === E.length) return (l(s, F), H && $t(s, S), m)
      if (F === null) {
        for (; S < E.length; S++)
          ((F = y(s, E[S], h)),
            F !== null &&
              ((D = n(F, D, S)),
              z === null ? (m = F) : (z.sibling = F),
              (z = F)))
        return (H && $t(s, S), m)
      }
      for (F = e(F); S < E.length; S++)
        ((au = r(F, s, S, E[S], h)),
          au !== null &&
            (u &&
              au.alternate !== null &&
              F.delete(au.key === null ? S : au.key),
            (D = n(au, D, S)),
            z === null ? (m = au) : (z.sibling = au),
            (z = au)))
      return (
        u &&
          F.forEach(function (Ct) {
            return t(s, Ct)
          }),
        H && $t(s, S),
        m
      )
    }
    function C(s, D, E, h) {
      if (E == null) throw Error(v(151))
      for (
        var m = null, z = null, F = D, S = (D = 0), au = null, _ = E.next();
        F !== null && !_.done;
        S++, _ = E.next()
      ) {
        F.index > S ? ((au = F), (F = null)) : (au = F.sibling)
        var Ct = A(s, F, _.value, h)
        if (Ct === null) {
          F === null && (F = au)
          break
        }
        ;(u && F && Ct.alternate === null && t(s, F),
          (D = n(Ct, D, S)),
          z === null ? (m = Ct) : (z.sibling = Ct),
          (z = Ct),
          (F = au))
      }
      if (_.done) return (l(s, F), H && $t(s, S), m)
      if (F === null) {
        for (; !_.done; S++, _ = E.next())
          ((_ = y(s, _.value, h)),
            _ !== null &&
              ((D = n(_, D, S)),
              z === null ? (m = _) : (z.sibling = _),
              (z = _)))
        return (H && $t(s, S), m)
      }
      for (F = e(F); !_.done; S++, _ = E.next())
        ((_ = r(F, s, S, _.value, h)),
          _ !== null &&
            (u && _.alternate !== null && F.delete(_.key === null ? S : _.key),
            (D = n(_, D, S)),
            z === null ? (m = _) : (z.sibling = _),
            (z = _)))
      return (
        u &&
          F.forEach(function (f2) {
            return t(s, f2)
          }),
        H && $t(s, S),
        m
      )
    }
    function U(s, D, E, h) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === pl &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case Sa:
            u: {
              for (var m = E.key; D !== null; ) {
                if (D.key === m) {
                  if (((m = E.type), m === pl)) {
                    if (D.tag === 7) {
                      ;(l(s, D.sibling),
                        (h = a(D, E.props.children)),
                        (h.return = s),
                        (s = h))
                      break u
                    }
                  } else if (
                    D.elementType === m ||
                    (typeof m == 'object' &&
                      m !== null &&
                      m.$$typeof === pt &&
                      _D(m) === D.type)
                  ) {
                    ;(l(s, D.sibling),
                      (h = a(D, E.props)),
                      de(h, E),
                      (h.return = s),
                      (s = h))
                    break u
                  }
                  l(s, D)
                  break
                } else t(s, D)
                D = D.sibling
              }
              E.type === pl
                ? ((h = ul(E.props.children, s.mode, h, E.key)),
                  (h.return = s),
                  (s = h))
                : ((h = Va(E.type, E.key, E.props, null, s.mode, h)),
                  de(h, E),
                  (h.return = s),
                  (s = h))
            }
            return i(s)
          case Ce:
            u: {
              for (m = E.key; D !== null; ) {
                if (D.key === m)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === E.containerInfo &&
                    D.stateNode.implementation === E.implementation
                  ) {
                    ;(l(s, D.sibling),
                      (h = a(D, E.children || [])),
                      (h.return = s),
                      (s = h))
                    break u
                  } else {
                    l(s, D)
                    break
                  }
                else t(s, D)
                D = D.sibling
              }
              ;((h = bi(E, s.mode, h)), (h.return = s), (s = h))
            }
            return i(s)
          case pt:
            return ((m = E._init), (E = m(E._payload)), U(s, D, E, h))
        }
        if (Fe(E)) return g(s, D, E, h)
        if (Ee(E)) {
          if (((m = Ee(E)), typeof m != 'function')) throw Error(v(150))
          return ((E = m.call(E)), C(s, D, E, h))
        }
        if (typeof E.then == 'function') return U(s, D, _a(E), h)
        if (E.$$typeof === ft) return U(s, D, Na(s, E), h)
        Ua(s, E)
      }
      return (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
        ? ((E = '' + E),
          D !== null && D.tag === 6
            ? (l(s, D.sibling), (h = a(D, E)), (h.return = s), (s = h))
            : (l(s, D), (h = pi(E, s.mode, h)), (h.return = s), (s = h)),
          i(s))
        : l(s, D)
    }
    return function (s, D, E, h) {
      try {
        Ve = 0
        var m = U(s, D, E, h)
        return ((jl = null), m)
      } catch (F) {
        if (F === ca || F === qn) throw F
        var z = bu(29, F, null, s.mode)
        return ((z.lanes = h), (z.return = s), z)
      } finally {
      }
    }
  }
  var $l = Zo(!0),
    jo = Zo(!1),
    Xu = ut(null),
    Iu = null
  function zt(u) {
    var t = u.alternate
    ;(J(lu, lu.current & 1),
      J(Xu, u),
      Iu === null &&
        (t === null || Wl.current !== null || t.memoizedState !== null) &&
        (Iu = u))
  }
  function Vo(u) {
    if (u.tag === 22) {
      if ((J(lu, lu.current), J(Xu, u), Iu === null)) {
        var t = u.alternate
        t !== null && t.memoizedState !== null && (Iu = u)
      }
    } else Ot(u)
  }
  function Ot() {
    ;(J(lu, lu.current), J(Xu, Xu.current))
  }
  function Et(u) {
    ;(fu(Xu), Iu === u && (Iu = null), fu(lu))
  }
  var lu = ut(0)
  function An(u) {
    for (var t = u; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || Hc(l))
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;((t.child.return = t), (t = t.child))
        continue
      }
      if (t === u) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === u) return null
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
    return null
  }
  function Oi(u, t, l, e) {
    ;((t = u.memoizedState),
      (l = l(e, t)),
      (l = l == null ? t : j({}, t, l)),
      (u.memoizedState = l),
      u.lanes === 0 && (u.updateQueue.baseState = l))
  }
  var mc = {
    enqueueSetState: function (u, t, l) {
      u = u._reactInternals
      var e = Ou(),
        a = qt(e)
      ;((a.payload = t),
        l != null && (a.callback = l),
        (t = Yt(u, a, e)),
        t !== null && (Nu(t, u, e), Oe(t, u, e)))
    },
    enqueueReplaceState: function (u, t, l) {
      u = u._reactInternals
      var e = Ou(),
        a = qt(e)
      ;((a.tag = 1),
        (a.payload = t),
        l != null && (a.callback = l),
        (t = Yt(u, a, e)),
        t !== null && (Nu(t, u, e), Oe(t, u, e)))
    },
    enqueueForceUpdate: function (u, t) {
      u = u._reactInternals
      var l = Ou(),
        e = qt(l)
      ;((e.tag = 2),
        t != null && (e.callback = t),
        (t = Yt(u, e, l)),
        t !== null && (Nu(t, u, l), Oe(t, u, l)))
    }
  }
  function UD(u, t, l, e, a, n, i) {
    return (
      (u = u.stateNode),
      typeof u.shouldComponentUpdate == 'function'
        ? u.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qe(l, e) || !Qe(a, n)
          : !0
    )
  }
  function RD(u, t, l, e) {
    ;((u = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, e),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, e),
      t.state !== u && mc.enqueueReplaceState(t, t.state, null))
  }
  function Dl(u, t) {
    var l = t
    if ('ref' in t) {
      l = {}
      for (var e in t) e !== 'ref' && (l[e] = t[e])
    }
    if ((u = u.defaultProps)) {
      l === t && (l = j({}, l))
      for (var a in u) l[a] === void 0 && (l[a] = u[a])
    }
    return l
  }
  var dn =
    typeof reportError == 'function'
      ? reportError
      : function (u) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof u == 'object' &&
                u !== null &&
                typeof u.message == 'string'
                  ? String(u.message)
                  : String(u),
              error: u
            })
            if (!window.dispatchEvent(t)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', u)
            return
          }
          console.error(u)
        }
  function Lo(u) {
    dn(u)
  }
  function Ko(u) {
    console.error(u)
  }
  function Jo(u) {
    dn(u)
  }
  function yn(u, t) {
    try {
      var l = u.onUncaughtError
      l(t.value, {componentStack: t.stack})
    } catch (e) {
      setTimeout(function () {
        throw e
      })
    }
  }
  function HD(u, t, l) {
    try {
      var e = u.onCaughtError
      e(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function Cc(u, t, l) {
    return (
      (l = qt(l)),
      (l.tag = 3),
      (l.payload = {element: null}),
      (l.callback = function () {
        yn(u, t)
      }),
      l
    )
  }
  function wo(u) {
    return ((u = qt(u)), (u.tag = 3), u)
  }
  function Wo(u, t, l, e) {
    var a = l.type.getDerivedStateFromError
    if (typeof a == 'function') {
      var n = e.value
      ;((u.payload = function () {
        return a(n)
      }),
        (u.callback = function () {
          HD(t, l, e)
        }))
    }
    var i = l.stateNode
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (u.callback = function () {
        ;(HD(t, l, e),
          typeof a != 'function' &&
            (xt === null ? (xt = new Set([this])) : xt.add(this)))
        var c = e.stack
        this.componentDidCatch(e.value, {componentStack: c !== null ? c : ''})
      })
  }
  function Er(u, t, l, e, a) {
    if (
      ((l.flags |= 32768),
      e !== null && typeof e == 'object' && typeof e.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && na(t, l, a, !0),
        (l = Xu.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Iu === null ? zc() : l.alternate === null && k === 0 && (k = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              e === Ec
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([e])) : t.add(e),
                  Xi(u, e, a)),
              !1
            )
          case 22:
            return (
              (l.flags |= 65536),
              e === Ec
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e])
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([e])) : l.add(e)),
                  Xi(u, e, a)),
              !1
            )
        }
        throw Error(v(435, l.tag))
      }
      return (Xi(u, e, a), zc(), !1)
    }
    if (H)
      return (
        (t = Xu.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            e !== cc && ((u = Error(v(422), {cause: e})), Ze(xu(u, l))))
          : (e !== cc && ((t = Error(v(423), {cause: e})), Ze(xu(t, l))),
            (u = u.current.alternate),
            (u.flags |= 65536),
            (a &= -a),
            (u.lanes |= a),
            (e = xu(e, l)),
            (a = Cc(u.stateNode, e, a)),
            Ti(u, a),
            k !== 4 && (k = 2)),
        !1
      )
    var n = Error(v(520), {cause: e})
    if (
      ((n = xu(n, l)),
      He === null ? (He = [n]) : He.push(n),
      k !== 4 && (k = 2),
      t === null)
    )
      return !0
    ;((e = xu(e, l)), (l = t))
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (u = a & -a),
            (l.lanes |= u),
            (u = Cc(l.stateNode, e, u)),
            Ti(l, u),
            !1
          )
        case 1:
          if (
            ((t = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (n !== null &&
                  typeof n.componentDidCatch == 'function' &&
                  (xt === null || !xt.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (a &= -a),
              (l.lanes |= a),
              (a = wo(a)),
              Wo(a, u, l, e),
              Ti(l, a),
              !1
            )
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var ko = Error(v(461)),
    cu = !1
  function Du(u, t, l, e) {
    t.child = u === null ? jo(t, null, l, e) : $l(t, u.child, l, e)
  }
  function qD(u, t, l, e, a) {
    l = l.render
    var n = t.ref
    if ('ref' in e) {
      var i = {}
      for (var c in e) c !== 'ref' && (i[c] = e[c])
    } else i = e
    return (
      cl(t),
      (e = Df(u, t, l, i, n, a)),
      (c = of()),
      u !== null && !cu
        ? (sf(u, t, a), ht(u, t, a))
        : (H && c && tf(t), (t.flags |= 1), Du(u, t, e, a), t.child)
    )
  }
  function YD(u, t, l, e, a) {
    if (u === null) {
      var n = l.type
      return typeof n == 'function' &&
        !uf(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = n), $o(u, t, n, e, a))
        : ((u = Va(l.type, null, e, t, t.mode, a)),
          (u.ref = t.ref),
          (u.return = t),
          (t.child = u))
    }
    if (((n = u.child), !Cf(u, a))) {
      var i = n.memoizedProps
      if (
        ((l = l.compare), (l = l !== null ? l : Qe), l(i, e) && u.ref === t.ref)
      )
        return ht(u, t, a)
    }
    return (
      (t.flags |= 1),
      (u = rt(n, e)),
      (u.ref = t.ref),
      (u.return = t),
      (t.child = u)
    )
  }
  function $o(u, t, l, e, a) {
    if (u !== null) {
      var n = u.memoizedProps
      if (Qe(n, e) && u.ref === t.ref)
        if (((cu = !1), (t.pendingProps = e = n), Cf(u, a)))
          (u.flags & 131072) !== 0 && (cu = !0)
        else return ((t.lanes = u.lanes), ht(u, t, a))
    }
    return Fc(u, t, l, e, a)
  }
  function Po(u, t, l) {
    var e = t.pendingProps,
      a = e.children,
      n = u !== null ? u.memoizedState : null
    if (e.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | l : l), u !== null)) {
          for (a = t.child = u.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling))
          t.childLanes = n & ~e
        } else ((t.childLanes = 0), (t.child = null))
        return xD(u, t, e, l)
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = {baseLanes: 0, cachePool: null}),
          u !== null && La(t, n !== null ? n.cachePool : null),
          n !== null ? pD(t, n) : dc(),
          Vo(t))
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          xD(u, t, n !== null ? n.baseLanes | l : l, l)
        )
    } else
      n !== null
        ? (La(t, n.cachePool), pD(t, n), Ot(t), (t.memoizedState = null))
        : (u !== null && La(t, null), dc(), Ot(t))
    return (Du(u, t, a, l), t.child)
  }
  function xD(u, t, l, e) {
    var a = af()
    return (
      (a = a === null ? null : {parent: tu._currentValue, pool: a}),
      (t.memoizedState = {baseLanes: l, cachePool: a}),
      u !== null && La(t, null),
      dc(),
      Vo(t),
      u !== null && na(u, t, e, !0),
      null
    )
  }
  function wa(u, t) {
    var l = t.ref
    if (l === null) u !== null && u.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(v(284))
      ;(u === null || u.ref !== l) && (t.flags |= 4194816)
    }
  }
  function Fc(u, t, l, e, a) {
    return (
      cl(t),
      (l = Df(u, t, l, e, void 0, a)),
      (e = of()),
      u !== null && !cu
        ? (sf(u, t, a), ht(u, t, a))
        : (H && e && tf(t), (t.flags |= 1), Du(u, t, l, a), t.child)
    )
  }
  function GD(u, t, l, e, a, n) {
    return (
      cl(t),
      (t.updateQueue = null),
      (l = oo(t, e, l, a)),
      Do(u),
      (e = of()),
      u !== null && !cu
        ? (sf(u, t, n), ht(u, t, n))
        : (H && e && tf(t), (t.flags |= 1), Du(u, t, l, n), t.child)
    )
  }
  function XD(u, t, l, e, a) {
    if ((cl(t), t.stateNode === null)) {
      var n = Ul,
        i = l.contextType
      ;(typeof i == 'object' && i !== null && (n = Au(i)),
        (n = new l(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = mc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        nf(t),
        (i = l.contextType),
        (n.context = typeof i == 'object' && i !== null ? Au(i) : Ul),
        (n.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (Oi(t, l, i, e), (n.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function' ||
          (typeof n.UNSAFE_componentWillMount != 'function' &&
            typeof n.componentWillMount != 'function') ||
          ((i = n.state),
          typeof n.componentWillMount == 'function' && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == 'function' &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && mc.enqueueReplaceState(n, n.state, null),
          Me(t, e, n, a),
          Ne(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
        (e = !0))
    } else if (u === null) {
      n = t.stateNode
      var c = t.memoizedProps,
        f = Dl(l, c)
      n.props = f
      var o = n.context,
        d = l.contextType
      ;((i = Ul), typeof d == 'object' && d !== null && (i = Au(d)))
      var y = l.getDerivedStateFromProps
      ;((d =
        typeof y == 'function' ||
        typeof n.getSnapshotBeforeUpdate == 'function'),
        (c = t.pendingProps !== c),
        d ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((c || o !== i) && RD(t, n, e, i)),
        (bt = !1))
      var A = t.memoizedState
      ;((n.state = A),
        Me(t, e, n, a),
        Ne(),
        (o = t.memoizedState),
        c || A !== o || bt
          ? (typeof y == 'function' && (Oi(t, l, y, e), (o = t.memoizedState)),
            (f = bt || UD(t, l, f, e, A, o, i))
              ? (d ||
                  (typeof n.UNSAFE_componentWillMount != 'function' &&
                    typeof n.componentWillMount != 'function') ||
                  (typeof n.componentWillMount == 'function' &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == 'function' &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = o)),
            (n.props = e),
            (n.state = o),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
            (e = !1)))
    } else {
      ;((n = t.stateNode),
        rc(u, t),
        (i = t.memoizedProps),
        (d = Dl(l, i)),
        (n.props = d),
        (y = t.pendingProps),
        (A = n.context),
        (o = l.contextType),
        (f = Ul),
        typeof o == 'object' && o !== null && (f = Au(o)),
        (c = l.getDerivedStateFromProps),
        (o =
          typeof c == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function') ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((i !== y || A !== f) && RD(t, n, e, f)),
        (bt = !1),
        (A = t.memoizedState),
        (n.state = A),
        Me(t, e, n, a),
        Ne())
      var r = t.memoizedState
      i !== y ||
      A !== r ||
      bt ||
      (u !== null && u.dependencies !== null && Dn(u.dependencies))
        ? (typeof c == 'function' && (Oi(t, l, c, e), (r = t.memoizedState)),
          (d =
            bt ||
            UD(t, l, d, e, A, r, f) ||
            (u !== null && u.dependencies !== null && Dn(u.dependencies)))
            ? (o ||
                (typeof n.UNSAFE_componentWillUpdate != 'function' &&
                  typeof n.componentWillUpdate != 'function') ||
                (typeof n.componentWillUpdate == 'function' &&
                  n.componentWillUpdate(e, r, f),
                typeof n.UNSAFE_componentWillUpdate == 'function' &&
                  n.UNSAFE_componentWillUpdate(e, r, f)),
              typeof n.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != 'function' ||
                (i === u.memoizedProps && A === u.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != 'function' ||
                (i === u.memoizedProps && A === u.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = r)),
          (n.props = e),
          (n.state = r),
          (n.context = f),
          (e = d))
        : (typeof n.componentDidUpdate != 'function' ||
            (i === u.memoizedProps && A === u.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != 'function' ||
            (i === u.memoizedProps && A === u.memoizedState) ||
            (t.flags |= 1024),
          (e = !1))
    }
    return (
      (n = e),
      wa(u, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (l =
            e && typeof l.getDerivedStateFromError != 'function'
              ? null
              : n.render()),
          (t.flags |= 1),
          u !== null && e
            ? ((t.child = $l(t, u.child, null, a)),
              (t.child = $l(t, null, l, a)))
            : Du(u, t, l, a),
          (t.memoizedState = n.state),
          (u = t.child))
        : (u = ht(u, t, a)),
      u
    )
  }
  function QD(u, t, l, e) {
    return (aa(), (t.flags |= 256), Du(u, t, l, e), t.child)
  }
  var Ni = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  }
  function Mi(u) {
    return {baseLanes: u, cachePool: ao()}
  }
  function _i(u, t, l) {
    return ((u = u !== null ? u.childLanes & ~l : 0), t && (u |= Gu), u)
  }
  function Io(u, t, l) {
    var e = t.pendingProps,
      a = !1,
      n = (t.flags & 128) !== 0,
      i
    if (
      ((i = n) ||
        (i =
          u !== null && u.memoizedState === null ? !1 : (lu.current & 2) !== 0),
      i && ((a = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      u === null)
    ) {
      if (H) {
        if ((a ? zt(t) : Ot(t), H)) {
          var c = W,
            f
          if ((f = c)) {
            u: {
              for (f = c, c = Wu; f.nodeType !== 8; ) {
                if (!c) {
                  c = null
                  break u
                }
                if (((f = ju(f.nextSibling)), f === null)) {
                  c = null
                  break u
                }
              }
              c = f
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: tl !== null ? {id: Dt, overflow: ot} : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (f = bu(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = t),
                (t.child = f),
                (hu = t),
                (W = null),
                (f = !0))
              : (f = !1)
          }
          f || il(t)
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return (Hc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null)
        Et(t)
      }
      return (
        (c = e.children),
        (e = e.fallback),
        a
          ? (Ot(t),
            (a = t.mode),
            (c = hn({mode: 'hidden', children: c}, a)),
            (e = ul(e, a, l, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = Mi(l)),
            (a.childLanes = _i(u, i, l)),
            (t.memoizedState = Ni),
            e)
          : (zt(t), gc(t, c))
      )
    }
    if (
      ((f = u.memoizedState), f !== null && ((c = f.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? (zt(t), (t.flags &= -257), (t = Ui(u, t, l)))
          : t.memoizedState !== null
            ? (Ot(t), (t.child = u.child), (t.flags |= 128), (t = null))
            : (Ot(t),
              (a = e.fallback),
              (c = t.mode),
              (e = hn({mode: 'visible', children: e.children}, c)),
              (a = ul(a, c, l, null)),
              (a.flags |= 2),
              (e.return = t),
              (a.return = t),
              (e.sibling = a),
              (t.child = e),
              $l(t, u.child, null, l),
              (e = t.child),
              (e.memoizedState = Mi(l)),
              (e.childLanes = _i(u, i, l)),
              (t.memoizedState = Ni),
              (t = a))
      else if ((zt(t), Hc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var o = i.dgst
        ;((i = o),
          (e = Error(v(419))),
          (e.stack = ''),
          (e.digest = i),
          Ze({value: e, source: null, stack: null}),
          (t = Ui(u, t, l)))
      } else if (
        (cu || na(u, t, l, !1), (i = (l & u.childLanes) !== 0), cu || i)
      ) {
        if (
          ((i = Z),
          i !== null &&
            ((e = l & -l),
            (e = (e & 42) !== 0 ? 1 : jc(e)),
            (e = (e & (i.suspendedLanes | l)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ae(u, e), Nu(i, u, e), ko)
        ;(c.data === '$?' || zc(), (t = Ui(u, t, l)))
      } else
        c.data === '$?'
          ? ((t.flags |= 192), (t.child = u.child), (t = null))
          : ((u = f.treeContext),
            (W = ju(c.nextSibling)),
            (hu = t),
            (H = !0),
            (ll = null),
            (Wu = !1),
            u !== null &&
              ((Hu[qu++] = Dt),
              (Hu[qu++] = ot),
              (Hu[qu++] = tl),
              (Dt = u.id),
              (ot = u.overflow),
              (tl = t)),
            (t = gc(t, e.children)),
            (t.flags |= 4096))
      return t
    }
    return a
      ? (Ot(t),
        (a = e.fallback),
        (c = t.mode),
        (f = u.child),
        (o = f.sibling),
        (e = rt(f, {mode: 'hidden', children: e.children})),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        o !== null ? (a = rt(o, a)) : ((a = ul(a, c, l, null)), (a.flags |= 2)),
        (a.return = t),
        (e.return = t),
        (e.sibling = a),
        (t.child = e),
        (e = a),
        (a = t.child),
        (c = u.child.memoizedState),
        c === null
          ? (c = Mi(l))
          : ((f = c.cachePool),
            f !== null
              ? ((o = tu._currentValue),
                (f = f.parent !== o ? {parent: o, pool: o} : f))
              : (f = ao()),
            (c = {baseLanes: c.baseLanes | l, cachePool: f})),
        (a.memoizedState = c),
        (a.childLanes = _i(u, i, l)),
        (t.memoizedState = Ni),
        e)
      : (zt(t),
        (l = u.child),
        (u = l.sibling),
        (l = rt(l, {mode: 'visible', children: e.children})),
        (l.return = t),
        (l.sibling = null),
        u !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [u]), (t.flags |= 16)) : i.push(u)),
        (t.child = l),
        (t.memoizedState = null),
        l)
  }
  function gc(u, t) {
    return (
      (t = hn({mode: 'visible', children: t}, u.mode)),
      (t.return = u),
      (u.child = t)
    )
  }
  function hn(u, t) {
    return (
      (u = bu(22, u, null, t)),
      (u.lanes = 0),
      (u.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }),
      u
    )
  }
  function Ui(u, t, l) {
    return (
      $l(t, u.child, null, l),
      (u = gc(t, t.pendingProps.children)),
      (u.flags |= 2),
      (t.memoizedState = null),
      u
    )
  }
  function ZD(u, t, l) {
    u.lanes |= t
    var e = u.alternate
    ;(e !== null && (e.lanes |= t), Dc(u.return, t, l))
  }
  function Ri(u, t, l, e, a) {
    var n = u.memoizedState
    n === null
      ? (u.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: l,
          tailMode: a
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = l),
        (n.tailMode = a))
  }
  function us(u, t, l) {
    var e = t.pendingProps,
      a = e.revealOrder,
      n = e.tail
    if ((Du(u, t, e.children, l), (e = lu.current), (e & 2) !== 0))
      ((e = (e & 1) | 2), (t.flags |= 128))
    else {
      if (u !== null && (u.flags & 128) !== 0)
        u: for (u = t.child; u !== null; ) {
          if (u.tag === 13) u.memoizedState !== null && ZD(u, l, t)
          else if (u.tag === 19) ZD(u, l, t)
          else if (u.child !== null) {
            ;((u.child.return = u), (u = u.child))
            continue
          }
          if (u === t) break u
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === t) break u
            u = u.return
          }
          ;((u.sibling.return = u.return), (u = u.sibling))
        }
      e &= 1
    }
    switch ((J(lu, e), a)) {
      case 'forwards':
        for (l = t.child, a = null; l !== null; )
          ((u = l.alternate),
            u !== null && An(u) === null && (a = l),
            (l = l.sibling))
        ;((l = a),
          l === null
            ? ((a = t.child), (t.child = null))
            : ((a = l.sibling), (l.sibling = null)),
          Ri(t, !1, a, l, n))
        break
      case 'backwards':
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (((u = a.alternate), u !== null && An(u) === null)) {
            t.child = a
            break
          }
          ;((u = a.sibling), (a.sibling = l), (l = a), (a = u))
        }
        Ri(t, !0, l, null, n)
        break
      case 'together':
        Ri(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function ht(u, t, l) {
    if (
      (u !== null && (t.dependencies = u.dependencies),
      (Lt |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (u !== null) {
        if ((na(u, t, l, !1), (l & t.childLanes) === 0)) return null
      } else return null
    if (u !== null && t.child !== u.child) throw Error(v(153))
    if (t.child !== null) {
      for (
        u = t.child, l = rt(u, u.pendingProps), t.child = l, l.return = t;
        u.sibling !== null;

      )
        ((u = u.sibling),
          (l = l.sibling = rt(u, u.pendingProps)),
          (l.return = t))
      l.sibling = null
    }
    return t.child
  }
  function Cf(u, t) {
    return (u.lanes & t) !== 0
      ? !0
      : ((u = u.dependencies), !!(u !== null && Dn(u)))
  }
  function rr(u, t, l) {
    switch (t.tag) {
      case 3:
        ;(un(t, t.stateNode.containerInfo),
          Tt(t, tu, u.memoizedState.cache),
          aa())
        break
      case 27:
      case 5:
        $i(t)
        break
      case 4:
        un(t, t.stateNode.containerInfo)
        break
      case 10:
        Tt(t, t.type, t.memoizedProps.value)
        break
      case 13:
        var e = t.memoizedState
        if (e !== null)
          return e.dehydrated !== null
            ? (zt(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Io(u, t, l)
              : (zt(t), (u = ht(u, t, l)), u !== null ? u.sibling : null)
        zt(t)
        break
      case 19:
        var a = (u.flags & 128) !== 0
        if (
          ((e = (l & t.childLanes) !== 0),
          e || (na(u, t, l, !1), (e = (l & t.childLanes) !== 0)),
          a)
        ) {
          if (e) return us(u, t, l)
          t.flags |= 128
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          J(lu, lu.current),
          e)
        )
          break
        return null
      case 22:
      case 23:
        return ((t.lanes = 0), Po(u, t, l))
      case 24:
        Tt(t, tu, u.memoizedState.cache)
    }
    return ht(u, t, l)
  }
  function ts(u, t, l) {
    if (u !== null)
      if (u.memoizedProps !== t.pendingProps) cu = !0
      else {
        if (!Cf(u, l) && (t.flags & 128) === 0) return ((cu = !1), rr(u, t, l))
        cu = (u.flags & 131072) !== 0
      }
    else ((cu = !1), H && (t.flags & 1048576) !== 0 && lo(t, fn, t.index))
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        u: {
          u = t.pendingProps
          var e = t.elementType,
            a = e._init
          if (((e = a(e._payload)), (t.type = e), typeof e == 'function'))
            uf(e)
              ? ((u = Dl(e, u)), (t.tag = 1), (t = XD(null, t, e, u, l)))
              : ((t.tag = 0), (t = Fc(null, t, e, u, l)))
          else {
            if (e != null) {
              if (((a = e.$$typeof), a === Xc)) {
                ;((t.tag = 11), (t = qD(null, t, e, u, l)))
                break u
              } else if (a === Qc) {
                ;((t.tag = 14), (t = YD(null, t, e, u, l)))
                break u
              }
            }
            throw ((t = Wi(e) || e), Error(v(306, t, '')))
          }
        }
        return t
      case 0:
        return Fc(u, t, t.type, t.pendingProps, l)
      case 1:
        return ((e = t.type), (a = Dl(e, t.pendingProps)), XD(u, t, e, a, l))
      case 3:
        u: {
          if ((un(t, t.stateNode.containerInfo), u === null))
            throw Error(v(387))
          e = t.pendingProps
          var n = t.memoizedState
          ;((a = n.element), rc(u, t), Me(t, e, null, l))
          var i = t.memoizedState
          if (
            ((e = i.cache),
            Tt(t, tu, e),
            e !== n.cache && oc(t, [tu], l, !0),
            Ne(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = {element: e, isDehydrated: !1, cache: i.cache}),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = QD(u, t, e, l)
              break u
            } else if (e !== a) {
              ;((a = xu(Error(v(424)), t)), Ze(a), (t = QD(u, t, e, l)))
              break u
            } else {
              switch (((u = t.stateNode.containerInfo), u.nodeType)) {
                case 9:
                  u = u.body
                  break
                default:
                  u = u.nodeName === 'HTML' ? u.ownerDocument.body : u
              }
              for (
                W = ju(u.firstChild),
                  hu = t,
                  H = !0,
                  ll = null,
                  Wu = !0,
                  l = jo(t, null, e, l),
                  t.child = l;
                l;

              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling))
            }
          else {
            if ((aa(), e === a)) {
              t = ht(u, t, l)
              break u
            }
            Du(u, t, e, l)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          wa(u, t),
          u === null
            ? (l = c1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : H ||
                ((l = t.type),
                (u = t.pendingProps),
                (e = Bn(Ht.current).createElement(l)),
                (e[ru] = t),
                (e[Fu] = u),
                su(e, l, u),
                iu(e),
                (t.stateNode = e))
            : (t.memoizedState = c1(
                t.type,
                u.memoizedProps,
                t.pendingProps,
                u.memoizedState
              )),
          null
        )
      case 27:
        return (
          $i(t),
          u === null &&
            H &&
            ((e = t.stateNode = Qs(t.type, t.pendingProps, Ht.current)),
            (hu = t),
            (Wu = !0),
            (a = W),
            Jt(t.type) ? ((qc = a), (W = ju(e.firstChild))) : (W = a)),
          Du(u, t, t.pendingProps.children, l),
          wa(u, t),
          u === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          u === null &&
            H &&
            ((a = e = W) &&
              ((e = Gr(e, t.type, t.pendingProps, Wu)),
              e !== null
                ? ((t.stateNode = e),
                  (hu = t),
                  (W = ju(e.firstChild)),
                  (Wu = !1),
                  (a = !0))
                : (a = !1)),
            a || il(t)),
          $i(t),
          (a = t.type),
          (n = t.pendingProps),
          (i = u !== null ? u.memoizedProps : null),
          (e = n.children),
          Uc(a, n) ? (e = null) : i !== null && Uc(a, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((a = Df(u, t, nr, null, null, l)), (we._currentValue = a)),
          wa(u, t),
          Du(u, t, e, l),
          t.child
        )
      case 6:
        return (
          u === null &&
            H &&
            ((u = l = W) &&
              ((l = Xr(l, t.pendingProps, Wu)),
              l !== null
                ? ((t.stateNode = l), (hu = t), (W = null), (u = !0))
                : (u = !1)),
            u || il(t)),
          null
        )
      case 13:
        return Io(u, t, l)
      case 4:
        return (
          un(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          u === null ? (t.child = $l(t, null, e, l)) : Du(u, t, e, l),
          t.child
        )
      case 11:
        return qD(u, t, t.type, t.pendingProps, l)
      case 7:
        return (Du(u, t, t.pendingProps, l), t.child)
      case 8:
        return (Du(u, t, t.pendingProps.children, l), t.child)
      case 12:
        return (Du(u, t, t.pendingProps.children, l), t.child)
      case 10:
        return (
          (e = t.pendingProps),
          Tt(t, t.type, e.value),
          Du(u, t, e.children, l),
          t.child
        )
      case 9:
        return (
          (a = t.type._context),
          (e = t.pendingProps.children),
          cl(t),
          (a = Au(a)),
          (e = e(a)),
          (t.flags |= 1),
          Du(u, t, e, l),
          t.child
        )
      case 14:
        return YD(u, t, t.type, t.pendingProps, l)
      case 15:
        return $o(u, t, t.type, t.pendingProps, l)
      case 19:
        return us(u, t, l)
      case 31:
        return (
          (e = t.pendingProps),
          (l = t.mode),
          (e = {mode: e.mode, children: e.children}),
          u === null
            ? ((l = hn(e, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = rt(u.child, e)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        )
      case 22:
        return Po(u, t, l)
      case 24:
        return (
          cl(t),
          (e = Au(tu)),
          u === null
            ? ((a = af()),
              a === null &&
                ((a = Z),
                (n = ef()),
                (a.pooledCache = n),
                n.refCount++,
                n !== null && (a.pooledCacheLanes |= l),
                (a = n)),
              (t.memoizedState = {parent: e, cache: a}),
              nf(t),
              Tt(t, tu, a))
            : ((u.lanes & l) !== 0 && (rc(u, t), Me(t, null, null, l), Ne()),
              (a = u.memoizedState),
              (n = t.memoizedState),
              a.parent !== e
                ? ((a = {parent: e, cache: e}),
                  (t.memoizedState = a),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = a),
                  Tt(t, tu, e))
                : ((e = n.cache),
                  Tt(t, tu, e),
                  e !== a.cache && oc(t, [tu], l, !0))),
          Du(u, t, t.pendingProps.children, l),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(v(156, t.tag))
  }
  function nt(u) {
    u.flags |= 4
  }
  function jD(u, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      u.flags &= -16777217
    else if (((u.flags |= 16777216), !Vs(t))) {
      if (
        ((t = Xu.current),
        t !== null &&
          ((M & 4194048) === M
            ? Iu !== null
            : ((M & 62914560) !== M && (M & 536870912) === 0) || t !== Iu))
      )
        throw ((ze = Ec), no)
      u.flags |= 8192
    }
  }
  function Ra(u, t) {
    ;(t !== null && (u.flags |= 4),
      u.flags & 16384 &&
        ((t = u.tag !== 22 ? b1() : 536870912), (u.lanes |= t), (Pl |= t)))
  }
  function ye(u, t) {
    if (!H)
      switch (u.tailMode) {
        case 'hidden':
          t = u.tail
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling))
          l === null ? (u.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = u.tail
          for (var e = null; l !== null; )
            (l.alternate !== null && (e = l), (l = l.sibling))
          e === null
            ? t || u.tail === null
              ? (u.tail = null)
              : (u.tail.sibling = null)
            : (e.sibling = null)
      }
  }
  function w(u) {
    var t = u.alternate !== null && u.alternate.child === u.child,
      l = 0,
      e = 0
    if (t)
      for (var a = u.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (e |= a.subtreeFlags & 65011712),
          (e |= a.flags & 65011712),
          (a.return = u),
          (a = a.sibling))
    else
      for (a = u.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (e |= a.subtreeFlags),
          (e |= a.flags),
          (a.return = u),
          (a = a.sibling))
    return ((u.subtreeFlags |= e), (u.childLanes = l), t)
  }
  function Ar(u, t, l) {
    var e = t.pendingProps
    switch ((lf(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (w(t), null)
      case 1:
        return (w(t), null)
      case 3:
        return (
          (l = t.stateNode),
          (e = null),
          u !== null && (e = u.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          At(tu),
          Ll(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (u === null || u.child === null) &&
            (Ae(t)
              ? nt(t)
              : u === null ||
                (u.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), mD())),
          w(t),
          null
        )
      case 26:
        return (
          (l = t.memoizedState),
          u === null
            ? (nt(t),
              l !== null ? (w(t), jD(t, l)) : (w(t), (t.flags &= -16777217)))
            : l
              ? l !== u.memoizedState
                ? (nt(t), w(t), jD(t, l))
                : (w(t), (t.flags &= -16777217))
              : (u.memoizedProps !== e && nt(t), w(t), (t.flags &= -16777217)),
          null
        )
      case 27:
        ;(tn(t), (l = Ht.current))
        var a = t.type
        if (u !== null && t.stateNode != null) u.memoizedProps !== e && nt(t)
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166))
            return (w(t), null)
          }
          ;((u = $u.current),
            Ae(t) ? hD(t, u) : ((u = Qs(a, e, l)), (t.stateNode = u), nt(t)))
        }
        return (w(t), null)
      case 5:
        if ((tn(t), (l = t.type), u !== null && t.stateNode != null))
          u.memoizedProps !== e && nt(t)
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166))
            return (w(t), null)
          }
          if (((u = $u.current), Ae(t))) hD(t, u)
          else {
            switch (((a = Bn(Ht.current)), u)) {
              case 1:
                u = a.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                u = a.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    u = a.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    u = a.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l
                    )
                    break
                  case 'script':
                    ;((u = a.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)))
                    break
                  case 'select':
                    ;((u =
                      typeof e.is == 'string'
                        ? a.createElement('select', {is: e.is})
                        : a.createElement('select')),
                      e.multiple
                        ? (u.multiple = !0)
                        : e.size && (u.size = e.size))
                    break
                  default:
                    u =
                      typeof e.is == 'string'
                        ? a.createElement(l, {is: e.is})
                        : a.createElement(l)
                }
            }
            ;((u[ru] = t), (u[Fu] = e))
            u: for (a = t.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) u.appendChild(a.stateNode)
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                ;((a.child.return = a), (a = a.child))
                continue
              }
              if (a === t) break u
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === t) break u
                a = a.return
              }
              ;((a.sibling.return = a.return), (a = a.sibling))
            }
            t.stateNode = u
            u: switch ((su(u, l, e), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                u = !!e.autoFocus
                break u
              case 'img':
                u = !0
                break u
              default:
                u = !1
            }
            u && nt(t)
          }
        }
        return (w(t), (t.flags &= -16777217), null)
      case 6:
        if (u && t.stateNode != null) u.memoizedProps !== e && nt(t)
        else {
          if (typeof e != 'string' && t.stateNode === null) throw Error(v(166))
          if (((u = Ht.current), Ae(t))) {
            if (
              ((u = t.stateNode),
              (l = t.memoizedProps),
              (e = null),
              (a = hu),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  e = a.memoizedProps
              }
            ;((u[ru] = t),
              (u = !!(
                u.nodeValue === l ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                xs(u.nodeValue, l)
              )),
              u || il(t))
          } else ((u = Bn(u).createTextNode(e)), (u[ru] = t), (t.stateNode = u))
        }
        return (w(t), null)
      case 13:
        if (
          ((e = t.memoizedState),
          u === null ||
            (u.memoizedState !== null && u.memoizedState.dehydrated !== null))
        ) {
          if (((a = Ae(t)), e !== null && e.dehydrated !== null)) {
            if (u === null) {
              if (!a) throw Error(v(318))
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(v(317))
              a[ru] = t
            } else
              (aa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4))
            ;(w(t), (a = !1))
          } else
            ((a = mD()),
              u !== null &&
                u.memoizedState !== null &&
                (u.memoizedState.hydrationErrors = a),
              (a = !0))
          if (!a) return t.flags & 256 ? (Et(t), t) : (Et(t), null)
        }
        if ((Et(t), (t.flags & 128) !== 0)) return ((t.lanes = l), t)
        if (
          ((l = e !== null), (u = u !== null && u.memoizedState !== null), l)
        ) {
          ;((e = t.child),
            (a = null),
            e.alternate !== null &&
              e.alternate.memoizedState !== null &&
              e.alternate.memoizedState.cachePool !== null &&
              (a = e.alternate.memoizedState.cachePool.pool))
          var n = null
          ;(e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
            n !== a && (e.flags |= 2048))
        }
        return (
          l !== u && l && (t.child.flags |= 8192),
          Ra(t, t.updateQueue),
          w(t),
          null
        )
      case 4:
        return (Ll(), u === null && zf(t.stateNode.containerInfo), w(t), null)
      case 10:
        return (At(t.type), w(t), null)
      case 19:
        if ((fu(lu), (a = t.memoizedState), a === null)) return (w(t), null)
        if (((e = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (e) ye(a, !1)
          else {
            if (k !== 0 || (u !== null && (u.flags & 128) !== 0))
              for (u = t.child; u !== null; ) {
                if (((n = An(u)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ye(a, !1),
                      u = n.updateQueue,
                      t.updateQueue = u,
                      Ra(t, u),
                      t.subtreeFlags = 0,
                      u = l,
                      l = t.child;
                    l !== null;

                  )
                    (to(l, u), (l = l.sibling))
                  return (J(lu, (lu.current & 1) | 2), t.child)
                }
                u = u.sibling
              }
            a.tail !== null &&
              Pu() > mn &&
              ((t.flags |= 128), (e = !0), ye(a, !1), (t.lanes = 4194304))
          }
        else {
          if (!e)
            if (((u = An(n)), u !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (u = u.updateQueue),
                (t.updateQueue = u),
                Ra(t, u),
                ye(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !n.alternate &&
                  !H)
              )
                return (w(t), null)
            } else
              2 * Pu() - a.renderingStartTime > mn &&
                l !== 536870912 &&
                ((t.flags |= 128), (e = !0), ye(a, !1), (t.lanes = 4194304))
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((u = a.last),
              u !== null ? (u.sibling = n) : (t.child = n),
              (a.last = n))
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Pu()),
            (t.sibling = null),
            (u = lu.current),
            J(lu, e ? (u & 1) | 2 : u & 1),
            t)
          : (w(t), null)
      case 22:
      case 23:
        return (
          Et(t),
          cf(),
          (e = t.memoizedState !== null),
          u !== null
            ? (u.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (w(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : w(t),
          (l = t.updateQueue),
          l !== null && Ra(t, l.retryQueue),
          (l = null),
          u !== null &&
            u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (l = u.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== l && (t.flags |= 2048),
          u !== null && fu(el),
          null
        )
      case 24:
        return (
          (l = null),
          u !== null && (l = u.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          At(tu),
          w(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(v(156, t.tag))
  }
  function dr(u, t) {
    switch ((lf(t), t.tag)) {
      case 1:
        return (
          (u = t.flags),
          u & 65536 ? ((t.flags = (u & -65537) | 128), t) : null
        )
      case 3:
        return (
          At(tu),
          Ll(),
          (u = t.flags),
          (u & 65536) !== 0 && (u & 128) === 0
            ? ((t.flags = (u & -65537) | 128), t)
            : null
        )
      case 26:
      case 27:
      case 5:
        return (tn(t), null)
      case 13:
        if (
          (Et(t), (u = t.memoizedState), u !== null && u.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340))
          aa()
        }
        return (
          (u = t.flags),
          u & 65536 ? ((t.flags = (u & -65537) | 128), t) : null
        )
      case 19:
        return (fu(lu), null)
      case 4:
        return (Ll(), null)
      case 10:
        return (At(t.type), null)
      case 22:
      case 23:
        return (
          Et(t),
          cf(),
          u !== null && fu(el),
          (u = t.flags),
          u & 65536 ? ((t.flags = (u & -65537) | 128), t) : null
        )
      case 24:
        return (At(tu), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function ls(u, t) {
    switch ((lf(t), t.tag)) {
      case 3:
        ;(At(tu), Ll())
        break
      case 26:
      case 27:
      case 5:
        tn(t)
        break
      case 4:
        Ll()
        break
      case 13:
        Et(t)
        break
      case 19:
        fu(lu)
        break
      case 10:
        At(t.type)
        break
      case 22:
      case 23:
        ;(Et(t), cf(), u !== null && fu(el))
        break
      case 24:
        At(tu)
    }
  }
  function oa(u, t) {
    try {
      var l = t.updateQueue,
        e = l !== null ? l.lastEffect : null
      if (e !== null) {
        var a = e.next
        l = a
        do {
          if ((l.tag & u) === u) {
            e = void 0
            var n = l.create,
              i = l.inst
            ;((e = n()), (i.destroy = e))
          }
          l = l.next
        } while (l !== a)
      }
    } catch (c) {
      Q(t, t.return, c)
    }
  }
  function Vt(u, t, l) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null
      if (a !== null) {
        var n = a.next
        e = n
        do {
          if ((e.tag & u) === u) {
            var i = e.inst,
              c = i.destroy
            if (c !== void 0) {
              ;((i.destroy = void 0), (a = t))
              var f = l,
                o = c
              try {
                o()
              } catch (d) {
                Q(a, f, d)
              }
            }
          }
          e = e.next
        } while (e !== n)
      }
    } catch (d) {
      Q(t, t.return, d)
    }
  }
  function es(u) {
    var t = u.updateQueue
    if (t !== null) {
      var l = u.stateNode
      try {
        fo(t, l)
      } catch (e) {
        Q(u, u.return, e)
      }
    }
  }
  function as(u, t, l) {
    ;((l.props = Dl(u.type, u.memoizedProps)), (l.state = u.memoizedState))
    try {
      l.componentWillUnmount()
    } catch (e) {
      Q(u, t, e)
    }
  }
  function Ue(u, t) {
    try {
      var l = u.ref
      if (l !== null) {
        switch (u.tag) {
          case 26:
          case 27:
          case 5:
            var e = u.stateNode
            break
          case 30:
            e = u.stateNode
            break
          default:
            e = u.stateNode
        }
        typeof l == 'function' ? (u.refCleanup = l(e)) : (l.current = e)
      }
    } catch (a) {
      Q(u, t, a)
    }
  }
  function ku(u, t) {
    var l = u.ref,
      e = u.refCleanup
    if (l !== null)
      if (typeof e == 'function')
        try {
          e()
        } catch (a) {
          Q(u, t, a)
        } finally {
          ;((u.refCleanup = null),
            (u = u.alternate),
            u != null && (u.refCleanup = null))
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (a) {
          Q(u, t, a)
        }
      else l.current = null
  }
  function ns(u) {
    var t = u.type,
      l = u.memoizedProps,
      e = u.stateNode
    try {
      u: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && e.focus()
          break u
        case 'img':
          l.src ? (e.src = l.src) : l.srcSet && (e.srcset = l.srcSet)
      }
    } catch (a) {
      Q(u, u.return, a)
    }
  }
  function Hi(u, t, l) {
    try {
      var e = u.stateNode
      ;(Rr(e, u.type, l, t), (e[Fu] = t))
    } catch (a) {
      Q(u, u.return, a)
    }
  }
  function is(u) {
    return (
      u.tag === 5 ||
      u.tag === 3 ||
      u.tag === 26 ||
      (u.tag === 27 && Jt(u.type)) ||
      u.tag === 4
    )
  }
  function qi(u) {
    u: for (;;) {
      for (; u.sibling === null; ) {
        if (u.return === null || is(u.return)) return null
        u = u.return
      }
      for (
        u.sibling.return = u.return, u = u.sibling;
        u.tag !== 5 && u.tag !== 6 && u.tag !== 18;

      ) {
        if (
          (u.tag === 27 && Jt(u.type)) ||
          u.flags & 2 ||
          u.child === null ||
          u.tag === 4
        )
          continue u
        ;((u.child.return = u), (u = u.child))
      }
      if (!(u.flags & 2)) return u.stateNode
    }
  }
  function Sc(u, t, l) {
    var e = u.tag
    if (e === 5 || e === 6)
      ((u = u.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(u, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(u),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = jn)))
    else if (
      e !== 4 &&
      (e === 27 && Jt(u.type) && ((l = u.stateNode), (t = null)),
      (u = u.child),
      u !== null)
    )
      for (Sc(u, t, l), u = u.sibling; u !== null; )
        (Sc(u, t, l), (u = u.sibling))
  }
  function vn(u, t, l) {
    var e = u.tag
    if (e === 5 || e === 6)
      ((u = u.stateNode), t ? l.insertBefore(u, t) : l.appendChild(u))
    else if (
      e !== 4 &&
      (e === 27 && Jt(u.type) && (l = u.stateNode), (u = u.child), u !== null)
    )
      for (vn(u, t, l), u = u.sibling; u !== null; )
        (vn(u, t, l), (u = u.sibling))
  }
  function cs(u) {
    var t = u.stateNode,
      l = u.memoizedProps
    try {
      for (var e = u.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0])
      ;(su(t, e, l), (t[ru] = u), (t[Fu] = l))
    } catch (n) {
      Q(u, u.return, n)
    }
  }
  var ct = !1,
    P = !1,
    Yi = !1,
    VD = typeof WeakSet == 'function' ? WeakSet : Set,
    nu = null
  function yr(u, t) {
    if (((u = u.containerInfo), (Mc = zn), (u = J1(u)), $c(u))) {
      if ('selectionStart' in u)
        var l = {start: u.selectionStart, end: u.selectionEnd}
      else
        u: {
          l = ((l = u.ownerDocument) && l.defaultView) || window
          var e = l.getSelection && l.getSelection()
          if (e && e.rangeCount !== 0) {
            l = e.anchorNode
            var a = e.anchorOffset,
              n = e.focusNode
            e = e.focusOffset
            try {
              ;(l.nodeType, n.nodeType)
            } catch {
              l = null
              break u
            }
            var i = 0,
              c = -1,
              f = -1,
              o = 0,
              d = 0,
              y = u,
              A = null
            t: for (;;) {
              for (
                var r;
                y !== l || (a !== 0 && y.nodeType !== 3) || (c = i + a),
                  y !== n || (e !== 0 && y.nodeType !== 3) || (f = i + e),
                  y.nodeType === 3 && (i += y.nodeValue.length),
                  (r = y.firstChild) !== null;

              )
                ((A = y), (y = r))
              for (;;) {
                if (y === u) break t
                if (
                  (A === l && ++o === a && (c = i),
                  A === n && ++d === e && (f = i),
                  (r = y.nextSibling) !== null)
                )
                  break
                ;((y = A), (A = y.parentNode))
              }
              y = r
            }
            l = c === -1 || f === -1 ? null : {start: c, end: f}
          } else l = null
        }
      l = l || {start: 0, end: 0}
    } else l = null
    for (
      _c = {focusedElem: u, selectionRange: l}, zn = !1, nu = t;
      nu !== null;

    )
      if (
        ((t = nu), (u = t.child), (t.subtreeFlags & 1024) !== 0 && u !== null)
      )
        ((u.return = t), (nu = u))
      else
        for (; nu !== null; ) {
          switch (((t = nu), (n = t.alternate), (u = t.flags), t.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((u & 1024) !== 0 && n !== null) {
                ;((u = void 0),
                  (l = t),
                  (a = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = l.stateNode))
                try {
                  var g = Dl(l.type, a, l.elementType === l.type)
                  ;((u = e.getSnapshotBeforeUpdate(g, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = u))
                } catch (C) {
                  Q(l, l.return, C)
                }
              }
              break
            case 3:
              if ((u & 1024) !== 0) {
                if (
                  ((u = t.stateNode.containerInfo), (l = u.nodeType), l === 9)
                )
                  Rc(u)
                else if (l === 1)
                  switch (u.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Rc(u)
                      break
                    default:
                      u.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((u & 1024) !== 0) throw Error(v(163))
          }
          if (((u = t.sibling), u !== null)) {
            ;((u.return = t.return), (nu = u))
            break
          }
          nu = t.return
        }
  }
  function fs(u, t, l) {
    var e = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ;(St(u, l), e & 4 && oa(5, l))
        break
      case 1:
        if ((St(u, l), e & 4))
          if (((u = l.stateNode), t === null))
            try {
              u.componentDidMount()
            } catch (i) {
              Q(l, l.return, i)
            }
          else {
            var a = Dl(l.type, t.memoizedProps)
            t = t.memoizedState
            try {
              u.componentDidUpdate(a, t, u.__reactInternalSnapshotBeforeUpdate)
            } catch (i) {
              Q(l, l.return, i)
            }
          }
        ;(e & 64 && es(l), e & 512 && Ue(l, l.return))
        break
      case 3:
        if ((St(u, l), e & 64 && ((u = l.updateQueue), u !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode
                break
              case 1:
                t = l.child.stateNode
            }
          try {
            fo(u, t)
          } catch (i) {
            Q(l, l.return, i)
          }
        }
        break
      case 27:
        t === null && e & 4 && cs(l)
      case 26:
      case 5:
        ;(St(u, l), t === null && e & 4 && ns(l), e & 512 && Ue(l, l.return))
        break
      case 12:
        St(u, l)
        break
      case 13:
        ;(St(u, l),
          e & 4 && ss(u, l),
          e & 64 &&
            ((u = l.memoizedState),
            u !== null &&
              ((u = u.dehydrated),
              u !== null && ((l = pr.bind(null, l)), Qr(u, l)))))
        break
      case 22:
        if (((e = l.memoizedState !== null || ct), !e)) {
          ;((t = (t !== null && t.memoizedState !== null) || P), (a = ct))
          var n = P
          ;((ct = e),
            (P = t) && !n ? Bt(u, l, (l.subtreeFlags & 8772) !== 0) : St(u, l),
            (ct = a),
            (P = n))
        }
        break
      case 30:
        break
      default:
        St(u, l)
    }
  }
  function Ds(u) {
    var t = u.alternate
    ;(t !== null && ((u.alternate = null), Ds(t)),
      (u.child = null),
      (u.deletions = null),
      (u.sibling = null),
      u.tag === 5 && ((t = u.stateNode), t !== null && Lc(t)),
      (u.stateNode = null),
      (u.return = null),
      (u.dependencies = null),
      (u.memoizedProps = null),
      (u.memoizedState = null),
      (u.pendingProps = null),
      (u.stateNode = null),
      (u.updateQueue = null))
  }
  var K = null,
    mu = !1
  function it(u, t, l) {
    for (l = l.child; l !== null; ) (os(u, t, l), (l = l.sibling))
  }
  function os(u, t, l) {
    if (Tu && typeof Tu.onCommitFiberUnmount == 'function')
      try {
        Tu.onCommitFiberUnmount(Ie, l)
      } catch {}
    switch (l.tag) {
      case 26:
        ;(P || ku(l, t),
          it(u, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)))
        break
      case 27:
        P || ku(l, t)
        var e = K,
          a = mu
        ;(Jt(l.type) && ((K = l.stateNode), (mu = !1)),
          it(u, t, l),
          Ye(l.stateNode),
          (K = e),
          (mu = a))
        break
      case 5:
        P || ku(l, t)
      case 6:
        if (
          ((e = K),
          (a = mu),
          (K = null),
          it(u, t, l),
          (K = e),
          (mu = a),
          K !== null)
        )
          if (mu)
            try {
              ;(K.nodeType === 9
                ? K.body
                : K.nodeName === 'HTML'
                  ? K.ownerDocument.body
                  : K
              ).removeChild(l.stateNode)
            } catch (n) {
              Q(l, t, n)
            }
          else
            try {
              K.removeChild(l.stateNode)
            } catch (n) {
              Q(l, t, n)
            }
        break
      case 18:
        K !== null &&
          (mu
            ? ((u = K),
              a1(
                u.nodeType === 9
                  ? u.body
                  : u.nodeName === 'HTML'
                    ? u.ownerDocument.body
                    : u,
                l.stateNode
              ),
              $e(u))
            : a1(K, l.stateNode))
        break
      case 4:
        ;((e = K),
          (a = mu),
          (K = l.stateNode.containerInfo),
          (mu = !0),
          it(u, t, l),
          (K = e),
          (mu = a))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(P || Vt(2, l, t), P || Vt(4, l, t), it(u, t, l))
        break
      case 1:
        ;(P ||
          (ku(l, t),
          (e = l.stateNode),
          typeof e.componentWillUnmount == 'function' && as(l, t, e)),
          it(u, t, l))
        break
      case 21:
        it(u, t, l)
        break
      case 22:
        ;((P = (e = P) || l.memoizedState !== null), it(u, t, l), (P = e))
        break
      default:
        it(u, t, l)
    }
  }
  function ss(u, t) {
    if (
      t.memoizedState === null &&
      ((u = t.alternate),
      u !== null &&
        ((u = u.memoizedState), u !== null && ((u = u.dehydrated), u !== null)))
    )
      try {
        $e(u)
      } catch (l) {
        Q(t, t.return, l)
      }
  }
  function hr(u) {
    switch (u.tag) {
      case 13:
      case 19:
        var t = u.stateNode
        return (t === null && (t = u.stateNode = new VD()), t)
      case 22:
        return (
          (u = u.stateNode),
          (t = u._retryCache),
          t === null && (t = u._retryCache = new VD()),
          t
        )
      default:
        throw Error(v(435, u.tag))
    }
  }
  function xi(u, t) {
    var l = hr(u)
    t.forEach(function (e) {
      var a = br.bind(null, u, e)
      l.has(e) || (l.add(e), e.then(a, a))
    })
  }
  function Su(u, t) {
    var l = t.deletions
    if (l !== null)
      for (var e = 0; e < l.length; e++) {
        var a = l[e],
          n = u,
          i = t,
          c = i
        u: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Jt(c.type)) {
                ;((K = c.stateNode), (mu = !1))
                break u
              }
              break
            case 5:
              ;((K = c.stateNode), (mu = !1))
              break u
            case 3:
            case 4:
              ;((K = c.stateNode.containerInfo), (mu = !0))
              break u
          }
          c = c.return
        }
        if (K === null) throw Error(v(160))
        ;(os(n, i, a),
          (K = null),
          (mu = !1),
          (n = a.alternate),
          n !== null && (n.return = null),
          (a.return = null))
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Es(t, u), (t = t.sibling))
  }
  var Zu = null
  function Es(u, t) {
    var l = u.alternate,
      e = u.flags
    switch (u.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(Su(t, u),
          Bu(u),
          e & 4 && (Vt(3, u, u.return), oa(3, u), Vt(5, u, u.return)))
        break
      case 1:
        ;(Su(t, u),
          Bu(u),
          e & 512 && (P || l === null || ku(l, l.return)),
          e & 64 &&
            ct &&
            ((u = u.updateQueue),
            u !== null &&
              ((e = u.callbacks),
              e !== null &&
                ((l = u.shared.hiddenCallbacks),
                (u.shared.hiddenCallbacks = l === null ? e : l.concat(e))))))
        break
      case 26:
        var a = Zu
        if (
          (Su(t, u),
          Bu(u),
          e & 512 && (P || l === null || ku(l, l.return)),
          e & 4)
        ) {
          var n = l !== null ? l.memoizedState : null
          if (((e = u.memoizedState), l === null))
            if (e === null)
              if (u.stateNode === null) {
                u: {
                  ;((e = u.type),
                    (l = u.memoizedProps),
                    (a = a.ownerDocument || a))
                  t: switch (e) {
                    case 'title':
                      ;((n = a.getElementsByTagName('title')[0]),
                        (!n ||
                          n[la] ||
                          n[ru] ||
                          n.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          n.hasAttribute('itemprop')) &&
                          ((n = a.createElement(e)),
                          a.head.insertBefore(
                            n,
                            a.querySelector('head > title')
                          )),
                        su(n, e, l),
                        (n[ru] = u),
                        iu(n),
                        (e = n))
                      break u
                    case 'link':
                      var i = D1('link', 'href', a).get(e + (l.href || ''))
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              n.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(c, 1)
                            break t
                          }
                      }
                      ;((n = a.createElement(e)),
                        su(n, e, l),
                        a.head.appendChild(n))
                      break
                    case 'meta':
                      if (
                        (i = D1('meta', 'content', a).get(
                          e + (l.content || '')
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              n.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(c, 1)
                            break t
                          }
                      }
                      ;((n = a.createElement(e)),
                        su(n, e, l),
                        a.head.appendChild(n))
                      break
                    default:
                      throw Error(v(468, e))
                  }
                  ;((n[ru] = u), iu(n), (e = n))
                }
                u.stateNode = e
              } else o1(a, u.type, u.stateNode)
            else u.stateNode = f1(a, e, u.memoizedProps)
          else
            n !== e
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                e === null
                  ? o1(a, u.type, u.stateNode)
                  : f1(a, e, u.memoizedProps))
              : e === null &&
                u.stateNode !== null &&
                Hi(u, u.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        ;(Su(t, u),
          Bu(u),
          e & 512 && (P || l === null || ku(l, l.return)),
          l !== null && e & 4 && Hi(u, u.memoizedProps, l.memoizedProps))
        break
      case 5:
        if (
          (Su(t, u),
          Bu(u),
          e & 512 && (P || l === null || ku(l, l.return)),
          u.flags & 32)
        ) {
          a = u.stateNode
          try {
            Jl(a, '')
          } catch (r) {
            Q(u, u.return, r)
          }
        }
        ;(e & 4 &&
          u.stateNode != null &&
          ((a = u.memoizedProps), Hi(u, a, l !== null ? l.memoizedProps : a)),
          e & 1024 && (Yi = !0))
        break
      case 6:
        if ((Su(t, u), Bu(u), e & 4)) {
          if (u.stateNode === null) throw Error(v(162))
          ;((e = u.memoizedProps), (l = u.stateNode))
          try {
            l.nodeValue = e
          } catch (r) {
            Q(u, u.return, r)
          }
        }
        break
      case 3:
        if (
          (($a = null),
          (a = Zu),
          (Zu = pn(t.containerInfo)),
          Su(t, u),
          (Zu = a),
          Bu(u),
          e & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            $e(t.containerInfo)
          } catch (r) {
            Q(u, u.return, r)
          }
        Yi && ((Yi = !1), rs(u))
        break
      case 4:
        ;((e = Zu),
          (Zu = pn(u.stateNode.containerInfo)),
          Su(t, u),
          Bu(u),
          (Zu = e))
        break
      case 12:
        ;(Su(t, u), Bu(u))
        break
      case 13:
        ;(Su(t, u),
          Bu(u),
          u.child.flags & 8192 &&
            (u.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (pf = Pu()),
          e & 4 &&
            ((e = u.updateQueue),
            e !== null && ((u.updateQueue = null), xi(u, e))))
        break
      case 22:
        a = u.memoizedState !== null
        var f = l !== null && l.memoizedState !== null,
          o = ct,
          d = P
        if (
          ((ct = o || a),
          (P = d || f),
          Su(t, u),
          (P = d),
          (ct = o),
          Bu(u),
          e & 8192)
        )
          u: for (
            t = u.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (l === null || f || ct || P || Pt(u)),
              l = null,
              t = u;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                f = l = t
                try {
                  if (((n = f.stateNode), a))
                    ((i = n.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                  else {
                    c = f.stateNode
                    var y = f.memoizedProps.style,
                      A =
                        y != null && y.hasOwnProperty('display')
                          ? y.display
                          : null
                    c.style.display =
                      A == null || typeof A == 'boolean' ? '' : ('' + A).trim()
                  }
                } catch (r) {
                  Q(f, f.return, r)
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                f = t
                try {
                  f.stateNode.nodeValue = a ? '' : f.memoizedProps
                } catch (r) {
                  Q(f, f.return, r)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === u) &&
              t.child !== null
            ) {
              ;((t.child.return = t), (t = t.child))
              continue
            }
            if (t === u) break u
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === u) break u
              ;(l === t && (l = null), (t = t.return))
            }
            ;(l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling))
          }
        e & 4 &&
          ((e = u.updateQueue),
          e !== null &&
            ((l = e.retryQueue),
            l !== null && ((e.retryQueue = null), xi(u, l))))
        break
      case 19:
        ;(Su(t, u),
          Bu(u),
          e & 4 &&
            ((e = u.updateQueue),
            e !== null && ((u.updateQueue = null), xi(u, e))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(Su(t, u), Bu(u))
    }
  }
  function Bu(u) {
    var t = u.flags
    if (t & 2) {
      try {
        for (var l, e = u.return; e !== null; ) {
          if (is(e)) {
            l = e
            break
          }
          e = e.return
        }
        if (l == null) throw Error(v(160))
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              n = qi(u)
            vn(u, n, a)
            break
          case 5:
            var i = l.stateNode
            l.flags & 32 && (Jl(i, ''), (l.flags &= -33))
            var c = qi(u)
            vn(u, c, i)
            break
          case 3:
          case 4:
            var f = l.stateNode.containerInfo,
              o = qi(u)
            Sc(u, o, f)
            break
          default:
            throw Error(v(161))
        }
      } catch (d) {
        Q(u, u.return, d)
      }
      u.flags &= -3
    }
    t & 4096 && (u.flags &= -4097)
  }
  function rs(u) {
    if (u.subtreeFlags & 1024)
      for (u = u.child; u !== null; ) {
        var t = u
        ;(rs(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (u = u.sibling))
      }
  }
  function St(u, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (fs(u, t.alternate, t), (t = t.sibling))
  }
  function Pt(u) {
    for (u = u.child; u !== null; ) {
      var t = u
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Vt(4, t, t.return), Pt(t))
          break
        case 1:
          ku(t, t.return)
          var l = t.stateNode
          ;(typeof l.componentWillUnmount == 'function' && as(t, t.return, l),
            Pt(t))
          break
        case 27:
          Ye(t.stateNode)
        case 26:
        case 5:
          ;(ku(t, t.return), Pt(t))
          break
        case 22:
          t.memoizedState === null && Pt(t)
          break
        case 30:
          Pt(t)
          break
        default:
          Pt(t)
      }
      u = u.sibling
    }
  }
  function Bt(u, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        a = u,
        n = t,
        i = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ;(Bt(a, n, l), oa(4, n))
          break
        case 1:
          if (
            (Bt(a, n, l),
            (e = n),
            (a = e.stateNode),
            typeof a.componentDidMount == 'function')
          )
            try {
              a.componentDidMount()
            } catch (o) {
              Q(e, e.return, o)
            }
          if (((e = n), (a = e.updateQueue), a !== null)) {
            var c = e.stateNode
            try {
              var f = a.shared.hiddenCallbacks
              if (f !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < f.length; a++)
                  co(f[a], c)
            } catch (o) {
              Q(e, e.return, o)
            }
          }
          ;(l && i & 64 && es(n), Ue(n, n.return))
          break
        case 27:
          cs(n)
        case 26:
        case 5:
          ;(Bt(a, n, l), l && e === null && i & 4 && ns(n), Ue(n, n.return))
          break
        case 12:
          Bt(a, n, l)
          break
        case 13:
          ;(Bt(a, n, l), l && i & 4 && ss(a, n))
          break
        case 22:
          ;(n.memoizedState === null && Bt(a, n, l), Ue(n, n.return))
          break
        case 30:
          break
        default:
          Bt(a, n, l)
      }
      t = t.sibling
    }
  }
  function Ff(u, t) {
    var l = null
    ;(u !== null &&
      u.memoizedState !== null &&
      u.memoizedState.cachePool !== null &&
      (l = u.memoizedState.cachePool.pool),
      (u = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (u = t.memoizedState.cachePool.pool),
      u !== l && (u != null && u.refCount++, l != null && ia(l)))
  }
  function gf(u, t) {
    ;((u = null),
      t.alternate !== null && (u = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== u && (t.refCount++, u != null && ia(u)))
  }
  function wu(u, t, l, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (As(u, t, l, e), (t = t.sibling))
  }
  function As(u, t, l, e) {
    var a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(wu(u, t, l, e), a & 2048 && oa(9, t))
        break
      case 1:
        wu(u, t, l, e)
        break
      case 3:
        ;(wu(u, t, l, e),
          a & 2048 &&
            ((u = null),
            t.alternate !== null && (u = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== u && (t.refCount++, u != null && ia(u))))
        break
      case 12:
        if (a & 2048) {
          ;(wu(u, t, l, e), (u = t.stateNode))
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit
            typeof c == 'function' &&
              c(
                i,
                t.alternate === null ? 'mount' : 'update',
                u.passiveEffectDuration,
                -0
              )
          } catch (f) {
            Q(t, t.return, f)
          }
        } else wu(u, t, l, e)
        break
      case 13:
        wu(u, t, l, e)
        break
      case 23:
        break
      case 22:
        ;((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? wu(u, t, l, e)
              : Re(u, t)
            : n._visibility & 2
              ? wu(u, t, l, e)
              : ((n._visibility |= 2),
                Sl(u, t, l, e, (t.subtreeFlags & 10256) !== 0)),
          a & 2048 && Ff(i, t))
        break
      case 24:
        ;(wu(u, t, l, e), a & 2048 && gf(t.alternate, t))
        break
      default:
        wu(u, t, l, e)
    }
  }
  function Sl(u, t, l, e, a) {
    for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = u,
        i = t,
        c = l,
        f = e,
        o = i.flags
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ;(Sl(n, i, c, f, a), oa(8, i))
          break
        case 23:
          break
        case 22:
          var d = i.stateNode
          ;(i.memoizedState !== null
            ? d._visibility & 2
              ? Sl(n, i, c, f, a)
              : Re(n, i)
            : ((d._visibility |= 2), Sl(n, i, c, f, a)),
            a && o & 2048 && Ff(i.alternate, i))
          break
        case 24:
          ;(Sl(n, i, c, f, a), a && o & 2048 && gf(i.alternate, i))
          break
        default:
          Sl(n, i, c, f, a)
      }
      t = t.sibling
    }
  }
  function Re(u, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = u,
          e = t,
          a = e.flags
        switch (e.tag) {
          case 22:
            ;(Re(l, e), a & 2048 && Ff(e.alternate, e))
            break
          case 24:
            ;(Re(l, e), a & 2048 && gf(e.alternate, e))
            break
          default:
            Re(l, e)
        }
        t = t.sibling
      }
  }
  var Se = 8192
  function Cl(u) {
    if (u.subtreeFlags & Se)
      for (u = u.child; u !== null; ) (ds(u), (u = u.sibling))
  }
  function ds(u) {
    switch (u.tag) {
      case 26:
        ;(Cl(u),
          u.flags & Se &&
            u.memoizedState !== null &&
            u3(Zu, u.memoizedState, u.memoizedProps))
        break
      case 5:
        Cl(u)
        break
      case 3:
      case 4:
        var t = Zu
        ;((Zu = pn(u.stateNode.containerInfo)), Cl(u), (Zu = t))
        break
      case 22:
        u.memoizedState === null &&
          ((t = u.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Se), (Se = 16777216), Cl(u), (Se = t))
            : Cl(u))
        break
      default:
        Cl(u)
    }
  }
  function ys(u) {
    var t = u.alternate
    if (t !== null && ((u = t.child), u !== null)) {
      t.child = null
      do ((t = u.sibling), (u.sibling = null), (u = t))
      while (u !== null)
    }
  }
  function he(u) {
    var t = u.deletions
    if ((u.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var e = t[l]
          ;((nu = e), vs(e, u))
        }
      ys(u)
    }
    if (u.subtreeFlags & 10256)
      for (u = u.child; u !== null; ) (hs(u), (u = u.sibling))
  }
  function hs(u) {
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ;(he(u), u.flags & 2048 && Vt(9, u, u.return))
        break
      case 3:
        he(u)
        break
      case 12:
        he(u)
        break
      case 22:
        var t = u.stateNode
        u.memoizedState !== null &&
        t._visibility & 2 &&
        (u.return === null || u.return.tag !== 13)
          ? ((t._visibility &= -3), Wa(u))
          : he(u)
        break
      default:
        he(u)
    }
  }
  function Wa(u) {
    var t = u.deletions
    if ((u.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var e = t[l]
          ;((nu = e), vs(e, u))
        }
      ys(u)
    }
    for (u = u.child; u !== null; ) {
      switch (((t = u), t.tag)) {
        case 0:
        case 11:
        case 15:
          ;(Vt(8, t, t.return), Wa(t))
          break
        case 22:
          ;((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Wa(t)))
          break
        default:
          Wa(t)
      }
      u = u.sibling
    }
  }
  function vs(u, t) {
    for (; nu !== null; ) {
      var l = nu
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Vt(8, l, t)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var e = l.memoizedState.cachePool.pool
            e != null && e.refCount++
          }
          break
        case 24:
          ia(l.memoizedState.cache)
      }
      if (((e = l.child), e !== null)) ((e.return = l), (nu = e))
      else
        u: for (l = u; nu !== null; ) {
          e = nu
          var a = e.sibling,
            n = e.return
          if ((Ds(e), e === l)) {
            nu = null
            break u
          }
          if (a !== null) {
            ;((a.return = n), (nu = a))
            break u
          }
          nu = n
        }
    }
  }
  var vr = {
      getCacheForType: function (u) {
        var t = Au(tu),
          l = t.data.get(u)
        return (l === void 0 && ((l = u()), t.data.set(u, l)), l)
      }
    },
    mr = typeof WeakMap == 'function' ? WeakMap : Map,
    x = 0,
    Z = null,
    N = null,
    M = 0,
    Y = 0,
    pu = null,
    Ut = !1,
    ne = !1,
    Sf = !1,
    vt = 0,
    k = 0,
    Lt = 0,
    al = 0,
    Bf = 0,
    Gu = 0,
    Pl = 0,
    He = null,
    Cu = null,
    Bc = !1,
    pf = 0,
    mn = 1 / 0,
    Cn = null,
    xt = null,
    ou = 0,
    Gt = null,
    Il = null,
    Vl = 0,
    pc = 0,
    bc = null,
    ms = null,
    qe = 0,
    Tc = null
  function Ou() {
    if ((x & 2) !== 0 && M !== 0) return M & -M
    if (B.T !== null) {
      var u = wl
      return u !== 0 ? u : Tf()
    }
    return O1()
  }
  function Cs() {
    Gu === 0 && (Gu = (M & 536870912) === 0 || H ? p1() : 536870912)
    var u = Xu.current
    return (u !== null && (u.flags |= 32), Gu)
  }
  function Nu(u, t, l) {
    ;(((u === Z && (Y === 2 || Y === 9)) || u.cancelPendingCommit !== null) &&
      (ue(u, 0), Rt(u, M, Gu, !1)),
      ta(u, l),
      ((x & 2) === 0 || u !== Z) &&
        (u === Z && ((x & 2) === 0 && (al |= l), k === 4 && Rt(u, M, Gu, !1)),
        tt(u)))
  }
  function Fs(u, t, l) {
    if ((x & 6) !== 0) throw Error(v(327))
    var e = (!l && (t & 124) === 0 && (t & u.expiredLanes) === 0) || ua(u, t),
      a = e ? gr(u, t) : Gi(u, t, !0),
      n = e
    do {
      if (a === 0) {
        ne && !e && Rt(u, t, 0, !1)
        break
      } else {
        if (((l = u.current.alternate), n && !Cr(l))) {
          ;((a = Gi(u, t, !1)), (n = !1))
          continue
        }
        if (a === 2) {
          if (((n = t), u.errorRecoveryDisabledLanes & n)) var i = 0
          else
            ((i = u.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0))
          if (i !== 0) {
            t = i
            u: {
              var c = u
              a = He
              var f = c.current.memoizedState.isDehydrated
              if ((f && (ue(c, i).flags |= 256), (i = Gi(c, i, !1)), i !== 2)) {
                if (Sf && !f) {
                  ;((c.errorRecoveryDisabledLanes |= n), (al |= n), (a = 4))
                  break u
                }
                ;((n = Cu),
                  (Cu = a),
                  n !== null && (Cu === null ? (Cu = n) : Cu.push.apply(Cu, n)))
              }
              a = i
            }
            if (((n = !1), a !== 2)) continue
          }
        }
        if (a === 1) {
          ;(ue(u, 0), Rt(u, t, 0, !0))
          break
        }
        u: {
          switch (((e = u), (n = a), n)) {
            case 0:
            case 1:
              throw Error(v(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              Rt(e, t, Gu, !Ut)
              break u
            case 2:
              Cu = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(v(329))
          }
          if ((t & 62914560) === t && ((a = pf + 300 - Pu()), 10 < a)) {
            if ((Rt(e, t, Gu, !Ut), Nn(e, 0, !0) !== 0)) break u
            e.timeoutHandle = Xs(
              LD.bind(null, e, l, Cu, Cn, Bc, t, Gu, al, Pl, Ut, n, 2, -0, 0),
              a
            )
            break u
          }
          LD(e, l, Cu, Cn, Bc, t, Gu, al, Pl, Ut, n, 0, -0, 0)
        }
      }
      break
    } while (!0)
    tt(u)
  }
  function LD(u, t, l, e, a, n, i, c, f, o, d, y, A, r) {
    if (
      ((u.timeoutHandle = -1),
      (y = t.subtreeFlags),
      (y & 8192 || (y & 16785408) === 16785408) &&
        ((Je = {stylesheets: null, count: 0, unsuspend: Ir}),
        ds(t),
        (y = t3()),
        y !== null))
    ) {
      ;((u.cancelPendingCommit = y(
        JD.bind(null, u, t, n, l, e, a, i, c, f, d, 1, A, r)
      )),
        Rt(u, n, i, !o))
      return
    }
    JD(u, t, n, l, e, a, i, c, f)
  }
  function Cr(u) {
    for (var t = u; ; ) {
      var l = t.tag
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var e = 0; e < l.length; e++) {
          var a = l[e],
            n = a.getSnapshot
          a = a.value
          try {
            if (!Mu(n(), a)) return !1
          } catch {
            return !1
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l))
      else {
        if (t === u) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === u) return !0
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    }
    return !0
  }
  function Rt(u, t, l, e) {
    ;((t &= ~Bf),
      (t &= ~al),
      (u.suspendedLanes |= t),
      (u.pingedLanes &= ~t),
      e && (u.warmLanes |= t),
      (e = u.expirationTimes))
    for (var a = t; 0 < a; ) {
      var n = 31 - zu(a),
        i = 1 << n
      ;((e[n] = -1), (a &= ~i))
    }
    l !== 0 && T1(u, l, t)
  }
  function Xn() {
    return (x & 6) === 0 ? (sa(0, !1), !1) : !0
  }
  function bf() {
    if (N !== null) {
      if (Y === 0) var u = N.return
      else ((u = N), (st = rl = null), Ef(u), (jl = null), (Ve = 0), (u = N))
      for (; u !== null; ) (ls(u.alternate, u), (u = u.return))
      N = null
    }
  }
  function ue(u, t) {
    var l = u.timeoutHandle
    ;(l !== -1 && ((u.timeoutHandle = -1), qr(l)),
      (l = u.cancelPendingCommit),
      l !== null && ((u.cancelPendingCommit = null), l()),
      bf(),
      (Z = u),
      (N = l = rt(u.current, null)),
      (M = t),
      (Y = 0),
      (pu = null),
      (Ut = !1),
      (ne = ua(u, t)),
      (Sf = !1),
      (Pl = Gu = Bf = al = Lt = k = 0),
      (Cu = He = null),
      (Bc = !1),
      (t & 8) !== 0 && (t |= t & 32))
    var e = u.entangledLanes
    if (e !== 0)
      for (u = u.entanglements, e &= t; 0 < e; ) {
        var a = 31 - zu(e),
          n = 1 << a
        ;((t |= u[a]), (e &= ~n))
      }
    return ((vt = t), Rn(), l)
  }
  function gs(u, t) {
    ;((T = null),
      (B.H = rn),
      t === ca || t === qn
        ? ((t = SD()), (Y = 3))
        : t === no
          ? ((t = SD()), (Y = 4))
          : (Y =
              t === ko
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (pu = t),
      N === null && ((k = 1), yn(u, xu(t, u.current))))
  }
  function Ss() {
    var u = B.H
    return ((B.H = rn), u === null ? rn : u)
  }
  function Bs() {
    var u = B.A
    return ((B.A = vr), u)
  }
  function zc() {
    ;((k = 4),
      Ut || ((M & 4194048) !== M && Xu.current !== null) || (ne = !0),
      ((Lt & 134217727) === 0 && (al & 134217727) === 0) ||
        Z === null ||
        Rt(Z, M, Gu, !1))
  }
  function Gi(u, t, l) {
    var e = x
    x |= 2
    var a = Ss(),
      n = Bs()
    ;((Z !== u || M !== t) && ((Cn = null), ue(u, t)), (t = !1))
    var i = k
    u: do
      try {
        if (Y !== 0 && N !== null) {
          var c = N,
            f = pu
          switch (Y) {
            case 8:
              ;(bf(), (i = 6))
              break u
            case 3:
            case 2:
            case 9:
            case 6:
              Xu.current === null && (t = !0)
              var o = Y
              if (((Y = 0), (pu = null), ql(u, c, f, o), l && ne)) {
                i = 0
                break u
              }
              break
            default:
              ;((o = Y), (Y = 0), (pu = null), ql(u, c, f, o))
          }
        }
        ;(Fr(), (i = k))
        break
      } catch (d) {
        gs(u, d)
      }
    while (!0)
    return (
      t && u.shellSuspendCounter++,
      (st = rl = null),
      (x = e),
      (B.H = a),
      (B.A = n),
      N === null && ((Z = null), (M = 0), Rn()),
      i
    )
  }
  function Fr() {
    for (; N !== null; ) ps(N)
  }
  function gr(u, t) {
    var l = x
    x |= 2
    var e = Ss(),
      a = Bs()
    Z !== u || M !== t
      ? ((Cn = null), (mn = Pu() + 500), ue(u, t))
      : (ne = ua(u, t))
    u: do
      try {
        if (Y !== 0 && N !== null) {
          t = N
          var n = pu
          t: switch (Y) {
            case 1:
              ;((Y = 0), (pu = null), ql(u, t, n, 1))
              break
            case 2:
            case 9:
              if (gD(n)) {
                ;((Y = 0), (pu = null), KD(t))
                break
              }
              ;((t = function () {
                ;((Y !== 2 && Y !== 9) || Z !== u || (Y = 7), tt(u))
              }),
                n.then(t, t))
              break u
            case 3:
              Y = 7
              break u
            case 4:
              Y = 5
              break u
            case 7:
              gD(n)
                ? ((Y = 0), (pu = null), KD(t))
                : ((Y = 0), (pu = null), ql(u, t, n, 7))
              break
            case 5:
              var i = null
              switch (N.tag) {
                case 26:
                  i = N.memoizedState
                case 5:
                case 27:
                  var c = N
                  if (!i || Vs(i)) {
                    ;((Y = 0), (pu = null))
                    var f = c.sibling
                    if (f !== null) N = f
                    else {
                      var o = c.return
                      o !== null ? ((N = o), Qn(o)) : (N = null)
                    }
                    break t
                  }
              }
              ;((Y = 0), (pu = null), ql(u, t, n, 5))
              break
            case 6:
              ;((Y = 0), (pu = null), ql(u, t, n, 6))
              break
            case 8:
              ;(bf(), (k = 6))
              break u
            default:
              throw Error(v(462))
          }
        }
        Sr()
        break
      } catch (d) {
        gs(u, d)
      }
    while (!0)
    return (
      (st = rl = null),
      (B.H = e),
      (B.A = a),
      (x = l),
      N !== null ? 0 : ((Z = null), (M = 0), Rn(), k)
    )
  }
  function Sr() {
    for (; N !== null && !L2(); ) ps(N)
  }
  function ps(u) {
    var t = ts(u.alternate, u, vt)
    ;((u.memoizedProps = u.pendingProps), t === null ? Qn(u) : (N = t))
  }
  function KD(u) {
    var t = u,
      l = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = GD(l, t, t.pendingProps, t.type, void 0, M)
        break
      case 11:
        t = GD(l, t, t.pendingProps, t.type.render, t.ref, M)
        break
      case 5:
        Ef(t)
      default:
        ;(ls(l, t), (t = N = to(t, vt)), (t = ts(l, t, vt)))
    }
    ;((u.memoizedProps = u.pendingProps), t === null ? Qn(u) : (N = t))
  }
  function ql(u, t, l, e) {
    ;((st = rl = null), Ef(t), (jl = null), (Ve = 0))
    var a = t.return
    try {
      if (Er(u, a, t, l, M)) {
        ;((k = 1), yn(u, xu(l, u.current)), (N = null))
        return
      }
    } catch (n) {
      if (a !== null) throw ((N = a), n)
      ;((k = 1), yn(u, xu(l, u.current)), (N = null))
      return
    }
    t.flags & 32768
      ? (H || e === 1
          ? (u = !0)
          : ne || (M & 536870912) !== 0
            ? (u = !1)
            : ((Ut = u = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = Xu.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        bs(t, u))
      : Qn(t)
  }
  function Qn(u) {
    var t = u
    do {
      if ((t.flags & 32768) !== 0) {
        bs(t, Ut)
        return
      }
      u = t.return
      var l = Ar(t.alternate, t, vt)
      if (l !== null) {
        N = l
        return
      }
      if (((t = t.sibling), t !== null)) {
        N = t
        return
      }
      N = t = u
    } while (t !== null)
    k === 0 && (k = 5)
  }
  function bs(u, t) {
    do {
      var l = dr(u.alternate, u)
      if (l !== null) {
        ;((l.flags &= 32767), (N = l))
        return
      }
      if (
        ((l = u.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((u = u.sibling), u !== null))
      ) {
        N = u
        return
      }
      N = u = l
    } while (u !== null)
    ;((k = 6), (N = null))
  }
  function JD(u, t, l, e, a, n, i, c, f) {
    u.cancelPendingCommit = null
    do Zn()
    while (ou !== 0)
    if ((x & 6) !== 0) throw Error(v(327))
    if (t !== null) {
      if (t === u.current) throw Error(v(177))
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Pc),
        tE(u, l, n, i, c, f),
        u === Z && ((N = Z = null), (M = 0)),
        (Il = t),
        (Gt = u),
        (Vl = l),
        (pc = n),
        (bc = a),
        (ms = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((u.callbackNode = null),
            (u.callbackPriority = 0),
            Tr(ln, function () {
              return (Ms(!0), null)
            }))
          : ((u.callbackNode = null), (u.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ;((e = B.T), (B.T = null), (a = q.p), (q.p = 2), (i = x), (x |= 4))
        try {
          yr(u, t, l)
        } finally {
          ;((x = i), (q.p = a), (B.T = e))
        }
      }
      ;((ou = 1), Ts(), zs(), Os())
    }
  }
  function Ts() {
    if (ou === 1) {
      ou = 0
      var u = Gt,
        t = Il,
        l = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ;((l = B.T), (B.T = null))
        var e = q.p
        q.p = 2
        var a = x
        x |= 4
        try {
          Es(t, u)
          var n = _c,
            i = J1(u.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            K1(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && $c(c)) {
              var o = f.start,
                d = f.end
              if ((d === void 0 && (d = o), 'selectionStart' in c))
                ((c.selectionStart = o),
                  (c.selectionEnd = Math.min(d, c.value.length)))
              else {
                var y = c.ownerDocument || document,
                  A = (y && y.defaultView) || window
                if (A.getSelection) {
                  var r = A.getSelection(),
                    g = c.textContent.length,
                    C = Math.min(f.start, g),
                    U = f.end === void 0 ? C : Math.min(f.end, g)
                  !r.extend && C > U && ((i = U), (U = C), (C = i))
                  var s = AD(c, C),
                    D = AD(c, U)
                  if (
                    s &&
                    D &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== s.node ||
                      r.anchorOffset !== s.offset ||
                      r.focusNode !== D.node ||
                      r.focusOffset !== D.offset)
                  ) {
                    var E = y.createRange()
                    ;(E.setStart(s.node, s.offset),
                      r.removeAllRanges(),
                      C > U
                        ? (r.addRange(E), r.extend(D.node, D.offset))
                        : (E.setEnd(D.node, D.offset), r.addRange(E)))
                  }
                }
              }
            }
            for (y = [], r = c; (r = r.parentNode); )
              r.nodeType === 1 &&
                y.push({element: r, left: r.scrollLeft, top: r.scrollTop})
            for (
              typeof c.focus == 'function' && c.focus(), c = 0;
              c < y.length;
              c++
            ) {
              var h = y[c]
              ;((h.element.scrollLeft = h.left), (h.element.scrollTop = h.top))
            }
          }
          ;((zn = !!Mc), (_c = Mc = null))
        } finally {
          ;((x = a), (q.p = e), (B.T = l))
        }
      }
      ;((u.current = t), (ou = 2))
    }
  }
  function zs() {
    if (ou === 2) {
      ou = 0
      var u = Gt,
        t = Il,
        l = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ;((l = B.T), (B.T = null))
        var e = q.p
        q.p = 2
        var a = x
        x |= 4
        try {
          fs(u, t.alternate, t)
        } finally {
          ;((x = a), (q.p = e), (B.T = l))
        }
      }
      ou = 3
    }
  }
  function Os() {
    if (ou === 4 || ou === 3) {
      ;((ou = 0), K2())
      var u = Gt,
        t = Il,
        l = Vl,
        e = ms
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ou = 5)
        : ((ou = 0), (Il = Gt = null), Ns(u, u.pendingLanes))
      var a = u.pendingLanes
      if (
        (a === 0 && (xt = null),
        Vc(l),
        (t = t.stateNode),
        Tu && typeof Tu.onCommitFiberRoot == 'function')
      )
        try {
          Tu.onCommitFiberRoot(Ie, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (e !== null) {
        ;((t = B.T), (a = q.p), (q.p = 2), (B.T = null))
        try {
          for (var n = u.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i]
            n(c.value, {componentStack: c.stack})
          }
        } finally {
          ;((B.T = t), (q.p = a))
        }
      }
      ;((Vl & 3) !== 0 && Zn(),
        tt(u),
        (a = u.pendingLanes),
        (l & 4194090) !== 0 && (a & 42) !== 0
          ? u === Tc
            ? qe++
            : ((qe = 0), (Tc = u))
          : (qe = 0),
        sa(0, !1))
    }
  }
  function Ns(u, t) {
    ;(u.pooledCacheLanes &= t) === 0 &&
      ((t = u.pooledCache), t != null && ((u.pooledCache = null), ia(t)))
  }
  function Zn(u) {
    return (Ts(), zs(), Os(), Ms(u))
  }
  function Ms() {
    if (ou !== 5) return !1
    var u = Gt,
      t = pc
    pc = 0
    var l = Vc(Vl),
      e = B.T,
      a = q.p
    try {
      ;((q.p = 32 > l ? 32 : l), (B.T = null), (l = bc), (bc = null))
      var n = Gt,
        i = Vl
      if (((ou = 0), (Il = Gt = null), (Vl = 0), (x & 6) !== 0))
        throw Error(v(331))
      var c = x
      if (
        ((x |= 4),
        hs(n.current),
        As(n, n.current, i, l),
        (x = c),
        sa(0, !1),
        Tu && typeof Tu.onPostCommitFiberRoot == 'function')
      )
        try {
          Tu.onPostCommitFiberRoot(Ie, n)
        } catch {}
      return !0
    } finally {
      ;((q.p = a), (B.T = e), Ns(u, t))
    }
  }
  function wD(u, t, l) {
    ;((t = xu(l, t)),
      (t = Cc(u.stateNode, t, 2)),
      (u = Yt(u, t, 2)),
      u !== null && (ta(u, 2), tt(u)))
  }
  function Q(u, t, l) {
    if (u.tag === 3) wD(u, u, l)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wD(t, u, l)
          break
        } else if (t.tag === 1) {
          var e = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof e.componentDidCatch == 'function' &&
              (xt === null || !xt.has(e)))
          ) {
            ;((u = xu(l, u)),
              (l = wo(2)),
              (e = Yt(t, l, 2)),
              e !== null && (Wo(l, e, t, u), ta(e, 2), tt(e)))
            break
          }
        }
        t = t.return
      }
  }
  function Xi(u, t, l) {
    var e = u.pingCache
    if (e === null) {
      e = u.pingCache = new mr()
      var a = new Set()
      e.set(t, a)
    } else ((a = e.get(t)), a === void 0 && ((a = new Set()), e.set(t, a)))
    a.has(l) ||
      ((Sf = !0), a.add(l), (u = Br.bind(null, u, t, l)), t.then(u, u))
  }
  function Br(u, t, l) {
    var e = u.pingCache
    ;(e !== null && e.delete(t),
      (u.pingedLanes |= u.suspendedLanes & l),
      (u.warmLanes &= ~l),
      Z === u &&
        (M & l) === l &&
        (k === 4 || (k === 3 && (M & 62914560) === M && 300 > Pu() - pf)
          ? (x & 2) === 0 && ue(u, 0)
          : (Bf |= l),
        Pl === M && (Pl = 0)),
      tt(u))
  }
  function _s(u, t) {
    ;(t === 0 && (t = b1()), (u = ae(u, t)), u !== null && (ta(u, t), tt(u)))
  }
  function pr(u) {
    var t = u.memoizedState,
      l = 0
    ;(t !== null && (l = t.retryLane), _s(u, l))
  }
  function br(u, t) {
    var l = 0
    switch (u.tag) {
      case 13:
        var e = u.stateNode,
          a = u.memoizedState
        a !== null && (l = a.retryLane)
        break
      case 19:
        e = u.stateNode
        break
      case 22:
        e = u.stateNode._retryCache
        break
      default:
        throw Error(v(314))
    }
    ;(e !== null && e.delete(t), _s(u, l))
  }
  function Tr(u, t) {
    return Zc(u, t)
  }
  var Fn = null,
    Bl = null,
    Oc = !1,
    gn = !1,
    Qi = !1,
    nl = 0
  function tt(u) {
    ;(u !== Bl &&
      u.next === null &&
      (Bl === null ? (Fn = Bl = u) : (Bl = Bl.next = u)),
      (gn = !0),
      Oc || ((Oc = !0), Or()))
  }
  function sa(u, t) {
    if (!Qi && gn) {
      Qi = !0
      do
        for (var l = !1, e = Fn; e !== null; ) {
          if (!t)
            if (u !== 0) {
              var a = e.pendingLanes
              if (a === 0) var n = 0
              else {
                var i = e.suspendedLanes,
                  c = e.pingedLanes
                ;((n = (1 << (31 - zu(42 | u) + 1)) - 1),
                  (n &= a & ~(i & ~c)),
                  (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0))
              }
              n !== 0 && ((l = !0), WD(e, n))
            } else
              ((n = M),
                (n = Nn(
                  e,
                  e === Z ? n : 0,
                  e.cancelPendingCommit !== null || e.timeoutHandle !== -1
                )),
                (n & 3) === 0 || ua(e, n) || ((l = !0), WD(e, n)))
          e = e.next
        }
      while (l)
      Qi = !1
    }
  }
  function zr() {
    Us()
  }
  function Us() {
    gn = Oc = !1
    var u = 0
    nl !== 0 && (Hr() && (u = nl), (nl = 0))
    for (var t = Pu(), l = null, e = Fn; e !== null; ) {
      var a = e.next,
        n = Rs(e, t)
      ;(n === 0
        ? ((e.next = null),
          l === null ? (Fn = a) : (l.next = a),
          a === null && (Bl = l))
        : ((l = e), (u !== 0 || (n & 3) !== 0) && (gn = !0)),
        (e = a))
    }
    sa(u, !1)
  }
  function Rs(u, t) {
    for (
      var l = u.suspendedLanes,
        e = u.pingedLanes,
        a = u.expirationTimes,
        n = u.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - zu(n),
        c = 1 << i,
        f = a[i]
      ;(f === -1
        ? ((c & l) === 0 || (c & e) !== 0) && (a[i] = uE(c, t))
        : f <= t && (u.expiredLanes |= c),
        (n &= ~c))
    }
    if (
      ((t = Z),
      (l = M),
      (l = Nn(
        u,
        u === t ? l : 0,
        u.cancelPendingCommit !== null || u.timeoutHandle !== -1
      )),
      (e = u.callbackNode),
      l === 0 ||
        (u === t && (Y === 2 || Y === 9)) ||
        u.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Ai(e),
        (u.callbackNode = null),
        (u.callbackPriority = 0)
      )
    if ((l & 3) === 0 || ua(u, l)) {
      if (((t = l & -l), t === u.callbackPriority)) return t
      switch ((e !== null && Ai(e), Vc(l))) {
        case 2:
        case 8:
          l = S1
          break
        case 32:
          l = ln
          break
        case 268435456:
          l = B1
          break
        default:
          l = ln
      }
      return (
        (e = Hs.bind(null, u)),
        (l = Zc(l, e)),
        (u.callbackPriority = t),
        (u.callbackNode = l),
        t
      )
    }
    return (
      e !== null && e !== null && Ai(e),
      (u.callbackPriority = 2),
      (u.callbackNode = null),
      2
    )
  }
  function Hs(u, t) {
    if (ou !== 0 && ou !== 5)
      return ((u.callbackNode = null), (u.callbackPriority = 0), null)
    var l = u.callbackNode
    if (Zn(!0) && u.callbackNode !== l) return null
    var e = M
    return (
      (e = Nn(
        u,
        u === Z ? e : 0,
        u.cancelPendingCommit !== null || u.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (Fs(u, e, t),
          Rs(u, Pu()),
          u.callbackNode != null && u.callbackNode === l
            ? Hs.bind(null, u)
            : null)
    )
  }
  function WD(u, t) {
    if (Zn()) return null
    Fs(u, t, !0)
  }
  function Or() {
    Yr(function () {
      ;(x & 6) !== 0 ? Zc(g1, zr) : Us()
    })
  }
  function Tf() {
    return (nl === 0 && (nl = p1()), nl)
  }
  function kD(u) {
    return u == null || typeof u == 'symbol' || typeof u == 'boolean'
      ? null
      : typeof u == 'function'
        ? u
        : Qa('' + u)
  }
  function $D(u, t) {
    var l = t.ownerDocument.createElement('input')
    return (
      (l.name = t.name),
      (l.value = t.value),
      u.id && l.setAttribute('form', u.id),
      t.parentNode.insertBefore(l, t),
      (u = new FormData(u)),
      l.parentNode.removeChild(l),
      u
    )
  }
  function Nr(u, t, l, e, a) {
    if (t === 'submit' && l && l.stateNode === a) {
      var n = kD((a[Fu] || null).action),
        i = e.submitter
      i &&
        ((t = (t = i[Fu] || null)
          ? kD(t.formAction)
          : i.getAttribute('formAction')),
        t !== null && ((n = t), (i = null)))
      var c = new Mn('action', 'action', null, e, a)
      u.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (nl !== 0) {
                  var f = i ? $D(a, i) : new FormData(a)
                  vc(
                    l,
                    {pending: !0, data: f, method: a.method, action: n},
                    null,
                    f
                  )
                }
              } else
                typeof n == 'function' &&
                  (c.preventDefault(),
                  (f = i ? $D(a, i) : new FormData(a)),
                  vc(
                    l,
                    {pending: !0, data: f, method: a.method, action: n},
                    n,
                    f
                  ))
            },
            currentTarget: a
          }
        ]
      })
    }
  }
  for (Ha = 0; Ha < ic.length; Ha++)
    ((qa = ic[Ha]),
      (PD = qa.toLowerCase()),
      (ID = qa[0].toUpperCase() + qa.slice(1)),
      Vu(PD, 'on' + ID))
  var qa, PD, ID, Ha
  Vu(W1, 'onAnimationEnd')
  Vu(k1, 'onAnimationIteration')
  Vu($1, 'onAnimationStart')
  Vu('dblclick', 'onDoubleClick')
  Vu('focusin', 'onFocus')
  Vu('focusout', 'onBlur')
  Vu(WE, 'onTransitionRun')
  Vu(kE, 'onTransitionStart')
  Vu($E, 'onTransitionCancel')
  Vu(P1, 'onTransitionEnd')
  Kl('onMouseEnter', ['mouseout', 'mouseover'])
  Kl('onMouseLeave', ['mouseout', 'mouseover'])
  Kl('onPointerEnter', ['pointerout', 'pointerover'])
  Kl('onPointerLeave', ['pointerout', 'pointerover'])
  ol(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' '
    )
  )
  ol(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  )
  ol('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
  ol(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
  )
  ol(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
  )
  ol(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  )
  var Le =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Mr = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Le)
    )
  function qs(u, t) {
    t = (t & 4) !== 0
    for (var l = 0; l < u.length; l++) {
      var e = u[l],
        a = e.event
      e = e.listeners
      u: {
        var n = void 0
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              o = c.currentTarget
            if (((c = c.listener), f !== n && a.isPropagationStopped())) break u
            ;((n = c), (a.currentTarget = o))
            try {
              n(a)
            } catch (d) {
              dn(d)
            }
            ;((a.currentTarget = null), (n = f))
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (o = c.currentTarget),
              (c = c.listener),
              f !== n && a.isPropagationStopped())
            )
              break u
            ;((n = c), (a.currentTarget = o))
            try {
              n(a)
            } catch (d) {
              dn(d)
            }
            ;((a.currentTarget = null), (n = f))
          }
      }
    }
  }
  function O(u, t) {
    var l = t[Ii]
    l === void 0 && (l = t[Ii] = new Set())
    var e = u + '__bubble'
    l.has(e) || (Ys(t, u, 2, !1), l.add(e))
  }
  function Zi(u, t, l) {
    var e = 0
    ;(t && (e |= 4), Ys(l, u, e, t))
  }
  var Ya = '_reactListening' + Math.random().toString(36).slice(2)
  function zf(u) {
    if (!u[Ya]) {
      ;((u[Ya] = !0),
        N1.forEach(function (l) {
          l !== 'selectionchange' && (Mr.has(l) || Zi(l, !1, u), Zi(l, !0, u))
        }))
      var t = u.nodeType === 9 ? u : u.ownerDocument
      t === null || t[Ya] || ((t[Ya] = !0), Zi('selectionchange', !1, t))
    }
  }
  function Ys(u, t, l, e) {
    switch (Ws(t)) {
      case 2:
        var a = a3
        break
      case 8:
        a = n3
        break
      default:
        a = _f
    }
    ;((l = a.bind(null, t, l, u)),
      (a = void 0),
      !ec ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (a = !0),
      e
        ? a !== void 0
          ? u.addEventListener(t, l, {capture: !0, passive: a})
          : u.addEventListener(t, l, !0)
        : a !== void 0
          ? u.addEventListener(t, l, {passive: a})
          : u.addEventListener(t, l, !1))
  }
  function ji(u, t, l, e, a) {
    var n = e
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      u: for (;;) {
        if (e === null) return
        var i = e.tag
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo
          if (c === a) break
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === a)
                return
              i = i.return
            }
          for (; c !== null; ) {
            if (((i = Tl(c)), i === null)) return
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i
              continue u
            }
            c = c.parentNode
          }
        }
        e = e.return
      }
    x1(function () {
      var o = n,
        d = Jc(l),
        y = []
      u: {
        var A = I1.get(u)
        if (A !== void 0) {
          var r = Mn,
            g = u
          switch (u) {
            case 'keypress':
              if (ja(l) === 0) break u
            case 'keydown':
            case 'keyup':
              r = TE
              break
            case 'focusin':
              ;((g = 'focus'), (r = gi))
              break
            case 'focusout':
              ;((g = 'blur'), (r = gi))
              break
            case 'beforeblur':
            case 'afterblur':
              r = gi
              break
            case 'click':
              if (l.button === 2) break u
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              r = nD
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              r = dE
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              r = NE
              break
            case W1:
            case k1:
            case $1:
              r = vE
              break
            case P1:
              r = _E
              break
            case 'scroll':
            case 'scrollend':
              r = rE
              break
            case 'wheel':
              r = RE
              break
            case 'copy':
            case 'cut':
            case 'paste':
              r = CE
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              r = cD
              break
            case 'toggle':
            case 'beforetoggle':
              r = qE
          }
          var C = (t & 4) !== 0,
            U = !C && (u === 'scroll' || u === 'scrollend'),
            s = C ? (A !== null ? A + 'Capture' : null) : A
          C = []
          for (var D = o, E; D !== null; ) {
            var h = D
            if (
              ((E = h.stateNode),
              (h = h.tag),
              (h !== 5 && h !== 26 && h !== 27) ||
                E === null ||
                s === null ||
                ((h = Ge(D, s)), h != null && C.push(Ke(D, h, E))),
              U)
            )
              break
            D = D.return
          }
          0 < C.length &&
            ((A = new r(A, g, null, l, d)), y.push({event: A, listeners: C}))
        }
      }
      if ((t & 7) === 0) {
        u: {
          if (
            ((A = u === 'mouseover' || u === 'pointerover'),
            (r = u === 'mouseout' || u === 'pointerout'),
            A &&
              l !== lc &&
              (g = l.relatedTarget || l.fromElement) &&
              (Tl(g) || g[le]))
          )
            break u
          if (
            (r || A) &&
            ((A =
              d.window === d
                ? d
                : (A = d.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            r
              ? ((g = l.relatedTarget || l.toElement),
                (r = o),
                (g = g ? Tl(g) : null),
                g !== null &&
                  ((U = Pe(g)),
                  (C = g.tag),
                  g !== U || (C !== 5 && C !== 27 && C !== 6)) &&
                  (g = null))
              : ((r = null), (g = o)),
            r !== g)
          ) {
            if (
              ((C = nD),
              (h = 'onMouseLeave'),
              (s = 'onMouseEnter'),
              (D = 'mouse'),
              (u === 'pointerout' || u === 'pointerover') &&
                ((C = cD),
                (h = 'onPointerLeave'),
                (s = 'onPointerEnter'),
                (D = 'pointer')),
              (U = r == null ? A : ge(r)),
              (E = g == null ? A : ge(g)),
              (A = new C(h, D + 'leave', r, l, d)),
              (A.target = U),
              (A.relatedTarget = E),
              (h = null),
              Tl(d) === o &&
                ((C = new C(s, D + 'enter', g, l, d)),
                (C.target = E),
                (C.relatedTarget = U),
                (h = C)),
              (U = h),
              r && g)
            )
              t: {
                for (C = r, s = g, D = 0, E = C; E; E = Fl(E)) D++
                for (E = 0, h = s; h; h = Fl(h)) E++
                for (; 0 < D - E; ) ((C = Fl(C)), D--)
                for (; 0 < E - D; ) ((s = Fl(s)), E--)
                for (; D--; ) {
                  if (C === s || (s !== null && C === s.alternate)) break t
                  ;((C = Fl(C)), (s = Fl(s)))
                }
                C = null
              }
            else C = null
            ;(r !== null && u1(y, A, r, C, !1),
              g !== null && U !== null && u1(y, U, g, C, !0))
          }
        }
        u: {
          if (
            ((A = o ? ge(o) : window),
            (r = A.nodeName && A.nodeName.toLowerCase()),
            r === 'select' || (r === 'input' && A.type === 'file'))
          )
            var m = sD
          else if (oD(A))
            if (V1) m = KE
            else {
              m = VE
              var z = jE
            }
          else
            ((r = A.nodeName),
              !r ||
              r.toLowerCase() !== 'input' ||
              (A.type !== 'checkbox' && A.type !== 'radio')
                ? o && Kc(o.elementType) && (m = sD)
                : (m = LE))
          if (m && (m = m(u, o))) {
            j1(y, m, l, d)
            break u
          }
          ;(z && z(u, A, o),
            u === 'focusout' &&
              o &&
              A.type === 'number' &&
              o.memoizedProps.value != null &&
              tc(A, 'number', A.value))
        }
        switch (((z = o ? ge(o) : window), u)) {
          case 'focusin':
            ;(oD(z) || z.contentEditable === 'true') &&
              ((Nl = z), (ac = o), (be = null))
            break
          case 'focusout':
            be = ac = Nl = null
            break
          case 'mousedown':
            nc = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((nc = !1), dD(y, l, d))
            break
          case 'selectionchange':
            if (wE) break
          case 'keydown':
          case 'keyup':
            dD(y, l, d)
        }
        var F
        if (kc)
          u: {
            switch (u) {
              case 'compositionstart':
                var S = 'onCompositionStart'
                break u
              case 'compositionend':
                S = 'onCompositionEnd'
                break u
              case 'compositionupdate':
                S = 'onCompositionUpdate'
                break u
            }
            S = void 0
          }
        else
          Ol
            ? Q1(u, l) && (S = 'onCompositionEnd')
            : u === 'keydown' && l.keyCode === 229 && (S = 'onCompositionStart')
        ;(S &&
          (X1 &&
            l.locale !== 'ko' &&
            (Ol || S !== 'onCompositionStart'
              ? S === 'onCompositionEnd' && Ol && (F = G1())
              : ((_t = d),
                (wc = 'value' in _t ? _t.value : _t.textContent),
                (Ol = !0))),
          (z = Sn(o, S)),
          0 < z.length &&
            ((S = new iD(S, u, null, l, d)),
            y.push({event: S, listeners: z}),
            F ? (S.data = F) : ((F = Z1(l)), F !== null && (S.data = F)))),
          (F = xE ? GE(u, l) : XE(u, l)) &&
            ((S = Sn(o, 'onBeforeInput')),
            0 < S.length &&
              ((z = new iD('onBeforeInput', 'beforeinput', null, l, d)),
              y.push({event: z, listeners: S}),
              (z.data = F))),
          Nr(y, u, o, l, d))
      }
      qs(y, t)
    })
  }
  function Ke(u, t, l) {
    return {instance: u, listener: t, currentTarget: l}
  }
  function Sn(u, t) {
    for (var l = t + 'Capture', e = []; u !== null; ) {
      var a = u,
        n = a.stateNode
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          n === null ||
          ((a = Ge(u, l)),
          a != null && e.unshift(Ke(u, a, n)),
          (a = Ge(u, t)),
          a != null && e.push(Ke(u, a, n))),
        u.tag === 3)
      )
        return e
      u = u.return
    }
    return []
  }
  function Fl(u) {
    if (u === null) return null
    do u = u.return
    while (u && u.tag !== 5 && u.tag !== 27)
    return u || null
  }
  function u1(u, t, l, e, a) {
    for (var n = t._reactName, i = []; l !== null && l !== e; ) {
      var c = l,
        f = c.alternate,
        o = c.stateNode
      if (((c = c.tag), f !== null && f === e)) break
      ;((c !== 5 && c !== 26 && c !== 27) ||
        o === null ||
        ((f = o),
        a
          ? ((o = Ge(l, n)), o != null && i.unshift(Ke(l, o, f)))
          : a || ((o = Ge(l, n)), o != null && i.push(Ke(l, o, f)))),
        (l = l.return))
    }
    i.length !== 0 && u.push({event: t, listeners: i})
  }
  var _r = /\r\n?/g,
    Ur = /\u0000|\uFFFD/g
  function t1(u) {
    return (typeof u == 'string' ? u : '' + u)
      .replace(
        _r,
        `
`
      )
      .replace(Ur, '')
  }
  function xs(u, t) {
    return ((t = t1(t)), t1(u) === t)
  }
  function jn() {}
  function G(u, t, l, e, a, n) {
    switch (l) {
      case 'children':
        typeof e == 'string'
          ? t === 'body' || (t === 'textarea' && e === '') || Jl(u, e)
          : (typeof e == 'number' || typeof e == 'bigint') &&
            t !== 'body' &&
            Jl(u, '' + e)
        break
      case 'className':
        ba(u, 'class', e)
        break
      case 'tabIndex':
        ba(u, 'tabindex', e)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ba(u, l, e)
        break
      case 'style':
        Y1(u, e, n)
        break
      case 'data':
        if (t !== 'object') {
          ba(u, 'data', e)
          break
        }
      case 'src':
      case 'href':
        if (e === '' && (t !== 'a' || l !== 'href')) {
          u.removeAttribute(l)
          break
        }
        if (
          e == null ||
          typeof e == 'function' ||
          typeof e == 'symbol' ||
          typeof e == 'boolean'
        ) {
          u.removeAttribute(l)
          break
        }
        ;((e = Qa('' + e)), u.setAttribute(l, e))
        break
      case 'action':
      case 'formAction':
        if (typeof e == 'function') {
          u.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof n == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && G(u, t, 'name', a.name, a, null),
                G(u, t, 'formEncType', a.formEncType, a, null),
                G(u, t, 'formMethod', a.formMethod, a, null),
                G(u, t, 'formTarget', a.formTarget, a, null))
              : (G(u, t, 'encType', a.encType, a, null),
                G(u, t, 'method', a.method, a, null),
                G(u, t, 'target', a.target, a, null)))
        if (e == null || typeof e == 'symbol' || typeof e == 'boolean') {
          u.removeAttribute(l)
          break
        }
        ;((e = Qa('' + e)), u.setAttribute(l, e))
        break
      case 'onClick':
        e != null && (u.onclick = jn)
        break
      case 'onScroll':
        e != null && O('scroll', u)
        break
      case 'onScrollEnd':
        e != null && O('scrollend', u)
        break
      case 'dangerouslySetInnerHTML':
        if (e != null) {
          if (typeof e != 'object' || !('__html' in e)) throw Error(v(61))
          if (((l = e.__html), l != null)) {
            if (a.children != null) throw Error(v(60))
            u.innerHTML = l
          }
        }
        break
      case 'multiple':
        u.multiple = e && typeof e != 'function' && typeof e != 'symbol'
        break
      case 'muted':
        u.muted = e && typeof e != 'function' && typeof e != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (
          e == null ||
          typeof e == 'function' ||
          typeof e == 'boolean' ||
          typeof e == 'symbol'
        ) {
          u.removeAttribute('xlink:href')
          break
        }
        ;((l = Qa('' + e)),
          u.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l))
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        e != null && typeof e != 'function' && typeof e != 'symbol'
          ? u.setAttribute(l, '' + e)
          : u.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        e && typeof e != 'function' && typeof e != 'symbol'
          ? u.setAttribute(l, '')
          : u.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        e === !0
          ? u.setAttribute(l, '')
          : e !== !1 &&
              e != null &&
              typeof e != 'function' &&
              typeof e != 'symbol'
            ? u.setAttribute(l, e)
            : u.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        e != null &&
        typeof e != 'function' &&
        typeof e != 'symbol' &&
        !isNaN(e) &&
        1 <= e
          ? u.setAttribute(l, e)
          : u.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        e == null || typeof e == 'function' || typeof e == 'symbol' || isNaN(e)
          ? u.removeAttribute(l)
          : u.setAttribute(l, e)
        break
      case 'popover':
        ;(O('beforetoggle', u), O('toggle', u), Xa(u, 'popover', e))
        break
      case 'xlinkActuate':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:actuate', e)
        break
      case 'xlinkArcrole':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', e)
        break
      case 'xlinkRole':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:role', e)
        break
      case 'xlinkShow':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:show', e)
        break
      case 'xlinkTitle':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:title', e)
        break
      case 'xlinkType':
        at(u, 'http://www.w3.org/1999/xlink', 'xlink:type', e)
        break
      case 'xmlBase':
        at(u, 'http://www.w3.org/XML/1998/namespace', 'xml:base', e)
        break
      case 'xmlLang':
        at(u, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', e)
        break
      case 'xmlSpace':
        at(u, 'http://www.w3.org/XML/1998/namespace', 'xml:space', e)
        break
      case 'is':
        Xa(u, 'is', e)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = sE.get(l) || l), Xa(u, l, e))
    }
  }
  function Nc(u, t, l, e, a, n) {
    switch (l) {
      case 'style':
        Y1(u, e, n)
        break
      case 'dangerouslySetInnerHTML':
        if (e != null) {
          if (typeof e != 'object' || !('__html' in e)) throw Error(v(61))
          if (((l = e.__html), l != null)) {
            if (a.children != null) throw Error(v(60))
            u.innerHTML = l
          }
        }
        break
      case 'children':
        typeof e == 'string'
          ? Jl(u, e)
          : (typeof e == 'number' || typeof e == 'bigint') && Jl(u, '' + e)
        break
      case 'onScroll':
        e != null && O('scroll', u)
        break
      case 'onScrollEnd':
        e != null && O('scrollend', u)
        break
      case 'onClick':
        e != null && (u.onclick = jn)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!M1.hasOwnProperty(l))
          u: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((a = l.endsWith('Capture')),
              (t = l.slice(2, a ? l.length - 7 : void 0)),
              (n = u[Fu] || null),
              (n = n != null ? n[l] : null),
              typeof n == 'function' && u.removeEventListener(t, n, a),
              typeof e == 'function')
            ) {
              ;(typeof n != 'function' &&
                n !== null &&
                (l in u
                  ? (u[l] = null)
                  : u.hasAttribute(l) && u.removeAttribute(l)),
                u.addEventListener(t, e, a))
              break u
            }
            l in u ? (u[l] = e) : e === !0 ? u.setAttribute(l, '') : Xa(u, l, e)
          }
    }
  }
  function su(u, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ;(O('error', u), O('load', u))
        var e = !1,
          a = !1,
          n
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var i = l[n]
            if (i != null)
              switch (n) {
                case 'src':
                  e = !0
                  break
                case 'srcSet':
                  a = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(v(137, t))
                default:
                  G(u, t, n, i, l, null)
              }
          }
        ;(a && G(u, t, 'srcSet', l.srcSet, l, null),
          e && G(u, t, 'src', l.src, l, null))
        return
      case 'input':
        O('invalid', u)
        var c = (n = i = a = null),
          f = null,
          o = null
        for (e in l)
          if (l.hasOwnProperty(e)) {
            var d = l[e]
            if (d != null)
              switch (e) {
                case 'name':
                  a = d
                  break
                case 'type':
                  i = d
                  break
                case 'checked':
                  f = d
                  break
                case 'defaultChecked':
                  o = d
                  break
                case 'value':
                  n = d
                  break
                case 'defaultValue':
                  c = d
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (d != null) throw Error(v(137, t))
                  break
                default:
                  G(u, t, e, d, l, null)
              }
          }
        ;(R1(u, n, c, f, o, i, a, !1), en(u))
        return
      case 'select':
        ;(O('invalid', u), (e = i = n = null))
        for (a in l)
          if (l.hasOwnProperty(a) && ((c = l[a]), c != null))
            switch (a) {
              case 'value':
                n = c
                break
              case 'defaultValue':
                i = c
                break
              case 'multiple':
                e = c
              default:
                G(u, t, a, c, l, null)
            }
        ;((t = n),
          (l = i),
          (u.multiple = !!e),
          t != null ? xl(u, !!e, t, !1) : l != null && xl(u, !!e, l, !0))
        return
      case 'textarea':
        ;(O('invalid', u), (n = a = e = null))
        for (i in l)
          if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
            switch (i) {
              case 'value':
                e = c
                break
              case 'defaultValue':
                a = c
                break
              case 'children':
                n = c
                break
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(v(91))
                break
              default:
                G(u, t, i, c, l, null)
            }
        ;(q1(u, e, a, n), en(u))
        return
      case 'option':
        for (f in l)
          if (l.hasOwnProperty(f) && ((e = l[f]), e != null))
            switch (f) {
              case 'selected':
                u.selected = e && typeof e != 'function' && typeof e != 'symbol'
                break
              default:
                G(u, t, f, e, l, null)
            }
        return
      case 'dialog':
        ;(O('beforetoggle', u), O('toggle', u), O('cancel', u), O('close', u))
        break
      case 'iframe':
      case 'object':
        O('load', u)
        break
      case 'video':
      case 'audio':
        for (e = 0; e < Le.length; e++) O(Le[e], u)
        break
      case 'image':
        ;(O('error', u), O('load', u))
        break
      case 'details':
        O('toggle', u)
        break
      case 'embed':
      case 'source':
      case 'link':
        ;(O('error', u), O('load', u))
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (o in l)
          if (l.hasOwnProperty(o) && ((e = l[o]), e != null))
            switch (o) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(v(137, t))
              default:
                G(u, t, o, e, l, null)
            }
        return
      default:
        if (Kc(t)) {
          for (d in l)
            l.hasOwnProperty(d) &&
              ((e = l[d]), e !== void 0 && Nc(u, t, d, e, l, void 0))
          return
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && ((e = l[c]), e != null && G(u, t, c, e, l, null))
  }
  function Rr(u, t, l, e) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var a = null,
          n = null,
          i = null,
          c = null,
          f = null,
          o = null,
          d = null
        for (r in l) {
          var y = l[r]
          if (l.hasOwnProperty(r) && y != null)
            switch (r) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                f = y
              default:
                e.hasOwnProperty(r) || G(u, t, r, null, e, y)
            }
        }
        for (var A in e) {
          var r = e[A]
          if (((y = l[A]), e.hasOwnProperty(A) && (r != null || y != null)))
            switch (A) {
              case 'type':
                n = r
                break
              case 'name':
                a = r
                break
              case 'checked':
                o = r
                break
              case 'defaultChecked':
                d = r
                break
              case 'value':
                i = r
                break
              case 'defaultValue':
                c = r
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(v(137, t))
                break
              default:
                r !== y && G(u, t, A, r, e, y)
            }
        }
        uc(u, i, c, f, o, d, n, a)
        return
      case 'select':
        r = i = c = A = null
        for (n in l)
          if (((f = l[n]), l.hasOwnProperty(n) && f != null))
            switch (n) {
              case 'value':
                break
              case 'multiple':
                r = f
              default:
                e.hasOwnProperty(n) || G(u, t, n, null, e, f)
            }
        for (a in e)
          if (
            ((n = e[a]),
            (f = l[a]),
            e.hasOwnProperty(a) && (n != null || f != null))
          )
            switch (a) {
              case 'value':
                A = n
                break
              case 'defaultValue':
                c = n
                break
              case 'multiple':
                i = n
              default:
                n !== f && G(u, t, a, n, e, f)
            }
        ;((t = c),
          (l = i),
          (e = r),
          A != null
            ? xl(u, !!l, A, !1)
            : !!e != !!l &&
              (t != null ? xl(u, !!l, t, !0) : xl(u, !!l, l ? [] : '', !1)))
        return
      case 'textarea':
        r = A = null
        for (c in l)
          if (
            ((a = l[c]),
            l.hasOwnProperty(c) && a != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case 'value':
                break
              case 'children':
                break
              default:
                G(u, t, c, null, e, a)
            }
        for (i in e)
          if (
            ((a = e[i]),
            (n = l[i]),
            e.hasOwnProperty(i) && (a != null || n != null))
          )
            switch (i) {
              case 'value':
                A = a
                break
              case 'defaultValue':
                r = a
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(v(91))
                break
              default:
                a !== n && G(u, t, i, a, e, n)
            }
        H1(u, A, r)
        return
      case 'option':
        for (var g in l)
          if (
            ((A = l[g]),
            l.hasOwnProperty(g) && A != null && !e.hasOwnProperty(g))
          )
            switch (g) {
              case 'selected':
                u.selected = !1
                break
              default:
                G(u, t, g, null, e, A)
            }
        for (f in e)
          if (
            ((A = e[f]),
            (r = l[f]),
            e.hasOwnProperty(f) && A !== r && (A != null || r != null))
          )
            switch (f) {
              case 'selected':
                u.selected = A && typeof A != 'function' && typeof A != 'symbol'
                break
              default:
                G(u, t, f, A, e, r)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var C in l)
          ((A = l[C]),
            l.hasOwnProperty(C) &&
              A != null &&
              !e.hasOwnProperty(C) &&
              G(u, t, C, null, e, A))
        for (o in e)
          if (
            ((A = e[o]),
            (r = l[o]),
            e.hasOwnProperty(o) && A !== r && (A != null || r != null))
          )
            switch (o) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(v(137, t))
                break
              default:
                G(u, t, o, A, e, r)
            }
        return
      default:
        if (Kc(t)) {
          for (var U in l)
            ((A = l[U]),
              l.hasOwnProperty(U) &&
                A !== void 0 &&
                !e.hasOwnProperty(U) &&
                Nc(u, t, U, void 0, e, A))
          for (d in e)
            ((A = e[d]),
              (r = l[d]),
              !e.hasOwnProperty(d) ||
                A === r ||
                (A === void 0 && r === void 0) ||
                Nc(u, t, d, A, e, r))
          return
        }
    }
    for (var s in l)
      ((A = l[s]),
        l.hasOwnProperty(s) &&
          A != null &&
          !e.hasOwnProperty(s) &&
          G(u, t, s, null, e, A))
    for (y in e)
      ((A = e[y]),
        (r = l[y]),
        !e.hasOwnProperty(y) ||
          A === r ||
          (A == null && r == null) ||
          G(u, t, y, A, e, r))
  }
  var Mc = null,
    _c = null
  function Bn(u) {
    return u.nodeType === 9 ? u : u.ownerDocument
  }
  function l1(u) {
    switch (u) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Gs(u, t) {
    if (u === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return u === 1 && t === 'foreignObject' ? 0 : u
  }
  function Uc(u, t) {
    return (
      u === 'textarea' ||
      u === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var Vi = null
  function Hr() {
    var u = window.event
    return u && u.type === 'popstate'
      ? u === Vi
        ? !1
        : ((Vi = u), !0)
      : ((Vi = null), !1)
  }
  var Xs = typeof setTimeout == 'function' ? setTimeout : void 0,
    qr = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    e1 = typeof Promise == 'function' ? Promise : void 0,
    Yr =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof e1 < 'u'
          ? function (u) {
              return e1.resolve(null).then(u).catch(xr)
            }
          : Xs
  function xr(u) {
    setTimeout(function () {
      throw u
    })
  }
  function Jt(u) {
    return u === 'head'
  }
  function a1(u, t) {
    var l = t,
      e = 0,
      a = 0
    do {
      var n = l.nextSibling
      if ((u.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$')) {
          if (0 < e && 8 > e) {
            l = e
            var i = u.ownerDocument
            if ((l & 1 && Ye(i.documentElement), l & 2 && Ye(i.body), l & 4))
              for (l = i.head, Ye(l), i = l.firstChild; i; ) {
                var c = i.nextSibling,
                  f = i.nodeName
                ;(i[la] ||
                  f === 'SCRIPT' ||
                  f === 'STYLE' ||
                  (f === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(i),
                  (i = c))
              }
          }
          if (a === 0) {
            ;(u.removeChild(n), $e(t))
            return
          }
          a--
        } else
          l === '$' || l === '$?' || l === '$!'
            ? a++
            : (e = l.charCodeAt(0) - 48)
      else e = 0
      l = n
    } while (l)
    $e(t)
  }
  function Rc(u) {
    var t = u.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          ;(Rc(l), Lc(l))
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      u.removeChild(l)
    }
  }
  function Gr(u, t, l, e) {
    for (; u.nodeType === 1; ) {
      var a = l
      if (u.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (u.nodeName !== 'INPUT' || u.type !== 'hidden')) break
      } else if (e) {
        if (!u[la])
          switch (t) {
            case 'meta':
              if (!u.hasAttribute('itemprop')) break
              return u
            case 'link':
              if (
                ((n = u.getAttribute('rel')),
                n === 'stylesheet' && u.hasAttribute('data-precedence'))
              )
                break
              if (
                n !== a.rel ||
                u.getAttribute('href') !==
                  (a.href == null || a.href === '' ? null : a.href) ||
                u.getAttribute('crossorigin') !==
                  (a.crossOrigin == null ? null : a.crossOrigin) ||
                u.getAttribute('title') !== (a.title == null ? null : a.title)
              )
                break
              return u
            case 'style':
              if (u.hasAttribute('data-precedence')) break
              return u
            case 'script':
              if (
                ((n = u.getAttribute('src')),
                (n !== (a.src == null ? null : a.src) ||
                  u.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  u.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  n &&
                  u.hasAttribute('async') &&
                  !u.hasAttribute('itemprop'))
              )
                break
              return u
            default:
              return u
          }
      } else if (t === 'input' && u.type === 'hidden') {
        var n = a.name == null ? null : '' + a.name
        if (a.type === 'hidden' && u.getAttribute('name') === n) return u
      } else return u
      if (((u = ju(u.nextSibling)), u === null)) break
    }
    return null
  }
  function Xr(u, t, l) {
    if (t === '') return null
    for (; u.nodeType !== 3; )
      if (
        ((u.nodeType !== 1 || u.nodeName !== 'INPUT' || u.type !== 'hidden') &&
          !l) ||
        ((u = ju(u.nextSibling)), u === null)
      )
        return null
    return u
  }
  function Hc(u) {
    return (
      u.data === '$!' ||
      (u.data === '$?' && u.ownerDocument.readyState === 'complete')
    )
  }
  function Qr(u, t) {
    var l = u.ownerDocument
    if (u.data !== '$?' || l.readyState === 'complete') t()
    else {
      var e = function () {
        ;(t(), l.removeEventListener('DOMContentLoaded', e))
      }
      ;(l.addEventListener('DOMContentLoaded', e), (u._reactRetry = e))
    }
  }
  function ju(u) {
    for (; u != null; u = u.nextSibling) {
      var t = u.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = u.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break
        if (t === '/$') return null
      }
    }
    return u
  }
  var qc = null
  function n1(u) {
    u = u.previousSibling
    for (var t = 0; u; ) {
      if (u.nodeType === 8) {
        var l = u.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return u
          t--
        } else l === '/$' && t++
      }
      u = u.previousSibling
    }
    return null
  }
  function Qs(u, t, l) {
    switch (((t = Bn(l)), u)) {
      case 'html':
        if (((u = t.documentElement), !u)) throw Error(v(452))
        return u
      case 'head':
        if (((u = t.head), !u)) throw Error(v(453))
        return u
      case 'body':
        if (((u = t.body), !u)) throw Error(v(454))
        return u
      default:
        throw Error(v(451))
    }
  }
  function Ye(u) {
    for (var t = u.attributes; t.length; ) u.removeAttributeNode(t[0])
    Lc(u)
  }
  var Qu = new Map(),
    i1 = new Set()
  function pn(u) {
    return typeof u.getRootNode == 'function'
      ? u.getRootNode()
      : u.nodeType === 9
        ? u
        : u.ownerDocument
  }
  var mt = q.d
  q.d = {f: Zr, r: jr, D: Vr, C: Lr, L: Kr, m: Jr, X: Wr, S: wr, M: kr}
  function Zr() {
    var u = mt.f(),
      t = Xn()
    return u || t
  }
  function jr(u) {
    var t = ee(u)
    t !== null && t.tag === 5 && t.type === 'form' ? Ro(t) : mt.r(u)
  }
  var ie = typeof document > 'u' ? null : document
  function Zs(u, t, l) {
    var e = ie
    if (e && typeof t == 'string' && t) {
      var a = Yu(t)
      ;((a = 'link[rel="' + u + '"][href="' + a + '"]'),
        typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
        i1.has(a) ||
          (i1.add(a),
          (u = {rel: u, crossOrigin: l, href: t}),
          e.querySelector(a) === null &&
            ((t = e.createElement('link')),
            su(t, 'link', u),
            iu(t),
            e.head.appendChild(t))))
    }
  }
  function Vr(u) {
    ;(mt.D(u), Zs('dns-prefetch', u, null))
  }
  function Lr(u, t) {
    ;(mt.C(u, t), Zs('preconnect', u, t))
  }
  function Kr(u, t, l) {
    mt.L(u, t, l)
    var e = ie
    if (e && u && t) {
      var a = 'link[rel="preload"][as="' + Yu(t) + '"]'
      t === 'image' && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + Yu(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (a += '[imagesizes="' + Yu(l.imageSizes) + '"]'))
        : (a += '[href="' + Yu(u) + '"]')
      var n = a
      switch (t) {
        case 'style':
          n = te(u)
          break
        case 'script':
          n = ce(u)
      }
      Qu.has(n) ||
        ((u = j(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : u,
            as: t
          },
          l
        )),
        Qu.set(n, u),
        e.querySelector(a) !== null ||
          (t === 'style' && e.querySelector(Ea(n))) ||
          (t === 'script' && e.querySelector(ra(n))) ||
          ((t = e.createElement('link')),
          su(t, 'link', u),
          iu(t),
          e.head.appendChild(t)))
    }
  }
  function Jr(u, t) {
    mt.m(u, t)
    var l = ie
    if (l && u) {
      var e = t && typeof t.as == 'string' ? t.as : 'script',
        a =
          'link[rel="modulepreload"][as="' + Yu(e) + '"][href="' + Yu(u) + '"]',
        n = a
      switch (e) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = ce(u)
      }
      if (
        !Qu.has(n) &&
        ((u = j({rel: 'modulepreload', href: u}, t)),
        Qu.set(n, u),
        l.querySelector(a) === null)
      ) {
        switch (e) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(ra(n))) return
        }
        ;((e = l.createElement('link')),
          su(e, 'link', u),
          iu(e),
          l.head.appendChild(e))
      }
    }
  }
  function wr(u, t, l) {
    mt.S(u, t, l)
    var e = ie
    if (e && u) {
      var a = Yl(e).hoistableStyles,
        n = te(u)
      t = t || 'default'
      var i = a.get(n)
      if (!i) {
        var c = {loading: 0, preload: null}
        if ((i = e.querySelector(Ea(n)))) c.loading = 5
        else {
          ;((u = j({rel: 'stylesheet', href: u, 'data-precedence': t}, l)),
            (l = Qu.get(n)) && Of(u, l))
          var f = (i = e.createElement('link'))
          ;(iu(f),
            su(f, 'link', u),
            (f._p = new Promise(function (o, d) {
              ;((f.onload = o), (f.onerror = d))
            })),
            f.addEventListener('load', function () {
              c.loading |= 1
            }),
            f.addEventListener('error', function () {
              c.loading |= 2
            }),
            (c.loading |= 4),
            ka(i, t, e))
        }
        ;((i = {type: 'stylesheet', instance: i, count: 1, state: c}),
          a.set(n, i))
      }
    }
  }
  function Wr(u, t) {
    mt.X(u, t)
    var l = ie
    if (l && u) {
      var e = Yl(l).hoistableScripts,
        a = ce(u),
        n = e.get(a)
      n ||
        ((n = l.querySelector(ra(a))),
        n ||
          ((u = j({src: u, async: !0}, t)),
          (t = Qu.get(a)) && Nf(u, t),
          (n = l.createElement('script')),
          iu(n),
          su(n, 'link', u),
          l.head.appendChild(n)),
        (n = {type: 'script', instance: n, count: 1, state: null}),
        e.set(a, n))
    }
  }
  function kr(u, t) {
    mt.M(u, t)
    var l = ie
    if (l && u) {
      var e = Yl(l).hoistableScripts,
        a = ce(u),
        n = e.get(a)
      n ||
        ((n = l.querySelector(ra(a))),
        n ||
          ((u = j({src: u, async: !0, type: 'module'}, t)),
          (t = Qu.get(a)) && Nf(u, t),
          (n = l.createElement('script')),
          iu(n),
          su(n, 'link', u),
          l.head.appendChild(n)),
        (n = {type: 'script', instance: n, count: 1, state: null}),
        e.set(a, n))
    }
  }
  function c1(u, t, l, e) {
    var a = (a = Ht.current) ? pn(a) : null
    if (!a) throw Error(v(446))
    switch (u) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = te(l.href)),
            (l = Yl(a).hoistableStyles),
            (e = l.get(t)),
            e ||
              ((e = {type: 'style', instance: null, count: 0, state: null}),
              l.set(t, e)),
            e)
          : {type: 'void', instance: null, count: 0, state: null}
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          u = te(l.href)
          var n = Yl(a).hoistableStyles,
            i = n.get(u)
          if (
            (i ||
              ((a = a.ownerDocument || a),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: {loading: 0, preload: null}
              }),
              n.set(u, i),
              (n = a.querySelector(Ea(u))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              Qu.has(u) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy
                }),
                Qu.set(u, l),
                n || $r(a, u, l, i.state))),
            t && e === null)
          )
            throw Error(v(528, ''))
          return i
        }
        if (t && e !== null) throw Error(v(529, ''))
        return null
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = ce(l)),
              (l = Yl(a).hoistableScripts),
              (e = l.get(t)),
              e ||
                ((e = {type: 'script', instance: null, count: 0, state: null}),
                l.set(t, e)),
              e)
            : {type: 'void', instance: null, count: 0, state: null}
        )
      default:
        throw Error(v(444, u))
    }
  }
  function te(u) {
    return 'href="' + Yu(u) + '"'
  }
  function Ea(u) {
    return 'link[rel="stylesheet"][' + u + ']'
  }
  function js(u) {
    return j({}, u, {'data-precedence': u.precedence, precedence: null})
  }
  function $r(u, t, l, e) {
    u.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (e.loading = 1)
      : ((t = u.createElement('link')),
        (e.preload = t),
        t.addEventListener('load', function () {
          return (e.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (e.loading |= 2)
        }),
        su(t, 'link', l),
        iu(t),
        u.head.appendChild(t))
  }
  function ce(u) {
    return '[src="' + Yu(u) + '"]'
  }
  function ra(u) {
    return 'script[async]' + u
  }
  function f1(u, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var e = u.querySelector('style[data-href~="' + Yu(l.href) + '"]')
          if (e) return ((t.instance = e), iu(e), e)
          var a = j({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null
          })
          return (
            (e = (u.ownerDocument || u).createElement('style')),
            iu(e),
            su(e, 'style', a),
            ka(e, l.precedence, u),
            (t.instance = e)
          )
        case 'stylesheet':
          a = te(l.href)
          var n = u.querySelector(Ea(a))
          if (n) return ((t.state.loading |= 4), (t.instance = n), iu(n), n)
          ;((e = js(l)),
            (a = Qu.get(a)) && Of(e, a),
            (n = (u.ownerDocument || u).createElement('link')),
            iu(n))
          var i = n
          return (
            (i._p = new Promise(function (c, f) {
              ;((i.onload = c), (i.onerror = f))
            })),
            su(n, 'link', e),
            (t.state.loading |= 4),
            ka(n, l.precedence, u),
            (t.instance = n)
          )
        case 'script':
          return (
            (n = ce(l.src)),
            (a = u.querySelector(ra(n)))
              ? ((t.instance = a), iu(a), a)
              : ((e = l),
                (a = Qu.get(n)) && ((e = j({}, l)), Nf(e, a)),
                (u = u.ownerDocument || u),
                (a = u.createElement('script')),
                iu(a),
                su(a, 'link', e),
                u.head.appendChild(a),
                (t.instance = a))
          )
        case 'void':
          return null
        default:
          throw Error(v(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), ka(e, l.precedence, u))
    return t.instance
  }
  function ka(u, t, l) {
    for (
      var e = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        a = e.length ? e[e.length - 1] : null,
        n = a,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i]
      if (c.dataset.precedence === t) n = c
      else if (n !== a) break
    }
    n
      ? n.parentNode.insertBefore(u, n.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(u, t.firstChild))
  }
  function Of(u, t) {
    ;(u.crossOrigin == null && (u.crossOrigin = t.crossOrigin),
      u.referrerPolicy == null && (u.referrerPolicy = t.referrerPolicy),
      u.title == null && (u.title = t.title))
  }
  function Nf(u, t) {
    ;(u.crossOrigin == null && (u.crossOrigin = t.crossOrigin),
      u.referrerPolicy == null && (u.referrerPolicy = t.referrerPolicy),
      u.integrity == null && (u.integrity = t.integrity))
  }
  var $a = null
  function D1(u, t, l) {
    if ($a === null) {
      var e = new Map(),
        a = ($a = new Map())
      a.set(l, e)
    } else ((a = $a), (e = a.get(l)), e || ((e = new Map()), a.set(l, e)))
    if (e.has(u)) return e
    for (
      e.set(u, null), l = l.getElementsByTagName(u), a = 0;
      a < l.length;
      a++
    ) {
      var n = l[a]
      if (
        !(
          n[la] ||
          n[ru] ||
          (u === 'link' && n.getAttribute('rel') === 'stylesheet')
        ) &&
        n.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = n.getAttribute(t) || ''
        i = u + i
        var c = e.get(i)
        c ? c.push(n) : e.set(i, [n])
      }
    }
    return e
  }
  function o1(u, t, l) {
    ;((u = u.ownerDocument || u),
      u.head.insertBefore(
        l,
        t === 'title' ? u.querySelector('head > title') : null
      ))
  }
  function Pr(u, t, l) {
    if (l === 1 || t.itemProp != null) return !1
    switch (u) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        switch (t.rel) {
          case 'stylesheet':
            return (
              (u = t.disabled),
              typeof t.precedence == 'string' && u == null
            )
          default:
            return !0
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function Vs(u) {
    return !(u.type === 'stylesheet' && (u.state.loading & 3) === 0)
  }
  var Je = null
  function Ir() {}
  function u3(u, t, l) {
    if (Je === null) throw Error(v(475))
    var e = Je
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var a = te(l.href),
          n = u.querySelector(Ea(a))
        if (n) {
          ;((u = n._p),
            u !== null &&
              typeof u == 'object' &&
              typeof u.then == 'function' &&
              (e.count++, (e = bn.bind(e)), u.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = n),
            iu(n))
          return
        }
        ;((n = u.ownerDocument || u),
          (l = js(l)),
          (a = Qu.get(a)) && Of(l, a),
          (n = n.createElement('link')),
          iu(n))
        var i = n
        ;((i._p = new Promise(function (c, f) {
          ;((i.onload = c), (i.onerror = f))
        })),
          su(n, 'link', l),
          (t.instance = n))
      }
      ;(e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, u),
        (u = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = bn.bind(e)),
          u.addEventListener('load', t),
          u.addEventListener('error', t)))
    }
  }
  function t3() {
    if (Je === null) throw Error(v(475))
    var u = Je
    return (
      u.stylesheets && u.count === 0 && Yc(u, u.stylesheets),
      0 < u.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((u.stylesheets && Yc(u, u.stylesheets), u.unsuspend)) {
                var e = u.unsuspend
                ;((u.unsuspend = null), e())
              }
            }, 6e4)
            return (
              (u.unsuspend = t),
              function () {
                ;((u.unsuspend = null), clearTimeout(l))
              }
            )
          }
        : null
    )
  }
  function bn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Yc(this, this.stylesheets)
      else if (this.unsuspend) {
        var u = this.unsuspend
        ;((this.unsuspend = null), u())
      }
    }
  }
  var Tn = null
  function Yc(u, t) {
    ;((u.stylesheets = null),
      u.unsuspend !== null &&
        (u.count++,
        (Tn = new Map()),
        t.forEach(l3, u),
        (Tn = null),
        bn.call(u)))
  }
  function l3(u, t) {
    if (!(t.state.loading & 4)) {
      var l = Tn.get(u)
      if (l) var e = l.get(null)
      else {
        ;((l = new Map()), Tn.set(u, l))
        for (
          var a = u.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            n = 0;
          n < a.length;
          n++
        ) {
          var i = a[n]
          ;(i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (l.set(i.dataset.precedence, i), (e = i))
        }
        e && l.set(null, e)
      }
      ;((a = t.instance),
        (i = a.getAttribute('data-precedence')),
        (n = l.get(i) || e),
        n === e && l.set(null, a),
        l.set(i, a),
        this.count++,
        (e = bn.bind(this)),
        a.addEventListener('load', e),
        a.addEventListener('error', e),
        n
          ? n.parentNode.insertBefore(a, n.nextSibling)
          : ((u = u.nodeType === 9 ? u.head : u),
            u.insertBefore(a, u.firstChild)),
        (t.state.loading |= 4))
    }
  }
  var we = {
    $$typeof: ft,
    Provider: null,
    Consumer: null,
    _currentValue: It,
    _currentValue2: It,
    _threadCount: 0
  }
  function e3(u, t, l, e, a, n, i, c) {
    ;((this.tag = 1),
      (this.containerInfo = u),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = di(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = di(0)),
      (this.hiddenUpdates = di(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = a),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()))
  }
  function Ls(u, t, l, e, a, n, i, c, f, o, d, y) {
    return (
      (u = new e3(u, t, l, i, c, f, o, y)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = bu(3, null, null, t)),
      (u.current = n),
      (n.stateNode = u),
      (t = ef()),
      t.refCount++,
      (u.pooledCache = t),
      t.refCount++,
      (n.memoizedState = {element: e, isDehydrated: l, cache: t}),
      nf(n),
      u
    )
  }
  function Ks(u) {
    return u ? ((u = Ul), u) : Ul
  }
  function Js(u, t, l, e, a, n) {
    ;((a = Ks(a)),
      e.context === null ? (e.context = a) : (e.pendingContext = a),
      (e = qt(t)),
      (e.payload = {element: l}),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (l = Yt(u, e, t)),
      l !== null && (Nu(l, u, t), Oe(l, u, t)))
  }
  function s1(u, t) {
    if (((u = u.memoizedState), u !== null && u.dehydrated !== null)) {
      var l = u.retryLane
      u.retryLane = l !== 0 && l < t ? l : t
    }
  }
  function Mf(u, t) {
    ;(s1(u, t), (u = u.alternate) && s1(u, t))
  }
  function ws(u) {
    if (u.tag === 13) {
      var t = ae(u, 67108864)
      ;(t !== null && Nu(t, u, 67108864), Mf(u, 67108864))
    }
  }
  var zn = !0
  function a3(u, t, l, e) {
    var a = B.T
    B.T = null
    var n = q.p
    try {
      ;((q.p = 2), _f(u, t, l, e))
    } finally {
      ;((q.p = n), (B.T = a))
    }
  }
  function n3(u, t, l, e) {
    var a = B.T
    B.T = null
    var n = q.p
    try {
      ;((q.p = 8), _f(u, t, l, e))
    } finally {
      ;((q.p = n), (B.T = a))
    }
  }
  function _f(u, t, l, e) {
    if (zn) {
      var a = xc(e)
      if (a === null) (ji(u, t, e, On, l), E1(u, e))
      else if (c3(a, u, t, l, e)) e.stopPropagation()
      else if ((E1(u, e), t & 4 && -1 < i3.indexOf(u))) {
        for (; a !== null; ) {
          var n = ee(a)
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = kt(n.pendingLanes)
                  if (i !== 0) {
                    var c = n
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - zu(i))
                      ;((c.entanglements[1] |= f), (i &= ~f))
                    }
                    ;(tt(n), (x & 6) === 0 && ((mn = Pu() + 500), sa(0, !1)))
                  }
                }
                break
              case 13:
                ;((c = ae(n, 2)), c !== null && Nu(c, n, 2), Xn(), Mf(n, 2))
            }
          if (((n = xc(e)), n === null && ji(u, t, e, On, l), n === a)) break
          a = n
        }
        a !== null && e.stopPropagation()
      } else ji(u, t, e, null, l)
    }
  }
  function xc(u) {
    return ((u = Jc(u)), Uf(u))
  }
  var On = null
  function Uf(u) {
    if (((On = null), (u = Tl(u)), u !== null)) {
      var t = Pe(u)
      if (t === null) u = null
      else {
        var l = t.tag
        if (l === 13) {
          if (((u = v1(t)), u !== null)) return u
          u = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          u = null
        } else t !== u && (u = null)
      }
    }
    return ((On = u), null)
  }
  function Ws(u) {
    switch (u) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (J2()) {
          case g1:
            return 2
          case S1:
            return 8
          case ln:
          case w2:
            return 32
          case B1:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Gc = !1,
    Xt = null,
    Qt = null,
    Zt = null,
    We = new Map(),
    ke = new Map(),
    Nt = [],
    i3 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function E1(u, t) {
    switch (u) {
      case 'focusin':
      case 'focusout':
        Xt = null
        break
      case 'dragenter':
      case 'dragleave':
        Qt = null
        break
      case 'mouseover':
      case 'mouseout':
        Zt = null
        break
      case 'pointerover':
      case 'pointerout':
        We.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        ke.delete(t.pointerId)
    }
  }
  function ve(u, t, l, e, a, n) {
    return u === null || u.nativeEvent !== n
      ? ((u = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [a]
        }),
        t !== null && ((t = ee(t)), t !== null && ws(t)),
        u)
      : ((u.eventSystemFlags |= e),
        (t = u.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        u)
  }
  function c3(u, t, l, e, a) {
    switch (t) {
      case 'focusin':
        return ((Xt = ve(Xt, u, t, l, e, a)), !0)
      case 'dragenter':
        return ((Qt = ve(Qt, u, t, l, e, a)), !0)
      case 'mouseover':
        return ((Zt = ve(Zt, u, t, l, e, a)), !0)
      case 'pointerover':
        var n = a.pointerId
        return (We.set(n, ve(We.get(n) || null, u, t, l, e, a)), !0)
      case 'gotpointercapture':
        return (
          (n = a.pointerId),
          ke.set(n, ve(ke.get(n) || null, u, t, l, e, a)),
          !0
        )
    }
    return !1
  }
  function ks(u) {
    var t = Tl(u.target)
    if (t !== null) {
      var l = Pe(t)
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = v1(l)), t !== null)) {
            ;((u.blockedOn = t),
              lE(u.priority, function () {
                if (l.tag === 13) {
                  var e = Ou()
                  e = jc(e)
                  var a = ae(l, e)
                  ;(a !== null && Nu(a, l, e), Mf(l, e))
                }
              }))
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          u.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    u.blockedOn = null
  }
  function Pa(u) {
    if (u.blockedOn !== null) return !1
    for (var t = u.targetContainers; 0 < t.length; ) {
      var l = xc(u.nativeEvent)
      if (l === null) {
        l = u.nativeEvent
        var e = new l.constructor(l.type, l)
        ;((lc = e), l.target.dispatchEvent(e), (lc = null))
      } else return ((t = ee(l)), t !== null && ws(t), (u.blockedOn = l), !1)
      t.shift()
    }
    return !0
  }
  function r1(u, t, l) {
    Pa(u) && l.delete(t)
  }
  function f3() {
    ;((Gc = !1),
      Xt !== null && Pa(Xt) && (Xt = null),
      Qt !== null && Pa(Qt) && (Qt = null),
      Zt !== null && Pa(Zt) && (Zt = null),
      We.forEach(r1),
      ke.forEach(r1))
  }
  function xa(u, t) {
    u.blockedOn === t &&
      ((u.blockedOn = null),
      Gc ||
        ((Gc = !0),
        eu.unstable_scheduleCallback(eu.unstable_NormalPriority, f3)))
  }
  var Ga = null
  function A1(u) {
    Ga !== u &&
      ((Ga = u),
      eu.unstable_scheduleCallback(eu.unstable_NormalPriority, function () {
        Ga === u && (Ga = null)
        for (var t = 0; t < u.length; t += 3) {
          var l = u[t],
            e = u[t + 1],
            a = u[t + 2]
          if (typeof e != 'function') {
            if (Uf(e || l) === null) continue
            break
          }
          var n = ee(l)
          n !== null &&
            (u.splice(t, 3),
            (t -= 3),
            vc(n, {pending: !0, data: a, method: l.method, action: e}, e, a))
        }
      }))
  }
  function $e(u) {
    function t(f) {
      return xa(f, u)
    }
    ;(Xt !== null && xa(Xt, u),
      Qt !== null && xa(Qt, u),
      Zt !== null && xa(Zt, u),
      We.forEach(t),
      ke.forEach(t))
    for (var l = 0; l < Nt.length; l++) {
      var e = Nt[l]
      e.blockedOn === u && (e.blockedOn = null)
    }
    for (; 0 < Nt.length && ((l = Nt[0]), l.blockedOn === null); )
      (ks(l), l.blockedOn === null && Nt.shift())
    if (((l = (u.ownerDocument || u).$$reactFormReplay), l != null))
      for (e = 0; e < l.length; e += 3) {
        var a = l[e],
          n = l[e + 1],
          i = a[Fu] || null
        if (typeof n == 'function') i || A1(l)
        else if (i) {
          var c = null
          if (n && n.hasAttribute('formAction')) {
            if (((a = n), (i = n[Fu] || null))) c = i.formAction
            else if (Uf(a) !== null) continue
          } else c = i.action
          ;(typeof c == 'function'
            ? (l[e + 1] = c)
            : (l.splice(e, 3), (e -= 3)),
            A1(l))
        }
      }
  }
  function Rf(u) {
    this._internalRoot = u
  }
  Vn.prototype.render = Rf.prototype.render = function (u) {
    var t = this._internalRoot
    if (t === null) throw Error(v(409))
    var l = t.current,
      e = Ou()
    Js(l, e, u, t, null, null)
  }
  Vn.prototype.unmount = Rf.prototype.unmount = function () {
    var u = this._internalRoot
    if (u !== null) {
      this._internalRoot = null
      var t = u.containerInfo
      ;(Js(u.current, 2, null, u, null, null), Xn(), (t[le] = null))
    }
  }
  function Vn(u) {
    this._internalRoot = u
  }
  Vn.prototype.unstable_scheduleHydration = function (u) {
    if (u) {
      var t = O1()
      u = {blockedOn: null, target: u, priority: t}
      for (var l = 0; l < Nt.length && t !== 0 && t < Nt[l].priority; l++);
      ;(Nt.splice(l, 0, u), l === 0 && ks(u))
    }
  }
  var d1 = y1.version
  if (d1 !== '19.1.0') throw Error(v(527, d1, '19.1.0'))
  q.findDOMNode = function (u) {
    var t = u._reactInternals
    if (t === void 0)
      throw typeof u.render == 'function'
        ? Error(v(188))
        : ((u = Object.keys(u).join(',')), Error(v(268, u)))
    return (
      (u = X2(t)),
      (u = u !== null ? m1(u) : null),
      (u = u === null ? null : u.stateNode),
      u
    )
  }
  var D3 = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: B,
    reconcilerVersion: '19.1.0'
  }
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    ((me = __REACT_DEVTOOLS_GLOBAL_HOOK__), !me.isDisabled && me.supportsFiber)
  )
    try {
      ;((Ie = me.inject(D3)), (Tu = me))
    } catch {}
  var me
  Ln.createRoot = function (u, t) {
    if (!h1(u)) throw Error(v(299))
    var l = !1,
      e = '',
      a = Lo,
      n = Ko,
      i = Jo,
      c = null
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 &&
          (c = t.unstable_transitionCallbacks)),
      (t = Ls(u, 1, !1, null, null, l, e, a, n, i, c, null)),
      (u[le] = t.current),
      zf(u),
      new Rf(t)
    )
  }
  Ln.hydrateRoot = function (u, t, l) {
    if (!h1(u)) throw Error(v(299))
    var e = !1,
      a = '',
      n = Lo,
      i = Ko,
      c = Jo,
      f = null,
      o = null
    return (
      l != null &&
        (l.unstable_strictMode === !0 && (e = !0),
        l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
        l.onCaughtError !== void 0 && (i = l.onCaughtError),
        l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 &&
          (f = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (o = l.formState)),
      (t = Ls(u, 1, !0, t, l ?? null, e, a, n, i, c, f, o)),
      (t.context = Ks(null)),
      (l = t.current),
      (e = Ou()),
      (e = jc(e)),
      (a = qt(e)),
      (a.callback = null),
      Yt(l, a, e),
      (l = e),
      (t.current.lanes = l),
      ta(t, l),
      tt(t),
      (u[le] = t.current),
      zf(u),
      new Vn(t)
    )
  }
  Ln.version = '19.1.0'
})
var u2 = Lu((Cd, Is) => {
  'use strict'
  function Ps() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ps)
      } catch (u) {
        console.error(u)
      }
  }
  ;(Ps(), (Is.exports = $s()))
})
var e2 = Lu((Wn) => {
  'use strict'
  var y3 = Symbol.for('react.transitional.element'),
    h3 = Symbol.for('react.fragment')
  function l2(u, t, l) {
    var e = null
    if (
      (l !== void 0 && (e = '' + l),
      t.key !== void 0 && (e = '' + t.key),
      'key' in t)
    ) {
      l = {}
      for (var a in t) a !== 'key' && (l[a] = t[a])
    } else l = t
    return (
      (t = l.ref),
      {$$typeof: y3, type: u, key: e, ref: t !== void 0 ? t : null, props: l}
    )
  }
  Wn.Fragment = h3
  Wn.jsx = l2
  Wn.jsxs = l2
})
var Gf = Lu((Rd, a2) => {
  'use strict'
  a2.exports = e2()
})
var d2 = []
function p(u) {
  let t = -1
  if (!u || (!Array.isArray(u) && !u.type))
    throw new Error('Expected node, not `' + u + '`')
  if ('value' in u) return u.value
  let l = (Array.isArray(u) ? u : u.children) || d2,
    e = []
  for (; ++t < l.length; ) e[t] = p(l[t])
  return e.join('')
}
var y2 = {}.hasOwnProperty
function kn(u, t, l) {
  let e = -1
  if (!u) throw new Error('Iterate requires that |this| not be ' + u)
  if (!y2.call(u, 'length'))
    throw new Error('Iterate requires that |this| has a `length`')
  if (typeof t != 'function')
    throw new TypeError('`callback` must be a function')
  for (; ++e < u.length; ) {
    if (!(e in u)) continue
    let a = t.call(l, u[e], e, u)
    typeof a == 'number' && (a < 0 && (e = 0), (e = a - 1))
  }
}
function R(u) {
  return t
  function t(e) {
    if (!e || !e.children)
      throw new Error('Missing children in `parent` for `modifier`')
    kn(e.children, l, e)
  }
  function l(e, a) {
    return u(e, a, this)
  }
}
var jf = R(function (u, t, l) {
  let e = l.children[t - 1]
  if (e && 'children' in e && 'children' in u && u.children.length > 0) {
    let a = -1
    for (; u.children[++a]; ) {
      let n = u.children[a]
      if (n.type === 'WordNode') return
      if (n.type === 'SymbolNode' || n.type === 'PunctuationNode') {
        let i = p(n)
        return i !== ',' && i !== ';'
          ? void 0
          : (e.children.push(...u.children),
            e.position && u.position && (e.position.end = u.position.end),
            l.children.splice(t, 1),
            t)
      }
    }
  }
})
var Vf =
    /^([!"').?\u0F3B\u0F3D\u169C\u2019\u201D\u2026\u203A\u203D\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21\u2E23\u2E25\u2E27\u2E29\u2E56\u2E58\u2E5A\u2E5C\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63\u00BB\]}])\1*$/,
  Lf = /^[ \t]*((\r?\n|\r)[\t ]*)+$/,
  da = /^([!.?\u2026\u203D]+)$/,
  Kf = /^([&'\-.:=?@\u00AD\u00B7\u2010\u2011\u2019\u2027]|_+)$/,
  Jf =
    /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDF50-\uDF59\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD839[\uDCF0-\uDCF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/,
  wf = /^\d/,
  Wf =
    /^(?:[a-z\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E\uDF25-\uDF2A]|\uD83A[\uDD22-\uDD43])/,
  kf = /[\uD800-\uDFFF]/,
  $f =
    /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
  Pf =
    /[\dA-Za-z\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF27\uDF30-\uDF54\uDF70-\uDF85\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF]/,
  If = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
var u0 = R(function (u, t, l) {
  if ('children' in u && u.children.length > 0 && t > 0) {
    let e = l.children[t - 1],
      a = u.children[0],
      n = u.children[1]
    if (
      e &&
      e.type === 'SentenceNode' &&
      (a.type === 'SymbolNode' || a.type === 'PunctuationNode') &&
      Vf.test(p(a))
    )
      return (
        u.children.shift(),
        e.children.push(a),
        a.position && e.position && (e.position.end = a.position.end),
        n && n.position && u.position && (u.position.start = n.position.start),
        t - 1
      )
  }
})
var t0 = R(function (u, t, l) {
  if (u.type !== 'SentenceNode') return
  let e = u.children,
    a = 0
  for (; ++a < e.length - 1; ) {
    let n = e[a]
    if (n.type !== 'WhiteSpaceNode' || p(n).split(/\r\n|\r|\n/).length < 3)
      continue
    u.children = e.slice(0, a)
    let i = {type: 'SentenceNode', children: e.slice(a + 1)},
      c = e[a - 1],
      f = e[a + 1]
    if (
      (l.children.splice(t + 1, 0, n, i),
      u.position && c.position && f.position)
    ) {
      let o = u.position.end
      ;((u.position.end = c.position.end),
        (i.position = {start: f.position.start, end: o}))
    }
    return t + 1
  }
})
var $n = R(function (u, t, l) {
  if ('children' in u) {
    let e = u.children[u.children.length - 1]
    if (e && e.type === 'WhiteSpaceNode') {
      ;(u.children.pop(), l.children.splice(t + 1, 0, e))
      let a = u.children[u.children.length - 1]
      return (
        a && a.position && u.position && (u.position.end = a.position.end),
        t
      )
    }
  }
})
function lt(u) {
  return t
  function t(l) {
    let e = l && l.children,
      a = -1
    if (!e) throw new Error('Missing children in `parent` for `visit`')
    for (; ++a in e; ) u(e[a], a, l)
  }
}
var Pn = lt(function (u, t, l) {
  if ('children' in u && u.children) {
    let e = u.children[0]
    if (e && e.type === 'WhiteSpaceNode') {
      ;(u.children.shift(), l.children.splice(t, 0, e))
      let a = u.children[0]
      a && a.position && u.position && (u.position.start = a.position.start)
    }
  }
})
var l0 = R(function (u, t, l) {
  if (
    t > 0 &&
    (u.type === 'SymbolNode' || u.type === 'PunctuationNode') &&
    p(u) === '-'
  ) {
    let e = l.children,
      a = e[t - 1],
      n = e[t + 1]
    if ((!n || n.type !== 'WordNode') && a && a.type === 'WordNode')
      return (
        e.splice(t, 1),
        a.children.push(u),
        a.position && u.position && (a.position.end = u.position.end),
        t
      )
  }
})
var e0 = R(function (u, t, l) {
  let e = l.children[t - 1]
  if (e && e.type === 'SentenceNode' && u.type === 'SentenceNode') {
    let a = u.children[0]
    if (a && a.type === 'WordNode' && wf.test(p(a)))
      return (
        e.children.push(...u.children),
        l.children.splice(t, 1),
        e.position && u.position && (e.position.end = u.position.end),
        t
      )
  }
})
var a0 = R(function (u, t, l) {
  if (u.type === 'SentenceNode' && t > 0) {
    let e = l.children[t - 1],
      a = u.children
    if (a.length > 0 && e.type === 'SentenceNode') {
      let n = -1
      for (; a[++n]; ) {
        let i = a[n]
        if (i.type === 'WordNode')
          return Wf.test(p(i))
            ? (e.children.push(...a),
              l.children.splice(t, 1),
              e.position && u.position && (e.position.end = u.position.end),
              t)
            : void 0
        if (i.type === 'SymbolNode' || i.type === 'PunctuationNode') return
      }
    }
  }
})
var n0 = R(function (u, t, l) {
  if ((u.type !== 'SymbolNode' && u.type !== 'PunctuationNode') || p(u) !== '&')
    return
  let e = l.children,
    a = e[t + 1]
  if (
    !((t > 0 && e[t - 1].type === 'WordNode') || !(a && a.type === 'WordNode'))
  )
    return (
      e.splice(t, 1),
      a.children.unshift(u),
      a.position && u.position && (a.position.start = u.position.start),
      t - 1
    )
})
var i0 = R(function (u, t, l) {
  if (t > 0 && u.type === 'PunctuationNode' && p(u) === '.') {
    let e = l.children[t - 1]
    if (
      e.type === 'WordNode' &&
      e.children &&
      e.children.length !== 1 &&
      e.children.length % 2 !== 0
    ) {
      let a = e.children.length,
        n = !0
      for (; e.children[--a]; ) {
        let i = e.children[a],
          c = p(i)
        if (a % 2 === 0) {
          if (c.length > 1) return
          Jf.test(c) || (n = !1)
        } else if (c !== '.') {
          if (a < e.children.length - 2) break
          return
        }
      }
      if (!n)
        return (
          l.children.splice(t, 1),
          e.children.push(u),
          e.position && u.position && (e.position.end = u.position.end),
          t
        )
    }
  }
})
var c0 = R(function (u, t, l) {
  if (t > 0 && (u.type === 'SymbolNode' || u.type === 'PunctuationNode')) {
    let e = l.children,
      a = e[t - 1]
    if (a && a.type === 'WordNode') {
      let n = t - 1,
        i = [],
        c = []
      for (; e[++n]; ) {
        let f = e[n]
        if (f.type === 'WordNode') (i.push(...c, ...f.children), (c = []))
        else if (
          (f.type === 'SymbolNode' || f.type === 'PunctuationNode') &&
          Kf.test(p(f))
        )
          c.push(f)
        else break
      }
      if (i.length > 0) {
        ;(c.length > 0 && (n -= c.length),
          e.splice(t, n - t),
          a.children.push(...i))
        let f = i[i.length - 1]
        return (
          a.position && f.position && (a.position.end = f.position.end),
          t
        )
      }
    }
  }
})
var f0 = R(function (u, t, l) {
  let e = l.children,
    a = e[t - 1]
  if (
    a &&
    a.type === 'WordNode' &&
    (u.type === 'SymbolNode' || u.type === 'PunctuationNode') &&
    p(u) === '/'
  ) {
    let n = p(a),
      i = u,
      c = [u],
      f = 1,
      o = '',
      d = e[t + 1]
    if (
      (d &&
        d.type === 'WordNode' &&
        ((o = p(d)), (i = d), c.push(...d.children), f++),
      n.length < 3 && (!o || o.length < 3))
    )
      return (
        a.children.push(...c),
        e.splice(t, f),
        a.position && i.position && (a.position.end = i.position.end),
        t
      )
  }
})
var D0 = R(function (u, t, l) {
  if ('children' in u) {
    let e = -1
    for (; u.children[++e]; ) if (u.children[e].type === 'WordNode') return
    let a = l.children[t - 1]
    if (a && 'children' in a)
      return (
        a.children.push(...u.children),
        l.children.splice(t, 1),
        a.position && u.position && (a.position.end = u.position.end),
        t
      )
    let n = l.children[t + 1]
    n &&
      'children' in n &&
      (n.children.unshift(...u.children),
      n.position && u.position && (n.position.start = u.position.start),
      l.children.splice(t, 1))
  }
})
var h2 = new RegExp(
    '^([0-9]{1,3}|[a-z]|al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz)$'
  ),
  o0 = R(function (u, t, l) {
    if ('children' in u && u.children.length > 1) {
      let e = u.children[u.children.length - 1]
      if (
        e &&
        (e.type === 'PunctuationNode' || e.type === 'SymbolNode') &&
        p(e) === '.'
      ) {
        let a = u.children[u.children.length - 2]
        if (a && a.type === 'WordNode' && h2.test(p(a).toLowerCase())) {
          ;(a.children.push(e),
            u.children.pop(),
            e.position && a.position && (a.position.end = e.position.end))
          let n = l.children[t + 1]
          if (n && n.type === 'SentenceNode')
            return (
              u.children.push(...n.children),
              l.children.splice(t + 1, 1),
              n.position && u.position && (u.position.end = n.position.end),
              t - 1
            )
        }
      }
    }
  })
var s0 = lt(function (u, t, l) {
  if ('children' in u) {
    let e = u.children.length,
      a = !1
    for (; u.children[--e]; ) {
      let n = u.children[e]
      if (n.type !== 'SymbolNode' && n.type !== 'PunctuationNode') {
        n.type === 'WordNode' && (a = !0)
        continue
      }
      if (!da.test(p(n))) continue
      if (!a) {
        a = !0
        continue
      }
      if (p(n) !== '.') continue
      let i = u.children[e - 1],
        c = u.children[e + 1]
      if (i && i.type === 'WordNode') {
        let f = u.children[e + 2]
        if (c && f && c.type === 'WhiteSpaceNode' && p(f) === '.') continue
        ;(u.children.splice(e, 1),
          i.children.push(n),
          n.position && i.position && (i.position.end = n.position.end),
          e--)
      } else
        c &&
          c.type === 'WordNode' &&
          (u.children.splice(e, 1),
          c.children.unshift(n),
          n.position && c.position && (c.position.start = n.position.start))
    }
  }
})
var In = R(function (u, t, l) {
  if ('children' in u && u.children.length === 0)
    return (l.children.splice(t, 1), t)
})
var ya = lt(function (u, t, l) {
  let e = l.children
  ;(u.position &&
    t < 1 &&
    (!l.position || !l.position.start) &&
    (E0(l), (l.position.start = u.position.start)),
    u.position &&
      t === e.length - 1 &&
      (!l.position || !l.position.end) &&
      (E0(l), (l.position.end = u.position.end)))
})
function E0(u) {
  u.position || (u.position = {})
}
var Ku = class {
  constructor(t, l) {
    let e = l || t
    ;((this.doc = e ? String(e) : void 0),
      (this.tokenizeRootPlugins = [...this.tokenizeRootPlugins]),
      (this.tokenizeParagraphPlugins = [...this.tokenizeParagraphPlugins]),
      (this.tokenizeSentencePlugins = [...this.tokenizeSentencePlugins]))
  }
  parse(t) {
    return this.tokenizeRoot(t || this.doc)
  }
  tokenizeRoot(t) {
    let l = this.tokenizeParagraph(t),
      e = {type: 'RootNode', children: r0(l, 'WhiteSpaceNode', Lf)},
      a = -1
    for (; this.tokenizeRootPlugins[++a]; ) this.tokenizeRootPlugins[a](e)
    return e
  }
  tokenizeParagraph(t) {
    let l = this.tokenizeSentence(t),
      e = {type: 'ParagraphNode', children: r0(l, 'PunctuationNode', da)},
      a = -1
    for (; this.tokenizeParagraphPlugins[++a]; )
      this.tokenizeParagraphPlugins[a](e)
    return e
  }
  tokenizeSentence(t) {
    let e = {type: 'SentenceNode', children: this.tokenize(t)},
      a = -1
    for (; this.tokenizeSentencePlugins[++a]; )
      this.tokenizeSentencePlugins[a](e)
    return e
  }
  tokenize(t) {
    let l = []
    if (!t) return l
    let e = {line: 1, column: 1, offset: 0},
      a = 0,
      n = 0,
      i = {...e},
      c,
      f
    for (; n < t.length; ) {
      let d = t.charAt(n),
        y = If.test(d)
          ? 'WhiteSpaceNode'
          : $f.test(d)
            ? 'PunctuationNode'
            : Pf.test(d)
              ? 'WordNode'
              : 'SymbolNode'
      ;(a < n &&
        c &&
        y &&
        !(
          c === y &&
          (c === 'WordNode' || c === 'WhiteSpaceNode' || d === f || kf.test(d))
        ) &&
        (l.push(o(c, t.slice(a, n))), (a = n), (i = {...e})),
        d === '\r' ||
        (d ===
          `
` &&
          f !== '\r')
          ? (e.line++, (e.column = 1))
          : d !==
              `
` && e.column++,
        e.offset++,
        (c = y),
        (f = d),
        n++)
    }
    return (c && a < n && l.push(o(c, t.slice(a, n))), l)
    function o(d, y) {
      return d === 'WordNode'
        ? {
            type: 'WordNode',
            children: [
              {type: 'TextNode', value: y, position: {start: i, end: {...e}}}
            ],
            position: {start: i, end: {...e}}
          }
        : {type: d, value: y, position: {start: i, end: {...e}}}
    }
  }
}
Ku.prototype.tokenizeSentencePlugins = [n0, l0, c0, f0, i0, ya]
Ku.prototype.tokenizeParagraphPlugins = [
  D0,
  u0,
  a0,
  e0,
  o0,
  jf,
  s0,
  Pn,
  $n,
  t0,
  In,
  ya
]
Ku.prototype.tokenizeRootPlugins = [Pn, $n, In, ya]
function r0(u, t, l) {
  let e = [],
    a = -1,
    n = 0
  for (; ++a < u.children.length; ) {
    let i = u.children[a]
    if (a === u.children.length - 1 || (i.type === t && l.test(p(i)))) {
      let c = {type: u.type, children: u.children.slice(n, a + 1)},
        f = u.children[n],
        o = i
      ;(f.position &&
        o.position &&
        (c.position = {start: f.position.start, end: o.position.end}),
        e.push(c),
        (n = a + 1))
    }
  }
  return e
}
var A0 =
    /^(t(?:hurs|bsp|sp)|s(?:e(?:pt|c)|q)|(?:tue|bbl|yd)s|thu|sep|tue|bbl|nov|aug|ju[ln]|(?:ap|h)r|(?:ja|su)n|m(?:ar|on|in)|(?:sa|oc|[kpq])t|g(?:ro|al)|f(?:eb|ri|[lt])|d(?:ec|oz)|wed|l(?:bs|td)|inc?|mi|gr|yd|lb|oz|cu)$/,
  d0 =
    /^((?:Northant|Derby|S(?:hrop|taff)|W(?:ark|orc)|L(?:in|ei|an)c|C(?:amb|he)|Trea|York|B(?:uck|e(?:rk|d))|(?:Not|Wil)t|H(?:er|[au]n)t|Glo|Pre)s|Northumb|N(?:or(?:thd|f)|e(?:br|v)|atl)|M(?:(?:essr|as|se)s|i(?:ddx|nn|ch|ss)|ont|lle|s(?:gr|s)|ddx|(?:me|r)s?|a[jn]|ex|gr|o|d|e|s|[tx])?|Heref|P(?:enna|[ahot])|D(?:e(?:rbs|[lv])|r)|Westm|(?:Cali|Pro)f|S(?:a(?:lop|sk)|uff|om|e[cn]|[qrxy])|(?:Bldg|Kan)s?|Here|P(?:enn?|k)|St(?:af)?|W(?:isc|arw|yo)|C(?:umb|olo)|B(?:lvd|rig)|(?:Ok|F)la|(?:Pk|[FH])wy|A(?:r(?:iz|k)|lt?a|tty|m[bd])|(?:Cap|S(?:up|g)|On|Ru|U)t|(?:Ter|Cd|D[ou]|Sn|J)r|(?:Oxo|Co[nr]|Ten|Ke|Ge|Ho)n|Wash|N(?:eb|at)|W(?:is|ar|o)|C(?:al|ol?)|Qu[e\u00E9]|I(?:ll|a)|Tex|G(?:ov|a)|Ind|R(?:te|e[pv]|d)|Ida|(?:Yu|Da)k|(?:Or|Av)e|Ssx|Ok|La|Br|Rt|Id|V[at]|Ky|Lt|F[rt])$/,
  y0 = /^(ol?)$/,
  h0 = /^(t(?:were|(?:wa|i)s)|cause|e[mr]|im|\d\ds?)$/
var v0 = /^['’]$/,
  wt = class extends Ku {}
wt.prototype.tokenizeSentencePlugins = [
  lt(m2),
  ...Ku.prototype.tokenizeSentencePlugins
]
wt.prototype.tokenizeParagraphPlugins = [
  R(v2),
  ...Ku.prototype.tokenizeParagraphPlugins
]
function v2(u, t, l) {
  if ('children' in u && u.children) {
    let e = u.children[u.children.length - 1],
      a = u.children[u.children.length - 2]
    if (
      e &&
      e.type === 'PunctuationNode' &&
      p(e) === '.' &&
      a &&
      a.type === 'WordNode'
    ) {
      let n = p(a)
      if (A0.test(n.toLowerCase()) || d0.test(n)) {
        ;(a.children.push(e),
          u.children.pop(),
          e.position && a.position && (a.position.end = e.position.end))
        let i = l.children[t + 1]
        if (i && i.type === 'SentenceNode')
          return (
            u.children.push(...i.children),
            l.children.splice(t + 1, 1),
            i.position && u.position && (u.position.end = i.position.end),
            t - 1
          )
      }
    }
  }
}
function m2(u, t, l) {
  if (u.type === 'PunctuationNode' || u.type === 'SymbolNode') {
    let e = l.children,
      a = e.length,
      n = p(u)
    if (n === '/') {
      let i = e[t - 1]
      i &&
        i.type === 'WordNode' &&
        p(i).toLowerCase() === 'w' &&
        (e.splice(t, 1),
        i.children.push(u),
        i.position && u.position && (i.position.end = u.position.end))
    } else if (v0.test(n)) {
      let i = e[t - 1]
      if (
        t > 2 &&
        t < a - 1 &&
        i.type === 'WordNode' &&
        e[t - 2].type === 'WhiteSpaceNode' &&
        e[t + 1].type === 'WhiteSpaceNode' &&
        y0.test(p(i).toLowerCase())
      ) {
        ;(e.splice(t, 1),
          i.children.push(u),
          i.position && u.position && (i.position.end = u.position.end))
        return
      }
      if (
        t !== a - 1 &&
        e[t + 1].type === 'WordNode' &&
        (t === 0 || e[t - 1].type !== 'WordNode')
      ) {
        let c = e[t + 1],
          f = p(c).toLowerCase(),
          o = e[t + 2]
        c.type === 'WordNode' && h0.test(f)
          ? (e.splice(t, 1),
            c.children.unshift(u),
            c.position && u.position && (c.position.start = u.position.start))
          : c.type === 'WordNode' &&
            f === 'n' &&
            o &&
            o.type === 'PunctuationNode' &&
            v0.test(p(o)) &&
            (e.splice(t, 1),
            e.splice(t + 1, 1),
            c.children.unshift(u),
            c.children.push(o),
            c.position &&
              (u.position && (c.position.start = u.position.start),
              o.position && (c.position.end = o.position.end)))
      }
    }
  }
}
var n2 = Aa(u2(), 1),
  Qf = Aa(Fa(), 1)
var Kn = function (u) {
  if (u == null) return r3
  if (typeof u == 'function') return Jn(u)
  if (typeof u == 'object') return Array.isArray(u) ? o3(u) : s3(u)
  if (typeof u == 'string') return E3(u)
  throw new Error('Expected function, string, or object as test')
}
function o3(u) {
  let t = [],
    l = -1
  for (; ++l < u.length; ) t[l] = Kn(u[l])
  return Jn(e)
  function e(...a) {
    let n = -1
    for (; ++n < t.length; ) if (t[n].apply(this, a)) return !0
    return !1
  }
}
function s3(u) {
  let t = u
  return Jn(l)
  function l(e) {
    let a = e,
      n
    for (n in u) if (a[n] !== t[n]) return !1
    return !0
  }
}
function E3(u) {
  return Jn(t)
  function t(l) {
    return l && l.type === u
  }
}
function Jn(u) {
  return t
  function t(l, e, a) {
    return !!(
      A3(l) && u.call(this, l, typeof e == 'number' ? e : void 0, a || void 0)
    )
  }
}
function r3() {
  return !0
}
function A3(u) {
  return u !== null && typeof u == 'object' && 'type' in u
}
var t2 = [],
  Hf = !0,
  wn = !1,
  qf = 'skip'
function Yf(u, t, l, e) {
  let a
  typeof t == 'function' && typeof l != 'function'
    ? ((e = l), (l = t))
    : (a = t)
  let n = Kn(a),
    i = e ? -1 : 1
  c(u, void 0, [])()
  function c(f, o, d) {
    let y = f && typeof f == 'object' ? f : {}
    if (typeof y.type == 'string') {
      let r =
        typeof y.tagName == 'string'
          ? y.tagName
          : typeof y.name == 'string'
            ? y.name
            : void 0
      Object.defineProperty(A, 'name', {
        value: 'node (' + (f.type + (r ? '<' + r + '>' : '')) + ')'
      })
    }
    return A
    function A() {
      let r = t2,
        g,
        C,
        U
      if (
        (!t || n(f, o, d[d.length - 1] || void 0)) &&
        ((r = d3(l(f, d))), r[0] === wn)
      )
        return r
      if ('children' in f && f.children) {
        let s = f
        if (s.children && r[0] !== qf)
          for (
            C = (e ? s.children.length : -1) + i, U = d.concat(s);
            C > -1 && C < s.children.length;

          ) {
            let D = s.children[C]
            if (((g = c(D, C, U)()), g[0] === wn)) return g
            C = typeof g[1] == 'number' ? g[1] : C + i
          }
      }
      return r
    }
  }
}
function d3(u) {
  return Array.isArray(u)
    ? u
    : typeof u == 'number'
      ? [Hf, u]
      : u == null
        ? t2
        : [u]
}
function xf(u, t, l, e) {
  let a, n, i
  ;(typeof t == 'function' && typeof l != 'function'
    ? ((n = void 0), (i = t), (a = l))
    : ((n = t), (i = l), (a = e)),
    Yf(u, n, c, a))
  function c(f, o) {
    let d = o[o.length - 1],
      y = d ? d.children.indexOf(f) : void 0
    return i(f, y, d)
  }
}
var Al = Aa(Gf(), 1),
  i2 = document.querySelector('#root')
if (!i2) throw new Error('No root element found')
var v3 = n2.default.createRoot(i2),
  m3 = 'The initial text.',
  C3 = new wt(),
  Xf = [60, 60, 60, 300, 300, 0, 0, 120, 120, 120, 120, 120, 120, 180]
v3.render(Qf.default.createElement(F3))
function F3() {
  let [u, t] = Qf.default.useState(m3),
    l = C3.parse(u)
  return (0, Al.jsxs)('div', {
    className: 'editor',
    children: [
      (0, Al.jsxs)('div', {
        className: 'draw',
        children: [c2(l), /\n[ \t]*$/.test(u) ? (0, Al.jsx)('br', {}) : void 0]
      }),
      (0, Al.jsx)('textarea', {
        className: 'write',
        onChange: (e) => t(e.target.value),
        rows:
          u.split(`
`).length + 1,
        spellCheck: 'true',
        value: u
      })
    ]
  })
}
function g3(u) {
  let t = [],
    l = -1
  for (; l < u.children.length; ) {
    let e = c2(u.children[l])
    Array.isArray(e) ? t.push(...e) : t.push(e)
  }
  return t
}
function c2(u) {
  let t = 'value' in u ? u.value : g3(u)
  if (u.type === 'SentenceNode') {
    let l = 0
    xf(u, 'WordNode', function () {
      l++
    })
    let e = l < Xf.length ? Xf[l] : Xf.at(-1)
    return (0, Al.jsx)('span', {
      style: {
        backgroundColor: 'hsl(' + [e, '93%', '70%', 0.5].join(', ') + ')'
      },
      children: t
    })
  }
  return t
}
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
