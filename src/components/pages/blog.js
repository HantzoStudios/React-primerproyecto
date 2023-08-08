import React from 'react';
// M7D183_502 - componente de enlaces: importamos componente de enlace
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div>
            <h2>Blog</h2>
            {/* M7D183_502 - componente de enlaces: añadimos un enlace */}
            <div>
                <Link to="/about-me">Read more about myself</Link>
            </div>
        </div>
    );
}