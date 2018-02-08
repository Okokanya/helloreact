import React, { Component } from 'react';
import Calculator from './calculator/Calculator';
import Login from './login/Login';

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
