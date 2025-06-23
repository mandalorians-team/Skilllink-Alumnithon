import React from 'react';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import '../../styles/NotificationBell.css';

const NotificationBell = ({ count }) => {
    return (
        <div className="notification-bell">
            <BellIcon className="topbar-icon" />
            {count > 0 && <span className="notification-badge">{count}</span>}
        </div>
    );
};

export default NotificationBell;
