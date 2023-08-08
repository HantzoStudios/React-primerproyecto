import React from 'react';
import PortfolioContainer from '../portfolio/portfolio-container';

export default function() {
    return(
        <div>
            {/* si ponemos el portfolio contaner aqui, soolo aparecera en el home, y no en cada pagina como lo hacia antes */}
            <PortfolioContainer />
        </div>
    );
}