import React, { Component,Fragment } from 'react';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';



class Provincia extends Component {
    constructor(props) {
    super(props);
    
    this.state = { popoverOpen: false,
                   datoProv:this.props.stats} 
    console.log("constructorProvincia",this.props.stats)
    
    
    
    }

    getProvinciaId(provincia){
        provincia = provincia.nombre.replace(/\s/g, '').toLowerCase();
        return provincia;
    }

    componentDidMount(){
            
        this.comparador(this.getProvinciaId(this.props.provincia));
    }

    getSnapshotBeforeUpdate(){
        console.log("GetSnapshot::::::::::::::::::::::::::::")
        this.comparador(this.getProvinciaId(this.props.provincia));
    }





    comparador(provinciaId){
            console.log("entro a comparador")
        
            let flag = false;
            let caba = {};
            this.props.stats.map(element => {
                console.log("Stattss:::::::::::::::.",element)
                const aComparar = element.Distrito.replace(/\s/g, '').toLowerCase();
                console.log("aComparar:::::::::::::",aComparar);
                console.log("provinciaId:::::::::::::",provinciaId);
                if(aComparar == "ciudaddebuenosaires"){
                    caba = element;
                    
                }                
                if(aComparar == provinciaId){         
                    this.state.datoProv=element;
                    flag = true;
                    console.log("Coincidencia en acomparar provinciaid", this.state.datoProv)
                    if(aComparar=="buenosaires"){
                        
                        this.state.datoProv={
                            Activos     : element.Activos + caba.Activos,
                            Confirmados : element.Confirmados + caba.Confirmados,
                            Fallecidos  : element.Fallecidos + caba.Fallecidos,
                            Recuperados : element.Recuperados + caba.Recuperados,
                        }
                                               
                    }                    
                }
                
                                            
            })
            if(!flag) this.state.datoProv={
                                            Confirmados:0,
                                            Fallecidos:0,
                                            Recuperados:0
            }        
    } 

    render() { 
                
        const {popoverOpen,datoProv} = this.state;
        const {provincia, stats} = this.props;

        console.log("datoProv:::::::::::::::::",datoProv);

        const toggle = ()=> this.setState({popoverOpen:!popoverOpen})
        const provinciaId = provincia.nombre.replace(/\s/g, '').toLowerCase();

        return ( 
                <Fragment>
                    <g id={provinciaId}>
                        {provincia.path};
                        
                        <Popover placement="bottom" isOpen={popoverOpen} target={provinciaId} trigger="hover" toggle={toggle}>
                            <PopoverHeader>{provincia.nombre}</PopoverHeader>
                            <PopoverBody>
                                Confirmados: {datoProv.Confirmados} <br/>
                                Muertos: {datoProv.Fallecidos} <br/>
                                Recuperados: {datoProv.Recuperados} <br/>
                                
                            
                            </PopoverBody>
                            
                        </Popover>
                     

                    </g>
                </Fragment>
                

            

         );
    }
}
 
export default Provincia;