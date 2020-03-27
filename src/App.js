import React, { Component } from 'react';
import './App.css';
import BottomStats from './components/BottomStats'
import pais from './svgs/pais'
import ReactGA from 'react-ga';

import ContainerProvincias from './components/ContainerProvincias';

class App extends Component {
  state = {
      
    }

  initializeReactGA(){
    ReactGA.initialize('UA-162056074-1');
    ReactGA.pageview('/homepage');
  }

  render() { 
    //console.log("pais:::::::::::::",pais)
    return (
      <div className="App container">
        <h2>CoronaVirus ARG</h2>
        <div className=" row">
      
         <ContainerProvincias pais={pais} />
         <BottomStats/>
         <div className="col-12 fixed-bottom"><span>Powered by IngeniArt</span></div>
        </div>
     
      </div>
    );
  }
}
 
export default App;
