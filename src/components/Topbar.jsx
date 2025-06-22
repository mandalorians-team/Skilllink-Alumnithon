import React, { useState } from 'react';
import Logo from '../assets/imagen/Logo.jpg';
import '../styles/Topbar.css';
import { ReactComponent as ChatIcon } from '../assets/icons/chat.svg';
import NotificationBell from '../components/NotificationBell';

function Topbar() {
    const [notificationCount, setNotificationCount] = useState(3);

    return (
        <div className="topbar-container">
            <div className="header-logo">
                <div className="logo-title">
                    <img src={Logo} alt="Skill Link Logo" className="logo-img" />
                    <h2>Skill Link</h2>
                </div>

                <div className="topbar">
                    <input type="text" placeholder= " Buscar..." />
                    <NotificationBell count={notificationCount} />
                    <ChatIcon className="topbar-icon" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
