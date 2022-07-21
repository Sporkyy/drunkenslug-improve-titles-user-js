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
  const betterTitle = (() => {
    const search = document.querySelector('#search');
    if (!!search) return `🔎 🙶${search.value}🙷`;
    const active = document.querySelector('.breadcrumb .active');
    if (!!active) return `${active.textContent.trim()}`;
    const h2 = document.querySelector('h2');
    if (!!h2) return `${h2.textContent.trim()}`;
  })();

  if (!!betterTitle) window.document.title = `${betterTitle} - DS`;
})();
