// src/renderer/Login.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Login.css';
import logo from './assets/logo.png';
import bg from './assets/bg.png';
import { ipcRenderer } from 'electron';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPw, setRememberPw] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  useEffect(() => {
    // 实现原版的右侧对齐逻辑
    const adjustRememberPosition = () => {
      if (passwordRef.current && rememberRef.current) {
        const aRight = passwordRef.current.offsetLeft + passwordRef.current.offsetWidth;
        rememberRef.current.style.right = `${passwordRef.current.parentElement.offsetWidth - aRight}px`;
      }
    };

    adjustRememberPosition();
    window.addEventListener('resize', adjustRememberPosition);
    return () => window.removeEventListener('resize', adjustRememberPosition);
  }, []);

  const handleLogin = async () => {
    setErrorVisible(false);
    if (!email || !password) {
      setErrorVisible(true);
      return;
    }

    try {
      const result = await ipcRenderer.invoke('login', { email, password, remPw: rememberPw });
      
      if (result?.token) {
        // 处理登录成功逻辑...
      } else {
        setErrorVisible(true);
      }
    } catch (err) {
      setErrorVisible(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="login-container">
      <div className="background-column" style={{ backgroundImage: `url(${bg})` }} />
      
      <div className="login-column">
        <div className="login-box">
          <img src={logo} alt="Logo" className="logo" />
          
          <div className="login-form">
            <div className="input-group">
              <input
                type="email"
                className="text-input"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                className="text-input"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                ref={passwordRef}
              />
              
              <div 
                className="remember-me" 
                ref={rememberRef}
                onKeyPress={handleKeyPress}
              >
                <input
                  type="checkbox"
                  id="rememberCheck"
                  checked={rememberPw}
                  onChange={(e) => setRememberPw(e.target.checked)}
                />
                <label htmlFor="rememberCheck">记住密码</label>
              </div>
              
              <p className={`error-tip ${errorVisible ? 'visible' : ''}`}>
                ! 账号或密码错误
              </p>
            </div>

            <div className="input-group">
              <button 
                className="login-button"
                onClick={handleLogin}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}