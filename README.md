# P2P File Transfer (WebRTC)

A simple web app for transferring files **peer-to-peer (P2P)** between a phone and a laptop over a **local network** using WebRTC. No internet required.

## Features
- 📂 **Direct file transfer** over local Wi-Fi
- 🔄 **Works between Phone & Laptop**
- 🚀 **Supports any file type** (Images, Videos, PDFs, ZIPs, etc.)
- 🔒 **No third-party servers** – Secure P2P transfer

## Setup & Installation

### 1️⃣ Clone the Repository
```
git clone https://github.com/devnikhilmhatre/file-transfer-local-network.git
cd file-transfer-local-network
```

### 2️⃣ Install Dependencies
```
npm install ws http-server
```

### 3️⃣ Start WebSocket Signaling Server
```
node signaling-server.js
```

### 4️⃣ Start Local Web Server
```
npx http-server -p 3000 --host 0.0.0.0
```
Find your local IP:
```
ip a | grep inet
```
Example: `192.168.1.100`

---

## How to Use

### 💻 On Laptop:
1. Open `http://localhost:3000` in your browser.
2. Click **"Connect to Peer"**.

### 📱 On Phone:
1. Open `http://192.168.1.100:3000` (replace with your local IP).
2. Click **"Connect to Peer"**.

### 🔄 Send Files:
1. **Select a file** and click **"Send File"**.
2. The other device **automatically receives & downloads it**.

---

## Troubleshooting
- **WebSocket not connecting?** Allow port `8080`:
  ```
  sudo ufw allow 8080/tcp
  sudo ufw reload
  ```
- **Files not downloading on phone?**  
  - Android: Enable File System API in `chrome://flags`
  - iOS: Files open in a new tab for manual download.

---

## License
MIT License - Free to use and modify.

🚀 Enjoy **P2P file transfer without the internet!** 🔥
