(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        1: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "isRTL", function () {
                    return o;
                }),
                n.d(t, "isMobile", function () {
                    return a;
                }),
                n.d(t, "isDarkMode", function () {
                    return i;
                }),
                n.d(t, "formatDate", function () {
                    return s;
                }),
                n.d(t, "getParameterByName", function () {
                    return r;
                }),
                n.d(t, "adjustImageGallery", function () {
                    return c;
                }),
                n.d(t, "managePostImages", function () {
                    return l;
                }),
                n.d(t, "makeImagesZoomable", function () {
                    return d;
                });
            var o = function () {
                    var e = document.querySelector("html");
                    return ["ar", "he", "fa"].includes(e.getAttribute("lang"));
                },
                a = function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "768px";
                    return window.matchMedia("(max-width: ".concat(e, ")"))
                        .matches;
                },
                i = function () {
                    var e =
                        window.matchMedia &&
                        window.matchMedia("(prefers-color-scheme: dark)");
                    return e && e.matches;
                },
                s = function (e) {
                    return e
                        ? new Date(e).toLocaleDateString(
                              document.documentElement.lang,
                              { year: "numeric", month: "long", day: "numeric" }
                          )
                        : "";
                },
                r = function (e, t) {
                    t || (t = window.location.href),
                        (e = e.replace(/[\[\]]/g, "\\$&"));
                    var n = new RegExp(
                        "[?&]".concat(e, "(=([^&#]*)|&|#|$)")
                    ).exec(t);
                    return n
                        ? n[2]
                            ? decodeURIComponent(n[2].replace(/\+/g, " "))
                            : ""
                        : null;
                },
                c = function () {
                    for (
                        var e = document.querySelectorAll(
                                ".kg-gallery-image img"
                            ),
                            t = 0,
                            n = e.length;
                        t < n;
                        t++
                    ) {
                        var o = e[t].closest(".kg-gallery-image"),
                            a =
                                e[t].attributes.width.value /
                                e[t].attributes.height.value;
                        o.style.flex = "".concat(a, " 1 0%");
                    }
                },
                l = function (e) {
                    e(".js-post-content")
                        .find("img")
                        .each(function () {
                            e(this)
                                .closest("figure")
                                .hasClass("kg-bookmark-card") ||
                                e(this).parent().is("a") ||
                                e(this).addClass("js-zoomable");
                            var t = e(this).parent().find("figcaption");
                            t
                                ? e(this).attr("alt", t.text())
                                : e(this).attr("alt", "");
                        });
                },
                d = function (e, t) {
                    t(".js-zoomable").on("opened", function () {
                        setTimeout(function () {
                            var t = e(".medium-zoom-image--opened");
                            t.length > 1 && t.last().hide();
                        }, 10);
                    });
                };
        },
        16: function (e, t, n) {
            e.exports = n(17);
        },
        17: function (e, t, n) {
            "use strict";
            n.r(t);
            var o = n(0),
                a = n.n(o),
                i = n(7),
                s = n.n(i),
                r = n(2),
                c = n(11),
                l = (n(18), n(3)),
                d = n(8),
                u = n.n(d),
                m = n(9),
                h = n(1);
            a()(function () {
                Object(h.isRTL)() &&
                    a()("html").attr("dir", "rtl").addClass("rtl");
                var e,
                    t,
                    n = a()("body"),
                    o = a()(".js-header"),
                    i = a()(".js-open-menu"),
                    d = a()(".js-close-menu"),
                    f = a()(".js-menu"),
                    g = a()(".js-toggle-submenu"),
                    p = a()(".js-submenu-option")[0],
                    v = a()(".js-submenu"),
                    w = a()(".js-recent-slider"),
                    b = a()(".js-open-secondary-menu"),
                    j = a()(".js-open-search"),
                    k = a()(".js-close-search"),
                    y = a()(".js-search"),
                    C = a()(".js-input-search"),
                    T = a()(".js-search-results"),
                    O = a()(".js-no-results"),
                    S = a()(".js-toggle-darkmode"),
                    M = a()(".js-notification-close"),
                    x = a()(".js-main-nav"),
                    _ = a()(".js-main-nav-left"),
                    I = a()(".js-newsletter"),
                    L = localStorage.getItem("theme"),
                    A = null,
                    D = !1,
                    B = null,
                    E = function () {
                        o.removeClass("submenu-is-active"),
                            g.removeClass("active"),
                            v.removeClass("opened").addClass("closed");
                    },
                    H = function () {
                        n.toggleClass("no-scroll-y");
                    },
                    N = function (e, t) {
                        var n = new GhostContentAPI({
                                url: e,
                                key: t,
                                version: "v4",
                            }),
                            o = [],
                            a = {
                                shouldSort: !0,
                                ignoreLocation: !0,
                                findAllMatches: !0,
                                includeScore: !0,
                                minMatchCharLength: 2,
                                keys: ["title", "custom_excerpt", "tags.name"],
                            };
                        n.posts
                            .browse({
                                limit: "all",
                                include: "tags",
                                fields: "id, title, url, published_at, custom_excerpt",
                            })
                            .then(function (e) {
                                for (var t = 0, n = e.length; t < n; t++)
                                    o.push(e[t]);
                                A = new m.a(o, a);
                            })
                            .catch(function (e) {
                                console.log(e);
                            });
                    },
                    P = function (e) {
                        var t = a()(
                            '.js-alert[data-notification="'.concat(e, '"]')
                        );
                        t.addClass("opened"),
                            setTimeout(function () {
                                R(t);
                            }, 5e3);
                    },
                    R = function (e) {
                        e.removeClass("opened");
                        var t = window.location.toString();
                        if (t.indexOf("?") > 0) {
                            var n = t.substring(0, t.indexOf("?"));
                            window.history.replaceState({}, document.title, n);
                        }
                    },
                    V = function (e) {
                        Object(h.isMobile)() ||
                            (e
                                ? (x.addClass("toggle-overflow"),
                                  _.addClass("toggle-overflow"))
                                : (x.removeClass("toggle-overflow"),
                                  _.removeClass("toggle-overflow")));
                    };
                (i.on("click", function () {
                    o.addClass("mobile-menu-opened"), f.addClass("opened"), H();
                }),
                d.on("click", function () {
                    o.removeClass("mobile-menu-opened"),
                        f.removeClass("opened"),
                        H();
                }),
                g.on("click", function () {
                    (D = !D)
                        ? (o.addClass("submenu-is-active"),
                          g.addClass("active"),
                          v.removeClass("closed").addClass("opened"))
                        : E();
                }),
                j.on("click", function () {
                    y.addClass("opened"),
                        setTimeout(function () {
                            C.trigger("focus");
                        }, 400),
                        H();
                }),
                k.on("click", function () {
                    C.trigger("blur"), y.removeClass("opened"), H();
                }),
                C.on("keyup", function () {
                    if (C.val().length > 0 && A) {
                        var e = A.search(C.val()).filter(function (e) {
                                if (e.score <= 0.5) return e;
                            }),
                            t = "";
                        if (e.length > 0) {
                            for (var n = 0, o = e.length; n < o; n++)
                                t +=
                                    '\n          <article class="m-result">            <a href="'
                                        .concat(
                                            e[n].item.url,
                                            '" class="m-result__link">              <h3 class="m-result__title">'
                                        )
                                        .concat(
                                            e[n].item.title,
                                            '</h3>              <span class="m-result__date">'
                                        )
                                        .concat(
                                            Object(h.formatDate)(
                                                e[n].item.published_at
                                            ),
                                            "</span>            </a>          </article>"
                                        );
                            O.hide(), T.html(t), T.show();
                        } else T.html(""), T.hide(), O.show();
                    } else T.html(""), T.hide(), O.hide();
                }),
                S.on("change", function () {
                    S.is(":checked")
                        ? (a()("html").attr("data-theme", "dark"),
                          localStorage.setItem("theme", "dark"))
                        : (a()("html").attr("data-theme", "light"),
                          localStorage.setItem("theme", "light"));
                }),
                S.on("mouseenter", function () {
                    V(!0);
                }),
                S.on("mouseleave", function () {
                    V(!1);
                }),
                M.on("click", function () {
                    R(a()(this).parent());
                }),
                a()(window).on("click", function (e) {
                    D && p && !p.contains(e.target) && ((D = !1), E());
                }),
                a()(document).on("keyup", function (e) {
                    "Escape" === e.key &&
                        y.hasClass("opened") &&
                        k.trigger("click");
                }),
                L
                    ? (a()("html").attr("data-theme", L),
                      "dark" === L && S.attr("checked", !0))
                    : Object(h.isDarkMode)() && S.attr("checked", !0),
                o.length > 0) &&
                    new s.a(o[0], {
                        tolerance: { down: 10, up: 20 },
                        offset: 15,
                        onUnpin: function () {
                            if (!Object(h.isMobile)() && B) {
                                var e = B[0];
                                e && e.state.isVisible && e.hide();
                            }
                        },
                    }).init();
                if (w.length > 0) {
                    var z = new r.d(".js-recent-slider", {
                        type: "slider",
                        rewind: !1,
                        perView: 4,
                        swipeThreshold: !1,
                        dragThreshold: !1,
                        gap: 0,
                        direction: Object(h.isRTL)() ? "rtl" : "ltr",
                        breakpoints: {
                            1024: {
                                perView: 3,
                                swipeThreshold: 80,
                                dragThreshold: 120,
                            },
                            768: {
                                perView: 2,
                                swipeThreshold: 80,
                                dragThreshold: 120,
                                peek: { before: 0, after: 115 },
                            },
                            568: {
                                perView: 1,
                                swipeThreshold: 80,
                                dragThreshold: 120,
                                peek: { before: 0, after: 115 },
                            },
                        },
                    });
                    z.on("mount.after", function () {
                        Object(l.a)(".js-recent-article-title", 50);
                    }),
                        z.mount({ Swipe: r.c, Breakpoints: r.a });
                }
                if (
                    ("undefined" != typeof disableFadeAnimation &&
                    disableFadeAnimation
                        ? a()("[data-aos]").addClass("no-aos-animation")
                        : u.a.init({
                              once: !0,
                              startEvent: "DOMContentLoaded",
                          }),
                    b.length > 0)
                ) {
                    var q = document.getElementById(
                        "secondary-navigation-template"
                    );
                    B = Object(c.a)(".js-open-secondary-menu", {
                        appendTo: document.body,
                        content: q.innerHTML,
                        allowHTML: !0,
                        arrow: !0,
                        trigger: "click",
                        interactive: !0,
                        onShow: function () {
                            V(!0);
                        },
                        onHidden: function () {
                            V(!1);
                        },
                    });
                }
                Object(c.a)(".js-tooltip"),
                    Object(l.a)(".js-article-card-title", 100),
                    Object(l.a)(".js-article-card-title-no-image", 250),
                    (e = Object(h.getParameterByName)("action")),
                    (t = Object(h.getParameterByName)("stripe")),
                    "subscribe" === e && P("subscribe"),
                    "signup" === e &&
                        (window.location = "".concat(
                            ghostHost,
                            "/signup/?action=checkout"
                        )),
                    "checkout" === e && P("signup"),
                    "signin" === e && P("signin"),
                    "success" === t && P("checkout"),
                    "undefined" != typeof disableNewsletter &&
                        disableNewsletter &&
                        I.remove(),
                    "undefined" != typeof ghostSearchApiKey
                        ? N(ghostHost, ghostSearchApiKey)
                        : (j.css("visibility", "hidden"),
                          k.remove(),
                          y.remove());
            });
        },
    },
    [[16, 0, 1]],
]);
