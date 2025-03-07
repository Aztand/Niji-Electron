import React from 'react';
import { createRoot } from 'react-dom/client';
import { 
  HashRouter as Router,
  Route,
  Routes,
  Navigate 
} from 'react-router-dom';
import Login from './login.jsx';
import MainInterface from './MainInterface.jsx';

const root = createRoot(document.getElementById('root'));

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
);