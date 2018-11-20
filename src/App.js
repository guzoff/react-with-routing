import React, { Component } from 'react';
import './App.css';
import FourOFour from './pages/FourOFour.js';
import Login from './pages/Login.js';
import Workspace from './pages/Workspace.js';

/*
 * Public routes:
 *   /       - Redirect to login page or workspace depending on authentication status.
 *   /login  - Login page. Redirect to workspace if authenticated.
 *   /logout - Remove authentication and redirect to login page with "you have signed out" message.
 *
 * Private routes:
 *   /workspace         - Workspace page. Redirect to login if not authenticated.
 *   /workspace/subpage - Workspace subpage. Redirect to login if not authenticated.
 */

class App extends Component {
  state = {
    // fake authtoken from sessionStorage
    authToken: sessionStorage.getItem('authToken')
  };

  // Usage: this.setAuth(true) or this.setAuth(false)
  setAuth = value => {
    value = Boolean(value) || '';
    sessionStorage.setItem('authToken', value);
    this.setState({ authToken: value });
  };
  render() {
    return (
        <>
          <header className="header">
            {/* Render workspace links when logged in */}
          </header>
          <main className="main">
            {/* Define routes here */}
          </main>
        </>
    );
  }
}

export default App;
