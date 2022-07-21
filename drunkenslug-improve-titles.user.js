// ==UserScript==
// @name        DrunkenSlug - Improve Titles
// @namespace   https://github.com/Sporkyy/
// @match       https://drunkenslug.com/*
// @icon        https://www.google.com/s2/favicons?domain=drunkenslug.com
// @run-at      document-idle
// @grant       none
// @version     1.0
// @author      Sporkyy
// @icon        https://www.google.com/s2/favicons?sz=64&domain=drunkenslug.com
// @description Improves tht titles of pages on DrunkenSlug
// @noframes
// ==/UserScript==

(() => {
  const qs = (s, p = document) => p.querySelector(s);

  const wd = window.document;

  const search = qs('#search');
  const active = qs('.breadcrumb .active');
  const h2 = qs('h2');

  if (search) wd.title = `🔎 🙶${search.value}🙷`;
  else if (active) wd.title = `${active.textContent.trim()}`;
  else if (h2) wd.title = `${h2.textContent.trim()}`;
})();
