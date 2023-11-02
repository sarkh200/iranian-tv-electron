const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const path = require('path');
const url = require('url');
const nut = require('@nut-tree/nut-js');


let win: any;

function sleep(s: number) {
	let ms = s * 1000;
	return new Promise(resolve => setTimeout(resolve, ms));
}

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({ autoHideMenuBar: true, show: false, backgroundColor: '#2e2c29', fullscreen: true, icon: "./Icons/256x256.png" });
	// and load the index.html of the app.
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	win.once('ready-to-show', () => { win.show() });
	win.webContents.on('before-input-event', (event: any, input: any) => {
		if (input.key == "1") {
			(async () => {
				await nut.mouse.setPosition(new nut.Point(electron.screen.getPrimaryDisplay().size.width / 2, electron.screen.getPrimaryDisplay().size.height / 2));
				await nut.mouse.doubleClick(nut.Button.LEFT);
				sleep(.5);
				await nut.mouse.leftClick();
			})();
		}
		else if (input.key == "2") {
			(async () => {
				await nut.keyboard.pressKey(nut.Key.Escape);
				sleep(.5);
				await nut.keyboard.pressKey(nut.Key.PageUp);
				await nut.keyboard.pressKey(nut.Key.PageUp);
				await nut.keyboard.pressKey(nut.Key.PageUp);
				await nut.mouse.setPosition(new nut.Point(0, electron.screen.getPrimaryDisplay().size.height / 2));
				await nut.mouse.leftClick();
				await nut.mouse.click(nut.Button.MIDDLE);
			})();
		}
		else if (input.key == "3") {
			(async () => {
				await nut.mouse.click(nut.Button.MIDDLE);
			})();
		}
	});
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
	console.log("Quit");
});
