import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ChatPage from './pages/ChatPage/ChatPage';

import './App.scss';

function App() {
  return (
    <div className={'app'}>
      XarXsDev Inc.
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
