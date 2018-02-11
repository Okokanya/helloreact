import React, { Component } from 'react';

import './ui.css';

class Button extends Component {
  render() {
    return (
      <button
        className={`ui-button ${!this.props.disabled && this.props.style} ${this.props.disabled && 'disabled'}`}
        disabled={this.props.disabled}
        onClick={e => { if (!this.props.disabled) this.props.onClick(e); }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
