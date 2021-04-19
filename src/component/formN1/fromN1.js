import React, { Component } from 'react';
import FormLokasi from '../fromComponent/formLokasi/formLokasi';
import FormNamaAlias from '../fromComponent/formNamaAlias/formNamaAlias';
import FormTitle from '../fromComponent/formTitle/formTitle';
import FormJenisKelamin from '../fromComponent/formJenisKelamin/formJenisKelamin';
import FormInput from '../fromComponent/formInput/formInput';
import FormTanggal from '../fromComponent/formTanggal/formTanggalLahir';
import './formN1.css';

class fromN1 extends Component {
  render() {
    return (
      <div>
        <div className="n1__header">
          <h1>Surat Keterangan Untuk Menikah</h1>
        </div>
        <div className="n1__body">
          <FormLokasi />
          
          <FormTitle title="Data Diri" />
          <FormNamaAlias />
          <FormJenisKelamin title="Jenis Kelamin" left="Laki-laki" right="Perempuan" />
          <FormTanggal />
          <FormInput title="Warganegara" />
          <FormInput title="Pekerjaan" />
          <FormInput title="Tempat Tinggal" />
          <FormJenisKelamin title="Bin/binti" left="Bin" right="Binti" />

          <FormTitle title="Status Perkawinan" />
          <FormInput title="Laki-laki (jejaka, duda, beristri dan banyak istri)" />
          <FormInput title="Wanita (Perawan, Janda)" />
          <FormInput title="Nama istri/suami terdahulu" />
        </div>
      </div>
    );
  }
}

export default fromN1;