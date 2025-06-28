import React from 'react';
import '../../styles/ContactList.css';

export default function Conversations({
    contacts = [],
    onSelectContact,
    selectedContact,
    unreadCounts = {},
    lastMessages = {}
}) {
    return (
        <div className="conversations">
            <h3>Conversaciones</h3>
            <ul className="contact-list">
                {contacts.map((contact) => {
                    const lastMsg = lastMessages[contact]?.content || '';
                    const unread = unreadCounts[contact] || 0;

                    return (
                        <li
                            key={contact}
                            className={`contact-item ${selectedContact === contact ? 'selected' : ''}`}
                            onClick={() => onSelectContact(contact)}
                        >
                            <div className="contact-header">
                                <strong>{contact}</strong>
                                {unread > 0 && <span className="unread-badge">{unread}</span>}
                            </div>
                            <div className="last-message">
                                {lastMsg.length > 40 ? lastMsg.slice(0, 40) + '...' : lastMsg}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
