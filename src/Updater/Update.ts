import isSquirrelStartup from "electron-squirrel-startup";
import updateElectron from "update-electron-app";
import log from "electron-log";

export default class Updater {
  constructor() {}

  setupAll() {
    if (isSquirrelStartup) app.quit();

    // Setup update checks
    updateElectron({
      repo: "m4tt1mus/appname", // GitHub repo to check
      updateInterval: "10 minutes",
      logger: log,
      notifyUser: true,
    });
  }
}
