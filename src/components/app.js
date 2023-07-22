  import React, { Component } from 'react';
  import moment from 'moment/moment';

  // Tenemos que imporetar el componente que acabamos de crear, como es nuestra creacion, debemeos de ponerle la ruta
  import PortfolioContainer from "./portfolio/portfolio-container";

  // esto no entiendo muy bien
  export default class App extends Component {
    render() {
      return (
        <div className='app'>
          <h1>HantzoStudios</h1>
          <h2>Estamos de vuelta!</h2>
          
          
            <div>
              {moment().format('MMMM Do YYYY, h:mm:ss a')} 
            </div>

            {/* y ahora ya podemos meter el componente en el render */}
            <PortfolioContainer />
        </div>
      

      );
    }
  }
