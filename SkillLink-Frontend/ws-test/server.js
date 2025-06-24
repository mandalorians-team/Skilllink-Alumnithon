const WebSocket = require('ws');
const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT }, () => {
    console.log(`✅ Servidor WebSocket corriendo en ws://localhost:${PORT}`);
});

const clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('🔌 Cliente conectado');

    ws.on('message', (message) => {
        console.log('📨 Mensaje recibido:', message);

        // reenviar a todos (broadcast)
        for (const client of clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        }
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('❌ Cliente desconectado');
    });
});
