import React, { Component } from 'react';
import './formInput.css';

class formInput extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="form__inputFlex">
        <div className="form__inputNamaContainer">{this.props.title}</div>
        <input className="form__inputNamaField" type="text" />
      </div>
    );
  }
}

export default formInput;