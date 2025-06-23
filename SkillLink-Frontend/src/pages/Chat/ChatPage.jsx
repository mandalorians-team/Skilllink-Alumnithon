import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Conversations from '../components/chat/Conversations';
import ChatBox from '../components/chat/ChatBox';
import '../styles/ChatPage.css';

export default function ChatPage() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log('Conectado al WebSocket');
        };

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prev) => [...prev, message]);
        };

        ws.current.onclose = () => console.log('WebSocket cerrado');
        ws.current.onerror = (error) => console.error('WebSocket error:', error);

        return () => {
            ws.current.close();
        };
    }, []);

    const sendMessage = (messageData) => {
        ws.current.send(JSON.stringify(messageData));
        setMessages((prev) => [...prev, messageData]);
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <Topbar />
                <div className="chat-container">
                    <div className="chat-content">
                        <Conversations onSelectContact={setSelectedContact} />
                        <ChatBox
                            selectedContact={selectedContact}
                            messages={messages.filter(
                                msg => msg.to === selectedContact || msg.from === selectedContact
                            )}
                            onSendMessage={sendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
