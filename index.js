const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

function createWindow () {
  mainWindow = new BrowserWindow({width: 1024, height: 768})
  mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  //mainWindow.webContents.openDevTools()

  mainWindow.setResizable(false)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
