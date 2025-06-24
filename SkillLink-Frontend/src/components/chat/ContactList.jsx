import React from 'react';
import '../../styles/ContactList.css';

export const ContactList = ({
    contacts = [],
    selectedContact,
    onSelect,
    unreadCounts = {},
    lastMessages = {},
}) => {
    return (
        <div className="contact-list">
            {contacts.map((contact) => {
                const lastMsg = lastMessages[contact.id]?.content || '';
                const unread = unreadCounts[contact.id] || 0;

                return (
                    <div
                        key={contact.id}
                        className={`contact-item ${selectedContact === contact.id ? 'selected' : ''}`}
                        onClick={() => onSelect(contact.id)}
                    >
                        <div className="contact-header">
                            <strong>{contact.name}</strong>
                            {unread > 0 && <span className="unread-badge">{unread}</span>}
                        </div>
                        <div className="last-message">
                            {lastMsg.length > 40 ? lastMsg.slice(0, 40) + '...' : lastMsg}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
