// ChatPage.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Conversations from '../../components/chat/Conversations';
import ChatBox from '../../components/chat/ChatBox';
import { useChatSocket } from '../../hooks/useChatSocket';
import '../../styles/ChatPage.css';

export default function ChatPage() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [contacts] = useState(['maya', 'luis', 'andrea', 'carlos']); // contactos simulados

    const currentUserId = 'user'; // simula usuario logueado

    const {
        messages,
        sendMessage,
        unreadCounts,
        lastMessages,
        clearConversation
    } = useChatSocket(currentUserId, selectedContact);

    // Solicitar permiso de notificaciones si aún no está otorgado
    useEffect(() => {
        if (Notification && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <Topbar />
                <div className="chat-container">
                    <div className="chat-content">
                        <Conversations
                            contacts={contacts.filter((c) => c !== currentUserId)}
                            selectedContact={selectedContact}
                            onSelectContact={setSelectedContact}
                            unreadCounts={unreadCounts}
                            lastMessages={lastMessages}
                        />
                        <ChatBox
                            selectedContact={selectedContact}
                            messages={messages}
                            onSendMessage={sendMessage}
                            currentUserId={currentUserId}
                            onClearConversation={() => clearConversation(selectedContact)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
