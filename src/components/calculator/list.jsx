import React, { Component } from 'react';
import Item from './item';

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
            portion={item.portion}
            onRemoveItem={(e) => {this.props.onRemoveItem(index)}}
          />
        ))}
      </ul>
    );
  }
}

export default List;
