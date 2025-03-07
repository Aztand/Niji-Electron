const { app, BrowserWindow, ipcMain } = require("electron") // 添加ipcMain导入
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      webSecurity: false,
      allowFileAccess: true,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // 配置IPC通信
  configureIPC()

  if (process.env.NODE_ENV === "development") {
    console.log("Loading Vite development server...")
    win.loadURL("http://localhost:5173/#/login") // 直接打开登录页
    win.webContents.openDevTools()
  } else {
    // 修正生产环境路径
    win.loadFile(
      path.join(__dirname, "../.vite/build/renderer/index.html"),
      { hash: '/login' }
    )
  }
}

// 单独封装IPC配置
function configureIPC() {
  ipcMain.handle('login', async (_, { email, password }) => {
    const response = await fetch('https://nideriji.cn/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'OhApp/3.6.12 Platform/Android'
      },
      body: JSON.stringify({ email, password })
    })
    return response.json()
  })
}

app.whenReady().then(createWindow)

// ...保持其他代码不变