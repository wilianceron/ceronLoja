/*
 * SystemJS v0.19.24
 */
!function () {
    function e() {
        !function (e) {
            function t(e, t) {
                if (!e.originalErr)for (var n = (e.stack || e.message || e).split("\n"), r = [], a = 0; a < n.length; a++)("undefined" == typeof $__curScript || -1 == n[a].indexOf($__curScript.src)) && r.push(n[a]);
                var o = (r ? r.join("\n	") : e.message) + "\n	" + t;
                T || (o = o.replace(D ? /file:\/\/\//g : /file:\/\//g, ""));
                var i = new Error(o, e.fileName, e.lineNumber);
                return T ? i.stack = null : i.stack = o, i.originalErr = e.originalErr || e, i
            }

            function n(e, n, r) {
                try {
                    new Function(e).call(r)
                } catch (a) {
                    throw t(a, "Evaluating " + n)
                }
            }

            function r() {
            }

            function a(t) {
                this._loader = {
                    loaderObj: this,
                    loads: [],
                    modules: {},
                    importPromises: {},
                    moduleRecords: {}
                }, C(this, "global", {
                    get: function () {
                        return e
                    }
                })
            }

            function o() {
                a.call(this), this.paths = {}
            }

            function i(e, t) {
                var n, r = "", a = 0;
                for (var o in e) {
                    var i = o.split("*");
                    if (i.length > 2)throw new TypeError("Only one wildcard in a path is permitted");
                    if (1 == i.length) {
                        if (t == o)return e[o];
                        if (t.substr(0, o.length - 1) == o.substr(0, o.length - 1) && (t.length < o.length || t[o.length - 1] == o[o.length - 1]) && "/" == e[o][e[o].length - 1])return e[o].substr(0, e[o].length - 1) + (t.length > o.length ? "/" + t.substr(o.length) : "")
                    } else {
                        var s = i[0].length;
                        s >= a && t.substr(0, i[0].length) == i[0] && t.substr(t.length - i[1].length) == i[1] && (a = s, r = o, n = t.substr(i[0].length, t.length - i[1].length - i[0].length))
                    }
                }
                var l = e[r];
                return "string" == typeof n && (l = l.replace("*", n)), l
            }

            function s() {
            }

            function l() {
                o.call(this), B.call(this)
            }

            function u() {
            }

            function d(e, t) {
                l.prototype[e] = t(l.prototype[e] || function () {
                    })
            }

            function c(e) {
                B = e(B || function () {
                    })
            }

            function f(e) {
                for (var t = [], n = [], r = 0, a = e.length; a > r; r++) {
                    var o = J.call(t, e[r]);
                    -1 === o ? (t.push(e[r]), n.push([r])) : n[o].push(r)
                }
                return {names: t, indices: n}
            }

            function m(e) {
                var t = {};
                if ("object" == typeof e || "function" == typeof e)if (H) {
                    var n;
                    for (var r in e)(n = Object.getOwnPropertyDescriptor(e, r)) && C(t, r, n)
                } else {
                    var a = e && e.hasOwnProperty;
                    for (var r in e)(!a || e.hasOwnProperty(r)) && (t[r] = e[r])
                }
                return t["default"] = e, C(t, "__useDefault", {value: !0}), t
            }

            function p(e, t, n) {
                for (var r in t)n && r in e || (e[r] = t[r]);
                return e
            }

            function h(e, t, n) {
                for (var r in t) {
                    var a = t[r];
                    r in e ? a instanceof Array && e[r]instanceof Array ? e[r] = [].concat(n ? a : e[r]).concat(n ? e[r] : a) : "object" == typeof a && null !== a && "object" == typeof e[r] ? e[r] = p(p({}, e[r]), a, n) : n || (e[r] = a) : e[r] = a
                }
            }

            function g(e) {
                this.warnings && "undefined" != typeof console && console.warn
            }

            function v(e, t) {
                for (var n = e.split("."); n.length;)t = t[n.shift()];
                return t
            }

            function y() {
                if (Y[this.baseURL])return Y[this.baseURL];
                "/" != this.baseURL[this.baseURL.length - 1] && (this.baseURL += "/");
                var e = new A(this.baseURL, U);
                return this.baseURL = e.href, Y[this.baseURL] = e
            }

            function b(e, t) {
                var n, r = 0;
                for (var a in e)if (t.substr(0, a.length) == a && (t.length == a.length || "/" == t[a.length])) {
                    var o = a.split("/").length;
                    if (r >= o)continue;
                    n = a, r = o
                }
                return n
            }

            function w(e) {
                this.set("@system-env", this.newModule({
                    browser: T,
                    node: !!this._nodeRequire,
                    production: e,
                    "default": !0
                }))
            }

            function x(e) {
                return ("." != e[0] || !!e[1] && "/" != e[1] && "." != e[1]) && "/" != e[0] && !e.match(V)
            }

            function S(e, t) {
                return t && (t = t.replace(/#/g, "%05")), new A(e, t || Z).href.replace(/%05/g, "#")
            }

            function E(e, t) {
                return new A(t, y.call(e)).href
            }

            function k(e, t) {
                if (!x(e))return S(e, t);
                var n = b(this.map, e);
                if (n && (e = this.map[n] + e.substr(n.length), !x(e)))return S(e);
                if (this.has(e))return e;
                if ("@node/" == e.substr(0, 6) && -1 != K.indexOf(e.substr(6))) {
                    if (!this._nodeRequire)throw new TypeError("Error loading " + e + ". Can only load node core modules in Node.");
                    return this.set(e, this.newModule(m(this._nodeRequire(e.substr(6))))), e
                }
                var r = i(this.paths, e);
                return r && !x(r) ? S(r) : E(this, r || e)
            }

            function j(e) {
                var t = e.match(ee);
                return t && "System.register" == e.substr(t[0].length, 15)
            }

            function P() {
                return {
                    name: null,
                    deps: null,
                    originalIndices: null,
                    declare: null,
                    execute: null,
                    executingRequire: !1,
                    declarative: !1,
                    normalizedDeps: null,
                    groupIndex: null,
                    evaluated: !1,
                    module: null,
                    esModule: null,
                    esmExports: !1
                }
            }

            function _(t) {
                if ("string" == typeof t)return v(t, e);
                if (!(t instanceof Array))throw new Error("Global exports must be a string or array.");
                for (var n = {}, r = !0, a = 0; a < t.length; a++) {
                    var o = v(t[a], e);
                    r && (n["default"] = o, r = !1), n[t[a].split(".").pop()] = o
                }
                return n
            }

            function O(e) {
                var t, n, r, r = "~" == e[0], a = e.lastIndexOf("|");
                return -1 != a ? (t = e.substr(a + 1), n = e.substr(r, a - r) || "@system-env") : (t = null, n = e.substr(r)), {
                    module: n,
                    prop: t,
                    negate: r
                }
            }

            function R(e) {
                return (e.negate ? "~" : "") + e.module + (e.prop ? "|" + e.prop : "")
            }

            function z(e, t, n) {
                return this["import"](e.module, t).then(function (t) {
                    if (e.prop ? t = v(e.prop, t) : "object" == typeof t && t + "" == "Module" && (t = t["default"]), n && "boolean" != typeof t)throw new TypeError("Condition " + R(e) + " did not resolve to a boolean.");
                    return e.negate ? !t : t
                })
            }

            function M(e, t) {
                var n = e.match(te);
                if (!n)return Promise.resolve(e);
                var r = O(n[0].substr(2, n[0].length - 3));
                return this.builder ? this.normalize(r.module, t).then(function (t) {
                    return r.module = t, e.replace(te, "#{" + R(r) + "}")
                }) : z.call(this, r, t, !1).then(function (n) {
                    if ("string" != typeof n)throw new TypeError("The condition value for " + e + " doesn't resolve to a string.");
                    if (-1 != n.indexOf("/"))throw new TypeError("Unabled to interpolate conditional " + e + (t ? " in " + t : "") + "\n	The condition value " + n + ' cannot contain a "/" separator.');
                    return e.replace(te, n)
                })
            }

            function I(e, t) {
                var n = e.lastIndexOf("#?");
                if (-1 == n)return Promise.resolve(e);
                var r = O(e.substr(n + 2));
                return this.builder ? this.normalize(r.module, t).then(function (t) {
                    return r.module = t, e.substr(0, n) + "#?" + R(r)
                }) : z.call(this, r, t, !0).then(function (t) {
                    return t ? e.substr(0, n) : "@empty"
                })
            }

            var L = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts, T = "undefined" != typeof window && "undefined" != typeof document, D = "undefined" != typeof process && "undefined" != typeof process.platform && !!process.platform.match(/^win/);
            e.console || (e.console = {
                assert: function () {
                }
            });
            var C, J = Array.prototype.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                    return -1
                };
            !function () {
                try {
                    Object.defineProperty({}, "a", {}) && (C = Object.defineProperty)
                } catch (e) {
                    C = function (e, t, n) {
                        try {
                            e[t] = n.value || n.get.call(e)
                        } catch (r) {
                        }
                    }
                }
            }();
            var U;
            if ("undefined" != typeof document && document.getElementsByTagName) {
                if (U = document.baseURI, !U) {
                    var q = document.getElementsByTagName("base");
                    U = q[0] && q[0].href || window.location.href
                }
                U = U.split("#")[0].split("?")[0], U = U.substr(0, U.lastIndexOf("/") + 1)
            } else if ("undefined" != typeof process && process.cwd)U = "file://" + (D ? "/" : "") + process.cwd() + "/", D && (U = U.replace(/\\/g, "/")); else {
                if ("undefined" == typeof location)throw new TypeError("No environment baseURI");
                U = e.location.href
            }
            var A = e.URLPolyfill || e.URL;
            C(r.prototype, "toString", {
                value: function () {
                    return "Module"
                }
            }), function () {
                function o(e) {
                    return {status: "loading", name: e, linkSets: [], dependencies: [], metadata: {}}
                }

                function i(e, t, n) {
                    return new Promise(c({
                        step: n.address ? "fetch" : "locate",
                        loader: e,
                        moduleName: t,
                        moduleMetadata: n && n.metadata || {},
                        moduleSource: n.source,
                        moduleAddress: n.address
                    }))
                }

                function s(e, t, n, r) {
                    return new Promise(function (a, o) {
                        a(e.loaderObj.normalize(t, n, r))
                    }).then(function (t) {
                        var n;
                        if (e.modules[t])return n = o(t), n.status = "linked", n.module = e.modules[t], n;
                        for (var r = 0, a = e.loads.length; a > r; r++)if (n = e.loads[r], n.name == t)return n;
                        return n = o(t), e.loads.push(n), l(e, n), n
                    })
                }

                function l(e, t) {
                    u(e, t, Promise.resolve().then(function () {
                        return e.loaderObj.locate({name: t.name, metadata: t.metadata})
                    }))
                }

                function u(e, t, n) {
                    d(e, t, n.then(function (n) {
                        return "loading" == t.status ? (t.address = n, e.loaderObj.fetch({
                            name: t.name,
                            metadata: t.metadata,
                            address: n
                        })) : void 0
                    }))
                }

                function d(t, r, a) {
                    a.then(function (a) {
                        return "loading" == r.status ? Promise.resolve(t.loaderObj.translate({
                            name: r.name,
                            metadata: r.metadata,
                            address: r.address,
                            source: a
                        })).then(function (e) {
                            return r.source = e, t.loaderObj.instantiate({
                                name: r.name,
                                metadata: r.metadata,
                                address: r.address,
                                source: e
                            })
                        }).then(function (a) {
                            if (void 0 === a)return r.address = r.address || "<Anonymous Module " + ++k + ">", r.isDeclarative = !0, E.call(t.loaderObj, r).then(function (t) {
                                var a = e.System, o = a.register;
                                a.register = function (e, t, n) {
                                    "string" != typeof e && (n = t, t = e), r.declare = n, r.depsList = t
                                }, n(t, r.address, {}), a.register = o
                            });
                            if ("object" != typeof a)throw TypeError("Invalid instantiate return value");
                            r.depsList = a.deps || [], r.execute = a.execute, r.isDeclarative = !1
                        }).then(function () {
                            r.dependencies = [];
                            for (var e = r.depsList, n = [], a = 0, o = e.length; o > a; a++)(function (e, a) {
                                n.push(s(t, e, r.name, r.address).then(function (t) {
                                    if (r.dependencies[a] = {
                                            key: e,
                                            value: t.name
                                        }, "linked" != t.status)for (var n = r.linkSets.concat([]), o = 0, i = n.length; i > o; o++)m(n[o], t)
                                }))
                            })(e[a], a);
                            return Promise.all(n)
                        }).then(function () {
                            r.status = "loaded";
                            for (var e = r.linkSets.concat([]), t = 0, n = e.length; n > t; t++)h(e[t], r)
                        }) : void 0
                    })["catch"](function (e) {
                        r.status = "failed", r.exception = e;
                        for (var t = r.linkSets.concat([]), n = 0, a = t.length; a > n; n++)g(t[n], r, e)
                    })
                }

                function c(e) {
                    return function (t, n) {
                        var r = e.loader, a = e.moduleName, i = e.step;
                        if (r.modules[a])throw new TypeError('"' + a + '" already exists in the module table');
                        for (var s, c = 0, m = r.loads.length; m > c; c++)if (r.loads[c].name == a && (s = r.loads[c], "translate" != i || s.source || (s.address = e.moduleAddress, d(r, s, Promise.resolve(e.moduleSource))), s.linkSets.length && s.linkSets[0].loads[0].name == s.name))return s.linkSets[0].done.then(function () {
                            t(s)
                        });
                        var p = s || o(a);
                        p.metadata = e.moduleMetadata;
                        var h = f(r, p);
                        r.loads.push(p), t(h.done), "locate" == i ? l(r, p) : "fetch" == i ? u(r, p, Promise.resolve(e.moduleAddress)) : (p.address = e.moduleAddress, d(r, p, Promise.resolve(e.moduleSource)))
                    }
                }

                function f(e, t) {
                    var n = {loader: e, loads: [], startingLoad: t, loadingCount: 0};
                    return n.done = new Promise(function (e, t) {
                        n.resolve = e, n.reject = t
                    }), m(n, t), n
                }

                function m(e, t) {
                    if ("failed" != t.status) {
                        for (var n = 0, r = e.loads.length; r > n; n++)if (e.loads[n] == t)return;
                        e.loads.push(t), t.linkSets.push(e), "loaded" != t.status && e.loadingCount++;
                        for (var a = e.loader, n = 0, r = t.dependencies.length; r > n; n++)if (t.dependencies[n]) {
                            var o = t.dependencies[n].value;
                            if (!a.modules[o])for (var i = 0, s = a.loads.length; s > i; i++)if (a.loads[i].name == o) {
                                m(e, a.loads[i]);
                                break
                            }
                        }
                    }
                }

                function p(e) {
                    var t = !1;
                    try {
                        w(e, function (n, r) {
                            g(e, n, r), t = !0
                        })
                    } catch (n) {
                        g(e, null, n), t = !0
                    }
                    return t
                }

                function h(e, t) {
                    if (e.loadingCount--, !(e.loadingCount > 0)) {
                        var n = e.startingLoad;
                        if (e.loader.loaderObj.execute === !1) {
                            for (var r = [].concat(e.loads), a = 0, o = r.length; o > a; a++) {
                                var t = r[a];
                                t.module = t.isDeclarative ? {
                                    name: t.name,
                                    module: j({}),
                                    evaluated: !0
                                } : {module: j({})}, t.status = "linked", v(e.loader, t)
                            }
                            return e.resolve(n)
                        }
                        var i = p(e);
                        i || e.resolve(n)
                    }
                }

                function g(e, n, r) {
                    var a = e.loader;
                    e:if (n)if (e.loads[0].name == n.name)r = t(r, "Error loading " + n.name); else {
                        for (var o = 0; o < e.loads.length; o++)for (var i = e.loads[o], s = 0; s < i.dependencies.length; s++) {
                            var l = i.dependencies[s];
                            if (l.value == n.name) {
                                r = t(r, "Error loading " + n.name + ' as "' + l.key + '" from ' + i.name);
                                break e
                            }
                        }
                        r = t(r, "Error loading " + n.name + " from " + e.loads[0].name)
                    } else r = t(r, "Error linking " + e.loads[0].name);
                    for (var u = e.loads.concat([]), o = 0, d = u.length; d > o; o++) {
                        var n = u[o];
                        a.loaderObj.failed = a.loaderObj.failed || [], -1 == J.call(a.loaderObj.failed, n) && a.loaderObj.failed.push(n);
                        var c = J.call(n.linkSets, e);
                        if (n.linkSets.splice(c, 1), 0 == n.linkSets.length) {
                            var f = J.call(e.loader.loads, n);
                            -1 != f && e.loader.loads.splice(f, 1)
                        }
                    }
                    e.reject(r)
                }

                function v(e, t) {
                    if (e.loaderObj.trace) {
                        e.loaderObj.loads || (e.loaderObj.loads = {});
                        var n = {};
                        t.dependencies.forEach(function (e) {
                            n[e.key] = e.value
                        }), e.loaderObj.loads[t.name] = {
                            name: t.name,
                            deps: t.dependencies.map(function (e) {
                                return e.key
                            }),
                            depMap: n,
                            address: t.address,
                            metadata: t.metadata,
                            source: t.source,
                            kind: t.isDeclarative ? "declarative" : "dynamic"
                        }
                    }
                    t.name && (e.modules[t.name] = t.module);
                    var r = J.call(e.loads, t);
                    -1 != r && e.loads.splice(r, 1);
                    for (var a = 0, o = t.linkSets.length; o > a; a++)r = J.call(t.linkSets[a].loads, t), -1 != r && t.linkSets[a].loads.splice(r, 1);
                    t.linkSets.splice(0, t.linkSets.length)
                }

                function y(e, t, n) {
                    try {
                        var a = t.execute()
                    } catch (o) {
                        return void n(t, o)
                    }
                    return a && a instanceof r ? a : void n(t, new TypeError("Execution must define a Module instance"))
                }

                function b(e, t, n) {
                    var r = e._loader.importPromises;
                    return r[t] = n.then(function (e) {
                        return r[t] = void 0, e
                    }, function (e) {
                        throw r[t] = void 0, e
                    })
                }

                function w(e, t) {
                    var n = e.loader;
                    if (e.loads.length)for (var r = e.loads.concat([]), a = 0; a < r.length; a++) {
                        var o = r[a], i = y(e, o, t);
                        if (!i)return;
                        o.module = {name: o.name, module: i}, o.status = "linked", v(n, o)
                    }
                }

                function x(e, t) {
                    return t.module.module
                }

                function S() {
                }

                function E() {
                    throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")
                }

                var k = 0;
                a.prototype = {
                    constructor: a, define: function (e, t, n) {
                        if (this._loader.importPromises[e])throw new TypeError("Module is already loading.");
                        return b(this, e, new Promise(c({
                            step: "translate",
                            loader: this._loader,
                            moduleName: e,
                            moduleMetadata: n && n.metadata || {},
                            moduleSource: t,
                            moduleAddress: n && n.address
                        })))
                    }, "delete": function (e) {
                        var t = this._loader;
                        return delete t.importPromises[e], delete t.moduleRecords[e], t.modules[e] ? delete t.modules[e] : !1
                    }, get: function (e) {
                        return this._loader.modules[e] ? (S(this._loader.modules[e], [], this), this._loader.modules[e].module) : void 0
                    }, has: function (e) {
                        return !!this._loader.modules[e]
                    }, "import": function (e, t, n) {
                        "object" == typeof t && (t = t.name);
                        var r = this;
                        return Promise.resolve(r.normalize(e, t)).then(function (e) {
                            var t = r._loader;
                            return t.modules[e] ? (S(t.modules[e], [], t._loader), t.modules[e].module) : t.importPromises[e] || b(r, e, i(t, e, {}).then(function (n) {
                                return delete t.importPromises[e], x(t, n)
                            }))
                        })
                    }, load: function (e) {
                        var t = this._loader;
                        return t.modules[e] ? Promise.resolve() : t.importPromises[e] || b(this, e, new Promise(c({
                            step: "locate",
                            loader: t,
                            moduleName: e,
                            moduleMetadata: {},
                            moduleSource: void 0,
                            moduleAddress: void 0
                        })).then(function () {
                            delete t.importPromises[e]
                        }))
                    }, module: function (e, t) {
                        var n = o();
                        n.address = t && t.address;
                        var r = f(this._loader, n), a = Promise.resolve(e), i = this._loader, s = r.done.then(function () {
                            return x(i, n)
                        });
                        return d(i, n, a), s
                    }, newModule: function (e) {
                        if ("object" != typeof e)throw new TypeError("Expected object");
                        var t = new r, n = [];
                        if (Object.getOwnPropertyNames && null != e)n = Object.getOwnPropertyNames(e); else for (var a in e)n.push(a);
                        for (var o = 0; o < n.length; o++)(function (n) {
                            C(t, n, {
                                configurable: !1, enumerable: !0, get: function () {
                                    return e[n]
                                }, set: function () {
                                    throw new Error("Module exports cannot be changed externally.")
                                }
                            })
                        })(n[o]);
                        return Object.freeze && Object.freeze(t), t
                    }, set: function (e, t) {
                        if (!(t instanceof r))throw new TypeError("Loader.set(" + e + ", module) must be a module");
                        this._loader.modules[e] = {module: t}
                    }, normalize: function (e, t, n) {
                        return e
                    }, locate: function (e) {
                        return e.name
                    }, fetch: function (e) {
                    }, translate: function (e) {
                        return e.source
                    }, instantiate: function (e) {
                    }
                };
                var j = a.prototype.newModule
            }();
            var N;
            s.prototype = a.prototype, o.prototype = new s;
            var F;
            if ("undefined" != typeof XMLHttpRequest)F = function (e, t, n, r) {
                function a() {
                    n(i.responseText)
                }

                function o() {
                    r(new Error("XHR error" + (i.status ? " (" + i.status + (i.statusText ? " " + i.statusText : "") + ")" : "") + " loading " + e))
                }

                var i = new XMLHttpRequest, s = !0, l = !1;
                if (!("withCredentials"in i)) {
                    var u = /^(\w+:)?\/\/([^\/]+)/.exec(e);
                    u && (s = u[2] === window.location.host, u[1] && (s &= u[1] === window.location.protocol))
                }
                s || "undefined" == typeof XDomainRequest || (i = new XDomainRequest, i.onload = a, i.onerror = o, i.ontimeout = o, i.onprogress = function () {
                }, i.timeout = 0, l = !0), i.onreadystatechange = function () {
                    4 === i.readyState && (0 == i.status ? i.responseText ? a() : (i.addEventListener("error", o), i.addEventListener("load", a)) : 200 === i.status ? a() : o())
                }, i.open("GET", e, !0), i.setRequestHeader && (i.setRequestHeader("Accept", "application/x-es-module, */*"), t && ("string" == typeof t && i.setRequestHeader("Authorization", t), i.withCredentials = !0)), l ? setTimeout(function () {
                    i.send()
                }, 0) : i.send(null)
            }; else if ("undefined" != typeof require && "undefined" != typeof process) {
                var $;
                F = function (e, t, n, r) {
                    if ("file:///" != e.substr(0, 8))throw new Error('Unable to fetch "' + e + '". Only file URLs of the form file:/// allowed running in Node.');
                    return $ = $ || require("fs"), e = D ? e.replace(/\//g, "\\").substr(8) : e.substr(7), $.readFile(e, function (e, t) {
                        if (e)return r(e);
                        var a = t + "";
                        "\ufeff" === a[0] && (a = a.substr(1)), n(a)
                    })
                }
            } else {
                if ("undefined" == typeof self || "undefined" == typeof self.fetch)throw new TypeError("No environment fetch API available.");
                F = function (e, t, n, r) {
                    var a = {headers: {Accept: "application/x-es-module, */*"}};
                    t && ("string" == typeof t && (a.headers.Authorization = t), a.credentials = "include"), fetch(e, a).then(function (e) {
                        if (e.ok)return e.text();
                        throw new Error("Fetch error: " + e.status + " " + e.statusText)
                    }).then(n, r)
                }
            }
            o.prototype.fetch = function (e) {
                return new Promise(function (t, n) {
                    F(e.address, void 0, t, n)
                })
            }, u.prototype = o.prototype, l.prototype = new u, l.prototype.constructor = l, l.prototype.instantiate = function () {
            };
            var B, H = !0;
            try {
                Object.getOwnPropertyDescriptor({a: 0}, "a")
            } catch (X) {
                H = !1
            }
            var G = ["main", "format", "defaultExtension", "meta", "map", "basePath", "depCache"], V = /^[^\/]+:\/\//, Y = {}, Z = new A(U);
            c(function (e) {
                return function () {
                    e.call(this), this.baseURL = U.substr(0, U.lastIndexOf("/") + 1), this.map = {}, this.paths = {}, this.warnings = !1, this.defaultJSExtensions = !1, this.pluginFirst = !1, this.loaderErrorStack = !1, this.set("@empty", this.newModule({})), w.call(this, !1)
                }
            }), "undefined" == typeof require || "undefined" == typeof process || process.browser || (l.prototype._nodeRequire = require);
            var K = ["assert", "buffer", "child_process", "cluster", "console", "constants", "crypto", "dgram", "dns", "domain", "events", "fs", "http", "https", "module", "net", "os", "path", "process", "punycode", "querystring", "readline", "repl", "stream", "string_decoder", "sys", "timers", "tls", "tty", "url", "util", "vm", "zlib"];
            d("normalize", function (e) {
                return function (e, t, n) {
                    var r = k.call(this, e, t);
                    return n || !this.defaultJSExtensions || ".js" == r.substr(r.length - 3, 3) || x(r) || (r += ".js"), r
                }
            });
            var Q = "undefined" != typeof XMLHttpRequest;
            d("locate", function (e) {
                return function (t) {
                    return Promise.resolve(e.call(this, t)).then(function (e) {
                        return Q ? e.replace(/#/g, "%23") : e
                    })
                }
            }), d("fetch", function () {
                return function (e) {
                    return new Promise(function (t, n) {
                        F(e.address, e.metadata.authorization, t, n)
                    })
                }
            }), d("import", function (e) {
                return function (t, n, r) {
                    return n && n.name && g.call(this, "SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing " + t + " from " + n.name), e.call(this, t, n, r).then(function (e) {
                        return e.__useDefault ? e["default"] : e
                    })
                }
            }), d("translate", function (e) {
                return function (t) {
                    return "detect" == t.metadata.format && (t.metadata.format = void 0), e.call(this, t)
                }
            }), d("instantiate", function (e) {
                return function (e) {
                    if ("json" == e.metadata.format && !this.builder) {
                        var t = e.metadata.entry = P();
                        t.deps = [], t.execute = function () {
                            try {
                                return JSON.parse(e.source)
                            } catch (t) {
                                throw new Error("Invalid JSON file " + e.name)
                            }
                        }
                    }
                }
            }), l.prototype.env = "development";
            var W;
            l.prototype.config = function (e) {
                function t(e) {
                    for (var t in e)if (hasOwnProperty.call(e, t))return !0
                }

                var n = this;
                if ("loaderErrorStack"in e && (W = $__curScript, e.loaderErrorStack ? $__curScript = void 0 : $__curScript = W), "warnings"in e && (n.warnings = e.warnings), e.transpilerRuntime === !1 && (n._loader.loadedTranspilerRuntime = !0), e.baseURL) {
                    if (t(n.packages) || t(n.meta) || t(n.depCache) || t(n.bundles) || t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");
                    n.baseURL = e.baseURL, y.call(n)
                }
                if (e.defaultJSExtensions && (n.defaultJSExtensions = e.defaultJSExtensions, g.call(n, "The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")), e.pluginFirst && (n.pluginFirst = e.pluginFirst), e.production && w.call(n, !0), e.paths)for (var r in e.paths)n.paths[r] = e.paths[r];
                if (e.map) {
                    var a = "";
                    for (var r in e.map) {
                        var o = e.map[r];
                        if ("string" != typeof o) {
                            a += (a.length ? ", " : "") + '"' + r + '"';
                            var i = n.defaultJSExtensions && ".js" != r.substr(r.length - 3, 3), s = n.decanonicalize(r);
                            i && ".js" == s.substr(s.length - 3, 3) && (s = s.substr(0, s.length - 3));
                            var l = "";
                            for (var u in n.packages)s.substr(0, u.length) == u && (!s[u.length] || "/" == s[u.length]) && l.split("/").length < u.split("/").length && (l = u);
                            l && n.packages[l].main && (s = s.substr(0, s.length - n.packages[l].main.length - 1));
                            var u = n.packages[s] = n.packages[s] || {};
                            u.map = o
                        } else n.map[r] = o
                    }
                    a && g.call(n, "The map configuration for " + a + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + r + '": { map: {...} } } }).')
                }
                if (e.packageConfigPaths) {
                    for (var d = [], c = 0; c < e.packageConfigPaths.length; c++) {
                        var f = e.packageConfigPaths[c], m = Math.max(f.lastIndexOf("*") + 1, f.lastIndexOf("/")), i = n.defaultJSExtensions && ".js" != f.substr(m - 3, 3), p = n.decanonicalize(f.substr(0, m));
                        i && ".js" == p.substr(p.length - 3, 3) && (p = p.substr(0, p.length - 3)), d[c] = p + f.substr(m)
                    }
                    n.packageConfigPaths = d
                }
                if (e.bundles)for (var r in e.bundles) {
                    for (var v = [], c = 0; c < e.bundles[r].length; c++) {
                        var i = n.defaultJSExtensions && ".js" != e.bundles[r][c].substr(e.bundles[r][c].length - 3, 3), b = n.decanonicalize(e.bundles[r][c]);
                        i && ".js" == b.substr(b.length - 3, 3) && (b = b.substr(0, b.length - 3)), v.push(b)
                    }
                    n.bundles[r] = v
                }
                if (e.packages)for (var r in e.packages) {
                    if (r.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"' + r + '" is not a valid package name.');
                    var s = k.call(n, r);
                    "/" == s[s.length - 1] && (s = s.substr(0, s.length - 1)), n.packages[s] = n.packages[s] || {};
                    var u = e.packages[r];
                    u.modules && (g.call(n, "Package " + r + ' is configured with "modules", which is deprecated as it has been renamed to "meta".'), u.meta = u.modules, delete u.modules), "object" == typeof u.main && (u.map = u.map || {}, u.map["./@main"] = u.main, u.main["default"] = u.main["default"] || "./", u.main = "@main");
                    for (var S in u)-1 == J.call(G, S) && g.call(n, '"' + S + '" is not a valid package configuration option in package ' + r);
                    h(n.packages[s], u)
                }
                for (var E in e) {
                    var o = e[E];
                    if ("baseURL" != E && "map" != E && "packages" != E && "bundles" != E && "paths" != E && "warnings" != E && "packageConfigPaths" != E && "loaderErrorStack" != E)if ("object" != typeof o || o instanceof Array)n[E] = o; else {
                        n[E] = n[E] || {};
                        for (var r in o)if ("meta" == E && "*" == r[0])n[E][r] = o[r]; else if ("meta" == E) {
                            var j = k.call(n, r);
                            n.defaultJSExtensions && ".js" != j.substr(j.length - 3, 3) && !x(j) && (j += ".js"), n[E][j] = o[r]
                        } else if ("depCache" == E) {
                            var i = n.defaultJSExtensions && ".js" != r.substr(r.length - 3, 3), s = n.decanonicalize(r);
                            i && ".js" == s.substr(s.length - 3, 3) && (s = s.substr(0, s.length - 3)), n[E][s] = o[r]
                        } else n[E][r] = o[r]
                    }
                }
            }, function () {
                function e(e, t) {
                    var n, r, a = 0;
                    for (var o in e.packages)t.substr(0, o.length) !== o || t.length !== o.length && "/" !== t[o.length] || (r = o.split("/").length, r > a && (n = o, a = r));
                    return n
                }

                function t(e, t, n, r, a) {
                    if (!r || "/" == r[r.length - 1] || a || t.defaultExtension === !1)return r;
                    if (r.match(te))return r;
                    var o = !1;
                    if (t.meta && p(t.meta, r, function (e, t, n) {
                            return 0 == n || e.lastIndexOf("*") != e.length - 1 ? o = !0 : void 0
                        }), !o && e.meta && p(e.meta, n + "/" + r, function (e, t, n) {
                            return 0 == n || e.lastIndexOf("*") != e.length - 1 ? o = !0 : void 0
                        }), o)return r;
                    var i = "." + (t.defaultExtension || "js");
                    return r.substr(r.length - i.length) != i ? r + i : r
                }

                function n(e, n, r, o, i) {
                    if (!o) {
                        if (!n.main)return r + (e.defaultJSExtensions ? ".js" : "");
                        o = "./" == n.main.substr(0, 2) ? n.main.substr(2) : n.main
                    }
                    if (n.map) {
                        var s = "./" + o, l = b(n.map, s);
                        if (l || (s = "./" + t(e, n, r, o, i), s != "./" + o && (l = b(n.map, s))), l)return a(e, n, r, l, s, i)
                    }
                    return r + "/" + t(e, n, r, o, i)
                }

                function r(e, t, n) {
                    if ("." == e)throw new Error("Package " + n + ' has a map entry for "." which is not permitted.');
                    if (t.substr(0, e.length) == e && "/" != e[e.length - 1] && "/" == t[e.length])throw new Error("Package " + n + ' has a recursive map for "' + e + '" which is not permitted.')
                }

                function a(e, n, a, o, i, s) {
                    var l = n.map[o];
                    if (r(o, l, a), "string" != typeof l && (l = o = i), r(o, l, a), "." == l)l = a; else if ("./" == l.substr(0, 2))return a + "/" + t(e, n, a, l.substr(2) + i.substr(o.length), s);
                    return e.normalizeSync(l + i.substr(o.length), a + "/")
                }

                function o(e, n, r, a, o) {
                    if (!a) {
                        if (!n.main)return Promise.resolve(r + (e.defaultJSExtensions ? ".js" : ""));
                        a = "./" == n.main.substr(0, 2) ? n.main.substr(2) : n.main
                    }
                    var i, l;
                    return n.map && (i = "./" + a, l = b(n.map, i), l || (i = "./" + t(e, n, r, a, o), i != "./" + a && (l = b(n.map, i)))), (l ? s(e, n, r, l, i, o) : Promise.resolve()).then(function (i) {
                        return i ? Promise.resolve(i) : Promise.resolve(r + "/" + t(e, n, r, a, o))
                    })
                }

                function i(e, n, r, a, o, i, s) {
                    if ("." == o)o = r; else if ("./" == o.substr(0, 2))return Promise.resolve(r + "/" + t(e, n, r, o.substr(2) + i.substr(a.length), s)).then(function (t) {
                        return M.call(e, t, r + "/")
                    });
                    return e.normalize(o + i.substr(a.length), r + "/")
                }

                function s(e, t, n, a, o, s) {
                    var l = t.map[a];
                    return "string" == typeof l ? (r(a, l, n), i(e, t, n, a, l, o, s)) : e.builder ? Promise.resolve(n + "/#:" + o) : e["import"](t.map["@env"] || "@system-env", n).then(function (e) {
                        for (var t in l) {
                            var n = "~" == t[0], r = v(n ? t.substr(1) : t, e);
                            if (!n && r || n && !r)return l[t]
                        }
                    }).then(function (l) {
                        if (l) {
                            if ("string" != typeof l)throw new Error("Unable to map a package conditional to a package conditional.");
                            return r(a, l, n), i(e, t, n, a, l, o, s)
                        }
                    })
                }

                function u(e) {
                    var t = e.lastIndexOf("*"), n = Math.max(t + 1, e.lastIndexOf("/"));
                    return {
                        length: n,
                        regEx: new RegExp("^(" + e.substr(0, n).replace(/\*/g, "[^\\/]+") + ")(\\/|$)"),
                        wildcard: -1 != t
                    }
                }

                function f(e, t) {
                    for (var n, r, a = !1, o = 0; o < e.packageConfigPaths.length; o++) {
                        var i = e.packageConfigPaths[o], s = y[i] || (y[i] = u(i));
                        if (!(t.length < s.length)) {
                            var l = t.match(s.regEx);
                            !l || n && (a && s.wildcard || !(n.length < l[1].length)) || (n = l[1], a = !s.wildcard, r = n + i.substr(s.length))
                        }
                    }
                    return n ? {packageName: n, configPath: r} : void 0
                }

                function m(e, t, n) {
                    var r = e.pluginLoader || e;
                    return (r.meta[n] = r.meta[n] || {}).format = "json", r.load(n).then(function () {
                        var a = r.get(n)["default"];
                        a.systemjs && (a = a.systemjs), a.modules && (a.meta = a.modules, g.call(e, "Package config file " + n + ' is configured with "modules", which is deprecated as it has been renamed to "meta".'));
                        for (var o in a)-1 == J.call(G, o) && delete a[o];
                        var i = e.packages[t] = e.packages[t] || {};
                        if (h(i, a, !0), a.depCache) {
                            for (var s in a.depCache) {
                                var l;
                                l = "./" == s.substr(0, 2) ? t + "/" + s.substr(2) : k.call(e, s), e.depCache[l] = (e.depCache[l] || []).concat(a.depCache[s])
                            }
                            delete a.depCache
                        }
                        return "object" == typeof i.main && (i.map = i.map || {}, i.map["./@main"] = i.main, i.main["default"] = i.main["default"] || "./", i.main = "@main"), i
                    })
                }

                function p(e, t, n) {
                    var r;
                    for (var a in e) {
                        var o = "./" == a.substr(0, 2) ? "./" : "";
                        if (o && (a = a.substr(2)), r = a.indexOf("*"), -1 !== r && a.substr(0, r) == t.substr(0, r) && a.substr(r + 1) == t.substr(t.length - a.length + r + 1) && n(a, e[o + a], a.split("/").length))return
                    }
                    var i = e[t] || e["./" + t];
                    i && n(i, i, 0)
                }

                c(function (e) {
                    return function () {
                        e.call(this), this.packages = {}, this.packageConfigPaths = []
                    }
                }), l.prototype.normalizeSync = l.prototype.decanonicalize = l.prototype.normalize, d("decanonicalize", function (t) {
                    return function (n, r) {
                        if (this.builder)return t.call(this, n, r, !0);
                        var a = t.call(this, n, r);
                        if (!this.defaultJSExtensions)return a;
                        var o = e(this, a), i = this.packages[o], s = i && i.defaultExtension;
                        return void 0 == s && i && i.meta && p(i.meta, a.substr(o), function (e, t, n) {
                            return 0 == n || e.lastIndexOf("*") != e.length - 1 ? (s = !1, !0) : void 0
                        }), (s === !1 || s && ".js" != s) && ".js" != n.substr(n.length - 3, 3) && ".js" == a.substr(a.length - 3, 3) && (a = a.substr(0, a.length - 3)), a
                    }
                }), d("normalizeSync", function (t) {
                    return function (r, o, i) {
                        g.call(this, "SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");
                        var s = this;
                        if (i = i === !0, o)var l = e(s, o) || s.defaultJSExtensions && ".js" == o.substr(o.length - 3, 3) && e(s, o.substr(0, o.length - 3));
                        var u = l && s.packages[l];
                        if (u && "." != r[0]) {
                            var d = u.map, c = d && b(d, r);
                            if (c && "string" == typeof d[c])return a(s, u, l, c, r, i)
                        }
                        var m = s.defaultJSExtensions && ".js" != r.substr(r.length - 3, 3), p = t.call(s, r, o);
                        m && ".js" != p.substr(p.length - 3, 3) && (m = !1), m && (p = p.substr(0, p.length - 3));
                        var h = f(s, p), v = h && h.packageName || e(s, p);
                        if (!v)return p + (m ? ".js" : "");
                        var y = p.substr(v.length + 1);
                        return n(s, s.packages[v] || {}, v, y, i)
                    }
                }), d("normalize", function (t) {
                    return function (n, r, a) {
                        var i = this;
                        return a = a === !0, Promise.resolve().then(function () {
                            if (r)var t = e(i, r) || i.defaultJSExtensions && ".js" == r.substr(r.length - 3, 3) && e(i, r.substr(0, r.length - 3));
                            var o = t && i.packages[t];
                            if (o && "./" != n.substr(0, 2)) {
                                var l = o.map, u = l && b(l, n);
                                if (u)return s(i, o, t, u, n, a)
                            }
                            return Promise.resolve()
                        }).then(function (s) {
                            if (s)return s;
                            var l = i.defaultJSExtensions && ".js" != n.substr(n.length - 3, 3), u = t.call(i, n, r);
                            l && ".js" != u.substr(u.length - 3, 3) && (l = !1), l && (u = u.substr(0, u.length - 3));
                            var d = f(i, u), c = d && d.packageName || e(i, u);
                            if (!c)return Promise.resolve(u + (l ? ".js" : ""));
                            var p = i.packages[c], h = p && (p.configured || !d);
                            return (h ? Promise.resolve(p) : m(i, c, d.configPath)).then(function (e) {
                                var t = u.substr(c.length + 1);
                                return o(i, e, c, t, a)
                            })
                        })
                    }
                });
                var y = {};
                d("locate", function (t) {
                    return function (n) {
                        var r = this;
                        return Promise.resolve(t.call(this, n)).then(function (t) {
                            var a = e(r, n.name);
                            if (a) {
                                var o = r.packages[a], i = n.name.substr(a.length + 1);
                                o.format && (n.metadata.format = n.metadata.format || o.format);
                                var s = {};
                                if (o.meta) {
                                    var l = 0;
                                    p(o.meta, i, function (e, t, n) {
                                        n > l && (l = n), h(s, t, n && l > n)
                                    }), h(n.metadata, s)
                                }
                            }
                            return t
                        })
                    }
                })
            }(), function () {
                function t() {
                    if (o && "interactive" === o.script.readyState)return o.load;
                    for (var e = 0; e < l.length; e++)if ("interactive" == l[e].script.readyState)return o = l[e], o.load
                }

                function n(e, t) {
                    return new Promise(function (e, n) {
                        t.metadata.integrity && n(new Error("Subresource integrity checking is not supported in web workers.")), i = t;
                        try {
                            importScripts(t.address)
                        } catch (r) {
                            i = null, n(r)
                        }
                        i = null, t.metadata.entry || n(new Error(t.address + " did not call System.register or AMD define")), e("")
                    })
                }

                if ("undefined" != typeof document)var r = document.getElementsByTagName("head")[0];
                var a, o, i = null, s = r && function () {
                        var e = document.createElement("script"), t = "undefined" != typeof opera && "[object Opera]" === opera.toString();
                        return e.attachEvent && !(e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0) && !t
                    }(), l = [], u = 0, c = [];
                d("pushRegister_", function (e) {
                    return function (n) {
                        return e.call(this, n) ? !1 : (i ? this.reduceRegister_(i, n) : s ? this.reduceRegister_(t(), n) : u ? c.push(n) : this.reduceRegister_(null, n), !0)
                    }
                }), d("fetch", function (t) {
                    return function (i) {
                        var d = this;
                        return "json" != i.metadata.format && i.metadata.scriptLoad && (T || L) ? L ? n(d, i) : new Promise(function (t, n) {
                            function f(e) {
                                if (!h.readyState || "loaded" == h.readyState || "complete" == h.readyState) {
                                    if (u--, i.metadata.entry || c.length) {
                                        if (!s) {
                                            for (var r = 0; r < c.length; r++)d.reduceRegister_(i, c[r]);
                                            c = []
                                        }
                                    } else d.reduceRegister_(i);
                                    p(), i.metadata.entry || i.metadata.bundle || n(new Error(i.name + " did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")), t("")
                                }
                            }

                            function m(e) {
                                p(), n(new Error("Unable to load script " + i.address))
                            }

                            function p() {
                                if (e.System = a, h.detachEvent) {
                                    h.detachEvent("onreadystatechange", f);
                                    for (var t = 0; t < l.length; t++)l[t].script == h && (o && o.script == h && (o = null), l.splice(t, 1))
                                } else h.removeEventListener("load", f, !1), h.removeEventListener("error", m, !1);
                                r.removeChild(h)
                            }

                            var h = document.createElement("script");
                            h.async = !0, i.metadata.crossOrigin && (h.crossOrigin = i.metadata.crossOrigin), i.metadata.integrity && h.setAttribute("integrity", i.metadata.integrity), s ? (h.attachEvent("onreadystatechange", f), l.push({
                                script: h,
                                load: i
                            })) : (h.addEventListener("load", f, !1), h.addEventListener("error", m, !1)), u++, a = e.System, h.src = i.address, r.appendChild(h)
                        }) : t.call(this, i)
                    }
                })
            }();
            var ee = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
            !function () {
                function t(e, n, r) {
                    if (r[e.groupIndex] = r[e.groupIndex] || [], -1 == J.call(r[e.groupIndex], e)) {
                        r[e.groupIndex].push(e);
                        for (var a = 0, o = e.normalizedDeps.length; o > a; a++) {
                            var i = e.normalizedDeps[a], s = n.defined[i];
                            if (s && !s.evaluated) {
                                var l = e.groupIndex + (s.declarative != e.declarative);
                                if (null === s.groupIndex || s.groupIndex < l) {
                                    if (null !== s.groupIndex && (r[s.groupIndex].splice(J.call(r[s.groupIndex], s), 1), 0 == r[s.groupIndex].length))throw new Error("Mixed dependency cycle detected");
                                    s.groupIndex = l
                                }
                                t(s, n, r)
                            }
                        }
                    }
                }

                function n(e, n) {
                    var r = n.defined[e];
                    if (!r.module) {
                        r.groupIndex = 0;
                        var a = [];
                        t(r, n, a);
                        for (var o = !!r.declarative == a.length % 2, s = a.length - 1; s >= 0; s--) {
                            for (var l = a[s], d = 0; d < l.length; d++) {
                                var c = l[d];
                                o ? i(c, n) : u(c, n)
                            }
                            o = !o
                        }
                    }
                }

                function a() {
                }

                function o(e, t) {
                    return t[e] || (t[e] = {name: e, dependencies: [], exports: new a, importers: []})
                }

                function i(t, n) {
                    if (!t.module) {
                        var r = n._loader.moduleRecords, a = t.module = o(t.name, r), s = t.module.exports, l = t.declare.call(e, function (e, t) {
                            if (a.locked = !0, "object" == typeof e)for (var n in e)s[n] = e[n]; else s[e] = t;
                            for (var r = 0, o = a.importers.length; o > r; r++) {
                                var i = a.importers[r];
                                if (!i.locked) {
                                    var l = J.call(i.dependencies, a);
                                    i.setters[l](s)
                                }
                            }
                            return a.locked = !1, t
                        }, {id: t.name});
                        if (a.setters = l.setters, a.execute = l.execute, !a.setters || !a.execute)throw new TypeError("Invalid System.register form for " + t.name);
                        for (var u = 0, d = t.normalizedDeps.length; d > u; u++) {
                            var c, f = t.normalizedDeps[u], m = n.defined[f], p = r[f];
                            p ? c = p.exports : m && !m.declarative ? c = m.esModule : m ? (i(m, n), p = m.module, c = p.exports) : c = n.get(f), p && p.importers ? (p.importers.push(a), a.dependencies.push(p)) : a.dependencies.push(null);
                            for (var h = t.originalIndices[u], g = 0, v = h.length; v > g; ++g) {
                                var y = h[g];
                                a.setters[y] && a.setters[y](c)
                            }
                        }
                    }
                }

                function s(e, t) {
                    var n, r = t.defined[e];
                    if (r)r.declarative ? p(e, [], t) : r.evaluated || u(r, t), n = r.module.exports; else if (n = t.get(e), !n)throw new Error("Unable to load dependency " + e + ".");
                    return (!r || r.declarative) && n && n.__useDefault ? n["default"] : n
                }

                function u(t, n) {
                    if (!t.module) {
                        var a = {}, o = t.module = {exports: a, id: t.name};
                        if (!t.executingRequire)for (var i = 0, l = t.normalizedDeps.length; l > i; i++) {
                            var d = t.normalizedDeps[i], c = n.defined[d];
                            c && u(c, n)
                        }
                        t.evaluated = !0;
                        var f = t.execute.call(e, function (e) {
                            for (var r = 0, a = t.deps.length; a > r; r++)if (t.deps[r] == e)return s(t.normalizedDeps[r], n);
                            var o = n.normalizeSync(e, t.name);
                            if (-1 != J.call(t.normalizedDeps, o))return s(o, n);
                            throw new Error("Module " + e + " not declared as a dependency of " + t.name)
                        }, a, o);
                        f && (o.exports = f), a = o.exports, a && (a.__esModule || a instanceof r) ? t.esModule = a : t.esmExports && a !== e ? t.esModule = m(a) : t.esModule = {"default": a}
                    }
                }

                function p(t, n, r) {
                    var a = r.defined[t];
                    if (a && !a.evaluated && a.declarative) {
                        n.push(t);
                        for (var o = 0, i = a.normalizedDeps.length; i > o; o++) {
                            var s = a.normalizedDeps[o];
                            -1 == J.call(n, s) && (r.defined[s] ? p(s, n, r) : r.get(s))
                        }
                        a.evaluated || (a.evaluated = !0, a.module.execute.call(e))
                    }
                }

                l.prototype.register = function (e, t, n) {
                    if ("string" != typeof e && (n = t, t = e, e = null), "boolean" == typeof n)return this.registerDynamic.apply(this, arguments);
                    var r = P();
                    r.name = e && (this.decanonicalize || this.normalize).call(this, e), r.declarative = !0, r.deps = t, r.declare = n, this.pushRegister_({
                        amd: !1,
                        entry: r
                    })
                }, l.prototype.registerDynamic = function (e, t, n, r) {
                    "string" != typeof e && (r = n, n = t, t = e, e = null);
                    var a = P();
                    a.name = e && (this.decanonicalize || this.normalize).call(this, e), a.deps = t, a.execute = r, a.executingRequire = n, this.pushRegister_({
                        amd: !1,
                        entry: a
                    })
                }, d("reduceRegister_", function () {
                    return function (e, t) {
                        if (t) {
                            var n = t.entry, r = e && e.metadata;
                            if (n.name && (n.name in this.defined || (this.defined[n.name] = n), r && (r.bundle = !0)), !n.name || e && n.name == e.name) {
                                if (!r)throw new TypeError("Unexpected anonymous System.register call.");
                                if (r.entry)throw"register" == r.format ? new Error("Multiple anonymous System.register calls in module " + e.name + ". If loading a bundle, ensure all the System.register calls are named.") : new Error("Module " + e.name + " interpreted as " + r.format + " module format, but called System.register.");
                                r.format || (r.format = "register"), r.entry = n
                            }
                        }
                    }
                }), c(function (e) {
                    return function () {
                        e.call(this), this.defined = {}, this._loader.moduleRecords = {}
                    }
                }), C(a, "toString", {
                    value: function () {
                        return "Module"
                    }
                }), d("delete", function (e) {
                    return function (t) {
                        return delete this._loader.moduleRecords[t], delete this.defined[t], e.call(this, t)
                    }
                }), d("fetch", function (e) {
                    return function (t) {
                        return this.defined[t.name] ? (t.metadata.format = "defined", "") : (t.metadata.deps = t.metadata.deps || [], e.call(this, t))
                    }
                }), d("translate", function (e) {
                    return function (t) {
                        return t.metadata.deps = t.metadata.deps || [], Promise.resolve(e.call(this, t)).then(function (e) {
                            return ("register" == t.metadata.format || !t.metadata.format && j(t.source)) && (t.metadata.format = "register"), e
                        })
                    }
                }), d("instantiate", function (e) {
                    return function (t) {
                        "detect" == t.metadata.format && (t.metadata.format = void 0), e.call(this, t);
                        var r, a = this;
                        if (a.defined[t.name])r = a.defined[t.name], r.declarative || (r.deps = r.deps.concat(t.metadata.deps)); else if (t.metadata.entry)r = t.metadata.entry, r.deps = r.deps.concat(t.metadata.deps); else if (!(a.builder && t.metadata.bundle || "register" != t.metadata.format && "esm" != t.metadata.format && "es6" != t.metadata.format)) {
                            if ("undefined" != typeof __exec && __exec.call(a, t), !t.metadata.entry && !t.metadata.bundle)throw new Error(t.name + " detected as " + t.metadata.format + " but didn't execute.");
                            r = t.metadata.entry, r && t.metadata.deps && (r.deps = r.deps.concat(t.metadata.deps))
                        }
                        r || (r = P(), r.deps = t.metadata.deps, r.execute = function () {
                        }), a.defined[t.name] = r;
                        var o = f(r.deps);
                        r.deps = o.names, r.originalIndices = o.indices, r.name = t.name, r.esmExports = t.metadata.esmExports !== !1;
                        for (var i = [], s = 0, l = r.deps.length; l > s; s++)i.push(Promise.resolve(a.normalize(r.deps[s], t.name)));
                        return Promise.all(i).then(function (e) {
                            return r.normalizedDeps = e, {
                                deps: r.deps, execute: function () {
                                    return n(t.name, a), p(t.name, [], a), a.defined[t.name] = void 0, a.newModule(r.declarative ? r.module.exports : r.esModule)
                                }
                            }
                        })
                    }
                })
            }(), d("reduceRegister_", function (e) {
                return function (t, n) {
                    if (n || !t.metadata.exports)return e.call(this, t, n);
                    t.metadata.format = "global";
                    var r = t.metadata.entry = P();
                    r.deps = t.metadata.deps;
                    var a = _(t.metadata.exports);
                    r.execute = function () {
                        return a
                    }
                }
            }), c(function (t) {
                return function () {
                    function n(t) {
                        if (Object.keys)Object.keys(e).forEach(t); else for (var n in e)i.call(e, n) && t(n)
                    }

                    function r(t) {
                        n(function (n) {
                            if (-1 == J.call(s, n)) {
                                try {
                                    var r = e[n]
                                } catch (a) {
                                    s.push(n)
                                }
                                t(n, r)
                            }
                        })
                    }

                    var a = this;
                    t.call(a);
                    var o, i = Object.prototype.hasOwnProperty, s = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"];
                    a.set("@@global-helpers", a.newModule({
                        prepareGlobal: function (t, n, a) {
                            var i = e.define;
                            e.define = void 0;
                            var s;
                            if (a) {
                                s = {};
                                for (var l in a)s[l] = e[l], e[l] = a[l]
                            }
                            return n || (o = {}, r(function (e, t) {
                                o[e] = t
                            })), function () {
                                var t;
                                if (n)t = _(n); else {
                                    t = {};
                                    var a, l;
                                    r(function (e, n) {
                                        o[e] !== n && "undefined" != typeof n && (t[e] = n, "undefined" != typeof a ? l || a === n || (l = !0) : a = n)
                                    }), t = l ? t : a
                                }
                                if (s)for (var u in s)e[u] = s[u];
                                return e.define = i, t
                            }
                        }
                    }))
                }
            }), c(function (e) {
                return function () {
                    function t(e) {
                        return "file:///" == e.substr(0, 8) ? e.substr(7 + !!D) : r && e.substr(0, r.length) == r ? e.substr(r.length) : e
                    }

                    var n = this;
                    if (e.call(n), "undefined" != typeof window && "undefined" != typeof document && window.location)var r = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                    n.set("@@cjs-helpers", n.newModule({
                        requireResolve: function (e, r) {
                            return t(n.normalizeSync(e, r))
                        }, getPathVars: function (e) {
                            var n, r = e.lastIndexOf("!");
                            n = -1 != r ? e.substr(0, r) : e;
                            var a = n.split("/");
                            return a.pop(), a = a.join("/"), {filename: t(n), dirname: t(a)}
                        }
                    }))
                }
            }), d("fetch", function (t) {
                return function (n) {
                    return n.metadata.scriptLoad && T && (e.define = this.amdDefine), t.call(this, n)
                }
            }), c(function (t) {
                return function () {
                    function n(e, t) {
                        e = e.replace(i, "");
                        var n = e.match(u), r = (n[1].split(",")[t] || "require").replace(c, ""), a = f[r] || (f[r] = new RegExp(s + r + l, "g"));
                        a.lastIndex = 0;
                        for (var o, d = []; o = a.exec(e);)d.push(o[2] || o[3]);
                        return d
                    }

                    function r(e, t, n, a) {
                        if ("object" == typeof e && !(e instanceof Array))return r.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
                        if ("string" == typeof e && "function" == typeof t && (e = [e]), !(e instanceof Array)) {
                            if ("string" == typeof e) {
                                var i = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3), s = o.decanonicalize(e, a);
                                i && ".js" == s.substr(s.length - 3, 3) && (s = s.substr(0, s.length - 3));
                                var l = o.get(s);
                                if (!l)throw new Error('Module not already loaded loading "' + e + '" as ' + s + (a ? ' from "' + a + '".' : "."));
                                return l.__useDefault ? l["default"] : l
                            }
                            throw new TypeError("Invalid require")
                        }
                        for (var u = [], d = 0; d < e.length; d++)u.push(o["import"](e[d], a));
                        Promise.all(u).then(function (e) {
                            t && t.apply(null, e)
                        }, n)
                    }

                    function a(t, a, i) {
                        function s(t, n, s) {
                            function c(e, n, a) {
                                return "string" == typeof e && "function" != typeof n ? t(e) : r.call(o, e, n, a, s.id)
                            }

                            for (var f = [], m = 0; m < a.length; m++)f.push(t(a[m]));
                            s.uri = s.id, s.config = function () {
                            }, -1 != d && f.splice(d, 0, s), -1 != u && f.splice(u, 0, n), -1 != l && (c.toUrl = function (e) {
                                var t = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3), n = o.decanonicalize(e, s.id);
                                return t && ".js" == n.substr(n.length - 3, 3) && (n = n.substr(0, n.length - 3)), n
                            }, f.splice(l, 0, c));
                            var p = e.require;
                            e.require = r;
                            var h = i.apply(-1 == u ? e : n, f);
                            return e.require = p, "undefined" == typeof h && s && (h = s.exports), "undefined" != typeof h ? h : void 0
                        }

                        "string" != typeof t && (i = a, a = t, t = null), a instanceof Array || (i = a, a = ["require", "exports", "module"].splice(0, i.length)), "function" != typeof i && (i = function (e) {
                            return function () {
                                return e
                            }
                        }(i)), void 0 === a[a.length - 1] && a.pop();
                        var l, u, d;
                        -1 != (l = J.call(a, "require")) && (a.splice(l, 1), t || (a = a.concat(n(i.toString(), l)))), -1 != (u = J.call(a, "exports")) && a.splice(u, 1), -1 != (d = J.call(a, "module")) && a.splice(d, 1);
                        var c = P();
                        c.name = t && (o.decanonicalize || o.normalize).call(o, t), c.deps = a, c.execute = s, o.pushRegister_({
                            amd: !0,
                            entry: c
                        })
                    }

                    var o = this;
                    t.call(this);
                    var i = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, s = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])", l = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)", u = /\(([^\)]*)\)/, c = /^\s+|\s+$/g, f = {};
                    a.amd = {}, d("reduceRegister_", function (e) {
                        return function (t, n) {
                            if (!n || !n.amd)return e.call(this, t, n);
                            var r = t && t.metadata, a = n.entry;
                            if (r && (r.format = "amd"), a.name)r && (r.entry || r.bundle ? r.entry && r.entry.name && (r.entry = void 0) : r.entry = a, r.bundle = !0), a.name in this.defined || (this.defined[a.name] = a); else {
                                if (!r)throw new TypeError("Unexpected anonymous AMD define.");
                                if (r.entry && !r.entry.name)throw new Error("Multiple anonymous defines in module " + t.name);
                                r.entry = a
                            }
                        }
                    }), o.amdDefine = a, o.amdRequire = r
                }
            }), function () {
                function e(e, t) {
                    if (t) {
                        var n;
                        if (e.pluginFirst) {
                            if (-1 != (n = t.lastIndexOf("!")))return t.substr(n + 1)
                        } else if (-1 != (n = t.indexOf("!")))return t.substr(0, n);
                        return t
                    }
                }

                function t(e, t) {
                    var n, r, a = t.lastIndexOf("!");
                    return -1 != a ? (e.pluginFirst ? (n = t.substr(a + 1), r = t.substr(0, a)) : (n = t.substr(0, a), r = t.substr(a + 1) || n.substr(n.lastIndexOf(".") + 1)), {
                        argument: n,
                        plugin: r
                    }) : void 0
                }

                function n(e, t, n, r) {
                    return r && ".js" == t.substr(t.length - 3, 3) && (t = t.substr(0, t.length - 3)), e.pluginFirst ? n + "!" + t : t + "!" + n
                }

                function r(e, t) {
                    return e.defaultJSExtensions && ".js" != t.substr(t.length - 3, 3)
                }

                function a(a) {
                    return function (o, i, s) {
                        var l = this;
                        i = e(this, i);
                        var u = t(l, o);
                        if (!u)return a.call(this, o, i, s);
                        var d = l.normalizeSync(u.argument, i, !0), c = l.normalizeSync(u.plugin, i, !0);
                        return n(l, d, c, r(l, u.argument))
                    }
                }

                d("decanonicalize", a), d("normalizeSync", a), d("normalize", function (a) {
                    return function (o, i, s) {
                        var l = this;
                        i = e(this, i);
                        var u = t(l, o);
                        return u ? Promise.all([l.normalize(u.argument, i, !0), l.normalize(u.plugin, i)]).then(function (e) {
                            return n(l, e[0], e[1], r(l, u.argument))
                        }) : a.call(l, o, i, s)
                    }
                }), d("locate", function (e) {
                    return function (t) {
                        var n, r = this, a = t.name;
                        return r.pluginFirst ? -1 != (n = a.indexOf("!")) && (t.metadata.loader = a.substr(0, n), t.name = a.substr(n + 1)) : -1 != (n = a.lastIndexOf("!")) && (t.metadata.loader = a.substr(n + 1), t.name = a.substr(0, n)), e.call(r, t).then(function (e) {
                            return -1 == n && t.metadata.loader ? r.normalize(t.metadata.loader, t.name).then(function (n) {
                                return t.metadata.loader = n, e
                            }) : e
                        }).then(function (e) {
                            var n = t.metadata.loader;
                            if (!n)return e;
                            if (t.name == n)throw new Error("Plugin " + n + " cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");
                            if (r.defined && r.defined[a])return e;
                            var o = r.pluginLoader || r;
                            return o["import"](n).then(function (n) {
                                return t.metadata.loaderModule = n, t.address = e, n.locate ? n.locate.call(r, t) : e
                            })
                        })
                    }
                }), d("fetch", function (e) {
                    return function (t) {
                        var n = this;
                        return t.metadata.loaderModule && t.metadata.loaderModule.fetch && "defined" != t.metadata.format ? (t.metadata.scriptLoad = !1, t.metadata.loaderModule.fetch.call(n, t, function (t) {
                            return e.call(n, t)
                        })) : e.call(n, t)
                    }
                }), d("translate", function (e) {
                    return function (t) {
                        var n = this;
                        return t.metadata.loaderModule && t.metadata.loaderModule.translate && "defined" != t.metadata.format ? Promise.resolve(t.metadata.loaderModule.translate.call(n, t)).then(function (r) {
                            var a = t.metadata.sourceMap;
                            if (a) {
                                if ("object" != typeof a)throw new Error("load.metadata.sourceMap must be set to an object.");
                                var o = t.name.split("!")[0];
                                a.file = o + "!transpiled", (!a.sources || a.sources.length <= 1) && (a.sources = [o])
                            }
                            return "string" == typeof r ? t.source = r : g.call(this, "Plugin " + t.metadata.loader + " should return the source in translate, instead of setting load.source directly. This support will be deprecated."), e.call(n, t)
                        }) : e.call(n, t)
                    }
                }), d("instantiate", function (e) {
                    return function (t) {
                        var n = this, r = !1;
                        return t.metadata.loaderModule && t.metadata.loaderModule.instantiate && !n.builder && "defined" != t.metadata.format ? Promise.resolve(t.metadata.loaderModule.instantiate.call(n, t, function (t) {
                            if (r)throw new Error("Instantiate must only be called once.");
                            return r = !0, e.call(n, t)
                        })).then(function (a) {
                            return r ? a : (t.metadata.entry = P(), t.metadata.entry.execute = function () {
                                return a
                            }, t.metadata.entry.deps = t.metadata.deps, t.metadata.format = "defined", e.call(n, t))
                        }) : e.call(n, t)
                    }
                })
            }();
            var te = /#\{[^\}]+\}/;
            d("normalize", function (e) {
                return function (t, n, r) {
                    var a = this;
                    return I.call(a, t, n).then(function (t) {
                        return e.call(a, t, n, r)
                    }).then(function (e) {
                        return M.call(a, e, n)
                    })
                }
            }), function () {
                d("fetch", function (e) {
                    return function (t) {
                        var n = t.metadata.alias, r = t.metadata.deps || [];
                        if (n) {
                            t.metadata.format = "defined";
                            var a = P();
                            return this.defined[t.name] = a, a.declarative = !0, a.deps = r.concat([n]), a.declare = function (e) {
                                return {
                                    setters: [function (t) {
                                        for (var n in t)e(n, t[n]);
                                        t.__useDefault && (a.module.exports.__useDefault = !0)
                                    }], execute: function () {
                                    }
                                }
                            }, ""
                        }
                        return e.call(this, t)
                    }
                })
            }(), function () {
                function e(e, t, n) {
                    for (var r, a = t.split("."); a.length > 1;)r = a.shift(), e = e[r] = e[r] || {};
                    r = a.shift(), r in e || (e[r] = n)
                }

                c(function (e) {
                    return function () {
                        this.meta = {}, e.call(this)
                    }
                }), d("locate", function (e) {
                    return function (t) {
                        var n, r = this.meta, a = t.name, o = 0;
                        for (var i in r)if (n = i.indexOf("*"), -1 !== n && i.substr(0, n) === a.substr(0, n) && i.substr(n + 1) === a.substr(a.length - i.length + n + 1)) {
                            var s = i.split("/").length;
                            s > o && (o = s), h(t.metadata, r[i], o != s)
                        }
                        return r[a] && h(t.metadata, r[a]), e.call(this, t)
                    }
                });
                var t = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/, n = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;
                d("translate", function (r) {
                    return function (a) {
                        var o = a.source.match(t);
                        if (o)for (var i = o[0].match(n), s = 0; s < i.length; s++) {
                            var l = i[s], u = l.length, d = l.substr(0, 1);
                            if (";" == l.substr(u - 1, 1) && u--, '"' == d || "'" == d) {
                                var c = l.substr(1, l.length - 3), f = c.substr(0, c.indexOf(" "));
                                if (f) {
                                    var m = c.substr(f.length + 1, c.length - f.length - 1);
                                    "[]" == f.substr(f.length - 2, 2) ? (f = f.substr(0, f.length - 2), a.metadata[f] = a.metadata[f] || [], a.metadata[f].push(m)) : a.metadata[f]instanceof Array ? (g.call(this, "Module " + a.name + ' contains deprecated "deps ' + m + '" meta syntax.\nThis should be updated to "deps[] ' + m + '" for pushing to array meta.'), a.metadata[f].push(m)) : e(a.metadata, f, m)
                                } else a.metadata[c] = !0
                            }
                        }
                        return r.call(this, a)
                    }
                })
            }(), function () {
                c(function (e) {
                    return function () {
                        e.call(this), this.bundles = {}, this._loader.loadedBundles = {}
                    }
                }), d("locate", function (e) {
                    return function (t) {
                        var n = this, r = !1;
                        if (!(t.name in n.defined))for (var a in n.bundles) {
                            for (var o = 0; o < n.bundles[a].length; o++) {
                                var i = n.bundles[a][o];
                                if (i == t.name) {
                                    r = !0;
                                    break
                                }
                                if (-1 != i.indexOf("*")) {
                                    var s = i.split("*");
                                    if (2 != s.length) {
                                        n.bundles[a].splice(o--, 1);
                                        continue
                                    }
                                    if (t.name.substring(0, s[0].length) == s[0] && t.name.substr(t.name.length - s[1].length, s[1].length) == s[1] && -1 == t.name.substr(s[0].length, t.name.length - s[1].length - s[0].length).indexOf("/")) {
                                        r = !0;
                                        break
                                    }
                                }
                            }
                            if (r)return n["import"](a).then(function () {
                                return e.call(n, t)
                            })
                        }
                        return e.call(n, t)
                    }
                })
            }(), function () {
                c(function (e) {
                    return function () {
                        e.call(this), this.depCache = {}
                    }
                }), d("locate", function (e) {
                    return function (t) {
                        var n = this, r = n.depCache[t.name];
                        if (r)for (var a = 0; a < r.length; a++)n["import"](r[a], t.name);
                        return e.call(n, t)
                    }
                })
            }(), c(function (t) {
                return function () {
                    t.apply(this, arguments), e.define = this.amdDefine
                }
            }), d("fetch", function (e) {
                return function (t) {
                    return t.metadata.scriptLoad = !0, e.call(this, t)
                }
            }), N = new l, e.SystemJS = N, N.version = "0.19.24 CSP", "object" == typeof exports && (module.exports = a), e.Reflect = e.Reflect || {}, e.Reflect.Loader = e.Reflect.Loader || a, e.Reflect.global = e.Reflect.global || e, e.LoaderPolyfill = a, N || (N = new o, N.constructor = o), "object" == typeof exports && (module.exports = N), e.System = N
        }("undefined" != typeof self ? self : global)
    }

    try {
        var t = "undefined" != typeof URLPolyfill || "test:" == new URL("test:///").protocol
    } catch (n) {
    }
    var r = "undefined" == typeof Promise || !t;
    if ("undefined" != typeof document) {
        var a = document.getElementsByTagName("script");
        if ($__curScript = a[a.length - 1], r) {
            var o = $__curScript.src, i = o.substr(0, o.lastIndexOf("/") + 1);
            window.systemJSBootstrap = e, document.write('<script type="text/javascript" src="' + i + 'system-polyfills.js"></script>')
        } else e()
    } else if ("undefined" != typeof importScripts) {
        var i = "";
        try {
            throw new Error("_")
        } catch (n) {
            n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function (e, t) {
                $__curScript = {src: t}, i = t.replace(/\/[^\/]*$/, "/")
            })
        }
        r && importScripts(i + "system-polyfills.js"), e()
    } else $__curScript = "undefined" != typeof __filename ? {src: __filename} : null, e()
}();
//# sourceMappingURL=system-csp-production.js.map
