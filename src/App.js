import React, { Component } from 'react';
import './App.css';
import BottomStats from './components/BottomStats'
import pais from './svgs/pais'
import ReactGA from 'react-ga';

import ContainerProvincias from './components/ContainerProvincias';

const stats =  [
  { columns: ["CABA", "242", "53", "7", "181"] },
  { columns: ["Buenos Aires", "202", "15", "5", "175"] },
  { columns: ["Chaco", "64", "0", "4", "51"] },
  { columns: ["Santa Fe", "76", "0", "0", "54"] },
  { columns: ["Córdoba", "58", "1", "0", "56"] },
  { columns: ["Tierra del fuego", "18", "0", "0", "14"] },
  { columns: ["Santa Cruz", "8", "0", "0", "9"] },
  { columns: ["Tucumán", "15", "0", "0", "9"] },
  { columns: ["Mendoza", "8", "0", "1", "7"] },
  { columns: ["Neuquén", "11", "0", "0", "7"] },
  { columns: ["Entre Ríos", "11", "0", "0", "6"] },
  { columns: ["San Luis", "5", "0", "0", "6"] },
  { columns: ["Río Negro", "7", "1", "1", "5"] },
  { columns: ["Corrientes", "9", "0", "0", "3"] },
  { columns: ["Jujuy", "3", "0", "0", "3"] },
  { columns: ["La Pampa", "1", "0", "0", "1"] },
  { columns: ["Misiones", "2", "0", "0", "1"] },
  { columns: ["Salta", "1", "0", "0", "1"] },
  { columns: ["Santiago del Estero", "2", "0", "0", "1"] },
  { columns: ["TOTAL", "745", "80", "18", "620"] }
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
    console.log("window.innerHeight:::::::::::::",window.innerHeight)
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
