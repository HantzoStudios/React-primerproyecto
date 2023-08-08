  import React, { Component } from 'react';

  // M7D181-499 - Configuración básica de ruta (ENRUTAMIENTO): importamos...
  // ... librerias para enrutado, lo importamos como route para que sea mas sencillo
  import {
    BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  // Tenemos que imporetar el componente que acabamos de crear, como es nuestra creacion, debemeos de ponerle la ruta
  import PortfolioContainer from "./portfolio/portfolio-container";
  import NavigationContainer from "./navigation/navigation-container";

  // M7D181-499 - Configuración básica de ruta (ENRUTAMIENTO): Importamos las paginas para el ejercicio
  import Home from "./pages/home";
  import About from "./pages/about";
  // M7D182 501. - Guía para trabajar con estilos activos de NavLink: importamos los otros dos enlaces
  import Contact from "./pages/contact";
  import Blog from "./pages/blog";
  // M7D183-503.Cómo acceder a los valores de URL en React - importamos 
  import PortfolioDetail from "./portfolio/Portfolio-Detail";
  // M7D183504-Implementando una ruta ERROR404 con React Router- importamos
  import NoMatch from "./pages/no-match";
 

  // esto no entiendo muy bien
  export default class App extends Component {


render(){
      return (
        <div className='container'>
        
          <Router>
            <div>
              {/* barra de btones del navegador */}
              <NavigationContainer />

              {/* M7D181-499 - Configuración básica de ruta (ENRUTAMIENTO): 
              Dependiendo de como pongamos la ruta, nos mostrara uno u otro mensaje 
              en el navegador dependiendo de la ruta que le pongamos */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={About} />

                {/* // M7D182 501. - Guía para trabajar con estilos activos de NavLink: añadimos los otros dos enlaces */}
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />

                {/* M7D183-503.Cómo acceder a los valores de URL en React - creamos una ruta */}
                <Route path="/portfolio/:slug" component={PortfolioDetail} />

                {/* M7D183 504. Implementing a Catch All Route with React Router - Implementando una ruta Catch All con React Router */}
                <Route component={NoMatch} />


            </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }
