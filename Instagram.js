// ==UserScript==
// @name           Bloqueador de Feed
// @description    Bloqueia o feed do instagram, foque apenas em você =D
// @namespace      CowanINSTA
// @license        CowBas
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

(function () {
    'use strict';

    // Remover o feed 
    function removeHomeFeed() {
        const homeFeedSelector = 'section > main > div > div > div';
        const homeFeed = document.querySelector(homeFeedSelector);

        if (homeFeed && window.location.pathname === '/') {
            homeFeed.remove();
        }
    }

    // Garantir que o feed seja removido quando carregado verificando o Dom
    const observer = new MutationObserver(removeHomeFeed);
    observer.observe(document, { childList: true, subtree: true });

    // Remover o feed
    window.addEventListener('load', removeHomeFeed);
})();