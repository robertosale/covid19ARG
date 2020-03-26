import React, { Component, Fragment } from 'react';


class Provincia extends Component {
    state = {  }
    render() { 
        const {provincia} = this.props;
        console.log("PROVINCIA::::::::",provincia.path)
        return ( 
                <>
            
                    {provincia.path};
                
                </>

            

         );
    }
}
 
export default Provincia;