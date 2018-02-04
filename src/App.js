import React, { Component } from 'react';
import './App.css';
import List from './List';
import Summ from './Summ';
import Form from './Form';
import img from './img/find.jpg';



class App extends Component {
  state = {
    items: []
  };

  addItem = (item) => {
    const items = this.state.items;
    const modifiedItems = [ ...items, item ];
    this.setState({ items: modifiedItems })
  }

  render() {
    return (
      <div className="app">
        <img src={img} width={500} />
        <h1>Food List</h1>
        <div className="points">
          <div className="tableheader">
            <div className="colwide">Food</div>
            <div className="col">Fat</div>
            <div className="col">Carb</div>
            <div className="col">Protein</div>
            <div className="col"></div>
          </div>
          <List items={this.state.items} />  
        </div>
        <Form onSubmit={this.addItem} /> 
        <Summ items={this.state.items} />
      </div>
    );
  }
}

export default App;
