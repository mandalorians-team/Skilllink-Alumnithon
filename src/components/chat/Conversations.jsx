import React, { useState, useRef, useEffect } from 'react';
import '../../styles/App.css';

function Conversations() {
    const [showFloatingMessage, setShowFloatingMessage] = useState(false);
    const handleStartChat = () => {
        setShowFloatingMessage(true);
    };

    return (
    <div className="conversations">
        <h3>Conversaciones</h3>
        <input type="text" placeholder="Buscar Contacto..." className="search-contact" />

        <div className="contact">👨🏻‍🦱 Mentor Miguel <br /><small>10:10 AM</small></div>
        <div className="contact">🧔🏻‍♂️ Mentor Gabriel <br /><p className='notification-msj'>🔔</p><small>09:30 AM</small></div>
        <div className="contact">👨🏽‍🦱 Mentor Rafael <br /><small>09:20 AM</small></div>
        <div className="contact">🌹 Rosa <br /><small>Hace 3 días</small></div>
        <div className="contact">⚙️ SkillLink Support <br /><small>Ayer</small></div>

        <button className="start-chat-btn" onClick={handleStartChat}>Iniciar nuevo chat</button>
        
        {showFloatingMessage && (
            <div style={{
                position: 'fixed',
                bottom: '100px',
                right: '20px',
                backgroundColor: '#2a2a2a',
                color: 'white',
                padding: '15px 20px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(140, 200, 224, 0.3)',
                zIndex: 1000,
                fontSize: '0.95rem'
                }}>
                    <div className="floating-message">
                        Estamos trabajando para mejorar tu experiencia, ¡agradecemos tu comprensión!
                    </div>
            </div>
        )}
    </div>
    );
}

export default Conversations;