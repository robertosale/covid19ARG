import React, { Component } from 'react';
import logoInfectados from "./img/infectados.png";
import logoMuertos from "./img/muertos.png";
import logoRecuperados from "./img/recuperados.png";
class BottomStats extends Component {
    render() {
        return (
            <div class="fixed-bottom ">
                <div class=" btn-group btn-block">
                    <div className=' btn  btn-secondary pr-2 pl-2 pb-0 pt-0 ml-2'>
                    <img src={logoInfectados} />
                        <p className="m-0 h6">Infectados</p>
                        <h5>35</h5>
                    </div>
                    <div className='btn  btn-danger m-0 pr-2 pl-2 pb-0 pt-0 ml-2 mr-2' >
                    <img src={logoMuertos} />
                        <p className="m-0 h6">Muertos</p>
                        <h5>35</h5>
                    </div>
                    <div className=' btn  btn-success m-0 pr-2 pl-2 pb-0 pt-0  mr-2'>
                    <img src={logoRecuperados} />
                        <p className="m-0 h6">Curados</p>
                        <h5>35</h5>
                    </div>
                   
                </div>
                <div><span>Powered by IngeniArt</span></div>
            </div>
        );
    }
}

export default BottomStats;