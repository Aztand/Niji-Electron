import React from 'react'
import { createRoot } from 'react-dom/client'
import { 
  HashRouter as Router,
  Route,
  Routes,
  Navigate 
} from 'react-router-dom'
import Login from './login' // 导入新建的登录组件
import MainInterface from './MainInterface' // 需要创建的主界面组件

// 更新渲染方式为React 18标准
const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainInterface />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
)