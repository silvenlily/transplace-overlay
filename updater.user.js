// ==UserScript==
// @name         Transgender Flag Template
// @namespace    http://tampermonkey.net/
// @description  MLP Minimap r/Place
// @include      https://hot-potato.reddit.com/embed*
// @version      0.3
// @grant        GM.xmlHttpRequest
// @author       Ponywka, bb010g
// @downloadURL  https://raw.githubusercontent.com/silvenlily/transplace-overlay/main/updater.user.js
// @updateURL    https://raw.githubusercontent.com/silvenlily/transplace-overlay/main/updater.user.js
// @connect      raw.githubusercontent.com
// @connect      media.githubusercontent.com
// @require      https://unpkg.com/uhtml@2.8.1
// ==/UserScript==

const url = "https://github.com/silvenlily/transplace-overlay/raw/main/template.user.js"
const _TamperRoot = this;
(async function () {
  // Updater
  GM.xmlHttpRequest({
    method: "GET",
    url: `$url{}?t=${new Date().getTime()}`,
    onload: function (res) {
      new Function(res.responseText)(_TamperRoot);
    },
  });
})();
