import React, { Component } from 'react';

class First extends Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        this is our first component
        <div>{this.props.pick + this.props.text}</div>
      </div>
    );
  }
}

export default First;
