import React, { Component } from 'react';
import './formNamaAlias.css';

class formNamaAlias extends Component {
  render() {
    return (
      <div className="form__inputNamaAlias">
        <div className="form__inputNamaContainer">Nama Lengkap dan Alias</div>
        <input className="form__inputNamaField" type="text" />
        <div className="slash">/</div>
        <input className="form__inputNamaFieldAlias" type="text" />         
      </div>
    );
  }
}

export default formNamaAlias;