import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            fat={item.fat}
            carbs={item.carbs}
            prots={item.prots}
          />
        ))}
      </ul>
    );
  }
}

export default List;
