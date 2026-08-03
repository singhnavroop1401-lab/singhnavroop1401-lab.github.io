/* =========================================================
   Navroop Singh — Portfolio interactions
   Theme toggle · mobile nav · scroll reveal · scroll spy
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- UI strings ----------
     Page copy lives in the markup — the German pages are real files
     (index.de.html and friends). Only the strings this script *injects* need
     a table: the gallery cue and the lightbox controls. Keyed off <html lang>,
     falling back to English for any other value. */
  var lang = (root.getAttribute("lang") || "en").slice(0, 2).toLowerCase();
  var isDe = lang === "de";
  var t = {
    openMenu:     isDe ? "Menü öffnen"            : "Open menu",
    closeMenu:    isDe ? "Menü schließen"         : "Close menu",
    viewer:       isDe ? "Projektbild-Betrachter" : "Project image viewer",
    closeGallery: isDe ? "Galerie schließen"      : "Close gallery",
    prevImage:    isDe ? "Vorheriges Bild"        : "Previous image",
    nextImage:    isDe ? "Nächstes Bild"          : "Next image",
    imageOf: function (i, n) {
      return isDe ? "Projektbild " + i + " von " + n
                  : "Project image " + i + " of " + n;
    },
    viewImages: function (n) {
      return isDe ? "◲ " + n + (n > 1 ? " Bilder" : " Bild") + " ansehen"
                  : "◲ View " + n + " image" + (n > 1 ? "s" : "");
    },
    galleryFor: function (name) {
      return isDe ? "Bildergalerie öffnen für " + name
                  : "Open image gallery for " + name;
    }
  };

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
      burger.setAttribute("aria-label", t.openMenu);
    }
  }

  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? t.closeMenu : t.openMenu);
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
      if (!it || !it.src) return null;
      // altDe/captionDe fall back to the English fields, so an entry that
      // hasn't been translated yet degrades to English rather than to nothing.
      var alt = (isDe && it.altDe) || it.alt || "";
      var caption = (isDe && it.captionDe) || it.caption || alt;
      return { src: mediaBase(slug, it.src), alt: alt, caption: caption };
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
    overlay.setAttribute("aria-label", t.viewer);
    overlay.hidden = true;
    overlay.innerHTML =
      '<button class="lightbox__backdrop" type="button" tabindex="-1" aria-label="' + t.closeGallery + '" data-close></button>' +
      '<span class="lightbox__counter mono" aria-hidden="true"></span>' +
      '<button class="lightbox__close" type="button" aria-label="' + t.closeGallery + '">✕</button>' +
      '<button class="lightbox__nav lightbox__prev" type="button" aria-label="' + t.prevImage + '">‹</button>' +
      '<figure class="lightbox__figure">' +
        '<img class="lightbox__img" alt="" />' +
        '<figcaption class="lightbox__caption"></figcaption>' +
      '</figure>' +
      '<button class="lightbox__nav lightbox__next" type="button" aria-label="' + t.nextImage + '">›</button>';
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
    lbImg.alt = item.alt || t.imageOf(current + 1, active.length);
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

    // Small text cue — replaces the "media soon" placeholder, or is appended.
    // (No thumbnail: the whole card is the trigger; this keeps the gallery
    // discoverable and gives keyboard/screen-reader users an accessible control.)
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "project__gallery-btn mono";
    btn.textContent = t.viewImages(count);
    btn.setAttribute("aria-label", t.galleryFor(name));
    btn.addEventListener("click", function (e) { e.stopPropagation(); openLightbox(items, 0); });

    var pending = card.querySelector(".project__pending");
    var linksWrap = card.querySelector(".project__links");
    if (pending) { pending.replaceWith(btn); }
    else if (linksWrap) { linksWrap.appendChild(btn); }
    else { card.appendChild(btn); }

    // Clicking the card body follows the case study when there is one — that's
    // what a reader expects from a project card. The gallery stays available
    // through the "View N images" button. Cards without a case study (the
    // compact coursework ones) keep the gallery as their card action.
    var caseLink = card.querySelector('.project__links a[href^="projects/"]');
    card.addEventListener("click", function (e) {
      if (e.target.closest("a, button")) return;
      // Don't hijack a modified click or a click that ends a text selection.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var sel = window.getSelection();
      if (sel && sel.toString().length) return;
      if (caseLink) { window.location.href = caseLink.href; }
      else { openLightbox(items, 0); }
    });
  });
})();
