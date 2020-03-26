import React, { Component, Fragment } from 'react';


class Provincia extends Component {
    state = {  }
    render() { 
        const {provincia} = this.props;
        //console.log("PROVINCIA::::::::",provincia.path)
        return ( 
                <>
                    <g onClick={() => console.log("HIZO CLICK!!!!!!!!!!!!!!!!!",provincia.nombre)}>
                    {provincia.path};
                    </g>
                </>

            

         );
    }
}
 
export default Provincia;