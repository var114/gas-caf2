(function() {
    function g(a) {
        throw a;
    }
    var j = void 0, k=!0, m = null, o=!1;
    function aa(a) {
        return function() {
            return this[a]
        }
    }
    function s(a) {
        return function() {
            return a
        }
    }
    var t, ba = this;
    function ca() {}
    function da(a) {
        a.nb = function() {
            return a.jd ? a.jd : a.jd = new a
        }
    }
    function ea(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
                    return "object";
return b
}
function u(a) {
    return a !== j
}
function fa(a) {
    var b = ea(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
    return "string" == typeof a
}
function ga(a) {
    return "number" == typeof a
}
function ha(a) {
    var b = typeof a;
    return "object" == b && a != m || "function" == b
}
Math.floor(2147483648 * Math.random()).toString(36);
function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ja(a, b, c) {
    a || g(Error());
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function w(a, b, c) {
    w = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return w.apply(m, arguments)
}
function ka(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ge = b.prototype;
    a.prototype = new c
};
function la(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    g(Error("Invalid JSON string: " + a))
}
function ma() {
    this.jc = j
}
function na(a, b, c) {
    switch (typeof b) {
    case "string":
        oa(b, c);
        break;
    case "number":
        c.push(isFinite(b)&&!isNaN(b) ? b : "null");
        break;
    case "boolean":
        c.push(b);
        break;
    case "undefined":
        c.push("null");
        break;
    case "object":
        if (b == m) {
            c.push("null");
            break
        }
        if ("array" == ea(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), e = b[f], na(a, a.jc ? a.jc.call(b, String(f), e) : e, c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (f in b)
            Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d),
        oa(f, c), c.push(":"), na(a, a.jc ? a.jc.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        g(Error("Unknown type: " + typeof b))
    }
}
var pa = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, qa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
function oa(a, b) {
    b.push('"', a.replace(qa, function(a) {
        if (a in pa)
            return pa[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return pa[a] = e + b.toString(16)
    }), '"')
};
function ra(a) {
    return "undefined" !== typeof JSON && u(JSON.parse) ? JSON.parse(a) : la(a)
}
function y(a) {
    if ("undefined" !== typeof JSON && u(JSON.stringify))
        a = JSON.stringify(a);
    else {
        var b = [];
        na(new ma, a, b);
        a = b.join("")
    }
    return a
};
function sa(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        55296 <= e && 56319 >= e && (e -= 55296, d++, z(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e<<10) + (a.charCodeAt(d)-56320));
        128 > e ? b[c++] = e : (2048 > e ? b[c++] = e>>6 | 192 : (65536 > e ? b[c++] = e>>12 | 224 : (b[c++] = e>>18 | 240, b[c++] = e>>12 & 63 | 128), b[c++] = e>>6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
};
function A(a, b, c, d) {
    var e;
    d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
    e && g(Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + "."))
}
function B(a, b, c) {
    var d = "";
    switch (b) {
    case 1:
        d = c ? "first" : "First";
        break;
    case 2:
        d = c ? "second" : "Second";
        break;
    case 3:
        d = c ? "third" : "Third";
        break;
    case 4:
        d = c ? "fourth" : "Fourth";
        break;
    default:
        ta.assert(o, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
    }
    return a + " failed: " + (d + " argument ")
}
function C(a, b, c, d) {
    (!d || u(c)) && "function" != ea(c) && g(Error(B(a, b, d) + "must be a valid function."))
}
function ua(a, b, c) {
    u(c) && (!ha(c) || c === m) && g(Error(B(a, b, k) + "must be a valid context object."))
};
function D(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
function va(a, b) {
    if (Object.prototype.hasOwnProperty.call(a, b))
        return a[b]
};
var ta = {}, wa = /[\[\].#$\/]/, xa = /[\[\].#$]/;
function ya(a) {
    return v(a) && 0 !== a.length&&!wa.test(a)
}
function za(a, b, c) {
    (!c || u(b)) && Aa(B(a, 1, c), b)
}
function Aa(a, b, c, d) {
    c || (c = 0);
    d || (d = []);
    u(b) || g(Error(a + "contains undefined" + Ba(d)));
    "function" == ea(b) && g(Error(a + "contains a function" + Ba(d) + " with contents: " + b.toString()));
    Ca(b) && g(Error(a + "contains " + b.toString() + Ba(d)));
    1E3 < c && g(new TypeError(a + "contains a cyclic object value (" + d.slice(0, 100).join(".") + "...)"));
    v(b) && (b.length > 10485760 / 3 && 10485760 < sa(b).length) && g(Error(a + "contains a string greater than 10485760 utf8 bytes" + Ba(d) + " ('" + b.substring(0, 50) + "...')"));
    if (ha(b))
        for (var e in b)
            D(b,
            e) && (".priority" !== e && (".value" !== e && ".sv" !== e&&!ya(e)) && g(Error(a + "contains an invalid key (" + e + ")" + Ba(d) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')), d.push(e), Aa(a, b[e], c + 1, d), d.pop())
}
function Ba(a) {
    return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
}
function Da(a, b) {
    ha(b) || g(Error(B(a, 1, o) + " must be an object containing the children to replace."));
    za(a, b, o)
}
function Ea(a, b, c, d) {
    if (!d || u(c))
        c !== m && (!ga(c)&&!v(c) && (!ha(c) ||!D(c, ".sv"))) && g(Error(B(a, b, d) + "must be a valid firebase priority (a string, number, or null)."))
}
function Fa(a, b, c) {
    if (!c || u(b))
        switch (b) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
            break;
        default:
            g(Error(B(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))
        }
}
function Ga(a, b) {
    u(b)&&!ya(b) && g(Error(B(a, 2, k) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))
}
function Ha(a, b) {
    (!v(b) || 0 === b.length || xa.test(b)) && g(Error(B(a, 1, o) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))
}
function E(a, b) {
    ".info" === F(b) && g(Error(a + " failed: Can't modify data under /.info/"))
};
function H(a, b, c, d, e, f, h) {
    this.n = a;
    this.path = b;
    this.Ba = c;
    this.ca = d;
    this.va = e;
    this.za = f;
    this.Ra = h;
    u(this.ca) && (u(this.za) && u(this.Ba)) && g("Query: Can't combine startAt(), endAt(), and limit().")
}
H.prototype.Rc = function() {
    A("Query.ref", 0, 0, arguments.length);
    return new J(this.n, this.path)
};
H.prototype.ref = H.prototype.Rc;
H.prototype.Ya = function(a, b) {
    A("Query.on", 2, 4, arguments.length);
    Fa("Query.on", a, o);
    C("Query.on", 2, b, o);
    var c = Ia("Query.on", arguments[2], arguments[3]);
    this.n.Ob(this, a, b, c.cancel, c.T);
    return b
};
H.prototype.on = H.prototype.Ya;
H.prototype.vb = function(a, b, c) {
    A("Query.off", 0, 3, arguments.length);
    Fa("Query.off", a, k);
    C("Query.off", 2, b, k);
    ua("Query.off", 3, c);
    this.n.ic(this, a, b, c)
};
H.prototype.off = H.prototype.vb;
H.prototype.Td = function(a, b) {
    function c(h) {
        f && (f = o, e.vb(a, c), b.call(d.T, h))
    }
    A("Query.once", 2, 4, arguments.length);
    Fa("Query.once", a, o);
    C("Query.once", 2, b, o);
    var d = Ia("Query.once", arguments[2], arguments[3]), e = this, f = k;
    this.Ya(a, c, function(b) {
        e.vb(a, c);
        d.cancel && d.cancel.call(d.T, b)
    })
};
H.prototype.once = H.prototype.Td;
H.prototype.Md = function(a) {
    A("Query.limit", 1, 1, arguments.length);
    (!ga(a) || Math.floor(a) !== a || 0 >= a) && g("Query.limit: First argument must be a positive integer.");
    return new H(this.n, this.path, a, this.ca, this.va, this.za, this.Ra)
};
H.prototype.limit = H.prototype.Md;
H.prototype.be = function(a, b) {
    A("Query.startAt", 0, 2, arguments.length);
    Ea("Query.startAt", 1, a, k);
    Ga("Query.startAt", b);
    u(a) || (b = a = m);
    return new H(this.n, this.path, this.Ba, a, b, this.za, this.Ra)
};
H.prototype.startAt = H.prototype.be;
H.prototype.Gd = function(a, b) {
    A("Query.endAt", 0, 2, arguments.length);
    Ea("Query.endAt", 1, a, k);
    Ga("Query.endAt", b);
    return new H(this.n, this.path, this.Ba, this.ca, this.va, a, b)
};
H.prototype.endAt = H.prototype.Gd;
function Ja(a) {
    var b = {};
    u(a.ca) && (b.sp = a.ca);
    u(a.va) && (b.sn = a.va);
    u(a.za) && (b.ep = a.za);
    u(a.Ra) && (b.en = a.Ra);
    u(a.Ba) && (b.l = a.Ba);
    u(a.ca) && (u(a.va) && a.ca === m && a.va === m) && (b.vf = "l");
    return b
}
H.prototype.La = function() {
    var a = Ka(Ja(this));
    return "{}" === a ? "default" : a
};
function Ia(a, b, c) {
    var d = {};
    b && c ? (d.cancel = b, C(a, 3, d.cancel, k), d.T = c, ua(a, 4, d.T)) : b && ("object" === typeof b && b !== m ? d.T = b : "function" === typeof b ? d.cancel = b : g(Error(B(a, 3, k) + "must either be a cancel callback or a context object.")));
    return d
};
function K(a) {
    if (a instanceof K)
        return a;
    if (1 == arguments.length) {
        this.m = a.split("/");
        for (var b = 0, c = 0; c < this.m.length; c++)
            0 < this.m[c].length && (this.m[b] = this.m[c], b++);
        this.m.length = b;
        this.Z = 0
    } else 
        this.m = arguments[0], this.Z = arguments[1]
}
function F(a) {
    return a.Z >= a.m.length ? m : a.m[a.Z]
}
function La(a) {
    var b = a.Z;
    b < a.m.length && b++;
    return new K(a.m, b)
}
t = K.prototype;
t.toString = function() {
    for (var a = "", b = this.Z; b < this.m.length; b++)
        "" !== this.m[b] && (a += "/" + this.m[b]);
    return a || "/"
};
t.parent = function() {
    if (this.Z >= this.m.length)
        return m;
    for (var a = [], b = this.Z; b < this.m.length-1; b++)
        a.push(this.m[b]);
    return new K(a, 0)
};
t.F = function(a) {
    for (var b = [], c = this.Z; c < this.m.length; c++)
        b.push(this.m[c]);
    if (a instanceof K)
        for (c = a.Z; c < a.m.length; c++)
            b.push(a.m[c]);
    else {
        a = a.split("/");
        for (c = 0; c < a.length; c++)
            0 < a[c].length && b.push(a[c])
    }
    return new K(b, 0)
};
t.f = function() {
    return this.Z >= this.m.length
};
function Ma(a, b) {
    var c = F(a);
    if (c === m)
        return b;
    if (c === F(b))
        return Ma(La(a), La(b));
    g("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")")
}
t.contains = function(a) {
    var b = 0;
    if (this.m.length > a.m.length)
        return o;
    for (; b < this.m.length;) {
        if (this.m[b] !== a.m[b])
            return o;
        ++b
    }
    return k
};
function Na() {
    this.children = {};
    this.uc = 0;
    this.value = m
}
function Oa(a, b, c) {
    this.Ca = a ? a : "";
    this.Bb = b ? b : m;
    this.A = c ? c : new Na
}
function L(a, b) {
    for (var c = b instanceof K ? b : new K(b), d = a, e; (e = F(c)) !== m;)
        d = new Oa(e, d, va(d.A.children, e) || new Na), c = La(c);
    return d
}
t = Oa.prototype;
t.k = function() {
    return this.A.value
};
function Pa(a, b) {
    z("undefined" !== typeof b);
    a.A.value = b;
    Qa(a)
}
t.ob = function() {
    return 0 < this.A.uc
};
t.f = function() {
    return this.k() === m&&!this.ob()
};
t.z = function(a) {
    for (var b in this.A.children)
        a(new Oa(b, this, this.A.children[b]))
};
function Ra(a, b, c, d) {
    c&&!d && b(a);
    a.z(function(a) {
        Ra(a, b, k, d)
    });
    c && d && b(a)
}
function Sa(a, b, c) {
    for (a = c ? a : a.parent(); a !== m;) {
        if (b(a))
            return k;
        a = a.parent()
    }
    return o
}
t.path = function() {
    return new K(this.Bb === m ? this.Ca : this.Bb.path() + "/" + this.Ca)
};
t.name = aa("Ca");
t.parent = aa("Bb");
function Qa(a) {
    if (a.Bb !== m) {
        var b = a.Bb, c = a.Ca, d = a.f(), e = D(b.A.children, c);
        d && e ? (delete b.A.children[c], b.A.uc--, Qa(b)) : !d&&!e && (b.A.children[c] = a.A, b.A.uc++, Qa(b))
    }
};
function Ta(a, b) {
    this.Oa = a ? a : Ua;
    this.ba = b ? b : Va
}
function Ua(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}
t = Ta.prototype;
t.oa = function(a, b) {
    return new Ta(this.Oa, this.ba.oa(a, b, this.Oa).copy(m, m, o, m, m))
};
t.remove = function(a) {
    return new Ta(this.Oa, this.ba.remove(a, this.Oa).copy(m, m, o, m, m))
};
t.get = function(a) {
    for (var b, c = this.ba; !c.f();) {
        b = this.Oa(a, c.key);
        if (0 === b)
            return c.value;
        0 > b ? c = c.left : 0 < b && (c = c.right)
    }
    return m
};
function Wa(a, b) {
    for (var c, d = a.ba, e = m; !d.f();) {
        c = a.Oa(b, d.key);
        if (0 === c) {
            if (d.left.f())
                return e ? e.key : m;
            for (d = d.left; !d.right.f();)
                d = d.right;
            return d.key
        }
        0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
    }
    g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))
}
t.f = function() {
    return this.ba.f()
};
t.count = function() {
    return this.ba.count()
};
t.ub = function() {
    return this.ba.ub()
};
t.Wa = function() {
    return this.ba.Wa()
};
t.Aa = function(a) {
    return this.ba.Aa(a)
};
t.Ma = function(a) {
    return this.ba.Ma(a)
};
t.Ua = function(a) {
    return new Xa(this.ba, a)
};
function Xa(a, b) {
    this.sd = b;
    for (this.Wb = []; !a.f();)
        this.Wb.push(a), a = a.left
}
function Ya(a) {
    if (0 === a.Wb.length)
        return m;
    var b = a.Wb.pop(), c;
    c = a.sd ? a.sd(b.key, b.value) : {
        key: b.key,
        value: b.value
    };
    for (b = b.right; !b.f();)
        a.Wb.push(b), b = b.left;
    return c
}
function Za(a, b, c, d, e) {
    this.key = a;
    this.value = b;
    this.color = c != m ? c : k;
    this.left = d != m ? d : Va;
    this.right = e != m ? e : Va
}
t = Za.prototype;
t.copy = function(a, b, c, d, e) {
    return new Za(a != m ? a : this.key, b != m ? b : this.value, c != m ? c : this.color, d != m ? d : this.left, e != m ? e : this.right)
};
t.count = function() {
    return this.left.count() + 1 + this.right.count()
};
t.f = s(o);
t.Aa = function(a) {
    return this.left.Aa(a) || a(this.key, this.value) || this.right.Aa(a)
};
t.Ma = function(a) {
    return this.right.Ma(a) || a(this.key, this.value) || this.left.Ma(a)
};
function $a(a) {
    return a.left.f() ? a : $a(a.left)
}
t.ub = function() {
    return $a(this).key
};
t.Wa = function() {
    return this.right.f() ? this.key : this.right.Wa()
};
t.oa = function(a, b, c) {
    var d, e;
    e = this;
    d = c(a, e.key);
    e = 0 > d ? e.copy(m, m, m, e.left.oa(a, b, c), m) : 0 === d ? e.copy(m, b, m, m, m) : e.copy(m, m, m, m, e.right.oa(a, b, c));
    return ab(e)
};
function bb(a) {
    if (a.left.f())
        return Va;
    !a.left.N()&&!a.left.left.N() && (a = cb(a));
    a = a.copy(m, m, m, bb(a.left), m);
    return ab(a)
}
t.remove = function(a, b) {
    var c, d;
    c = this;
    if (0 > b(a, c.key))!c.left.f() && (!c.left.N()&&!c.left.left.N()) && (c = cb(c))
        , c = c.copy(m, m, m, c.left.remove(a, b), m);
    else {
        c.left.N() && (c = fb(c));
        !c.right.f() && (!c.right.N()&&!c.right.left.N()) && (c = gb(c), c.left.left.N() && (c = fb(c), c = gb(c)));
        if (0 === b(a, c.key)) {
            if (c.right.f())
                return Va;
            d = $a(c.right);
            c = c.copy(d.key, d.value, m, m, bb(c.right))
        }
        c = c.copy(m, m, m, m, c.right.remove(a, b))
    }
    return ab(c)
};
t.N = aa("color");
function ab(a) {
    a.right.N()&&!a.left.N() && (a = hb(a));
    a.left.N() && a.left.left.N() && (a = fb(a));
    a.left.N() && a.right.N() && (a = gb(a));
    return a
}
function cb(a) {
    a = gb(a);
    a.right.left.N() && (a = a.copy(m, m, m, m, fb(a.right)), a = hb(a), a = gb(a));
    return a
}
function hb(a) {
    var b;
    b = a.copy(m, m, k, m, a.right.left);
    return a.right.copy(m, m, a.color, b, m)
}
function fb(a) {
    var b;
    b = a.copy(m, m, k, a.left.right, m);
    return a.left.copy(m, m, a.color, m, b)
}
function gb(a) {
    var b, c;
    b = a.left.copy(m, m, !a.left.color, m, m);
    c = a.right.copy(m, m, !a.right.color, m, m);
    return a.copy(m, m, !a.color, b, c)
}
function ib() {}
t = ib.prototype;
t.copy = function() {
    return this
};
t.oa = function(a, b) {
    return new Za(a, b, j, j, j)
};
t.remove = function() {
    return this
};
t.count = s(0);
t.f = s(k);
t.Aa = s(o);
t.Ma = s(o);
t.ub = s(m);
t.Wa = s(m);
t.N = s(o);
var Va = new ib;
function jb(a) {
    this.Rb = a;
    this.ec = "firebase:"
}
jb.prototype.set = function(a, b) {
    b == m ? this.Rb.removeItem(this.ec + a) : this.Rb.setItem(this.ec + a, y(b))
};
jb.prototype.get = function(a) {
    a = this.Rb.getItem(this.ec + a);
    return a == m ? m : ra(a)
};
jb.prototype.remove = function(a) {
    this.Rb.removeItem(this.ec + a)
};
jb.prototype.ld = o;
function kb() {
    this.jb = {}
}
kb.prototype.set = function(a, b) {
    b == m ? delete this.jb[a] : this.jb[a] = b
};
kb.prototype.get = function(a) {
    return D(this.jb, a) ? this.jb[a] : m
};
kb.prototype.remove = function(a) {
    delete this.jb[a]
};
kb.prototype.ld = k;
function lb(a) {
    try {
        if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
            var b = window[a];
            b.setItem("firebase:sentinel", "cache");
            b.removeItem("firebase:sentinel");
            return new jb(b)
        }
    } catch (c) {}
    return new kb
}
var mb = lb("localStorage"), nb = lb("sessionStorage");
function ob(a, b, c, d) {
    this.host = a.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf(".") + 1);
    this.kc = b;
    this.Vb = c;
    this.de = d;
    this.ea = mb.get("host:" + a) || this.host
}
function pb(a, b) {
    b !== a.ea && (a.ea = b, "s-" === a.ea.substr(0, 2) && mb.set("host:" + a.host, a.ea))
}
ob.prototype.toString = function() {
    return (this.kc ? "https://" : "http://") + this.host
};
function qb() {};
function rb() {
    this.B = [];
    this.tc = [];
    this.Bd = [];
    this.bc = [];
    this.bc[0] = 128;
    for (var a = 1; 64 > a; ++a)
        this.bc[a] = 0;
    this.reset()
}
ka(rb, qb);
rb.prototype.reset = function() {
    this.B[0] = 1732584193;
    this.B[1] = 4023233417;
    this.B[2] = 2562383102;
    this.B[3] = 271733878;
    this.B[4] = 3285377520;
    this.Zc = this.pb = 0
};
function sb(a, b) {
    var c;
    c || (c = 0);
    for (var d = a.Bd, e = c; e < c + 64; e += 4)
        d[e / 4] = b[e]<<24 | b[e + 1]<<16 | b[e + 2]<<8 | b[e + 3];
    for (e = 16; 80 > e; e++) {
        var f = d[e-3]^d[e-8]^d[e-14]^d[e-16];
        d[e] = (f<<1 | f>>>31) & 4294967295
    }
    c = a.B[0];
    for (var h = a.B[1], i = a.B[2], l = a.B[3], n = a.B[4], p, e = 0; 80 > e; e++)
        40 > e ? 20 > e ? (f = l^h & (i^l), p = 1518500249) : (f = h^i^l, p = 1859775393) : 60 > e ? (f = h & i | l & (h | i), p = 2400959708) : (f = h^i^l, p = 3395469782), f = (c<<5 | c>>>27) + f + n + p + d[e] & 4294967295, n = l, l = i, i = (h<<30 | h>>>2) & 4294967295, h = c, c = f;
    a.B[0] = a.B[0] + c & 4294967295;
    a.B[1] = a.B[1] + h &
    4294967295;
    a.B[2] = a.B[2] + i & 4294967295;
    a.B[3] = a.B[3] + l & 4294967295;
    a.B[4] = a.B[4] + n & 4294967295
}
rb.prototype.update = function(a, b) {
    u(b) || (b = a.length);
    var c = this.tc, d = this.pb, e = 0;
    if (v(a))
        for (; e < b;)
            c[d++] = a.charCodeAt(e++), 64 == d && (sb(this, c), d = 0);
    else 
        for (; e < b;)
            c[d++] = a[e++], 64 == d && (sb(this, c), d = 0);
    this.pb = d;
    this.Zc += b
};
var tb = Array.prototype, ub = tb.forEach ? function(a, b, c) {
    tb.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, vb = tb.map ? function(a, b, c) {
    return tb.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, h = 0; h < d; h++)
        h in f && (e[h] = b.call(c, f[h], h, a));
    return e
}, wb = tb.every ? function(a, b, c) {
    return tb.every.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e&&!b.call(c, e[f], f,
        a))
            return o;
    return k
};
var xb, yb, zb, Ab;
function Bb() {
    return ba.navigator ? ba.navigator.userAgent : m
}
Ab = zb = yb = xb = o;
var Cb;
if (Cb = Bb()) {
    var Db = ba.navigator;
    xb = 0 == Cb.indexOf("Opera");
    yb=!xb&&-1 != Cb.indexOf("MSIE");
    zb=!xb&&-1 != Cb.indexOf("WebKit");
    Ab=!xb&&!zb && "Gecko" == Db.product
}
var Eb = yb, Fb = Ab, Gb = zb;
var Hb;
if (xb && ba.opera) {
    var Ib = ba.opera.version;
    "function" == typeof Ib && Ib()
} else 
    Fb ? Hb = /rv\:([^\);]+)(\)|;)/ : Eb ? Hb = /MSIE\s+([^\);]+)(\)|;)/ : Gb && (Hb = /WebKit\/(\S+)/), Hb && Hb.exec(Bb());
var Jb = m, Kb = m;
function Lb(a, b) {
    fa(a) || g(Error("encodeByteArray takes an array as a parameter"));
    if (!Jb) {
        Jb = {};
        Kb = {};
        for (var c = 0; 65 > c; c++)
            Jb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Kb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
    }
    for (var c = b ? Kb : Jb, d = [], e = 0; e < a.length; e += 3) {
        var f = a[e], h = e + 1 < a.length, i = h ? a[e + 1]: 0, l = e + 2 < a.length, n = l ? a[e + 2]: 0, p = f>>2, f = (f & 3)<<4 | i>>4, i = (i & 15)<<2 | n>>6, n = n & 63;
        l || (n = 64, h || (i = 64));
        d.push(c[p], c[f], c[i], c[n])
    }
    return d.join("")
};
var Mb, Nb = 1;
Mb = function() {
    return Nb++
};
function z(a, b) {
    a || g(Error("Firebase INTERNAL ASSERT FAILED:" + b))
}
function Ob(a) {
    var b = sa(a), a = new rb;
    a.update(b);
    var b = [], c = 8 * a.Zc;
    56 > a.pb ? a.update(a.bc, 56 - a.pb) : a.update(a.bc, 64 - (a.pb-56));
    for (var d = 63; 56 <= d; d--)
        a.tc[d] = c & 255, c/=256;
    sb(a, a.tc);
    for (d = c = 0; 5 > d; d++)
        for (var e = 24; 0 <= e; e -= 8)
            b[c++] = a.B[d]>>e & 255;
    return Lb(b)
}
function Pb() {
    for (var a = "", b = 0; b < arguments.length; b++)
        a = fa(arguments[b]) ? a + Pb.apply(m, arguments[b]) : "object" === typeof arguments[b] ? a + y(arguments[b]) : a + arguments[b], a += " ";
    return a
}
var Qb = m, Rb = k;
function M() {
    Rb === k && (Rb = o, Qb === m && nb.get("logging_enabled") === k && Sb(k));
    if (Qb) {
        var a = Pb.apply(m, arguments);
        Qb(a)
    }
}
function Tb(a) {
    return function() {
        M(a, arguments)
    }
}
function Ub() {
    if ("undefined" !== typeof console) {
        var a = "FIREBASE INTERNAL ERROR: " + Pb.apply(m, arguments);
        "undefined" !== typeof console.error ? console.error(a) : console.log(a)
    }
}
function Vb() {
    var a = Pb.apply(m, arguments);
    g(Error("FIREBASE FATAL ERROR: " + a))
}
function N() {
    if ("undefined" !== typeof console) {
        var a = "FIREBASE WARNING: " + Pb.apply(m, arguments);
        "undefined" !== typeof console.warn ? console.warn(a) : console.log(a)
    }
}
function Ca(a) {
    return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
}
function Wb(a, b) {
    return a !== b ? a === m?-1 : b === m ? 1 : typeof a !== typeof b ? "number" === typeof a?-1 : 1 : a > b ? 1 : -1 : 0
}
function Xb(a, b) {
    if (a === b)
        return 0;
    var c = Yb(a), d = Yb(b);
    return c !== m ? d !== m ? c - d : -1 : d !== m ? 1 : a < b?-1 : 1
}
function Zb(a, b) {
    if (b && a in b)
        return b[a];
    g(Error("Missing required key (" + a + ") in object: " + y(b)))
}
function Ka(a) {
    if ("object" !== typeof a || a === m)
        return y(a);
    var b = [], c;
    for (c in a)
        b.push(c);
    b.sort();
    c = "{";
    for (var d = 0; d < b.length; d++)
        0 !== d && (c += ","), c += y(b[d]), c += ":", c += Ka(a[b[d]]);
    return c + "}"
}
function $b(a, b) {
    if (a.length <= b)
        return [a];
    for (var c = [], d = 0; d < a.length; d += b)
        d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
    return c
}
function ac(a, b) {
    if ("array" == ea(a))
        for (var c = 0; c < a.length; ++c)
            b(c, a[c]);
    else 
        bc(a, b)
}
function cc(a) {
    z(!Ca(a));
    var b, c, d, e;
    0 === a ? (d = c = 0, b =- Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
    e = [];
    for (a = 52; a; a -= 1)
        e.push(d%2 ? 1 : 0), d = Math.floor(d / 2);
    for (a = 11; a; a -= 1)
        e.push(c%2 ? 1 : 0), c = Math.floor(c / 2);
    e.push(b ? 1 : 0);
    e.reverse();
    b = e.join("");
    c = "";
    for (a = 0; 64 > a; a += 8)
        d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
    return c.toLowerCase()
}
var dc = /^-?\d{1,10}$/;
function Yb(a) {
    return dc.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : m
}
function ec(a) {
    try {
        a()
    } catch (b) {
        setTimeout(function() {
            g(b)
        })
    }
};
function fc(a, b) {
    this.D = a;
    z(this.D !== m, "LeafNode shouldn't be created with null value.");
    this.Za = "undefined" !== typeof b ? b : m
}
t = fc.prototype;
t.M = s(k);
t.j = aa("Za");
t.Ea = function(a) {
    return new fc(this.D, a)
};
t.L = function() {
    return O
};
t.Q = function(a) {
    return F(a) === m ? this : O
};
t.da = s(m);
t.H = function(a, b) {
    return (new Q).H(a, b).Ea(this.Za)
};
t.xa = function(a, b) {
    var c = F(a);
    return c === m ? b : this.H(c, O.xa(La(a), b))
};
t.f = s(o);
t.Xb = s(0);
t.V = function(a) {
    return a && this.j() !== m ? {
        ".value": this.k(),
        ".priority": this.j()
    } : this.k()
};
t.hash = function() {
    var a = "";
    this.j() !== m && (a += "priority:" + gc(this.j()) + ":");
    var b = typeof this.D, a = a + (b + ":"), a = "number" === b ? a + cc(this.D): a + this.D;
    return Ob(a)
};
t.k = aa("D");
t.toString = function() {
    return "string" === typeof this.D ? '"' + this.D + '"' : this.D
};
function hc(a, b) {
    return Wb(a.ha, b.ha) || Xb(a.name, b.name)
}
function ic(a, b) {
    return Xb(a.name, b.name)
}
function jc(a, b) {
    return Xb(a, b)
};
function Q(a, b) {
    this.o = a || new Ta(jc);
    this.Za = "undefined" !== typeof b ? b : m
}
t = Q.prototype;
t.M = s(o);
t.j = aa("Za");
t.Ea = function(a) {
    return new Q(this.o, a)
};
t.H = function(a, b) {
    var c = this.o.remove(a);
    b && b.f() && (b = m);
    b !== m && (c = c.oa(a, b));
    return b && b.j() !== m ? new kc(c, m, this.Za) : new Q(c, this.Za)
};
t.xa = function(a, b) {
    var c = F(a);
    if (c === m)
        return b;
    var d = this.L(c).xa(La(a), b);
    return this.H(c, d)
};
t.f = function() {
    return this.o.f()
};
t.Xb = function() {
    return this.o.count()
};
var lc = /^\d+$/;
t = Q.prototype;
t.V = function(a) {
    if (this.f())
        return m;
    var b = {}, c = 0, d = 0, e = k;
    this.z(function(f, h) {
        b[f] = h.V(a);
        c++;
        e && lc.test(f) ? d = Math.max(d, Number(f)) : e = o
    });
    if (!a && e && d < 2 * c) {
        var f = [], h;
        for (h in b)
            f[h] = b[h];
        return f
    }
    a && this.j() !== m && (b[".priority"] = this.j());
    return b
};
t.hash = function() {
    var a = "";
    this.j() !== m && (a += "priority:" + gc(this.j()) + ":");
    this.z(function(b, c) {
        var d = c.hash();
        "" !== d && (a += ":" + b + ":" + d)
    });
    return "" === a ? "" : Ob(a)
};
t.L = function(a) {
    a = this.o.get(a);
    return a === m ? O : a
};
t.Q = function(a) {
    var b = F(a);
    return b === m ? this : this.L(b).Q(La(a))
};
t.da = function(a) {
    return Wa(this.o, a)
};
t.gd = function() {
    return this.o.ub()
};
t.hd = function() {
    return this.o.Wa()
};
t.z = function(a) {
    return this.o.Aa(a)
};
t.Ac = function(a) {
    return this.o.Ma(a)
};
t.Ua = function() {
    return this.o.Ua()
};
t.toString = function() {
    var a = "{", b = k;
    this.z(function(c, d) {
        b ? b = o : a += ", ";
        a += '"' + c + '" : ' + d.toString()
    });
    return a += "}"
};
var O = new Q;
function kc(a, b, c) {
    Q.call(this, a, c);
    b === m && (b = new Ta(hc), a.Aa(function(a, c) {
        b = b.oa({
            name: a,
            ha: c.j()
        }, c)
    }));
    this.ua = b
}
ka(kc, Q);
t = kc.prototype;
t.H = function(a, b) {
    var c = this.L(a), d = this.o, e = this.ua;
    c !== m && (d = d.remove(a), e = e.remove({
        name : a, ha : c.j()
    }));
    b && b.f() && (b = m);
    b !== m && (d = d.oa(a, b), e = e.oa({
        name : a, ha : b.j()
    }, b));
    return new kc(d, e, this.j())
};
t.da = function(a, b) {
    var c = Wa(this.ua, {
        name: a,
        ha: b.j()
    });
    return c ? c.name : m
};
t.z = function(a) {
    return this.ua.Aa(function(b, c) {
        return a(b.name, c)
    })
};
t.Ac = function(a) {
    return this.ua.Ma(function(b, c) {
        return a(b.name, c)
    })
};
t.Ua = function() {
    return this.ua.Ua(function(a, b) {
        return {
            key: a.name,
            value: b
        }
    })
};
t.gd = function() {
    return this.ua.f() ? m : this.ua.ub().name
};
t.hd = function() {
    return this.ua.f() ? m : this.ua.Wa().name
};
function R(a, b) {
    if (a === m)
        return O;
    var c = m;
    "object" === typeof a && ".priority"in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
    z(c === m || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv"in c);
    "object" === typeof a && (".value"in a && a[".value"] !== m) && (a = a[".value"]);
    if ("object" !== typeof a || ".sv"in a)
        return new fc(a, c);
    if (a instanceof Array) {
        var d = O;
        bc(a, function(b, c) {
            if (D(a, c) && "." !== c.substring(0, 1)) {
                var e = R(b);
                if (e.M() ||!e.f())
                    d = d.H(c, e)
            }
        });
        return d.Ea(c)
    }
    var e = [], f = {}, h = o;
    ac(a, function(b,
    c) {
        if ("string" !== typeof c || "." !== c.substring(0, 1)) {
            var d = R(a[c]);
            d.f() || (h = h || d.j() !== m, e.push({
                name : c, ha : d.j()
            }), f[c] = d)
        }
    });
    var i = mc(e, f, o);
    if (h) {
        var l = mc(e, f, k);
        return new kc(i, l, c)
    }
    return new Q(i, c)
}
var nc = Math.log(2);
function pc(a) {
    this.count = parseInt(Math.log(a + 1) / nc);
    this.dd = this.count-1;
    this.Dd = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
}
function mc(a, b, c) {
    function d(d, f) {
        var h = n - d, p = n;
        n -= d;
        var q = a[h].name, h = new Za(c ? a[h] : q, b[q], f, m, e(h + 1, p));
        i ? i.left = h : l = h;
        i = h
    }
    function e(d, f) {
        var h = f - d;
        if (0 == h)
            return m;
        if (1 == h) {
            var h = a[d].name, i = c ? a[d]: h;
            return new Za(i, b[h], o, m, m)
        }
        var i = parseInt(h / 2) + d, l = e(d, i), n = e(i + 1, f), h = a[i].name, i = c ? a[i]: h;
        return new Za(i, b[h], o, l, n)
    }
    var f = c ? hc: ic;
    a.sort(f);
    var h, f = new pc(a.length), i = m, l = m, n = a.length;
    for (h = 0; h < f.count; ++h) {
        var p=!(f.Dd & 1<<f.dd);
        f.dd--;
        var q = Math.pow(2, f.count - (h + 1));
        p ? d(q, o) : (d(q, o), d(q, k))
    }
    h =
    l;
    f = c ? hc : jc;
    return h !== m ? new Ta(f, h) : new Ta(f)
}
function gc(a) {
    return "number" === typeof a ? "number:" + cc(a) : "string:" + a
};
function S(a, b) {
    this.A = a;
    this.hc = b
}
S.prototype.V = function() {
    A("Firebase.DataSnapshot.val", 0, 0, arguments.length);
    return this.A.V()
};
S.prototype.val = S.prototype.V;
S.prototype.Hd = function() {
    A("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
    return this.A.V(k)
};
S.prototype.exportVal = S.prototype.Hd;
S.prototype.F = function(a) {
    A("Firebase.DataSnapshot.child", 0, 1, arguments.length);
    ga(a) && (a = String(a));
    Ha("Firebase.DataSnapshot.child", a);
    var b = new K(a), c = this.hc.F(b);
    return new S(this.A.Q(b), c)
};
S.prototype.child = S.prototype.F;
S.prototype.Ec = function(a) {
    A("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
    Ha("Firebase.DataSnapshot.hasChild", a);
    var b = new K(a);
    return !this.A.Q(b).f()
};
S.prototype.hasChild = S.prototype.Ec;
S.prototype.j = function() {
    A("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
    return this.A.j()
};
S.prototype.getPriority = S.prototype.j;
S.prototype.forEach = function(a) {
    A("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
    C("Firebase.DataSnapshot.forEach", 1, a, o);
    if (this.A.M())
        return o;
    var b = this;
    return this.A.z(function(c, d) {
        return a(new S(d, b.hc.F(c)))
    })
};
S.prototype.forEach = S.prototype.forEach;
S.prototype.ob = function() {
    A("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
    return this.A.M() ? o : !this.A.f()
};
S.prototype.hasChildren = S.prototype.ob;
S.prototype.name = function() {
    A("Firebase.DataSnapshot.name", 0, 0, arguments.length);
    return this.hc.name()
};
S.prototype.name = S.prototype.name;
S.prototype.Xb = function() {
    A("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
    return this.A.Xb()
};
S.prototype.numChildren = S.prototype.Xb;
S.prototype.Rc = function() {
    A("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
    return this.hc
};
S.prototype.ref = S.prototype.Rc;
function qc(a) {
    z("array" == ea(a) && 0 < a.length);
    this.Cd = a;
    this.tb = {}
}
qc.prototype.Cc = function() {};
qc.prototype.ad = function(a) {
    for (var b = this.tb[a] || [], c = 0; c < b.length; c++)
        b[c].X.apply(b[c].T, Array.prototype.slice.call(arguments, 1))
};
qc.prototype.Ya = function(a, b, c) {
    rc(this, a);
    this.tb[a] = this.tb[a] || [];
    this.tb[a].push({
        X: b,
        T: c
    });
    (a = this.Cc(a)) && b.apply(c, a)
};
qc.prototype.vb = function(a, b, c) {
    rc(this, a);
    for (var a = this.tb[a] || [], d = 0; d < a.length; d++)
        if (a[d].X === b && (!c || c === a[d].T)) {
            a.splice(d, 1);
            break
        }
};
function rc(a, b) {
    var c = a.Cd, d;
    a: {
        d = function(a) {
            return a === b
        };
        for (var e = c.length, f = v(c) ? c.split("") : c, h = 0; h < e; h++)
            if (h in f && d.call(j, f[h])) {
                d = h;
                break a
            }
        d =- 1
    }
    z(0 > d ? m : v(c) ? c.charAt(d) : c[d], "Unknown event: " + b)
};
function sc() {
    qc.call(this, ["visible"]);
    var a, b;
    "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
    this.hb = k;
    if (b) {
        var c = this;
        document.addEventListener(b,
        function() {
            var b=!document[a];
            if (b !== c.hb) {
                c.hb = b;
                c.ad("visible", b)
            }
        }, o)
    }
}
ka(sc, qc);
da(sc);
sc.prototype.Cc = function(a) {
    z("visible" === a);
    return [this.hb]
};
function bc(a, b) {
    for (var c in a)
        b.call(j, a[c], c, a)
}
function tc(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
};
function uc() {
    this.kb = {}
}
function vc(a, b, c) {
    u(c) || (c = 1);
    D(a.kb, b) || (a.kb[b] = 0);
    a.kb[b] += c
}
uc.prototype.get = function() {
    return tc(this.kb)
};
function wc(a) {
    this.Ed = a;
    this.Tb = m
}
wc.prototype.get = function() {
    var a = this.Ed.get(), b = tc(a);
    if (this.Tb)
        for (var c in this.Tb)
            b[c] -= this.Tb[c];
    this.Tb = a;
    return b
};
function xc(a, b) {
    this.Wc = {};
    this.nc = new wc(a);
    this.u = b;
    setTimeout(w(this.qd, this), 10 + 6E4 * Math.random())
}
xc.prototype.qd = function() {
    var a = this.nc.get(), b = {}, c = o, d;
    for (d in a)
        0 < a[d] && D(this.Wc, d) && (b[d] = a[d], c = k);
    c && (a = this.u, a.P && (b = {
        c : b
    }, a.e("reportStats", b), a.Da("s", b)));
    setTimeout(w(this.qd, this), 6E5 * Math.random())
};
var yc = {}, zc = {};
function Ac(a) {
    a = a.toString();
    yc[a] || (yc[a] = new uc);
    return yc[a]
};
var Bc = m;
"undefined" !== typeof MozWebSocket ? Bc = MozWebSocket : "undefined" !== typeof WebSocket && (Bc = WebSocket);
function Cc(a, b, c) {
    this.wc = a;
    this.e = Tb(this.wc);
    this.frames = this.rb = m;
    this.Yc = 0;
    this.$ = Ac(b);
    this.Pa = (b.kc ? "wss://" : "ws://") + b.ea + "/.ws?v=5";
    b.host !== b.ea && (this.Pa = this.Pa + "&ns=" + b.Vb);
    c && (this.Pa = this.Pa + "&s=" + c)
}
var Dc;
Cc.prototype.open = function(a, b) {
    this.ga = b;
    this.Qd = a;
    this.e("Websocket connecting to " + this.Pa);
    this.W = new Bc(this.Pa);
    this.lb = o;
    mb.set("previous_websocket_failure", k);
    var c = this;
    this.W.onopen = function() {
        c.e("Websocket connected.");
        c.lb = k
    };
    this.W.onclose = function() {
        c.e("Websocket connection was disconnected.");
        c.W = m;
        c.Ka()
    };
    this.W.onmessage = function(a) {
        if (c.W !== m)
            if (a = a.data, vc(c.$, "bytes_received", a.length)
                , Ec(c), c.frames !== m)Fc(c, a);
        else {
            a:
            {
                z(c.frames === m, "We already have a frame buffer");
                if (6 >=
                a.length) {
                    var b = Number(a);
                    if (!isNaN(b)) {
                        c.Yc = b;
                        c.frames = [];
                        a = m;
                        break a
                    }
                }
                c.Yc = 1;
                c.frames = []
            }
            a !== m && Fc(c, a)
        }
    };
    this.W.onerror = function(a) {
        c.e("WebSocket error.  Closing connection.");
        a.data && c.e(a.data);
        c.Ka()
    }
};
Cc.prototype.start = function() {};
Cc.isAvailable = function() {
    var a = o;
    if ("undefined" !== typeof navigator && navigator.userAgent) {
        var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
        b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = k)
    }
    return !a && Bc !== m&&!Dc
};
Cc.responsesRequiredToBeHealthy = 2;
Cc.healthyTimeout = 3E4;
t = Cc.prototype;
t.Ic = function() {
    mb.remove("previous_websocket_failure")
};
function Fc(a, b) {
    a.frames.push(b);
    if (a.frames.length == a.Yc) {
        var c = a.frames.join("");
        a.frames = m;
        c = ra(c);
        a.Qd(c)
    }
}
t.send = function(a) {
    Ec(this);
    a = y(a);
    vc(this.$, "bytes_sent", a.length);
    a = $b(a, 16384);
    1 < a.length && this.W.send(String(a.length));
    for (var b = 0; b < a.length; b++)
        this.W.send(a[b])
};
t.Jb = function() {
    this.Ia = k;
    this.rb && (clearInterval(this.rb), this.rb = m);
    this.W && (this.W.close(), this.W = m)
};
t.Ka = function() {
    this.Ia || (this.e("WebSocket is closing itself"), this.Jb(), this.ga && (this.ga(this.lb), this.ga = m))
};
t.close = function() {
    this.Ia || (this.e("WebSocket is being closed"), this.Jb())
};
function Ec(a) {
    clearInterval(a.rb);
    a.rb = setInterval(function() {
        a.W && a.W.send("0");
        Ec(a)
    }, 45E3)
};
function Gc(a) {
    this.Mc = a;
    this.dc = [];
    this.Qa = 0;
    this.vc =- 1;
    this.Ja = m
};
function Hc() {
    this.set = {}
}
t = Hc.prototype;
t.add = function(a, b) {
    this.set[a] = b !== m ? b : k
};
t.contains = function(a) {
    return D(this.set, a)
};
t.get = function(a) {
    return this.contains(a) ? this.set[a] : j
};
t.remove = function(a) {
    delete this.set[a]
};
t.f = function() {
    var a;
    a: {
        for (a in this.set) {
            a = o;
            break a
        }
        a = k
    }
    return a
};
t.count = function() {
    var a = 0, b;
    for (b in this.set)
        a++;
    return a
};
function Ic(a, b) {
    for (var c in a.set)
        D(a.set, c) && b(c, a.set[c])
}
t.keys = function() {
    var a = [], b;
    for (b in this.set)
        D(this.set, b) && a.push(b);
    return a
};
var Jc = "pLPCommand", Kc = "pRTLPCB";
function Lc(a, b, c) {
    this.wc = a;
    this.e = Tb(a);
    this.fe = b;
    this.$ = Ac(b);
    this.mc = c;
    this.lb = o;
    this.Nb = function(a) {
        b.host !== b.ea && (a.ns = b.Vb);
        var c = [], f;
        for (f in a)
            a.hasOwnProperty(f) && c.push(f + "=" + a[f]);
        return (b.kc ? "https://" : "http://") + b.ea + "/.lp?" + c.join("&")
    }
}
var Mc, Nc;
Lc.prototype.open = function(a, b) {
    function c() {
        if (!d.Ia) {
            d.ja = new Oc(function(a, b, c, e, f) {
                vc(d.$, "bytes_received", y(arguments).length);
                if (d.ja)
                    if (d.Fa && (clearTimeout(d.Fa), d.Fa = m), d.lb = k, "start" == a)
                        d.id = b, d.pd = c;
                else if ("close" === a)
                    if (b) {
                        d.ja.lc = o;
                        var h = d.md;
                        h.vc = b;
                        h.Ja = function() {
                            d.Ka()
                        };
                        h.vc < h.Qa && (h.Ja(), h.Ja = m)
                    } else 
                        d.Ka();
                else 
                    g(Error("Unrecognized command received: " + a))
            }, function(a, b) {
                vc(d.$, "bytes_received", y(arguments).length);
                var c = d.md;
                for (c.dc[a] = b; c.dc[c.Qa];) {
                    var e = c.dc[c.Qa];
                    delete c.dc[c.Qa];
                    for (var f = 0; f < e.length; ++f)
                        if (e[f]) {
                            var h = c;
                            ec(function() {
                                h.Mc(e[f])
                            })
                        }
                    if (c.Qa === c.vc) {
                        c.Ja && (clearTimeout(c.Ja), c.Ja(), c.Ja = m);
                        break
                    }
                    c.Qa++
                }
            }, function() {
                d.Ka()
            }, d.Nb);
            var a = {
                start: "t"
            };
            a.ser = Math.floor(1E8 * Math.random());
            d.ja.oc && (a.cb = d.ja.oc);
            a.v = "5";
            d.mc && (a.s = d.mc);
            a = d.Nb(a);
            d.e("Connecting via long-poll to " + a);
            Pc(d.ja, a, function() {})
        }
    }
    this.cd = 0;
    this.R = b;
    this.md = new Gc(a);
    this.Ia = o;
    var d = this;
    this.Fa = setTimeout(function() {
        d.e("Timed out trying to connect.");
        d.Ka();
        d.Fa = m
    }, 3E4);
    if ("complete" ===
    document.readyState)
        c();
    else {
        var e = o, f = function() {
            document.body ? e || (e = k, c()) : setTimeout(f, 10)
        };
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, o), window.addEventListener("load", f, o)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
            "complete" === document.readyState && f()
        }, o), window.attachEvent("onload", f, o))
    }
};
Lc.prototype.start = function() {
    var a = this.ja, b = this.pd;
    a.Od = this.id;
    a.Pd = b;
    for (a.rc = k; Qc(a););
    a = this.id;
    b = this.pd;
    this.Xa = document.createElement("iframe");
    var c = {
        dframe: "t"
    };
    c.id = a;
    c.pw = b;
    a = this.Nb(c);
    this.Xa.src = a;
    this.Xa.style.display = "none";
    document.body.appendChild(this.Xa)
};
Lc.isAvailable = function() {
    return !Nc&&!("object" === typeof window && window.chrome && window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object" === typeof Windows && "object" === typeof Windows.ee) && (Mc || k)
};
t = Lc.prototype;
t.Ic = function() {};
t.Jb = function() {
    this.Ia = k;
    this.ja && (this.ja.close(), this.ja = m);
    this.Xa && (document.body.removeChild(this.Xa), this.Xa = m);
    this.Fa && (clearTimeout(this.Fa), this.Fa = m)
};
t.Ka = function() {
    this.Ia || (this.e("Longpoll is closing itself"), this.Jb(), this.R && (this.R(this.lb), this.R = m))
};
t.close = function() {
    this.Ia || (this.e("Longpoll is being closed."), this.Jb())
};
t.send = function(a) {
    a = y(a);
    vc(this.$, "bytes_sent", a.length);
    for (var a = sa(a), a = Lb(a, k), a = $b(a, 1840), b = 0; b < a.length; b++) {
        var c = this.ja;
        c.Db.push({
            Yd: this.cd,
            ce: a.length,
            ed: a[b]
        });
        c.rc && Qc(c);
        this.cd++
    }
};
function Oc(a, b, c, d) {
    this.Nb = d;
    this.ga = c;
    this.Oc = new Hc;
    this.Db = [];
    this.xc = Math.floor(1E8 * Math.random());
    this.lc = k;
    this.oc = Mb();
    window[Jc + this.oc] = a;
    window[Kc + this.oc] = b;
    a = document.createElement("iframe");
    a.style.display = "none";
    if (document.body) {
        document.body.appendChild(a);
        try {
            a.contentWindow.document || M("No IE domain setting required")
        } catch (e) {
            a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
        }
    } else 
        g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
    a.contentDocument ? a.ya = a.contentDocument : a.contentWindow ? a.ya = a.contentWindow.document : a.document && (a.ya = a.document);
    this.Y = a;
    a = "";
    this.Y.src && "javascript:" === this.Y.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";<\/script>');
    a = "<html><body>" + a + "</body></html>";
    try {
        this.Y.ya.open(), this.Y.ya.write(a), this.Y.ya.close()
    } catch (f) {
        M("frame writing exception"), f.stack && M(f.stack), M(f)
    }
}
Oc.prototype.close = function() {
    this.rc = o;
    if (this.Y) {
        this.Y.ya.body.innerHTML = "";
        var a = this;
        setTimeout(function() {
            a.Y !== m && (document.body.removeChild(a.Y), a.Y = m)
        }, 0)
    }
    var b = this.ga;
    b && (this.ga = m, b())
};
function Qc(a) {
    if (a.rc && a.lc && a.Oc.count() < (0 < a.Db.length ? 2 : 1)) {
        a.xc++;
        var b = {};
        b.id = a.Od;
        b.pw = a.Pd;
        b.ser = a.xc;
        for (var b = a.Nb(b), c = "", d = 0; 0 < a.Db.length;)
            if (1870 >= a.Db[0].ed.length + 30 + c.length) {
                var e = a.Db.shift(), c = c + "&seg" + d + "=" + e.Yd + "&ts" + d + "=" + e.ce + "&d" + d + "=" + e.ed;
                d++
            } else 
                break;
        var b = b + c, f = a.xc;
        a.Oc.add(f);
        var h = function() {
            a.Oc.remove(f);
            Qc(a)
        }, i = setTimeout(h, 25E3);
        Pc(a, b, function() {
            clearTimeout(i);
            h()
        });
        return k
    }
    return o
}
function Pc(a, b, c) {
    setTimeout(function() {
        try {
            if (a.lc) {
                var d = a.Y.ya.createElement("script");
                d.type = "text/javascript";
                d.async = k;
                d.src = b;
                d.onload = d.onreadystatechange = function() {
                    var a = d.readyState;
                    if (!a || "loaded" === a || "complete" === a)
                        d.onload = d.onreadystatechange = m, d.parentNode && d.parentNode.removeChild(d), c()
                };
                d.onerror = function() {
                    M("Long-poll script failed to load: " + b);
                    a.lc = o;
                    a.close()
                };
                a.Y.ya.body.appendChild(d)
            }
        } catch (e) {}
    }, 1)
};
function Rc(a) {
    var b = Cc && Cc.isAvailable(), c = b&&!(mb.ld || mb.get("previous_websocket_failure") === k);
    a.de && (b || N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), c = k);
    if (c)
        this.Kb = [Cc];
    else {
        var d = this.Kb = [];
        ac(Sc, function(a, b) {
            b && b.isAvailable() && d.push(b)
        })
    }
}
var Sc = [Lc, {
    isAvailable: s(o)
}, Cc];
function Tc(a, b, c, d, e, f) {
    this.id = a;
    this.e = Tb("c:" + this.id + ":");
    this.Mc = c;
    this.yb = d;
    this.R = e;
    this.Lc = f;
    this.K = b;
    this.cc = [];
    this.bd = 0;
    this.$c = new Rc(b);
    this.ka = 0;
    this.e("Connection created");
    Uc(this)
}
function Uc(a) {
    var b;
    var c = a.$c;
    0 < c.Kb.length ? b = c.Kb[0] : g(Error("No transports available"));
    a.I = new b("c:" + a.id + ":" + a.bd++, a.K);
    a.Qc = b.responsesRequiredToBeHealthy || 0;
    var d = Vc(a, a.I), e = Wc(a, a.I);
    a.Lb = a.I;
    a.Ib = a.I;
    a.w = m;
    a.Va = o;
    setTimeout(function() {
        a.I && a.I.open(d, e)
    }, 0);
    b = b.healthyTimeout || 0;
    0 < b && (a.Sb = setTimeout(function() {
        a.Sb = m;
        a.Va || (a.e("Closing unhealthy connection after timeout."), a.close())
    }, b))
}
function Wc(a, b) {
    return function(c) {
        b === a.I ? (a.I = m, !c && 0 === a.ka ? (a.e("Realtime connection failed."), "s-" === a.K.ea.substr(0, 2) && (mb.remove("host:" + a.K.host), a.K.ea = a.K.host)) : 1 === a.ka && a.e("Realtime connection lost."), a.close()) : b === a.w ? (a.e("Secondary connection lost."), c = a.w, a.w = m, (a.Lb === c || a.Ib === c) && a.close()) : a.e("closing an old connection")
    }
}
function Vc(a, b) {
    return function(c) {
        if (2 != a.ka)
            if (b === a.Ib) {
                var d = Zb("t", c), c = Zb("d", c);
                if ("c" == d) {
                    if (d = Zb("t", c), "d"in c)
                        if (c = c.d, "h" === d) {
                            var d = c.ts, e = c.v, f = c.h;
                            a.mc = c.s;
                            pb(a.K, f);
                            if (0 == a.ka && (a.I.start(), c = a.I, a.e("Realtime connection established."), a.I = c, a.ka = 1, a.yb && (a.yb(d)
                                , a.yb = m), 0 === a.Qc ? (a.e("Primary connection is healthy."), a.Va = k) : setTimeout(function() {
                                    Xc(a)
                                }, 5E3), "5" !== e && N("Protocol version mismatch detected"), c = 1 < a.$c.Kb.length ? a.$c.Kb[1] : m))a.w = new c("c:" + a.id + ":" + a.bd++, a.K, a.mc),
                                a.ud = c.responsesRequiredToBeHealthy || 0, a.w.open(Vc(a, a.w), Wc(a, a.w)), setTimeout(function() {
                                    if (a.w) {
                                        a.e("Timed out trying to upgrade.");
                                        a.w.close()
                                    }
                                }, 6E4)
                        } else if ("n" === d) {
                            a.e("recvd end transmission on primary");
                            a.Ib = a.w;
                            for (c = 0; c < a.cc.length; ++c)
                                a.$b(a.cc[c]);
                                a.cc = [];
                                Zc(a)
                        } else 
                            "s" === d ? (a.e("Connection shutdown command received. Shutting down..."), a.Lc && (a.Lc(c), a.Lc = m), a.R = m, a.close()) : "r" === d ? (a.e("Reset packet received.  New host: " + c), pb(a.K, c), 1 === a.ka ? a.close() : ($c(a), Uc(a))) : "e" === d ? Ub("Server Error: " +
                            c) : "o" === d ? (a.e("got pong on primary."), ad(a), Xc(a)) : Ub("Unknown control packet command: " + d)
                        } else 
                            "d" == d && a.$b(c)
            } else 
                b === a.w ? (d = Zb("t", c), c = Zb("d", c), "c" == d ? "t"in c && (c = c.t, "a" === c ? bd(a) : "r" === c ? (a.e("Got a reset on secondary, closing it"), a.w.close(), (a.Lb === a.w || a.Ib === a.w) && a.close()) : "o" === c && (a.e("got pong on secondary."), a.ud--, bd(a))) : "d" == d ? a.cc.push(c) : g(Error("Unknown protocol layer: " + d))) : a.e("message on old connection")
    }
}
Tc.prototype.vd = function(a) {
    cd(this, {
        t: "d",
        d: a
    })
};
function Zc(a) {
    a.Lb === a.w && a.Ib === a.w && (a.e("cleaning up and promoting a connection: " + a.w.wc), a.I = a.w, a.w = m)
}
function bd(a) {
    0 >= a.ud ? (a.e("Secondary connection is healthy."), a.Va = k, a.w.Ic(), a.w.start(), a.e("sending client ack on secondary"), a.w.send({
        t : "c", d: {
            t: "a", d: {}
        }
    }), a.e("Ending transmission on primary"), a.I.send({
        t: "c",
        d: {
            t: "n",
            d: {}
        }
    }), a.Lb = a.w, Zc(a)) : (a.e("sending ping on secondary."), a.w.send({
        t : "c", d : {
            t : "p", d : {}
        }
    }))
}
Tc.prototype.$b = function(a) {
    ad(this);
    this.Mc(a)
};
function ad(a) {
    a.Va || (a.Qc--, 0 >= a.Qc && (a.e("Primary connection is healthy."), a.Va = k, a.I.Ic()))
}
function Xc(a) {
    !a.Va && 1 === a.ka && (a.e("sending ping on primary."), cd(a, {
        t : "c", d : {
            t : "p", d : {}
        }
    }))
}
function cd(a, b) {
    1 !== a.ka && g("Connection is not connected");
    a.Lb.send(b)
}
Tc.prototype.close = function() {
    2 !== this.ka && (this.e("Closing realtime connection."), this.ka = 2, $c(this), this.R && (this.R(), this.R = m))
};
function $c(a) {
    a.e("Shutting down all connections");
    a.I && (a.I.close(), a.I = m);
    a.w && (a.w.close(), a.w = m);
    a.Sb && (clearTimeout(a.Sb), a.Sb = m)
};
function dd() {
    qc.call(this, ["online"]);
    this.zb = k;
    if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
        var a = this;
        window.addEventListener("online", function() {
            a.zb || a.ad("online", k);
            a.zb = k
        }, o);
        window.addEventListener("offline", function() {
            a.zb && a.ad("online", o);
            a.zb = o
        }, o)
    }
}
ka(dd, qc);
da(dd);
dd.prototype.Cc = function(a) {
    z("online" === a);
    return [this.zb]
};
function ed(a, b, c, d, e, f) {
    this.id = fd++;
    this.e = Tb("p:" + this.id + ":");
    this.Na = k;
    this.fa = {};
    this.U = [];
    this.Ab = 0;
    this.xb = [];
    this.P = o;
    this.qa = 1E3;
    this.Ub = 3E5;
    this.ac = b || ca;
    this.Zb = c || ca;
    this.wb = d || ca;
    this.Nc = e || ca;
    this.Dc = f || ca;
    this.K = a;
    this.Sc = m;
    this.Hb = {};
    this.Xd = 0;
    this.sb = this.Hc = m;
    gd(this, 0);
    sc.nb().Ya("visible", this.Sd, this);
    -1 === a.host.indexOf("fblocal") && dd.nb().Ya("online", this.Rd, this)
}
var fd = 0, hd = 0;
t = ed.prototype;
t.Da = function(a, b, c) {
    var d=++this.Xd, a = {
        r: d,
        a: a,
        b: b
    };
    this.e(y(a));
    z(this.P, "sendRequest_ call when we're not connected not allowed.");
    this.ia.vd(a);
    c && (this.Hb[d] = c)
};
function id(a, b, c, d, e) {
    a.e("Listen on " + b + " for " + c);
    var f = {
        p: b
    }, d = vb(d, function(a) {
        return Ja(a)
    });
    "{}" !== c && (f.q = d);
    f.h = a.Dc(b);
    a.Da("l", f, function(d) {
        a.e("listen response", d);
        d = d.s;
        "ok" !== d && jd(a, b, c);
        e && e(d)
    })
}
t.ib = function(a, b, c) {
    this.Ga = {
        Fd: a,
        fd: o,
        X: b,
        Pb: c
    };
    this.e("Authenticating using credential: " + this.Ga);
    kd(this);
    if (!(b = 40 == a.length))
        a: {
        var d;
        try {
            var e = a.split(".");
            if (3 !== e.length) {
                b = o;
                break a
            }
            var f;
            b:
            {
                try {
                    if ("undefined" !== typeof atob) {
                        f = atob(e[1]);
                        break b
                    }
                } catch (h) {
                    M("base64DecodeIfNativeSupport failed: ", h)
                }
                f = m
            }
            f !== m && (d = ra(f))
        } catch (i) {
            M("isAdminAuthToken_ failed", i)
        }
        b = "object" === typeof d && va(d, "admin") === k
    }
    b && (this.e("Admin auth credential detected.  Reducing max reconnect time."), this.Ub = 3E4)
};
t.Mb = function(a) {
    delete this.Ga;
    this.wb(o);
    this.P && this.Da("unauth", {}, function(b) {
        a(b.s, b.d)
    })
};
function kd(a) {
    var b = a.Ga;
    a.P && b && a.Da("auth", {
        cred: b.Fd
    }, function(c) {
        var d = c.s, c = c.d || "error";
        "ok" !== d && a.Ga === b && delete a.Ga;
        a.wb("ok" === d);
        b.fd ? "ok" !== d && b.Pb && b.Pb(d, c) : (b.fd = k, b.X && b.X(d, c))
    })
}
function ld(a, b, c, d) {
    b = b.toString();
    jd(a, b, c) && a.P && (a.e("Unlisten on " + b + " for " + c), b = {
        p : b
    }, d = vb(d, function(a) {
        return Ja(a)
    }), "{}" !== c && (b.q = d), a.Da("u", b))
}
function md(a, b, c, d) {
    a.P ? nd(a, "o", b, c, d) : a.xb.push({
        Pc: b,
        action: "o",
        data: c,
        C: d
    })
}
t.Kc = function(a, b) {
    this.P ? nd(this, "oc", a, m, b) : this.xb.push({
        Pc: a,
        action: "oc",
        data: m,
        C: b
    })
};
function nd(a, b, c, d, e) {
    c = {
        p: c,
        d: d
    };
    a.e("onDisconnect " + b, c);
    a.Da(b, c, function(a) {
        e && setTimeout(function() {
            e(a.s, a.d)
        }, 0)
    })
}
t.put = function(a, b, c, d) {
    od(this, "p", a, b, c, d)
};
function od(a, b, c, d, e, f) {
    c = {
        p: c,
        d: d
    };
    u(f) && (c.h = f);
    a.U.push({
        action: b,
        rd: c,
        C: e
    });
    a.Ab++;
    b = a.U.length-1;
    a.P && pd(a, b)
}
function pd(a, b) {
    var c = a.U[b].action, d = a.U[b].rd, e = a.U[b].C;
    a.U[b].Ud = a.P;
    a.Da(c, d, function(d) {
        a.e(c + " response", d);
        delete a.U[b];
        a.Ab--;
        0 === a.Ab && (a.U = []);
        e && e(d.s, d.d)
    })
}
t.$b = function(a) {
    if ("r"in a) {
        this.e("from server: " + y(a));
        var b = a.r, c = this.Hb[b];
        c && (delete this.Hb[b], c(a.b))
    } else 
        "error"in a && g("A server-side error has occurred: " + a.error), "a"in a && (b = a.a, a = a.b, this.e("handleServerMessage", b, a), "d" === b ? this.ac(a.p, a.d) : "m" === b ? this.ac(a.p, a.d, k) : "c" === b ? (b = a.p, a = (a = a.q) ? vb(a, function(a) {
        return Ka(a)
    }).join("$") : "{}", (a = jd(this, b, a)) && a.C && a.C("permission_denied")) : "ac" === b ? (b = a.s, a = a.d, c = this.Ga, delete this.Ga, c && c.Pb && c.Pb(b, a), this.wb(o)) : "sd" === b ? this.Sc ? this.Sc(a) :
    "msg"in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : Ub("Unrecognized action received from server: " + y(b) + "\nAre you using the latest client?"))
};
t.yb = function(a) {
    this.e("connection ready");
    this.P = k;
    this.sb = (new Date).getTime();
    this.Nc({
        serverTimeOffset: a - (new Date).getTime()
    });
    kd(this);
    for (var b in this.fa)
        for (var c in this.fa[b])
            a = this.fa[b][c], id(this, b, c, a.$a, a.C);
    for (b = 0; b < this.U.length; b++)
        this.U[b] && pd(this, b);
    for (; this.xb.length;)
        b = this.xb.shift(), nd(this, b.action, b.Pc, b.data, b.C);
    this.Zb(k)
};
function gd(a, b) {
    z(!a.ia, "Scheduling a connect when we're already connected/ing?");
    a.Sa && clearTimeout(a.Sa);
    a.Sa = setTimeout(function() {
        a.Sa = m;
        if (a.Na) {
            a.e("Making a connection attempt");
            a.Hc = (new Date).getTime();
            a.sb = m;
            var b = w(a.$b, a), d = w(a.yb, a), e = w(a.nd, a), f = a.id + ":" + hd++;
            a.ia = new Tc(f, a.K, b, d, e, function(b) {
                N(b + " (" + a.K.toString() + ")");
                a.Na = o
            })
        }
    }, b)
}
t.Sd = function(a) {
    a && (!this.hb && this.qa === this.Ub) && (this.e("Window became visible.  Reducing delay."), this.qa = 1E3, this.ia || gd(this, 0));
    this.hb = a
};
t.Rd = function(a) {
    a ? (this.e("Browser went online.  Reconnecting."), this.qa = 1E3, this.Na = k, this.ia || gd(this, 0)) : (this.e("Browser went offline.  Killing connection; don't reconnect."), this.Na = o, this.ia && this.ia.close())
};
t.nd = function() {
    this.e("data client disconnected");
    this.P = o;
    this.ia = m;
    for (var a = 0; a < this.U.length; a++) {
        var b = this.U[a];
        b && ("h"in b.rd && b.Ud) && (b.C && b.C("disconnect"), delete this.U[a], this.Ab--)
    }
    0 === this.Ab && (this.U = []);
    if (this.Na)
        this.hb ? this.sb && (3E4 < (new Date).getTime() - this.sb && (this.qa = 1E3), this.sb = m) : (this.e("Window isn't visible.  Delaying reconnect."), this.qa = this.Ub, this.Hc = (new Date).getTime()), a = Math.max(0, this.qa - ((new Date).getTime() - this.Hc)), a*=Math.random(), this.e("Trying to reconnect in " +
    a + "ms"), gd(this, a), this.qa = Math.min(this.Ub, 1.3 * this.qa);
    else 
        for (var c in this.Hb)
            delete this.Hb[c];
    this.Zb(o)
};
t.Ha = function() {
    this.Na = o;
    this.ia ? this.ia.close() : (this.Sa && (clearTimeout(this.Sa), this.Sa = m), this.P && this.nd())
};
t.bb = function() {
    this.Na = k;
    this.qa = 1E3;
    this.P || gd(this, 0)
};
function jd(a, b, c) {
    b = (new K(b)).toString();
    c || (c = "{}");
    var d = a.fa[b][c];
    delete a.fa[b][c];
    return d
};
function qd() {
    this.o = this.D = m
}
function rd(a, b, c) {
    if (b.f())
        a.D = c, a.o = m;
    else if (a.D !== m)
        a.D = a.D.xa(b, c);
    else {
        a.o == m && (a.o = new Hc);
        var d = F(b);
        a.o.contains(d) || a.o.add(d, new qd);
        a = a.o.get(d);
        b = La(b);
        rd(a, b, c)
    }
}
function sd(a, b) {
    if (b.f())
        return a.D = m, a.o = m, k;
    if (a.D !== m) {
        if (a.D.M())
            return o;
        var c = a.D;
        a.D = m;
        c.z(function(b, c) {
            rd(a, new K(b), c)
        });
        return sd(a, b)
    }
    return a.o !== m ? (c = F(b), b = La(b), a.o.contains(c) && sd(a.o.get(c), b) && a.o.remove(c), a.o.f() ? (a.o = m, k) : o) : k
}
function td(a, b, c) {
    a.D !== m ? c(b, a.D) : a.z(function(a, e) {
        var f = new K(b.toString() + "/" + a);
        td(e, f, c)
    })
}
qd.prototype.z = function(a) {
    this.o !== m && Ic(this.o, function(b, c) {
        a(b, c)
    })
};
function ud() {
    this.ra = O
}
function T(a, b) {
    return a.ra.Q(b)
}
function U(a, b, c) {
    a.ra = a.ra.xa(b, c)
}
ud.prototype.toString = function() {
    return this.ra.toString()
};
function vd() {
    this.sa = new ud;
    this.O = new ud;
    this.ma = new ud;
    this.Cb = new Oa
}
function wd(a, b) {
    for (var c = T(a.sa, b), d = T(a.O, b), e = L(a.Cb, b), f = o, h = e; h !== m;) {
        if (h.k() !== m) {
            f = k;
            break
        }
        h = h.parent()
    }
    if (f)
        return o;
    c = xd(c, d, e);
    return c !== d ? (U(a.O, b, c), k) : o
}
function xd(a, b, c) {
    if (c.f())
        return a;
    if (c.k() !== m)
        return b;
    a = a || O;
    c.z(function(d) {
        var d = d.name(), e = a.L(d), f = b.L(d), h = L(c, d), e = xd(e, f, h);
        a = a.H(d, e)
    });
    return a
}
vd.prototype.set = function(a, b) {
    var c = this, d = [];
    ub(b, function(a) {
        var b = a.path, a = a.pa, h = Mb();
        Pa(L(c.Cb, b), h);
        U(c.O, b, a);
        d.push({
            path: b,
            Zd: h
        })
    });
    return d
};
function yd(a, b) {
    ub(b, function(b) {
        var d = b.Zd, b = L(a.Cb, b.path), e = b.k();
        z(e !== m, "pendingPut should not be null.");
        e === d && Pa(b, m)
    })
};
function zd() {
    this.Ta = []
}
function Ad(a, b) {
    if (0 !== b.length)
        for (var c = 0; c < b.length; c++)
            a.Ta.push(b[c])
}
zd.prototype.Fb = function() {
    for (var a = 0; a < this.Ta.length; a++)
        if (this.Ta[a]) {
            var b = this.Ta[a];
            this.Ta[a] = m;
            Bd(b)
        }
    this.Ta = []
};
function Bd(a) {
    var b = a.X, c = a.wd, d = a.Eb;
    ec(function() {
        b(c, d)
    })
};
function V(a, b, c, d) {
    this.type = a;
    this.ta = b;
    this.aa = c;
    this.Eb = d
};
function Cd(a) {
    this.J = a;
    this.na = [];
    this.zc = new zd
}
function Dd(a, b, c, d, e) {
    a.na.push({
        type: b,
        X: c,
        cancel: d,
        T: e
    });
    var d = [], f = Ed(a.i);
    a.qb && f.push(new V("value", a.i));
    for (var h = 0; h < f.length; h++)
        if (f[h].type === b) {
            var i = new J(a.J.n, a.J.path);
            f[h].aa && (i = i.F(f[h].aa));
            d.push({
                X: e ? w(c, e): c,
                wd: new S(f[h].ta, i),
                Eb: f[h].Eb
            })
        }
    Ad(a.zc, d)
}
Cd.prototype.fc = function(a, b) {
    b = this.gc(a, b);
    b != m && Fd(this, b)
};
function Fd(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d], f = e.type, h = new J(a.J.n, a.J.path);
        b[d].aa && (h = h.F(b[d].aa));
        h = new S(b[d].ta, h);
        "value" === e.type&&!h.ob() ? f += "(" + h.V() + ")" : "value" !== e.type && (f += " " + h.name());
        M(a.J.n.u.id + ": event:" + a.J.path + ":" + a.J.La() + ":" + f);
        for (f = 0; f < a.na.length; f++) {
            var i = a.na[f];
            b[d].type === i.type && c.push({
                X: i.T ? w(i.X, i.T): i.X,
                wd: h,
                Eb: e.Eb
            })
        }
    }
    Ad(a.zc, c)
}
Cd.prototype.Fb = function() {
    this.zc.Fb()
};
function Ed(a) {
    var b = [];
    if (!a.M()) {
        var c = m;
        a.z(function(a, e) {
            b.push(new V("child_added", e, a, c));
            c = a
        })
    }
    return b
}
function Hd(a) {
    a.qb || (a.qb = k, Fd(a, [new V("value", a.i)]))
};
function Id(a, b) {
    Cd.call(this, a);
    this.i = b
}
ka(Id, Cd);
Id.prototype.gc = function(a, b) {
    this.i = a;
    this.qb && b != m && b.push(new V("value", this.i));
    return b
};
Id.prototype.mb = function() {
    return {}
};
function Jd(a, b) {
    this.Qb = a;
    this.Jc = b
}
function Kd(a, b, c, d, e) {
    var f = a.Q(c), h = b.Q(c), d = new Jd(d, e), e = Ld(d, c, f, h), h=!f.f()&&!h.f() && f.j() !== h.j();
    if (e || h) {
        f = c;
        for (c = e; f.parent() !== m;) {
            var i = a.Q(f), e = b.Q(f), l = f.parent();
            if (!d.Qb || L(d.Qb, l).k()) {
                var n = b.Q(l), p = [], f = f.Z < f.m.length ? f.m[f.m.length-1]: m;
                i.f() ? (i = n.da(f, e), p.push(new V("child_added", e, f, i))) : e.f() ? p.push(new V("child_removed", i, f)) : (i = n.da(f, e), h && p.push(new V("child_moved", e, f, i)), c && p.push(new V("child_changed", e, f, i)));
                d.Jc(l, n, p)
            }
            h && (h = o, c = k);
            f = l
        }
    }
}
function Ld(a, b, c, d) {
    var e, f = [];
    c === d ? e = o : c.M() && d.M() ? e = c.k() !== d.k() : c.M() ? (Md(a, b, O, d, f), e = k) : d.M() ? (Md(a, b, c, O, f), e = k) : e = Md(a, b, c, d, f);
    e ? a.Jc(b, d, f) : c.j() !== d.j() && a.Jc(b, d, m);
    return e
}
function Md(a, b, c, d, e) {
    var f = o, h=!a.Qb ||!L(a.Qb, b).f(), i = [], l = [], n = [], p = [], q = {}, r = {}, x, P, I, G;
    x = c.Ua();
    I = Ya(x);
    P = d.Ua();
    for (G = Ya(P); I !== m || G !== m;) {
        c = I === m ? 1 : G === m?-1 : I.key === G.key ? 0 : hc({
            name: I.key,
            ha: I.value.j()
        }, {
            name: G.key,
            ha: G.value.j()
        });
        if (0 > c)
            f = va(q, I.key), u(f) ? (n.push({
            Bc: I,
            Xc: i[f]
        }), i[f] = m) : (r[I.key] = l.length, l.push(I)), f = k, I = Ya(x);
        else {
            if (0 < c)
                f = va(r, G.key), u(f) ? (n.push({
                Bc: l[f],
                Xc: G
            }), l[f] = m) : (q[G.key] = i.length, i.push(G)), f = k;
            else {
                c = b.F(G.key);
                if (c = Ld(a, c, I.value, G.value))
                    p.push(G), f = k;
                I.value.j() !==
                G.value.j() && (n.push({
                    Bc: I,
                    Xc: G
                }), f = k);
                I = Ya(x)
            }
            G = Ya(P)
        }
        if (!h && f)
            return k
    }
    for (h = 0; h < l.length; h++)
        if (q = l[h])
            c = b.F(q.key), Ld(a, c, q.value, O), e.push(new V("child_removed", q.value, q.key));
    for (h = 0; h < i.length; h++)
        if (q = i[h])
            c = b.F(q.key), l = d.da(q.key, q.value), Ld(a, c, O, q.value), e.push(new V("child_added", q.value, q.key, l));
    for (h = 0; h < n.length; h++)
        q = n[h].Bc, i = n[h].Xc, c = b.F(i.key), l = d.da(i.key, i.value), e.push(new V("child_moved", i.value, i.key, l)), (c = Ld(a, c, q.value, i.value)) && p.push(i);
    for (h = 0; h < p.length; h++)
        a = p[h],
    l = d.da(a.key, a.value), e.push(new V("child_changed", a.value, a.key, l));
    return f
};
function Nd() {
    this.S = this.wa = m;
    this.set = {}
}
ka(Nd, Hc);
t = Nd.prototype;
t.setActive = function(a) {
    this.wa = a
};
function Od(a) {
    return a.contains("default")
}
function Pd(a) {
    return a.wa != m && Od(a)
}
t.defaultView = function() {
    return Od(this) ? this.get("default") : m
};
t.path = aa("S");
t.toString = function() {
    return vb(this.keys(), function(a) {
        return "default" === a ? "{}" : a
    }).join("$")
};
t.$a = function() {
    var a = [];
    Ic(this, function(b, c) {
        a.push(c.J)
    });
    return a
};
function Qd(a, b) {
    Cd.call(this, a);
    this.i = O;
    this.gc(b, Ed(b))
}
ka(Qd, Cd);
Qd.prototype.gc = function(a, b) {
    if (b === m)
        return b;
    var c = [], d = this.J;
    u(d.ca) && (u(d.va) && d.va != m ? c.push(function(a, b) {
        var c = Wb(b, d.ca);
        return 0 < c || 0 === c && 0 <= Xb(a, d.va)
    }) : c.push(function(a, b) {
        return 0 <= Wb(b, d.ca)
    }));
    u(d.za) && (u(d.Ra) ? c.push(function(a, b) {
        var c = Wb(b, d.za);
        return 0 > c || 0 === c && 0 >= Xb(a, d.Ra)
    }) : c.push(function(a, b) {
        return 0 >= Wb(b, d.za)
    }));
    var e = m, f = m;
    if (u(this.J.Ba))
        if (u(this.J.ca)) {
            if (e = Rd(a, c, this.J.Ba, o)) {
                var h = a.L(e).j();
                c.push(function(a, b) {
                    var c = Wb(b, h);
                    return 0 > c || 0 === c && 0 >= Xb(a, e)
                })
            }
        } else if (f =
        Rd(a, c, this.J.Ba, k)) {
            var i = a.L(f).j();
            c.push(function(a, b) {
                var c = Wb(b, i);
                return 0 < c || 0 === c && 0 <= Xb(a, f)
            })
        }
    for (var l = [], n = [], p = [], q = [], r = 0; r < b.length; r++) {
        var x = b[r].aa, P = b[r].ta;
        switch (b[r].type) {
        case "child_added":
            Sd(c, x, P) && (this.i = this.i.H(x, P), n.push(b[r]));
            break;
        case "child_removed":
            this.i.L(x).f() || (this.i = this.i.H(x, m), l.push(b[r]));
            break;
        case "child_changed":
            !this.i.L(x).f() && Sd(c, x, P) && (this.i = this.i.H(x, P), q.push(b[r]));
            break;
        case "child_moved":
            var I=!this.i.L(x).f(), G = Sd(c, x, P);
            I ? G ? (this.i =
            this.i.H(x, P), p.push(b[r])) : (l.push(new V("child_removed", this.i.L(x), x)), this.i = this.i.H(x, m)) : G && (this.i = this.i.H(x, P), n.push(b[r]))
        }
    }
    var Yc = e || f;
    if (Yc) {
        var Gd = (r = f !== m) ? this.i.gd(): this.i.hd(), oc = o, db = o, eb = this;
        (r ? a.Ac : a.z).call(a, function(a, b) {
            !db && Gd === m && (db = k);
            if (db && oc)
                return k;
            oc ? (l.push(new V("child_removed", eb.i.L(a), a)), eb.i = eb.i.H(a, m)) : db && (n.push(new V("child_added", b, a)), eb.i = eb.i.H(a, b));
            Gd === a && (db = k);
            a === Yc && (oc = k)
        })
    }
    for (r = 0; r < n.length; r++)
        c = n[r], x = this.i.da(c.aa, c.ta), l.push(new V("child_added",
    c.ta, c.aa, x));
    for (r = 0; r < p.length; r++)
        c = p[r], x = this.i.da(c.aa, c.ta), l.push(new V("child_moved", c.ta, c.aa, x));
    for (r = 0; r < q.length; r++)
        c = q[r], x = this.i.da(c.aa, c.ta), l.push(new V("child_changed", c.ta, c.aa, x));
    this.qb && 0 < l.length && l.push(new V("value", this.i));
    return l
};
function Rd(a, b, c, d) {
    if (a.M())
        return m;
    var e = m;
    (d ? a.Ac : a.z).call(a, function(a, d) {
        if (Sd(b, a, d) && (e = a, c--, 0 === c))
            return k
    });
    return e
}
function Sd(a, b, c) {
    for (var d = 0; d < a.length; d++)
        if (!a[d](b, c.j()))
            return o;
    return k
}
Qd.prototype.Ec = function(a) {
    return this.i.L(a) !== O
};
Qd.prototype.mb = function(a, b, c) {
    var d = {};
    this.i.M() || this.i.z(function(a) {
        d[a] = 3
    });
    var e = this.i, c = T(c, new K("")), f = new Oa;
    Pa(L(f, this.J.path), k);
    var b = O.xa(a, b), h = this;
    Kd(c, b, a, f, function(a, b, c) {
        c !== m && a.toString() === h.J.path.toString() && h.gc(b, c)
    });
    this.i.M() ? bc(d, function(a, b) {
        d[b] = 2
    }) : (this.i.z(function(a) {
        D(d, a) || (d[a] = 1)
    }), bc(d, function(a, b) {
        h.i.L(b).f() && (d[b] = 2)
    }));
    this.i = e;
    return d
};
function Td(a, b) {
    this.u = a;
    this.g = b;
    this.Yb = b.ra;
    this.la = new Oa
}
Td.prototype.Ob = function(a, b, c, d, e) {
    var f = a.path, h = L(this.la, f), i = h.k();
    i === m ? (i = new Nd, Pa(h, i)) : z(!i.f(), "We shouldn't be storing empty QueryMaps");
    var l = a.La();
    if (i.contains(l))
        a = i.get(l), Dd(a, b, c, d, e);
    else {
        var n = this.g.ra.Q(f), n = a = "default" === a.La() ? new Id(a, n): new Qd(a, n);
        if (Pd(i) || Ud(h))
            i.add(l, n), i.S || (i.S = n.J.path);
        else {
            var p, q;
            i.f() || (p = i.toString(), q = i.$a());
            i.add(l, n);
            i.S || (i.S = n.J.path);
            i.setActive(Vd(this, i));
            p && q && ld(this.u, i.path(), p, q)
        }
        Pd(i) && Ra(h, function(a) {
            if (a = a.k()) {
                a.wa && a.wa();
                a.wa = m
            }
        });
        Dd(a, b, c, d, e);
        (b = (b = Sa(L(this.la, f), function(a) {
            var b;
            if (b = a.k())
                if (b = a.k().defaultView())
                    b = a.k().defaultView().qb;
            if (b)
                return k
        }, k)) || this.u === m&&!T(this.g, f).f()) && Hd(a)
    }
    a.Fb()
};
function Wd(a, b, c, d, e) {
    var f = a.get(b), h;
    if (h = f) {
        h = o;
        for (var i = f.na.length-1; 0 <= i; i--) {
            var l = f.na[i];
            if ((!c || l.type === c) && (!d || l.X === d) && (!e || l.T === e))
                if (f.na.splice(i, 1), h = k, c && d)
                    break
        }
        h = h&&!(0 < f.na.length)
    }(c = h) && a.remove(b);
    return c
}
Td.prototype.ic = function(a, b, c, d) {
    var e = L(this.la, a.path).k();
    return e === m ? m : Xd(this, e, a, b, c, d)
};
function Xd(a, b, c, d, e, f) {
    var h = b.path(), h = L(a.la, h), c = c ? c.La(): m, i = [];
    c && "default" !== c ? Wd(b, c, d, e, f) && i.push(c) : ub(b.keys(), function(a) {
        Wd(b, a, d, e, f) && i.push(a)
    });
    b.f() && Pa(h, m);
    c = Ud(h);
    if (0 < i.length&&!c) {
        for (var l = h, n = h.parent(), c = o; !c && n;) {
            var p = n.k();
            if (p) {
                z(!Pd(p));
                var q = l.name(), r = o;
                Ic(p, function(a, b) {
                    r = b.Ec(q) || r
                });
                r && (c = k)
            }
            l = n;
            n = n.parent()
        }
        l = m;
        if (!Pd(b)) {
            n = b.wa;
            b.wa = m;
            var x = [], P = function(b) {
                var c = b.k();
                if (c && Od(c))
                    x.push(c.path()), c.wa == m && c.setActive(Vd(a, c));
                else {
                    if (c) {
                        c.wa != m || c.setActive(Vd(a,
                        c));
                        var d = {};
                        Ic(c, function(a, b) {
                            b.i.z(function(a) {
                                D(d, a) || (d[a] = k, a = c.path().F(a), x.push(a))
                            })
                        })
                    }
                    b.z(P)
                }
            };
            P(h);
            l = x;
            n && n()
        }
        return c ? m : l
    }
    return m
}
function Yd(a, b, c) {
    Ra(L(a.la, b), function(a) {
        (a = a.k()) && Ic(a, function(a, b) {
            Hd(b)
        })
    }, c, k)
}
function W(a, b, c) {
    function d(a) {
        do {
            if (h[a.toString()])
                return k;
            a = a.parent()
        }
        while (a !== m);
        return o
    }
    var e = a.Yb, f = a.g.ra;
    a.Yb = f;
    for (var h = {}, i = 0; i < c.length; i++)
        h[c[i].toString()] = k;
    Kd(e, f, b, a.la, function(c, e, f) {
        if (b.contains(c)) {
            var h = d(c);
            h && Yd(a, c, o);
            a.fc(c, e, f);
            h && Yd(a, c, k)
        } else 
            a.fc(c, e, f)
    });
    d(b) && Yd(a, b, k);
    Zd(a, b)
}
function Zd(a, b) {
    var c = L(a.la, b);
    Ra(c, function(a) {
        (a = a.k()) && Ic(a, function(a, b) {
            b.Fb()
        })
    }, k, k);
    Sa(c, function(a) {
        (a = a.k()) && Ic(a, function(a, b) {
            b.Fb()
        })
    }, o)
}
Td.prototype.fc = function(a, b, c) {
    a = L(this.la, a).k();
    a !== m && Ic(a, function(a, e) {
        e.fc(b, c)
    })
};
function Ud(a) {
    return Sa(a, function(a) {
        return a.k() && Pd(a.k())
    })
}
function Vd(a, b) {
    if (a.u) {
        var c = a.u, d = b.path(), e = b.toString(), f = b.$a(), h, i = b.keys(), l = Od(b), n = a.u, p = function(c) {
            if ("ok" !== c) {
                var d = "Unknown Error";
                "too_big" === c ? d = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == c ? d = "Client doesn't have permission to access the desired data." : "unavailable" == c && (d = "The service is unavailable");
                var e = Error(c + ": " + d);
                e.code = c.toUpperCase();
                N("on() or once() for " + b.path().toString() + " failed: " + e.toString());
                b && (Ic(b, function(a, b) {
                    for (var c = 0; c < b.na.length; c++) {
                        var d = b.na[c];
                        d.cancel && (d.T ? w(d.cancel, d.T) : d.cancel)(e)
                    }
                }), Xd(a, b))
            } else 
                h || (l ? Yd(a, b.path(), k) : ub(i, function(a) {
                    (a = b.get(a)) && Hd(a)
                }), Zd(a, b.path()))
        }, q = b.toString(), r = b.path().toString();
        n.fa[r] = n.fa[r] || {};
        z(!n.fa[r][q], "listen() called twice for same path/queryId.");
        n.fa[r][q] = {
            $a: b.$a(),
            C: p
        };
        n.P && id(n, r, q, b.$a(), p);
        return function() {
            h = k;
            ld(c, d, e, f)
        }
    }
    return ca
}
Td.prototype.mb = function(a, b, c, d) {
    var e = {};
    Ic(b, function(b, h) {
        var i = h.mb(a, c, d);
        bc(i, function(a, b) {
            e[b] = 3 === a ? 3 : (va(e, b) || a) === a ? a : 3
        })
    });
    c.M() || c.z(function(a) {
        D(e, a) || (e[a] = 4)
    });
    return e
};
function $d(a, b, c, d, e) {
    var f = b.path(), b = a.mb(f, b, d, e), h = O, i = [];
    bc(b, function(b, n) {
        var p = new K(n);
        3 === b || 1 === b ? h = h.H(n, d.Q(p)) : (2 === b && i.push({
            path: f.F(n),
            pa: O
        }), i = i.concat(ae(a, d.Q(p), L(c, p), e)))
    });
    return [{
        path: f,
        pa: h
    }
    ].concat(i)
}
function be(a, b, c, d) {
    var e;
    a: {
        var f = L(a.la, b);
        e = f.parent();
        for (var h = []; e !== m;) {
            var i = e.k();
            if (i !== m) {
                if (Od(i)) {
                    e = [{
                        path: b,
                        pa: c
                    }
                    ];
                    break a
                }
                i = a.mb(b, i, c, d);
                f = va(i, f.name());
                if (3 === f || 1 === f) {
                    e = [{
                        path: b,
                        pa: c
                    }
                    ];
                    break a
                }
                2 === f && h.push({
                    path: b,
                    pa: O
                })
            }
            f = e;
            e = e.parent()
        }
        e = h
    }
    if (1 == e.length && (!e[0].pa.f() || c.f()))
        return e;
    h = L(a.la, b);
    f = h.k();
    f !== m ? Od(f) ? e.push({
        path: b,
        pa: c
    }) : e = e.concat($d(a, f, h, c, d)) : e = e.concat(ae(a, c, h, d));
    return e
}
function ae(a, b, c, d) {
    var e = c.k();
    if (e !== m)
        return Od(e) ? [{
            path: c.path(),
            pa: b
        }
        ] : $d(a, e, c, b, d);
    var f = [];
    c.z(function(c) {
        var e = b.M() ? O: b.L(c.name()), c = ae(a, e, c, d);
        f = f.concat(c)
    });
    return f
};
function ce(a, b) {
    if (!a || "object" !== typeof a)
        return a;
    z(".sv"in a, "Unexpected leaf node or priority contents");
    return b[a[".sv"]]
}
function de(a, b) {
    var c = ce(a.j(), b), d;
    if (a.M()) {
        var e = ce(a.k(), b);
        return e !== a.k() || c !== a.j() ? new fc(e, c) : a
    }
    d = a;
    c !== a.j() && (d = d.Ea(c));
    a.z(function(a, c) {
        var e = de(c, b);
        e !== c && (d = d.H(a, e))
    });
    return d
};
function ee(a) {
    this.K = a;
    this.$ = Ac(a);
    this.u = new ed(this.K, w(this.ac, this), w(this.Zb, this), w(this.wb, this), w(this.Nc, this), w(this.Dc, this));
    var b = w(function() {
        return new xc(this.$, this.u)
    }, this), a = a.toString();
    zc[a] || (zc[a] = b());
    this.xd = zc[a];
    this.fb = new Oa;
    this.gb = new ud;
    this.g = new vd;
    this.G = new Td(this.u, this.g.ma);
    this.Fc = new ud;
    this.Gc = new Td(m, this.Fc);
    fe(this, "connected", o);
    fe(this, "authenticated", o);
    this.R = new qd;
    this.yc = 0
}
t = ee.prototype;
t.toString = function() {
    return (this.K.kc ? "https://" : "http://") + this.K.host
};
t.name = function() {
    return this.K.Vb
};
function ge(a) {
    a = T(a.Fc, new K(".info/serverTimeOffset")).V() || 0;
    return (new Date).getTime() + a
}
function he(a) {
    a = a = {
        timestamp: ge(a)
    };
    a.timestamp = a.timestamp || (new Date).getTime();
    return a
}
t.ac = function(a, b, c) {
    this.yc++;
    this.kd && (b = this.kd(a, b));
    var d, e, f = [];
    9 <= a.length && a.lastIndexOf(".priority") === a.length-9 ? (d = new K(a.substring(0, a.length-9)), e = T(this.g.sa, d).Ea(b), f.push(d)) : c ? (d = new K(a), e = T(this.g.sa, d), bc(b, function(a, b) {
        var c = new K(b);
        ".priority" === b ? e = e.Ea(a) : (e = e.xa(c, R(a)), f.push(d.F(b)))
    })) : (d = new K(a), e = R(b), f.push(d));
    a = be(this.G, d, e, this.g.O);
    b = o;
    for (c = 0; c < a.length; ++c) {
        var h = a[c], i = this.g, l = h.path;
        U(i.sa, l, h.pa);
        b = wd(i, l) || b
    }
    b && (d = ie(this, d));
    W(this.G, d, f)
};
t.Zb = function(a) {
    fe(this, "connected", a);
    if (a === o) {
        this.e("onDisconnectEvents");
        var b = this, c = [], d = he(this), a = td, e = new qd;
        td(this.R, new K(""), function(a, b) {
            rd(e, a, de(b, d))
        });
        a(e, new K(""), function(a, d) {
            var e = be(b.G, a, d, b.g.O);
            c.push.apply(c, b.g.set(a, e));
            e = je(b, a);
            ie(b, e);
            W(b.G, e, [a])
        });
        yd(this.g, c);
        this.R = new qd
    }
};
t.Nc = function(a) {
    var b = this;
    ac(a, function(a, d) {
        fe(b, d, a)
    })
};
t.Dc = function(a) {
    a = new K(a);
    return T(this.g.sa, a).hash()
};
t.wb = function(a) {
    fe(this, "authenticated", a)
};
function fe(a, b, c) {
    b = new K("/.info/" + b);
    U(a.Fc, b, R(c));
    W(a.Gc, b, [b])
}
t.ib = function(a, b, c) {
    "firebaseio-demo.com" === this.K.domain && N("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");
    this.u.ib(a, function(a, c) {
        X(b, a, c)
    }, function(a, b) {
        N("auth() was canceled: " + b);
        if (c) {
            var f = Error(b);
            f.code = a.toUpperCase();
            c(f)
        }
    })
};
t.Mb = function(a) {
    this.u.Mb(function(b, c) {
        X(a, b, c)
    })
};
t.eb = function(a, b, c, d) {
    this.e("set", {
        path: a.toString(),
        value: b,
        ha: c
    });
    var e = he(this), b = R(b, c), e = de(b, e), e = be(this.G, a, e, this.g.O), f = this.g.set(a, e), h = this;
    this.u.put(a.toString(), b.V(k), function(b, c) {
        "ok" !== b && N("set at " + a + " failed: " + b);
        yd(h.g, f);
        wd(h.g, a);
        var e = ie(h, a);
        W(h.G, e, []);
        X(d, b, c)
    });
    e = je(this, a);
    ie(this, e);
    W(this.G, e, [a])
};
t.update = function(a, b, c) {
    this.e("update", {
        path: a.toString(),
        value: b
    });
    var d = T(this.g.ma, a), e = k, f = [], h = he(this), i = [], l;
    for (l in b) {
        var e = o, n = R(b[l]), n = de(n, h), d = d.H(l, n), p = a.F(l);
        f.push(p);
        n = be(this.G, p, n, this.g.O);
        i = i.concat(this.g.set(a, n))
    }
    if (e)
        M("update() called with empty data.  Don't do anything."), X(c, "ok");
    else {
        var q = this;
        od(this.u, "m", a.toString(), b, function(b, d) {
            z("ok" === b || "permission_denied" === b, "merge at " + a + " failed.");
            "ok" !== b && N("update at " + a + " failed: " + b);
            yd(q.g, i);
            wd(q.g, a);
            var e =
            ie(q, a);
            W(q.G, e, []);
            X(c, b, d)
        }, j);
        b = je(this, a);
        ie(this, b);
        W(q.G, b, f)
    }
};
t.Tc = function(a, b, c) {
    this.e("setPriority", {
        path: a.toString(),
        ha: b
    });
    var d = he(this), d = ce(b, d), d = T(this.g.O, a).Ea(d), d = be(this.G, a, d, this.g.O), e = this.g.set(a, d), f = this;
    this.u.put(a.toString() + "/.priority", b, function(b, d) {
        "permission_denied" === b && N("setPriority at " + a + " failed: " + b);
        yd(f.g, e);
        wd(f.g, a);
        var l = ie(f, a);
        W(f.G, l, []);
        X(c, b, d)
    });
    b = ie(this, a);
    W(f.G, b, [])
};
t.Kc = function(a, b) {
    var c = this;
    this.u.Kc(a.toString(), function(d, e) {
        "ok" === d && sd(c.R, a);
        X(b, d, e)
    })
};
function ke(a, b, c, d) {
    var e = R(c);
    md(a.u, b.toString(), e.V(k), function(c, h) {
        "ok" === c && rd(a.R, b, e);
        X(d, c, h)
    })
}
function le(a) {
    vc(a.$, "deprecated_on_disconnect");
    a.xd.Wc.deprecated_on_disconnect = k
}
t.Ob = function(a, b, c, d, e) {
    ".info" === F(a.path) ? this.Gc.Ob(a, b, c, d, e) : this.G.Ob(a, b, c, d, e)
};
t.ic = function(a, b, c, d) {
    if (".info" === F(a.path))
        this.Gc.ic(a, b, c, d);
    else {
        b = this.G.ic(a, b, c, d);
        if (c = b !== m) {
            for (var c = this.g, d = a.path, e = [], f = 0; f < b.length; ++f)
                e[f] = T(c.sa, b[f]);
            U(c.sa, d, O);
            for (f = 0; f < b.length; ++f)
                U(c.sa, b[f], e[f]);
            c = wd(c, d)
        }
        c && (z(this.g.ma.ra === this.G.Yb, "We should have raised any outstanding events by now.  Else, we'll blow them away."), U(this.g.ma, a.path, T(this.g.O, a.path)), this.G.Yb = this.g.ma.ra)
    }
};
t.Ha = function() {
    this.u.Ha()
};
t.bb = function() {
    this.u.bb()
};
t.Uc = function(a) {
    if ("undefined" !== typeof console) {
        a ? (this.nc || (this.nc = new wc(this.$)), a = this.nc.get()) : a = this.$.get();
        var b = a, c = [], d = 0, e;
        for (e in b)
            c[d++] = e;
        var f = function(a, b) {
            return Math.max(b.length, a)
        };
        if (c.reduce)
            e = c.reduce(f, 0);
        else {
            var h = 0;
            ub(c, function(a) {
                h = f.call(j, h, a)
            });
            e = h
        }
        for (var i in a) {
            b = a[i];
            for (c = i.length; c < e + 2; c++)
                i += " ";
            console.log(i + b)
        }
    }
};
t.Vc = function(a) {
    vc(this.$, a);
    this.xd.Wc[a] = k
};
t.e = function() {
    M("r:" + this.u.id + ":", arguments)
};
function X(a, b, c) {
    a && ec(function() {
        if ("ok" == b)
            a(m, c);
        else {
            var d = (b || "error").toUpperCase(), e = d;
            c && (e += ": " + c);
            e = Error(e);
            e.code = d;
            a(e)
        }
    })
};
function me(a, b) {
    var c = b || a.fb;
    b || ne(a, c);
    if (c.k() !== m) {
        var d = oe(a, c);
        z(0 < d.length);
        if (wb(d, function(a) {
            return 1 === a.status
        })) {
            for (var e = c.path(), f = 0; f < d.length; f++)
                z(1 === d[f].status, "tryToSendTransactionQueue_: items in queue should all be run."), d[f].status = 2, d[f].td++;
            c = T(a.g.O, e).hash();
            U(a.g.O, e, T(a.g.ma, e));
            for (var h = T(a.gb, e).V(k), i = Mb(), l = {}, n = 0; n < d.length; n++)
                d[n].sc && (l[d[n].path.toString()] = d[n].path);
            var p = [], q;
            for (q in l)
                p.push(l[q]);
            for (f = 0; f < p.length; f++)
                Pa(L(a.g.Cb, p[f]), i);
            a.u.put(e.toString(),
            h, function(b) {
                a.e("transaction put response", {
                    path: e.toString(),
                    status: b
                });
                for (f = 0; f < p.length; f++) {
                    var c = L(a.g.Cb, p[f]), h = c.k();
                    z(h !== m, "sendTransactionQueue_: pendingPut should not be null.");
                    h === i && (Pa(c, m), U(a.g.O, p[f], T(a.g.sa, p[f])))
                }
                if ("ok" === b) {
                    b = [];
                    for (f = 0; f < d.length; f++)
                        d[f].status = 3, d[f].C && (c = pe(a, d[f].path), b.push(w(d[f].C, m, m, k, c))), d[f].pc();
                    ne(a, L(a.fb, e));
                    me(a);
                    for (f = 0; f < b.length; f++)
                        ec(b[f])
                } else {
                    if ("datastale" === b)
                        for (f = 0; f < d.length; f++)
                            d[f].status = 4 === d[f].status ? 5 : 1;
                    else {
                        N("transaction at " +
                        e + " failed: " + b);
                        for (f = 0; f < d.length; f++)
                            d[f].status = 5, d[f].qc = b
                    }
                    b = ie(a, e);
                    W(a.G, b, [e])
                }
            }, c)
        }
    } else 
        c.ob() && c.z(function(b) {
            me(a, b)
        })
}
function ie(a, b) {
    var c = qe(a, b), d = c.path(), c = oe(a, c);
    U(a.g.ma, d, T(a.g.O, d));
    U(a.gb, d, T(a.g.O, d));
    if (0 !== c.length) {
        for (var e = T(a.g.ma, d), f = e, h = [], i = 0; i < c.length; i++) {
            var l = Ma(d, c[i].path), n = o, p;
            z(l !== m, "rerunTransactionsUnderNode_: relativePath should not be null.");
            if (5 === c[i].status)
                n = k, p = c[i].qc;
            else if (1 === c[i].status)
                if (25 <= c[i].td)
                    n = k, p = "maxretry";
            else {
                var q = e.Q(l), r = c[i].update(q.V());
                if (u(r)) {
                    Aa("transaction failed: Data returned ", r);
                    var x = R(r);
                    "object" === typeof r && r != m && D(r, ".priority") ||
                    (x = x.Ea(q.j()));
                    e = e.xa(l, x);
                    c[i].sc && (f = f.xa(l, x))
                } else 
                    n = k, p = "nodata"
            }
            n && (c[i].status = 3, setTimeout(c[i].pc, 0), c[i].C && (n = new J(a, c[i].path), l = new S(e.Q(l), n), "nodata" === p ? h.push(w(c[i].C, m, m, o, l)) : h.push(w(c[i].C, m, Error(p), o, l))))
        }
        U(a.gb, d, e);
        U(a.g.ma, d, f);
        ne(a, a.fb);
        for (i = 0; i < h.length; i++)
            ec(h[i]);
        me(a)
    }
    return d
}
function qe(a, b) {
    for (var c, d = a.fb; (c = F(b)) !== m && d.k() === m;)
        d = L(d, c), b = La(b);
    return d
}
function oe(a, b) {
    var c = [];
    re(a, b, c);
    c.sort(function(a, b) {
        return a.od - b.od
    });
    return c
}
function re(a, b, c) {
    var d = b.k();
    if (d !== m)
        for (var e = 0; e < d.length; e++)
            c.push(d[e]);
    b.z(function(b) {
        re(a, b, c)
    })
}
function ne(a, b) {
    var c = b.k();
    if (c) {
        for (var d = 0, e = 0; e < c.length; e++)
            3 !== c[e].status && (c[d] = c[e], d++);
        c.length = d;
        Pa(b, 0 < c.length ? c : m)
    }
    b.z(function(b) {
        ne(a, b)
    })
}
function je(a, b) {
    var c = qe(a, b).path(), d = L(a.fb, b);
    Sa(d, function(a) {
        se(a)
    });
    se(d);
    Ra(d, function(a) {
        se(a)
    });
    return c
}
function se(a) {
    var b = a.k();
    if (b !== m) {
        for (var c = [], d =- 1, e = 0; e < b.length; e++)
            4 !== b[e].status && (2 === b[e].status ? (z(d === e-1, "All SENT items should be at beginning of queue."), d = e, b[e].status = 4, b[e].qc = "set") : (z(1 === b[e].status), b[e].pc(), b[e].C && c.push(w(b[e].C, m, Error("set"), o, m))));
        -1 === d ? Pa(a, m) : b.length = d + 1;
        for (e = 0; e < c.length; e++)
            ec(c[e])
    }
}
function pe(a, b) {
    var c = new J(a, b);
    return new S(T(a.gb, b), c)
};
function Y() {
    this.ab = {}
}
da(Y);
Y.prototype.Ha = function() {
    for (var a in this.ab)
        this.ab[a].Ha()
};
Y.prototype.interrupt = Y.prototype.Ha;
Y.prototype.bb = function() {
    for (var a in this.ab)
        this.ab[a].bb()
};
Y.prototype.resume = Y.prototype.bb;
var Z = {
    Kd: function(a) {
        var b = Q.prototype.hash;
        Q.prototype.hash = a;
        var c = fc.prototype.hash;
        fc.prototype.hash = a;
        return function() {
            Q.prototype.hash = b;
            fc.prototype.hash = c
        }
    }
};
Z.hijackHash = Z.Kd;
Z.La = function(a) {
    return a.La()
};
Z.queryIdentifier = Z.La;
Z.Nd = function(a) {
    return a.n.u.fa
};
Z.listens = Z.Nd;
Z.Vd = function(a) {
    return a.n.u.ia
};
Z.refConnection = Z.Vd;
Z.zd = ed;
Z.DataConnection = Z.zd;
ed.prototype.sendRequest = ed.prototype.Da;
ed.prototype.interrupt = ed.prototype.Ha;
Z.Ad = Tc;
Z.RealTimeConnection = Z.Ad;
Tc.prototype.sendRequest = Tc.prototype.vd;
Tc.prototype.close = Tc.prototype.close;
Z.yd = ob;
Z.ConnectionTarget = Z.yd;
Z.Id = function() {
    Mc = Dc = k
};
Z.forceLongPolling = Z.Id;
Z.Jd = function() {
    Nc = k
};
Z.forceWebSockets = Z.Jd;
Z.ae = function(a, b) {
    a.n.u.Sc = b
};
Z.setSecurityDebugCallback = Z.ae;
Z.Uc = function(a, b) {
    a.n.Uc(b)
};
Z.stats = Z.Uc;
Z.Vc = function(a, b) {
    a.n.Vc(b)
};
Z.statsIncrementCounter = Z.Vc;
Z.yc = function(a) {
    return a.n.yc
};
Z.Ld = function(a, b) {
    a.n.kd = b
};
Z.interceptServerData = Z.Ld;
function $(a, b, c) {
    this.Gb = a;
    this.S = b;
    this.Ca = c
}
$.prototype.cancel = function(a) {
    A("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
    C("Firebase.onDisconnect().cancel", 1, a, k);
    this.Gb.Kc(this.S, a)
};
$.prototype.cancel = $.prototype.cancel;
$.prototype.remove = function(a) {
    A("Firebase.onDisconnect().remove", 0, 1, arguments.length);
    E("Firebase.onDisconnect().remove", this.S);
    C("Firebase.onDisconnect().remove", 1, a, k);
    ke(this.Gb, this.S, m, a)
};
$.prototype.remove = $.prototype.remove;
$.prototype.set = function(a, b) {
    A("Firebase.onDisconnect().set", 1, 2, arguments.length);
    E("Firebase.onDisconnect().set", this.S);
    za("Firebase.onDisconnect().set", a, o);
    C("Firebase.onDisconnect().set", 2, b, k);
    ke(this.Gb, this.S, a, b)
};
$.prototype.set = $.prototype.set;
$.prototype.eb = function(a, b, c) {
    A("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
    E("Firebase.onDisconnect().setWithPriority", this.S);
    za("Firebase.onDisconnect().setWithPriority", a, o);
    Ea("Firebase.onDisconnect().setWithPriority", 2, b, o);
    C("Firebase.onDisconnect().setWithPriority", 3, c, k);
    (".length" === this.Ca || ".keys" === this.Ca) && g("Firebase.onDisconnect().setWithPriority failed: " + this.Ca + " is a read-only object.");
    var d = this.Gb, e = this.S, f = R(a, b);
    md(d.u, e.toString(), f.V(k), function(a,
    b) {
        "ok" === a && rd(d.R, e, f);
        X(c, a, b)
    })
};
$.prototype.setWithPriority = $.prototype.eb;
$.prototype.update = function(a, b) {
    A("Firebase.onDisconnect().update", 1, 2, arguments.length);
    E("Firebase.onDisconnect().update", this.S);
    Da("Firebase.onDisconnect().update", a);
    C("Firebase.onDisconnect().update", 2, b, k);
    var c = this.Gb, d = this.S, e = k, f;
    for (f in a)
        e = o;
    if (e)
        M("onDisconnect().update() called with empty data.  Don't do anything."), X(b, "ok");
    else {
        e = c.u;
        f = d.toString();
        var h = function(e, f) {
            if ("ok" === e)
                for (var h in a) {
                    var p = R(a[h]);
                    rd(c.R, d.F(h), p)
                }
            X(b, e, f)
        };
        e.P ? nd(e, "om", f, a, h) : e.xb.push({
            Pc: f,
            action: "om",
            data: a,
            C: h
        })
    }
};
$.prototype.update = $.prototype.update;
var te, ue = 0, ve = [];
te = function(a) {
    var b = a === ue;
    ue = a;
    for (var c = Array(8), d = 7; 0 <= d; d--)
        c[d] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a%64), a = Math.floor(a / 64);
    z(0 === a);
    a = c.join("");
    if (b) {
        for (d = 11; 0 <= d && 63 === ve[d]; d--)
            ve[d] = 0;
        ve[d]++
    } else 
        for (d = 0; 12 > d; d++)
            ve[d] = Math.floor(64 * Math.random());
    for (d = 0; 12 > d; d++)
        a += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(ve[d]);
    z(20 === a.length, "NextPushId: Length should be 20.");
    return a
};
function J() {
    var a, b, c;
    if (arguments[0]instanceof ee)
        c = arguments[0], a = arguments[1];
    else {
        A("new Firebase", 1, 2, arguments.length);
        var d = arguments[0];
        b = a = "";
        var e = k, f = "";
        if (v(d)) {
            var h = d.indexOf("//");
            if (0 <= h)
                var i = d.substring(0, h-1), d = d.substring(h + 2);
            h = d.indexOf("/");
            -1 === h && (h = d.length);
            a = d.substring(0, h);
            var d = d.substring(h + 1), l = a.split(".");
            if (3 == l.length) {
                h = l[2].indexOf(":");
                e = 0 <= h ? "https" === i || "wss" === i : k;
                if ("firebase" === l[1])
                    Vb(a + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
                else {
                    b = l[0];
                    f = "";
                    d = ("/" + d).split("/");
                    for (h = 0; h < d.length; h++)
                        if (0 < d[h].length) {
                            l = d[h];
                            try {
                                l = decodeURIComponent(l.replace(/\+/g, " "))
                            } catch (n) {}
                            f += "/" + l
                    }
                }
                b = b.toLowerCase()
            } else 
                b = m
            }
        e || "undefined" !== typeof window && (window.location && window.location.protocol&&-1 !== window.location.protocol.indexOf("https:")) && N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        a = new ob(a, e, b, "ws" === i || "wss" === i);
        b = new K(f);
        e = b.toString();
        if (!(i=!v(a.host)))
            if (!(i = 0 === a.host.length))
                if (!(i =
                !ya(a.Vb)))
                    if (i = 0 !== e.length)
                        e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), i=!(v(e) && 0 !== e.length&&!xa.test(e));
        i && g(Error(B("new Firebase", 1, o) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'));
        arguments[1] ? arguments[1]instanceof Y ? c = arguments[1] : g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")) : c = Y.nb();
        e = a.toString();
        i = va(c.ab, e);
        i || (i = new ee(a), c.ab[e] = i);
        c = i;
        a = b
    }
    H.call(this, c, a)
}
ka(J, H);
var we = J, xe = ["Firebase"], ye = ba;
!(xe[0]in ye) && ye.execScript && ye.execScript("var " + xe[0]);
for (var ze; xe.length && (ze = xe.shift());)
    !xe.length && u(we) ? ye[ze] = we : ye = ye[ze] ? ye[ze] : ye[ze] = {};
J.prototype.name = function() {
    A("Firebase.name", 0, 0, arguments.length);
    return this.path.f() ? m : this.path.Z < this.path.m.length ? this.path.m[this.path.m.length-1] : m
};
J.prototype.name = J.prototype.name;
J.prototype.F = function(a) {
    A("Firebase.child", 1, 1, arguments.length);
    if (ga(a))
        a = String(a);
    else if (!(a instanceof K))
        if (F(this.path) === m) {
            var b = a;
            b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
            Ha("Firebase.child", b)
        } else 
            Ha("Firebase.child", a);
    return new J(this.n, this.path.F(a))
};
J.prototype.child = J.prototype.F;
J.prototype.parent = function() {
    A("Firebase.parent", 0, 0, arguments.length);
    var a = this.path.parent();
    return a === m ? m : new J(this.n, a)
};
J.prototype.parent = J.prototype.parent;
J.prototype.root = function() {
    A("Firebase.ref", 0, 0, arguments.length);
    for (var a = this; a.parent() !== m;)
        a = a.parent();
    return a
};
J.prototype.root = J.prototype.root;
J.prototype.toString = function() {
    A("Firebase.toString", 0, 0, arguments.length);
    var a;
    if (this.parent() === m)
        a = this.n.toString();
    else {
        a = this.parent().toString() + "/";
        var b = this.name();
        a += encodeURIComponent(String(b))
    }
    return a
};
J.prototype.toString = J.prototype.toString;
J.prototype.set = function(a, b) {
    A("Firebase.set", 1, 2, arguments.length);
    E("Firebase.set", this.path);
    za("Firebase.set", a, o);
    C("Firebase.set", 2, b, k);
    return this.n.eb(this.path, a, m, b)
};
J.prototype.set = J.prototype.set;
J.prototype.update = function(a, b) {
    A("Firebase.update", 1, 2, arguments.length);
    E("Firebase.update", this.path);
    Da("Firebase.update", a);
    C("Firebase.update", 2, b, k);
    D(a, ".priority") && g(Error("update() does not currently support updating .priority."));
    return this.n.update(this.path, a, b)
};
J.prototype.update = J.prototype.update;
J.prototype.eb = function(a, b, c) {
    A("Firebase.setWithPriority", 2, 3, arguments.length);
    E("Firebase.setWithPriority", this.path);
    za("Firebase.setWithPriority", a, o);
    Ea("Firebase.setWithPriority", 2, b, o);
    C("Firebase.setWithPriority", 3, c, k);
    (".length" === this.name() || ".keys" === this.name()) && g("Firebase.setWithPriority failed: " + this.name() + " is a read-only object.");
    return this.n.eb(this.path, a, b, c)
};
J.prototype.setWithPriority = J.prototype.eb;
J.prototype.remove = function(a) {
    A("Firebase.remove", 0, 1, arguments.length);
    E("Firebase.remove", this.path);
    C("Firebase.remove", 1, a, k);
    this.set(m, a)
};
J.prototype.remove = J.prototype.remove;
J.prototype.transaction = function(a, b, c) {
    function d() {}
    A("Firebase.transaction", 1, 3, arguments.length);
    E("Firebase.transaction", this.path);
    C("Firebase.transaction", 1, a, o);
    C("Firebase.transaction", 2, b, k);
    u(c) && "boolean" != typeof c && g(Error(B("Firebase.transaction", 3, k) + "must be a boolean."));
    (".length" === this.name() || ".keys" === this.name()) && g("Firebase.transaction failed: " + this.name() + " is a read-only object.");
    "undefined" === typeof c && (c = k);
    var e = this.n, f = this.path, h = c;
    e.e("transaction on " + f);
    var i =
    new J(e, f);
    i.Ya("value", d);
    var h = {
        path: f,
        update: a,
        C: b,
        status: m,
        od: Mb(),
        sc: h,
        td: 0,
        pc: function() {
            i.vb("value", d)
        },
        qc: m
    }, l = h.update(T(e.gb, f).V());
    if (u(l)) {
        Aa("transaction failed: Data returned ", l);
        h.status = 1;
        var n = L(e.fb, f), p = n.k() || [];
        p.push(h);
        Pa(n, p);
        p = "object" === typeof l && l !== m && D(l, ".priority") ? l[".priority"] : T(e.g.O, f).j();
        n = he(e);
        l = R(l, p);
        l = de(l, n);
        U(e.gb, f, l);
        h.sc && (U(e.g.ma, f, l), W(e.G, f, [f]));
        me(e)
    } else 
        h.pc(), h.C && (e = pe(e, f), h.C(m, o, e))
};
J.prototype.transaction = J.prototype.transaction;
J.prototype.Tc = function(a, b) {
    A("Firebase.setPriority", 1, 2, arguments.length);
    E("Firebase.setPriority", this.path);
    Ea("Firebase.setPriority", 1, a, o);
    C("Firebase.setPriority", 2, b, k);
    this.n.Tc(this.path, a, b)
};
J.prototype.setPriority = J.prototype.Tc;
J.prototype.push = function(a, b) {
    A("Firebase.push", 0, 2, arguments.length);
    E("Firebase.push", this.path);
    za("Firebase.push", a, k);
    C("Firebase.push", 2, b, k);
    var c = ge(this.n), c = te(c), c = this.F(c);
    "undefined" !== typeof a && a !== m && c.set(a, b);
    return c
};
J.prototype.push = J.prototype.push;
J.prototype.ga = function() {
    return new $(this.n, this.path, this.name())
};
J.prototype.onDisconnect = J.prototype.ga;
J.prototype.Wd = function() {
    N("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");
    this.ga().remove();
    le(this.n)
};
J.prototype.removeOnDisconnect = J.prototype.Wd;
J.prototype.$d = function(a) {
    N("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");
    this.ga().set(a);
    le(this.n)
};
J.prototype.setOnDisconnect = J.prototype.$d;
J.prototype.ib = function(a, b, c) {
    A("Firebase.auth", 1, 3, arguments.length);
    v(a) || g(Error(B("Firebase.auth", 1, o) + "must be a valid credential (a string)."));
    C("Firebase.auth", 2, b, k);
    C("Firebase.auth", 3, b, k);
    this.n.ib(a, b, c)
};
J.prototype.auth = J.prototype.ib;
J.prototype.Mb = function(a) {
    A("Firebase.unauth", 0, 1, arguments.length);
    C("Firebase.unauth", 1, a, k);
    this.n.Mb(a)
};
J.prototype.unauth = J.prototype.Mb;
J.goOffline = function() {
    A("Firebase.goOffline", 0, 0, arguments.length);
    Y.nb().Ha()
};
J.goOnline = function() {
    A("Firebase.goOnline", 0, 0, arguments.length);
    Y.nb().bb()
};
function Sb(a, b) {
    z(!b || a === k || a === o, "Can't turn on custom loggers persistently.");
    a === k ? ("undefined" !== typeof console && ("function" === typeof console.log ? Qb = w(console.log, console) : "object" === typeof console.log && (Qb = function(a) {
        console.log(a)
    })), b && nb.set("logging_enabled", k)) : a ? Qb = a : (Qb = m, nb.remove("logging_enabled"))
}
J.enableLogging = Sb;
J.ServerValue = {
    TIMESTAMP: {
        ".sv": "timestamp"
    }
};
J.INTERNAL = Z;
J.Context = Y;
})();

