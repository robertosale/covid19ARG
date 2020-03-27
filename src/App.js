import React, { Component } from 'react';
import logo from './argMap.svg';
import './App.css';

import pais from './svgs/pais'

import ContainerProvincias from './components/ContainerProvincias';

class App extends Component {
  state = {  }
  render() { 
    //console.log("pais:::::::::::::",pais)
    return (
      <div className="App">
        <header className="App-header">
          <h1>CoronaVirus ARG</h1>
         <ContainerProvincias pais={pais} />
         
        </header>
      </div>
    );
  }
}
 
export default App;
