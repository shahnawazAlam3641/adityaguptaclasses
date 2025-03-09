function C0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function P0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xf = { exports: {} },
  Rs = {},
  wf = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for("react.element"),
  T0 = Symbol.for("react.portal"),
  E0 = Symbol.for("react.fragment"),
  j0 = Symbol.for("react.strict_mode"),
  N0 = Symbol.for("react.profiler"),
  A0 = Symbol.for("react.provider"),
  M0 = Symbol.for("react.context"),
  R0 = Symbol.for("react.forward_ref"),
  D0 = Symbol.for("react.suspense"),
  L0 = Symbol.for("react.memo"),
  V0 = Symbol.for("react.lazy"),
  Vu = Symbol.iterator;
function _0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Cf = {};
function Yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = n || Sf);
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pf() {}
Pf.prototype = Yn.prototype;
function rl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = n || Sf);
}
var il = (rl.prototype = new Pf());
il.constructor = rl;
kf(il, Yn.prototype);
il.isPureReactComponent = !0;
var _u = Array.isArray,
  Tf = Object.prototype.hasOwnProperty,
  sl = { current: null },
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Tf.call(t, r) && !Ef.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ri,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: sl.current,
  };
}
function I0(e, t) {
  return {
    $$typeof: ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ol(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function F0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Iu = /\/+/g;
function ro(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? F0("" + e.key)
    : t.toString(36);
}
function Oi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ri:
          case T0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + ro(o, 0) : r),
      _u(i)
        ? ((n = ""),
          e != null && (n = e.replace(Iu, "$&/") + "/"),
          Oi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ol(i) &&
            (i = I0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Iu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), _u(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + ro(s, a);
      o += Oi(s, t, n, l, i);
    }
  else if (((l = _0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + ro(s, a++)), (o += Oi(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function O0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  Bi = { transition: null },
  B0 = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Bi,
    ReactCurrentOwner: sl,
  };
function Nf() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: gi,
  forEach: function (e, t, n) {
    gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ol(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
_.Component = Yn;
_.Fragment = E0;
_.Profiler = N0;
_.PureComponent = rl;
_.StrictMode = j0;
_.Suspense = D0;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B0;
_.act = Nf;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = sl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Tf.call(t, l) &&
        !Ef.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: M0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: A0, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = jf;
_.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: R0, render: e };
};
_.isValidElement = ol;
_.lazy = function (e) {
  return { $$typeof: V0, _payload: { _status: -1, _result: e }, _init: O0 };
};
_.memo = function (e, t) {
  return { $$typeof: L0, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = Bi.transition;
  Bi.transition = {};
  try {
    e();
  } finally {
    Bi.transition = t;
  }
};
_.unstable_act = Nf;
_.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
_.useContext = function (e) {
  return Se.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
_.useId = function () {
  return Se.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return Se.current.useRef(e);
};
_.useState = function (e) {
  return Se.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return Se.current.useTransition();
};
_.version = "18.3.1";
wf.exports = _;
var C = wf.exports;
const ii = P0(C),
  z0 = C0({ __proto__: null, default: ii }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U0 = C,
  b0 = Symbol.for("react.element"),
  $0 = Symbol.for("react.fragment"),
  W0 = Object.prototype.hasOwnProperty,
  H0 = U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  K0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) W0.call(t, r) && !K0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: b0,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: H0.current,
  };
}
Rs.Fragment = $0;
Rs.jsx = Af;
Rs.jsxs = Af;
xf.exports = Rs;
var h = xf.exports,
  Mf = { exports: {} },
  Ve = {},
  Rf = { exports: {} },
  Df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, D) {
    var L = N.length;
    N.push(D);
    e: for (; 0 < L; ) {
      var Y = (L - 1) >>> 1,
        oe = N[Y];
      if (0 < i(oe, D)) (N[Y] = D), (N[L] = oe), (L = Y);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var D = N[0],
      L = N.pop();
    if (L !== D) {
      N[0] = L;
      e: for (var Y = 0, oe = N.length, pi = oe >>> 1; Y < pi; ) {
        var Kt = 2 * (Y + 1) - 1,
          no = N[Kt],
          Gt = Kt + 1,
          mi = N[Gt];
        if (0 > i(no, L))
          Gt < oe && 0 > i(mi, no)
            ? ((N[Y] = mi), (N[Gt] = L), (Y = Gt))
            : ((N[Y] = no), (N[Kt] = L), (Y = Kt));
        else if (Gt < oe && 0 > i(mi, L)) (N[Y] = mi), (N[Gt] = L), (Y = Gt);
        else break e;
      }
    }
    return D;
  }
  function i(N, D) {
    var L = N.sortIndex - D.sortIndex;
    return L !== 0 ? L : N.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= N)
        r(u), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(u);
    }
  }
  function w(N) {
    if (((x = !1), g(N), !v))
      if (n(l) !== null) (v = !0), hi(k);
      else {
        var D = n(u);
        D !== null && te(w, D.startTime - N);
      }
  }
  function k(N, D) {
    (v = !1), x && ((x = !1), m(P), (P = -1)), (y = !0);
    var L = f;
    try {
      for (
        g(D), d = n(l);
        d !== null && (!(d.expirationTime > D) || (N && !se()));

      ) {
        var Y = d.callback;
        if (typeof Y == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var oe = Y(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof oe == "function" ? (d.callback = oe) : d === n(l) && r(l),
            g(D);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var pi = !0;
      else {
        var Kt = n(u);
        Kt !== null && te(w, Kt.startTime - D), (pi = !1);
      }
      return pi;
    } finally {
      (d = null), (f = L), (y = !1);
    }
  }
  var E = !1,
    j = null,
    P = -1,
    V = 5,
    R = -1;
  function se() {
    return !(e.unstable_now() - R < V);
  }
  function vt() {
    if (j !== null) {
      var N = e.unstable_now();
      R = N;
      var D = !0;
      try {
        D = j(!0, N);
      } finally {
        D ? Ht() : ((E = !1), (j = null));
      }
    } else E = !1;
  }
  var Ht;
  if (typeof p == "function")
    Ht = function () {
      p(vt);
    };
  else if (typeof MessageChannel < "u") {
    var rr = new MessageChannel(),
      Lu = rr.port2;
    (rr.port1.onmessage = vt),
      (Ht = function () {
        Lu.postMessage(null);
      });
  } else
    Ht = function () {
      S(vt, 0);
    };
  function hi(N) {
    (j = N), E || ((E = !0), Ht());
  }
  function te(N, D) {
    P = S(function () {
      N(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), hi(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var L = f;
      f = D;
      try {
        return N();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = f;
      f = N;
      try {
        return D();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, D, L) {
      var Y = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Y + L : Y))
          : (L = Y),
        N)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = L + oe),
        (N = {
          id: c++,
          callback: D,
          priorityLevel: N,
          startTime: L,
          expirationTime: oe,
          sortIndex: -1,
        }),
        L > Y
          ? ((N.sortIndex = L),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (x ? (m(P), (P = -1)) : (x = !0), te(w, L - Y)))
          : ((N.sortIndex = oe), t(l, N), v || y || ((v = !0), hi(k))),
        N
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (N) {
      var D = f;
      return function () {
        var L = f;
        f = D;
        try {
          return N.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(Df);
Rf.exports = Df;
var G0 = Rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X0 = C,
  De = G0;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lf = new Set(),
  Lr = {};
function hn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Lf.add(t[e]);
}
var ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wo = Object.prototype.hasOwnProperty,
  q0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fu = {},
  Ou = {};
function Q0(e) {
  return Wo.call(Ou, e)
    ? !0
    : Wo.call(Fu, e)
    ? !1
    : q0.test(e)
    ? (Ou[e] = !0)
    : ((Fu[e] = !0), !1);
}
function Y0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Z0(e, t, n, r) {
  if (t === null || typeof t > "u" || Y0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var al = /[\-:]([a-z])/g;
function ll(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ll);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ll);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(al, ll);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ul(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Z0(t, n, i, r) && (n = null),
    r || i === null
      ? Q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for("react.element"),
  vn = Symbol.for("react.portal"),
  xn = Symbol.for("react.fragment"),
  cl = Symbol.for("react.strict_mode"),
  Ho = Symbol.for("react.profiler"),
  Vf = Symbol.for("react.provider"),
  _f = Symbol.for("react.context"),
  dl = Symbol.for("react.forward_ref"),
  Ko = Symbol.for("react.suspense"),
  Go = Symbol.for("react.suspense_list"),
  fl = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  If = Symbol.for("react.offscreen"),
  Bu = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bu && e[Bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  io;
function hr(e) {
  if (io === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      io = (t && t[1]) || "";
    }
  return (
    `
` +
    io +
    e
  );
}
var so = !1;
function oo(e, t) {
  if (!e || so) return "";
  so = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (so = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function J0(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oo(e.type, !1)), e;
    case 11:
      return (e = oo(e.type.render, !1)), e;
    case 1:
      return (e = oo(e.type, !0)), e;
    default:
      return "";
  }
}
function Xo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case vn:
      return "Portal";
    case Ho:
      return "Profiler";
    case cl:
      return "StrictMode";
    case Ko:
      return "Suspense";
    case Go:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _f:
        return (e.displayName || "Context") + ".Consumer";
      case Vf:
        return (e._context.displayName || "Context") + ".Provider";
      case dl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fl:
        return (
          (t = e.displayName || null), t !== null ? t : Xo(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Xo(e(t));
        } catch {}
    }
  return null;
}
function eg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xo(t);
    case 8:
      return t === cl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tg(e) {
  var t = Ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = tg(e));
}
function Of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ji(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qo(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bf(e, t) {
  (t = t.checked), t != null && ul(e, "checked", t, !1);
}
function Qo(e, t) {
  Bf(e, t);
  var n = It(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Yo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Yo(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Yo(e, t, n) {
  (t !== "number" || Ji(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function _n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function zf(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $u(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Uf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xi,
  bf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement("div"),
          xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ng = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  ng.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
  });
});
function $f(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = $f(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var rg = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ea(e, t) {
  if (t) {
    if (rg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var na = null;
function hl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ra = null,
  In = null,
  Fn = null;
function Wu(e) {
  if ((e = ai(e))) {
    if (typeof ra != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Is(t)), ra(e.stateNode, e.type, t));
  }
}
function Hf(e) {
  In ? (Fn ? Fn.push(e) : (Fn = [e])) : (In = e);
}
function Kf() {
  if (In) {
    var e = In,
      t = Fn;
    if (((Fn = In = null), Wu(e), t)) for (e = 0; e < t.length; e++) Wu(t[e]);
  }
}
function Gf(e, t) {
  return e(t);
}
function Xf() {}
var ao = !1;
function qf(e, t, n) {
  if (ao) return e(t, n);
  ao = !0;
  try {
    return Gf(e, t, n);
  } finally {
    (ao = !1), (In !== null || Fn !== null) && (Xf(), Kf());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Is(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var ia = !1;
if (ft)
  try {
    var sr = {};
    Object.defineProperty(sr, "passive", {
      get: function () {
        ia = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr);
  } catch {
    ia = !1;
  }
function ig(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Sr = !1,
  es = null,
  ts = !1,
  sa = null,
  sg = {
    onError: function (e) {
      (Sr = !0), (es = e);
    },
  };
function og(e, t, n, r, i, s, o, a, l) {
  (Sr = !1), (es = null), ig.apply(sg, arguments);
}
function ag(e, t, n, r, i, s, o, a, l) {
  if ((og.apply(this, arguments), Sr)) {
    if (Sr) {
      var u = es;
      (Sr = !1), (es = null);
    } else throw Error(T(198));
    ts || ((ts = !0), (sa = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hu(e) {
  if (pn(e) !== e) throw Error(T(188));
}
function lg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Hu(i), e;
        if (s === r) return Hu(i), t;
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Yf(e) {
  return (e = lg(e)), e !== null ? Zf(e) : null;
}
function Zf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jf = De.unstable_scheduleCallback,
  Ku = De.unstable_cancelCallback,
  ug = De.unstable_shouldYield,
  cg = De.unstable_requestPaint,
  J = De.unstable_now,
  dg = De.unstable_getCurrentPriorityLevel,
  pl = De.unstable_ImmediatePriority,
  eh = De.unstable_UserBlockingPriority,
  ns = De.unstable_NormalPriority,
  fg = De.unstable_LowPriority,
  th = De.unstable_IdlePriority,
  Ds = null,
  tt = null;
function hg(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(Ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : gg,
  pg = Math.log,
  mg = Math.LN2;
function gg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pg(e) / mg) | 0)) | 0;
}
var wi = 64,
  Si = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = mr(a)) : ((s &= o), s !== 0 && (r = mr(s)));
  } else (o = n & ~i), o !== 0 ? (r = mr(o)) : s !== 0 && (r = mr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function yg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - qe(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = yg(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nh() {
  var e = wi;
  return (wi <<= 1), !(wi & 4194240) && (wi = 64), e;
}
function lo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function si(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function xg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ml(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function rh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ih,
  gl,
  sh,
  oh,
  ah,
  aa = !1,
  ki = [],
  Nt = null,
  At = null,
  Mt = null,
  Ir = new Map(),
  Fr = new Map(),
  Ct = [],
  wg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function or(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ai(t)), t !== null && gl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Sg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = or(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (At = or(At, e, t, n, r, i)), !0;
    case "mouseover":
      return (Mt = or(Mt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ir.set(s, or(Ir.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Fr.set(s, or(Fr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function lh(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qf(n)), t !== null)) {
          (e.blockedOn = t),
            ah(e.priority, function () {
              sh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = la(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (na = r), n.target.dispatchEvent(r), (na = null);
    } else return (t = ai(n)), t !== null && gl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xu(e, t, n) {
  zi(e) && n.delete(t);
}
function kg() {
  (aa = !1),
    Nt !== null && zi(Nt) && (Nt = null),
    At !== null && zi(At) && (At = null),
    Mt !== null && zi(Mt) && (Mt = null),
    Ir.forEach(Xu),
    Fr.forEach(Xu);
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    aa ||
      ((aa = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, kg)));
}
function Or(e) {
  function t(i) {
    return ar(i, e);
  }
  if (0 < ki.length) {
    ar(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && ar(Nt, e),
      At !== null && ar(At, e),
      Mt !== null && ar(Mt, e),
      Ir.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < Ct.length;
    n++
  )
    (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
    lh(n), n.blockedOn === null && Ct.shift();
}
var On = yt.ReactCurrentBatchConfig,
  is = !0;
function Cg(e, t, n, r) {
  var i = F,
    s = On.transition;
  On.transition = null;
  try {
    (F = 1), yl(e, t, n, r);
  } finally {
    (F = i), (On.transition = s);
  }
}
function Pg(e, t, n, r) {
  var i = F,
    s = On.transition;
  On.transition = null;
  try {
    (F = 4), yl(e, t, n, r);
  } finally {
    (F = i), (On.transition = s);
  }
}
function yl(e, t, n, r) {
  if (is) {
    var i = la(e, t, n, r);
    if (i === null) xo(e, t, r, ss, n), Gu(e, r);
    else if (Sg(i, e, t, n, r)) r.stopPropagation();
    else if ((Gu(e, r), t & 4 && -1 < wg.indexOf(e))) {
      for (; i !== null; ) {
        var s = ai(i);
        if (
          (s !== null && ih(s),
          (s = la(e, t, n, r)),
          s === null && xo(e, t, r, ss, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else xo(e, t, r, null, n);
  }
}
var ss = null;
function la(e, t, n, r) {
  if (((ss = null), (e = hl(r)), (e = Jt(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ss = e), null;
}
function uh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dg()) {
        case pl:
          return 1;
        case eh:
          return 4;
        case ns:
        case fg:
          return 16;
        case th:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  vl = null,
  Ui = null;
function ch() {
  if (Ui) return Ui;
  var e,
    t = vl,
    n = t.length,
    r,
    i = "value" in Tt ? Tt.value : Tt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ui = i.slice(e, 1 < r ? 1 - r : void 0));
}
function bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ci() {
  return !0;
}
function qu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ci
        : qu),
      (this.isPropagationStopped = qu),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ci));
      },
      persist: function () {},
      isPersistent: Ci,
    }),
    t
  );
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xl = _e(Zn),
  oi = G({}, Zn, { view: 0, detail: 0 }),
  Tg = _e(oi),
  uo,
  co,
  lr,
  Ls = G({}, oi, {
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
    getModifierState: wl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((uo = e.screenX - lr.screenX), (co = e.screenY - lr.screenY))
              : (co = uo = 0),
            (lr = e)),
          uo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : co;
    },
  }),
  Qu = _e(Ls),
  Eg = G({}, Ls, { dataTransfer: 0 }),
  jg = _e(Eg),
  Ng = G({}, oi, { relatedTarget: 0 }),
  fo = _e(Ng),
  Ag = G({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mg = _e(Ag),
  Rg = G({}, Zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dg = _e(Rg),
  Lg = G({}, Zn, { data: 0 }),
  Yu = _e(Lg),
  Vg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _g = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ig = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ig[e]) ? !!t[e] : !1;
}
function wl() {
  return Fg;
}
var Og = G({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = Vg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _g[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wl,
    charCode: function (e) {
      return e.type === "keypress" ? bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bg = _e(Og),
  zg = G({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zu = _e(zg),
  Ug = G({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wl,
  }),
  bg = _e(Ug),
  $g = G({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wg = _e($g),
  Hg = G({}, Ls, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kg = _e(Hg),
  Gg = [9, 13, 27, 32],
  Sl = ft && "CompositionEvent" in window,
  kr = null;
ft && "documentMode" in document && (kr = document.documentMode);
var Xg = ft && "TextEvent" in window && !kr,
  dh = ft && (!Sl || (kr && 8 < kr && 11 >= kr)),
  Ju = " ",
  ec = !1;
function fh(e, t) {
  switch (e) {
    case "keyup":
      return Gg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function qg(e, t) {
  switch (e) {
    case "compositionend":
      return hh(t);
    case "keypress":
      return t.which !== 32 ? null : ((ec = !0), Ju);
    case "textInput":
      return (e = t.data), e === Ju && ec ? null : e;
    default:
      return null;
  }
}
function Qg(e, t) {
  if (wn)
    return e === "compositionend" || (!Sl && fh(e, t))
      ? ((e = ch()), (Ui = vl = Tt = null), (wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
  week: !0,
};
function tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yg[e.type] : t === "textarea";
}
function ph(e, t, n, r) {
  Hf(r),
    (t = os(t, "onChange")),
    0 < t.length &&
      ((n = new xl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cr = null,
  Br = null;
function Zg(e) {
  Th(e, 0);
}
function Vs(e) {
  var t = Cn(e);
  if (Of(t)) return e;
}
function Jg(e, t) {
  if (e === "change") return t;
}
var mh = !1;
if (ft) {
  var ho;
  if (ft) {
    var po = "oninput" in document;
    if (!po) {
      var nc = document.createElement("div");
      nc.setAttribute("oninput", "return;"),
        (po = typeof nc.oninput == "function");
    }
    ho = po;
  } else ho = !1;
  mh = ho && (!document.documentMode || 9 < document.documentMode);
}
function rc() {
  Cr && (Cr.detachEvent("onpropertychange", gh), (Br = Cr = null));
}
function gh(e) {
  if (e.propertyName === "value" && Vs(Br)) {
    var t = [];
    ph(t, Br, e, hl(e)), qf(Zg, t);
  }
}
function ey(e, t, n) {
  e === "focusin"
    ? (rc(), (Cr = t), (Br = n), Cr.attachEvent("onpropertychange", gh))
    : e === "focusout" && rc();
}
function ty(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vs(Br);
}
function ny(e, t) {
  if (e === "click") return Vs(t);
}
function ry(e, t) {
  if (e === "input" || e === "change") return Vs(t);
}
function iy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : iy;
function zr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Wo.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sc(e, t) {
  var n = ic(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ic(n);
  }
}
function yh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vh() {
  for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ji(e.document);
  }
  return t;
}
function kl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sy(e) {
  var t = vh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && kl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = sc(n, s));
        var o = sc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var oy = ft && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  ua = null,
  Pr = null,
  ca = !1;
function oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ca ||
    Sn == null ||
    Sn !== Ji(r) ||
    ((r = Sn),
    "selectionStart" in r && kl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && zr(Pr, r)) ||
      ((Pr = r),
      (r = os(ua, "onSelect")),
      0 < r.length &&
        ((t = new xl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function Pi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionend: Pi("Transition", "TransitionEnd"),
  },
  mo = {},
  xh = {};
ft &&
  ((xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function _s(e) {
  if (mo[e]) return mo[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xh) return (mo[e] = t[n]);
  return e;
}
var wh = _s("animationend"),
  Sh = _s("animationiteration"),
  kh = _s("animationstart"),
  Ch = _s("transitionend"),
  Ph = new Map(),
  ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Ph.set(e, t), hn(t, [e]);
}
for (var go = 0; go < ac.length; go++) {
  var yo = ac[go],
    ay = yo.toLowerCase(),
    ly = yo[0].toUpperCase() + yo.slice(1);
  zt(ay, "on" + ly);
}
zt(wh, "onAnimationEnd");
zt(Sh, "onAnimationIteration");
zt(kh, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Ch, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  uy = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function lc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ag(r, t, void 0, e), (e.currentTarget = null);
}
function Th(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          lc(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          lc(i, a, u), (s = l);
        }
    }
  }
  if (ts) throw ((e = sa), (ts = !1), (sa = null), e);
}
function B(e, t) {
  var n = t[ma];
  n === void 0 && (n = t[ma] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Eh(t, e, 2, !1), n.add(r));
}
function vo(e, t, n) {
  var r = 0;
  t && (r |= 4), Eh(n, e, r, t);
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[Ti]) {
    (e[Ti] = !0),
      Lf.forEach(function (n) {
        n !== "selectionchange" && (uy.has(n) || vo(n, !1, e), vo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ti] || ((t[Ti] = !0), vo("selectionchange", !1, t));
  }
}
function Eh(e, t, n, r) {
  switch (uh(t)) {
    case 1:
      var i = Cg;
      break;
    case 4:
      i = Pg;
      break;
    default:
      i = yl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ia ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function xo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Jt(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qf(function () {
    var u = s,
      c = hl(n),
      d = [];
    e: {
      var f = Ph.get(e);
      if (f !== void 0) {
        var y = xl,
          v = e;
        switch (e) {
          case "keypress":
            if (bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Bg;
            break;
          case "focusin":
            (v = "focus"), (y = fo);
            break;
          case "focusout":
            (v = "blur"), (y = fo);
            break;
          case "beforeblur":
          case "afterblur":
            y = fo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = jg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = bg;
            break;
          case wh:
          case Sh:
          case kh:
            y = Mg;
            break;
          case Ch:
            y = Wg;
            break;
          case "scroll":
            y = Tg;
            break;
          case "wheel":
            y = Kg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Dg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Zu;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          m = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = _r(p, m)), w != null && x.push(br(p, w, g)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new y(f, v, null, n, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== na &&
            (v = n.relatedTarget || n.fromElement) &&
            (Jt(v) || v[ht]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Jt(v) : null),
              v !== null &&
                ((S = pn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = Qu),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Zu),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? f : Cn(y)),
            (g = v == null ? f : Cn(v)),
            (f = new x(w, p + "leave", y, n, c)),
            (f.target = S),
            (f.relatedTarget = g),
            (w = null),
            Jt(c) === u &&
              ((x = new x(m, p + "enter", v, n, c)),
              (x.target = g),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = yn(g)) p++;
              for (g = 0, w = m; w; w = yn(w)) g++;
              for (; 0 < p - g; ) (x = yn(x)), p--;
              for (; 0 < g - p; ) (m = yn(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = yn(x)), (m = yn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && uc(d, f, y, x, !1),
            v !== null && S !== null && uc(d, S, v, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? Cn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var k = Jg;
        else if (tc(f))
          if (mh) k = ry;
          else {
            k = ty;
            var E = ey;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = ny);
        if (k && (k = k(e, u))) {
          ph(d, k, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Yo(f, "number", f.value);
      }
      switch (((E = u ? Cn(u) : window), e)) {
        case "focusin":
          (tc(E) || E.contentEditable === "true") &&
            ((Sn = E), (ua = u), (Pr = null));
          break;
        case "focusout":
          Pr = ua = Sn = null;
          break;
        case "mousedown":
          ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ca = !1), oc(d, n, c);
          break;
        case "selectionchange":
          if (oy) break;
        case "keydown":
        case "keyup":
          oc(d, n, c);
      }
      var j;
      if (Sl)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        wn
          ? fh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (dh &&
          n.locale !== "ko" &&
          (wn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && wn && (j = ch())
            : ((Tt = c),
              (vl = "value" in Tt ? Tt.value : Tt.textContent),
              (wn = !0))),
        (E = os(u, P)),
        0 < E.length &&
          ((P = new Yu(P, e, null, n, c)),
          d.push({ event: P, listeners: E }),
          j ? (P.data = j) : ((j = hh(n)), j !== null && (P.data = j)))),
        (j = Xg ? qg(e, n) : Qg(e, n)) &&
          ((u = os(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Yu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = j)));
    }
    Th(d, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function os(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = _r(e, n)),
      s != null && r.unshift(br(e, s, i)),
      (s = _r(e, t)),
      s != null && r.push(br(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = _r(n, s)), l != null && o.unshift(br(n, l, a)))
        : i || ((l = _r(n, s)), l != null && o.push(br(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var cy = /\r\n?/g,
  dy = /\u0000|\uFFFD/g;
function cc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cy,
      `
`
    )
    .replace(dy, "");
}
function Ei(e, t, n) {
  if (((t = cc(t)), cc(e) !== t && n)) throw Error(T(425));
}
function as() {}
var da = null,
  fa = null;
function ha(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pa = typeof setTimeout == "function" ? setTimeout : void 0,
  fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dc = typeof Promise == "function" ? Promise : void 0,
  hy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dc < "u"
      ? function (e) {
          return dc.resolve(null).then(e).catch(py);
        }
      : pa;
function py(e) {
  setTimeout(function () {
    throw e;
  });
}
function wo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jn = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + Jn,
  $r = "__reactProps$" + Jn,
  ht = "__reactContainer$" + Jn,
  ma = "__reactEvents$" + Jn,
  my = "__reactListeners$" + Jn,
  gy = "__reactHandles$" + Jn;
function Jt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ai(e) {
  return (
    (e = e[et] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Is(e) {
  return e[$r] || null;
}
var ga = [],
  Pn = -1;
function Ut(e) {
  return { current: e };
}
function z(e) {
  0 > Pn || ((e.current = ga[Pn]), (ga[Pn] = null), Pn--);
}
function O(e, t) {
  Pn++, (ga[Pn] = e.current), (e.current = t);
}
var Ft = {},
  ve = Ut(Ft),
  Te = Ut(!1),
  ln = Ft;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ls() {
  z(Te), z(ve);
}
function hc(e, t, n) {
  if (ve.current !== Ft) throw Error(T(168));
  O(ve, t), O(Te, n);
}
function jh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, eg(e) || "Unknown", i));
  return G({}, n, r);
}
function us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (ln = ve.current),
    O(ve, e),
    O(Te, Te.current),
    !0
  );
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = jh(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      z(Te),
      z(ve),
      O(ve, e))
    : z(Te),
    O(Te, n);
}
var ot = null,
  Fs = !1,
  So = !1;
function Nh(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function yy(e) {
  (Fs = !0), Nh(e);
}
function bt() {
  if (!So && ot !== null) {
    So = !0;
    var e = 0,
      t = F;
    try {
      var n = ot;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (Fs = !1);
    } catch (i) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Jf(pl, bt), i);
    } finally {
      (F = t), (So = !1);
    }
  }
  return null;
}
var Tn = [],
  En = 0,
  cs = null,
  ds = 0,
  Oe = [],
  Be = 0,
  un = null,
  at = 1,
  lt = "";
function qt(e, t) {
  (Tn[En++] = ds), (Tn[En++] = cs), (cs = e), (ds = t);
}
function Ah(e, t, n) {
  (Oe[Be++] = at), (Oe[Be++] = lt), (Oe[Be++] = un), (un = e);
  var r = at;
  e = lt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - qe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (at = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (lt = s + e);
  } else (at = (1 << s) | (n << i) | r), (lt = e);
}
function Cl(e) {
  e.return !== null && (qt(e, 1), Ah(e, 1, 0));
}
function Pl(e) {
  for (; e === cs; )
    (cs = Tn[--En]), (Tn[En] = null), (ds = Tn[--En]), (Tn[En] = null);
  for (; e === un; )
    (un = Oe[--Be]),
      (Oe[Be] = null),
      (lt = Oe[--Be]),
      (Oe[Be] = null),
      (at = Oe[--Be]),
      (Oe[Be] = null);
}
var Me = null,
  Ae = null,
  b = !1,
  Xe = null;
function Mh(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function mc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Ae = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: at, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ya(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function va(e) {
  if (b) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!mc(e, t)) {
        if (ya(e)) throw Error(T(418));
        t = Rt(n.nextSibling);
        var r = Me;
        t && mc(e, t)
          ? Mh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Me = e));
      }
    } else {
      if (ya(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (Me = e);
    }
  }
}
function gc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function ji(e) {
  if (e !== Me) return !1;
  if (!b) return gc(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ya(e)) throw (Rh(), Error(T(418)));
    for (; t; ) Mh(e, t), (t = Rt(t.nextSibling));
  }
  if ((gc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Me ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Rh() {
  for (var e = Ae; e; ) e = Rt(e.nextSibling);
}
function $n() {
  (Ae = Me = null), (b = !1);
}
function Tl(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var vy = yt.ReactCurrentBatchConfig;
function ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function yc(e) {
  var t = e._init;
  return t(e._payload);
}
function Dh(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = _t(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = No(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, w) {
    var k = g.type;
    return k === xn
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === St &&
            yc(k) === p.type))
      ? ((w = i(p, g.props)), (w.ref = ur(m, p, g)), (w.return = m), w)
      : ((w = qi(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = ur(m, p, g)),
        (w.return = m),
        w);
  }
  function u(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Ao(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, w, k) {
    return p === null || p.tag !== 7
      ? ((p = sn(g, m.mode, w, k)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = No("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yi:
          return (
            (g = qi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = ur(m, null, p)),
            (g.return = m),
            g
          );
        case vn:
          return (p = Ao(p, m.mode, g)), (p.return = m), p;
        case St:
          var w = p._init;
          return d(m, w(p._payload), g);
      }
      if (pr(p) || ir(p))
        return (p = sn(p, m.mode, g, null)), (p.return = m), p;
      Ni(m, p);
    }
    return null;
  }
  function f(m, p, g, w) {
    var k = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(m, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yi:
          return g.key === k ? l(m, p, g, w) : null;
        case vn:
          return g.key === k ? u(m, p, g, w) : null;
        case St:
          return (k = g._init), f(m, p, k(g._payload), w);
      }
      if (pr(g) || ir(g)) return k !== null ? null : c(m, p, g, w, null);
      Ni(m, g);
    }
    return null;
  }
  function y(m, p, g, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), a(p, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yi:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, k);
        case vn:
          return (m = m.get(w.key === null ? g : w.key) || null), u(p, m, w, k);
        case St:
          var E = w._init;
          return y(m, p, g, E(w._payload), k);
      }
      if (pr(w) || ir(w)) return (m = m.get(g) || null), c(p, m, w, k, null);
      Ni(p, w);
    }
    return null;
  }
  function v(m, p, g, w) {
    for (
      var k = null, E = null, j = p, P = (p = 0), V = null;
      j !== null && P < g.length;
      P++
    ) {
      j.index > P ? ((V = j), (j = null)) : (V = j.sibling);
      var R = f(m, j, g[P], w);
      if (R === null) {
        j === null && (j = V);
        break;
      }
      e && j && R.alternate === null && t(m, j),
        (p = s(R, p, P)),
        E === null ? (k = R) : (E.sibling = R),
        (E = R),
        (j = V);
    }
    if (P === g.length) return n(m, j), b && qt(m, P), k;
    if (j === null) {
      for (; P < g.length; P++)
        (j = d(m, g[P], w)),
          j !== null &&
            ((p = s(j, p, P)), E === null ? (k = j) : (E.sibling = j), (E = j));
      return b && qt(m, P), k;
    }
    for (j = r(m, j); P < g.length; P++)
      (V = y(j, m, P, g[P], w)),
        V !== null &&
          (e && V.alternate !== null && j.delete(V.key === null ? P : V.key),
          (p = s(V, p, P)),
          E === null ? (k = V) : (E.sibling = V),
          (E = V));
    return (
      e &&
        j.forEach(function (se) {
          return t(m, se);
        }),
      b && qt(m, P),
      k
    );
  }
  function x(m, p, g, w) {
    var k = ir(g);
    if (typeof k != "function") throw Error(T(150));
    if (((g = k.call(g)), g == null)) throw Error(T(151));
    for (
      var E = (k = null), j = p, P = (p = 0), V = null, R = g.next();
      j !== null && !R.done;
      P++, R = g.next()
    ) {
      j.index > P ? ((V = j), (j = null)) : (V = j.sibling);
      var se = f(m, j, R.value, w);
      if (se === null) {
        j === null && (j = V);
        break;
      }
      e && j && se.alternate === null && t(m, j),
        (p = s(se, p, P)),
        E === null ? (k = se) : (E.sibling = se),
        (E = se),
        (j = V);
    }
    if (R.done) return n(m, j), b && qt(m, P), k;
    if (j === null) {
      for (; !R.done; P++, R = g.next())
        (R = d(m, R.value, w)),
          R !== null &&
            ((p = s(R, p, P)), E === null ? (k = R) : (E.sibling = R), (E = R));
      return b && qt(m, P), k;
    }
    for (j = r(m, j); !R.done; P++, R = g.next())
      (R = y(j, m, P, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && j.delete(R.key === null ? P : R.key),
          (p = s(R, p, P)),
          E === null ? (k = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        j.forEach(function (vt) {
          return t(m, vt);
        }),
      b && qt(m, P),
      k
    );
  }
  function S(m, p, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === xn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case yi:
          e: {
            for (var k = g.key, E = p; E !== null; ) {
              if (E.key === k) {
                if (((k = g.type), k === xn)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (p = i(E, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === St &&
                    yc(k) === E.type)
                ) {
                  n(m, E.sibling),
                    (p = i(E, g.props)),
                    (p.ref = ur(m, E, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            g.type === xn
              ? ((p = sn(g.props.children, m.mode, w, g.key)),
                (p.return = m),
                (m = p))
              : ((w = qi(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = ur(m, p, g)),
                (w.return = m),
                (m = w));
          }
          return o(m);
        case vn:
          e: {
            for (E = g.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ao(g, m.mode, w)), (p.return = m), (m = p);
          }
          return o(m);
        case St:
          return (E = g._init), S(m, p, E(g._payload), w);
      }
      if (pr(g)) return v(m, p, g, w);
      if (ir(g)) return x(m, p, g, w);
      Ni(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = No(g, m.mode, w)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return S;
}
var Wn = Dh(!0),
  Lh = Dh(!1),
  fs = Ut(null),
  hs = null,
  jn = null,
  El = null;
function jl() {
  El = jn = hs = null;
}
function Nl(e) {
  var t = fs.current;
  z(fs), (e._currentValue = t);
}
function xa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  (hs = e),
    (El = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function be(e) {
  var t = e._currentValue;
  if (El !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (hs === null) throw Error(T(308));
      (jn = e), (hs.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var en = null;
function Al(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Vh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Al(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pt(e, r)
  );
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function Ml(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _h(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Al(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pt(e, n)
  );
}
function $i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ml(e, n);
  }
}
function vc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ps(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((f = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                d = v.call(y, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (f = typeof v == "function" ? v.call(y, d, f) : v),
                f == null)
              )
                break e;
              d = G({}, d, f);
              break e;
            case 2:
              kt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (dn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var li = {},
  nt = Ut(li),
  Wr = Ut(li),
  Hr = Ut(li);
function tn(e) {
  if (e === li) throw Error(T(174));
  return e;
}
function Rl(e, t) {
  switch ((O(Hr, t), O(Wr, e), O(nt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jo(t, e));
  }
  z(nt), O(nt, t);
}
function Hn() {
  z(nt), z(Wr), z(Hr);
}
function Ih(e) {
  tn(Hr.current);
  var t = tn(nt.current),
    n = Jo(t, e.type);
  t !== n && (O(Wr, e), O(nt, n));
}
function Dl(e) {
  Wr.current === e && (z(nt), z(Wr));
}
var $ = Ut(0);
function ms(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ko = [];
function Ll() {
  for (var e = 0; e < ko.length; e++)
    ko[e]._workInProgressVersionPrimary = null;
  ko.length = 0;
}
var Wi = yt.ReactCurrentDispatcher,
  Co = yt.ReactCurrentBatchConfig,
  cn = 0,
  K = null,
  ne = null,
  ae = null,
  gs = !1,
  Tr = !1,
  Kr = 0,
  xy = 0;
function he() {
  throw Error(T(321));
}
function Vl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function _l(e, t, n, r, i, s) {
  if (
    ((cn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wi.current = e === null || e.memoizedState === null ? Cy : Py),
    (e = n(r, i)),
    Tr)
  ) {
    s = 0;
    do {
      if (((Tr = !1), (Kr = 0), 25 <= s)) throw Error(T(301));
      (s += 1),
        (ae = ne = null),
        (t.updateQueue = null),
        (Wi.current = Ty),
        (e = n(r, i));
    } while (Tr);
  }
  if (
    ((Wi.current = ys),
    (t = ne !== null && ne.next !== null),
    (cn = 0),
    (ae = ne = K = null),
    (gs = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Il() {
  var e = Kr !== 0;
  return (Kr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (K.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function $e() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ae === null ? K.memoizedState : ae.next;
  if (t !== null) (ae = t), (ne = e);
  else {
    if (e === null) throw Error(T(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      ae === null ? (K.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Po(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((cn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (K.lanes |= c),
          (dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      Ye(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (K.lanes |= s), (dn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function To(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ye(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Fh() {}
function Oh(e, t) {
  var n = K,
    r = $e(),
    i = t(),
    s = !Ye(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Fl(Uh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xr(9, zh.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(T(349));
    cn & 30 || Bh(n, t, i);
  }
  return i;
}
function Bh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bh(t) && $h(e);
}
function Uh(e, t, n) {
  return n(function () {
    bh(t) && $h(e);
  });
}
function bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function $h(e) {
  var t = pt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function wc(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ky.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wh() {
  return $e().memoizedState;
}
function Hi(e, t, n, r) {
  var i = Je();
  (K.flags |= e),
    (i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Os(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ne !== null) {
    var o = ne.memoizedState;
    if (((s = o.destroy), r !== null && Vl(r, o.deps))) {
      i.memoizedState = Xr(t, n, s, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Xr(1 | t, n, s, r));
}
function Sc(e, t) {
  return Hi(8390656, 8, e, t);
}
function Fl(e, t) {
  return Os(2048, 8, e, t);
}
function Hh(e, t) {
  return Os(4, 2, e, t);
}
function Kh(e, t) {
  return Os(4, 4, e, t);
}
function Gh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Os(4, 4, Gh.bind(null, t, e), n)
  );
}
function Ol() {}
function qh(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Qh(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yh(e, t, n) {
  return cn & 21
    ? (Ye(n, t) || ((n = nh()), (K.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function wy(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Co.transition;
  Co.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Co.transition = r);
  }
}
function Zh() {
  return $e().memoizedState;
}
function Sy(e, t, n) {
  var r = Vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jh(e))
  )
    ep(t, n);
  else if (((n = Vh(e, t, n, r)), n !== null)) {
    var i = we();
    Qe(n, e, r, i), tp(n, t, r);
  }
}
function ky(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jh(e)) ep(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ye(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Al(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vh(e, t, i, r)),
      n !== null && ((i = we()), Qe(n, e, r, i), tp(n, t, r));
  }
}
function Jh(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function ep(e, t) {
  Tr = gs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ml(e, n);
  }
}
var ys = {
    readContext: be,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: be,
    useEffect: Sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Gh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sy.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wc,
    useDebugValue: Ol,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = wc(!1),
        t = e[0];
      return (e = wy.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Je();
      if (b) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(T(349));
        cn & 30 || Bh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Sc(Uh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Xr(9, zh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = le.identifierPrefix;
      if (b) {
        var n = lt,
          r = at;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Py = {
    readContext: be,
    useCallback: qh,
    useContext: be,
    useEffect: Fl,
    useImperativeHandle: Xh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: Qh,
    useReducer: Po,
    useRef: Wh,
    useState: function () {
      return Po(Gr);
    },
    useDebugValue: Ol,
    useDeferredValue: function (e) {
      var t = $e();
      return Yh(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(Gr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Fh,
    useSyncExternalStore: Oh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  },
  Ty = {
    readContext: be,
    useCallback: qh,
    useContext: be,
    useEffect: Fl,
    useImperativeHandle: Xh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: Qh,
    useReducer: To,
    useRef: Wh,
    useState: function () {
      return To(Gr);
    },
    useDebugValue: Ol,
    useDeferredValue: function (e) {
      var t = $e();
      return ne === null ? (t.memoizedState = e) : Yh(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = To(Gr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Fh,
    useSyncExternalStore: Oh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Vt(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Dt(e, s, i)),
      t !== null && (Qe(t, e, i, r), $i(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Vt(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Dt(e, s, i)),
      t !== null && (Qe(t, e, i, r), $i(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Vt(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Dt(e, i, r)),
      t !== null && (Qe(t, e, r, n), $i(t, e, r));
  },
};
function kc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, s)
      : !0
  );
}
function np(e, t, n) {
  var r = !1,
    i = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = be(s))
      : ((i = Ee(t) ? ln : ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? bn(e, i) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ml(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = be(s))
    : ((s = Ee(t) ? ln : ve.current), (i.context = bn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (wa(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Bs.enqueueReplaceState(i, i.state, null),
      ps(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += J0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Eo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ey = typeof WeakMap == "function" ? WeakMap : Map;
function rp(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xs || ((xs = !0), (Da = r)), ka(e, t);
    }),
    n
  );
}
function ip(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ka(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ka(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Pc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ey();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = zy.bind(null, e, t, n)), t.then(e, e));
}
function Tc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ec(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jy = yt.ReactCurrentOwner,
  Pe = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Lh(t, null, n, r) : Wn(t, e.child, n, r);
}
function jc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Bn(t, i),
    (r = _l(e, t, n, r, s, i)),
    (n = Il()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (b && n && Cl(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function Nc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Kl(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), sp(e, t, s, r, i))
      : ((e = qi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(o, r) && e.ref === t.ref)
    )
      return mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (zr(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), mt(e, t, i);
  }
  return Ca(e, t, n, r, i);
}
function op(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(An, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(An, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        O(An, Ne),
        (Ne |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(An, Ne),
      (Ne |= r);
  return xe(e, t, i, n), t.child;
}
function ap(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ca(e, t, n, r, i) {
  var s = Ee(n) ? ln : ve.current;
  return (
    (s = bn(t, s)),
    Bn(t, i),
    (n = _l(e, t, n, r, s, i)),
    (r = Il()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : (b && r && Cl(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function Ac(e, t, n, r, i) {
  if (Ee(n)) {
    var s = !0;
    us(t);
  } else s = !1;
  if ((Bn(t, i), t.stateNode === null))
    Ki(e, t), np(t, n, r), Sa(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = be(u))
      : ((u = Ee(n) ? ln : ve.current), (u = bn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Cc(t, o, r, u)),
      (kt = !1);
    var f = t.memoizedState;
    (o.state = f),
      ps(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Te.current || kt
        ? (typeof c == "function" && (wa(t, n, c, r), (l = t.memoizedState)),
          (a = kt || kc(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      _h(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ke(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = be(l))
        : ((l = Ee(n) ? ln : ve.current), (l = bn(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Cc(t, o, r, l)),
      (kt = !1),
      (f = t.memoizedState),
      (o.state = f),
      ps(t, r, o, i);
    var v = t.memoizedState;
    a !== d || f !== v || Te.current || kt
      ? (typeof y == "function" && (wa(t, n, y, r), (v = t.memoizedState)),
        (u = kt || kc(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pa(e, t, n, r, s, i);
}
function Pa(e, t, n, r, i, s) {
  ap(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && pc(t, n, !1), mt(e, t, s);
  (r = t.stateNode), (jy.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Wn(t, e.child, null, s)), (t.child = Wn(t, null, a, s)))
      : xe(e, t, a, s),
    (t.memoizedState = r.state),
    i && pc(t, n, !0),
    t.child
  );
}
function lp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hc(e, t.context, !1),
    Rl(e, t.containerInfo);
}
function Mc(e, t, n, r, i) {
  return $n(), Tl(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var Ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function up(e, t, n) {
  var r = t.pendingProps,
    i = $.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    O($, i & 1),
    e === null)
  )
    return (
      va(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = bs(o, r, 0, null)),
              (e = sn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ea(n)),
              (t.memoizedState = Ta),
              e)
            : Bl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ny(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = _t(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = _t(a, s)) : ((s = sn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ea(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ta),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = _t(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bl(e, t) {
  return (
    (t = bs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ai(e, t, n, r) {
  return (
    r !== null && Tl(r),
    Wn(t, e.child, null, n),
    (e = Bl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ny(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Eo(Error(T(422)))), Ai(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = bs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = sn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Wn(t, e.child, null, o),
        (t.child.memoizedState = Ea(o)),
        (t.memoizedState = Ta),
        s);
  if (!(t.mode & 1)) return Ai(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(T(419))), (r = Eo(s, r, void 0)), Ai(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Pe || a)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), pt(e, i), Qe(r, e, i, -1));
    }
    return Hl(), (r = Eo(Error(T(421)))), Ai(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Uy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ae = Rt(i.nextSibling)),
      (Me = t),
      (b = !0),
      (Xe = null),
      e !== null &&
        ((Oe[Be++] = at),
        (Oe[Be++] = lt),
        (Oe[Be++] = un),
        (at = e.id),
        (lt = e.overflow),
        (un = t)),
      (t = Bl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xa(e.return, t, n);
}
function jo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function cp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((xe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rc(e, n, t);
        else if (e.tag === 19) Rc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ms(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          jo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ms(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        jo(t, !0, n, null, s);
        break;
      case "together":
        jo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ay(e, t, n) {
  switch (t.tag) {
    case 3:
      lp(t), $n();
      break;
    case 5:
      Ih(t);
      break;
    case 1:
      Ee(t.type) && us(t);
      break;
    case 4:
      Rl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      O(fs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? up(e, t, n)
          : (O($, $.current & 1),
            (e = mt(e, t, n)),
            e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        O($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), op(e, t, n);
  }
  return mt(e, t, n);
}
var dp, ja, fp, hp;
dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ja = function () {};
fp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), tn(nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = qo(e, i)), (r = qo(e, r)), (s = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Zo(e, i)), (r = Zo(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = as);
    }
    ea(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && B("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function cr(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function My(e, t, n) {
  var r = t.pendingProps;
  switch ((Pl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Ee(t.type) && ls(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        z(Te),
        z(ve),
        Ll(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (_a(Xe), (Xe = null)))),
        ja(e, t),
        pe(t),
        null
      );
    case 5:
      Dl(t);
      var i = tn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return pe(t), null;
        }
        if (((e = tn(nt.current)), ji(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[et] = t), (r[$r] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) B(gr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              zu(r, s), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              bu(r, s), B("invalid", r);
          }
          ea(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Lr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              vi(r), Uu(r, s, !0);
              break;
            case "textarea":
              vi(r), $u(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = as);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Uf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[et] = t),
            (e[$r] = r),
            dp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ta(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) B(gr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                zu(e, r), (i = qo(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                bu(e, r), (i = Zo(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            ea(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Wf(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && bf(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Vr(e, l)
                    : typeof l == "number" && Vr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Lr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && B("scroll", e)
                      : l != null && ul(e, s, l, o));
              }
            switch (n) {
              case "input":
                vi(e), Uu(e, r, !1);
                break;
              case "textarea":
                vi(e), $u(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? _n(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      _n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = as);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) hp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = tn(Hr.current)), tn(nt.current), ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (s = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (z($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Rh(), $n(), (t.flags |= 98560), (s = !1);
        else if (((s = ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[et] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (s = !1);
        } else Xe !== null && (_a(Xe), (Xe = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? re === 0 && (re = 3) : Hl())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Hn(), ja(e, t), e === null && Ur(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Nl(t.type._context), pe(t), null;
    case 17:
      return Ee(t.type) && ls(), pe(t), null;
    case 19:
      if ((z($), (s = t.memoizedState), s === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) cr(s, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ms(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    cr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            J() > Gn &&
            ((t.flags |= 128), (r = !0), cr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ms(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              cr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !b)
            )
              return pe(t), null;
          } else
            2 * J() - s.renderingStartTime > Gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), cr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = $.current),
          O($, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Wl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Ry(e, t) {
  switch ((Pl(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ls(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        z(Te),
        z(ve),
        Ll(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Dl(t), null;
    case 13:
      if ((z($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return z($), null;
    case 4:
      return Hn(), null;
    case 10:
      return Nl(t.type._context), null;
    case 22:
    case 23:
      return Wl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  ge = !1,
  Dy = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Dc = !1;
function Ly(e, t) {
  if (((da = is), (e = vh()), kl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fa = { focusedElem: e, selectionRange: n }, is = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ke(t.type, x),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = Dc), (Dc = !1), v;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Na(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function zs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Aa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[$r], delete t[ma], delete t[my], delete t[gy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = as));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), (e = e.sibling);
}
function Ra(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), (e = e.sibling);
}
var ue = null,
  Ge = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) gp(e, t, n), (n = n.sibling);
}
function gp(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(Ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Nn(n, t);
    case 6:
      var r = ue,
        i = Ge;
      (ue = null),
        xt(e, t, n),
        (ue = r),
        (Ge = i),
        ue !== null &&
          (Ge
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ge
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? wo(e.parentNode, n)
              : e.nodeType === 1 && wo(e, n),
            Or(e))
          : wo(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Ge),
        (ue = n.stateNode.containerInfo),
        (Ge = !0),
        xt(e, t, n),
        (ue = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Na(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Q(n, t, a);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), xt(e, t, n), (ge = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dy()),
      t.forEach(function (r) {
        var i = by.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ue = a.stateNode), (Ge = !1);
              break e;
            case 3:
              (ue = a.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ue = a.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          a = a.return;
        }
        if (ue === null) throw Error(T(160));
        gp(s, o, i), (ue = null), (Ge = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yp(t, e), (t = t.sibling);
}
function yp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), Ze(e), r & 4)) {
        try {
          Er(3, e, e.return), zs(3, e);
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          Er(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      We(t, e), Ze(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (We(t, e),
        Ze(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Vr(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Bf(i, s),
              ta(a, o);
            var u = ta(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Wf(i, d)
                : c === "dangerouslySetInnerHTML"
                ? bf(i, d)
                : c === "children"
                ? Vr(i, d)
                : ul(i, c, d, u);
            }
            switch (a) {
              case "input":
                Qo(i, s);
                break;
              case "textarea":
                zf(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? _n(i, !!s.multiple, y, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? _n(i, !!s.multiple, s.defaultValue, !0)
                      : _n(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[$r] = s;
          } catch (x) {
            Q(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((We(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (x) {
          Q(e, e.return, x);
        }
      break;
    case 4:
      We(t, e), Ze(e);
      break;
    case 13:
      We(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (bl = J())),
        r & 4 && Vc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), We(t, e), (ge = u)) : We(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (d = A = c; A !== null; ) {
              switch (((f = A), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, f, f.return);
                  break;
                case 1:
                  Nn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      Q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Nn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ic(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (A = y)) : Ic(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = $f("display", o)));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Q(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      We(t, e), Ze(e), r & 4 && Vc(e);
      break;
    case 21:
      break;
    default:
      We(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vr(i, ""), (r.flags &= -33));
          var s = Lc(e);
          Ra(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Lc(e);
          Ma(e, a, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      Q(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vy(e, t, n) {
  (A = e), vp(e);
}
function vp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Mi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ge;
        a = Mi;
        var u = ge;
        if (((Mi = o), (ge = l) && !u))
          for (A = i; A !== null; )
            (o = A),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Fc(i)
                : l !== null
                ? ((l.return = o), (A = l))
                : Fc(i);
        for (; s !== null; ) (A = s), vp(s), (s = s.sibling);
        (A = i), (Mi = a), (ge = u);
      }
      _c(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : _c(e);
  }
}
function _c(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || zs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && xc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Or(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        ge || (t.flags & 512 && Aa(t));
      } catch (f) {
        Q(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Ic(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Fc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zs(4, t);
          } catch (l) {
            Q(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Q(t, i, l);
            }
          }
          var s = t.return;
          try {
            Aa(t);
          } catch (l) {
            Q(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Aa(t);
          } catch (l) {
            Q(t, o, l);
          }
      }
    } catch (l) {
      Q(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var _y = Math.ceil,
  vs = yt.ReactCurrentDispatcher,
  zl = yt.ReactCurrentOwner,
  Ue = yt.ReactCurrentBatchConfig,
  I = 0,
  le = null,
  ee = null,
  de = 0,
  Ne = 0,
  An = Ut(0),
  re = 0,
  qr = null,
  dn = 0,
  Us = 0,
  Ul = 0,
  jr = null,
  Ce = null,
  bl = 0,
  Gn = 1 / 0,
  st = null,
  xs = !1,
  Da = null,
  Lt = null,
  Ri = !1,
  Et = null,
  ws = 0,
  Nr = 0,
  La = null,
  Gi = -1,
  Xi = 0;
function we() {
  return I & 6 ? J() : Gi !== -1 ? Gi : (Gi = J());
}
function Vt(e) {
  return e.mode & 1
    ? I & 2 && de !== 0
      ? de & -de
      : vy.transition !== null
      ? (Xi === 0 && (Xi = nh()), Xi)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uh(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (La = null), Error(T(185)));
  si(e, n, r),
    (!(I & 2) || e !== le) &&
      (e === le && (!(I & 2) && (Us |= n), re === 4 && Pt(e, de)),
      je(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Gn = J() + 500), Fs && bt()));
}
function je(e, t) {
  var n = e.callbackNode;
  vg(e, t);
  var r = rs(e, e === le ? de : 0);
  if (r === 0)
    n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ku(n), t === 1))
      e.tag === 0 ? yy(Oc.bind(null, e)) : Nh(Oc.bind(null, e)),
        hy(function () {
          !(I & 6) && bt();
        }),
        (n = null);
    else {
      switch (rh(r)) {
        case 1:
          n = pl;
          break;
        case 4:
          n = eh;
          break;
        case 16:
          n = ns;
          break;
        case 536870912:
          n = th;
          break;
        default:
          n = ns;
      }
      n = Ep(n, xp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xp(e, t) {
  if (((Gi = -1), (Xi = 0), I & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = rs(e, e === le ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ss(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var s = Sp();
    (le !== e || de !== t) && ((st = null), (Gn = J() + 500), rn(e, t));
    do
      try {
        Oy();
        break;
      } catch (a) {
        wp(e, a);
      }
    while (!0);
    jl(),
      (vs.current = s),
      (I = i),
      ee !== null ? (t = 0) : ((le = null), (de = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = oa(e)), i !== 0 && ((r = i), (t = Va(e, i)))), t === 1)
    )
      throw ((n = qr), rn(e, 0), Pt(e, r), je(e, J()), n);
    if (t === 6) Pt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Iy(i) &&
          ((t = Ss(e, r)),
          t === 2 && ((s = oa(e)), s !== 0 && ((r = s), (t = Va(e, s)))),
          t === 1))
      )
        throw ((n = qr), rn(e, 0), Pt(e, r), je(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Qt(e, Ce, st);
          break;
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = bl + 500 - J()), 10 < t))
          ) {
            if (rs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = pa(Qt.bind(null, e, Ce, st), t);
            break;
          }
          Qt(e, Ce, st);
          break;
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - qe(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * _y(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pa(Qt.bind(null, e, Ce, st), r);
            break;
          }
          Qt(e, Ce, st);
          break;
        case 5:
          Qt(e, Ce, st);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return je(e, J()), e.callbackNode === n ? xp.bind(null, e) : null;
}
function Va(e, t) {
  var n = jr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = Ss(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && _a(t)),
    e
  );
}
function _a(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function Iy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~Ul,
      t &= ~Us,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Oc(e) {
  if (I & 6) throw Error(T(327));
  zn();
  var t = rs(e, 0);
  if (!(t & 1)) return je(e, J()), null;
  var n = Ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oa(e);
    r !== 0 && ((t = r), (n = Va(e, r)));
  }
  if (n === 1) throw ((n = qr), rn(e, 0), Pt(e, t), je(e, J()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Ce, st),
    je(e, J()),
    null
  );
}
function $l(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Gn = J() + 500), Fs && bt());
  }
}
function fn(e) {
  Et !== null && Et.tag === 0 && !(I & 6) && zn();
  var t = I;
  I |= 1;
  var n = Ue.transition,
    r = F;
  try {
    if (((Ue.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ue.transition = n), (I = t), !(I & 6) && bt();
  }
}
function Wl() {
  (Ne = An.current), z(An);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fy(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Pl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ls();
          break;
        case 3:
          Hn(), z(Te), z(ve), Ll();
          break;
        case 5:
          Dl(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          z($);
          break;
        case 19:
          z($);
          break;
        case 10:
          Nl(r.type._context);
          break;
        case 22:
        case 23:
          Wl();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ee = e = _t(e.current, null)),
    (de = Ne = t),
    (re = 0),
    (qr = null),
    (Ul = Us = dn = 0),
    (Ce = jr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function wp(e, t) {
  do {
    var n = ee;
    try {
      if ((jl(), (Wi.current = ys), gs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        gs = !1;
      }
      if (
        ((cn = 0),
        (ae = ne = K = null),
        (Tr = !1),
        (Kr = 0),
        (zl.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (qr = t), (ee = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = de),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Tc(o);
          if (y !== null) {
            (y.flags &= -257),
              Ec(y, o, a, s, t),
              y.mode & 1 && Pc(s, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Pc(s, u, t), Hl();
              break e;
            }
            l = Error(T(426));
          }
        } else if (b && a.mode & 1) {
          var S = Tc(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Ec(S, o, a, s, t),
              Tl(Kn(l, a));
            break e;
          }
        }
        (s = l = Kn(l, a)),
          re !== 4 && (re = 2),
          jr === null ? (jr = [s]) : jr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = rp(s, l, t);
              vc(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = ip(s, a, t);
                vc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Cp(n);
    } catch (k) {
      (t = k), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sp() {
  var e = vs.current;
  return (vs.current = ys), e === null ? ys : e;
}
function Hl() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || (!(dn & 268435455) && !(Us & 268435455)) || Pt(le, de);
}
function Ss(e, t) {
  var n = I;
  I |= 2;
  var r = Sp();
  (le !== e || de !== t) && ((st = null), rn(e, t));
  do
    try {
      Fy();
      break;
    } catch (i) {
      wp(e, i);
    }
  while (!0);
  if ((jl(), (I = n), (vs.current = r), ee !== null)) throw Error(T(261));
  return (le = null), (de = 0), re;
}
function Fy() {
  for (; ee !== null; ) kp(ee);
}
function Oy() {
  for (; ee !== null && !ug(); ) kp(ee);
}
function kp(e) {
  var t = Tp(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cp(e) : (ee = t),
    (zl.current = null);
}
function Cp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ry(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (ee = null);
        return;
      }
    } else if (((n = My(n, t, Ne)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Qt(e, t, n) {
  var r = F,
    i = Ue.transition;
  try {
    (Ue.transition = null), (F = 1), By(e, t, n, r);
  } finally {
    (Ue.transition = i), (F = r);
  }
  return null;
}
function By(e, t, n, r) {
  do zn();
  while (Et !== null);
  if (I & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (xg(e, s),
    e === le && ((ee = le = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      Ep(ns, function () {
        return zn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ue.transition), (Ue.transition = null);
    var o = F;
    F = 1;
    var a = I;
    (I |= 4),
      (zl.current = null),
      Ly(e, n),
      yp(n, e),
      sy(fa),
      (is = !!da),
      (fa = da = null),
      (e.current = n),
      Vy(n),
      cg(),
      (I = a),
      (F = o),
      (Ue.transition = s);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), (Et = e), (ws = i)),
    (s = e.pendingLanes),
    s === 0 && (Lt = null),
    hg(n.stateNode),
    je(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xs) throw ((xs = !1), (e = Da), (Da = null), e);
  return (
    ws & 1 && e.tag !== 0 && zn(),
    (s = e.pendingLanes),
    s & 1 ? (e === La ? Nr++ : ((Nr = 0), (La = e))) : (Nr = 0),
    bt(),
    null
  );
}
function zn() {
  if (Et !== null) {
    var e = rh(ws),
      t = Ue.transition,
      n = F;
    try {
      if (((Ue.transition = null), (F = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (ws = 0), I & 6)) throw Error(T(331));
        var i = I;
        for (I |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (A = d);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        y = c.return;
                      if ((pp(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (A = f);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (A = m);
                break e;
              }
              A = s.return;
            }
        }
        var p = e.current;
        for (A = p; A !== null; ) {
          o = A;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (A = g);
          else
            e: for (o = p; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zs(9, a);
                  }
                } catch (k) {
                  Q(a, a.return, k);
                }
              if (a === o) {
                A = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (A = w);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((I = i), bt(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(Ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ue.transition = t);
    }
  }
  return !1;
}
function Bc(e, t, n) {
  (t = Kn(n, t)),
    (t = rp(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = we()),
    e !== null && (si(e, 1, t), je(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Bc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Kn(n, e)),
            (e = ip(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = we()),
            t !== null && (si(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (de & n) === n &&
      (re === 4 || (re === 3 && (de & 130023424) === de && 500 > J() - bl)
        ? rn(e, 0)
        : (Ul |= n)),
    je(e, t);
}
function Pp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Si), (Si <<= 1), !(Si & 130023424) && (Si = 4194304))
      : (t = 1));
  var n = we();
  (e = pt(e, t)), e !== null && (si(e, t, n), je(e, n));
}
function Uy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pp(e, n);
}
function by(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Pp(e, n);
}
var Tp;
Tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), Ay(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), b && t.flags & 1048576 && Ah(t, ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ki(e, t), (e = t.pendingProps);
      var i = bn(t, ve.current);
      Bn(t, n), (i = _l(null, t, r, e, i, n));
      var s = Il();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((s = !0), us(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ml(t),
            (i.updater = Bs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Sa(t, r, e, n),
            (t = Pa(null, t, r, !0, s, n)))
          : ((t.tag = 0), b && s && Cl(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Wy(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = Ca(null, t, r, e, n);
            break e;
          case 1:
            t = Ac(null, t, r, e, n);
            break e;
          case 11:
            t = jc(null, t, r, e, n);
            break e;
          case 14:
            t = Nc(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ca(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ac(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((lp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          _h(e, t),
          ps(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Kn(Error(T(423)), t)), (t = Mc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Kn(Error(T(424)), t)), (t = Mc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Rt(t.stateNode.containerInfo.firstChild),
                Me = t,
                b = !0,
                Xe = null,
                n = Lh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === i)) {
            t = mt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ih(t),
        e === null && va(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ha(r, i) ? (o = null) : s !== null && ha(r, s) && (t.flags |= 32),
        ap(e, t),
        xe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && va(t), null;
    case 13:
      return up(e, t, n);
    case 4:
      return (
        Rl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        jc(e, t, r, i, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          O(fs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ye(s.value, o)) {
            if (s.children === i.children && !Te.current) {
              t = mt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = ut(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      xa(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  xa(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (i = be(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        Nc(e, t, r, i, n)
      );
    case 15:
      return sp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ki(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), us(t)) : (e = !1),
        Bn(t, n),
        np(t, r, i),
        Sa(t, r, i, n),
        Pa(null, t, r, !0, e, n)
      );
    case 19:
      return cp(e, t, n);
    case 22:
      return op(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Ep(e, t) {
  return Jf(e, t);
}
function $y(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new $y(e, t, n, r);
}
function Kl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wy(e) {
  if (typeof e == "function") return Kl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dl)) return 11;
    if (e === fl) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Kl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case xn:
        return sn(n.children, i, s, t);
      case cl:
        (o = 8), (i |= 8);
        break;
      case Ho:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = Ho), (e.lanes = s), e
        );
      case Ko:
        return (e = ze(13, n, t, i)), (e.elementType = Ko), (e.lanes = s), e;
      case Go:
        return (e = ze(19, n, t, i)), (e.elementType = Go), (e.lanes = s), e;
      case If:
        return bs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vf:
              o = 10;
              break e;
            case _f:
              o = 9;
              break e;
            case dl:
              o = 11;
              break e;
            case fl:
              o = 14;
              break e;
            case St:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function sn(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function bs(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = If),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function No(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Ao(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lo(0)),
    (this.expirationTimes = lo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gl(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Hy(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ze(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ml(s),
    e
  );
}
function Ky(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jp(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return jh(e, n, t);
  }
  return t;
}
function Np(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Gl(n, r, !0, e, i, s, o, a, l)),
    (e.context = jp(null)),
    (n = e.current),
    (r = we()),
    (i = Vt(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    Dt(n, s, i),
    (e.current.lanes = i),
    si(e, i, r),
    je(e, r),
    e
  );
}
function $s(e, t, n, r) {
  var i = t.current,
    s = we(),
    o = Vt(i);
  return (
    (n = jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(i, t, o)),
    e !== null && (Qe(e, i, o, s), $i(e, i, o)),
    o
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xl(e, t) {
  zc(e, t), (e = e.alternate) && zc(e, t);
}
function Gy() {
  return null;
}
var Ap =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ql(e) {
  this._internalRoot = e;
}
Ws.prototype.render = ql.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  $s(e, t, null, null);
};
Ws.prototype.unmount = ql.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      $s(null, e, null, null);
    }),
      (t[ht] = null);
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
    Ct.splice(n, 0, e), n === 0 && lh(e);
  }
};
function Ql(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uc() {}
function Xy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ks(o);
        s.call(u);
      };
    }
    var o = Np(t, r, e, 0, null, !1, !1, "", Uc);
    return (
      (e._reactRootContainer = o),
      (e[ht] = o.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ks(l);
      a.call(u);
    };
  }
  var l = Gl(e, 0, !1, null, null, !1, !1, "", Uc);
  return (
    (e._reactRootContainer = l),
    (e[ht] = l.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      $s(t, l, n, r);
    }),
    l
  );
}
function Ks(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ks(o);
        a.call(l);
      };
    }
    $s(t, o, e, i);
  } else o = Xy(n, t, e, i, r);
  return ks(o);
}
ih = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (ml(t, n | 1), je(t, J()), !(I & 6) && ((Gn = J() + 500), bt()));
      }
      break;
    case 13:
      fn(function () {
        var r = pt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }),
        Xl(e, 1);
  }
};
gl = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    Xl(e, 134217728);
  }
};
sh = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = pt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    Xl(e, t);
  }
};
oh = function () {
  return F;
};
ah = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ra = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Is(r);
            if (!i) throw Error(T(90));
            Of(r), Qo(r, i);
          }
        }
      }
      break;
    case "textarea":
      zf(e, n);
      break;
    case "select":
      (t = n.value), t != null && _n(e, !!n.multiple, t, !1);
  }
};
Gf = $l;
Xf = fn;
var qy = { usingClientEntryPoint: !1, Events: [ai, Cn, Is, Hf, Kf, $l] },
  dr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qy = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || Gy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      (Ds = Di.inject(Qy)), (tt = Di);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ql(t)) throw Error(T(200));
  return Ky(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!Ql(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Ap;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gl(e, 1, !1, null, null, n, !1, r, i)),
    (e[ht] = t.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    new ql(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Yf(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return fn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!Hs(t)) throw Error(T(200));
  return Ks(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!Ql(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Ap;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Np(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[ht] = t.current),
    Ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ws(t);
};
Ve.render = function (e, t, n) {
  if (!Hs(t)) throw Error(T(200));
  return Ks(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!Hs(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (fn(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ht] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = $l;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hs(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ks(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function Mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp);
    } catch (e) {
      console.error(e);
    }
}
Mp(), (Mf.exports = Ve);
var Yy = Mf.exports,
  Rp,
  bc = Yy;
(Rp = bc.createRoot), bc.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qr() {
  return (
    (Qr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qr.apply(this, arguments)
  );
}
var jt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(jt || (jt = {}));
const $c = "popstate";
function Zy(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Ia(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Lp(i);
  }
  return ev(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Dp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Jy() {
  return Math.random().toString(36).substr(2, 8);
}
function Wc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ia(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Qr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? er(t) : t,
      { state: n, key: (t && t.key) || r || Jy() }
    )
  );
}
function Lp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function er(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ev(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = jt.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Qr({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = jt.Pop;
    let S = c(),
      m = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: x.location, delta: m });
  }
  function f(S, m) {
    a = jt.Push;
    let p = Ia(x.location, S, m);
    u = c() + 1;
    let g = Wc(p, u),
      w = x.createHref(p);
    try {
      o.pushState(g, "", w);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(w);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function y(S, m) {
    a = jt.Replace;
    let p = Ia(x.location, S, m);
    u = c();
    let g = Wc(p, u),
      w = x.createHref(p);
    o.replaceState(g, "", w),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(S) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof S == "string" ? S : Lp(S);
    return (
      (p = p.replace(/ $/, "%20")),
      ie(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($c, d),
        (l = S),
        () => {
          i.removeEventListener($c, d), (l = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: v,
    encodeLocation(S) {
      let m = v(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: y,
    go(S) {
      return o.go(S);
    },
  };
  return x;
}
var Hc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Hc || (Hc = {}));
function tv(e, t, n) {
  return n === void 0 && (n = "/"), nv(e, t, n, !1);
}
function nv(e, t, n, r) {
  let i = typeof t == "string" ? er(t) : t,
    s = Ip(i.pathname || "/", n);
  if (s == null) return null;
  let o = Vp(e);
  rv(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = pv(s);
    a = fv(o[l], u, r);
  }
  return a;
}
function Vp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ie(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = on([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ie(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Vp(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: cv(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of _p(s.path)) i(s, o, l);
    }),
    t
  );
}
function _p(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = _p(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function rv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : dv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const iv = /^:[\w-]+$/,
  sv = 3,
  ov = 2,
  av = 1,
  lv = 10,
  uv = -2,
  Kc = (e) => e === "*";
function cv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Kc) && (r += uv),
    t && (r += ov),
    n
      .filter((i) => !Kc(i))
      .reduce((i, s) => i + (iv.test(s) ? sv : s === "" ? av : lv), r)
  );
}
function dv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fv(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      d = Gc(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Gc(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: on([s, d.pathname]),
        pathnameBase: wv(on([s, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (s = on([s, d.pathnameBase]));
  }
  return o;
}
function Gc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = hv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: y } = c;
      if (f === "*") {
        let x = a[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        y && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function hv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Dp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function pv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Dp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ip(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function mv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? er(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : gv(n, t)) : t,
    search: Sv(r),
    hash: kv(i),
  };
}
function gv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function yv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function vv(e, t) {
  let n = yv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function xv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = er(e))
    : ((i = Qr({}, e)),
      ie(
        !i.pathname || !i.pathname.includes("?"),
        Mo("?", "pathname", "search", i)
      ),
      ie(
        !i.pathname || !i.pathname.includes("#"),
        Mo("#", "pathname", "hash", i)
      ),
      ie(!i.search || !i.search.includes("#"), Mo("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = mv(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const on = (e) => e.join("/").replace(/\/\/+/g, "/"),
  wv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Cv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Fp = ["post", "put", "patch", "delete"];
new Set(Fp);
const Pv = ["get", ...Fp];
new Set(Pv);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yr.apply(this, arguments)
  );
}
const Yl = C.createContext(null),
  Tv = C.createContext(null),
  Gs = C.createContext(null),
  Xs = C.createContext(null),
  mn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Op = C.createContext(null);
function qs() {
  return C.useContext(Xs) != null;
}
function Zl() {
  return qs() || ie(!1), C.useContext(Xs).location;
}
function Bp(e) {
  C.useContext(Gs).static || C.useLayoutEffect(e);
}
function zp() {
  let { isDataRoute: e } = C.useContext(mn);
  return e ? Bv() : Ev();
}
function Ev() {
  qs() || ie(!1);
  let e = C.useContext(Yl),
    { basename: t, future: n, navigator: r } = C.useContext(Gs),
    { matches: i } = C.useContext(mn),
    { pathname: s } = Zl(),
    o = JSON.stringify(vv(i, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    Bp(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = xv(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : on([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
function jv() {
  let { matches: e } = C.useContext(mn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Nv(e, t) {
  return Av(e, t);
}
function Av(e, t, n, r) {
  qs() || ie(!1);
  let { navigator: i, static: s } = C.useContext(Gs),
    { matches: o } = C.useContext(mn),
    a = o[o.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let c = Zl(),
    d;
  if (t) {
    var f;
    let m = typeof t == "string" ? er(t) : t;
    u === "/" || ((f = m.pathname) != null && f.startsWith(u)) || ie(!1),
      (d = m);
  } else d = c;
  let y = d.pathname || "/",
    v = y;
  if (u !== "/") {
    let m = u.replace(/^\//, "").split("/");
    v = "/" + y.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let x =
      !s && n && n.matches && n.matches.length > 0
        ? n.matches
        : tv(e, { pathname: v }),
    S = Vv(
      x &&
        x.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, l, m.params),
            pathname: on([
              u,
              i.encodeLocation
                ? i.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? u
                : on([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && S
    ? C.createElement(
        Xs.Provider,
        {
          value: {
            location: Yr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: jt.Pop,
          },
        },
        S
      )
    : S;
}
function Mv() {
  let e = Ov(),
    t = Cv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Rv = C.createElement(Mv, null);
class Dv extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          mn.Provider,
          { value: this.props.routeContext },
          C.createElement(Op.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Yl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(mn.Provider, { value: t }, r)
  );
}
function Vv(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || ie(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: y } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let y,
      v = !1,
      x = null,
      S = null;
    n &&
      ((y = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || Rv),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (S = null))
          : u === f &&
            ((v = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, f + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = x)
            : v
            ? (g = S)
            : d.route.Component
            ? (g = C.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = c),
          C.createElement(Lv, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? C.createElement(Dv, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Up = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Up || {}),
  Cs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Cs || {});
function _v(e) {
  let t = C.useContext(Yl);
  return t || ie(!1), t;
}
function Iv(e) {
  let t = C.useContext(Tv);
  return t || ie(!1), t;
}
function Fv(e) {
  let t = C.useContext(mn);
  return t || ie(!1), t;
}
function bp(e) {
  let t = Fv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ie(!1), n.route.id;
}
function Ov() {
  var e;
  let t = C.useContext(Op),
    n = Iv(Cs.UseRouteError),
    r = bp(Cs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Bv() {
  let { router: e } = _v(Up.UseNavigateStable),
    t = bp(Cs.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Bp(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Yr({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function zv(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Fa(e) {
  ie(!1);
}
function Uv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = jt.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  qs() && ie(!1);
  let l = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Yr({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = er(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = C.useMemo(() => {
      let S = Ip(c, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: y, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, y, v, i]);
  return x == null
    ? null
    : C.createElement(
        Gs.Provider,
        { value: u },
        C.createElement(Xs.Provider, { children: n, value: x })
      );
}
function bv(e) {
  let { children: t, location: n } = e;
  return Nv(Oa(t), n);
}
new Promise(() => {});
function Oa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, Oa(r.props.children, s));
        return;
      }
      r.type !== Fa && ie(!1), !r.props.index || !r.props.children || ie(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Oa(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const $v = "6";
try {
  window.__reactRouterVersion = $v;
} catch {}
const Wv = "startTransition",
  Xc = z0[Wv];
function Hv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = Zy({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (d) => {
        u && Xc ? Xc(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.useEffect(() => zv(r), [r]),
    C.createElement(Uv, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var qc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qc || (qc = {}));
var Qc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Qc || (Qc = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Kv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gv = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  X = (e, t) => {
    const n = C.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        c
      ) =>
        C.createElement(
          "svg",
          {
            ref: c,
            ...Kv,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${Gv(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, f]) => C.createElement(d, f)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yc = X("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xv = X("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $p = X("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qv = X("Calculator", [
  [
    "rect",
    { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
  ],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wp = X("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qv = X("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yv = X("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zc = X("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zv = X("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jv = X("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = X("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hp = X("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t1 = X("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n1 = X("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jc = X("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r1 = X("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = X("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e",
    },
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s1 = X("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = X("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o1 = X("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = X("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l1 = X("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kp = X("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Gp = C.createContext(void 0);
function u1({ children: e }) {
  const [t, n] = C.useState(() => {
    if (typeof window < "u") {
      const i = localStorage.getItem("theme");
      return i === "dark" || i === "light"
        ? i
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });
  C.useEffect(() => {
    const i = window.document.documentElement;
    i.classList.remove("light", "dark"),
      i.classList.add(t),
      localStorage.setItem("theme", t);
  }, [t]);
  const r = () => {
    n((i) => (i === "light" ? "dark" : "light"));
  };
  return h.jsx(Gp.Provider, {
    value: { theme: t, toggleTheme: r },
    children: e,
  });
}
function c1() {
  const e = C.useContext(Gp);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const d1 = "/assets/agc-logo-CGSND46I.png";
function f1() {
  const { theme: e, toggleTheme: t } = c1(),
    [n, r] = ii.useState(!1);
  return h.jsx("nav", {
    className: "bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-lg",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [
            h.jsx("div", {
              className: "flex-shrink-0",
              children: h.jsx("img", {
                src: d1,
                alt: "AGC Logo",
                className: "w-16 rounded-md",
              }),
            }),
            h.jsxs("div", {
              className: "hidden md:flex items-center space-x-8",
              children: [
                h.jsx("a", {
                  href: "#courses",
                  className:
                    "text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500",
                  children: "Courses",
                }),
                h.jsx("a", {
                  href: "#demo",
                  className:
                    "text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500",
                  children: "Demo Classes",
                }),
                h.jsx("a", {
                  href: "#faculty",
                  className:
                    "text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500",
                  children: "Faculty",
                }),
                h.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                  children:
                    e === "dark"
                      ? h.jsx(ed, { size: 20 })
                      : h.jsx(Jc, { size: 20 }),
                }),
              ],
            }),
            h.jsxs("div", {
              className: "md:hidden flex items-center",
              children: [
                h.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-2",
                  children:
                    e === "dark"
                      ? h.jsx(ed, { size: 20 })
                      : h.jsx(Jc, { size: 20 }),
                }),
                h.jsx("button", {
                  onClick: () => r(!n),
                  className:
                    "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: h.jsx(n1, { size: 20 }),
                }),
              ],
            }),
          ],
        }),
        n &&
          h.jsx("div", {
            className: "md:hidden",
            children: h.jsxs("div", {
              className: "px-2 pt-2 pb-3 space-y-1",
              children: [
                h.jsx("a", {
                  href: "#courses",
                  className:
                    "block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: "Courses",
                }),
                h.jsx("a", {
                  href: "#demo",
                  className:
                    "block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: "Demo Classes",
                }),
                h.jsx("a", {
                  href: "#faculty",
                  className:
                    "block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: "Faculty",
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
const Jl = C.createContext({});
function eu(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qs = C.createContext(null),
  tu = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class h1 extends C.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function p1({ children: e, isPresent: t }) {
  const n = C.useId(),
    r = C.useRef(null),
    i = C.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = C.useContext(tu);
  return (
    C.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    h.jsx(h1, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: C.cloneElement(e, { ref: r }),
    })
  );
}
const m1 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = eu(g1),
    l = C.useId(),
    u = C.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r]
    ),
    c = C.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    C.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    C.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = h.jsx(p1, { isPresent: n, children: e })),
    h.jsx(Qs.Provider, { value: c, children: e })
  );
};
function g1() {
  return new Map();
}
function Xp(e = !0) {
  const t = C.useContext(Qs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = C.useId();
  C.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = C.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Li = (e) => e.key || "";
function td(e) {
  const t = [];
  return (
    C.Children.forEach(e, (n) => {
      C.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const nu = typeof window < "u",
  qp = nu ? C.useLayoutEffect : C.useEffect,
  y1 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = Xp(o),
      u = C.useMemo(() => td(e), [e]),
      c = o && !a ? [] : u.map(Li),
      d = C.useRef(!0),
      f = C.useRef(u),
      y = eu(() => new Map()),
      [v, x] = C.useState(u),
      [S, m] = C.useState(u);
    qp(() => {
      (d.current = !1), (f.current = u);
      for (let w = 0; w < S.length; w++) {
        const k = Li(S[w]);
        c.includes(k) ? y.delete(k) : y.get(k) !== !0 && y.set(k, !1);
      }
    }, [S, c.length, c.join("-")]);
    const p = [];
    if (u !== v) {
      let w = [...u];
      for (let k = 0; k < S.length; k++) {
        const E = S[k],
          j = Li(E);
        c.includes(j) || (w.splice(k, 0, E), p.push(E));
      }
      s === "wait" && p.length && (w = p), m(td(w)), x(u);
      return;
    }
    const { forceRender: g } = C.useContext(Jl);
    return h.jsx(h.Fragment, {
      children: S.map((w) => {
        const k = Li(w),
          E = o && !a ? !1 : u === S || c.includes(k),
          j = () => {
            if (y.has(k)) y.set(k, !0);
            else return;
            let P = !0;
            y.forEach((V) => {
              V || (P = !1);
            }),
              P &&
                (g == null || g(),
                m(f.current),
                o && (l == null || l()),
                r && r());
          };
        return h.jsx(
          m1,
          {
            isPresent: E,
            initial: !d.current || n ? void 0 : !1,
            custom: E ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: E ? void 0 : j,
            children: w,
          },
          k
        );
      }),
    });
  },
  Re = (e) => e;
let Ba = Re;
function ru(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ct = (e) => e * 1e3,
  dt = (e) => e / 1e3,
  v1 = { skipAnimations: !1, useManualTiming: !1 };
function x1(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const y = d && r ? t : n;
      return c && s.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Vi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  w1 = 40;
function Qp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Vi.reduce((m, p) => ((m[p] = x1(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = o,
    y = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, w1), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Vi.reduce((m, p) => {
      const g = o[p];
      return (m[p] = (w, k = !1, E = !1) => (n || v(), g.schedule(w, k, E))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Vi.length; p++) o[Vi[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: U,
    cancel: Ot,
    state: ce,
    steps: Ro,
  } = Qp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Re, !0),
  Yp = C.createContext({ strict: !1 }),
  nd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qn = {};
for (const e in nd) qn[e] = { isEnabled: (t) => nd[e].some((n) => !!t[n]) };
function S1(e) {
  for (const t in e) qn[t] = { ...qn[t], ...e[t] };
}
const k1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ps(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    k1.has(e)
  );
}
let Zp = (e) => !Ps(e);
function C1(e) {
  e && (Zp = (t) => (t.startsWith("on") ? !Ps(t) : e(t)));
}
try {
  C1(require("@emotion/is-prop-valid").default);
} catch {}
function P1(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Zp(i) ||
        (n === !0 && Ps(i)) ||
        (!t && !Ps(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function T1(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Ys = C.createContext({});
function Zr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const iu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  su = ["initial", ...iu];
function Js(e) {
  return Zs(e.animate) || su.some((t) => Zr(e[t]));
}
function Jp(e) {
  return !!(Js(e) || e.variants);
}
function E1(e, t) {
  if (Js(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zr(n) ? n : void 0,
      animate: Zr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function j1(e) {
  const { initial: t, animate: n } = E1(e, C.useContext(Ys));
  return C.useMemo(() => ({ initial: t, animate: n }), [rd(t), rd(n)]);
}
function rd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const N1 = Symbol.for("motionComponentSymbol");
function Mn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function A1(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r));
    },
    [t]
  );
}
const ou = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  M1 = "framerAppearId",
  em = "data-" + ou(M1),
  { schedule: au, cancel: fk } = Qp(queueMicrotask, !1),
  tm = C.createContext({});
function R1(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = C.useContext(Ys),
    l = C.useContext(Yp),
    u = C.useContext(Qs),
    c = C.useContext(tu).reducedMotion,
    d = C.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    y = C.useContext(tm);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    D1(d.current, n, i, y);
  const v = C.useRef(!1);
  C.useInsertionEffect(() => {
    f && v.current && f.update(n, u);
  });
  const x = n[em],
    S = C.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    qp(() => {
      f &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        au.render(f.render),
        S.current && f.animationState && f.animationState.animateChanges());
    }),
    C.useEffect(() => {
      f &&
        (!S.current && f.animationState && f.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (S.current = !1)));
    }),
    f
  );
}
function D1(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : nm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Mn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function nm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : nm(e.parent);
}
function L1({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && S1(e);
  function a(u, c) {
    let d;
    const f = { ...C.useContext(tu), ...u, layoutId: V1(u) },
      { isStatic: y } = f,
      v = j1(u),
      x = r(u, y);
    if (!y && nu) {
      _1();
      const S = I1(f);
      (d = S.MeasureLayout),
        (v.visualElement = R1(i, x, f, t, S.ProjectionNode));
    }
    return h.jsxs(Ys.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? h.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        n(i, u, A1(x, v.visualElement, c), x, y, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const l = C.forwardRef(a);
  return (l[N1] = i), l;
}
function V1({ layoutId: e }) {
  const t = C.useContext(Jl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function _1(e, t) {
  C.useContext(Yp).strict;
}
function I1(e) {
  const { drag: t, layout: n } = qn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const F1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function lu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(F1.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function id(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function uu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = id(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = id(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const za = (e) => Array.isArray(e),
  O1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  B1 = (e) => (za(e) ? e[e.length - 1] || 0 : e),
  ye = (e) => !!(e && e.getVelocity);
function Qi(e) {
  const t = ye(e) ? e.get() : e;
  return O1(t) ? t.toValue() : t;
}
function z1(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s
) {
  const o = { latestValues: U1(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const rm = (e) => (t, n) => {
  const r = C.useContext(Ys),
    i = C.useContext(Qs),
    s = () => z1(e, t, r, i);
  return n ? s() : eu(s);
};
function U1(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = Qi(s[f]);
  let { initial: o, animate: a } = e;
  const l = Js(e),
    u = Jp(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Zs(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let y = 0; y < f.length; y++) {
      const v = uu(e, f[y]);
      if (v) {
        const { transitionEnd: x, transition: S, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const tr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gn = new Set(tr),
  im = (e) => (t) => typeof t == "string" && t.startsWith(e),
  sm = im("--"),
  b1 = im("var(--"),
  cu = (e) => (b1(e) ? $1.test(e.split("/*")[0].trim()) : !1),
  $1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  om = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  gt = (e, t, n) => (n > t ? t : n < e ? e : n),
  nr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Jr = { ...nr, transform: (e) => gt(0, 1, e) },
  _i = { ...nr, default: 1 },
  ui = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wt = ui("deg"),
  rt = ui("%"),
  M = ui("px"),
  W1 = ui("vh"),
  H1 = ui("vw"),
  sd = {
    ...rt,
    parse: (e) => rt.parse(e) / 100,
    transform: (e) => rt.transform(e * 100),
  },
  K1 = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
  },
  G1 = {
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: _i,
    scaleX: _i,
    scaleY: _i,
    scaleZ: _i,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Jr,
    originX: sd,
    originY: sd,
    originZ: M,
  },
  od = { ...nr, transform: Math.round },
  du = {
    ...K1,
    ...G1,
    zIndex: od,
    size: M,
    fillOpacity: Jr,
    strokeOpacity: Jr,
    numOctaves: od,
  },
  X1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  q1 = tr.length;
function Q1(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < q1; s++) {
    const o = tr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = om(a, du[o]);
      if (!l) {
        i = !1;
        const c = X1[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function fu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (gn.has(l)) {
      o = !0;
      continue;
    } else if (sm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = om(u, du[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Q1(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Y1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Z1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function J1(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Y1 : Z1;
  e[s.offset] = M.transform(-r);
  const o = M.transform(t),
    a = M.transform(n);
  e[s.array] = `${o} ${a}`;
}
function ad(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function ex(e, t, n) {
  const r = ad(t, e.x, e.width),
    i = ad(n, e.y, e.height);
  return `${r} ${i}`;
}
function hu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((fu(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: y, dimensions: v } = e;
  f.transform && (v && (y.transform = f.transform), delete f.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = ex(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && J1(f, o, a, l, !1);
}
const pu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  am = () => ({ ...pu(), attrs: {} }),
  mu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function lm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const um = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function cm(e, t, n, r) {
  lm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(um.has(i) ? i : ou(i), t.attrs[i]);
}
const Ts = {};
function tx(e) {
  Object.assign(Ts, e);
}
function dm(e, { layout: t, layoutId: n }) {
  return (
    gn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ts[e] || e === "opacity"))
  );
}
function gu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ye(i[o]) ||
      (t.style && ye(t.style[o])) ||
      dm(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function fm(e, t, n) {
  const r = gu(e, t, n);
  for (const i in e)
    if (ye(e[i]) || ye(t[i])) {
      const s =
        tr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function nx(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const ld = ["x", "y", "width", "height", "cx", "cy", "r"],
  rx = {
    useVisualState: rm({
      scrapeMotionValuesFromProps: fm,
      createRenderState: am,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (gn.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < ld.length; a++) {
            const l = ld[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          U.read(() => {
            nx(n, r),
              U.render(() => {
                hu(r, i, mu(n.tagName), e.transformTemplate), cm(n, r);
              });
          });
      },
    }),
  },
  ix = {
    useVisualState: rm({
      scrapeMotionValuesFromProps: gu,
      createRenderState: pu,
    }),
  };
function hm(e, t, n) {
  for (const r in t) !ye(t[r]) && !dm(r, n) && (e[r] = t[r]);
}
function sx({ transformTemplate: e }, t) {
  return C.useMemo(() => {
    const n = pu();
    return fu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function ox(e, t) {
  const n = e.style || {},
    r = {};
  return hm(r, n, e), Object.assign(r, sx(e, t)), r;
}
function ax(e, t) {
  const n = {},
    r = ox(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function lx(e, t, n, r) {
  const i = C.useMemo(() => {
    const s = am();
    return (
      hu(s, t, mu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    hm(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function ux(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (lu(n) ? lx : ax)(r, s, o, n),
      u = P1(r, typeof n == "string", e),
      c = n !== C.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = C.useMemo(() => (ye(d) ? d.get() : d), [d]);
    return C.createElement(n, { ...c, children: f });
  };
}
function cx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(lu(r) ? rx : ix),
      preloadedFeatures: e,
      useRender: ux(i),
      createVisualElement: t,
      Component: r,
    };
    return L1(o);
  };
}
function pm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function eo(e, t, n) {
  const r = e.getProps();
  return uu(r, t, n !== void 0 ? n : r.custom, e);
}
const dx = ru(() => window.ScrollTimeline !== void 0);
class fx {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (dx() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class hx extends fx {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function yu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ua = 2e4;
function mm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ua; ) (t += n), (r = e.next(t));
  return t >= Ua ? 1 / 0 : t;
}
function vu(e) {
  return typeof e == "function";
}
function ud(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const xu = (e) => Array.isArray(e) && typeof e[0] == "number",
  px = { linearEasing: void 0 };
function mx(e, t) {
  const n = ru(e);
  return () => {
    var r;
    return (r = px[t]) !== null && r !== void 0 ? r : n();
  };
}
const Es = mx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  gm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Xn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function ym(e) {
  return !!(
    (typeof e == "function" && Es()) ||
    !e ||
    (typeof e == "string" && (e in ba || Es())) ||
    xu(e) ||
    (Array.isArray(e) && e.every(ym))
  );
}
const yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ba = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yr([0, 0.65, 0.55, 1]),
    circOut: yr([0.55, 0, 1, 0.45]),
    backIn: yr([0.31, 0.01, 0.66, -0.59]),
    backOut: yr([0.33, 1.53, 0.69, 0.99]),
  };
function vm(e, t) {
  if (e)
    return typeof e == "function" && Es()
      ? gm(e, t)
      : xu(e)
      ? yr(e)
      : Array.isArray(e)
      ? e.map((n) => vm(n, t) || ba.easeOut)
      : ba[e];
}
const He = { x: !1, y: !1 };
function xm() {
  return He.x || He.y;
}
function gx(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function wm(e, t) {
  const n = gx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function cd(e) {
  return (t) => {
    t.pointerType === "touch" || xm() || e(t);
  };
}
function yx(e, t, n = {}) {
  const [r, i, s] = wm(e, n),
    o = cd((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = cd((d) => {
        u(d), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Sm = (e, t) => (t ? (e === t ? !0 : Sm(e, t.parentElement)) : !1),
  wu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  vx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function xx(e) {
  return vx.has(e.tagName) || e.tabIndex !== -1;
}
const vr = new WeakSet();
function dd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Do(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const wx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = dd(() => {
    if (vr.has(n)) return;
    Do(n, "down");
    const i = dd(() => {
        Do(n, "up");
      }),
      s = () => Do(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function fd(e) {
  return wu(e) && !xm();
}
function Sx(e, t, n = {}) {
  const [r, i, s] = wm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!fd(a) || vr.has(l)) return;
      vr.add(l);
      const u = t(a),
        c = (y, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!fd(y) || !vr.has(l)) &&
              (vr.delete(l), typeof u == "function" && u(y, { success: v }));
        },
        d = (y) => {
          c(y, n.useGlobalTarget || Sm(l, y.target));
        },
        f = (y) => {
          c(y, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      !xx(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => wx(u, i), i);
    }),
    s
  );
}
function kx(e) {
  return e === "x" || e === "y"
    ? He[e]
      ? null
      : ((He[e] = !0),
        () => {
          He[e] = !1;
        })
    : He.x || He.y
    ? null
    : ((He.x = He.y = !0),
      () => {
        He.x = He.y = !1;
      });
}
const km = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...tr,
]);
let Yi;
function Cx() {
  Yi = void 0;
}
const it = {
  now: () => (
    Yi === void 0 &&
      it.set(
        ce.isProcessing || v1.useManualTiming ? ce.timestamp : performance.now()
      ),
    Yi
  ),
  set: (e) => {
    (Yi = e), queueMicrotask(Cx);
  },
};
function Su(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ku(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Cu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Su(this.subscriptions, t), () => ku(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Cm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hd = 30,
  Px = (e) => !isNaN(parseFloat(e));
class Tx {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = it.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = it.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Px(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Cu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = it.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > hd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, hd);
    return Cm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ei(e, t) {
  return new Tx(e, t);
}
function Ex(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ei(n));
}
function jx(e, t) {
  const n = eo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = B1(s[o]);
    Ex(e, o, a);
  }
}
function Nx(e) {
  return !!(ye(e) && e.add);
}
function $a(e, t) {
  const n = e.getValue("willChange");
  if (Nx(n)) return n.add(t);
}
function Pm(e) {
  return e.props[em];
}
const Tm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Ax = 1e-7,
  Mx = 12;
function Rx(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = Tm(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Ax && ++a < Mx);
  return o;
}
function ci(e, t, n, r) {
  if (e === t && n === r) return Re;
  const i = (s) => Rx(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Tm(i(s), t, r));
}
const Em = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  jm = (e) => (t) => 1 - e(1 - t),
  Nm = ci(0.33, 1.53, 0.69, 0.99),
  Pu = jm(Nm),
  Am = Em(Pu),
  Mm = (e) =>
    (e *= 2) < 1 ? 0.5 * Pu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Tu = (e) => 1 - Math.sin(Math.acos(e)),
  Rm = jm(Tu),
  Dm = Em(Tu),
  Lm = (e) => /^0[^.\s]+$/u.test(e);
function Dx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Lm(e)
    : !0;
}
const Ar = (e) => Math.round(e * 1e5) / 1e5,
  Eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Lx(e) {
  return e == null;
}
const Vx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ju = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Vx.test(n) && n.startsWith(e)) ||
      (t && !Lx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Vm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Eu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  _x = (e) => gt(0, 255, e),
  Lo = { ...nr, transform: (e) => Math.round(_x(e)) },
  nn = {
    test: ju("rgb", "red"),
    parse: Vm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Lo.transform(e) +
      ", " +
      Lo.transform(t) +
      ", " +
      Lo.transform(n) +
      ", " +
      Ar(Jr.transform(r)) +
      ")",
  };
function Ix(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Wa = { test: ju("#"), parse: Ix, transform: nn.transform },
  Rn = {
    test: ju("hsl", "hue"),
    parse: Vm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rt.transform(Ar(t)) +
      ", " +
      rt.transform(Ar(n)) +
      ", " +
      Ar(Jr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => nn.test(e) || Wa.test(e) || Rn.test(e),
    parse: (e) =>
      nn.test(e) ? nn.parse(e) : Rn.test(e) ? Rn.parse(e) : Wa.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? nn.transform(e)
        : Rn.transform(e),
  },
  Fx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ox(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Eu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Fx)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const _m = "number",
  Im = "color",
  Bx = "var",
  zx = "var(",
  pd = "${}",
  Ux =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ti(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      Ux,
      (l) => (
        me.test(l)
          ? (r.color.push(s), i.push(Im), n.push(me.parse(l)))
          : l.startsWith(zx)
          ? (r.var.push(s), i.push(Bx), n.push(l))
          : (r.number.push(s), i.push(_m), n.push(parseFloat(l))),
        ++s,
        pd
      )
    )
    .split(pd);
  return { values: n, split: a, indexes: r, types: i };
}
function Fm(e) {
  return ti(e).values;
}
function Om(e) {
  const { split: t, types: n } = ti(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === _m
          ? (s += Ar(i[o]))
          : a === Im
          ? (s += me.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const bx = (e) => (typeof e == "number" ? 0 : e);
function $x(e) {
  const t = Fm(e);
  return Om(e)(t.map(bx));
}
const Bt = {
    test: Ox,
    parse: Fm,
    createTransformer: Om,
    getAnimatableNone: $x,
  },
  Wx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Eu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Wx.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const Kx = /\b([a-z-]*)\(.*?\)/gu,
  Ha = {
    ...Bt,
    getAnimatableNone: (e) => {
      const t = e.match(Kx);
      return t ? t.map(Hx).join(" ") : e;
    },
  },
  Gx = {
    ...du,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Ha,
    WebkitFilter: Ha,
  },
  Nu = (e) => Gx[e];
function Bm(e, t) {
  let n = Nu(e);
  return (
    n !== Ha && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Xx = new Set(["auto", "none", "0"]);
function qx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !Xx.has(s) && ti(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Bm(n, i);
}
const md = (e) => e === nr || e === M,
  gd = (e, t) => parseFloat(e.split(", ")[t]),
  yd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return gd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? gd(s[1], e) : 0;
      }
    },
  Qx = new Set(["x", "y", "z"]),
  Yx = tr.filter((e) => !Qx.has(e));
function Zx(e) {
  const t = [];
  return (
    Yx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Qn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: yd(4, 13),
  y: yd(5, 14),
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const an = new Set();
let Ka = !1,
  Ga = !1;
function zm() {
  if (Ga) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Zx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ga = !1), (Ka = !1), an.forEach((e) => e.complete()), an.clear();
}
function Um() {
  an.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ga = !0);
  });
}
function Jx() {
  Um(), zm();
}
class Au {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (an.add(this), Ka || ((Ka = !0), U.read(Um), U.resolveKeyframes(zm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      an.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), an.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const bm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ew = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function tw(e) {
  const t = ew.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function $m(e, t, n = 1) {
  const [r, i] = tw(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return bm(o) ? parseFloat(o) : o;
  }
  return cu(i) ? $m(i, t, n + 1) : i;
}
const Wm = (e) => (t) => t.test(e),
  nw = { test: (e) => e === "auto", parse: (e) => e },
  Hm = [nr, M, rt, wt, H1, W1, nw],
  vd = (e) => Hm.find(Wm(e));
class Km extends Au {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), cu(u))) {
        const c = $m(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !km.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = vd(i),
      a = vd(s);
    if (o !== a)
      if (md(o) && md(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Dx(t[i]) && r.push(i);
    r.length && qx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Qn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = Qn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const xd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Bt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function rw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function iw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = xd(i, t),
    a = xd(s, t);
  return !o || !a ? !1 : rw(e) || ((n === "spring" || vu(n)) && r);
}
const sw = (e) => e !== null;
function to(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(sw),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const ow = 40;
class Gm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = it.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > ow
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Jx(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = it.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !iw(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l && l(to(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const W = (e, t, n) => e + (t - e) * n;
function Vo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function aw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Vo(l, a, e + 1 / 3)), (s = Vo(l, a, e)), (o = Vo(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function js(e, t) {
  return (n) => (n > 0 ? t : e);
}
const _o = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  lw = [Wa, nn, Rn],
  uw = (e) => lw.find((t) => t.test(e));
function wd(e) {
  const t = uw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Rn && (n = aw(n)), n;
}
const Sd = (e, t) => {
    const n = wd(e),
      r = wd(t);
    if (!n || !r) return js(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = _o(n.red, r.red, s)),
      (i.green = _o(n.green, r.green, s)),
      (i.blue = _o(n.blue, r.blue, s)),
      (i.alpha = W(n.alpha, r.alpha, s)),
      nn.transform(i)
    );
  },
  cw = (e, t) => (n) => t(e(n)),
  di = (...e) => e.reduce(cw),
  Xa = new Set(["none", "hidden"]);
function dw(e, t) {
  return Xa.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function fw(e, t) {
  return (n) => W(e, t, n);
}
function Mu(e) {
  return typeof e == "number"
    ? fw
    : typeof e == "string"
    ? cu(e)
      ? js
      : me.test(e)
      ? Sd
      : mw
    : Array.isArray(e)
    ? Xm
    : typeof e == "object"
    ? me.test(e)
      ? Sd
      : hw
    : js;
}
function Xm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Mu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function hw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Mu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function pw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const mw = (e, t) => {
  const n = Bt.createTransformer(t),
    r = ti(e),
    i = ti(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Xa.has(e) && !i.values.length) || (Xa.has(t) && !r.values.length)
      ? dw(e, t)
      : di(Xm(pw(r, i), i.values), n)
    : js(e, t);
};
function qm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? W(e, t, n)
    : Mu(e)(e, t);
}
const gw = 5;
function Qm(e, t, n) {
  const r = Math.max(t - gw, 0);
  return Cm(n - e(r), t - r);
}
const q = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Io = 0.001;
function yw({
  duration: e = q.duration,
  bounce: t = q.bounce,
  velocity: n = q.velocity,
  mass: r = q.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = gt(q.minDamping, q.maxDamping, o)),
    (e = gt(q.minDuration, q.maxDuration, dt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            y = qa(u, o),
            v = Math.exp(-d);
          return Io - (f / y) * v;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            x = qa(Math.pow(u, 2), o);
          return ((-i(u) + Io > 0 ? -1 : 1) * ((f - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Io + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = xw(i, s, a);
  if (((e = ct(e)), isNaN(l)))
    return { stiffness: q.stiffness, damping: q.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const vw = 12;
function xw(e, t, n) {
  let r = n;
  for (let i = 1; i < vw; i++) r = r - e(r) / t(r);
  return r;
}
function qa(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ww = ["duration", "bounce"],
  Sw = ["stiffness", "damping", "mass"];
function kd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function kw(e) {
  let t = {
    velocity: q.velocity,
    stiffness: q.stiffness,
    damping: q.damping,
    mass: q.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!kd(e, Sw) && kd(e, ww))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * gt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: q.mass, stiffness: i, damping: s };
    } else {
      const n = yw(e);
      (t = { ...t, ...n, mass: q.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ym(e = q.visualDuration, t = q.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: y,
    } = kw({ ...n, velocity: -dt(n.velocity || 0) }),
    v = f || 0,
    x = u / (2 * Math.sqrt(l * c)),
    S = o - s,
    m = dt(Math.sqrt(l / c)),
    p = Math.abs(S) < 5;
  r || (r = p ? q.restSpeed.granular : q.restSpeed.default),
    i || (i = p ? q.restDelta.granular : q.restDelta.default);
  let g;
  if (x < 1) {
    const k = qa(m, x);
    g = (E) => {
      const j = Math.exp(-x * m * E);
      return (
        o - j * (((v + x * m * S) / k) * Math.sin(k * E) + S * Math.cos(k * E))
      );
    };
  } else if (x === 1) g = (k) => o - Math.exp(-m * k) * (S + (v + m * S) * k);
  else {
    const k = m * Math.sqrt(x * x - 1);
    g = (E) => {
      const j = Math.exp(-x * m * E),
        P = Math.min(k * E, 300);
      return (
        o - (j * ((v + x * m * S) * Math.sinh(P) + k * S * Math.cosh(P))) / k
      );
    };
  }
  const w = {
    calculatedDuration: (y && d) || null,
    next: (k) => {
      const E = g(k);
      if (y) a.done = k >= d;
      else {
        let j = 0;
        x < 1 && (j = k === 0 ? ct(v) : Qm(g, k, E));
        const P = Math.abs(j) <= r,
          V = Math.abs(o - E) <= i;
        a.done = P && V;
      }
      return (a.value = a.done ? o : E), a;
    },
    toString: () => {
      const k = Math.min(mm(w), Ua),
        E = gm((j) => w.next(k * j).value, k, 30);
      return k + "ms " + E;
    },
  };
  return w;
}
function Cd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    y = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let x = n * t;
  const S = d + x,
    m = o === void 0 ? S : o(S);
  m !== S && (x = m - d);
  const p = (P) => -x * Math.exp(-P / r),
    g = (P) => m + p(P),
    w = (P) => {
      const V = p(P),
        R = g(P);
      (f.done = Math.abs(V) <= u), (f.value = f.done ? m : R);
    };
  let k, E;
  const j = (P) => {
    y(f.value) &&
      ((k = P),
      (E = Ym({
        keyframes: [f.value, v(f.value)],
        velocity: Qm(g, P, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    j(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let V = !1;
        return (
          !E && k === void 0 && ((V = !0), w(P), j(P)),
          k !== void 0 && P >= k ? E.next(P - k) : (!V && w(P), f)
        );
      },
    }
  );
}
const Cw = ci(0.42, 0, 1, 1),
  Pw = ci(0, 0, 0.58, 1),
  Zm = ci(0.42, 0, 0.58, 1),
  Tw = (e) => Array.isArray(e) && typeof e[0] != "number",
  Pd = {
    linear: Re,
    easeIn: Cw,
    easeInOut: Zm,
    easeOut: Pw,
    circIn: Tu,
    circInOut: Dm,
    circOut: Rm,
    backIn: Pu,
    backInOut: Am,
    backOut: Nm,
    anticipate: Mm,
  },
  Td = (e) => {
    if (xu(e)) {
      Ba(e.length === 4);
      const [t, n, r, i] = e;
      return ci(t, n, r, i);
    } else if (typeof e == "string") return Ba(Pd[e] !== void 0), Pd[e];
    return e;
  };
function Ew(e, t, n) {
  const r = [],
    i = n || qm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Re : t;
      a = di(l, a);
    }
    r.push(a);
  }
  return r;
}
function jw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ba(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Ew(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Xn(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(gt(e[0], e[s - 1], c)) : u;
}
function Nw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xn(0, t, r);
    e.push(W(n, 1, i));
  }
}
function Aw(e) {
  const t = [0];
  return Nw(t, e.length - 1), t;
}
function Mw(e, t) {
  return e.map((n) => n * t);
}
function Rw(e, t) {
  return e.map(() => t || Zm).splice(0, e.length - 1);
}
function Ns({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Tw(r) ? r.map(Td) : Td(r),
    s = { done: !1, value: t[0] },
    o = Mw(n && n.length === t.length ? n : Aw(t), e),
    a = jw(o, t, { ease: Array.isArray(i) ? i : Rw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Dw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => Ot(t),
      now: () => (ce.isProcessing ? ce.timestamp : it.now()),
    };
  },
  Lw = { decay: Cd, inertia: Cd, tween: Ns, keyframes: Ns, spring: Ym },
  Vw = (e) => e / 100;
class Ru extends Gm {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Au,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = vu(n) ? n : Lw[n] || Ns;
    let l, u;
    a !== Ns &&
      typeof t[0] != "number" &&
      ((l = di(Vw, qm(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = mm(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      y = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      w = s;
    if (y) {
      const P = Math.min(this.currentTime, c) / d;
      let V = Math.floor(P),
        R = P % 1;
      !R && P >= 1 && (R = 1),
        R === 1 && V--,
        (V = Math.min(V, y + 1)),
        !!(V % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), x && (R -= x / d))
            : v === "mirror" && (w = o)),
        (g = gt(0, 1, R) * d);
    }
    const k = p ? { done: !1, value: l[0] } : w.next(g);
    a && (k.value = a(k.value));
    let { done: E } = k;
    !p &&
      u !== null &&
      (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const j =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      j && i !== void 0 && (k.value = to(l, this.options, i)),
      S && S(k.value),
      j && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? dt(t.calculatedDuration) : 0;
  }
  get time() {
    return dt(this.currentTime);
  }
  set time(t) {
    (t = ct(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = dt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Dw, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const _w = new Set(["opacity", "clipPath", "filter", "transform"]);
function Iw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vm(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const Fw = ru(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  As = 10,
  Ow = 2e4;
function Bw(e) {
  return vu(e.type) || e.type === "spring" || !ym(e.ease);
}
function zw(e, t) {
  const n = new Ru({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < Ow; ) (r = n.sample(s)), i.push(r.value), (s += As);
  return { times: void 0, keyframes: i, duration: s - As, ease: "linear" };
}
const Jm = { anticipate: Mm, backInOut: Am, circInOut: Dm };
function Uw(e) {
  return e in Jm;
}
class Ed extends Gm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new Km(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && Es() && Uw(s) && (s = Jm[s]), Bw(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: y,
          element: v,
          ...x
        } = this.options,
        S = zw(t, x);
      (t = S.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = S.duration),
        (i = S.times),
        (s = S.ease),
        (o = "keyframes");
    }
    const c = Iw(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (ud(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(to(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return dt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return dt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ct(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Re;
      const { animation: r } = n;
      ud(r, t);
    }
    return Re;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...y
        } = this.options,
        v = new Ru({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = ct(this.time);
      u.setWithVelocity(v.sample(x - As).value, v.sample(x).value, As);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      Fw() &&
      r &&
      _w.has(r) &&
      !l &&
      !u &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const bw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  $w = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ww = { type: "keyframes", duration: 0.8 },
  Hw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Kw = (e, { keyframes: t }) =>
    t.length > 2
      ? Ww
      : gn.has(e)
      ? e.startsWith("scale")
        ? $w(t[1])
        : bw
      : Hw;
function Gw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Du =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = yu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - ct(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    Gw(a) || (c = { ...c, ...Kw(e, c) }),
      c.duration && (c.duration = ct(c.duration)),
      c.repeatDelay && (c.repeatDelay = ct(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = to(c.keyframes, a);
      if (f !== void 0)
        return (
          U.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new hx([])
        );
    }
    return !s && Ed.supports(c) ? new Ed(c) : new Ru(c);
  };
function Xw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function e0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const f = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      y = l[d];
    if (y === void 0 || (c && Xw(c, d))) continue;
    const v = { delay: n, ...yu(o || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = Pm(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, d, U);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    $a(e, d),
      f.start(
        Du(d, f, y, e.shouldReduceMotion && km.has(d) ? { type: !1 } : v, e, x)
      );
    const S = f.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        U.update(() => {
          a && jx(e, a);
        });
      }),
    u
  );
}
function Qa(e, t, n = {}) {
  var r;
  const i = eo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(e0(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return qw(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function qw(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Qw)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Qa(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function Qw(e, t) {
  return e.sortNodePosition(t);
}
function Yw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Qa(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Qa(e, t, n);
  else {
    const i = typeof t == "function" ? eo(e, t, n.custom) : t;
    r = Promise.all(e0(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Zw = su.length;
function t0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? t0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Zw; n++) {
    const r = su[n],
      i = e.props[r];
    (Zr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Jw = [...iu].reverse(),
  eS = iu.length;
function tS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Yw(e, n, r)));
}
function nS(e) {
  let t = tS(e),
    n = jd(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = eo(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...x } = f;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = t0(e.parent) || {},
      d = [],
      f = new Set();
    let y = {},
      v = 1 / 0;
    for (let S = 0; S < eS; S++) {
      const m = Jw[S],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        w = Zr(g),
        k = m === l ? p.isActive : null;
      k === !1 && (v = S);
      let E = g === c[m] && g !== u[m] && w;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && k === null) ||
          (!g && !p.prevProp) ||
          Zs(g) ||
          typeof g == "boolean")
      )
        continue;
      const j = rS(p.prevProp, g);
      let P = j || (m === l && p.isActive && !E && w) || (S > v && w),
        V = !1;
      const R = Array.isArray(g) ? g : [g];
      let se = R.reduce(i(m), {});
      k === !1 && (se = {});
      const { prevResolvedValues: vt = {} } = p,
        Ht = { ...vt, ...se },
        rr = (te) => {
          (P = !0),
            f.has(te) && ((V = !0), f.delete(te)),
            (p.needsAnimating[te] = !0);
          const N = e.getValue(te);
          N && (N.liveStyle = !1);
        };
      for (const te in Ht) {
        const N = se[te],
          D = vt[te];
        if (y.hasOwnProperty(te)) continue;
        let L = !1;
        za(N) && za(D) ? (L = !pm(N, D)) : (L = N !== D),
          L
            ? N != null
              ? rr(te)
              : f.add(te)
            : N !== void 0 && f.has(te)
            ? rr(te)
            : (p.protectedKeys[te] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = se),
        p.isActive && (y = { ...y, ...se }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(E && j) || V) &&
          d.push(...R.map((te) => ({ animation: te, options: { type: m } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (S[m] = p ?? null);
      }),
        d.push({ animation: S });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = jd()), (r = !0);
    },
  };
}
function rS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !pm(t, e) : !1;
}
function Xt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function jd() {
  return {
    animate: Xt(!0),
    whileInView: Xt(),
    whileHover: Xt(),
    whileTap: Xt(),
    whileDrag: Xt(),
    whileFocus: Xt(),
    exit: Xt(),
  };
}
class $t {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class iS extends $t {
  constructor(t) {
    super(t), t.animationState || (t.animationState = nS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Zs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let sS = 0;
class oS extends $t {
  constructor() {
    super(...arguments), (this.id = sS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const aS = { animation: { Feature: iS }, exit: { Feature: oS } };
function ni(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function fi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const lS = (e) => (t) => wu(t) && e(t, fi(t));
function Mr(e, t, n, r) {
  return ni(e, t, lS(n), r);
}
const Nd = (e, t) => Math.abs(e - t);
function uS(e, t) {
  const n = Nd(e.x, t.x),
    r = Nd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class n0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Oo(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = uS(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: v } = d,
          { timestamp: x } = ce;
        this.history.push({ ...v, timestamp: x });
        const { onStart: S, onMove: m } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Fo(f, this.transformPagePoint)),
          U.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Oo(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fo(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(d, S), v && v(d, S);
      }),
      !wu(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = fi(t),
      a = Fo(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = ce;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Oo(a, this.history)),
      (this.removeListeners = di(
        Mr(this.contextWindow, "pointermove", this.handlePointerMove),
        Mr(this.contextWindow, "pointerup", this.handlePointerUp),
        Mr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ot(this.updatePoint);
  }
}
function Fo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ad(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Oo({ point: e }, t) {
  return {
    point: e,
    delta: Ad(e, r0(t)),
    offset: Ad(e, cS(t)),
    velocity: dS(t, 0.1),
  };
}
function cS(e) {
  return e[0];
}
function r0(e) {
  return e[e.length - 1];
}
function dS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = r0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ct(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = dt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const i0 = 1e-4,
  fS = 1 - i0,
  hS = 1 + i0,
  s0 = 0.01,
  pS = 0 - s0,
  mS = 0 + s0;
function Le(e) {
  return e.max - e.min;
}
function gS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Md(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = Le(n) / Le(t)),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= fS && e.scale <= hS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= pS && e.translate <= mS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Rr(e, t, n, r) {
  Md(e.x, t.x, n.x, r ? r.originX : void 0),
    Md(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Rd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Le(t));
}
function yS(e, t, n) {
  Rd(e.x, t.x, n.x), Rd(e.y, t.y, n.y);
}
function Dd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Le(t));
}
function Dr(e, t, n) {
  Dd(e.x, t.x, n.x), Dd(e.y, t.y, n.y);
}
function vS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ld(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function xS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ld(e.x, n, i), y: Ld(e.y, t, r) };
}
function Vd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function wS(e, t) {
  return { x: Vd(e.x, t.x), y: Vd(e.y, t.y) };
}
function SS(e, t) {
  let n = 0.5;
  const r = Le(e),
    i = Le(t);
  return (
    i > r
      ? (n = Xn(t.min, t.max - r, e.min))
      : r > i && (n = Xn(e.min, e.max - i, t.min)),
    gt(0, 1, n)
  );
}
function kS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ya = 0.35;
function CS(e = Ya) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ya),
    { x: _d(e, "left", "right"), y: _d(e, "top", "bottom") }
  );
}
function _d(e, t, n) {
  return { min: Id(e, t), max: Id(e, n) };
}
function Id(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Fd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Dn = () => ({ x: Fd(), y: Fd() }),
  Od = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: Od(), y: Od() });
function Fe(e) {
  return [e("x"), e("y")];
}
function o0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function PS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function TS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Bo(e) {
  return e === void 0 || e === 1;
}
function Za({ scale: e, scaleX: t, scaleY: n }) {
  return !Bo(e) || !Bo(t) || !Bo(n);
}
function Yt(e) {
  return (
    Za(e) ||
    a0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function a0(e) {
  return Bd(e.x) || Bd(e.y);
}
function Bd(e) {
  return e && e !== "0%";
}
function Ms(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function zd(e, t, n, r, i) {
  return i !== void 0 && (e = Ms(e, i, r)), Ms(e, n, r) + t;
}
function Ja(e, t = 0, n = 1, r, i) {
  (e.min = zd(e.min, t, n, r, i)), (e.max = zd(e.max, t, n, r, i));
}
function l0(e, { x: t, y: n }) {
  Ja(e.x, t.translate, t.scale, t.originPoint),
    Ja(e.y, n.translate, n.scale, n.originPoint);
}
const Ud = 0.999999999999,
  bd = 1.0000000000001;
function ES(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Vn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), l0(e, o)),
      r && Yt(s.latestValues) && Vn(e, s.latestValues));
  }
  t.x < bd && t.x > Ud && (t.x = 1), t.y < bd && t.y > Ud && (t.y = 1);
}
function Ln(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function $d(e, t, n, r, i = 0.5) {
  const s = W(e.min, e.max, i);
  Ja(e, t, n, s, r);
}
function Vn(e, t) {
  $d(e.x, t.x, t.scaleX, t.scale, t.originX),
    $d(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function u0(e, t) {
  return o0(TS(e.getBoundingClientRect(), t));
}
function jS(e, t, n) {
  const r = u0(e, n),
    { scroll: i } = t;
  return i && (Ln(r.x, i.offset.x), Ln(r.y, i.offset.y)), r;
}
const c0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  NS = new WeakMap();
class AS {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fi(c).point);
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          f &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = kx(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Fe((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (rt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[S];
                g && (m = Le(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          v && U.postRender(() => v(c, d)),
          $a(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: S } = d;
        if (y && this.currentDirection === null) {
          (this.currentDirection = MS(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          x && x(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Fe((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new n0(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: c0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && U.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ii(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = vS(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Mn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = xS(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = CS(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Fe((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = kS(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = jS(r, i.root, this.visualElement.getTransformPagePoint());
    let o = wS(i.layout.layoutBox, s);
    if (n) {
      const a = n(PS(o));
      (this.hasMutatedConstraints = !!a), a && (o = o0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Fe((c) => {
        if (!Ii(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      $a(this.visualElement, t), r.start(Du(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!Ii(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - W(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Mn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Fe((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = SS({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Fe((o) => {
        if (!Ii(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(W(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    NS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Mr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Mn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      U.read(r);
    const o = ni(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Fe((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ya,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ii(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function MS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class RS extends $t {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Re),
      (this.removeListeners = Re),
      (this.controls = new AS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Re);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wd = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class DS extends $t {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Re);
  }
  onPointerDown(t) {
    this.session = new n0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: c0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Wd(t),
      onStart: Wd(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && U.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Mr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Zi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Hd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Hd(e, t.target.x),
        r = Hd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  LS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Bt.parse(e);
      if (i.length > 5) return r;
      const s = Bt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = W(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class VS extends C.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    tx(_S),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Zi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              U.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      au.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function d0(e) {
  const [t, n] = Xp(),
    r = C.useContext(Jl);
  return h.jsx(VS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(tm),
    isPresent: t,
    safeToRemove: n,
  });
}
const _S = {
  borderRadius: {
    ...fr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: fr,
  borderTopRightRadius: fr,
  borderBottomLeftRadius: fr,
  borderBottomRightRadius: fr,
  boxShadow: LS,
};
function IS(e, t, n) {
  const r = ye(e) ? e : ei(e);
  return r.start(Du("", r, t, n)), r.animation;
}
function FS(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const OS = (e, t) => e.depth - t.depth;
class BS {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Su(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ku(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(OS),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function zS(e, t) {
  const n = it.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Ot(r), e(s - t));
    };
  return U.read(r, !0), () => Ot(r);
}
const f0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  US = f0.length,
  Kd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Gd = (e) => typeof e == "number" || M.test(e);
function bS(e, t, n, r, i, s) {
  i
    ? ((e.opacity = W(0, n.opacity !== void 0 ? n.opacity : 1, $S(r))),
      (e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, WS(r))))
    : s &&
      (e.opacity = W(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < US; o++) {
    const a = `border${f0[o]}Radius`;
    let l = Xd(t, a),
      u = Xd(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Gd(l) === Gd(u)
        ? ((e[a] = Math.max(W(Kd(l), Kd(u), r), 0)),
          (rt.test(u) || rt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function Xd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const $S = h0(0, 0.5, Rm),
  WS = h0(0.5, 0.95, Re);
function h0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xn(e, t, r)));
}
function qd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ie(e, t) {
  qd(e.x, t.x), qd(e.y, t.y);
}
function Qd(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Yd(e, t, n, r, i) {
  return (
    (e -= t), (e = Ms(e, 1 / n, r)), i !== void 0 && (e = Ms(e, 1 / i, r)), e
  );
}
function HS(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (rt.test(t) &&
      ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = W(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Yd(e.min, t, n, a, i)),
    (e.max = Yd(e.max, t, n, a, i));
}
function Zd(e, t, [n, r, i], s, o) {
  HS(e, t[n], t[r], t[i], t.scale, s, o);
}
const KS = ["x", "scaleX", "originX"],
  GS = ["y", "scaleY", "originY"];
function Jd(e, t, n, r) {
  Zd(e.x, t, KS, n ? n.x : void 0, r ? r.x : void 0),
    Zd(e.y, t, GS, n ? n.y : void 0, r ? r.y : void 0);
}
function ef(e) {
  return e.translate === 0 && e.scale === 1;
}
function p0(e) {
  return ef(e.x) && ef(e.y);
}
function tf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function XS(e, t) {
  return tf(e.x, t.x) && tf(e.y, t.y);
}
function nf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function m0(e, t) {
  return nf(e.x, t.x) && nf(e.y, t.y);
}
function rf(e) {
  return Le(e.x) / Le(e.y);
}
function sf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class qS {
  constructor() {
    this.members = [];
  }
  add(t) {
    Su(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ku(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function QS(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Zt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  xr = typeof window < "u" && window.MotionDebug !== void 0,
  zo = ["", "X", "Y", "Z"],
  YS = { visibility: "hidden" },
  of = 1e3;
let ZS = 0;
function Uo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function g0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Pm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && g0(r);
}
function y0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = ZS++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            xr &&
              (Zt.totalNodes =
                Zt.resolvedTargetDeltas =
                Zt.recalculatedProjection =
                  0),
            this.nodes.forEach(t2),
            this.nodes.forEach(o2),
            this.nodes.forEach(a2),
            this.nodes.forEach(n2),
            xr && window.MotionDebug.record(Zt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new BS());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Cu()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = FS(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = zS(f, 250)),
            Zi.hasAnimatedSinceResize &&
              ((Zi.hasAnimatedSinceResize = !1), this.nodes.forEach(lf));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || f2,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !m0(this.targetLayout, v) || y,
                g = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...yu(x, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || lf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ot(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(l2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          g0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(af);
        return;
      }
      this.isUpdating || this.nodes.forEach(i2),
        (this.isUpdating = !1),
        this.nodes.forEach(s2),
        this.nodes.forEach(JS),
        this.nodes.forEach(e2),
        this.clearAllSnapshots();
      const a = it.now();
      (ce.delta = gt(0, 1e3 / 60, a - ce.timestamp)),
        (ce.timestamp = a),
        (ce.isProcessing = !0),
        Ro.update.process(ce),
        Ro.preRender.process(ce),
        Ro.render.process(ce),
        (ce.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), au.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(r2), this.sharedNodes.forEach(u2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !p0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || Yt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        h2(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return Z();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(p2)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Ln(l.x, c.offset.x), Ln(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = Z();
      if (
        (Ie(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Ie(l, o), Ln(l.x, d.offset.x), Ln(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = Z();
      Ie(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Vn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Yt(c.latestValues) && Vn(l, c.latestValues);
      }
      return Yt(this.latestValues) && Vn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Z();
      Ie(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Yt(u.latestValues)) continue;
        Za(u.latestValues) && u.updateSnapshot();
        const c = Z(),
          d = u.measurePageBox();
        Ie(c, d),
          Jd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Yt(this.latestValues) && Jd(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ce.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Dr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Ie(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                yS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ie(this.target, this.layout.layoutBox),
                l0(this.target, this.targetDelta))
              : Ie(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Dr(this.relativeTargetOrigin, this.target, y.target),
                Ie(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          xr && Zt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Za(this.parent.latestValues) ||
          a0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ce.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ie(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      ES(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Z()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Qd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Qd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Rr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== y ||
          !sf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        xr && Zt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Dn()),
        (this.projectionDelta = Dn()),
        (this.projectionDeltaWithTransform = Dn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Dn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Z(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(d2));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        uf(d.x, o.x, k),
          uf(d.y, o.y, k),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Dr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            c2(this.relativeTarget, this.relativeTargetOrigin, f, k),
            g && XS(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Z()),
            Ie(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), bS(c, u, this.latestValues, k, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (Zi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = IS(0, of, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(of),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          v0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Z();
          const d = Le(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Le(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Ie(a, l),
          Vn(a, c),
          Rr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new qS()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Uo("z", o, u, this.animationValues);
      for (let c = 0; c < zo.length; c++)
        Uo(`rotate${zo[c]}`, o, u, this.animationValues),
          Uo(`skew${zo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return YS;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Qi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Qi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Yt(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = QS(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const x in Ts) {
        if (f[x] === void 0) continue;
        const { correct: S, applyTo: m } = Ts[x],
          p = u.transform === "none" ? f[x] : S(f[x], d);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) u[m[w]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Qi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(af),
        this.root.sharedNodes.clear();
    }
  };
}
function JS(e) {
  e.updateLayout();
}
function e2(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Fe((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = Le(f);
          (f.min = r[d].min), (f.max = f.min + y);
        })
      : v0(s, n.layoutBox, r) &&
        Fe((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = Le(r[d]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const a = Dn();
    Rr(a, r, n.layoutBox);
    const l = Dn();
    o ? Rr(l, e.applyTransform(i, !0), n.measuredBox) : Rr(l, r, n.layoutBox);
    const u = !p0(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: y } = d;
        if (f && y) {
          const v = Z();
          Dr(v, n.layoutBox, f.layoutBox);
          const x = Z();
          Dr(x, r, y.layoutBox),
            m0(v, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function t2(e) {
  xr && Zt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function n2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function r2(e) {
  e.clearSnapshot();
}
function af(e) {
  e.clearMeasurements();
}
function i2(e) {
  e.isLayoutDirty = !1;
}
function s2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function lf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function o2(e) {
  e.resolveTargetDelta();
}
function a2(e) {
  e.calcProjection();
}
function l2(e) {
  e.resetSkewAndRotation();
}
function u2(e) {
  e.removeLeadSnapshot();
}
function uf(e, t, n) {
  (e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function cf(e, t, n, r) {
  (e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r));
}
function c2(e, t, n, r) {
  cf(e.x, t.x, n.x, r), cf(e.y, t.y, n.y, r);
}
function d2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const f2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  df = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ff = df("applewebkit/") && !df("chrome/") ? Math.round : Re;
function hf(e) {
  (e.min = ff(e.min)), (e.max = ff(e.max));
}
function h2(e) {
  hf(e.x), hf(e.y);
}
function v0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !gS(rf(t), rf(n), 0.2))
  );
}
function p2(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const m2 = y0({
    attachResizeListener: (e, t) => ni(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  bo = { current: void 0 },
  x0 = y0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bo.current) {
        const e = new m2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bo.current = e);
      }
      return bo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  g2 = {
    pan: { Feature: DS },
    drag: { Feature: RS, ProjectionNode: x0, MeasureLayout: d0 },
  };
function pf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && U.postRender(() => s(t, fi(t)));
}
class y2 extends $t {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = yx(
        t,
        (n) => (pf(this.node, n, "Start"), (r) => pf(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class v2 extends $t {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = di(
      ni(this.node.current, "focus", () => this.onFocus()),
      ni(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function mf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && U.postRender(() => s(t, fi(t)));
}
class x2 extends $t {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Sx(
        t,
        (n) => (
          mf(this.node, n, "Start"),
          (r, { success: i }) => mf(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const el = new WeakMap(),
  $o = new WeakMap(),
  w2 = (e) => {
    const t = el.get(e.target);
    t && t(e);
  },
  S2 = (e) => {
    e.forEach(w2);
  };
function k2({ root: e, ...t }) {
  const n = e || document;
  $o.has(n) || $o.set(n, {});
  const r = $o.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(S2, { root: e, ...t })), r[i];
}
function C2(e, t, n) {
  const r = k2(t);
  return (
    el.set(e, n),
    r.observe(e),
    () => {
      el.delete(e), r.unobserve(e);
    }
  );
}
const P2 = { some: 0, all: 1 };
class T2 extends $t {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : P2[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return C2(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(E2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function E2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const j2 = {
    inView: { Feature: T2 },
    tap: { Feature: x2 },
    focus: { Feature: v2 },
    hover: { Feature: y2 },
  },
  N2 = { layout: { ProjectionNode: x0, MeasureLayout: d0 } },
  tl = { current: null },
  w0 = { current: !1 };
function A2() {
  if (((w0.current = !0), !!nu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (tl.current = e.matches);
      e.addListener(t), t();
    } else tl.current = !1;
}
const M2 = [...Hm, me, Bt],
  R2 = (e) => M2.find(Wm(e)),
  gf = new WeakMap();
function D2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ye(i)) e.addValue(r, i);
    else if (ye(s)) e.addValue(r, ei(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ei(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const yf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class L2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Au),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = it.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), U.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = o;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Js(n)),
      (this.isVariantNode = Jp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const y in f) {
      const v = f[y];
      l[y] !== void 0 && ye(v) && v.set(l[y], !1);
    }
  }
  mount(t) {
    (this.current = t),
      gf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      w0.current || A2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : tl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    gf.delete(this.current),
      this.projection && this.projection.unmount(),
      Ot(this.notifyUpdate),
      Ot(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = gn.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in qn) {
      const n = qn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < yf.length; r++) {
      const i = yf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = D2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ei(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (bm(i) || Lm(i))
          ? (i = parseFloat(i))
          : !R2(i) && Bt.test(n) && (i = Bm(t, n)),
        this.setBaseTarget(t, ye(i) ? i.get() : i)),
      ye(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = uu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ye(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Cu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class S0 extends L2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Km);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function V2(e) {
  return window.getComputedStyle(e);
}
class _2 extends S0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = lm);
  }
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = Nu(n);
      return (r && r.default) || 0;
    } else {
      const r = V2(t),
        i = (sm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return u0(t, n);
  }
  build(t, n, r) {
    fu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gu(t, n, r);
  }
}
class I2 extends S0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = Nu(n);
      return (r && r.default) || 0;
    }
    return (n = um.has(n) ? n : ou(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return fm(t, n, r);
  }
  build(t, n, r) {
    hu(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    cm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = mu(t.tagName)), super.mount(t);
  }
}
const F2 = (e, t) =>
    lu(e) ? new I2(t) : new _2(t, { allowProjection: e !== C.Fragment }),
  O2 = cx({ ...aS, ...j2, ...g2, ...N2 }, F2),
  H = T1(O2),
  B2 = [
    { Icon: $p, delay: 0 },
    { Icon: qv, delay: 0.2 },
    { Icon: o1, delay: 0.4 },
    { Icon: Xv, delay: 0.6 },
  ];
function z2() {
  return h.jsx("div", {
    className:
      "relative overflow-hidden bg-white dark:bg-gray-900 py-16 sm:py-24",
    children: h.jsx("div", {
      className: "container-custom",
      children: h.jsxs("div", {
        className: "lg:grid lg:grid-cols-2 lg:gap-8 items-center",
        children: [
          h.jsx("div", {
            className: "relative",
            children: h.jsxs(H.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                h.jsxs("h1", {
                  className:
                    "text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl",
                  children: [
                    h.jsx("span", {
                      className: "block",
                      children: "Excellence in",
                    }),
                    h.jsx("span", {
                      className: "block text-primary-400",
                      children: "Commerce Education",
                    }),
                  ],
                }),
                h.jsx("p", {
                  className:
                    "mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",
                  children:
                    "Join Kolkata's premier commerce coaching institute led by Aditya Gupta. Transform your academic journey with expert guidance and comprehensive learning.",
                }),
                h.jsx("div", {
                  className: "mt-8 sm:mt-10",
                  children: h.jsx(H.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: () => {
                      window.location.href = "#courses";
                    },
                    className: "btn-primary",
                    children: "Explore Courses",
                  }),
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "relative mt-12 lg:mt-0",
            children: h.jsxs("div", {
              className: "relative",
              children: [
                h.jsx("img", {
                  className: "relative mx-auto rounded-lg shadow-2xl",
                  src: "https://yt3.ggpht.com/7Tm_e04vqupAQAmIttgOQdrzcf-vqpOQ4xwZA3FCfMTxyMUDf_IKJeMjl2y3fevs4q-PAxjGO4YV0MU=s1600-rw-nd-v1",
                  alt: "Aditya Gupta teaching",
                }),
                B2.map(({ Icon: e, delay: t }, n) =>
                  h.jsx(
                    H.div,
                    {
                      className: "absolute",
                      style: {
                        top: `${25 * n}%`,
                        right: n % 2 === 0 ? "10%" : "80%",
                      },
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: [0, -10, 0] },
                      transition: {
                        delay: t,
                        duration: 2,
                        repeat: 1 / 0,
                        repeatType: "reverse",
                      },
                      children: h.jsx("div", {
                        className:
                          "bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg",
                        children: h.jsx(e, {
                          className: "w-6 h-6 text-primary-400",
                        }),
                      }),
                    },
                    n
                  )
                ),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var nl = new Map(),
  Fi = new WeakMap(),
  vf = 0,
  U2 = void 0;
function b2(e) {
  return e
    ? (Fi.has(e) || ((vf += 1), Fi.set(e, vf.toString())), Fi.get(e))
    : "0";
}
function $2(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? b2(e.root) : e[t]}`)
    .toString();
}
function W2(e) {
  const t = $2(e);
  let n = nl.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const s = new IntersectionObserver((o) => {
      o.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, e);
    (i =
      s.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: s, elements: r }),
      nl.set(t, n);
  }
  return n;
}
function H2(e, t, n = {}, r = U2) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: s, elements: o } = W2(n),
    a = o.get(e) || [];
  return (
    o.has(e) || o.set(e, a),
    a.push(t),
    s.observe(e),
    function () {
      a.splice(a.indexOf(t), 1),
        a.length === 0 && (o.delete(e), s.unobserve(e)),
        o.size === 0 && (s.disconnect(), nl.delete(i));
    }
  );
}
function Wt({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: s,
  skip: o,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [d, f] = C.useState(null),
    y = C.useRef(u),
    [v, x] = C.useState({ inView: !!a, entry: void 0 });
  (y.current = u),
    C.useEffect(() => {
      if (o || !d) return;
      let g;
      return (
        (g = H2(
          d,
          (w, k) => {
            x({ inView: w, entry: k }),
              y.current && y.current(w, k),
              k.isIntersecting && s && g && (g(), (g = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l
        )),
        () => {
          g && g();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, d, i, r, s, o, n, l, t]);
  const S = (c = v.entry) == null ? void 0 : c.target,
    m = C.useRef(void 0);
  !d &&
    S &&
    !s &&
    !o &&
    m.current !== S &&
    ((m.current = S), x({ inView: !!a, entry: void 0 }));
  const p = [f, v.inView, v.entry];
  return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
const K2 = [
  { id: 1, name: "Students Taught", value: "10,000+" },
  { id: 2, name: "Courses Offered", value: "15+" },
  { id: 3, name: "Google Rating", value: "4.9" },
  { id: 4, name: "Toppers Produced", value: "500+" },
];
function G2() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("div", {
    className: "bg-primary-400",
    children: h.jsx("div", {
      className: "container-custom py-12 sm:py-16",
      children: h.jsx("div", {
        ref: e,
        className: "grid grid-cols-2 gap-6 sm:grid-cols-4",
        children: K2.map((n, r) =>
          h.jsxs(
            H.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.5, delay: r * 0.1 },
              className: "text-center",
              children: [
                h.jsx(H.p, {
                  className: "text-3xl font-bold text-white sm:text-4xl",
                  initial: { scale: 0 },
                  animate: t ? { scale: 1 } : {},
                  transition: { duration: 0.5, delay: r * 0.1 },
                  children: n.value,
                }),
                h.jsx("p", {
                  className: "mt-2 text-sm font-medium text-primary-100",
                  children: n.name,
                }),
              ],
            },
            n.id
          )
        ),
      }),
    }),
  });
}
const k0 = {
    "class-11-commerce": {
      id: "class-11-commerce",
      title: "Class 11 Commerce",
      description:
        "Comprehensive commerce education for Class 11 students with expert guidance.",
      thumbnail:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      duration: "12 months",
      students: "500+",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
      ],
      features: [
        "Expert Faculty",
        "Study Material",
        "Regular Tests",
        "Doubt Sessions",
        "Parent Meetings",
        "Performance Reports",
        "Practice Papers",
        "Career Guidance",
      ],
      onlinePrice: "₹15,000",
      offlinePrice: "₹25,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "class-12-commerce": {
      id: "class-12-commerce",
      title: "Class 12 Commerce",
      description:
        "Complete preparation for Class 12 board exams and competitive exams.",
      thumbnail:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
      duration: "12 months",
      students: "600+",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
      ],
      features: [
        "Board Exam Preparation",
        "Mock Tests",
        "Career Guidance",
        "Performance Analysis",
        "Study Material",
        "Doubt Sessions",
        "Previous Year Papers",
        "Extra Classes",
      ],
      onlinePrice: "₹18,000",
      offlinePrice: "₹28,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem1": {
      id: "bcom-ccf-sem1",
      title: "B.Com CCF Semester 1",
      description: "Foundation courses in commerce and financial accounting.",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      duration: "6 months",
      students: "200+",
      subjects: [
        "Financial Accounting",
        "Business Mathematics",
        "Business Communication",
        "Business Economics",
        "Business Environment",
      ],
      features: [
        "Core Subject Coverage",
        "Practical Training",
        "Industry Exposure",
        "Expert Guidance",
        "Study Material",
        "Regular Tests",
        "Doubt Sessions",
        "Library Access",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem2": {
      id: "bcom-ccf-sem2",
      title: "B.Com CCF Semester 2",
      description:
        "Advanced concepts in commerce and corporate accounting with practical applications.",
      thumbnail:
        "https://yt3.ggpht.com/R15YXPq2_DczMGVHicrtW2E-ZvSq7qF5GxDOHOW1lcIysQBu94Wz9U_sgU_YOT1td07uccUi5Otlzg=s1600-rw-nd-v1",
      duration: "6 months",
      students: "180+",
      subjects: [
        "Corporate Accounting",
        "Cost Accounting",
        "Business Statistics",
        "Commercial Law",
        "Digital Marketing Basics",
      ],
      features: [
        "Advanced Accounting Concepts",
        "Case Study Analysis",
        "Industry Projects",
        "Expert Guidance",
        "Regular Assessments",
        "Practical Training",
        "Doubt Sessions",
        "Digital Resources",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem3": {
      id: "bcom-ccf-sem3",
      title: "B.Com CCF Semester 3",
      description:
        "Specialized courses in corporate finance and taxation with industry exposure.",
      thumbnail:
        "https://yt3.ggpht.com/lgEIT6Ehkqx7SgJMGu4Lrania7nkerSGzmgPwaheq1ih_A1uxbKZPkFirDu4UDhvA3_8xTJUuiu_OQ=s1080-rw-nd-v1",
      duration: "6 months",
      students: "150+",
      subjects: [
        "Advanced Corporate Accounting",
        "Business Taxation",
        "Company Law",
        "Financial Management",
        "E-Commerce",
      ],
      features: [
        "Industry Expert Sessions",
        "Tax Filing Practice",
        "Company Law Cases",
        "Financial Analysis",
        "Live Projects",
        "Mock Interviews",
        "Career Counseling",
        "Industry Visits",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem4": {
      id: "bcom-ccf-sem4",
      title: "B.Com CCF Semester 4",
      description:
        "Advanced financial management and business economics with practical training.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      duration: "6 months",
      students: "160+",
      subjects: [
        "Advanced Financial Management",
        "Business Economics",
        "Auditing",
        "Information Systems",
        "Business Ethics",
      ],
      features: [
        "Financial Analysis Tools",
        "Economic Case Studies",
        "Audit Practice",
        "Ethics Workshops",
        "Industry Projects",
        "Guest Lectures",
        "Internship Support",
        "Placement Training",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem5": {
      id: "bcom-ccf-sem5",
      title: "B.Com CCF Semester 5",
      description:
        "Strategic management and advanced accounting with industry integration.",
      thumbnail:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      duration: "6 months",
      students: "140+",
      subjects: [
        "Strategic Management",
        "Advanced Accounting",
        "Corporate Tax Planning",
        "Investment Management",
        "Risk Management",
      ],
      features: [
        "Strategic Planning Workshops",
        "Tax Planning Sessions",
        "Investment Analysis",
        "Risk Assessment",
        "Industry Projects",
        "Career Guidance",
        "Mock Interviews",
        "Placement Support",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "bcom-ccf-sem6": {
      id: "bcom-ccf-sem6",
      title: "B.Com CCF Semester 6",
      description:
        "Final semester specialization with focus on career preparation.",
      thumbnail:
        "https://yt3.ggpht.com/8A0ugyX82sV2ZhHaiiiHcJaPaPY6cjH-ptbEplup-9M4TLHqqctxYT27JkikMQL-JiN1nMdjuWAPhBQ=s1529-rw-nd-v1",
      duration: "6 months",
      students: "130+",
      subjects: [
        "International Finance",
        "Project Management",
        "Business Analytics",
        "Financial Markets",
        "Professional Ethics",
      ],
      features: [
        "Industry Integration",
        "Project Work",
        "Analytics Training",
        "Market Analysis",
        "Ethics Workshop",
        "Placement Preparation",
        "Industry Visits",
        "Alumni Connect",
      ],
      onlinePrice: "₹12,000",
      offlinePrice: "₹20,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    mba: {
      id: "mba",
      title: "MBA",
      description:
        "Comprehensive MBA preparation with focus on practical knowledge and industry exposure.",
      thumbnail:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      duration: "24 months",
      students: "100+",
      subjects: [
        "Management Principles",
        "Financial Management",
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "Strategic Management",
        "Business Analytics",
        "International Business",
      ],
      features: [
        "Industry Expert Sessions",
        "Case Study Analysis",
        "Live Projects",
        "Internship Support",
        "Placement Assistance",
        "Leadership Training",
        "Soft Skills Development",
        "Research Projects",
      ],
      onlinePrice: "₹35,000",
      offlinePrice: "₹45,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    bba: {
      id: "bba",
      title: "BBA",
      description:
        "Comprehensive undergraduate business program with practical exposure.",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      duration: "36 months",
      students: "120+",
      subjects: [
        "Business Management",
        "Marketing",
        "Finance",
        "Human Resources",
        "Operations",
        "Business Law",
        "Economics",
        "Entrepreneurship",
      ],
      features: [
        "Industry Training",
        "Case Studies",
        "Live Projects",
        "Internships",
        "Soft Skills",
        "Placement Support",
        "Guest Lectures",
        "Industrial Visits",
      ],
      onlinePrice: "₹25,000",
      offlinePrice: "₹35,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "ms-office": {
      id: "ms-office",
      title: "MS Office",
      description:
        "Comprehensive Microsoft Office suite training for professionals.",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      duration: "3 months",
      students: "200+",
      subjects: [
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "MS Access",
        "MS Outlook",
      ],
      features: [
        "Hands-on Training",
        "Real Projects",
        "Certificate",
        "Job Support",
        "Practice Sessions",
        "Assessment Tests",
        "Course Material",
        "Placement Assistance",
      ],
      onlinePrice: "₹8,000",
      offlinePrice: "₹12,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    "gst-tally": {
      id: "gst-tally",
      title: "GST/Tally",
      description:
        "Professional training in GST compliance and Tally software with practical exposure.",
      thumbnail:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      duration: "4 months",
      students: "150+",
      subjects: [
        "GST Fundamentals",
        "Tally Prime",
        "GST Returns",
        "E-Way Bill",
        "Input Tax Credit",
      ],
      features: [
        "Practical Training",
        "Live Projects",
        "GST Portal",
        "Return Filing",
        "Case Studies",
        "Certificate",
        "Job Support",
        "Industry Connect",
      ],
      onlinePrice: "₹10,000",
      offlinePrice: "₹15,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
    mcom: {
      id: "mcom",
      title: "M.Com",
      description:
        "Advanced studies in commerce with specialization options and research focus.",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      duration: "24 months",
      students: "80+",
      subjects: [
        "Advanced Accounting",
        "Financial Management",
        "Research Methodology",
        "Business Economics",
        "Corporate Law",
        "Tax Planning",
        "Strategic Management",
        "International Finance",
      ],
      features: [
        "Research Projects",
        "Specialization",
        "Industry Projects",
        "Expert Faculty",
        "Thesis Guidance",
        "Publication Support",
        "Seminar Participation",
        "Career Guidance",
      ],
      onlinePrice: "₹30,000",
      offlinePrice: "₹40,000",
      playlist: "PLNn0hJzC5ok7BVSdh3CXoOBX1aBcbyX2y",
    },
  },
  X2 = [
    {
      id: 1,
      title: "Accounting Basics Explained",
      videoId: "D0p9rihk8Xc",
      embedUrl: "https://www.youtube.com/embed/D0p9rihk8Xc?si=81RTi2_1GnBZZ0Cq",
    },
    {
      id: 2,
      title: "Business Studies Introduction",
      videoId: "1UfcE_kUsV8",
      embedUrl: "https://www.youtube.com/embed/1UfcE_kUsV8?si=yu35igWhoaOEmVpx",
    },
    {
      id: 3,
      title: "Economics Fundamentals",
      videoId: "K6deKswjRY8",
      embedUrl: "https://www.youtube.com/embed/K6deKswjRY8?si=ntusyNUwWC03v_H3",
    },
    {
      id: 4,
      title: "Commerce Concepts",
      videoId: "So6_meVqU38",
      embedUrl: "https://www.youtube.com/embed/So6_meVqU38?si=SpD3ckjWKTetoFl1",
    },
    {
      id: 5,
      title: "Business Mathematics",
      videoId: "GmWICBwro5o",
      embedUrl: "https://www.youtube.com/embed/GmWICBwro5o?si=pa6ZDGpP61DybjdE",
    },
  ],
  q2 = [
    {
      name: "Aditya Gupta",
      role: "Founder & Lead Instructor",
      subjects: ["Advanced Accountancy", "Business Studies"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Priya Sharma",
      role: "Senior Faculty",
      subjects: ["Economics", "Business Mathematics"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Rajesh Kumar",
      role: "Course Coordinator",
      subjects: ["Cost Accounting", "GST"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];
function Q2() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 }),
    n = zp();
  return h.jsx("section", {
    id: "courses",
    className: "py-16 bg-gray-50 dark:bg-gray-800",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: { opacity: 0, y: 20 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "Comprehensive Commerce Education for Every Stage",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children:
                "Choose from our carefully crafted courses designed to help you excel",
            }),
          ],
        }),
        h.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: Object.values(k0).map((r, i) =>
            h.jsxs(
              H.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: i * 0.1 },
                className:
                  "bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300",
                onClick: () => n(`/course/${r.id}`),
                children: [
                  h.jsx("img", {
                    src: r.thumbnail,
                    alt: r.title,
                    className: "w-full h-48 object-cover",
                  }),
                  h.jsxs("div", {
                    className: "p-6",
                    children: [
                      h.jsx("h3", {
                        className:
                          "text-xl font-bold text-gray-900 dark:text-white",
                        children: r.title,
                      }),
                      h.jsx("p", {
                        className: "mt-2 text-gray-600 dark:text-gray-300",
                        children: r.description,
                      }),
                      h.jsx("ul", {
                        className: "mt-4 space-y-2",
                        children: r.features.map((s, o) =>
                          h.jsxs(
                            "li",
                            {
                              className:
                                "flex items-center text-gray-600 dark:text-gray-300",
                              children: [
                                h.jsx(Wp, {
                                  className: "h-5 w-5 text-primary-400 mr-2",
                                }),
                                s,
                              ],
                            },
                            o
                          )
                        ),
                      }),
                      h.jsxs("div", {
                        className: "mt-6 space-y-4",
                        children: [
                          h.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              h.jsx("span", {
                                className: "text-gray-600 dark:text-gray-300",
                                children: "Online",
                              }),
                              h.jsx("span", {
                                className: "text-lg font-bold text-primary-400",
                                children: r.onlinePrice,
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              h.jsx("span", {
                                className: "text-gray-600 dark:text-gray-300",
                                children: "Offline",
                              }),
                              h.jsx("span", {
                                className: "text-lg font-bold text-primary-400",
                                children: r.offlinePrice,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              r.id
            )
          ),
        }),
      ],
    }),
  });
}
function Y2() {
  const { id: e } = jv(),
    t = zp(),
    n = k0[e];
  return (
    ii.useEffect(() => {
      var r, i, s, o, a;
      if (n) {
        const l = `${n.title} Course in Kolkata | AGC - Aditya Gupta Classes`,
          u = `Join ${n.title} at AGC, Kolkata's premier commerce coaching. ${n.description} Expert faculty, comprehensive study material, and proven results. Enroll now!`;
        (r = document.querySelector('meta[name="description"]')) == null ||
          r.setAttribute("content", u),
          (i = document.querySelector('meta[property="og:title"]')) == null ||
            i.setAttribute("content", l),
          (s = document.querySelector('meta[property="og:description"]')) ==
            null || s.setAttribute("content", u),
          (o = document.querySelector('meta[property="twitter:title"]')) ==
            null || o.setAttribute("content", l),
          (a = document.querySelector(
            'meta[property="twitter:description"]'
          )) == null || a.setAttribute("content", u),
          (document.title = l);
      }
    }, [n]),
    n
      ? h.jsx("div", {
          className: "py-16 bg-gray-50 dark:bg-gray-900",
          children: h.jsx("div", {
            className: "container-custom",
            children: h.jsxs(H.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                h.jsxs("button", {
                  onClick: () => t("/"),
                  className:
                    "mb-8 flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-500",
                  children: [
                    h.jsx(Yc, { className: "w-5 h-5 mr-2" }),
                    "Back to Courses",
                  ],
                }),
                h.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    h.jsx("div", {
                      className: "flex justify-center items-center",
                      children: h.jsx("img", {
                        src: n.thumbnail,
                        alt: n.title,
                        className:
                          "max-w-full h-[400px] object-contain rounded-lg shadow-lg",
                      }),
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("h1", {
                          className:
                            "text-4xl font-bold text-gray-900 dark:text-white mb-4",
                          children: n.title,
                        }),
                        h.jsx("p", {
                          className:
                            "text-lg text-gray-600 dark:text-gray-300 mb-6",
                          children: n.description,
                        }),
                        h.jsxs("div", {
                          className: "grid grid-cols-2 gap-4 mb-8",
                          children: [
                            h.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                h.jsx(Yv, {
                                  className: "w-5 h-5 text-primary-400 mr-2",
                                }),
                                h.jsx("span", {
                                  className: "text-gray-600 dark:text-gray-300",
                                  children: n.duration,
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                h.jsx(l1, {
                                  className: "w-5 h-5 text-primary-400 mr-2",
                                }),
                                h.jsxs("span", {
                                  className: "text-gray-600 dark:text-gray-300",
                                  children: [n.students, " Students"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className:
                            "bg-white dark:bg-gray-800 rounded-lg p-6 mb-8",
                          children: [
                            h.jsx("h3", {
                              className:
                                "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                              children: "Course Fee",
                            }),
                            h.jsxs("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("p", {
                                      className:
                                        "text-gray-600 dark:text-gray-300",
                                      children: "Online",
                                    }),
                                    h.jsx("p", {
                                      className:
                                        "text-2xl font-bold text-primary-400",
                                      children: n.onlinePrice,
                                    }),
                                  ],
                                }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsx("p", {
                                      className:
                                        "text-gray-600 dark:text-gray-300",
                                      children: "Offline",
                                    }),
                                    h.jsx("p", {
                                      className:
                                        "text-2xl font-bold text-primary-400",
                                      children: n.offlinePrice,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        h.jsx("div", {
                          className: "space-y-4",
                          children: h.jsx("a", {
                            href: `https://wa.me/919876543210?text=Hi, I'm interested in the ${n.title} course and would like to enroll.`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-full btn-primary inline-flex justify-center",
                            children: "Enroll Now",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16",
                  children: [
                    h.jsxs("div", {
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-2xl font-bold text-gray-900 dark:text-white mb-6",
                          children: "Subjects Covered",
                        }),
                        h.jsx("ul", {
                          className: "space-y-4",
                          children: n.subjects.map((r, i) =>
                            h.jsxs(
                              "li",
                              {
                                className:
                                  "flex items-center text-gray-600 dark:text-gray-300",
                                children: [
                                  h.jsx($p, {
                                    className: "w-5 h-5 text-primary-400 mr-3",
                                  }),
                                  r,
                                ],
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-2xl font-bold text-gray-900 dark:text-white mb-6",
                          children: "Course Features",
                        }),
                        h.jsx("ul", {
                          className: "space-y-4",
                          children: n.features.map((r, i) =>
                            h.jsxs(
                              "li",
                              {
                                className:
                                  "flex items-center text-gray-600 dark:text-gray-300",
                                children: [
                                  h.jsx(Wp, {
                                    className: "w-5 h-5 text-primary-400 mr-3",
                                  }),
                                  r,
                                ],
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "mt-16",
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center",
                      children: "Demo Classes",
                    }),
                    h.jsx("div", {
                      className: "flex justify-center",
                      children: h.jsxs("a", {
                        href: `https://www.youtube.com/playlist?list=${n.playlist}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200",
                        children: [
                          h.jsx(Kp, { className: "w-5 h-5 mr-2" }),
                          "Watch Demo Classes",
                        ],
                      }),
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "mt-16",
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center",
                      children: "Our Faculty",
                    }),
                    h.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                      children: q2.map((r, i) =>
                        h.jsxs(
                          "div",
                          {
                            className:
                              "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg",
                            children: [
                              h.jsx("img", {
                                src: r.image,
                                alt: r.name,
                                className: "w-full h-48 object-cover",
                              }),
                              h.jsxs("div", {
                                className: "p-6",
                                children: [
                                  h.jsx("h4", {
                                    className:
                                      "text-xl font-semibold text-gray-900 dark:text-white",
                                    children: r.name,
                                  }),
                                  h.jsx("p", {
                                    className: "text-primary-400 mt-1",
                                    children: r.role,
                                  }),
                                  h.jsxs("div", {
                                    className: "mt-4",
                                    children: [
                                      h.jsx("h5", {
                                        className:
                                          "text-sm font-medium text-gray-900 dark:text-white",
                                        children: "Subjects:",
                                      }),
                                      h.jsx("ul", {
                                        className: "mt-2 space-y-1",
                                        children: r.subjects.map((s, o) =>
                                          h.jsx(
                                            "li",
                                            {
                                              className:
                                                "text-sm text-gray-600 dark:text-gray-300",
                                              children: s,
                                            },
                                            o
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          i
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      : h.jsx("div", {
          className: "container-custom py-16",
          children: h.jsxs("div", {
            className: "text-center",
            children: [
              h.jsx("h2", {
                className: "text-2xl font-bold text-gray-900 dark:text-white",
                children: "Course not found",
              }),
              h.jsxs("button", {
                onClick: () => t("/"),
                className: "mt-4 btn-primary",
                children: [
                  h.jsx(Yc, { className: "w-5 h-5 mr-2" }),
                  "Back to Courses",
                ],
              }),
            ],
          }),
        })
  );
}
function Z2() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("section", {
    id: "demo",
    className: "py-16 bg-white dark:bg-gray-900",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: { opacity: 0, y: 20 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "Free Demo Classes",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children:
                "Experience our teaching methodology through these sample lectures",
            }),
          ],
        }),
        h.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: X2.map((n, r) =>
            h.jsxs(
              H.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: r * 0.2 },
                className:
                  "bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden",
                children: [
                  h.jsx("div", {
                    className: "relative w-full pb-[56.25%]",
                    children: h.jsx("iframe", {
                      src: n.embedUrl,
                      title: n.title,
                      frameBorder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      referrerPolicy: "strict-origin-when-cross-origin",
                      allowFullScreen: !0,
                      className: "absolute top-0 left-0 w-full h-full",
                    }),
                  }),
                  h.jsx("div", {
                    className: "p-4",
                    children: h.jsx("h3", {
                      className:
                        "text-lg font-semibold text-gray-900 dark:text-white",
                      children: n.title,
                    }),
                  }),
                ],
              },
              n.id
            )
          ),
        }),
      ],
    }),
  });
}
const J2 = [
  {
    id: 1,
    name: "Aditya Gupta",
    role: "Founder & Lead Instructor",
    subjects: ["Advanced Accountancy", "Business Studies"],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "aditya@agc.com",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Faculty",
    subjects: ["Economics", "Business Mathematics"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "priya@agc.com",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Course Coordinator",
    subjects: ["Cost Accounting", "GST"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "rajesh@agc.com",
  },
];
function ek() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("section", {
    id: "faculty",
    className: "py-16 bg-gray-50 dark:bg-gray-800",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: { opacity: 0, y: 20 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "Meet Our Expert Faculty",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children:
                "Learn from experienced professionals who are passionate about teaching",
            }),
          ],
        }),
        h.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: J2.map((n, r) =>
            h.jsxs(
              H.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: r * 0.2 },
                className:
                  "bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden",
                children: [
                  h.jsx("img", {
                    src: n.image,
                    alt: n.name,
                    className: "w-full h-64 object-cover",
                  }),
                  h.jsxs("div", {
                    className: "p-6",
                    children: [
                      h.jsx("h3", {
                        className:
                          "text-xl font-bold text-gray-900 dark:text-white",
                        children: n.name,
                      }),
                      h.jsx("p", {
                        className: "mt-1 text-sm font-medium text-primary-400",
                        children: n.role,
                      }),
                      h.jsxs("div", {
                        className: "mt-4",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-sm font-medium text-gray-900 dark:text-white",
                            children: "Subjects:",
                          }),
                          h.jsx("ul", {
                            className: "mt-2 space-y-1",
                            children: n.subjects.map((i, s) =>
                              h.jsx(
                                "li",
                                {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-300",
                                  children: i,
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "mt-6 flex space-x-4",
                        children: [
                          h.jsx("a", {
                            href: n.linkedin,
                            className:
                              "text-gray-600 dark:text-gray-300 hover:text-primary-400",
                            children: h.jsx(e1, { className: "h-5 w-5" }),
                          }),
                          h.jsx("a", {
                            href: `mailto:${n.email}`,
                            className:
                              "text-gray-600 dark:text-gray-300 hover:text-primary-400",
                            children: h.jsx(Hp, { className: "h-5 w-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              n.id
            )
          ),
        }),
      ],
    }),
  });
}
const tk = [
  {
    id: 1,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 7,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 8,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 9,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];
function nk() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("section", {
    className: "py-16 bg-white dark:bg-gray-900",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: { opacity: 0, y: 20 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "What Our Students Say",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children: "Success stories from our alumni",
            }),
          ],
        }),
        h.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: tk.map((n, r) =>
            h.jsxs(
              H.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: r * 0.2 },
                className:
                  "bg-gray-50 dark:bg-gray-800 rounded-lg p-6 relative",
                children: [
                  h.jsx(i1, {
                    className:
                      "absolute top-6 right-6 h-8 w-8 text-primary-200",
                  }),
                  h.jsx("p", {
                    className: "text-gray-600 dark:text-gray-300 mb-6",
                    children: n.content,
                  }),
                  h.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      h.jsx("img", {
                        src: n.image,
                        alt: n.author,
                        className: "h-12 w-12 rounded-full object-cover",
                      }),
                      h.jsxs("div", {
                        className: "ml-4",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-lg font-semibold text-gray-900 dark:text-white",
                            children: n.author,
                          }),
                          h.jsx("p", {
                            className: "text-sm text-primary-400",
                            children: n.position,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              n.id
            )
          ),
        }),
      ],
    }),
  });
}
const rk = [
  {
    question: "What are the available modes of learning?",
    answer:
      "We offer both online and offline classes. Online classes are conducted through our interactive platform with live sessions, while offline classes are held at our Kolkata center with state-of-the-art facilities and personal attention.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll by visiting our center, calling our admission helpline, or filling out the online enrollment form on our website. We also offer WhatsApp support for quick enrollment and queries.",
  },
  {
    question: "Are study materials provided?",
    answer:
      "Yes, comprehensive study materials, practice papers, and online resources are provided to all enrolled students. Our study materials are regularly updated and aligned with the latest curriculum.",
  },
  {
    question: "Do you offer doubt clearing sessions?",
    answer:
      "Yes, we have regular doubt clearing sessions both online and offline. Students can also schedule one-on-one sessions with faculty. We ensure no doubt goes unresolved.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Fee structure varies by course and mode of learning. We offer flexible payment options and early bird discounts. Please contact our admission team for detailed information about specific courses.",
  },
  {
    question: "Is there a demo class available before joining?",
    answer:
      "Yes, we offer free demo classes for all our courses. You can attend both online and offline demo sessions to experience our teaching methodology firsthand.",
  },
  {
    question: "What is the batch size for offline classes?",
    answer:
      "We maintain a limited batch size of 30-35 students to ensure personal attention and interactive learning environment. This helps in better understanding and doubt resolution.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide placement assistance for our professional courses. We have tie-ups with leading companies and organize campus interviews regularly.",
  },
];
function ik() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 }),
    [n, r] = ii.useState(null),
    i = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.1 },
      },
    },
    s = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
    o = {
      hidden: { height: 0, opacity: 0 },
      visible: {
        height: "auto",
        opacity: 1,
        transition: {
          height: { duration: 0.3 },
          opacity: { duration: 0.25, delay: 0.15 },
        },
      },
    };
  return h.jsx("section", {
    className: "py-16 bg-gray-50 dark:bg-gray-800",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: "hidden",
          animate: t ? "visible" : "hidden",
          variants: i,
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "Frequently Asked Questions",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children:
                "Find answers to common questions about our courses and teaching methodology",
            }),
          ],
        }),
        h.jsx("div", {
          className: "max-w-3xl mx-auto",
          children: rk.map((a, l) =>
            h.jsxs(
              H.div,
              {
                variants: s,
                className: "mb-4",
                children: [
                  h.jsxs(H.button, {
                    onClick: () => r(n === l ? null : l),
                    className:
                      "w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200",
                    whileHover: { scale: 1.01 },
                    whileTap: { scale: 0.99 },
                    children: [
                      h.jsx("span", {
                        className:
                          "text-left font-medium text-gray-900 dark:text-white",
                        children: a.question,
                      }),
                      h.jsx(H.div, {
                        animate: { rotate: n === l ? 180 : 0 },
                        transition: { duration: 0.3 },
                        children: h.jsx(Qv, {
                          className: "h-5 w-5 text-gray-500",
                        }),
                      }),
                    ],
                  }),
                  h.jsx(y1, {
                    children:
                      n === l &&
                      h.jsx(H.div, {
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden",
                        variants: o,
                        className: "overflow-hidden",
                        children: h.jsx("div", {
                          className:
                            "p-4 bg-gray-50 dark:bg-gray-800 rounded-b-lg",
                          children: h.jsx("p", {
                            className: "text-gray-600 dark:text-gray-300",
                            children: a.answer,
                          }),
                        }),
                      }),
                  }),
                ],
              },
              l
            )
          ),
        }),
      ],
    }),
  });
}
function sk() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("section", {
    className: "py-16 bg-white dark:bg-gray-900",
    children: h.jsx("div", {
      className: "container-custom",
      children: h.jsxs("div", {
        className: "lg:grid lg:grid-cols-2 lg:gap-8 items-center",
        children: [
          h.jsxs(H.div, {
            ref: e,
            initial: { opacity: 0, x: -20 },
            animate: t ? { opacity: 1, x: 0 } : {},
            transition: { duration: 0.6 },
            className: "mb-8 lg:mb-0",
            children: [
              h.jsx("h2", {
                className:
                  "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
                children: "Download Our Mobile App",
              }),
              h.jsx("p", {
                className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                children:
                  "Access study materials, watch lectures, and track your progress on the go with our mobile app.",
              }),
              h.jsxs("div", {
                className: "mt-8 flex flex-col sm:flex-row gap-4",
                children: [
                  h.jsxs("button", {
                    className: "btn-primary flex items-center justify-center",
                    children: [
                      h.jsx(Zc, { className: "h-5 w-5 mr-2" }),
                      "Download for Android",
                    ],
                  }),
                  h.jsxs("button", {
                    className: "btn-primary flex items-center justify-center",
                    children: [
                      h.jsx(Zc, { className: "h-5 w-5 mr-2" }),
                      "Download for iOS",
                    ],
                  }),
                ],
              }),
              h.jsx("div", {
                className: "mt-6 text-sm text-gray-600 dark:text-gray-300",
                children:
                  "Available on all major platforms. Free download for enrolled students.",
              }),
            ],
          }),
          h.jsxs(H.div, {
            initial: { opacity: 0, x: 20 },
            animate: t ? { opacity: 1, x: 0 } : {},
            transition: { duration: 0.6, delay: 0.2 },
            className: "relative",
            children: [
              h.jsx("div", {
                className: "aspect-w-5 aspect-h-3",
                children: h.jsx("img", {
                  src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
                  alt: "AGC Mobile App",
                  className: "rounded-lg shadow-xl",
                }),
              }),
              h.jsx("div", {
                className:
                  "absolute -bottom-6 -right-6 bg-primary-400 rounded-full p-4",
                children: h.jsx(s1, { className: "h-8 w-8 text-white" }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const ok = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    alt: "Classroom Session",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
    alt: "Student Achievement",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    alt: "Group Discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
    alt: "Faculty Lecture",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    alt: "Study Group",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600",
    alt: "Award Ceremony",
  },
];
function ak() {
  const [e, t] = Wt({ triggerOnce: !0, threshold: 0.1 });
  return h.jsx("section", {
    className: "py-16 bg-gray-50 dark:bg-gray-800",
    children: h.jsxs("div", {
      className: "container-custom",
      children: [
        h.jsxs(H.div, {
          ref: e,
          initial: { opacity: 0, y: 20 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            h.jsx("h2", {
              className:
                "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl",
              children: "Life at AGC",
            }),
            h.jsx("p", {
              className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
              children: "Glimpses of our vibrant learning environment",
            }),
          ],
        }),
        h.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: ok.map((n, r) =>
            h.jsx(
              H.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: t ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: r * 0.1 },
                className:
                  "relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3",
                children: h.jsx("img", {
                  src: n.src,
                  alt: n.alt,
                  className:
                    "w-full h-full object-cover transform hover:scale-110 transition-transform duration-300",
                }),
              },
              r
            )
          ),
        }),
      ],
    }),
  });
}
function lk() {
  return h.jsx("footer", {
    className: "bg-gray-900 text-white",
    children: h.jsxs("div", {
      className: "container-custom py-12",
      children: [
        h.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [
            h.jsxs("div", {
              children: [
                h.jsx("h3", {
                  className: "text-2xl font-bold text-primary-500 mb-4",
                  children: "AGC",
                }),
                h.jsx("p", {
                  className: "text-gray-400",
                  children:
                    "Empowering students with quality commerce education since 2010.",
                }),
                h.jsxs("div", {
                  className: "mt-6 flex space-x-4",
                  children: [
                    h.jsx("a", {
                      href: "#",
                      className: "text-gray-400 hover:text-primary-500",
                      children: h.jsx(Zv, { className: "h-5 w-5" }),
                    }),
                    h.jsx("a", {
                      href: "#",
                      className: "text-gray-400 hover:text-primary-500",
                      children: h.jsx(a1, { className: "h-5 w-5" }),
                    }),
                    h.jsx("a", {
                      href: "#",
                      className: "text-gray-400 hover:text-primary-500",
                      children: h.jsx(Jv, { className: "h-5 w-5" }),
                    }),
                    h.jsx("a", {
                      href: "#",
                      className: "text-gray-400 hover:text-primary-500",
                      children: h.jsx(Kp, { className: "h-5 w-5" }),
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              children: [
                h.jsx("h4", {
                  className: "text-lg font-semibold mb-4",
                  children: "Quick Links",
                }),
                h.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    h.jsx("li", {
                      children: h.jsx("a", {
                        href: "#courses",
                        className: "text-gray-400 hover:text-primary-500",
                        children: "Courses",
                      }),
                    }),
                    h.jsx("li", {
                      children: h.jsx("a", {
                        href: "#demo",
                        className: "text-gray-400 hover:text-primary-500",
                        children: "Demo Classes",
                      }),
                    }),
                    h.jsx("li", {
                      children: h.jsx("a", {
                        href: "#faculty",
                        className: "text-gray-400 hover:text-primary-500",
                        children: "Faculty",
                      }),
                    }),
                    h.jsx("li", {
                      children: h.jsx("a", {
                        href: "#",
                        className: "text-gray-400 hover:text-primary-500",
                        children: "Study Materials",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              children: [
                h.jsx("h4", {
                  className: "text-lg font-semibold mb-4",
                  children: "Contact Us",
                }),
                h.jsxs("ul", {
                  className: "space-y-4",
                  children: [
                    h.jsxs("li", {
                      className: "flex items-center",
                      children: [
                        h.jsx(t1, {
                          className: "h-5 w-5 text-primary-500 mr-2",
                        }),
                        h.jsx("span", {
                          className: "text-gray-400",
                          children: "123 Commerce Street, Kolkata - 700001",
                        }),
                      ],
                    }),
                    h.jsxs("li", {
                      className: "flex items-center",
                      children: [
                        h.jsx(r1, {
                          className: "h-5 w-5 text-primary-500 mr-2",
                        }),
                        h.jsx("a", {
                          href: "tel:+919876543210",
                          className: "text-gray-400 hover:text-primary-500",
                          children: "+91 98765 43210",
                        }),
                      ],
                    }),
                    h.jsxs("li", {
                      className: "flex items-center",
                      children: [
                        h.jsx(Hp, {
                          className: "h-5 w-5 text-primary-500 mr-2",
                        }),
                        h.jsx("a", {
                          href: "mailto:info@agc.com",
                          className: "text-gray-400 hover:text-primary-500",
                          children: "info@agc.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              children: [
                h.jsx("h4", {
                  className: "text-lg font-semibold mb-4",
                  children: "Working Hours",
                }),
                h.jsxs("ul", {
                  className: "space-y-2 text-gray-400",
                  children: [
                    h.jsx("li", { children: "Monday - Friday: 9 AM - 7 PM" }),
                    h.jsx("li", { children: "Saturday: 9 AM - 5 PM" }),
                    h.jsx("li", { children: "Sunday: Closed" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsx("div", {
          className:
            "mt-12 pt-8 border-t border-gray-800 text-center text-gray-400",
          children: h.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " AGC. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
}
function uk({
  title: e = "AGC - #1 Commerce Coaching in Kolkata | Aditya Gupta Classes",
  description:
    t = "Best commerce coaching in Kolkata for Class 11, 12, B.Com, MBA, BBA. Join Aditya Gupta Classes (AGC) for expert guidance in commerce education. Top-rated institute with 10,000+ successful students.",
  image:
    n = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
}) {
  const i = `https://www.agc.com${Zl().pathname}`;
  return (
    ii.useEffect(() => {
      var s, o, a, l, u, c, d, f, y;
      (document.title = e),
        (s = document.querySelector('meta[name="description"]')) == null ||
          s.setAttribute("content", t),
        (o = document.querySelector('meta[property="og:title"]')) == null ||
          o.setAttribute("content", e),
        (a = document.querySelector('meta[property="og:description"]')) ==
          null || a.setAttribute("content", t),
        (l = document.querySelector('meta[property="og:image"]')) == null ||
          l.setAttribute("content", n),
        (u = document.querySelector('meta[property="og:url"]')) == null ||
          u.setAttribute("content", i),
        (c = document.querySelector('meta[property="twitter:title"]')) ==
          null || c.setAttribute("content", e),
        (d = document.querySelector('meta[property="twitter:description"]')) ==
          null || d.setAttribute("content", t),
        (f = document.querySelector('meta[property="twitter:image"]')) ==
          null || f.setAttribute("content", n),
        (y = document.querySelector('link[rel="canonical"]')) == null ||
          y.setAttribute("href", i);
    }, [e, t, n, i]),
    null
  );
}
function ck() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(uk, {}),
      h.jsx(z2, {}),
      h.jsx(G2, {}),
      h.jsx(Q2, {}),
      h.jsx(Z2, {}),
      h.jsx(ek, {}),
      h.jsx(nk, {}),
      h.jsx(ik, {}),
      h.jsx(sk, {}),
      h.jsx(ak, {}),
    ],
  });
}
function dk() {
  return h.jsx(u1, {
    children: h.jsx(Hv, {
      children: h.jsxs("div", {
        className: "min-h-screen",
        children: [
          h.jsx(f1, {}),
          h.jsx("main", {
            children: h.jsxs(bv, {
              children: [
                h.jsx(Fa, { path: "/", element: h.jsx(ck, {}) }),
                h.jsx(Fa, { path: "/course/:id", element: h.jsx(Y2, {}) }),
              ],
            }),
          }),
          h.jsx(lk, {}),
        ],
      }),
    }),
  });
}
Rp(document.getElementById("root")).render(
  h.jsx(C.StrictMode, { children: h.jsx(dk, {}) })
);
