// aqui creamos un nuevo componente llamado portfolio container
// importamos React, y de alli unmountComponentAtNode, imagino para que sepa que es
import React, { Component } from "react";

 // M7D184-508-Realización de la solicitud GET API inicial en React - importamos
 import axios from 'axios';

// podemos importar componentes en otros componentes
import PortfolioItem from "./portfolio-item";

// exportamos la clase nueva creada como componente
export default class PortfolioContainer extends Component {

// si incluimos un constructor, en este caso este console log, hemos de llamarlo con el comando super(), sino no funcionara
// ahora si consultamos la consola del navegador, veremos el mensaje
  constructor() {
    super();


// Esto es part del boton de cambio de estado, añadimos categorias para que se puedan filtrar por ellas
    this.state = {
      pageTitle: "Welcome to my portfolio",
          // // M7D181-497.Introducción a los condicionales de react - la siguiente lineale decimos que la pagina esta cargando
          //  de la API, que no muestre el contenido al cliente hasta que este cargado
      isLoading: false,  
      data: []
    };
    // ejercicio - Cómo construir un filtro de datos en React
    this.handleFilter = this.handleFilter.bind(this);
  }

// Esto es part del boton de cambio de estado, creamos la funcon para que si coincide la categoria al hacer el bucle, devuelva ese item
handleFilter(filter){
  this.setState({
    data: this.state.data.filter(item =>{
      return item.category === filter;
    })
  })
}

// M7D184-508-Realización de la solicitud GET API inicial en React - popy paste de npm axios, dentro de una funcion. y pegamos la direccion de mnuestra api personal  
getPortfolioItems() {
  axios
    .get("https://hantzo.devcamp.space/portfolio/portfolio_items")  
    .then(response => {
      this.setState({
        data: response.data.portfolio_items
      });
    })
    .catch(error => {
      console.log(error);
    });
}

// estas dos lineas codigo es el que estaba AuthenticatorResponse, sin promt´s
// return data.map(item => {
//   return  <h1>{item}</h1>;
portfolioItems() {
return this.state.data.map(item => {
  
  return (
  <PortfolioItem 
  key={item.id} 
  item={item}
  />
  );
});
}

componentDidMount(){
  this.getPortfolioItems();
}

  
  render() {  
    // M7D181-497.Introducción a los condicionales de react - mensaje de carga
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    } 

{/* Esto es part del boton de cambio de estado, aqui estan los botones. para que no de error, hemos 
añadido la funcion flecha al inicio, ya que, de otra manera javascript vanila lee todo ala vez, y no en orden */}
        return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}