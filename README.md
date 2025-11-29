# 💬 chatty.app  
> A full-stack **real-time messaging platform** built with Node.js, Express, MongoDB, React, Zustand, and Socket.IO.  
> This application lets users chat instantly, track online status, manage their profiles, and enjoy a smooth modern UI — all backed by a robust backend API.

👉 **Live Demo:** https://chatty-app-m4ty.onrender.com

---

## 🚀 Overview  

**chatty.app** blends old-school reliable backend logic with modern real-time front-end interactivity.  
It offers a WhatsApp-like chat experience powered by:

- ⚙️ Node.js + Express backend  
- 🍃 MongoDB for persistence  
- ⚡ Socket.IO for instant messaging  
- 🎨 React + Vite frontend  
- ☁️ Cloudinary for media upload  

Messages store automatically, users appear online/offline live, and everything flows through a clean SPA interface.

---

## ✨ Features  

- 🔐 **JWT Authentication** (Register, Login, Logout)  
- 📸 **Profile Image Upload** (Cloudinary)  
- ⚡ **Real-Time Messaging** with Socket.IO  
- 🟢 **Online Users Tracking**  
- 📩 **MongoDB Message Storage**  
- 🎨 **Modern React UI** with Zustand  
- 🔄 **SPA Routing** via React Router  
- 🌩️ **Render Deployed**  

---

## 🛠️ Tech Stack  

| Layer | Tech |
|-------|------|
| **Frontend** | React, Vite, Zustand, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Real-Time** | Socket.IO |
| **Auth** | JWT, Bcrypt |
| **File Storage** | Cloudinary |
| **Deployment** | Render |

---

## ⚙️ Setup & Run  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/<your-username>/chatty-app.git
cd chatty-app
```

### 2️⃣ Install Dependencies  
```bash
npm run build
```
Or manually:  
```bash
cd Backend && npm install
cd ../Frontend && npm install
```

### 3️⃣ Create Backend `.env`  
```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_32_char_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 4️⃣ Start Backend  
```bash
npm run start --prefix Backend
```

### 5️⃣ Start Frontend  
```bash
npm run dev --prefix Frontend
```

Frontend runs at:  
👉 http://localhost:5173

---

## 🧪 Project Structure  

```
chat_app/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── lib/
│   │   └── index.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   ├── pages/
│   │   └── utils/
│   └── package.json
│
└── package.json
```

---

## 🧠 How It Works  

1. User logs in → JWT session created  
2. Socket.IO connects the user and maps:  
   ```
   userId ↔ socketId
   ```
3. Message sent → stored in MongoDB + delivered instantly through socket  
4. Frontend listens for updates and re-renders immediately  
5. Render serves both backend + frontend build in production  

---

## 🔗 Live Deployment  
👉 **https://chatty-app-m4ty.onrender.com**

---

## ⚠️ Disclaimer  
This project is for **learning and portfolio purposes**.  
Do not use for production without further security and scaling improvements.
