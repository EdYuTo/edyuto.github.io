(function(e) {
    function t(t) {
        for (var n, o, s = t[0], l = t[1], c = t[2], d = 0, p = []; d < s.length; d++)
            o = s[d],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
            i[o] = 0;
        for (n in l)
            Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        u && u(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], n = !0, s = 1; s < a.length; s++) {
                var l = a[s];
                0 !== i[l] && (n = !1)
            }
            n && (r.splice(t--, 1),
            e = o(o.s = a[0]))
        }
        return e
    }
    var n = {}
      , i = {
        app: 0
    }
      , r = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, o),
        a.l = !0,
        a.exports
    }
    o.m = e,
    o.c = n,
    o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                o.d(a, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return a
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        t(s[c]);
    var u = l;
    r.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("cd49")
    },
    "00df": function(e, t, a) {
        e.exports = {
            bannerContainer: "BannerList-module_bannerContainer_b0gw5",
            container: "BannerList-module_container_3lDbU",
            banner: "BannerList-module_banner_2U34h",
            publisherNameContainer: "BannerList-module_publisherNameContainer_1rkiI",
            publisherName: "BannerList-module_publisherName_T0SOg",
            publisherNews: "BannerList-module_publisherNews_2Uyyf",
            news_main: "BannerList-module_news_main_1hZgt",
            news_subject: "BannerList-module_news_subject_2saPr",
            news_date: "BannerList-module_news_date_OK8C8",
            news_short_description: "BannerList-module_news_short_description_3XkxH",
            news_description: "BannerList-module_news_description_1B0xr",
            news_checkNow: "BannerList-module_news_checkNow_1d-f1",
            news_click_here: "BannerList-module_news_click_here_2Jtpd",
            news_showAll: "BannerList-module_news_showAll_g2fXf"
        }
    },
    "0150": function(e, t, a) {
        e.exports = a.p + "img/icon_filter.4a4104e3.svg"
    },
    "01aa": function(e, t, a) {
        e.exports = {
            searchContainer: "styles-module_searchContainer_2bS4N",
            iconGrey: "styles-module_iconGrey_fxz6T",
            iconWhite: "styles-module_iconWhite_Skhzp",
            input: "styles-module_input_3eikl",
            searchForm: "styles-module_searchForm_2Nk3-",
            iconWhiteContainer: "styles-module_iconWhiteContainer_1WjuI"
        }
    },
    "01c3": function(e, t, a) {
        e.exports = a.p + "img/about_us_eng.e4566884.jpg"
    },
    "034b": function(e, t, a) {
        e.exports = a.p + "img/tonarino-youngjump_label.09947f35.svg"
    },
    "034f": function(e, t, a) {
        "use strict";
        var n = a("85ec")
          , i = a.n(n);
        i.a
    },
    "08c6": function(e, t, a) {
        e.exports = a.p + "img/tonarino_youngjump_logo.f57677da.png"
    },
    "0a8f": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzSURBVHgBTcqxCQAgEEPRQ+GaEMRN3NbWEd0g5jrTPAg/wgOwyk7y2J2Zs0m69doRf/YAz30JItRSDJQAAAAASUVORK5CYII="
    },
    "0b2a": function(e, t, a) {
        e.exports = a.p + "img/icon_close_white.cd41e1bb.svg"
    },
    1: function(e, t) {},
    "10b7": function(e, t, a) {
        e.exports = a.p + "img/young-jump_label.834f0da1.svg"
    },
    1485: function(e, t, a) {
        e.exports = a.p + "img/Manga_plus_creators_label.303ae763.svg"
    },
    "18b5": function(e, t, a) {
        e.exports = a.p + "img/ultra_jump_logo.730746c5.png"
    },
    "19d0": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEUAAAD//wD/2QD/1wD/1wD/1wD/1wD/5wD/1gD/2QD//wD/1wD/1wD/1wD/1wD/5wD/1wD/1wD/1wD/1gD/1wD/1wD/1wD/2AD/1wD/1wD/1wD/2AD/2QD/1wD/2AD/1wD/3gD/1wD/1gD/1wD/2AD/3AD/1wD/1wD/1gD/1wD/2QD/2AD/2gD/1gD/1gD/1gAcB5WTAAAAL3RSTlMAAkns05rmCvofBLefroUH4NzYwqumcj/xsnhiNY1PLA9+OM46F/fAvJdEaSnDaqCfa58AAAJSSURBVEjHlZdpg6IwDIZbbvDkRsR71Nmd2e3//3dDGjsdKLTTfFCKPJqkb9JIZs1hLHK3uV91lFgYgMKa4pjYgdLcNrQDpQV7agN6rkQ9xwJ0yN1ZbwW6phZgb7RePpBchTYgWLx6uRtbgWB/M0xvbAuSEH/UC21BQtcYJ7UDwT4wt/JGfZoA37ze3ob3DmzwbZs0uvxOjHTBwxTOtv3i9tlfdHlW6ckzz+0eF/cGFr1TSdC//9GTNdctZvYC1yXsMmNA6rO2g2da7jdI8RHDVcpJX0ueuAwSkfYl+hExvtCSS3jk2F8UGKHw2khe4YmCEOpCgkW635EsNSSFFDaUfA7EcA+QLDT76sMDHdmPioChrRK9FiuM9SxvX17kbjMHbiJIPYGosp8hPI0k7FpObvz1h91Ff1rMkSDYLQkgIFgqYbL3mZotQQLkwR0e2FqQz81sWiMSqcKm/wRZaUCXK3xosQjzpnF1C2mYa/+pJjn55OeHl2g128EdVpKQPLGJagRQoeQU8nILylgnuY5xXjGjyGkDTUQpI3NZYSFfzcC4kMlxOn3m1pHw3VZ6ublZkZYXkQlQ2yMJebuoTYTakLF7ZGcDoh4BhHq8bqndoSM1fdAy6jEnS/fDxP0fH6yErvA3qdbPw8RRHnrYn86avCzk8KAWfVbP7kOGI51SMbH3aqenSb3slAFpNMeAbq90FNx1yXQjGf1ui4HvbL7r3fED4xDoeExYlC5K3y8XafSrsZPuAybNatANWznaWo7WybFoJGE3zNOu8vOtG+n+PnwBGJ2IhrwWd+8AAAAASUVORK5CYII="
    },
    "1afe": function(e, t, a) {
        e.exports = a.p + "img/facebook_logo.d29c02b8.svg"
    },
    "1c78": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_10L4A",
            img: "styles-module_img_1RSLp"
        }
    },
    "1fc0": function(e, t, a) {
        e.exports = {
            languageSettingBtn: "styles-module_languageSettingBtn_1MrGF",
            triangle: "styles-module_triangle_7ngq6",
            text: "styles-module_text_NZjpR"
        }
    },
    2: function(e, t) {},
    2332: function(e, t, a) {
        e.exports = {
            container: "index-module_container_2vEap",
            publisherNameContainer: "index-module_publisherNameContainer_3TbOW",
            publisherName: "index-module_publisherName_2Ttk0",
            horizontalDivider: "index-module_horizontalDivider_fIXn_",
            banner: "index-module_banner_1f13D"
        }
    },
    "2a28": function(e, t, a) {
        e.exports = {
            breadcrumbList: "styles-module_breadcrumbList_3mZEi",
            searchContainer: "styles-module_searchContainer_3ncHG",
            icon: "styles-module_icon_2BPdA",
            button_background: "styles-module_button_background_3117u",
            searchForm: "styles-module_searchForm_2eVUa",
            searchline: "styles-module_searchline_1eOAq",
            divider: "styles-module_divider_2EYj5",
            resultName: "styles-module_resultName_2EzE8",
            nothingMatched: "styles-module_nothingMatched_2sf-W",
            allTitles: "styles-module_allTitles_2Mr3b",
            loading: "styles-module_loading_36JvO",
            load: "styles-module_load_3NU2e"
        }
    },
    "2a64": function(e, t, a) {
        e.exports = {
            container: "index-module_container_1VU_t",
            oneImage: "index-module_oneImage_1UeeQ",
            appDefaultContainer: "index-module_appDefaultContainer_2D8HP",
            figureField: "index-module_figureField_mf_B0",
            appDefaultImageContainer: "index-module_appDefaultImageContainer_3IXCG",
            appDefaultImage: "index-module_appDefaultImage_TrWcI",
            appDefaultText: "index-module_appDefaultText_3-BJ5",
            checkboxField: "index-module_checkboxField_7hjdP",
            checkbox: "index-module_checkbox_4B8On",
            checkBoxLabel: "index-module_checkBoxLabel_19zSZ",
            closeButton: "index-module_closeButton_Qr0xN"
        }
    },
    "2acb": function(e, t, a) {
        e.exports = a.p + "img/icon_modal_close.90a428d0.svg"
    },
    "2c12": function(e, t, a) {
        e.exports = {
            commentItem: "CommentItem-module_commentItem_MvMgs",
            wrapper: "CommentItem-module_wrapper_3PmOK",
            icon: "CommentItem-module_icon_2MbYw",
            userName: "CommentItem-module_userName_1vLNi",
            body: "CommentItem-module_body_8LyBg",
            date: "CommentItem-module_date_3FMXp",
            like: "CommentItem-module_like_1u_7h",
            likeIcon: "CommentItem-module_likeIcon_3ILAP",
            numberOfLikes: "CommentItem-module_numberOfLikes_3q-S0",
            likeBox: "CommentItem-module_likeBox_1PxTq",
            liked: "CommentItem-module_liked_dRBGP",
            likeItem: "CommentItem-module_likeItem_3qF15",
            likeButtonIcon: "CommentItem-module_likeButtonIcon_2nrtX",
            likeText: "CommentItem-module_likeText_38Im_",
            likeButton: "CommentItem-module_likeButton_3oaVZ",
            likeLine1: "CommentItem-module_likeLine1_3HWeK",
            likeLine2: "CommentItem-module_likeLine2_-bEVU",
            likeLine3: "CommentItem-module_likeLine3_2UFh9",
            likeLine4: "CommentItem-module_likeLine4_11krE",
            likeAnima: "CommentItem-module_likeAnima_2MfyZ",
            likeHand: "CommentItem-module_likeHand_yY0xx",
            likeLines: "CommentItem-module_likeLines_3aSeg"
        }
    },
    "2e43": function(e, t, a) {
        e.exports = a.p + "img/icon_question.8d956e59.svg"
    },
    "2e6e": function(e, t, a) {
        e.exports = {
            sideMenu: "SideMenu-module_sideMenu_3ffJA",
            modal: "SideMenu-module_modal_ilcbL",
            chapterList: "SideMenu-module_chapterList_2K4-E",
            chapter: "SideMenu-module_chapter_2tPvv",
            hidden: "SideMenu-module_hidden_338ZK",
            appear: "SideMenu-module_appear_3Eu1G",
            routerActive: "SideMenu-module_routerActive_3_co7"
        }
    },
    "2f51": function(e, t, a) {
        e.exports = {
            textarea: "styles-module_textarea_3K1Ap"
        }
    },
    "33d7": function(e, t, a) {
        e.exports = a.p + "img/ic_hot@4x.b5709737.svg"
    },
    3451: function(e, t, a) {
        e.exports = {
            container: "HotTitle-module_container_3cHrJ",
            hotTitleTop: "HotTitle-module_hotTitleTop_3UDhS",
            hotTitle: "HotTitle-module_hotTitle_cor-0",
            icon: "HotTitle-module_icon_1sjm4",
            title: "HotTitle-module_title_YUCl7",
            author: "HotTitle-module_author_1xWwR",
            texts: "HotTitle-module_texts_P7yN4",
            count: "HotTitle-module_count_3fFi9",
            rank: "HotTitle-module_rank_lR99h",
            viewCountIcon: "HotTitle-module_viewCountIcon_XaksG",
            lang: "HotTitle-module_lang_3rLUZ",
            active: "HotTitle-module_active_jsCrg"
        }
    },
    "34ae": function(e, t, a) {
        e.exports = a.p + "img/AppStoreIcon.2928664f.svg"
    },
    "35e3": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_2s5eX",
            wrapper: "styles-module_wrapper_2SYcN",
            title: "styles-module_title_3K1kj",
            titleWithShown: "styles-module_titleWithShown_MRUCP",
            titleNoCheck: "styles-module_titleNoCheck_38Tj_",
            titleText: "styles-module_titleText_1HL1P",
            titleChecked: "styles-module_titleChecked_3_1Hw",
            item: "styles-module_item_2Q1Ev",
            border: "styles-module_border_1FdMM"
        }
    },
    "35f6": function(e, t, a) {
        e.exports = {
            titleBox: "styles-module_titleBox_3niQm",
            titleNoCheck: "styles-module_titleNoCheck_Snhkr",
            titleChecked: "styles-module_titleChecked_1CQfA",
            titleText: "styles-module_titleText_2zpTn",
            arrow: "styles-module_arrow_3HkQf",
            fadeEnterActive: "styles-module_fadeEnterActive_1yyn4",
            in: "styles-module_in_1j-c5",
            fadeLeaveActive: "styles-module_fadeLeaveActive_2Ry5x",
            out: "styles-module_out_if2nB"
        }
    },
    "3a09": function(e, t, a) {
        e.exports = {
            modal: "ModalBanner-module_modal_23c5H",
            banner: "ModalBanner-module_banner_bTno_",
            bannerImage: "ModalBanner-module_bannerImage_3YTi2",
            closeButton: "ModalBanner-module_closeButton_1yAkM",
            closeButtonImage: "ModalBanner-module_closeButtonImage_3clBN"
        }
    },
    "3c47": function(e, t, a) {
        e.exports = {
            mangaList: "Ranking-module_mangaList_22XeW",
            title: "Ranking-module_title_20hR9",
            header: "Ranking-module_header_1CLLN",
            toggle: "Ranking-module_toggle_xat_e",
            toggleItem: "Ranking-module_toggleItem_TQBd-",
            linkActive: "Ranking-module_linkActive_3B68P",
            filterContent: "Ranking-module_filterContent_dBGgK",
            filterText: "Ranking-module_filterText_1kzRE",
            modalHeader: "Ranking-module_modalHeader_1fs7E",
            modalTagField: "Ranking-module_modalTagField_c9cP3",
            modalSelectedTag: "Ranking-module_modalSelectedTag_229V2",
            modalSelectedTagText: "Ranking-module_modalSelectedTagText_1_cqr",
            modalUnselectedTagText: "Ranking-module_modalUnselectedTagText_9RRvy",
            modalTag: "Ranking-module_modalTag_2AsUT",
            modalTagText: "Ranking-module_modalTagText_yCSTu",
            modalLabelField: "Ranking-module_modalLabelField_1iOyE",
            modalSelectedLabel: "Ranking-module_modalSelectedLabel_Tf3dv",
            modalLabel: "Ranking-module_modalLabel_2xtaw",
            expandIcon: "Ranking-module_expandIcon_12-VA",
            listContent: "Ranking-module_listContent_1ctc_"
        }
    },
    "3df2": function(e, t, a) {
        e.exports = {
            header: "styles-module_header_2_n3A",
            gomuback: "styles-module_gomuback_20yQg",
            gomugomu: "styles-module_gomugomu_2sF1H",
            navigation: "styles-module_navigation_YdAIm",
            logo: "styles-module_logo_3q5z1",
            searchForm: "styles-module_searchForm_rhCn-",
            invisibleSearchForm: "styles-module_invisibleSearchForm_zyAP6",
            settingBtn: "styles-module_settingBtn_2xojh",
            hamburger: "styles-module_hamburger_22tm_",
            modal: "styles-module_modal_3F4WT",
            menu: "styles-module_menu_3I6fb"
        }
    },
    "3e28": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAgPUYgoYELIrJTuJqW0Eg7+exptXNll8Ixr6bcjkS3VXtYBJAAAABkElEQVRo3u2Y266CMBBFB4SCIHdUvDv//5PHk6kpmICt6SQmznprgnslbXelgCAIwtcSoCYAC6o1PbxiEtxr5BQMJ0ROQdIjq2ATIqfg2iKyCtbILNhzC2CL/xz4BBd8kCo+AXRYZwCMgupYAY/AIAIRiEAEIhCBCL5G8EQEIvhZgSq6vg6bQ5TwCPY5Pmkr/wJ1whF16V2wwwlh4lmQ4Qu9YrgETii8CkokjmX1vPJvvQpSeugwjGbrynDTzyYDnwJdAVrYMw02PgU07zkNCv0L/4IbDe4MgobaBTxTZNaV6tu+KUIQjhiVf0Qwc1Cc4EGC2rawqd+Qzp4UZwWJ3lH1Um1c80E1SIQ5ajr41JAuffIyXGCJGGeJ574XTVnDMrFjPqid42EaW+Ybyi5EDJFoFHxkiGGRa7VB+5bF1vmGQe+mmwILInwhsi7+HqyIXPNXegl6sCRyyjevFhlYG5zyE9MBd0ME72mRKMHRYPLtXi3AicD632lrTiE3g2V+gUQLrgRW+UOORAKCIAjfyx+kCLKua+dXnAAAAABJRU5ErkJggg=="
    },
    "3e42": function(e, t, a) {
        e.exports = {
            all: "Featured-module_all_YBAUS",
            contents: "Featured-module_contents_poS84",
            bannerContainer: "Featured-module_bannerContainer_1MxSs",
            largeBanner: "Featured-module_largeBanner_1mpmG",
            banner: "Featured-module_banner_uZxg-",
            smallBanner1: "Featured-module_smallBanner1_21-iu",
            smallBanner2: "Featured-module_smallBanner2_3_y27",
            contentsBanner: "Featured-module_contentsBanner_1WFBA",
            bannersTop: "Featured-module_bannersTop_1Iwki",
            titleList: "Featured-module_titleList__nXpF"
        }
    },
    "3e97": function(e, t, a) {
        e.exports = {
            divider: "styles-module_divider_84j1N"
        }
    },
    "404d": function(e, t, a) {
        e.exports = a.p + "img/web_logo_190118_light-txt.06756983.png"
    },
    4648: function(e, t, a) {
        e.exports = a.p + "img/creators-banner.3d5977dc.jpg"
    },
    "46ef": function(e, t, a) {
        e.exports = a.p + "img/x_logo.1ab08707.svg"
    },
    "48a5": function(e, t, a) {
        e.exports = a.p + "img/jump-plus_label.724e078b.svg"
    },
    "4a6a": function(e, t, a) {
        e.exports = {
            s: "styles-module_s_1dYOu",
            m: "styles-module_m_1410x",
            l: "styles-module_l_2xDvF"
        }
    },
    "4dcf": function(e, t, a) {
        e.exports = {
            header: "Navigation-module_header_37C_9",
            chapterTitleWrapper: "Navigation-module_chapterTitleWrapper_3UMsZ",
            chapterTitle: "Navigation-module_chapterTitle_20juD",
            appear: "Navigation-module_appear_30FBL",
            hidden: "Navigation-module_hidden_1uUaZ",
            imageContainer: "Navigation-module_imageContainer_AShLe",
            detailContainer: "Navigation-module_detailContainer_1aDk8",
            title: "Navigation-module_title_180OT",
            settingsContainer: "Navigation-module_settingsContainer_1rlLY",
            kebabMenu: "Navigation-module_kebabMenu_3gR5D",
            languageButton: "Navigation-module_languageButton_1euMw",
            circle: "Navigation-module_circle_1fTQK",
            logo: "Navigation-module_logo_2UY22"
        }
    },
    "4f3c": function(e, t, a) {
        e.exports = {
            setting: "styles-module_setting_6Uurn",
            menuSP: "styles-module_menuSP_1GO2v",
            menu: "styles-module_menu_23iWo"
        }
    },
    "504f": function(e, t, a) {
        e.exports = a.p + "img/jump-square_label.af79c66f.svg"
    },
    "513e": function(e, t, a) {
        e.exports = {
            mangaList: "MangaList-module_mangaList_Owudt",
            title: "MangaList-module_title_3b2sX",
            titleWithBreadcrumbs: "MangaList-module_titleWithBreadcrumbs_SFsdd",
            header: "MangaList-module_header_3pFMs",
            topContent: "MangaList-module_topContent_XQq2-",
            toggle: "MangaList-module_toggle_2znd9",
            toggleItem: "MangaList-module_toggleItem_2bwjB",
            linkActive: "MangaList-module_linkActive_2FFDQ",
            headerButtons: "MangaList-module_headerButtons_1LNQq",
            selectedFilter: "MangaList-module_selectedFilter_BEFhn",
            showModalButton: "MangaList-module_showModalButton_3Sk87",
            filter: "MangaList-module_filter_31fUI",
            sort: "MangaList-module_sort_UXWYs",
            selected: "MangaList-module_selected_bb7wV",
            expandIcon: "MangaList-module_expandIcon_2y6Fy",
            text: "MangaList-module_text_3yL8p",
            spFilterButton: "MangaList-module_spFilterButton_3GEsM"
        }
    },
    5185: function(e, t, a) {
        e.exports = a.p + "img/app_icon.919a13c7.png"
    },
    5225: function(e, t, a) {
        e.exports = a.p + "img/abj1092_1042.6c597180.png"
    },
    5764: function(e, t, a) {
        e.exports = {
            label: "styles-module_label_1F6TH"
        }
    },
    "596b": function(e, t, a) {
        e.exports = {
            sort: "ChapterList-module_sort_3OHNF",
            message: "ChapterList-module_message_bxe9x",
            sortIcon: "ChapterList-module_sortIcon_1dGE4",
            chapterHeader: "ChapterList-module_chapterHeader_1_HCB",
            unseparator: "ChapterList-module_unseparator_1Ag_c",
            separator: "ChapterList-module_separator_1Oam1",
            arrow: "ChapterList-module_arrow_3MDt_",
            appIcon: "ChapterList-module_appIcon_1plyP",
            chapterListTitleWrapper: "ChapterList-module_chapterListTitleWrapper_1MLyK",
            chapterListTitle: "ChapterList-module_chapterListTitle_3-F05",
            numberOfViews: "ChapterList-module_numberOfViews_14bIt",
            viewIcon: "ChapterList-module_viewIcon_1p37L",
            midAd: "ChapterList-module_midAd_3ui95"
        }
    },
    "5de0": function(e, t, a) {
        e.exports = {
            publisherName: "item-module_publisherName_3Ylu4",
            publisherNews: "item-module_publisherNews_2R2e5",
            news_main: "item-module_news_main_2xACV",
            news_subject: "item-module_news_subject_3mtFA",
            news_date: "item-module_news_date_10k7_",
            news_description: "item-module_news_description_3kaCG",
            news_click_here: "item-module_news_click_here_3Nu4L"
        }
    },
    "5dfb": function(e, t, a) {
        e.exports = {
            flexContainer: "TitleDetailHeader-module_flexContainer_3D03N",
            right1: "TitleDetailHeader-module_right1_1o9Bj",
            fitImage: "TitleDetailHeader-module_fitImage_1-ino",
            cover: "TitleDetailHeader-module_cover_3ljyH",
            coverImage: "TitleDetailHeader-module_coverImage_3rvaT",
            info: "TitleDetailHeader-module_info_1_7BN",
            overviewTitle: "TitleDetailHeader-module_overviewTitle_1X9aO",
            rating: "TitleDetailHeader-module_rating_cPrjU",
            ratingText: "TitleDetailHeader-module_ratingText_2w9GT",
            questionImage: "TitleDetailHeader-module_questionImage_3qHm1",
            overviewTitleWrapper: "TitleDetailHeader-module_overviewTitleWrapper_3_vMN",
            lang: "TitleDetailHeader-module_lang_2reK_",
            numberOfViews: "TitleDetailHeader-module_numberOfViews_3591-",
            viewIcon: "TitleDetailHeader-module_viewIcon_3vNKD",
            overview: "TitleDetailHeader-module_overview_32fOi",
            jumpLogo: "TitleDetailHeader-module_jumpLogo_1DX1P",
            sns: "TitleDetailHeader-module_sns_1IxNf",
            title: "TitleDetailHeader-module_title_Iy33M",
            author: "TitleDetailHeader-module_author_3Q2QN",
            favoritedBtn: "TitleDetailHeader-module_favoritedBtn_Z2Lrg",
            left1: "TitleDetailHeader-module_left1_3C2Fx"
        }
    },
    "5e49": function(e, t, a) {
        e.exports = {
            hideBtn: "Updates-module_hideBtn_1ydgH",
            fadeOut: "Updates-module_fadeOut_2DqcJ",
            group: "Updates-module_group_V_oYD",
            fluidImage: "Updates-module_fluidImage_1NMT9",
            move: "Updates-module_move_3XB6-",
            topImage: "Updates-module_topImage_1i-aW",
            featureTitle: "Updates-module_featureTitle_2bqgw",
            subHeader: "Updates-module_subHeader_Nc89q",
            header: "Updates-module_header_2qZIk",
            dailyTitle: "Updates-module_dailyTitle_5Pcty",
            dailyShowAll: "Updates-module_dailyShowAll_olidL",
            subShowAll: "Updates-module_subShowAll_IFDwn",
            subShowAllBottom: "Updates-module_subShowAllBottom_1qN-f",
            banner: "Updates-module_banner_2xL6d",
            flexContainer: "Updates-module_flexContainer_1FDso",
            main: "Updates-module_main_1jRHq",
            sub: "Updates-module_sub_2KMYR",
            warn: "Updates-module_warn_1T6BS",
            socials: "Updates-module_socials_2DpDY",
            subInnerWrapper: "Updates-module_subInnerWrapper_1P-W9",
            rankingTitle: "Updates-module_rankingTitle_Ky0uL",
            rankingHeaderTitle: "Updates-module_rankingHeaderTitle__rR8m",
            sideAd: "Updates-module_sideAd_Kq_1O",
            topAd: "Updates-module_topAd_2rtgG",
            bottomAd: "Updates-module_bottomAd_kH-sI",
            mpcBanner: "Updates-module_mpcBanner_H76yA",
            fadeIn: "Updates-module_fadeIn_1Afxc"
        }
    },
    "60fe": function(e, t, a) {
        e.exports = {
            title: "styles-module_title_3gUV9",
            toggle: "styles-module_toggle_2DmKn"
        }
    },
    "63e4": function(e, t, a) {
        e.exports = {
            input: "styles-module_input_1_xZD",
            radio: "styles-module_radio_311JI"
        }
    },
    "660a": function(e, t, a) {
        e.exports = a.p + "img/app_banner_en.2fbddd34.png"
    },
    "6a23": function(e, t, a) {
        e.exports = a.p + "img/jump_giga_logo.fb7376e0.png"
    },
    "6ae0": function(e, t, a) {
        e.exports = {
            language: "LanguageButton-module_language_2VYyu",
            svgContainer: "LanguageButton-module_svgContainer_gccQ3",
            hasNew: "LanguageButton-module_hasNew_1dnp5"
        }
    },
    "6ae4": function(e, t, a) {
        e.exports = {
            btn: "styles-module_btn_1VADN",
            icon: "styles-module_icon_127IQ"
        }
    },
    "6c9f": function(e, t, a) {
        e.exports = {
            gridContainer: "SubscribedTitles-module_gridContainer_1cbmH",
            empty: "SubscribedTitles-module_empty_34wNC",
            emptyImage: "SubscribedTitles-module_emptyImage_hsIMK",
            loading: "SubscribedTitles-module_loading_14Jh6",
            find: "SubscribedTitles-module_find_2w7Jv",
            btn: "SubscribedTitles-module_btn_bfsHC",
            bookshelf_wrapper: "SubscribedTitles-module_bookshelf_wrapper_19Yd8",
            books_list: "SubscribedTitles-module_books_list_3p7uD",
            book_item: "SubscribedTitles-module_book_item_2bHZB",
            travel: "SubscribedTitles-module_travel_12Sea",
            first: "SubscribedTitles-module_first_2jyay",
            second: "SubscribedTitles-module_second_3YW9S",
            third: "SubscribedTitles-module_third_YgYm7",
            fifth: "SubscribedTitles-module_fifth_1f1E7",
            fourth: "SubscribedTitles-module_fourth_3IQZO",
            sixth: "SubscribedTitles-module_sixth_2S5HB",
            shelf: "SubscribedTitles-module_shelf_oHSy7",
            move: "SubscribedTitles-module_move_13efC",
            noFavorite: "SubscribedTitles-module_noFavorite_1JfNb"
        }
    },
    "6e75": function(e, t, a) {
        e.exports = a.p + "img/search_2white.7112dd19.svg"
    },
    "6e98": function(e, t, a) {
        e.exports = a.p + "img/x_logo.c32528ec.svg"
    },
    "6f17": function(e, t, a) {
        e.exports = {
            image: "AllTitle-module_image_JIEI9",
            creatorImage: "AllTitle-module_creatorImage_35fmm",
            title: "AllTitle-module_title_20PzS",
            upLabel: "AllTitle-module_upLabel_2wn3S",
            newLabel: "AllTitle-module_newLabel_1LsaG",
            reEditionLabel: "AllTitle-module_reEditionLabel_iAqTT",
            upLabelText: "AllTitle-module_upLabelText_2LMKC",
            newLabelText: "AllTitle-module_newLabelText_1jUje",
            reEditionLabelText: "AllTitle-module_reEditionLabelText_NCpYm",
            lang: "AllTitle-module_lang_2Gl1c",
            active: "AllTitle-module_active_932yT",
            allTitle: "AllTitle-module_allTitle_1CIUC",
            author: "AllTitle-module_author_2rV8i"
        }
    },
    "6f6e": function(e, t, a) {
        e.exports = a.p + "img/weekly-jump_logo.46d6d9c4.svg"
    },
    "6fd9": function(e, t, a) {
        e.exports = a.p + "img/discord_logo.341acad2.svg"
    },
    7090: function(e, t, a) {
        e.exports = {
            container: "styles-module_container_1fWRa",
            img: "styles-module_img_1km_M"
        }
    },
    "720a": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_3bCyC",
            copyright: "styles-module_copyright_w9bq2",
            abj: "styles-module_abj_3Qpv-",
            abjLogo: "styles-module_abjLogo_2yZ-i",
            abjText: "styles-module_abjText_1tKPN",
            divider: "styles-module_divider_OBVl8",
            footerNavigation: "styles-module_footerNavigation_2XusU",
            sns: "styles-module_sns_1MuOK"
        }
    },
    "721c": function(e, t, a) {
        e.exports = {
            modal: "Modal-module_modal_35zWl",
            appear: "Modal-module_appear_2gHfC",
            hidden: "Modal-module_hidden_15YJZ",
            settings: "Modal-module_settings_ZBqqu",
            modeContainer: "Modal-module_modeContainer_2orqk",
            postComment: "Modal-module_postComment_2S6LH",
            commentContainer: "Modal-module_commentContainer_3Hpf1",
            modeMessage: "Modal-module_modeMessage_3kUyi",
            modeItemWrapper: "Modal-module_modeItemWrapper_3ZWSe",
            viewMode: "Modal-module_viewMode_1z8Jn",
            shareContainer: "Modal-module_shareContainer_1iyFL",
            share: "Modal-module_share_iu4Nv",
            shareButton: "Modal-module_shareButton_3pDy8",
            twitter: "Modal-module_twitter_7USC6",
            facebook: "Modal-module_facebook_1TKE1",
            twitterIcon: "Modal-module_twitterIcon_PZmeR",
            facebookIcon: "Modal-module_facebookIcon_aZx6E",
            twitterLabel: "Modal-module_twitterLabel_286Po",
            facebookLabel: "Modal-module_facebookLabel_30KFu",
            commentIcon: "Modal-module_commentIcon_2niZA",
            quaritySelection: "Modal-module_quaritySelection_3Hp97",
            quarity: "Modal-module_quarity_1YUzn"
        }
    },
    "72f4": function(e, t, a) {
        e.exports = {
            form: "styles-module_form_XBgs-"
        }
    },
    "753f": function(e, t, a) {
        e.exports = {
            hamburger: "styles-module_hamburger_12E6I",
            border: "styles-module_border_QuRbe",
            burger: "styles-module_burger_GAL-M",
            clicked: "styles-module_clicked_2bsio"
        }
    },
    7600: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACfSURBVHgB7ZXNDcIwDIXtKIqUEx2hK7ABIzACbNBV2KAjsAkrlA1yzx/P3BC9VHUuVb5LpEj+LPvwzARqrWNKaWLmE+0Anjc8s/d+YZHmnF/4H0iHEGM8G3S4KUqFwVo7GYw/kjKyUkON6OIu7uLDiCU+W4gXyWRL6x0feAJtBHUB2f6UoP8Tl1LuzrmZdmJaSH/EmtIvuE8XLPtKynwAmhdGUkvPcmYAAAAASUVORK5CYII="
    },
    "77b0": function(e, t, a) {
        e.exports = a.p + "img/search_1_grey.c4d60929.svg"
    },
    "77bc": function(e, t, a) {
        e.exports = a.p + "img/img_eng_outside_error.2fa0c638.png"
    },
    "785d": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_2RlKD",
            border: "styles-module_border_14dph",
            wrapper: "styles-module_wrapper_2_k3z"
        }
    },
    "7bb5": function(e, t, a) {
        e.exports = {
            background: "FilterModal-module_background_2BThK",
            modalContainer: "FilterModal-module_modalContainer_25ENC",
            modalHeader: "FilterModal-module_modalHeader_CYLzb",
            modalTagField: "FilterModal-module_modalTagField_1TpUL",
            modalSelectedTag: "FilterModal-module_modalSelectedTag_1r8kZ",
            modalSelectedTagText: "FilterModal-module_modalSelectedTagText_2I80O",
            modalUnselectedTagText: "FilterModal-module_modalUnselectedTagText_4TbZX",
            modalTag: "FilterModal-module_modalTag_1JurO",
            modalTagText: "FilterModal-module_modalTagText_3-G-2",
            modalLabelField: "FilterModal-module_modalLabelField_1QBxO",
            modalSelectedLabel: "FilterModal-module_modalSelectedLabel_3dHoA",
            modalLabel: "FilterModal-module_modalLabel_f7pjs",
            listContent: "FilterModal-module_listContent_1wxPL",
            modalCloseButton: "FilterModal-module_modalCloseButton_3pJAl"
        }
    },
    "7e1c": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_1rtol",
            mainContainer: "styles-module_mainContainer_2tQWW",
            otherContainer: "styles-module_otherContainer_27uJu",
            footer: "styles-module_footer_3vV0p"
        }
    },
    "809d": function(e, t, a) {
        e.exports = {
            container: "styles-module_container_aAOj-",
            icon: "styles-module_icon_2bT0W"
        }
    },
    "842b": function(e, t, a) {
        e.exports = {
            logo: "styles-module_logo_2sj8Q",
            logoLuffy: "styles-module_logoLuffy_3C4Ky"
        }
    },
    8514: function(e, t, a) {
        e.exports = {
            container: "styles-module_container_Du5fK",
            divider: "styles-module_divider_3mhyE",
            languageWrap: "styles-module_languageWrap_2PNos"
        }
    },
    "855f": function(e, t, a) {
        e.exports = {
            container: "TitleDetail-module_container_3O1MS",
            breadcrumbList: "TitleDetail-module_breadcrumbList_Yc8bw",
            flexContainer: "TitleDetail-module_flexContainer_1oGb4",
            mainContainer: "TitleDetail-module_mainContainer_1niDR",
            main: "TitleDetail-module_main_19fsJ",
            sub: "TitleDetail-module_sub_3Gl_e",
            banners: "TitleDetail-module_banners_1ALpQ",
            banner: "TitleDetail-module_banner_2kTCX",
            bannerWrap: "TitleDetail-module_bannerWrap_3Iyuy",
            loading: "TitleDetail-module_loading_1g5qJ",
            gridContainer: "TitleDetail-module_gridContainer_3ff95",
            gridItemFacebook: "TitleDetail-module_gridItemFacebook_30GJz",
            gridItemTwitter: "TitleDetail-module_gridItemTwitter_3lYhB",
            topside: "TitleDetail-module_topside_1IIit",
            languages: "TitleDetail-module_languages_87lPm",
            active: "TitleDetail-module_active_1rFIx",
            languageHeader: "TitleDetail-module_languageHeader_16ygX",
            updateHeader: "TitleDetail-module_updateHeader_Ku5ec",
            updateInfo: "TitleDetail-module_updateInfo_2MITq",
            scheduleLabel: "TitleDetail-module_scheduleLabel_3x30E",
            updateDescription: "TitleDetail-module_updateDescription_2dpJE",
            bottomAd: "TitleDetail-module_bottomAd_3ENg3",
            sideAd: "TitleDetail-module_sideAd_-P-pH",
            topAd: "TitleDetail-module_topAd_MtvCi",
            simulrelease: "TitleDetail-module_simulrelease_3bcIo",
            simul: "TitleDetail-module_simul_2dkiC",
            simul2: "TitleDetail-module_simul2_2YRGj",
            anime: "TitleDetail-module_anime_1Rkc5",
            simulText: "TitleDetail-module_simulText_2uVb6"
        }
    },
    "85ec": function(e, t, a) {},
    "863a": function(e, t, a) {
        e.exports = a.p + "img/icon_comment.c437702e.svg"
    },
    "89c2": function(e, t, a) {
        e.exports = {
            input: "styles-module_input_1Joni",
            arrow: "styles-module_arrow_20a2y"
        }
    },
    "8b7a": function(e, t, a) {
        e.exports = {
            rankingTitle: "RankingTitle-module_rankingTitle_2E0E-",
            titleImg: "RankingTitle-module_titleImg_18ZMt",
            title: "RankingTitle-module_title_2rg5n",
            author: "RankingTitle-module_author_2DBfa",
            titleDetail: "RankingTitle-module_titleDetail_35zr8",
            viewCount: "RankingTitle-module_viewCount_1E3Re",
            icon: "RankingTitle-module_icon_hKj5L",
            rankingNumber: "RankingTitle-module_rankingNumber_a7Dbg",
            viewCountIcon: "RankingTitle-module_viewCountIcon_Haavo"
        }
    },
    "8c4f": function(e, t, a) {
        e.exports = {
            wrapper: "styles-module_wrapper_2fJBn",
            item: "styles-module_item_1b7tA",
            main: "styles-module_main_3Z8cE",
            divider: "styles-module_divider_2Wjtk",
            languageSetting: "styles-module_languageSetting_2zO6P",
            languageSettingContainer: "styles-module_languageSettingContainer_2yrsA",
            menuHeader: "styles-module_menuHeader_3Cf4k",
            menuMiddle: "styles-module_menuMiddle_2JxB7",
            menuFooter: "styles-module_menuFooter_aLPo1"
        }
    },
    "8ce6": function(e, t, a) {
        e.exports = {
            text: "styles-module_text_2gkQu",
            itemArea: "styles-module_itemArea_1XSVI",
            item: "styles-module_item_3w45u",
            items: "styles-module_items_2sfN5",
            message: "styles-module_message_SR0HP"
        }
    },
    "8e4e": function(e, t, a) {
        e.exports = {
            container: "Error-module_container_mzmCx",
            fadeInText: "Error-module_fadeInText_3Fsu1",
            flicker4: "Error-module_flicker4_21GXI",
            hueRotate: "Error-module_hueRotate_QjA-l",
            svgWrap_container: "Error-module_svgWrap_container_LYYIl",
            svgWrap_1: "Error-module_svgWrap_1_3UF8g",
            svgWrap_2: "Error-module_svgWrap_2_2X6yY",
            id1_1: "Error-module_id1_1_2HyJN",
            id2_1: "Error-module_id2_1_3-gle",
            id3_1: "Error-module_id3_1_3egtZ",
            id4_1: "Error-module_id4_1_3OXwS",
            id1_2: "Error-module_id1_2_1N161",
            id2_2: "Error-module_id2_2_QpOX7",
            id3_2: "Error-module_id3_2_2Wqwn",
            id4_2: "Error-module_id4_2_32ISq",
            drawLine3: "Error-module_drawLine3_1371q",
            flicker3: "Error-module_flicker3_QDFsR",
            drawLine2: "Error-module_drawLine2_1GMtq",
            flicker2: "Error-module_flicker2_1-LSG",
            drawLine1: "Error-module_drawLine1_3QcYt",
            flicker1: "Error-module_flicker1_3-Lyi"
        }
    },
    "92b0": function(e, t, a) {
        e.exports = {
            wrapper: "styles-module_wrapper_1E4FG"
        }
    },
    9400: function(e, t, a) {
        e.exports = {
            shareButton: "ShareButton-module_shareButton_217yQ",
            content: "ShareButton-module_content_1Zhkq",
            twitter: "ShareButton-module_twitter_36sb8",
            facebook: "ShareButton-module_facebook_2v5Yx",
            icon: "ShareButton-module_icon_1UbA4",
            label: "ShareButton-module_label_2faZb"
        }
    },
    9904: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABgCAMAAADPemeEAAAAflBMVEUAAAD/1wD/1wD/1wD/2gD/6gD/2AD/2QD/3gD/1wD/1wD/2AD/2AD/1wD/1wD/1wD/1wD/1wD/1wD/1wD/2AD/1wD/1wD/1wD/2AD/2wD/2gD/3AD/1wD/1wD/1wD/2AD/2AD/1wD/2AD/1wD/2AD/2AD/2AD/1wD/1wD/1gDUfC5gAAAAKXRSTlMAgJjwJgc6MhPW+Xxc6MDck7fIb1D1484sHxsOsKSddmhjQqmJV0mO0VVgC2kAAAMmSURBVGjexZjpduIwDEZFdqBhh0LY9/r9X3BOz2Bh+JropLJn7q+mpRZxtNyYWpPcB2U8iZYUnmJrHmwqCsyqa5hF4JtblcYhzikkA/NCN6VwdMwbOwpG0jPvZBSKsQE+KRAzDjH94Hs8UhBSzvoO0dT+XK4pBHu7/vA7Bz/t1Z0CUMR2+dn3ZWavegn5Z2dXH/y95rY1Ju/kxpI/msnc/uJEjO/eEdGDPvcR8syV+2HB2bngSiCvpENYGL6AGtyytGZr/VFxMtx+ThqPkw3THMvBC1DAdYXuiwm3pqYW5ocjN92iPkv35IV12TBOZp7T/2LX+2ocqFsvQtVr7IFLp2fq2djFzvQjI/v3Cak5cdqvpDn3QVq+ni5Qw4ENWZv+uBLiuIkC2CNhp+crUgBPX8whBQmYr2DKmVqBZae/KAQZe1HFIyxzyLGjHfQusHcyzyEmywcIskKBhWAgyCoFFoLBfNUosBBMIchoM0IwcCKVAgvBQJA1CiwE0wgy/qsQTC/IHdgUIRhsvFqBMZhCkDGRN8Rw8TIlvRJxsSgUGKYJzx2FIOP3v9QMuJrxNW0hyKjAa1zO4VLfuvtaBeapUz9PbjiU6PejMDcON5Ugy0O+MA6JIBJqBZ6bJykhd05VjQJjVZeC/OkVeAxlphDkqfDZCMpM+LYaBd5DmQnPQaPAV6fMlIIsv9plUGbC66NGgSsoM6RT82Lc/nW8V19mgiCLCowMG8oMBbloo8DIAFJIOqaRFVh213PL6SsrMNIXygwFWVZg+XkcfmFM+DBGzRNo9GDZ6jhUVmCfB71qe25Rs7ICI0XuULV7M2FW8ECF9JAVKq/ts2dQYHUwFGQsQn0wbBJXQYHVwVCQUYF9Bku78ElQYHUwFOR5JSiwKhgKMiqw72C4NAqKPhgKMpxN+g9WlK/pPwapVAZDQeZ8SFqdJ68Th6LVifbJ7cBXCkLm2uEY/MUzG2cfS5CcQLfWS4liFo9AFCy1T+lcRJ0gRDZA/Byo4elyxw8LV+U6Nv+GiptCePbcLMOz5f41N4Hp7V2lLk1A4t1bEWfH/igKQed4Sul/8Ad9m7urTXlhhwAAAABJRU5ErkJggg=="
    },
    "9b54": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgBj0hwSKyYLihGpbQSAB+/jvptXNX00tCMa+spuYUDkqEujl3a9yVS/mkXkX4MN39wAAAcpJREFUaN7t1mlvgkAQgOGhHKJyQ1G876PH/P+fV+NgBknaxjKTmHTfT65ueBLWXQCTyWR66iyss+DH3CAvsnQ38c86QNnHW4dIHnDn2CgLxYF3vMteCwMjbFW4okD8iu0CUSBEahpGw5Q+vooCHk2YVI27tZEEejRh1BwsJQHaAgkt7AfNHkoC9vX3Pg0Cni0G0MLuaXBSALbX31MaHPkWSS/y+DqY8UYQAxY0YQ6X1siaGLBE6ujCuT5Us1gScLe3Q66PdbnsYVdiu5UsEOd4X0/8gbNoHaZSABfmNqKN1JsrCHCbaIi8yxQAqHY0c++qADy1BB3gs16CIlYCFsjPGg1gnfAeUAFmSIU6AL9agArA70YrJSBAagY6QFUf1MlYCeAMAAb410DUo4kvSsApQ02gmiNqAuMCVYFhiprA5oCoCvRQGShVAX5cTtQAWOElz9UDIMdsBKAIRNMIdADuqQDLbpTcgKT5rdUJAA9/yet6i7y/XJ+BroInscgOfpsj8y9yHr4+A50ER24fOA9en4EOgiO7kwfYagCyQFsYgCzQFgYah53P1/dBA2DBBw2ABR80AH4iWKABsGCBBsCCBQ8BJpPJ9KR9AY4H9+HKSblgAAAAAElFTkSuQmCC"
    },
    "9d9a": function(e, t, a) {
        e.exports = a.p + "img/teenplus.7e6d1a4f.svg"
    },
    a011: function(e, t, a) {
        e.exports = {
            pcLayout: "HotTitles-module_pcLayout_1xHBq",
            spLayout: "HotTitles-module_spLayout_20BDj",
            flexContainer: "HotTitles-module_flexContainer_1m838",
            gridContainer: "HotTitles-module_gridContainer_2uBjc",
            bannerField: "HotTitles-module_bannerField_2RQ_G",
            banner: "HotTitles-module_banner_eY8C7",
            contentsBanner: "HotTitles-module_contentsBanner_kofHB"
        }
    },
    a177: function(e, t, a) {
        e.exports = a.p + "img/flogo-HexRBG-Wht-58.e3d3a393.svg"
    },
    a199: function(e, t, a) {
        e.exports = {
            background: "SortModal-module_background_1ye-i",
            modalContainer: "SortModal-module_modalContainer_2ULke",
            modalHeader: "SortModal-module_modalHeader_1MZHf",
            sortSelector: "SortModal-module_sortSelector_2tHQA",
            sortCell: "SortModal-module_sortCell_3kLeV",
            sortInput: "SortModal-module_sortInput_1WTY5",
            modalCloseButton: "SortModal-module_modalCloseButton_1e_-k"
        }
    },
    a71b: function(e, t, a) {
        e.exports = a.p + "img/saikyo_jump_logo.13e2ad3b.png"
    },
    a7ed: function(e, t, a) {
        e.exports = {
            input: "styles-module_input_3SzMJ",
            checkbox: "styles-module_checkbox_2pXpO"
        }
    },
    ac0d: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAnFBMVEUAAAC/YiW6XSW6XCXAZS2/YSrUfjzGZjW6XCS6XSS6XSW6XCS6XSXBZCm6XSW6XCS6XSS6XSS6XSW6XSS6XSW6XSS7Xia6XSS7XSW6XCS6XSS6XSS6XSW7XSW6Xya9Xya9YCm6XCS6XSS6XSS6XCW7XiW7XSW7XSa8XSa+Xyi6XSW7Xya7Xia6XSW7Xyi6XCS6XCW6XSW7XSW5XCRekoKXAAAAM3RSTlMAG+T6DhcECO32nsGJEqTUxn9q3Xp2TnBg8amTZVQ/KR/or5iORFpJOCS0PDPQLcvXuoNzIiZOAAAGZklEQVR42uzZ2XKiQBQG4F9AwAVE0ahE4xbcNXH+93+3yVgTGgVbGhVv/C6V6qZOn6WrwMuLmjcLzzNd4GmMShVPM6Rt4lkCMsSTWH1yhid5IznBk7j8scFTmDZ/vOMpFvxHQ2HMsuDyKBS/OHisVoUXNUZ4sH2DF8wsPJw1Yxr7DYUY2kyolVCQUo2n9CaKYzZ1xmgbFOqDgmegWFsKOxSszpgViuUzpoNC7XlU4dEXCtX8X9z/S36MIjWOxR2VfBcFGpH0l6LkPRSoTQZRcW80sozi7CoDCM6ULRRmvBvhxGCNwoytRBLg5eXl/pztsPNeDda1w9Sd1VuLlYVijHuuxnP6V31h4MFWTZ+X6Ie5hYexBh7l+tUlHsLoTJhBLcTdWW2bGXn33n7hU0FQxv2UplTT7+JeFjaVHcq4B7POPCYfuJ1TYxrbqza7g+G81alPGzrTdHCr0jcTNLc3Rpy5bB8qTPjEbUZaso+ESGOkdCDXxA32Nk9NOobkTV2dp6YmchtrPGG3LEitXJ6qIi/n+2wlB1d9NHiijnwsj3Fattox//BEC7m8M27tIKNwwhh9ixzeGPcH2ZV3jPENKBvb+YNn1BgTQNmBMXOosdaMGULR8LaksWoUNANKDI1CE+qMRv4+W6cwRR6rPiP6CAqciixb1Q/OhYJYo9CXSFde9LrNdmu+tZBuFltkhcyM/rXzWlZ9sfKuuZLkjWqPb1/J1MWOZw5bJM0Z0UvI6lta4Y7LFO8mEmo5rjVLRnwzuXeDqQ7JGIWMNHJMlIG8gEl5SnuMbFW+FB5ppiSHE+ay4fSpHPU6zn0wQRJacyL+VM71Pc6tGfF6m9J2OKWwxLlPRsqK82yHc2U9Kp75byx0/uri3FZxtlkVSdR7KRt1Zecq8meGDPaMhJcHziQWDVkfC/jrS20g6NbltQIIE8lVtcVffbV82yETSxe1Jjt0A9e5qpevMIpUGQkGIyNc5yneWB1fOrrEaNvgOtE+e0iQTbhJCZANl1Dpc90bJLbdH/VAvKq9QZq1ZDlZZYbX81LwxkgVKHUZXXTL7Jv7bRPpqkqX/4r65jURcdnmDwp75as5wj3C7md7us0zwd/2zW1JURgIoM1luIuAgiAM42297qpr//+/7W7VTiVOTCZhgvPCebQsj5ru0J2GhYaAI8VhoyRHbwcPSJRSLZQ7VTilf9msLhax+yfhKu4l5IFan3Soid502f1P7f6CHN+5ghSNqEDeq11YCom3y1+zZyQkJGfj4vgUlDdo84M9AQmcinQhzAoa73Cu2W/MhynWziuyafKLdjqwX/mtQav6N87YWlhcK9ZsfcymjmWDYgW55jZf1o68aJFXmZtThfWjuPjwbG4H4v8/AnYzj2oW+aGYqh/I5PwOBL15lKX0dJGtfa7MFqOSbEsX7jAqFLC0uccyCchyQW4H1CADN6CdX12O8jJqsMDGL5c1P22qEcjiLgUt/xoJwpHKS9Xt2D1HweaQPVx3r+FvVui/gDy2R30qU44bzCwF/fWLYO2wBuj40xOHbdPzuyIibGy2rqffYIAKzvizKY3bZukmWEd5eXbEsyH18V6LFNHXZkNXBxSJkWKq6r4gRav+3c3uk8nFFSlqUGdvIUXsgjRnEykuLnQg73jzeuMjRXWATqyQpirllmvO3+/VpzSEUOLHl173gaL4kNeqDRDyI8F7UuiOMcEP+rVgCQuiFgW6+mSSQO2lNOfIxI/c4GvYITJYya0dAcViG0yQJYOv4sackimM62iabtbzsY+PqF5BA42PHfj1Blo4X5FL/w+1uJGFSkx2oJG3EOXxby7o5XWMcljxAfRTXGTUwQH6oQ0qFHKdGtAf7vboc6Os3kPfOKc09Bhx3BzgWdjnXZnNprdbPmu27cKBAe0Yq5+qcVGG2uSIv08qKZGZaGqUI4Y7kGOULxE1yxGXdft5FpRHC1Gv/B2T+Plm7XKCn9QP+lK7ncVXJOiX099gHkTTbLsryllax8cJEvqWswzyQT7IB/kgH+Qa5NYmeaKcPRprvG+ReyX8YxR8gzwYkccYniwfn4DgTP0nyv3cgTsWx6fJVwtgKMynyCcFPMLeWL3LrcgFDuekZ7n41LvxepR7JYgZBfrlSs8u6ZaT1BZAkl6vnKS2DIujVjlJbTkKU6PcLEANO5qAJhwHlLFhYIDlDz2jrBwe4Y/0AAAAAElFTkSuQmCC"
    },
    ad6e: function(e, t, a) {
        e.exports = {
            anchor: "styles-module_anchor_8_ptB"
        }
    },
    b3d2: function(e, t, a) {
        e.exports = a.p + "img/maintenance.2515d118.png"
    },
    b5b6: function(e, t, a) {
        e.exports = {
            container: "styles-module_container_kWnuS",
            appIcon: "styles-module_appIcon_rGZ68",
            appStoreIcon: "styles-module_appStoreIcon_3joeo",
            playStoreIcon: "styles-module_playStoreIcon_2Wzvj",
            vertical: "styles-module_vertical_2WFUo",
            text: "styles-module_text_2Gg98",
            horizontal: "styles-module_horizontal_nhDKQ"
        }
    },
    b85d: function(e, t, a) {
        e.exports = {
            container: "index-module_container_-p6fK",
            description: "index-module_description_1Arwn",
            questionnaire: "index-module_questionnaire_38ygP",
            questionnaire_item: "index-module_questionnaire_item_3QJdZ",
            questionnaire_number: "index-module_questionnaire_number_2jd_c",
            questionnaire_title_required: "index-module_questionnaire_title_required_2pb_t",
            radio: "index-module_radio_3q3eO",
            checkbox: "index-module_checkbox_2Bpzz",
            label: "index-module_label_1hxoD",
            choices: "index-module_choices_1JCFR",
            radios: "index-module_radios_1kd0X",
            button: "index-module_button_kq6Bt",
            answered: "index-module_answered_3ieoT",
            error_message: "index-module_error_message_1xYnq",
            header: "index-module_header_37Zag",
            check_mark: "index-module_check_mark_2t1oX",
            header__text: "index-module_header__text_Vl6RR",
            finished__body: "index-module_finished__body_3dxbw",
            textarea: "index-module_textarea_1DSLk"
        }
    },
    b8a9: function(e, t, a) {
        e.exports = a.p + "img/btn_comment@4x.188ef5f1.svg"
    },
    b9f1: function(e, t, a) {
        e.exports = {
            body: "styles-module_body_x8lhZ",
            type: "styles-module_type_1pTYR",
            warningText: "styles-module_warningText_Vm25I",
            forms: "styles-module_forms_Ta3g1",
            selection: "styles-module_selection_3CSYP",
            formsLable: "styles-module_formsLable_QoyD4",
            btn: "styles-module_btn_2ZN9X",
            enable: "styles-module_enable_8vopY",
            disabled: "styles-module_disabled_2iutC"
        }
    },
    ba6e: function(e, t, a) {
        e.exports = a.p + "img/teen.38251bd4.svg"
    },
    bb28: function(e, t, a) {
        e.exports = a.p + "img/app_banner_es.b528fcdf.png"
    },
    bc8e: function(e, t, a) {
        e.exports = {
            wrapper: "styles-module_wrapper_1wAOz",
            border: "styles-module_border_1bONz"
        }
    },
    be22: function(e, t, a) {
        e.exports = a.p + "img/google-play-badge.2104fab3.png"
    },
    be42: function(e, t, a) {
        e.exports = {
            btn: "styles-module_btn_17GWO",
            done: "styles-module_done_3BFzO",
            default: "styles-module_default_uUjEB"
        }
    },
    be59: function(e, t, a) {
        e.exports = a.p + "img/web_logo_190118_light.c773f9e9.png"
    },
    c243: function(e, t, a) {
        e.exports = {
            chapterListItem: "ChapterListItem-module_chapterListItem_ykICp",
            chapterWrapper: "ChapterListItem-module_chapterWrapper_3CxyE",
            thumbnail: "ChapterListItem-module_thumbnail_1w6kS",
            name: "ChapterListItem-module_name_3h9dj",
            title: "ChapterListItem-module_title_3Id89",
            thumbnail_alreadyRead: "ChapterListItem-module_thumbnail_alreadyRead_1u3_a",
            name_alreadyRead: "ChapterListItem-module_name_alreadyRead_1HYKk",
            title_alreadyRead: "ChapterListItem-module_title_alreadyRead_3tKxq",
            chapterNameContainer: "ChapterListItem-module_chapterNameContainer_3MJKj",
            viewIcon: "ChapterListItem-module_viewIcon_15_qD",
            viewCount: "ChapterListItem-module_viewCount_2tsly",
            commentIconMini: "ChapterListItem-module_commentIconMini_1hQ5R",
            commentCount: "ChapterListItem-module_commentCount_4FxT-",
            commentContainer: "ChapterListItem-module_commentContainer_1P6qt",
            commentIcon: "ChapterListItem-module_commentIcon_3lw4k",
            limitIcon: "ChapterListItem-module_limitIcon_tGiFP",
            limitContainer: "ChapterListItem-module_limitContainer_2JLZi",
            limitTime: "ChapterListItem-module_limitTime_14zxT",
            endTime: "ChapterListItem-module_endTime_4r_4L",
            date: "ChapterListItem-module_date_xe1XF",
            date_alreadyRead: "ChapterListItem-module_date_alreadyRead_31MGZ",
            limitDate: "ChapterListItem-module_limitDate_20Cs2"
        }
    },
    c2a4: function(e, t, a) {
        e.exports = a.p + "img/sa_promo.13ba62f6.jpg"
    },
    c510: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAh1BMVEUAAAClpaWfn5+fn5+0tLShoaGjo6Oenp6kpKTDw8Ofn5+fn5+enp6fn5+fn5+fn5+hoaGqqqqfn5+fn5+enp6goKCfn5+ioqKfn5+fn5+fn5+goKCgoKCfn5+fn5+fn5+fn5+fn5+fn5+fn5+goKCfn5+fn5+mpqagoKCjo6OgoKCfn5+enp5pFB12AAAALHRSTlMAF+WhBjQc+g8DxYry7HK+JQvfkdhbtivSeGtGVK+lTfbLgGFAmWYTOyCFqQRfa8cAAAaiSURBVHja7ZppY6IwEIajgOG+BAUUUMGz8/9/3263u01UyEXsfvH5PPVlkrlgit68GcPZittudYtfImHTa6ZbfInPoqYhrDWLp9CJmrpw0KttAawETRcAhV5xDwDbYqYVAMSaTx0gFzONAKDUqb2G39RCpjMMAHud4gf4zS4RMT3BJ1eN4hl8IlQ8VvBJOFHQnn1zgT/UM4IzYhpj+MSlTE0F8XgPo+Dy/p4jGMczkQKmByOk1qNtiWGY+QYpspnDEMZAxlspDLGaIWVmK3jCz4dDpIEn8MS4Cx/Pcz9avXIf7smsyVU9Y4QPM0SNBE0miYCwYYcoffQnpAMXCD3blBbvdGjPgOLI9tynA12HeAUUc4dl2gIFtjWIR/CHv05dWKbGnWk+XfuMv5L7b8ovWRNu8JXctgGkBU+i+0rufymfsgrid3LnPr8Fi7ZIzyQpzygcR5Lc8Z60YHVsTPWGxADwWKfu53RXaqaK5/e9IffHz70H93rXlXxzovjHQ2+47tdjpsub89CV2oniT1JmzDMlxOjNmzdTsK1tuTQ+VlFUN0ev2sQm+hmunTGHR/De2yToxcSHDMbAq/yF+ubJBTa+cUEvIQnnIEC00S9tlgEIsu81a29SkKCZaZRe1CCHHzq6tNsApIn0OO94oMJcx82fh9MrcI1D2G3zKvTqDMMQ4fTrzgacMrrF/eFYZYThieXUKWr+XEeGz9MeqECNOUk7eHQ6TBjWzaP7tTPhzB/8DiqOK3ED9xjqsZY9/NIZcekLuMNTraiuSu6YB7ijUlwuAM3qrPYBDVsq2luguSFxZgVQpLbCwBKoH54dAcWH0qsxIZcNlxootpMO/TQtWOeJ5NhCB81BZb4t1PPNA0KtNuT6VMSvpcrLjhGtChfXIAluAnlqb/LqUJ62lsOvEziWuDCf1xfjJbnTXVTZg78yp79cClNSkTr0u9YK7tkdh+pfTrkuPlVlzAx3DhieCIaSOVIYayz4JnOeUzgC0amph28KhY7SPftdwwgV82u5YH9xAnLj5uBykYYZ0q10obFYf3HdwSgRy49COtafK5NBjZLL3GrLFAgx6wbF4j0iT8vaJdSLry5wZDUBS7K3meRgPcYl7s1/R+uyNhuBXJ1Zs3ZJ3sCNbFj3+kGeVq4h4GT8yt2hDdB8eJ3+hS8XbwUjHgzqnkhJYqaOSHc0WMOX+Q+HajKMXEM2nQt8XNkJ5sAccUlruyA+heRO0A6YJdSlwpdPysxMVjy77Cm4RXwCqUdFN07vaKR8wVKNqOS1DlIAcynxi0ywQeTwxFWPnd/5C5sXElvFgOPv6rMZ97Wr1ZlqScTQVky1SHD4mO2pM58J3OJFqrzWLLM4pWJtvGyf5cpryegTBIt4BLU5bnchZgni04r0oY1PrAwHjROSyV5okwH8+Myx6AeTFV18+Tg+9/tlCIRQ5sf41OTtmPvyjjllq2ccI8+vC6e07DbCqYNtJDlBHtmlJeC1nsRnz4/M4SNIWKUF59YDj7Wmk/+wcxsPp1kKLKqHcMvESww599E3RQtkxLcgnGiEPe26urhTqHzKO8E3/kxdvKJ+xhYWN0nIQaMsPvN5Ixa/hLWq4jVVD2S2bElAJfNCTbxS3jPRrrtU17oaTHrqMTHl+EJK3MwmbmmucyCUSI4eKLxpu6HMRJI0MOHRz3ug6OWfPVXfTC6yqVvNCwaKJlHdge5NpEAJNEUsXB93QOFfkRI10Pid2HU1cEerZ6UI0Rpx6QIgkIaivKUh4CWnWmxcuOeA1Fmk8CB/HL96p91rXd+TqYngnuzBEPfmAHy/FTeTBOzeept2+ZobKaPNqGM2MPYfG0uvPHjHutjBEP4WqUPnrQykLmhhnYE0RxNpIvEwSJG2SCPrCMTBtwTpZVuISjcx0k+7Bx6kCumnN3xgkpUL9DqSfDWaeOnSQq/GvByi4Em4OcXop7DXbVeFh9utDE95fzXRG+0saks2LrpImzjA6iKTElUKc43iAO7GEYzFcg6gWRxgvuwdrnK3wgC6xYk+V1m7OGHnLru186Tbh00GBP3i9BN8HL2yyjdtFx6WxorS1S/O5S3+Fn+Lv8Xf4m9xDeJ46f43cXeN0Cn4L+JB9/XRz/gP4uQ/Xfvsh8ULepQ2y90Piu9C52GvsPox8XrxbLNNf0Q8bRkfjV4rjr1kzGztvkqcpDaDU/AKcZLabM6GfnGS2lwuhW5xktoMSNLrFiepzedaaxUnqS1Gm2oUT1vpL8WpLnHHRNLY6M2bZ34BEyxYNB5OGAoAAAAASUVORK5CYII="
    },
    c544: function(e, t, a) {
        e.exports = {
            label: "styles-module_label_3C1G0",
            wrapper: "styles-module_wrapper_HMi7g",
            disabled: "styles-module_disabled_2TdUA"
        }
    },
    c72d: function(e, t, a) {
        e.exports = {
            navigation: "styles-module_navigation_2JSpv",
            navigationItem: "styles-module_navigationItem_2PF0W"
        }
    },
    c7ab: function(e, t, a) {
        e.exports = a.p + "img/icon_eye.53d7b892.svg"
    },
    c9f1: function(e, t, a) {
        e.exports = {
            allTitles: "AllTitles-module_allTitles_2zHO8",
            emptyText: "AllTitles-module_emptyText_28pwK"
        }
    },
    ca28: function(e, t, a) {
        e.exports = {
            mainContainer: "Rating-module_mainContainer_ouDtt",
            ttl_main: "Rating-module_ttl_main_2Qcsh",
            ttl_label1: "Rating-module_ttl_label1_GZkA4",
            ttl_label2: "Rating-module_ttl_label2_cf4bO",
            ttl_label3: "Rating-module_ttl_label3_2BJAr",
            ttl_main_title: "Rating-module_ttl_main_title_VInlZ",
            ttl_sub: "Rating-module_ttl_sub_2O9a7",
            txt_main: "Rating-module_txt_main_BLnEp"
        }
    },
    cd08: function(e, t, a) {
        e.exports = {
            title: "styles-module_title_3bfs3",
            contentsWrapper: "styles-module_contentsWrapper_1-Qek",
            content: "styles-module_content_20XZI",
            date: "styles-module_date_3ND4b",
            body: "styles-module_body_146J0",
            border: "styles-module_border_1yWLl"
        }
    },
    cd49: function(e, t, a) {
        "use strict";
        a.r(t);
        a("ac1f"),
        a("1276"),
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d"),
        a("a4d3"),
        a("e01a"),
        a("99af"),
        a("4de4"),
        a("4160"),
        a("caad"),
        a("d81d"),
        a("b0c0"),
        a("b64b"),
        a("d3b7"),
        a("25f0"),
        a("2532"),
        a("159b");
        var n, i = a("ade3"), r = a("d4ec"), o = a("bee2"), s = a("262e"), l = a("2caf"), c = a("9ab4"), u = a("60a3"), d = a("b85d"), p = a.n(d), h = {
            functional: !0,
            render: function(e, t) {
                return t.children
            }
        }, g = (a("ace4"),
        a("5cc6"),
        a("9a8c"),
        a("a975"),
        a("735e"),
        a("c1ac"),
        a("d139"),
        a("3a7b"),
        a("d5d6"),
        a("82f8"),
        a("e91f"),
        a("60bd"),
        a("5f96"),
        a("3280"),
        a("3fcc"),
        a("ca91"),
        a("25a1"),
        a("cd26"),
        a("3c5d"),
        a("2954"),
        a("649e"),
        a("219c"),
        a("170b"),
        a("b39a"),
        a("72f7"),
        a("bc3a")), m = a.n(g), b = a("543b"), f = b["Reader"], v = b["Writer"], y = b["util"], _ = b["roots"]["default"] || (b["roots"]["default"] = {}), w = _.Proto = function() {
            var e = {};
            return e.AdNetworkList = function() {
                function e(e) {
                    if (this.adNetworks = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.adNetworks = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.adNetworks && e.adNetworks.length)
                        for (var a = 0; a < e.adNetworks.length; ++a)
                            _.Proto.AdNetwork.encode(e.adNetworks[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AdNetworkList;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.adNetworks && n.adNetworks.length || (n.adNetworks = []),
                            n.adNetworks.push(_.Proto.AdNetwork.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AdRewardNetworkList = function() {
                function e(e) {
                    if (this.adNetworks = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.adNetworks = y.emptyArray,
                e.prototype.token = "",
                e.prototype.rewardViewCount = 0,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.adNetworks && e.adNetworks.length)
                        for (var a = 0; a < e.adNetworks.length; ++a)
                            _.Proto.AdNetwork.encode(e.adNetworks[a], t.uint32(10).fork()).ldelim();
                    return null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token),
                    null != e.rewardViewCount && Object.hasOwnProperty.call(e, "rewardViewCount") && t.uint32(24).uint32(e.rewardViewCount),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AdRewardNetworkList;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.adNetworks && n.adNetworks.length || (n.adNetworks = []),
                            n.adNetworks.push(_.Proto.AdNetwork.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.token = e.string();
                            break;
                        case 3:
                            n.rewardViewCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AdNetwork = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                var t;
                return e.prototype.facebook = null,
                e.prototype.admob = null,
                e.prototype.mopub = null,
                e.prototype.adsense = null,
                e.prototype.applovin = null,
                e.prototype.applovinmax = null,
                Object.defineProperty(e.prototype, "Network", {
                    get: y.oneOfGetter(t = ["facebook", "admob", "mopub", "adsense", "applovin", "applovinmax"]),
                    set: y.oneOfSetter(t)
                }),
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.facebook && Object.hasOwnProperty.call(e, "facebook") && _.Proto.AdNetwork.Facebook.encode(e.facebook, t.uint32(10).fork()).ldelim(),
                    null != e.admob && Object.hasOwnProperty.call(e, "admob") && _.Proto.AdNetwork.Admob.encode(e.admob, t.uint32(18).fork()).ldelim(),
                    null != e.mopub && Object.hasOwnProperty.call(e, "mopub") && _.Proto.AdNetwork.Mopub.encode(e.mopub, t.uint32(26).fork()).ldelim(),
                    null != e.adsense && Object.hasOwnProperty.call(e, "adsense") && _.Proto.AdNetwork.Adsense.encode(e.adsense, t.uint32(34).fork()).ldelim(),
                    null != e.applovin && Object.hasOwnProperty.call(e, "applovin") && _.Proto.AdNetwork.Applovin.encode(e.applovin, t.uint32(42).fork()).ldelim(),
                    null != e.applovinmax && Object.hasOwnProperty.call(e, "applovinmax") && _.Proto.AdNetwork.ApplovinMax.encode(e.applovinmax, t.uint32(50).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AdNetwork;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.facebook = _.Proto.AdNetwork.Facebook.decode(e, e.uint32());
                            break;
                        case 2:
                            n.admob = _.Proto.AdNetwork.Admob.decode(e, e.uint32());
                            break;
                        case 3:
                            n.mopub = _.Proto.AdNetwork.Mopub.decode(e, e.uint32());
                            break;
                        case 4:
                            n.adsense = _.Proto.AdNetwork.Adsense.decode(e, e.uint32());
                            break;
                        case 5:
                            n.applovin = _.Proto.AdNetwork.Applovin.decode(e, e.uint32());
                            break;
                        case 6:
                            n.applovinmax = _.Proto.AdNetwork.ApplovinMax.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Facebook = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.placementID = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.placementID && Object.hasOwnProperty.call(e, "placementID") && t.uint32(10).string(e.placementID),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.Facebook;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.placementID = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.Admob = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.unitID = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.unitID && Object.hasOwnProperty.call(e, "unitID") && t.uint32(10).string(e.unitID),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.Admob;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.unitID = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.Adsense = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.unitID = "",
                    e.prototype.location = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.unitID && Object.hasOwnProperty.call(e, "unitID") && t.uint32(10).string(e.unitID),
                        null != e.location && Object.hasOwnProperty.call(e, "location") && t.uint32(18).string(e.location),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.Adsense;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.unitID = e.string();
                                break;
                            case 2:
                                n.location = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.Applovin = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.unitID = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.unitID && Object.hasOwnProperty.call(e, "unitID") && t.uint32(10).string(e.unitID),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.Applovin;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.unitID = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.Mopub = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.unitID = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.unitID && Object.hasOwnProperty.call(e, "unitID") && t.uint32(10).string(e.unitID),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.Mopub;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.unitID = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.ApplovinMax = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.unitID = "",
                    e.prototype.type = 0,
                    e.prototype.amazonAppId = "",
                    e.prototype.amazonAdUnitId = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.unitID && Object.hasOwnProperty.call(e, "unitID") && t.uint32(10).string(e.unitID),
                        null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type),
                        null != e.amazonAppId && Object.hasOwnProperty.call(e, "amazonAppId") && t.uint32(26).string(e.amazonAppId),
                        null != e.amazonAdUnitId && Object.hasOwnProperty.call(e, "amazonAdUnitId") && t.uint32(34).string(e.amazonAdUnitId),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.AdNetwork.ApplovinMax;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.unitID = e.string();
                                break;
                            case 2:
                                n.type = e.int32();
                                break;
                            case 3:
                                n.amazonAppId = e.string();
                                break;
                            case 4:
                                n.amazonAdUnitId = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.AdType = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "STILL_IMAGE"] = 0,
                    t[e[1] = "MOVIE"] = 1,
                    t[e[2] = "NATIVE_MANUAL"] = 2,
                    t[e[3] = "NATIVE_MEDIUM"] = 3,
                    t[e[4] = "MREC"] = 4,
                    t[e[5] = "REWARD"] = 5,
                    t
                }(),
                e
            }(),
            e.Banner = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.imageUrl = "",
                e.prototype.action = null,
                e.prototype.id = 0,
                e.prototype.width = 0,
                e.prototype.height = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(10).string(e.imageUrl),
                    null != e.action && Object.hasOwnProperty.call(e, "action") && _.Proto.TransitionAction.encode(e.action, t.uint32(18).fork()).ldelim(),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(24).uint32(e.id),
                    null != e.width && Object.hasOwnProperty.call(e, "width") && t.uint32(32).uint32(e.width),
                    null != e.height && Object.hasOwnProperty.call(e, "height") && t.uint32(40).uint32(e.height),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Banner;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.imageUrl = e.string();
                            break;
                        case 2:
                            n.action = _.Proto.TransitionAction.decode(e, e.uint32());
                            break;
                        case 3:
                            n.id = e.uint32();
                            break;
                        case 4:
                            n.width = e.uint32();
                            break;
                        case 5:
                            n.height = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Chapter = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.titleId = 0,
                e.prototype.chapterId = 0,
                e.prototype.name = "",
                e.prototype.subTitle = "",
                e.prototype.thumbnailUrl = "",
                e.prototype.startTimeStamp = 0,
                e.prototype.endTimeStamp = 0,
                e.prototype.alreadyViewed = !1,
                e.prototype.viewedForFree = !1,
                e.prototype.isVerticalOnly = !1,
                e.prototype.chapterTicketEndtime = 0,
                e.prototype.isHorizontalOnly = !1,
                e.prototype.viewCount = 0,
                e.prototype.commentCount = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(8).uint32(e.titleId),
                    null != e.chapterId && Object.hasOwnProperty.call(e, "chapterId") && t.uint32(16).uint32(e.chapterId),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name),
                    null != e.subTitle && Object.hasOwnProperty.call(e, "subTitle") && t.uint32(34).string(e.subTitle),
                    null != e.thumbnailUrl && Object.hasOwnProperty.call(e, "thumbnailUrl") && t.uint32(42).string(e.thumbnailUrl),
                    null != e.startTimeStamp && Object.hasOwnProperty.call(e, "startTimeStamp") && t.uint32(48).uint32(e.startTimeStamp),
                    null != e.endTimeStamp && Object.hasOwnProperty.call(e, "endTimeStamp") && t.uint32(56).uint32(e.endTimeStamp),
                    null != e.alreadyViewed && Object.hasOwnProperty.call(e, "alreadyViewed") && t.uint32(64).bool(e.alreadyViewed),
                    null != e.isVerticalOnly && Object.hasOwnProperty.call(e, "isVerticalOnly") && t.uint32(72).bool(e.isVerticalOnly),
                    null != e.chapterTicketEndtime && Object.hasOwnProperty.call(e, "chapterTicketEndtime") && t.uint32(80).uint32(e.chapterTicketEndtime),
                    null != e.viewedForFree && Object.hasOwnProperty.call(e, "viewedForFree") && t.uint32(88).bool(e.viewedForFree),
                    null != e.isHorizontalOnly && Object.hasOwnProperty.call(e, "isHorizontalOnly") && t.uint32(96).bool(e.isHorizontalOnly),
                    null != e.viewCount && Object.hasOwnProperty.call(e, "viewCount") && t.uint32(104).uint32(e.viewCount),
                    null != e.commentCount && Object.hasOwnProperty.call(e, "commentCount") && t.uint32(112).uint32(e.commentCount),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Chapter;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.titleId = e.uint32();
                            break;
                        case 2:
                            n.chapterId = e.uint32();
                            break;
                        case 3:
                            n.name = e.string();
                            break;
                        case 4:
                            n.subTitle = e.string();
                            break;
                        case 5:
                            n.thumbnailUrl = e.string();
                            break;
                        case 6:
                            n.startTimeStamp = e.uint32();
                            break;
                        case 7:
                            n.endTimeStamp = e.uint32();
                            break;
                        case 8:
                            n.alreadyViewed = e.bool();
                            break;
                        case 11:
                            n.viewedForFree = e.bool();
                            break;
                        case 9:
                            n.isVerticalOnly = e.bool();
                            break;
                        case 10:
                            n.chapterTicketEndtime = e.uint32();
                            break;
                        case 12:
                            n.isHorizontalOnly = e.bool();
                            break;
                        case 13:
                            n.viewCount = e.uint32();
                            break;
                        case 14:
                            n.commentCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Comment = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.id = 0,
                e.prototype.index = 0,
                e.prototype.userName = "",
                e.prototype.iconUrl = "",
                e.prototype.isMyComment = !1,
                e.prototype.alreadyLiked = !1,
                e.prototype.numberOfLikes = 0,
                e.prototype.body = "",
                e.prototype.created = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                    null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(16).uint32(e.index),
                    null != e.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(26).string(e.userName),
                    null != e.iconUrl && Object.hasOwnProperty.call(e, "iconUrl") && t.uint32(34).string(e.iconUrl),
                    null != e.isMyComment && Object.hasOwnProperty.call(e, "isMyComment") && t.uint32(48).bool(e.isMyComment),
                    null != e.alreadyLiked && Object.hasOwnProperty.call(e, "alreadyLiked") && t.uint32(56).bool(e.alreadyLiked),
                    null != e.numberOfLikes && Object.hasOwnProperty.call(e, "numberOfLikes") && t.uint32(72).uint32(e.numberOfLikes),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(82).string(e.body),
                    null != e.created && Object.hasOwnProperty.call(e, "created") && t.uint32(88).uint32(e.created),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Comment;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.id = e.uint32();
                            break;
                        case 2:
                            n.index = e.uint32();
                            break;
                        case 3:
                            n.userName = e.string();
                            break;
                        case 4:
                            n.iconUrl = e.string();
                            break;
                        case 6:
                            n.isMyComment = e.bool();
                            break;
                        case 7:
                            n.alreadyLiked = e.bool();
                            break;
                        case 9:
                            n.numberOfLikes = e.uint32();
                            break;
                        case 10:
                            n.body = e.string();
                            break;
                        case 11:
                            n.created = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.CommentIcon = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.id = 0,
                e.prototype.imageUrl = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                    null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(18).string(e.imageUrl),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.CommentIcon;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.id = e.uint32();
                            break;
                        case 2:
                            n.imageUrl = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.FreeViewDialogue = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.platform = 0,
                e.prototype.dialogueUrl = "",
                e.prototype.publisherBanner = null,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.platform && Object.hasOwnProperty.call(e, "platform") && t.uint32(8).int32(e.platform),
                    null != e.dialogueUrl && Object.hasOwnProperty.call(e, "dialogueUrl") && t.uint32(18).string(e.dialogueUrl),
                    null != e.publisherBanner && Object.hasOwnProperty.call(e, "publisherBanner") && _.Proto.Banner.encode(e.publisherBanner, t.uint32(26).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FreeViewDialogue;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.platform = e.int32();
                            break;
                        case 2:
                            n.dialogueUrl = e.string();
                            break;
                        case 3:
                            n.publisherBanner = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.FirstTimeFreePlatform = function() {
                var e = {}
                  , t = Object.create(e);
                return t[e[0] = "DISABLED"] = 0,
                t[e[1] = "WEB"] = 1,
                t[e[2] = "APP"] = 2,
                t
            }(),
            e.Feedback = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.timeStamp = 0,
                e.prototype.body = "",
                e.prototype.responseType = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.timeStamp && Object.hasOwnProperty.call(e, "timeStamp") && t.uint32(8).uint32(e.timeStamp),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(18).string(e.body),
                    null != e.responseType && Object.hasOwnProperty.call(e, "responseType") && t.uint32(24).int32(e.responseType),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Feedback;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.timeStamp = e.uint32();
                            break;
                        case 2:
                            n.body = e.string();
                            break;
                        case 3:
                            n.responseType = e.int32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.ResponseType = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "QUESTION"] = 0,
                    t[e[1] = "ANSWER"] = 1,
                    t
                }(),
                e
            }(),
            e.Label = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.label = 0,
                e.prototype.description = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.label && Object.hasOwnProperty.call(e, "label") && t.uint32(8).int32(e.label),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(18).string(e.description),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Label;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.label = e.int32();
                            break;
                        case 2:
                            n.description = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.LabelCodes = function() {
                var e = {}
                  , t = Object.create(e);
                return t[e[0] = "WJ"] = 0,
                t[e[1] = "SQ"] = 1,
                t[e[2] = "VJ"] = 2,
                t[e[3] = "YJ"] = 3,
                t[e[4] = "J_PLUS"] = 4,
                t[e[5] = "REVIVAL"] = 5,
                t[e[6] = "CREATORS"] = 6,
                t[e[7] = "MEE"] = 7,
                t[e[8] = "TYJ"] = 8,
                t[e[9] = "OTHERS"] = 9,
                t[e[10] = "SKJ"] = 10,
                t[e[11] = "GIGA"] = 11,
                t[e[12] = "UJ"] = 12,
                t
            }(),
            e.Languages = function() {
                function e(e) {
                    if (this.availableLanguages = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.defaultUiLanguage = 0,
                e.prototype.defaultContentLanguageOne = 0,
                e.prototype.defaultContentLanguageTwo = 0,
                e.prototype.defaultContentLanguageThree = 0,
                e.prototype.availableLanguages = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.defaultUiLanguage && Object.hasOwnProperty.call(e, "defaultUiLanguage") && t.uint32(8).int32(e.defaultUiLanguage),
                    null != e.defaultContentLanguageOne && Object.hasOwnProperty.call(e, "defaultContentLanguageOne") && t.uint32(16).int32(e.defaultContentLanguageOne),
                    null != e.defaultContentLanguageTwo && Object.hasOwnProperty.call(e, "defaultContentLanguageTwo") && t.uint32(24).int32(e.defaultContentLanguageTwo),
                    null != e.defaultContentLanguageThree && Object.hasOwnProperty.call(e, "defaultContentLanguageThree") && t.uint32(32).int32(e.defaultContentLanguageThree),
                    null != e.availableLanguages && e.availableLanguages.length)
                        for (var a = 0; a < e.availableLanguages.length; ++a)
                            _.Proto.AvailableLanguages.encode(e.availableLanguages[a], t.uint32(42).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Languages;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.defaultUiLanguage = e.int32();
                            break;
                        case 2:
                            n.defaultContentLanguageOne = e.int32();
                            break;
                        case 3:
                            n.defaultContentLanguageTwo = e.int32();
                            break;
                        case 4:
                            n.defaultContentLanguageThree = e.int32();
                            break;
                        case 5:
                            n.availableLanguages && n.availableLanguages.length || (n.availableLanguages = []),
                            n.availableLanguages.push(_.Proto.AvailableLanguages.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AvailableLanguages = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.language = 0,
                e.prototype.titlesCount = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(8).int32(e.language),
                    null != e.titlesCount && Object.hasOwnProperty.call(e, "titlesCount") && t.uint32(16).uint32(e.titlesCount),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AvailableLanguages;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.language = e.int32();
                            break;
                        case 2:
                            n.titlesCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Language = function() {
                var e = {}
                  , t = Object.create(e);
                return t[e[0] = "ENGLISH"] = 0,
                t[e[1] = "SPANISH"] = 1,
                t[e[2] = "FRENCH"] = 2,
                t[e[3] = "INDONESIAN"] = 3,
                t[e[4] = "PORTUGUESE_BR"] = 4,
                t[e[5] = "RUSSIAN"] = 5,
                t[e[6] = "THAI"] = 6,
                t[e[7] = "GERMAN"] = 7,
                t[e[8] = "ITALIAN"] = 8,
                t[e[9] = "VIETNAMESE"] = 9,
                t
            }(),
            e.MetaInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.metaTitle = "",
                e.prototype.metaDescription = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.metaTitle && Object.hasOwnProperty.call(e, "metaTitle") && t.uint32(10).string(e.metaTitle),
                    null != e.metaDescription && Object.hasOwnProperty.call(e, "metaDescription") && t.uint32(18).string(e.metaDescription),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.MetaInfo;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.metaTitle = e.string();
                            break;
                        case 2:
                            n.metaDescription = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Page = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                var t;
                return e.prototype.mangaPage = null,
                e.prototype.bannerList = null,
                e.prototype.insertBannerList = null,
                e.prototype.lastPage = null,
                e.prototype.advertisement = null,
                Object.defineProperty(e.prototype, "data", {
                    get: y.oneOfGetter(t = ["mangaPage", "bannerList", "insertBannerList", "lastPage", "advertisement"]),
                    set: y.oneOfSetter(t)
                }),
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.mangaPage && Object.hasOwnProperty.call(e, "mangaPage") && _.Proto.Page.MangaPage.encode(e.mangaPage, t.uint32(10).fork()).ldelim(),
                    null != e.bannerList && Object.hasOwnProperty.call(e, "bannerList") && _.Proto.Page.BannerList.encode(e.bannerList, t.uint32(18).fork()).ldelim(),
                    null != e.lastPage && Object.hasOwnProperty.call(e, "lastPage") && _.Proto.Page.LastPage.encode(e.lastPage, t.uint32(26).fork()).ldelim(),
                    null != e.advertisement && Object.hasOwnProperty.call(e, "advertisement") && _.Proto.AdNetworkList.encode(e.advertisement, t.uint32(34).fork()).ldelim(),
                    null != e.insertBannerList && Object.hasOwnProperty.call(e, "insertBannerList") && _.Proto.Page.BannerList.encode(e.insertBannerList, t.uint32(42).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Page;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.mangaPage = _.Proto.Page.MangaPage.decode(e, e.uint32());
                            break;
                        case 2:
                            n.bannerList = _.Proto.Page.BannerList.decode(e, e.uint32());
                            break;
                        case 5:
                            n.insertBannerList = _.Proto.Page.BannerList.decode(e, e.uint32());
                            break;
                        case 3:
                            n.lastPage = _.Proto.Page.LastPage.decode(e, e.uint32());
                            break;
                        case 4:
                            n.advertisement = _.Proto.AdNetworkList.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.MangaPage = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.imageUrl = "",
                    e.prototype.width = 0,
                    e.prototype.height = 0,
                    e.prototype.type = 0,
                    e.prototype.encryptionKey = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(10).string(e.imageUrl),
                        null != e.width && Object.hasOwnProperty.call(e, "width") && t.uint32(16).uint32(e.width),
                        null != e.height && Object.hasOwnProperty.call(e, "height") && t.uint32(24).uint32(e.height),
                        null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(32).int32(e.type),
                        null != e.encryptionKey && Object.hasOwnProperty.call(e, "encryptionKey") && t.uint32(42).string(e.encryptionKey),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Page.MangaPage;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.imageUrl = e.string();
                                break;
                            case 2:
                                n.width = e.uint32();
                                break;
                            case 3:
                                n.height = e.uint32();
                                break;
                            case 4:
                                n.type = e.int32();
                                break;
                            case 5:
                                n.encryptionKey = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.LastPage = function() {
                    function e(e) {
                        if (this.topComments = [],
                        this.banners = [],
                        this.ticketTitleList = [],
                        e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.currentChapter = null,
                    e.prototype.nextChapter = null,
                    e.prototype.topComments = y.emptyArray,
                    e.prototype.isSubscribed = !1,
                    e.prototype.nextTimeStamp = 0,
                    e.prototype.chapterType = 0,
                    e.prototype.advertisement = null,
                    e.prototype.movieReward = null,
                    e.prototype.banners = y.emptyArray,
                    e.prototype.ticketTitleList = y.emptyArray,
                    e.prototype.publisherBanner = null,
                    e.prototype.userTickets = null,
                    e.prototype.isNextChapterReadByTicket = !1,
                    e.prototype.isNextChapterOneTimeFree = !1,
                    e.prototype.freeViewDialogue = null,
                    e.prototype.isNextChapterSubscription = !1,
                    e.prototype.advertisementReward = null,
                    e.encode = function(e, t) {
                        if (t || (t = v.create()),
                        null != e.currentChapter && Object.hasOwnProperty.call(e, "currentChapter") && _.Proto.Chapter.encode(e.currentChapter, t.uint32(10).fork()).ldelim(),
                        null != e.nextChapter && Object.hasOwnProperty.call(e, "nextChapter") && _.Proto.Chapter.encode(e.nextChapter, t.uint32(18).fork()).ldelim(),
                        null != e.topComments && e.topComments.length)
                            for (var a = 0; a < e.topComments.length; ++a)
                                _.Proto.Comment.encode(e.topComments[a], t.uint32(26).fork()).ldelim();
                        if (null != e.isSubscribed && Object.hasOwnProperty.call(e, "isSubscribed") && t.uint32(32).bool(e.isSubscribed),
                        null != e.nextTimeStamp && Object.hasOwnProperty.call(e, "nextTimeStamp") && t.uint32(40).uint32(e.nextTimeStamp),
                        null != e.chapterType && Object.hasOwnProperty.call(e, "chapterType") && t.uint32(48).int32(e.chapterType),
                        null != e.advertisement && Object.hasOwnProperty.call(e, "advertisement") && _.Proto.AdNetworkList.encode(e.advertisement, t.uint32(58).fork()).ldelim(),
                        null != e.movieReward && Object.hasOwnProperty.call(e, "movieReward") && _.Proto.Popup.encode(e.movieReward, t.uint32(66).fork()).ldelim(),
                        null != e.banners && e.banners.length)
                            for (a = 0; a < e.banners.length; ++a)
                                _.Proto.Banner.encode(e.banners[a], t.uint32(74).fork()).ldelim();
                        if (null != e.ticketTitleList && e.ticketTitleList.length)
                            for (a = 0; a < e.ticketTitleList.length; ++a)
                                _.Proto.Title.encode(e.ticketTitleList[a], t.uint32(82).fork()).ldelim();
                        return null != e.publisherBanner && Object.hasOwnProperty.call(e, "publisherBanner") && _.Proto.Banner.encode(e.publisherBanner, t.uint32(90).fork()).ldelim(),
                        null != e.userTickets && Object.hasOwnProperty.call(e, "userTickets") && _.Proto.UserTickets.encode(e.userTickets, t.uint32(98).fork()).ldelim(),
                        null != e.isNextChapterReadByTicket && Object.hasOwnProperty.call(e, "isNextChapterReadByTicket") && t.uint32(104).bool(e.isNextChapterReadByTicket),
                        null != e.isNextChapterOneTimeFree && Object.hasOwnProperty.call(e, "isNextChapterOneTimeFree") && t.uint32(112).bool(e.isNextChapterOneTimeFree),
                        null != e.freeViewDialogue && Object.hasOwnProperty.call(e, "freeViewDialogue") && _.Proto.FreeViewDialogue.encode(e.freeViewDialogue, t.uint32(122).fork()).ldelim(),
                        null != e.isNextChapterSubscription && Object.hasOwnProperty.call(e, "isNextChapterSubscription") && t.uint32(128).bool(e.isNextChapterSubscription),
                        null != e.advertisementReward && Object.hasOwnProperty.call(e, "advertisementReward") && _.Proto.AdRewardNetworkList.encode(e.advertisementReward, t.uint32(138).fork()).ldelim(),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Page.LastPage;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.currentChapter = _.Proto.Chapter.decode(e, e.uint32());
                                break;
                            case 2:
                                n.nextChapter = _.Proto.Chapter.decode(e, e.uint32());
                                break;
                            case 3:
                                n.topComments && n.topComments.length || (n.topComments = []),
                                n.topComments.push(_.Proto.Comment.decode(e, e.uint32()));
                                break;
                            case 4:
                                n.isSubscribed = e.bool();
                                break;
                            case 5:
                                n.nextTimeStamp = e.uint32();
                                break;
                            case 6:
                                n.chapterType = e.int32();
                                break;
                            case 7:
                                n.advertisement = _.Proto.AdNetworkList.decode(e, e.uint32());
                                break;
                            case 8:
                                n.movieReward = _.Proto.Popup.decode(e, e.uint32());
                                break;
                            case 9:
                                n.banners && n.banners.length || (n.banners = []),
                                n.banners.push(_.Proto.Banner.decode(e, e.uint32()));
                                break;
                            case 10:
                                n.ticketTitleList && n.ticketTitleList.length || (n.ticketTitleList = []),
                                n.ticketTitleList.push(_.Proto.Title.decode(e, e.uint32()));
                                break;
                            case 11:
                                n.publisherBanner = _.Proto.Banner.decode(e, e.uint32());
                                break;
                            case 12:
                                n.userTickets = _.Proto.UserTickets.decode(e, e.uint32());
                                break;
                            case 13:
                                n.isNextChapterReadByTicket = e.bool();
                                break;
                            case 14:
                                n.isNextChapterOneTimeFree = e.bool();
                                break;
                            case 15:
                                n.freeViewDialogue = _.Proto.FreeViewDialogue.decode(e, e.uint32());
                                break;
                            case 16:
                                n.isNextChapterSubscription = e.bool();
                                break;
                            case 17:
                                n.advertisementReward = _.Proto.AdRewardNetworkList.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.BannerList = function() {
                    function e(e) {
                        if (this.banners = [],
                        e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.bannerTitle = "",
                    e.prototype.banners = y.emptyArray,
                    e.encode = function(e, t) {
                        if (t || (t = v.create()),
                        null != e.bannerTitle && Object.hasOwnProperty.call(e, "bannerTitle") && t.uint32(10).string(e.bannerTitle),
                        null != e.banners && e.banners.length)
                            for (var a = 0; a < e.banners.length; ++a)
                                _.Proto.Banner.encode(e.banners[a], t.uint32(18).fork()).ldelim();
                        return t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Page.BannerList;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.bannerTitle = e.string();
                                break;
                            case 2:
                                n.banners && n.banners.length || (n.banners = []),
                                n.banners.push(_.Proto.Banner.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.ChapterType = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "LATEST"] = 0,
                    t[e[1] = "SEQUENCE"] = 1,
                    t[e[2] = "NOSEQUENCE"] = 2,
                    t
                }(),
                e.PageType = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "SINGLE"] = 0,
                    t[e[1] = "LEFT"] = 1,
                    t[e[2] = "RIGHT"] = 2,
                    t[e[3] = "DOUBLE"] = 3,
                    t
                }(),
                e
            }(),
            e.Popup = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                var t;
                return e.prototype.osDefault = null,
                e.prototype.appDefault = null,
                e.prototype.movieReward = null,
                e.prototype.oneImage = null,
                e.prototype.popupId = 0,
                Object.defineProperty(e.prototype, "popup", {
                    get: y.oneOfGetter(t = ["osDefault", "appDefault", "movieReward", "oneImage"]),
                    set: y.oneOfSetter(t)
                }),
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.osDefault && Object.hasOwnProperty.call(e, "osDefault") && _.Proto.Popup.OSDefault.encode(e.osDefault, t.uint32(10).fork()).ldelim(),
                    null != e.appDefault && Object.hasOwnProperty.call(e, "appDefault") && _.Proto.Popup.AppDefault.encode(e.appDefault, t.uint32(18).fork()).ldelim(),
                    null != e.movieReward && Object.hasOwnProperty.call(e, "movieReward") && _.Proto.MovieReward.encode(e.movieReward, t.uint32(26).fork()).ldelim(),
                    null != e.oneImage && Object.hasOwnProperty.call(e, "oneImage") && _.Proto.Popup.OneImage.encode(e.oneImage, t.uint32(34).fork()).ldelim(),
                    null != e.popupId && Object.hasOwnProperty.call(e, "popupId") && t.uint32(40).uint32(e.popupId),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Popup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.osDefault = _.Proto.Popup.OSDefault.decode(e, e.uint32());
                            break;
                        case 2:
                            n.appDefault = _.Proto.Popup.AppDefault.decode(e, e.uint32());
                            break;
                        case 3:
                            n.movieReward = _.Proto.MovieReward.decode(e, e.uint32());
                            break;
                        case 4:
                            n.oneImage = _.Proto.Popup.OneImage.decode(e, e.uint32());
                            break;
                        case 5:
                            n.popupId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.OSDefault = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.subject = "",
                    e.prototype.body = "",
                    e.prototype.okButton = null,
                    e.prototype.neutralButton = null,
                    e.prototype.cancelButton = null,
                    e.prototype.language = 0,
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.subject && Object.hasOwnProperty.call(e, "subject") && t.uint32(10).string(e.subject),
                        null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(18).string(e.body),
                        null != e.okButton && Object.hasOwnProperty.call(e, "okButton") && _.Proto.Popup.Button.encode(e.okButton, t.uint32(26).fork()).ldelim(),
                        null != e.neutralButton && Object.hasOwnProperty.call(e, "neutralButton") && _.Proto.Popup.Button.encode(e.neutralButton, t.uint32(34).fork()).ldelim(),
                        null != e.cancelButton && Object.hasOwnProperty.call(e, "cancelButton") && _.Proto.Popup.Button.encode(e.cancelButton, t.uint32(42).fork()).ldelim(),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(48).int32(e.language),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Popup.OSDefault;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.subject = e.string();
                                break;
                            case 2:
                                n.body = e.string();
                                break;
                            case 3:
                                n.okButton = _.Proto.Popup.Button.decode(e, e.uint32());
                                break;
                            case 4:
                                n.neutralButton = _.Proto.Popup.Button.decode(e, e.uint32());
                                break;
                            case 5:
                                n.cancelButton = _.Proto.Popup.Button.decode(e, e.uint32());
                                break;
                            case 6:
                                n.language = e.int32();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.AppDefault = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.subject = "",
                    e.prototype.body = "",
                    e.prototype.action = null,
                    e.prototype.imageUrl = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.subject && Object.hasOwnProperty.call(e, "subject") && t.uint32(10).string(e.subject),
                        null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(18).string(e.body),
                        null != e.action && Object.hasOwnProperty.call(e, "action") && _.Proto.TransitionAction.encode(e.action, t.uint32(26).fork()).ldelim(),
                        null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(34).string(e.imageUrl),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Popup.AppDefault;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.subject = e.string();
                                break;
                            case 2:
                                n.body = e.string();
                                break;
                            case 3:
                                n.action = _.Proto.TransitionAction.decode(e, e.uint32());
                                break;
                            case 4:
                                n.imageUrl = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.OneImage = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.action = null,
                    e.prototype.imageUrl = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.action && Object.hasOwnProperty.call(e, "action") && _.Proto.TransitionAction.encode(e.action, t.uint32(10).fork()).ldelim(),
                        null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(18).string(e.imageUrl),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Popup.OneImage;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.action = _.Proto.TransitionAction.decode(e, e.uint32());
                                break;
                            case 2:
                                n.imageUrl = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.Button = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.text = "",
                    e.prototype.action = null,
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text),
                        null != e.action && Object.hasOwnProperty.call(e, "action") && _.Proto.TransitionAction.encode(e.action, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.Popup.Button;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.text = e.string();
                                break;
                            case 2:
                                n.action = _.Proto.TransitionAction.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.MovieReward = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.imageUrl = "",
                e.prototype.advertisement = null,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(10).string(e.imageUrl),
                    null != e.advertisement && Object.hasOwnProperty.call(e, "advertisement") && _.Proto.AdNetworkList.encode(e.advertisement, t.uint32(18).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.MovieReward;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.imageUrl = e.string();
                            break;
                        case 2:
                            n.advertisement = _.Proto.AdNetworkList.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.PublisherNews = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.id = 0,
                e.prototype.publisherId = 0,
                e.prototype.publisherName = "",
                e.prototype.subject = "",
                e.prototype.body = "",
                e.prototype.publishedTimeStamp = 0,
                e.prototype.action = null,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                    null != e.publisherId && Object.hasOwnProperty.call(e, "publisherId") && t.uint32(16).uint32(e.publisherId),
                    null != e.publisherName && Object.hasOwnProperty.call(e, "publisherName") && t.uint32(26).string(e.publisherName),
                    null != e.subject && Object.hasOwnProperty.call(e, "subject") && t.uint32(34).string(e.subject),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(42).string(e.body),
                    null != e.publishedTimeStamp && Object.hasOwnProperty.call(e, "publishedTimeStamp") && t.uint32(48).uint32(e.publishedTimeStamp),
                    null != e.action && Object.hasOwnProperty.call(e, "action") && _.Proto.TransitionAction.encode(e.action, t.uint32(58).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.PublisherNews;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.id = e.uint32();
                            break;
                        case 2:
                            n.publisherId = e.uint32();
                            break;
                        case 3:
                            n.publisherName = e.string();
                            break;
                        case 4:
                            n.subject = e.string();
                            break;
                        case 5:
                            n.body = e.string();
                            break;
                        case 6:
                            n.publishedTimeStamp = e.uint32();
                            break;
                        case 7:
                            n.action = _.Proto.TransitionAction.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Questionnaire = function() {
                function e(e) {
                    if (this.selection = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.description = "",
                e.prototype.selection = y.emptyArray,
                e.prototype.numberOfChoices = 0,
                e.prototype.hideFreeform = !1,
                e.prototype.freeForm = "",
                e.prototype.canSkip = !1,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(10).string(e.description),
                    null != e.selection && e.selection.length)
                        for (var a = 0; a < e.selection.length; ++a)
                            t.uint32(18).string(e.selection[a]);
                    return null != e.numberOfChoices && Object.hasOwnProperty.call(e, "numberOfChoices") && t.uint32(24).uint32(e.numberOfChoices),
                    null != e.hideFreeform && Object.hasOwnProperty.call(e, "hideFreeform") && t.uint32(32).bool(e.hideFreeform),
                    null != e.freeForm && Object.hasOwnProperty.call(e, "freeForm") && t.uint32(42).string(e.freeForm),
                    null != e.canSkip && Object.hasOwnProperty.call(e, "canSkip") && t.uint32(48).bool(e.canSkip),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Questionnaire;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.description = e.string();
                            break;
                        case 2:
                            n.selection && n.selection.length || (n.selection = []),
                            n.selection.push(e.string());
                            break;
                        case 3:
                            n.numberOfChoices = e.uint32();
                            break;
                        case 4:
                            n.hideFreeform = e.bool();
                            break;
                        case 5:
                            n.freeForm = e.string();
                            break;
                        case 6:
                            n.canSkip = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.ServiceAnnouncement = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = "",
                e.prototype.body = "",
                e.prototype.date = 0,
                e.prototype.id = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(18).string(e.body),
                    null != e.date && Object.hasOwnProperty.call(e, "date") && t.uint32(24).int32(e.date),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(32).int32(e.id),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.ServiceAnnouncement;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = e.string();
                            break;
                        case 2:
                            n.body = e.string();
                            break;
                        case 3:
                            n.date = e.int32();
                            break;
                        case 4:
                            n.id = e.int32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Sns = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.body = "",
                e.prototype.url = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.body && Object.hasOwnProperty.call(e, "body") && t.uint32(10).string(e.body),
                    null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(18).string(e.url),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Sns;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.body = e.string();
                            break;
                        case 2:
                            n.url = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Subscription = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.planType = "",
                e.prototype.nextPaymentDate = 0,
                e.prototype.isFreeTrial = !1,
                e.prototype.isPendingDowngrade = !1,
                e.prototype.isFirstTimeUser = !1,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.planType && Object.hasOwnProperty.call(e, "planType") && t.uint32(10).string(e.planType),
                    null != e.nextPaymentDate && Object.hasOwnProperty.call(e, "nextPaymentDate") && t.uint32(16).uint32(e.nextPaymentDate),
                    null != e.isFreeTrial && Object.hasOwnProperty.call(e, "isFreeTrial") && t.uint32(24).bool(e.isFreeTrial),
                    null != e.isPendingDowngrade && Object.hasOwnProperty.call(e, "isPendingDowngrade") && t.uint32(32).bool(e.isPendingDowngrade),
                    null != e.isFirstTimeUser && Object.hasOwnProperty.call(e, "isFirstTimeUser") && t.uint32(40).bool(e.isFirstTimeUser),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Subscription;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.planType = e.string();
                            break;
                        case 2:
                            n.nextPaymentDate = e.uint32();
                            break;
                        case 3:
                            n.isFreeTrial = e.bool();
                            break;
                        case 4:
                            n.isPendingDowngrade = e.bool();
                            break;
                        case 5:
                            n.isFirstTimeUser = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.PlanType = function() {
                function e(e) {
                    if (this.androidOfferTags = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.plan = "",
                e.prototype.description = "",
                e.prototype.productId = "",
                e.prototype.subscriptionOffer = null,
                e.prototype.androidOfferTags = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.plan && Object.hasOwnProperty.call(e, "plan") && t.uint32(10).string(e.plan),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(18).string(e.description),
                    null != e.productId && Object.hasOwnProperty.call(e, "productId") && t.uint32(26).string(e.productId),
                    null != e.subscriptionOffer && Object.hasOwnProperty.call(e, "subscriptionOffer") && _.Proto.IosSubscriptionOffer.encode(e.subscriptionOffer, t.uint32(34).fork()).ldelim(),
                    null != e.androidOfferTags && e.androidOfferTags.length)
                        for (var a = 0; a < e.androidOfferTags.length; ++a)
                            _.Proto.AndroidSubscriptionOfferTags.encode(e.androidOfferTags[a], t.uint32(42).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.PlanType;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.plan = e.string();
                            break;
                        case 2:
                            n.description = e.string();
                            break;
                        case 3:
                            n.productId = e.string();
                            break;
                        case 4:
                            n.subscriptionOffer = _.Proto.IosSubscriptionOffer.decode(e, e.uint32());
                            break;
                        case 5:
                            n.androidOfferTags && n.androidOfferTags.length || (n.androidOfferTags = []),
                            n.androidOfferTags.push(_.Proto.AndroidSubscriptionOfferTags.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.IosSubscriptionOffer = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.offerType = 0,
                e.prototype.signature = "",
                e.prototype.appleKey = "",
                e.prototype.nonce = "",
                e.prototype.timestamp = "",
                e.prototype.identifier = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.offerType && Object.hasOwnProperty.call(e, "offerType") && t.uint32(8).int32(e.offerType),
                    null != e.signature && Object.hasOwnProperty.call(e, "signature") && t.uint32(18).string(e.signature),
                    null != e.appleKey && Object.hasOwnProperty.call(e, "appleKey") && t.uint32(26).string(e.appleKey),
                    null != e.nonce && Object.hasOwnProperty.call(e, "nonce") && t.uint32(34).string(e.nonce),
                    null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(42).string(e.timestamp),
                    null != e.identifier && Object.hasOwnProperty.call(e, "identifier") && t.uint32(50).string(e.identifier),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.IosSubscriptionOffer;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.offerType = e.int32();
                            break;
                        case 2:
                            n.signature = e.string();
                            break;
                        case 3:
                            n.appleKey = e.string();
                            break;
                        case 4:
                            n.nonce = e.string();
                            break;
                        case 5:
                            n.timestamp = e.string();
                            break;
                        case 6:
                            n.identifier = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.OfferType = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "NO_OFFER"] = 0,
                    t[e[1] = "INTRODUCTORY"] = 1,
                    t[e[2] = "PROMOTIONAL"] = 2,
                    t
                }(),
                e
            }(),
            e.AndroidSubscriptionOfferTags = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.tag = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(10).string(e.tag),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AndroidSubscriptionOfferTags;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.tag = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Tag = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.tag = "",
                e.prototype.slug = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(10).string(e.tag),
                    null != e.slug && Object.hasOwnProperty.call(e, "slug") && t.uint32(18).string(e.slug),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Tag;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.tag = e.string();
                            break;
                        case 2:
                            n.slug = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.Title = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.titleId = 0,
                e.prototype.name = "",
                e.prototype.author = "",
                e.prototype.portraitImageUrl = "",
                e.prototype.landscapeImageUrl = "",
                e.prototype.viewCount = 0,
                e.prototype.language = 0,
                e.prototype.titleUpdateStatus = 0,
                e.prototype.favoriteImageUrl = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(8).uint32(e.titleId),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name),
                    null != e.author && Object.hasOwnProperty.call(e, "author") && t.uint32(26).string(e.author),
                    null != e.portraitImageUrl && Object.hasOwnProperty.call(e, "portraitImageUrl") && t.uint32(34).string(e.portraitImageUrl),
                    null != e.landscapeImageUrl && Object.hasOwnProperty.call(e, "landscapeImageUrl") && t.uint32(42).string(e.landscapeImageUrl),
                    null != e.viewCount && Object.hasOwnProperty.call(e, "viewCount") && t.uint32(48).uint32(e.viewCount),
                    null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(56).int32(e.language),
                    null != e.titleUpdateStatus && Object.hasOwnProperty.call(e, "titleUpdateStatus") && t.uint32(64).int32(e.titleUpdateStatus),
                    null != e.favoriteImageUrl && Object.hasOwnProperty.call(e, "favoriteImageUrl") && t.uint32(74).string(e.favoriteImageUrl),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Title;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.titleId = e.uint32();
                            break;
                        case 2:
                            n.name = e.string();
                            break;
                        case 3:
                            n.author = e.string();
                            break;
                        case 4:
                            n.portraitImageUrl = e.string();
                            break;
                        case 5:
                            n.landscapeImageUrl = e.string();
                            break;
                        case 6:
                            n.viewCount = e.uint32();
                            break;
                        case 7:
                            n.language = e.int32();
                            break;
                        case 8:
                            n.titleUpdateStatus = e.int32();
                            break;
                        case 9:
                            n.favoriteImageUrl = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleUpdateStatus = function() {
                var e = {}
                  , t = Object.create(e);
                return t[e[0] = "NONE"] = 0,
                t[e[1] = "NEW"] = 1,
                t[e[2] = "UP"] = 2,
                t[e[3] = "REEDITION"] = 3,
                t[e[4] = "CREATORS_STATUS"] = 4,
                t
            }(),
            e.UpdatedTitle = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.chapterId = 0,
                e.prototype.chapterName = "",
                e.prototype.chapterSubTitle = "",
                e.prototype.isLatest = !1,
                e.prototype.isVerticalOnly = !1,
                e.prototype.isHorizontalOnly = !1,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.chapterId && Object.hasOwnProperty.call(e, "chapterId") && t.uint32(16).uint32(e.chapterId),
                    null != e.chapterName && Object.hasOwnProperty.call(e, "chapterName") && t.uint32(26).string(e.chapterName),
                    null != e.chapterSubTitle && Object.hasOwnProperty.call(e, "chapterSubTitle") && t.uint32(34).string(e.chapterSubTitle),
                    null != e.isLatest && Object.hasOwnProperty.call(e, "isLatest") && t.uint32(40).bool(e.isLatest),
                    null != e.isVerticalOnly && Object.hasOwnProperty.call(e, "isVerticalOnly") && t.uint32(48).bool(e.isVerticalOnly),
                    null != e.isHorizontalOnly && Object.hasOwnProperty.call(e, "isHorizontalOnly") && t.uint32(56).bool(e.isHorizontalOnly),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UpdatedTitle;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.chapterId = e.uint32();
                            break;
                        case 3:
                            n.chapterName = e.string();
                            break;
                        case 4:
                            n.chapterSubTitle = e.string();
                            break;
                        case 5:
                            n.isLatest = e.bool();
                            break;
                        case 6:
                            n.isVerticalOnly = e.bool();
                            break;
                        case 7:
                            n.isHorizontalOnly = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleUpdated = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.updatedTitleTimestamp = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.updatedTitleTimestamp && Object.hasOwnProperty.call(e, "updatedTitleTimestamp") && t.uint32(18).string(e.updatedTitleTimestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleUpdated;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.updatedTitleTimestamp = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.FreeTitle = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.updatedTitleTimestamp = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.updatedTitleTimestamp && Object.hasOwnProperty.call(e, "updatedTitleTimestamp") && t.uint32(18).string(e.updatedTitleTimestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FreeTitle;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.updatedTitleTimestamp = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TicketTitles = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.firstTicketChapter = 0,
                e.prototype.lastTicketChapter = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.firstTicketChapter && Object.hasOwnProperty.call(e, "firstTicketChapter") && t.uint32(16).uint32(e.firstTicketChapter),
                    null != e.lastTicketChapter && Object.hasOwnProperty.call(e, "lastTicketChapter") && t.uint32(24).uint32(e.lastTicketChapter),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TicketTitles;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.firstTicketChapter = e.uint32();
                            break;
                        case 3:
                            n.lastTicketChapter = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SubscribableTitle = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.isLatest = !1,
                e.prototype.isSubscribed = !1,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.isLatest && Object.hasOwnProperty.call(e, "isLatest") && t.uint32(16).bool(e.isLatest),
                    null != e.isSubscribed && Object.hasOwnProperty.call(e, "isSubscribed") && t.uint32(24).bool(e.isSubscribed),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SubscribableTitle;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.isLatest = e.bool();
                            break;
                        case 3:
                            n.isSubscribed = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.ComingSoonTitle = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.nextChapterName = "",
                e.prototype.nextChapterStartTimestamp = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.nextChapterName && Object.hasOwnProperty.call(e, "nextChapterName") && t.uint32(18).string(e.nextChapterName),
                    null != e.nextChapterStartTimestamp && Object.hasOwnProperty.call(e, "nextChapterStartTimestamp") && t.uint32(24).uint32(e.nextChapterStartTimestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.ComingSoonTitle;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.nextChapterName = e.string();
                            break;
                        case 3:
                            n.nextChapterStartTimestamp = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleHighlight = function() {
                function e(e) {
                    if (this.pageUrlList = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.chapterId = 0,
                e.prototype.pageUrlList = y.emptyArray,
                e.prototype.pageHight = 0,
                e.prototype.pageWidth = 0,
                e.prototype.isVerticalOnly = !1,
                e.prototype.isHorizontalOnly = !1,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.chapterId && Object.hasOwnProperty.call(e, "chapterId") && t.uint32(16).uint32(e.chapterId),
                    null != e.pageUrlList && e.pageUrlList.length)
                        for (var a = 0; a < e.pageUrlList.length; ++a)
                            t.uint32(26).string(e.pageUrlList[a]);
                    return null != e.pageHight && Object.hasOwnProperty.call(e, "pageHight") && t.uint32(32).uint32(e.pageHight),
                    null != e.pageWidth && Object.hasOwnProperty.call(e, "pageWidth") && t.uint32(40).uint32(e.pageWidth),
                    null != e.isVerticalOnly && Object.hasOwnProperty.call(e, "isVerticalOnly") && t.uint32(48).bool(e.isVerticalOnly),
                    null != e.isHorizontalOnly && Object.hasOwnProperty.call(e, "isHorizontalOnly") && t.uint32(56).bool(e.isHorizontalOnly),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleHighlight;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.chapterId = e.uint32();
                            break;
                        case 3:
                            n.pageUrlList && n.pageUrlList.length || (n.pageUrlList = []),
                            n.pageUrlList.push(e.string());
                            break;
                        case 4:
                            n.pageHight = e.uint32();
                            break;
                        case 5:
                            n.pageWidth = e.uint32();
                            break;
                        case 6:
                            n.isVerticalOnly = e.bool();
                            break;
                        case 7:
                            n.isHorizontalOnly = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleList = function() {
                function e(e) {
                    if (this.featuredTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.listName = "",
                e.prototype.featuredTitles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.listName && Object.hasOwnProperty.call(e, "listName") && t.uint32(10).string(e.listName),
                    null != e.featuredTitles && e.featuredTitles.length)
                        for (var a = 0; a < e.featuredTitles.length; ++a)
                            _.Proto.Title.encode(e.featuredTitles[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleList;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.listName = e.string();
                            break;
                        case 2:
                            n.featuredTitles && n.featuredTitles.length || (n.featuredTitles = []),
                            n.featuredTitles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AllTitlesGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    this.tags = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.theTitle = "",
                e.prototype.titles = y.emptyArray,
                e.prototype.tags = y.emptyArray,
                e.prototype.label = null,
                e.prototype.nextChapterStartTimestamp = 0,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.theTitle && Object.hasOwnProperty.call(e, "theTitle") && t.uint32(10).string(e.theTitle),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(18).fork()).ldelim();
                    if (null != e.tags && e.tags.length)
                        for (a = 0; a < e.tags.length; ++a)
                            _.Proto.Tag.encode(e.tags[a], t.uint32(26).fork()).ldelim();
                    return null != e.label && Object.hasOwnProperty.call(e, "label") && _.Proto.Label.encode(e.label, t.uint32(34).fork()).ldelim(),
                    null != e.nextChapterStartTimestamp && Object.hasOwnProperty.call(e, "nextChapterStartTimestamp") && t.uint32(40).uint32(e.nextChapterStartTimestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AllTitlesGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.theTitle = e.string();
                            break;
                        case 2:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.tags && n.tags.length || (n.tags = []),
                            n.tags.push(_.Proto.Tag.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.label = _.Proto.Label.decode(e, e.uint32());
                            break;
                        case 5:
                            n.nextChapterStartTimestamp = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleRankingGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.originalTitleId = 0,
                e.prototype.titles = y.emptyArray,
                e.prototype.score = 0,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.originalTitleId && Object.hasOwnProperty.call(e, "originalTitleId") && t.uint32(8).uint32(e.originalTitleId),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(18).fork()).ldelim();
                    return null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(24).uint32(e.score),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleRankingGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.originalTitleId = e.uint32();
                            break;
                        case 2:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.score = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleUpdatedGroup = function() {
                function e(e) {
                    if (this.latestTitle = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.updatedTitleTimestamp = 0,
                e.prototype.latestTitle = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.updatedTitleTimestamp && Object.hasOwnProperty.call(e, "updatedTitleTimestamp") && t.uint32(8).uint32(e.updatedTitleTimestamp),
                    null != e.latestTitle && e.latestTitle.length)
                        for (var a = 0; a < e.latestTitle.length; ++a)
                            _.Proto.AllTitlesGroup.encode(e.latestTitle[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleUpdatedGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.updatedTitleTimestamp = e.uint32();
                            break;
                        case 2:
                            n.latestTitle && n.latestTitle.length || (n.latestTitle = []),
                            n.latestTitle.push(_.Proto.AllTitlesGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.LabeledTitlesGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.theTitle = "",
                e.prototype.titles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.theTitle && Object.hasOwnProperty.call(e, "theTitle") && t.uint32(10).string(e.theTitle),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.LabeledTitlesGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.theTitle = e.string();
                            break;
                        case 2:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleSubscriptionGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.plan = "",
                e.prototype.titles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.plan && Object.hasOwnProperty.call(e, "plan") && t.uint32(10).string(e.plan),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleSubscriptionGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.plan = e.string();
                            break;
                        case 2:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TransitionAction = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.method = 0,
                e.prototype.url = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.method && Object.hasOwnProperty.call(e, "method") && t.uint32(8).int32(e.method),
                    null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(18).string(e.url),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TransitionAction;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.method = e.int32();
                            break;
                        case 2:
                            n.url = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.PresentationMethod = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "PUSH"] = 0,
                    t[e[1] = "MODAL"] = 1,
                    t[e[2] = "EXTERNAL"] = 2,
                    t
                }(),
                e
            }(),
            e.UpdatedTitleGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.groupName = "",
                e.prototype.titles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.groupName && Object.hasOwnProperty.call(e, "groupName") && t.uint32(10).string(e.groupName),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.UpdatedTitle.encode(e.titles[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UpdatedTitleGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.groupName = e.string();
                            break;
                        case 2:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.UpdatedTitle.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.UpdatedTitleV2Group = function() {
                function e(e) {
                    if (this.titleGroups = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.groupName = "",
                e.prototype.groupNameDays = 0,
                e.prototype.titleGroups = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.groupName && Object.hasOwnProperty.call(e, "groupName") && t.uint32(10).string(e.groupName),
                    null != e.titleGroups && e.titleGroups.length)
                        for (var a = 0; a < e.titleGroups.length; ++a)
                            _.Proto.OriginalTitleGroup.encode(e.titleGroups[a], t.uint32(18).fork()).ldelim();
                    return null != e.groupNameDays && Object.hasOwnProperty.call(e, "groupNameDays") && t.uint32(24).uint32(e.groupNameDays),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UpdatedTitleV2Group;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.groupName = e.string();
                            break;
                        case 3:
                            n.groupNameDays = e.uint32();
                            break;
                        case 2:
                            n.titleGroups && n.titleGroups.length || (n.titleGroups = []),
                            n.titleGroups.push(_.Proto.OriginalTitleGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.OriginalTitleGroup = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.theTitle = "",
                e.prototype.chapterNumber = "",
                e.prototype.titles = y.emptyArray,
                e.prototype.viewCount = 0,
                e.prototype.titleUpdateStatus = 0,
                e.prototype.chapterStartTime = 0,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.theTitle && Object.hasOwnProperty.call(e, "theTitle") && t.uint32(10).string(e.theTitle),
                    null != e.chapterNumber && Object.hasOwnProperty.call(e, "chapterNumber") && t.uint32(18).string(e.chapterNumber),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.UpdatedTitle.encode(e.titles[a], t.uint32(26).fork()).ldelim();
                    return null != e.viewCount && Object.hasOwnProperty.call(e, "viewCount") && t.uint32(32).uint32(e.viewCount),
                    null != e.titleUpdateStatus && Object.hasOwnProperty.call(e, "titleUpdateStatus") && t.uint32(40).int32(e.titleUpdateStatus),
                    null != e.chapterStartTime && Object.hasOwnProperty.call(e, "chapterStartTime") && t.uint32(48).uint32(e.chapterStartTime),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.OriginalTitleGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.theTitle = e.string();
                            break;
                        case 2:
                            n.chapterNumber = e.string();
                            break;
                        case 3:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.UpdatedTitle.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.viewCount = e.uint32();
                            break;
                        case 5:
                            n.titleUpdateStatus = e.int32();
                            break;
                        case 6:
                            n.chapterStartTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.UserTickets = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.currentTickets = 0,
                e.prototype.nextTicketTimestamp = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.currentTickets && Object.hasOwnProperty.call(e, "currentTickets") && t.uint32(8).uint32(e.currentTickets),
                    null != e.nextTicketTimestamp && Object.hasOwnProperty.call(e, "nextTicketTimestamp") && t.uint32(16).uint32(e.nextTicketTimestamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UserTickets;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.currentTickets = e.uint32();
                            break;
                        case 2:
                            n.nextTicketTimestamp = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AllFreeTitlesView = function() {
                function e(e) {
                    if (this.FreeTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.FreeTitles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.FreeTitles && e.FreeTitles.length)
                        for (var a = 0; a < e.FreeTitles.length; ++a)
                            _.Proto.FreeTitle.encode(e.FreeTitles[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AllFreeTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.FreeTitles && n.FreeTitles.length || (n.FreeTitles = []),
                            n.FreeTitles.push(_.Proto.FreeTitle.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AllTicketTitlesView = function() {
                function e(e) {
                    if (this.ticketTitle = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.ticketTitle = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.ticketTitle && e.ticketTitle.length)
                        for (var a = 0; a < e.ticketTitle.length; ++a)
                            _.Proto.TicketTitles.encode(e.ticketTitle[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AllTicketTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.ticketTitle && n.ticketTitle.length || (n.ticketTitle = []),
                            n.ticketTitle.push(_.Proto.TicketTitles.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AllTitlesView = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.titles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AllTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.AllTitlesViewV2 = function() {
                function e(e) {
                    if (this.AllTitlesGroup = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.AllTitlesGroup = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.AllTitlesGroup && e.AllTitlesGroup.length)
                        for (var a = 0; a < e.AllTitlesGroup.length; ++a)
                            _.Proto.AllTitlesGroup.encode(e.AllTitlesGroup[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.AllTitlesViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.AllTitlesGroup && n.AllTitlesGroup.length || (n.AllTitlesGroup = []),
                            n.AllTitlesGroup.push(_.Proto.AllTitlesGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.CommentListView = function() {
                function e(e) {
                    if (this.comments = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.comments = y.emptyArray,
                e.prototype.ifSetUserName = !1,
                e.prototype.titleDetailComment = null,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.comments && e.comments.length)
                        for (var a = 0; a < e.comments.length; ++a)
                            _.Proto.Comment.encode(e.comments[a], t.uint32(10).fork()).ldelim();
                    return null != e.ifSetUserName && Object.hasOwnProperty.call(e, "ifSetUserName") && t.uint32(16).bool(e.ifSetUserName),
                    null != e.titleDetailComment && Object.hasOwnProperty.call(e, "titleDetailComment") && _.Proto.CommentListView.TitleDetailComment.encode(e.titleDetailComment, t.uint32(26).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.CommentListView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.comments && n.comments.length || (n.comments = []),
                            n.comments.push(_.Proto.Comment.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.ifSetUserName = e.bool();
                            break;
                        case 3:
                            n.titleDetailComment = _.Proto.CommentListView.TitleDetailComment.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.TitleDetailComment = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.titleId = 0,
                    e.prototype.titleName = "",
                    e.prototype.chapterName = "",
                    e.prototype.credit = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(8).uint32(e.titleId),
                        null != e.titleName && Object.hasOwnProperty.call(e, "titleName") && t.uint32(18).string(e.titleName),
                        null != e.chapterName && Object.hasOwnProperty.call(e, "chapterName") && t.uint32(26).string(e.chapterName),
                        null != e.credit && Object.hasOwnProperty.call(e, "credit") && t.uint32(34).string(e.credit),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.CommentListView.TitleDetailComment;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.titleId = e.uint32();
                                break;
                            case 2:
                                n.titleName = e.string();
                                break;
                            case 3:
                                n.chapterName = e.string();
                                break;
                            case 4:
                                n.credit = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.DownloadableImagesView = function() {
                function e(e) {
                    if (this.downloadableImages = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.downloadableImages = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.downloadableImages && e.downloadableImages.length)
                        for (var a = 0; a < e.downloadableImages.length; ++a)
                            _.Proto.DownloadableImageGroup.encode(e.downloadableImages[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.DownloadableImagesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.downloadableImages && n.downloadableImages.length || (n.downloadableImages = []),
                            n.downloadableImages.push(_.Proto.DownloadableImageGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.DownloadableImageGroup = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.id = 0,
                e.prototype.imageUrl = "",
                e.prototype.imageTitle = "",
                e.prototype.width = 0,
                e.prototype.height = 0,
                e.prototype.type = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                    null != e.imageUrl && Object.hasOwnProperty.call(e, "imageUrl") && t.uint32(18).string(e.imageUrl),
                    null != e.imageTitle && Object.hasOwnProperty.call(e, "imageTitle") && t.uint32(26).string(e.imageTitle),
                    null != e.width && Object.hasOwnProperty.call(e, "width") && t.uint32(32).uint32(e.width),
                    null != e.height && Object.hasOwnProperty.call(e, "height") && t.uint32(40).uint32(e.height),
                    null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(50).string(e.type),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.DownloadableImageGroup;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.id = e.uint32();
                            break;
                        case 2:
                            n.imageUrl = e.string();
                            break;
                        case 3:
                            n.imageTitle = e.string();
                            break;
                        case 4:
                            n.width = e.uint32();
                            break;
                        case 5:
                            n.height = e.uint32();
                            break;
                        case 6:
                            n.type = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.FavoriteTitlesView = function() {
                function e(e) {
                    if (this.availableLanguages = [],
                    this.favoriteTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.availableLanguages = y.emptyArray,
                e.prototype.favoriteTitles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.availableLanguages && e.availableLanguages.length)
                        for (var a = 0; a < e.availableLanguages.length; ++a)
                            _.Proto.AvailableLanguages.encode(e.availableLanguages[a], t.uint32(10).fork()).ldelim();
                    if (null != e.favoriteTitles && e.favoriteTitles.length)
                        for (a = 0; a < e.favoriteTitles.length; ++a)
                            _.Proto.Title.encode(e.favoriteTitles[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FavoriteTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.availableLanguages && n.availableLanguages.length || (n.availableLanguages = []),
                            n.availableLanguages.push(_.Proto.AvailableLanguages.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.favoriteTitles && n.favoriteTitles.length || (n.favoriteTitles = []),
                            n.favoriteTitles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.FeaturedTitlesView = function() {
                function e(e) {
                    if (this.contents = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.mainBanner = null,
                e.prototype.subBanner_1 = null,
                e.prototype.subBanner_2 = null,
                e.prototype.contents = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.mainBanner && Object.hasOwnProperty.call(e, "mainBanner") && _.Proto.Banner.encode(e.mainBanner, t.uint32(10).fork()).ldelim(),
                    null != e.subBanner_1 && Object.hasOwnProperty.call(e, "subBanner_1") && _.Proto.Banner.encode(e.subBanner_1, t.uint32(18).fork()).ldelim(),
                    null != e.subBanner_2 && Object.hasOwnProperty.call(e, "subBanner_2") && _.Proto.Banner.encode(e.subBanner_2, t.uint32(26).fork()).ldelim(),
                    null != e.contents && e.contents.length)
                        for (var a = 0; a < e.contents.length; ++a)
                            _.Proto.FeaturedTitlesView.Contents.encode(e.contents[a], t.uint32(34).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FeaturedTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.mainBanner = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 2:
                            n.subBanner_1 = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 3:
                            n.subBanner_2 = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 4:
                            n.contents && n.contents.length || (n.contents = []),
                            n.contents.push(_.Proto.FeaturedTitlesView.Contents.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Contents = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    var t;
                    return e.prototype.banner = null,
                    e.prototype.titleList = null,
                    Object.defineProperty(e.prototype, "data", {
                        get: y.oneOfGetter(t = ["banner", "titleList"]),
                        set: y.oneOfSetter(t)
                    }),
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(10).fork()).ldelim(),
                        null != e.titleList && Object.hasOwnProperty.call(e, "titleList") && _.Proto.TitleList.encode(e.titleList, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.FeaturedTitlesView.Contents;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.banner = _.Proto.Banner.decode(e, e.uint32());
                                break;
                            case 2:
                                n.titleList = _.Proto.TitleList.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.FeaturedTitlesViewV2 = function() {
                function e(e) {
                    if (this.topSearchBanners = [],
                    this.contents = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.topSearchBanners = y.emptyArray,
                e.prototype.contents = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.topSearchBanners && e.topSearchBanners.length)
                        for (var a = 0; a < e.topSearchBanners.length; ++a)
                            _.Proto.Banner.encode(e.topSearchBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.contents && e.contents.length)
                        for (a = 0; a < e.contents.length; ++a)
                            _.Proto.FeaturedTitlesViewV2.Contents.encode(e.contents[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FeaturedTitlesViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.topSearchBanners && n.topSearchBanners.length || (n.topSearchBanners = []),
                            n.topSearchBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.contents && n.contents.length || (n.contents = []),
                            n.contents.push(_.Proto.FeaturedTitlesViewV2.Contents.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Contents = function() {
                    function e(e) {
                        if (this.rankedTitles = [],
                        e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.banner = null,
                    e.prototype.titleList = null,
                    e.prototype.rankedTitles = y.emptyArray,
                    e.encode = function(e, t) {
                        if (t || (t = v.create()),
                        null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(10).fork()).ldelim(),
                        null != e.titleList && Object.hasOwnProperty.call(e, "titleList") && _.Proto.TitleList.encode(e.titleList, t.uint32(18).fork()).ldelim(),
                        null != e.rankedTitles && e.rankedTitles.length)
                            for (var a = 0; a < e.rankedTitles.length; ++a)
                                _.Proto.TitleRankingGroup.encode(e.rankedTitles[a], t.uint32(26).fork()).ldelim();
                        return t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.FeaturedTitlesViewV2.Contents;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.banner = _.Proto.Banner.decode(e, e.uint32());
                                break;
                            case 2:
                                n.titleList = _.Proto.TitleList.decode(e, e.uint32());
                                break;
                            case 3:
                                n.rankedTitles && n.rankedTitles.length || (n.rankedTitles = []),
                                n.rankedTitles.push(_.Proto.TitleRankingGroup.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.FeedbackView = function() {
                function e(e) {
                    if (this.feedbackList = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.feedbackList = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.feedbackList && e.feedbackList.length)
                        for (var a = 0; a < e.feedbackList.length; ++a)
                            _.Proto.Feedback.encode(e.feedbackList[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.FeedbackView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.feedbackList && n.feedbackList.length || (n.feedbackList = []),
                            n.feedbackList.push(_.Proto.Feedback.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.HistoryView = function() {
                function e(e) {
                    if (this.historyBanners = [],
                    this.viewHistory = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.historyBanners = y.emptyArray,
                e.prototype.viewHistory = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.historyBanners && e.historyBanners.length)
                        for (var a = 0; a < e.historyBanners.length; ++a)
                            _.Proto.Banner.encode(e.historyBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.viewHistory && e.viewHistory.length)
                        for (a = 0; a < e.viewHistory.length; ++a)
                            _.Proto.Title.encode(e.viewHistory[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.HistoryView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.historyBanners && n.historyBanners.length || (n.historyBanners = []),
                            n.historyBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.viewHistory && n.viewHistory.length || (n.viewHistory = []),
                            n.viewHistory.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.HomeViewV3 = function() {
                function e(e) {
                    if (this.topBanners = [],
                    this.groups = [],
                    this.serviceAnnouncements = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.topBanners = y.emptyArray,
                e.prototype.groups = y.emptyArray,
                e.prototype.popup = null,
                e.prototype.displayTrackingPopup = !1,
                e.prototype.userSubscription = null,
                e.prototype.serviceAnnouncements = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.topBanners && e.topBanners.length)
                        for (var a = 0; a < e.topBanners.length; ++a)
                            _.Proto.Banner.encode(e.topBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.groups && e.groups.length)
                        for (a = 0; a < e.groups.length; ++a)
                            _.Proto.UpdatedTitleV2Group.encode(e.groups[a], t.uint32(18).fork()).ldelim();
                    if (null != e.popup && Object.hasOwnProperty.call(e, "popup") && _.Proto.Popup.encode(e.popup, t.uint32(74).fork()).ldelim(),
                    null != e.displayTrackingPopup && Object.hasOwnProperty.call(e, "displayTrackingPopup") && t.uint32(80).bool(e.displayTrackingPopup),
                    null != e.userSubscription && Object.hasOwnProperty.call(e, "userSubscription") && _.Proto.Subscription.encode(e.userSubscription, t.uint32(90).fork()).ldelim(),
                    null != e.serviceAnnouncements && e.serviceAnnouncements.length)
                        for (a = 0; a < e.serviceAnnouncements.length; ++a)
                            _.Proto.ServiceAnnouncement.encode(e.serviceAnnouncements[a], t.uint32(98).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.HomeViewV3;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.topBanners && n.topBanners.length || (n.topBanners = []),
                            n.topBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.groups && n.groups.length || (n.groups = []),
                            n.groups.push(_.Proto.UpdatedTitleV2Group.decode(e, e.uint32()));
                            break;
                        case 9:
                            n.popup = _.Proto.Popup.decode(e, e.uint32());
                            break;
                        case 10:
                            n.displayTrackingPopup = e.bool();
                            break;
                        case 11:
                            n.userSubscription = _.Proto.Subscription.decode(e, e.uint32());
                            break;
                        case 12:
                            n.serviceAnnouncements && n.serviceAnnouncements.length || (n.serviceAnnouncements = []),
                            n.serviceAnnouncements.push(_.Proto.ServiceAnnouncement.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.InitialViewV2 = function() {
                function e(e) {
                    if (this.availableLanguages = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.gdprAgreementRequired = !1,
                e.prototype.availableLanguages = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.gdprAgreementRequired && Object.hasOwnProperty.call(e, "gdprAgreementRequired") && t.uint32(8).bool(e.gdprAgreementRequired),
                    null != e.availableLanguages && e.availableLanguages.length)
                        for (var a = 0; a < e.availableLanguages.length; ++a)
                            _.Proto.AvailableLanguages.encode(e.availableLanguages[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.InitialViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.gdprAgreementRequired = e.bool();
                            break;
                        case 2:
                            n.availableLanguages && n.availableLanguages.length || (n.availableLanguages = []),
                            n.availableLanguages.push(_.Proto.AvailableLanguages.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.IntroduceSubscription = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = "",
                e.prototype.subtitle = "",
                e.prototype.description = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                    null != e.subtitle && Object.hasOwnProperty.call(e, "subtitle") && t.uint32(18).string(e.subtitle),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(26).string(e.description),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.IntroduceSubscription;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = e.string();
                            break;
                        case 2:
                            n.subtitle = e.string();
                            break;
                        case 3:
                            n.description = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.LabeledView = function() {
                function e(e) {
                    if (this.LabeledTitlesGroup = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.Label = null,
                e.prototype.LabeledTitlesGroup = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.Label && Object.hasOwnProperty.call(e, "Label") && _.Proto.Label.encode(e.Label, t.uint32(10).fork()).ldelim(),
                    null != e.LabeledTitlesGroup && e.LabeledTitlesGroup.length)
                        for (var a = 0; a < e.LabeledTitlesGroup.length; ++a)
                            _.Proto.LabeledTitlesGroup.encode(e.LabeledTitlesGroup[a], t.uint32(18).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.LabeledView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.Label = _.Proto.Label.decode(e, e.uint32());
                            break;
                        case 2:
                            n.LabeledTitlesGroup && n.LabeledTitlesGroup.length || (n.LabeledTitlesGroup = []),
                            n.LabeledTitlesGroup.push(_.Proto.LabeledTitlesGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.MangaViewer = function() {
                function e(e) {
                    if (this.pages = [],
                    this.chapters = [],
                    this.titleAvailableLanguages = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.pages = y.emptyArray,
                e.prototype.chapterId = 0,
                e.prototype.chapters = y.emptyArray,
                e.prototype.sns = null,
                e.prototype.titleName = "",
                e.prototype.chapterName = "",
                e.prototype.numberOfComments = 0,
                e.prototype.isVerticalOnly = !1,
                e.prototype.titleId = 0,
                e.prototype.startFromRight = !1,
                e.prototype.regionCode = "",
                e.prototype.isHorizontalOnly = !1,
                e.prototype.userSubscription = null,
                e.prototype.planType = "",
                e.prototype.titleLanguage = "",
                e.prototype.ratingPopup = null,
                e.prototype.title = null,
                e.prototype.titleAvailableLanguages = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.pages && e.pages.length)
                        for (var a = 0; a < e.pages.length; ++a)
                            _.Proto.Page.encode(e.pages[a], t.uint32(10).fork()).ldelim();
                    if (null != e.chapterId && Object.hasOwnProperty.call(e, "chapterId") && t.uint32(16).uint32(e.chapterId),
                    null != e.chapters && e.chapters.length)
                        for (a = 0; a < e.chapters.length; ++a)
                            _.Proto.Chapter.encode(e.chapters[a], t.uint32(26).fork()).ldelim();
                    if (null != e.sns && Object.hasOwnProperty.call(e, "sns") && _.Proto.Sns.encode(e.sns, t.uint32(34).fork()).ldelim(),
                    null != e.titleName && Object.hasOwnProperty.call(e, "titleName") && t.uint32(42).string(e.titleName),
                    null != e.chapterName && Object.hasOwnProperty.call(e, "chapterName") && t.uint32(50).string(e.chapterName),
                    null != e.numberOfComments && Object.hasOwnProperty.call(e, "numberOfComments") && t.uint32(56).uint32(e.numberOfComments),
                    null != e.isVerticalOnly && Object.hasOwnProperty.call(e, "isVerticalOnly") && t.uint32(64).bool(e.isVerticalOnly),
                    null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(72).uint32(e.titleId),
                    null != e.startFromRight && Object.hasOwnProperty.call(e, "startFromRight") && t.uint32(80).bool(e.startFromRight),
                    null != e.regionCode && Object.hasOwnProperty.call(e, "regionCode") && t.uint32(90).string(e.regionCode),
                    null != e.isHorizontalOnly && Object.hasOwnProperty.call(e, "isHorizontalOnly") && t.uint32(96).bool(e.isHorizontalOnly),
                    null != e.userSubscription && Object.hasOwnProperty.call(e, "userSubscription") && _.Proto.Subscription.encode(e.userSubscription, t.uint32(106).fork()).ldelim(),
                    null != e.planType && Object.hasOwnProperty.call(e, "planType") && t.uint32(114).string(e.planType),
                    null != e.titleLanguage && Object.hasOwnProperty.call(e, "titleLanguage") && t.uint32(122).string(e.titleLanguage),
                    null != e.ratingPopup && Object.hasOwnProperty.call(e, "ratingPopup") && _.Proto.Popup.encode(e.ratingPopup, t.uint32(130).fork()).ldelim(),
                    null != e.titleAvailableLanguages && e.titleAvailableLanguages.length)
                        for (a = 0; a < e.titleAvailableLanguages.length; ++a)
                            _.Proto.MangaViewer.TitleAvailableLanguages.encode(e.titleAvailableLanguages[a], t.uint32(138).fork()).ldelim();
                    return null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(146).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.MangaViewer;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.pages && n.pages.length || (n.pages = []),
                            n.pages.push(_.Proto.Page.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.chapterId = e.uint32();
                            break;
                        case 3:
                            n.chapters && n.chapters.length || (n.chapters = []),
                            n.chapters.push(_.Proto.Chapter.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.sns = _.Proto.Sns.decode(e, e.uint32());
                            break;
                        case 5:
                            n.titleName = e.string();
                            break;
                        case 6:
                            n.chapterName = e.string();
                            break;
                        case 7:
                            n.numberOfComments = e.uint32();
                            break;
                        case 8:
                            n.isVerticalOnly = e.bool();
                            break;
                        case 9:
                            n.titleId = e.uint32();
                            break;
                        case 10:
                            n.startFromRight = e.bool();
                            break;
                        case 11:
                            n.regionCode = e.string();
                            break;
                        case 12:
                            n.isHorizontalOnly = e.bool();
                            break;
                        case 13:
                            n.userSubscription = _.Proto.Subscription.decode(e, e.uint32());
                            break;
                        case 14:
                            n.planType = e.string();
                            break;
                        case 15:
                            n.titleLanguage = e.string();
                            break;
                        case 16:
                            n.ratingPopup = _.Proto.Popup.decode(e, e.uint32());
                            break;
                        case 18:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 17:
                            n.titleAvailableLanguages && n.titleAvailableLanguages.length || (n.titleAvailableLanguages = []),
                            n.titleAvailableLanguages.push(_.Proto.MangaViewer.TitleAvailableLanguages.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.TitleAvailableLanguages = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.titleId = 0,
                    e.prototype.language = 0,
                    e.prototype.isNew = !1,
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(8).uint32(e.titleId),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(16).int32(e.language),
                        null != e.isNew && Object.hasOwnProperty.call(e, "isNew") && t.uint32(24).bool(e.isNew),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.MangaViewer.TitleAvailableLanguages;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.titleId = e.uint32();
                                break;
                            case 2:
                                n.language = e.int32();
                                break;
                            case 3:
                                n.isNew = e.bool();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.ProfileSettingsView = function() {
                function e(e) {
                    if (this.iconList = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.iconList = y.emptyArray,
                e.prototype.userName = "",
                e.prototype.myIcon = null,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.iconList && e.iconList.length)
                        for (var a = 0; a < e.iconList.length; ++a)
                            _.Proto.CommentIcon.encode(e.iconList[a], t.uint32(10).fork()).ldelim();
                    return null != e.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(18).string(e.userName),
                    null != e.myIcon && Object.hasOwnProperty.call(e, "myIcon") && _.Proto.CommentIcon.encode(e.myIcon, t.uint32(26).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.ProfileSettingsView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.iconList && n.iconList.length || (n.iconList = []),
                            n.iconList.push(_.Proto.CommentIcon.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.userName = e.string();
                            break;
                        case 3:
                            n.myIcon = _.Proto.CommentIcon.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.PublisherNewsListView = function() {
                function e(e) {
                    if (this.newsList = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.publisherId = 0,
                e.prototype.publisherName = "",
                e.prototype.banner = null,
                e.prototype.newsList = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.publisherId && Object.hasOwnProperty.call(e, "publisherId") && t.uint32(8).uint32(e.publisherId),
                    null != e.publisherName && Object.hasOwnProperty.call(e, "publisherName") && t.uint32(18).string(e.publisherName),
                    null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(26).fork()).ldelim(),
                    null != e.newsList && e.newsList.length)
                        for (var a = 0; a < e.newsList.length; ++a)
                            _.Proto.PublisherNews.encode(e.newsList[a], t.uint32(34).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.PublisherNewsListView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.publisherId = e.uint32();
                            break;
                        case 2:
                            n.publisherName = e.string();
                            break;
                        case 3:
                            n.banner = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 4:
                            n.newsList && n.newsList.length || (n.newsList = []),
                            n.newsList.push(_.Proto.PublisherNews.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.PushTokenView = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.token = "",
                e.prototype.tokenTimeStamp = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(10).string(e.token),
                    null != e.tokenTimeStamp && Object.hasOwnProperty.call(e, "tokenTimeStamp") && t.uint32(16).uint32(e.tokenTimeStamp),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.PushTokenView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.token = e.string();
                            break;
                        case 2:
                            n.tokenTimeStamp = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.QuestionnaireView = function() {
                function e(e) {
                    if (this.questions = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.isAnswered = !1,
                e.prototype.subject = "",
                e.prototype.questions = y.emptyArray,
                e.prototype.language = 0,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.isAnswered && Object.hasOwnProperty.call(e, "isAnswered") && t.uint32(8).bool(e.isAnswered),
                    null != e.subject && Object.hasOwnProperty.call(e, "subject") && t.uint32(18).string(e.subject),
                    null != e.questions && e.questions.length)
                        for (var a = 0; a < e.questions.length; ++a)
                            _.Proto.Questionnaire.encode(e.questions[a], t.uint32(26).fork()).ldelim();
                    return null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(32).int32(e.language),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.QuestionnaireView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.isAnswered = e.bool();
                            break;
                        case 2:
                            n.subject = e.string();
                            break;
                        case 3:
                            n.questions && n.questions.length || (n.questions = []),
                            n.questions.push(_.Proto.Questionnaire.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.language = e.int32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.RegistrationData = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.deviceSecret = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.deviceSecret && Object.hasOwnProperty.call(e, "deviceSecret") && t.uint32(10).string(e.deviceSecret),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.RegistrationData;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.deviceSecret = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SearchView = function() {
                function e(e) {
                    if (this.topSearchBanners = [],
                    this.allTags = [],
                    this.allTitlesGroup = [],
                    this.contents = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.topSearchBanners = y.emptyArray,
                e.prototype.allTags = y.emptyArray,
                e.prototype.allTitlesGroup = y.emptyArray,
                e.prototype.contents = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.topSearchBanners && e.topSearchBanners.length)
                        for (var a = 0; a < e.topSearchBanners.length; ++a)
                            _.Proto.Banner.encode(e.topSearchBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.allTags && e.allTags.length)
                        for (a = 0; a < e.allTags.length; ++a)
                            _.Proto.Tag.encode(e.allTags[a], t.uint32(18).fork()).ldelim();
                    if (null != e.allTitlesGroup && e.allTitlesGroup.length)
                        for (a = 0; a < e.allTitlesGroup.length; ++a)
                            _.Proto.AllTitlesGroup.encode(e.allTitlesGroup[a], t.uint32(26).fork()).ldelim();
                    if (null != e.contents && e.contents.length)
                        for (a = 0; a < e.contents.length; ++a)
                            _.Proto.SearchView.Contents.encode(e.contents[a], t.uint32(42).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SearchView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.topSearchBanners && n.topSearchBanners.length || (n.topSearchBanners = []),
                            n.topSearchBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.allTags && n.allTags.length || (n.allTags = []),
                            n.allTags.push(_.Proto.Tag.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.allTitlesGroup && n.allTitlesGroup.length || (n.allTitlesGroup = []),
                            n.allTitlesGroup.push(_.Proto.AllTitlesGroup.decode(e, e.uint32()));
                            break;
                        case 5:
                            n.contents && n.contents.length || (n.contents = []),
                            n.contents.push(_.Proto.SearchView.Contents.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Contents = function() {
                    function e(e) {
                        if (this.rankedTitles = [],
                        this.allLabels = [],
                        e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.banner = null,
                    e.prototype.titleList = null,
                    e.prototype.rankedTitles = y.emptyArray,
                    e.prototype.allLabels = y.emptyArray,
                    e.encode = function(e, t) {
                        if (t || (t = v.create()),
                        null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(10).fork()).ldelim(),
                        null != e.titleList && Object.hasOwnProperty.call(e, "titleList") && _.Proto.TitleList.encode(e.titleList, t.uint32(18).fork()).ldelim(),
                        null != e.rankedTitles && e.rankedTitles.length)
                            for (var a = 0; a < e.rankedTitles.length; ++a)
                                _.Proto.TitleRankingGroup.encode(e.rankedTitles[a], t.uint32(26).fork()).ldelim();
                        if (null != e.allLabels && e.allLabels.length)
                            for (a = 0; a < e.allLabels.length; ++a)
                                _.Proto.Label.encode(e.allLabels[a], t.uint32(34).fork()).ldelim();
                        return t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.SearchView.Contents;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.banner = _.Proto.Banner.decode(e, e.uint32());
                                break;
                            case 2:
                                n.titleList = _.Proto.TitleList.decode(e, e.uint32());
                                break;
                            case 3:
                                n.rankedTitles && n.rankedTitles.length || (n.rankedTitles = []),
                                n.rankedTitles.push(_.Proto.TitleRankingGroup.decode(e, e.uint32()));
                                break;
                            case 4:
                                n.allLabels && n.allLabels.length || (n.allLabels = []),
                                n.allLabels.push(_.Proto.Label.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.ServiceAnnouncementsView = function() {
                function e(e) {
                    if (this.serviceAnnouncements = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.serviceAnnouncements = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.serviceAnnouncements && e.serviceAnnouncements.length)
                        for (var a = 0; a < e.serviceAnnouncements.length; ++a)
                            _.Proto.ServiceAnnouncement.encode(e.serviceAnnouncements[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.ServiceAnnouncementsView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.serviceAnnouncements && n.serviceAnnouncements.length || (n.serviceAnnouncements = []),
                            n.serviceAnnouncements.push(_.Proto.ServiceAnnouncement.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SettingsView = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.myIcon = null,
                e.prototype.userName = "",
                e.prototype.noticeOfNewsAndEvents = !1,
                e.prototype.noticeOfUpdatesOfSubscribedTitles = !1,
                e.prototype.englishTitlesCount = 0,
                e.prototype.spanishTitlesCount = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.myIcon && Object.hasOwnProperty.call(e, "myIcon") && _.Proto.CommentIcon.encode(e.myIcon, t.uint32(10).fork()).ldelim(),
                    null != e.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(18).string(e.userName),
                    null != e.noticeOfNewsAndEvents && Object.hasOwnProperty.call(e, "noticeOfNewsAndEvents") && t.uint32(24).bool(e.noticeOfNewsAndEvents),
                    null != e.noticeOfUpdatesOfSubscribedTitles && Object.hasOwnProperty.call(e, "noticeOfUpdatesOfSubscribedTitles") && t.uint32(32).bool(e.noticeOfUpdatesOfSubscribedTitles),
                    null != e.englishTitlesCount && Object.hasOwnProperty.call(e, "englishTitlesCount") && t.uint32(40).uint32(e.englishTitlesCount),
                    null != e.spanishTitlesCount && Object.hasOwnProperty.call(e, "spanishTitlesCount") && t.uint32(48).uint32(e.spanishTitlesCount),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SettingsView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.myIcon = _.Proto.CommentIcon.decode(e, e.uint32());
                            break;
                        case 2:
                            n.userName = e.string();
                            break;
                        case 3:
                            n.noticeOfNewsAndEvents = e.bool();
                            break;
                        case 4:
                            n.noticeOfUpdatesOfSubscribedTitles = e.bool();
                            break;
                        case 5:
                            n.englishTitlesCount = e.uint32();
                            break;
                        case 6:
                            n.spanishTitlesCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SettingsViewV2 = function() {
                function e(e) {
                    if (this.availableLanguages = [],
                    this.availableCustomCodes = [],
                    this.favoriteTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.myIcon = null,
                e.prototype.userName = "",
                e.prototype.noticeOfNewsAndEvents = !1,
                e.prototype.noticeOfUpdatesOfSubscribedTitles = !1,
                e.prototype.availableLanguages = y.emptyArray,
                e.prototype.userSubscription = null,
                e.prototype.banner = null,
                e.prototype.availableCustomCodes = y.emptyArray,
                e.prototype.favoriteTitles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.myIcon && Object.hasOwnProperty.call(e, "myIcon") && _.Proto.CommentIcon.encode(e.myIcon, t.uint32(10).fork()).ldelim(),
                    null != e.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(18).string(e.userName),
                    null != e.noticeOfNewsAndEvents && Object.hasOwnProperty.call(e, "noticeOfNewsAndEvents") && t.uint32(24).bool(e.noticeOfNewsAndEvents),
                    null != e.noticeOfUpdatesOfSubscribedTitles && Object.hasOwnProperty.call(e, "noticeOfUpdatesOfSubscribedTitles") && t.uint32(32).bool(e.noticeOfUpdatesOfSubscribedTitles),
                    null != e.availableLanguages && e.availableLanguages.length)
                        for (var a = 0; a < e.availableLanguages.length; ++a)
                            _.Proto.AvailableLanguages.encode(e.availableLanguages[a], t.uint32(42).fork()).ldelim();
                    if (null != e.userSubscription && Object.hasOwnProperty.call(e, "userSubscription") && _.Proto.Subscription.encode(e.userSubscription, t.uint32(50).fork()).ldelim(),
                    null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(58).fork()).ldelim(),
                    null != e.availableCustomCodes && e.availableCustomCodes.length)
                        for (a = 0; a < e.availableCustomCodes.length; ++a)
                            _.Proto.CustomCodeDialogue.encode(e.availableCustomCodes[a], t.uint32(66).fork()).ldelim();
                    if (null != e.favoriteTitles && e.favoriteTitles.length)
                        for (a = 0; a < e.favoriteTitles.length; ++a)
                            _.Proto.TitleRankingGroup.encode(e.favoriteTitles[a], t.uint32(74).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SettingsViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.myIcon = _.Proto.CommentIcon.decode(e, e.uint32());
                            break;
                        case 2:
                            n.userName = e.string();
                            break;
                        case 3:
                            n.noticeOfNewsAndEvents = e.bool();
                            break;
                        case 4:
                            n.noticeOfUpdatesOfSubscribedTitles = e.bool();
                            break;
                        case 5:
                            n.availableLanguages && n.availableLanguages.length || (n.availableLanguages = []),
                            n.availableLanguages.push(_.Proto.AvailableLanguages.decode(e, e.uint32()));
                            break;
                        case 6:
                            n.userSubscription = _.Proto.Subscription.decode(e, e.uint32());
                            break;
                        case 7:
                            n.banner = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 8:
                            n.availableCustomCodes && n.availableCustomCodes.length || (n.availableCustomCodes = []),
                            n.availableCustomCodes.push(_.Proto.CustomCodeDialogue.decode(e, e.uint32()));
                            break;
                        case 9:
                            n.favoriteTitles && n.favoriteTitles.length || (n.favoriteTitles = []),
                            n.favoriteTitles.push(_.Proto.TitleRankingGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.CustomCodeDialogue = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.planType = "",
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.planType && Object.hasOwnProperty.call(e, "planType") && t.uint32(10).string(e.planType),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.CustomCodeDialogue;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.planType = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SubscribedTitlesView = function() {
                function e(e) {
                    if (this.titles = [],
                    this.historyBanners = [],
                    this.viewHistory = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.titles = y.emptyArray,
                e.prototype.historyBanners = y.emptyArray,
                e.prototype.viewHistory = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(10).fork()).ldelim();
                    if (null != e.historyBanners && e.historyBanners.length)
                        for (a = 0; a < e.historyBanners.length; ++a)
                            _.Proto.Banner.encode(e.historyBanners[a], t.uint32(18).fork()).ldelim();
                    if (null != e.viewHistory && e.viewHistory.length)
                        for (a = 0; a < e.viewHistory.length; ++a)
                            _.Proto.Title.encode(e.viewHistory[a], t.uint32(26).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SubscribedTitlesView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.historyBanners && n.historyBanners.length || (n.historyBanners = []),
                            n.historyBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.viewHistory && n.viewHistory.length || (n.viewHistory = []),
                            n.viewHistory.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SubscriptionView = function() {
                function e(e) {
                    if (this.planTypes = [],
                    this.subscriptionTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.userSubscription = null,
                e.prototype.planTypes = y.emptyArray,
                e.prototype.subscriptionTitles = y.emptyArray,
                e.prototype.userHasUsedTrial = !1,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.userSubscription && Object.hasOwnProperty.call(e, "userSubscription") && _.Proto.Subscription.encode(e.userSubscription, t.uint32(10).fork()).ldelim(),
                    null != e.planTypes && e.planTypes.length)
                        for (var a = 0; a < e.planTypes.length; ++a)
                            _.Proto.PlanType.encode(e.planTypes[a], t.uint32(18).fork()).ldelim();
                    if (null != e.subscriptionTitles && e.subscriptionTitles.length)
                        for (a = 0; a < e.subscriptionTitles.length; ++a)
                            _.Proto.TitleSubscriptionGroup.encode(e.subscriptionTitles[a], t.uint32(26).fork()).ldelim();
                    return null != e.userHasUsedTrial && Object.hasOwnProperty.call(e, "userHasUsedTrial") && t.uint32(32).bool(e.userHasUsedTrial),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SubscriptionView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.userSubscription = _.Proto.Subscription.decode(e, e.uint32());
                            break;
                        case 2:
                            n.planTypes && n.planTypes.length || (n.planTypes = []),
                            n.planTypes.push(_.Proto.PlanType.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.subscriptionTitles && n.subscriptionTitles.length || (n.subscriptionTitles = []),
                            n.subscriptionTitles.push(_.Proto.TitleSubscriptionGroup.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.userHasUsedTrial = e.bool();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleDetailView = function() {
                function e(e) {
                    if (this.firstChapterList = [],
                    this.lastChapterList = [],
                    this.chapterListGroup = [],
                    this.banners = [],
                    this.recommendedTitleList = [],
                    this.publisherItems = [],
                    this.titleBanners = [],
                    this.ticketChapterList = [],
                    this.ticketTitleList = [],
                    this.titleLanguages = [],
                    this.tags = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.title = null,
                e.prototype.titleImageUrl = "",
                e.prototype.overview = "",
                e.prototype.backgroundImageUrl = "",
                e.prototype.nextTimeStamp = 0,
                e.prototype.updateTiming = 0,
                e.prototype.viewingPeriodDescription = "",
                e.prototype.nonAppearanceInfo = "",
                e.prototype.firstChapterList = y.emptyArray,
                e.prototype.lastChapterList = y.emptyArray,
                e.prototype.chapterListGroup = y.emptyArray,
                e.prototype.banners = y.emptyArray,
                e.prototype.recommendedTitleList = y.emptyArray,
                e.prototype.sns = null,
                e.prototype.isSimulReleased = !1,
                e.prototype.isSubscribed = !1,
                e.prototype.rating = 0,
                e.prototype.chaptersDescending = !1,
                e.prototype.numberOfViews = 0,
                e.prototype.publisherItems = y.emptyArray,
                e.prototype.titleBanners = y.emptyArray,
                e.prototype.userTickets = null,
                e.prototype.ticketChapterList = y.emptyArray,
                e.prototype.ticketTitleList = y.emptyArray,
                e.prototype.hasChaptersBetween = !1,
                e.prototype.publisherBanner = null,
                e.prototype.advertisement = null,
                e.prototype.freeViewDialogue = null,
                e.prototype.regionCode = "",
                e.prototype.titleLanguages = y.emptyArray,
                e.prototype.tags = y.emptyArray,
                e.prototype.titleLabels = null,
                e.prototype.userSubscription = null,
                e.prototype.label = null,
                e.prototype.isFirstTimeFree = !1,
                e.prototype.metaInfo = null,
                e.prototype.ratingPopup = null,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && _.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                    null != e.titleImageUrl && Object.hasOwnProperty.call(e, "titleImageUrl") && t.uint32(18).string(e.titleImageUrl),
                    null != e.overview && Object.hasOwnProperty.call(e, "overview") && t.uint32(26).string(e.overview),
                    null != e.backgroundImageUrl && Object.hasOwnProperty.call(e, "backgroundImageUrl") && t.uint32(34).string(e.backgroundImageUrl),
                    null != e.nextTimeStamp && Object.hasOwnProperty.call(e, "nextTimeStamp") && t.uint32(40).uint32(e.nextTimeStamp),
                    null != e.updateTiming && Object.hasOwnProperty.call(e, "updateTiming") && t.uint32(48).int32(e.updateTiming),
                    null != e.viewingPeriodDescription && Object.hasOwnProperty.call(e, "viewingPeriodDescription") && t.uint32(58).string(e.viewingPeriodDescription),
                    null != e.nonAppearanceInfo && Object.hasOwnProperty.call(e, "nonAppearanceInfo") && t.uint32(66).string(e.nonAppearanceInfo),
                    null != e.firstChapterList && e.firstChapterList.length)
                        for (var a = 0; a < e.firstChapterList.length; ++a)
                            _.Proto.Chapter.encode(e.firstChapterList[a], t.uint32(74).fork()).ldelim();
                    if (null != e.lastChapterList && e.lastChapterList.length)
                        for (a = 0; a < e.lastChapterList.length; ++a)
                            _.Proto.Chapter.encode(e.lastChapterList[a], t.uint32(82).fork()).ldelim();
                    if (null != e.banners && e.banners.length)
                        for (a = 0; a < e.banners.length; ++a)
                            _.Proto.Banner.encode(e.banners[a], t.uint32(90).fork()).ldelim();
                    if (null != e.recommendedTitleList && e.recommendedTitleList.length)
                        for (a = 0; a < e.recommendedTitleList.length; ++a)
                            _.Proto.Title.encode(e.recommendedTitleList[a], t.uint32(98).fork()).ldelim();
                    if (null != e.sns && Object.hasOwnProperty.call(e, "sns") && _.Proto.Sns.encode(e.sns, t.uint32(106).fork()).ldelim(),
                    null != e.isSimulReleased && Object.hasOwnProperty.call(e, "isSimulReleased") && t.uint32(112).bool(e.isSimulReleased),
                    null != e.isSubscribed && Object.hasOwnProperty.call(e, "isSubscribed") && t.uint32(120).bool(e.isSubscribed),
                    null != e.rating && Object.hasOwnProperty.call(e, "rating") && t.uint32(128).int32(e.rating),
                    null != e.chaptersDescending && Object.hasOwnProperty.call(e, "chaptersDescending") && t.uint32(136).bool(e.chaptersDescending),
                    null != e.numberOfViews && Object.hasOwnProperty.call(e, "numberOfViews") && t.uint32(144).uint32(e.numberOfViews),
                    null != e.publisherItems && e.publisherItems.length)
                        for (a = 0; a < e.publisherItems.length; ++a)
                            _.Proto.TitleDetailView.PublisherItem.encode(e.publisherItems[a], t.uint32(154).fork()).ldelim();
                    if (null != e.titleBanners && e.titleBanners.length)
                        for (a = 0; a < e.titleBanners.length; ++a)
                            _.Proto.Banner.encode(e.titleBanners[a], t.uint32(162).fork()).ldelim();
                    if (null != e.userTickets && Object.hasOwnProperty.call(e, "userTickets") && _.Proto.UserTickets.encode(e.userTickets, t.uint32(170).fork()).ldelim(),
                    null != e.ticketChapterList && e.ticketChapterList.length)
                        for (a = 0; a < e.ticketChapterList.length; ++a)
                            _.Proto.Chapter.encode(e.ticketChapterList[a], t.uint32(178).fork()).ldelim();
                    if (null != e.ticketTitleList && e.ticketTitleList.length)
                        for (a = 0; a < e.ticketTitleList.length; ++a)
                            _.Proto.Title.encode(e.ticketTitleList[a], t.uint32(186).fork()).ldelim();
                    if (null != e.hasChaptersBetween && Object.hasOwnProperty.call(e, "hasChaptersBetween") && t.uint32(192).bool(e.hasChaptersBetween),
                    null != e.publisherBanner && Object.hasOwnProperty.call(e, "publisherBanner") && _.Proto.Banner.encode(e.publisherBanner, t.uint32(202).fork()).ldelim(),
                    null != e.advertisement && Object.hasOwnProperty.call(e, "advertisement") && _.Proto.AdNetworkList.encode(e.advertisement, t.uint32(210).fork()).ldelim(),
                    null != e.titleLanguages && e.titleLanguages.length)
                        for (a = 0; a < e.titleLanguages.length; ++a)
                            _.Proto.TitleDetailView.TitleLanguages.encode(e.titleLanguages[a], t.uint32(218).fork()).ldelim();
                    if (null != e.chapterListGroup && e.chapterListGroup.length)
                        for (a = 0; a < e.chapterListGroup.length; ++a)
                            _.Proto.TitleDetailView.ChapterGroup.encode(e.chapterListGroup[a], t.uint32(226).fork()).ldelim();
                    if (null != e.freeViewDialogue && Object.hasOwnProperty.call(e, "freeViewDialogue") && _.Proto.FreeViewDialogue.encode(e.freeViewDialogue, t.uint32(234).fork()).ldelim(),
                    null != e.regionCode && Object.hasOwnProperty.call(e, "regionCode") && t.uint32(242).string(e.regionCode),
                    null != e.tags && e.tags.length)
                        for (a = 0; a < e.tags.length; ++a)
                            _.Proto.Tag.encode(e.tags[a], t.uint32(250).fork()).ldelim();
                    return null != e.titleLabels && Object.hasOwnProperty.call(e, "titleLabels") && _.Proto.TitleDetailView.TitleLabels.encode(e.titleLabels, t.uint32(258).fork()).ldelim(),
                    null != e.userSubscription && Object.hasOwnProperty.call(e, "userSubscription") && _.Proto.Subscription.encode(e.userSubscription, t.uint32(266).fork()).ldelim(),
                    null != e.label && Object.hasOwnProperty.call(e, "label") && _.Proto.Label.encode(e.label, t.uint32(274).fork()).ldelim(),
                    null != e.isFirstTimeFree && Object.hasOwnProperty.call(e, "isFirstTimeFree") && t.uint32(280).bool(e.isFirstTimeFree),
                    null != e.metaInfo && Object.hasOwnProperty.call(e, "metaInfo") && _.Proto.MetaInfo.encode(e.metaInfo, t.uint32(290).fork()).ldelim(),
                    null != e.ratingPopup && Object.hasOwnProperty.call(e, "ratingPopup") && _.Proto.Popup.encode(e.ratingPopup, t.uint32(298).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleDetailView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.title = _.Proto.Title.decode(e, e.uint32());
                            break;
                        case 2:
                            n.titleImageUrl = e.string();
                            break;
                        case 3:
                            n.overview = e.string();
                            break;
                        case 4:
                            n.backgroundImageUrl = e.string();
                            break;
                        case 5:
                            n.nextTimeStamp = e.uint32();
                            break;
                        case 6:
                            n.updateTiming = e.int32();
                            break;
                        case 7:
                            n.viewingPeriodDescription = e.string();
                            break;
                        case 8:
                            n.nonAppearanceInfo = e.string();
                            break;
                        case 9:
                            n.firstChapterList && n.firstChapterList.length || (n.firstChapterList = []),
                            n.firstChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                            break;
                        case 10:
                            n.lastChapterList && n.lastChapterList.length || (n.lastChapterList = []),
                            n.lastChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                            break;
                        case 28:
                            n.chapterListGroup && n.chapterListGroup.length || (n.chapterListGroup = []),
                            n.chapterListGroup.push(_.Proto.TitleDetailView.ChapterGroup.decode(e, e.uint32()));
                            break;
                        case 11:
                            n.banners && n.banners.length || (n.banners = []),
                            n.banners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 12:
                            n.recommendedTitleList && n.recommendedTitleList.length || (n.recommendedTitleList = []),
                            n.recommendedTitleList.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        case 13:
                            n.sns = _.Proto.Sns.decode(e, e.uint32());
                            break;
                        case 14:
                            n.isSimulReleased = e.bool();
                            break;
                        case 15:
                            n.isSubscribed = e.bool();
                            break;
                        case 16:
                            n.rating = e.int32();
                            break;
                        case 17:
                            n.chaptersDescending = e.bool();
                            break;
                        case 18:
                            n.numberOfViews = e.uint32();
                            break;
                        case 19:
                            n.publisherItems && n.publisherItems.length || (n.publisherItems = []),
                            n.publisherItems.push(_.Proto.TitleDetailView.PublisherItem.decode(e, e.uint32()));
                            break;
                        case 20:
                            n.titleBanners && n.titleBanners.length || (n.titleBanners = []),
                            n.titleBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 21:
                            n.userTickets = _.Proto.UserTickets.decode(e, e.uint32());
                            break;
                        case 22:
                            n.ticketChapterList && n.ticketChapterList.length || (n.ticketChapterList = []),
                            n.ticketChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                            break;
                        case 23:
                            n.ticketTitleList && n.ticketTitleList.length || (n.ticketTitleList = []),
                            n.ticketTitleList.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        case 24:
                            n.hasChaptersBetween = e.bool();
                            break;
                        case 25:
                            n.publisherBanner = _.Proto.Banner.decode(e, e.uint32());
                            break;
                        case 26:
                            n.advertisement = _.Proto.AdNetworkList.decode(e, e.uint32());
                            break;
                        case 29:
                            n.freeViewDialogue = _.Proto.FreeViewDialogue.decode(e, e.uint32());
                            break;
                        case 30:
                            n.regionCode = e.string();
                            break;
                        case 27:
                            n.titleLanguages && n.titleLanguages.length || (n.titleLanguages = []),
                            n.titleLanguages.push(_.Proto.TitleDetailView.TitleLanguages.decode(e, e.uint32()));
                            break;
                        case 31:
                            n.tags && n.tags.length || (n.tags = []),
                            n.tags.push(_.Proto.Tag.decode(e, e.uint32()));
                            break;
                        case 32:
                            n.titleLabels = _.Proto.TitleDetailView.TitleLabels.decode(e, e.uint32());
                            break;
                        case 33:
                            n.userSubscription = _.Proto.Subscription.decode(e, e.uint32());
                            break;
                        case 34:
                            n.label = _.Proto.Label.decode(e, e.uint32());
                            break;
                        case 35:
                            n.isFirstTimeFree = e.bool();
                            break;
                        case 36:
                            n.metaInfo = _.Proto.MetaInfo.decode(e, e.uint32());
                            break;
                        case 37:
                            n.ratingPopup = _.Proto.Popup.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.TitleLabels = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.releaseSchedule = 0,
                    e.prototype.isSimulpub = !1,
                    e.prototype.planType = "",
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.releaseSchedule && Object.hasOwnProperty.call(e, "releaseSchedule") && t.uint32(8).int32(e.releaseSchedule),
                        null != e.isSimulpub && Object.hasOwnProperty.call(e, "isSimulpub") && t.uint32(16).bool(e.isSimulpub),
                        null != e.planType && Object.hasOwnProperty.call(e, "planType") && t.uint32(26).string(e.planType),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.TitleDetailView.TitleLabels;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.releaseSchedule = e.int32();
                                break;
                            case 2:
                                n.isSimulpub = e.bool();
                                break;
                            case 3:
                                n.planType = e.string();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.ReleaseSchedule = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "DISABLED"] = 0,
                    t[e[1] = "EVERYDAY"] = 1,
                    t[e[2] = "WEEKLY"] = 2,
                    t[e[3] = "BIWEEKLY"] = 3,
                    t[e[4] = "MONTHLY"] = 4,
                    t[e[5] = "BIMONTHLY"] = 5,
                    t[e[6] = "TRIMONTHLY"] = 6,
                    t[e[7] = "OTHER"] = 7,
                    t[e[8] = "COMPLETED"] = 8,
                    t
                }(),
                e.UpdateTiming = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "NOT_REGULARLY"] = 0,
                    t[e[1] = "MONDAY"] = 1,
                    t[e[2] = "TUESDAY"] = 2,
                    t[e[3] = "WEDNESDAY"] = 3,
                    t[e[4] = "THURSDAY"] = 4,
                    t[e[5] = "FRIDAY"] = 5,
                    t[e[6] = "SATURDAY"] = 6,
                    t[e[7] = "SUNDAY"] = 7,
                    t[e[8] = "DAY"] = 8,
                    t
                }(),
                e.Rating = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "ALLAGE"] = 0,
                    t[e[1] = "TEEN"] = 1,
                    t[e[2] = "TEENPLUS"] = 2,
                    t[e[3] = "MATURE"] = 3,
                    t
                }(),
                e.PublisherItem = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.banner = null,
                    e.prototype.publisherNews = null,
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.banner && Object.hasOwnProperty.call(e, "banner") && _.Proto.Banner.encode(e.banner, t.uint32(10).fork()).ldelim(),
                        null != e.publisherNews && Object.hasOwnProperty.call(e, "publisherNews") && _.Proto.PublisherNews.encode(e.publisherNews, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.TitleDetailView.PublisherItem;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.banner = _.Proto.Banner.decode(e, e.uint32());
                                break;
                            case 2:
                                n.publisherNews = _.Proto.PublisherNews.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.TitleLanguages = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.titleId = 0,
                    e.prototype.language = 0,
                    e.encode = function(e, t) {
                        return t || (t = v.create()),
                        null != e.titleId && Object.hasOwnProperty.call(e, "titleId") && t.uint32(8).uint32(e.titleId),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(16).int32(e.language),
                        t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.TitleDetailView.TitleLanguages;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.titleId = e.uint32();
                                break;
                            case 2:
                                n.language = e.int32();
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e.ChapterGroup = function() {
                    function e(e) {
                        if (this.firstChapterList = [],
                        this.midChapterList = [],
                        this.lastChapterList = [],
                        e)
                            for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                                null != e[t[a]] && (this[t[a]] = e[t[a]])
                    }
                    return e.prototype.chapterNumbers = "",
                    e.prototype.firstChapterList = y.emptyArray,
                    e.prototype.midChapterList = y.emptyArray,
                    e.prototype.lastChapterList = y.emptyArray,
                    e.encode = function(e, t) {
                        if (t || (t = v.create()),
                        null != e.chapterNumbers && Object.hasOwnProperty.call(e, "chapterNumbers") && t.uint32(10).string(e.chapterNumbers),
                        null != e.firstChapterList && e.firstChapterList.length)
                            for (var a = 0; a < e.firstChapterList.length; ++a)
                                _.Proto.Chapter.encode(e.firstChapterList[a], t.uint32(18).fork()).ldelim();
                        if (null != e.midChapterList && e.midChapterList.length)
                            for (a = 0; a < e.midChapterList.length; ++a)
                                _.Proto.Chapter.encode(e.midChapterList[a], t.uint32(26).fork()).ldelim();
                        if (null != e.lastChapterList && e.lastChapterList.length)
                            for (a = 0; a < e.lastChapterList.length; ++a)
                                _.Proto.Chapter.encode(e.lastChapterList[a], t.uint32(34).fork()).ldelim();
                        return t
                    }
                    ,
                    e.decode = function(e, t) {
                        e instanceof f || (e = f.create(e));
                        var a = void 0 === t ? e.len : e.pos + t
                          , n = new _.Proto.TitleDetailView.ChapterGroup;
                        while (e.pos < a) {
                            var i = e.uint32();
                            switch (i >>> 3) {
                            case 1:
                                n.chapterNumbers = e.string();
                                break;
                            case 2:
                                n.firstChapterList && n.firstChapterList.length || (n.firstChapterList = []),
                                n.firstChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                                break;
                            case 3:
                                n.midChapterList && n.midChapterList.length || (n.midChapterList = []),
                                n.midChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                                break;
                            case 4:
                                n.lastChapterList && n.lastChapterList.length || (n.lastChapterList = []),
                                n.lastChapterList.push(_.Proto.Chapter.decode(e, e.uint32()));
                                break;
                            default:
                                e.skipType(7 & i);
                                break
                            }
                        }
                        return n
                    }
                    ,
                    e
                }(),
                e
            }(),
            e.TitleRankingView = function() {
                function e(e) {
                    if (this.titles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.titles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.titles && e.titles.length)
                        for (var a = 0; a < e.titles.length; ++a)
                            _.Proto.Title.encode(e.titles[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleRankingView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.titles && n.titles.length || (n.titles = []),
                            n.titles.push(_.Proto.Title.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleRankingViewV2 = function() {
                function e(e) {
                    if (this.rankingBanners = [],
                    this.rankedTitles = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.rankingBanners = y.emptyArray,
                e.prototype.updatedTimeStamp = 0,
                e.prototype.rankedTitles = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.rankingBanners && e.rankingBanners.length)
                        for (var a = 0; a < e.rankingBanners.length; ++a)
                            _.Proto.Banner.encode(e.rankingBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.updatedTimeStamp && Object.hasOwnProperty.call(e, "updatedTimeStamp") && t.uint32(16).uint32(e.updatedTimeStamp),
                    null != e.rankedTitles && e.rankedTitles.length)
                        for (a = 0; a < e.rankedTitles.length; ++a)
                            _.Proto.TitleRankingGroup.encode(e.rankedTitles[a], t.uint32(26).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleRankingViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.rankingBanners && n.rankingBanners.length || (n.rankingBanners = []),
                            n.rankingBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.updatedTimeStamp = e.uint32();
                            break;
                        case 3:
                            n.rankedTitles && n.rankedTitles.length || (n.rankedTitles = []),
                            n.rankedTitles.push(_.Proto.TitleRankingGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleUpdatedView = function() {
                function e(e) {
                    if (this.latestTitle = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.latestTitle = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.latestTitle && e.latestTitle.length)
                        for (var a = 0; a < e.latestTitle.length; ++a)
                            _.Proto.TitleUpdated.encode(e.latestTitle[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleUpdatedView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.latestTitle && n.latestTitle.length || (n.latestTitle = []),
                            n.latestTitle.push(_.Proto.TitleUpdated.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.TitleUpdatedViewV2 = function() {
                function e(e) {
                    if (this.TitleUpdatedGroup = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.TitleUpdatedGroup = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.TitleUpdatedGroup && e.TitleUpdatedGroup.length)
                        for (var a = 0; a < e.TitleUpdatedGroup.length; ++a)
                            _.Proto.TitleUpdatedGroup.encode(e.TitleUpdatedGroup[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.TitleUpdatedViewV2;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.TitleUpdatedGroup && n.TitleUpdatedGroup.length || (n.TitleUpdatedGroup = []),
                            n.TitleUpdatedGroup.push(_.Proto.TitleUpdatedGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.UpdateProfileResultView = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.result = 0,
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UpdateProfileResultView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.result = e.int32();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Result = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "SUCCESS"] = 0,
                    t[e[1] = "DUPLICATED"] = 1,
                    t[e[2] = "NG_WORD"] = 2,
                    t
                }(),
                e
            }(),
            e.UpdatedTitleListView = function() {
                function e(e) {
                    if (this.groups = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.groups = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.groups && e.groups.length)
                        for (var a = 0; a < e.groups.length; ++a)
                            _.Proto.UpdatedTitleGroup.encode(e.groups[a], t.uint32(10).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.UpdatedTitleListView;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.groups && n.groups.length || (n.groups = []),
                            n.groups.push(_.Proto.UpdatedTitleGroup.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.ErrorResult = function() {
                function e(e) {
                    if (this.popups = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.action = 0,
                e.prototype.englishPopup = null,
                e.prototype.spanishPopup = null,
                e.prototype.popups = y.emptyArray,
                e.prototype.debugInfo = "",
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(8).int32(e.action),
                    null != e.englishPopup && Object.hasOwnProperty.call(e, "englishPopup") && _.Proto.Popup.OSDefault.encode(e.englishPopup, t.uint32(18).fork()).ldelim(),
                    null != e.spanishPopup && Object.hasOwnProperty.call(e, "spanishPopup") && _.Proto.Popup.OSDefault.encode(e.spanishPopup, t.uint32(26).fork()).ldelim(),
                    null != e.debugInfo && Object.hasOwnProperty.call(e, "debugInfo") && t.uint32(34).string(e.debugInfo),
                    null != e.popups && e.popups.length)
                        for (var a = 0; a < e.popups.length; ++a)
                            _.Proto.Popup.OSDefault.encode(e.popups[a], t.uint32(42).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.ErrorResult;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.action = e.int32();
                            break;
                        case 2:
                            n.englishPopup = _.Proto.Popup.OSDefault.decode(e, e.uint32());
                            break;
                        case 3:
                            n.spanishPopup = _.Proto.Popup.OSDefault.decode(e, e.uint32());
                            break;
                        case 5:
                            n.popups && n.popups.length || (n.popups = []),
                            n.popups.push(_.Proto.Popup.OSDefault.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.debugInfo = e.string();
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e.Action = function() {
                    var e = {}
                      , t = Object.create(e);
                    return t[e[0] = "DEFAULT"] = 0,
                    t[e[1] = "UNAUTHORIZED"] = 1,
                    t[e[2] = "MAINTENANCE"] = 2,
                    t[e[3] = "GEOIP_BLOCKING"] = 3,
                    t
                }(),
                e
            }(),
            e.Response = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                var t;
                return e.prototype.success = null,
                e.prototype.error = null,
                Object.defineProperty(e.prototype, "result", {
                    get: y.oneOfGetter(t = ["success", "error"]),
                    set: y.oneOfSetter(t)
                }),
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.success && Object.hasOwnProperty.call(e, "success") && _.Proto.SuccessResult.encode(e.success, t.uint32(10).fork()).ldelim(),
                    null != e.error && Object.hasOwnProperty.call(e, "error") && _.Proto.ErrorResult.encode(e.error, t.uint32(18).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.Response;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.success = _.Proto.SuccessResult.decode(e, e.uint32());
                            break;
                        case 2:
                            n.error = _.Proto.ErrorResult.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.SuccessResult = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                var t;
                return e.prototype.isFeaturedUpdated = !1,
                e.prototype.registerationData = null,
                e.prototype.homeViewV3 = null,
                e.prototype.updatedTitleListView = null,
                e.prototype.featuredTitlesView = null,
                e.prototype.featuredTitlesViewV2 = null,
                e.prototype.allTitlesView = null,
                e.prototype.allTitlesViewV2 = null,
                e.prototype.titleRankingView = null,
                e.prototype.subscribedTitlesView = null,
                e.prototype.titleDetailView = null,
                e.prototype.commentListView = null,
                e.prototype.mangaViewer = null,
                e.prototype.webHomeViewV4 = null,
                e.prototype.settingsViewV2 = null,
                e.prototype.profileSettingsView = null,
                e.prototype.updateProfileResultView = null,
                e.prototype.serviceAnnouncementsView = null,
                e.prototype.initialViewV2 = null,
                e.prototype.feedbackView = null,
                e.prototype.publisherNewsListView = null,
                e.prototype.questionnaireView = null,
                e.prototype.titleUpdatedView = null,
                e.prototype.titleListViewV2 = null,
                e.prototype.allTicketTitlesView = null,
                e.prototype.pushTokenView = null,
                e.prototype.allFreeTitlesView = null,
                e.prototype.labeledView = null,
                e.prototype.searchView = null,
                e.prototype.subscriptionView = null,
                e.prototype.titleRankingViewV2 = null,
                e.prototype.historyView = null,
                e.prototype.downloadableImagesView = null,
                e.prototype.introduceSubscription = null,
                e.prototype.favoriteTitlesView = null,
                e.prototype.languages = null,
                Object.defineProperty(e.prototype, "data", {
                    get: y.oneOfGetter(t = ["registerationData", "homeViewV3", "updatedTitleListView", "featuredTitlesView", "featuredTitlesViewV2", "allTitlesView", "allTitlesViewV2", "titleRankingView", "subscribedTitlesView", "titleDetailView", "commentListView", "mangaViewer", "webHomeViewV4", "settingsViewV2", "profileSettingsView", "updateProfileResultView", "serviceAnnouncementsView", "initialViewV2", "feedbackView", "publisherNewsListView", "questionnaireView", "titleUpdatedView", "titleListViewV2", "allTicketTitlesView", "pushTokenView", "allFreeTitlesView", "labeledView", "searchView", "subscriptionView", "titleRankingViewV2", "historyView", "downloadableImagesView", "introduceSubscription", "favoriteTitlesView"]),
                    set: y.oneOfSetter(t)
                }),
                e.encode = function(e, t) {
                    return t || (t = v.create()),
                    null != e.isFeaturedUpdated && Object.hasOwnProperty.call(e, "isFeaturedUpdated") && t.uint32(8).bool(e.isFeaturedUpdated),
                    null != e.registerationData && Object.hasOwnProperty.call(e, "registerationData") && _.Proto.RegistrationData.encode(e.registerationData, t.uint32(18).fork()).ldelim(),
                    null != e.featuredTitlesView && Object.hasOwnProperty.call(e, "featuredTitlesView") && _.Proto.FeaturedTitlesView.encode(e.featuredTitlesView, t.uint32(34).fork()).ldelim(),
                    null != e.allTitlesView && Object.hasOwnProperty.call(e, "allTitlesView") && _.Proto.AllTitlesView.encode(e.allTitlesView, t.uint32(42).fork()).ldelim(),
                    null != e.titleRankingView && Object.hasOwnProperty.call(e, "titleRankingView") && _.Proto.TitleRankingView.encode(e.titleRankingView, t.uint32(50).fork()).ldelim(),
                    null != e.subscribedTitlesView && Object.hasOwnProperty.call(e, "subscribedTitlesView") && _.Proto.SubscribedTitlesView.encode(e.subscribedTitlesView, t.uint32(58).fork()).ldelim(),
                    null != e.titleDetailView && Object.hasOwnProperty.call(e, "titleDetailView") && _.Proto.TitleDetailView.encode(e.titleDetailView, t.uint32(66).fork()).ldelim(),
                    null != e.commentListView && Object.hasOwnProperty.call(e, "commentListView") && _.Proto.CommentListView.encode(e.commentListView, t.uint32(74).fork()).ldelim(),
                    null != e.mangaViewer && Object.hasOwnProperty.call(e, "mangaViewer") && _.Proto.MangaViewer.encode(e.mangaViewer, t.uint32(82).fork()).ldelim(),
                    null != e.profileSettingsView && Object.hasOwnProperty.call(e, "profileSettingsView") && _.Proto.ProfileSettingsView.encode(e.profileSettingsView, t.uint32(106).fork()).ldelim(),
                    null != e.updateProfileResultView && Object.hasOwnProperty.call(e, "updateProfileResultView") && _.Proto.UpdateProfileResultView.encode(e.updateProfileResultView, t.uint32(114).fork()).ldelim(),
                    null != e.serviceAnnouncementsView && Object.hasOwnProperty.call(e, "serviceAnnouncementsView") && _.Proto.ServiceAnnouncementsView.encode(e.serviceAnnouncementsView, t.uint32(122).fork()).ldelim(),
                    null != e.feedbackView && Object.hasOwnProperty.call(e, "feedbackView") && _.Proto.FeedbackView.encode(e.feedbackView, t.uint32(138).fork()).ldelim(),
                    null != e.publisherNewsListView && Object.hasOwnProperty.call(e, "publisherNewsListView") && _.Proto.PublisherNewsListView.encode(e.publisherNewsListView, t.uint32(146).fork()).ldelim(),
                    null != e.questionnaireView && Object.hasOwnProperty.call(e, "questionnaireView") && _.Proto.QuestionnaireView.encode(e.questionnaireView, t.uint32(154).fork()).ldelim(),
                    null != e.titleUpdatedView && Object.hasOwnProperty.call(e, "titleUpdatedView") && _.Proto.TitleUpdatedView.encode(e.titleUpdatedView, t.uint32(162).fork()).ldelim(),
                    null != e.updatedTitleListView && Object.hasOwnProperty.call(e, "updatedTitleListView") && _.Proto.UpdatedTitleListView.encode(e.updatedTitleListView, t.uint32(178).fork()).ldelim(),
                    null != e.allTicketTitlesView && Object.hasOwnProperty.call(e, "allTicketTitlesView") && _.Proto.AllTicketTitlesView.encode(e.allTicketTitlesView, t.uint32(186).fork()).ldelim(),
                    null != e.homeViewV3 && Object.hasOwnProperty.call(e, "homeViewV3") && _.Proto.HomeViewV3.encode(e.homeViewV3, t.uint32(194).fork()).ldelim(),
                    null != e.allTitlesViewV2 && Object.hasOwnProperty.call(e, "allTitlesViewV2") && _.Proto.AllTitlesViewV2.encode(e.allTitlesViewV2, t.uint32(202).fork()).ldelim(),
                    null != e.settingsViewV2 && Object.hasOwnProperty.call(e, "settingsViewV2") && _.Proto.SettingsViewV2.encode(e.settingsViewV2, t.uint32(210).fork()).ldelim(),
                    null != e.titleListViewV2 && Object.hasOwnProperty.call(e, "titleListViewV2") && _.Proto.TitleUpdatedViewV2.encode(e.titleListViewV2, t.uint32(218).fork()).ldelim(),
                    null != e.initialViewV2 && Object.hasOwnProperty.call(e, "initialViewV2") && _.Proto.InitialViewV2.encode(e.initialViewV2, t.uint32(226).fork()).ldelim(),
                    null != e.languages && Object.hasOwnProperty.call(e, "languages") && _.Proto.Languages.encode(e.languages, t.uint32(234).fork()).ldelim(),
                    null != e.pushTokenView && Object.hasOwnProperty.call(e, "pushTokenView") && _.Proto.PushTokenView.encode(e.pushTokenView, t.uint32(258).fork()).ldelim(),
                    null != e.allFreeTitlesView && Object.hasOwnProperty.call(e, "allFreeTitlesView") && _.Proto.AllFreeTitlesView.encode(e.allFreeTitlesView, t.uint32(266).fork()).ldelim(),
                    null != e.labeledView && Object.hasOwnProperty.call(e, "labeledView") && _.Proto.LabeledView.encode(e.labeledView, t.uint32(274).fork()).ldelim(),
                    null != e.searchView && Object.hasOwnProperty.call(e, "searchView") && _.Proto.SearchView.encode(e.searchView, t.uint32(282).fork()).ldelim(),
                    null != e.subscriptionView && Object.hasOwnProperty.call(e, "subscriptionView") && _.Proto.SubscriptionView.encode(e.subscriptionView, t.uint32(290).fork()).ldelim(),
                    null != e.titleRankingViewV2 && Object.hasOwnProperty.call(e, "titleRankingViewV2") && _.Proto.TitleRankingViewV2.encode(e.titleRankingViewV2, t.uint32(298).fork()).ldelim(),
                    null != e.webHomeViewV4 && Object.hasOwnProperty.call(e, "webHomeViewV4") && _.Proto.WebHomeViewV4.encode(e.webHomeViewV4, t.uint32(306).fork()).ldelim(),
                    null != e.featuredTitlesViewV2 && Object.hasOwnProperty.call(e, "featuredTitlesViewV2") && _.Proto.FeaturedTitlesViewV2.encode(e.featuredTitlesViewV2, t.uint32(314).fork()).ldelim(),
                    null != e.historyView && Object.hasOwnProperty.call(e, "historyView") && _.Proto.HistoryView.encode(e.historyView, t.uint32(322).fork()).ldelim(),
                    null != e.downloadableImagesView && Object.hasOwnProperty.call(e, "downloadableImagesView") && _.Proto.DownloadableImagesView.encode(e.downloadableImagesView, t.uint32(330).fork()).ldelim(),
                    null != e.introduceSubscription && Object.hasOwnProperty.call(e, "introduceSubscription") && _.Proto.IntroduceSubscription.encode(e.introduceSubscription, t.uint32(338).fork()).ldelim(),
                    null != e.favoriteTitlesView && Object.hasOwnProperty.call(e, "favoriteTitlesView") && _.Proto.FavoriteTitlesView.encode(e.favoriteTitlesView, t.uint32(346).fork()).ldelim(),
                    t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.SuccessResult;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.isFeaturedUpdated = e.bool();
                            break;
                        case 2:
                            n.registerationData = _.Proto.RegistrationData.decode(e, e.uint32());
                            break;
                        case 24:
                            n.homeViewV3 = _.Proto.HomeViewV3.decode(e, e.uint32());
                            break;
                        case 22:
                            n.updatedTitleListView = _.Proto.UpdatedTitleListView.decode(e, e.uint32());
                            break;
                        case 4:
                            n.featuredTitlesView = _.Proto.FeaturedTitlesView.decode(e, e.uint32());
                            break;
                        case 39:
                            n.featuredTitlesViewV2 = _.Proto.FeaturedTitlesViewV2.decode(e, e.uint32());
                            break;
                        case 5:
                            n.allTitlesView = _.Proto.AllTitlesView.decode(e, e.uint32());
                            break;
                        case 25:
                            n.allTitlesViewV2 = _.Proto.AllTitlesViewV2.decode(e, e.uint32());
                            break;
                        case 6:
                            n.titleRankingView = _.Proto.TitleRankingView.decode(e, e.uint32());
                            break;
                        case 7:
                            n.subscribedTitlesView = _.Proto.SubscribedTitlesView.decode(e, e.uint32());
                            break;
                        case 8:
                            n.titleDetailView = _.Proto.TitleDetailView.decode(e, e.uint32());
                            break;
                        case 9:
                            n.commentListView = _.Proto.CommentListView.decode(e, e.uint32());
                            break;
                        case 10:
                            n.mangaViewer = _.Proto.MangaViewer.decode(e, e.uint32());
                            break;
                        case 38:
                            n.webHomeViewV4 = _.Proto.WebHomeViewV4.decode(e, e.uint32());
                            break;
                        case 26:
                            n.settingsViewV2 = _.Proto.SettingsViewV2.decode(e, e.uint32());
                            break;
                        case 13:
                            n.profileSettingsView = _.Proto.ProfileSettingsView.decode(e, e.uint32());
                            break;
                        case 14:
                            n.updateProfileResultView = _.Proto.UpdateProfileResultView.decode(e, e.uint32());
                            break;
                        case 15:
                            n.serviceAnnouncementsView = _.Proto.ServiceAnnouncementsView.decode(e, e.uint32());
                            break;
                        case 28:
                            n.initialViewV2 = _.Proto.InitialViewV2.decode(e, e.uint32());
                            break;
                        case 17:
                            n.feedbackView = _.Proto.FeedbackView.decode(e, e.uint32());
                            break;
                        case 18:
                            n.publisherNewsListView = _.Proto.PublisherNewsListView.decode(e, e.uint32());
                            break;
                        case 19:
                            n.questionnaireView = _.Proto.QuestionnaireView.decode(e, e.uint32());
                            break;
                        case 20:
                            n.titleUpdatedView = _.Proto.TitleUpdatedView.decode(e, e.uint32());
                            break;
                        case 27:
                            n.titleListViewV2 = _.Proto.TitleUpdatedViewV2.decode(e, e.uint32());
                            break;
                        case 23:
                            n.allTicketTitlesView = _.Proto.AllTicketTitlesView.decode(e, e.uint32());
                            break;
                        case 32:
                            n.pushTokenView = _.Proto.PushTokenView.decode(e, e.uint32());
                            break;
                        case 33:
                            n.allFreeTitlesView = _.Proto.AllFreeTitlesView.decode(e, e.uint32());
                            break;
                        case 34:
                            n.labeledView = _.Proto.LabeledView.decode(e, e.uint32());
                            break;
                        case 35:
                            n.searchView = _.Proto.SearchView.decode(e, e.uint32());
                            break;
                        case 36:
                            n.subscriptionView = _.Proto.SubscriptionView.decode(e, e.uint32());
                            break;
                        case 37:
                            n.titleRankingViewV2 = _.Proto.TitleRankingViewV2.decode(e, e.uint32());
                            break;
                        case 40:
                            n.historyView = _.Proto.HistoryView.decode(e, e.uint32());
                            break;
                        case 41:
                            n.downloadableImagesView = _.Proto.DownloadableImagesView.decode(e, e.uint32());
                            break;
                        case 42:
                            n.introduceSubscription = _.Proto.IntroduceSubscription.decode(e, e.uint32());
                            break;
                        case 43:
                            n.favoriteTitlesView = _.Proto.FavoriteTitlesView.decode(e, e.uint32());
                            break;
                        case 29:
                            n.languages = _.Proto.Languages.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e.WebHomeViewV4 = function() {
                function e(e) {
                    if (this.topBanners = [],
                    this.groups = [],
                    this.rankedTitles = [],
                    this.featuredTitleLists = [],
                    this.serviceAnnouncements = [],
                    e)
                        for (var t = Object.keys(e), a = 0; a < t.length; ++a)
                            null != e[t[a]] && (this[t[a]] = e[t[a]])
                }
                return e.prototype.topBanners = y.emptyArray,
                e.prototype.groups = y.emptyArray,
                e.prototype.rankedTitles = y.emptyArray,
                e.prototype.popup = null,
                e.prototype.featuredTitleLists = y.emptyArray,
                e.prototype.serviceAnnouncements = y.emptyArray,
                e.encode = function(e, t) {
                    if (t || (t = v.create()),
                    null != e.topBanners && e.topBanners.length)
                        for (var a = 0; a < e.topBanners.length; ++a)
                            _.Proto.Banner.encode(e.topBanners[a], t.uint32(10).fork()).ldelim();
                    if (null != e.groups && e.groups.length)
                        for (a = 0; a < e.groups.length; ++a)
                            _.Proto.UpdatedTitleV2Group.encode(e.groups[a], t.uint32(18).fork()).ldelim();
                    if (null != e.rankedTitles && e.rankedTitles.length)
                        for (a = 0; a < e.rankedTitles.length; ++a)
                            _.Proto.TitleRankingGroup.encode(e.rankedTitles[a], t.uint32(26).fork()).ldelim();
                    if (null != e.popup && Object.hasOwnProperty.call(e, "popup") && _.Proto.Popup.encode(e.popup, t.uint32(34).fork()).ldelim(),
                    null != e.featuredTitleLists && e.featuredTitleLists.length)
                        for (a = 0; a < e.featuredTitleLists.length; ++a)
                            _.Proto.TitleList.encode(e.featuredTitleLists[a], t.uint32(42).fork()).ldelim();
                    if (null != e.serviceAnnouncements && e.serviceAnnouncements.length)
                        for (a = 0; a < e.serviceAnnouncements.length; ++a)
                            _.Proto.ServiceAnnouncement.encode(e.serviceAnnouncements[a], t.uint32(50).fork()).ldelim();
                    return t
                }
                ,
                e.decode = function(e, t) {
                    e instanceof f || (e = f.create(e));
                    var a = void 0 === t ? e.len : e.pos + t
                      , n = new _.Proto.WebHomeViewV4;
                    while (e.pos < a) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                        case 1:
                            n.topBanners && n.topBanners.length || (n.topBanners = []),
                            n.topBanners.push(_.Proto.Banner.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.groups && n.groups.length || (n.groups = []),
                            n.groups.push(_.Proto.UpdatedTitleV2Group.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.rankedTitles && n.rankedTitles.length || (n.rankedTitles = []),
                            n.rankedTitles.push(_.Proto.TitleRankingGroup.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.popup = _.Proto.Popup.decode(e, e.uint32());
                            break;
                        case 5:
                            n.featuredTitleLists && n.featuredTitleLists.length || (n.featuredTitleLists = []),
                            n.featuredTitleLists.push(_.Proto.TitleList.decode(e, e.uint32()));
                            break;
                        case 6:
                            n.serviceAnnouncements && n.serviceAnnouncements.length || (n.serviceAnnouncements = []),
                            n.serviceAnnouncements.push(_.Proto.ServiceAnnouncement.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i);
                            break
                        }
                    }
                    return n
                }
                ,
                e
            }(),
            e
        }();
        a("a630"),
        a("3ca3"),
        a("ddb0"),
        a("94db");
        (function(e) {
            e[e["banner"] = 0] = "banner",
            e[e["image"] = 1] = "image",
            e[e["webview"] = 2] = "webview",
            e[e["last"] = 3] = "last",
            e[e["ad"] = 4] = "ad"
        }
        )(n || (n = {}));
        var T = a("9490")
          , k = a("24f8")
          , O = a("c437")
          , A = "SESSION_ID_KEY"
          , E = function() {
            function e() {
                Object(r["a"])(this, e),
                this.axios = m.a.create({
                    transformResponse: [function(e) {
                        return w.Response.decode(new Uint8Array(e))
                    }
                    ],
                    timeout: 6e4,
                    responseType: "arraybuffer",
                    withCredentials: !0,
                    httpAgent: new T["Agent"]({
                        keepAlive: !0
                    }),
                    httpsAgent: new k["Agent"]({
                        keepAlive: !0
                    }),
                    headers: {
                        "SESSION-TOKEN": e.getSessionId()
                    }
                }),
                this.axios.interceptors.response.use((function(e) {
                    return e.data.error ? Promise.reject(e.data) : e
                }
                )),
                this.axios.defaults.baseURL = "https://jumpg-webapi.tokyo-cdn.com/api"
            }
            return Object(o["a"])(e, [{
                key: "fetchLanguages",
                value: function() {
                    return this.get("/language")
                }
            }, {
                key: "fetchCommentList",
                value: function(e) {
                    return this.get("/comment", {
                        chapter_id: e
                    })
                }
            }, {
                key: "fetchSubscribeList",
                value: function() {
                    return this.get("/title_list/bookmark")
                }
            }, {
                key: "unSubscribeTitle",
                value: function(e) {
                    return this.delete("/title_list/bookmark", {
                        title_id: e
                    })
                }
            }, {
                key: "subscribeTitle",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "eng"
                      , n = {
                        title_id: e
                    };
                    return t && (n.push_token = t,
                    n.lang = a),
                    this.put("/title_list/bookmark", n)
                }
            }, {
                key: "fetchAllTitles",
                value: function() {
                    return this.get("/title_list/allV2")
                }
            }, {
                key: "fetchTitleDetail",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return this.get("/title_detailV3", {
                        title_id: e,
                        clang: t
                    })
                }
            }, {
                key: "fetchTopData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.get("/web/web_homeV4", {
                        lang: e,
                        viewer_mode: t,
                        clang: a
                    })
                }
            }, {
                key: "fetchViewerData",
                value: function(e) {
                    return this.get("/manga_viewer", {
                        chapter_id: e.chapterId,
                        split: "yes",
                        img_quality: e.quarity || "high",
                        viewer_mode: e.viewer_mode,
                        clang: e.clang
                    })
                }
            }, {
                key: "fetchServiceAnnouncementsData",
                value: function(e) {
                    return this.get("/web/announcement", {
                        lang: e
                    })
                }
            }, {
                key: "fetchRanking",
                value: function(e, t, a) {
                    return this.get("/title_list/rankingV2", {
                        lang: e,
                        type: t,
                        clang: a
                    })
                }
            }, {
                key: "fetchSearch",
                value: function(e, t, a) {
                    return this.get("/title_list/all_v3", {
                        type: e,
                        lang: t,
                        clang: a
                    })
                }
            }, {
                key: "fetchUpdated",
                value: function() {
                    return this.get("/title_list/updated")
                }
            }, {
                key: "feedback",
                value: function(e, t) {
                    return this.post("/web/contact", {
                        subject: e,
                        body: t
                    })
                }
            }, {
                key: "likeComments",
                value: function(e) {
                    return this.put("/comment_like", {
                        comment_id: e
                    })
                }
            }, {
                key: "unlikeComments",
                value: function(e) {
                    return this.delete("/comment_like", {
                        comment_id: e
                    })
                }
            }, {
                key: "publisherNewsList",
                value: function(e, t) {
                    return this.get("/publisher_news_list", {
                        publisher_id: e,
                        lang: t
                    })
                }
            }, {
                key: "bannerTapLog",
                value: function(e) {
                    return this.get("/banner_tap_log", {
                        banner_id: e
                    })
                }
            }, {
                key: "titleBannerTapLog",
                value: function(e, t, a, n, i) {
                    return this.get("/title_banner_tap_log", {
                        banner_id: e,
                        title_id: t,
                        banner_type: a,
                        location: n,
                        type: i
                    })
                }
            }, {
                key: "popupTapLog",
                value: function(e) {
                    return this.get("/popup_tap_log", {
                        popup_id: e
                    })
                }
            }, {
                key: "checkQuestionnaireStatus",
                value: function(e, t, a) {
                    var n = function() {
                        return "https://jumpg-api.tokyo-cdn.com/api"
                    }();
                    return this.get("/questionnaire", Object.assign({
                        questionnaire_key: e,
                        lang: t
                    }, a), n)
                }
            }, {
                key: "putQuestionnaire",
                value: function(e, t, a, n) {
                    var i = function() {
                        return "https://jumpg-api.tokyo-cdn.com/api"
                    }();
                    return this.put("/questionnaire", Object.assign({
                        questionnaire_key: e,
                        lang: t
                    }, n), a, i)
                }
            }, {
                key: "postToken",
                value: function(e, t) {
                    return this.post("/web_push_token", {
                        push_token: e,
                        lang: t
                    })
                }
            }, {
                key: "post",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.axios.post(e, a, {
                        params: t
                    })
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.axios.get(e, {
                        baseURL: a,
                        params: t
                    })
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.axios.delete(e, {
                        params: t
                    })
                }
            }, {
                key: "put",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , n = arguments.length > 3 ? arguments[3] : void 0;
                    return this.axios.put(e, a, {
                        baseURL: n,
                        params: t
                    })
                }
            }, {
                key: "fetchFeaturedList",
                value: function(e, t) {
                    return this.get("/featuredV2", {
                        lang: e,
                        clang: t
                    })
                }
            }], [{
                key: "instance",
                value: function() {
                    return this._instance || (this._instance = new e),
                    this._instance
                }
            }, {
                key: "getSessionId",
                value: function() {
                    if (localStorage.getItem(A))
                        return localStorage.getItem(A);
                    var e = O();
                    return localStorage.setItem(A, e),
                    e
                }
            }]),
            e
        }()
          , S = {
            eng: {
                description: ["Thank you for your loyal readership.", "We appreciate your participation in this survey.", "Your survey responses will just be used to help us make future decisions regarding Manga Plus, so please feel free to answer honestly.", " (Please only fill out the survey once per person)"],
                nothingErrorMessage: "Please choose the answer.",
                overErrorMessage: "please answer up to ",
                overErrorMessageLast: " answers.",
                finishMessage: {
                    title: "Survey completed!",
                    body: ["Thanks for completing our survey. Your feedback will be reviewed by MANGA Plus team and will be made use for future performances."]
                },
                alreadyMessage: {
                    title: "Survey already taken",
                    body: ["Thanks for your time. Your feedback has been already received and will be reviewed by MANGA Plus team."]
                },
                otherMessage: "Other"
            },
            esp: {
                description: ["Gracias por su constante apoyo como lector.", "En esta ocasión, queremos pedirle su colaboración con esta encuesta.", "La información proporcionada será tomada como referencia para posteriores proyectos y no será utilizada como desventaja para el lector.", "(Rogamos que no se haga más de una encuesta por persona)"],
                nothingErrorMessage: "Elija la respuesta.",
                overErrorMessage: "por favor responda hasta ",
                overErrorMessageLast: ".",
                finishMessage: {
                    title: "Encuesta completada!",
                    body: ["Muchas gracias por responder nuestra encuesta. Esperamos seguir contando con su apoyo en MANGA Plus."]
                },
                alreadyMessage: {
                    title: "Encuesta ya realizada.",
                    body: ["Muchas gracias por responder nuestra encuesta. Esperamos seguir contando con su apoyo en MANGA Plus."]
                },
                otherMessage: "Otros(respuesta libre)."
            },
            fra: {
                description: ["Merci pour votre fidèle lectorat.", "Nous apprécions votre participation à cette enquête.", "Les réponses à votre enquête ne seront utilisées que pour nous aider à prendre des décisions futures concernant Manga Plus, alors n'hésitez pas à répondre honnêtement.", "Veuillez ne remplir l'enquête qu'une seule fois par personne"],
                nothingErrorMessage: "Veuillez choisir la réponse.",
                overErrorMessage: "Veuillez sélectionner jusqu'à ",
                overErrorMessageLast: " réponses seulement",
                finishMessage: {
                    title: "Enquête terminée!",
                    body: ["Merci d'avoir répondu à notre enquête.  Vos commentaires seront examinés par l'équipe de MANGA Plus et seront utilisés pour les performances futures."]
                },
                alreadyMessage: {
                    title: "Enquête déjà réalisée",
                    body: ["Merci pour votre temps. Vos commentaires ont déjà été reçus et seront examinés par l'équipe de MANGA Plus."]
                },
                otherMessage: "Other"
            },
            tha: {
                description: ["ขอบคุณสำหรับผู้อ่านที่ภักดีของคุณ", "เราขอขอบคุณที่มีส่วนร่วมในการสำรวจนี้", "คำตอบแบบสำรวจของคุณจะถูกใช้เพื่อช่วยเราในการตัดสินใจในอนาคตเกี่ยวกับ Manga Plus ดังนั้นโปรดตอบอย่างตรงไปตรงมา", " (กรุณากรอกแบบสอบถามเพียงครั้งเดียวต่อท่าน)"],
                nothingErrorMessage: "กรุณาเลือกคำตอบ",
                overErrorMessage: "กรุณาเลือกไม่เกิน ",
                overErrorMessageLast: " คำตอบเท่านั้น",
                finishMessage: {
                    title: "การสำรวจเสร็จสิ้น!",
                    body: ["ขอขอบคุณที่กรอกแบบสำรวจของเรา ความคิดเห็นของคุณจะได้รับการตรวจสอบโดยทีมงาน MANGA Plus และจะใช้สำหรับการแสดงในอนาคต"]
                },
                alreadyMessage: {
                    title: "ทำแบบสำรวจไปแล้ว",
                    body: ["ขอบคุณที่สละเวลา เราได้รับข้อเสนอแนะของคุณแล้วและทีม MANGA Plus จะตรวจสอบอีกครั้ง"]
                },
                otherMessage: "Other"
            }
        }
          , L = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.errorMessage = {},
                e.freewordEnable = {},
                e.freewordText = {},
                e.isAnswered = null,
                e.isSubmitted = !1,
                e.canPost = !1,
                e.result = {},
                e.model = null,
                e.message = null,
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this
                      , t = this.$route.params.questionnaire_key
                      , a = this.$route.params.lang
                      , n = this.$route.query
                      , i = n.os
                      , r = n.app_ver
                      , o = n.os_ver
                      , s = n.secret;
                    "string" === typeof t && E.instance().checkQuestionnaireStatus(t, a, {
                        os: i,
                        app_ver: r,
                        os_ver: o,
                        secret: s
                    }).then((function(t) {
                        var a = e.$route.params.lang;
                        if (t.data.error)
                            e.$notify({
                                group: "foo",
                                type: "error",
                                title: "esp" === a ? t.data.error.spanishPopup.subject : t.data.error.englishPopup.subject,
                                text: "esp" === a ? t.data.error.spanishPopup.body : t.data.error.englishPopup.body
                            });
                        else if (t.data.success) {
                            e.isAnswered = t.data.success.questionnaireView.isAnswered;
                            var n = {
                                answers: t.data.success.questionnaireView.questions
                            };
                            n.answers.forEach((function(t, a) {
                                e.freewordText["q".concat(a + 1)] = "",
                                e.freewordEnable["q".concat(a + 1)] = !1
                            }
                            )),
                            e.model = n,
                            e.message = S[a],
                            e.validate()
                        }
                    }
                    ))
                }
            }, {
                key: "onClick",
                value: function() {
                    var e = this
                      , t = JSON.parse(JSON.stringify(this.result));
                    Object.keys(this.freewordText).forEach((function(a) {
                        e.freewordText[a] && (Array.isArray(t[a]) ? t[a].push(e.freewordText[a]) : t[a] = e.freewordText[a])
                    }
                    ));
                    var a = this.$route.params.questionnaire_key
                      , n = this.$route.query
                      , i = n.os
                      , r = n.app_ver
                      , o = n.os_ver
                      , s = n.secret
                      , l = this.$route.params.lang;
                    E.instance().putQuestionnaire(a, l, t, {
                        os: i,
                        app_ver: r,
                        os_ver: o,
                        secret: s
                    }).then((function(t) {
                        t.data.error ? e.$notify({
                            group: "foo",
                            type: "error",
                            title: "esp" === l ? t.data.error.spanishPopup.subject : t.data.error.englishPopup.subject,
                            text: "esp" === l ? t.data.error.spanishPopup.body : t.data.error.englishPopup.body
                        }) : e.isSubmitted = !0
                    }
                    ))
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    this.result[e.target.name] || (this.result[e.target.name] = []);
                    var t = this.result[e.target.name];
                    t.includes(e.target.value) ? this.result[e.target.name] = t.filter((function(t) {
                        return t !== e.target.value
                    }
                    )) : (t.push(e.target.value),
                    this.result[e.target.name] = t),
                    this.validate()
                }
            }, {
                key: "handleRadio",
                value: function(e) {
                    this.result[e.target.name] = e.target.value,
                    this.freewordEnable = Object.assign(Object.assign({}, this.freewordEnable), Object(i["a"])({}, e.target.name, !1)),
                    this.freewordText = Object.assign(Object.assign({}, this.freewordText), Object(i["a"])({}, e.target.name, "")),
                    this.validate()
                }
            }, {
                key: "handleFreeWordEnable",
                value: function(e) {
                    this.freewordEnable = Object.assign(Object.assign({}, this.freewordEnable), Object(i["a"])({}, e.target.name, e.target.checked)),
                    e.target.checked || (this.freewordText = Object.assign(Object.assign({}, this.freewordText), Object(i["a"])({}, e.target.name, ""))),
                    this.validate()
                }
            }, {
                key: "handleFreeword",
                value: function(e) {
                    this.freewordText[e.target.name] = e.target.value,
                    this.result[e.target.name] = e.target.value,
                    this.validate()
                }
            }, {
                key: "handleCheckboxFreeword",
                value: function(e) {
                    this.freewordText[e.target.name] = e.target.value,
                    this.validate()
                }
            }, {
                key: "validate",
                value: function() {
                    var e = this;
                    this.canPost = !0,
                    this.model.answers.forEach((function(t, a) {
                        var n, i, r, o = e.result["q".concat(a + 1)];
                        if (!t.canSkip) {
                            if (!o)
                                return void (e.canPost = !1);
                            var s = e.freewordEnable["q".concat(a + 1)]
                              , l = s ? o.length + 1 : o.length;
                            if ("string" === typeof o)
                                ;
                            else {
                                if (0 === l)
                                    return e.canPost = !1,
                                    void (e.errorMessage["q".concat(a + 1)] = null === (n = e.message) || void 0 === n ? void 0 : n.nothingErrorMessage);
                                if (l > t.numberOfChoices)
                                    return e.canPost = !1,
                                    void (e.errorMessage["q".concat(a + 1)] = (null === (i = e.message) || void 0 === i ? void 0 : i.overErrorMessage) + t.numberOfChoices.toString() + (null === (r = e.message) || void 0 === r ? void 0 : r.overErrorMessageLast))
                            }
                        }
                        e.errorMessage["q".concat(a + 1)] = void 0
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t, a, n, i, r, o = this;
                    return null === this.model ? e("p", ["loading"]) : !0 === this.isAnswered ? e("div", {
                        class: p.a.container
                    }, [e("div", {
                        class: p.a.header
                    }, [e("div", {
                        class: p.a.check_mark
                    }), e("p", {
                        class: p.a.header__text
                    }, [null === (t = this.message) || void 0 === t ? void 0 : t.alreadyMessage.title])]), null === (a = this.message) || void 0 === a ? void 0 : a.alreadyMessage.body.map((function(t) {
                        return e("p", {
                            class: p.a.finished__body
                        }, [t])
                    }
                    ))]) : !0 === this.isSubmitted ? e("div", {
                        class: p.a.container
                    }, [e("div", {
                        class: p.a.header
                    }, [e("div", {
                        class: p.a.check_mark
                    }), e("p", {
                        class: p.a.header__text
                    }, [null === (n = this.message) || void 0 === n ? void 0 : n.finishMessage.title])]), null === (i = this.message) || void 0 === i ? void 0 : i.finishMessage.body.map((function(t) {
                        return e("p", {
                            class: p.a.finished__body
                        }, [t])
                    }
                    ))]) : e("div", {
                        class: p.a.container
                    }, [e("p", {
                        class: p.a.description
                    }, [null === (r = this.message) || void 0 === r ? void 0 : r.description.map((function(t) {
                        return e("vc-fragment", [t, e("br")])
                    }
                    ))]), this.model.answers.map((function(t, a) {
                        return e("div", {
                            class: p.a.questionnaire
                        }, [e("div", {
                            class: p.a.questionnaire_item
                        }, [e("p", {
                            class: p.a.questionnaire_number
                        }, [a + 1, "."]), !1 === t.canSkip ? e("p", {
                            class: p.a.questionnaire_title_required
                        }, [t.description]) : e("p", {
                            class: p.a.questionnaire_title
                        }, [t.description])]), o.errorMessage["q".concat(a + 1)] && e("p", {
                            class: p.a.error_message
                        }, [o.errorMessage["q".concat(a + 1)]]), 1 === t.numberOfChoices ? e("div", {
                            class: p.a.radios
                        }, [t.selection.map((function(t, n) {
                            return e("vc-fragment", [e("input", {
                                attrs: {
                                    id: "q".concat(a + 1, "_").concat(n),
                                    name: "q".concat(a + 1),
                                    type: "radio"
                                },
                                domProps: {
                                    value: t
                                },
                                class: p.a.radio,
                                on: {
                                    change: o.handleRadio
                                }
                            }), e("label", {
                                attrs: {
                                    for: "q".concat(a + 1, "_").concat(n)
                                },
                                class: p.a.label
                            }, [t])])
                        }
                        )), !t.hideFreeform && e("vc-fragment", [e("input", {
                            attrs: {
                                id: "q".concat(a + 1, "_other"),
                                name: "q".concat(a + 1),
                                type: "radio"
                            },
                            class: p.a.radio,
                            on: {
                                change: o.handleFreeWordEnable
                            }
                        }), e("label", {
                            attrs: {
                                for: "q".concat(a + 1, "_other")
                            },
                            class: p.a.label
                        }, [t.freeForm]), e("textarea", {
                            class: p.a.textarea,
                            attrs: {
                                disabled: !o.freewordEnable["q".concat(a + 1)],
                                name: "q".concat(a + 1),
                                maxlength: 100
                            },
                            domProps: {
                                value: o.freewordText["q".concat(a + 1)]
                            },
                            on: {
                                change: o.handleFreeword
                            }
                        })])]) : e("div", {
                            class: p.a.choices
                        }, [t.selection.map((function(t, n) {
                            return e("vc-fragment", [e("input", {
                                attrs: {
                                    id: "q".concat(a + 1, "_").concat(n),
                                    name: "q".concat(a + 1),
                                    type: "checkbox"
                                },
                                domProps: {
                                    value: t
                                },
                                class: p.a.checkbox,
                                on: {
                                    change: o.handleChange
                                }
                            }), e("label", {
                                attrs: {
                                    for: "q".concat(a + 1, "_").concat(n)
                                },
                                class: p.a.label
                            }, [t])])
                        }
                        )), !t.hideFreeform && e("vc-fragment", [e("input", {
                            attrs: {
                                id: "q".concat(a + 1, "_other"),
                                name: "q".concat(a + 1),
                                type: "checkbox"
                            },
                            class: p.a.checkbox,
                            on: {
                                change: o.handleFreeWordEnable
                            }
                        }), e("label", {
                            attrs: {
                                for: "q".concat(a + 1, "_other")
                            },
                            class: p.a.label
                        }, [t.freeForm]), e("textarea", {
                            class: p.a.textarea,
                            attrs: {
                                disabled: !o.freewordEnable["q".concat(a + 1)],
                                name: "q".concat(a + 1),
                                maxlength: 100
                            },
                            domProps: {
                                value: o.freewordText["q".concat(a + 1)]
                            },
                            on: {
                                change: o.handleCheckboxFreeword
                            }
                        })])])])
                    }
                    )), e("button", {
                        class: p.a.button,
                        on: {
                            click: this.onClick
                        },
                        attrs: {
                            disabled: !this.canPost
                        }
                    }, ["submit"])])
                }
            }]),
            a
        }(u["c"]);
        L = Object(c["b"])([Object(u["a"])({
            components: {
                "vc-fragment": h
            }
        })], L);
        var C = a("2b0e")
          , P = (a("9f29"),
        a("2fe1"));
        P["b"].registerHooks(["beforeRouteEnter", "beforeRouteLeave", "beforeRouteUpdate"]);
        var I = a("8c4f5")
          , N = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("notifications", {
                attrs: {
                    group: "foo"
                }
            }), a("router-view", {
                key: e.$route.fullPath
            })], 1)
        }
          , j = []
          , D = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return a
        }(u["c"]);
        D = Object(c["b"])([u["a"]], D);
        var V = D
          , R = V
          , U = (a("034f"),
        a("2877"))
          , M = Object(U["a"])(R, N, j, !1, null, null, null)
          , H = M.exports
          , x = (a("7db0"),
        a("96cf"),
        a("ec71"))
          , B = a.n(x)
          , G = (a("4ec9"),
        a("53ca"))
          , F = new Map([[w.Language.ENGLISH, "eng"], [w.Language.FRENCH, "fra"], [w.Language.INDONESIAN, "ind"], [w.Language.PORTUGUESE_BR, "ptb"], [w.Language.RUSSIAN, "rus"], [w.Language.SPANISH, "esp"], [w.Language.THAI, "tha"], [w.Language.VIETNAMESE, "vie"], [w.Language.GERMAN, "deu"]])
          , W = new Map([[w.Language.ENGLISH, "en"], [w.Language.FRENCH, "fr"], [w.Language.INDONESIAN, "id"], [w.Language.PORTUGUESE_BR, "pt"], [w.Language.RUSSIAN, "ru"], [w.Language.SPANISH, "es"], [w.Language.THAI, "th"], [w.Language.VIETNAMESE, "vi"], [w.Language.GERMAN, "de"]])
          , Y = new Map([[w.Language.ENGLISH, "English"], [w.Language.FRENCH, "Français"], [w.Language.INDONESIAN, "Bahasa (IND)"], [w.Language.PORTUGUESE_BR, "Português (BR)"], [w.Language.RUSSIAN, "Русский"], [w.Language.SPANISH, "Español"], [w.Language.THAI, "ภาษาไทย"], [w.Language.VIETNAMESE, "Tiếng Việt"], [w.Language.GERMAN, "Deutsch"]])
          , $ = function(e) {
            if ("number" === typeof e)
                return e;
            switch (e) {
            case "ENGLISH":
                return w.Language.ENGLISH;
            case "SPANISH":
                return w.Language.SPANISH;
            case "THAI":
                return w.Language.THAI;
            case "INDONESIAN":
                return w.Language.INDONESIAN;
            case "RUSSIAN":
                return w.Language.RUSSIAN;
            case "PORTUGUESE_BR":
                return w.Language.PORTUGUESE_BR;
            case "FRENCH":
                return w.Language.FRENCH;
            case "VIETNAMESE":
                return w.Language.VIETNAMESE;
            case "GERMAN":
                return w.Language.GERMAN;
            default:
                return w.Language.ENGLISH
            }
        }
          , K = function(e) {
            return Y.get(e)
        }
          , q = function(e) {
            return W.get(e)
        }
          , z = function(e) {
            return F.get(e)
        }
          , Q = function(e) {
            var t = w.Language.ENGLISH;
            return W.forEach((function(a, n) {
                a === e && (t = n)
            }
            )),
            t
        }
          , Z = function(e, t) {
            var a = J(e, t.map((function(e) {
                return e.title
            }
            )));
            return t.find((function(e) {
                return e.title === a
            }
            ))
        }
          , J = function(e, t) {
            var a = t.find((function(t) {
                return t.language === e.serviceLang
            }
            ));
            if (a)
                return a;
            for (var n = function(n) {
                var i = e.contentLangs[n];
                if (a = t.find((function(e) {
                    return e.language === i
                }
                )),
                a)
                    return {
                        v: a
                    }
            }, i = 0; i < e.contentLangs.length; i++) {
                var r = n(i);
                if ("object" === Object(G["a"])(r))
                    return r.v
            }
            return t[0]
        }
          , X = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "onClickRemove",
                value: function() {
                    this.$emit("remove")
                }
            }, {
                key: "onClickUndo",
                value: function() {
                    this.$emit("undo")
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.title.isRemoved ? e("p", {
                        class: B.a.btn,
                        on: {
                            click: function() {
                                return t.onClickUndo()
                            }
                        }
                    }, [this.$t("UNDO")]) : e("p", {
                        class: B.a.btn,
                        on: {
                            click: function() {
                                return t.onClickRemove()
                            }
                        }
                    }, [this.$t("REMOVE")]);
                    return e("div", {
                        class: B.a.contents
                    }, [e("div", {
                        class: B.a.lang
                    }, [e("span", {
                        class: this.title.language === this.$store.state.language.serviceLang ? B.a.active : "",
                        attrs: {
                            title: K(this.title.language)
                        }
                    }, [q(this.title.language)])]), e("div", {
                        class: B.a.imgWrapper
                    }, [e("p", {
                        directives: [{
                            name: "show",
                            value: this.title.isRemoved
                        }],
                        class: B.a.removedMessage
                    }, [this.$t("REMOVED")]), e("router-link", {
                        attrs: {
                            to: "/titles/" + this.title.titleId,
                            disabled: this.title.isRemoved
                        }
                    }, [e("img", {
                        directives: [{
                            name: "lazy",
                            value: this.title.portraitImageUrl
                        }],
                        key: this.title.titleId,
                        class: this.title.isRemoved ? B.a.removed + " " + B.a.image : B.a.image,
                        attrs: {
                            alt: "image"
                        }
                    })]), a])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], X.prototype, "title", void 0),
        X = Object(c["b"])([Object(P["b"])({
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/comments"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], X);
        var ee = X
          , te = a("6c9f")
          , ae = a.n(te)
          , ne = a("2f62")
          , ie = a("260b")
          , re = a("741f")
          , oe = {
            apiKey: "AIzaSyCta8xG9kaqsFxY0-tZ48RdeoXAlu09uDg",
            authDomain: "mangaplus-f14c0.firebaseapp.com",
            databaseURL: "https://mangaplus-f14c0.firebaseio.com",
            projectId: "mangaplus-f14c0",
            storageBucket: "mangaplus-f14c0.appspot.com",
            messagingSenderId: "788946087325",
            appId: "1:788946087325:web:9dd85d3ed15cbbef8cd374",
            measurementId: "G-7BKVGBR435"
        }
          , se = "BMh0v6SFscqXfGhk7-Pm0ZOEsig9TBlhjOmYLVVs3zFizzlX5y6rJWN7XRKfHDDbP24uJUoPkCGlDkswrjFOjjE";
        var le = Object(ie["a"])(oe)
          , ce = !1;
        function ue() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , a = Object(re["a"])(le);
            return navigator.serviceWorker.getRegistrations().then((function(n) {
                return Object(c["a"])(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var i, r, o, s, l, c, u;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(n.length < 1)) {
                                    e.next = 3;
                                    break
                                }
                                return console.warn("No SW found for FCM"),
                                e.abrupt("return", Promise.resolve(""));
                            case 3:
                                return o = n[0],
                                ce || (Object(re["d"])(a, (function(e) {
                                    console.log("Received foreground FCM message ", e)
                                }
                                )),
                                ce = !0),
                                e.prev = 6,
                                e.next = 9,
                                Object(re["b"])(a, {
                                    vapidKey: se,
                                    serviceWorkerRegistration: o
                                });
                            case 9:
                                if (s = e.sent,
                                !s) {
                                    e.next = 19;
                                    break
                                }
                                return console.log("FCM Token:", s),
                                l = parseInt(null !== (i = localStorage.getItem("last_updated_token")) && void 0 !== i ? i : "0"),
                                c = Math.round(Date.now() / 1e3),
                                t && (0 === l || c - l > 604800) && (u = null !== (r = localStorage.getItem("service")) && void 0 !== r ? r : "en",
                                E.instance().postToken(s, z(Q(u))).then((function(e) {
                                    console.log("Updated FCM token", e.data.success.pushTokenView),
                                    localStorage.setItem("last_updated_token", c.toString())
                                }
                                ))),
                                l || localStorage.setItem("last_updated_token", c.toString()),
                                e.abrupt("return", s);
                            case 19:
                                console.log("No registration token available. Request permission to generate one.");
                            case 20:
                                e.next = 25;
                                break;
                            case 22:
                                e.prev = 22,
                                e.t0 = e["catch"](6),
                                console.log("An error occurred while retrieving token:", e.t0);
                            case 25:
                                return e.abrupt("return", "");
                            case 26:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[6, 22]])
                }
                )))
            }
            ))
        }
        var de = function() {
            var e = window.localStorage.getItem("service");
            if (2 === (null === e || void 0 === e ? void 0 : e.length))
                return Q(e);
            var t = navigator.language.split("-")[0];
            return Q(t)
        }()
          , pe = function() {
            var e = window.localStorage.getItem("contentsV2");
            if (e)
                try {
                    return JSON.parse(e).map((function(e) {
                        return Q(e)
                    }
                    ))
                } catch (i) {
                    return []
                }
            else {
                var t = window.localStorage.getItem("contents");
                if (!t)
                    return [w.Language.ENGLISH];
                try {
                    var a = JSON.parse(t)
                      , n = [];
                    a.es && n.push(w.Language.SPANISH),
                    (0 === n.length || a.en) && n.push(w.Language.ENGLISH),
                    window.localStorage.setItem("contentsV2", JSON.stringify(n.map((function(e) {
                        return q(e)
                    }
                    )))),
                    window.localStorage.removeItem("contents")
                } catch (i) {
                    return []
                }
            }
        }()
          , he = {
            state: {
                isShowSetting: !1,
                serviceLang: de,
                contentLangs: pe,
                availableLanguages: [],
                $app: null
            },
            mutations: {
                toggleSettingModal: function(e) {
                    e.isShowSetting = !e.isShowSetting
                },
                setAvailableLanguages: function(e, t) {
                    e.availableLanguages = t.availableLanguages,
                    window.localStorage.getItem("service") || (e.serviceLang = t.defaultUiLanguage,
                    window.localStorage.setItem("service", q(t.defaultUiLanguage))),
                    0 === e.contentLangs.length && [t.defaultContentLanguageOne, t.defaultContentLanguageTwo, t.defaultContentLanguageThree].forEach((function(t) {
                        e.contentLangs.includes(t) || e.contentLangs.push(t)
                    }
                    )),
                    e.$app.$i18n.locale = q(e.serviceLang)
                },
                setServiceStatus: function(e, t) {
                    var a = Q(t);
                    "Notification"in window && "granted" === (null === Notification || void 0 === Notification ? void 0 : Notification.permission) && ue().then((function(e) {
                        e ? E.instance().postToken(e, z(a)).then((function(e) {
                            console.log("PTV", e.data.success.pushTokenView)
                        }
                        )) : console.log("No token")
                    }
                    )),
                    e.serviceLang = a,
                    e.contentLangs = [a],
                    window.localStorage.setItem("service", q(a)),
                    window.localStorage.setItem("contentsV2", JSON.stringify(e.contentLangs.map((function(e) {
                        return q(e)
                    }
                    ))))
                },
                setContentsStatus: function(e, t) {
                    var a = Q(t);
                    e.contentLangs.includes(a) ? e.contentLangs = e.contentLangs.filter((function(e) {
                        return e !== a
                    }
                    )) : e.contentLangs.push(a),
                    window.localStorage.setItem("contentsV2", JSON.stringify(e.contentLangs.map((function(e) {
                        return q(e)
                    }
                    ))))
                },
                hideSettingModal: function(e) {
                    e.isShowSetting = !1
                }
            },
            actions: {
                updateServiceLanguage: function(e, t) {
                    var a = e.commit
                      , n = e.dispatch;
                    a("setServiceStatus", t),
                    n("home/fetchData"),
                    n("featured/fetchData")
                },
                fetchLanguageData: function(e) {
                    e.dispatch;
                    var t = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchLanguages();
                                case 2:
                                    a = e.sent,
                                    t("setAvailableLanguages", a.data.success.languages);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , ge = he
          , me = w.WebHomeViewV4
          , be = "VIEWED_POPUP"
          , fe = {
            namespaced: !0,
            state: {
                model: new me({
                    topBanners: [],
                    rankedTitles: [],
                    groups: [],
                    popup: void 0
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n, i, r, o, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchTopData(z(a.language.serviceLang), localStorage.getItem("viewerMode"), pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    i = n.data.success.webHomeViewV4,
                                    r = JSON.parse(localStorage.getItem(be) || "[]"),
                                    o = function() {
                                        var e, t;
                                        return (null === (e = i.popup) || void 0 === e ? void 0 : e.popupId) && !r.includes(null === (t = i.popup) || void 0 === t ? void 0 : t.popupId) ? (r.push(i.popup.popupId),
                                        localStorage.setItem(be, JSON.stringify(r)),
                                        i.popup) : void 0
                                    }(),
                                    s = Object.assign(Object.assign({}, i), {
                                        popup: o
                                    }),
                                    t("setModel", s);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , ve = fe
          , ye = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return Object(r["a"])(this, a),
                n = t.call(this, e),
                n.isRemoved = i,
                n
            }
            return a
        }(w.Title)
          , _e = {
            namespaced: !0,
            state: {
                titles: [],
                loading: !0,
                shouldUpdate: !0
            },
            mutations: {
                setModel: function(e, t) {
                    e.titles = t,
                    e.shouldUpdate = !1
                },
                finished: function(e) {
                    e.loading = !1
                },
                remove: function(e, t) {
                    e.titles[t].isRemoved = !0
                },
                undo: function(e, t) {
                    e.titles[t].isRemoved = !1
                },
                shouldUpdate: function(e) {
                    e.shouldUpdate = !0
                },
                start: function(e) {
                    e.loading = !0
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var a, n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t("start"),
                                    e.next = 3,
                                    E.instance().fetchSubscribeList();
                                case 3:
                                    a = e.sent,
                                    n = a.data.success.subscribedTitlesView.titles.map((function(e) {
                                        return new ye(e)
                                    }
                                    )),
                                    t("setAvailableLanguages", a.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n),
                                    t("finished");
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                subscribe: function(e, t) {
                    var a = e.commit
                      , n = e.state;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().subscribeTitle(n.titles[t].titleId);
                                case 2:
                                    e.sent,
                                    a("undo", t),
                                    a("shouldUpdate");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                unsubscribe: function(e, t) {
                    var a = e.commit
                      , n = e.state;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().unSubscribeTitle(n.titles[t].titleId);
                                case 2:
                                    e.sent,
                                    a("remove", t),
                                    a("shouldUpdate");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , we = _e
          , Te = w.FeaturedTitlesViewV2
          , ke = {
            namespaced: !0,
            state: {
                model: new Te({
                    topSearchBanners: [],
                    contents: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchFeaturedList(z(a.language.serviceLang), pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n.data.success.featuredTitlesViewV2);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Oe = ke
          , Ae = w.AllTitlesViewV2
          , Ee = {
            namespaced: !0,
            state: {
                model: new Ae({
                    AllTitlesGroup: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchAllTitles();
                                case 2:
                                    a = e.sent,
                                    t("setAvailableLanguages", a.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", a.data.success.allTitlesViewV2);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Se = Ee
          , Le = w.TitleRankingViewV2
          , Ce = {
            namespaced: !0,
            state: {
                model: new Le({})
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState)
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hottest";
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchRanking(z(a.language.serviceLang), n, pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    i = e.sent,
                                    t("setAvailableLanguages", i.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", i.data.success.titleRankingViewV2);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Pe = Ce
          , Ie = w.TitleUpdatedView
          , Ne = {
            namespaced: !0,
            state: {
                model: new Ie({
                    latestTitle: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchUpdated();
                                case 2:
                                    a = e.sent,
                                    t("setAvailableLanguages", a.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", a.data.success.titleUpdatedView);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , je = Ne
          , De = w.ServiceAnnouncementsView
          , Ve = {
            namespaced: !0,
            state: {
                model: new De({
                    serviceAnnouncements: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchServiceAnnouncementsData(z(a.language.serviceLang));
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n.data.success.serviceAnnouncementsView);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                fetchWebviewData: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rootState;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchServiceAnnouncementsData(t);
                                case 2:
                                    n = e.sent,
                                    a("setModel", n.data.success.serviceAnnouncementsView);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Re = Ve
          , Ue = {
            namespaced: !0,
            state: {
                model: {}
            },
            mutations: {
                setModel: function(e, t) {
                    C["default"].set(e.model, t.id, t.model)
                },
                like: function(e, t) {
                    if (e.model) {
                        var a = e.model[t.chapterId].comments.find((function(e) {
                            return e.id === t.commentId
                        }
                        ));
                        a.alreadyLiked = !0,
                        a.numberOfLikes += 1
                    }
                },
                unlike: function(e, t) {
                    if (e.model) {
                        var a = e.model[t.chapterId].comments.find((function(e) {
                            return e.id === t.commentId
                        }
                        ));
                        a.alreadyLiked = !1,
                        a.numberOfLikes -= 1
                    }
                }
            },
            actions: {
                fetchData: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchCommentList(t);
                                case 2:
                                    n = e.sent,
                                    a("setModel", {
                                        id: t,
                                        model: n.data.success.commentListView
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                like: function(e, t) {
                    var a = e.commit;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().likeComments(t.commentId);
                                case 2:
                                    e.sent,
                                    a("like", {
                                        chapterId: t.chapterId,
                                        commentId: t.commentId
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                unlike: function(e, t) {
                    var a = e.commit;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().unlikeComments(t.commentId);
                                case 2:
                                    e.sent,
                                    a("unlike", {
                                        chapterId: t.chapterId,
                                        commentId: t.commentId
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Me = Ue
          , He = {
            namespaced: !0,
            state: {
                model: {},
                isLoading: !1
            },
            mutations: {
                setModel: function(e, t) {
                    u["c"].set(e.model, t.id, t.model)
                },
                subscribe: function(e, t) {
                    var a = e.model[t];
                    a.isSubscribed = !0,
                    u["c"].set(e.model, t, a)
                },
                unsubscribe: function(e, t) {
                    var a = e.model[t];
                    a.isSubscribed = !1,
                    u["c"].set(e.model, t, a)
                },
                setLoadingState: function(e, t) {
                    e.isLoading = t
                }
            },
            actions: {
                fetchData: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchTitleDetail(t, pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    a("setModel", {
                                        id: t,
                                        model: n.data.success.titleDetailView
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                subscribe: function(e, t) {
                    var a = e.commit;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a("setLoadingState", !0),
                                    e.next = 3,
                                    E.instance().subscribeTitle(t);
                                case 3:
                                    e.sent,
                                    a("subscribe", t),
                                    a("favorited/shouldUpdate", null, {
                                        root: !0
                                    }),
                                    a("setLoadingState", !1);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                unsubscribe: function(e, t) {
                    var a = e.commit;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a("setLoadingState", !0),
                                    e.next = 3,
                                    E.instance().unSubscribeTitle(t);
                                case 3:
                                    e.sent,
                                    a("unsubscribe", t),
                                    a("favorited/shouldUpdate", null, {
                                        root: !0
                                    }),
                                    a("setLoadingState", !1);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , xe = He
          , Be = {
            namespaced: !0,
            state: {
                model: {}
            },
            mutations: {
                setModel: function(e, t) {
                    var a = t.model.pages[t.model.pages.length - 1].lastPage
                      , n = {
                        model: t.model,
                        lastPage: a,
                        isSubscribed: a.isSubscribed
                    };
                    u["c"].set(e.model, t.id, n)
                },
                subscribe: function(e, t) {
                    var a = e.model[t];
                    a.isSubscribed = !0,
                    u["c"].set(e.model, t, a)
                },
                unsubscribe: function(e, t) {
                    var a = e.model[t];
                    a.isSubscribed = !1,
                    u["c"].set(e.model, t, a)
                }
            },
            actions: {
                fetchData: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rootGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchViewerData({
                                        chapterId: t,
                                        quarity: "high",
                                        viewer_mode: localStorage.getItem("viewerMode"),
                                        clang: pe.map((function(e) {
                                            return F.get(e)
                                        }
                                        )).toString()
                                    });
                                case 2:
                                    n = e.sent,
                                    a("setModel", {
                                        id: t,
                                        model: n.data.success.mangaViewer
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                subscribe: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rooteGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().subscribeTitle(t.titleId);
                                case 2:
                                    a("subscribe", t.chapterId);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                },
                unsubscribe: function(e, t) {
                    e.dispatch;
                    var a = e.commit;
                    e.getters,
                    e.rooteGetters;
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().unSubscribeTitle(t.titleId);
                                case 2:
                                    a("unsubscribe", t.chapterId);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Ge = Be
          , Fe = {
            namespaced: !0,
            state: {
                errorAction: null
            },
            mutations: {
                setError: function(e, t) {
                    e.errorAction = t
                }
            },
            actions: {
                handleError: function(e, t) {
                    var a = e.commit;
                    a("setError", t)
                },
                clearError: function(e) {
                    var t = e.commit;
                    t("setError", null)
                }
            }
        }
          , We = Fe
          , Ye = w.SearchView
          , $e = {
            namespaced: !0,
            state: {
                model: new Ye({
                    allTags: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchSearch("serializing", z(a.language.serviceLang), pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n.data.success.searchView);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Ke = $e
          , qe = w.SearchView
          , ze = {
            namespaced: !0,
            state: {
                model: new qe({
                    allTags: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchSearch("completed", z(a.language.serviceLang), pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n.data.success.searchView);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Qe = ze
          , Ze = w.SearchView
          , Je = {
            namespaced: !0,
            state: {
                model: new Ze({
                    allTags: []
                })
            },
            mutations: {
                setModel: function(e, t) {
                    e.model = t
                }
            },
            actions: {
                fetchData: function(e) {
                    e.dispatch;
                    var t = e.commit
                      , a = (e.getters,
                    e.rootState);
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    E.instance().fetchSearch("one-shot", z(a.language.serviceLang), pe.map((function(e) {
                                        return F.get(e)
                                    }
                                    )).toString());
                                case 2:
                                    n = e.sent,
                                    t("setAvailableLanguages", n.data.success.languages, {
                                        root: !0
                                    }),
                                    t("setModel", n.data.success.searchView);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }
        }
          , Xe = Je;
        u["c"].use(ne["a"]);
        var et = new ne["a"].Store({
            modules: {
                language: ge,
                home: ve,
                favorited: we,
                featured: Oe,
                mangaList: Se,
                ranking: Pe,
                ongoing: Ke,
                completed: Qe,
                oneShot: Xe,
                updated: je,
                announcements: Re,
                comments: Me,
                detail: xe,
                error: We,
                viewer: Ge
            }
        })
          , tt = et
          , at = function(e, t) {
            var a = t.error;
            if (a)
                switch (null === a || void 0 === a ? void 0 : a.action) {
                case w.ErrorResult.Action.MAINTENANCE:
                    tt.dispatch("error/handleError", w.ErrorResult.Action.MAINTENANCE);
                    break;
                case w.ErrorResult.Action.GEOIP_BLOCKING:
                    tt.dispatch("error/handleError", w.ErrorResult.Action.GEOIP_BLOCKING);
                    break;
                default:
                    tt.dispatch("error/handleError", w.ErrorResult.Action.DEFAULT)
                }
            else
                tt.dispatch("error/handleError", w.ErrorResult.Action.DEFAULT)
        }
          , nt = a("3a09")
          , it = a.n(nt)
          , rt = (C["default"],
        C["default"])
          , ot = rt
          , st = (a("c975"),
        navigator.userAgent || navigator.vendor || window.opera)
          , lt = !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(st) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(st.substr(0, 4)))
          , ct = function() {
            for (var e = ["iPod", "iPad", "iPhone", "Android"], t = 0; t < e.length; t++)
                if (navigator.userAgent.indexOf(e[t]) > 0)
                    return e[t];
            return "Other"
        }
          , ut = function() {
            var e = ct();
            switch (e) {
            case "iPod":
            case "iPad":
            case "iPhone":
                return "https://itunes.apple.com/app/id1442476536";
            case "Android":
            case "Other":
                return "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
            }
        }
          , dt = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: it.a.modal
                    }, [e("div", {
                        class: it.a.banner
                    }, [e("a", {
                        attrs: {
                            href: ut()
                        }
                    }, [e("img", {
                        attrs: {
                            src: function() {
                                return t.$store.state.language.serviceLang === w.Language.SPANISH ? a("bb28") : a("660a")
                            }(),
                            alt: "Banner"
                        },
                        class: it.a.bannerImage
                    })]), e("div", {
                        class: it.a.closeButton,
                        on: {
                            click: function() {
                                localStorage.setItem("isBannerShowed", ""),
                                t.$emit("click")
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: a("0b2a")
                        },
                        class: it.a.closeButtonImage
                    })])])])
                }
            }]),
            n
        }(ot);
        dt = Object(c["b"])([P["b"]], dt);
        var pt = dt
          , ht = a("e66a")
          , gt = a.n(ht)
          , mt = (a("13d5"),
        a("2638"))
          , bt = a.n(mt)
          , ft = a("e6c8")
          , vt = a.n(ft)
          , yt = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("router-link", {
                        attrs: {
                            to: this.$attrs.to
                        }
                    }, [this.$slots.default])
                }
            }]),
            a
        }(u["c"]);
        yt = Object(c["b"])([P["b"]], yt);
        var _t = yt
          , wt = u["c"].extend({
            functional: !0,
            props: {
                links: {
                    type: Array,
                    default: function() {
                        return [{
                            name: "home",
                            path: "/updates"
                        }]
                    }
                }
            },
            render: function(e, t) {
                var a = t.props.links.reduce((function(a, n, i) {
                    return i == t.props.links.length - 1 ? a.push(e("li", {
                        class: vt.a.breadcrumb
                    }, [e("a", {
                        attrs: {
                            href: n.path
                        }
                    }, [n.name])])) : a.push(e("li", {
                        class: vt.a.breadcrumb
                    }, [e(_t, bt()([{}, {
                        attrs: {
                            to: n.path
                        }
                    }]), [n.name])])),
                    i < t.props.links.length - 1 && a.push(e("span", {
                        class: vt.a.separator
                    })),
                    a
                }
                ), []);
                return e("nav", {
                    class: t.data.class
                }, [e("ol", {
                    attrs: {
                        "aria-label": "breadcrumb-list"
                    },
                    class: vt.a.breadcrumbList
                }, [a])])
            }
        })
          , Tt = u["c"].extend({
            functional: !0,
            props: {
                links: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            render: function(e, t) {
                return e("div", {
                    class: "".concat(gt.a.title, " ").concat(t.data.class)
                }, [e("h1", {
                    class: gt.a.header
                }, [t.slots().default]), e(wt, {
                    attrs: {
                        links: t.props.links
                    },
                    class: gt.a.breadcrumbList
                })])
            }
        })
          , kt = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isBannerShowed = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "beforeRouteLeave",
                value: function(e, t, a) {
                    this.$store.commit("hideSettingModal"),
                    a()
                }
            }, {
                key: "created",
                value: function() {
                    var e = this;
                    this.$store.dispatch("favorited/fetchData").catch((function(t) {
                        at(e.$router, t)
                    }
                    ))
                }
            }, {
                key: "callRemoveAPI",
                value: function(e) {
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    this.$store.dispatch("favorited/unsubscribe", e);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "callUndoAPI",
                value: function(e) {
                    return Object(c["a"])(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    this.$store.dispatch("favorited/subscribe", e);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.$store.state.favorited.titles.map((function(a, n) {
                        return e(ee, {
                            attrs: {
                                title: t.$store.state.favorited.titles[n]
                            },
                            on: {
                                remove: function() {
                                    t.callRemoveAPI(n)
                                },
                                undo: function() {
                                    t.callUndoAPI(n)
                                }
                            }
                        })
                    }
                    ));
                    return e("div", {
                        class: "container"
                    }, [e(Tt, {
                        attrs: {
                            links: [{
                                name: "home",
                                path: "/updates"
                            }, {
                                name: "favorited",
                                path: "/favorited"
                            }]
                        }
                    }, [this.$t("FAVORITED")]), function() {
                        return t.$store.state.favorited.loading ? e("div", {
                            class: ae.a.loading
                        }, [t.$t("LOADING")]) : e("div", [function() {
                            if ((!localStorage || null === localStorage.getItem("isBannerShowed")) && t.$store.state.favorited.titles.length > 0)
                                return e(pt, {
                                    style: {
                                        display: t.isBannerShowed ? "none" : ""
                                    },
                                    on: {
                                        click: function() {
                                            t.isBannerShowed = !0
                                        }
                                    }
                                })
                        }(), e("div", {
                            class: ae.a.gridContainer,
                            directives: [{
                                name: "show",
                                value: t.$store.state.favorited.titles.length > 0
                            }]
                        }, [a]), e("div", {
                            class: ae.a.empty,
                            directives: [{
                                name: "show",
                                value: 0 == t.$store.state.favorited.titles.length
                            }]
                        }, [e("div", {
                            class: ae.a.bookshelf_wrapper
                        }, [e("ul", {
                            class: ae.a.books_list
                        }, [e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.first)
                        }), e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.second)
                        }), e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.third)
                        }), e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.fourth)
                        }), e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.fifth)
                        }), e("li", {
                            class: "".concat(ae.a.book_item, " ").concat(ae.a.sixth)
                        })]), e("div", {
                            class: ae.a.shelf
                        }), e("div", {
                            class: ae.a.noFavorite
                        }, [t.$t("NO_FAVORITE")])]), e("div", {
                            class: ae.a.find
                        }, [t.$t("FIND"), e("button", {
                            class: ae.a.btn
                        }, [t.$t("FAVORITE_BUTTON")]), t.$t("ADD_SERIES")])])])
                    }()])
                }
            }]),
            a
        }(ot);
        kt = Object(c["b"])([P["b"]], kt);
        var Ot = kt
          , At = a("3c47")
          , Et = a.n(At)
          , St = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "beforeRouteLeave",
                value: function(e, t, a) {
                    this.$store.commit("hideSettingModal"),
                    a()
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: Et.a.mangaList
                    }, [e("div", {
                        class: Et.a.header
                    }, [e(Tt, {
                        class: Et.a.title,
                        attrs: {
                            links: [{
                                name: "home",
                                path: "/updates"
                            }, {
                                name: this.$route.path.split("/")[2],
                                path: this.$route.path
                            }]
                        }
                    }, ["RANKING"]), e("nav", {
                        class: Et.a.toggle
                    }, [e("ul", [e("li", {
                        class: Et.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/ranking/hottest",
                            "active-class": Et.a.linkActive
                        }
                    }, ["Hottest"])]), e("li", {
                        class: Et.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/ranking/trending",
                            "active-class": Et.a.linkActive
                        }
                    }, ["Trending"])]), e("li", {
                        class: Et.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/ranking/completed",
                            "active-class": Et.a.linkActive
                        }
                    }, ["Completed"])])])])]), e("router-view", {
                        class: Et.a.listContent
                    })])
                }
            }]),
            a
        }(u["c"]);
        St = Object(c["b"])([P["b"]], St);
        var Lt = St
          , Ct = (a("fb6a"),
        a("3451"))
          , Pt = a.n(Ct)
          , It = a("d682")
          , Nt = a.n(It)
          , jt = a("c510")
          , Dt = a.n(jt)
          , Vt = a("ac0d")
          , Rt = a.n(Vt)
          , Ut = a("33d7")
          , Mt = a.n(Ut)
          , Ht = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.titleGroup ? this.titleGroup.titles.find((function(e) {
                        return e.language === t.$store.state.language.serviceLang
                    }
                    )) : null;
                    return void 0 === a || null === a ? e("div") : e("router-link", {
                        attrs: {
                            to: "/titles/" + a.titleId
                        },
                        class: this.index < 5 ? Pt.a.hotTitleTop : Pt.a.hotTitle
                    }, [e("div", {
                        class: Pt.a.container
                    }, [e("img", {
                        directives: [{
                            name: "lazy",
                            value: a.portraitImageUrl
                        }],
                        key: a.titleId,
                        attrs: {
                            alt: "",
                            width: "70",
                            height: "105"
                        },
                        class: Pt.a.icon
                    }), e("div", {
                        class: this.index > 5 ? Pt.a.textsNotTop : Pt.a.texts
                    }, [function() {
                        switch (t.index) {
                        case 0:
                            return e("img", {
                                class: Pt.a.rank,
                                attrs: {
                                    src: Nt.a
                                }
                            });
                        case 1:
                            return e("img", {
                                class: Pt.a.rank,
                                attrs: {
                                    src: Dt.a
                                }
                            });
                        case 2:
                            return e("img", {
                                class: Pt.a.rank,
                                attrs: {
                                    src: Rt.a
                                }
                            });
                        case 3:
                            return e("h3", {
                                class: Pt.a.rank
                            }, [t.index + 1]);
                        case 4:
                            return e("h3", {
                                class: Pt.a.rank
                            }, [t.index + 1]);
                        default:
                            return e("h3", {
                                class: Pt.a.rank
                            }, [t.index + 1])
                        }
                    }(), e("p", {
                        class: Pt.a.count
                    }, [e("img", {
                        attrs: {
                            src: Mt.a
                        },
                        class: Pt.a.viewCountIcon
                    }), this.titleGroup.score]), e("div", {
                        class: Pt.a.lang
                    }, [this.titleGroup.titles.map((function(t) {
                        return e("span", {
                            class: pe.includes(t.language.valueOf()) ? Pt.a.active : "",
                            attrs: {
                                title: K(t.language)
                            }
                        }, [q(t.language)])
                    }
                    ))]), e("p", {
                        class: Pt.a.title
                    }, [a.name]), e("p", {
                        class: Pt.a.author
                    }, [a.author])])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Ht.prototype, "titleGroup", void 0),
        Object(c["b"])([Object(u["b"])()], Ht.prototype, "index", void 0),
        Ht = Object(c["b"])([P["b"]], Ht);
        var xt = Ht
          , Bt = a("a011")
          , Gt = a.n(Bt);
        a("2b3d");
        function Ft(e, t) {
            var a = new URL(t);
            switch (a.protocol) {
            case "mangaplus:":
                switch (t.split("/")[3].split("?")[0]) {
                case "viewer":
                    var n = a.searchParams.get("id");
                    e.push("/viewer/".concat(n));
                    break;
                case "detail":
                    var i = a.searchParams.get("id");
                    e.push("/titles/".concat(i));
                    break;
                case "webview":
                    window.location.href = a.searchParams.get("url")
                }
                break;
            default:
                window.location.href = t
            }
        }
        var Wt = 5
          , Yt = 6
          , $t = 40
          , Kt = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.$store.dispatch("ranking/fetchData", "hottest").catch((function(t) {
                        at(e.$router, t)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("div", {
                        class: Gt.a.pcLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Wt).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return console.log("banners", t.$store.state.ranking.model.rankingBanners),
                        e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Wt, $t).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Wt
                            }
                        })
                    }
                    ))])]), e("div", {
                        class: Gt.a.spLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Yt).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Yt, $t).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Yt
                            }
                        })
                    }
                    ))])])])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.$store.state.ranking.model.rankedTitles.filter((function(t) {
                        return t.titles.filter((function(t) {
                            return e.$store.state.language.contentLangs.includes(t.language)
                        }
                        ))
                    }
                    ))
                }
            }]),
            a
        }(ot);
        Kt = Object(c["b"])([Object(P["b"])({
            components: {
                HotTitle: xt
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/ranking/hottest"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], Kt);
        var qt = Kt
          , zt = a("3e42")
          , Qt = a.n(zt)
          , Zt = a("f6a5")
          , Jt = a.n(Zt)
          , Xt = a("60fe")
          , ea = a.n(Xt)
          , ta = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("h1", {
                    class: "".concat(ea.a.title, " ").concat(t.data.class)
                }, [t.slots().default])
            }
        })
          , aa = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.currentIndex = 0,
                e.atEnd = !1,
                e.atStart = !0,
                e
            }
            return Object(o["a"])(a, [{
                key: "onScroll",
                value: function(e) {
                    var t = e.target;
                    this.atEnd = t.scrollWidth <= t.scrollLeft + t.clientWidth,
                    this.atStart = 0 === t.scrollLeft
                }
            }, {
                key: "onClickRightCursor",
                value: function() {
                    if (this.currentIndex + 3 !== this.currentTitles.length) {
                        this.currentIndex += 1;
                        var e = this.$el.querySelector(".".concat(Jt.a.itemList));
                        e.scrollLeft = e.scrollLeft + 550,
                        this.onScroll({
                            target: e
                        })
                    }
                }
            }, {
                key: "onClickLeftCursor",
                value: function() {
                    if (0 !== this.currentIndex) {
                        this.currentIndex -= 1;
                        var e = this.$el.querySelector(".".concat(Jt.a.itemList));
                        e.scrollLeft = e.scrollLeft - 550,
                        this.onScroll({
                            target: e
                        })
                    }
                }
            }, {
                key: "order",
                value: function(e) {
                    var t = e - this.currentIndex;
                    return t < 0 ? t + this.currentTitles.length : t
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("div", [e(ta, {
                        class: Jt.a.featuredTitle
                    }, [this.titleList.listName]), e("div", {
                        class: Jt.a.horizontalList
                    }, [e("div", {
                        class: Jt.a.leftWrap,
                        on: {
                            click: this.onClickLeftCursor
                        }
                    }, [e("div", {
                        class: "".concat(Jt.a.leftCursor, " ").concat(this.atStart ? Jt.a.hideCursor : "")
                    })]), e("div", {
                        class: Jt.a.itemListWrapper
                    }, [e("div", {
                        class: "".concat(Jt.a.itemList),
                        on: {
                            scroll: this.onScroll
                        }
                    }, [this.currentTitles.map((function(t, a) {
                        return e("router-link", {
                            attrs: {
                                to: "/titles/" + t.titleId,
                                tag: "div"
                            },
                            class: "".concat(Jt.a.item),
                            style: {}
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: t.portraitImageUrl
                            }],
                            key: t.titleId,
                            class: Jt.a.image,
                            attrs: {
                                alt: ""
                            }
                        })])
                    }
                    ))])]), e("div", {
                        class: Jt.a.rightWrap,
                        on: {
                            click: this.onClickRightCursor
                        }
                    }, [e("div", {
                        class: "".concat(Jt.a.rightCursor, " ").concat(this.atEnd ? Jt.a.hideCursor : "")
                    })])])])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.titleList.featuredTitles.filter((function(t) {
                        return e.$store.state.language.contentLangs.includes(t.language)
                    }
                    ))
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], aa.prototype, "titleList", void 0),
        aa = Object(c["b"])([P["b"]], aa);
        var na = aa
          , ia = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.currentIndex = 0,
                e.atEnd = !1,
                e.atStart = !0,
                e
            }
            return Object(o["a"])(a, [{
                key: "onScroll",
                value: function(e) {
                    var t = e.target;
                    this.atEnd = t.scrollWidth <= t.scrollLeft + t.clientWidth,
                    this.atStart = 0 === t.scrollLeft
                }
            }, {
                key: "onClickRightCursor",
                value: function() {
                    if (this.currentIndex + 3 !== this.currentTitles.length) {
                        this.currentIndex += 1;
                        var e = this.$el.querySelector(".".concat(Jt.a.itemList));
                        e.scrollLeft = e.scrollLeft + 550,
                        this.onScroll({
                            target: e
                        })
                    }
                }
            }, {
                key: "onClickLeftCursor",
                value: function() {
                    if (0 !== this.currentIndex) {
                        this.currentIndex -= 1;
                        var e = this.$el.querySelector(".".concat(Jt.a.itemList));
                        e.scrollLeft = e.scrollLeft - 550,
                        this.onScroll({
                            target: e
                        })
                    }
                }
            }, {
                key: "order",
                value: function(e) {
                    var t = e - this.currentIndex;
                    return t < 0 ? t + this.currentTitles.length : t
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("div", [e(ta, {
                        class: Jt.a.featuredTitle
                    }, ["HOTTEST"]), e("div", {
                        class: Jt.a.horizontalList
                    }, [e("div", {
                        class: Jt.a.leftWrap,
                        on: {
                            click: this.onClickLeftCursor
                        }
                    }, [e("div", {
                        class: "".concat(Jt.a.leftCursor, " ").concat(this.atStart ? Jt.a.hideCursor : "")
                    })]), e("div", {
                        class: Jt.a.itemListWrapper
                    }, [e("div", {
                        class: "".concat(Jt.a.itemList),
                        on: {
                            scroll: this.onScroll
                        }
                    }, [this.currentTitles.map((function(t, a) {
                        return e("router-link", {
                            attrs: {
                                to: "/titles/" + t.titleId,
                                tag: "div"
                            },
                            class: "".concat(Jt.a.item),
                            style: {}
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: t.portraitImageUrl
                            }],
                            key: t.titleId,
                            class: Jt.a.image,
                            attrs: {
                                alt: ""
                            }
                        })])
                    }
                    ))])]), e("div", {
                        class: Jt.a.rightWrap,
                        on: {
                            click: this.onClickRightCursor
                        }
                    }, [e("div", {
                        class: "".concat(Jt.a.rightCursor, " ").concat(this.atEnd ? Jt.a.hideCursor : "")
                    })])])])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this
                      , t = [];
                    return console.log(this.rankingGroups),
                    t.filter((function(t) {
                        return e.$store.state.language.contentLangs.includes(t.language)
                    }
                    ))
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], ia.prototype, "rankingGroups", void 0),
        ia = Object(c["b"])([P["b"]], ia);
        var ra = ia
          , oa = w.FeaturedTitlesViewV2
          , sa = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.model = new oa,
                e
            }
            return Object(o["a"])(a, [{
                key: "beforeRouteLeave",
                value: function(e, t, a) {
                    this.$store.commit("hideSettingModal"),
                    a()
                }
            }, {
                key: "created",
                value: function() {
                    var e = this;
                    0 === this.$store.state.featured.model.contents.length && this.$store.dispatch("featured/fetchData").catch((function(t) {
                        at(e.$router, t)
                    }
                    )),
                    this.$Lazyload.$on("loaded", (function(t) {
                        var a = t.el
                          , n = (t.src,
                        a.getAttribute("dataId"));
                        n && e.$gtm.trackEvent({
                            category: "featured_banner",
                            action: "Impression",
                            label: n,
                            value: 1,
                            noninteraction: !0
                        })
                    }
                    ))
                }
            }, {
                key: "beforeDestroy",
                value: function() {}
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.$store.state.featured.model.topSearchBanners[0]
                      , n = this.$store.state.featured.model.topSearchBanners[1]
                      , i = this.$store.state.featured.model.topSearchBanners[2];
                    return e("div", {
                        class: Qt.a.all
                    }, [e("div", {
                        class: Qt.a.bannersTop
                    }, [e("div", {
                        class: Qt.a.bannerContainer
                    }, [a && e("img", {
                        attrs: {
                            src: a.imageUrl
                        },
                        class: "".concat(Qt.a.largeBanner, " ").concat(Qt.a.banner),
                        on: {
                            load: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Impression",
                                    label: a.id,
                                    value: 1,
                                    noninteraction: !0
                                })
                            },
                            click: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Click",
                                    label: a.id
                                }),
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Click",
                                    label: a.id
                                }),
                                Ft(t.$router, a.action.url)
                            }
                        }
                    }), n && e("img", {
                        attrs: {
                            src: n.imageUrl
                        },
                        class: "".concat(Qt.a.smallBanner1, " ").concat(Qt.a.banner),
                        on: {
                            load: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Impression",
                                    label: n.id,
                                    value: 1,
                                    noninteraction: !0
                                })
                            },
                            click: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Click",
                                    label: n.id
                                }),
                                Ft(t.$router, n.action.url)
                            }
                        }
                    }), i && e("img", {
                        attrs: {
                            src: i.imageUrl
                        },
                        class: "".concat(Qt.a.smallBanner2, " ").concat(Qt.a.banner),
                        on: {
                            load: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Impression",
                                    label: i.id,
                                    value: 1,
                                    noninteraction: !0
                                })
                            },
                            click: function() {
                                t.$gtm.trackEvent({
                                    category: "featured_top_banner",
                                    action: "Click",
                                    label: i.id
                                }),
                                Ft(t.$router, i.action.url)
                            }
                        }
                    })])]), this.$store.state.featured.model.contents.map((function(n) {
                        var i = function() {
                            return n.banner && n.banner.imageUrl ? e("img", {
                                key: n.banner.id,
                                attrs: {
                                    dataId: n.banner.id
                                },
                                class: "".concat(Qt.a.contentsBanner, " ").concat(Qt.a.banner),
                                directives: [{
                                    name: "lazy",
                                    value: n.banner.imageUrl
                                }],
                                on: {
                                    click: function() {
                                        t.$gtm.trackEvent({
                                            category: "featured_banner",
                                            action: "Click",
                                            label: a.id
                                        }),
                                        Ft(t.$router, n.banner.action.url)
                                    }
                                }
                            }) : n.titleList ? e(na, {
                                class: Qt.a.titleList,
                                attrs: {
                                    titleList: n.titleList
                                }
                            }) : n.rankedTitles.length > 0 ? e(ra, {
                                class: Qt.a.titleList,
                                attrs: {
                                    rankingGroups: n.rankedTitles
                                }
                            }) : null
                        }
                          , r = i();
                        if (r)
                            return e("div", {
                                class: Qt.a.contents
                            }, [r])
                    }
                    ))])
                }
            }]),
            a
        }(u["c"]);
        sa = Object(c["b"])([Object(P["b"])({
            components: {
                HorizontalTitleList: na,
                HorizontalRankedTitleList: ra
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/featured"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], sa);
        var la = sa
          , ca = (a("4c53"),
        a("2909"))
          , ua = a("5530")
          , da = a("5dfb")
          , pa = a.n(da)
          , ha = a("be42")
          , ga = a.n(ha)
          , ma = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("button", {
                    class: "".concat(ga.a.btn, " ").concat("default" === t.data.attrs.state ? ga.a.default : ga.a.done, " ").concat(t.data.class),
                    on: {
                        click: t.data.on.click
                    }
                }, [t.slots().default])
            }
        })
          , ba = (a("9e30"),
        a("e072"),
        a("6f6e"))
          , fa = a.n(ba)
          , va = a("504f")
          , ya = a.n(va)
          , _a = a("fb41")
          , wa = a.n(_a)
          , Ta = a("10b7")
          , ka = a.n(Ta)
          , Oa = a("48a5")
          , Aa = a.n(Oa)
          , Ea = a("1485")
          , Sa = a.n(Ea)
          , La = a("034b")
          , Ca = a.n(La)
          , Pa = a("a71b")
          , Ia = a.n(Pa)
          , Na = a("6a23")
          , ja = a.n(Na)
          , Da = a("18b5")
          , Va = a.n(Da)
          , Ra = a("2e43")
          , Ua = a.n(Ra)
          , Ma = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this
                      , a = z(this.$store.state.language.serviceLang);
                    return e("div", {
                        class: pa.a.flexContainer
                    }, [e("div", {
                        class: pa.a.left1
                    }, [e("div", {
                        class: pa.a.right1
                    }, [e("div", {
                        class: pa.a.cover
                    }, [e("img", {
                        class: pa.a.coverImage,
                        attrs: {
                            src: this.coverImage,
                            alt: "".concat(this.titleProto.name, " thumbnail")
                        }
                    }), e("div", {
                        class: pa.a.gridContainer
                    }, [e(ma, {
                        class: pa.a.favoritedBtn,
                        attrs: {
                            state: this.$store.state.detail.model[this.titleProto.titleId] && this.$store.state.detail.model[this.titleProto.titleId].isSubscribed ? "done" : "default"
                        },
                        on: {
                            click: function(e) {
                                t.$store.state.detail.model[t.titleProto.titleId].isSubscribed ? t.$store.dispatch("detail/unsubscribe", t.titleProto.titleId) : t.$store.dispatch("detail/subscribe", t.titleProto.titleId)
                            }
                        }
                    }, [function() {
                        return t.$store.state.detail.isLoading ? "loading" : t.$store.state.detail.model[t.titleProto.titleId] && t.$store.state.detail.model[t.titleProto.titleId].isSubscribed ? t.$t("doneFAVORITED") : t.$t("addFAVORITED")
                    }()])])]), e("div", {
                        class: pa.a.info
                    }, [e("h1", {
                        class: pa.a.title
                    }, [this.titleProto.name]), e("p", {
                        class: pa.a.author
                    }, [this.titleProto.author]), e("div", [e("div", {
                        class: pa.a.overviewTitleWrapper
                    }, [e("h6", {
                        class: pa.a.overviewTitle
                    }, [this.$i18n.t("OVERVIEW")]), this.rating && e("div", {
                        class: pa.a.rating
                    }, [e("p", {
                        class: pa.a.ratingText
                    }, [this.rating, e("router-link", {
                        attrs: {
                            to: "/rating/" + a
                        }
                    }, [e("img", {
                        class: pa.a.questionImage,
                        attrs: {
                            src: Ua.a,
                            alt: ""
                        }
                    })])])])]), e("p", {
                        class: pa.a.overview
                    }, [this.overview]), this.label == w.LabelCodes.WJ && e("img", {
                        attrs: {
                            src: fa.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.SQ && e("img", {
                        attrs: {
                            src: ya.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.VJ && e("img", {
                        attrs: {
                            src: wa.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.YJ && e("img", {
                        attrs: {
                            src: ka.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.J_PLUS && e("img", {
                        attrs: {
                            src: Aa.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.CREATORS && e("img", {
                        attrs: {
                            src: Sa.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.TYJ && e("img", {
                        attrs: {
                            src: Ca.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.SKJ && e("img", {
                        attrs: {
                            src: Ia.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.GIGA && e("img", {
                        attrs: {
                            src: ja.a
                        },
                        class: pa.a.jumpLogo
                    }), this.label == w.LabelCodes.UJ && e("img", {
                        attrs: {
                            src: Va.a
                        },
                        class: pa.a.jumpLogo
                    })])])])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "topImage", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "coverImage", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "titleProto", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "viewingPeriod", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "overview", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "rating", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "label", void 0),
        Object(c["b"])([Object(u["b"])()], Ma.prototype, "nonAppearanceInfo", void 0),
        Ma = Object(c["b"])([Object(P["b"])({
            components: {
                FavoritedButton: ma
            }
        })], Ma);
        var Ha = Ma
          , xa = a("2a64")
          , Ba = a.n(xa)
          , Ga = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.checked = !1,
                e.isCheckEvent = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "click",
                value: function() {
                    this.isCheckEvent || (this.$destroy(),
                    this.$el.parentNode.removeChild(this.$el)),
                    this.isCheckEvent = !1
                }
            }, {
                key: "check",
                value: function() {
                    this.isCheckEvent = !0,
                    this.checked ? localStorage.removeItem("rating_checked_" + this.popup.popupId) : localStorage.setItem("rating_checked_" + this.popup.popupId, "true")
                }
            }, {
                key: "onClickImage",
                value: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.$gtm.trackEvent({
                        category: "popup",
                        action: "Click",
                        label: this.popup.popupId
                    }),
                    E.instance().popupTapLog(this.popup.popupId);
                    var t = "";
                    this.popup.oneImage ? t = this.popup.oneImage.action.url : this.popup.appDefault && (t = this.popup.appDefault.action.url),
                    Ft(this.$router, t)
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$gtm.trackEvent({
                        category: "popup",
                        action: "Impression",
                        label: this.popup.popupId,
                        value: 1,
                        noninteraction: !0
                    }),
                    this.popup.oneImage && (document.body.style.position = "fixed")
                }
            }, {
                key: "destroyed",
                value: function() {
                    document.body.style.position = ""
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return this.popup.oneImage ? e("div", {
                        class: Ba.a.appDefaultContainer,
                        on: {
                            click: this.click
                        }
                    }, [e("div", {
                        class: Ba.a.figureField
                    }, [e("figure", {
                        class: Ba.a.appDefaultImageContainer
                    }, [e("img", {
                        attrs: {
                            src: this.popup.oneImage.imageUrl
                        },
                        class: Ba.a.appDefaultImage,
                        on: {
                            click: this.onClickImage
                        }
                    })])]), e("div", {
                        class: Ba.a.checkboxField
                    }, [e("input", bt()([{
                        on: {
                            change: function(e) {
                                var a = t.checked
                                  , n = e.target
                                  , i = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null
                                      , o = t._i(a, r);
                                    n.checked ? o < 0 && (t.checked = a.concat([r])) : o > -1 && (t.checked = a.slice(0, o).concat(a.slice(o + 1)))
                                } else
                                    t.checked = i
                            },
                            click: this.check
                        },
                        class: Ba.a.checkbox,
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checked) ? this._i(t.checked, null) > -1 : t.checked
                        }
                    }, {
                        directives: [{
                            name: "model",
                            value: t.checked,
                            modifiers: {}
                        }]
                    }])), e("label", {
                        class: Ba.a.checkBoxLabel
                    }, [this.$t("DONT_SHOW_AGAIN")])]), e("span", {
                        class: Ba.a.closeButton,
                        on: {
                            click: this.click
                        }
                    })]) : this.popup.appDefault ? e("div", {
                        class: Ba.a.appDefaultContainer,
                        on: {
                            click: this.click
                        }
                    }, [e("div", {
                        class: Ba.a.figureField
                    }, [e("figure", {
                        class: Ba.a.appDefaultImageContainer
                    }, [e("img", {
                        attrs: {
                            src: this.popup.appDefault.imageUrl
                        },
                        class: Ba.a.appDefaultImage,
                        on: {
                            click: this.onClickImage
                        }
                    }), e("figcaption", {
                        class: Ba.a.appDefaultText
                    }, [this.popup.appDefault.body])])]), e("div", {
                        class: Ba.a.checkboxField
                    }, [e("input", bt()([{
                        on: {
                            change: function(e) {
                                var a = t.checked
                                  , n = e.target
                                  , i = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null
                                      , o = t._i(a, r);
                                    n.checked ? o < 0 && (t.checked = a.concat([r])) : o > -1 && (t.checked = a.slice(0, o).concat(a.slice(o + 1)))
                                } else
                                    t.checked = i
                            },
                            click: this.check
                        },
                        class: Ba.a.checkbox,
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checked) ? this._i(t.checked, null) > -1 : t.checked
                        }
                    }, {
                        directives: [{
                            name: "model",
                            value: t.checked,
                            modifiers: {}
                        }]
                    }])), e("label", {
                        class: Ba.a.checkBoxLabel
                    }, [this.$t("DONT_SHOW_AGAIN")])]), e("span", {
                        class: Ba.a.closeButton,
                        on: {
                            click: this.click
                        }
                    })]) : e("template")
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Ga.prototype, "popup", void 0),
        Ga = Object(c["b"])([P["b"]], Ga);
        var Fa = a("855f")
          , Wa = a.n(Fa)
          , Ya = (a("4e82"),
        a("596b"))
          , $a = a.n(Ya)
          , Ka = a("c243")
          , qa = a.n(Ka)
          , za = a("b8a9")
          , Qa = a.n(za)
          , Za = a("19d0")
          , Ja = a.n(Za)
          , Xa = a("5a0c")
          , en = a.n(Xa)
          , tn = a("863a")
          , an = a.n(tn)
          , nn = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return en()(navigator.language),
                    e("div", {
                        class: qa.a.chapterListItem
                    }, [function() {
                        return t.chapter.alreadyViewed ? e("router-link", {
                            class: qa.a.chapterWrapper,
                            attrs: {
                                tag: "div",
                                to: "/viewer/".concat(t.chapter.chapterId)
                            }
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: t.chapter.thumbnailUrl
                            }],
                            key: t.chapter.chapterId,
                            attrs: {
                                alt: "thumbnail"
                            },
                            class: qa.a.thumbnail_alreadyRead
                        }), e("div", {
                            class: qa.a.chapterNameContainer
                        }, [e("p", {
                            class: qa.a.name_alreadyRead
                        }, [t.chapter.name]), e("p", {
                            class: qa.a.commentCount
                        }, [e("img", {
                            attrs: {
                                src: an.a
                            },
                            class: qa.a.commentIconMini
                        }), t.chapter.commentCount])]), e("p", {
                            class: qa.a.title_alreadyRead
                        }, [t.chapter.subTitle]), e("p", {
                            class: qa.a.date_alreadyRead
                        }, [new Date(1e3 * t.chapter.startTimeStamp).toLocaleDateString(navigator.language, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })])]) : e("router-link", {
                            class: qa.a.chapterWrapper,
                            attrs: {
                                tag: "div",
                                to: "/viewer/".concat(t.chapter.chapterId)
                            }
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: t.chapter.thumbnailUrl
                            }],
                            key: t.chapter.chapterId,
                            attrs: {
                                alt: "thumbnail"
                            },
                            class: qa.a.thumbnail
                        }), e("div", {
                            class: qa.a.chapterNameContainer
                        }, [e("p", {
                            class: qa.a.name
                        }, [t.chapter.name]), e("p", {
                            class: qa.a.commentCount
                        }, [e("img", {
                            attrs: {
                                src: an.a
                            },
                            class: qa.a.commentIconMini
                        }), t.chapter.commentCount])]), e("p", {
                            class: qa.a.title
                        }, [t.chapter.subTitle]), e("p", {
                            class: qa.a.date
                        }, [new Date(1e3 * t.chapter.startTimeStamp).toLocaleDateString(navigator.language, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })])])
                    }(), e("router-link", {
                        attrs: {
                            to: "/comments/".concat(this.chapter.chapterId)
                        },
                        class: qa.a.commentContainer
                    }, [e("img", {
                        attrs: {
                            src: Qa.a,
                            alt: "commentIcon"
                        },
                        class: qa.a.commentIcon
                    })]), e("div", {
                        class: qa.a.limitContainer
                    }, [function() {
                        var a = en()(new Date(1e3 * t.chapter.endTimeStamp))
                          , n = en()();
                        if (n.add(7, "day").isAfter(a)) {
                            var i = a.format("MMM. D")
                              , r = a.format("H:mm");
                            return e("div", {
                                class: qa.a.endTime
                            }, [e("img", {
                                attrs: {
                                    src: Ja.a,
                                    alt: "commentIcon"
                                },
                                class: qa.a.limitIcon
                            }), e("p", {
                                class: qa.a.limitTime
                            }, [e("div", [e("p", {
                                class: qa.a.limitDate
                            }, [i, " - "]), e("p", {
                                class: qa.a.limitDate
                            }, [r])])])])
                        }
                    }()])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], nn.prototype, "chapter", void 0),
        nn = Object(c["b"])([P["b"]], nn);
        var rn = nn
          , on = a("9b54")
          , sn = a.n(on)
          , ln = a("3e28")
          , cn = a.n(ln)
          , un = function() {
            googletag && googletag.destroySlots()
        }
          , dn = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            googletag && googletag.cmd.push((function() {
                lt ? e.spAds.forEach((function(e) {
                    return googletag.defineSlot(e.path, e.size, e.div).addService(googletag.pubads())
                }
                )) : e.pcAds.forEach((function(e) {
                    return googletag.defineSlot(e.path, e.size, e.div).addService(googletag.pubads())
                }
                )),
                googletag.pubads().enableSingleRequest(),
                googletag.enableServices(),
                "undefined" !== typeof navigator && navigator.cookieEnabled || googletag.pubads().setPrivacySettings({
                    limitedAds: !0
                })
            }
            )),
            t && (lt ? e.spAds.forEach((function(e) {
                return e.div && googletag && googletag.cmd.push((function() {
                    googletag.display(e.div)
                }
                ))
            }
            )) : e.pcAds.forEach((function(e) {
                return e.div && googletag && googletag.cmd.push((function() {
                    googletag.display(e.div)
                }
                ))
            }
            )))
        }
          , pn = function(e, t) {
            for (var a = e.getElementsByClassName("gado"), n = function(e) {
                var n = a[e];
                if (lt) {
                    if (!t.spAds.find((function(e) {
                        return e.div === n.id
                    }
                    )))
                        return {
                            v: void 0
                        };
                    if (!t.pcAds.find((function(e) {
                        return e.div === n.id
                    }
                    )))
                        return {
                            v: void 0
                        }
                }
                console.log("DISPLAY AD:", n.id),
                googletag && googletag.cmd.push((function() {
                    googletag.display(n.id)
                }
                ))
            }, i = 0; i < a.length; i++) {
                var r = n(i);
                if ("object" === Object(G["a"])(r))
                    return r.v
            }
        }
          , hn = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.ascSort = !1,
                e
            }
            return Object(o["a"])(n, [{
                key: "sortChapters",
                value: function() {
                    this.ascSort = !this.ascSort;
                    var e = this.newChapters.slice().reverse();
                    this.newChapters = this.oldChapters.slice().reverse(),
                    this.oldChapters = e
                }
            }, {
                key: "mounted",
                value: function() {
                    dn({
                        spAds: [{
                            path: "/16791533/MANGAPLUS/mangaplus_sp_title_bottomRectangle",
                            size: ["fluid", [320, 50], [320, 100], [300, 250], [336, 280], [300, 600], [1, 1]],
                            div: "mangaplus_sp_title_bottomRectangle"
                        }],
                        pcAds: []
                    }, !0)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("div", [e("div", {
                        class: $a.a.chapterListTitleWrapper
                    }, [e("h6", {
                        class: $a.a.chapterListTitle
                    }, [this.$i18n.t("CHAPTER_LIST")])])]), e("div", {
                        class: $a.a.chapterHeader
                    }, [e("h3", {
                        class: $a.a.message
                    }, [this.nonAppearanceInfo]), e("div", {
                        class: $a.a.sort
                    }, [e("img", {
                        attrs: {
                            src: this.ascSort ? cn.a : sn.a,
                            alt: "sort"
                        },
                        class: $a.a.sortIcon,
                        on: {
                            click: this.sortChapters
                        }
                    })])]), this.oldChapters.map((function(t) {
                        return e(rn, {
                            attrs: Object(ua["a"])({}, {
                                chapter: t
                            })
                        })
                    }
                    )), function() {
                        return t.midChapters.length > 0 && t.isFirstFree ? e("a", {
                            class: $a.a.separator,
                            attrs: {
                                href: "https://app.adjust.com/aln3b5x",
                                title: "Download the App!"
                            }
                        }, [e("span", [e("img", {
                            attrs: {
                                src: a("5185"),
                                alt: "app_icon",
                                width: "48",
                                height: "48"
                            },
                            class: $a.a.appIcon
                        }), " ", t.$t("CHAPTERS_APP_AVAILABLE"), e("strong", [t.$t("CHAPTERS_APP_FREE")]), " ", t.$t("CHAPTERS_APP"), e("div", {
                            class: $a.a.arrow
                        })]), t.midChapters.map((function(t) {
                            return e(rn, {
                                attrs: Object(ua["a"])({}, {
                                    chapter: t
                                })
                            })
                        }
                        ))]) : t.midChapters.length > 0 && "disabled" !== t.planType ? e("a", {
                            class: $a.a.separator,
                            attrs: {
                                href: "https://app.adjust.com/aln3b5x",
                                title: "Download the App!"
                            }
                        }, [e("span", [e("img", {
                            attrs: {
                                src: a("5185"),
                                alt: "app_icon",
                                width: "48",
                                height: "48"
                            },
                            class: $a.a.appIcon
                        }), " ", t.$t("CHAPTERS_SUB_AVAILABLE"), e("div", {
                            class: $a.a.arrow
                        })]), t.midChapters.map((function(t) {
                            return e(rn, {
                                attrs: Object(ua["a"])({}, {
                                    chapter: t
                                })
                            })
                        }
                        ))]) : t.newChapters.length > 0 && t.oldChapters.length > 0 ? e("div", {
                            class: $a.a.unseparator
                        }, [t.$t("CHAPTERS_NOT_AVAILABLE")]) : void 0
                    }(), e("div", {
                        class: $a.a.midAd
                    }, [e("div", {
                        attrs: {
                            id: "mangaplus_sp_title_bottomRectangle"
                        }
                    })]), this.newChapters.map((function(t) {
                        return e(rn, {
                            attrs: Object(ua["a"])({}, {
                                chapter: t
                            })
                        })
                    }
                    ))])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], hn.prototype, "newChapters", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "oldChapters", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "midChapters", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "rating", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "nonAppearanceInfo", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "numberOfViews", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "planType", void 0),
        Object(c["b"])([Object(u["b"])()], hn.prototype, "isFirstFree", void 0),
        hn = Object(c["b"])([Object(P["b"])({
            components: {
                ChapterListItem: rn
            }
        })], hn);
        var gn = hn
          , mn = a("00df")
          , bn = a.n(mn)
          , fn = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.$Lazyload.$on("loaded", (function(t) {
                        var a = t.el
                          , n = a.getAttribute("data-id");
                        n && e.$gtm.trackEvent({
                            category: "publisher_title_banner",
                            action: "Impression",
                            label: n,
                            value: 1,
                            noninteraction: !0
                        })
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: bn.a.wrapper
                    }, [this.items.map((function(a) {
                        return e("div", {
                            class: bn.a.container
                        }, [a.publisherNews && e("p", {
                            class: bn.a.publisherName
                        }, [t.$i18n.t("LATEST_NEWS_FROM"), ":"]), a.banner ? e("a", [e("img", {
                            attrs: {
                                "data-id": a.banner.id
                            },
                            directives: [{
                                name: "lazy",
                                value: a.banner.imageUrl
                            }],
                            class: bn.a.banner,
                            on: {
                                click: function(e) {
                                    t.$gtm.trackEvent({
                                        category: "publisher_title_banner",
                                        action: "Click",
                                        label: a.banner.id
                                    }),
                                    Ft(t.$router, a.banner.action.url)
                                }
                            }
                        })]) : e("div", {
                            class: bn.a.publisherNameContainer
                        }, [e("a", {
                            class: bn.a.publisherName
                        }, [a.publisherNews.publisherName])]), a.publisherNews && e("div", [e(yn, {
                            attrs: {
                                publisherNews: a.publisherNews
                            }
                        }), e("router-link", {
                            class: bn.a.news_showAll,
                            attrs: {
                                to: "/publisher_news/".concat(a.publisherNews.publisherId)
                            }
                        }, [t.$i18n.t("SEE_ALL_NEWS")])])])
                    }
                    ))])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], fn.prototype, "items", void 0),
        Object(c["b"])([Object(u["b"])()], fn.prototype, "banners", void 0),
        fn = Object(c["b"])([P["b"]], fn);
        var vn = fn
          , yn = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    en()(navigator.language);
                    var a = en()(new Date(1e3 * this.publisherNews.publishedTimeStamp)).format("MMM DD, YYYY ");
                    return e("div", {
                        class: bn.a.publisherNews
                    }, [e("div", {
                        class: bn.a.news_main
                    }, [e("p", {
                        class: bn.a.news_subject
                    }, [this.publisherNews.subject]), e("p", {
                        class: bn.a.news_date
                    }, [a]), e("p", {
                        class: bn.a.news_description
                    }, [this.publisherNews.body]), this.publisherNews.action && e("a", {
                        class: bn.a.news_click_here,
                        on: {
                            click: function(e) {
                                return Ft(t.$router, t.publisherNews.action.url)
                            }
                        }
                    }, ["CLICK HERE"])])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], yn.prototype, "publisherNews", void 0),
        Object(c["b"])([Object(u["b"])()], yn.prototype, "showMore", void 0),
        yn = Object(c["b"])([P["b"]], yn);
        var _n = a("9400")
          , wn = a.n(_n)
          , Tn = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "shareUrl",
                value: function() {
                    return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.url)
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("a", {
                        attrs: {
                            href: this.shareUrl()
                        },
                        class: "".concat(wn.a.shareButton, " ").concat(wn.a.facebook)
                    }, [e("div", {
                        class: wn.a.icon
                    }, [e("img", {
                        attrs: {
                            alt: "facebook",
                            src: a("a177")
                        }
                    })]), e("div", {
                        class: wn.a.label
                    }, [e("span", [this.$t("SHARE")])])])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Tn.prototype, "url", void 0),
        Tn = Object(c["b"])([P["b"]], Tn);
        var kn = Tn
          , On = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "shareUrl",
                value: function() {
                    return "https://x.com/intent/post?text=" + encodeURIComponent(this.text) + "&url=" + encodeURIComponent(this.url)
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("a", {
                        attrs: {
                            href: this.shareUrl()
                        },
                        class: "".concat(wn.a.shareButton, " ").concat(wn.a.twitter)
                    }, [e("div", {
                        class: wn.a.icon
                    }, [e("img", {
                        attrs: {
                            alt: "facebook",
                            src: a("46ef")
                        }
                    })]), e("div", {
                        class: wn.a.label
                    }, [e("span", [this.$t("TWEET")])])])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], On.prototype, "url", void 0),
        Object(c["b"])([Object(u["b"])()], On.prototype, "text", void 0),
        On = Object(c["b"])([P["b"]], On);
        var An = On
          , En = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.ads = {
                    pcAds: [{
                        path: "/16791533/MANGAPLUS/mangaplus_pc_title_rectangle_1",
                        size: ["fluid", [300, 250], [1, 1]],
                        div: "mangaplus_pc_title_rectangle_1"
                    }],
                    spAds: []
                },
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.id = this.$route.params["id"],
                    this.$store.dispatch("detail/fetchData", this.id).catch((function(t) {
                        at(e.$router, t)
                    }
                    )),
                    this.$Lazyload.$on("loaded", (function(t) {
                        var a = t.el
                          , n = a.getAttribute("data-banner-id");
                        n && e.$gtm.trackEvent({
                            category: "title_detail_banner",
                            action: "Impression",
                            label: n,
                            value: 1,
                            noninteraction: !0
                        })
                    }
                    ))
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    un()
                }
            }, {
                key: "mounted",
                value: function() {
                    dn(this.ads)
                }
            }, {
                key: "updated",
                value: function() {
                    pn(this.$el, this.ads)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t, a = this, n = null === (t = this.$store.state.detail) || void 0 === t ? void 0 : t.model[this.id];
                    if (!n)
                        return e("div", [e("div", {
                            class: Wa.a.loading
                        }, [this.$t("LOADING")])]);
                    var i = function() {
                        switch (n.rating) {
                        case w.TitleDetailView.Rating.ALLAGE:
                            return "ALLAGE";
                        case w.TitleDetailView.Rating.MATURE:
                            return "MATURE";
                        case w.TitleDetailView.Rating.TEEN:
                            return "TEEN";
                        case w.TitleDetailView.Rating.TEENPLUS:
                            return "TEENPLUS"
                        }
                    }()
                      , r = function() {
                        switch (n.titleLabels.releaseSchedule) {
                        case w.TitleDetailView.ReleaseSchedule.DISABLED:
                            return "COMPLETED";
                        case w.TitleDetailView.ReleaseSchedule.EVERYDAY:
                            return "DAILY";
                        case w.TitleDetailView.ReleaseSchedule.WEEKLY:
                            return "WEEKLY";
                        case w.TitleDetailView.ReleaseSchedule.BIWEEKLY:
                            return "BIWEEKLY";
                        case w.TitleDetailView.ReleaseSchedule.MONTHLY:
                            return "MONTHLY";
                        case w.TitleDetailView.ReleaseSchedule.BIMONTHLY:
                            return "BIMONTHLY";
                        case w.TitleDetailView.ReleaseSchedule.TRIMONTHLY:
                            return "TRIMONTHLY";
                        case w.TitleDetailView.ReleaseSchedule.OTHER:
                            return "OTHER";
                        case w.TitleDetailView.ReleaseSchedule.COMPLETED:
                            return "COMPLETED";
                        default:
                            return null
                        }
                    }
                      , o = function(e) {
                        E.instance().titleBannerTapLog(e, parseInt(a.id), "featured_banner", "title_detail", "click")
                    }
                      , s = function(e) {
                        E.instance().titleBannerTapLog(e, parseInt(a.id), "featured_banner", "title_detail", "impression")
                    }
                      , l = (n.advertisement.adNetworks.find((function(e) {
                        var t;
                        return "title_detail_chapterlist" === (null === (t = e.adsense) || void 0 === t ? void 0 : t.location)
                    }
                    )),
                    n.advertisement.adNetworks.find((function(e) {
                        var t;
                        return "title_detail_side" === (null === (t = e.adsense) || void 0 === t ? void 0 : t.location)
                    }
                    )),
                    [])
                      , c = []
                      , u = [];
                    return n.chapterListGroup.forEach((function(e) {
                        e.midChapterList.length && (u = u.concat(e.midChapterList)),
                        e.firstChapterList.length && (l = l.concat(e.firstChapterList)),
                        e.lastChapterList.length && (c = c.concat(e.lastChapterList))
                    }
                    )),
                    e("div", {
                        class: Wa.a.mainContainer
                    }, [function() {
                        if (a.$store.state.detail.model[a.id])
                            return e("div", [e(wt, {
                                class: Wa.a.breadcrumbList,
                                attrs: {
                                    links: [{
                                        name: "home",
                                        path: "/updates"
                                    }, {
                                        name: "manga list",
                                        path: "/manga_list/browser_a"
                                    }, {
                                        name: "".concat(n.title.name),
                                        path: "/titles/".concat(n.title.titleId)
                                    }]
                                }
                            }), e(Ha, {
                                attrs: {
                                    topImage: n.titleImageUrl,
                                    coverImage: n.title.portraitImageUrl,
                                    titleProto: n.title,
                                    viewingPeriod: n.viewingPeriodDescription,
                                    overview: n.overview,
                                    rating: i,
                                    label: n.label.label.toString()
                                }
                            }), e("div", {
                                class: Wa.a.flexContainer
                            }, [e("topside", {
                                class: Wa.a.topside
                            }, [e("div", [e("h6", {
                                class: Wa.a.languageHeader
                            }, [a.$t("LANGUAGES_AVAILABLE")]), e("div", {
                                class: Wa.a.languages
                            }, [n.titleLanguages.map((function(t) {
                                return e("router-link", {
                                    attrs: {
                                        to: "/titles/".concat(t.titleId),
                                        title: "Read in English"
                                    },
                                    class: $(t.language) === n.title.language && Wa.a.active
                                }, [K($(t.language))])
                            }
                            ))])]), function() {
                                return e("div", [e("h6", {
                                    class: Wa.a.updateHeader
                                }, [a.$t("UPDATE_SCHEDULE")]), e("p", {
                                    class: Wa.a.updateInfo
                                }, [null !== n.titleLabels.releaseSchedule && e("div", [e("p", {
                                    class: Wa.a.scheduleLabel
                                }, [r()])]), function() {
                                    if (0 !== n.nextTimeStamp) {
                                        var t = n.updateTiming
                                          , i = en()(new Date(1e3 * n.nextTimeStamp));
                                        switch (t) {
                                        case w.TitleDetailView.UpdateTiming.NOT_REGULARLY:
                                            return e("span", [a.$t("NEW_CHAPTER_ARRIVES_ON"), " ", i.format("dddd, MMM DD, HH:mm")]);
                                        case w.TitleDetailView.UpdateTiming.MONDAY:
                                        case w.TitleDetailView.UpdateTiming.TUESDAY:
                                        case w.TitleDetailView.UpdateTiming.WEDNESDAY:
                                        case w.TitleDetailView.UpdateTiming.THURSDAY:
                                        case w.TitleDetailView.UpdateTiming.FRIDAY:
                                        case w.TitleDetailView.UpdateTiming.SATURDAY:
                                        case w.TitleDetailView.UpdateTiming.SUNDAY:
                                            return e("span", [a.$t("NEW_CHAPTER_ARRIVES"), " ", a.$t("EVERY"), " ", i.format("dddd, HH:mm")]);
                                        case w.TitleDetailView.UpdateTiming.DAY:
                                            return e("span", [a.$t("NEW_CHAPTER_ARRIVES"), " ", a.$t("EVERY_DAY"), " ", i.format("HH:mm")])
                                        }
                                    }
                                }()]), "COMPLETED" !== r() && e("p", {
                                    class: Wa.a.updateDescription
                                }, [n.viewingPeriodDescription])])
                            }(), function() {
                                if (n.isSimulReleased)
                                    return e("div", {
                                        class: Wa.a.simul
                                    }, [e("span", {
                                        class: Wa.a.simulText
                                    }, ["SIMULRELEASE!!!"]), e("div", {
                                        class: Wa.a.simul2
                                    })])
                            }(), e("div", {
                                class: Wa.a.gridContainer
                            }, [e("div", {
                                class: Wa.a.gridItemFacebook
                            }, [e(kn, {
                                attrs: Object(ua["a"])({}, {
                                    url: n.sns.url,
                                    text: n.sns.body
                                })
                            })]), e("div", {
                                class: Wa.a.gridItemTwitter
                            }, [e(An, {
                                attrs: Object(ua["a"])({}, {
                                    url: n.sns.url,
                                    text: n.sns.body
                                })
                            })])])]), e("main", {
                                class: Wa.a.main
                            }, [e(gn, {
                                attrs: {
                                    newChapters: c,
                                    oldChapters: l,
                                    midChapters: u,
                                    overview: n.overview,
                                    nonAppearanceInfo: n.nonAppearanceInfo,
                                    numberOfViews: n.numberOfViews,
                                    rating: i,
                                    planType: n.titleLabels.planType,
                                    isFirstFree: n.isFirstTimeFree
                                }
                            })]), e("aside", {
                                class: Wa.a.sub
                            }, [e("div", {
                                class: Wa.a.topAd
                            }, [e("div", {
                                attrs: {
                                    id: "mangaplus_pc_title_rectangle_1"
                                },
                                class: "gado",
                                style: "min-height: 250px;"
                            })]), e(vn, {
                                attrs: {
                                    items: n.publisherItems,
                                    banners: n.banners
                                }
                            }), n.titleBanners.length > 0 && e("div", {
                                class: Wa.a.banners
                            }, [n.titleBanners.map((function(t) {
                                return e("div", {
                                    class: Wa.a.bannerWrap
                                }, [e("img", {
                                    attrs: {
                                        src: t.imageUrl,
                                        "data-banner-id": t.id
                                    },
                                    class: Wa.a.banner,
                                    on: {
                                        click: function() {
                                            a.$gtm.trackEvent({
                                                category: "title_detail_banner",
                                                action: "Click",
                                                label: t.id
                                            }),
                                            o(t.id),
                                            Ft(a.$router, t.action.url)
                                        },
                                        load: function() {
                                            return s(t.id)
                                        }
                                    }
                                })])
                            }
                            ))])])]), n.ratingPopup && null === localStorage.getItem("rating_checked_" + n.ratingPopup.popupId) && e(Ga, {
                                attrs: {
                                    popup: n.ratingPopup
                                }
                            })])
                    }()])
                }
            }]),
            a
        }(u["c"]);
        En = Object(c["b"])([Object(P["b"])({
            components: {
                "vc-fragment": h
            },
            metaInfo: function() {
                var e, t, a = this.$store.state.detail.model[this.$route.params["id"]], n = a ? (null === (e = a.metaInfo) || void 0 === e ? void 0 : e.metaTitle) ? a.metaInfo.metaTitle : "".concat(a.title.name, " - ").concat(a.title.author) : "MANGA Plus by SHUEISHA", i = a ? (null === (t = a.metaInfo) || void 0 === t ? void 0 : t.metaDescription) ? a.metaInfo.metaDescription : "Read the latest chapters of popular manga for free and officially on MANGA Plus by SHUEISHA. Read ".concat(a.title.name, " on the app or web!") : "Loading";
                null === a || void 0 === a || a.title.language,
                w.Language.SPANISH;
                return {
                    title: n,
                    titleTemplate: "%s | MANGA Plus by Shueisha",
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: "".concat(i)
                    }, {
                        hid: "thumbnail",
                        name: "thumbnail",
                        content: null === a || void 0 === a ? void 0 : a.title.portraitImageUrl
                    }],
                    link: a ? [].concat(Object(ca["a"])(a.titleLanguages.filter((function(e) {
                        return e.language !== a.title.language
                    }
                    )).map((function(e) {
                        return {
                            rel: "alternate",
                            hreflang: q(e.language),
                            href: "https://mangaplus.shueisha.co.jp/titles/".concat(e.titleId)
                        }
                    }
                    ))), [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/titles/".concat(this.$route.params["id"])
                    }]) : []
                }
            }
        })], En);
        var Sn = En
          , Ln = (a("466d"),
        a("c9f1"))
          , Cn = a.n(Ln)
          , Pn = a("6f17")
          , In = a.n(Pn)
          , Nn = w.TitleUpdateStatus
          , jn = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this
                      , a = J(this.$store.state.language, this.title.titles);
                    return e("router-link", {
                        attrs: {
                            to: "/titles/" + a.titleId
                        },
                        class: In.a.allTitle
                    }, [e("div", {
                        class: In.a.title
                    }, [a.titleUpdateStatus === Nn.UP && e("p", {
                        class: In.a.upLabel
                    }, [e("a", {
                        class: In.a.upLabelText
                    }, ["UP"])]), a.titleUpdateStatus === Nn.NEW && e("p", {
                        class: In.a.newLabel
                    }, [e("a", {
                        class: In.a.newLabelText
                    }, ["NEW"])]), a.titleUpdateStatus === Nn.REEDITION && e("p", {
                        class: In.a.reEditionLabel
                    }, [e("a", {
                        class: In.a.reEditionLabelText
                    }, ["RE-EDITION"])]), e("img", {
                        directives: [{
                            name: "lazy",
                            value: a.portraitImageUrl
                        }],
                        attrs: {
                            alt: a.name
                        },
                        class: In.a.image,
                        key: a.titleId
                    })]), e("div", {
                        class: In.a.lang
                    }, [this.title.titles.map((function(a) {
                        return e("span", {
                            class: a.language === t.$store.state.language.serviceLang ? In.a.active : "",
                            attrs: {
                                title: K(a.language)
                            }
                        }, [q(a.language)])
                    }
                    ))]), e("p", {
                        class: In.a.title
                    }, [a.name]), e("p", {
                        class: In.a.author
                    }, [a.author])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], jn.prototype, "title", void 0),
        jn = Object(c["b"])([P["b"]], jn);
        var Dn = jn
          , Vn = a("513e")
          , Rn = a.n(Vn)
          , Un = a("08c6")
          , Mn = a.n(Un)
          , Hn = a("7bb5")
          , xn = a.n(Hn)
          , Bn = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "onClickTag",
                value: function(e) {
                    this.$emit("getTag", e)
                }
            }, {
                key: "onClickLabel",
                value: function(e) {
                    this.$emit("getLabel", e)
                }
            }, {
                key: "onClickClose",
                value: function() {
                    this.$emit("close")
                }
            }, {
                key: "filteredTags",
                value: function() {
                    return this.tags.filter((function(e) {
                        return "One-shot" !== e.tag
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: xn.a.background,
                        directives: [{
                            name: "show",
                            value: this.isShowingModal
                        }],
                        on: {
                            click: this.onClickClose
                        }
                    }, [e("div", {
                        class: xn.a.modalContainer,
                        on: {
                            click: function(e) {
                                return e.stopPropagation()
                            }
                        }
                    }, [e("div", {
                        class: xn.a.modalHeader
                    }, [e("p", ["By Genre"])]), e("div", ["" === this.selectedTag ? e("div", {
                        class: xn.a.modalTagField
                    }, [this.filteredTags().map((function(a) {
                        return e("p", {
                            attrs: {
                                id: a.tag
                            },
                            class: xn.a.modalTag,
                            on: {
                                click: function() {
                                    return t.onClickTag(a.tag)
                                }
                            }
                        }, [e("a", {
                            class: xn.a.modalTagText
                        }, [a.tag])])
                    }
                    ))]) : e("div", {
                        class: xn.a.modalTagField
                    }, [this.filteredTags().map((function(a) {
                        return e("div", [t.selectedTag === a.tag ? e("p", {
                            class: xn.a.modalSelectedTag,
                            on: {
                                click: function() {
                                    return t.onClickTag(a.tag)
                                }
                            }
                        }, [e("a", {
                            class: xn.a.modalSelectedTagText
                        }, [a.tag])]) : e("p", {
                            attrs: {
                                id: a.tag
                            },
                            class: xn.a.modalTag,
                            on: {
                                click: function() {
                                    return t.onClickTag(a.tag)
                                }
                            }
                        }, [e("a", {
                            class: xn.a.modalUnselectedTagText
                        }, [a.tag])])])
                    }
                    ))])]), e("div", {
                        class: xn.a.modalHeader
                    }, [e("p", ["By Label"])]), e("div", {
                        class: xn.a.modalLabelField
                    }, [this.labels.map((function(a) {
                        return e("div", [t.selectedLabel === a.code.toString() ? e("img", {
                            class: xn.a.modalSelectedLabel,
                            attrs: {
                                src: a.url
                            },
                            on: {
                                click: function() {
                                    t.onClickLabel(a.code.toString())
                                }
                            }
                        }) : e("img", {
                            class: xn.a.modalLabel,
                            attrs: {
                                src: a.url
                            },
                            on: {
                                click: function() {
                                    t.onClickLabel(a.code.toString())
                                }
                            }
                        })])
                    }
                    ))])]), e("img", {
                        attrs: {
                            src: a("2acb")
                        },
                        class: xn.a.modalCloseButton
                    })])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Bn.prototype, "selectedTag", void 0),
        Object(c["b"])([Object(u["b"])()], Bn.prototype, "selectedLabel", void 0),
        Object(c["b"])([Object(u["b"])()], Bn.prototype, "tags", void 0),
        Object(c["b"])([Object(u["b"])()], Bn.prototype, "labels", void 0),
        Object(c["b"])([Object(u["b"])()], Bn.prototype, "isShowingModal", void 0),
        Bn = Object(c["b"])([P["b"]], Bn);
        var Gn = Bn
          , Fn = (a("07ac"),
        a("a199"))
          , Wn = a.n(Fn)
          , Yn = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "onChangeSort",
                value: function(e) {
                    this.$emit("getSort", e)
                }
            }, {
                key: "onClickClose",
                value: function() {
                    this.$emit("close")
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: Wn.a.background,
                        directives: [{
                            name: "show",
                            value: this.isShowingModal
                        }],
                        on: {
                            click: this.onClickClose
                        }
                    }, [e("div", {
                        class: Wn.a.modalContainer,
                        on: {
                            click: function(e) {
                                return e.stopPropagation()
                            }
                        }
                    }, [e("div", {
                        class: Wn.a.modalHeader
                    }, [e("p", ["Sort by"])]), e("div", {
                        class: Wn.a.sortSelector
                    }, [Object.values(Kn).map((function(a) {
                        return e("div", {
                            class: Wn.a.sortCell
                        }, [e("input", {
                            attrs: {
                                type: "radio",
                                name: "quarity",
                                id: a.toString(),
                                disabled: t.selectedSort == a
                            },
                            domProps: {
                                value: a,
                                checked: t.selectedSort == a
                            },
                            class: Wn.a.sortInput,
                            on: {
                                change: function(e) {
                                    var a = e.target.value;
                                    t.onChangeSort(a)
                                }
                            }
                        }), e("label", {
                            attrs: {
                                for: a.toString()
                            }
                        }, [a.toString()])])
                    }
                    ))])]), e("img", {
                        attrs: {
                            src: a("2acb")
                        },
                        class: Wn.a.modalCloseButton
                    })])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Yn.prototype, "selectedSort", void 0),
        Object(c["b"])([Object(u["b"])()], Yn.prototype, "isShowingModal", void 0),
        Yn = Object(c["b"])([P["b"]], Yn);
        var $n, Kn, qn = Yn, zn = a("0150"), Qn = a.n(zn);
        (function(e) {
            e[e["wj"] = 0] = "wj",
            e[e["sq"] = 1] = "sq",
            e[e["vj"] = 2] = "vj",
            e[e["yj"] = 3] = "yj",
            e[e["j_plus"] = 4] = "j_plus",
            e[e["revival"] = 5] = "revival",
            e[e["creators"] = 6] = "creators",
            e[e["mee"] = 7] = "mee",
            e[e["tyj"] = 8] = "tyj",
            e[e["others"] = 9] = "others",
            e[e["skj"] = 10] = "skj",
            e[e["giga"] = 11] = "giga",
            e[e["uj"] = 12] = "uj"
        }
        )($n || ($n = {})),
        function(e) {
            e["asc"] = "A to Z",
            e["desc"] = "Z to A",
            e["recent"] = "Most Recent"
        }(Kn || (Kn = {}));
        var Zn = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isShowingFilterModal = !1,
                e.isShowingSortModal = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "beforeRouteLeave",
                value: function(e, t, a) {
                    this.$store.commit("hideSettingModal"),
                    a()
                }
            }, {
                key: "created",
                value: function() {
                    var e, t, a, n = this;
                    0 === this.$store.state.ongoing.model.allTags.length && this.$store.dispatch("ongoing/fetchData").catch((function(e) {
                        at(n.$router, e)
                    }
                    )),
                    this.selectedTag = null !== (e = window.sessionStorage.getItem("search_tag")) && void 0 !== e ? e : "",
                    this.selectedLabel = null !== (t = window.sessionStorage.getItem("search_label")) && void 0 !== t ? t : "",
                    this.sortBy = null !== (a = window.sessionStorage.getItem("search_sort")) && void 0 !== a ? a : Kn.asc
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.$store.state.ongoing.model.allTags
                      , n = [{
                        url: fa.a,
                        code: $n.wj
                    }, {
                        url: ya.a,
                        code: $n.sq
                    }, {
                        url: wa.a,
                        code: $n.vj
                    }, {
                        url: ka.a,
                        code: $n.yj
                    }, {
                        url: Aa.a,
                        code: $n.j_plus
                    }, {
                        url: Sa.a,
                        code: $n.creators
                    }, {
                        url: Mn.a,
                        code: $n.tyj
                    }, {
                        url: Ia.a,
                        code: $n.skj
                    }, {
                        url: ja.a,
                        code: $n.giga
                    }, {
                        url: Va.a,
                        code: $n.uj
                    }]
                      , i = function(e) {
                        t.selectedTag === e ? (t.selectedTag = "",
                        window.sessionStorage.setItem("search_tag", ""),
                        t.$forceUpdate()) : (t.selectedTag = e,
                        window.sessionStorage.setItem("search_tag", t.selectedTag),
                        t.$forceUpdate())
                    }
                      , r = function(e) {
                        t.selectedLabel === e ? (t.selectedLabel = "",
                        window.sessionStorage.setItem("search_label", ""),
                        t.$forceUpdate()) : (t.selectedLabel = e,
                        window.sessionStorage.setItem("search_label", t.selectedLabel),
                        t.$forceUpdate())
                    }
                      , o = function(e) {
                        t.sortBy = e,
                        window.sessionStorage.setItem("search_sort", t.sortBy.toString()),
                        t.$forceUpdate()
                    };
                    return e("div", {
                        class: Rn.a.mangaList
                    }, [e("div", {
                        class: Rn.a.header
                    }, [e("div", {
                        class: Rn.a.topContent
                    }, [e(Tt, {
                        class: Rn.a.titleWithBreadcrumbs,
                        attrs: {
                            links: [{
                                name: "home",
                                path: "/updates"
                            }, {
                                name: "manga list",
                                path: this.$route.path
                            }]
                        }
                    }, [this.$t("MANGALIST")]), e(ta, {
                        class: Rn.a.title
                    }, [this.$t("MANGALIST")]), e("nav", {
                        class: Rn.a.toggle
                    }, [e("ul", [e("li", {
                        class: Rn.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/manga_list/ongoing",
                            "active-class": Rn.a.linkActive
                        }
                    }, ["Ongoing"])]), e("li", {
                        class: Rn.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/manga_list/completed",
                            "active-class": Rn.a.linkActive
                        }
                    }, ["Completed"])]), e("li", {
                        class: Rn.a.toggleItem
                    }, [e("router-link", {
                        attrs: {
                            to: "/manga_list/one_shot",
                            "active-class": Rn.a.linkActive
                        }
                    }, ["One-shot"])])])])]), e("div", {
                        class: Rn.a.headerButtons
                    }, ["" !== this.selectedTag && e("p", {
                        class: Rn.a.selectedFilter
                    }, ["Filter: ", this.selectedTag]), e("p", {
                        class: "".concat(Rn.a.showModalButton, " ").concat(Rn.a.sort),
                        on: {
                            click: function() {
                                t.isShowingSortModal = !0
                            }
                        }
                    }, [e("a", {
                        class: Rn.a.text
                    }, [this.sortBy]), e(Xn, {
                        class: Rn.a.expandIcon
                    })]), e("p", {
                        class: "".concat(Rn.a.showModalButton, " ").concat(Rn.a.filter, " ").concat("" === this.selectedTag ? "" : Rn.a.selected),
                        on: {
                            click: function() {
                                t.isShowingFilterModal = !0
                            }
                        }
                    }, [e("a", {
                        class: Rn.a.text
                    }, ["" === this.selectedTag ? "Filter" : this.selectedTag]), e(Xn, {
                        class: Rn.a.expandIcon
                    })])])]), e(Gn, {
                        attrs: {
                            selectedTag: this.selectedTag,
                            selectedLabel: this.selectedLabel,
                            tags: a,
                            labels: n,
                            isShowingModal: this.isShowingFilterModal
                        },
                        on: {
                            getTag: i,
                            getLabel: r,
                            close: function() {
                                t.isShowingFilterModal = !1
                            }
                        }
                    }), e(qn, {
                        attrs: {
                            selectedSort: this.sortBy,
                            isShowingModal: this.isShowingSortModal
                        },
                        on: {
                            close: function() {
                                return t.isShowingSortModal = !1
                            },
                            getSort: o
                        }
                    }), e("button", {
                        class: Rn.a.spFilterButton,
                        on: {
                            click: function(e) {
                                e.stopPropagation(),
                                t.isShowingFilterModal = !0
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: Qn.a
                        },
                        class: Rn.a.icon
                    })]), e("router-view", {
                        class: Rn.a.listContent,
                        attrs: {
                            selectedTag: this.selectedTag,
                            selectedLabel: this.selectedLabel,
                            sortBy: this.sortBy
                        }
                    })])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Zn.prototype, "selectedTag", void 0),
        Object(c["b"])([Object(u["b"])()], Zn.prototype, "selectedLabel", void 0),
        Object(c["b"])([Object(u["b"])()], Zn.prototype, "sortBy", void 0),
        Zn = Object(c["b"])([Object(P["b"])({
            components: {
                FilterModal: Gn,
                SortModal: qn
            }
        })], Zn);
        var Jn = Zn
          , Xn = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    class: t.data.class,
                    attrs: {
                        width: "8",
                        height: "6",
                        viewBox: "0 0 8 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M4 5.25316L0 1.25316L0.933333 0.319824L4 3.38649L7.06667 0.319824L8 1.25316L4 5.25316Z",
                        fill: "#FFD600"
                    }
                })])
            }
        })
          , ei = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.titles = [],
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e, t, a, n, i = this;
                    0 === (null === (n = null === (a = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.ongoing) || void 0 === t ? void 0 : t.model) || void 0 === a ? void 0 : a.allTitlesGroup) || void 0 === n ? void 0 : n.length) && this.$store.dispatch("ongoing/fetchData").catch((function(e) {
                        at(i.$router, e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    for (var t, a, n, i, r = this, o = null === (i = null === (n = null === (a = null === (t = this.$store.state) || void 0 === t ? void 0 : t.ongoing) || void 0 === a ? void 0 : a.model) || void 0 === n ? void 0 : n.allTitlesGroup) || void 0 === i ? void 0 : i.filter((function(e) {
                        for (var t = 0; t < e.titles.length; t++) {
                            var a = e.titles[t];
                            if (r.$store.state.language.contentLangs.includes(a.language)) {
                                if ("" !== r.selectedTag) {
                                    var n = e.tags.filter((function(e) {
                                        return e.tag === r.selectedTag
                                    }
                                    )).length > 0;
                                    if (!n)
                                        return !1
                                }
                                return !!("" === r.selectedLabel || e.label && e.label.label.toString() === r.selectedLabel)
                            }
                        }
                    }
                    )), s = [], l = [], c = [], u = [], d = 0; d < o.length; d++)
                        o[d].theTitle.charAt(0).match(/^[A-Za-z]*$/) ? l.push(o[d]) : o[d].theTitle.charAt(0).match(/^[0-9]*$/) ? c.push(o[d]) : u.push(o[d]);
                    switch (this.sortBy) {
                    case Kn.asc:
                        for (var p = 0; p < l.length; p++)
                            for (var h = 0; h < l.length; h++)
                                if (l[h].theTitle.toUpperCase() > l[p].theTitle.toUpperCase()) {
                                    var g = l[h];
                                    l[h] = l[p],
                                    l[p] = g
                                }
                        s = l.concat(c.concat(u));
                        break;
                    case Kn.desc:
                        for (var m = l.length - 1; m >= 0; m--)
                            for (var b = l.length - 1; b >= 0; b--)
                                if (l[b].theTitle.toUpperCase() > l[m].theTitle.toUpperCase()) {
                                    var f = l[b];
                                    l[b] = l[m],
                                    l[m] = f
                                }
                        s = u.concat(c.concat(l));
                        break;
                    case Kn.recent:
                        s = o;
                        break
                    }
                    var v = s.map((function(t) {
                        return e(Dn, {
                            attrs: {
                                title: t
                            }
                        })
                    }
                    ));
                    return e("div", {
                        class: Cn.a.allTitles
                    }, [s.length > 0 ? v : e("p", {
                        class: Cn.a.emptyText
                    }, [this.$t("NOT_FOUND_RESULT")])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], ei.prototype, "selectedTag", void 0),
        Object(c["b"])([Object(u["b"])()], ei.prototype, "selectedLabel", void 0),
        Object(c["b"])([Object(u["b"])()], ei.prototype, "sortBy", void 0),
        ei = Object(c["b"])([Object(P["b"])({
            components: {
                AllTitle: Dn
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/manga_list/ongoing"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], ei);
        var ti = ei
          , ai = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.titles = [],
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e, t, a, n, i = this;
                    0 === (null === (n = null === (a = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.completed) || void 0 === t ? void 0 : t.model) || void 0 === a ? void 0 : a.allTitlesGroup) || void 0 === n ? void 0 : n.length) && this.$store.dispatch("completed/fetchData").catch((function(e) {
                        at(i.$router, e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    for (var t, a, n, i, r = this, o = null === (i = null === (n = null === (a = null === (t = this.$store.state) || void 0 === t ? void 0 : t.completed) || void 0 === a ? void 0 : a.model) || void 0 === n ? void 0 : n.allTitlesGroup) || void 0 === i ? void 0 : i.filter((function(e) {
                        for (var t = 0; t < e.titles.length; t++) {
                            var a = e.titles[t];
                            if (r.$store.state.language.contentLangs.includes(a.language)) {
                                if ("" !== r.selectedTag) {
                                    var n = e.tags.filter((function(e) {
                                        return e.tag === r.selectedTag
                                    }
                                    )).length > 0;
                                    if (!n)
                                        return !1
                                }
                                return !!("" === r.selectedLabel || e.label && e.label.label.toString() === r.selectedLabel)
                            }
                        }
                    }
                    )), s = [], l = [], c = [], u = [], d = 0; d < o.length; d++)
                        o[d].theTitle.charAt(0).match(/^[A-Za-z]*$/) ? l.push(o[d]) : o[d].theTitle.charAt(0).match(/^[0-9]*$/) ? c.push(o[d]) : u.push(o[d]);
                    switch (this.sortBy) {
                    case Kn.asc:
                        for (var p = 0; p < l.length; p++)
                            for (var h = 0; h < l.length; h++)
                                if (l[h].theTitle.toUpperCase() > l[p].theTitle.toUpperCase()) {
                                    var g = l[h];
                                    l[h] = l[p],
                                    l[p] = g
                                }
                        s = l.concat(c.concat(u));
                        break;
                    case Kn.desc:
                        for (var m = l.length - 1; m >= 0; m--)
                            for (var b = l.length - 1; b >= 0; b--)
                                if (l[b].theTitle.toUpperCase() > l[m].theTitle.toUpperCase()) {
                                    var f = l[b];
                                    l[b] = l[m],
                                    l[m] = f
                                }
                        s = u.concat(c.concat(l));
                        break;
                    case Kn.recent:
                        s = o;
                        break
                    }
                    var v = s.map((function(t) {
                        return e(Dn, {
                            attrs: {
                                title: t
                            }
                        })
                    }
                    ));
                    return e("div", {
                        class: Cn.a.allTitles
                    }, [s.length > 0 ? v : e("p", {
                        class: Cn.a.emptyText
                    }, [this.$t("NOT_FOUND_RESULT")])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], ai.prototype, "selectedTag", void 0),
        Object(c["b"])([Object(u["b"])()], ai.prototype, "selectedLabel", void 0),
        Object(c["b"])([Object(u["b"])()], ai.prototype, "sortBy", void 0),
        ai = Object(c["b"])([Object(P["b"])({
            components: {
                AllTitle: Dn
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/manga_list/completed"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], ai);
        var ni = ai
          , ii = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.titles = [],
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e, t, a, n, i = this;
                    0 === (null === (n = null === (a = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.oneShot) || void 0 === t ? void 0 : t.model) || void 0 === a ? void 0 : a.allTitlesGroup) || void 0 === n ? void 0 : n.length) && this.$store.dispatch("oneShot/fetchData").catch((function(e) {
                        at(i.$router, e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    for (var t, a, n, i, r = this, o = null === (i = null === (n = null === (a = null === (t = this.$store.state) || void 0 === t ? void 0 : t.oneShot) || void 0 === a ? void 0 : a.model) || void 0 === n ? void 0 : n.allTitlesGroup) || void 0 === i ? void 0 : i.filter((function(e) {
                        for (var t = 0; t < e.titles.length; t++) {
                            var a = e.titles[t];
                            if (r.$store.state.language.contentLangs.includes(a.language)) {
                                if ("" !== r.selectedTag) {
                                    var n = e.tags.filter((function(e) {
                                        return e.tag === r.selectedTag
                                    }
                                    )).length > 0;
                                    if (!n)
                                        return !1
                                }
                                return !!("" === r.selectedLabel || e.label && e.label.label.toString() === r.selectedLabel)
                            }
                        }
                    }
                    )), s = [], l = [], c = [], u = [], d = 0; d < o.length; d++)
                        o[d].theTitle.charAt(0).match(/^[A-Za-z]*$/) ? l.push(o[d]) : o[d].theTitle.charAt(0).match(/^[0-9]*$/) ? c.push(o[d]) : u.push(o[d]);
                    switch (this.sortBy) {
                    case Kn.asc:
                        for (var p = 0; p < l.length; p++)
                            for (var h = 0; h < l.length; h++)
                                if (l[h].theTitle.toUpperCase() > l[p].theTitle.toUpperCase()) {
                                    var g = l[h];
                                    l[h] = l[p],
                                    l[p] = g
                                }
                        s = l.concat(c.concat(u));
                        break;
                    case Kn.desc:
                        for (var m = l.length - 1; m >= 0; m--)
                            for (var b = l.length - 1; b >= 0; b--)
                                if (l[b].theTitle.toUpperCase() > l[m].theTitle.toUpperCase()) {
                                    var f = l[b];
                                    l[b] = l[m],
                                    l[m] = f
                                }
                        s = u.concat(c.concat(l));
                        break;
                    case Kn.recent:
                        s = o;
                        break
                    }
                    var v = s.map((function(t) {
                        return e(Dn, {
                            attrs: {
                                title: t
                            }
                        })
                    }
                    ));
                    return e("div", {
                        class: Cn.a.allTitles
                    }, [s.length > 0 ? v : e("p", {
                        class: Cn.a.emptyText
                    }, [this.$t("NOT_FOUND_RESULT")])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], ii.prototype, "selectedTag", void 0),
        Object(c["b"])([Object(u["b"])()], ii.prototype, "selectedLabel", void 0),
        Object(c["b"])([Object(u["b"])()], ii.prototype, "sortBy", void 0),
        ii = Object(c["b"])([Object(P["b"])({
            components: {
                AllTitle: Dn
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/manga_list/one_shot"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], ii);
        var ri = ii
          , oi = a("0a63")
          , si = a.n(oi)
          , li = a("8b7a")
          , ci = a.n(li)
          , ui = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.titleGroup ? this.titleGroup.titles.find((function(e) {
                        return e.language === t.$store.state.language.serviceLang
                    }
                    )) : null;
                    return void 0 === a || null === a ? e("div") : e("router-link", {
                        attrs: {
                            to: "/titles/" + a.titleId
                        }
                    }, [function() {
                        switch (t.index) {
                        case 0:
                            return e("p", {
                                class: ci.a.rankingNumber
                            }, [e("img", {
                                attrs: {
                                    src: Nt.a
                                },
                                class: ci.a.icon
                            })]);
                        case 1:
                            return e("p", {
                                class: ci.a.rankingNumber
                            }, [e("img", {
                                attrs: {
                                    src: Dt.a
                                },
                                class: ci.a.icon
                            })]);
                        case 2:
                            return e("p", {
                                class: ci.a.rankingNumber
                            }, [e("img", {
                                attrs: {
                                    src: Rt.a
                                },
                                class: ci.a.icon
                            })]);
                        default:
                            return e("p", {
                                class: "".concat(ci.a.icon, " ").concat(ci.a.rankingNumber)
                            }, [t.index + 1])
                        }
                    }(), e("div", {
                        class: ci.a.rankingTitle
                    }, [e("img", {
                        directives: [{
                            name: "lazy",
                            value: a.portraitImageUrl
                        }],
                        key: a.titleId,
                        attrs: {
                            alt: "Read the Manga ".concat(a.name, " by ").concat(a.author, " for free!")
                        },
                        class: ci.a.titleImg
                    }), e("div", {
                        class: ci.a.titleDetail
                    }, [e("p", {
                        class: ci.a.title
                    }, [" ", a.name]), e("p", {
                        class: ci.a.author
                    }, [" ", a.author]), e("p", {
                        class: ci.a.viewCount
                    }, [e("img", {
                        class: ci.a.viewCountIcon,
                        attrs: {
                            src: Mt.a
                        }
                    }), this.titleGroup.score])])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], ui.prototype, "titleGroup", void 0),
        Object(c["b"])([Object(u["b"])()], ui.prototype, "index", void 0),
        ui = Object(c["b"])([P["b"]], ui);
        var di = ui
          , pi = a("f21f")
          , hi = a.n(pi)
          , gi = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "click",
                value: function() {
                    this.$destroy(),
                    this.$el.parentNode.removeChild(this.$el)
                }
            }, {
                key: "onClickImage",
                value: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.$gtm.trackEvent({
                        category: "popup",
                        action: "Click",
                        label: this.popup.popupId
                    }),
                    E.instance().popupTapLog(this.popup.popupId),
                    Ft(this.$router, this.popup.oneImage.action.url)
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$gtm.trackEvent({
                        category: "popup",
                        action: "Impression",
                        label: this.popup.popupId,
                        value: 1,
                        noninteraction: !0
                    }),
                    this.popup.oneImage && (document.body.style.height = "100vh",
                    document.body.style.overflow = "hidden")
                }
            }, {
                key: "destroyed",
                value: function() {
                    document.body.style.height = "auto",
                    document.body.style.overflow = "auto"
                }
            }, {
                key: "render",
                value: function(e) {
                    return this.popup.oneImage ? e("div", {
                        class: hi.a.container,
                        on: {
                            click: this.click
                        }
                    }, [e("img", {
                        attrs: {
                            src: this.popup.oneImage.imageUrl
                        },
                        class: hi.a.oneImage,
                        on: {
                            click: this.onClickImage
                        }
                    })]) : e("template")
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], gi.prototype, "popup", void 0),
        gi = Object(c["b"])([P["b"]], gi);
        var mi = a("5e49")
          , bi = a.n(mi)
          , fi = a("eda8")
          , vi = a.n(fi)
          , yi = a("c7ab")
          , _i = a.n(yi)
          , wi = w.TitleUpdateStatus
          , Ti = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.titleGroup.titles.filter((function(e) {
                        var a;
                        return null === (a = t.$store.state.language.contentLangs) || void 0 === a ? void 0 : a.includes(e.title.language)
                    }
                    ))
                      , n = Z(this.$store.state.language, a)
                      , i = this.titleGroup.titleUpdateStatus;
                    return e("div", {
                        class: vi.a.titleWrapper
                    }, [e("router-link", {
                        attrs: {
                            to: "/titles/".concat(n.title.titleId)
                        }
                    }, [e("div", {
                        class: vi.a.title
                    }, [i === wi.UP && e("p", {
                        class: vi.a.upLabel
                    }, [e("a", {
                        class: vi.a.upLabelText
                    }, ["UP"])]), i === wi.NEW && e("p", {
                        class: vi.a.newLabel
                    }, [e("a", {
                        class: vi.a.newLabelText
                    }, ["NEW"])]), i === wi.REEDITION && e("p", {
                        class: vi.a.reEditionLabel
                    }, [e("a", {
                        class: vi.a.reEditionLabelText
                    }, ["RE-EDITION"])]), e("img", {
                        directives: [{
                            name: "lazy",
                            value: n.title.portraitImageUrl
                        }],
                        class: vi.a.titleImage,
                        key: n.title.titleId,
                        attrs: {
                            alt: "Read the Manga ".concat(n.title.name, " by ").concat(n.title.author, " for free!")
                        }
                    }), e("div", {
                        class: vi.a.titleDescription
                    }, [e("p", {
                        class: vi.a.titleName
                    }, [n.title.name]), e("p", {
                        class: vi.a.author
                    }, [n.title.author])])])]), e("router-link", {
                        attrs: {
                            to: "/viewer/".concat(n.chapterId),
                            tag: "div"
                        },
                        class: vi.a.chapter
                    }, [e("div", {
                        class: vi.a.chapterTitleWrapper,
                        attrs: {
                            title: "Read chapter ".concat(this.titleGroup.chapterNumber, " of ").concat(this.titleGroup.theTitle, " for free!")
                        }
                    }, [e("p", {
                        class: vi.a.chapterTitle
                    }, [n.chapterName]), e("p", {
                        class: vi.a.viewCount
                    }, [e("img", {
                        attrs: {
                            src: _i.a
                        },
                        class: vi.a.viewIcon
                    }), n.title.viewCount])]), e("p", {
                        class: vi.a.chapterDescription
                    }, [n.chapterSubTitle]), e("p", {
                        class: vi.a.latest
                    }, [this.$t("READ_LATEST")]), this.$store.state.language.contentLangs.length > 1 && e("div", {
                        class: vi.a.languages
                    }, [a.map((function(t) {
                        return e("router-link", {
                            attrs: {
                                to: "/viewer/".concat(t.chapterId),
                                tag: "span",
                                title: "Read in ".concat(K(t.title.language))
                            },
                            class: t.title.language === n.title.language ? vi.a.active : ""
                        }, [q(t.title.language).toUpperCase()])
                    }
                    ))])])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], Ti.prototype, "titleGroup", void 0),
        Object(c["b"])([Object(u["b"])()], Ti.prototype, "groupName", void 0),
        Ti = Object(c["b"])([P["b"]], Ti);
        var ki = Ti
          , Oi = a("f877")
          , Ai = a.n(Oi)
          , Ei = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "mounted",
                value: function() {
                    dn({
                        pcAds: [],
                        spAds: [{
                            path: "/16791533/MANGAPLUS/mangaplus_sp_updates_banner_1",
                            size: ["fluid", [320, 50], [320, 100], [1, 1]],
                            div: "mangaplus_sp_updates_banner_1"
                        }]
                    }, !0)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , a = this.titles.filter((function(e) {
                        for (var a = 0; a < e.title.titles.length; a++) {
                            var n = e.title.titles[a];
                            if (t.$store.state.language.contentLangs.includes(n.title.language))
                                return !0
                        }
                    }
                    ))
                      , n = 6;
                    return e("div", [lt ? e("vc-fragment", [e("div", {
                        class: Ai.a.gridContainer
                    }, [a.slice(0, n).map((function(t) {
                        return e(ki, {
                            attrs: {
                                titleGroup: t.title,
                                groupName: t.groupName
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Ai.a.midAd
                    }, [e("div", {
                        attrs: {
                            id: "mangaplus_sp_updates_banner_1"
                        }
                    })]), e("div", {
                        class: Ai.a.gridContainer
                    }, [a.slice(n).map((function(t) {
                        return e(ki, {
                            attrs: {
                                titleGroup: t.title,
                                groupName: t.groupName
                            }
                        })
                    }
                    ))])]) : e("div", {
                        class: Ai.a.gridContainer
                    }, [a.map((function(t, a) {
                        return e(ki, {
                            attrs: {
                                titleGroup: t.title,
                                groupName: t.groupName
                            }
                        })
                    }
                    ))])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], Ei.prototype, "titles", void 0),
        Ei = Object(c["b"])([Object(P["b"])({
            components: {
                UpdatedTitle: ki,
                "vc-fragment": h
            }
        })], Ei);
        var Si = Ei
          , Li = a("6ae4")
          , Ci = a.n(Li)
          , Pi = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = function e(t) {
                        t && (t.preventDefault(),
                        t.stopPropagation());
                        var a = window.pageYOffset;
                        window.scrollTo(0, Math.floor(.7 * a)),
                        a > 0 && window.setTimeout(e, 10)
                    };
                    return e("div", {
                        class: Ci.a.btn,
                        on: {
                            click: t
                        }
                    }, [e("div", {
                        class: Ci.a.icon
                    })])
                }
            }]),
            a
        }(u["c"]);
        Pi = Object(c["b"])([P["b"]], Pi);
        var Ii = Pi
          , Ni = a("2bd2")
          , ji = w.WebHomeViewV4
          , Di = 25
          , Vi = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.model = new ji,
                e.bannerEvents = [],
                e.isWide = !1,
                e.scroll = new Ni["a"],
                e.slideCoords = 0,
                e
            }
            return Object(o["a"])(n, [{
                key: "beforeRouteLeave",
                value: function(e, t, a) {
                    this.$store.commit("hideSettingModal"),
                    a()
                }
            }, {
                key: "created",
                value: function() {
                    var e = this;
                    window.addEventListener("resize", this.handleResizeEvent, !1),
                    0 === this.$store.state.home.model.topBanners.length && this.$store.dispatch("home/fetchData").catch((function(t) {
                        at(e.$router, t)
                    }
                    )),
                    window.addEventListener("scroll", this.handleScrollEvent, !1),
                    this.handleResizeEvent()
                }
            }, {
                key: "handleResizeEvent",
                value: function() {
                    this.isWide = window.innerWidth > 768
                }
            }, {
                key: "handleScrollEvent",
                value: function() {
                    this.scroll.next(scrollY)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    un(),
                    window.removeEventListener("resize", this.handleResizeEvent, !1),
                    this.slideCoords = 0
                }
            }, {
                key: "mounted",
                value: function() {
                    dn({
                        pcAds: [{
                            path: "/16791533/MANGAPLUS/mangaplus_pc_updates_rectangle_1",
                            size: ["fluid", [300, 250], [1, 1]],
                            div: "mangaplus_pc_updates_rectangle_1"
                        }, {
                            path: "/16791533/MANGAPLUS/mangaplus_pc_updates_rectangle_2",
                            size: ["fluid", [300, 250], [1, 1]],
                            div: "mangaplus_pc_updates_rectangle_2"
                        }],
                        spAds: []
                    }, !0)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , n = [];
                    this.$store.state.home.model.groups.forEach((function(e) {
                        n.push.apply(n, Object(ca["a"])(e.titleGroups.map((function(t) {
                            return {
                                title: t,
                                groupName: e.groupName
                            }
                        }
                        ))))
                    }
                    ));
                    var i = this.$store.state.home.model.topBanners[0];
                    return i && !this.bannerEvents.includes(0) && (this.bannerEvents.push(0),
                    this.$gtm.trackEvent({
                        category: "top_banner",
                        action: "Impression",
                        label: i.id,
                        value: 1,
                        noninteraction: !0
                    })),
                    e("div", [e("div", {
                        class: bi.a.fluidImage
                    }), e("carousel", {
                        attrs: {
                            perPage: 1,
                            perPageCustom: [[728, 1], [1024, 2], [1600, 3]],
                            autoplayTimeout: 3e3,
                            autoplayHoverPause: !0,
                            scrollPerPage: !0,
                            paginationActiveColor: "#ffd600",
                            paginationColor: "#6e6e6e",
                            autoplay: !0,
                            loop: !0,
                            paginationSize: 12
                        },
                        on: {
                            pageChange: function(e) {
                                var a = t.$store.state.home.model.topBanners[e];
                                a && !t.bannerEvents.includes(e) && (t.bannerEvents.push(e),
                                t.$gtm.trackEvent({
                                    category: "top_banner",
                                    action: "Impression",
                                    label: a.id,
                                    value: 1,
                                    noninteraction: !0
                                }))
                            }
                        },
                        ref: "carousel"
                    }, [this.$store.state.home.model.topBanners.map((function(a) {
                        return e("slide", [e("img", {
                            attrs: {
                                src: a.imageUrl
                            },
                            class: bi.a.banner,
                            on: {
                                mousedown: function(e) {
                                    return t.slideCoords = e.clientX * e.clientY
                                },
                                mouseup: function(e) {
                                    t.$gtm.trackEvent({
                                        category: "top_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Math.abs(e.clientX * e.clientY - t.slideCoords) < 1e3 && Ft(t.$router, a.action.url)
                                },
                                click: function() {
                                    E.instance().bannerTapLog(a.id)
                                }
                            }
                        })])
                    }
                    ))]), e("div", {
                        class: bi.a.flexContainer
                    }, [e("main", {
                        class: bi.a.main
                    }, [e("warn", {
                        class: bi.a.warn
                    }, [e("span", ["Be aware! Your reading log and favorited series won't be saved or shared between the beta and final release!", e("img", {
                        attrs: {
                            src: a("0b2a")
                        }
                    })])]), e("div", {
                        class: bi.a.group
                    }, [e("div", {
                        class: bi.a.header
                    }, [e("title", {
                        class: bi.a.dailyTitle
                    }, [this.$t("DAILY")]), e("router-link", {
                        attrs: {
                            to: "/manga_list/updated"
                        },
                        class: bi.a.dailyShowAll
                    }, [this.$t("VIEW_UPDATES")])]), e(Si, {
                        attrs: {
                            titles: n
                        }
                    }), this.$store.state.home.model.featuredTitleLists.filter((function(e) {
                        return "Fantasy" !== e.listName
                    }
                    )).map((function(t) {
                        return e(na, {
                            attrs: {
                                titleList: t
                            }
                        })
                    }
                    ))]), e("div", {
                        class: bi.a.bottomAd
                    })]), e("aside", {
                        class: bi.a.sub
                    }, [e("social", {
                        class: bi.a.socials
                    }, [e("a", {
                        attrs: {
                            href: this.$t("DISCORD_LINK").toString()
                        }
                    }, ["Discord"]), e("a", {
                        attrs: {
                            href: this.$t("TWITTER_LINK").toString()
                        }
                    }, ["X"]), e("a", {
                        attrs: {
                            href: this.$t("FACEBOOK_LINK").toString()
                        }
                    }, ["Facebook"])]), e("a", {
                        attrs: {
                            href: "https://medibang.com/mpc/"
                        }
                    }, [e("img", {
                        attrs: {
                            src: a("4648")
                        },
                        class: bi.a.mpcBanner
                    })]), e("div", {
                        class: bi.a.topAd
                    }, [e("div", {
                        attrs: {
                            id: "mangaplus_pc_updates_rectangle_1"
                        },
                        style: "min-height: 250px;"
                    })]), e("div", {
                        class: bi.a.subInnerWrapper
                    }, [e("div", {
                        class: bi.a.subHeader
                    }, [e(ta, {
                        class: bi.a.rankingHeaderTitle
                    }, [this.$t("HOTTEST")]), e("router-link", {
                        attrs: {
                            to: "/ranking/hottest"
                        },
                        class: bi.a.subShowAll
                    }, [this.$t("VIEW_ALL")])]), this.currentTitles.slice(0, Di).sort((function(e, t) {
                        return t.score - e.score
                    }
                    )).map((function(t, a) {
                        var n = {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        };
                        return e("div", {
                            class: bi.a.rankingTitle
                        }, [e(di, bt()([{}, n]))])
                    }
                    )), e("router-link", {
                        attrs: {
                            to: "/ranking/hottest"
                        },
                        class: bi.a.subShowAllBottom
                    }, [this.$t("VIEW_ALL")])]), e("div", {
                        class: bi.a.sideAd
                    }, [e("div", {
                        attrs: {
                            id: "mangaplus_pc_updates_rectangle_2"
                        },
                        style: "min-height: 250px;"
                    })])])]), this.$store.state.home.model.popup && e(gi, {
                        attrs: {
                            popup: this.$store.state.home.model.popup
                        }
                    })])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.$store.state.home.model.rankedTitles.filter((function(t) {
                        return t.titles.filter((function(t) {
                            return e.$store.state.language.contentLangs.includes(t.language)
                        }
                        ))
                    }
                    ))
                }
            }]),
            n
        }(ot);
        Vi = Object(c["b"])([Object(P["b"])({
            components: {
                Carousel: oi["Carousel"],
                Slide: oi["Slide"],
                RankingTitle: di,
                UpdatedTitles: Si,
                ScrollToTopButton: Ii
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/updates"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], Vi);
        var Ri = Vi
          , Ui = a("ca28")
          , Mi = a.n(Ui)
          , Hi = a("f352")
          , xi = a.n(Hi)
          , Bi = a("ba6e")
          , Gi = a.n(Bi)
          , Fi = a("9d9a")
          , Wi = a.n(Fi)
          , Yi = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: Mi.a.mainContainer
                    }, [e("h1", {
                        class: Mi.a.ttl_main
                    }, [e("p", {
                        class: Mi.a.ttl_main_title
                    }, [this.$t("CONTENT_RATINGS")])]), e("br"), e("br"), e("h3", {
                        class: Mi.a.ttl_sub
                    }, [this.$t("ABOUT_RATING")]), e("p", {
                        class: Mi.a.txt_main
                    }, [this.$t("ABOUT_RATING_DESCRIPTION")]), e("h3", {
                        class: Mi.a.ttl_sub
                    }, [this.$t("ALL_AGES"), e("img", {
                        attrs: {
                            src: xi.a
                        },
                        class: Mi.a.ttl_label1
                    })]), e("p", {
                        class: Mi.a.txt_main
                    }, [this.$t("ALL_AGES_DESCRIPTION")]), e("h3", {
                        class: Mi.a.ttl_sub
                    }, [this.$t("TEEN"), e("img", {
                        attrs: {
                            src: Gi.a
                        },
                        class: Mi.a.ttl_label2
                    })]), e("p", {
                        class: Mi.a.txt_main
                    }, [this.$t("TEEN_DESCRIPTION")]), e("h3", {
                        class: Mi.a.ttl_sub
                    }, [this.$t("TEEN_PLUS"), e("img", {
                        attrs: {
                            src: Wi.a
                        },
                        class: Mi.a.ttl_label3
                    })]), e("p", {
                        class: Mi.a.txt_main
                    }, [this.$t("TEEN_PLUS_DESCRIPTION")]), e("br"), e("p", {
                        class: Mi.a.txt_main
                    }, [this.$t("RATINGS_ATTENTION")])])
                }
            }]),
            a
        }(u["c"]);
        Yi = Object(c["b"])([Object(P["b"])({})], Yi);
        var $i = Yi
          , Ki = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", ["redirecting..."])
                }
            }]),
            a
        }(u["c"]);
        Ki = Object(c["b"])([Object(P["b"])({})], Ki);
        var qi = Ki
          , zi = a("a925")
          , Qi = (a("45fc"),
        a("5319"),
        a("25b4"))
          , Zi = a.n(Qi)
          , Ji = a("5185")
          , Xi = a.n(Ji)
          , er = a("f6ca")
          , tr = a.n(er)
          , ar = a("4dcf")
          , nr = a.n(ar)
          , ir = a("6ae0")
          , rr = a.n(ir)
          , or = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5334 38.9331C10.3167 38.9331 10.1001 38.8831 9.90008 38.7831C9.41675 38.5497 9.11675 38.0497 9.11675 37.5164V32.8997H3.33341C2.55008 32.8997 1.91675 32.2664 1.91675 31.4831V6.48307C1.91675 5.69974 2.55008 5.06641 3.33341 5.06641H36.6667C37.4501 5.06641 38.0834 5.69974 38.0834 6.48307V31.4831C38.0834 32.2664 37.4501 32.8997 36.6667 32.8997H18.9501L11.3834 38.6497C11.1334 38.8497 10.8334 38.9331 10.5334 38.9331ZM4.75008 30.0664H10.5334C11.3167 30.0664 11.9501 30.6997 11.9501 31.4831V34.6664L17.6167 30.3664C17.8667 30.1831 18.1667 30.0831 18.4667 30.0831H35.2334V7.89974H4.75008V30.0664Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M12.8333 14.0001H7.93332C7.39998 14.0001 7.06665 14.3335 7.06665 14.8668V22.7168C7.06665 23.2501 7.39998 23.5835 7.93332 23.5835H12.8333C13.3667 23.5835 13.7 23.2501 13.7 22.7168V22.2168C13.7 21.6835 13.3667 21.3501 12.8333 21.3501H9.59998V19.8668H12.3C12.8333 19.8668 13.1667 19.5335 13.1667 19.0001V18.6501C13.1667 18.1168 12.8333 17.7835 12.3 17.7835H9.59998V16.2001H12.8333C13.3667 16.2001 13.7 15.8668 13.7 15.3335V14.8335C13.7 14.3001 13.3667 13.9668 12.8333 13.9668V14.0001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M22.0832 14.0001H21.2832C20.7499 14.0001 20.4166 14.3334 20.4166 14.8667V18.9167L17.1999 14.4834C16.9666 14.1501 16.6499 14.0001 16.2332 14.0001H15.7666C15.2332 14.0001 14.8999 14.3334 14.8999 14.8667V22.7167C14.8999 23.2501 15.2332 23.5834 15.7666 23.5834H16.5666C17.0999 23.5834 17.4332 23.2501 17.4332 22.7167V18.6167L20.6832 23.0834C20.8999 23.4167 21.2166 23.5834 21.6332 23.5834H22.0999C22.6332 23.5834 22.9666 23.2501 22.9666 22.7167V14.8501C22.9666 14.3167 22.6332 13.9834 22.0999 13.9834L22.0832 14.0001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M32.0666 18.15H29.1999C28.6666 18.15 28.3332 18.4834 28.3332 19.0167V19.3C28.3332 19.8334 28.6666 20.1667 29.1999 20.1667H30.5332V21.1834C30.1499 21.3667 29.6666 21.4667 29.1832 21.4667C27.3332 21.4667 26.4999 20.0834 26.4999 18.8C26.4999 17.2834 27.6166 16.1334 29.0999 16.1334C29.5999 16.1334 30.0666 16.1667 30.7166 16.4834C31.1999 16.7167 31.5832 16.6334 31.8666 16.2334L32.1999 15.8167C32.3666 15.6 32.4166 15.3667 32.3832 15.15C32.3499 15 32.2666 14.7834 31.9832 14.6C31.1499 14.1 30.1999 13.8667 29.0999 13.8667C26.2166 13.8667 23.9666 16.0334 23.9666 18.8C23.9666 21.5667 26.1999 23.7167 29.1499 23.7167C30.3499 23.7167 31.4832 23.3334 32.4499 22.6167C32.7999 22.3667 32.9499 22.0667 32.9499 21.6334V19C32.9499 18.4667 32.6166 18.1334 32.0832 18.1334L32.0666 18.15Z",
                        fill: "#FAFAFA"
                    }
                })])
            }
        })
          , sr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("g", {
                    attrs: {
                        "clip-path": "url(#clip0_5435_54584)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89984 38.7836C9.4165 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54984 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54984 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.90023H4.74984V30.0669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M13.6333 13.9166H8.69992C8.16658 13.9166 7.83325 14.2499 7.83325 14.7832V22.6332C7.83325 23.1666 8.16658 23.4999 8.69992 23.4999H9.49992C10.0333 23.4999 10.3666 23.1666 10.3666 22.6332V19.7999H13.0999C13.6333 19.7999 13.9666 19.4666 13.9666 18.9332V18.5832C13.9666 18.0499 13.6333 17.7166 13.0999 17.7166H10.3666V16.1332H13.6333C14.1666 16.1332 14.4999 15.7999 14.4999 15.2666V14.7666C14.4999 14.2332 14.1666 13.8999 13.6333 13.8999V13.9166Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M22.1833 21.4332C21.95 21.4332 21.2834 21.3998 21.0667 20.0665C22.3 19.6665 23.05 18.5832 23.05 17.1832C23.05 15.2665 21.7167 13.9165 19.8 13.9165H16.3C15.7667 13.9165 15.4333 14.2498 15.4333 14.7832V22.6332C15.4333 23.1665 15.7667 23.4998 16.3 23.4998H17.1C17.6333 23.4998 17.9667 23.1665 17.9667 22.6332V20.2498H18.7333C18.8667 21.2332 19.45 23.5165 21.8333 23.6498C21.8667 23.6498 21.9 23.6498 21.9667 23.6498C22.3167 23.6498 23.1 23.5832 23.2333 23.0332C23.35 22.5165 23.2333 21.9165 23.0167 21.7165C22.7833 21.4665 22.2667 21.4498 22.1833 21.4498V21.4332ZM20.4834 17.2165C20.4834 17.7498 20.1834 18.2832 19.5167 18.2832H17.9667V16.1332H19.5167C20.0834 16.1332 20.4834 16.5832 20.4834 17.2165Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M32.8335 22.4498L29.7502 14.5664C29.5835 14.1498 29.2502 13.9331 28.8002 13.9331H27.8835C27.4169 13.9331 27.0835 14.1664 26.9335 14.5831L23.9002 22.4664C23.7669 22.8331 23.8502 23.0831 23.9502 23.2164C24.0502 23.3498 24.2335 23.4998 24.6169 23.4998H25.4335C25.8835 23.4998 26.2002 23.2664 26.3669 22.8331L26.7502 21.7998H29.9335L30.3335 22.8498C30.5002 23.2664 30.8169 23.4998 31.2835 23.4998H32.1335C32.5169 23.4998 32.7169 23.3498 32.8002 23.2164C32.9002 23.0831 32.9835 22.8498 32.8502 22.4664L32.8335 22.4498ZM29.3335 19.6998H27.3169L28.3335 16.9498L29.3335 19.6998Z",
                        fill: "#FAFAFA"
                    }
                })]), e("defs", [e("clipPath", {
                    attrs: {
                        id: "clip0_5435_54584"
                    }
                }, [e("rect", {
                    attrs: {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }
                })])])])
            }
        })
          , lr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89984 38.7836C9.41651 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54983 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54983 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.9169H4.73317V30.0836L4.74984 30.0669Z",
                        fill: "#FAFAFA"
                    }
                })])
            }
        })
          , cr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89984 38.7836C9.41651 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54983 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54983 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.9169H4.73317V30.0836L4.74984 30.0669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M11.1335 13.9331H8.13351C7.60018 13.9331 7.26685 14.2664 7.26685 14.7998V22.6498C7.26685 23.1831 7.60018 23.5164 8.13351 23.5164H11.1335C13.9168 23.5164 16.0168 21.4664 16.0168 18.7331C16.0168 15.9998 13.9168 13.9498 11.1335 13.9498V13.9331ZM13.4668 18.7164C13.4668 20.2498 12.4502 21.2831 10.9168 21.2831H9.78352V16.1498H10.9168C12.4668 16.1498 13.4668 17.1664 13.4668 18.7164Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M22.7838 13.9332H17.8838C17.3504 13.9332 17.0171 14.2666 17.0171 14.7999V22.6499C17.0171 23.1832 17.3504 23.5166 17.8838 23.5166H22.7838C23.3171 23.5166 23.6504 23.1832 23.6504 22.6499V22.1499C23.6504 21.6166 23.3171 21.2832 22.7838 21.2832H19.5504V19.7999H22.2504C22.7838 19.7999 23.1171 19.4666 23.1171 18.9332V18.5832C23.1171 18.0499 22.7838 17.7166 22.2504 17.7166H19.5504V16.1332H22.7838C23.3171 16.1332 23.6504 15.7999 23.6504 15.2666V14.7666C23.6504 14.2332 23.3171 13.8999 22.7838 13.8999V13.9332Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M31.8834 13.9331H31.0834C30.5501 13.9331 30.2167 14.2664 30.2167 14.7998V19.8331C30.2167 20.9831 29.4167 21.3831 28.7334 21.3831C28.0501 21.3831 27.2667 20.9664 27.2667 19.8331V14.7998C27.2667 14.2664 26.9334 13.9331 26.4001 13.9331H25.6001C25.0667 13.9331 24.7334 14.2664 24.7334 14.7998V19.8331C24.7334 22.4664 26.7501 23.6498 28.7334 23.6498C30.7167 23.6498 32.7501 22.4664 32.7501 19.8331V14.7998C32.7501 14.2664 32.4167 13.9331 31.8834 13.9331Z",
                        fill: "#FAFAFA"
                    }
                })])
            }
        })
          , ur = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89984 38.7836C9.4165 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54984 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54984 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.9169H4.74984V30.0836V30.0669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M12.2501 14H8.83346C8.30013 14 7.9668 14.3333 7.9668 14.8667V22.7167C7.9668 23.25 8.30013 23.5833 8.83346 23.5833H9.63346C10.1668 23.5833 10.5001 23.25 10.5001 22.7167V20.4833H12.2501C14.2001 20.4833 15.5001 19.2 15.5001 17.3C15.5001 15.4 14.1668 14.0167 12.2501 14.0167V14ZM12.9501 17.3C12.9501 17.9333 12.5501 18.3667 11.9835 18.3667H10.5001V16.2167H11.9835C12.5501 16.2167 12.9501 16.6667 12.9501 17.3Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M22.6834 14H16.4668C15.9334 14 15.6001 14.3333 15.6001 14.8667V15.3667C15.6001 15.9 15.9334 16.2333 16.4668 16.2333H18.3168V22.7333C18.3168 23.2667 18.6501 23.6 19.1834 23.6H19.9668C20.5001 23.6 20.8334 23.2667 20.8334 22.7333V16.2333H22.7001C23.2334 16.2333 23.5668 15.9 23.5668 15.3667V14.8667C23.5668 14.3333 23.2334 14 22.7001 14H22.6834Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M30.6168 18.5501C31.2668 18.1334 31.6334 17.5001 31.6334 16.7167C31.6334 15.0834 30.2501 13.9834 28.2001 13.9834H25.2168C24.6834 13.9834 24.3501 14.3167 24.3501 14.8501V22.7001C24.3501 23.2334 24.6834 23.5667 25.2168 23.5667H28.5834C30.6668 23.5667 32.0501 22.4334 32.0501 20.7501C32.0501 19.8834 31.5668 18.9501 30.6168 18.5501ZM29.5501 20.6001C29.5501 21.1001 29.1334 21.4334 28.5001 21.4334H26.8834V19.6501H28.0834C29.1668 19.6501 29.5668 20.1334 29.5668 20.6001H29.5501ZM26.8834 17.8501V16.1167H28.0501C28.5834 16.1167 29.1501 16.3334 29.1501 16.9501C29.1501 17.5001 28.6001 17.8501 27.7334 17.8501H26.8834Z",
                        fill: "#FAFAFA"
                    }
                })])
            }
        })
          , dr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("g", {
                    attrs: {
                        "clip-path": "url(#clip0_5435_54591)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.4531 38.9336C10.2364 38.9336 10.0198 38.8836 9.81976 38.7836C9.33643 38.5502 9.03643 38.0502 9.03643 37.5169V32.9002H3.25309C2.46976 32.9002 1.83643 32.2669 1.83643 31.4836V6.48356C1.83643 5.70023 2.46976 5.06689 3.25309 5.06689H36.5864C37.3698 5.06689 38.0031 5.70023 38.0031 6.48356V31.4836C38.0031 32.2669 37.3698 32.9002 36.5864 32.9002H18.8698L11.3031 38.6502C11.0531 38.8502 10.7531 38.9336 10.4531 38.9336ZM4.66976 30.0669H10.4531C11.2364 30.0669 11.8698 30.7002 11.8698 31.4836V34.6669L17.5364 30.3669C17.7864 30.1836 18.0864 30.0836 18.3864 30.0836H35.1531V7.90023H4.65309V30.0669H4.66976Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M23.2865 14.0005H22.4865C21.9531 14.0005 21.6198 14.3338 21.6198 14.8672V19.9005C21.6198 21.0505 20.8198 21.4505 20.1365 21.4505C19.4531 21.4505 18.6698 21.0338 18.6698 19.9005V14.8672C18.6698 14.3338 18.3365 14.0005 17.8031 14.0005H17.0031C16.4698 14.0005 16.1365 14.3338 16.1365 14.8672V19.9005C16.1365 22.5338 18.1531 23.7172 20.1365 23.7172C22.1198 23.7172 24.1531 22.5338 24.1531 19.9005V14.8672C24.1531 14.3338 23.8198 14.0005 23.2865 14.0005Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M29.8034 17.8505L28.62 17.4172C27.82 17.1172 27.8201 16.8172 27.8201 16.6672C27.8201 16.2005 28.3034 15.9839 28.7867 15.9839C29.2367 15.9839 29.5701 16.1505 29.7701 16.4839C29.9701 16.7672 30.2867 17.0839 30.8367 16.9339L31.3534 16.7839C31.6367 16.7005 31.8367 16.5339 31.9201 16.3172C31.9867 16.1839 32.02 15.9505 31.87 15.6672C31.32 14.5005 30.2034 13.8672 28.7534 13.8672C26.7534 13.8672 25.2867 15.1005 25.2867 16.8005C25.2867 18.6005 27.2701 19.3839 27.8534 19.5839L29.0367 20.0172C29.4367 20.1505 29.92 20.4172 29.92 20.8505C29.92 21.2839 29.4367 21.6005 28.6867 21.6005C28.0534 21.6005 27.52 21.3505 27.2534 20.9005C27.0534 20.5672 26.77 20.2505 26.2367 20.3839L25.6701 20.5172C25.3701 20.6005 25.17 20.7505 25.0534 20.9672C24.9867 21.1005 24.9367 21.3172 25.0534 21.6172C25.5867 22.9339 26.9367 23.7172 28.6867 23.7172C30.9367 23.7172 32.3867 22.5505 32.3867 20.7505C32.3534 19.3839 31.5034 18.4339 29.7701 17.8505H29.8034Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M14.1365 21.5172C13.9031 21.5172 13.2365 21.4838 13.0198 20.1505C14.2531 19.7505 15.0031 18.6672 15.0031 17.2672C15.0031 15.3505 13.6698 14.0005 11.7531 14.0005H8.25314C7.7198 14.0005 7.38647 14.3338 7.38647 14.8672V22.7172C7.38647 23.2505 7.7198 23.5838 8.25314 23.5838H9.05314C9.58647 23.5838 9.9198 23.2505 9.9198 22.7172V20.3338H10.6865C10.8198 21.3172 11.4031 23.6005 13.7865 23.7338C13.8198 23.7338 13.8531 23.7338 13.9198 23.7338C14.2698 23.7338 15.0531 23.6672 15.1865 23.1172C15.3031 22.6005 15.1865 22.0005 14.9698 21.8005C14.7365 21.5505 14.2365 21.5338 14.1365 21.5338V21.5172ZM12.4365 17.3005C12.4365 17.8338 12.1365 18.3672 11.4698 18.3672H9.9198V16.2172H11.4698C12.0365 16.2172 12.4365 16.6672 12.4365 17.3005Z",
                        fill: "#FAFAFA"
                    }
                })]), e("defs", [e("clipPath", {
                    attrs: {
                        id: "clip0_5435_54591"
                    }
                }, [e("rect", {
                    attrs: {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }
                })])])])
            }
        })
          , pr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("g", {
                    attrs: {
                        "clip-path": "url(#clip0_5435_54570)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5334 38.9331C10.3167 38.9331 10.1001 38.8831 9.90008 38.7831C9.41675 38.5497 9.11675 38.0497 9.11675 37.5164V32.8997H3.33341C2.55008 32.8997 1.91675 32.2664 1.91675 31.4831V6.48307C1.91675 5.69974 2.55008 5.06641 3.33341 5.06641H36.6667C37.4501 5.06641 38.0834 5.69974 38.0834 6.48307V31.4831C38.0834 32.2664 37.4501 32.8997 36.6667 32.8997H18.9501L11.3834 38.6497C11.1334 38.8497 10.8334 38.9331 10.5334 38.9331ZM4.75008 30.0664H10.5334C11.3167 30.0664 11.9501 30.6997 11.9501 31.4831V34.6664L17.6167 30.3664C17.8667 30.1831 18.1667 30.0831 18.4667 30.0831H35.2334V7.89974H4.75008V30.0664Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M13.7501 14H7.53341C7.00008 14 6.66675 14.3333 6.66675 14.8667V15.3667C6.66675 15.9 7.00008 16.2333 7.53341 16.2333H9.38341V22.7333C9.38341 23.2667 9.71675 23.6 10.2501 23.6H11.0334C11.5667 23.6 11.9001 23.2667 11.9001 22.7333V16.2333H13.7667C14.3001 16.2333 14.6334 15.9 14.6334 15.3667V14.8667C14.6334 14.3333 14.3001 14 13.7667 14H13.7501Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M22.5501 14.0001H21.7501C21.2167 14.0001 20.8834 14.3334 20.8834 14.8667V17.9167H17.9501V14.8667C17.9501 14.3334 17.6167 14.0001 17.0834 14.0001H16.2834C15.7501 14.0001 15.4167 14.3334 15.4167 14.8667V22.7167C15.4167 23.2501 15.7501 23.5834 16.2834 23.5834H17.0834C17.6167 23.5834 17.9501 23.2501 17.9501 22.7167V20.0667H20.8834V22.7167C20.8834 23.2501 21.2167 23.5834 21.7501 23.5834H22.5501C23.0834 23.5834 23.4167 23.2501 23.4167 22.7167V14.8501C23.4167 14.3167 23.0834 13.9834 22.5501 13.9834V14.0001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M33.25 22.5333L30.1667 14.6499C30 14.2333 29.6667 14.0166 29.2167 14.0166H28.3C27.8334 14.0166 27.5 14.2499 27.35 14.6666L24.3167 22.5499C24.1834 22.9166 24.2667 23.1666 24.3667 23.2999C24.4667 23.4333 24.65 23.5833 25.0334 23.5833H25.85C26.3 23.5833 26.6167 23.3499 26.7834 22.9166L27.1667 21.8833H30.35L30.75 22.9333C30.9167 23.3499 31.2334 23.5833 31.7 23.5833H32.55C32.9334 23.5833 33.1334 23.4333 33.2167 23.2999C33.3167 23.1666 33.4 22.9333 33.2667 22.5499L33.25 22.5333ZM29.75 19.7833H27.7334L28.75 17.0333L29.75 19.7833Z",
                        fill: "#FAFAFA"
                    }
                })]), e("defs", [e("clipPath", {
                    attrs: {
                        id: "clip0_5435_54570"
                    }
                }, [e("rect", {
                    attrs: {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }
                })])])])
            }
        })
          , hr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89983 38.7836C9.4165 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54984 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54984 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.9169H4.74984V30.0836V30.0669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M13.3 14.4834H12.5C12.0667 14.4834 11.7667 14.7001 11.65 15.1167L10.1834 19.8334L8.71672 15.1334C8.60005 14.7167 8.30005 14.4834 7.86671 14.4834H7.05005C6.78338 14.4834 6.56671 14.5834 6.43338 14.7501C6.31671 14.9334 6.30005 15.1667 6.38338 15.4167L8.91671 22.6167C9.06671 23.0167 9.35005 23.2167 9.76672 23.2167H10.5334C10.95 23.2167 11.25 23.0001 11.3834 22.6167L13.9334 15.4167C14.0501 15.0834 13.9834 14.8667 13.8834 14.7501C13.8 14.6167 13.6167 14.4834 13.2667 14.4834H13.3Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M21.4669 14.4834H20.7336C20.2336 14.4834 19.9336 14.7834 19.9336 15.2667V18.9834L16.9836 14.9334C16.7669 14.6334 16.4836 14.4834 16.1003 14.4834H15.6669C15.1669 14.4834 14.8669 14.7834 14.8669 15.2667V22.4501C14.8669 22.9334 15.1669 23.2334 15.6669 23.2334H16.4003C16.8836 23.2334 17.1836 22.9334 17.1836 22.4501V18.7001L20.1503 22.7834C20.3503 23.0834 20.6503 23.2334 21.0169 23.2334H21.4503C21.9336 23.2334 22.2336 22.9334 22.2336 22.4501V15.2667C22.2336 14.7834 21.9336 14.4834 21.4503 14.4834H21.4669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M32.9834 15.2167C32.9334 14.7501 32.6334 14.4834 32.1668 14.4834H31.3001C30.8834 14.4834 30.6001 14.6834 30.4501 15.0667L28.5168 19.7501L26.6001 15.0667C26.4334 14.6667 26.1501 14.4834 25.7334 14.4834H24.8834C24.4001 14.4834 24.1001 14.7667 24.0668 15.2334L23.4001 22.4001C23.3668 22.7167 23.4668 22.9001 23.5668 23.0167C23.6668 23.1167 23.8501 23.2501 24.1668 23.2501H24.9001C25.3834 23.2501 25.6834 22.9667 25.7168 22.5001L26.0334 18.8501L27.5334 22.5501C27.6834 22.9334 27.9834 23.1334 28.3834 23.1334H28.7001C29.1168 23.1334 29.4001 22.9334 29.5501 22.5501L31.0501 18.8501L31.3501 22.4834C31.4001 22.9501 31.7001 23.2167 32.1668 23.2167H32.9001C33.2168 23.2167 33.4001 23.1001 33.4834 22.9834C33.5668 22.8667 33.6834 22.6834 33.6501 22.3667L32.9834 15.1834V15.2167Z",
                        fill: "#FAFAFA"
                    }
                })])
            }
        })
          , gr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("g", {
                    attrs: {
                        "clip-path": "url(#clip0_3117_35313)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5334 38.9331C10.3167 38.9331 10.1001 38.8831 9.90008 38.7831C9.41675 38.5497 9.11675 38.0497 9.11675 37.5164V32.8997H3.33341C2.55008 32.8997 1.91675 32.2664 1.91675 31.4831V6.48307C1.91675 5.69974 2.55008 5.06641 3.33341 5.06641H36.6667C37.4501 5.06641 38.0834 5.69974 38.0834 6.48307V31.4831C38.0834 32.2664 37.4501 32.8997 36.6667 32.8997H18.9501L11.3834 38.6497C11.1334 38.8497 10.8334 38.9331 10.5334 38.9331ZM4.75008 30.0664H10.5334C11.3167 30.0664 11.9501 30.6997 11.9501 31.4831V34.6664L17.6167 30.3664C17.8667 30.1831 18.1667 30.0831 18.4667 30.0831H35.2334V7.89974H4.75008V30.0664Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M12.2001 17.85L11.0168 17.4167C10.2168 17.1167 10.2168 16.8167 10.2168 16.6667C10.2168 16.2 10.7001 15.9834 11.1834 15.9834C11.6334 15.9834 11.9668 16.15 12.1668 16.4834C12.3668 16.7667 12.6834 17.0834 13.2334 16.9334L13.7501 16.7834C14.0334 16.7 14.2334 16.5334 14.3168 16.3167C14.3834 16.1834 14.4168 15.95 14.2668 15.6667C13.7168 14.5 12.6001 13.8667 11.1501 13.8667C9.15011 13.8667 7.68345 15.1 7.68345 16.8C7.68345 18.6 9.66678 19.3834 10.2501 19.5834L11.4334 20.0167C11.8334 20.15 12.3168 20.4167 12.3168 20.85C12.3168 21.2834 11.8334 21.6 11.0834 21.6C10.4501 21.6 9.91678 21.35 9.65011 20.9C9.45011 20.5667 9.16678 20.25 8.63344 20.3834L8.06678 20.5167C7.76678 20.6 7.56678 20.75 7.45011 20.9667C7.38344 21.1 7.33344 21.3167 7.45011 21.6C7.98344 22.9167 9.33345 23.7167 11.0834 23.7167C13.3334 23.7167 14.7834 22.55 14.7834 20.75C14.7501 19.3834 13.9001 18.4334 12.1501 17.85H12.2001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M20.1168 14H16.7002C16.1668 14 15.8335 14.3333 15.8335 14.8667V22.7167C15.8335 23.25 16.1668 23.5833 16.7002 23.5833H17.5002C18.0335 23.5833 18.3668 23.25 18.3668 22.7167V20.4833H20.1168C22.0668 20.4833 23.3668 19.2 23.3668 17.3C23.3668 15.4 22.0335 14.0167 20.1168 14.0167V14ZM20.8168 17.3C20.8168 17.9333 20.4168 18.3667 19.8502 18.3667H18.3668V16.2167H19.8502C20.4168 16.2167 20.8168 16.6667 20.8168 17.3Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M32.5167 22.5333L29.4334 14.6333C29.2667 14.2167 28.9334 14 28.4834 14H27.5667C27.1 14 26.7667 14.2333 26.6167 14.65L23.5667 22.55C23.4334 22.9167 23.5167 23.15 23.6167 23.2833C23.7167 23.4167 23.9 23.5667 24.2834 23.5667H25.1C25.55 23.5667 25.8667 23.3333 26.0334 22.9L26.4167 21.8667H29.6L30 22.9167C30.1667 23.3333 30.4834 23.5667 30.95 23.5667H31.8C32.1834 23.5667 32.3834 23.4167 32.4667 23.2833C32.5667 23.15 32.65 22.9167 32.5167 22.55V22.5333ZM29.0167 19.7833H27L28.0167 17.0333L29.0167 19.7833Z",
                        fill: "#FAFAFA"
                    }
                })]), e("defs", [e("clipPath", {
                    attrs: {
                        id: "clip0_3117_35313"
                    }
                }, [e("rect", {
                    attrs: {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }
                })])])])
            }
        })
          , mr = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("svg", {
                    attrs: {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("g", {
                    attrs: {
                        "clip-path": "url(#clip0_5435_54577)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M10.5332 38.9336C10.3165 38.9336 10.0998 38.8836 9.89984 38.7836C9.4165 38.5502 9.1165 38.0502 9.1165 37.5169V32.9002H3.33317C2.54984 32.9002 1.9165 32.2669 1.9165 31.4836V6.48356C1.9165 5.70023 2.54984 5.06689 3.33317 5.06689H36.6665C37.4498 5.06689 38.0832 5.70023 38.0832 6.48356V31.4836C38.0832 32.2669 37.4498 32.9002 36.6665 32.9002H18.9498L11.3832 38.6502C11.1332 38.8502 10.8332 38.9336 10.5332 38.9336ZM4.74984 30.0669H10.5332C11.3165 30.0669 11.9498 30.7002 11.9498 31.4836V34.6669L17.6165 30.3669C17.8665 30.1836 18.1665 30.0836 18.4665 30.0836H35.2332V7.90023H4.74984V30.0669Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M11.0336 14.0001H10.2336C9.70028 14.0001 9.36694 14.3334 9.36694 14.8667V22.7167C9.36694 23.2501 9.70028 23.5834 10.2336 23.5834H11.0336C11.5669 23.5834 11.9003 23.2501 11.9003 22.7167V14.8501C11.9003 14.3167 11.5669 13.9834 11.0336 13.9834V14.0001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M20.6501 14.0001H19.8501C19.3168 14.0001 18.9835 14.3334 18.9835 14.8667V18.9167L15.7668 14.4834C15.5335 14.1501 15.2168 14.0001 14.8001 14.0001H14.3335C13.8001 14.0001 13.4668 14.3334 13.4668 14.8667V22.7167C13.4668 23.2501 13.8001 23.5834 14.3335 23.5834H15.1335C15.6668 23.5834 16.0001 23.2501 16.0001 22.7167V18.6167L19.2501 23.0834C19.4668 23.4167 19.7835 23.5834 20.2001 23.5834H20.6668C21.2001 23.5834 21.5335 23.2501 21.5335 22.7167V14.8501C21.5335 14.3167 21.2001 13.9834 20.6668 13.9834L20.6501 14.0001Z",
                        fill: "#FAFAFA"
                    }
                }), e("path", {
                    attrs: {
                        d: "M26.9502 14H23.9502C23.4168 14 23.0835 14.3333 23.0835 14.8667V22.7167C23.0835 23.25 23.4168 23.5833 23.9502 23.5833H26.9502C29.7335 23.5833 31.8335 21.5333 31.8335 18.8C31.8335 16.0667 29.7335 14.0167 26.9502 14.0167V14ZM29.2835 18.7833C29.2835 20.3167 28.2668 21.35 26.7335 21.35H25.6002V16.2167H26.7335C28.2835 16.2167 29.2835 17.2333 29.2835 18.7833Z",
                        fill: "#FAFAFA"
                    }
                })]), e("defs", [e("clipPath", {
                    attrs: {
                        id: "clip0_5435_54577"
                    }
                }, [e("rect", {
                    attrs: {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }
                })])])])
            }
        })
          , br = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "toggleLanguageModal",
                value: function() {
                    this.$emit("toggleLanguageModal")
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: "".concat(rr.a.language, " ").concat(this.hasNewAvailableLanguages ? rr.a.hasNew : ""),
                        on: {
                            click: this.toggleLanguageModal
                        }
                    }, [e("div", {
                        class: rr.a.svgContainer
                    }, [function() {
                        switch (t.currentTitleLanguage) {
                        case w.Language.ENGLISH:
                            return e(or);
                        case w.Language.FRENCH:
                            return e(sr);
                        case w.Language.SPANISH:
                            return e(gr);
                        case w.Language.INDONESIAN:
                            return e(mr);
                        case w.Language.THAI:
                            return e(pr);
                        case w.Language.PORTUGUESE_BR:
                            return e(ur);
                        case w.Language.RUSSIAN:
                            return e(dr);
                        case w.Language.GERMAN:
                            return e(cr);
                        case w.Language.VIETNAMESE:
                            return e(hr);
                        default:
                            return e(lr)
                        }
                    }()])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], br.prototype, "hasNewAvailableLanguages", void 0),
        Object(c["b"])([Object(u["b"])()], br.prototype, "currentTitleLanguage", void 0),
        br = Object(c["b"])([Object(P["b"])({})], br);
        var fr = br
          , vr = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.isShowingNavigation = !0,
                e
            }
            return Object(o["a"])(n, [{
                key: "toggleModal",
                value: function() {
                    this.$emit("toggleModal")
                }
            }, {
                key: "toggleSideMenu",
                value: function() {
                    this.$emit("toggleSideMenu")
                }
            }, {
                key: "toggleLanguageModal",
                value: function() {
                    this.$emit("toggleLanguageModal")
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: "".concat(nr.a.header, " ").concat(this.isShowingNavigation ? nr.a.appear : nr.a.hidden)
                    }, [e("div", {
                        class: nr.a.imageContainer
                    }, [e("router-link", {
                        attrs: {
                            to: "/updates"
                        }
                    }, [e("img", {
                        attrs: {
                            src: a("be59"),
                            alt: "logo"
                        },
                        class: nr.a.logo
                    })])]), e("div", {
                        class: nr.a.detailContainer
                    }, [e("router-link", {
                        attrs: {
                            to: "/titles/".concat(this.titleId)
                        }
                    }, [e("h1", {
                        class: nr.a.title
                    }, [this.title])]), e("div", {
                        on: {
                            click: this.toggleSideMenu
                        },
                        class: nr.a.chapterTitleWrapper
                    }, [e("p", {
                        class: nr.a.chapterTitle
                    }, [" ", this.chapterTitle])])]), e(fr, {
                        attrs: {
                            hasNewAvailableLanguages: this.hasNewAvailableLanguages,
                            currentTitleLanguage: this.currentTitleLanguage
                        },
                        on: {
                            toggleLanguageModal: this.toggleLanguageModal
                        },
                        class: nr.a.languageButton
                    }), e("div", {
                        class: nr.a.settingsContainer,
                        on: {
                            click: this.toggleModal
                        }
                    }, [e("div", {
                        class: nr.a.kebabMenu
                    }, [e("div", {
                        class: nr.a.circle
                    }), e("div", {
                        class: nr.a.circle
                    }), e("div", {
                        class: nr.a.circle
                    })])])])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], vr.prototype, "title", void 0),
        Object(c["b"])([Object(u["b"])()], vr.prototype, "titleId", void 0),
        Object(c["b"])([Object(u["b"])()], vr.prototype, "chapterTitle", void 0),
        Object(c["b"])([Object(u["b"])()], vr.prototype, "isShowingNavigation", void 0),
        Object(c["b"])([Object(u["b"])()], vr.prototype, "hasNewAvailableLanguages", void 0),
        Object(c["b"])([Object(u["b"])()], vr.prototype, "currentTitleLanguage", void 0),
        vr = Object(c["b"])([Object(P["b"])({
            components: {
                LanguageButton: fr
            }
        })], vr);
        var yr = vr
          , _r = a("721c")
          , wr = a.n(_r)
          , Tr = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "shareFacebookUrl",
                value: function() {
                    if (this.sns)
                        return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.sns.url)
                }
            }, {
                key: "shareTwitterUrl",
                value: function() {
                    if (this.sns)
                        return "https://x.com/intent/post?text=" + encodeURIComponent(this.sns.url) + "&url=" + encodeURIComponent(this.sns.body)
                }
            }, {
                key: "onChangeMode",
                value: function(e) {
                    var t = e.target.value === Hr.horizontal ? Hr.horizontal : Hr.vertical;
                    this.$gtm.trackEvent({
                        category: "page_direction",
                        action: "Click",
                        label: t
                    }),
                    this.$emit("toggleMode", t)
                }
            }, {
                key: "onChangeQuarity",
                value: function(e) {
                    this.$emit("toggleQuarity", e.target.value)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: "".concat(wr.a.modal, " ").concat(this.isShowingModal ? wr.a.appear : wr.a.hidden),
                        directives: [{
                            name: "show",
                            value: this.isShowingModal
                        }],
                        on: {
                            click: function(e) {
                                t.$emit("click")
                            }
                        }
                    }, [e("div", {
                        class: wr.a.settings,
                        on: {
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }
                    }, [e("div", {
                        class: wr.a.modeContainer
                    }, [e("div", {
                        class: wr.a.quarityContainer
                    }, [e("p", {
                        class: wr.a.modeMessage
                    }, [this.$t("PAGE_RESOLUTION")]), e("div", {
                        class: wr.a.quaritySelection
                    }, [e("div", {
                        class: wr.a.quarity
                    }, [e("input", {
                        attrs: {
                            type: "radio",
                            name: "quarity",
                            value: "low",
                            id: "quarity-low"
                        },
                        class: wr.a.viewMode,
                        domProps: {
                            checked: "low" === this.quarity
                        },
                        on: {
                            change: this.onChangeQuarity
                        }
                    }), e("label", {
                        attrs: {
                            for: "quarity-low"
                        }
                    }, [this.$i18n.t("LOW")])]), e("div", {
                        class: wr.a.quarity
                    }, [e("input", {
                        attrs: {
                            type: "radio",
                            name: "quarity",
                            value: "high",
                            id: "quarity-high"
                        },
                        class: wr.a.viewMode,
                        domProps: {
                            checked: "high" === this.quarity
                        },
                        on: {
                            change: this.onChangeQuarity
                        }
                    }), e("label", {
                        attrs: {
                            for: "quarity-high"
                        }
                    }, [this.$i18n.t("MEDIUM")])]), e("div", {
                        class: wr.a.quarity
                    }, [e("input", {
                        attrs: {
                            type: "radio",
                            name: "quarity",
                            value: "super_high",
                            id: "quarity-super-high"
                        },
                        class: wr.a.viewMode,
                        domProps: {
                            checked: "super_high" === this.quarity
                        },
                        on: {
                            change: this.onChangeQuarity
                        }
                    }), e("label", {
                        attrs: {
                            for: "quarity-super-high"
                        }
                    }, [this.$i18n.t("HIGH")])])])]), e("p", {
                        class: wr.a.modeMessage
                    }, [this.$t("READING_DIRECTION")]), e("div", {
                        class: wr.a.modeItemWrapper
                    }, [e("input", {
                        attrs: {
                            type: "radio",
                            name: "mode",
                            value: "vertical",
                            id: "mode-vertical",
                            disabled: !this.canChangeVerticalMode
                        },
                        class: wr.a.viewMode,
                        domProps: {
                            checked: this.mode === Hr.vertical
                        },
                        on: {
                            change: this.onChangeMode
                        }
                    }), e("label", {
                        attrs: {
                            for: "mode-vertical"
                        }
                    }, [" Vertical"])]), e("div", {
                        class: wr.a.modeItemWrapper
                    }, [e("input", {
                        attrs: {
                            type: "radio",
                            name: "mode",
                            value: "horizontal",
                            id: "mode-horizontal",
                            disabled: !this.canChangeHorizontalMode
                        },
                        class: wr.a.viewMode,
                        domProps: {
                            checked: this.mode === Hr.horizontal
                        },
                        on: {
                            change: this.onChangeMode
                        }
                    }), e("label", {
                        attrs: {
                            for: "mode-horizontal"
                        }
                    }, [" Horizontal"])])]), e("div", {
                        class: wr.a.shareContainer
                    }, [e("p", {
                        class: wr.a.share
                    }, [this.$t("SHARE")]), e("a", {
                        class: "".concat(wr.a.facebook, " ").concat(wr.a.shareButton),
                        attrs: {
                            href: this.shareFacebookUrl(),
                            target: "_blank"
                        }
                    }, [e("div", {
                        class: wr.a.facebookIcon
                    }, [e("img", {
                        attrs: {
                            alt: "facebook",
                            src: a("a177")
                        }
                    })]), e("div", {
                        class: wr.a.facebookLabel
                    }, [e("span", [this.$t("SHARE")])])]), e("a", {
                        class: "".concat(wr.a.twitter, " ").concat(wr.a.shareButton),
                        attrs: {
                            href: this.shareTwitterUrl(),
                            target: "_blank"
                        }
                    }, [e("div", {
                        class: wr.a.twitterIcon
                    }, [e("img", {
                        attrs: {
                            alt: "facebook",
                            src: a("46ef")
                        }
                    })]), e("div", {
                        class: wr.a.twitterLabel
                    }, [e("span", [this.$t("TWEET")])])])])])])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "mode", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "sns", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "chapterId", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "canChangeHorizontalMode", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "canChangeVerticalMode", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "isShowingModal", void 0),
        Object(c["b"])([Object(u["b"])()], Tr.prototype, "quarity", void 0),
        Tr = Object(c["b"])([P["b"]], Tr);
        var kr = Tr
          , Or = a("808d")
          , Ar = a("a748")
          , Er = a("9f2d")
          , Sr = a("2e6e")
          , Lr = a.n(Sr)
          , Cr = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: "".concat(Lr.a.sideMenu, " ").concat(this.isShowingSideMenu ? Lr.a.appear : Lr.a.hidden),
                        on: {
                            click: function(e) {
                                t.$emit("click")
                            }
                        }
                    }, [e("div", {
                        class: "".concat(Lr.a.modal, " ").concat(this.isShowingSideMenu ? Lr.a.appear : Lr.a.hidden),
                        on: {
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }
                    }, [e("div", {
                        class: Lr.a.chapterList
                    }, [e("ul", [this.chapters.map((function(t) {
                        return e("router-link", {
                            attrs: {
                                to: "/viewer/".concat(t.chapterId),
                                tag: "li",
                                "active-class": Lr.a.routerActive
                            },
                            class: Lr.a.chapter
                        }, [t.name])
                    }
                    ))])])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Cr.prototype, "chapters", void 0),
        Object(c["b"])([Object(u["b"])()], Cr.prototype, "isShowingSideMenu", void 0),
        Cr = Object(c["b"])([P["b"]], Cr);
        var Pr = Cr
          , Ir = a("9904")
          , Nr = a.n(Ir)
          , jr = a("c2a4")
          , Dr = a.n(jr)
          , Vr = a("eafd")
          , Rr = a.n(Vr)
          , Ur = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: "".concat(Rr.a.modal, " ").concat(this.isShowingModal ? Rr.a.appear : Rr.a.hidden),
                        directives: [{
                            name: "show",
                            value: this.isShowingModal
                        }],
                        on: {
                            click: function(e) {
                                t.$emit("click")
                            }
                        }
                    }, [e("div", {
                        class: Rr.a.settings,
                        on: {
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }
                    }, [e("p", {
                        class: Rr.a.languageHeader
                    }, ["language"]), e("p", {
                        class: Rr.a.attention
                    }, ["＊The number of chapters published varies by language."]), e("div", {
                        class: Rr.a.languageList
                    }, [this.availableLanguages.map((function(a) {
                        return e("div", {
                            class: Rr.a.languageCell
                        }, [e("input", {
                            attrs: {
                                type: "radio",
                                name: "quarity",
                                id: a.language.toString(),
                                disabled: a.titleId == t.titleId
                            },
                            domProps: {
                                value: a.titleId,
                                checked: a.titleId == t.titleId
                            },
                            class: "".concat(Rr.a.langInput, " ").concat(a.isNew ? Rr.a.new : ""),
                            on: {
                                change: function() {
                                    t.$router.push("/titles/".concat(a.titleId))
                                }
                            }
                        }), e("label", {
                            attrs: {
                                for: a.language.toString()
                            }
                        }, [K(a.language)])])
                    }
                    ))])])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], Ur.prototype, "availableLanguages", void 0),
        Object(c["b"])([Object(u["b"])()], Ur.prototype, "isShowingModal", void 0),
        Object(c["b"])([Object(u["b"])()], Ur.prototype, "titleId", void 0),
        Ur = Object(c["b"])([P["b"]], Ur);
        var Mr, Hr, xr = Ur, Br = a("81c8"), Gr = a.n(Br), Fr = !1;
        Object(re["c"])().then((function(e) {
            return Fr = e
        }
        )),
        function(e) {
            e["vertical"] = "vertical",
            e["horizontal"] = "horizontal"
        }(Hr || (Hr = {}));
        var Wr = ["AG", "BB", "BO", "BS", "BZ", "CL", "CO", "CR", "CU", "DM", "DO", "EC", "GD", "GT", "GY", "HN", "HT", "JM", "KN", "LC", "MX", "NI", "PA", "PE", "PY", "SR", "SV", "TT", "UY", "VC", "VE"]
          , Yr = "SAPromoLastShown"
          , $r = {
            oneImage: {
                action: {
                    url: "https://jumpg-webapi.tokyo-cdn.com/www/store"
                },
                imageUrl: Dr.a
            }
        }
          , Kr = Mr = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.model = null,
                e.isShowingNavigation = !0,
                e.mode = Hr.vertical,
                e.quarity = "low",
                e.currentPageNumber = 1,
                e.numberOfPages = 0,
                e.sended = !1,
                e.insertBannerSended = !1,
                e.toggleNavigationSubject = new Ni["a"],
                e.toggleSideMenuSubjcet = new Ni["a"],
                e.toggleLanguageModalSubject = new Ni["a"],
                e.horizontalOption = {
                    startPageNumber: 1,
                    direction: Hr.horizontal
                },
                e.verticalOption = {
                    startPageNumber: 1,
                    spread: "single",
                    direction: Hr.vertical,
                    enabledJoinPages: !0,
                    verticalPageMargin: 30,
                    monospaced: "100%"
                },
                e.isShowingSideMenu = !1,
                e.isShowingModal = !1,
                e.isShowingPopup = !1,
                e.isShowingLanguageModal = !1,
                e.pages = [],
                e
            }
            return Object(o["a"])(n, [{
                key: "heightAdjust",
                value: function() {
                    var e = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                }
            }, {
                key: "beforeCreate",
                value: function() {
                    var e = new Date
                      , t = this.$route.query.timestamp
                      , a = t ? new Date(parseInt(t.toString())) : null;
                    if (a && e.getDate() !== a.getDate() || !a) {
                        var n = this.$route.path;
                        this.$router.replace(n + "?timestamp=" + e.getTime().toString())
                    } else
                        ;
                }
            }, {
                key: "destroyed",
                value: function() {
                    document.documentElement.style.removeProperty("--vh"),
                    window.removeEventListener("resize", this.heightAdjust),
                    this.t && (this.t.off("tap_center", this.tapOrClickCenter),
                    this.t.off("reset_surface", this.onResetSurface),
                    this.t.off("click_center", this.tapOrClickCenter),
                    this.t.off("viewer_opened", this.onViewerOpened),
                    this.t.off("after_move_page", this.onAfterMovePage))
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    googletag && googletag.destroySlots()
                }
            }, {
                key: "created",
                value: function() {
                    this.quarity = localStorage.getItem("quarity") || "high",
                    new Gr.a({
                        daysHidden: 60,
                        daysReminder: 60,
                        title: "MANGA Plus by SHUEISHA",
                        author: "SHUEISHA Inc.",
                        button: "VIEW",
                        store: {
                            ios: "On the App Store",
                            android: "In Google Play"
                        },
                        price: {
                            ios: "FREE",
                            android: "FREE"
                        },
                        appStoreId: "1442476536",
                        playStoreId: "jp.co.shueisha.mangaplus"
                    })
                }
            }, {
                key: "mounted",
                value: function() {
                    var e = this;
                    this.id = this.$route.params["chapterId"],
                    E.instance().fetchViewerData({
                        chapterId: parseInt(this.id),
                        quarity: this.quarity,
                        viewer_mode: localStorage.getItem("viewerMode"),
                        clang: pe.map((function(e) {
                            return F.get(e)
                        }
                        )).toString()
                    }).then((function(t) {
                        if (t.data.error) {
                            var a = e.$store.state.language.serviceLang === w.Language.SPANISH
                              , n = a ? t.data.error.spanishPopup : t.data.error.englishPopup;
                            alert(n.body)
                        } else
                            e.model = t.data.success.mangaViewer,
                            e.model.pages.forEach((function(t) {
                                t.insertBannerList ? t.insertBannerList.banners.forEach((function(t) {
                                    e.pages.push({
                                        banner: t
                                    })
                                }
                                )) : e.pages.push(t)
                            }
                            )),
                            e.mode = t.data.success.mangaViewer.isVerticalOnly ? Hr.vertical : Mr.loadMode(),
                            e.loadZao()
                    }
                    )).catch((function(t) {
                        at(e.$router, t)
                    }
                    ));
                    var t = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", "".concat(t, "px")),
                    window.addEventListener("resize", this.heightAdjust),
                    googletag && googletag.cmd.push((function() {
                        var e = ""
                          , t = "";
                        lt ? (e = "mangaplus_sp_viewer_bottomRectangle",
                        t = "mangaplus_sp_viewer_bottomRectangle_horizontal",
                        googletag.defineSlot("/16791533/MANGAPLUS/mangaplus_sp_viewer_bottomRectangle", ["fluid", [320, 50], [320, 100], [300, 250], [336, 280], [300, 600], [1, 1]], e).addService(window.googletag.pubads()),
                        googletag.defineSlot("/16791533/MANGAPLUS/mangaplus_sp_viewer_bottomRectangle_horizontal", [[336, 280], [300, 250]], t).addService(googletag.pubads())) : (e = "mangaplus_pc_viewer_rectangle_left",
                        t = "mangaplus_pc_viewer_rectangle_right",
                        googletag.defineSlot("/16791533/MANGAPLUS/mangaplus_pc_viewer_rectangle_left", ["fluid", [300, 250], [1, 1]], e).addService(googletag.pubads()),
                        googletag.defineSlot("/16791533/MANGAPLUS/mangaplus_pc_viewer_rectangle_right", ["fluid", [300, 250], [1, 1]], t).addService(googletag.pubads())),
                        "undefined" !== typeof navigator && navigator.cookieEnabled || googletag.pubads().setPrivacySettings({
                            limitedAds: !0
                        }),
                        googletag.pubads().enableSingleRequest(),
                        googletag.enableServices(),
                        googletag.display(e),
                        googletag.display(t)
                    }
                    ))
                }
            }, {
                key: "logInsertBannerTap",
                value: function(e) {
                    E.instance().titleBannerTapLog(e, this.model.titleId, "insert_banner", "viewer", "click")
                }
            }, {
                key: "logInsertBannerImpression",
                value: function(e) {
                    E.instance().titleBannerTapLog(e, this.model.titleId, "insert_banner", "viewer", "impression")
                }
            }, {
                key: "displayNumberOfComments",
                value: function() {
                    var e = "";
                    return e = this.model.numberOfComments >= 1e6 ? (Math.floor(10 * this.model.numberOfComments / 1e6) / 10).toString() + "m" : this.model.numberOfComments >= 1e3 ? (Math.floor(10 * this.model.numberOfComments / 1e3) / 10).toString() + "k" : this.model.numberOfComments.toString(),
                    e
                }
            }, {
                key: "createLastPage",
                value: function(e) {
                    var t = document.querySelector("#last-page").querySelector(".wrapper");
                    while (t.firstChild)
                        t.removeChild(t.firstChild);
                    var a = document.createElement("div");
                    a.className = tr.a.chapterContainer;
                    var n = document.createElement("div");
                    switch (n.className = tr.a.thumbnailContainer,
                    e.chapterType) {
                    case w.Page.ChapterType.SEQUENCE:
                    case w.Page.ChapterType.NOSEQUENCE:
                        var i = document.createElement("div");
                        if (i.className = tr.a.nextChapterContainer,
                        a.style.margin = this.mode === Hr.vertical ? "0 auto 10vh auto" : "auto auto",
                        e.chapterType === w.Page.ChapterType.NOSEQUENCE || e.chapterType === w.Page.ChapterType.SEQUENCE) {
                            var r = document.createElement("p")
                              , o = null !== e.nextChapter ? e.nextChapter.name : "";
                            if (r.className = tr.a.nextChapterBtn,
                            r.innerHTML = "".concat(this.$t("TO_CHAPTER"), " ").concat(o),
                            i.appendChild(r),
                            e.chapterType === w.Page.ChapterType.NOSEQUENCE) {
                                var s = document.createElement("div");
                                s.className = tr.a.cautionContainer;
                                var l = document.createElement("img");
                                l.src = Nr.a,
                                l.className = tr.a.cautionImage;
                                var c = document.createElement("p");
                                c.className = tr.a.announce,
                                c.innerText = String(this.$t("LATER_VOLUME_AHEAD")),
                                s.appendChild(l),
                                s.appendChild(c),
                                i.appendChild(s)
                            }
                        }
                        if (null !== e.nextChapter) {
                            var u = document.createElement("img");
                            u.src = e.nextChapter.thumbnailUrl,
                            u.className = tr.a.nextChapterThumbnail,
                            n.appendChild(i),
                            n.appendChild(u)
                        }
                        break;
                    case w.Page.ChapterType.LATEST:
                        if (0 !== e.nextTimeStamp) {
                            var d = document.createElement("div");
                            d.className = tr.a.latestWrapper;
                            var p = document.createElement("p");
                            p.className = tr.a.comming,
                            p.innerText = "The Next Chapter Will Arrive On";
                            var h = document.createElement("div");
                            h.className = tr.a.date;
                            var g = document.createElement("span");
                            g.className = tr.a.dateText,
                            g.innerText = new Date(1e3 * e.nextTimeStamp).toLocaleString(),
                            h.appendChild(g);
                            var m = document.createElement("div");
                            m.className = tr.a.date2;
                            var b = document.createElement("p");
                            b.className = tr.a.mayChange,
                            b.innerText = "*Update schedules may subject to change",
                            d.appendChild(p),
                            d.appendChild(h),
                            d.appendChild(m),
                            d.appendChild(b),
                            n.appendChild(d)
                        }
                    }
                    var f = document.createElement("p");
                    f.classList.add(tr.a.subscribeBtn),
                    f.classList.add(tr.a.btn),
                    e.isSubscribed ? f.classList.add(tr.a.done) : f.classList.add(tr.a.default),
                    f.innerHTML = e.isSubscribed ? String(this.$t("doneFAVORITED")) : String(this.$t("addFAVORITED"));
                    var v = document.createElement("p");
                    v.classList.add(tr.a.btn),
                    v.classList.add(tr.a.commentsBtn),
                    v.innerText = String(this.$t("COMMENTS"));
                    var y = document.createElement("div");
                    y.classList.add(tr.a.commentsHeader);
                    var _ = document.createElement("a");
                    _.classList.add(tr.a.appBannerWrapper),
                    _.href = ut(),
                    y.appendChild(_);
                    var T = document.createElement("p");
                    T.classList.add(tr.a.leaveBtn),
                    _.appendChild(T),
                    T.innerText = String(this.$t("COMMENT_APP"));
                    var k = document.createElement("b");
                    k.classList.add(tr.a.appTxt),
                    T.appendChild(k),
                    k.innerText = String(this.$t("INSTALL_APP"));
                    var O = document.createElement("img");
                    if (O.classList.add(tr.a.appIcon),
                    O.src = Xi.a,
                    O.alt = "Download MANGA Plus APP",
                    T.appendChild(O),
                    a.appendChild(n),
                    a.appendChild(v),
                    a.appendChild(f),
                    !e.isSubscribed && Fr) {
                        var A = document.createElement("p");
                        A.classList.add(tr.a.notificationBtn),
                        A.innerText = String(this.$t("NOTIFICATION"));
                        var E = document.createElement("span");
                        E.classList.add(tr.a.arrow),
                        A.appendChild(E),
                        a.appendChild(A)
                    }
                    return a.appendChild(y),
                    t.appendChild(a),
                    t.outerHTML
                }
            }, {
                key: "createBannerPage",
                value: function(e, t) {
                    var a = this
                      , n = document.querySelector("#" + e).querySelector(".wrapper");
                    while (n.firstChild)
                        n.removeChild(n.firstChild);
                    return t.banners.map((function(e) {
                        var t = document.createElement("a");
                        "" !== e.action.url && (t.href = e.action.url),
                        t.className = tr.a.banner;
                        var i = document.createElement("img");
                        t.onclick = function() {
                            a.$gtm.trackEvent({
                                category: "publisher_viewer_banner",
                                action: "Click",
                                label: e.id
                            })
                        }
                        ,
                        i.src = e.imageUrl,
                        i.className = tr.a.bannerImg,
                        i.style.height = "auto",
                        t.appendChild(i),
                        n.appendChild(t)
                    }
                    )),
                    n.outerHTML
                }
            }, {
                key: "createInsertBannerPage",
                value: function(e, t) {
                    var a = this
                      , n = document.querySelector("#" + e).querySelector(".wrapper");
                    while (n.firstChild)
                        n.removeChild(n.firstChild);
                    var i = document.createElement("a");
                    "" !== t.action.url && (i.href = t.action.url),
                    i.className = tr.a.banner;
                    var r = document.createElement("img");
                    return i.onclick = function() {
                        a.$gtm.trackEvent({
                            category: "publisher_viewer_banner",
                            action: "Click",
                            label: t.id
                        })
                    }
                    ,
                    r.src = t.imageUrl,
                    r.className = tr.a.bannerImg,
                    r.style.height = "auto",
                    i.appendChild(r),
                    n.appendChild(i),
                    n.outerHTML
                }
            }, {
                key: "onResetSurface",
                value: function() {
                    var e;
                    null === (e = this.model) || void 0 === e || e.pages.filter((function(e) {
                        return e.advertisement
                    }
                    )).forEach((function(e) {}
                    ))
                }
            }, {
                key: "onViewerOpened",
                value: function() {
                    var e = this;
                    Object(Or["a"])(2e3).pipe(Object(Er["a"])(Object(Ar["a"])(this.toggleNavigationSubject, this.toggleSideMenuSubjcet, this.toggleLanguageModalSubject))).subscribe((function(t) {
                        e.isShowingNavigation = !1
                    }
                    ))
                }
            }, {
                key: "handleSAPromo",
                value: function() {
                    if (!(Wr.indexOf(this.model.regionCode) < 0)) {
                        var e = Date.now();
                        if (!(e < 16163388e5 || e > 16189308e5)) {
                            var t = parseInt(localStorage.getItem(Yr), 10);
                            t > 0 && NaN !== t && e - t < 864e5 || (localStorage.setItem(Yr, Date.now().toString()),
                            this.isShowingPopup = !0)
                        }
                    }
                }
            }, {
                key: "onAfterMovePage",
                value: function(e, t, a) {
                    var n, i, r, o, s, l = this, c = window.innerWidth > 1100 && this.mode === Hr.horizontal;
                    t > this.t.pageCount - 2 && (this.isShowingNavigation = !0,
                    this.handleSAPromo()),
                    this.currentPageNumber = t,
                    (this.model.pages[t + 1] && this.model.pages[t + 1].advertisement || this.model.pages[t] && this.model.pages[t].advertisement) && (adsbygoogle = window.adsbygoogle || []).push({}),
                    (null === (n = this.model.pages[t]) || void 0 === n ? void 0 : n.bannerList) && !this.sended && (this.sended = !0,
                    null === (r = null === (i = this.model.pages[t]) || void 0 === i ? void 0 : i.bannerList) || void 0 === r || r.banners.forEach((function(e) {
                        l.$gtm.trackEvent({
                            category: "publisher_viewer_banner",
                            action: "Impression",
                            label: e.id,
                            value: 1,
                            noninteraction: !0
                        })
                    }
                    ))),
                    (null === (o = this.pages[t]) || void 0 === o ? void 0 : o.banner) && !this.insertBannerSended && c && (this.insertBannerSended = !0,
                    this.logInsertBannerImpression(this.pages[t].banner.id)),
                    (null === (s = this.pages[t - 1]) || void 0 === s ? void 0 : s.banner) && !this.insertBannerSended && (this.insertBannerSended = !0,
                    this.logInsertBannerImpression(this.pages[t - 1].banner.id))
                }
            }, {
                key: "loadZao",
                value: function() {
                    var e = this
                      , t = this.createViewerPage(this.mode)
                      , a = document.querySelector(".zao");
                    this.verticalOption.verticalPageMargin = this.model.isVerticalOnly ? 0 : 30,
                    this.t = new Zi.a.Viewer(a,t,this.mode === Hr.horizontal ? this.horizontalOption : this.verticalOption),
                    this.slider || this.mode !== Hr.horizontal || (this.slider = new Zi.a.Slider(document.querySelector(".slider"),this.t)),
                    this.t.on("tap_center", this.tapOrClickCenter),
                    this.t.on("reset_surface", this.onResetSurface),
                    this.t.on("click_center", this.tapOrClickCenter),
                    this.t.on("viewer_opened", this.onViewerOpened),
                    this.t.on("after_move_page", this.onAfterMovePage),
                    this.numberOfPages = this.t.pageCount,
                    this.t.open().then((function() {
                        e.$forceUpdate()
                    }
                    ));
                    var n = new MutationObserver((function(e) {
                        e.forEach((function(e) {
                            e.addedNodes.forEach((function(e) {
                                if ("zao-page" === e.className)
                                    for (var t = e.getElementsByClassName("gado"), a = function(e) {
                                        var a = t[e];
                                        console.log("DISPLAY AD:", a.id),
                                        googletag && googletag.cmd.push((function() {
                                            googletag.display(a.id)
                                        }
                                        ))
                                    }, n = 0; n < t.length; n++)
                                        a(n)
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    n.observe(document.querySelector(".zao"), {
                        subtree: !0,
                        childList: !0
                    })
                }
            }, {
                key: "tapOrClickCenter",
                value: function() {
                    this.t.currentPageNumber > this.t.pageCount - 2 || this.toggleNavigation()
                }
            }, {
                key: "toggleNavigation",
                value: function() {
                    this.isShowingNavigation = !this.isShowingNavigation
                }
            }, {
                key: "createViewerPage",
                value: function(e) {
                    var t = this;
                    return this.pages.map((function(e, a) {
                        return e.mangaPage ? t.model.startFromRight || 0 !== a ? e.mangaPage.type === w.Page.PageType.RIGHT || e.mangaPage.type === w.Page.PageType.LEFT ? {
                            src: e.mangaPage.imageUrl,
                            group: 1,
                            encryption_hex: e.mangaPage.encryptionKey
                        } : {
                            src: e.mangaPage.imageUrl,
                            encryption_hex: e.mangaPage.encryptionKey
                        } : {
                            src: e.mangaPage.imageUrl,
                            encryption_hex: e.mangaPage.encryptionKey,
                            spread: "single"
                        } : e.bannerList ? {
                            html: t.createBannerPage("banner-page", e.bannerList),
                            spread: "auto",
                            width: 300
                        } : e.insertBannerList ? {
                            html: t.createBannerPage("insertbanner-page", e.insertBannerList),
                            spread: "auto",
                            width: 800
                        } : e.banner ? {
                            html: t.createInsertBannerPage("insertbanner-page", e.banner),
                            spread: "auto",
                            width: 800,
                            event: [{
                                selector: ".".concat(tr.a.banner),
                                type: "click",
                                callback: function() {
                                    t.logInsertBannerTap(e.banner.id),
                                    location.href = e.banner.action.url
                                }
                            }]
                        } : e.advertisement ? lt ? {
                            html: '<div style="height:100%; display:flex; align-items: center;">\n            <div id=\''.concat(Mr.loadMode() === Hr.horizontal ? "mangaplus_sp_viewer_bottomRectangle_horizontal' style='min-height: 400px; width: 100%;'" : "mangaplus_sp_viewer_bottomRectangle' style='min-height: 400px;'", ' class="gado"></div>\n          </div>'),
                            spread: "single",
                            width: 500
                        } : {
                            html: "<div style=\"height:100%; display:flex; align-items: center;\">\n            <div id='mangaplus_pc_viewer_rectangle_left' style='min-height: 400px;' class=\"gado\"></div>\n            <div id='mangaplus_pc_viewer_rectangle_right' style='min-height: 400px; margin-left: 40px' class=\"gado\"></div>\n          </div>",
                            spread: "single",
                            width: 700
                        } : e.lastPage ? {
                            html: t.createLastPage(e.lastPage),
                            width: 400,
                            event: [{
                                selector: ".".concat(tr.a.thumbnailContainer),
                                type: "click",
                                callback: function(a) {
                                    t.$router.push("/viewer/".concat(e.lastPage.nextChapter.chapterId))
                                }
                            }, {
                                selector: ".".concat(tr.a.subscribeBtn),
                                type: "click",
                                callback: t.onClickSubscribeBtn
                            }, {
                                selector: ".".concat(tr.a.commentsBtn),
                                type: "click",
                                callback: function(e) {
                                    t.$router.push("/comments/".concat(t.model.chapterId))
                                }
                            }]
                        } : void 0
                    }
                    ))
                }
            }, {
                key: "onClickSubscribeBtn",
                value: function(e) {
                    var t = this
                      , a = this.model.pages.slice(-1)[0].lastPage;
                    a.isSubscribed ? E.instance().unSubscribeTitle(this.model.titleId).then((function() {
                        var e = document.querySelector(".".concat(tr.a.subscribeBtn));
                        e.classList.remove(tr.a.done),
                        e.classList.add(tr.a.default),
                        e.innerHTML = String(t.$t("addFAVORITED")),
                        t.model.pages[t.model.pages.length - 1].lastPage = Object.assign(Object.assign({}, a), {
                            isSubscribed: !1
                        })
                    }
                    )) : Fr ? ue().then((function(e) {
                        E.instance().subscribeTitle(t.model.titleId, e, z(t.$store.state.language.serviceLang)).then((function() {
                            var e = document.querySelector(".".concat(tr.a.subscribeBtn));
                            e.classList.remove(tr.a.default),
                            e.classList.add(tr.a.done),
                            e.innerHTML = String(t.$t("doneFAVORITED")),
                            t.model.pages[t.model.pages.length - 1].lastPage = Object.assign(Object.assign({}, a), {
                                isSubscribed: !0
                            })
                        }
                        ))
                    }
                    )) : E.instance().subscribeTitle(this.model.titleId).then((function() {
                        var e = document.querySelector(".".concat(tr.a.subscribeBtn));
                        e.classList.remove(tr.a.default),
                        e.classList.add(tr.a.done),
                        e.innerHTML = String(t.$t("doneFAVORITED")),
                        t.model.pages[t.model.pages.length - 1].lastPage = Object.assign(Object.assign({}, a), {
                            isSubscribed: !0
                        })
                    }
                    ))
                }
            }, {
                key: "onChangeMode",
                value: function(e) {
                    this.t.toggleDirection(),
                    this.mode = e,
                    this.verticalOption.verticalPageMargin = this.model.isVerticalOnly ? 0 : 30,
                    this.t.setOptions(this.t.direction === Hr.horizontal ? this.horizontalOption : this.verticalOption);
                    var t = this.createViewerPage(this.mode);
                    this.t.setPageData(t),
                    this.t.resetSurface(),
                    this.slider || this.mode !== Hr.horizontal || (this.slider = new Zi.a.Slider(document.querySelector(".slider"),this.t)),
                    localStorage.setItem("viewerMode", e);
                    var a = document.querySelector(".".concat(tr.a.toast));
                    a.className = "",
                    a.classList.add(this.mode === Hr.horizontal ? tr.a.toastHorizontal : tr.a.toastVertical),
                    a.classList.add(tr.a.toast)
                }
            }, {
                key: "onChangeQuarity",
                value: function(e) {
                    var t = this;
                    this.quarity = e,
                    localStorage.setItem("quarity", e),
                    E.instance().fetchViewerData({
                        chapterId: parseInt(this.id),
                        quarity: e,
                        viewer_mode: localStorage.getItem("viewerMode"),
                        clang: pe.map((function(e) {
                            return F.get(e)
                        }
                        )).toString()
                    }).then((function(e) {
                        if (e.data.error) {
                            var a = t.$store.state.language.serviceLang === w.Language.SPANISH
                              , n = a ? e.data.error.spanishPopup : e.data.error.englishPopup;
                            alert(n.body)
                        } else {
                            t.model = e.data.success.mangaViewer;
                            var i = t.createViewerPage(t.mode);
                            t.t.setPageData(i),
                            t.t.resetSurface()
                        }
                    }
                    )).catch((function(e) {
                        at(t.$router, e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t, n, i, r, o, s, l, c = this;
                    return e("div", [e("div", {
                        class: tr.a.wrapper
                    }, [e("div", {
                        class: "".concat(tr.a.viewerContainer, " zao")
                    }), e("div", {
                        class: "".concat(tr.a.footer, " ").concat(this.isShowingSlider ? tr.a.appear : tr.a.hidden)
                    }, [e("div", {
                        class: this.mode === Hr.vertical ? tr.a.hidden : ""
                    }, [e("div", {
                        class: "slider ".concat(tr.a.slider, " ")
                    })]), e("div", {
                        class: tr.a.container
                    }, [this.model && e("router-link", {
                        attrs: {
                            to: "/comments/".concat(null === (t = this.model) || void 0 === t ? void 0 : t.chapterId)
                        }
                    }, [e("img", {
                        attrs: {
                            src: a("7600")
                        },
                        class: tr.a.commentIcon
                    }), e("img", {
                        attrs: {
                            src: a("0a8f")
                        },
                        class: tr.a.commentNumberFramePoint1
                    }), e("img", {
                        attrs: {
                            src: a("0a8f")
                        },
                        class: tr.a.commentNumberFramePoint2
                    }), e("img", {
                        attrs: {
                            src: a("0a8f")
                        },
                        class: tr.a.commentNumberFramePoint3
                    }), e("a", {
                        class: tr.a.commentNumberFrame
                    }, [e("a", {
                        class: tr.a.commentNumber
                    }, [this.displayNumberOfComments()])])]), e("p", {
                        class: tr.a.pageNumber
                    }, [this.currentPageNumber, " ", e("span", ["/ ", this.numberOfPages])])])]), this.model && e("div", [e(yr, {
                        attrs: {
                            title: this.model.titleName,
                            chapterTitle: this.model.chapterName,
                            isShowingNavigation: this.isShowingNavigation,
                            titleId: this.model.titleId,
                            hasNewAvailableLanguages: null === (n = this.model.titleAvailableLanguages) || void 0 === n ? void 0 : n.some((function(e) {
                                return e.isNew
                            }
                            )),
                            currentTitleLanguage: null === (r = null === (i = this.model.titleAvailableLanguages) || void 0 === i ? void 0 : i.find((function(e) {
                                return e.titleId === c.model.titleId
                            }
                            ))) || void 0 === r ? void 0 : r.language
                        },
                        on: {
                            toggleModal: function() {
                                c.toggleNavigationSubject.next(),
                                c.isShowingModal = !c.isShowingModal,
                                c.isShowingLanguageModal = !1
                            },
                            toggleLanguageModal: function() {
                                c.toggleLanguageModalSubject.next(),
                                c.isShowingLanguageModal = !c.isShowingLanguageModal,
                                c.isShowingModal = !1
                            },
                            toggleSideMenu: function() {
                                c.toggleSideMenuSubjcet.next(),
                                c.isShowingSideMenu = !c.isShowingSideMenu
                            }
                        }
                    }), e("div", {
                        class: tr.a.toastAll
                    }), e("div", {
                        class: "".concat(this.mode === Hr.horizontal ? tr.a.toastHorizontal : tr.a.toastVertical, " ").concat(tr.a.toast)
                    }, [e("div", {
                        class: tr.a.modeText
                    }, [e("span", [this.mode === Hr.horizontal ? "Horizontal" : "Vertical"])])]), e(kr, {
                        attrs: {
                            sns: this.model.sns,
                            mode: this.mode,
                            chapterId: this.model.chapterId,
                            canChangeVerticalMode: !this.model.isHorizontalOnly,
                            canChangeHorizontalMode: !this.model.isVerticalOnly,
                            isShowingModal: this.isShowingModal,
                            quarity: this.quarity
                        },
                        on: {
                            click: function() {
                                return c.isShowingModal = !1
                            },
                            toggleMode: function() {
                                c.toggleNavigationSubject.next(),
                                c.onChangeMode("horizontal" === c.mode ? Hr.vertical : Hr.horizontal),
                                c.isShowingModal = !c.isShowingModal
                            },
                            toggleQuarity: function(e) {
                                c.onChangeQuarity(e),
                                c.isShowingModal = !c.isShowingModal
                            }
                        }
                    }), e(xr, {
                        attrs: {
                            isShowingModal: this.isShowingLanguageModal,
                            availableLanguages: this.model.titleAvailableLanguages,
                            titleId: this.model.titleId
                        },
                        on: {
                            click: function() {
                                return c.isShowingLanguageModal = !1
                            }
                        }
                    }), e(Pr, {
                        attrs: {
                            chapters: this.model.chapters,
                            isShowingSideMenu: this.isShowingSideMenu
                        },
                        on: {
                            click: function() {
                                return c.isShowingSideMenu = !1
                            }
                        }
                    })]), e("template", {
                        attrs: {
                            id: "banner-page"
                        }
                    }, [e("div", {
                        class: "wrapper ".concat(tr.a.bannerContainer)
                    })]), e("template", {
                        attrs: {
                            id: "insertbanner-page"
                        }
                    }, [e("div", {
                        class: "wrapper ".concat(tr.a.bannerContainer)
                    })]), e("template", {
                        attrs: {
                            id: "last-page"
                        }
                    }, [e("div", {
                        class: "wrapper",
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        }
                    })])]), this.isShowingPopup && e(Ga, {
                        attrs: {
                            popup: $r
                        }
                    }), (null === (o = this.model) || void 0 === o ? void 0 : o.ratingPopup) && null === localStorage.getItem("rating_checked_" + (null === (l = null === (s = this.model) || void 0 === s ? void 0 : s.ratingPopup) || void 0 === l ? void 0 : l.popupId)) && e(Ga, {
                        attrs: {
                            popup: this.model.ratingPopup
                        }
                    })])
                }
            }, {
                key: "isShowingSlider",
                get: function() {
                    return this.isShowingNavigation
                }
            }], [{
                key: "loadMode",
                value: function() {
                    var e, t = localStorage.getItem("viewerMode");
                    switch (null == t && (t = "vertical"),
                    t) {
                    case "horizontal":
                        e = Hr.horizontal;
                        break;
                    case "vertical":
                        e = Hr.vertical
                    }
                    return e
                }
            }]),
            n
        }(ot);
        Kr = Mr = Object(c["b"])([Object(P["b"])({
            components: {
                Modal: kr,
                SideMenu: Pr,
                Navigation: yr
            },
            metaInfo: function() {
                var e, t;
                if (!this.model)
                    return null;
                var a = this.model ? "[".concat(null === (e = this.model) || void 0 === e ? void 0 : e.chapterName, "] ").concat(null === (t = this.model) || void 0 === t ? void 0 : t.titleName) : "MANGA Plus by SHUEISHA";
                return {
                    title: a,
                    titleTemplate: "%s | MANGA Plus",
                    link: [{
                        rel: "apple-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }, {
                        rel: "android-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }],
                    meta: [{
                        name: "robots",
                        content: "noindex"
                    }, {
                        name: "apple-itunes-app",
                        content: "app-id=1442476536"
                    }, {
                        name: "google-play-app",
                        content: "app-id=jp.co.shueisha.mangaplus"
                    }]
                }
            }
        })], Kr);
        var qr = Kr
          , zr = a("8e4e")
          , Qr = a.n(zr)
          , Zr = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: Qr.a.container
                    }, [e("h2", ["Page Not Found"]), e("div", {
                        class: Qr.a.svgWrap_container
                    }, [e("svg", {
                        attrs: {
                            id: Qr.a.svgWrap_2,
                            xmlns: "http://www.w3.org/2000/svg",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 700 250"
                        }
                    }, [e("g", [e("path", {
                        attrs: {
                            id: Qr.a.id3_2,
                            d: "M202.763,183.736v50.373H125.969V178.736H8.328V118.181L110.175,15.891h92.588V118.453H222.37v60.283H202.924ZM120,91L93.563,117.635h32.406V84.921Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id2_2,
                            d: "M231,211l47.237-4.936a112.842,112.842,0,1,0-21.246-28.908L222,212Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id1_2,
                            d: "M672.763,183.736v50.373H595.969V178.736H478.328V118.181L580.175,15.891h92.588V118.453H692.37v60.283H672.924ZM590,91l-26.437,26.635h32.406V84.921Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id4_2,
                            d: "M270.412,121.56a14.628,14.628,0,0,1,14.623-14.633H340.69V51.354a14.627,14.627,0,0,1,14.622-14.633h5.624a14.628,14.628,0,0,1,14.622,14.633v55.573h55.7a14.628,14.628,0,0,1,14.622,14.633v5.628a14.627,14.627,0,0,1-14.622,14.633h-55.7v55.864a14.628,14.628,0,0,1-14.622,14.633h-5.624a14.628,14.628,0,0,1-14.622-14.633V141.821H285.035a14.628,14.628,0,0,1-14.623-14.633V121.56Z"
                        }
                    })])]), e("svg", {
                        attrs: {
                            id: Qr.a.svgWrap_1,
                            xmlns: "http://www.w3.org/2000/svg",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 700 250"
                        }
                    }, [e("g", [e("path", {
                        attrs: {
                            id: Qr.a.id3_1,
                            d: "M202.763,183.736v50.373H125.969V178.736H8.328V118.181L110.175,15.891h92.588V118.453H222.37v60.283H202.924ZM120,91L93.563,117.635h32.406V84.921Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id2_1,
                            d: "M231,211l47.237-4.936a112.842,112.842,0,1,0-21.246-28.908L222,212Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id1_1,
                            d: "M672.763,183.736v50.373H595.969V178.736H478.328V118.181L580.175,15.891h92.588V118.453H692.37v60.283H672.924ZM590,91l-26.437,26.635h32.406V84.921Z"
                        }
                    }), e("path", {
                        attrs: {
                            id: Qr.a.id4_1,
                            d: "M270.412,121.56a14.628,14.628,0,0,1,14.623-14.633H340.69V51.354a14.627,14.627,0,0,1,14.622-14.633h5.624a14.628,14.628,0,0,1,14.622,14.633v55.573h55.7a14.628,14.628,0,0,1,14.622,14.633v5.628a14.627,14.627,0,0,1-14.622,14.633h-55.7v55.864a14.628,14.628,0,0,1-14.622,14.633h-5.624a14.628,14.628,0,0,1-14.622-14.633V141.821H285.035a14.628,14.628,0,0,1-14.623-14.633V121.56Z"
                        }
                    })])])])])
                }
            }]),
            a
        }(u["c"]);
        Zr = Object(c["b"])([Object(P["b"])({
            metaInfo: function() {
                return {
                    meta: [{
                        hid: "robots",
                        name: "robots",
                        content: "noindex, nofollow"
                    }]
                }
            }
        })], Zr);
        var Jr = Zr
          , Xr = a("d775")
          , eo = a.n(Xr)
          , to = a("2c12")
          , ao = a.n(to)
          , no = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: ao.a.commentItem
                    }, [e("p", {
                        class: ao.a.userName
                    }, [this.comment.userName]), e("img", {
                        attrs: {
                            src: this.comment.iconUrl,
                            alt: ""
                        },
                        class: ao.a.icon
                    }), e("p", {
                        class: ao.a.body
                    }, [this.comment.body]), e("div", {
                        class: ao.a.wrapper
                    }, [e("p", {
                        class: ao.a.date
                    }, [new Date(1e3 * this.comment.created).toLocaleString(navigator.language, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })])]), e("div", {
                        class: "".concat(ao.a.likeBox, " ").concat(this.comment.alreadyLiked ? ao.a.liked : ""),
                        on: {
                            click: function() {
                                t.$emit("click", t.comment.id)
                            }
                        }
                    }, [e("div", {
                        class: "".concat(ao.a.likeItem)
                    }, [e("div", {
                        class: ao.a.likeButton
                    }, [e("span", {
                        class: ao.a.likeButtonIcon
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16.416",
                            height: "23.909",
                            viewBox: "0 0 16.416 23.909"
                        }
                    }, [e("path", {
                        class: ao.a.likeHand,
                        attrs: {
                            d: "M15.919,6.287l-2.38,8a.993.993,0,0,1-.95.713H.992A1,1,0,0,1,0,14V6A1,1,0,0,1,.992,5H4.937L8.181,0H11a1,1,0,0,1,.973,1.2L11.219,5h3.75A1,1,0,0,1,15.919,6.287ZM1.983,7v6H4V7Zm9.236,0H8.8l.474-2.392L9.791,2H9.273L6.588,6.109,6,7H5.982v6h5.744l1.785-6Z",
                            transform: "translate(0 8)",
                            "fill-rule": "evenodd"
                        }
                    }), e("line", {
                        class: ao.a.likeLine1,
                        attrs: {
                            x1: "5",
                            y1: "2",
                            x2: "8",
                            y2: "6"
                        }
                    }), e("line", {
                        class: ao.a.likeLine2,
                        attrs: {
                            x1: "10",
                            y1: "2",
                            x2: "10",
                            y2: "6"
                        }
                    }), e("line", {
                        class: ao.a.likeLine3,
                        attrs: {
                            x1: "15",
                            y1: "2",
                            x2: "12",
                            y2: "6"
                        }
                    })])])])]), e("p", {
                        class: ao.a.likeText
                    }, [this.$t("LIKE")]), e("span", {
                        class: ao.a.numberOfLikes
                    }, [this.comment.numberOfLikes.toLocaleString()])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], no.prototype, "comment", void 0),
        no = Object(c["b"])([P["b"]], no);
        var io = no
          , ro = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.id = this.$route.params["id"],
                    this.$store.state.comments.model[this.id] || this.$store.dispatch("comments/fetchData", this.id).catch((function(t) {
                        at(e.$router, t)
                    }
                    ))
                }
            }, {
                key: "onChangeSort",
                value: function(e) {
                    this.sortMode = "latest" === e.target.dataset.sort
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this
                      , n = []
                      , i = new w.CommentListView.TitleDetailComment;
                    return this.$store.state.comments.model[this.id] && (n = this.$store.state.comments.model[this.id].comments.slice(),
                    i = this.$store.state.comments.model[this.id].titleDetailComment,
                    this.sortMode || n.sort((function(e, t) {
                        return t.numberOfLikes - e.numberOfLikes
                    }
                    ))),
                    e("div", {
                        class: eo.a.commentsContainer
                    }, [function() {
                        if (t.$store.state.comments.model[t.id])
                            return e("div", [e("div", {
                                class: eo.a.header
                            }, [e(Tt, {
                                class: eo.a.title,
                                attrs: {
                                    links: [{
                                        name: "home",
                                        path: "/updates"
                                    }, {
                                        name: "manga list",
                                        path: "/manga_list/browser_a"
                                    }, {
                                        name: "".concat(i.titleName),
                                        path: "/titles/".concat(i.titleId)
                                    }, {
                                        name: "".concat(i.chapterName, " comment"),
                                        path: t.$router.currentRoute.path
                                    }]
                                }
                            }, [t.$t("COMMENTS")]), e("nav", {
                                class: eo.a.toggle
                            }, [e("ul", [e("li", {
                                attrs: {
                                    "data-sort": "likes"
                                },
                                on: {
                                    click: t.onChangeSort
                                },
                                class: t.sortMode ? eo.a.toggleItem : [eo.a.toggleItem, eo.a.linkActive]
                            }, [t.$t("LIKES")]), e("li", {
                                attrs: {
                                    "data-sort": "latest"
                                },
                                on: {
                                    click: t.onChangeSort
                                },
                                class: t.sortMode ? [eo.a.toggleItem, eo.a.linkActive] : eo.a.toggleItem
                            }, [t.$t("LATEST")])])])]), e("div", {
                                class: eo.a.commentsHeader
                            }, [e("a", {
                                attrs: {
                                    href: ut()
                                }
                            }, [e("p", {
                                class: eo.a.leaveBtn
                            }, [e("img", {
                                attrs: {
                                    src: a("5185"),
                                    alt: "Download MANGA Plus APP",
                                    width: "80",
                                    height: "80"
                                }
                            }), t.$t("COMMENT_APP"), e("b", [t.$t("INSTALL_APP")])])])]), e("div", {
                                class: eo.a.comments
                            }, [n.map((function(a) {
                                var n = {
                                    attrs: {
                                        comment: a
                                    }
                                };
                                return e(io, bt()([{
                                    key: a.id
                                }, n, {
                                    on: {
                                        click: function(e) {
                                            a.alreadyLiked ? t.$store.dispatch("comments/unlike", {
                                                chapterId: t.id,
                                                commentId: e
                                            }) : t.$store.dispatch("comments/like", {
                                                chapterId: t.id,
                                                commentId: e
                                            })
                                        }
                                    }
                                }]))
                            }
                            ))])])
                    }()])
                }
            }]),
            n
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], ro.prototype, "sortMode", void 0),
        ro = Object(c["b"])([Object(P["b"])({
            components: {
                CommentItem: io
            },
            metaInfo: function() {
                var e, t, a, n, i = this.$store.state.comments.model[this.$route.params["id"]], r = i ? "Comments | ".concat(null === (e = i.titleDetailComment) || void 0 === e ? void 0 : e.chapterName, " | ").concat(null === (t = i.titleDetailComment) || void 0 === t ? void 0 : t.titleName, " - ").concat(null === (a = i.titleDetailComment) || void 0 === a ? void 0 : a.credit) : "Comments", o = i ? "Join the conversation about ".concat(null === (n = i.titleDetailComment) || void 0 === n ? void 0 : n.titleName, " on Shueisha's official app, MANGA Plus by SHUEISHA!") : "Loading";
                return {
                    title: r,
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/comments/".concat(this.$route.params["id"])
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: o
                    }]
                }
            }
        })], ro);
        var oo = ro
          , so = {
            en: {
                SERIES: "Series",
                UPDATES: "Updates",
                DAILY: "Daily Updates",
                FEATURED: "Featured",
                MANGALIST: "Manga List",
                FAVORITED: "Favorited",
                language: "English",
                New: "UP",
                ALL: "All",
                HOTTEST: "Hottest",
                LIKES: "Likes",
                LATEST: "Latest",
                UPDATED: "Updated",
                addFAVORITED: "Add to Favorite",
                doneFAVORITED: "Favorited",
                REMOVE: "Remove",
                UNDO: "Undo",
                REMOVED: "Title removed",
                RECOMMEND: "You May Also Like",
                UPDATE_SCHEDULE: "Update Schedule",
                LANGUAGES_AVAILABLE: "Available Languages",
                OVERVIEW: "Summary",
                CHAPTER_LIST: "Chapter List",
                SHARE: "Share",
                TWEET: "Post",
                ABOUT_US: "About Us",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1120",
                NEWS_AND_EVENTS: "News and Events",
                HELP_FAQS: "Help",
                FEEDBACK: "Feedback",
                TERMS_OF_SERVICES: "Terms of Services",
                SERVICE_ANNOUNCEMENT: "Service Announcements",
                PRIVACY_POLICY: "Privacy Policy",
                COPYRIGHTS: "Copyrights",
                COMMUNITY_GUIDELINE: "Community Guidelines",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/eng/",
                VIEW_ALL: "View All",
                VIEW_UPDATES: "All Updates",
                READING_DIRECTION: "Reading Direction",
                COMMENTS: "Comments",
                NOTIFICATION: "Get Release Notifications!",
                TO_CHAPTER: "To Chapter",
                LATER_VOLUME_AHEAD: "Later volumes ahead! Be aware of spoilers.",
                FEEDBACK_TYPE: "Type of Feedback",
                FEEDBACK_SEND: "Send Feedback",
                FEEDBACK_SUGGESTION: "Suggestion",
                FEEDBACK_REPORT: "Report",
                FEEDBACK_SENT: "Your feedback was successfully sent.",
                CONTENT_RATINGS: "Content Ratings",
                ABOUT_RATING: "About the Ratings",
                ABOUT_RATING_DESCRIPTION: "For the purpose of assisting parents, educators, retailers, and customers in making educated decisions when choosing manga titles, we at Shueisha have developed the following rating principles based on our internal evaluations. As such, there may be differences from the app store ratings for each operating system. Please use them as a reference when selecting an appropriate title.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Suitable for readers and consumers of all ages. For example, may include mild language and fantasy violence, but not swearing or nudity.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Suitable for pre-teens and older. For example, may include some violence, some strong language, suggestive themes and settings, crude humor, and the usage of tobacco and alcohol.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Suitable for older adults and teens. For example, may include severe or gross violence, sexual content, frequent use of strong language, and the use of alcohol, tobacco, or other substances.",
                RATINGS_ATTENTION: "Please be aware that while we make every effort to implement these rating rules in a clear and consistent manner, they are completely based on our own subjective evaluation and only serve as general recommendations. They are not equal to any regulatory norm, and we cannot guarantee consistent application. When interpreting rating icons, please refer to the aforementioned outlines.",
                GDPR: "We use cookies to analyze traffic and improve experience. Just wanted to let you know! Learn more about cookies and similar technologies",
                GDPR_HERE: "here",
                GDPR_OKAY: "Okay,",
                GDPR_GOTIT: "got it!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Today",
                DAYS_AGO_2: "2 days ago",
                DAYS_AGO_3: "3 days ago",
                DAYS_AGO_4: "4 days ago",
                DAYS_AGO_5: "5 days ago",
                DAYS_AGO_6: "6 days ago",
                DAYS_AGO_7: "7 days ago",
                CHANGE_LANGUAGE: "LANGUAGE: ",
                SERVICE_LANGUAGE: "Service Language",
                CONTENTS_LANGUAGE: "Show Content",
                READ_LATEST: "READ LATEST",
                NEW_CHAPTER_ARRIVES: "New chapter arrives",
                EVERY: "every",
                EVERY_DAY: "every day",
                NEW_CHAPTER_ARRIVES_ON: "New chapter arrives on",
                YOU_MAY_ALSO_LIKE: "You May Also Like",
                CHAPTERS_SUB_AVAILABLE: "Subscribe to MANGA Plus MAX on the app to gain unlimited access to the entire story!",
                CHAPTERS_NOT_AVAILABLE: "Only certain chapters can be read in your current region using this service.",
                CHAPTERS_APP_AVAILABLE: "Read all chapters",
                CHAPTERS_APP_FREE: "for free",
                CHAPTERS_APP: "on the app!",
                DOWNLOAD_APP: "Download the app and read it anytime!",
                COMMENT_APP: "To leave a comment behind",
                INSTALL_APP: "Install the app now!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042)\nIndicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder.\nFor more information check ",
                FOLLOW_US: "Follow Us!",
                VIEW_COMMENTS: "View posted comments",
                LIKE: "Like",
                LANG: "eng",
                SEARCH: "Search by title or author",
                NO_RESULT: "Sorry, no results were found.\nTry searching for something else.",
                LATEST_NEWS_FROM: "Latest news from",
                CHECK_NOW: "CHECK NOW",
                SEE_ALL_NEWS: "See all news",
                PAGE_RESOLUTION: "Page resolution",
                HIGH: "High",
                MEDIUM: "Medium",
                LOW: "Low",
                LOADING: "Loading...",
                NO_FAVORITE: "No favorites to show",
                FIND: "Find the",
                FAVORITE_BUTTON: "Favorite Button",
                ADD_SERIES: "to add your favorite series here!",
                RIGHTS_RESERVED: "All rights reserved",
                DONT_SHOW_AGAIN: "Don't show again",
                NOT_FOUND_RESULT: "Sorry, not found the results."
            },
            es: {
                SERIES: "Séries",
                UPDATES: "Reciente",
                DAILY: "Ponte al dia",
                FEATURED: "Destacados",
                MANGALIST: "Descubre",
                FAVORITED: "Favoritos",
                language: "Español",
                New: "Nuevo",
                ALL: "Todo",
                HOTTEST: "Popular",
                LIKES: "Likes",
                LATEST: "Reciente",
                UPDATED: "Actualizado",
                addFAVORITED: "Enviar a Favoritos",
                doneFAVORITED: "Enviado a Favoritos",
                REMOVE: "Retirar",
                UNDO: "Deshacer",
                REMOVED: "Título retirado",
                RECOMMEND: "También Te Puede Interesar",
                UPDATE_SCHEDULE: "Programa De Actualización",
                LANGUAGES_AVAILABLE: "Idiomas Disponibles",
                OVERVIEW: "Argumento",
                CHAPTER_LIST: "Lista de capítulos",
                ABOUT_US: "Sobre nosotros",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1135",
                NEWS_AND_EVENTS: "Noticias y Eventos",
                SHARE: "Compartir",
                TWEET: "Post",
                HELP_FAQS: "Asistencia",
                FEEDBACK: "Sugerencias",
                TERMS_OF_SERVICES: "Términos de uso",
                PRIVACY_POLICY: "Política de privacidad",
                COPYRIGHTS: "Derechos de autor",
                COMMUNITY_GUIDELINE: "Normas de la comunidad",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/esp/",
                VIEW_ALL: "Ver Todo",
                VIEW_UPDATES: "Todo lo Reciente",
                READING_DIRECTION: "Dirección de lectura",
                COMMENTS: "Comentarios",
                TO_CHAPTER: "Al Capítulo",
                LATER_VOLUME_AHEAD: "¡Vienen más capítulos! Cuidado con los destripes.",
                SERVICE_ANNOUNCEMENT: "Anuncios sobre el servicio",
                FEEDBACK_TYPE: "Typo de Sugerencia",
                FEEDBACK_SEND: "Enviar Sugerencia",
                FEEDBACK_SUGGESTION: "Opinion",
                FEEDBACK_REPORT: "Reporte",
                FEEDBACK_SENT: "Tus sugerencias fueron enviadas con éxito.",
                CONTENT_RATINGS: "Clasificaciones del contenido",
                ABOUT_RATING: "ACERCA DE LA CLASIFICACIÓN DE CONTENIDO",
                ABOUT_RATING_DESCRIPTION: "En Shueisha, hemos elaborado una guía de clasificación de contenido para que padres, educadores, clientes y consumidores puedan tener más información al momento de elegir títulos de lectura. El motivo de esta guía es establecer una pauta propia, ya que existen diferencias entre los sistemas de clasificación de las distintas aplicaciones para cada sistema operativo. Esperamos sea útil al elegir un título.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Apto para lectores y consumidores de todas las edades. Por ejemplo, se incluye lenguaje moderado y lucha fantástica, pero no términos ofensivos ni desnudez.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Apto para adolescentes de 13 años en adelante. Por ejemplo, puede contener violencia, lenguaje fuerte usado con poca frecuencia, temas o situaciones sugerentes, humor crudo y el uso de alcohol y tabaco.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Para adultos mayores de 16 años. Por ejemplo, puede contener violencia extrema o gráfica, contenido sexual o erótico, lenguaje fuerte y frecuente, y el uso de alcohol, tabaco u otras drogas.",
                RATINGS_ATTENTION: "Atención: Si bien nos esforzamos por aplicar estas pautas de clasificación de manera clara y coherente, se basan en nuestras evaluaciones subjetivas internas y solo pretenden ser una guía general. No garantiza una aplicación uniforme y no corresponde a ninguna norma reglamentaria. Consulte las pautas anteriores al interpretar los iconos de clasificación.",
                GDPR: "Usamos cookies para analizar el trafico y mejorar tu experiencia. Solo queremos qie lo sepas! Aprende mas sobre cookies y tecnologías similares",
                GDPR_HERE: "aqui",
                GDPR_OKAY: "Cierto,",
                GDPR_GOTIT: "entiendo!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/privacypolicy/esp/",
                DISCORD_LINK: "https://discord.gg/yhneaVX",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.es/",
                NEW: "Hoy",
                DAYS_AGO_2: "Hace 2 días",
                DAYS_AGO_3: "Hace 3 días",
                DAYS_AGO_4: "Hace 4 días",
                DAYS_AGO_5: "Hace 5 días",
                DAYS_AGO_6: "Hace 6 días",
                DAYS_AGO_7: "Hace 7 días",
                CHANGE_LANGUAGE: "IDIOMA: ",
                SERVICE_LANGUAGE: "Idioma del servicio",
                CONTENTS_LANGUAGE: "Idioma del contenido",
                READ_LATEST: "Leer el último capítulo",
                NEW_CHAPTER_ARRIVES: "El próximo capítulo llega",
                EVERY: "todos los",
                EVERY_DAY: "todos los días",
                NEW_CHAPTER_ARRIVES_ON: "El próximo capítulo llega el",
                YOU_MAY_ALSO_LIKE: "También Le Puede Interesar",
                CHAPTERS_NOT_AVAILABLE: "En la región que está utilizando actualmente, solo se pueden leer algunos capítulos de este servicio.",
                DOWNLOAD_APP: "¡Descarga la app ahora!",
                COMMENT_APP: "To leave a comment behind",
                INSTALL_APP: "Install the app now!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042)\nindicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder.\nFor more information check ",
                FOLLOW_US: "Síguenos en!",
                VIEW_COMMENTS: "Ver comentarios",
                LIKE: "Me gusta",
                LANG: "esp",
                SEARCH: "Buscar por serie o autor",
                NO_RESULT: "Lo sentimos, no se encontraron resultados.",
                LATEST_NEWS_FROM: "Últimas noticias de",
                CHECK_NOW: "VER AQUÍ",
                SEE_ALL_NEWS: "Ver todas las Noticias",
                PAGE_RESOLUTION: "Resolución de página",
                HIGH: "Alto",
                MEDIUM: "Medio",
                LOW: "Bajo",
                LOADING: "Cargando...",
                NO_FAVORITE: "No tienes favoritos",
                FIND: "Encuentra el",
                FAVORITE_BUTTON: "Botón de Favoritos",
                ADD_SERIES: "para añadir tus series favoritas aqui!",
                RIGHTS_RESERVED: "Todos los derechos reservados",
                NOT_FOUND_RESULT: "Lo sentimos, no encontré los resultados."
            },
            pt: {
                SERIES: "Séries",
                UPDATES: "Atualizações",
                DAILY: "Atualizações Diárias",
                FEATURED: "Destaques",
                MANGALIST: "Lista de Mangás",
                FAVORITED: "Favoritado",
                language: "Português",
                New: "UP",
                ALL: "Todos",
                HOTTEST: "Mais Visualizados",
                LIKES: "Curtir",
                LATEST: "Recente",
                UPDATED: "Novo",
                addFAVORITED: "Adicionar aos Favoritos",
                doneFAVORITED: "Favoritado",
                REMOVE: "Remover",
                UNDO: "Desfazer",
                REMOVED: "Título Removido",
                RECOMMEND: "Talvez Também Te Interesse",
                UPDATE_SCHEDULE: "Cronograma de Atualização",
                LANGUAGES_AVAILABLE: "Idiomas Disponíveis",
                OVERVIEW: "Sumário",
                CHAPTER_LIST: "Lista de capítulos",
                SHARE: "Compartilhar",
                TWEET: "Post",
                ABOUT_US: "Sobre Nós",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1144",
                NEWS_AND_EVENTS: "Notícias e Eventos",
                HELP_FAQS: "Ajuda / FAQs",
                FEEDBACK: "Sugestões",
                TERMS_OF_SERVICES: "Termos de Uso",
                SERVICE_ANNOUNCEMENT: "Anúncios do Serviço",
                PRIVACY_POLICY: "Política de Privacidade",
                COPYRIGHTS: "Direitos de Autor",
                COMMUNITY_GUIDELINE: "Diretrizes da comunidade",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/ptb/",
                VIEW_ALL: "Ver Todos",
                VIEW_UPDATES: "All Updates",
                READING_DIRECTION: "Todas as Atualizações",
                COMMENTS: "Comentários",
                TO_CHAPTER: "Ir ao Capítulo",
                LATER_VOLUME_AHEAD: "Volumes Mais Recentes a Seguir! Cuidado com Spoilers.",
                FEEDBACK_TYPE: "Tipo de Sugestão",
                FEEDBACK_SEND: "Enviar Sugestão",
                FEEDBACK_SUGGESTION: "Sugestão",
                FEEDBACK_REPORT: "Reportar",
                FEEDBACK_SENT: "Sugestão enviado com sucesso.",
                CONTENT_RATINGS: "Classificação do Conteúdo",
                ABOUT_RATING: "SOBRE CLASSIFICAÇÕES INDICATIVAS",
                ABOUT_RATING_DESCRIPTION: "Na Shueisha, encorajamos pais, educadores, revendedores e consumidores a escolherem obras seguindo nossas diretrizes de classificação indicativa com base em avaliações internas. É por isso que existem diferenças entre as classificações da loja de aplicativos para cada sistema operacional. Use-os como um guia para escolher um título apropriado para você.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Adequado para leitores e consumidores de todas as idades. Pode conter, por exemplo, linguagem condenável e violência num contexto de fantasia, mas não palavrões ou nudez.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Adequado para pré-adolescentes em diante. Pode conter, por exemplo, violência, linguagem forte raramente usada, temas ou situações sugestivas, humor grosseiro e uso de álcool e tabaco.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Adequado para adolescentes em diante. Pode conter, por exemplo, violência psicológica ou gráfica, conteúdo sexual, linguagem forte e de baixo calão, uso de álcool, tabaco ou outras drogas.",
                RATINGS_ATTENTION: "Observação: embora nos esforcemos para aplicar essas diretrizes de classificação indicative de maneira clara e consistente, elas são baseadas em nossas avaliações subjetivas internas e servem apenas como orientação geral. Não garante aplicação uniforme e não corresponde a nenhuma norma regulamentar. Consulte as diretrizes acima para interpreter corretamente os ícones de classificação indicativa.",
                GDPR: "Utilizamos cookies para análise de tráfego e aprimoramento da navegação. Entenda mais sobre cookies e esta tecnologia",
                GDPR_HERE: "aqui",
                GDPR_OKAY: "Certo,",
                GDPR_GOTIT: "entendido!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Hoje",
                DAYS_AGO_2: "Há 2 dias",
                DAYS_AGO_3: "Há 3 dias",
                DAYS_AGO_4: "Há 4 dias",
                DAYS_AGO_5: "Há 5 dias",
                DAYS_AGO_6: "Há 6 dias",
                DAYS_AGO_7: "Há 7 dias",
                CHANGE_LANGUAGE: "Idioma:",
                SERVICE_LANGUAGE: "Idioma do Serviço",
                CONTENTS_LANGUAGE: "Conteúdo Exibido",
                READ_LATEST: "Ler o Mais Recente",
                NEW_CHAPTER_ARRIVES: "Novos capítulos",
                EVERY: "todo(a)",
                EVERY_DAY: "todo dia",
                NEW_CHAPTER_ARRIVES_ON: "Novos capítulos",
                YOU_MAY_ALSO_LIKE: "Talvez Também Te Interesse",
                CHAPTERS_NOT_AVAILABLE: "Através desse serviço, apenas alguns capítulos podem ser lidos em sua localização atual.",
                DOWNLOAD_APP: "Baixe o App para ler quando e onde estiver!",
                COMMENT_APP: "Para deixar seu comentário",
                INSTALL_APP: "Baixe o App agora mesmo!",
                ABJ: "ABJ Mark é uma marca registrada (Registro de No.10921042)\nIndicando que essa loja virtual de livros / serviço de distribuição de livros digitais é um serviço autorizado pelos detentores dos direitos autorais de suas respectivas obras.\nPara mais informações consulte ",
                FOLLOW_US: "Nos Siga!",
                VIEW_COMMENTS: "Ver comentários",
                LIKE: "Curtir",
                LANG: "ptbr",
                SEARCH: "Buscar por Título ou Autor",
                NO_RESULT: "Desculpe, nenhum resultado encontrado.\nTente busca algo diferente.",
                LATEST_NEWS_FROM: "Latest news from",
                CHECK_NOW: "CHECK NOW",
                SEE_ALL_NEWS: "See all news",
                PAGE_RESOLUTION: "Resolução da Página",
                HIGH: "Alta",
                MEDIUM: "Média",
                LOW: "Baixa",
                LOADING: "Carregando...",
                NO_FAVORITE: "Você Não Possui Favoritos",
                FIND: "Encontre o ",
                FAVORITE_BUTTON: "Botão de Favoritos",
                ADD_SERIES: "para adicionar suas séries favoritas aqui!",
                RIGHTS_RESERVED: "Todos os Direitos Reservados",
                NOT_FOUND_RESULT: "Desculpe, não encontrei os resultados."
            },
            fr: {
                SERIES: "Séries",
                UPDATES: "Récent",
                DAILY: "Mises à Jour Quotidiennes",
                FEATURED: "En Vedette",
                MANGALIST: "Liste des Mangas",
                FAVORITED: "Favoris",
                language: "Français",
                New: "Nouveau",
                ALL: "Tous",
                HOTTEST: "Populaires",
                LIKES: "Likes",
                LATEST: "Récent",
                UPDATED: "Mis à Jour",
                addFAVORITED: "Ajouter aux Favoris",
                doneFAVORITED: "Ajouté aux Favoris",
                REMOVE: "Supprimer",
                UNDO: "Annuler",
                REMOVED: "Titre Supprimé",
                RECOMMEND: "Vous Pouvez Aussi Aimer",
                UPDATE_SCHEDULE: "Calendrier de Mise à Jour",
                LANGUAGES_AVAILABLE: "Langues Disponibles",
                OVERVIEW: "Synthèse",
                CHAPTER_LIST: "Liste des Chapitres",
                SHARE: "Partager",
                TWEET: "Post",
                ABOUT_US: "À Propos de Nous",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1150",
                NEWS_AND_EVENTS: "Actualités et Événements",
                HELP_FAQS: "Aide / FAQ",
                FEEDBACK: "Suggestions",
                TERMS_OF_SERVICES: "Conditions d’Utilisation",
                SERVICE_ANNOUNCEMENT: "Annonces de Service",
                PRIVACY_POLICY: "Politique de Confidentialité",
                COPYRIGHTS: "Copyrights",
                COMMUNITY_GUIDELINE: "Règles de la communauté",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/fra/",
                VIEW_ALL: "Afficher Tout",
                VIEW_UPDATES: "Toutes les Mises à Jour",
                READING_DIRECTION: "Direction de Lecture",
                COMMENTS: "Commentaires",
                TO_CHAPTER: "Aller au chapitre",
                LATER_VOLUME_AHEAD: "Derniers volumes à venir! Attention aux spoilers.",
                FEEDBACK_TYPE: "Type de Suggestion",
                FEEDBACK_SEND: "Envoyer Suggestion",
                FEEDBACK_SUGGESTION: "Opinion",
                FEEDBACK_REPORT: "Signaler",
                FEEDBACK_SENT: "Votre suggestion a été envoyé avec succès.",
                CONTENT_RATINGS: "Évaluations",
                ABOUT_RATING: "À propos de la classification par âge",
                ABOUT_RATING_DESCRIPTION: "Afin que parents, éducateurs, détaillants et tous consommateurs puissent effectuer un choix avisé dans la sélection de leurs mangas, nous avons établi un système de classification s'appuyant sur des évaluations effectuées en interne. Il se peut donc que les classifications fournies par chaque boutique d'application soient différentes. N'hésitez pas à vous y référer pour choisir le titre qui vous convient.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Convient aux personnes de tous âges. Peut contenir du langage léger et de la violence non réaliste, mais ne contient ni injures ni nudité.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Convient à un public adolescent ou plus âgé. Peut contenir de la violence, du langage parfois grossier, des thèmes et situations suggestives, de l'humour vulgaire et de la consommation d'alcool ou de cigarettes.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Convient à un public adulte. Peut contenir des scènes d'extrême violence et sanglantes, du sexe, du langage grossier fréquent, de la consommation d'alcool, de cigarettes et autres drogues.",
                RATINGS_ATTENTION: "Avertissement : bien que nous nous efforcions d'appliquer ce classement de manière claire et cohérente, ce dernier ne reflète qu'une évaluation subjective de notre part et n'est fourni qu'à titre indicatif. Nous ne pouvons en garantir une application uniforme et il ne représente en aucun cas une norme réglementaire. Veuillez vous reporter aux explications ci-dessus lorsque vous voyez une icône de classification.",
                GDPR: "Nous vous informons que nous utilisons des cookies pour analyser le trafic et améliorer votre expérience sur Manga Plus. Pour en savoir plus sur les cookies et les technologies similaires",
                GDPR_HERE: "voir ici",
                GDPR_OKAY: "Ok,",
                GDPR_GOTIT: "compris!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/static/privacypolicy/fra/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Aujourd'hui",
                DAYS_AGO_2: "il y a 2 jours",
                DAYS_AGO_3: "il y a 3 jours",
                DAYS_AGO_4: "il y a 4 jours",
                DAYS_AGO_5: "il y a 5 jours",
                DAYS_AGO_6: "il y a 6 jours",
                DAYS_AGO_7: "il y a 7 jours",
                CHANGE_LANGUAGE: "LANGUE: ",
                SERVICE_LANGUAGE: "Langue du Service",
                CONTENTS_LANGUAGE: "Langue du Contenu",
                READ_LATEST: "Lire le Dernier Chapitre",
                NEW_CHAPTER_ARRIVES: "Le nouveau chapitre arrive",
                EVERY: "tous les",
                EVERY_DAY: "tous les jours",
                NEW_CHAPTER_ARRIVES_ON: "Le nouveau chapitre arrive le",
                YOU_MAY_ALSO_LIKE: "Vous Pouvez Aussi Aimer",
                CHAPTERS_NOT_AVAILABLE: "Seuls certains chapitres sont accessibles dans votre région avec ce service.",
                DOWNLOAD_APP: "Téléchargez l'application et lisez à tout moment !",
                COMMENT_APP: "Pour laisser un commentaire",
                INSTALL_APP: "Installez l'application maintenant !",
                ABJ: "ABJ Mark est une marque déposée (numéro d'enregistrement 10921042)\nCe qui indique que cette boutique de livres électroniques / service de distribution de livres électroniques est un service de distribution autorisé qui a obtenu l'autorisation d'utiliser le contenu du détenteur des droits d'auteur.\nPour plus d'informations, consultez ",
                FOLLOW_US: "Suivez-nous!",
                VIEW_COMMENTS: "Afficher les commentaires publiés",
                LIKE: "J'aime",
                LANG: "fra",
                SEARCH: "Recherche par titre ou par auteur",
                NO_RESULT: "Désolé, aucun résultat n'a été trouvé. \nEssayez de rechercher autre chose.",
                LATEST_NEWS_FROM: "Dernières nouvelles de",
                CHECK_NOW: "VÉRIFIER MAINTENANT",
                SEE_ALL_NEWS: "Voir toutes les actualités",
                PAGE_RESOLUTION: "Résolution de la page",
                HIGH: "Haute",
                MEDIUM: "Moyenne",
                LOW: "Basse",
                LOADING: "En cours de chargement ...",
                NO_FAVORITE: "Aucun favori à afficher",
                FIND: "Trouvez le",
                FAVORITE_BUTTON: "Bouton de Favoris",
                ADD_SERIES: "pour ajouter vos séries préférées ici !",
                RIGHTS_RESERVED: "Tous droits réservés",
                NOT_FOUND_RESULT: "Désolé, je n'ai pas trouvé les résultats."
            },
            th: {
                SERIES: "ชุด",
                UPDATES: "ล่าสุด",
                DAILY: "อัพเดททุกวัน",
                FEATURED: "จุดเด่น",
                MANGALIST: "รายการมังงะ",
                FAVORITED: "รายการโปรด",
                language: "Thai",
                New: "ใหม่",
                ALL: "ทั้งหมด",
                HOTTEST: "มีคนดูมากที่สุด",
                LIKES: "ถูกใจ",
                LATEST: "มาใหม่",
                UPDATED: "ใหม่",
                addFAVORITED: "เพิ่มในรายการโปรด",
                doneFAVORITED: "โปรด",
                REMOVE: "นำออก",
                UNDO: "เลิกทำ",
                REMOVED: "นำชื่อเรื่องออก",
                RECOMMEND: "คุณอาจชอบ",
                UPDATE_SCHEDULE: "อัปเดตกำหนดการ",
                LANGUAGES_AVAILABLE: "ภาษาที่ใช้ได้",
                OVERVIEW: "ภาพรวม",
                CHAPTER_LIST: "รายการบท",
                ABOUT_US: "เกี่ยวกับเรา",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1138",
                NEWS_AND_EVENTS: "ข่าวสารและกิจกรรม",
                SHARE: "แบ่งปัน",
                TWEET: "Post",
                HELP_FAQS: "ช่วยด้วย",
                FEEDBACK: "คำติชม",
                TERMS_OF_SERVICES: "เงื่อนไขการให้บริการ",
                PRIVACY_POLICY: "นโยบายความเป็นส่วนตัว",
                COPYRIGHTS: "ลิขสิทธิ์",
                COMMUNITY_GUIDELINE: "แนวทางปฏิบัติของชุมชน",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/tha/",
                VIEW_ALL: "ดูทั้งหมด",
                VIEW_UPDATES: "ดูทั้งหมด",
                READING_DIRECTION: "ทิศทางการอ่าน",
                COMMENTS: "ความคิดเห็น",
                TO_CHAPTER: "ถึงบทที่ ○",
                LATER_VOLUME_AHEAD: "ตอนต่อไปข้างหน้า! ระวังสปอยล์",
                SERVICE_ANNOUNCEMENT: "ประกาศการให้บริการ",
                FEEDBACK_TYPE: "ประเภทของคำติชม",
                FEEDBACK_SEND: "ส่งความคิดเห็น",
                FEEDBACK_SUGGESTION: "คำแนะนำ",
                FEEDBACK_REPORT: "รายงาน",
                FEEDBACK_SENT: "ส่งความคิดเห็นของคุณเรียบร้อยแล้ว",
                CONTENT_RATINGS: "การให้คะแนนเนื้อหา",
                ABOUT_RATING: "เกี่ยวกับเรตติ้ง",
                ABOUT_RATING_DESCRIPTION: "ที่ชูเอย์ฉะเราได้วางหลักเกณฑ์การจัดเรตติ้งด้านล่างขึ้น โดยอ้างอิงจากการประเมินภายในบริษัท เพื่อให้ผู้ปกครอง ผู้ให้การศึกษา ผู้ค้าปลีก และผู้บริโภคทุกท่านมีข้อมูลที่เพียงพอต่อการตัดสินใจเลือกมังงะได้ ดังนั้นเรตติ้งในแอปพลิเคชันและร้านค้าของแต่ละระบบปฏิบัติการจึงมีความแตกต่างกัน  กรุณาใช้ประกอบการตัดสินใจในการเลือกเรื่องอย่างเหมาะสม",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "เหมาะสำหรับผู้อ่านและผู้บริโภคทุกวัย เช่น มีการใช้ภาษาที่ไม่รุนแรง หรือการใช้ความรุนแรงแนวแฟนตาซี แต่ไม่มีคำหยาบหรือภาพเปลือย",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "เหมาะสำหรับเด็กอายุ 15 ปีขึ้นไป เช่น อาจมีการใช้ความรุนแรง มีการใช้ภาษาที่รุนแรงบ้าง ธีมหรือสถานการณ์ที่มีการชี้นำ มุกตลกแบบหยาบคาย การใช้แอลกอฮอล์หรือบุหรี่",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "เหมาะสำหรับผู้ใหญ่อายุ 18 ปีขึ้นไป เช่น อาจมีการใช้ความรุนแรงอย่างหนักหรือถึงขั้นสยดสยอง เนื้อหาเกี่ยวกับเรื่องเพศ มีการใช้ภาษาที่รุนแรงบ่อยครั้ง การใช้แอลกอฮอล์ บุหรี่ หรือยาเสพติดประเภทอื่นๆ",
                RATINGS_ATTENTION: "ข้อควรระวัง: เราได้พยายามวางหลักเกณฑ์การจัดเรตอายุเหล่านี้ ให้มีความชัดเจนและสอดคล้องกันแล้ว แต่อย่างไรก็ดี หลักเกณฑ์เหล่านี้อ้างอิงมาจากการประเมินด้วยมุมมองส่วนตัวภายในบริษัท จึงเป็นเพียงแนวทางทั่วไปเท่านั้น ไม่รับประกันว่าจะเหมือนหรือสอดคล้องกับมาตรฐานกฏเกณฑ์ใดๆ หากต้องการทราบความหมายของเรตติ้งและไอคอน โปรดดูหลักเกณฑ์ที่ระบุไว้ด้านบน",
                GDPR: "เราใช้คุกกี้เพื่อวิเคราะห์การเข้าชมและปรับปรุงประสบการณ์ แค่อยากบอกให้รู้ เรียนรู้เพิ่มเติมเกี่ยวกับคุกกี้และเทคโนโลยีที่คล้ายกัน",
                GDPR_HERE: "ที่นี่",
                GDPR_OKAY: "ตกลง,",
                GDPR_GOTIT: "อนุญาต",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "ขึ้น",
                DAYS_AGO_2: "2 วันที่ผ่านมา",
                DAYS_AGO_3: "3 วันที่ผ่านมา",
                DAYS_AGO_4: "4 วันที่ผ่านมา",
                DAYS_AGO_5: "5 วันที่ผ่านมา",
                DAYS_AGO_6: "6 วันที่ผ่านมา",
                DAYS_AGO_7: "7 วันที่ผ่านมา",
                CHANGE_LANGUAGE: "ภาษา: ",
                SERVICE_LANGUAGE: "ภาษาบริการ",
                CONTENTS_LANGUAGE: "ภาษาของเนื้อหา",
                READ_LATEST: "อ่านล่าสุด",
                NEW_CHAPTER_ARRIVES: "บทใหม่มาถึง",
                EVERY: "ทุก",
                EVERY_DAY: "ทุกวัน",
                NEW_CHAPTER_ARRIVES_ON: "ตอนใหม่มา",
                YOU_MAY_ALSO_LIKE: "คุณอาจชอบ",
                CHAPTERS_NOT_AVAILABLE: "สามารถอ่านได้เพียงบางบทเท่านั้นในภูมิภาคที่คุณกำลังใช้งาน",
                DOWNLOAD_APP: "ดาวน์โหลดแอปและอ่านได้ตลอดเวลา!",
                COMMENT_APP: "หากต้องการแสดงความคิดเห็น ",
                INSTALL_APP: "ติดตั้งแอปทันที!",
                ABJ: "ABJเครื่องหมายเป็นเครื่องหมายการค้าจดท (ทะเบียนเลขที่10921042)\nะเบียนซึ่งระบุว่าบริการจำหน่ายหนังสืออิเล็กทรอนิกส์นี้เป็นบริการจัดจำหน่ายที่ได้รับอนุญาตซึ่งได้รับอนุญาตให้ใช้เนื้อหาจากผู้ถือลิขสิทธิ์ตรวจสอบข้อมูลเพิ่มเติม\nทะเบียนเลขที่ ",
                FOLLOW_US: "ตามเรามา",
                VIEW_COMMENTS: "ความคิดเห็น",
                LIKE: "ชอบ",
                LANG: "thai",
                SEARCH: "ค้นหาตามชื่อเรื่องหรือผู้แต่ง",
                NO_RESULT: "ไม่พบผลลัพธ์\nโปรดลองค้นหาอย่างอื่น",
                LATEST_NEWS_FROM: "ข่าวสารและกิจกรรม",
                CHECK_NOW: "ตรวจสอบตอนนี้",
                SEE_ALL_NEWS: "ดูข่าวทั้งหมด",
                PAGE_RESOLUTION: "ความละเอียดหน้า",
                HIGH: "สูง",
                MEDIUM: "กลาง",
                LOW: "ต่ำ",
                LOADING: "กำลังโหลด...",
                NO_FAVORITE: "ไม่มีรายการโปรดที่จะแสดง",
                FIND: "ค้นหาตามชื่อเรื่องหรือผู้แต่ง",
                FAVORITE_BUTTON: "ปุ่มโปรด",
                ADD_SERIES: "อเพิ่มซีรีส์โปรดของคุณที่นี่!",
                RIGHTS_RESERVED: "สงวนลิขสิทธิ์",
                NOT_FOUND_RESULT: "ขออภัย ไม่พบผลลัพธ์"
            },
            id: {
                SERIES: "Seri",
                UPDATES: "Pembaharuan",
                DAILY: "Pembaharuan Harian",
                FEATURED: "Unggulan",
                MANGALIST: "Daftar Manga",
                FAVORITED: "Daftar Favorit",
                language: "Bahasa Indonesia",
                New: "Terbaru",
                ALL: "Semua",
                HOTTEST: "Paling Dilihat",
                LIKES: "Suka",
                LATEST: "Terbaru",
                UPDATED: "Baru",
                addFAVORITED: "Tambahkan ke Favorit",
                doneFAVORITED: "Daftar Favorit",
                REMOVE: "Hapus",
                UNDO: "Urungkan",
                REMOVED: "Judul dihapus",
                RECOMMEND: "Anda Mungkin Juga Suka",
                UPDATE_SCHEDULE: "Jadwal Pembaharuan",
                LANGUAGES_AVAILABLE: "Bahasa yang Tersedia",
                OVERVIEW: "Ikhtisar",
                CHAPTER_LIST: "Daftar Bab",
                SHARE: "Bagikan",
                TWEET: "Post",
                ABOUT_US: "Tentang Kami",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1141",
                NEWS_AND_EVENTS: "Berita dan Acara",
                HELP_FAQS: "Bantuan/Pertanyaan Umum",
                FEEDBACK: "Masukan",
                TERMS_OF_SERVICES: "Syarat Layanan",
                PRIVACY_POLICY: "Kebijakan Pribadi",
                COPYRIGHTS: "Hak Cipta",
                COMMUNITY_GUIDELINE: "Panduan Komunitas",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/ind/",
                VIEW_ALL: "Lihat Semua",
                VIEW_UPDATES: "Semua Pembaharuan",
                READING_DIRECTION: "Arah Baca",
                COMMENTS: "Komentar",
                TO_CHAPTER: "Ke Bab",
                LATER_VOLUME_AHEAD: "Di Depan Adalah Volume Berikutnya! Hati-hati Dengan Beberan Cerita.",
                SERVICE_ANNOUNCEMENT: "Pengumuman Layanan",
                FEEDBACK_TYPE: "Jenis Masukan",
                FEEDBACK_SEND: "Kirim Masukan",
                FEEDBACK_SUGGESTION: "Saran",
                FEEDBACK_REPORT: "Laporkan",
                FEEDBACK_SENT: "Masukan Anda telah terkirim.",
                CONTENT_RATINGS: "Rating Konten",
                ABOUT_RATING: "Mengenai rating",
                ABOUT_RATING_DESCRIPTION: "Di Shueisha, kami mendorong para orang tua, pendidik, pengecer, dan konsumen untuk membuat pilihan yang tepat saat memilih judul komik, maka dari itu kami membuat panduan rating berikut berdasarkan evaluasi internal. Hal ini dikarenakan karena adanya perbedaan antara rating aplikasi dan/atau store untuk setiap OS. Mohon digunakan sebagai panduan saat memilih judul yang sesuai.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Cocok untuk semua pembaca atau konsumen dari segala usia. Misal, adanya gaya bahasa dan kekerasan yang sedikit vulgar, namun tidak termasuk gaya bicara kasar atau pornografi.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Cocok untuk usia 15 tahun ke atas. Misal, adanya kemungkinan berisi kekerasan, beberapa gaya bahasa yang kasar, tema atau situasi yang menjurus, humor yang vulgar dan penggunaan alkohol serta tembakau.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Untuk usia 20 tahun ke atas. Misal, kemungkinan tinggi berisi kekerasan atau kekejian secara grafis, konten tidak senonoh, seringnya pemakaian gaya bahasa yang kasar, dan penggunaan alkohol, tembakau, atau obat-obatan lainnya.",
                RATINGS_ATTENTION: "Perhatian: Meskipun kami berusaha untuk menerapkan pedoman rating ini dengan cara yang jelas dan konsisten, pedoman ini diterapkan berdasarkan penilaian subjektif internal kami dan hanya dimaksudkan sebagai pedoman umum. Pedoman yang kami berikan tidak mengacu pada semua aplikasi yang seragam dan tidak sesuai dengan standar peraturan apa pun. Harap mengacu pada panduan di atas saat menginterpretasikan ikon rating.",
                GDPR: "Kami menggunakan cookie untuk menganalisis lalu lintas dan meningkatkan pengalaman Anda. Hanya sekadar memberi tahu! Pelajari lebih lanjut tentang cookie dan teknologi serupa",
                GDPR_HERE: "di sini",
                GDPR_OKAY: "Oke,",
                GDPR_GOTIT: "dimengerti!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Hari Ini",
                DAYS_AGO_2: "2 hari yang lalu",
                DAYS_AGO_3: "3 hari yang lalu",
                DAYS_AGO_4: "4 hari yang lalu",
                DAYS_AGO_5: "5 hari yang lalu",
                DAYS_AGO_6: "6 hari yang lalu",
                DAYS_AGO_7: "7 hari yang lalu",
                CHANGE_LANGUAGE: "BAHASA: ",
                SERVICE_LANGUAGE: "Bahasa Layanan",
                CONTENTS_LANGUAGE: "Bahasa Konten",
                READ_LATEST: "BACA TERBARU",
                NEW_CHAPTER_ARRIVES: "Bab baru meluncur",
                EVERY: "setiap",
                EVERY_DAY: "setiap hari",
                NEW_CHAPTER_ARRIVES_ON: "Bab baru meluncur pada",
                YOU_MAY_ALSO_LIKE: "Anda Mungkin Juga Suka",
                CHAPTERS_NOT_AVAILABLE: "Hanya beberapa bab tertentu yang dapat dibaca di wilayah penggunaan layanan saat ini.",
                DOWNLOAD_APP: "Unduh aplikasinya dan baca kapan saja!",
                COMMENT_APP: "Untuk meninggalkan komentar",
                INSTALL_APP: "Pasang aplikasinya sekarang!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042)\nIndicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder.\nFor more information check ",
                FOLLOW_US: "Ikuti Kami!",
                VIEW_COMMENTS: "Lihat komentar",
                LIKE: "Suka",
                LANG: "idn",
                SEARCH: "Cari berdasarkan judul atau penulis",
                NO_RESULT: "Maaf, tidak ditemukan hasil.\nCoba cari dengan kata kunci lain.",
                LATEST_NEWS_FROM: "Berita terkini dari",
                CHECK_NOW: "CEK SEKARANG",
                SEE_ALL_NEWS: "Lihat semua berita",
                PAGE_RESOLUTION: "Resolusi halaman",
                HIGH: "Tinggi",
                MEDIUM: "Sedang",
                LOW: "Rendah",
                LOADING: "Memuat...",
                NO_FAVORITE: "Tidak ada daftar favorit untuk ditampilkan.",
                FIND: "Gunakan",
                FAVORITE_BUTTON: "Tombol Favorit",
                ADD_SERIES: "untuk menambahkan judul favorit Anda di sini!",
                RIGHTS_RESERVED: "Hak Cipta Dilindungi",
                NOT_FOUND_RESULT: "Maaf, tidak ditemukan hasilnya."
            },
            ru: {
                SERIES: "Манга",
                UPDATES: "Обновления",
                DAILY: "Ежедневные обновления",
                FEATURED: "Рекомендуем",
                MANGALIST: "Каталог манги",
                FAVORITED: "Избранное",
                language: "Русский",
                New: "ВВЕРХ",
                ALL: "Всё",
                HOTTEST: "Популярное",
                LIKES: "Лайки",
                LATEST: "Последние",
                UPDATED: "Обновлено",
                addFAVORITED: "Добавить в избранное",
                doneFAVORITED: "В избранных",
                REMOVE: "Удалить",
                UNDO: "Отменить",
                REMOVED: "Серия удалена",
                RECOMMEND: "Вам также может понравиться",
                UPDATE_SCHEDULE: "Расписание обновлений",
                LANGUAGES_AVAILABLE: "Доступные языки",
                OVERVIEW: "Описание",
                CHAPTER_LIST: "Список глав",
                SHARE: "Поделиться",
                TWEET: "Опубликовать пост",
                ABOUT_US: "О нас",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1147",
                NEWS_AND_EVENTS: "Новости и события",
                HELP_FAQS: "Помощь / Вопрос-ответ",
                FEEDBACK: "Обратная связь",
                TERMS_OF_SERVICES: "Пользовательское соглашение",
                SERVICE_ANNOUNCEMENT: "Объявления",
                PRIVACY_POLICY: "Политика конфиденциальности",
                COPYRIGHTS: "Авторские права",
                COMMUNITY_GUIDELINE: "Правила сообщества",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/rus/",
                VIEW_ALL: "Посмотреть всё",
                VIEW_UPDATES: "Все обновления",
                READING_DIRECTION: "Направление чтения",
                COMMENTS: "Комментарии",
                TO_CHAPTER: "К главе",
                LATER_VOLUME_AHEAD: "Далее следуют последующие тома! Будьте внимательны, возможны спойлеры.",
                FEEDBACK_TYPE: "Тип отзыва",
                FEEDBACK_SEND: "Отправить отзыв",
                FEEDBACK_SUGGESTION: "Предложение",
                FEEDBACK_REPORT: "Сообщение об ошибке",
                FEEDBACK_SENT: "Ваш отзыв был отправлен.",
                CONTENT_RATINGS: "Рейтинг",
                ABOUT_RATING: "О возрастных рейтингах",
                ABOUT_RATING_DESCRIPTION: "Чтобы опекунам, преподавателям, розничным продавцам и потребителям было проще подбирать мангу, исходя из предоставленной информации, мы, Shueisha, подготовили свою систему возрастных рейтингов, составленную нашей компанией. Поскольку у каждого магазина приложений существует своя система оценки возрастных рейтингов,  ориентируйтесь на нашу внутреннюю систему при выборе подходящего произведения.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: 'Подходит для читателей и потребителей всех возрастов. Например, могут встречаться легкие словесные ругательства или нереалистичное "мультяшное" насилие, но полностью отсутствуют нецензурная лексика и обнажение.',
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Подходит для читателей старше 15 лет. В манге могут содержаться насилие, редкое употребление нецензурной лексики, двусмысленные темы или ситуации, вульгарный юмор, а также употребление алкоголя или курение.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Ориентировано на читателей старше 18 лет. Например, в манге могут содержаться сцены жестокости и гротескного насилия, материалы сексуального характера, частое употребление нецензурных выражений, курение, употребление алкоголя и различных видов наркотиков.",
                RATINGS_ATTENTION: "Внимание: Несмотря на то, что мы стремимся применять данное возрастное разделение чётко и последовательно, оно основано на наших внутренних субъективных оценках и предназначено только для общего руководства. Мы не гарантируем единообразного применения, а также соответствий каким-либо установленным нормам. Для толкования значков обозначения возрастного рейтинга, пожалуйста, воспользуйтесь описанием выше.",
                GDPR: "Чтобы Вы знали, мы используем куки для анализа трафика и для улучшения нашего сервиса. Узнайте больше о куки и смежных технологиях",
                GDPR_HERE: "здесь",
                GDPR_OKAY: "Хорошо,",
                GDPR_GOTIT: "всё понятно!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Сегодня",
                DAYS_AGO_2: "2 дня назад",
                DAYS_AGO_3: "3 дня назад",
                DAYS_AGO_4: "4 дня назад",
                DAYS_AGO_5: "5 дней назад",
                DAYS_AGO_6: "6 дней назад",
                DAYS_AGO_7: "7 дней назад",
                CHANGE_LANGUAGE: "ЯЗЫК: ",
                SERVICE_LANGUAGE: "Язык cайта",
                CONTENTS_LANGUAGE: "Язык манги",
                READ_LATEST: "ЧИТАТЬ ПОСЛЕДНЕЕ",
                NEW_CHAPTER_ARRIVES: "Новые главы",
                EVERY: "каждый(ую)",
                EVERY_DAY: "каждый день",
                NEW_CHAPTER_ARRIVES_ON: "Новая глава будет",
                YOU_MAY_ALSO_LIKE: "Вам Также Может Понравиться",
                CHAPTERS_NOT_AVAILABLE: "В вашем регионе для чтения доступны только некоторые главы.",
                DOWNLOAD_APP: "Скачайте наше приложение и читайте когда хотите!",
                COMMENT_APP: "Чтобы оставить комментарий",
                INSTALL_APP: "установите приложение прямо сейчас!",
                ABJ: "ABJ Mark – зарегистрированная торговая марка (регистрационный номер 10921042).\nДанный магазин и служба распространения электронных книг является авторизованной службой распространения, получившей разрешение на использование контента от правообладателя.\nДля получения дополнительной информации по ссылке",
                FOLLOW_US: "Следите за нами!",
                VIEW_COMMENTS: "Посмотреть комментарии",
                LIKE: "Лайк",
                LANG: "rus",
                SEARCH: "Искать по названию или автору",
                NO_RESULT: "Извините, ничего не найдено.\nПопробуйте поискать что-то другое.",
                LATEST_NEWS_FROM: "Последние новости от",
                CHECK_NOW: "ПРОВЕРИТЬ СЕЙЧАС",
                SEE_ALL_NEWS: "Смотреть все новости",
                PAGE_RESOLUTION: "Разрешение страницы",
                HIGH: "Высокое",
                MEDIUM: "Среднее",
                LOW: "Низкое",
                LOADING: "Загрузка...",
                NO_FAVORITE: "Нет избранных",
                FIND: "Найдите",
                FAVORITE_BUTTON: "Кнопку избранное",
                ADD_SERIES: "чтобы добавить сюда мангу!",
                RIGHTS_RESERVED: "Все права защищены",
                NOT_FOUND_RESULT: "К сожалению, результатов не найдено."
            },
            vi: {
                SERIES: "TRUYỆN",
                UPDATES: "CẬP NHẬT",
                DAILY: "Cập Nhật Hàng Ngày",
                FEATURED: "NỔI BẬT",
                MANGALIST: "DANH SÁCH MANGA",
                FAVORITED: "YÊU THÍCH",
                language: "Tiếng Việt",
                New: "LÊN TRÊN",
                ALL: "TẤT CẢ",
                HOTTEST: "HOT NHẤT",
                LIKES: "Thích",
                LATEST: "GẦN NHẤT",
                UPDATED: "ĐÃ CẬP NHẬT",
                addFAVORITED: "THÊM VÀO YÊU THÍCH",
                doneFAVORITED: "ĐÃ YÊU THÍCH",
                REMOVE: "GỠ",
                UNDO: "HOÀN TÁC",
                REMOVED: "ĐÃ GỠ TRUYỆN",
                RECOMMEND: "BẠN CÓ THỂ CŨNG THÍCH",
                UPDATE_SCHEDULE: "CẬP NHẬT LỊCH",
                LANGUAGES_AVAILABLE: "Ngôn ngữ có sẵn",
                OVERVIEW: "KHÁI QUÁT CÂU CHUYỆN",
                CHAPTER_LIST: "Danh sách chương",
                SHARE: "CHIA SẺ",
                TWEET: "Post",
                ABOUT_US: "VỀ CHÚNG TÔI",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1153",
                NEWS_AND_EVENTS: "Tin tức và sự kiện",
                HELP_FAQS: "Trợ giúp / Câu Hỏi Thường Gặp",
                FEEDBACK: "Phản hồi",
                TERMS_OF_SERVICES: "Điều khoản dịch vụ",
                SERVICE_ANNOUNCEMENT: "Thông báo dịch vụ",
                PRIVACY_POLICY: "Chính sách riêng tư",
                COPYRIGHTS: "Bản quyền",
                COMMUNITY_GUIDELINE: "Nguyên tắc cộng đồng",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/vie/",
                VIEW_ALL: "XEM TẤT CẢ",
                VIEW_UPDATES: "Tất Cả Cập Nhật",
                READING_DIRECTION: "Chiều Đọc",
                COMMENTS: "BÌNH LUẬN",
                TO_CHAPTER: "TỚI CHƯƠNG",
                LATER_VOLUME_AHEAD: "SẮP CÓ TẬP MỚI! CẨN THẬN VỚI SPOILER.",
                FEEDBACK_TYPE: "Loại phản hồi",
                FEEDBACK_SEND: "Gửi phản hồi",
                FEEDBACK_SUGGESTION: "Đề xuất",
                FEEDBACK_REPORT: "Báo cáo",
                FEEDBACK_SENT: "Phản hồi của bạn đã được gửi thành công.",
                CONTENT_RATINGS: "Xếp hạng nội dung",
                ABOUT_RATING: "Về hệ thống phân loại độ tuổi",
                ABOUT_RATING_DESCRIPTION: "Để giúp các bậc phụ huynh, giáo viên, nhà bán lẻ và người tiêu dùng có thể quyết định dựa trên thông tin đầy đủ khi lựa chọn các tựa manga, tại Shueisha, chúng tôi dựa trên đánh giá nội bộ để phát triển hệ thống phân loại độ tuổi như sau. Đây là lý do kho ứng dụng của mỗi hệ điều hành có hệ thống phân loại độ tuổi khác nhau. Vui lòng tham khảo thông tin này để chọn ra tựa truyện phù hợp.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Nội dung dành cho đối tượng độc giả và người tiêu dùng ở mọi lứa tuổi. Ví dụ: Nội dung chỉ chứa từ ngữ nhẹ nhàng và hình ảnh bạo lực viễn tưởng nhưng không chứa từ ngữ tục tĩu hay hình ảnh khỏa thân.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Nội dung dành cho người từ 10 tuổi trở lên. Ví dụ: Nội dung chứa hình ảnh bạo lực, từ ngữ mạnh bạo trong một số ít phân cảnh, tình huống hoặc chủ đề khiêu gợi, hài hước thô tục, sử dụng đồ uống có cồn hay thuốc lá.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Nội dung dành cho người lớn từ 20 tuổi trở lên. Ví dụ: Nội dung chứa hình ảnh bạo lực gay gắt, máu me, nội dung tình dục, từ ngữ mạnh bạo sử dụng thường xuyên, sử dụng đồ uống có cồn, thuốc lá hay chất kích thích khác.",
                RATINGS_ATTENTION: "Lưu ý: Chúng tôi luôn cố gắng hết sức để có thể áp dụng hệ thống phân loại này một cách rõ ràng và nhất quán, nhưng nó chỉ dựa trên đánh giá chủ quan của nội bộ công ty và là hướng dẫn chung. Hệ thống phân loại không đảm bảo được áp dụng như nhau hay tương đương với bất kỳ tiêu chuẩn quy định nào. Vui lòng tham khảo hướng dẫn trên khi tìm hiểu về biểu tượng phân loại độ tuổi.",
                GDPR: "Chúng tôi muốn thông báo cho bạn biết rằng, chúng tôi sử dụng cookie để phân tích lưu lượng và cải thiện trải nghiệm. Tìm hiểu thêm về cookie và các công nghệ tương tự",
                GDPR_HERE: "tại đây",
                GDPR_OKAY: "Được,",
                GDPR_GOTIT: "đã hiểu!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Hôm nay",
                DAYS_AGO_2: "2 ngày trước",
                DAYS_AGO_3: "3 ngày trước",
                DAYS_AGO_4: "4 ngày trước",
                DAYS_AGO_5: "5 ngày trước",
                DAYS_AGO_6: "6 ngày trước",
                DAYS_AGO_7: "7 ngày trước",
                CHANGE_LANGUAGE: "Ngôn Ngữ: ",
                SERVICE_LANGUAGE: "Ngôn Ngữ Dịch Vụ",
                CONTENTS_LANGUAGE: "Ngôn Ngữ Của Nội Dung",
                READ_LATEST: "ĐỌC PHẦN MỚI NHẤT",
                NEW_CHAPTER_ARRIVES: "",
                EVERY: "mỗi",
                EVERY_DAY: "mỗi ngày",
                NEW_CHAPTER_ARRIVES_ON: "Chương mới sẽ được phát hành vào",
                YOU_MAY_ALSO_LIKE: "BẠN CÓ THỂ CŨNG THÍCH",
                CHAPTERS_NOT_AVAILABLE: "Bạn chỉ có thể sử dụng dịch vụ này để đọc một số chương nhất định trong khu vực hiện tại của bạn.",
                DOWNLOAD_APP: "Hãy tải về ứng dụng và đọc bất cứ lúc nào!",
                COMMENT_APP: "Để có thể để lại bình luận bên dưới",
                INSTALL_APP: "HÃY CÀI ỨNG DỤNG NGAY!",
                ABJ: "ABJ Mark là một nhãn hiệu đã đăng ký (Số đăng ký 10921042)\\nNghĩa là cửa hàng sách điện tử / dịch vụ phân phối sách điện tử này là dịch vụ phân phối được ủy quyền đã nhận được sự cho phép sử dụng nội dung từ chủ sở hữu bản quyền. Để biết thêm thông tin, vui lòng kiểm tra",
                FOLLOW_US: "Theo dõi!",
                VIEW_COMMENTS: "Xem bình luận",
                LANG: "vie",
                SEARCH: "Tìm theo tên truyện hoặc tác giả",
                NO_RESULT: "Xin lỗi, không tìm thấy kết quả. Hãy thử tìm kiếm thứ khác.",
                LATEST_NEWS_FROM: "Tin tức mới nhất từ",
                CHECK_NOW: "KIỂM TRA NGAY",
                SEE_ALL_NEWS: "Xem tất cả tin tức",
                PAGE_RESOLUTION: "Độ phân giải trang",
                HIGH: "Cao",
                MEDIUM: "Thấp",
                LOW: "Trung Bình",
                LOADING: "Đang tải…",
                NO_FAVORITE: "Không có truyện Yêu thích để hiển thị",
                FIND: "Tìm",
                FAVORITE_BUTTON: "NÚT YÊU THÍCH",
                ADD_SERIES: "để thêm bộ truyện yêu thích của bạn vào đây!",
                RIGHTS_RESERVED: "Bảo lưu mọi quyền",
                NOT_FOUND_RESULT: "Xin lỗi, không tìm thấy kết quả."
            },
            de: {
                SERIES: "Series",
                UPDATES: "Updates",
                DAILY: "Daily Updates",
                FEATURED: "Featured",
                MANGALIST: "Manga List",
                FAVORITED: "Favoriten",
                language: "Deutsch",
                New: "UP",
                ALL: "Alles",
                HOTTEST: "Hottest",
                LIKES: "Likes",
                LATEST: "Latest",
                UPDATED: "Updated",
                addFAVORITED: "Add to Favorite",
                doneFAVORITED: "Favorited",
                REMOVE: "Remove",
                UNDO: "Undo",
                REMOVED: "Title removed",
                RECOMMEND: "DAS KÖNNTE DIR AUCH GEFALLEN",
                UPDATE_SCHEDULE: "ZEITPLAN AKTUALISIEREN",
                LANGUAGES_AVAILABLE: "Available Languages",
                OVERVIEW: "Summary",
                CHAPTER_LIST: "Chapter List",
                SHARE: "Teilen",
                TWEET: "Post",
                ABOUT_US: "Über uns",
                ABOUT_US_LINK: "https://mangaplus.shueisha.co.jp/www/custom_page?page_id=1330",
                NEWS_AND_EVENTS: "Neuigkeiten und Events",
                HELP_FAQS: "Hilfe",
                FEEDBACK: "Suggestions",
                TERMS_OF_SERVICES: "Nutzungsbedingungen",
                SERVICE_ANNOUNCEMENT: "Dienstleistungsankündigungen",
                PRIVACY_POLICY: "Datenschutzrichtlinie",
                COPYRIGHTS: "Urheberrechte",
                COMMUNITY_GUIDELINE: "Community-Richtlinien",
                GUIDELINE_LINK: "https://mangaplus.shueisha.co.jp/guidelines_web/deu/",
                VIEW_ALL: "View All",
                VIEW_UPDATES: "All Updates",
                READING_DIRECTION: "Leserichtung",
                COMMENTS: "Kommentare",
                NOTIFICATION: "Get Release Notifications!",
                TO_CHAPTER: "ZU KAPITEL",
                LATER_VOLUME_AHEAD: "Later volumes ahead! Be aware of spoilers.",
                FEEDBACK_TYPE: "Type of Feedback",
                FEEDBACK_SEND: "Send Feedback",
                FEEDBACK_SUGGESTION: "Suggestion",
                FEEDBACK_REPORT: "Report",
                FEEDBACK_SENT: "Your feedback was successfully sent.",
                CONTENT_RATINGS: "Altersfreigabe",
                ABOUT_RATING: "Über die Alterseinstufungen",
                ABOUT_RATING_DESCRIPTION: "Wir bei Shueisha haben die folgenden Alterseinstufungen auf Grundlage interner Bewertungen entwickelt, um Eltern, Pädagogen, Händlern und Verbrauchern dabei zu helfen, bei der Auswahl von Manga fundierte Entscheidungen zu treffen. Dies ist der Grund, weshalb es Unterschiede zu den Einstufungen in den App-Stores der einzelnen Betriebssysteme gibt. Bitte verwenden Sie die Alterseinstufungen als Referenz bei der Auswahl geeigneter Titel.",
                ALL_AGES: "ALL AGES",
                ALL_AGES_DESCRIPTION: "Für Leser und Verbraucher aller Altersgruppen geeignet. Enthält leichte Sprache und Fantasiegewalt, aber keine Nacktheit oder Kraftausdrücke.",
                TEEN: "TEEN",
                TEEN_DESCRIPTION: "Geeignet für Jugendliche ab 15 Jahren. Kann Gewalt, gelegentliche Verwendung von Kraftausdrücken, anzügliche Themen und Situationen sowie derben Humor, Alkohol- und Tabakkonsum beinhalten.",
                TEEN_PLUS: "TEEN PLUS",
                TEEN_PLUS_DESCRIPTION: "Geeignet für junge Erwachsene ab 18 Jahren. Kann schwere oder grobe Gewalt, sexuelle Inhalte, häufige Verwendung von Kraftausdrücken, sowie Alkohol-, Tabak- oder anderen Drogenkonsum beinhalten.",
                RATINGS_ATTENTION: "Bitte beachten: Wir haben uns zwar bemüht, diese Einstufungsrichtlinien klar und konsistent anzuwenden, sie beruhen jedoch ausschließlich auf unserer internen subjektiven Einschätzung und stellen daher nur eine allgemeine Orientierung dar. Eine einheitliche Anwendung kann nicht garantiert werden und sie sind nicht gleichbedeutend mit einer gesetzlichen Norm. Bitte ziehen Sie bei der Interpretation der Einstufungssymbole die oben genannten Leitlinien zu Rate.",
                GDPR: "We use cookies to analyze traffic and improve experience. Just wanted to let you know! Learn more about cookies and similar technologies",
                GDPR_HERE: "here",
                GDPR_OKAY: "Okay,",
                GDPR_GOTIT: "got it!",
                GDPR_LINK: "https://mangaplus.shueisha.co.jp/privacypolicy/eng/",
                DISCORD_LINK: "https://discord.gg/qAkpHxH",
                TWITTER_LINK: "https://x.com/mangaplus_o",
                FACEBOOK_LINK: "https://www.facebook.com/mangaplus.en/",
                NEW: "Today",
                DAYS_AGO_2: "2 days ago",
                DAYS_AGO_3: "3 days ago",
                DAYS_AGO_4: "4 days ago",
                DAYS_AGO_5: "5 days ago",
                DAYS_AGO_6: "6 days ago",
                DAYS_AGO_7: "7 days ago",
                CHANGE_LANGUAGE: "LANGUAGE: ",
                SERVICE_LANGUAGE: "Dienstleistungssprache",
                CONTENTS_LANGUAGE: "Inhaltssprache",
                READ_LATEST: "READ LATEST",
                NEW_CHAPTER_ARRIVES: "New chapter arrives",
                EVERY: "every",
                EVERY_DAY: "every day",
                NEW_CHAPTER_ARRIVES_ON: "New chapter arrives on",
                YOU_MAY_ALSO_LIKE: "DAS KÖNNTE DIR AUCH GEFALLEN",
                CHAPTERS_SUB_AVAILABLE: "Abonniere MANGA Plus MAX für uneingeschränkten Lesespaß!",
                CHAPTERS_NOT_AVAILABLE: "In deiner derzeitigen Region können nur bestimmte Kapitel mit diesem Service gelesen werden.",
                CHAPTERS_APP_AVAILABLE: "Read all chapters",
                CHAPTERS_APP_FREE: "for free",
                CHAPTERS_APP: "on the app!",
                DOWNLOAD_APP: "Download the app and read it anytime!",
                COMMENT_APP: "To leave a comment behind",
                INSTALL_APP: "Install the app now!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042)\nIndicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder.\nFor more information check ",
                FOLLOW_US: "Follow Us!",
                VIEW_COMMENTS: "View posted comments",
                LIKE: "Like",
                LANG: "deu",
                SEARCH: "Nach Titel oder Autor suchen",
                NO_RESULT: "Sorry, no results were found.\nTry searching for something else.",
                LATEST_NEWS_FROM: "Latest news from",
                CHECK_NOW: "JETZT ANSEHEN",
                SEE_ALL_NEWS: "Alle Neuigkeiten ansehen",
                PAGE_RESOLUTION: "Page resolution",
                HIGH: "Hoch",
                MEDIUM: "Mittel",
                LOW: "Niedrig",
                LOADING: "Loading...",
                NO_FAVORITE: "No favorites to show",
                FIND: "Find the",
                FAVORITE_BUTTON: "Favorite Button",
                ADD_SERIES: "to add your favorite series here!",
                RIGHTS_RESERVED: "All rights reserved",
                NOT_FOUND_RESULT: "Leider konnten die Ergebnisse nicht gefunden werden."
            }
        }
          , lo = a("842b")
          , co = a.n(lo)
          , uo = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", [e("img", {
                    attrs: {
                        src: a("404d"),
                        alt: "logo"
                    },
                    class: "".concat(co.a.logo, " ").concat(t.data.attrs.class)
                })])
            }
        })
          , po = (a("18a5"),
        a("ad6e"))
          , ho = a.n(po)
          , go = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e(mo, {
                        attrs: Object(ua["a"])({}, this.$attrs)
                    })
                }
            }]),
            a
        }(u["c"]);
        go = Object(c["b"])([P["b"]], go);
        var mo = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this.$attrs.to.includes("https://") || this.$attrs.to.includes("copyright") || this.$attrs.to.includes("faq") || this.$attrs.to.includes("privacypolicy") || this.$attrs.to.includes("terms") || this.$attrs.to.includes("rating")
                      , a = t ? 0 === this.$attrs.to.indexOf("https://") ? this.$attrs.to : "https://mangaplus.shueisha.co.jp".concat(this.$attrs.to, "/").concat(this.$t("LANG"), "/") : this.$attrs.to;
                    return t ? e("a", {
                        attrs: {
                            href: a
                        },
                        class: ho.a.anchor
                    }, [e("p", [this.$t(this.$attrs.name)])]) : e(_t, {
                        attrs: {
                            to: a
                        },
                        class: ho.a.anchor
                    }, [e("p", [this.$t(this.$attrs.name)])])
                }
            }]),
            a
        }(u["c"]);
        mo = Object(c["b"])([P["b"]], mo);
        var bo = function(e, t) {
            return u["c"].extend({
                functional: !0,
                render: function(a, n) {
                    return a(go, bt()([{
                        class: n.data.class,
                        attrs: {
                            to: e,
                            name: t
                        }
                    }, {
                        style: n.data.style
                    }]))
                }
            })
        }
          , fo = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this.$t("ABOUT_US_LINK");
                    return e("a", {
                        attrs: {
                            href: t
                        },
                        class: ho.a.anchor
                    }, [e("p", [this.$t("ABOUT_US")])])
                }
            }]),
            a
        }(u["c"]);
        fo = Object(c["b"])([P["b"]], fo);
        var vo = bo("/updates", "UPDATES")
          , yo = bo("/featured", "FEATURED")
          , _o = bo("/ranking", "RANKING")
          , wo = bo("/manga_list", "MANGALIST")
          , To = bo("https://medibang.com/mpc/", "CREATORS")
          , ko = bo("/favorited", "FAVORITED")
          , Oo = bo("/faq", "HELP_FAQS")
          , Ao = bo("/announcement", "NEWS_AND_EVENTS")
          , Eo = bo("/rating", "CONTENT_RATINGS")
          , So = (bo("/search_result", "SEARCH_RESULT"),
        bo("/terms", "TERMS_OF_SERVICES"))
          , Lo = bo("/privacypolicy", "PRIVACY_POLICY")
          , Co = bo("/copyright", "COPYRIGHTS")
          , Po = a("c72d")
          , Io = a.n(Po)
          , No = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: Io.a.navigation
                    }, [e(vo, {
                        class: Io.a.navigationItem
                    }), e(yo, {
                        class: Io.a.navigationItem
                    }), e(_o, {
                        class: Io.a.navigationItem
                    }), e(wo, {
                        class: Io.a.navigationItem
                    }), e(To, {
                        class: Io.a.navigationItem
                    }), e(ko, {
                        class: Io.a.navigationItem
                    }), e(fo, {
                        class: Io.a.navigationItem
                    })])
                }
            }]),
            a
        }(u["c"]);
        No = Object(c["b"])([P["b"]], No);
        var jo = No
          , Do = a("01aa")
          , Vo = a.n(Do)
          , Ro = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.inputText = "",
                e
            }
            return Object(o["a"])(n, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("form", {
                        class: Vo.a.searchContainer,
                        on: {
                            submit: function(e) {
                                e.stopPropagation(),
                                e.preventDefault(),
                                t.$router.push("/search_result?keyword=".concat(t.inputText))
                            }
                        }
                    }, [e("router-link", {
                        class: Vo.a.iconWhiteContainer,
                        attrs: {
                            to: {
                                path: "/search_result",
                                query: {
                                    keyword: this.inputText
                                }
                            }
                        }
                    }, [e("img", {
                        class: Vo.a.iconWhite,
                        attrs: {
                            src: a("6e75")
                        }
                    })]), e("div", {
                        class: Vo.a.input
                    }, [e("router-link", {
                        class: Vo.a.iconGrey,
                        attrs: {
                            to: {
                                path: "/search_result",
                                query: {
                                    keyword: this.inputText
                                }
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: a("6e75"),
                            type: "button"
                        },
                        class: Vo.a.iconGrey
                    })]), e("input", {
                        attrs: {
                            spellcheck: !1,
                            type: "text",
                            placeholder: this.$t("SEARCH")
                        },
                        class: Vo.a.searchForm,
                        on: {
                            input: function(e) {
                                var a = e.target;
                                a.value && (t.inputText = a.value)
                            }
                        }
                    })])])
                }
            }]),
            n
        }(u["c"]);
        Ro = Object(c["b"])([P["b"]], Ro);
        var Uo = Ro
          , Mo = a("4a6a")
          , Ho = a.n(Mo)
          , xo = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t;
                    switch (this.element) {
                    case "p":
                        t = e("p", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h1":
                        t = e("h1", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h2":
                        t = e("h2", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h3":
                        t = e("h3", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h4":
                        t = e("h4", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h5":
                        t = e("h5", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break;
                    case "h6":
                        t = e("h6", {
                            class: Ho.a[this.s]
                        }, [this.$slots.default]);
                        break
                    }
                    return t
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])({
            default: "m"
        })], xo.prototype, "s", void 0),
        Object(c["b"])([Object(u["b"])({
            default: "p"
        })], xo.prototype, "element", void 0),
        xo = Object(c["b"])([P["b"]], xo);
        var Bo = xo
          , Go = a("1fc0")
          , Fo = a.n(Go)
          , Wo = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: Fo.a.languageSettingBtn,
                        on: {
                            click: function() {
                                t.$emit("click")
                            }
                        }
                    }, [e(Bo, {
                        attrs: Object(ua["a"])({}, {
                            _size: "s",
                            class: Fo.a.text
                        })
                    }, [this.$t("CHANGE_LANGUAGE"), e("span", [e("b", [this.$t("language")])])]), e("span", {
                        class: Fo.a.triangle
                    })])
                }
            }]),
            a
        }(ot);
        Wo = Object(c["b"])([P["b"]], Wo);
        var Yo = Wo
          , $o = a("3df2")
          , Ko = a.n($o)
          , qo = a("753f")
          , zo = a.n(qo)
          , Qo = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.toggled = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: this.toggled ? [zo.a.burger, zo.a.clicked] : zo.a.burger,
                        on: {
                            click: function() {
                                t.$emit("click"),
                                t.toggled = !t.toggled
                            }
                        }
                    }, [e("span"), e("span"), e("span")])
                }
            }]),
            a
        }(u["c"]);
        Qo = Object(c["b"])([P["b"]], Qo);
        var Zo = Qo
          , Jo = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("header", [e("div", {
                    class: Ko.a.header
                }, [e("div", {
                    class: Ko.a.hamburger
                }, [e(Zo, {
                    on: {
                        click: t.data.on.toggleShowingMenuSP
                    }
                })]), e(_t, {
                    attrs: Object(ua["a"])({}, {
                        to: "/updates"
                    })
                }, [e(uo, {
                    attrs: Object(ua["a"])({}, {
                        class: Ko.a.logo
                    })
                })]), e(jo, {
                    class: Ko.a.navigation
                }), function() {
                    return "/search_result" !== t.data.attrs.path ? e(Uo, {
                        class: Ko.a.searchForm
                    }) : e(Uo, {
                        class: Ko.a.invisibleSearchForm
                    })
                }(), e("div", {
                    class: Ko.a.settingBtn,
                    style: {
                        display: t.data.attrs.hideLanguageSettings ? "none" : ""
                    }
                }, [e(Yo, {
                    on: {
                        click: t.data.on.toggleShowingSettings
                    },
                    attrs: {
                        hidden: t.data.attrs.hideLanguageSettings
                    }
                })])])])
            }
        })
          , Xo = a("c544")
          , es = a.n(Xo)
          , ts = a("63e4")
          , as = a.n(ts)
          , ns = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("input", {
                        attrs: {
                            type: "radio",
                            name: this.$attrs.name,
                            id: this.$attrs.domId,
                            disabled: !1
                        },
                        class: as.a.input,
                        domProps: {
                            checked: this.$attrs.checked
                        },
                        on: {
                            change: function(e) {
                                console.log("onchange"),
                                t.$emit("change", e)
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: this.$attrs.domId
                        },
                        class: as.a.radio
                    })])
                }
            }]),
            a
        }(u["c"]);
        ns = Object(c["b"])([P["b"]], ns);
        var is = ns
          , rs = a("a7ed")
          , os = a.n(rs)
          , ss = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", {
                        class: os.a.wrapper
                    }, [e("input", {
                        attrs: {
                            type: "checkbox",
                            disabled: this.$attrs.disabled,
                            name: this.$attrs.name,
                            id: this.$attrs.domId
                        },
                        class: os.a.input,
                        domProps: {
                            checked: this.$attrs.checked
                        },
                        on: {
                            change: function(e) {
                                t.$emit("change", e.target)
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: this.$attrs.domId
                        },
                        class: os.a.checkbox
                    })])
                }
            }]),
            a
        }(u["c"]);
        ss = Object(c["b"])([P["b"]], ss);
        var ls = ss
          , cs = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    this.$slots.input[0];
                    return e("div", {
                        class: es.a.wrapper
                    }, [e("label", {
                        attrs: {
                            for: "".concat(this.$attrs.name, "-").concat(this.$attrs.domId)
                        },
                        class: "".concat(es.a.label, " ").concat(this.$attrs.disabled ? es.a.disabled : "")
                    }, [e("txt", {
                        attrs: {
                            s: "l"
                        }
                    }, [this.$slots.label])]), function() {
                        var e = Object.assign({}, t.$slots.input[0])
                          , a = Object.assign({}, t.$attrs);
                        return e.data.attrs = a,
                        e.data.attrs.domId = "".concat(t.$attrs.name, "-").concat(t.$attrs.domId),
                        e.data.on = {
                            change: function(e) {
                                t.$emit("change", e)
                            }
                        },
                        e
                    }()])
                }
            }]),
            a
        }(u["c"]);
        cs = Object(c["b"])([Object(P["b"])({
            components: {
                txt: Bo
            }
        })], cs);
        var us = u["c"].extend({
            functional: !0,
            name: "service-language-item",
            render: function(e, t) {
                return e(cs, {
                    attrs: {
                        name: t.data.attrs.name,
                        domId: t.data.attrs.id,
                        checked: t.data.attrs.checked,
                        disabled: t.data.attrs.disabled
                    },
                    on: {
                        change: t.data.on.change
                    },
                    class: t.data.class
                }, [e("template", {
                    slot: "input"
                }, [e(is, {
                    attrs: {
                        disabled: t.data.attrs.disabled
                    }
                })]), e("template", {
                    slot: "label"
                }, [t.slots().default])])
            }
        })
          , ds = u["c"].extend({
            functional: !0,
            name: "contents-language-item",
            render: function(e, t) {
                return e(cs, {
                    attrs: {
                        name: "contents",
                        domId: t.data.attrs.id,
                        checked: t.data.attrs.checked,
                        disabled: t.data.attrs.disabled
                    },
                    on: {
                        change: t.data.on.change
                    }
                }, [e("template", {
                    slot: "input"
                }, [e(ls)]), e("template", {
                    slot: "label",
                    class: t.data.attrs.disabled ? es.a.disabled : ""
                }, [t.slots().default])])
            }
        })
          , ps = a("8ce6")
          , hs = a.n(ps)
          , gs = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: hs.a.itemArea
                }, [e(Bo, {
                    attrs: Object(ua["a"])({}, {
                        element: "h3",
                        _size: "l",
                        class: hs.a.text
                    })
                }, [t.slots().default[0].children]), e("div", {
                    class: hs.a.items
                }, [function() {
                    return t.slots().default[1].children.map((function(e) {
                        return e.data.class = hs.a.item,
                        e
                    }
                    ))
                }()])])
            }
        })
          , ms = u["c"].extend({
            functional: !0,
            name: "service-language",
            render: function(e, t) {
                var a = t.data.attrs.langState
                  , n = Math.random().toString(30).slice(-8);
                return e(gs, [e("template", {
                    slot: "title"
                }, [t.data.attrs.headerName]), e("template", {
                    slot: "items"
                }, [a.availableLanguages.map((function(i) {
                    return e(us, {
                        attrs: {
                            name: n,
                            id: q(i.language),
                            checked: a.serviceLang === i.language
                        },
                        on: {
                            change: t.data.on.change
                        }
                    }, [K(i.language), "  "])
                }
                ))])])
            }
        })
          , bs = u["c"].extend({
            functional: !0,
            name: "contents-language",
            render: function(e, t) {
                var a = t.data.attrs.langState;
                return e(gs, [e("template", {
                    slot: "title"
                }, [t.data.attrs.contentsLanguageHeader]), e("template", {
                    slot: "items"
                }, [a.availableLanguages.map((function(n) {
                    return e(ds, {
                        attrs: {
                            id: q(n.language),
                            checked: a.contentLangs.includes(n.language),
                            disabled: a.serviceLang === n.language
                        },
                        on: {
                            change: t.data.on.change
                        }
                    }, [e("span", [n.titlesCount, " ", t.parent.$t("SERIES")])])
                }
                ))])])
            }
        })
          , fs = a("8514")
          , vs = a.n(fs)
          , ys = a("3e97")
          , _s = a.n(ys)
          , ws = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: "".concat(_s.a.divider, " ").concat(t.data.class),
                    style: t.data.style
                })
            }
        })
          , Ts = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: "".concat(vs.a.container, " ").concat(t.data.class),
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [e(ws, {
                    class: vs.a.divider
                }), e("div", {
                    class: vs.a.languageWrap
                }, [e(ms, {
                    attrs: {
                        langState: t.data.attrs.langState,
                        headerName: t.data.attrs.headerName
                    },
                    on: {
                        change: t.data.on.serviceLanguageChange
                    }
                }), e(bs, {
                    attrs: {
                        langState: t.data.attrs.langState,
                        contentsLanguageHeader: t.data.attrs.contentsLanguageHeader
                    },
                    on: {
                        change: t.data.on.contentsLanguageChange
                    }
                })])])
            }
        })
          , ks = a("8c4f")
          , Os = a.n(ks)
          , As = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: "".concat(Os.a.wrapper, " ").concat(t.data.class)
                }, [e("div", {
                    class: Os.a.settingBtn,
                    style: {
                        display: t.data.attrs.hideLanguageSettings ? "none" : ""
                    }
                }, [e(Yo, {
                    on: {
                        click: t.data.on.toggleShowingSettings
                    },
                    attrs: {
                        hidden: t.data.attrs.hideLanguageSettings
                    }
                })]), e("div", {
                    class: "".concat(Os.a.menuHeader)
                }, [e(vo, {
                    class: "".concat(Os.a.item, " ").concat(Os.a.main)
                }), e(yo, {
                    class: "".concat(Os.a.item, " ").concat(Os.a.main)
                }), e(_o, {
                    class: "".concat(Os.a.item, " ").concat(Os.a.main)
                }), e(wo, {
                    class: "".concat(Os.a.item, " ").concat(Os.a.main)
                }), e(To, {
                    class: "".concat(Os.a.item, " ").concat(Os.a.main)
                }), e(ko, {
                    class: "".concat(Os.a.main, " ").concat(Os.a.item)
                }), e(fo, {
                    class: "".concat(Os.a.main, " ").concat(Os.a.item)
                })]), e("div", {
                    class: "".concat(Os.a.menuFooter)
                }, [e(Oo, {
                    class: Os.a.item
                }), e(Ao, {
                    class: Os.a.item
                }), e(Eo, {
                    class: Os.a.item
                }), e(Lo, {
                    class: Os.a.item
                }), e(So, {
                    class: Os.a.item
                }), e(Co, {
                    class: Os.a.item
                })])])
            }
        })
          , Es = a("4f3c")
          , Ss = a.n(Es)
          , Ls = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", [e(Jo, {
                    attrs: {
                        path: t.data.attrs.path,
                        isShowingSettings: t.data.attrs.isShowingSettings,
                        isShowingMenuSP: t.data.attrs.isShowingMenuSP,
                        hideLanguageSettings: t.data.attrs.hideLanguageSettings
                    },
                    on: {
                        toggleShowingSettings: t.data.on.toggleShowingSettings,
                        toggleShowingMenuSP: t.data.on.toggleShowingMenuSP
                    }
                }), function() {
                    if (t.data.attrs.isShowingSettings)
                        return e(Ts, {
                            class: Ss.a.setting,
                            attrs: {
                                langState: t.data.attrs.langState,
                                contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                                headerName: t.data.attrs.userSettingsHeaderName
                            },
                            on: {
                                serviceLanguageChange: t.data.on.serviceLanguageChange,
                                contentsLanguageChange: t.data.on.contentsLanguageChange
                            }
                        })
                }(), e("div", {
                    class: Ss.a.menuSP,
                    directives: [{
                        name: "show",
                        value: t.data.attrs.isShowingMenuSP
                    }]
                }, [e(As, {
                    on: {
                        toggleShowingSettings: t.data.on.toggleShowingSettings
                    },
                    attrs: {
                        hideLanguageSettings: t.data.attrs.hideLanguageSettings
                    },
                    class: Ss.a.menu
                })])])
            }
        })
          , Cs = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isShowingMenuSP = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.$router.beforeEach((function(t, a, n) {
                        e.$store.commit("hideSettingModal"),
                        n()
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e(Ls, {
                        attrs: {
                            path: this.$route.path,
                            isShowingSettings: this.$store.state.language.isShowSetting,
                            isShowingMenuSP: this.isShowingMenuSP,
                            hideLanguageSettings: this.$route.path.indexOf("titles") > 0 || this.$route.path.indexOf("comments") > 0,
                            userSettingsHeaderName: this.$t("SERVICE_LANGUAGE"),
                            contentsLanguageHeader: this.$t("CONTENTS_LANGUAGE"),
                            seriesName: this.$t("SERIES"),
                            langState: this.$store.state.language
                        },
                        on: {
                            toggleShowingSettings: function(e) {
                                t.$store.state.language.isShowSetting && location.reload(),
                                t.$store.commit("toggleSettingModal")
                            },
                            toggleShowingMenuSP: function(e) {
                                t.isShowingMenuSP = !t.isShowingMenuSP,
                                t.$store.state.language.isShowSetting && !t.isShowingMenuSP && t.$store.commit("toggleSettingModal")
                            },
                            serviceLanguageChange: function(e) {
                                var a = e.target.id.slice(-2);
                                t.$i18n.locale = a,
                                t.$store.dispatch("updateServiceLanguage", a),
                                location.reload()
                            },
                            contentsLanguageChange: function(e) {
                                var a = e.target.id.slice(-2);
                                t.$store.commit("setContentsStatus", a)
                            }
                        }
                    })
                }
            }]),
            a
        }(ot);
        Cs = Object(c["b"])([P["b"]], Cs);
        var Ps = Cs
          , Is = a("b5b6")
          , Ns = a.n(Is)
          , js = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: "".concat(Ns.a.container, " ").concat(t.data.class),
                    style: t.data.style
                }, [e("img", {
                    attrs: {
                        src: a("5185"),
                        alt: "app_icon",
                        width: "80",
                        height: "80"
                    },
                    class: Ns.a.appIcon
                }), e("div", {
                    class: Ns.a.vertical
                }, [e(Bo, {
                    attrs: {
                        s: "m"
                    },
                    class: Ns.a.text
                }, [t.data.attrs.letsDownloadApp]), e("div", {
                    class: Ns.a.horizontal
                }, [e("a", {
                    attrs: {
                        href: "https://itunes.apple.com/app/id1442476536"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("34ae"),
                        alt: "AppStoreIcon",
                        width: "120",
                        height: "40"
                    },
                    class: Ns.a.appStoreIcon
                })]), e("a", {
                    attrs: {
                        href: "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
                    },
                    class: Ns.a.playStore
                }, [e("img", {
                    attrs: {
                        src: a("be22"),
                        alt: "PlayStoreIcon",
                        width: "134",
                        height: "40"
                    },
                    class: Ns.a.playStoreIcon
                })])])])])
            }
        })
          , Ds = a("d630")
          , Vs = a.n(Ds)
          , Rs = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = z(this.$store.state.language.serviceLang);
                    return e("div", {
                        class: Vs.a.container
                    }, [e("div", {
                        class: Vs.a.flexContainer
                    }, [e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: "https://mangaplus.thinkowl.jp/portal/mangaplus/knowledgebase/default"
                        }
                    }, [this.$t("HELP_FAQS")]), e("router-link", {
                        class: Vs.a.item,
                        attrs: {
                            to: "/announcement"
                        }
                    }, [this.$t("NEWS_AND_EVENTS")]), e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: "/privacypolicy/".concat(t, "/")
                        }
                    }, [this.$t("PRIVACY_POLICY")]), e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: "/terms_web/".concat(t, "/")
                        }
                    }, [this.$t("TERMS_OF_SERVICES")]), e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: "/rating/".concat(t, "/")
                        }
                    }, [this.$t("CONTENT_RATINGS")]), e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: "/copyright/eng/"
                        }
                    }, [this.$t("COPYRIGHTS")]), e("a", {
                        class: Vs.a.item,
                        attrs: {
                            href: this.$t("GUIDELINE_LINK").toString()
                        }
                    }, [this.$t("COMMUNITY_GUIDELINE")])])])
                }
            }]),
            a
        }(ot);
        Rs = Object(c["b"])([P["b"]], Rs);
        var Us = Rs
          , Ms = a("720a")
          , Hs = a.n(Ms)
          , xs = a("809d")
          , Bs = a.n(xs)
          , Gs = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                return Object(r["a"])(this, n),
                t.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: "".concat(Bs.a.container)
                    }, [e("a", {
                        attrs: {
                            href: this.$t("DISCORD_LINK").toString()
                        },
                        class: Bs.a.icon
                    }, [e("img", {
                        attrs: {
                            src: a("6fd9"),
                            alt: "",
                            width: "17"
                        }
                    })]), e("a", {
                        attrs: {
                            href: this.$t("TWITTER_LINK").toString()
                        },
                        class: Bs.a.icon
                    }, [e("img", {
                        attrs: {
                            src: a("6e98"),
                            alt: "",
                            width: "14"
                        }
                    })]), e("a", {
                        attrs: {
                            href: this.$t("FACEBOOK_LINK").toString()
                        },
                        class: Bs.a.icon
                    }, [e("img", {
                        attrs: {
                            src: a("1afe"),
                            alt: "",
                            width: "8"
                        }
                    })])])
                }
            }]),
            n
        }(ot);
        Gs = Object(c["b"])([Object(u["a"])({})], Gs);
        var Fs = Gs
          , Ws = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: "".concat(Hs.a.container, " ").concat(t.data.class)
                }, [e(js, {
                    attrs: {
                        letsDownloadApp: t.data.attrs.letsDownloadApp,
                        abjInformation: t.data.attrs.abjInformation
                    },
                    class: Hs.a.appInfo
                }), e("hr", {
                    class: Hs.a.divider
                }), e(Fs, {
                    class: Hs.a.sns,
                    attrs: {
                        language: t.data.attrs.language,
                        followUs: t.data.attrs.followUs
                    }
                }), e(Us, {
                    class: Hs.a.footerNavigation
                }), e("div", {
                    class: Hs.a.abj
                }, [e("img", {
                    attrs: {
                        src: a("5225"),
                        alt: "ABJLogo",
                        width: "60",
                        height: "50"
                    },
                    class: Hs.a.abjLogo
                }), e(Bo, {
                    attrs: {
                        s: "s"
                    },
                    class: Hs.a.abjText
                }, [t.data.attrs.abjInformation, e("a", {
                    attrs: {
                        href: "https://aebs.or.jp/"
                    }
                }, ["https://aebs.or.jp/"]), "."])]), e(Bo, {
                    attrs: {
                        s: "s"
                    },
                    class: Hs.a.copyright
                }, [" ", "©︎2019 Shueisha Inc. ", e("span", [t.parent.$t("RIGHTS_RESERVED")]), "."])])
            }
        })
          , Ys = a("7e1c")
          , $s = a.n(Ys)
          , Ks = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", [e("div", {
                    class: $s.a.container
                }, [e(Ps), e("div", {
                    class: $s.a.mainContainer
                }, [t.children]), e(Ws, {
                    class: $s.a.footer,
                    attrs: {
                        language: t.data.attrs.language,
                        followUs: t.data.attrs.followUs,
                        letsDownloadApp: t.data.attrs.letsDownloadApp,
                        abjInformation: t.data.attrs.abjInformation
                    }
                })])])
            }
        })
          , qs = (a("5a83"),
        a("7090"))
          , zs = a.n(qs)
          , Qs = u["c"].extend({
            functional: !0,
            render: function(e) {
                return e("div", {
                    class: zs.a.container
                }, [e("img", {
                    attrs: {
                        src: a("b3d2"),
                        alt: ""
                    },
                    class: zs.a.img
                })])
            }
        })
          , Zs = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    0 === this.$store.state.language.availableLanguages.length && this.$store.dispatch("fetchLanguageData")
                }
            }, {
                key: "render",
                value: function(e) {
                    return e(Qs)
                }
            }]),
            a
        }(u["c"]);
        Zs = Object(c["b"])([P["b"]], Zs);
        var Js = Zs
          , Xs = a("1c78")
          , el = a.n(Xs)
          , tl = u["c"].extend({
            functional: !0,
            render: function(e) {
                return e("div", {
                    class: el.a.container
                }, [e("img", {
                    attrs: {
                        src: a("77bc"),
                        alt: ""
                    },
                    class: el.a.img
                })])
            }
        })
          , al = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e(tl)
                }
            }]),
            a
        }(u["c"]);
        al = Object(c["b"])([P["b"]], al);
        var nl = al
          , il = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    new Gr.a({
                        daysHidden: 60,
                        daysReminder: 60,
                        title: "MANGA Plus by SHUEISHA",
                        author: "SHUEISHA Inc.",
                        button: "VIEW",
                        store: {
                            ios: "On the App Store",
                            android: "In Google Play"
                        },
                        price: {
                            ios: "FREE",
                            android: "FREE"
                        },
                        appStoreId: "1442476536",
                        playStoreId: "jp.co.shueisha.mangaplus"
                    })
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e("router-view");
                    if (null !== this.$store.state.error.errorAction)
                        switch (this.$store.state.error.errorAction) {
                        case w.ErrorResult.Action.DEFAULT:
                            t = e(Jr);
                            break;
                        case w.ErrorResult.Action.GEOIP_BLOCKING:
                            t = e(nl);
                            break;
                        case w.ErrorResult.Action.MAINTENANCE:
                            t = e(Js);
                            break;
                        default:
                            t = e(Jr);
                            break
                        }
                    return e(Ks, {
                        attrs: {
                            isMain: this.$route.path.indexOf("static") < 0,
                            language: this.$store.state.language.serviceLang,
                            followUs: this.$t("FOLLOW_US"),
                            letsDownloadApp: this.$t("DOWNLOAD_APP"),
                            abjInformation: this.$t("ABJ")
                        }
                    }, [t])
                }
            }]),
            a
        }(ot);
        il = Object(c["b"])([Object(P["b"])({
            metaInfo: function() {
                return {
                    link: [{
                        rel: "apple-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }, {
                        rel: "android-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }],
                    meta: [{
                        name: "apple-itunes-app",
                        content: "app-id=1442476536"
                    }, {
                        name: "google-play-app",
                        content: "app-id=jp.co.shueisha.mangaplus"
                    }]
                }
            }
        })], il);
        var rl = il
          , ol = a("bc8e")
          , sl = a.n(ol)
          , ll = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", [e(ta, ["FAQ"]), e("div", {
                    class: sl.a.wrapper
                }, [t.slots().default.map((function(t) {
                    return e("div", [t])
                }
                ))])])
            }
        })
          , cl = a("eb35")
          , ul = a.n(cl)
          , dl = a("35f6")
          , pl = a.n(dl)
          , hl = a("89c2")
          , gl = a.n(hl)
          , ml = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("input", {
                        attrs: {
                            type: "checkbox",
                            id: this.id
                        },
                        class: gl.a.input,
                        on: {
                            change: function(e) {
                                t.$emit("change")
                            }
                        }
                    }), e("label", {
                        attrs: {
                            for: this.$attrs._id
                        },
                        class: gl.a.arrow
                    })])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], ml.prototype, "color", void 0),
        Object(c["b"])([Object(u["b"])()], ml.prototype, "id", void 0),
        ml = Object(c["b"])([P["b"]], ml);
        var bl = ml
          , fl = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isShowBody = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("label", {
                        attrs: {
                            for: this.id
                        },
                        class: "".concat(pl.a.titleBox, " ").concat(this.isShowBody ? this.titleClassWithShown : this.titleClass)
                    }, [this.$slots.title, e(bl, {
                        attrs: {
                            id: this.id,
                            beforeColor: this.beforeColor,
                            color: this.color ? this.color : ""
                        },
                        on: {
                            change: function() {
                                t.isShowBody = !t.isShowBody,
                                t.$emit("toggle")
                            }
                        },
                        class: pl.a.arrow
                    })]), e("transition", {
                        attrs: {
                            name: "fade",
                            "enter-active-class": pl.a.fadeEnterActive,
                            "leave-active-class": pl.a.fadeLeaveActive
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            value: this.isShowBody
                        }],
                        class: pl.a.body
                    }, [this.$slots.body])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], fl.prototype, "id", void 0),
        Object(c["b"])([Object(u["b"])()], fl.prototype, "titleClass", void 0),
        Object(c["b"])([Object(u["b"])()], fl.prototype, "titleClassWithShown", void 0),
        Object(c["b"])([Object(u["b"])()], fl.prototype, "beforeColor", void 0),
        Object(c["b"])([Object(u["b"])()], fl.prototype, "color", void 0),
        fl = Object(c["b"])([P["b"]], fl);
        var vl = fl
          , yl = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isShowBody = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e(vl, {
                        attrs: {
                            id: "accordion-",
                            titleClass: ul.a.title,
                            titleClassWithShown: ul.a.title
                        },
                        on: {
                            toggle: function() {
                                t.isShowBody = !t.isShowBody
                            }
                        }
                    }, [e("template", {
                        slot: "title"
                    }, [e(Bo, {
                        attrs: {
                            element: "h3",
                            s: "m"
                        },
                        class: "".concat(ul.a.titleText, " ").concat(this.isShowBody ? ul.a.titleChecked : ul.a.titleNoCheck)
                    }, [this.title])]), e("template", {
                        slot: "body"
                    }, [e("div", {
                        class: ul.a.body
                    }, [this.$slots.default])])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], yl.prototype, "title", void 0),
        yl = Object(c["b"])([P["b"]], yl);
        var _l = yl
          , wl = a("35e3")
          , Tl = a.n(wl)
          , kl = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.isShowBody = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e(vl, {
                        on: {
                            toggle: function() {
                                t.isShowBody = !t.isShowBody
                            }
                        },
                        attrs: {
                            titleClass: Tl.a.title,
                            titleClassWithShown: Tl.a.titleWithShown,
                            color: "white"
                        },
                        class: Tl.a.wrapper
                    }, [e("template", {
                        slot: "title"
                    }, [e(Bo, {
                        attrs: {
                            element: "h3",
                            s: "l"
                        },
                        class: "".concat(Tl.a.titleText, " ").concat(this.isShowBody ? Tl.a.titleChecked : Tl.a.titleNoCheck)
                    }, [this.title])]), e("template", {
                        slot: "body"
                    }, [this.$slots.default.map((function(t, a) {
                        return e("div", [e("div", {
                            class: Tl.a.border
                        }), t])
                    }
                    ))])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], kl.prototype, "title", void 0),
        kl = Object(c["b"])([u["a"]], kl);
        var Ol = kl
          , Al = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.lang = "en",
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    this.$route.params.language ? this.lang = this.$route.params.language : this.lang = this.$i18n.locale
                }
            }, {
                key: "render",
                value: function(e) {
                    return e(ll, [e(Ol, {
                        attrs: {
                            title: "title1"
                        }
                    }, [e(_l, {
                        attrs: {
                            title: "item-title"
                        }
                    }, [this.$route.params.language ? this.$route.params.language : this.$i18n.locale])]), e(Ol, {
                        attrs: {
                            title: "title1"
                        }
                    }, [e(_l, {
                        attrs: {
                            title: "item-title"
                        }
                    }, ["body-title1"]), e(_l, {
                        attrs: {
                            title: "item-title"
                        }
                    }, ["body-title2"])]), e(Ol, {
                        attrs: {
                            title: "title3"
                        }
                    }, [e(_l, {
                        attrs: {
                            title: "item-title"
                        }
                    }, ["body-title1"]), e(_l, {
                        attrs: {
                            title: "item-title"
                        }
                    }, ["body-title2"])])])
                }
            }]),
            a
        }(u["c"]);
        Al = Object(c["b"])([P["b"]], Al);
        var El = Al
          , Sl = a("785d")
          , Ll = a.n(Sl)
          , Cl = a("cd08")
          , Pl = a.n(Cl)
          , Il = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    return e(vl, {
                        attrs: {
                            id: "accordion-" + Math.random().toString(30).slice(-8),
                            titleClass: Pl.a.title,
                            titleClassWithShown: Pl.a.title,
                            color: "white"
                        },
                        on: {
                            toggle: function() {
                                t.isShowBody = !t.isShowBody
                            }
                        }
                    }, [e("template", {
                        slot: "title"
                    }, [e("div", {
                        class: Pl.a.contentsWrapper
                    }, [e("div", {
                        class: Pl.a.contents
                    }, [this.title]), e("div", {
                        class: Pl.a.date
                    }, [new Date(1e3 * this.date).toLocaleString(navigator.language, {
                        weekday: "short",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric"
                    })])])]), e("template", {
                        slot: "body"
                    }, [e("div", {
                        class: Pl.a.body,
                        domProps: {
                            innerHTML: this.html
                        }
                    })])])
                }
            }]),
            a
        }(u["c"]);
        Object(c["b"])([Object(u["b"])()], Il.prototype, "title", void 0),
        Object(c["b"])([Object(u["b"])()], Il.prototype, "date", void 0),
        Object(c["b"])([Object(u["b"])()], Il.prototype, "html", void 0),
        Il = Object(c["b"])([P["b"]], Il);
        var Nl = Il
          , jl = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: Ll.a.wrapper
                }, [e(ta, {
                    class: Ll.a.title
                }, [t.data.attrs.titleName]), e("div", {
                    class: Ll.a.container
                }, [function() {
                    return t.data.attrs.list.map((function(t) {
                        return e("div", [e("div", {
                            class: Ll.a.border
                        }), e(Nl, {
                            attrs: {
                                title: t.title,
                                date: t.date,
                                html: t.body
                            }
                        })])
                    }
                    ))
                }()])])
            }
        })
          , Dl = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    0 === this.$store.state.announcements.model.serviceAnnouncements.length && (this.language ? this.$store.dispatch("announcements/fetchWebviewData", this.language) : this.$store.dispatch("announcements/fetchData"))
                }
            }, {
                key: "render",
                value: function(e) {
                    return e(jl, {
                        attrs: {
                            list: this.$store.state.announcements.model.serviceAnnouncements,
                            titleName: this.$t("SERVICE_ANNOUNCEMENT")
                        }
                    })
                }
            }, {
                key: "language",
                get: function() {
                    return this.$route.params.language
                }
            }]),
            a
        }(u["c"]);
        Dl = Object(c["b"])([P["b"]], Dl);
        var Vl = Dl
          , Rl = a("5764")
          , Ul = a.n(Rl)
          , Ml = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", [e("div", {
                    class: Ul.a.label
                }, [t.slots().default[0]]), t.slots().default[1]])
            }
        })
          , Hl = a("2f51")
          , xl = a.n(Hl)
          , Bl = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("textarea", {
                    class: "".concat(xl.a.textarea, " ").concat(t.data.class),
                    attrs: {
                        name: "undefined" === t.data.attrs.name ? "textarea" : t.data.attrs.name,
                        id: "undefined" === t.data.attrs._id ? Math.random().toString(30).slice(-8) : t.data.attrs._id,
                        cols: "undefined" === t.data.attrs.cols ? 30 : t.data.attrs.cols,
                        rows: "undefined" === t.data.attrs.rows ? 10 : t.data.attrs.rows,
                        maxlength: "undefined" === t.data.attrs.maxLength ? 500 : t.data.attrs.maxLength
                    },
                    on: {
                        keyup: t.data.on.change
                    }
                }, [t.slots().default])
            }
        })
          , Gl = a("b9f1")
          , Fl = a.n(Gl)
          , Wl = a("72f4")
          , Yl = a.n(Wl)
          , $l = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("select", {
                    attrs: {
                        name: "select",
                        id: "select"
                    },
                    class: "".concat(Yl.a.form, " ").concat(t.data.class),
                    on: {
                        change: t.data.on.change
                    }
                }, [e("option", {
                    attrs: {
                        value: "suggestion"
                    },
                    domProps: {
                        selected: "suggestion" === t.data.attrs.value
                    }
                }, [t.parent.$t("FEEDBACK_SUGGESTION")]), e("option", {
                    attrs: {
                        value: "report"
                    },
                    domProps: {
                        selected: "report" === t.data.attrs.value
                    }
                }, [t.parent.$t("FEEDBACK_REPORT")])])
            }
        })
          , Kl = u["c"].extend({
            functional: !0,
            render: function(e, t) {
                return e("div", {
                    class: Fl.a.container
                }, [e(ta, [t.parent.$t("FEEDBACK")]), function() {
                    return t.data.attrs.isSubmitted ? e("p", [t.parent.$t("FEEDBACK_SENT")]) : e("div", {
                        class: Fl.a.forms
                    }, [e("div", {
                        class: Fl.a.warningText
                    }, [e("a", ["This page has moved.", e("br"), "This form is no longer available.", e("br"), "Click ", e("a", {
                        attrs: {
                            href: "https://mangaplus.thinkowl.jp/portal/mangaplus/home"
                        }
                    }, [e("font", {
                        attrs: {
                            color: "#990099"
                        }
                    }, ["here"])]), " for the new feedback form."])]), e(Ml, [e("span", {
                        class: Fl.a.formsLable
                    }, [t.parent.$t("FEEDBACK_TYPE")]), e("div", {
                        class: Fl.a.selection
                    }, [e($l, {
                        on: {
                            change: t.data.on.changeType
                        },
                        class: Fl.a.type,
                        attrs: {
                            value: t.data.attrs.type
                        }
                    })])]), e(Bl, {
                        attrs: {
                            cols: 10,
                            rows: 10
                        },
                        class: Fl.a.body,
                        on: {
                            change: t.data.on.changeMessage
                        }
                    }, [t.data.attrs.message]), e("p", {
                        class: "".concat(Fl.a.btn, " ").concat(t.data.attrs.disabled ? Fl.a.disabled : Fl.a.enable),
                        on: {
                            click: function() {
                                return t.data.attrs.disabled ? function() {}
                                : t.data.on.submit
                            }()
                        }
                    }, [t.parent.$t("FEEDBACK_SEND")])])
                }()])
            }
        })
          , ql = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.message = "",
                e.type = "report",
                e.isSubmitted = !1,
                e
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    0 === this.$store.state.language.availableLanguages.length && this.$store.dispatch("fetchLanguageData")
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e(Kl, {
                        attrs: {
                            type: this.type,
                            message: this.message,
                            isSubmitted: this.isSubmitted,
                            disabled: !this.validation
                        },
                        on: {
                            changeType: function(e) {
                                t.type = e.target.value
                            },
                            changeMessage: function(e) {
                                t.message = e.target.value
                            },
                            submit: function(e) {
                                E.instance().feedback(t.type, t.message).then((function(e) {
                                    t.isSubmitted = !0
                                }
                                )).catch((function(e) {
                                    alert("Error! Please wait a moment")
                                }
                                ))
                            }
                        }
                    })
                }
            }, {
                key: "validation",
                get: function() {
                    return !(this.message.length <= 0 || this.messageCount > 5e3)
                }
            }, {
                key: "messageCount",
                get: function() {
                    return this.message.length
                }
            }]),
            a
        }(ot);
        ql = Object(c["b"])([Object(P["b"])({
            components: {
                ContactUsTemplate: Kl
            },
            metaInfo: function() {
                return {
                    meta: [{
                        hid: "robots",
                        name: "robots",
                        content: "noindex"
                    }]
                }
            }
        })], ql);
        var zl = ql
          , Ql = a("2a28")
          , Zl = a.n(Ql)
          , Jl = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.inputText = "",
                e.fetched = !1,
                e
            }
            return Object(o["a"])(n, [{
                key: "created",
                value: function() {
                    var e, t = this;
                    "string" === typeof this.$route.query.keyword && (this.inputText = this.$route.query.keyword),
                    (null === (e = this.$store.state.mangaList.model.AllTitlesGroup) || void 0 === e ? void 0 : e.length) || this.$store.dispatch("mangaList/fetchData").catch((function(e) {
                        at(t.$router, e)
                    }
                    )).then((function() {
                        return t.fetched = !0
                    }
                    ))
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$el.querySelector(".".concat(Zl.a.searchForm)).focus()
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [this.$route.query.keyword && e(wt, {
                        class: Zl.a.breadcrumbList,
                        attrs: {
                            links: [{
                                name: "home",
                                path: "/updates"
                            }, {
                                name: 'search result "'.concat(this.$route.query.keyword, '"'),
                                path: "/search_result?keyword=" + this.$route.query.keyword
                            }]
                        }
                    }), e("div", {
                        class: Zl.a.searchContainer
                    }, [e("input", {
                        attrs: {
                            spellcheck: !1,
                            placeholder: this.$t("SEARCH")
                        },
                        class: Zl.a.searchForm,
                        domProps: {
                            value: this.inputText
                        },
                        on: {
                            input: function(e) {
                                var a = e.target;
                                t.inputText = a.value
                            }
                        }
                    }), e("img", {
                        class: Zl.a.icon,
                        attrs: {
                            src: a("77b0")
                        }
                    })]), e("div", {
                        class: Zl.a.divider
                    }), function() {
                        return 0 !== t.currentTitles.length ? e("div", {
                            class: Zl.a.allTitles
                        }, [t.currentTitles.map((function(t) {
                            return e(Dn, {
                                attrs: {
                                    title: t
                                }
                            })
                        }
                        ))]) : t.fetched ? e("p", {
                            class: Zl.a.nothingMatched
                        }, [t.$t("NO_RESULT")]) : e("p", {
                            class: Zl.a.loading
                        }, [e("span"), e("span"), e("span")])
                    }()])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.$store.state.mangaList.model.AllTitlesGroup.filter((function(t) {
                        for (var a = 0; a < t.titles.length; a++) {
                            var n = t.titles[a];
                            if (e.$store.state.language.contentLangs.includes(n.language))
                                return !0
                        }
                    }
                    )).filter((function(t) {
                        for (var a = 0; a < t.titles.length; a++) {
                            var n = t.titles[a];
                            if (n.name.toLowerCase().includes(e.inputText.toLowerCase()) || n.author.toLowerCase().includes(e.inputText.toLowerCase()))
                                return !0
                        }
                        return !1
                    }
                    ))
                }
            }]),
            n
        }(ot);
        Jl = Object(c["b"])([Object(P["b"])({
            components: {
                AllTitle: Dn
            }
        })], Jl);
        var Xl = Jl
          , ec = a("92b0")
          , tc = a.n(ec)
          , ac = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: tc.a.wrapper
                    }, [e("router-view")])
                }
            }]),
            a
        }(u["c"]);
        ac = Object(c["b"])([P["b"]], ac);
        var nc = ac
          , ic = a("caf9")
          , rc = a("d937")
          , oc = a.n(rc)
          , sc = function(e) {
            Object(s["a"])(n, e);
            var t = Object(l["a"])(n);
            function n() {
                var e;
                return Object(r["a"])(this, n),
                e = t.apply(this, arguments),
                e.lang = "en",
                e
            }
            return Object(o["a"])(n, [{
                key: "created",
                value: function() {
                    this.$route.params.language ? this.lang = this.$route.params.language : this.lang = this.$i18n.locale
                }
            }, {
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: oc.a.wrapper
                    }, [e("img", {
                        attrs: {
                            src: a("01c3"),
                            alt: "about"
                        },
                        class: oc.a.item
                    })])
                }
            }]),
            n
        }(u["c"]);
        sc = Object(c["b"])([P["b"]], sc);
        var lc = sc
          , cc = (a("8a79"),
        a("2ca0"),
        a("1da1"))
          , uc = a("15fd")
          , dc = a("b85c")
          , pc = /^GTM-[0-9A-Z]+$/;
        function hc(e) {
            if ("string" !== typeof e || !pc.test(e)) {
                var t = String(e).toUpperCase().replace(/.*-|[^0-9A-Z]/g, "")
                  , a = 0 === t.length ? "" : " Did you mean 'GTM-".concat(t, "'?");
                throw new Error("'".concat(e, "' is not a valid GTM-ID (").concat(pc, ").").concat(a))
            }
        }
        function gc(e, t) {
            var a, n, i, r, o = document, s = o.createElement("script"), l = function a(n) {
                var i;
                null == (i = t.onReady) || i.call(t, {
                    id: e,
                    script: s
                }),
                s.removeEventListener("load", a)
            };
            if (s.addEventListener("load", l),
            window.dataLayer = window.dataLayer ? window.dataLayer : [],
            null == (r = window.dataLayer) || r.push({
                event: "gtm.js",
                "gtm.start": (new Date).getTime()
            }),
            !e)
                return s;
            s.async = !t.defer,
            s.defer = Boolean(t.defer || t.compatibility),
            t.nonce && (s.nonce = t.nonce);
            var c = new URLSearchParams(Object(ua["a"])({
                id: e
            }, null !== (a = t.queryParams) && void 0 !== a ? a : {}))
              , u = null !== (n = t.source) && void 0 !== n ? n : "https://www.googletagmanager.com/gtm.js";
            s.src = "".concat(u, "?").concat(c);
            var d = null !== (i = t.parentElement) && void 0 !== i ? i : o.body;
            if ("function" !== typeof (null == d ? void 0 : d.appendChild))
                throw new Error("parentElement must be a DOM element");
            return d.appendChild(s),
            s
        }
        function mc() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://www.googletagmanager.com/gtm.js";
            return Array.from(document.getElementsByTagName("script")).some((function(t) {
                return t.src.includes(e)
            }
            ))
        }
        var bc, fc = function() {
            function e(t) {
                if (Object(r["a"])(this, e),
                Object(i["a"])(this, "id", void 0),
                Object(i["a"])(this, "options", void 0),
                Object(i["a"])(this, "scriptElements", []),
                Object(i["a"])(this, "isInBrowserContext", (function() {
                    return "undefined" !== typeof window
                }
                )),
                Array.isArray(t.id)) {
                    var a, n = Object(dc["a"])(t.id);
                    try {
                        for (n.s(); !(a = n.n()).done; ) {
                            var o = a.value;
                            hc("string" === typeof o ? o : o.id)
                        }
                    } catch (s) {
                        n.e(s)
                    } finally {
                        n.f()
                    }
                } else
                    hc(t.id);
                this.id = t.id,
                this.options = Object(ua["a"])({
                    enabled: !0,
                    debug: !1,
                    loadScript: !0,
                    defer: !1,
                    compatibility: !1
                }, t),
                delete this.options.id
            }
            return Object(o["a"])(e, [{
                key: "enabled",
                value: function() {
                    var e;
                    return null === (e = this.options.enabled) || void 0 === e || e
                }
            }, {
                key: "enable",
                value: function() {
                    var e = this
                      , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , a = arguments.length > 1 ? arguments[1] : void 0;
                    if (this.options.enabled = t,
                    this.isInBrowserContext() && t && !mc(a) && this.options.loadScript)
                        if (Array.isArray(this.id))
                            this.id.forEach((function(t) {
                                var a;
                                a = "string" === typeof t ? gc(t, Object(ua["a"])({}, e.options)) : gc(t.id, Object(ua["a"])(Object(ua["a"])({}, e.options), {}, {
                                    queryParams: t.queryParams
                                })),
                                e.scriptElements.push(a)
                            }
                            ));
                        else {
                            var n = gc(this.id, Object(ua["a"])({}, this.options));
                            this.scriptElements.push(n)
                        }
                }
            }, {
                key: "debugEnabled",
                value: function() {
                    var e;
                    return null !== (e = this.options.debug) && void 0 !== e && e
                }
            }, {
                key: "debug",
                value: function(e) {
                    this.options.debug = e
                }
            }, {
                key: "dataLayer",
                value: function() {
                    var e;
                    return !(!this.isInBrowserContext() || !this.options.enabled) && (window.dataLayer = null !== (e = window.dataLayer) && void 0 !== e ? e : [])
                }
            }, {
                key: "trackView",
                value: function(e, t) {
                    var a, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.isInBrowserContext() && null !== (a = this.options.enabled) && void 0 !== a && a;
                    if (this.options.debug && console.log("[GTM-Support".concat(i ? "" : "(disabled)", "]: Dispatching TrackView"), {
                        screenName: e,
                        path: t
                    }),
                    i) {
                        var r, o, s = window.dataLayer = null !== (r = window.dataLayer) && void 0 !== r ? r : [];
                        s.push(Object(ua["a"])(Object(ua["a"])({}, n), {}, {
                            event: null !== (o = this.options.trackViewEventProperty) && void 0 !== o ? o : "content-view",
                            "content-name": t,
                            "content-view-name": e
                        }))
                    }
                }
            }, {
                key: "trackEvent",
                value: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.event, n = t.category, i = void 0 === n ? null : n, r = t.action, o = void 0 === r ? null : r, s = t.label, l = void 0 === s ? null : s, c = t.value, u = void 0 === c ? null : c, d = t.noninteraction, p = void 0 !== d && d, h = Object(uc["a"])(t, ["event", "category", "action", "label", "value", "noninteraction"]), g = this.isInBrowserContext() && null !== (e = this.options.enabled) && void 0 !== e && e;
                    if (this.options.debug && console.log("[GTM-Support".concat(g ? "" : "(disabled)", "]: Dispatching event"), Object(ua["a"])({
                        event: a,
                        category: i,
                        action: o,
                        label: l,
                        value: u
                    }, h)),
                    g) {
                        var m, b = window.dataLayer = null !== (m = window.dataLayer) && void 0 !== m ? m : [];
                        b.push(Object(ua["a"])({
                            event: null !== a && void 0 !== a ? a : "interaction",
                            target: i,
                            action: o,
                            "target-properties": l,
                            value: u,
                            "interaction-type": p
                        }, h))
                    }
                }
            }]),
            e
        }();
        function vc(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                id: ""
            };
            t = Object(ua["a"])({
                trackOnNextTick: !1
            }, t),
            bc = new fc(t),
            e.prototype.$gtm = e.gtm = bc,
            bc.isInBrowserContext() && (t.vueRouter && yc(e, t.vueRouter, t.ignoredViews, t.trackOnNextTick),
            bc.options.enabled && bc.options.loadScript && (Array.isArray(t.id) ? t.id.forEach((function(e) {
                if ("string" === typeof e)
                    gc(e, t);
                else {
                    var a = Object(ua["a"])({}, t);
                    null != e.queryParams && (a.queryParams = Object(ua["a"])(Object(ua["a"])({}, a.queryParams), e.queryParams)),
                    gc(e.id, a)
                }
            }
            )) : gc(t.id, t)))
        }
        function yc(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
              , n = arguments.length > 3 ? arguments[3] : void 0
              , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                return {}
            }
            ;
            t ? t.afterEach(function() {
                var r = Object(cc["a"])(regeneratorRuntime.mark((function r(o, s) {
                    var l, c, u, d, p;
                    return regeneratorRuntime.wrap((function(r) {
                        while (1)
                            switch (r.prev = r.next) {
                            case 0:
                                if (!("string" !== typeof o.name || Array.isArray(a) && a.includes(o.name) || "function" === typeof a && a(o, s))) {
                                    r.next = 2;
                                    break
                                }
                                return r.abrupt("return");
                            case 2:
                                return c = o.meta && "string" === typeof o.meta.gtm && o.meta.gtm ? o.meta.gtm : o.name,
                                r.t0 = ua["a"],
                                r.t1 = ua["a"],
                                r.t2 = {},
                                r.next = 8,
                                i(o, s);
                            case 8:
                                r.t3 = r.sent,
                                r.t4 = (0,
                                r.t1)(r.t2, r.t3),
                                r.t5 = null == (l = o.meta) ? void 0 : l.gtmAdditionalEventData,
                                u = (0,
                                r.t0)(r.t4, r.t5),
                                d = null === t.options.base || void 0 === t.options.base ? "" : t.options.base,
                                p = d,
                                p.endsWith("/") || (p += "/"),
                                p += o.fullPath.startsWith("/") ? o.fullPath.substring(1) : o.fullPath,
                                n ? e.nextTick((function() {
                                    null == bc || bc.trackView(c, p, u)
                                }
                                )) : null == bc || bc.trackView(c, p, u);
                            case 17:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                )));
                return function(e, t) {
                    return r.apply(this, arguments)
                }
            }()) : console.warn("[VueGtm]: You tried to register 'vueRouter' for vue-gtm, but 'vue-router' was not found.")
        }
        var _c = {
            install: vc
        };
        var wc = a("2332")
          , Tc = a.n(wc)
          , kc = a("5de0")
          , Oc = a.n(kc)
          , Ac = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    var t = this;
                    en()(navigator.language);
                    var a = en()(new Date(1e3 * this.publisherNews.publishedTimeStamp)).format("MMM DD, YYYY ");
                    return e("div", {
                        class: Oc.a.publisherNews
                    }, [e("div", {
                        class: Oc.a.news_main
                    }, [e("p", {
                        class: Oc.a.news_subject
                    }, [this.publisherNews.subject]), e("p", {
                        class: Oc.a.news_date
                    }, [a]), e("p", {
                        class: Oc.a.news_description
                    }, [this.publisherNews.body]), this.publisherNews.action && e("a", {
                        class: Oc.a.news_click_here,
                        on: {
                            click: function(e) {
                                return Ft(t.$router, t.publisherNews.action.url)
                            }
                        }
                    }, ["CLICK HERE"])])])
                }
            }]),
            a
        }(ot);
        Object(c["b"])([Object(u["b"])()], Ac.prototype, "publisherNews", void 0),
        Ac = Object(c["b"])([P["b"]], Ac);
        var Ec = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                var e;
                return Object(r["a"])(this, a),
                e = t.apply(this, arguments),
                e.data = new w.PublisherNews,
                e
            }
            return Object(o["a"])(a, [{
                key: "mounted",
                value: function() {
                    var e = this
                      , t = this.$route.params["id"];
                    E.instance().publisherNewsList(t, z(this.$store.state.language.serviceLang)).then((function(t) {
                        var a = t.data;
                        a.error ? at(e.$router, a.error) : e.data = a.success.publisherNewsListView
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t;
                    return e("div", {
                        class: Tc.a.container
                    }, [this.data.banner ? e("img", {
                        attrs: {
                            src: (null === (t = this.data.banner) || void 0 === t ? void 0 : t.imageUrl) || ""
                        },
                        class: Tc.a.banner
                    }) : e("div", {
                        class: Tc.a.publisherNameContainer
                    }, [e("a", {
                        class: Tc.a.publisherName
                    }, [this.data.publisherName])]), (this.data.newsList || []).map((function(t) {
                        return e("div", [e("hr", {
                            class: Tc.a.horizontalDivider
                        }), e(Ac, {
                            attrs: {
                                publisherNews: t
                            }
                        })])
                    }
                    ))])
                }
            }]),
            a
        }(ot);
        Ec = Object(c["b"])([Object(u["a"])({
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/announcement"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], Ec);
        var Sc = Ec
          , Lc = a("58ca")
          , Cc = a("9483");
        Object(Cc["a"])("".concat("/", "service-worker.js"), {
            ready: function(e) {
                console.log("SW Ready"),
                "granted" === (null === Notification || void 0 === Notification ? void 0 : Notification.permission) && ue(!0).then((function(e) {
                    return console.log("SW registered for FCM")
                }
                ))
            },
            registered: function(e) {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                console.log("New content is available; please refresh.")
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        var Pc = a("ee98")
          , Ic = a.n(Pc)
          , Nc = a("efad")
          , jc = a.n(Nc)
          , Dc = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e("div", {
                        class: jc.a.mainContainer
                    }, [e("h1", {
                        class: jc.a.ttl_main
                    }, [e("a", {
                        class: jc.a.ttl_main_title
                    }, ["MANGA Plus by Shueisha（ブラウザ版）利用規約"])]), e("p", {
                        class: jc.a.ttl_sub
                    }, ["この利用規約は、株式会社集英社が「MANGA Plus by Shueisha」の名称で提供するコンテンツ配信サービス等のサービスをご利用する際の条件を定めるものです。"]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１条：用語の定義", e("br"), e("span", {
                        class: jc.a.txt_main
                    }, ["本規約において、以下の通り用語を定義するものとします。"])]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["(1) 本規約：このMANGA Plus by Shueisha利用規約をいいます。"]), e("li", ["(2) 当社：株式会社集英社をいいます。"]), e("li", ["(3) 本サービス：当社がMANGA Plus by Shueishaの名称で提供するコンテンツ配信サービスその他一切のサービスの総称をいいます。"]), e("li", ["(4) ユーザー：当サイトへアクセスし、本サービスを利用されるすべてのお客様をいい、ユーザーになろうとする者も含まれます。"]), e("li", ["(5) コンテンツ：本サービスで提供される、テキスト、文章、情報、ニュース、ソフトウェア、アプリケーション、映像、音声、マンガを含む画像、などから構成されるものをいいます。ページ以外のサービスへのリンク等も含まれます。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第２条：適用の範囲"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 本規約は、本サービスを利用する際の一切の行為に適用されます。ユーザーは、当サイトおよび本サービスを利用することにより、本規約に同意したものとみなされます。本規約に同意できない場合、利用者は、当サイトおよび本サービスを利用することができません。"]), e("li", ["2. 利用者が未成年者である場合は、親権者など法定代理人の同意を得たうえで当サイトおよび本サービスを利用するものとします。）"]), e("li", ["3.本規約に付帯関連する諸規約がある場合には、当該諸規約は、本規約の一部を構成するものとします（以下「本規約」にはこれらの諸規約も含めるものとします）。"]), e("li", ["4. 本規約と諸規約の定めが異なる場合には、後者の定めが優先して適用されます。"]), e("li", ["5. 本規約の一部が、法令等により違法又は無効とされる場合であっても、本規約のその他の部分は有効に存続するものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第３条：規約の提示および変更"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 本規約は、当サイト上、または当社が適当と合理的に判断するその他の方法により、ユーザーに提示されます。"]), e("li", ["2. 当社は、本規約を変更することがあります。変更は利用者の利益に適合するとき、もしくは利用者との契約の目的に反せずに、変更の必要性、変更後の内容の相当性、その他の事情に照らして合理性があると判断されたときにいたします。この場合には、本規約の変更については利用者の承諾を要せず、当サイトおよび本サービスの利用条件は、変更後の規約によるものとします。"]), e("li", ["3.当社は、前項の変更のうち当社が重要な変更であるものと判断した場合には、あらかじめ合理的な事前周知期間を設け、変更する旨、変更の内容、並びにその効力発生時期を当サイト上に掲載することにより告知をします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第４条：ユーザーによる利用"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーは、無償で当サイトおよび本サービスを利用することができます。ユーザーは、本規約を熟読し、理解し、内容全てに同意したうえで本サービスを利用するものとします。", e("br"), "ユーザーは、本サービスを、年齢や利用環境等の条件に応じて当社の定める範囲内で利用できるものとします。"]), e("li", ["2. ユーザーは、本サービスを、自己の責任において、利用するものとします。また、その責任において、本サービスへのアクセスまたは本サービスの利用に必要なモバイルデバイスその他の機器を取得・維持するものとし、自己の利用環境に応じたセキュリティ対策（コンピュータ・ウィルスの感染、不正アクセスおよび情報漏洩の防止等）を講じるものとします。本サービスの利用に伴う通信料金その他の費用は、ユーザーが負担するものとします。"]), e("li", ["3. 当社は、当サイトの利用にあたり、利用者に生じたいかなる損害に関しても、一切賠償その他の責任を負うものではありません。"]), e("li", ["4. ユーザーは、当サイトの利用に関し第三者からクレームを受けるなど、第三者との間で問題が生じた場合は、当該第三者との間で直接に処理解決するものとし、当社は一切関与しないものとします。"]), e("li", ["5. ユーザーが当サイトの利用により当社または第三者に対して損害を与えた場合（利用者が、本規約上の義務を履行しないことにより第三者または当社が損害を被った場合を含みます）には、当該利用者は自己の責任と負担において賠償し、その他の解決をはかり、当社に一切の負担を負わせないものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第５条：広告および第三者のサービス"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 当社は、当サイト内に当社または第三者の広告を掲載できるものとします。"]), e("li", ["2. ユーザーと当サイト内に掲載される広告の広告主との取引は、両者の責任において行うものとします。当社は、本サービスに掲載されている広告によって発生した損害および掲載された事自体に起因する損害に関しては、一切の責任を負わないものとします。"]), e("li", ["3. 本サービスにおいて、第三者のウェブサイト、第三者のアプリケーション等へのリンクが提示されることがあります。ユーザーが、これらの第三者のウェブサイト、アプリ等を利用する場合、当該第三者の利用規約およびプライバシーポリシーに従い、自らの責任でこれを利用するものとします。これらの第三者のウェブサイト、アプリケーションその他の製品およびサービス、または第三者の作為若しくは不作為については、これを提供する第三者たる事業者が責任を負い、当社は一切の責任を負担しません。"]), e("li", ["4. 第三者のウェブサイトが、当社の承諾の有無を問わず、本サービスへのリンクを提供することがあります。当社は、これら第三者のウェブサイトに関連してユーザーが被った損害について責任を負担しません。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第６条：コンテンツの内容"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーは、コンテンツの内容が紙媒体で発行された当該コンテンツの内容と異なる場合があることを承諾するものとします。"]), e("li", ["2. ユーザーは、コンテンツの内容について、当社の判断によってユーザーの閲覧後に変更（訂正、削除または情報等の追加を含む）される場合があることを承諾するものとします。"]), e("li", ["3. 当社は、コンテンツの安全性、正確性、有用性、第三者の権利の非侵害性等について保証するものではありません。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第７条：禁止事項"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーは、本サイトを利用するにあたり、次の各号に該当する、またはそのおそれのある行為を行わないものとします。これらの行為が確認された場合、当社の判断でユーザーに断ることなく本サイトの一部または全部の利用停止処置その他の対応を行うことができるものとします。", e("ul", [e("li", ["(1) 当サイトおよびコンテンツの公衆送信（送信可能化を含む）、第三者への利用許諾、譲渡、出版、営業のための使用、利用者が自ら個人的に利用する以外の目的の翻訳、複製（スクリーンショットを含む）、頒布、改変で本サイトを利用する行為。"]), e("li", ["(2) 当サイトの著作権者に関する表示等を削除する行為。"]), e("li", ["(3) 当サイトからプログラムの一部を分離させる行為。"]), e("li", ["(4) 当サイトのリバースエンジニアリング、逆コンパイル、逆アセンブル。"]), e("li", ["(5) 当サイトまたはコンテンツへ不正にアクセスし、これらを改竄、消去する行為。"]), e("li", ["(6) 第三者になりすまして当サイトまたは本サービスを利用する行為。"]), e("li", ["(7) 有害なプログラムを含んだ情報を送信し、または第三者が受信可能な状態におく行為。"]), e("li", ["(8) 第三者の設備または当サイト用設備（当社がコンテンツおよび本サービスを提供するために用意する通信設備、電子計算機、その他の機器およびソフトウェアを含みます）に無権限でアクセスし、またはその利用もしくは運営に支障を与える行為。"]), e("li", ["(9) 当社、その他の第三者の権利（著作権、商標権等の法的権利を含む）・利益を侵害する投稿または行為。"]), e("li", ["(10) 当社、その他の第三者を誹謗中傷し、侮辱し、名誉、信用、プライバシーなどを毀損し、または業務を妨害する投稿もしくは行為。"]), e("li", ["(11) 人種・国籍・信条・性別等による差別表現、過度な暴力表現、不快な卑猥表現、犯罪行為を助長する表現、その他反社会的な内容を含む表現の投稿。"]), e("li", ["(12) 営業、宣伝、その他営利を目的とする投稿。"]), e("li", ["(13) 面識のない他者との出会いを目的とする投稿。"]), e("li", ["(14) 本人もしくは他者の名前、住所、電話番号、メールアドレス、その他個人を特定しうる情報の投稿ないし、他者の個人情報収集を目的とする投稿。"]), e("li", ["(15) 一般的な利用者が解読不能な文言・言語・文字列の投稿。"]), e("li", ["(16) 同じ内容を過剰に繰り返しての投稿。"]), e("li", ["(17) 前各号に定めるほか、公序良俗、著作権法その他の法令もしくは刑罰法規に違反、またはその他当社が不適切と判断する投稿または行為。"])])]), e("li", ["2. 前項の(9)～(17)の投稿が確認された場合は当社の判断で利用者に断ることなく当該投稿の削除を行います。また、当該投稿・掲出したユーザー若しくは他のユーザーが当該コメント等を閲覧等できないようにしたりすることができるものとします。"]), e("li", ["3. 当社は、本サービス若しくは当社のその他の権利および資産、または第三者の生命、身体若しくは財産を保護するために必要と判断した場合、ユーザーの投稿内容およびユーザー情報を裁判所や警察等の公的機関に開示または提供できるものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第８条　著作権等"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 当サイト、本サービスおよび本サービスに関連する一切の情報に関する著作権（日本国著作権法２７条および２８条に規定する権利を含み、以下同じです。）その他の知的財産権は、すべて当社または当社にその利用を許諾した権利者に帰属するものであり、利用者は、本規約で定めた利用条件および著作権法で認められた範囲を超えてこれらを利用することはできません。ユーザーは、当サイトおよび本サービスに関する当社または第三者の権利を侵害し、もしくはそのおそれがあるような行為を一切行わないものとします。"]), e("li", ["2. ユーザーの投稿に関する著作権はユーザーに帰属しますが、当社は、ユーザーの投稿について当社がその内容をそのまままたは変更して利用する独占的な許諾を得るものとし、ユーザーは著作者人格権を行使しないものとします。"]), e("li", ["3. ユーザーはコメント等を投稿・掲出するに際し、当社または当社の指定する第三者の使用が可能となるようコメント等の制作者・肖像権者その他の関係者から必要な許諾を得るものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第９条：プライバシーについて"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーのプライバシーに関する取扱いについては、当社の「プライバシーガイドライン」を適用します。"]), e("li", ["2. 当社は、ユーザーが本サービスを利用するにあたり、ユーザー情報（利用者の機器から取得できるお使いの機器の情報のうち、IPアドレス、クッキー技術を用いて生成された識別情報、行動履歴等）を本サービスの内容により、取得する場合があるものとし、ユーザーはあらかじめこれに同意するものとします。"]), e("li", ["3. ユーザーは、本サービスにおいて利用者が作成したデータ（コメント、ニックネーム等）が当社により宣伝・広告に期限の定めなく無償で自由に利用されることがあることを許諾し、これに関し当社に対し異議を唱えたり、その他一切の請求を行わないものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１０条：本サービスの利用環境"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーは、本サービスの利用にあたり、当社が別途指定する端末やOS、ブラウザの環境（以下「指定環境」といいます）で利用するものとします。指定環境以外の環境では本サービスが正常に利用できない場合があります。"]), e("li", ["2. 当社は、指定環境においても本サービスが正常に利用できることを保証するものではありません。"]), e("li", ["3. 当社は、事前の予告なく指定環境を変更する場合があります。指定環境の変更が原因でコンテンツが正常に利用できない場合でも、当社は何らの責任も負いません。端末の機種変更やOSやブラウザのアップデート等による環境変更が原因で本サービスが正常に利用できない場合でも、当社は何らの責任も負いません。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１１条：コンテンツの購入について"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["本サービスにおいては、当社の他のサービスまたは他の事業者のサービスによるコンテンツ購入をご案内しております。購入方法や代金のお支払い方法等その他購入に関する詳細については、当該当社の他のサービスまたは他の事業者のサービス内容をご参照ください。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１２条：サービスの一時中断、停止"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 当社は、システムの保守のため、本サービスの一部または全部を一時停止することがあります。この場合、当社は事前にユーザーに対して告知するものとします。ただし、以下のいずれかの事由が生じた場合には、事前に通知することなく、本サービスの全部または一部を停止・中断させることがあります。", e("ul", [e("li", ["(1) 本サービス用設備等の保守を緊急に行う場合。"]), e("li", ["(2) システムのトラブル、通信回線の中断等、運用上または技術上当社がやむを得ない事象が発生した場合。"]), e("li", ["(3) 火災、停電等により本サービスの提供ができなくなった場合。"]), e("li", ["(4) 地震、洪水、津波等の天災により本サービスの提供が困難な場合。"]), e("li", ["(5) その他、環境上、運用上または技術上、停止・中断が必要と当社が判断した場合。"])])]), e("li", ["2. 当社は、本サービスが継続的に運用されるように努めるものとしますが、それ以上の義務を負うものではありません。従って、当社は、前項各号のいずれか、またはその他の事由により本サービスの遅延または停止等が発生したとしても、これに起因するユーザーまたは第三者が被った被害について一切の責任を負わないものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１３条：利用資格の停止または失効"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 当社は、ユーザーが次の各号のいずれかに該当すると認めたときは、当該利用資格を停止し、本サービスの利用を制限することがあります。", e("ul", [e("li", ["(1) 本規約に違反する行為、またはそのおそれのある行為があったとき"]), e("li", ["(2) 長期間にわたってログインがなく、利用されていないと認められるとき"]), e("li", ["(3) その他、サービス利用を継続することが不適当な事由があるとき"])])]), e("li", ["2. 当社は、前項の事由が解消したと認めるときは、当社の裁量により、一時停止を解除することがあります。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１４条：譲渡の禁止"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["ユーザーは、ユーザーとしての資格、権利、義務の全部または一部を第三者に譲渡し、 あるいは貸与、名義変更、質権の設定その他担保に供するなどの行為はできないものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１５条：第三者との紛争"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーと第三者との間で本サービスに関して紛争が起こった場合、紛争の当事者であるユーザーの責任と負担で当該紛争を解決するものとします。当該紛争によりまたはこれに関連して当社、他のユーザーおよび第三者が損害を被った場合には、当該ユーザーがこれを賠償するものとします。"]), e("li", ["2. ユーザーにより第三者の権利の侵害があったときに、第三者からのクレームや請求に関して当社に賠償金、その他の費用が発生した場合、紛争の当事者である当該ユーザーが、当該賠償金その他の費用（弁護士費用を含みます。）を負担するものとします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１６条：本サービスの終了"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. 当社は、当社の都合により、利用者に事前に通知した後、本サービスの全部または一部の提供を終了することができるものとします。"]), e("li", ["2. 利用者への通知は、当サイト上での掲載およびその他の合理的な方法によって行われるものとします。"]), e("li", ["3. 当社は、万一当該終了によって利用者が何らかの損害を被ったとしても、当社は何ら責任を負わないものします。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１７条：損害賠償"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["1. ユーザーが本規約に違反したことにより当社または第三者に損害が生じた場合、またはユーザーの行為に起因して当社または第三者に損害を与えた場合には、ユーザーが当該損害を賠償するものとします。"]), e("li", ["2. 本規約が日本国消費者契約法（平成12年法律第61号）第2条第3項の消費者契約に該当する場合には、本規約のうち、当社の損害賠償責任を完全に免責する規定は適用されないものとします。この場合において利用者に発生した損害が当社の債務不履行または不法行為に基づくときは、当社は、当該利用者が直接被った損害を上限として損害賠償責任を負うものとします（ユーザーの特別損害、間接損害、逸失利益および弁護士費用並びにこれらに類する損害については一切責任を負わないものとします。）。ただし、当社に重過失がある場合を除きます。"])]), e("p", {
                        class: jc.a.txt_main
                    }, ["第１８条：言語、準拠法および管轄裁判所"]), e("ul", {
                        class: jc.a.txt_first
                    }, [e("li", ["本規約は、日本語で作成され、日本文を正本とします。他のいかなる言語への翻訳も単なる参考にすぎず、日本語版と異なる場合にその部分は当社およびユーザーを拘束するものではありません。", e("br"), "本規約は日本国法を準拠法とし、本規約に起因しまたは関連する一切の紛争については、東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。"])]), e("p", ["改訂履歴", e("br"), "2019年1月21日（制定）", e("br"), "2023年10月4日（現規約）"])])
                }
            }]),
            a
        }(u["c"]);
        Dc = Object(c["b"])([Object(P["b"])({})], Dc);
        var Vc = Dc
          , Rc = a("1881")
          , Uc = a.n(Rc)
          , Mc = 5
          , Hc = 6
          , xc = 40
          , Bc = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.$store.dispatch("ranking/fetchData", "trending").catch((function(t) {
                        at(e.$router, t)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("div", {
                        class: Gt.a.pcLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Mc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Mc, xc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Mc
                            }
                        })
                    }
                    ))])]), e("div", {
                        class: Gt.a.spLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Hc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Hc, xc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Hc
                            }
                        })
                    }
                    ))])])])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.$store.state.ranking.model.rankedTitles.filter((function(t) {
                        return t.titles.filter((function(t) {
                            return e.$store.state.language.contentLangs.includes(t.language)
                        }
                        ))
                    }
                    ))
                }
            }]),
            a
        }(ot);
        Bc = Object(c["b"])([Object(P["b"])({
            components: {
                HotTitle: xt
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/ranking/trending"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], Bc);
        var Gc = Bc
          , Fc = 5
          , Wc = 6
          , Yc = 40
          , $c = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "created",
                value: function() {
                    var e = this;
                    this.$store.dispatch("ranking/fetchData", "completed").catch((function(t) {
                        at(e.$router, t)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return e("div", [e("div", {
                        class: Gt.a.pcLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Fc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Fc, Yc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Fc
                            }
                        })
                    }
                    ))])]), e("div", {
                        class: Gt.a.spLayout
                    }, [e("div", {
                        class: Gt.a.flexContainer
                    }, [this.currentTitles.slice(0, Wc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.bannerField
                    }, [this.$store.state.ranking.model.rankingBanners.map((function(a) {
                        return e("img", {
                            key: a.id,
                            attrs: {
                                dataId: a.id
                            },
                            class: "".concat(Gt.a.contentsBanner, " ").concat(Gt.a.banner),
                            directives: [{
                                name: "lazy",
                                value: a.imageUrl
                            }],
                            on: {
                                click: function() {
                                    t.$gtm.trackEvent({
                                        category: "ranking_banner",
                                        action: "Click",
                                        label: a.id
                                    }),
                                    Ft(t.$router, a.action.url)
                                }
                            }
                        })
                    }
                    ))]), e("div", {
                        class: Gt.a.gridContainer
                    }, [this.currentTitles.slice(Wc, Yc).map((function(t, a) {
                        return e(xt, {
                            attrs: {
                                titleGroup: t,
                                index: a + Wc
                            }
                        })
                    }
                    ))])])])
                }
            }, {
                key: "currentTitles",
                get: function() {
                    var e = this;
                    return this.$store.state.ranking.model.rankedTitles.filter((function(t) {
                        return t.titles.filter((function(t) {
                            return e.$store.state.language.contentLangs.includes(t.language)
                        }
                        ))
                    }
                    ))
                }
            }]),
            a
        }(ot);
        $c = Object(c["b"])([Object(P["b"])({
            components: {
                HotTitle: xt
            },
            metaInfo: function() {
                return {
                    title: "MANGA Plus by SHUEISHA",
                    link: [{
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/ranking/completed"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\n    We publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\n    You can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                    }]
                }
            }
        })], $c);
        var Kc = $c
          , qc = function(e) {
            Object(s["a"])(a, e);
            var t = Object(l["a"])(a);
            function a() {
                return Object(r["a"])(this, a),
                t.apply(this, arguments)
            }
            return Object(o["a"])(a, [{
                key: "render",
                value: function(e) {
                    return e(Ks, {
                        attrs: {
                            isMain: this.$route.path.indexOf("static") < 0,
                            language: this.$store.state.language.serviceLang,
                            followUs: this.$t("FOLLOW_US"),
                            letsDownloadApp: this.$t("DOWNLOAD_APP"),
                            abjInformation: this.$t("ABJ")
                        }
                    }, [e(Jr)])
                }
            }]),
            a
        }(ot);
        qc = Object(c["b"])([Object(P["b"])({
            metaInfo: function() {
                return {
                    link: [{
                        rel: "apple-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }, {
                        rel: "android-touch-icon",
                        content: "/icn/app_icon_128.png"
                    }],
                    meta: [{
                        name: "apple-itunes-app",
                        content: "app-id=1442476536"
                    }, {
                        name: "google-play-app",
                        content: "app-id=jp.co.shueisha.mangaplus"
                    }]
                }
            }
        })], qc);
        var zc = qc;
        C["default"].use(Lc["a"]),
        C["default"].use(ic["a"]),
        C["default"].use(I["a"]),
        C["default"].use(si.a),
        C["default"].use(ne["a"]),
        C["default"].use(zi["a"]),
        C["default"].use(Ic.a),
        C["default"].use(Uc.a);
        var Qc = 1400
          , Zc = [{
            path: "",
            redirect: "/main"
        }, {
            path: "/main",
            name: "main",
            component: rl,
            children: [{
                path: "",
                redirect: "/updates",
                name: "updates"
            }, {
                path: "/error",
                component: Jr,
                name: "error"
            }, {
                path: "/updates",
                component: Ri,
                name: "updates"
            }, {
                path: "/favorited",
                component: Ot,
                name: "favorited"
            }, {
                path: "/manga_list",
                component: Jn,
                children: [{
                    path: "",
                    redirect: "ongoing"
                }, {
                    path: "all",
                    redirect: "ongoing"
                }, {
                    path: "ongoing",
                    component: ti,
                    name: "ongoing"
                }, {
                    path: "completed",
                    component: ni,
                    name: "completed"
                }, {
                    path: "one_shot",
                    component: ri,
                    name: "one_shot"
                }, {
                    path: "browser_a",
                    redirect: "ongoing"
                }, {
                    path: "browser_z",
                    redirect: "ongoing"
                }, {
                    path: "updated",
                    redirect: "ongoing"
                }]
            }, {
                path: "/ranking",
                component: Lt,
                children: [{
                    path: "",
                    redirect: "hottest"
                }, {
                    path: "hottest",
                    component: qt,
                    name: "hottest"
                }, {
                    path: "trending",
                    component: Gc,
                    name: "trending"
                }, {
                    path: "completed",
                    component: Kc,
                    name: "completed"
                }]
            }, {
                path: "/featured",
                component: la,
                name: "featured"
            }, {
                path: "/titles/:id",
                component: Sn,
                name: "titles_id"
            }, {
                path: "/comments/:id",
                component: oo,
                name: "comments_id"
            }, {
                path: "/announcement",
                component: Vl,
                name: "announcement"
            }, {
                path: "/feedback",
                component: zl,
                name: "feedback"
            }, {
                path: "/maintenance",
                component: Js,
                name: "maintenance"
            }, {
                path: "/about_us",
                component: lc,
                name: "about_us"
            }, {
                path: "/search_result",
                component: Xl,
                name: "search_result"
            }, {
                path: "/publisher_news/:id",
                component: Sc,
                name: "publisher_news_id"
            }]
        }, {
            path: "/blocking",
            component: nl,
            name: "blocking"
        }, {
            path: "/viewer/:chapterId",
            component: qr,
            name: "viewer_chapter"
        }, {
            path: "/rating/:language",
            component: $i,
            name: "webview_rating"
        }, {
            path: "/terms_web_ja",
            component: Vc,
            name: "terms_web_japanese"
        }, {
            path: "/webview",
            component: nc,
            children: [{
                path: "/webview/announcement/:language",
                component: Vl,
                name: "webview_announcement"
            }, {
                path: "/webview/faq/:language",
                component: El,
                name: "webview_faq"
            }, {
                path: "/webview/questionnaire/:lang/:questionnaire_key",
                component: L,
                name: "webview_questionnaire"
            }]
        }, {
            path: "/androidtopus",
            component: qi,
            name: "androidtopus",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/kuw8fhzl"
                }
                ), Qc)
            }
        }, {
            path: "/iostopus",
            component: qi,
            name: "iostopus",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/kuw8fhzl"
                }
                ), Qc)
            }
        }, {
            path: "/webtopus",
            component: qi,
            name: "webtopus",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/kuw8fhzl"
                }
                ), Qc)
            }
        }, {
            path: "/androidtopfr",
            component: qi,
            name: "androidtopfr",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/8ljistzn"
                }
                ), Qc)
            }
        }, {
            path: "/iostopfr",
            component: qi,
            name: "iostopfr",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/8ljistzn"
                }
                ), Qc)
            }
        }, {
            path: "/webtopfr",
            component: qi,
            name: "/webtopfr",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/8ljistzn"
                }
                ), Qc)
            }
        }, {
            path: "/topus",
            component: qi,
            name: "topus",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/kuw8fhzl"
                }
                ), Qc)
            }
        }, {
            path: "/popus",
            component: qi,
            name: "popus",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/kuw8fhzl"
                }
                ), Qc)
            }
        }, {
            path: "/topfr",
            component: qi,
            name: "topfr",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/8ljistzn"
                }
                ), Qc)
            }
        }, {
            path: "/popfr",
            component: qi,
            name: "popfr",
            beforeEnter: function() {
                setTimeout((function() {
                    window.location = "https://tsubasa-dteam-gl.onelink.me/Ee7Q/8ljistzn"
                }
                ), Qc)
            }
        }, {
            path: "*",
            component: zc,
            name: "error"
        }]
          , Jc = new I["a"]({
            mode: "history",
            routes: Zc,
            scrollBehavior: function(e, t, a) {
                return a || {
                    x: 0,
                    y: 0
                }
            }
        });
        Jc.beforeEach((function(e, t, a) {
            tt.dispatch("error/clearError"),
            e.hash ? a(e.hash.split("#")[1]) : a()
        }
        )),
        C["default"].use(_c, {
            id: "GTM-M84M66H",
            vueRouter: Jc,
            trackViewEventProperty: "page_view"
        }),
        window.updateGCM = function(e) {
            console.log("Triggered GCM update!");
            var t = function t() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                setTimeout((function() {
                    if (!(a > 500)) {
                        var n = window.OnetrustActiveGroups;
                        if (!n || n.length < 8)
                            return t(a + 1);
                        console.log("OTAG", window.OnetrustActiveGroups),
                        e(window.OnetrustActiveGroups),
                        console.log("GCM update finished."),
                        window.dataLayer.push({
                            event: "mplus_consent_ready"
                        })
                    }
                }
                ), 200)
            };
            t()
        }
        ;
        var Xc = so
          , eu = new zi["a"]({
            locale: q(de),
            fallbackLocale: "en",
            messages: Xc
        });
        C["default"].config.productionTip = !1;
        var tu = new C["default"]({
            i18n: eu,
            store: tt,
            render: function(e) {
                return e(H)
            },
            router: Jc,
            components: {
                App: H
            }
        }).$mount("#app");
        tt.state.language.$app = tu
    },
    d630: function(e, t, a) {
        e.exports = {
            container: "styles-module_container_3Ng4k",
            flexContainer: "styles-module_flexContainer_2BcQU",
            item: "styles-module_item_19Jr0"
        }
    },
    d682: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAArlBMVEUAAAD/3AD/4gD/2AD/2AD/2AD/3AD/2AD/2AD/4wD/2AD/4QD/3AD/2AD/3QD/2AD/2AD/2AD/2gD/4wD/2AD/2AD/2QD/2QD/2AD/2AD/2QD/2QD/2gD/2AD/2AD/2AD/2AD/2AD/2AD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2AD/2AD/2AD/2AD/2AD/2gD/2QD/3AD/2AD/2AD/2QD/2QD/1wD/1wAJyLz3AAAAOXRSTlMAAwadjFYV/PQM+RAlgRnw2cUrCeCGXErovHlwNtGrpeTKt3RrZiHdQLNR1WGwn5HsRDEdwJY8fc2yGc0OAAAHOUlEQVR42uzZ6WKiMBQF4IMboAjivrY67ktr7X7e/8WmMy0I5dIQtdM/8/2m99Qkl8SI//7T4dzj5/Sr+DmTLX7MA1nHTxmQL/gWhgEVnxxByYC+5xUUXJOkA4XhAfr2eyjM+GYKhVYe+ppjKPT4ZgKFWteAriH5jC+VTP7xgC/VyRV0tciClHg041/90hGSquQeumpkE0mHLlPddZC0JcfQVOebe+mj/2KKnoskh1TMnzxaZAuSQZkCs29A0OebAvRs+aYG0X2NCcshRK9804QWh3/VIbJv+cm1DdGCfw2htCqGbj9qFkMHRBU9Rli7tDp5oY7M7THV4wNiFmOGuk72Ov4CKYy+SZH5YiCuYTFUruCTaZkis2og3XBJQTPZKxtGtDPWGSvedZVrJlxVkBB77AYJtlDnpgKVncUYa46knPc+4OX3R2wktT3GlGfIwHllxKgOQeejuT9avijWmTBiW0cmuSVDzQYk+ffmDlr+Sq5TY2gs1pH3yiMXAuOOtHbHlrfE0pVonQWymTNiBsGBfHXClvfJDQQ7RkyRTY8RjxA8sZBDyGiZtxCsGeFDJo9W833mzRISjFEHMattDgl2+b1OTZ4/2e6juT9adS78e4lC0iGmHdS5TZ0/ebSsXdjyPZzoJnxJtD15/uTRGjnHljcrOIltHV8Si4k4f+Jo7XNhqxbIHU5SJJ8a0TpzqF3Fz4Gd7hoidZ1N/OTZg1Jj7SLGXdsQqOs8IKaUYV9pGPgsPdy2deucz36eF9bbsWeS9MbbdWG+quBfaBxavskEc9I6NPC9VrceU1nXBwPfpVRtUmHcKuE7uAWLGVj7B1yaXSgzo/JTBRfVHlNDd4fLWfSoyXdwIRuP2qw2LiG350nyDZyt4lNg+fnpZjV0nPvVZpp/9Ch4dXGmhy0T/JfnHGKMYd9nwtLBWeqJVd6sOhAtXpaJVX+PMzhdxm3bBlIZxRHjvDpO5jYZMy4aqsb4/BcLnKgyYpRZsKHUaJUZVSvhJEZPuPJRq9cY5edwiqrwJV2g+mpewAlWJiOq0NBnVAfaSl0emTNo2Zk8unOh65YRbWjaRNOvoOmZEVNom58x8Mbo3CXzwqNaDjpmPOoZOMWaR31oyEXvF12cpNJk6K5x4ox1INBdNgNkZiwzLdXF9a+AWDzP0DiHrIoMeS7SzC2G8hCU7hjaaawV9VJxf5GKcAwYeoT+PZxnQ9b2qA5vdPXv4QbKV3rphswQjql+t/kMlEuQbLrMFm5bDGwz38MFbhS34qpwRB51kUWHoQ0EPWYPP+huTnsGvBwEE41woxt7RG3EwBpfhj9eyZXlcV8iA6MsvBSFcGuGgjp8zpANNYeh+y/CHxcQwhXVNNabmUsNtwZApnBYDBShNmWghrRw30HW8FetM+hesd4wsQYGModfi8+oT45PEO0dIHt4S+sceeyfFlLohPcZ+AW141bZv0T4jAFfa1uZXSJ8x8BI67elqU64+i0zgdqN1BvqcHXn9iCTe6NwifBqZH9We2Lgd/v22psoEAVg+IBWEMQiCigFW8Vbbb1UtPb8/z+2yW52BljtMBdtsuH5jm+iHAwzsFURpx/3DBR7MHsq4vQU2gFbQP/OVcQHueFhi5HoysfbSHwAm43EWj7+gUQGFQzpxV0+Ts8gE4Br0F35+ISOOe+9eUc2nhmcdw0eEr5sPEIiBuD70Qey8Tc6txpU0kAilIuvkHjmX1LoycWnAgscSyRWMvEYiaEmsOrak4lPRZbTFhYS7+LxBySMjtDa594WjbdfxFZAOwbzOHa8gdQBOIyRmovFA6RegUfHQsI6XJ3Jp78+oMwzkTAOwMUv7NJI7g3tgE9/ILVLYydIvbSBU4g5SRe4tCaY8wDcTuI7k5mLOc/Ar59gzvATKotfMMdtg4COiTlGBBewnwK3PBCyNjBvuoAKuhssCEDQHAvMSAcGLTWxIAVhZyxy3/Vv04GLRU2Q0MSSwcyGK+zZEktOICXCMmu8bl+YjXBsYZkDkujOJGX1nLCjkS+7EzpHUi7sgUoL93iR5U5Gm81o4lp40eMaFMh6KGCyACU0H7ntdFAl/kIuyScopM0esTIz1UCtll8xbza7oJ593iPTo9+C2+gHUwO/YYyCNtxQ92lk4kXWKM3g5vSV8+oamGMsp85Kh7vRvTCYp46TzoLQ0+F/pYkfIt/eOzZwsaOhripOrhwc1yOFcUTrdIBKvJ2JqDL+h+t7zLLzhohq44TrxDpcoR9IWXGcspLGLO6XuvG88WUhoTZeZgyS42a7O5+b280xGRhIqI8z1fE6XsfreB2v4wriZpSaPxV/XQBk4x+JD9bwW7i8Z7z8gkPft+4b73mQ4x3vGN/PoSQY3iu+bcE/7NNd4m8ruChObh43I5254qw+Tkf7umx8izgdbYZwqTzO9+6S6jgdbTbvqDxOR5stGKqNb1vAwT4pjJPRrixOdFBVh1pNkV/Sglg88IeFvgAAAABJRU5ErkJggg=="
    },
    d775: function(e, t, a) {
        e.exports = {
            titlecontainer: "Comments-module_titlecontainer_3Ht-Z",
            sorter: "Comments-module_sorter_3CpB7",
            sortoptions: "Comments-module_sortoptions_1xH7q",
            title: "Comments-module_title_2liw6",
            header: "Comments-module_header_2CES8",
            toggle: "Comments-module_toggle_3PGLV",
            toggleItem: "Comments-module_toggleItem_2_MCA",
            linkActive: "Comments-module_linkActive_2B_fZ",
            commentsHeader: "Comments-module_commentsHeader_2DY3D",
            leaveBtn: "Comments-module_leaveBtn_1hM8H",
            message: "Comments-module_message_5Jt9x",
            comments: "Comments-module_comments_3IVW0"
        }
    },
    d937: function(e, t, a) {
        e.exports = {
            item: "styles-module_item_30DgJ",
            wrapper: "styles-module_wrapper_1Ic9M"
        }
    },
    e66a: function(e, t, a) {
        e.exports = {
            title: "styles-module_title_DY8gL",
            header: "styles-module_header_iYA43",
            breadcrumbList: "styles-module_breadcrumbList_1VFU6"
        }
    },
    e6c8: function(e, t, a) {
        e.exports = {
            breadcrumbList: "styles-module_breadcrumbList_2cude",
            breadcrumb: "styles-module_breadcrumb_34SMI",
            separator: "styles-module_separator_36Q5K"
        }
    },
    eafd: function(e, t, a) {
        e.exports = {
            modal: "LanguageModal-module_modal_1GH1I",
            appear: "LanguageModal-module_appear_1EUZg",
            hidden: "LanguageModal-module_hidden_H_ahw",
            settings: "LanguageModal-module_settings_3Ki7s",
            languageHeader: "LanguageModal-module_languageHeader_1teS0",
            attention: "LanguageModal-module_attention_2JZBs",
            languageList: "LanguageModal-module_languageList_181DL",
            languageCell: "LanguageModal-module_languageCell_jYGLg",
            langInput: "LanguageModal-module_langInput_1CGIK",
            new: "LanguageModal-module_new_2_zyc"
        }
    },
    eb35: function(e, t, a) {
        e.exports = {
            titleNoCheck: "styles-module_titleNoCheck_1RSbO",
            titleChecked: "styles-module_titleChecked_BQXwk",
            titleText: "styles-module_titleText_2lpJn",
            title: "styles-module_title_25DO8",
            body: "styles-module_body_ZM_f-"
        }
    },
    ec71: function(e, t, a) {
        e.exports = {
            contents: "SubscribedTitle-module_contents_2S_dW",
            lang: "SubscribedTitle-module_lang_pivm4",
            active: "SubscribedTitle-module_active_2qXK9",
            imgWrapper: "SubscribedTitle-module_imgWrapper_usHUo",
            image: "SubscribedTitle-module_image_2U_La",
            removedMessage: "SubscribedTitle-module_removedMessage_3DigS",
            btn: "SubscribedTitle-module_btn_22S2b",
            removed: "SubscribedTitle-module_removed_2Alyi"
        }
    },
    eda8: function(e, t, a) {
        e.exports = {
            title: "UpdatedTitle-module_title_2KlMr",
            upLabel: "UpdatedTitle-module_upLabel_3afXn",
            newLabel: "UpdatedTitle-module_newLabel_1Kyis",
            reEditionLabel: "UpdatedTitle-module_reEditionLabel_2VmYV",
            titleImage: "UpdatedTitle-module_titleImage_3DBmi",
            upLabelText: "UpdatedTitle-module_upLabelText_3ACzD",
            newLabelText: "UpdatedTitle-module_newLabelText_1Yy3p",
            reEditionLabelText: "UpdatedTitle-module_reEditionLabelText_1ftBw",
            creatorTitleImage: "UpdatedTitle-module_creatorTitleImage_yiG8y",
            titleDescription: "UpdatedTitle-module_titleDescription_Cf0hO",
            titleName: "UpdatedTitle-module_titleName_1QO_s",
            author: "UpdatedTitle-module_author_1ltec",
            titleWrapper: "UpdatedTitle-module_titleWrapper_2EQIT",
            chapter: "UpdatedTitle-module_chapter_XrLgd",
            chapterTitleWrapper: "UpdatedTitle-module_chapterTitleWrapper_3rnA_",
            chapterTitle: "UpdatedTitle-module_chapterTitle_kZUrz",
            viewIcon: "UpdatedTitle-module_viewIcon_1wy5m",
            viewCount: "UpdatedTitle-module_viewCount_1fRq9",
            lang: "UpdatedTitle-module_lang_yv1DD",
            chapterDescription: "UpdatedTitle-module_chapterDescription_riZF7",
            latest: "UpdatedTitle-module_latest_2HLFG",
            languages: "UpdatedTitle-module_languages_nhDNC",
            active: "UpdatedTitle-module_active_1XLrw"
        }
    },
    efad: function(e, t, a) {
        e.exports = {
            mainContainer: "TermsWebJapanese-module_mainContainer_2g1I9",
            ttl_main: "TermsWebJapanese-module_ttl_main_3CcWy",
            ttl_main_title: "TermsWebJapanese-module_ttl_main_title_3Dw9G",
            ttl_sub: "TermsWebJapanese-module_ttl_sub_l0aDq",
            txt_main: "TermsWebJapanese-module_txt_main_2Zk0J",
            txt_first: "TermsWebJapanese-module_txt_first_3hdMi"
        }
    },
    f21f: function(e, t, a) {
        e.exports = {
            container: "index-module_container_3nJxv",
            oneImage: "index-module_oneImage_2pH_3"
        }
    },
    f352: function(e, t, a) {
        e.exports = a.p + "img/allage.e1350b74.svg"
    },
    f6a5: function(e, t, a) {
        e.exports = {
            title: "HorizontalTitleList-module_title_1nID2",
            horizontalList: "HorizontalTitleList-module_horizontalList_3eVz7",
            featuredTitle: "HorizontalTitleList-module_featuredTitle_Q9zOW",
            leftWrap: "HorizontalTitleList-module_leftWrap_2mlKC",
            rightWrap: "HorizontalTitleList-module_rightWrap_2en5D",
            rightCursor: "HorizontalTitleList-module_rightCursor_o5OUq",
            leftCursor: "HorizontalTitleList-module_leftCursor_B1px5",
            hideCursor: "HorizontalTitleList-module_hideCursor_1-3_U",
            image: "HorizontalTitleList-module_image_3C1HQ",
            item: "HorizontalTitleList-module_item_2s8up",
            itemListWrapper: "HorizontalTitleList-module_itemListWrapper_23ST9",
            itemList: "HorizontalTitleList-module_itemList_1kB_K"
        }
    },
    f6ca: function(e, t, a) {
        e.exports = {
            outerWrapper: "Viewer-module_outerWrapper_1_nd2",
            viewerContainer: "Viewer-module_viewerContainer_iCeeB",
            wrapper: "Viewer-module_wrapper_11OpA",
            slider: "Viewer-module_slider_3iqpi",
            footer: "Viewer-module_footer_22XOt",
            appear: "Viewer-module_appear_1BZwO",
            hidden: "Viewer-module_hidden_2BlF7",
            container: "Viewer-module_container_1dmXQ",
            pageNumber: "Viewer-module_pageNumber_2Ma3Q",
            commentIcon: "Viewer-module_commentIcon_29o4d",
            commentNumberFrame: "Viewer-module_commentNumberFrame_3YphX",
            commentNumberFramePoint1: "Viewer-module_commentNumberFramePoint1_2BmTw",
            commentNumberFramePoint2: "Viewer-module_commentNumberFramePoint2_3moV4",
            commentNumberFramePoint3: "Viewer-module_commentNumberFramePoint3__euFw",
            commentNumber: "Viewer-module_commentNumber_1T7UU",
            chapterContainer: "Viewer-module_chapterContainer_2FTyl",
            thumbnailContainer: "Viewer-module_thumbnailContainer_fu9iS",
            nextChapterBtn: "Viewer-module_nextChapterBtn_MLwVx",
            nextChapterContainer: "Viewer-module_nextChapterContainer_yobGl",
            nextChapterThumbnail: "Viewer-module_nextChapterThumbnail_31VQc",
            btn: "Viewer-module_btn_2Qqqj",
            notificationBtn: "Viewer-module_notificationBtn_fsLdA",
            "shake-vertical": "Viewer-module_shake-vertical_Z8kxu",
            arrow: "Viewer-module_arrow_1pv4r",
            "shake-top": "Viewer-module_shake-top_1RlFq",
            subscribeBtn: "Viewer-module_subscribeBtn_1P5jq",
            default: "Viewer-module_default_2Db0r",
            done: "Viewer-module_done_2ijww",
            commentsBtn: "Viewer-module_commentsBtn_12WKC",
            title: "Viewer-module_title_2NINQ",
            commentsHeader: "Viewer-module_commentsHeader_lVh94",
            appBannerWrapper: "Viewer-module_appBannerWrapper_3Zl3L",
            leaveBtn: "Viewer-module_leaveBtn_3tMn9",
            message: "Viewer-module_message_1JJ-G",
            comments: "Viewer-module_comments_1-OIj",
            cautionContainer: "Viewer-module_cautionContainer_1laqP",
            cautionImage: "Viewer-module_cautionImage_1sZwu",
            bannerContainer: "Viewer-module_bannerContainer_rSJE0",
            bannerImg: "Viewer-module_bannerImg_29B42",
            banner: "Viewer-module_banner_2iWA8",
            announce: "Viewer-module_announce_14wJs",
            comming: "Viewer-module_comming_3yiP2",
            date: "Viewer-module_date_22SZp",
            date2: "Viewer-module_date2_1MlCq",
            anime: "Viewer-module_anime_18-LU",
            dateText: "Viewer-module_dateText_3RKe5",
            mayChange: "Viewer-module_mayChange_3eVrK",
            latestWrapper: "Viewer-module_latestWrapper_29vEt",
            toastHidden: "Viewer-module_toastHidden_3spzt",
            toast: "Viewer-module_toast_80iPl",
            toastAll: "Viewer-module_toastAll_2D7cI",
            fadeIn: "Viewer-module_fadeIn_B8Q8y",
            toastVertical: "Viewer-module_toastVertical_3zUwQ",
            growUp: "Viewer-module_growUp_19s8E",
            growDown: "Viewer-module_growDown_3DD3S",
            modeText: "Viewer-module_modeText_eGzFW",
            goUp: "Viewer-module_goUp_3NPH4",
            goDown: "Viewer-module_goDown_2kbW7",
            toastHorizontal: "Viewer-module_toastHorizontal_zcLMp",
            growLeft: "Viewer-module_growLeft_rjhop",
            growRight: "Viewer-module_growRight_1ORpY",
            goLeft: "Viewer-module_goLeft_21GXX",
            goRight: "Viewer-module_goRight_UXvKR",
            modeIcon: "Viewer-module_modeIcon_1le6x",
            mode: "Viewer-module_mode_2ePS_"
        }
    },
    f877: function(e, t, a) {
        e.exports = {
            gridContainer: "UpdatedTitles-module_gridContainer_mw8H9",
            midAd: "UpdatedTitles-module_midAd_2rdvv"
        }
    },
    fb41: function(e, t, a) {
        e.exports = a.p + "img/v-jump_label.ee89fdef.svg"
    }
});
