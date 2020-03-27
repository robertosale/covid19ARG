import React, { Component,Fragment } from 'react';
import { Tooltip, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


const stats =  [
    { columns: ["CABA", "194", "4", "3", "187"] },
    { columns: ["Buenos Aires", "161", "4", "1", "156"] },
    { columns: ["Chaco", "55", "4", "0", "51"] },
    { columns: ["Santa Fe", "54", "0", "0", "54"] },
    { columns: ["Córdoba", "53", "0", "0", "53"] },
    { columns: ["Tierra del fuego", "14", "0", "0", "14"] },
    { columns: ["Santa Cruz", "9", "0", "0", "9"] },
    { columns: ["Tucumán", "9", "0", "0", "9"] },
    { columns: ["Mendoza", "7", "0", "0", "7"] },
    { columns: ["Neuquén", "7", "0", "0", "7"] },
    { columns: ["Entre Ríos", "6", "0", "0", "6"] },
    { columns: ["San Luís", "6", "0", "0", "6"] },
    { columns: ["Río Negro", "4", "0", "0", "4"] },
    { columns: ["Corrientes", "3", "0", "0", "3"] },
    { columns: ["Jujuy", "3", "0", "0", "3"] },
    { columns: ["La Pampa", "1", "0", "0", "1"] },
    { columns: ["Misiones", "1", "0", "0", "1"] },
    { columns: ["Salta", "1", "0", "0", "1"] },
    { columns: ["Santiago del Estero", "1", "0", "0", "1"] },
    { columns: ["TOTAL", "589", "12", "4", "573"] }
  ];




class Provincia extends Component {
    constructor(props) {
    super(props);
    
    this.state = { popoverOpen: false,
                   columns:[] }
    const provinciaId = this.props.provincia.nombre.replace(/\s/g, '').toLowerCase();
    
    this.comparador(provinciaId);
    
    
    }

    getProvinciaId(provincia){
        provincia.nombre.replace(/\s/g, '').toLowerCase();
        return provincia;
    }





    comparador(provinciaId){
        
            
            stats.map(element => {
                const aComparar = element.columns[0].replace(/\s/g, '').toLowerCase();                
                if(aComparar == provinciaId){                    
                    this.state.columns=element.columns;                    
                }                            
            })        
    } 

    render() { 
        
        const {popoverOpen,columns} = this.state;
        const {provincia} = this.props;

        const toggle = ()=> this.setState({popoverOpen:!popoverOpen})
        const provinciaId = provincia.nombre.replace(/\s/g, '').toLowerCase();

        return ( 
                <Fragment>
                    <g id={provinciaId}>
                        {provincia.path};
                        
                        <Popover placement="bottom" isOpen={popoverOpen} target={provinciaId} trigger="hover" toggle={toggle}>
                            <PopoverHeader>{provincia.nombre}</PopoverHeader>
                            <PopoverBody>
                                Confirmados: {columns[1]} <br/>
                                Muertos: {columns[2]} <br/>
                                Recuperados: {columns[3]} <br/>
                                Activos: {columns[4]}
                            
                            </PopoverBody>
                            
                        </Popover>

                    </g>
                </Fragment>

            

         );
    }
}
 
export default Provincia;