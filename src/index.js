//! Importing Modules
const { app, BrowserWindow } = require('electron');
const path = require('path');
if (require('electron-squirrel-startup')) {
  app.quit();
}

//! Declaring Utilites
const window_width = 700;
const window_height = 660;

const window_specialties = {
  width: window_width,
  maxWidth: window_width,
  minWidth: window_width,
  height: window_height,
  maxHeight: window_height,
  minHeight: window_height,
  autoHideMenuBar: true,
  title: "Tic-Tac-Toe",
  icon: path.join(__dirname, 'icon.ico')
}


//! Create the browser window.
const createWindow = () => {
  const mainWindow = new BrowserWindow(window_specialties);

  //! Displaying The files
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};


//! Making Some Basic Settings
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
