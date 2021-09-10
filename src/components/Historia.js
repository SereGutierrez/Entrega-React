import React from 'react';
import Swal from 'sweetalert2';

import Opcion from './Opcion'
import Recordatorio from './Recordatorio';



class Contenedor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idTramaActual: "1",
            numeroDeTrama: 1,
            seleccionAnterior: "",
            historial: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(opcionElegida) {
        if(this.state.numeroDeTrama === 5) {
            Swal.fire({
              title: 'FIN. ¿Desea volver al principio?',
              confirmButtonText: 'Si',
              cancelButtonText: 'No',
              showCancelButton: true
            }).then((resultado) => {if(resultado.isConfirmed){window.location.reload()}})
        }
        else {
            this.setState({
                seleccionAnterior: opcionElegida.toUpperCase(),
                historial: this.state.historial.concat(opcionElegida.toUpperCase()),
                idTramaActual: this.state.numeroDeTrama + 1 + opcionElegida,
                numeroDeTrama: this.state.numeroDeTrama + 1
            })
        }
    }

    componentDidMount() {
        console.log("Comienza una aventura!");
    }

    render() {
        let datosActuales = this.props.arrayData.find((dato) => dato.id === this.state.idTramaActual);
        return (
            <div className="layout">
                <h1 className="historia">{datosActuales.historia}</h1>
                <div className="opciones">
                    <Opcion opcion={datosActuales.opciones.a} letra="A" handleClick={this.handleClick}/>
                    <Opcion opcion={datosActuales.opciones.b} letra="B" handleClick={this.handleClick}/>
                </div>
                <Recordatorio seleccionAnterior={this.state.seleccionAnterior} historial={this.state.historial}/>
            </div>
        )
    }
}

export default Contenedor;