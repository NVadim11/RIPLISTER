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
    const script_menuClose = document.querySelector(".menu__close");
    const contactBtn = document.querySelector(".footer__contactButton");
    const contactModalClose = document.querySelector(".contactModal__close");
    if (menuBtn) {
        const menu = document.querySelector(".menu");
        menuBtn.addEventListener("click", (function(e) {
            menu.classList.add("_active");
        }));
    }
    if (script_menuClose) {
        const menu = document.querySelector(".menu");
        script_menuClose.addEventListener("click", (function(e) {
            menu.classList.remove("_active");
        }));
    }
    if (contactBtn) {
        const contactForm = document.querySelector(".contactModal");
        contactBtn.addEventListener("click", (function(e) {
            contactForm.classList.add("_active");
        }));
    }
    if (contactModalClose) {
        const contactForm = document.querySelector(".contactModal");
        contactModalClose.addEventListener("click", (function(e) {
            contactForm.classList.remove("_active");
        }));
    }
    window["FLS"] = true;
    isWebp();
    menuInit();
})();