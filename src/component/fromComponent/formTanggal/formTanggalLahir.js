import React, { Component } from 'react';
import './formTanggalLahir.css';

class formTanggalLahir extends Component {
  render() {
    return (
      <div className="form__inputFlex">
        <div className="form__inputNamaContainer">Tempat, Tanggal Lahir</div>
        <input className="form__inputNamaKota" type="text" />
        <div className="koma">, </div>
        <input className="form__inputTanggal" type="date" />
      </div>
    );
  }
}

export default formTanggalLahir;