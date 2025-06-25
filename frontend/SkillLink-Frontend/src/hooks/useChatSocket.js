/* Este Hook devuelve

{
  messages,              // Mensajes actuales en el chat activo
  sendMessage,           // Función para enviar un mensaje
  unreadCounts,          // Objeto con conteos de mensajes no leídos
  lastMessages           // Último mensaje por contacto
}

*/
import { useEffect, useRef, useState } from 'react';

export const useChatSocket = (currentUserId, selectedContact) => {
    const [messagesByUser, setMessagesByUser] = useState({});
    const [unreadCounts, setUnreadCounts] = useState({});
    const ws = useRef(null);

    // Cargar desde localStorage al inicio
    useEffect(() => {
        const stored = localStorage.getItem(`chat_${currentUserId}`);
        if (stored) {
            const parsed = JSON.parse(stored);
            setMessagesByUser(parsed.messagesByUser || {});
            setUnreadCounts(parsed.unreadCounts || {});
        }
    }, [currentUserId]);

    // Guardar en localStorage cuando haya cambios
    useEffect(() => {
        localStorage.setItem(
            `chat_${currentUserId}`,
            JSON.stringify({ messagesByUser, unreadCounts })
        );
    }, [messagesByUser, unreadCounts, currentUserId]);

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
                const { from, to, content } = message;

                const chatUser = from === currentUserId ? to : from;

                setMessagesByUser(prev => {
                    const prevMsgs = prev[chatUser] || [];
                    return {
                        ...prev,
                        [chatUser]: [...prevMsgs, message],
                    };
                });

                if (chatUser !== selectedContact && from !== currentUserId) {
                    setUnreadCounts(prev => ({
                        ...prev,
                        [chatUser]: (prev[chatUser] || 0) + 1,
                    }));

                    // Mostrar notificación del navegador
                    if (Notification.permission === 'granted') {
                        new Notification(`Nuevo mensaje de ${from}`, {
                            body: content,
                        });
                    }
                }
            } catch (err) {
                console.error('❌ Error al parsear mensaje:', err);
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

    useEffect(() => {
        if (selectedContact && unreadCounts[selectedContact]) {
            setUnreadCounts(prev => ({
                ...prev,
                [selectedContact]: 0,
            }));
        }
    }, [selectedContact]);

    const sendMessage = (message) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }

        const chatUser = message.to;

        setMessagesByUser(prev => {
            const prevMsgs = prev[chatUser] || [];
            return {
                ...prev,
                [chatUser]: [...prevMsgs, message],
            };
        });
    };

    const messages = messagesByUser[selectedContact] || [];

    const lastMessages = Object.fromEntries(
        Object.entries(messagesByUser).map(([userId, msgs]) => [
            userId,
            msgs[msgs.length - 1],
        ])
    );

    return {
        messages,
        sendMessage,
        unreadCounts,
        lastMessages,
    };
};
