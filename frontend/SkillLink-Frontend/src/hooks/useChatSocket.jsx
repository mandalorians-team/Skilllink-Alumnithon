import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { HiOutlineChatAlt2 } from "react-icons/hi";

export const useChatSocket = (currentUserId, selectedContact) => {
    const [messages, setMessages] = useState({});
    const [unreadCounts, setUnreadCounts] = useState({});
    const [lastMessages, setLastMessages] = useState({});
    const ws = useRef(null);
    const receivedMsgIds = useRef(new Set());

    const currentUserRef = useRef(currentUserId);
    const selectedContactRef = useRef(selectedContact);

    // Mantener referencias actualizadas
    useEffect(() => {
        currentUserRef.current = currentUserId;
    }, [currentUserId]);

    useEffect(() => {
        selectedContactRef.current = selectedContact;
    }, [selectedContact]);

    // Restaurar del localStorage
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages') || '{}');
        const savedUnread = JSON.parse(localStorage.getItem('unreadCounts') || '{}');
        const savedLastMsgs = JSON.parse(localStorage.getItem('lastMessages') || '{}');

        setMessages(savedMessages);
        setUnreadCounts(savedUnread);
        setLastMessages(savedLastMsgs);
    }, []);

    // Guardar en localStorage
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        localStorage.setItem('unreadCounts', JSON.stringify(unreadCounts));
        localStorage.setItem('lastMessages', JSON.stringify(lastMessages));
    }, [messages, unreadCounts, lastMessages]);

    // Solicitar permiso para notificaciones
    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    // Crear WebSocket una sola vez
    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            console.log('✅ Conectado al WebSocket');
        };


        ws.current.onmessage = async (event) => {
            try {
                let rawData;

                if (event.data instanceof Blob) {
                    rawData = await event.data.text();
                } else {
                    rawData = event.data;
                }

                console.log('📨 Mensaje recibido:', rawData);

                const message = JSON.parse(rawData);
                console.log('📦 Mensaje recibido con ID:', message.id, message);


                const currentUser = currentUserRef.current;
                const selected = selectedContactRef.current;

                // Generar ID único si no existe
                if (!message.id) {
                    message.id = `${message.from}-${message.to}-${Date.now()}-${Math.random()}`;
                }

                if (receivedMsgIds.current.has(message.id)) return;
                receivedMsgIds.current.add(message.id);


                const chatUserId = message.from === currentUser ? message.to : message.from;

                // Añadir mensaje
                setMessages(prev => ({
                    ...prev,
                    [chatUserId]: [...(prev[chatUserId] || []), message]
                }));

                // Actualizar último mensaje
                setLastMessages(prev => ({
                    ...prev,
                    [chatUserId]: message
                }));

                // Notificación y conteo
                const isToCurrent = message.to === currentUser;
                const isFromSelected = message.from === selected;

                if (isToCurrent && !isFromSelected) {
                    toast.info(`Nuevo mensaje de ${message.from}: ${message.content}`, {
                        icon: <HiOutlineChatAlt2 />
                    });   
                    
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
                    (message.from === currentUser && message.to === selected) ||
                    (message.from === selected && message.to === currentUser)
                ) {
                    setUnreadCounts(prev => ({
                        ...prev,
                        [selected]: 0
                    }));
                }

            } catch (error) {
                console.error('❌ Error procesando mensaje WebSocket:', error);
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
    }, []); // ← WebSocket se crea una sola vez

    // Enviar mensaje
    const sendMessage = (message) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }

        const contactId = message.to;

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

    // Resetear contador al seleccionar contacto
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
