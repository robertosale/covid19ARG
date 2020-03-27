import React, { Component,Fragment } from 'react';
import { Tooltip } from 'reactstrap';



class Provincia extends Component {
    state = { tooltipOpen: false }

 

    render() { 

             
        const {tooltipOpen} = this.state;
        const {provincia} = this.props;

        const toggle = ()=> this.setState({tooltipOpen:!tooltipOpen})

        //console.log("provincia::::::::",provincia.path)
        return ( 
                <Fragment>
                    <g onClick={() => console.log("HIZO CLICK!!!!!!!!!!!!!!!!!",provincia.nombre)} id={provincia.nombre.replace(/\s/g, '').toLowerCase()}>
                        {provincia.path};
                        <Tooltip placement="right" isOpen={tooltipOpen} target={provincia.nombre.replace(/\s/g, '').toLowerCase()} toggle={toggle}>
                        Hola Pais
                        </Tooltip>
                    </g>
                </Fragment>

            

         );
    }
}
 
export default Provincia;