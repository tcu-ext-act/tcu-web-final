/* ==========================================================================
   NEWS & BLOGS
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  /* ---------- Date formatting ---------- */
  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  /* ---------- Card templates ---------- */
  function initials(name) {
    return name.split(" ").map(function (p) { return p[0]; }).join("").slice(0, 2).toUpperCase();
  }

  function cardHTML(post) {
    return (
      '<article class="card">' +
        '<a class="thumb" href="post/' + post.slug + '.html">' +
          '<span class="badge ' + post.type + '">' + post.type + '</span>' +
          '<img src="' + post.image + '" alt="' + escapeHTML(post.title) + '" loading="lazy">' +
        '</a>' +
        '<div class="body">' +
          '<span class="cat">' + escapeHTML(post.category) + '</span>' +
          '<h3><a href="' + post.slug + '.html">' + escapeHTML(post.title) + '</a></h3>' +
          '<p class="excerpt">' + escapeHTML(post.excerpt) + '</p>' +
          '<div class="meta"><span>' + escapeHTML(post.author) + '</span><span class="dot"></span><span>' + formatDate(post.date) + '</span><span class="dot"></span><span>' + post.readTime + '</span></div>' +
        '</div>' +
      '</article>'
    );
  }

  function horizontalCardHTML(post) {
    return (
      '<article class="card horizontal">' +
        '<a class="thumb" href="post/' + post.slug + '.html">' +
          '<span class="badge ' + post.type + '">' + post.type + '</span>' +
          '<img src="' + post.image + '" alt="' + escapeHTML(post.title) + '" loading="lazy">' +
        '</a>' +
        '<div class="body">' +
          '<span class="cat">' + escapeHTML(post.category) + '</span>' +
          '<h3><a href="' + post.slug + '.html">' + escapeHTML(post.title) + '</a></h3>' +
          '<p class="excerpt">' + escapeHTML(post.excerpt) + '</p>' +
          '<div class="meta"><span>' + escapeHTML(post.author) + '</span><span class="dot"></span><span>' + formatDate(post.date) + '</span><span class="dot"></span><span>' + post.readTime + '</span></div>' +
        '</div>' +
      '</article>'
    );
  }

  function sidebarItemHTML(post) {
    return (
      '<li>' +
        '<a href="post/' + post.slug + '.html"><img src="' + post.image + '" alt="' + escapeHTML(post.title) + '"></a>' +
        '<div>' +
          '<h5><a href="' + post.slug + '.html">' + escapeHTML(post.title) + '</a></h5>' +
          '<div class="date">' + formatDate(post.date) + '</div>' +
        '</div>' +
      '</li>'
    );
  }

  function escapeHTML(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  function byDateDesc(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  /* ---------- Set active nav link based on current page ---------- */
  function markActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === path) a.classList.add("active");
    });
  }

  /* ---------- Newsletter form (demo only, no backend) ---------- */
  function initForms() {
    document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = form.querySelector("button[type=submit]");
        var original = btn ? btn.textContent : null;
        if (btn) { btn.textContent = "Thank you!"; btn.disabled = true; }
        setTimeout(function () {
          if (btn) { btn.textContent = original; btn.disabled = false; }
          form.reset();
        }, 2200);
      });
    });
  }

  window.BuildWire = {
    posts: function () { return window.SITE_POSTS || []; },
    formatDate: formatDate,
    initials: initials,
    cardHTML: cardHTML,
    horizontalCardHTML: horizontalCardHTML,
    sidebarItemHTML: sidebarItemHTML,
    escapeHTML: escapeHTML,
    byDateDesc: byDateDesc
  };

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    markActiveNav();
    initForms();
  });
})();
