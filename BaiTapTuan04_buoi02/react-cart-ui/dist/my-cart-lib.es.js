import ie, { createContext as fr, useReducer as hr, useEffect as ft, useContext as $t, useDebugValue as ht, createElement as mr, useRef as gr, useState as We } from "react";
var Re = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function yr() {
  if (mt) return ve;
  mt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var u in o)
        u !== "key" && (s[u] = o[u]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return ve.Fragment = t, ve.jsx = r, ve.jsxs = r, ve;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function vr() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === Ue ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case E:
          return "Fragment";
        case N:
          return "Profiler";
        case I:
          return "StrictMode";
        case T:
          return "Suspense";
        case b:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case S:
            return "Portal";
          case k:
            return (a.displayName || "Context") + ".Provider";
          case _:
            return (a._context.displayName || "Context") + ".Consumer";
          case C:
            var l = a.render;
            return a = a.displayName, a || (a = l.displayName || l.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case p:
            return l = a.displayName || null, l !== null ? l : e(a.type) || "Memo";
          case Y:
            l = a._payload, a = a._init;
            try {
              return e(a(l));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function r(a) {
      try {
        t(a);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var y = l.error, P = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(a);
      }
    }
    function n(a) {
      if (a === E) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === Y)
        return "<...>";
      try {
        var l = e(a);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = me.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(a) {
      if (xe.call(a, "key")) {
        var l = Object.getOwnPropertyDescriptor(a, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, l) {
      function y() {
        ke || (ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: y,
        configurable: !0
      });
    }
    function c() {
      var a = e(this.type);
      return Ce[a] || (Ce[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function h(a, l, y, P, L, D, q, W) {
      return y = D.ref, a = {
        $$typeof: v,
        type: a,
        key: l,
        props: D,
        _owner: L
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function w(a, l, y, P, L, D, q, W) {
      var A = l.children;
      if (A !== void 0)
        if (P)
          if (Ee(A)) {
            for (P = 0; P < A.length; P++)
              m(A[P]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(A);
      if (xe.call(l, "key")) {
        A = e(a);
        var $ = Object.keys(l).filter(function(oe) {
          return oe !== "key";
        });
        P = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", z[A + P] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          A,
          $,
          A
        ), z[A + P] = !0);
      }
      if (A = null, y !== void 0 && (r(y), A = "" + y), i(l) && (r(l.key), A = "" + l.key), "key" in l) {
        y = {};
        for (var J in l)
          J !== "key" && (y[J] = l[J]);
      } else y = l;
      return A && u(
        y,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), h(
        a,
        A,
        D,
        L,
        o(),
        y,
        q,
        W
      );
    }
    function m(a) {
      typeof a == "object" && a !== null && a.$$typeof === v && a._store && (a._store.validated = 1);
    }
    var g = ie, v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), Ue = Symbol.for("react.client.reference"), me = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, Ee = Array.isArray, ge = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var ke, Ce = {}, ne = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), ye = ge(n(s)), z = {};
    be.Fragment = E, be.jsx = function(a, l, y, P, L) {
      var D = 1e4 > me.recentlyCreatedOwnerStacks++;
      return w(
        a,
        l,
        y,
        !1,
        P,
        L,
        D ? Error("react-stack-top-frame") : ne,
        D ? ge(n(a)) : ye
      );
    }, be.jsxs = function(a, l, y, P, L) {
      var D = 1e4 > me.recentlyCreatedOwnerStacks++;
      return w(
        a,
        l,
        y,
        !0,
        P,
        L,
        D ? Error("react-stack-top-frame") : ne,
        D ? ge(n(a)) : ye
      );
    };
  })()), be;
}
var yt;
function br() {
  return yt || (yt = 1, process.env.NODE_ENV === "production" ? Re.exports = yr() : Re.exports = vr()), Re.exports;
}
var d = br();
const Mt = fr(), zt = {
  items: [],
  // { id, name, price, quantity, image }
  totalQuantity: 0,
  totalPrice: 0
}, _e = (e) => {
  const t = e.reduce((n, o) => n + Number(o.quantity), 0), r = e.reduce((n, o) => n + Number(o.quantity) * Number(o.price), 0);
  return { totalQuantity: t, totalPrice: r };
};
function wr(e, t) {
  switch (t.type) {
    case "INIT": {
      const r = _e(t.payload || []);
      return { ...e, items: t.payload || [], ...r };
    }
    case "ADD_ITEM": {
      const r = t.payload, n = [...e.items], o = n.findIndex((i) => i.id === r.id);
      o >= 0 ? n[o] = { ...n[o], quantity: n[o].quantity + (r.quantity || 1) } : n.push({ ...r, quantity: r.quantity || 1 });
      const s = _e(n);
      return { ...e, items: n, ...s };
    }
    case "UPDATE_ITEM": {
      const { id: r, quantity: n } = t.payload;
      let o = e.items.map((i) => i.id === r ? { ...i, quantity: Number(n) } : i);
      o = o.filter((i) => i.quantity > 0);
      const s = _e(o);
      return { ...e, items: o, ...s };
    }
    case "REMOVE_ITEM": {
      const r = e.items.filter((o) => o.id !== t.payload), n = _e(r);
      return { ...e, items: r, ...n };
    }
    case "CLEAR":
      return { ...zt };
    default:
      return e;
  }
}
const On = ({ children: e, storageKey: t = "my_cart" }) => {
  const [r, n] = hr(wr, zt);
  ft(() => {
    try {
      const c = localStorage.getItem(t);
      c && n({ type: "INIT", payload: JSON.parse(c) });
    } catch {
    }
  }, [t]), ft(() => {
    try {
      localStorage.setItem(t, JSON.stringify(r.items));
    } catch {
    }
  }, [r.items, t]);
  const o = (c) => n({ type: "ADD_ITEM", payload: c }), s = (c, h) => n({ type: "UPDATE_ITEM", payload: { id: c, quantity: h } }), i = (c) => n({ type: "REMOVE_ITEM", payload: c }), u = () => n({ type: "CLEAR" });
  return /* @__PURE__ */ d.jsx(Mt.Provider, { value: { state: r, addItem: o, updateItem: s, removeItem: i, clearCart: u }, children: e });
}, Lt = () => {
  const e = $t(Mt);
  if (!e) throw new Error("useCart must be used inside CartProvider");
  return e;
};
var M = function() {
  return M = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, M.apply(this, arguments);
};
function te(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Sr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var xr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Er = /* @__PURE__ */ Sr(
  function(e) {
    return xr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), R = "-ms-", Se = "-moz-", x = "-webkit-", Ft = "comm", Fe = "rule", ct = "decl", kr = "@import", Yt = "@keyframes", Cr = "@layer", Vt = Math.abs, ut = String.fromCharCode, Qe = Object.assign;
function Rr(e, t) {
  return j(e, 0) ^ 45 ? (((t << 2 ^ j(e, 0)) << 2 ^ j(e, 1)) << 2 ^ j(e, 2)) << 2 ^ j(e, 3) : 0;
}
function Bt(e) {
  return e.trim();
}
function G(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function f(e, t, r) {
  return e.replace(t, r);
}
function Oe(e, t, r) {
  return e.indexOf(t, r);
}
function j(e, t) {
  return e.charCodeAt(t) | 0;
}
function ce(e, t, r) {
  return e.slice(t, r);
}
function B(e) {
  return e.length;
}
function qt(e) {
  return e.length;
}
function we(e, t) {
  return t.push(e), e;
}
function _r(e, t) {
  return e.map(t).join("");
}
function vt(e, t) {
  return e.filter(function(r) {
    return !G(r, t);
  });
}
var Ye = 1, ue = 1, Gt = 0, F = 0, O = 0, fe = "";
function Ve(e, t, r, n, o, s, i, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Ye, column: ue, length: i, return: "", siblings: u };
}
function X(e, t) {
  return Qe(Ve("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function se(e) {
  for (; e.root; )
    e = X(e.root, { children: [e] });
  we(e, e.siblings);
}
function Tr() {
  return O;
}
function Ar() {
  return O = F > 0 ? j(fe, --F) : 0, ue--, O === 10 && (ue = 1, Ye--), O;
}
function V() {
  return O = F < Gt ? j(fe, F++) : 0, ue++, O === 10 && (ue = 1, Ye++), O;
}
function K() {
  return j(fe, F);
}
function je() {
  return F;
}
function Be(e, t) {
  return ce(fe, e, t);
}
function Ke(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nr(e) {
  return Ye = ue = 1, Gt = B(fe = e), F = 0, [];
}
function Pr(e) {
  return fe = "", e;
}
function He(e) {
  return Bt(Be(F - 1, et(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Or(e) {
  for (; (O = K()) && O < 33; )
    V();
  return Ke(e) > 2 || Ke(O) > 3 ? "" : " ";
}
function jr(e, t) {
  for (; --t && V() && !(O < 48 || O > 102 || O > 57 && O < 65 || O > 70 && O < 97); )
    ;
  return Be(e, je() + (t < 6 && K() == 32 && V() == 32));
}
function et(e) {
  for (; V(); )
    switch (O) {
      // ] ) " '
      case e:
        return F;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && et(O);
        break;
      // (
      case 40:
        e === 41 && et(e);
        break;
      // \
      case 92:
        V();
        break;
    }
  return F;
}
function Ir(e, t) {
  for (; V() && e + O !== 57; )
    if (e + O === 84 && K() === 47)
      break;
  return "/*" + Be(t, F - 1) + "*" + ut(e === 47 ? e : V());
}
function Dr(e) {
  for (; !Ke(K()); )
    V();
  return Be(e, F);
}
function $r(e) {
  return Pr(Ie("", null, null, null, [""], e = Nr(e), 0, [0], e));
}
function Ie(e, t, r, n, o, s, i, u, c) {
  for (var h = 0, w = 0, m = i, g = 0, v = 0, S = 0, E = 1, I = 1, N = 1, _ = 0, k = "", C = o, T = s, b = n, p = k; I; )
    switch (S = _, _ = V()) {
      // (
      case 40:
        if (S != 108 && j(p, m - 1) == 58) {
          Oe(p += f(He(_), "&", "&\f"), "&\f", Vt(h ? u[h - 1] : 0)) != -1 && (N = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        p += He(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        p += Or(S);
        break;
      // \
      case 92:
        p += jr(je() - 1, 7);
        continue;
      // /
      case 47:
        switch (K()) {
          case 42:
          case 47:
            we(Mr(Ir(V(), je()), t, r, c), c);
            break;
          default:
            p += "/";
        }
        break;
      // {
      case 123 * E:
        u[h++] = B(p) * N;
      // } ; \0
      case 125 * E:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + w:
            N == -1 && (p = f(p, /\f/g, "")), v > 0 && B(p) - m && we(v > 32 ? wt(p + ";", n, r, m - 1, c) : wt(f(p, " ", "") + ";", n, r, m - 2, c), c);
            break;
          // @ ;
          case 59:
            p += ";";
          // { rule/at-rule
          default:
            if (we(b = bt(p, t, r, h, w, o, u, k, C = [], T = [], m, s), s), _ === 123)
              if (w === 0)
                Ie(p, t, b, b, C, s, m, u, T);
              else
                switch (g === 99 && j(p, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ie(e, b, b, n && we(bt(e, b, b, 0, 0, o, u, k, o, C = [], m, T), T), o, T, m, u, n ? C : T);
                    break;
                  default:
                    Ie(p, b, b, b, [""], T, 0, u, T);
                }
        }
        h = w = v = 0, E = N = 1, k = p = "", m = i;
        break;
      // :
      case 58:
        m = 1 + B(p), v = S;
      default:
        if (E < 1) {
          if (_ == 123)
            --E;
          else if (_ == 125 && E++ == 0 && Ar() == 125)
            continue;
        }
        switch (p += ut(_), _ * E) {
          // &
          case 38:
            N = w > 0 ? 1 : (p += "\f", -1);
            break;
          // ,
          case 44:
            u[h++] = (B(p) - 1) * N, N = 1;
            break;
          // @
          case 64:
            K() === 45 && (p += He(V())), g = K(), w = m = B(k = p += Dr(je())), _++;
            break;
          // -
          case 45:
            S === 45 && B(p) == 2 && (E = 0);
        }
    }
  return s;
}
function bt(e, t, r, n, o, s, i, u, c, h, w, m) {
  for (var g = o - 1, v = o === 0 ? s : [""], S = qt(v), E = 0, I = 0, N = 0; E < n; ++E)
    for (var _ = 0, k = ce(e, g + 1, g = Vt(I = i[E])), C = e; _ < S; ++_)
      (C = Bt(I > 0 ? v[_] + " " + k : f(k, /&\f/g, v[_]))) && (c[N++] = C);
  return Ve(e, t, r, o === 0 ? Fe : u, c, h, w, m);
}
function Mr(e, t, r, n) {
  return Ve(e, t, r, Ft, ut(Tr()), ce(e, 2, -2), 0, n);
}
function wt(e, t, r, n, o) {
  return Ve(e, t, r, ct, ce(e, 0, n), ce(e, n + 1, -1), n, o);
}
function Ut(e, t, r) {
  switch (Rr(e, t)) {
    // color-adjust
    case 5103:
      return x + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return x + e + e;
    // tab-size
    case 4789:
      return Se + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + Se + e + R + e + e;
    // writing-mode
    case 5936:
      switch (j(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return x + e + R + f(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return x + e + R + f(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return x + e + R + f(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return x + e + R + e + e;
    // order
    case 6165:
      return x + e + R + "flex-" + e + e;
    // align-items
    case 5187:
      return x + e + f(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + R + "flex-$1$2") + e;
    // align-self
    case 5443:
      return x + e + R + "flex-item-" + f(e, /flex-|-self/g, "") + (G(e, /flex-|baseline/) ? "" : R + "grid-row-" + f(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return x + e + R + "flex-line-pack" + f(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return x + e + R + f(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return x + e + R + f(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return x + "box-" + f(e, "-grow", "") + x + e + R + f(e, "grow", "positive") + e;
    // transition
    case 4554:
      return x + f(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    // cursor
    case 6187:
      return f(f(f(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return f(e, /(image-set\([^]*)/, x + "$1$`$1");
    // justify-content
    case 4968:
      return f(f(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + R + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    // justify-self
    case 4200:
      if (!G(e, /flex-|baseline/)) return R + "grid-column-align" + ce(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return R + f(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, G(n.props, /grid-\w+-end/);
      }) ? ~Oe(e + (r = r[t].value), "span", 0) ? e : R + f(e, "-start", "") + e + R + "grid-row-span:" + (~Oe(r, "span", 0) ? G(r, /\d+/) : +G(r, /\d+/) - +G(e, /\d+/)) + ";" : R + f(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return G(n.props, /grid-\w+-start/);
      }) ? e : R + f(f(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(e, /(.+)-inline(.+)/, x + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (B(e) - 1 - t > 6)
        switch (j(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (j(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return f(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + Se + (j(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Oe(e, "stretch", 0) ? Ut(f(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return f(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, s, i, u, c, h) {
        return R + o + ":" + s + h + (i ? R + o + "-span:" + (u ? c : +c - +s) + h : "") + e;
      });
    // position: sticky
    case 4949:
      if (j(e, t + 6) === 121)
        return f(e, ":", ":" + x) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (j(e, j(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return f(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (j(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + R + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return f(e, ":", ":" + R) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Me(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function zr(e, t, r, n) {
  switch (e.type) {
    case Cr:
      if (e.children.length) break;
    case kr:
    case ct:
      return e.return = e.return || e.value;
    case Ft:
      return "";
    case Yt:
      return e.return = e.value + "{" + Me(e.children, n) + "}";
    case Fe:
      if (!B(e.value = e.props.join(","))) return "";
  }
  return B(r = Me(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Lr(e) {
  var t = qt(e);
  return function(r, n, o, s) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, o, s) || "";
    return i;
  };
}
function Fr(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yr(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ct:
        e.return = Ut(e.value, e.length, r);
        return;
      case Yt:
        return Me([X(e, { value: f(e.value, "@", "@" + x) })], n);
      case Fe:
        if (e.length)
          return _r(r = e.props, function(o) {
            switch (G(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                se(X(e, { props: [f(o, /:(read-\w+)/, ":" + Se + "$1")] })), se(X(e, { props: [o] })), Qe(e, { props: vt(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                se(X(e, { props: [f(o, /:(plac\w+)/, ":" + x + "input-$1")] })), se(X(e, { props: [f(o, /:(plac\w+)/, ":" + Se + "$1")] })), se(X(e, { props: [f(o, /:(plac\w+)/, R + "input-$1")] })), se(X(e, { props: [o] })), Qe(e, { props: vt(r, n) });
                break;
            }
            return "";
          });
    }
}
var Vr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, re = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Wt = "active", Ht = "data-styled-version", qe = "6.1.19", lt = `/*!sc*/
`, ze = typeof window < "u" && typeof document < "u", Br = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), St = /invalid hook call/i, Te = /* @__PURE__ */ new Set(), qr = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var u = [], c = 1; c < arguments.length; c++) u[c - 1] = arguments[c];
        St.test(i) ? (s = !1, Te.delete(n)) : o.apply(void 0, te([i], u, !1));
      }, gr(), s && !Te.has(n) && (console.warn(n), Te.add(n));
    } catch (i) {
      St.test(i.message) && Te.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ge = Object.freeze([]), le = Object.freeze({});
function Gr(e, t, r) {
  return r === void 0 && (r = le), e.theme !== r.theme && e.theme || t || r.theme;
}
var tt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ur = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Wr = /(^-|-$)/g;
function xt(e) {
  return e.replace(Ur, "-").replace(Wr, "");
}
var Hr = /(a)(d)/gi, Ae = 52, Et = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function rt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ae; t = t / Ae | 0) r = Et(t % Ae) + r;
  return (Et(t % Ae) + r).replace(Hr, "$1-$2");
}
var Xe, Xt = 5381, Z = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Jt = function(e) {
  return Z(Xt, e);
};
function Zt(e) {
  return rt(Jt(e) >>> 0);
}
function Qt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Je(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Kt = typeof Symbol == "function" && Symbol.for, er = Kt ? Symbol.for("react.memo") : 60115, Xr = Kt ? Symbol.for("react.forward_ref") : 60112, Jr = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zr = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, tr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qr = ((Xe = {})[Xr] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Xe[er] = tr, Xe);
function kt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === er ? tr : "$$typeof" in e ? Qr[e.$$typeof] : Jr;
  var t;
}
var Kr = Object.defineProperty, en = Object.getOwnPropertyNames, Ct = Object.getOwnPropertySymbols, tn = Object.getOwnPropertyDescriptor, rn = Object.getPrototypeOf, Rt = Object.prototype;
function rr(e, t, r) {
  if (typeof t != "string") {
    if (Rt) {
      var n = rn(t);
      n && n !== Rt && rr(e, n, r);
    }
    var o = en(t);
    Ct && (o = o.concat(Ct(t)));
    for (var s = kt(e), i = kt(t), u = 0; u < o.length; ++u) {
      var c = o[u];
      if (!(c in Zr || r && r[c] || i && c in i || s && c in s)) {
        var h = tn(t, c);
        try {
          Kr(e, c, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function de(e) {
  return typeof e == "function";
}
function dt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Q(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function nt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function ot(e, t, r) {
  if (r === void 0 && (r = !1), !r && !pe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = ot(e[n], t[n]);
  else if (pe(t)) for (var n in t) e[n] = ot(e[n], t[n]);
  return e;
}
function pt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var nn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function on() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, s = e.length; o < s; o += 1) n.push(e[o]);
  return n.forEach(function(i) {
    r = r.replace(/%[a-z]/, i);
  }), r;
}
function he(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(on.apply(void 0, te([nn[e]], t, !1)).trim());
}
var sn = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, s = o; t >= s; ) if ((s <<= 1) < 0) throw he(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var i = o; i < s; i++) this.groupSizes[i] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), c = (i = 0, r.length); i < c; i++) this.tag.insertRule(u, r[i]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var s = n; s < o; s++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n, i = o; i < s; i++) r += "".concat(this.tag.getRule(i)).concat(lt);
    return r;
  }, e;
})(), an = 1 << 30, De = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), $e = 1, Ne = function(e) {
  if (De.has(e)) return De.get(e);
  for (; Le.has($e); ) $e++;
  var t = $e++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > an)) throw he(16, "".concat(t));
  return De.set(e, t), Le.set(t, e), t;
}, cn = function(e, t) {
  $e = t + 1, De.set(e, t), Le.set(t, e);
}, un = "style[".concat(re, "][").concat(Ht, '="').concat(qe, '"]'), ln = new RegExp("^".concat(re, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), dn = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, i = o.length; s < i; s++) (n = o[s]) && e.registerName(t, n);
}, pn = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(lt), o = [], s = 0, i = n.length; s < i; s++) {
    var u = n[s].trim();
    if (u) {
      var c = u.match(ln);
      if (c) {
        var h = 0 | parseInt(c[1], 10), w = c[2];
        h !== 0 && (cn(w, h), dn(e, w, c[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, _t = function(e) {
  for (var t = document.querySelectorAll(un), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(re) !== Wt && (pn(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var nr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = (function(u) {
    var c = Array.from(u.querySelectorAll("style[".concat(re, "]")));
    return c[c.length - 1];
  })(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(re, Wt), n.setAttribute(Ht, qe);
  var i = fn();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, s), n;
}, hn = (function() {
  function e(t) {
    this.element = nr(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, s = n.length; o < s; o++) {
        var i = n[o];
        if (i.ownerNode === r) return i;
      }
      throw he(17);
    })(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
})(), mn = (function() {
  function e(t) {
    this.element = nr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
})(), gn = (function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
})(), Tt = ze, yn = { isServer: !ze, useCSSOMInjection: !Br }, or = (function() {
  function e(t, r, n) {
    t === void 0 && (t = le), r === void 0 && (r = {});
    var o = this;
    this.options = M(M({}, yn), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && ze && Tt && (Tt = !1, _t(this)), pt(this, function() {
      return (function(s) {
        for (var i = s.getTag(), u = i.length, c = "", h = function(m) {
          var g = (function(N) {
            return Le.get(N);
          })(m);
          if (g === void 0) return "continue";
          var v = s.names.get(g), S = i.getGroup(m);
          if (v === void 0 || !v.size || S.length === 0) return "continue";
          var E = "".concat(re, ".g").concat(m, '[id="').concat(g, '"]'), I = "";
          v !== void 0 && v.forEach(function(N) {
            N.length > 0 && (I += "".concat(N, ","));
          }), c += "".concat(S).concat(E, '{content:"').concat(I, '"}').concat(lt);
        }, w = 0; w < u; w++) h(w);
        return c;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return Ne(t);
  }, e.prototype.rehydrate = function() {
    !this.server && ze && _t(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(M(M({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new gn(o) : n ? new hn(o) : new mn(o);
    })(this.options), new sn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ne(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Ne(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ne(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), vn = /&/g, bn = /^\s*\/\/.*$/gm;
function sr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = sr(r.children, t)), r;
  });
}
function wn(e) {
  var t, r, n, o = le, s = o.options, i = s === void 0 ? le : s, u = o.plugins, c = u === void 0 ? Ge : u, h = function(g, v, S) {
    return S.startsWith(r) && S.endsWith(r) && S.replaceAll(r, "").length > 0 ? ".".concat(t) : g;
  }, w = c.slice();
  w.push(function(g) {
    g.type === Fe && g.value.includes("&") && (g.props[0] = g.props[0].replace(vn, r).replace(n, h));
  }), i.prefix && w.push(Yr), w.push(zr);
  var m = function(g, v, S, E) {
    v === void 0 && (v = ""), S === void 0 && (S = ""), E === void 0 && (E = "&"), t = E, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var I = g.replace(bn, ""), N = $r(S || v ? "".concat(S, " ").concat(v, " { ").concat(I, " }") : I);
    i.namespace && (N = sr(N, i.namespace));
    var _ = [];
    return Me(N, Lr(w.concat(Fr(function(k) {
      return _.push(k);
    })))), _;
  };
  return m.hash = c.length ? c.reduce(function(g, v) {
    return v.name || he(15), Z(g, v.name);
  }, Xt).toString() : "", m;
}
var Sn = new or(), st = wn(), ar = ie.createContext({ shouldForwardProp: void 0, styleSheet: Sn, stylis: st });
ar.Consumer;
ie.createContext(void 0);
function At() {
  return $t(ar);
}
var at = (function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = st);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, pt(this, function() {
      throw he(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = st), this.name + t.hash;
  }, e;
})(), xn = function(e) {
  return e >= "A" && e <= "Z";
};
function Nt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    xn(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ir = function(e) {
  return e == null || e === !1 || e === "";
}, cr = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !ir(s) && (Array.isArray(s) && s.isCss || de(s) ? n.push("".concat(Nt(o), ":"), s, ";") : pe(s) ? n.push.apply(n, te(te(["".concat(o, " {")], cr(s), !1), ["}"], !1)) : n.push("".concat(Nt(o), ": ").concat((t = o, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Vr || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ee(e, t, r, n) {
  if (ir(e)) return [];
  if (dt(e)) return [".".concat(e.styledComponentId)];
  if (de(e)) {
    if (!de(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof at || pe(o) || o === null || console.error("".concat(Qt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ee(o, t, r, n);
  }
  var s;
  return e instanceof at ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : pe(e) ? cr(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ge, e.map(function(i) {
    return ee(i, t, r, n);
  })) : [e.toString()];
}
function En(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (de(r) && !dt(r)) return !1;
  }
  return !0;
}
var kn = Jt(qe), Cn = (function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && En(t), this.componentId = r, this.baseHash = Z(kn, r), this.baseStyle = n, or.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Q(o, this.staticRulesId);
    else {
      var s = nt(ee(this.rules, t, r, n)), i = rt(Z(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(this.componentId, i)) {
        var u = n(s, ".".concat(i), void 0, this.componentId);
        r.insertRules(this.componentId, i, u);
      }
      o = Q(o, i), this.staticRulesId = i;
    }
    else {
      for (var c = Z(this.baseHash, n.hash), h = "", w = 0; w < this.rules.length; w++) {
        var m = this.rules[w];
        if (typeof m == "string") h += m, process.env.NODE_ENV !== "production" && (c = Z(c, m));
        else if (m) {
          var g = nt(ee(m, t, r, n));
          c = Z(c, g + w), h += g;
        }
      }
      if (h) {
        var v = rt(c >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(h, ".".concat(v), void 0, this.componentId)), o = Q(o, v);
      }
    }
    return o;
  }, e;
})(), ur = ie.createContext(void 0);
ur.Consumer;
var Ze = {}, Pt = /* @__PURE__ */ new Set();
function Rn(e, t, r) {
  var n = dt(e), o = e, s = !Je(e), i = t.attrs, u = i === void 0 ? Ge : i, c = t.componentId, h = c === void 0 ? (function(C, T) {
    var b = typeof C != "string" ? "sc" : xt(C);
    Ze[b] = (Ze[b] || 0) + 1;
    var p = "".concat(b, "-").concat(Zt(qe + b + Ze[b]));
    return T ? "".concat(T, "-").concat(p) : p;
  })(t.displayName, t.parentComponentId) : c, w = t.displayName, m = w === void 0 ? (function(C) {
    return Je(C) ? "styled.".concat(C) : "Styled(".concat(Qt(C), ")");
  })(e) : w, g = t.displayName && t.componentId ? "".concat(xt(t.displayName), "-").concat(t.componentId) : t.componentId || h, v = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, S = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var I = t.shouldForwardProp;
      S = function(C, T) {
        return E(C, T) && I(C, T);
      };
    } else S = E;
  }
  var N = new Cn(r, g, n ? o.componentStyle : void 0);
  function _(C, T) {
    return (function(b, p, Y) {
      var U = b.attrs, Ue = b.componentStyle, me = b.defaultProps, xe = b.foldedComponentIds, Ee = b.styledComponentId, ge = b.target, ke = ie.useContext(ur), Ce = At(), ne = b.shouldForwardProp || Ce.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ht(Ee);
      var ye = Gr(p, ke, me) || le, z = (function(D, q, W) {
        for (var A, $ = M(M({}, q), { className: void 0, theme: W }), J = 0; J < D.length; J += 1) {
          var oe = de(A = D[J]) ? A($) : A;
          for (var H in oe) $[H] = H === "className" ? Q($[H], oe[H]) : H === "style" ? M(M({}, $[H]), oe[H]) : oe[H];
        }
        return q.className && ($.className = Q($.className, q.className)), $;
      })(U, p, ye), a = z.as || ge, l = {};
      for (var y in z) z[y] === void 0 || y[0] === "$" || y === "as" || y === "theme" && z.theme === ye || (y === "forwardedAs" ? l.as = z.forwardedAs : ne && !ne(y, a) || (l[y] = z[y], ne || process.env.NODE_ENV !== "development" || Er(y) || Pt.has(y) || !tt.has(a) || (Pt.add(y), console.warn('styled-components: it looks like an unknown prop "'.concat(y, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var P = (function(D, q) {
        var W = At(), A = D.generateAndInjectStyles(q, W.styleSheet, W.stylis);
        return process.env.NODE_ENV !== "production" && ht(A), A;
      })(Ue, z);
      process.env.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(P);
      var L = Q(xe, Ee);
      return P && (L += " " + P), z.className && (L += " " + z.className), l[Je(a) && !tt.has(a) ? "class" : "className"] = L, Y && (l.ref = Y), mr(a, l);
    })(k, C, T);
  }
  _.displayName = m;
  var k = ie.forwardRef(_);
  return k.attrs = v, k.componentStyle = N, k.displayName = m, k.shouldForwardProp = S, k.foldedComponentIds = n ? Q(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = g, k.target = n ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = n ? (function(T) {
      for (var b = [], p = 1; p < arguments.length; p++) b[p - 1] = arguments[p];
      for (var Y = 0, U = b; Y < U.length; Y++) ot(T, U[Y], !0);
      return T;
    })({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (qr(m, g), k.warnTooManyClasses = /* @__PURE__ */ (function(C, T) {
    var b = {}, p = !1;
    return function(Y) {
      if (!p && (b[Y] = !0, Object.keys(b).length >= 200)) {
        var U = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, b = {};
      }
    };
  })(m, g)), pt(k, function() {
    return ".".concat(k.styledComponentId);
  }), s && rr(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function Ot(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var jt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (de(e) || pe(e)) return jt(ee(Ot(Ge, te([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ee(n) : jt(ee(Ot(n, t)));
}
function it(e, t, r) {
  if (r === void 0 && (r = le), !t) throw he(1, t);
  var n = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return e(t, r, lr.apply(void 0, te([o], s, !1)));
  };
  return n.attrs = function(o) {
    return it(e, t, M(M({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return it(e, t, M(M({}, r), o));
  }, n;
}
var dr = function(e) {
  return it(Rn, e);
}, pr = dr;
tt.forEach(function(e) {
  pr[e] = dr(e);
});
function _n(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = nt(lr.apply(void 0, te([e], t, !1))), o = Zt(n);
  return new at(o, n);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Pe = "__sc-".concat(re, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Pe] || (window[Pe] = 0), window[Pe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Pe] += 1);
const Tn = _n`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
`, An = pr.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #183153;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 14px;      
    font-weight: 600;      
    letter-spacing: normal; 
  padding: 18px 10px;
  width: 100%;

  &:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #ffd401;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
    top: 0;
    z-index: 10;
  }

  &:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  & > span {
    position: relative;
    z-index: 20;
    transition: all 0.3s ease-in-out;
  }

  &:hover > span {
    color: #183153;
    animation: ${Tn} 0.3s ease-in-out;
  }
`;
function ae({
  children: e,
  onClick: t,
  className: r = "",
  type: n = "button",
  ...o
}) {
  return /* @__PURE__ */ d.jsx(
    An,
    {
      type: n,
      onClick: t,
      className: r,
      ...o,
      children: /* @__PURE__ */ d.jsx("span", { children: e })
    }
  );
}
const It = ({ onClick: e, label: t = "Xóa" }) => /* @__PURE__ */ d.jsxs(
  "button",
  {
    type: "button",
    className: "button-delete noselect",
    "aria-label": t,
    onClick: e,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "text", children: t }),
      /* @__PURE__ */ d.jsx("span", { className: "icon", children: /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" }) }) })
    ]
  }
);
function Nn({ value: e, onChange: t, ...r }) {
  return /* @__PURE__ */ d.jsx("input", { className: "mc-input", value: e, onChange: (n) => t && t(n.target.value), ...r });
}
function Dt({ open: e, onClose: t, children: r }) {
  return e ? /* @__PURE__ */ d.jsx("div", { className: "mc-modal-overlay", onClick: t, children: /* @__PURE__ */ d.jsxs("div", { className: "mc-modal", onClick: (n) => n.stopPropagation(), children: [
    r,
    /* @__PURE__ */ d.jsx("div", { style: { textAlign: "right", marginTop: 12 }, children: /* @__PURE__ */ d.jsx(ae, { onClick: t, children: "Đóng" }) })
  ] }) }) : null;
}
function jn({ product: e, children: t }) {
  return /* @__PURE__ */ d.jsxs("div", { className: "mc-card", children: [
    e.image && /* @__PURE__ */ d.jsx("img", { src: e.image, alt: e.name, className: "mc-card-img" }),
    /* @__PURE__ */ d.jsxs("div", { className: "mc-card-body", children: [
      /* @__PURE__ */ d.jsx("h4", { children: e.name }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        e.price?.toLocaleString?.() ?? e.price,
        "₫"
      ] }),
      /* @__PURE__ */ d.jsx("div", { children: t })
    ] })
  ] });
}
function In({ product: e }) {
  const { addItem: t } = Lt();
  return /* @__PURE__ */ d.jsx(ae, { onClick: () => t(e), children: "Thêm vào giỏ" });
}
function Dn() {
  const { state: e, updateItem: t, removeItem: r, clearCart: n } = Lt(), [o, s] = We(!1), [i, u] = We(null), [c, h] = We(!1);
  if (!e.items.length) return /* @__PURE__ */ d.jsx("div", { children: "Giỏ hàng rỗng" });
  const w = (S) => {
    u(S), s(!0);
  }, m = () => {
    i && r(i.id), s(!1), u(null);
  }, g = () => {
    h(!0);
  }, v = () => {
    n(), h(!1);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "mc-cart", children: [
    /* @__PURE__ */ d.jsxs("h3", { children: [
      "Giỏ hàng (",
      e.totalQuantity,
      ")"
    ] }),
    /* @__PURE__ */ d.jsx("ul", { style: { listStyleType: "none", padding: 0 }, children: e.items.map((S) => /* @__PURE__ */ d.jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ d.jsxs("div", { className: "cart-item", children: [
      /* @__PURE__ */ d.jsxs("span", { className: "cart-item-name", children: [
        S.name,
        " - ",
        S.price,
        "₫"
      ] }),
      /* @__PURE__ */ d.jsx(
        Nn,
        {
          type: "number",
          min: "1",
          value: S.quantity,
          onChange: (E) => t(S.id, Number(E))
        }
      ),
      /* @__PURE__ */ d.jsx(
        It,
        {
          onClick: () => w(S)
        }
      )
    ] }) }, S.id)) }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      "Tổng: ",
      e.totalPrice,
      "₫"
    ] }),
    /* @__PURE__ */ d.jsx(It, { onClick: g, label: "Xóa hết" }),
    /* @__PURE__ */ d.jsxs(Dt, { open: o, onClose: () => s(!1), children: [
      /* @__PURE__ */ d.jsxs("p", { children: [
        "Bạn có chắc muốn xóa ",
        /* @__PURE__ */ d.jsx("strong", { children: i?.name }),
        " khỏi giỏ hàng?"
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "right", marginTop: 12 }, children: [
        /* @__PURE__ */ d.jsx(ae, { className: "mc-btn-danger", onClick: m, children: "Đồng ý" }),
        /* @__PURE__ */ d.jsx(ae, { onClick: () => s(!1), children: "Hủy" })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs(Dt, { open: c, onClose: () => h(!1), children: [
      /* @__PURE__ */ d.jsxs("p", { children: [
        "Bạn có chắc muốn ",
        /* @__PURE__ */ d.jsx("strong", { children: "xóa toàn bộ giỏ hàng" }),
        " không?"
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "right", marginTop: 12 }, children: [
        /* @__PURE__ */ d.jsx(ae, { className: "mc-btn-danger", onClick: v, children: "Xóa hết" }),
        /* @__PURE__ */ d.jsx(ae, { onClick: () => h(!1), children: "Hủy" })
      ] })
    ] })
  ] });
}
export {
  In as AddToCartButton,
  ae as Button,
  It as ButtonDelete,
  jn as Card,
  Dn as Cart,
  On as CartProvider,
  Nn as InputText,
  Dt as Modal,
  Lt as useCart
};
