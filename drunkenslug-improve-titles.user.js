// ==UserScript==
// @name         DrunkenSlug - Improve Titles
// @namespace    https://github.com/Sporkyy/
// @version      1.0.2
// @description  Improves tht titles of pages on DrunkenSlug
// @author       Sporkyy
// @match        https://drunkenslug.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drunkenslug.com
// @grant        none
// ==/UserScript==

(() => {
  const qs = (s, c = document) => c.querySelector(s);

  const wd = window.document;

  const search = qs('#search');
  const active = qs('.breadcrumb .active');
  const h2 = qs('h2');

  if (search) wd.title = `🔎 🙶${search.value}🙷`;
  else if (active) wd.title = `${active.textContent.trim()}`;
  else if (h2) wd.title = `${h2.textContent.trim()}`;
})();
