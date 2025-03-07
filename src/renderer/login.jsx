import React, { useEffect, useRef } from 'react'
import './login.css'
import logo from './assets/logo.png'
import bg from './assets/bg.png'

export default function Login() {
  const passwordRef = useRef(null)
  const rememberRef = useRef(null)

  useEffect(() => {
    const adjustRememberPosition = () => {
      if (passwordRef.current && rememberRef.current) {
        const aRight = passwordRef.current.offsetLeft + passwordRef.current.offsetWidth
        rememberRef.current.style.right = `${
          passwordRef.current.parentElement.offsetWidth - aRight
        }px`
      }
    }
    adjustRememberPosition()
    window.addEventListener('resize', adjustRememberPosition)
    return () => window.removeEventListener('resize', adjustRememberPosition)
  }, [])

  // 登录逻辑（需要与preload配合）
  const handleLogin = async () => {
    // 调用electronAPI.login
  }

  return (
    <div className="login-container">
      {/* 保持原HTML结构 */}
    </div>
  )
}