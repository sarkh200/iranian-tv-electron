const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const path = require('path');
const url = require('url');
const robot = require('robotjs');


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
				await robot.setPosition(new robot.Point(electron.screen.getPrimaryDisplay().size.width / 2, electron.screen.getPrimaryDisplay().size.height / 2));
				await robot.leftClick();
				await robot.leftClick();
				sleep(.5);
				await robot.leftClick();
			})();
		}
		else if (input.key == "2") {
			(async () => {
				await robot.pressKey(robot.Key.Escape);
				sleep(.5);
				await robot.keyboard.pressKey(robot.Key.PageUp);
				await robot.keyboard.pressKey(robot.Key.PageUp);
				await robot.keyboard.pressKey(robot.Key.PageUp);
				await robot.mouse.setPosition(new robot.Point(0, electron.screen.getPrimaryDisplay().size.height / 2));
				await robot.mouse.leftClick();
				await robot.mouse.click(robot.Button.MIDDLE);
			})();
		}
		else if (input.key == "3") {
			(async () => {
				await robot.mouse.click(robot.Button.MIDDLE);
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
