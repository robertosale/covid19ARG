import React, { Component } from 'react';
import './App.css';
import BottomStats from './components/BottomStats'
import pais from './svgs/pais'

import ContainerProvincias from './components/ContainerProvincias';

class App extends Component {
  state = {
      
    }
  render() { 
    //console.log("pais:::::::::::::",pais)
    return (
      <div className="App">
        <header className="App-header">
          <h2>CoronaVirus ARG</h2>
         <ContainerProvincias pais={pais} />
         <BottomStats/>
        </header>

      </div>
    );
  }
}
 
export default App;
