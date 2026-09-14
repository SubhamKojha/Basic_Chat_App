# chatty.app

A full-stack real-time messaging platform built with Node.js, Express, MongoDB, React, Zustand, and Socket.IO.

This application enables users to chat instantly, track online status, manage profiles, and experience a modern UI backed by a robust API architecture.

**Live Demo:** https://chatty-app-m4ty.onrender.com

---

## Overview

chatty.app combines reliable backend infrastructure with real-time front-end interactivity to deliver a WhatsApp-like chat experience. The platform is powered by:

- Node.js and Express for server-side logic
- MongoDB for data persistence
- Socket.IO for real-time bidirectional communication
- React with Vite for optimized front-end builds
- Cloudinary for media asset management

Messages are stored automatically, online/offline presence updates in real-time, and the entire experience runs through a clean single-page application interface.

---

## Features

- **JWT Authentication** - Secure registration, login, and logout flows
- **Profile Image Upload** - Cloudinary integration for user avatars
- **Real-Time Messaging** - Instant message delivery via Socket.IO
- **Online Users Tracking** - Live presence indicators
- **MongoDB Message Storage** - Persistent chat history
- **Modern React UI** - State management with Zustand
- **SPA Routing** - Seamless navigation with React Router
- **Cloud Deployment** - Production-ready hosting on Render

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Vite, Zustand, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Real-Time** | Socket.IO |
| **Authentication** | JWT, Bcrypt |
| **File Storage** | Cloudinary |
| **Deployment** | Render |

---

## Setup and Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/chatty-app.git
cd chatty-app
```

### Install Dependencies

```bash
npm run build
```

Alternatively, install manually:

```bash
cd Backend && npm install
cd ../Frontend && npm install
```

### Configure Environment Variables

Create a `.env` file in the Backend directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_32_character_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Start Backend Server

```bash
npm run start --prefix Backend
```

### Start Frontend Development Server

```bash
npm run dev --prefix Frontend
```

The application will be available at: http://localhost:5173

---

## Project Structure

```
chatty-app/
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

## System Architecture

### Authentication Flow

1. User submits credentials
2. Backend validates and generates JWT token
3. Token stored client-side for subsequent requests
4. Protected routes verify token via middleware

### Real-Time Communication

1. User authenticates and Socket.IO connection establishes
2. Server maps userId to socketId for message routing
3. Messages persist to MongoDB
4. Socket.IO broadcasts messages to connected clients
5. Frontend updates UI reactively

### Message Delivery Pipeline

```
Client A sends message
    → Express API receives request
    → MongoDB stores message
    → Socket.IO emits to recipient's socketId
    → Client B receives and renders message
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - End user session

### Messages
- `GET /api/messages/:userId` - Retrieve conversation history
- `POST /api/messages/send/:userId` - Send new message

### Users
- `GET /api/users` - Get all users for sidebar
- `PUT /api/users/profile` - Update user profile

---

## Deployment

The application is deployed on Render with the following configuration:

- Backend serves static frontend build in production
- Environment variables configured in Render dashboard
- MongoDB Atlas for database hosting
- Cloudinary for image CDN

**Production URL:** https://chatty-app-m4ty.onrender.com

---

## Security Considerations

- Passwords hashed using bcrypt before storage
- JWT tokens with configurable expiration
- Protected routes require authentication middleware
- Environment variables for sensitive credentials
- CORS configuration for cross-origin requests

---

## Future Enhancements

- End-to-end encryption for messages
- Group chat functionality
- Message reactions and replies
- File sharing beyond images
- Voice and video calling
- Message search and filtering
- Read receipts and typing indicators

---

## Disclaimer

This project is developed for educational and portfolio demonstration purposes. Additional security hardening, load testing, and infrastructure optimization are recommended before production use at scale.
