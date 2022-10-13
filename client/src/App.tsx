import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.scss';

function App() {
  return (
    <div className={"app"}>
        XarXsDev Inc.
      <Router>
        <Route path={'/'} exact component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
