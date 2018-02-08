import React, { Component } from 'react';
import Calculator from './calculator/Calculator';
import Login from './login/Login';

class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="app">
        <Login />
=======
  state = {
    items: []
  };

  addItem = (item) => {
    const items = this.state.items;
    const modifiedItems = [ ...items, item ];
    this.setState({ items: modifiedItems })
  }

  removeItem = (index) => {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
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
            <div className="col">Portion</div>
            <div className="col"/>
          </div>
          <List items={this.state.items} onRemoveItem={this.removeItem}/>  
        </div>
        <Form onSubmit={this.addItem} /> 
        <Summ items={this.state.items} />
>>>>>>> eb4946d75c87c1ccb6c9b1ce268786c76309af19
      </div>
    );
  }
}

export default App;
