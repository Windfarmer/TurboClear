// ==UserScript==
// @name         TurboClear
// @namespace    http://tampermonkey.net/
// @version      2025-09-24
// @description  autoclose after border patrol
// @author       Narvatus
// @match        https://*.nationstates.net/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    var title = document.title;
    if (title != ("NationStates | border patrol" || "Just a moment...")) {
        window.close();
    }
})();
