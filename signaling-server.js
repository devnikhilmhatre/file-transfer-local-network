const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log("✅ WebSocket Signaling Server started on ws://0.0.0.0:8080");

wss.on('connection', function connection(ws) {
    console.log("🔗 New WebSocket connection established.");

    ws.on('message', function incoming(message) {
        console.log("📩 Received:", message);

        try {
            const parsedMessage = JSON.parse(message);
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(parsedMessage)); // Forward message
                    console.log("📤 Forwarded:", parsedMessage);
                }
            });
        } catch (error) {
            console.error("❌ Invalid JSON WebSocket message:", message);
        }
    });

    ws.on('close', () => console.log("❌ WebSocket client disconnected."));
    ws.on('error', (err) => console.log("⚠ WebSocket error:", err));
});

