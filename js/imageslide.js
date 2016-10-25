
        (function(f, g, c, j, d, k, l) { /*! Jssor */
            new(function() {});
            var e = {
                    Wc: function(a) {
                        return -c.cos(a * c.PI) / 2 + .5
                    },
                    Qc: function(a) {
                        return a
                    },
                    rg: function(a) {
                        return a * a
                    },
                    Uc: function(a) {
                        return -a * (a - 2)
                    },
                    ng: function(a) {
                        return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
                    },
                    mg: function(a) {
                        return a * a * a
                    },
                    kg: function(a) {
                        return (a -= 1) * a * a + 1
                    },
                    eg: function(a) {
                        return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
                    },
                    dg: function(a) {
                        return a * a * a * a
                    },
                    cg: function(a) {
                        return -((a -= 1) * a * a * a - 1)
                    },
                    tg: function(a) {
                        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
                    },
                    ug: function(a) {
                        return a * a * a * a * a
                    },
                    fg: function(a) {
                        return (a -= 1) * a * a * a * a + 1
                    },
                    ig: function(a) {
                        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
                    },
                    jg: function(a) {
                        return 1 - c.cos(c.PI / 2 * a)
                    },
                    pg: function(a) {
                        return c.sin(c.PI / 2 * a)
                    },
                    Df: function(a) {
                        return -1 / 2 * (c.cos(c.PI * a) - 1)
                    },
                    Yf: function(a) {
                        return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
                    },
                    mf: function(a) {
                        return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
                    },
                    Se: function(a) {
                        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
                    },
                    Pe: function(a) {
                        return -(c.sqrt(1 - a * a) - 1)
                    },
                    lf: function(a) {
                        return c.sqrt(1 - (a -= 1) * a)
                    },
                    ff: function(a) {
                        return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
                    },
                    ef: function(a) {
                        if (!a || a == 1) return a;
                        var b = .3,
                            d = .075;
                        return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
                    },
                    ag: function(a) {
                        if (!a || a == 1) return a;
                        var b = .3,
                            d = .075;
                        return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
                    },
                    Bf: function(a) {
                        if (!a || a == 1) return a;
                        var b = .45,
                            d = .1125;
                        return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
                    },
                    Ze: function(a) {
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b)
                    },
                    af: function(a) {
                        var b = 1.70158;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1
                    },
                    bf: function(a) {
                        var b = 1.70158;
                        return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                    },
                    id: function(a) {
                        return 1 - e.gc(1 - a)
                    },
                    gc: function(a) {
                        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                    },
                    cf: function(a) {
                        return a < 1 / 2 ? e.id(a * 2) * .5 : e.gc(a * 2 - 1) * .5 + .5
                    },
                    df: function() {
                        return 1 - c.abs(1)
                    },
                    gf: function(a) {
                        return 1 - c.cos(a * c.PI * 2)
                    },
                    hf: function(a) {
                        return c.sin(a * c.PI * 2)
                    },
                    jf: function(a) {
                        return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
                    },
                    kf: function(a) {
                        return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
                    }
                },
                h = {
                    nf: e.Wc,
                    Af: e.Qc,
                    of: e.rg,
                    pf: e.Uc,
                    qf: e.ng,
                    rf: e.mg,
                    sf: e.kg,
                    tf: e.eg,
                    uf: e.dg,
                    vf: e.cg,
                    wf: e.tg,
                    xf: e.ug,
                    yf: e.fg,
                    zf: e.ig,
                    Ye: e.jg,
                    Xe: e.pg,
                    We: e.Df,
                    Ve: e.Yf,
                    we: e.mf,
                    xe: e.Se,
                    ye: e.Pe,
                    ze: e.lf,
                    Ae: e.ff,
                    Be: e.ef,
                    Ce: e.ag,
                    De: e.Bf,
                    ve: e.Ze,
                    Fe: e.af,
                    Ge: e.bf,
                    He: e.id,
                    Ie: e.gc,
                    Je: e.cf,
                    Ke: e.df,
                    Le: e.gf,
                    Me: e.hf,
                    Ne: e.jf,
                    Oe: e.kf
                };
            var b = new function() {
                var h = this,
                    Ab = /\S+/g,
                    F = 1,
                    yb = 2,
                    fb = 3,
                    eb = 4,
                    jb = 5,
                    G, r = 0,
                    i = 0,
                    s = 0,
                    X = 0,
                    z = 0,
                    I = navigator,
                    ob = I.appName,
                    o = I.userAgent,
                    p = parseFloat;

                function Ib() {
                    if (!G) {
                        G = {
                            bg: "ontouchstart" in f || "createTouch" in g
                        };
                        var a;
                        if (I.pointerEnabled || (a = I.msPointerEnabled)) G.ld = a ? "msTouchAction" : "touchAction"
                    }
                    return G
                }

                function v(j) {
                    if (!r) {
                        r = -1;
                        if (ob == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
                            var e = o.indexOf("MSIE");
                            r = F;
                            s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on X=@_jscript_version@*/ ;
                            i = g.documentMode || s
                        } else if (ob == "Netscape" && !!f.addEventListener) {
                            var d = o.indexOf("Firefox"),
                                b = o.indexOf("Safari"),
                                h = o.indexOf("Chrome"),
                                c = o.indexOf("AppleWebKit");
                            if (d >= 0) {
                                r = yb;
                                i = p(o.substring(d + 8))
                            } else if (b >= 0) {
                                var k = o.substring(0, b).lastIndexOf("/");
                                r = h >= 0 ? eb : fb;
                                i = p(o.substring(k + 1, b))
                            } else {
                                var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                                if (a) {
                                    r = F;
                                    i = s = p(a[1])
                                }
                            }
                            if (c >= 0) z = p(o.substring(c + 12))
                        } else {
                            var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                            if (a) {
                                r = jb;
                                i = p(a[2])
                            }
                        }
                    }
                    return j == r
                }

                function q() {
                    return v(F)
                }

                function Q() {
                    return q() && (i < 6 || g.compatMode == "BackCompat")
                }

                function db() {
                    return v(fb)
                }

                function ib() {
                    return v(jb)
                }

                function vb() {
                    return db() && z > 534 && z < 535
                }

                function J() {
                    v();
                    return z > 537 || i > 42 || r == F && i >= 11
                }

                function O() {
                    return q() && i < 9
                }

                function wb(a) {
                    var b, c;
                    return function(f) {
                        if (!b) {
                            b = d;
                            var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                            n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, d) {
                                var b = a;
                                if (d) b = g + e;
                                if (f.style[b] != l) return c = b
                            })
                        }
                        return c
                    }
                }

                function ub(b) {
                    var a;
                    return function(c) {
                        a = a || wb(b)(c) || b;
                        return a
                    }
                }
                var K = ub("transform");

                function nb(a) {
                    return {}.toString.call(a)
                }
                var kb = {};
                n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    kb["[object " + a + "]"] = a.toLowerCase()
                });

                function n(b, d) {
                    var a, c;
                    if (nb(b) == "[object Array]") {
                        for (a = 0; a < b.length; a++)
                            if (c = d(b[a], a, b)) return c
                    } else
                        for (a in b)
                            if (c = d(b[a], a, b)) return c
                }

                function C(a) {
                    return a == j ? String(a) : kb[nb(a)] || "object"
                }

                function lb(a) {
                    for (var b in a) return d
                }

                function A(a) {
                    try {
                        return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
                    } catch (b) {}
                }

                function u(a, b) {
                    return {
                        x: a,
                        y: b
                    }
                }

                function rb(b, a) {
                    setTimeout(b, a || 0)
                }

                function H(b, d, c) {
                    var a = !b || b == "inherit" ? "" : b;
                    n(d, function(c) {
                        var b = c.exec(a);
                        if (b) {
                            var d = a.substr(0, b.index),
                                e = a.substr(b.index + b[0].length + 1, a.length - 1);
                            a = d + e
                        }
                    });
                    a = c + (!a.indexOf(" ") ? "" : " ") + a;
                    return a
                }

                function tb(b, a) {
                    if (i < 9) b.style.filter = a
                }
                h.hg = Ib;
                h.jd = q;
                h.lg = db;
                h.og = J;
                h.Jc = O;
                wb("transform");
                h.Ac = function() {
                    return i
                };
                h.yc = rb;

                function Y(a) {
                    a.constructor === Y.caller && a.Ec && a.Ec.apply(a, Y.caller.arguments)
                }
                h.Ec = Y;
                h.rb = function(a) {
                    if (h.Zf(a)) a = g.getElementById(a);
                    return a
                };

                function t(a) {
                    return a || f.event
                }
                h.Gc = t;
                h.Wb = function(b) {
                    b = t(b);
                    var a = b.target || b.srcElement || g;
                    if (a.nodeType == 3) a = h.Lc(a);
                    return a
                };
                h.Nc = function(a) {
                    a = t(a);
                    return {
                        x: a.pageX || a.clientX || 0,
                        y: a.pageY || a.clientY || 0
                    }
                };

                function D(c, d, a) {
                    if (a !== l) c.style[d] = a == l ? "" : a;
                    else {
                        var b = c.currentStyle || c.style;
                        a = b[d];
                        if (a == "" && f.getComputedStyle) {
                            b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                            b && (a = b.getPropertyValue(d) || b[d])
                        }
                        return a
                    }
                }

                function ab(b, c, a, d) {
                    if (a !== l) {
                        if (a == j) a = "";
                        else d && (a += "px");
                        D(b, c, a)
                    } else return p(D(b, c))
                }

                function m(c, a) {
                    var d = a ? ab : D,
                        b;
                    if (a & 4) b = ub(c);
                    return function(e, f) {
                        return d(e, b ? b(e) : c, f, a & 2)
                    }
                }

                function Db(b) {
                    if (q() && s < 9) {
                        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                        return a ? p(a[1]) / 100 : 1
                    } else return p(b.style.opacity || "1")
                }

                function Fb(b, a, f) {
                    if (q() && s < 9) {
                        var h = b.style.filter || "",
                            i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                            e = c.round(100 * a),
                            d = "";
                        if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                        var g = H(h, [i], d);
                        tb(b, g)
                    } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
                }
                var L = {
                    fb: ["rotate"],
                    O: ["rotateX"],
                    Q: ["rotateY"],
                    Db: ["skewX"],
                    Hb: ["skewY"]
                };
                if (!J()) L = B(L, {
                    u: ["scaleX", 2],
                    p: ["scaleY", 2],
                    N: ["translateZ", 1]
                });

                function M(d, a) {
                    var c = "";
                    if (a) {
                        if (q() && i && i < 10) {
                            delete a.O;
                            delete a.Q;
                            delete a.N
                        }
                        b.f(a, function(d, b) {
                            var a = L[b];
                            if (a) {
                                var e = a[1] || 0;
                                if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                            }
                        });
                        if (J()) {
                            if (a.ab || a.cb || a.N) c += " translate3d(" + (a.ab || 0) + "px," + (a.cb || 0) + "px," + (a.N || 0) + "px)";
                            if (a.u == l) a.u = 1;
                            if (a.p == l) a.p = 1;
                            if (a.u != 1 || a.p != 1) c += " scale3d(" + a.u + ", " + a.p + ", 1)"
                        }
                    }
                    d.style[K(d)] = c
                }
                h.zc = m("transformOrigin", 4);
                h.Ef = m("backfaceVisibility", 4);
                h.Ff = m("transformStyle", 4);
                h.Gf = m("perspective", 6);
                h.Hf = m("perspectiveOrigin", 4);
                h.If = function(a, b) {
                    if (q() && s < 9 || s < 10 && Q()) a.style.zoom = b == 1 ? "" : b;
                    else {
                        var c = K(a),
                            f = "scale(" + b + ")",
                            e = a.style[c],
                            g = new RegExp(/[\s]*scale\(.*?\)/g),
                            d = H(e, [g], f);
                        a.style[c] = d
                    }
                };
                h.rc = function(b, a) {
                    return function(c) {
                        c = t(c);
                        var e = c.type,
                            d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                        (!d || d !== a && !h.Jf(a, d)) && b(c)
                    }
                };
                h.a = function(a, d, b, c) {
                    a = h.rb(a);
                    if (a.addEventListener) {
                        d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                        a.addEventListener(d, b, c)
                    } else if (a.attachEvent) {
                        a.attachEvent("on" + d, b);
                        c && a.setCapture && a.setCapture()
                    }
                };
                h.I = function(a, c, d, b) {
                    a = h.rb(a);
                    if (a.removeEventListener) {
                        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                        a.removeEventListener(c, d, b)
                    } else if (a.detachEvent) {
                        a.detachEvent("on" + c, d);
                        b && a.releaseCapture && a.releaseCapture()
                    }
                };
                h.Ib = function(a) {
                    a = t(a);
                    a.preventDefault && a.preventDefault();
                    a.cancel = d;
                    a.returnValue = k
                };
                h.Kf = function(a) {
                    a = t(a);
                    a.stopPropagation && a.stopPropagation();
                    a.cancelBubble = d
                };
                h.K = function(d, c) {
                    var a = [].slice.call(arguments, 2),
                        b = function() {
                            var b = a.concat([].slice.call(arguments, 0));
                            return c.apply(d, b)
                        };
                    return b
                };
                h.Lf = function(a, b) {
                    if (b == l) return a.textContent || a.innerText;
                    var c = g.createTextNode(b);
                    h.jc(a);
                    a.appendChild(c)
                };
                h.yb = function(d, c) {
                    for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
                    return b
                };

                function mb(a, c, e, b) {
                    b = b || "u";
                    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                        if (a.nodeType == 1) {
                            if (U(a, b) == c) return a;
                            if (!e) {
                                var d = mb(a, c, e, b);
                                if (d) return d
                            }
                        }
                }
                h.B = mb;

                function S(a, d, f, b) {
                    b = b || "u";
                    var c = [];
                    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                        if (a.nodeType == 1) {
                            U(a, b) == d && c.push(a);
                            if (!f) {
                                var e = S(a, d, f, b);
                                if (e.length) c = c.concat(e)
                            }
                        }
                    return c
                }

                function gb(a, c, d) {
                    for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                        if (a.nodeType == 1) {
                            if (a.tagName == c) return a;
                            if (!d) {
                                var b = gb(a, c, d);
                                if (b) return b
                            }
                        }
                }
                h.Pf = gb;
                h.Qf = function(b, a) {
                    return b.getElementsByTagName(a)
                };

                function B() {
                    var e = arguments,
                        d, c, b, a, g = 1 & e[0],
                        f = 1 + g;
                    d = e[f - 1] || {};
                    for (; f < e.length; f++)
                        if (c = e[f])
                            for (b in c) {
                                a = c[b];
                                if (a !== l) {
                                    a = c[b];
                                    var h = d[b];
                                    d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
                                }
                            }
                        return d
                }
                h.J = B;

                function Z(f, g) {
                    var d = {},
                        c, a, b;
                    for (c in f) {
                        a = f[c];
                        b = g[c];
                        if (a !== b) {
                            var e;
                            if (A(a) && A(b)) {
                                a = Z(a, b);
                                e = !lb(a)
                            }!e && (d[c] = a)
                        }
                    }
                    return d
                }
                h.Cc = function(a) {
                    return C(a) == "function"
                };
                h.Zf = function(a) {
                    return C(a) == "string"
                };
                h.bc = function(a) {
                    return !isNaN(p(a)) && isFinite(a)
                };
                h.f = n;
                h.Tf = A;

                function R(a) {
                    return g.createElement(a)
                }
                h.Gb = function() {
                    return R("DIV")
                };
                h.Vf = function() {
                    return R("SPAN")
                };
                h.wc = function() {};

                function V(b, c, a) {
                    if (a == l) return b.getAttribute(c);
                    b.setAttribute(c, a)
                }

                function U(a, b) {
                    return V(a, b) || V(a, "data-" + b)
                }
                h.A = V;
                h.k = U;

                function x(b, a) {
                    if (a == l) return b.className;
                    b.className = a
                }
                h.xc = x;

                function qb(b) {
                    var a = {};
                    n(b, function(b) {
                        a[b] = b
                    });
                    return a
                }

                function sb(b, a) {
                    return b.match(a || Ab)
                }

                function P(b, a) {
                    return qb(sb(b || "", a))
                }
                h.Wf = sb;

                function bb(b, c) {
                    var a = "";
                    n(c, function(c) {
                        a && (a += b);
                        a += c
                    });
                    return a
                }

                function E(a, c, b) {
                    x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
                }
                h.Lc = function(a) {
                    return a.parentNode
                };
                h.T = function(a) {
                    h.R(a, "none")
                };
                h.U = function(a, b) {
                    h.R(a, b ? "none" : "")
                };
                h.te = function(b, a) {
                    b.removeAttribute(a)
                };
                h.Kd = function() {
                    return q() && i < 10
                };
                h.Jd = function(d, a) {
                    if (a) d.style.clip = "rect(" + c.round(a.i || a.v || 0) + "px " + c.round(a.D) + "px " + c.round(a.E) + "px " + c.round(a.j || a.q || 0) + "px)";
                    else if (a !== l) {
                        var g = d.style.cssText,
                            f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                            e = H(g, f, "");
                        b.Kb(d, e)
                    }
                };
                h.S = function() {
                    return +new Date
                };
                h.V = function(b, a) {
                    b.appendChild(a)
                };
                h.Bb = function(b, a, c) {
                    (c || a.parentNode).insertBefore(b, a)
                };
                h.Nb = function(b, a) {
                    a = a || b.parentNode;
                    a && a.removeChild(b)
                };
                h.oe = function(a, b) {
                    n(a, function(a) {
                        h.Nb(a, b)
                    })
                };
                h.jc = function(a) {
                    h.oe(h.yb(a, d), a)
                };
                h.ne = function(a, b) {
                    var c = h.Lc(a);
                    b & 1 && h.F(a, (h.m(c) - h.m(a)) / 2);
                    b & 2 && h.C(a, (h.n(c) - h.n(a)) / 2)
                };
                h.qc = function(b, a) {
                    return parseInt(b, a || 10)
                };
                h.ae = p;
                h.Jf = function(b, a) {
                    var c = g.body;
                    while (a && b !== a && c !== a) try {
                        a = a.parentNode
                    } catch (d) {
                        return k
                    }
                    return b === a
                };

                function W(d, c, b) {
                    var a = d.cloneNode(!c);
                    !b && h.te(a, "id");
                    return a
                }
                h.mb = W;
                h.tb = function(e, f) {
                    var a = new Image;

                    function b(e, d) {
                        h.I(a, "load", b);
                        h.I(a, "abort", c);
                        h.I(a, "error", c);
                        f && f(a, d)
                    }

                    function c(a) {
                        b(a, d)
                    }
                    if (ib() && i < 11.6 || !e) b(!e);
                    else {
                        h.a(a, "load", b);
                        h.a(a, "abort", c);
                        h.a(a, "error", c);
                        a.src = e
                    }
                };
                h.Yd = function(d, a, e) {
                    var c = d.length + 1;

                    function b(b) {
                        c--;
                        if (a && b && b.src == a.src) a = b;
                        !c && e && e(a)
                    }
                    n(d, function(a) {
                        h.tb(a.src, b)
                    });
                    b()
                };
                h.Wd = function(a, g, i, h) {
                    if (h) a = W(a);
                    var c = S(a, g);
                    if (!c.length) c = b.Qf(a, g);
                    for (var f = c.length - 1; f > -1; f--) {
                        var d = c[f],
                            e = W(i);
                        x(e, x(d));
                        b.Kb(e, d.style.cssText);
                        b.Bb(e, d);
                        b.Nb(d)
                    }
                    return a
                };

                function Gb(a) {
                    var k = this,
                        p = "",
                        r = ["av", "pv", "ds", "dn"],
                        e = [],
                        q, j = 0,
                        f = 0,
                        d = 0;

                    function i() {
                        E(a, q, e[d || j || f & 2 || f]);
                        b.X(a, "pointer-events", d ? "none" : "")
                    }

                    function c() {
                        j = 0;
                        i();
                        h.I(g, "mouseup", c);
                        h.I(g, "touchend", c);
                        h.I(g, "touchcancel", c)
                    }

                    function o(a) {
                        if (d) h.Ib(a);
                        else {
                            j = 4;
                            i();
                            h.a(g, "mouseup", c);
                            h.a(g, "touchend", c);
                            h.a(g, "touchcancel", c)
                        }
                    }
                    k.Td = function(a) {
                        if (a === l) return f;
                        f = a & 2 || a & 1;
                        i()
                    };
                    k.Bc = function(a) {
                        if (a === l) return !d;
                        d = a ? 0 : 3;
                        i()
                    };
                    k.W = a = h.rb(a);
                    var m = b.Wf(x(a));
                    if (m) p = m.shift();
                    n(r, function(a) {
                        e.push(p + a)
                    });
                    q = bb(" ", e);
                    e.unshift("");
                    h.a(a, "mousedown", o);
                    h.a(a, "touchstart", o)
                }
                h.lc = function(a) {
                    return new Gb(a)
                };
                h.X = D;
                h.Ab = m("overflow");
                h.C = m("top", 2);
                h.F = m("left", 2);
                h.m = m("width", 2);
                h.n = m("height", 2);
                h.Rd = m("marginLeft", 2);
                h.Sd = m("marginTop", 2);
                h.G = m("position");
                h.R = m("display");
                h.z = m("zIndex", 1);
                h.Rb = function(b, a, c) {
                    if (a != l) Fb(b, a, c);
                    else return Db(b)
                };
                h.Kb = function(a, b) {
                    if (b != l) a.style.cssText = b;
                    else return a.style.cssText
                };
                var T = {
                    kb: h.Rb,
                    i: h.C,
                    j: h.F,
                    hb: h.m,
                    pb: h.n,
                    ub: h.G,
                    Cg: h.R,
                    xb: h.z
                };

                function w(f, k) {
                    var e = O(),
                        b = J(),
                        d = vb(),
                        g = K(f);

                    function i(b, d, a) {
                        var e = b.Z(u(-d / 2, -a / 2)),
                            f = b.Z(u(d / 2, -a / 2)),
                            g = b.Z(u(d / 2, a / 2)),
                            h = b.Z(u(-d / 2, a / 2));
                        b.Z(u(300, 300));
                        return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
                    }

                    function a(d, a) {
                        a = a || {};
                        var n = a.N || 0,
                            p = (a.O || 0) % 360,
                            q = (a.Q || 0) % 360,
                            u = (a.fb || 0) % 360,
                            k = a.u,
                            m = a.p,
                            f = a.Bg;
                        if (k == l) k = 1;
                        if (m == l) m = 1;
                        if (f == l) f = 1;
                        if (e) {
                            n = 0;
                            p = 0;
                            q = 0;
                            f = 0
                        }
                        var c = new Cb(a.ab, a.cb, n);
                        c.O(p);
                        c.Q(q);
                        c.Zd(u);
                        c.be(a.Db, a.Hb);
                        c.Sb(k, m, f);
                        if (b) {
                            c.jb(a.q, a.v);
                            d.style[g] = c.ce()
                        } else if (!X || X < 9) {
                            var o = "",
                                j = {
                                    x: 0,
                                    y: 0
                                };
                            if (a.M) j = i(c, a.M, a.db);
                            h.Sd(d, j.y);
                            h.Rd(d, j.x);
                            o = c.de();
                            var s = d.style.filter,
                                t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                                r = H(s, [t], o);
                            tb(d, r)
                        }
                    }
                    w = function(e, c) {
                        c = c || {};
                        var g = c.q,
                            i = c.v,
                            f;
                        n(T, function(a, b) {
                            f = c[b];
                            f !== l && a(e, f)
                        });
                        h.Jd(e, c.g);
                        if (!b) {
                            g != l && h.F(e, (c.Sc || 0) + g);
                            i != l && h.C(e, (c.Tc || 0) + i)
                        }
                        if (c.ee)
                            if (d) rb(h.K(j, M, e, c));
                            else a(e, c)
                    };
                    h.Eb = M;
                    if (d) h.Eb = w;
                    if (e) h.Eb = a;
                    else if (!b) a = M;
                    h.P = w;
                    w(f, k)
                }
                h.Eb = w;
                h.P = w;

                function Cb(i, k, o) {
                    var d = this,
                        b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1],
                        h = c.sin,
                        g = c.cos,
                        l = c.tan;

                    function f(a) {
                        return a * c.PI / 180
                    }

                    function n(a, b) {
                        return {
                            x: a,
                            y: b
                        }
                    }

                    function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                        return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
                    }

                    function e(c, a) {
                        return m.apply(j, (a || b).concat(c))
                    }
                    d.Sb = function(a, c, d) {
                        if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
                    };
                    d.jb = function(a, c, d) {
                        b[12] += a || 0;
                        b[13] += c || 0;
                        b[14] += d || 0
                    };
                    d.O = function(c) {
                        if (c) {
                            a = f(c);
                            var d = g(a),
                                i = h(a);
                            b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                        }
                    };
                    d.Q = function(c) {
                        if (c) {
                            a = f(c);
                            var d = g(a),
                                i = h(a);
                            b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                        }
                    };
                    d.Zd = function(c) {
                        if (c) {
                            a = f(c);
                            var d = g(a),
                                i = h(a);
                            b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                        }
                    };
                    d.be = function(a, c) {
                        if (a || c) {
                            i = f(a);
                            k = f(c);
                            b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                        }
                    };
                    d.Z = function(c) {
                        var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                        return n(a[12], a[13])
                    };
                    d.ce = function() {
                        return "matrix3d(" + b.join(",") + ")"
                    };
                    d.de = function() {
                        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
                    }
                }
                new function() {
                    var a = this;

                    function b(d, g) {
                        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                            for (var k = f[c] = [], b = 0; b < h; b++) {
                                for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                                k[b] = e
                            }
                        return f
                    }
                    a.u = function(b, c) {
                        return a.ed(b, c, 0)
                    };
                    a.p = function(b, c) {
                        return a.ed(b, 0, c)
                    };
                    a.ed = function(a, c, d) {
                        return b(a, [
                            [c, 0],
                            [0, d]
                        ])
                    };
                    a.Z = function(d, c) {
                        var a = b(d, [
                            [c.x],
                            [c.y]
                        ]);
                        return u(a[0][0], a[1][0])
                    }
                };
                var N = {
                    Sc: 0,
                    Tc: 0,
                    q: 0,
                    v: 0,
                    bb: 1,
                    u: 1,
                    p: 1,
                    fb: 0,
                    O: 0,
                    Q: 0,
                    ab: 0,
                    cb: 0,
                    N: 0,
                    Db: 0,
                    Hb: 0
                };
                h.Yc = function(a) {
                    var c = a || {};
                    if (a)
                        if (b.Cc(a)) c = {
                            sc: c
                        };
                        else if (b.Cc(a.g)) c.g = {
                        sc: a.g
                    };
                    return c
                };

                function pb(c, a) {
                    var b = {};
                    n(c, function(c, d) {
                        var e = c;
                        if (a[d] != l)
                            if (h.bc(c)) e = c + a[d];
                            else e = pb(c, a[d]);
                        b[d] = e
                    });
                    return b
                }
                h.he = pb;
                h.ie = function(k, m, x, q, z, A, n) {
                    var a = m;
                    if (k) {
                        a = {};
                        for (var g in m) {
                            var B = A[g] || 1,
                                w = z[g] || [0, 1],
                                f = (x - w[0]) / w[1];
                            f = c.min(c.max(f, 0), 1);
                            f = f * B;
                            var u = c.floor(f);
                            if (f != u) f -= u;
                            var h = q.sc || e.Wc,
                                i, C = k[g],
                                o = m[g];
                            if (b.bc(o)) {
                                h = q[g] || h;
                                var y = h(f);
                                i = C + o * y
                            } else {
                                i = b.J({
                                    Fb: {}
                                }, k[g]);
                                var v = q[g] || {};
                                b.f(o.Fb || o, function(d, a) {
                                    h = v[a] || v.sc || h;
                                    var c = h(f),
                                        b = d * c;
                                    i.Fb[a] = b;
                                    i[a] += b
                                })
                            }
                            a[g] = i
                        }
                        var t = b.f(m, function(b, a) {
                            return N[a] != l
                        });
                        t && b.f(N, function(c, b) {
                            if (a[b] == l && k[b] !== l) a[b] = k[b]
                        });
                        if (t) {
                            if (a.bb) a.u = a.p = a.bb;
                            a.M = n.M;
                            a.db = n.db;
                            a.ee = d
                        }
                    }
                    if (m.g && n.jb) {
                        var p = a.g.Fb,
                            s = (p.i || 0) + (p.E || 0),
                            r = (p.j || 0) + (p.D || 0);
                        a.j = (a.j || 0) + r;
                        a.i = (a.i || 0) + s;
                        a.g.j -= r;
                        a.g.D -= r;
                        a.g.i -= s;
                        a.g.E -= s
                    }
                    if (a.g && b.Kd() && !a.g.i && !a.g.j && !a.g.v && !a.g.q && a.g.D == n.M && a.g.E == n.db) a.g = j;
                    return a
                }
            };

            function n() {
                var a = this,
                    d = [];

                function i(a, b) {
                    d.push({
                        nc: a,
                        oc: b
                    })
                }

                function h(a, c) {
                    b.f(d, function(b, e) {
                        b.nc == a && b.oc === c && d.splice(e, 1)
                    })
                }
                a.lb = a.addEventListener = i;
                a.removeEventListener = h;
                a.l = function(a) {
                    var c = [].slice.call(arguments, 1);
                    b.f(d, function(b) {
                        b.nc == a && b.oc.apply(f, c)
                    })
                }
            }
            var m = function(z, C, i, J, M, L) {
                z = z || 0;
                var a = this,
                    q, n, o, u, A = 0,
                    G, H, F, B, y = 0,
                    h = 0,
                    m = 0,
                    D, l, g, e, p, w = [],
                    x;

                function O(a) {
                    g += a;
                    e += a;
                    l += a;
                    h += a;
                    m += a;
                    y += a
                }

                function t(o) {
                    var f = o;
                    if (p && (f >= e || f <= g)) f = ((f - g) % p + p) % p + g;
                    if (!D || u || h != f) {
                        var j = c.min(f, e);
                        j = c.max(j, g);
                        if (!D || u || j != m) {
                            if (L) {
                                var k = (j - l) / (C || 1);
                                if (i.me) k = 1 - k;
                                var n = b.ie(M, L, k, G, F, H, i);
                                if (x) b.f(n, function(b, a) {
                                    x[a] && x[a](J, b)
                                });
                                else b.P(J, n)
                            }
                            a.tc(m - l, j - l);
                            m = j;
                            b.f(w, function(b, c) {
                                var a = o < h ? w[w.length - c - 1] : b;
                                a.s(m - y)
                            });
                            var r = h,
                                q = m;
                            h = f;
                            D = d;
                            a.Mb(r, q)
                        }
                    }
                }

                function E(a, b, d) {
                    b && a.Pb(e);
                    if (!d) {
                        g = c.min(g, a.mc() + y);
                        e = c.max(e, a.Ob() + y)
                    }
                    w.push(a)
                }
                var r = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
                if (b.lg() && b.Ac() < 7) r = j;
                r = r || function(a) {
                    b.yc(a, i.vd)
                };

                function I() {
                    if (q) {
                        var d = b.S(),
                            e = c.min(d - A, i.fd),
                            a = h + e * o;
                        A = d;
                        if (a * o >= n * o) a = n;
                        t(a);
                        if (!u && a * o >= n * o) K(B);
                        else r(I)
                    }
                }

                function s(f, i, j) {
                    if (!q) {
                        q = d;
                        u = j;
                        B = i;
                        f = c.max(f, g);
                        f = c.min(f, e);
                        n = f;
                        o = n < h ? -1 : 1;
                        a.Pc();
                        A = b.S();
                        r(I)
                    }
                }

                function K(b) {
                    if (q) {
                        u = q = B = k;
                        a.ad();
                        b && b()
                    }
                }
                a.Zc = function(a, b, c) {
                    s(a ? h + a : e, b, c)
                };
                a.Vc = s;
                a.gb = K;
                a.pe = function(a) {
                    s(a)
                };
                a.L = function() {
                    return h
                };
                a.od = function() {
                    return n
                };
                a.sb = function() {
                    return m
                };
                a.s = t;
                a.jb = function(a) {
                    t(h + a)
                };
                a.Xc = function() {
                    return q
                };
                a.Qd = function(a) {
                    p = a
                };
                a.Pb = O;
                a.vb = function(a, b) {
                    E(a, 0, b)
                };
                a.kc = function(a) {
                    E(a, 1)
                };
                a.se = function(a) {
                    e += a
                };
                a.mc = function() {
                    return g
                };
                a.Ob = function() {
                    return e
                };
                a.Mb = a.Pc = a.ad = a.tc = b.wc;
                a.dc = b.S();
                i = b.J({
                    vd: 16,
                    fd: 50
                }, i);
                p = i.md;
                x = i.yd;
                g = l = z;
                e = z + C;
                H = i.xd || {};
                F = i.Nd || {};
                G = b.Yc(i.Y)
            };
            new(function() {});
            var i = function(p, fc) {
                var h = this;

                function Bc() {
                    var a = this;
                    m.call(a, -1e8, 2e8);
                    a.Ed = function() {
                        var b = a.sb(),
                            d = c.floor(b),
                            f = t(d),
                            e = b - c.floor(b);
                        return {
                            eb: f,
                            Dd: d,
                            ub: e
                        }
                    };
                    a.Mb = function(b, a) {
                        var e = c.floor(a);
                        if (e != a && a > b) e++;
                        Tb(e, d);
                        h.l(i.Cd, t(a), t(b), a, b)
                    }
                }

                function Ac() {
                    var a = this;
                    m.call(a, 0, 0, {
                        md: r
                    });
                    b.f(C, function(b) {
                        D & 1 && b.Qd(r);
                        a.kc(b);
                        b.Pb(kb / bc)
                    })
                }

                function zc() {
                    var a = this,
                        b = Ub.W;
                    m.call(a, -1, 2, {
                        Y: e.Qc,
                        yd: {
                            ub: Zb
                        },
                        md: r
                    }, b, {
                        ub: 1
                    }, {
                        ub: -2
                    });
                    a.cc = b
                }

                function mc(o, n) {
                    var b = this,
                        e, f, g, l, c;
                    m.call(b, -1e8, 2e8, {
                        fd: 100
                    });
                    b.Pc = function() {
                        M = d;
                        R = j;
                        h.l(i.Ad, t(w.L()), w.L())
                    };
                    b.ad = function() {
                        M = k;
                        l = k;
                        var a = w.Ed();
                        h.l(i.wd, t(w.L()), w.L());
                        !a.ub && Dc(a.Dd, s)
                    };
                    b.Mb = function(i, h) {
                        var b;
                        if (l) b = c;
                        else {
                            b = f;
                            if (g) {
                                var d = h / g;
                                b = a.Od(d) * (f - e) + e
                            }
                        }
                        w.s(b)
                    };
                    b.Cb = function(a, d, c, h) {
                        e = a;
                        f = d;
                        g = c;
                        w.s(a);
                        b.s(0);
                        b.Vc(c, h)
                    };
                    b.re = function(a) {
                        l = d;
                        c = a;
                        b.Zc(a, j, d)
                    };
                    b.qe = function(a) {
                        c = a
                    };
                    w = new Bc;
                    w.vb(o);
                    w.vb(n)
                }

                function oc() {
                    var c = this,
                        a = Xb();
                    b.z(a, 0);
                    b.X(a, "pointerEvents", "none");
                    c.W = a;
                    c.Jb = function() {
                        b.T(a);
                        b.jc(a)
                    }
                }

                function xc(o, f) {
                    var e = this,
                        q, M, v, l, y = [],
                        x, B, W, H, S, F, g, w, p;
                    m.call(e, -u, u + 1, {});

                    function E(a) {
                        q && q.Rc();
                        T(o, a, 0);
                        F = d;
                        q = new I.H(o, I, b.ae(b.k(o, "idle")) || lc);
                        q.s(0)
                    }

                    function Z() {
                        q.dc < I.dc && E()
                    }

                    function O(p, r, o) {
                        if (!H) {
                            H = d;
                            if (l && o) {
                                var g = o.width,
                                    c = o.height,
                                    n = g,
                                    m = c;
                                if (g && c && a.qb) {
                                    if (a.qb & 3 && (!(a.qb & 4) || g > K || c > J)) {
                                        var j = k,
                                            q = K / J * c / g;
                                        if (a.qb & 1) j = q > 1;
                                        else if (a.qb & 2) j = q < 1;
                                        n = j ? g * J / c : K;
                                        m = j ? J : c * K / g
                                    }
                                    b.m(l, n);
                                    b.n(l, m);
                                    b.C(l, (J - m) / 2);
                                    b.F(l, (K - n) / 2)
                                }
                                b.G(l, "absolute");
                                h.l(i.le, f)
                            }
                        }
                        b.T(r);
                        p && p(e)
                    }

                    function Y(b, c, d, g) {
                        if (g == R && s == f && N)
                            if (!Cc) {
                                var a = t(b);
                                A.Id(a, f, c, e, d);
                                c.ke();
                                U.Pb(a - U.mc() - 1);
                                U.s(a);
                                z.Cb(b, b, 0)
                            }
                    }

                    function bb(b) {
                        if (b == R && s == f) {
                            if (!g) {
                                var a = j;
                                if (A)
                                    if (A.eb == f) a = A.zd();
                                    else A.Jb();
                                Z();
                                g = new vc(o, f, a, q);
                                g.dd(p)
                            }!g.Xc() && g.pc()
                        }
                    }

                    function G(d, h, l) {
                        if (d == f) {
                            if (d != h) C[h] && C[h].cd();
                            else !l && g && g.je();
                            p && p.Bc();
                            var m = R = b.S();
                            e.tb(b.K(j, bb, m))
                        } else {
                            var k = c.min(f, d),
                                i = c.max(f, d),
                                o = c.min(i - k, k + r - i),
                                n = u + a.ge - 1;
                            (!S || o <= n) && e.tb()
                        }
                    }

                    function db() {
                        if (s == f && g) {
                            g.gb();
                            p && p.fe();
                            p && p.Xd();
                            g.nd()
                        }
                    }

                    function eb() {
                        s == f && g && g.gb()
                    }

                    function ab(a) {
                        !P && h.l(i.Vd, f, a)
                    }

                    function Q() {
                        p = w.pInstance;
                        g && g.dd(p)
                    }
                    e.tb = function(c, a) {
                        a = a || v;
                        if (y.length && !H) {
                            b.U(a);
                            if (!W) {
                                W = d;
                                h.l(i.Ud, f);
                                b.f(y, function(a) {
                                    if (!b.A(a, "src")) {
                                        a.src = b.k(a, "src2");
                                        b.R(a, a["display-origin"])
                                    }
                                })
                            }
                            b.Yd(y, l, b.K(j, O, c, a))
                        } else O(c, a)
                    };
                    e.Pd = function() {
                        var i = f;
                        if (a.bd < 0) i -= r;
                        var d = i + a.bd * tc;
                        if (D & 2) d = t(d);
                        if (!(D & 1) && !ib) d = c.max(0, c.min(d, r - u));
                        if (d != f) {
                            if (A) {
                                var g = A.Md(r);
                                if (g) {
                                    var k = R = b.S(),
                                        h = C[t(d)];
                                    return h.tb(b.K(j, Y, d, h, g, k), v)
                                }
                            }
                            cb(d)
                        } else if (a.zb) {
                            e.cd();
                            G(f, f)
                        }
                    };
                    e.fc = function() {
                        G(f, f, d)
                    };
                    e.cd = function() {
                        p && p.fe();
                        p && p.Xd();
                        e.Hc();
                        g && g.Ld();
                        g = j;
                        E()
                    };
                    e.ke = function() {
                        b.T(o)
                    };
                    e.Hc = function() {
                        b.U(o)
                    };
                    e.Ee = function() {
                        p && p.Bc()
                    };

                    function T(a, c, e) {
                        if (b.A(a, "jssor-slider")) return;
                        if (!F) {
                            if (a.tagName == "IMG") {
                                y.push(a);
                                if (!b.A(a, "src")) {
                                    S = d;
                                    a["display-origin"] = b.R(a);
                                    b.T(a)
                                }
                            }
                            b.Jc() && b.z(a, (b.z(a) || 0) + 1)
                        }
                        var f = b.yb(a);
                        b.f(f, function(f) {
                            var h = f.tagName,
                                i = b.k(f, "u");
                            if (i == "player" && !w) {
                                w = f;
                                if (w.pInstance) Q();
                                else b.a(w, "dataavailable", Q)
                            }
                            if (i == "caption") {
                                if (c) {
                                    b.zc(f, b.k(f, "to"));
                                    b.Ef(f, b.k(f, "bf"));
                                    b.k(f, "3d") && b.Ff(f, "preserve-3d")
                                } else if (!b.jd()) {
                                    var g = b.mb(f, k, d);
                                    b.Bb(g, f, a);
                                    b.Nb(f, a);
                                    f = g;
                                    c = d
                                }
                            } else if (!F && !e && !l) {
                                if (h == "A") {
                                    if (b.k(f, "u") == "image") l = b.Pf(f, "IMG");
                                    else l = b.B(f, "image", d);
                                    if (l) {
                                        x = f;
                                        b.R(x, "block");
                                        b.P(x, V);
                                        B = b.mb(x, d);
                                        b.G(x, "relative");
                                        b.Rb(B, 0);
                                        b.X(B, "backgroundColor", "#000")
                                    }
                                } else if (h == "IMG" && b.k(f, "u") == "image") l = f;
                                if (l) {
                                    l.border = 0;
                                    b.P(l, V)
                                }
                            }
                            T(f, c, e + 1)
                        })
                    }
                    e.tc = function(c, b) {
                        var a = u - b;
                        Zb(M, a)
                    };
                    e.eb = f;
                    n.call(e);
                    b.Gf(o, b.k(o, "p"));
                    b.Hf(o, b.k(o, "po"));
                    var L = b.B(o, "thumb", d);
                    if (L) {
                        b.mb(L);
                        b.T(L)
                    }
                    b.U(o);
                    v = b.mb(gb);
                    b.z(v, 1e3);
                    b.a(o, "click", ab);
                    E(d);
                    e.Hd = l;
                    e.vc = B;
                    e.cc = M = o;
                    b.V(M, v);
                    h.lb(203, G);
                    h.lb(28, eb);
                    h.lb(24, db)
                }

                function vc(y, f, p, q) {
                    var a = this,
                        n = 0,
                        u = 0,
                        g, j, e, c, l, t, r, o = C[f];
                    m.call(a, 0, 0);

                    function v() {
                        b.jc(L);
                        cc && l && o.vc && b.V(L, o.vc);
                        b.U(L, !l && o.Hd)
                    }

                    function w() {
                        a.pc()
                    }

                    function x(b) {
                        r = b;
                        a.gb();
                        a.pc()
                    }
                    a.pc = function() {
                        var b = a.sb();
                        if (!B && !M && !r && s == f) {
                            if (!b) {
                                if (g && !l) {
                                    l = d;
                                    a.nd(d);
                                    h.l(i.Xf, f, n, u, g, c)
                                }
                                v()
                            }
                            var k, p = i.uc;
                            if (b != c)
                                if (b == e) k = c;
                                else if (b == j) k = e;
                            else if (!b) k = j;
                            else k = a.od();
                            h.l(p, f, b, n, j, e, c);
                            var m = N && (!E || F);
                            if (b == c)(e != c && !(E & 12) || m) && o.Pd();
                            else(m || b != e) && a.Vc(k, w)
                        }
                    };
                    a.je = function() {
                        e == c && e == a.sb() && a.s(j)
                    };
                    a.Ld = function() {
                        A && A.eb == f && A.Jb();
                        var b = a.sb();
                        b < c && h.l(i.uc, f, -b - 1, n, j, e, c)
                    };
                    a.nd = function(a) {
                        p && b.Ab(lb, a && p.Zb.xg ? "" : "hidden")
                    };
                    a.tc = function(b, a) {
                        if (l && a >= g) {
                            l = k;
                            v();
                            o.Hc();
                            A.Jb();
                            h.l(i.Uf, f, n, u, g, c)
                        }
                        h.l(i.Sf, f, a, n, j, e, c)
                    };
                    a.dd = function(a) {
                        if (a && !t) {
                            t = a;
                            a.lb($JssorPlayer$.Bd, x)
                        }
                    };
                    p && a.kc(p);
                    g = a.Ob();
                    a.kc(q);
                    j = g + q.Mc;
                    e = g + q.Dc;
                    c = a.Ob()
                }

                function Kb(a, c, d) {
                    b.F(a, c);
                    b.C(a, d)
                }

                function Zb(c, b) {
                    var a = x > 0 ? x : fb,
                        d = zb * b * (a & 1),
                        e = Ab * b * (a >> 1 & 1);
                    Kb(c, d, e)
                }

                function Pb() {
                    qb = M;
                    Ib = z.od();
                    G = w.L()
                }

                function gc() {
                    Pb();
                    if (B || !F && E & 12) {
                        z.gb();
                        h.l(i.Rf)
                    }
                }

                function ec(f) {
                    if (!B && (F || !(E & 12)) && !z.Xc()) {
                        var d = w.L(),
                            b = c.ceil(G);
                        if (f && c.abs(H) >= a.Fc) {
                            b = c.ceil(d);
                            b += jb
                        }
                        if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
                        var e = c.abs(b - d);
                        e = 1 - c.pow(1 - e, 5);
                        if (!P && qb) z.pe(Ib);
                        else if (d == b) {
                            tb.Ee();
                            tb.fc()
                        } else z.Cb(d, b, e * Vb)
                    }
                }

                function Hb(a) {
                    !b.k(b.Wb(a), "nodrag") && b.Ib(a)
                }

                function rc(a) {
                    Yb(a, 1)
                }

                function Yb(a, c) {
                    a = b.Gc(a);
                    var l = b.Wb(a);
                    if (!O && !b.k(l, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                        B = d;
                        yb = k;
                        R = j;
                        b.a(g, c ? "touchmove" : "mousemove", Bb);
                        b.S();
                        P = 0;
                        gc();
                        if (!qb) x = 0;
                        if (c) {
                            var f = a.touches[0];
                            ub = f.clientX;
                            vb = f.clientY
                        } else {
                            var e = b.Nc(a);
                            ub = e.x;
                            vb = e.y
                        }
                        H = 0;
                        hb = 0;
                        jb = 0;
                        h.l(i.Of, t(G), G, a)
                    }
                }

                function Bb(e) {
                    if (B) {
                        e = b.Gc(e);
                        var f;
                        if (e.type != "mousemove") {
                            var l = e.touches[0];
                            f = {
                                x: l.clientX,
                                y: l.clientY
                            }
                        } else f = b.Nc(e);
                        if (f) {
                            var j = f.x - ub,
                                k = f.y - vb;
                            if (c.floor(G) != G) x = x || fb & O;
                            if ((j || k) && !x) {
                                if (O == 3)
                                    if (c.abs(k) > c.abs(j)) x = 2;
                                    else x = 1;
                                else x = O;
                                if (ob && x == 1 && c.abs(k) - c.abs(j) > 3) yb = d
                            }
                            if (x) {
                                var a = k,
                                    i = Ab;
                                if (x == 1) {
                                    a = j;
                                    i = zb
                                }
                                if (!(D & 1)) {
                                    if (a > 0) {
                                        var g = i * s,
                                            h = a - g;
                                        if (h > 0) a = g + c.sqrt(h) * 5
                                    }
                                    if (a < 0) {
                                        var g = i * (r - u - s),
                                            h = -a - g;
                                        if (h > 0) a = -g - c.sqrt(h) * 5
                                    }
                                }
                                if (H - hb < -2) jb = 0;
                                else if (H - hb > 2) jb = -1;
                                hb = H;
                                H = a;
                                sb = G - H / i / (Y || 1);
                                if (H && x && !yb) {
                                    b.Ib(e);
                                    if (!M) z.re(sb);
                                    else z.qe(sb)
                                }
                            }
                        }
                    }
                }

                function bb() {
                    qc();
                    if (B) {
                        B = k;
                        b.S();
                        b.I(g, "mousemove", Bb);
                        b.I(g, "touchmove", Bb);
                        P = H;
                        z.gb();
                        var a = w.L();
                        h.l(i.Nf, t(a), a, t(G), G);
                        E & 12 && Pb();
                        ec(d)
                    }
                }

                function jc(c) {
                    if (P) {
                        b.Kf(c);
                        var a = b.Wb(c);
                        while (a && v !== a) {
                            a.tagName == "A" && b.Ib(c);
                            try {
                                a = a.parentNode
                            } catch (d) {
                                break
                            }
                        }
                    }
                }

                function Jb(a) {
                    C[s];
                    s = t(a);
                    tb = C[s];
                    Tb(a);
                    return s
                }

                function Dc(a, b) {
                    x = 0;
                    Jb(a);
                    h.l(i.Mf, t(a), b)
                }

                function Tb(a, c) {
                    wb = a;
                    b.f(S, function(b) {
                        b.Xb(t(a), a, c)
                    })
                }

                function sc() {
                    var b = i.Kc || 0,
                        a = X;
                    if (ob) a & 1 && (a &= 1);
                    i.Kc |= a;
                    return O = a & ~b
                }

                function qc() {
                    if (O) {
                        i.Kc &= ~X;
                        O = 0
                    }
                }

                function Xb() {
                    var a = b.Gb();
                    b.P(a, V);
                    b.G(a, "absolute");
                    return a
                }

                function t(a) {
                    return (a % r + r) % r
                }

                function kc(b, d) {
                    if (d)
                        if (!D) {
                            b = c.min(c.max(b + wb, 0), r - u);
                            d = k
                        } else if (D & 2) {
                        b = t(b + wb);
                        d = k
                    }
                    cb(b, a.hc, d)
                }

                function xb() {
                    b.f(S, function(a) {
                        a.ic(a.Lb.wg <= F)
                    })
                }

                function hc() {
                    if (!F) {
                        F = 1;
                        xb();
                        if (!B) {
                            E & 12 && ec();
                            E & 3 && C[s].fc()
                        }
                    }
                }

                function Ec() {
                    if (F) {
                        F = 0;
                        xb();
                        B || !(E & 12) || gc()
                    }
                }

                function ic() {
                    V = {
                        hb: K,
                        pb: J,
                        i: 0,
                        j: 0
                    };
                    b.f(T, function(a) {
                        b.P(a, V);
                        b.G(a, "absolute");
                        b.Ab(a, "hidden");
                        b.T(a)
                    });
                    b.P(gb, V)
                }

                function ab(b, a) {
                    cb(b, a, d)
                }

                function cb(g, f, j) {
                    if (Rb && (!B && (F || !(E & 12)) || a.Ic)) {
                        M = d;
                        B = k;
                        z.gb();
                        if (f == l) f = Vb;
                        var e = Cb.sb(),
                            b = g;
                        if (j) {
                            b = e + g;
                            if (g > 0) b = c.ceil(b);
                            else b = c.floor(b)
                        }
                        if (D & 2) b = t(b);
                        if (!(D & 1)) b = c.max(0, c.min(b, r - u));
                        var i = (b - e) % r;
                        b = e + i;
                        var h = e == b ? 0 : f * c.abs(i);
                        h = c.min(h, f * u * 1.5);
                        z.Cb(e, b, h || 1)
                    }
                }
                h.Zc = function() {
                    if (!N) {
                        N = d;
                        C[s] && C[s].fc()
                    }
                };

                function W() {
                    return b.m(y || p)
                }

                function nb() {
                    return b.n(y || p)
                }
                h.M = W;
                h.db = nb;

                function Eb(c, d) {
                    if (c == l) return b.m(p);
                    if (!y) {
                        var a = b.Gb(g);
                        b.xc(a, b.xc(p));
                        b.Kb(a, b.Kb(p));
                        b.R(a, "block");
                        b.G(a, "relative");
                        b.C(a, 0);
                        b.F(a, 0);
                        b.Ab(a, "visible");
                        y = b.Gb(g);
                        b.G(y, "absolute");
                        b.C(y, 0);
                        b.F(y, 0);
                        b.m(y, b.m(p));
                        b.n(y, b.n(p));
                        b.zc(y, "0 0");
                        b.V(y, a);
                        var h = b.yb(p);
                        b.V(p, y);
                        b.X(p, "backgroundImage", "");
                        b.f(h, function(c) {
                            b.V(b.k(c, "noscale") ? p : a, c);
                            b.k(c, "autocenter") && Lb.push(c)
                        })
                    }
                    Y = c / (d ? b.n : b.m)(y);
                    b.If(y, Y);
                    var f = d ? Y * W() : c,
                        e = d ? c : Y * nb();
                    b.m(p, f);
                    b.n(p, e);
                    b.f(Lb, function(a) {
                        var c = b.qc(b.k(a, "autocenter"));
                        b.ne(a, c)
                    })
                }
                h.gg = Eb;
                n.call(h);
                h.W = p = b.rb(p);
                var a = b.J({
                    qb: 0,
                    ge: 1,
                    Vb: 1,
                    Ub: 0,
                    Qb: k,
                    zb: 1,
                    wb: d,
                    Ic: d,
                    bd: 1,
                    Oc: 3e3,
                    qd: 1,
                    hc: 500,
                    Od: e.Uc,
                    Fc: 20,
                    rd: 0,
                    ob: 1,
                    td: 0,
                    qg: 1,
                    Tb: 1,
                    hd: 1
                }, fc);
                a.wb = a.wb && b.og();
                if (a.gd != l) a.Oc = a.gd;
                if (a.sg != l) a.td = a.sg;
                var fb = a.Tb & 3,
                    tc = (a.Tb & 4) / -4 || 1,
                    mb = a.vg,
                    I = b.J({
                        H: q,
                        wb: a.wb
                    }, a.Cf);
                I.ib = I.ib || I.Ag;
                var Fb = a.Ue,
                    Z = a.Te,
                    eb = a.zg,
                    Q = !a.qg,
                    y, v = b.B(p, "slides", Q),
                    gb = b.B(p, "loading", Q) || b.Gb(g),
                    Nb = b.B(p, "navigator", Q),
                    dc = b.B(p, "arrowleft", Q),
                    ac = b.B(p, "arrowright", Q),
                    Mb = b.B(p, "thumbnavigator", Q),
                    pc = b.m(v),
                    nc = b.n(v),
                    V, T = [],
                    uc = b.yb(v);
                b.f(uc, function(a) {
                    if (a.tagName == "DIV" && !b.k(a, "u")) T.push(a);
                    else b.Jc() && b.z(a, (b.z(a) || 0) + 1)
                });
                var s = -1,
                    wb, tb, r = T.length,
                    K = a.Re || pc,
                    J = a.Qe || nc,
                    Wb = a.rd,
                    zb = K + Wb,
                    Ab = J + Wb,
                    bc = fb & 1 ? zb : Ab,
                    u = c.min(a.ob, r),
                    lb, x, O, yb, S = [],
                    Qb, Sb, Ob, cc, Cc, N, E = a.qd,
                    lc = a.Oc,
                    Vb = a.hc,
                    rb, ib, kb, Rb = u < r,
                    D = Rb ? a.zb : 0,
                    X, P, F = 1,
                    M, B, R, ub = 0,
                    vb = 0,
                    H, hb, jb, Cb, w, U, z, Ub = new oc,
                    Y, Lb = [];
                if (r) {
                    if (a.wb) Kb = function(a, c, d) {
                        b.Eb(a, {
                            ab: c,
                            cb: d
                        })
                    };
                    N = a.Qb;
                    h.Lb = fc;
                    ic();
                    b.A(p, "jssor-slider", d);
                    b.z(v, b.z(v) || 0);
                    b.G(v, "absolute");
                    lb = b.mb(v, d);
                    b.Bb(lb, v);
                    if (mb) {
                        cc = mb.yg;
                        rb = mb.H;
                        ib = u == 1 && r > 1 && rb && (!b.jd() || b.Ac() >= 8)
                    }
                    kb = ib || u >= r || !(D & 1) ? 0 : a.td;
                    X = (u > 1 || kb ? fb : -1) & a.hd;
                    var Gb = v,
                        C = [],
                        A, L, Db = b.hg(),
                        ob = Db.bg,
                        G, qb, Ib, sb;
                    Db.ld && b.X(Gb, Db.ld, ([j, "pan-y", "pan-x", "none"])[X] || "");
                    U = new zc;
                    if (ib) A = new rb(Ub, K, J, mb, ob);
                    b.V(lb, U.cc);
                    b.Ab(v, "hidden");
                    L = Xb();
                    b.X(L, "backgroundColor", "#000");
                    b.Rb(L, 0);
                    b.Bb(L, Gb.firstChild, Gb);
                    for (var db = 0; db < T.length; db++) {
                        var wc = T[db],
                            yc = new xc(wc, db);
                        C.push(yc)
                    }
                    b.T(gb);
                    Cb = new Ac;
                    z = new mc(Cb, U);
                    b.a(v, "click", jc, d);
                    b.a(p, "mouseout", b.rc(hc, p));
                    b.a(p, "mouseover", b.rc(Ec, p));
                    if (X) {
                        b.a(v, "mousedown", Yb);
                        b.a(v, "touchstart", rc);
                        b.a(v, "dragstart", Hb);
                        b.a(v, "selectstart", Hb);
                        b.a(g, "mouseup", bb);
                        b.a(g, "touchend", bb);
                        b.a(g, "touchcancel", bb);
                        b.a(f, "blur", bb)
                    }
                    E &= ob ? 10 : 5;
                    if (Nb && Fb) {
                        Qb = new Fb.H(Nb, Fb, W(), nb());
                        S.push(Qb)
                    }
                    if (Z && dc && ac) {
                        Z.zb = D;
                        Z.ob = u;
                        Sb = new Z.H(dc, ac, Z, W(), nb());
                        S.push(Sb)
                    }
                    if (Mb && eb) {
                        eb.Ub = a.Ub;
                        Ob = new eb.H(Mb, eb);
                        S.push(Ob)
                    }
                    b.f(S, function(a) {
                        a.ec(r, C, gb);
                        a.lb(o.Yb, kc)
                    });
                    b.X(p, "visibility", "visible");
                    Eb(W());
                    xb();
                    a.Vb && b.a(g, "keydown", function(b) {
                        if (b.keyCode == 37) ab(-a.Vb);
                        else b.keyCode == 39 && ab(a.Vb)
                    });
                    var pb = a.Ub;
                    if (!(D & 1)) pb = c.max(0, c.min(pb, r - u));
                    z.Cb(pb, pb, 0)
                }
            };
            i.Vd = 21;
            i.Of = 22;
            i.Nf = 23;
            i.Ad = 24;
            i.wd = 25;
            i.Ud = 26;
            i.le = 27;
            i.Rf = 28;
            i.Cd = 202;
            i.Mf = 203;
            i.Xf = 206;
            i.Uf = 207;
            i.Sf = 208;
            i.uc = 209;
            var o = {
                    Yb: 1
                },
                r = function(e, C) {
                    var f = this;
                    n.call(f);
                    e = b.rb(e);
                    var s, A, z, r, l = 0,
                        a, m, i, w, x, h, g, q, p, B = [],
                        y = [];

                    function v(a) {
                        a != -1 && y[a].Td(a == l)
                    }

                    function t(a) {
                        f.l(o.Yb, a * m)
                    }
                    f.W = e;
                    f.Xb = function(a) {
                        if (a != r) {
                            var d = l,
                                b = c.floor(a / m);
                            l = b;
                            r = a;
                            v(d);
                            v(b)
                        }
                    };
                    f.ic = function(a) {
                        b.U(e, a)
                    };
                    var u;
                    f.ec = function(D) {
                        if (!u) {
                            s = c.ceil(D / m);
                            l = 0;
                            var o = q + w,
                                r = p + x,
                                n = c.ceil(s / i) - 1;
                            A = q + o * (!h ? n : i - 1);
                            z = p + r * (h ? n : i - 1);
                            b.m(e, A);
                            b.n(e, z);
                            for (var f = 0; f < s; f++) {
                                var C = b.Vf();
                                b.Lf(C, f + 1);
                                var k = b.Wd(g, "numbertemplate", C, d);
                                b.G(k, "absolute");
                                var v = f % (n + 1);
                                b.F(k, !h ? o * v : f % i * o);
                                b.C(k, h ? r * v : c.floor(f / (n + 1)) * r);
                                b.V(e, k);
                                B[f] = k;
                                a.ac & 1 && b.a(k, "click", b.K(j, t, f));
                                a.ac & 2 && b.a(k, "mouseover", b.rc(b.K(j, t, f), k));
                                y[f] = b.lc(k)
                            }
                            u = d
                        }
                    };
                    f.Lb = a = b.J({
                        ud: 10,
                        sd: 10,
                        pd: 1,
                        ac: 1
                    }, C);
                    g = b.B(e, "prototype");
                    q = b.m(g);
                    p = b.n(g);
                    b.Nb(g, e);
                    m = a.kd || 1;
                    i = a.Fd || 1;
                    w = a.ud;
                    x = a.sd;
                    h = a.pd - 1;
                    a.Sb == k && b.A(e, "noscale", d);
                    a.nb && b.A(e, "autocenter", a.nb)
                },
                s = function(a, g, h) {
                    var c = this;
                    n.call(c);
                    var r, q, e, f, i;
                    b.m(a);
                    b.n(a);

                    function l(a) {
                        c.l(o.Yb, a, d)
                    }

                    function p(c) {
                        b.U(a, c || !h.zb && e == 0);
                        b.U(g, c || !h.zb && e >= q - h.ob);
                        r = c
                    }
                    c.Xb = function(b, a, c) {
                        if (c) e = a;
                        else {
                            e = b;
                            p(r)
                        }
                    };
                    c.ic = p;
                    var m;
                    c.ec = function(c) {
                        q = c;
                        e = 0;
                        if (!m) {
                            b.a(a, "click", b.K(j, l, -i));
                            b.a(g, "click", b.K(j, l, i));
                            b.lc(a);
                            b.lc(g);
                            m = d
                        }
                    };
                    c.Lb = f = b.J({
                        kd: 1
                    }, h);
                    i = f.kd;
                    if (f.Sb == k) {
                        b.A(a, "noscale", d);
                        b.A(g, "noscale", d)
                    }
                    if (f.nb) {
                        b.A(a, "autocenter", f.nb);
                        b.A(g, "autocenter", f.nb)
                    }
                };

            function q(e, d, c) {
                var a = this;
                m.call(a, 0, c);
                a.Rc = b.wc;
                a.Mc = 0;
                a.Dc = c
            }
            var t = function(n, f, l) {
                var a = this,
                    o, g = {},
                    i = f.ib,
                    c = new m(0, 0);
                m.call(a, 0, 0);

                function j(d, c) {
                    var a = {};
                    b.f(d, function(d, f) {
                        var e = g[f];
                        if (e) {
                            if (b.Tf(d)) d = j(d, c || f == "e");
                            else if (c)
                                if (b.bc(d)) d = o[d];
                            a[e] = d
                        }
                    });
                    return a
                }

                function k(e, c) {
                    var a = [],
                        d = b.yb(e);
                    b.f(d, function(d) {
                        var h = b.k(d, "u") == "caption";
                        if (h) {
                            var e = b.k(d, "t"),
                                g = i[b.qc(e)] || i[e],
                                f = {
                                    W: d,
                                    Zb: g
                                };
                            a.push(f)
                        }
                        if (c < 5) a = a.concat(k(d, c + 1))
                    });
                    return a
                }

                function r(e, f, a) {
                    b.f(f, function(h) {
                        var f = b.J(d, {}, j(h)),
                            g = b.Yc(f.Y);
                        delete f.Y;
                        if (f.j) {
                            f.q = f.j;
                            g.q = g.j;
                            delete f.j
                        }
                        if (f.i) {
                            f.v = f.i;
                            g.v = g.i;
                            delete f.i
                        }
                        var k = {
                                Y: g,
                                M: a.hb,
                                db: a.pb
                            },
                            i = new m(h.b, h.d, k, e, a, f);
                        c.vb(i);
                        a = b.he(a, f)
                    });
                    return a
                }

                function q(a) {
                    b.f(a, function(d) {
                        var a = d.W,
                            f = b.m(a),
                            e = b.n(a),
                            c = {
                                j: b.F(a),
                                i: b.C(a),
                                q: 0,
                                v: 0,
                                kb: 1,
                                xb: b.z(a) || 0,
                                fb: 0,
                                O: 0,
                                Q: 0,
                                u: 1,
                                p: 1,
                                ab: 0,
                                cb: 0,
                                N: 0,
                                Db: 0,
                                Hb: 0,
                                hb: f,
                                pb: e,
                                g: {
                                    i: 0,
                                    D: f,
                                    E: e,
                                    j: 0
                                }
                            };
                        c.Sc = c.j;
                        c.Tc = c.i;
                        r(a, d.Zb, c)
                    })
                }

                function t(g, f, h) {
                    var e = g.b - f;
                    if (e) {
                        var b = new m(f, e);
                        b.vb(c, d);
                        b.Pb(h);
                        a.vb(b)
                    }
                    a.se(g.d);
                    return e
                }

                function s(f) {
                    var d = c.mc(),
                        e = 0;
                    b.f(f, function(c, f) {
                        c = b.J({
                            d: l
                        }, c);
                        t(c, d, e);
                        d = c.b;
                        e += c.d;
                        if (!f || c.t == 2) {
                            a.Mc = d;
                            a.Dc = d + c.d
                        }
                    })
                }
                a.Rc = function() {
                    a.s(-1, d)
                };
                o = [h.nf, h.Af, h.of, h.pf, h.qf, h.rf, h.sf, h.tf, h.uf, h.vf, h.wf, h.xf, h.yf, h.zf, h.Ye, h.Xe, h.We, h.Ve, h.we, h.xe, h.ye, h.ze, h.Ae, h.Be, h.Ce, h.De, h.ve, h.Fe, h.Ge, h.He, h.Ie, h.Je, h.Ke, h.Le, h.Me, h.Ne, h.Oe];
                var u = {
                    i: "y",
                    j: "x",
                    E: "m",
                    D: "t",
                    fb: "r",
                    O: "rX",
                    Q: "rY",
                    u: "sX",
                    p: "sY",
                    ab: "tX",
                    cb: "tY",
                    N: "tZ",
                    Db: "kX",
                    Hb: "kY",
                    kb: "o",
                    Y: "e",
                    xb: "i",
                    g: "c"
                };
                b.f(u, function(b, a) {
                    g[b] = a
                });
                q(k(n, 1));
                c.s(-1);
                var p = f.ue || [],
                    e = [].concat(p[b.qc(b.k(n, "b"))] || []);
                e.push({
                    b: c.Ob(),
                    d: e.length ? 0 : l
                });
                s(e);
                a.s(-1)
            };
            jssor_1_slider_init = function() {
                var g = [
                        [{
                            b: 0,
                            d: 600,
                            y: -290,
                            e: {
                                y: 27
                            }
                        }],
                        [{
                            b: 0,
                            d: 1e3,
                            y: 185
                        }, {
                            b: 1e3,
                            d: 500,
                            o: -1
                        }, {
                            b: 1500,
                            d: 500,
                            o: 1
                        }, {
                            b: 2e3,
                            d: 1500,
                            r: 360
                        }, {
                            b: 3500,
                            d: 1e3,
                            rX: 30
                        }, {
                            b: 4500,
                            d: 500,
                            rX: -30
                        }, {
                            b: 5e3,
                            d: 1e3,
                            rY: 30
                        }, {
                            b: 6e3,
                            d: 500,
                            rY: -30
                        }, {
                            b: 6500,
                            d: 500,
                            sX: 1
                        }, {
                            b: 7e3,
                            d: 500,
                            sX: -1
                        }, {
                            b: 7500,
                            d: 500,
                            sY: 1
                        }, {
                            b: 8e3,
                            d: 500,
                            sY: -1
                        }, {
                            b: 8500,
                            d: 500,
                            kX: 30
                        }, {
                            b: 9e3,
                            d: 500,
                            kX: -30
                        }, {
                            b: 9500,
                            d: 500,
                            kY: 30
                        }, {
                            b: 1e4,
                            d: 500,
                            kY: -30
                        }, {
                            b: 10500,
                            d: 500,
                            c: {
                                x: 87.5,
                                t: -87.5
                            }
                        }, {
                            b: 11e3,
                            d: 500,
                            c: {
                                x: -87.5,
                                t: 87.5
                            }
                        }],
                        [{
                            b: 0,
                            d: 600,
                            x: 410,
                            e: {
                                x: 27
                            }
                        }],
                        [{
                            b: -1,
                            d: 1,
                            o: -1
                        }, {
                            b: 0,
                            d: 600,
                            o: 1,
                            e: {
                                o: 5
                            }
                        }],
                        [{
                            b: -1,
                            d: 1,
                            c: {
                                x: 175,
                                t: -175
                            }
                        }, {
                            b: 0,
                            d: 800,
                            c: {
                                x: -175,
                                t: 175
                            },
                            e: {
                                c: {
                                    x: 7,
                                    t: 7
                                }
                            }
                        }],
                        [{
                            b: -1,
                            d: 1,
                            o: -1
                        }, {
                            b: 0,
                            d: 600,
                            x: -570,
                            o: 1,
                            e: {
                                x: 6
                            }
                        }],
                        [{
                            b: -1,
                            d: 1,
                            o: -1,
                            r: -180
                        }, {
                            b: 0,
                            d: 800,
                            o: 1,
                            r: 180,
                            e: {
                                r: 7
                            }
                        }],
                        [{
                            b: 0,
                            d: 1e3,
                            y: 80,
                            e: {
                                y: 24
                            }
                        }, {
                            b: 1e3,
                            d: 1100,
                            x: 570,
                            y: 170,
                            o: -1,
                            r: 30,
                            sX: 9,
                            sY: 9,
                            e: {
                                x: 2,
                                y: 6,
                                r: 1,
                                sX: 5,
                                sY: 5
                            }
                        }],
                        [{
                            b: 2e3,
                            d: 600,
                            rY: 30
                        }],
                        [{
                            b: 0,
                            d: 500,
                            x: -105
                        }, {
                            b: 500,
                            d: 500,
                            x: 230
                        }, {
                            b: 1e3,
                            d: 500,
                            y: -120
                        }, {
                            b: 1500,
                            d: 500,
                            x: -70,
                            y: 120
                        }, {
                            b: 2600,
                            d: 500,
                            y: -80
                        }, {
                            b: 3100,
                            d: 900,
                            y: 160,
                            e: {
                                y: 24
                            }
                        }],
                        [{
                            b: 0,
                            d: 1e3,
                            o: -.4,
                            rX: 2,
                            rY: 1
                        }, {
                            b: 1e3,
                            d: 1e3,
                            rY: 1
                        }, {
                            b: 2e3,
                            d: 1e3,
                            rX: -1
                        }, {
                            b: 3e3,
                            d: 1e3,
                            rY: -1
                        }, {
                            b: 4e3,
                            d: 1e3,
                            o: .4,
                            rX: -1,
                            rY: -1
                        }]
                    ],
                    h = {
                        Qb: d,
                        gd: 2e3,
                        Cf: {
                            H: t,
                            ib: g,
                            ue: [
                                [{
                                    d: 2e3,
                                    b: 1e3
                                }]
                            ]
                        },
                        Te: {
                            H: s
                        },
                        Ue: {
                            H: r
                        }
                    },
                    e = new i("jssor_1", h);

                function a() {
                    var b = e.W.parentNode.clientWidth;
                    if (b) {
                        b = c.min(b, 600);
                        e.gg(b)
                    } else f.setTimeout(a, 30)
                }
                a();
                b.a(f, "load", a);
                b.a(f, "resize", a);
                b.a(f, "orientationchange", a)
            }
        })(window, document, Math, null, true, false)
