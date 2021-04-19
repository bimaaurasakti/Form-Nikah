import React, { Component } from 'react';
import './formTitle.css';

class formTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="formTitle">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default formTitle;