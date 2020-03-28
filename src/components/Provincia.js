import React, { Component,Fragment } from 'react';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';







class Provincia extends Component {
    constructor(props) {
    super(props);
    
    this.state = { popoverOpen: false,
                   columns:[] }
    
    
    
    }

    getProvinciaId(provincia){
        provincia.nombre.replace(/\s/g, '').toLowerCase();
        return provincia;
    }

    componentDidMount(){
        const provinciaId = this.props.provincia.nombre.replace(/\s/g, '').toLowerCase();
    
        this.comparador(provinciaId);
    }





    comparador(provinciaId){
            console.log("entro a comparador")
        
            let flag = false;
            let caba = [];
            this.props.stats.map(element => {
                
                const aComparar = element.columns[0].replace(/\s/g, '').toLowerCase();
                if(aComparar == "caba"){
                    caba = element.columns;
                    
                }                
                if(aComparar == provinciaId){         
                    this.state.columns=element.columns;
                    flag = true;
                    if(aComparar=="buenosaires"){
                        for(let i=1;i<5;i++) element.columns[i] = parseInt(element.columns[i])+parseInt(caba[i]);
                                               
                    }                    
                }
                
                                            
            })
            if(!flag) this.state.columns=["",0,0,0,0]        
    } 

    render() { 
        console.log("RENDERIZO")
        
        const {popoverOpen,columns} = this.state;
        const {provincia, stats} = this.props;

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