import React, { Component } from "react";
import "../css/App.css";

// Importando componentes
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from './Resumen';
import Resultado from './Resultado';

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {

	state = {
		resultado: '',
		datos: {}
	}

    cotizarSeguro = (datos) => {
		const {marca, year, plan} = datos;
		
		// Agregar una base de 2000 para el seguro;
		let resultado = 2000;

		// Obtener la diferencia de años y por cada año
		const diferencia = obtenerDiferenciaAnio(year);

		// Restar el 3% al valor del seguro
		resultado -= ((diferencia * 3) * resultado) / 100;

		// Americano 15% - Asiatico 5% - Europeo 30% de incremento al valor actual
		resultado = calcularMarca(marca) * resultado;

		// Plan del auto, basico incrementa el valor en 20% - completo incrementa en 50%
		let incrementoPlan = obtenerPlan(plan);

		// Incrementar de acuerdo al plan
		resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

		// Crear objeto para el resumen
		const datosAuto = {
			marca: marca,
			year: year,
			plan: plan
		}

		this.setState({
			resultado: resultado,
			datos: datosAuto
		});

    };

    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Autos" />

                <div className="contenedor-formulario">
                    <Formulario cotizarSeguro={this.cotizarSeguro} />

					<Resumen 
						datos={this.state.datos}
						resultado={this.state.resultado}
					/>

					<Resultado resultado={ this.state.resultado } />
                </div>
            </div>
        );
    }
}

export default App;
