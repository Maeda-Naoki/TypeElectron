import { join } from "path";
import { app, BrowserWindow } from "electron";

class App {
  private mainWindow: BrowserWindow | null = null;
  private app: Electron.App;
  private filePath: string = `file://${__dirname}/../static/index.html`;

  constructor(app: Electron.App) {
    this.app = app;
    this.app.on("ready", this.onReady.bind(this));
    this.app.on("activate", this.onActivate.bind(this));
    this.app.on("window-all-closed", this.onWindowAllClose.bind(this));
  }

  private onReady() {
    this.createWindow();
  }

  private onActivate() {
    if (this.mainWindow === null) {
      this.createWindow();
    }
  }

  private onWindowAllClose() {
    if (process.platform !== "darwin") {
      this.app.quit();
    }
  }

  private createWindow() {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 400,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.mainWindow.loadURL(this.filePath);

    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }
}

new App(app);
