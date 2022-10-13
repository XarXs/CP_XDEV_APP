import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
        XarXsDev Inc.
      <Router>
        <Route path={'/'} exact component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
