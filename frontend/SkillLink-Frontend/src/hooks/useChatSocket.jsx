import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export const useChatSocket = (currentUserId, selectedContact) => {
    const [messages, setMessages] = useState({}); // { userId: [msg, msg, ...] }
    const [unreadCounts, setUnreadCounts] = useState({});
    const [lastMessages, setLastMessages] = useState({});
    const ws = useRef(null);
    const receivedMsgIds = useRef(new Set()); // Para evitar duplicados

    // Restaurar mensajes previos
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages') || '{}');
        const savedUnread = JSON.parse(localStorage.getItem('unreadCounts') || '{}');
        const savedLastMsgs = JSON.parse(localStorage.getItem('lastMessages') || '{}');

        setMessages(savedMessages);
        setUnreadCounts(savedUnread);
        setLastMessages(savedLastMsgs);
    }, []);

    // Guardar al localStorage
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        localStorage.setItem('unreadCounts', JSON.stringify(unreadCounts));
        localStorage.setItem('lastMessages', JSON.stringify(lastMessages));
    }, [messages, unreadCounts, lastMessages]);

    // Permitir notificaciones si están deshabilitadas
    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    // WebSocket
    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log('✅ Conectado al WebSocket');
        };

        ws.current.onmessage = async (event) => {
            let data;

            if (event.data instanceof Blob) {
                data = await event.data.text();
            } else {
                data = event.data;
            }

            try {
                const message = JSON.parse(data);

                // Evitar duplicados
                if (receivedMsgIds.current.has(message.id)) return;
                receivedMsgIds.current.add(message.id);

                const chatUserId = message.from === currentUserId ? message.to : message.from;

                // Guardar mensaje
                setMessages(prev => ({
                    ...prev,
                    [chatUserId]: [...(prev[chatUserId] || []), message]
                }));

                // Actualizar último mensaje
                setLastMessages(prev => ({
                    ...prev,
                    [chatUserId]: message
                }));

                if (message.to === currentUserId && message.from !== selectedContact) {
                    toast.info(`Nuevo mensaje de ${message.from}: ${message.content}`);
                }

                // Notificación y conteo
                if (message.to === currentUserId && message.from !== selectedContact) {
                    if (Notification.permission === 'granted') {
                        new Notification(`Mensaje de ${message.from}`, {
                            body: message.content,
                        });
                    }

                    setUnreadCounts(prev => ({
                        ...prev,
                        [message.from]: (prev[message.from] || 0) + 1
                    }));
                }

                // Si es conversación abierta, resetear contador
                if (
                    (message.from === currentUserId && message.to === selectedContact) ||
                    (message.from === selectedContact && message.to === currentUserId)
                ) {
                    setUnreadCounts(prev => ({
                        ...prev,
                        [selectedContact]: 0
                    }));
                }

            } catch (error) {
                console.error('❌ Error al parsear el mensaje:', error, data);
            }
        };

        ws.current.onerror = (err) => {
            console.error('❌ Error en WebSocket:', err);
        };

        ws.current.onclose = () => {
            console.log('🔌 WebSocket cerrado');
        };

        return () => {
            ws.current?.close();
        };
    }, [currentUserId, selectedContact]);

    // Enviar mensaje
    const sendMessage = (message) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }

        const contactId = message.to;

        // Prevenir duplicado local
        if (!receivedMsgIds.current.has(message.id)) {
            receivedMsgIds.current.add(message.id);

            setMessages(prev => ({
                ...prev,
                [contactId]: [...(prev[contactId] || []), message]
            }));

            setLastMessages(prev => ({
                ...prev,
                [contactId]: message
            }));
        }
    };

    const clearConversation = (userId) => {
        setMessages(prev => {
            const updated = { ...prev };
            delete updated[userId];
            return updated;
        });

        setUnreadCounts(prev => {
            const updated = { ...prev };
            delete updated[userId];
            return updated;
        });

        setLastMessages(prev => {
            const updated = { ...prev };
            delete updated[userId];
            return updated;
        });
    };

    useEffect(() => {
        if (selectedContact) {
            setUnreadCounts(prev => ({
                ...prev,
                [selectedContact]: 0
            }));
        }
    }, [selectedContact]);

    return {
        messages: messages[selectedContact] || [],
        sendMessage,
        unreadCounts,
        lastMessages,
        clearConversation
    };
};
