import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor(){
        super()
    }

    render() {
        return(
            <div className="nav-wrapper">
                <div className="left-side">

                    {/* M7D182-500.Descripción general de React Router NavLinks: estos dos 
                    de abajo los hemos usado para crear enlaces, en react los enlaces son diferentes a html */}
                    <div className="nav-link-wrapper">    
                        <NavLink exact to="/" activeClassName="nav-link-active">    
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                        {/* // M7D182 501. - Guía para trabajar con estilos activos de NavLink: si queremos anular el
                        css que aplica de serie el Navlink, usaremos el activeClassName */}
                     <div className="nav-link-wrapper">
                        <NavLink exact to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div> 
                </div>

                    <div className="rigt-side">
                    HANTZO KRISTUAK
                    </div>
                
            </div>
        )
    }
}