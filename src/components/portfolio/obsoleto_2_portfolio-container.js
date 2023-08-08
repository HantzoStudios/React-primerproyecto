// aqui creamos un nuevo componente llamado portfolio container
// importamos React, y de alli unmountComponentAtNode, imagino para que sepa que es
import React, { Component } from "react";

// podemos importar componentes en otros componentes
import PortfolioItem from "./portfolio-item";

// exportamos la clase nueva creada como componente
export default class PortfolioContainer extends Component {

// si incluimos un constructor, en este caso este console log, hemos de llamarlo con el comando super(), sino no funcionara
// ahora si consultamos la consola del navegador, veremos el mensaje
  constructor() {
    super();

// Esto es part del boton de cambio de estado
    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "Quip" },
        { title: "Eventbrite" },
        { title: "Ministry Safe" },
        { title: "SwingAway" }
      ]
    };

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

    // estas dos lineas codigo es el que estaba AuthenticatorResponse, sin promt´s
    // return data.map(item => {
    //   return  <h1>{item}</h1>;
    portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }


  //aqui esta el titulo alternativo que aparecera al pulsar el boton
  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Cambio de estado con boton"
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}

        <hr />
        
{/* aqui esta el boton de cambo de estado, el que cambia el titulo */}
        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}