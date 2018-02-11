import React, { Component } from 'react';

const INITIAL_STATE = { error: false };

class Form extends Component {
  state = INITIAL_STATE;

  handleValidateForm = () => {
    const { validation, onError } = this.props;
    if (!validation) return true;
    const { error, ...fields } = this.state;
    let invalidFields = [];
    let validationMessage = '';

    //check required fields
    if (validation.required) {
      const requiredMessage = validation.required.reduce((acc, fieldName) => {
        if (fields[fieldName]) return acc;
        invalidFields.push(fieldName);
        const messageString = `${fieldName} is required`;
        return acc ? `${acc}, ${messageString}` : messageString;
      }, validationMessage);
      validationMessage = requiredMessage;
    }

    //check matched fields
    if (validation.match) {
      const checkMatch = fieldsToMatch => fields[fieldsToMatch[0]] === fields[fieldsToMatch[1]];
      const matchArray = Array.isArray(validation.match[0]) ? validation.match : [validation.match];
      matchArray.forEach(matchPair => {
        if (checkMatch(matchPair)) return;
        const matchMessage = `${matchPair[0]} and ${matchPair[1]} do not match`;
        invalidFields.push(matchPair[0]);
        invalidFields.push(matchPair[1]);
        validationMessage = validationMessage ? `${validationMessage}, ${matchMessage}` : matchMessage;
        return;
      });
    }

    //handle validation results
    const errorState = validationMessage
      ? {
        isValid: false,
        message: validationMessage,
        invalidFields
      }
      : {
        isValid: true,
        message: null
      };

    this.setState({ error: errorState });
    if (onError) onError(errorState);
    return validationMessage === '';
  };

  handleChangeInput = (value, name) => {
    const isStandartInput = !!value.target;
    const fieldName = isStandartInput ? value.target.name : name;
    if (!fieldName) {
      console.error("input doesn't have name attribute");
      return false;
    }
    const fieldValue = isStandartInput ? value.target.value : value;
    this.setState({
      [fieldName]: fieldValue,
      error: false
    }, () => {
      this.handleValidateForm();
      this.props.onChange && this.props.onChange(this.state.fields);
    });
  }

  handleSubmitForm = () => {
    const formIsValid = this.handleValidateForm();
    if (!formIsValid && !this.props.submitWithError) return;
    const { error, ...fields } = this.state;
    this.props.onSubmit(fields);
    this.setState(INITIAL_STATE);
  }

  render() {
    const formClass = this.state.error ? `${this.props.className} error` : this.props.className;
    const { error, ...fields } = this.state;
    return (
      <form className={formClass}>
        {this.props.children.map((child, i) => (
          React.cloneElement(child, {
            key: i,
            onChange: this.handleChangeInput,
            onSubmit: this.handleSubmitForm,
            error,
            fields
          })
        ))}
      </form>
    );
  }
}

export default Form;
