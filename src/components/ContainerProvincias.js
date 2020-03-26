import React, { Component } from 'react';
import Provincia from './Provincia'




class ContainerProvincias extends Component {
    state = {  }

    

    render() { 
      const {pais}=this.props;

        return (

          <svg width='40vh' viewBox="0 0 1948.2 3756.13" {...this.props}>
      <defs>
        <style>
          {
            ".prefix__cls-1,.prefix__cls-2,.prefix__cls-3,.prefix__cls-4{fill:#ccc;stroke:#646464;stroke-width:2.13px}.prefix__cls-1,.prefix__cls-2,.prefix__cls-3{stroke-linecap:square}.prefix__cls-1,.prefix__cls-2{stroke-linejoin:bevel}.prefix__cls-1,.prefix__cls-3,.prefix__cls-4{fill-rule:evenodd}.prefix__cls-3,.prefix__cls-4{stroke-linejoin:round}"
          }
        </style>
      </defs>
      <title>{}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__svg2">
          <g id="prefix__layer1"></g>
          {pais.map(mapaProvincia => <Provincia provincia={mapaProvincia}/>)}
          </g>
        </g>
      
    </svg>
          
            
        );
    }
}
 
export default ContainerProvincias;