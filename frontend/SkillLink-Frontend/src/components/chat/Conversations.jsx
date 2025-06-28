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
            <ul>
                {contacts.map((contact) => {
                    const lastMsg = lastMessages[contact]?.content || '';
                    const unread = unreadCounts[contact] || 0;

                    return (
                        <li
                            key={contact}
                            onClick={() => onSelectContact(contact)}
                            className={selectedContact === contact ? 'selected' : ''}
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                borderBottom: '1px solid #ccc',
                                listStyle: 'none',
                                backgroundColor: selectedContact === contact ? ' #bae9ff59' : 'transparent',
                                position: 'relative', borderRadius: '8px'
                            }}
                        >
                            <strong>{contact}</strong>
                            {unread > 0 && (
                                <span className="unread-tooltip">{unread}</span>
                            )}
                            <div style={{ fontSize: '0.85em', color: '#dbdbdb', marginTop: '4px' }}>
                                {lastMsg.length > 30 ? lastMsg.slice(0, 30) + '...' : lastMsg}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
