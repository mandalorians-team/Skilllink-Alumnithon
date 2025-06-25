// src/components/chat/Conversations.jsx
import React from 'react';
import '../../styles/App.css';

export default function Conversations({ onSelectContact }) {
    const contacts = ['🧔🏻‍♂️ Mentor Gabriel', '👨🏻‍🦱 Mentor Rafael', '🌹 Rosa', '👨🏽‍🦱 Jesús'];

    return (
        <div className="conversations">
            <h3>Conversaciones</h3>
            <ul>
                {contacts.map((contact) => (
                    <li
                        key={contact}
                        onClick={() => onSelectContact(contact)}
                        style={{
                            cursor: 'pointer',
                            padding: '8px',
                            borderBottom: '1px solid #ccc'
                        }}
                    >
                        {contact}
                    </li>
                ))}
            </ul>
        </div>
    );
}
