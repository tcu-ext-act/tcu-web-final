/* ==========================================================================
   Requires assets/data.js and assets/main.js to be loaded first:
     <script src="../assets/data.js"></script>
     <script src="../assets/main.js"></script>
     <script src="../assets/post.js"></script>
   ========================================================================== */

   (function () {
    "use strict";
  
    function getSlugFromURL() {
      var file = window.location.pathname.split("/").pop() || "";
      return file.replace(/\.html?$/i, "");
    }
  
    function getCurrentPost() {
      if (typeof BuildWire === "undefined") return null;
      var slug = getSlugFromURL();
      if (!slug) return null;
      return BuildWire.posts().find(function (p) { return p.slug === slug; });
    }
  
    function renderSidebarAndRelated(post) {
      // "More Stories" — same section (news/blog), excluding this post
      var more = BuildWire.posts()
        .filter(function (p) { return p.type === post.type && p.slug !== post.slug; })
        .sort(BuildWire.byDateDesc)
        .slice(0, 4);
      var moreList = document.getElementById("sidebar-more");
      if (moreList) moreList.innerHTML = more.map(BuildWire.sidebarItemHTML).join("");
  
      var moreTitle = document.getElementById("sidebar-more-title");
      if (moreTitle) moreTitle.textContent = post.type === "news" ? "More News" : "More From the Blog";
  
      // "Browse Tags" — across all posts
      var tags = Array.from(new Set(BuildWire.posts().reduce(function (acc, p) { return acc.concat(p.tags); }, [])));
      var tagCloud = document.getElementById("sidebar-tags");
      if (tagCloud) {
        tagCloud.innerHTML = tags.map(function (t) {
          return '<span class="tag">' + BuildWire.escapeHTML(t) + '</span>';
        }).join("");
      }
  
      // "Related Stories" — same section, excluding this post
      var related = BuildWire.posts()
        .filter(function (p) { return p.type === post.type && p.slug !== post.slug; })
        .sort(BuildWire.byDateDesc)
        .slice(0, 3);
      var relatedSection = document.getElementById("related-section");
      var relatedGrid = document.getElementById("related-grid");
      if (relatedGrid) {
        if (related.length) {
          relatedGrid.innerHTML = related.map(BuildWire.cardHTML).join("");
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
  
    document.addEventListener("DOMContentLoaded", function () {
      var post = getCurrentPost();
      if (!post) {
        // Most common causes: assets/data.js wasn't loaded on this page, or no
        // post in assets/data.js has a "slug" matching this file's name.
        console.warn('BuildWire: no post in assets/data.js matches the slug "' + getSlugFromURL() + '" — More Stories / Browse Tags / Related Stories will stay empty. Check that assets/data.js is included on this page and that a post\'s "slug" equals this filename.');
        return;
      }
      renderSidebarAndRelated(post);
    });
  })();