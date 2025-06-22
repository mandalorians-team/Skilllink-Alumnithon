import React, { useEffect } from 'react';
import '../../styles/FloatingMessage.css';

function FloatingMessage({ visible, onClose }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Se oculta luego de 5 segundos
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className="floating-message">
            Estamos trabajando para mejorar tu experiencia, ¡agradecemos tu comprensión!
        </div>
    );
}

export default FloatingMessage;
