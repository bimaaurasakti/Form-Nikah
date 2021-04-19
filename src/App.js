import React, { Component } from 'react';
import FormButton from './component/formButton/formButton';
import FormN1 from './component/formN1/fromN1';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form__container">
          <div className="left__content">
            <FormButton />
          </div>
            
          <div className="right__content">
            {/* ambil dari component */}
            <FormN1 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
