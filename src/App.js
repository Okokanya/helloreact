import React, { Component } from 'react';
import Calculator from './components/calculator/Calculator';
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
