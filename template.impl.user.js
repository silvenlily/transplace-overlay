// ==UserScript==
// @name         Transgender Flag Template Implementation
// @namespace    http://tampermonkey.net/
// @description  try to take over the canvas!
// @include      https://hot-potato.reddit.com/embed*
// @version      0.5
// @grant        GM.xmlHttpRequest
// @author       Ponywka - updater, bb010g - updater, oralekin - script, Ender#5769 - image
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @downloadURL  https://raw.githubusercontent.com/silvenlily/transplace-overlay/main/template.impl.user.js
// @updateURL    https://raw.githubusercontent.com/silvenlily/transplace-overlay/main/template.impl.user.js
// @connect      raw.githubusercontent.com
// @connect      media.githubusercontent.com
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/Ender0112/Transgender-Flag-Template/main/place.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
