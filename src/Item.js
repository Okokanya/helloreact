import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li className="item">
        <div className="colwide">{this.props.name}</div>
        <div className="col">{this.props.fat}</div>
        <div className="col">{this.props.carbs}</div>
        <div className="col">{this.props.prots}</div>
        <div className="col">
          <button className="button-del">–</button>
        </div>
      </li>
    );
  }
}

export default Item;
