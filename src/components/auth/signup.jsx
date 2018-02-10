import React, { Component } from 'react';
import { auth } from '../../firebase';
import './auth.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password)
      .then((answer) => {
        console.log('login', answer);
      })
      .catch((error) => {
        this.setState(byPropKey('error', error.message));
      });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === '' || password === '';

    return (
      <div className="login-form">
        <h1>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          {error}
          <div className="login-row">
            <input 
              type="login"
              placeholder="email"
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
            />
          </div>
          <div className="login-row">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
            />
          </div>
          <button type="submit" disabled={isInvalid} >Register</button>
        </form>
      </div>
    )
  }
}

export default Login;
