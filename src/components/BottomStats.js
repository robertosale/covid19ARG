import React, { Component } from 'react';
import logoInfectados from "./img/infectados.png";
import logoMuertos from "./img/muertos.png";
import logoRecuperados from "./img/recuperados.png";
class BottomStats extends Component {
    render() {
        const {total}=this.props;
        return (

            <div class="col-12 col-lg-6 container align-self-start">
                <div class="btn-block row mx-auto ">
                    <div className='d-none d-lg-block col-lg-12 col-3 p-0 m-0'>
                        <h1>Total</h1>
                    </div>

                    <div className='card-stats col-lg-12 col-3 btn btn-secondary pr-2 pl-2 pb-0 pt-0'>
                        <div className="row">
                            <img src={logoInfectados} className="col-6 col-sm-12"/>
                            <p className="m-0 d-none d-sm-block">Infectados</p>
                            <h5 className="col-6 col-sm-12">{total[1]}</h5>
                        </div>
                    </div>
                    
                    <div className='card-stats col-lg-12 col-3 btn btn-danger pr-2 pl-2 pb-0 pt-0'>
                        <div className="row">
                            <img src={logoMuertos} className="col-6 col-sm-12" />
                            <p className="m-0 d-none d-sm-block">Fallecidos</p>
                            <h5 className="col-6 col-sm-12"> {total[2]}</h5>
                        </div>
                    </div>

                    
                    
                    <div className='card-stats col-lg-12 col-3 btn btn-success pr-2 pl-2 pb-0 pt-0'>
                        <div className="row">
                            <img src={logoRecuperados} className="col-6 col-sm-12" />
                            <p className="m-0 d-none d-sm-block">Recuperados</p>
                            <h5 className="col-6 col-sm-12">{total[3]}</h5>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default BottomStats;