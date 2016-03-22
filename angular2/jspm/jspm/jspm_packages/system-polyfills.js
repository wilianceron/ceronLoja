/*
 * SystemJS Polyfills for URL and Promise providing IE8+ Support
 */
!function (t) {
    !function (t) {
        function e(t, n) {
            if ("string" != typeof t)throw new TypeError("URL must be a string");
            var o = String(t).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
            if (!o)throw new RangeError("Invalid URL format");
            var r = o[1] || "", i = o[2] || "", u = o[3] || "", c = o[4] || "", s = o[5] || "", f = o[6] || "", a = o[7] || "", h = o[8] || "", p = o[9] || "";
            if (void 0 !== n) {
                var l = n instanceof e ? n : new e(n), d = !r && !c && !i;
                !d || a || h || (h = l.search), d && "/" !== a[0] && (a = a ? (!l.host && !l.username || l.pathname ? "" : "/") + l.pathname.slice(0, l.pathname.lastIndexOf("/") + 1) + a : l.pathname);
                var y = [];
                a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (t) {
                    "/.." === t ? y.pop() : y.push(t)
                }), a = y.join("").replace(/^\//, "/" === a[0] ? "/" : ""), d && (f = l.port, s = l.hostname, c = l.host, u = l.password, i = l.username), r || (r = l.protocol)
            }
            "file:" == r && (a = a.replace(/\\/g, "/")), this.origin = c ? r + ("" !== r || "" !== c ? "//" : "") + c : "", this.href = r + (r && c || "file:" == r ? "//" : "") + ("" !== i ? i + ("" !== u ? ":" + u : "") + "@" : "") + c + a + h + p, this.protocol = r, this.username = i, this.password = u, this.host = c, this.hostname = s, this.port = f, this.pathname = a, this.search = h, this.hash = p
        }

        t.URLPolyfill = e
    }("undefined" != typeof self ? self : global), !function (e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof t && t.amd ? t(e) : "undefined" != typeof window ? window.Promise = e() : "undefined" != typeof global ? global.Promise = e() : "undefined" != typeof self && (self.Promise = e())
    }(function () {
        var t;
        return function e(t, n, o) {
            function r(u, c) {
                if (!n[u]) {
                    if (!t[u]) {
                        var s = "function" == typeof require && require;
                        if (!c && s)return s(u, !0);
                        if (i)return i(u, !0);
                        throw new Error("Cannot find module '" + u + "'")
                    }
                    var f = n[u] = {exports: {}};
                    t[u][0].call(f.exports, function (e) {
                        var n = t[u][1][e];
                        return r(n ? n : e)
                    }, f, f.exports, e, t, n, o)
                }
                return n[u].exports
            }

            for (var i = "function" == typeof require && require, u = 0; u < o.length; u++)r(o[u]);
            return r
        }({
            1: [function (t, e, n) {
                var o = t("../lib/decorators/unhandledRejection"), r = o(t("../lib/Promise"));
                e.exports = "undefined" != typeof global ? global.Promise = r : "undefined" != typeof self ? self.Promise = r : r
            }, {"../lib/Promise": 2, "../lib/decorators/unhandledRejection": 4}], 2: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function (t) {
                        var e = t("./makePromise"), n = t("./Scheduler"), o = t("./env").asap;
                        return e({scheduler: new n(o)})
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t(e)
                })
            }, {"./Scheduler": 3, "./env": 5, "./makePromise": 7}], 3: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function () {
                        function t(t) {
                            this._async = t, this._running = !1, this._queue = this, this._queueLen = 0, this._afterQueue = {}, this._afterQueueLen = 0;
                            var e = this;
                            this.drain = function () {
                                e._drain()
                            }
                        }

                        return t.prototype.enqueue = function (t) {
                            this._queue[this._queueLen++] = t, this.run()
                        }, t.prototype.afterQueue = function (t) {
                            this._afterQueue[this._afterQueueLen++] = t, this.run()
                        }, t.prototype.run = function () {
                            this._running || (this._running = !0, this._async(this.drain))
                        }, t.prototype._drain = function () {
                            for (var t = 0; t < this._queueLen; ++t)this._queue[t].run(), this._queue[t] = void 0;
                            for (this._queueLen = 0, this._running = !1, t = 0; t < this._afterQueueLen; ++t)this._afterQueue[t].run(), this._afterQueue[t] = void 0;
                            this._afterQueueLen = 0
                        }, t
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t()
                })
            }, {}], 4: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function (t) {
                        function e(t) {
                            throw t
                        }

                        function n() {
                        }

                        var o = t("../env").setTimer, r = t("../format");
                        return function (t) {
                            function i(t) {
                                t.handled || (l.push(t), a("Potentially unhandled rejection [" + t.id + "] " + r.formatError(t.value)))
                            }

                            function u(t) {
                                var e = l.indexOf(t);
                                e >= 0 && (l.splice(e, 1), h("Handled previous rejection [" + t.id + "] " + r.formatObject(t.value)))
                            }

                            function c(t, e) {
                                p.push(t, e), null === d && (d = o(s, 0))
                            }

                            function s() {
                                for (d = null; p.length > 0;)p.shift()(p.shift())
                            }

                            var f, a = n, h = n;
                            "undefined" != typeof console && (f = console, a = "undefined" != typeof f.error ? function (t) {
                                f.error(t)
                            } : function (t) {
                                f.log(t)
                            }, h = "undefined" != typeof f.info ? function (t) {
                                f.info(t)
                            } : function (t) {
                                f.log(t)
                            }), t.onPotentiallyUnhandledRejection = function (t) {
                                c(i, t)
                            }, t.onPotentiallyUnhandledRejectionHandled = function (t) {
                                c(u, t)
                            }, t.onFatalRejection = function (t) {
                                c(e, t.value)
                            };
                            var p = [], l = [], d = null;
                            return t
                        }
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t(e)
                })
            }, {"../env": 5, "../format": 6}], 5: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function (t) {
                        function e() {
                            return "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)
                        }

                        function n() {
                            return "function" == typeof MutationObserver && MutationObserver || "function" == typeof WebKitMutationObserver && WebKitMutationObserver
                        }

                        function o(t) {
                            function e() {
                                var t = n;
                                n = void 0, t()
                            }

                            var n, o = document.createTextNode(""), r = new t(e);
                            r.observe(o, {characterData: !0});
                            var i = 0;
                            return function (t) {
                                n = t, o.data = i ^= 1
                            }
                        }

                        var r, i = "undefined" != typeof setTimeout && setTimeout, u = function (t, e) {
                            return setTimeout(t, e)
                        }, c = function (t) {
                            return clearTimeout(t)
                        }, s = function (t) {
                            return i(t, 0)
                        };
                        if (e())s = function (t) {
                            return process.nextTick(t)
                        }; else if (r = n())s = o(r); else if (!i) {
                            var f = t, a = f("vertx");
                            u = function (t, e) {
                                return a.setTimer(e, t)
                            }, c = a.cancelTimer, s = a.runOnLoop || a.runOnContext
                        }
                        return {setTimer: u, clearTimer: c, asap: s}
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t(e)
                })
            }, {}], 6: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function () {
                        function t(t) {
                            var n = "object" == typeof t && null !== t && (t.stack || t.message) ? t.stack || t.message : e(t);
                            return t instanceof Error ? n : n + " (WARNING: non-Error used)"
                        }

                        function e(t) {
                            var e = String(t);
                            return "[object Object]" === e && "undefined" != typeof JSON && (e = n(t, e)), e
                        }

                        function n(t, e) {
                            try {
                                return JSON.stringify(t)
                            } catch (n) {
                                return e
                            }
                        }

                        return {formatError: t, formatObject: e, tryStringify: n}
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t()
                })
            }, {}], 7: [function (e, n, o) {
                !function (t) {
                    "use strict";
                    t(function () {
                        return function (t) {
                            function e(t, e) {
                                this._handler = t === j ? e : n(t)
                            }

                            function n(t) {
                                function e(t) {
                                    r.resolve(t)
                                }

                                function n(t) {
                                    r.reject(t)
                                }

                                function o(t) {
                                    r.notify(t)
                                }

                                var r = new b;
                                try {
                                    t(e, n, o)
                                } catch (i) {
                                    n(i)
                                }
                                return r
                            }

                            function o(t) {
                                return U(t) ? t : new e(j, new g(v(t)))
                            }

                            function r(t) {
                                return new e(j, new g(new q(t)))
                            }

                            function i() {
                                return Z
                            }

                            function u() {
                                return new e(j, new b)
                            }

                            function c(t, e) {
                                var n = new b(t.receiver, t.join().context);
                                return new e(j, n)
                            }

                            function s(t) {
                                return a(z, null, t)
                            }

                            function f(t, e) {
                                return a(M, t, e)
                            }

                            function a(t, n, o) {
                                function r(e, r, u) {
                                    u.resolved || h(o, i, e, t(n, r, e), u)
                                }

                                function i(t, e, n) {
                                    a[t] = e, 0 === --f && n.become(new R(a))
                                }

                                for (var u, c = "function" == typeof n ? r : i, s = new b, f = o.length >>> 0, a = new Array(f), p = 0; p < o.length && !s.resolved; ++p)u = o[p], void 0 !== u || p in o ? h(o, c, p, u, s) : --f;
                                return 0 === f && s.become(new R(a)), new e(j, s)
                            }

                            function h(t, e, n, o, r) {
                                if (k(o)) {
                                    var i = m(o), u = i.state();
                                    0 === u ? i.fold(e, n, void 0, r) : u > 0 ? e(n, i.value, r) : (r.become(i), p(t, n + 1, i))
                                } else e(n, o, r)
                            }

                            function p(t, e, n) {
                                for (var o = e; o < t.length; ++o)l(v(t[o]), n)
                            }

                            function l(t, e) {
                                if (t !== e) {
                                    var n = t.state();
                                    0 === n ? t.visit(t, void 0, t._unreport) : 0 > n && t._unreport()
                                }
                            }

                            function d(t) {
                                return "object" != typeof t || null === t ? r(new TypeError("non-iterable passed to race()")) : 0 === t.length ? i() : 1 === t.length ? o(t[0]) : y(t)
                            }

                            function y(t) {
                                var n, o, r, i = new b;
                                for (n = 0; n < t.length; ++n)if (o = t[n], void 0 !== o || n in t) {
                                    if (r = v(o), 0 !== r.state()) {
                                        i.become(r), p(t, n + 1, r);
                                        break
                                    }
                                    r.visit(i, i.resolve, i.reject)
                                }
                                return new e(j, i)
                            }

                            function v(t) {
                                return U(t) ? t._handler.join() : k(t) ? w(t) : new R(t)
                            }

                            function m(t) {
                                return U(t) ? t._handler.join() : w(t)
                            }

                            function w(t) {
                                try {
                                    var e = t.then;
                                    return "function" == typeof e ? new x(e, t) : new R(t)
                                } catch (n) {
                                    return new q(n)
                                }
                            }

                            function j() {
                            }

                            function _() {
                            }

                            function b(t, n) {
                                e.createContext(this, n), this.consumers = void 0, this.receiver = t, this.handler = void 0, this.resolved = !1
                            }

                            function g(t) {
                                this.handler = t
                            }

                            function x(t, e) {
                                b.call(this), K.enqueue(new L(t, e, this))
                            }

                            function R(t) {
                                e.createContext(this), this.value = t
                            }

                            function q(t) {
                                e.createContext(this), this.id = ++X, this.value = t, this.handled = !1, this.reported = !1, this._report()
                            }

                            function P(t, e) {
                                this.rejection = t, this.context = e
                            }

                            function C(t) {
                                this.rejection = t
                            }

                            function O() {
                                return new q(new TypeError("Promise cycle"))
                            }

                            function T(t, e) {
                                this.continuation = t, this.handler = e
                            }

                            function E(t, e) {
                                this.handler = e, this.value = t
                            }

                            function L(t, e, n) {
                                this._then = t, this.thenable = e, this.resolver = n
                            }

                            function Q(t, e, n, o, r) {
                                try {
                                    t.call(e, n, o, r)
                                } catch (i) {
                                    o(i)
                                }
                            }

                            function S(t, e, n, o) {
                                this.f = t, this.z = e, this.c = n, this.to = o, this.resolver = V, this.receiver = this
                            }

                            function U(t) {
                                return t instanceof e
                            }

                            function k(t) {
                                return ("object" == typeof t || "function" == typeof t) && null !== t
                            }

                            function H(t, n, o, r) {
                                return "function" != typeof t ? r.become(n) : (e.enterContext(n), $(t, n.value, o, r), void e.exitContext())
                            }

                            function N(t, n, o, r, i) {
                                return "function" != typeof t ? i.become(o) : (e.enterContext(o), F(t, n, o.value, r, i), void e.exitContext())
                            }

                            function J(t, n, o, r, i) {
                                return "function" != typeof t ? i.notify(n) : (e.enterContext(o), I(t, n, r, i), void e.exitContext())
                            }

                            function M(t, e, n) {
                                try {
                                    return t(e, n)
                                } catch (o) {
                                    return r(o)
                                }
                            }

                            function $(t, e, n, o) {
                                try {
                                    o.become(v(t.call(n, e)))
                                } catch (r) {
                                    o.become(new q(r))
                                }
                            }

                            function F(t, e, n, o, r) {
                                try {
                                    t.call(o, e, n, r)
                                } catch (i) {
                                    r.become(new q(i))
                                }
                            }

                            function I(t, e, n, o) {
                                try {
                                    o.notify(t.call(n, e))
                                } catch (r) {
                                    o.notify(r)
                                }
                            }

                            function W(t, e) {
                                e.prototype = G(t.prototype), e.prototype.constructor = e
                            }

                            function z(t, e) {
                                return e
                            }

                            function A() {
                            }

                            function B() {
                                return "undefined" != typeof process && null !== process && "function" == typeof process.emit ? function (t, e) {
                                    return "unhandledRejection" === t ? process.emit(t, e.value, e) : process.emit(t, e)
                                } : "undefined" != typeof self && "function" == typeof CustomEvent ? function (t, e, n) {
                                    var o = !1;
                                    try {
                                        var r = new n("unhandledRejection");
                                        o = r instanceof n
                                    } catch (i) {
                                    }
                                    return o ? function (t, o) {
                                        var r = new n(t, {
                                            detail: {reason: o.value, key: o},
                                            bubbles: !1,
                                            cancelable: !0
                                        });
                                        return !e.dispatchEvent(r)
                                    } : t
                                }(A, self, CustomEvent) : A
                            }

                            var K = t.scheduler, D = B(), G = Object.create || function (t) {
                                    function e() {
                                    }

                                    return e.prototype = t, new e
                                };
                            e.resolve = o, e.reject = r, e.never = i, e._defer = u, e._handler = v, e.prototype.then = function (t, e, n) {
                                var o = this._handler, r = o.join().state();
                                if ("function" != typeof t && r > 0 || "function" != typeof e && 0 > r)return new this.constructor(j, o);
                                var i = this._beget(), u = i._handler;
                                return o.chain(u, o.receiver, t, e, n), i
                            }, e.prototype["catch"] = function (t) {
                                return this.then(void 0, t)
                            }, e.prototype._beget = function () {
                                return c(this._handler, this.constructor)
                            }, e.all = s, e.race = d, e._traverse = f, e._visitRemaining = p, j.prototype.when = j.prototype.become = j.prototype.notify = j.prototype.fail = j.prototype._unreport = j.prototype._report = A, j.prototype._state = 0, j.prototype.state = function () {
                                return this._state
                            }, j.prototype.join = function () {
                                for (var t = this; void 0 !== t.handler;)t = t.handler;
                                return t
                            }, j.prototype.chain = function (t, e, n, o, r) {
                                this.when({resolver: t, receiver: e, fulfilled: n, rejected: o, progress: r})
                            }, j.prototype.visit = function (t, e, n, o) {
                                this.chain(V, t, e, n, o)
                            }, j.prototype.fold = function (t, e, n, o) {
                                this.when(new S(t, e, n, o))
                            }, W(j, _), _.prototype.become = function (t) {
                                t.fail()
                            };
                            var V = new _;
                            W(j, b), b.prototype._state = 0, b.prototype.resolve = function (t) {
                                this.become(v(t))
                            }, b.prototype.reject = function (t) {
                                this.resolved || this.become(new q(t))
                            }, b.prototype.join = function () {
                                if (!this.resolved)return this;
                                for (var t = this; void 0 !== t.handler;)if (t = t.handler, t === this)return this.handler = O();
                                return t
                            }, b.prototype.run = function () {
                                var t = this.consumers, e = this.handler;
                                this.handler = this.handler.join(), this.consumers = void 0;
                                for (var n = 0; n < t.length; ++n)e.when(t[n])
                            }, b.prototype.become = function (t) {
                                this.resolved || (this.resolved = !0, this.handler = t, void 0 !== this.consumers && K.enqueue(this), void 0 !== this.context && t._report(this.context))
                            }, b.prototype.when = function (t) {
                                this.resolved ? K.enqueue(new T(t, this.handler)) : void 0 === this.consumers ? this.consumers = [t] : this.consumers.push(t)
                            }, b.prototype.notify = function (t) {
                                this.resolved || K.enqueue(new E(t, this))
                            }, b.prototype.fail = function (t) {
                                var e = "undefined" == typeof t ? this.context : t;
                                this.resolved && this.handler.join().fail(e)
                            }, b.prototype._report = function (t) {
                                this.resolved && this.handler.join()._report(t)
                            }, b.prototype._unreport = function () {
                                this.resolved && this.handler.join()._unreport()
                            }, W(j, g), g.prototype.when = function (t) {
                                K.enqueue(new T(t, this))
                            }, g.prototype._report = function (t) {
                                this.join()._report(t)
                            }, g.prototype._unreport = function () {
                                this.join()._unreport()
                            }, W(b, x), W(j, R), R.prototype._state = 1, R.prototype.fold = function (t, e, n, o) {
                                N(t, e, this, n, o)
                            }, R.prototype.when = function (t) {
                                H(t.fulfilled, this, t.receiver, t.resolver)
                            };
                            var X = 0;
                            W(j, q), q.prototype._state = -1, q.prototype.fold = function (t, e, n, o) {
                                o.become(this)
                            }, q.prototype.when = function (t) {
                                "function" == typeof t.rejected && this._unreport(), H(t.rejected, this, t.receiver, t.resolver)
                            }, q.prototype._report = function (t) {
                                K.afterQueue(new P(this, t))
                            }, q.prototype._unreport = function () {
                                this.handled || (this.handled = !0, K.afterQueue(new C(this)))
                            }, q.prototype.fail = function (t) {
                                this.reported = !0, D("unhandledRejection", this), e.onFatalRejection(this, void 0 === t ? this.context : t)
                            }, P.prototype.run = function () {
                                this.rejection.handled || this.rejection.reported || (this.rejection.reported = !0, D("unhandledRejection", this.rejection) || e.onPotentiallyUnhandledRejection(this.rejection, this.context))
                            }, C.prototype.run = function () {
                                this.rejection.reported && (D("rejectionHandled", this.rejection) || e.onPotentiallyUnhandledRejectionHandled(this.rejection))
                            }, e.createContext = e.enterContext = e.exitContext = e.onPotentiallyUnhandledRejection = e.onPotentiallyUnhandledRejectionHandled = e.onFatalRejection = A;
                            var Y = new j, Z = new e(j, Y);
                            return T.prototype.run = function () {
                                this.handler.join().when(this.continuation)
                            }, E.prototype.run = function () {
                                var t = this.handler.consumers;
                                if (void 0 !== t)for (var e, n = 0; n < t.length; ++n)e = t[n], J(e.progress, this.value, this.handler, e.receiver, e.resolver)
                            }, L.prototype.run = function () {
                                function t(t) {
                                    o.resolve(t)
                                }

                                function e(t) {
                                    o.reject(t)
                                }

                                function n(t) {
                                    o.notify(t)
                                }

                                var o = this.resolver;
                                Q(this._then, this.thenable, t, e, n)
                            }, S.prototype.fulfilled = function (t) {
                                this.f.call(this.c, this.z, t, this.to)
                            }, S.prototype.rejected = function (t) {
                                this.to.reject(t)
                            }, S.prototype.progress = function (t) {
                                this.to.notify(t)
                            }, e
                        }
                    })
                }("function" == typeof t && t.amd ? t : function (t) {
                    n.exports = t()
                })
            }, {}]
        }, {}, [1])(1)
    }), "undefined" != typeof systemJSBootstrap && systemJSBootstrap()
}();
//# sourceMappingURL=system-polyfills.js.map
