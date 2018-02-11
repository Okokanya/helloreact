import React, { Component } from 'react';

import Button from '../ui/button';

class SubmitButton extends Component {
  render() {
    return (
      <Button onClick={e => { e.preventDefault(); this.props.onSubmit(e); }} {...this.props}>{this.props.children}</Button>
    );
  }
}

export default SubmitButton;
