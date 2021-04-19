import React, { Component } from 'react';
import './formJenisKelamin.css';

class formJenisKelamin extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="form__inputFlex">
        <div className="form__inputNamaContainer">{this.props.title}</div>
        <div className="form__radioButton">
          <input type="radio" id={this.props.left} name={this.props.title} value={this.props.left} />
          <label for={this.props.left}>{this.props.left}</label>
        </div>
        <div className="form__radioButton">
          <input type="radio" id={this.props.right} name={this.props.title} value={this.props.right} />
          <label for={this.props.right}>{this.props.right}</label>
        </div>
      </div>
    );
  }
}

export default formJenisKelamin;