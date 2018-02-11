import React, { Component } from 'react';
import './auth.css';

class AuthContainer extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AuthContainer;
