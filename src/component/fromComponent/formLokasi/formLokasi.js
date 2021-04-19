import React, { Component } from 'react';
import DropDownForm from '../dropDownForm/dropDownForm';
import './formLokasi.css';

class formLokasi extends Component {
  render() {
    return (
      <div className="form__lokasi__container">
        <h3>Lokasi</h3>
        <div className="form__lokasi">
          <DropDownForm 
            title="Kantor Desa/Kelurahan"
            content={["Wedoro", "Sidomulyo", "Karang Konang", "Pepelegi"]}
          />
          <DropDownForm 
            title="Kecamatan"
            content={["Waru", "Magersari", "Winong"]}
          />   
          <DropDownForm 
            title="Kabupaten/Kota"
            content={["Sidoarjo", "Surabaya", "Pati", "Mojokerto", "Lamongan"]}
          />  
        </div>
      </div>
    );
  }
}

export default formLokasi;