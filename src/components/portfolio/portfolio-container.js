// aqui creamos un nuevo componente llamado portfolio container
// importamos React, y de alli unmountComponentAtNode, imagino para que sepa que es
import React, { Component } from "react";

// podemos importar componentes en otros componentes
import PortfolioItem from "./portfolio-items";

// exportamos la clase nueva creada como componente
export default class PortfolioContainer extends Component {
// si incluimos un constructor, en este caso este console log, hemos de llamarlo con el comando super(), sino no funcionara
// ahora si consultamos la consola del navegador, veremos el mensaje
  constructor() {
    super();

    console.log("Portfolio container has rendered");
  }

  //Sigue mas abajo - Funciones personalizadas en React y uso de Map para recorrer datos. Imprimira la lista de items abajo
  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway", "Locura"];

    // estas dos lineas codigo es el que estaba AuthenticatorResponse, sin promt´s
    // return data.map(item => {
    //   return  <h1>{item}</h1>;
    return data.map(item => {
      return <PortfolioItem title={item} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>
        
        {/* Funciones personalizadas en React y uso de Map para recorrer datos */}
        {this.portfolioItems()}
      </div>
    );
  }
}