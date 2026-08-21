/* ==========================================================================
   NEWS & BLOGS - MAIN.JS (MERGED WITH POST.JS)
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
        '<a class="thumb" href="' + post.slug + '.html">' +
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
        '<a class="thumb" href="' + post.slug + '.html">' +
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
        '<a href="' + post.slug + '.html"><img src="' + post.image + '" alt="' + escapeHTML(post.title) + '"></a>' +
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

  /* ========== POST PAGE FUNCTIONS ========== */
  function getSlugFromURL() {
    var file = window.location.pathname.split("/").pop() || "";
    return file.replace(/\.html?$/i, "");
  }

  function getCurrentPost() {
    if (typeof window.SITE_POSTS === "undefined") return null;
    var slug = getSlugFromURL();
    if (!slug) return null;
    return window.SITE_POSTS.find(function (p) { return p.slug === slug; });
  }

  function renderSidebarAndRelated(post) {
    // "More Stories" — same section (news/blog), excluding this post
    var more = window.SITE_POSTS
      .filter(function (p) { return p.type === post.type && p.slug !== post.slug; })
      .sort(byDateDesc)
      .slice(0, 4);
    var moreList = document.getElementById("sidebar-more");
    if (moreList) {
      moreList.innerHTML = more.map(sidebarItemHTML).join("");
    }

    var moreTitle = document.getElementById("sidebar-more-title");
    if (moreTitle) moreTitle.textContent = post.type === "news" ? "More News" : "More From the Blog";

    // "Browse Tags" — across all posts
    var tags = Array.from(new Set(window.SITE_POSTS.reduce(function (acc, p) { return acc.concat(p.tags); }, [])));
    var tagCloud = document.getElementById("sidebar-tags");
    if (tagCloud) {
      tagCloud.innerHTML = tags.map(function (t) {
        return '<span class="tag">' + escapeHTML(t) + '</span>';
      }).join("");
    }

    // "Related Stories" — same section, excluding this post
    var related = window.SITE_POSTS
      .filter(function (p) { return p.type === post.type && p.slug !== post.slug; })
      .sort(byDateDesc)
      .slice(0, 3);
    var relatedSection = document.getElementById("related-section");
    var relatedGrid = document.getElementById("related-grid");
    if (relatedGrid) {
      if (related.length) {
        relatedGrid.innerHTML = related.map(cardHTML).join("");
        if (relatedSection) relatedSection.style.display = "";
      } else if (relatedSection) {
        relatedSection.style.display = "none";
      }
    }

    // Active nav state (Home/News/Blog links use data-nav="news.html"/"blog.html")
    document.querySelectorAll(".main-nav a[data-nav]").forEach(function (a) { a.classList.remove("active"); });
    var navLink = document.querySelector('.main-nav a[data-nav="' + post.type + '.html"]');
    if (navLink) navLink.classList.add("active");
  }

  /* ---------- Export public API ---------- */
  window.BuildWire = {
    posts: function () { return window.SITE_POSTS || []; },
    formatDate: formatDate,
    initials: initials,
    cardHTML: cardHTML,
    horizontalCardHTML: horizontalCardHTML,
    sidebarItemHTML: sidebarItemHTML,
    escapeHTML: escapeHTML,
    byDateDesc: byDateDesc,
    getCurrentPost: getCurrentPost,
    renderSidebarAndRelated: renderSidebarAndRelated
  };

  /* ---------- Initialize on page load ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    markActiveNav();
    initForms();

    // If this is a post page, render sidebar and related
    var post = getCurrentPost();
    if (post) {
      renderSidebarAndRelated(post);
    }
  });
})();