/ ==UserScript==
// @name         Transgender Flag Template
// @namespace    http://tampermonkey.net/
// @description  MLP Minimap r/Place
// @include      https://hot-potato.reddit.com/embed*
// @version      0.3
// @grant        GM.xmlHttpRequest
// @author       Ponywka, bb010g
// @downloadURL  https://gist.githubusercontent.com/Cleover/1235a918e7db52831359eeee4e92bdb7/raw/userscript.user.js
// @updateURL    https://gist.githubusercontent.com/Cleover/1235a918e7db52831359eeee4e92bdb7/raw/userscript.user.js
// @connect      raw.githubusercontent.com
// @connect      media.githubusercontent.com
// @require      https://unpkg.com/uhtml@2.8.1
// ==/UserScript==

const url = "https://gist.githubusercontent.com/Cleover/1235a918e7db52831359eeee4e92bdb7/raw/userscript.user.js"
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
