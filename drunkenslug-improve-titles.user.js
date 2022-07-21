// ==UserScript==
// @name        DrunkenSlug - Improve Titles
// @namespace   Violentmonkey Scripts
// @match       https://drunkenslug.com/*
// @icon        https://www.google.com/s2/favicons?domain=drunkenslug.com
// @grant       none
// @version     1.0
// @author      -
// @description 6/12/2021, 9:06:43 PM
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
