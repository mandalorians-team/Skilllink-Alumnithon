// ChatPage.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Conversations from '../../components/chat/Conversations';
import ChatBox from '../../components/chat/ChatBox';
import { useChatSocket } from '../../hooks/useChatSocket';
import '../../styles/ChatPage.css';

export default function ChatPage() {
    const [selectedContact, setSelectedContact] = useState(null);

    // Simulación de usuario actual (puedes reemplazar esto con un contexto o autenticación real)
    const currentUserId = 'user'; // o 'maya', etc.

    // Hook personalizado de WebSocket
    const { messages, sendMessage } = useChatSocket(currentUserId, selectedContact);

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
                            messages={messages}
                            onSendMessage={sendMessage}
                            currentUserId={currentUserId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
