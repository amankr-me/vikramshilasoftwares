/* ==========================================================================
   Vikramshila Softwares — shared site behaviour
   Loaded with `defer` on every page, so it never blocks the parser and is
   cached once instead of being re-parsed inline on all five pages.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* --- Scroll-reveal animations ------------------------------------------
     AOS is loaded async, so it may not exist yet when this file runs. Poll
     briefly, and fall back to simply showing the content if it never lands —
     content must never depend on a third-party script to become visible. */
  function startAOS(attempt) {
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        once: true,
        offset: 80,
        easing: "ease-out-cubic",
        disable: reduceMotion,
      });
      return;
    }
    if (attempt > 40) {
      document.documentElement.classList.add("aos-unavailable");
      return;
    }
    setTimeout(function () {
      startAOS(attempt + 1);
    }, 50);
  }
  startAOS(0);

  /* --- Same-page anchor scrolling ----------------------------------------
     Only intercept links that actually resolve to an element, so a bare "#"
     or a cross-page target falls through to native behaviour. */
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    var target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    // Keep the URL and keyboard focus in sync with the visual position.
    history.pushState(null, "", hash);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  /* --- Navbar background on scroll ---------------------------------------
     rAF-throttled: the previous version ran a layout-reading handler on every
     scroll event, which is a direct INP/long-task cost on low-end phones. */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --- Gallery carousel (about page) -------------------------------------
     data-bs-ride="carousel" already auto-starts it at Bootstrap's 5s default;
     this only shortens the interval. Bootstrap arrives deferred, so wait for
     it rather than assuming it is there. */
  var galleryEl = document.getElementById("galleryCarousel");
  if (galleryEl) {
    var startCarousel = function (attempt) {
      if (window.bootstrap && window.bootstrap.Carousel) {
        window.bootstrap.Carousel.getOrCreateInstance(galleryEl, {
          interval: reduceMotion ? false : 3000,
          wrap: true,
        });
        return;
      }
      if (attempt > 40) return;
      setTimeout(function () {
        startCarousel(attempt + 1);
      }, 50);
    };
    startCarousel(0);
  }

  /* --- Hero video --------------------------------------------------------
     The video is decorative and sits behind a near-opaque overlay. Attaching
     it only when the connection and the viewport can afford it keeps it off
     the critical path: everyone else gets the poster frame, which is already
     preloaded. */
  var hero = document.querySelector("video[data-src]");
  if (hero) {
    var conn = navigator.connection || {};
    var slow = conn.saveData === true || /2g/.test(conn.effectiveType || "");
    var bigEnough = window.matchMedia("(min-width: 768px)").matches;

    if (!slow && bigEnough && !reduceMotion) {
      // Wait for the page to settle so the video never competes with LCP.
      // Whichever signal arrives first wins; `attached` keeps it to one run.
      // Racing them matters — requestIdleCallback can be starved indefinitely
      // on a busy main thread, and then the hero would silently never load.
      var attached = false;
      var attach = function () {
        if (attached) return;
        attached = true;
        var source = document.createElement("source");
        source.src = hero.getAttribute("data-src");
        source.type = "video/mp4";
        hero.appendChild(source);
        hero.load();
        var p = hero.play();
        if (p && p.catch) p.catch(function () {});
      };

      if ("requestIdleCallback" in window) {
        requestIdleCallback(attach, { timeout: 2500 });
      }
      if (document.readyState === "complete") {
        setTimeout(attach, 600);
      } else {
        window.addEventListener("load", function () {
          setTimeout(attach, 600);
        });
      }
    }
  }
})();
