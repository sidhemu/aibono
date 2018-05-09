import React, { Component } from 'react';
import './App.css';

import Billing from './component/billing/billing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Practice</h1>
        </header>
          <div>
            <Billing />
          </div>
      </div>
    );
  }
}

export default App;
