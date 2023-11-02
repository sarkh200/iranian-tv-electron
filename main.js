var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var electron = require('electron');
var path = require('path');
var url = require('url');
var nut = require('@nut-tree/nut-js');
var win;
function sleep(s) {
    var ms = s * 1000;
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function createWindow() {
    var _this = this;
    // Create the browser window.
    win = new BrowserWindow({ autoHideMenuBar: true, show: false, backgroundColor: '#2e2c29', fullscreen: true, icon: "./Icons/256x256.png" });
    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.once('ready-to-show', function () { win.show(); });
    win.webContents.on('before-input-event', function (event, input) {
        if (input.key == "1") {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, nut.mouse.setPosition(new nut.Point(electron.screen.getPrimaryDisplay().size.width / 2, electron.screen.getPrimaryDisplay().size.height / 2))];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, nut.mouse.doubleClick(nut.Button.LEFT)];
                        case 2:
                            _a.sent();
                            sleep(.5);
                            return [4 /*yield*/, nut.mouse.leftClick()];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        else if (input.key == "2") {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, nut.keyboard.pressKey(nut.Key.Escape)];
                        case 1:
                            _a.sent();
                            sleep(.5);
                            return [4 /*yield*/, nut.keyboard.pressKey(nut.Key.PageUp)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, nut.keyboard.pressKey(nut.Key.PageUp)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, nut.keyboard.pressKey(nut.Key.PageUp)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, nut.mouse.setPosition(new nut.Point(0, electron.screen.getPrimaryDisplay().size.height / 2))];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, nut.mouse.leftClick()];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, nut.mouse.click(nut.Button.MIDDLE)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        else if (input.key == "3") {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, nut.mouse.click(nut.Button.MIDDLE)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    console.log("Quit");
});
