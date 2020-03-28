import React, { Component } from 'react';
import './App.css';
import BottomStats from './components/BottomStats'
import pais from './svgs/pais'
import ReactGA from 'react-ga';

import ContainerProvincias from './components/ContainerProvincias';

const stats =  [
  { columns: ["CABA", "194", "4", "3", "187"] },
  { columns: ["Buenos Aires", "161", "4", "1", "156"] },
  { columns: ["Chaco", "55", "4", "0", "51"] },
  { columns: ["Santa Fe", "54", "0", "0", "54"] },
  { columns: ["Córdoba", "53", "0", "0", "53"] },
  { columns: ["Tierra del fuego", "14", "0", "0", "14"] },
  { columns: ["Santa Cruz", "9", "0", "0", "9"] },
  { columns: ["Tucumán", "9", "0", "0", "9"] },
  { columns: ["Mendoza", "7", "0", "0", "7"] },
  { columns: ["Neuquén", "7", "0", "0", "7"] },
  { columns: ["Entre Ríos", "6", "0", "0", "6"] },
  { columns: ["San Luís", "6", "0", "0", "6"] },
  { columns: ["Río Negro", "4", "0", "0", "4"] },
  { columns: ["Corrientes", "3", "0", "0", "3"] },
  { columns: ["Jujuy", "3", "0", "0", "3"] },
  { columns: ["La Pampa", "1", "0", "0", "1"] },
  { columns: ["Misiones", "1", "0", "0", "1"] },
  { columns: ["Salta", "1", "0", "0", "1"] },
  { columns: ["Santiago del Estero", "1", "0", "0", "1"] },
  { columns: ["TOTAL", "589", "12", "4", "573"] }
];

class App extends Component {
  state = {
      
    }

  componentDidMount(){
    ReactGA.initialize('UA-162056074-1');
    ReactGA.pageview('/homepage');
  }

  render() { 
    const total = stats[stats.length-1].columns;
    //console.log("pais:::::::::::::",pais)
    return (

      <div className="App container-fluid">
        <h3 className="mb-0">COVID-19 Argentina</h3>
        <div className=" row">
      
         <ContainerProvincias pais={pais} stats={stats}/>
         <BottomStats total ={total}/>

         <div className="col-12 fixed-bottom"><span>Developed by <a href="https://www.linkedin.com/in/roberto-moises-sale-563829187/">Robert</a> y <a href="https://www.linkedin.com/in/benja-montero-9238a1119/">Benja</a> </span></div>
        </div>
     
      </div>
    );
  }
}
 
export default App;
