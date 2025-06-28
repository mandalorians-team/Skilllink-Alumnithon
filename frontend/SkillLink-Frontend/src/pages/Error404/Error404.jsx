import React from 'react';

import Error404Img from '../../assets/imagen/Error404.png';
import '@/styles/Error404.css'

function Error404() {
    return (
    <div className="container">

        <div className="main">
            
                <div className="error-container">
                    <div className="content">
                            <img src={Error404Img} alt="Imagen Error 404" className="error404-img"/>
                        <div className="error404-message">
                            <h1>404 - Página no encontrada</h1>
                            <p>Lo sentimos, esta ruta no existe.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Error404;