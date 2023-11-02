"use strict";
const channelIds = [
    "tv1",
    "tv2",
    "tv3",
    "tv4",
    "tehran",
    "irinn",
    "varzesh",
    "nasim",
    "hdtest",
    "pooya",
    "ifilm",
    "namayesh",
    "mostanad",
    "quran",
    "amouzesh",
    "salamat",
    "ofogh",
    "omid"
];
let selectedItem = 0;
function showIframe(channel) {
    const oldBox = document.getElementById("tvBox");
    if (oldBox != null) {
        oldBox.remove();
    }
    const iframe = document.createElement("iframe");
    iframe.id = "tvBox";
    iframe.allowFullscreen = true;
    iframe.src = `https://telewebion.com/live/${channel.id}`;
    iframe.title = channel.id;
    iframe.width = "100%";
    iframe.height = `${window.innerHeight}px`;
    document.body.appendChild(iframe);
    iframe.scrollIntoView();
    iframe.focus();
}
document.addEventListener('keydown', function (event) {
    var _a, _b;
    if (event.key == "ArrowLeft" && selectedItem != 0) {
        selectedItem -= 1;
        (_a = document.getElementById(channelIds[selectedItem])) === null || _a === void 0 ? void 0 : _a.focus();
        window.scroll(0, 0);
    }
    else if (event.key == "ArrowRight" && selectedItem < channelIds.length - 1) {
        selectedItem += 1;
        (_b = document.getElementById(channelIds[selectedItem])) === null || _b === void 0 ? void 0 : _b.focus();
        window.scroll(0, 0);
    }
});
//# sourceMappingURL=App.js.map