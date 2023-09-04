(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".scroll-lock")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".scroll-lock")) bodyLockToggle();
        }));
    }
    function menuOpen() {
        bodyLock();
    }
    function functions_menuClose() {
        bodyUnlock();
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const menuBtn = document.querySelector(".headerMain__menuBtn");
    const menuCloseBtn = document.querySelector(".menu__closeBtn");
    const contactBtn = document.querySelector(".footer__contactBtn");
    const contactModalClose = document.querySelector(".contactModal__closeBtn");
    const radioBtnHuman = document.querySelector(".searchTypeBtn_human");
    const radioBtnCemetery = document.querySelector(".searchTypeBtn_cemetery");
    const radioBtnHumanText = document.querySelector(".searchType_human");
    const radioBtnCemeteryText = document.querySelector(".searchType_cemetery");
    if (menuBtn) {
        const menu = document.querySelector(".menu");
        menuBtn.addEventListener("click", (function(e) {
            menu.classList.add("_active");
            menuOpen();
        }));
    }
    if (menuCloseBtn) {
        const menu = document.querySelector(".menu");
        menuCloseBtn.addEventListener("click", (function(e) {
            menu.classList.remove("_active");
            functions_menuClose();
        }));
    }
    if (contactBtn) {
        const contactForm = document.querySelector(".contactModal");
        contactBtn.addEventListener("click", (function(e) {
            contactForm.classList.add("_active");
            menuOpen();
        }));
    }
    if (contactModalClose) {
        const contactForm = document.querySelector(".contactModal");
        contactModalClose.addEventListener("click", (function(e) {
            contactForm.classList.remove("_active");
            functions_menuClose();
        }));
    }
    if (radioBtnHuman) radioBtnHuman.addEventListener("click", (function(e) {
        radioBtnCemeteryText.style.color = "var(--text-color-black)";
        radioBtnHumanText.style.color = "var(--orange-standart)";
    }));
    if (radioBtnCemetery) radioBtnCemetery.addEventListener("click", (function(e) {
        radioBtnHumanText.style.color = "var(--text-color-black)";
        radioBtnCemeteryText.style.color = "var(--orange-standart)";
    }));
    window["FLS"] = true;
    isWebp();
    menuInit();
})();