import React, { Component } from 'react';

const initialState = { error: false };

class Form extends Component {
  state = initialState;

  handleInputChange = (type, value) => {
    const formattedValue = (type === 'name') ? value : Number(value);
    this.setState({
      [type]: formattedValue,
      error: false
    });
  }

  handleSubmitForm = () => {
    if (isNaN(this.state.fat) || isNaN(this.state.carbs) || isNaN(this.state.prots) || isNaN(this.state.portion)) {
      this.setState({ error: true });
    } else {
      this.props.onSubmit(this.state);
      this.setState(initialState);
    }
  }

  render() {
    const formClass = this.state.error ? "addform error" : "addform";
    return (
      <div className={formClass}>
        <div className="colwide">
          <input
            onChange={e => {this.handleInputChange('name', e.target.value);}}
          />
        </div>
        <div className="col">
          <input
            onChange={e => {this.handleInputChange('fat', e.target.value);}}
          />
        </div>
        <div className="col">
          <input
            onChange={e => {this.handleInputChange('carbs', e.target.value);}}
          />
        </div>
        <div className="col">
          <input
            onChange={e => {this.handleInputChange('prots', e.target.value);}}
          />
        </div>
        <div className="col">
          <input
            onChange={e => {this.handleInputChange('portion', e.target.value);}}
          />
        </div>
        <div className="col">
          <button onClick={this.handleSubmitForm} >+</button>
        </div>
      </div>
    );
  }
}

export default Form;
