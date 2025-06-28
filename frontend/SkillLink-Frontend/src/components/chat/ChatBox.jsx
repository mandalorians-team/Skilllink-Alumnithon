import React, { useState, useEffect, useRef } from 'react';

export default function ChatBox({ selectedContact, messages, onSendMessage, currentUserId }) {
    const [input, setInput] = useState('');
    const messageEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = () => {
        if (!input.trim() || !selectedContact) return;

        const newMessage = {
            id: Date.now().toString(), // ID simple para evitar duplicados
            from: currentUserId,
            to: selectedContact,
            content: input.trim(),
            timestamp: new Date().toISOString()
        };

        onSendMessage(newMessage);
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    if (!selectedContact) {
        return (
            <div className="chat">
                <div className="chat-header">Selecciona un contacto para comenzar a chatear</div>
            </div>
        );
    }

    return (
        <div className="chat">
            <div className="chat-header">Conversación con <strong>{selectedContact}</strong></div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div
                        key={`${msg.id}-${index}`}
                        className={msg.from === currentUserId ? 'message-user' : 'message'}
                    >
                        {msg.content}
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button className="send" onClick={handleSend}>Enviar</button>
            </div>
        </div>
    );
}
