const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      webSecurity: false,
      allowFileAccess: true,
      preload: path.join(__dirname, "preload.js")
    }
  })

  if (process.env.NODE_ENV === "development") {
    console.log("Loading Vite development server...")
    win.loadURL("http://localhost:5173")
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, "../.vite/build/renderer/index.html"))
  }
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// src/main.js
ipcMain.handle('login', async (_, { email, password }) => {
  const response = await fetch('https://nideriji.cn/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'OhApp/3.6.12 Platform/Android'
    },
    body: JSON.stringify({ email, password })
  });
  return response.json();
});