import React from 'react';
import logo from './argMap.svg';
import './App.css';
import MapaArgentina from './components/MapaArgentina'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CoronaVirus ARG</h1>
       <MapaArgentina/>
      </header>
    </div>
  );
}

export default App;
