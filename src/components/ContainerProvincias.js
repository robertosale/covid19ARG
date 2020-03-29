import React, { Component } from 'react';
import Provincia from './Provincia'




class ContainerProvincias extends Component {
  state = {}



  render() {

    const height = window.innerHeight;
    const { pais ,stats} = this.props;

    return (
      <div className="container-mapa col-12 col-lg-6 p-0 " style={{maxHeight:`${height}px`}}>

      <svg className='mapa' viewBox="0 0 1948.2 3756.13" {...this.props}>
        <defs>
          <style>
            {
              ".cls-1,.cls-2,.cls-3,.cls-4{;stroke:#646464;stroke-width:2.13px}.cls-1,.cls-2,.cls-3{stroke-linecap:square}.cls-1,.cls-2{stroke-linejoin:bevel}.cls-1,.cls-3,.cls-4{fill-rule:evenodd}.cls-3,.cls-4{stroke-linejoin:round}"
            }
          </style>
        </defs>
        <title>{}</title>
        <g id="prefix__Capa_2" data-name="Capa 2">
          <g id="prefix__svg2">
            <g id="prefix__layer1"></g>

            {pais.map(prov => <Provincia provincia={prov} stats={stats} />)}

          </g>
        </g>

      </svg>
      </div>


    );
  }
}

export default ContainerProvincias;