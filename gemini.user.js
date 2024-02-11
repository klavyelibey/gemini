// ==UserScript==
// @name         Google Gemini Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically redirect to English version of Google Gemini
// @author       You
// @match        https://gemini.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the URL already has the English language parameter
    if (!window.location.href.includes('?hl=en')) {
        // If not, redirect to the English version
        window.location.href = 'https://gemini.google.com/?hl=en';
    }
})();
