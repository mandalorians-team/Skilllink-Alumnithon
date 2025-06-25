import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

function ChatBox({ selectedContact, messages, onSendMessage, currentUserId }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    }, [messages]);

    const toggleEmojiPicker = () => setShowEmojiPicker(prev => !prev);
    const handleEmojiClick = (emojiData) => setMessage(prev => prev + emojiData.emoji);
    const handleInputChange = (e) => setMessage(e.target.value);
    const handleAttachClick = () => fileInputRef.current.click();
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) setFile(selectedFile);
    };

    const handleRemoveFile = () => setFile(null);

    const handleSend = () => {
        if (!message.trim() && !file) return;

        const newMessage = {
            from: currentUserId,
            to: selectedContact,
            content: message.trim(),
            image: file ? URL.createObjectURL(file) : null,
            timestamp: new Date().toISOString()
        };

        onSendMessage(newMessage); // Enviamos por WebSocket
        setMessage('');
        setFile(null);
        setShowEmojiPicker(false);
    };

    if (!selectedContact) {
        return <div className="chat"><p style={{ padding: '1rem' }}>Selecciona un contacto para iniciar conversación.</p></div>;
    }

    return (
        <div className="chat">
            <div className="chat-header">{selectedContact} - En línea</div>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.from === currentUserId ? 'message-user' : 'message'}
                    >
                        {msg.content && <p>{msg.content}</p>}
                        {msg.image && (
                            <img
                                src={msg.image}
                                alt="Adjunto"
                                style={{
                                    maxWidth: '200px',
                                    borderRadius: '8px',
                                    marginTop: '0.5rem'
                                }}
                            />
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {showEmojiPicker && (
                <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}

            {file && (
                <div style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '8px',
                    margin: '10px 0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '300px'
                }}>
                    <span style={{ fontSize: '0.9rem' }}>{file.name}</span>
                    <button
                        onClick={handleRemoveFile}
                        style={{
                            background: 'red',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '2px 6px',
                            marginLeft: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        X
                    </button>
                </div>
            )}

            <div className="chat-footer">
                <button className="emoji-button" onClick={toggleEmojiPicker}>😀</button>
                <button className="attach-button" onClick={handleAttachClick}>📎</button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje..."
                />
                <button className="send" onClick={handleSend}>Enviar</button>
            </div>
        </div>
    );
}

export default ChatBox;
