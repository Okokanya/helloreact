import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';

import * as routes from './routes';
import Calculator from './components/calculator/calculator';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import firebase from './firebase';

const initialState = { user: null };
class App extends Component {
  state = initialState;

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) this.setState(() => ({ user }));
      else this.props.history.push('/signin');
    });
  }

  render() {
    return (
      <div className="app">
        <div className="navigation-bar">
          <h2>user: {this.state.user && this.state.user.email}</h2>
        </div>
        <Route
          exact path={routes.SIGN_UP}
          component={() => <Signup />}
        />
        <Route
          exact path={routes.SIGN_IN}
          component={() => <Signin />}
        />
        {this.state.user &&
          <Route
            exact path={routes.CALCULATOR}
            component={() => <Calculator />}
          />
        }
      </div>
    );
  }
}

const AppWithRouter =  withRouter(App);

const AppRouter = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default AppRouter;
