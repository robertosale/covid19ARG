import React, { Component,Fragment } from 'react';
import { Tooltip, Popover, PopoverHeader, PopoverBody } from 'reactstrap';



class Provincia extends Component {
    state = { popoverOpen: false }

 

    render() { 

             
        const {popoverOpen} = this.state;
        const {provincia} = this.props;

        const toggle = ()=> this.setState({popoverOpen:!popoverOpen})
        const provinciaId = provincia.nombre.replace(/\s/g, '').toLowerCase();

        //console.log("provincia::::::::",provincia.path)
        return ( 
                <Fragment>
                    <g onClick={() => console.log("HIZO CLICK!!!!!!!!!!!!!!!!!",provincia.nombre)} id={provinciaId}>
                        {provincia.path};
                        
                        <Popover placement="bottom" isOpen={popoverOpen} target={provinciaId} trigger="hover" toggle={toggle}>
                            <PopoverHeader>Popover Title</PopoverHeader>
                            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                        </Popover>

                    </g>
                </Fragment>

            

         );
    }
}
 
export default Provincia;