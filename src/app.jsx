import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import * as routes from './routes';
import Calculator from './components/calculator/calculator';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

const initialState = { user: null };

class App extends Component {
  state = initialState;

  render() {
    return (
      <Router>
        <div className="app">
          <div className="navigation-bar">
            <ul>
              <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
              <li><Link to={routes.CALCULATOR}>Calculator</Link></li>
              <li><Link to={routes.ACCOUNT}>Account</Link></li>
            </ul>
          </div>
          <Route
            exact path={routes.SIGN_UP}
            component={() => <Signup />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <Signin />}
          />
          <Route
            exact path={routes.CALCULATOR}
            component={() => <Calculator />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
