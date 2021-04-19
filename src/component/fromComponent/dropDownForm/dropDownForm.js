import React, { Component } from 'react';
import './dropDownForm.css';

class dropDownForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    const elements = this.props.content;

    const items = []
  
    for (const [ , value] of elements.entries()) {
      items.push(<option value={value}> {value} </option>)
    }
  
    return (
      <div className="dropdown__container">
        <div className="dropdown__title">{this.props.title}</div>
        <select id="dropdown__input" name="desa">
          {items}
        </select>
      </div>
    );
  }
}

export default dropDownForm;