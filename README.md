# Google Gemini İngilizce Yönlendirme Userscript

Bu userscript, Tampermonkey eklentisi ile birlikte çalışır ve kullanıcının "gemini.google.com" sitesine erişimini "https://gemini.google.com/?hl=en" adresine yönlendirir. Bu sayede, kullanıcı siteye her giriş yaptığında otomatik olarak İngilizce versiyonunu görür.

## Kullanım

1. Öncelikle, Tampermonkey eklentisini tarayıcınıza kurun.
2. Daha sonra, bu userscript'i Tampermonkey'ye yeni bir script olarak ekleyin.
3. Artık "gemini.google.com" adresine her giriş yaptığınızda, otomatik olarak İngilizce versiyona yönlendirilirsiniz.

## Kod

```javascript
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
```

Bu userscript, kullanıcının "gemini.google.com" sitesine erişimini otomatik olarak İngilizce versiyona yönlendirir. Bu, Google Gemini'nin tam özelliklerini kullanmayı sağlar.


---

# Google Gemini English Redirect Userscript

This userscript works together with the Tampermonkey plugin and redirects the user's access to "gemini.google.com" to "https://gemini.google.com/?hl=en". This way, every time the user accesses the site, they will automatically see the English version.

## Usage

1. First, install the Tampermonkey plugin in your browser.
2. Then, add this userscript as a new script to Tampermonkey.
3. Now every time you log in to "gemini.google.com" you will be automatically redirected to the English version.

## Code

``javascript
// ==UserScript==
// @name Google Gemini Redirect
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Automatically redirect to English version of Google Gemini
// @author You
// @match https://gemini.google.com/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the URL already has the English language parameter
    if (!window.location.href.includes('?hl=en')) {
        // If not, redirect to the English version
        window.location.href = 'https://gemini.google.com/?hl=en';
    }
})();
```

This userscript automatically redirects the user's access to "gemini.google.com" to the English version. This allows to use the full features of Google Gemini.
