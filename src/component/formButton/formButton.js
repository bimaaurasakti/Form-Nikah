import React, { Component } from 'react';
import './formButton.css';

class formButton extends Component {
  render() {
    return (
      <div>
        <button className="form__button" id="button1">
          <span>N - 1</span>
        </button>
        <button className="form__button bgGrey" id="button2">
          <span>N - 2</span>
        </button>
        <button className="form__button bgGrey" id="button3">
          <span>N - 3</span>
        </button>
        <button className="form__button bgGrey" id="button4">
          <span>N - 4</span>
        </button>
        <button className="form__button bgGrey" id="button5">
          <span>N - 5</span>
        </button>
        <button className="form__button bgGrey" id="button6">
          <span>N - 6</span>
        </button>
      </div>
    );
  }
}

export default formButton;
