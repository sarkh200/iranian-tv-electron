const channelIds: string[] = [
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

function showIframe(channel: HTMLElement) {
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
	if (event.key == "ArrowLeft" && selectedItem != 0) {
		selectedItem -= 1;
		document.getElementById(channelIds[selectedItem])?.focus();
		window.scroll(0, 0);
	}
	else if (event.key == "ArrowRight" && selectedItem < channelIds.length - 1) {
		selectedItem += 1;
		document.getElementById(channelIds[selectedItem])?.focus();
		window.scroll(0, 0);
	}
});