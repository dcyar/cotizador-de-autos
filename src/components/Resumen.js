import React, { Component } from "react";

import { primeraMayuscula } from '../helper';

class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        
        if(!marca || !year || !plan) return null;

        return (
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <li><strong>Marca:</strong> { primeraMayuscula(marca) }</li>
                <li><strong>Plan:</strong> { primeraMayuscula(plan) }</li>
                <li><strong>Año del Auto:</strong> {year}</li>
            </div>
        )
    }

    render() {
        return <div>
            { this.mostrarResumen() }
        </div>;
    }
}

export default Resumen;
