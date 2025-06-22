import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import '../../styles/App.css';

function ChatBox() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [showFloatingMessage, setShowFloatingMessage] = useState(false);
    const [chatHistory, setChatHistory] = useState([
        { from: 'mentor', text: 'Hola Maya, solo quería saber cómo vas con el curso "React Avanzado"?' },
        { from: 'user', text: 'Hola Mentor Alex, muy bien, recién comienzo con la gestión de estados' },
        { from: 'mentor', text: '¡Qué bueno saberlo! La gestión de estados puede ser complicada. No dudes en contactarnos si te atascas o necesitas profundizar en algún concepto.' },
        { from: 'user', text: 'Ok gracias, lo tendré presente' },
        { from: 'mentor', text: 'Recuerda usar los foros de la comunidad si tienes preguntas fuera de nuestras sesiones de mentoría.' },
        { from: 'user', text: 'Por supuesto, mil gracias Mentor' },
    ]);

    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(prev => !prev);
    };

    const handleEmojiClick = (emojiData) => {
        setMessage(prev => prev + emojiData.emoji);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleAttachClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
    };

    const handleSend = () => {
        if (message.trim() === '' && !file) return;

        const newMessage = { from: 'user' };
        if (message.trim() !== '') newMessage.text = message;
        if (file) newMessage.image = URL.createObjectURL(file);

        setChatHistory([...chatHistory, newMessage]);
        setMessage('');
        setFile(null);
        setShowEmojiPicker(false);
    };

    const handleStartChat = () => {
        setShowFloatingMessage(true);
        setTimeout(() => setShowFloatingMessage(false), 5000);
    };

    return (
        <div className="chat">
            <div className="chat-header">Mentor Alex - En línea</div>

            <div className="chat-messages">
                {chatHistory.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.from === 'user' ? 'message-user' : 'message'}
                    >
                        {msg.text && <p>{msg.text}</p>}
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
