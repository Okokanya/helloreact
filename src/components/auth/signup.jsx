import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContainer from './authContainer';
import Form from '../form/form';
import SubmitButton from '../form/submitButton';
import firebase from '../../firebase';

const INITIAL_STATE = {
  error: {
    isValid: true,
    message: '',
    invalidFields: []
  }
};

class Signup extends Component {
  state = INITIAL_STATE;

  resetError = () => {
    if (Object.keys(this.state.error).length > 0) this.setState(state => ({ ...INITIAL_STATE, success: state.success }));
  }

  handleSubmit = fields => {
    if (!this.error.isValid) {
      this.setState({ error: this.error });
      return;
    }
    firebase.auth.createUserWithEmailAndPassword(fields.email, fields.password)
      .then(answer => {
        this.setState({ success: true });
        window.location.replace('/');
      })
      .catch(error => {
        this.setState({ error: { ...INITIAL_STATE.error, message: error.message } });
      });
  }

  handleFormError = error => this.error = error;

  render() {
    const validation = {
      required: ['email', 'password', 'password-repeat'],
      match: ['password', 'password-repeat']
    };
    const fieldIsValid = fieldName => (!~this.state.error.invalidFields.indexOf(fieldName));
    if (this.state.success) {
      return (
        <AuthContainer>
          <h2>Got it!</h2>
          <h2><Link to="/signin">Now go sign in</Link></h2>
          <h2>(and check your email)</h2>
        </AuthContainer>
      );
    }

    return (
      <AuthContainer>
        <div className="auth-form-header">
          <h2>Sign up!</h2>
          <div><Link to="/signin">Wanna sign in?!</Link></div>
        </div>
        <Form
          onSubmit={this.handleSubmit}
          onError={this.handleFormError}
          onChange={this.resetError}
          validation={validation}
          className="auth-form"
          submitWithError
        >
          <input name="email" type="text" placeholder="email" className={!fieldIsValid('email') ? 'error' : ''} />
          <input name="password" type="password" placeholder="password" className={!fieldIsValid('password') ? 'error' : ''} />
          <input name="password-repeat" type="password" placeholder="password one more time" className={!fieldIsValid('password-repeat') ? 'error' : ''} />
          <SubmitButton style="fade">Register</SubmitButton>
          <div>{this.state.error.message && <div className="auth-form-errormessage">{this.state.error.message}</div>}</div>
        </Form>
      </AuthContainer>
    );
  }
}

export default Signup;
