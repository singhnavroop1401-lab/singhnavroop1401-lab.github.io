/* =========================================================
   Navroop Singh — Portfolio interactions
   Theme toggle · mobile nav · scroll reveal · scroll spy
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme toggle ---------- */
  var toggle = document.getElementById("theme-toggle");

  function syncToggle() {
    var isDark = root.getAttribute("data-theme") === "dark";
    if (toggle) toggle.setAttribute("aria-pressed", String(isDark));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#0a0a0a" : "#f2f1ed");
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncToggle();
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("nav-burger");
  var links = document.getElementById("nav-links");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("is-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Open menu");
    }
  }

  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    revealEls.forEach(function (el) { revObserver.observe(el); });
  }

  /* ---------- Cursor spotlight ----------
     Glow follows the pointer exactly; the ring eases toward it so the
     motion reads as deliberate rather than twitchy. Fine pointers only —
     on touch there is no cursor to show, and it would just burn battery. */
  var spotlight = document.querySelector(".spotlight");
  var ring = document.querySelector(".cursor-ring");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (spotlight && ring && finePointer && !reduceMotion) {
    var tx = 0, ty = 0;      // target (true pointer position)
    var rx = 0, ry = 0;      // ring position, eased toward the target
    var seen = false, frame = null;

    var place = function () {
      ring.style.transform = "translate3d(" + rx.toFixed(1) + "px," + ry.toFixed(1) + "px,0)";
    };

    var tick = function () {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      place();
      frame = Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1
        ? requestAnimationFrame(tick)
        : null;
    };

    document.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX; ty = e.clientY;
      spotlight.style.setProperty("--mx", tx + "px");
      spotlight.style.setProperty("--my", ty + "px");

      if (!seen) {
        // Snap to the pointer and paint immediately. Waiting for the first
        // rAF would flash the ring at the top-left corner (and rAF does not
        // run at all while the tab is hidden).
        seen = true; rx = tx; ry = ty;
        place();
        spotlight.classList.add("is-on");
        ring.classList.add("is-on");
      }
      ring.classList.toggle("is-active", !!e.target.closest("a, button, .project--has-media"));
      if (!frame) frame = requestAnimationFrame(tick);
    }, { passive: true });

    document.addEventListener("pointerleave", function () {
      spotlight.classList.remove("is-on");
      ring.classList.remove("is-on");
    });
    document.addEventListener("pointerenter", function () {
      if (seen) { spotlight.classList.add("is-on"); ring.classList.add("is-on"); }
    });
  }

  /* ---------- Scroll spy (active nav link) ---------- */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('#nav-links a[href^="#"]')
  );
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navAnchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---------- Project galleries + lightbox ---------- */
  var media = window.PROJECT_MEDIA || {};
  var galleryCards = Array.prototype.slice.call(document.querySelectorAll("[data-gallery]"));

  function mediaBase(slug, file) { return "assets/projects/" + slug + "/" + file; }

  function normalizeItems(list, slug) {
    if (!Array.isArray(list)) return [];
    return list.map(function (it) {
      if (typeof it === "string") return { src: mediaBase(slug, it), alt: "", caption: "" };
      if (it && it.src) return { src: mediaBase(slug, it.src), alt: it.alt || "", caption: it.caption || it.alt || "" };
      return null;
    }).filter(Boolean);
  }

  var active = [];      // items in the currently open gallery
  var current = 0;      // active index
  var lastFocused = null;
  var overlay = null, lbImg, lbCap, lbCount, lbPrev, lbNext, lbClose;

  function buildOverlay() {
    overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Project image viewer");
    overlay.hidden = true;
    overlay.innerHTML =
      '<button class="lightbox__backdrop" type="button" tabindex="-1" aria-label="Close gallery" data-close></button>' +
      '<span class="lightbox__counter mono" aria-hidden="true"></span>' +
      '<button class="lightbox__close" type="button" aria-label="Close gallery">✕</button>' +
      '<button class="lightbox__nav lightbox__prev" type="button" aria-label="Previous image">‹</button>' +
      '<figure class="lightbox__figure">' +
        '<img class="lightbox__img" alt="" />' +
        '<figcaption class="lightbox__caption"></figcaption>' +
      '</figure>' +
      '<button class="lightbox__nav lightbox__next" type="button" aria-label="Next image">›</button>';
    document.body.appendChild(overlay);

    lbImg = overlay.querySelector(".lightbox__img");
    lbCap = overlay.querySelector(".lightbox__caption");
    lbCount = overlay.querySelector(".lightbox__counter");
    lbPrev = overlay.querySelector(".lightbox__prev");
    lbNext = overlay.querySelector(".lightbox__next");
    lbClose = overlay.querySelector(".lightbox__close");

    overlay.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeLightbox();
    });
    lbClose.addEventListener("click", closeLightbox);
    lbPrev.addEventListener("click", function () { step(-1); });
    lbNext.addEventListener("click", function () { step(1); });
    overlay.addEventListener("keydown", onLightboxKeydown);
  }

  function showImage(i) {
    current = (i + active.length) % active.length;
    var item = active[current];
    lbImg.src = item.src;
    lbImg.alt = item.alt || ("Project image " + (current + 1) + " of " + active.length);
    lbCap.textContent = item.caption || "";
    lbCap.hidden = !item.caption;
    lbCount.textContent = (current + 1) + " / " + active.length;
    var multi = active.length > 1;
    lbPrev.hidden = !multi;
    lbNext.hidden = !multi;
    lbCount.hidden = !multi;
  }

  function step(delta) { showImage(current + delta); }

  function openLightbox(items, start) {
    if (!items || !items.length) return;
    if (!overlay) buildOverlay();
    active = items;
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("no-scroll");
    showImage(start || 0);
    lbClose.focus();
  }

  function closeLightbox() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
    lbImg.removeAttribute("src");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function onLightboxKeydown(e) {
    if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
    else if (e.key === "ArrowLeft" && active.length > 1) { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight" && active.length > 1) { e.preventDefault(); step(1); }
    else if (e.key === "Tab") {
      var focusable = Array.prototype.slice
        .call(overlay.querySelectorAll("button:not([hidden])"))
        .filter(function (b) { return !b.hasAttribute("data-close"); });
      if (!focusable.length) return;
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  galleryCards.forEach(function (card) {
    var slug = card.getAttribute("data-gallery");
    var items = normalizeItems(media[slug], slug);
    if (!items.length) return; // no registered images — leave the card untouched

    card.classList.add("project--has-media");
    var nameEl = card.querySelector(".project__name");
    var name = nameEl ? nameEl.textContent.trim() : "project";
    var count = items.length;
    var plural = count > 1 ? "s" : "";

    // Small text cue — replaces the "media soon" placeholder, or is appended.
    // (No thumbnail: the whole card is the trigger; this keeps the gallery
    // discoverable and gives keyboard/screen-reader users an accessible control.)
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "project__gallery-btn mono";
    btn.textContent = "◲ View " + count + " image" + plural;
    btn.setAttribute("aria-label", "Open image gallery for " + name);
    btn.addEventListener("click", function (e) { e.stopPropagation(); openLightbox(items, 0); });

    var pending = card.querySelector(".project__pending");
    var linksWrap = card.querySelector(".project__links");
    if (pending) { pending.replaceWith(btn); }
    else if (linksWrap) { linksWrap.appendChild(btn); }
    else { card.appendChild(btn); }

    // Convenience: clicking anywhere on the card (except a link/button) opens the gallery
    card.addEventListener("click", function (e) {
      if (e.target.closest("a, button")) return;
      openLightbox(items, 0);
    });
  });
})();
