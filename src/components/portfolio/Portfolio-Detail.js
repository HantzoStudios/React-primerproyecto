import React from 'react';

  // M7D183-503.Cómo acceder a los valores de URL en React - haciendolo de esta manera, podemos acceder a modificar el texto de la barra de direcciones
export default function(props) {
    return(
        <div>
            <h2>Portfolio Detail for {props.match.params.slug}</h2>
        </div>
    );
}   