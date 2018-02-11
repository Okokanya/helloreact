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

class Signin extends Component {
  state = INITIAL_STATE

  resetError = () => {
    if (Object.keys(this.state.error).length > 0) this.setState(INITIAL_STATE);
  }

  handleFormError = error => this.error = error;

  handleSubmit = fields => {
    if (!this.error.isValid) {
      this.setState({ error: this.error });
      return;
    }
    const { email, password } = fields;
    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(answer => {
        window.location.replace('/');
      })
      .catch(error => {
        this.setState({ error: { ...INITIAL_STATE.error, message: error.message } });
      });
  }

  render() {
    const validation = { required: ['email', 'password'] };
    const fieldIsValid = fieldName => !~this.state.error.invalidFields.indexOf(fieldName);
    return (
      <AuthContainer>
        <div className="auth-form-header">
          <h2>Sign in!</h2>
          <div><Link to="/signup">Wanna sign up?!</Link></div>
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
          <SubmitButton style="fade">Enter</SubmitButton>
          <div>{this.state.error.message && <div className="auth-form-errormessage">{this.state.error.message}</div>}</div>
        </Form>
      </AuthContainer>
    );
  }
}

export default Signin;
