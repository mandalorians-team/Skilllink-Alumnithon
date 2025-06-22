import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Error404Img from '../assets/imagen/Error404.png';
import '../styles/Error404.css'
import '../styles/App.css';

function Error404() {
    return (
    <div className="container">
        <Sidebar />
        <div className="main">
            <Topbar />
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