import React, { Component } from 'react';
import './calculator.css';
import List from './list';
import Summ from './summ';
import Form from './form';
import img from './img/find.jpg';

class Calculator extends Component {
  state = {
    items: []
  };

  addItem = item => {
    const items = this.state.items;
    const modifiedItems = [ ...items, item ];
    this.setState({ items: modifiedItems });
  }

  render() {
    return (
      <div className="app">
        <h1>Food List</h1>
        <div className="points">
          <div className="tableheader">
            <div className="colwide">Food</div>
            <div className="col">Fat</div>
            <div className="col">Carb</div>
            <div className="col">Protein</div>
            <div className="col">Portion</div>
            <div className="col" />
          </div>
          <List items={this.state.items} />
        </div>
        <Form onSubmit={this.addItem} />
        <Summ items={this.state.items} />
      </div>
    );
  }
}

export default Calculator;
