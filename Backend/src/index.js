import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../src/lib/db.js";
import authRoutes from "../src/routes/auth.route.js";
import messageRoutes from "../src/routes/message.route.js";
import { app, server } from "../src/lib/socket.js";

import path from "path";

dotenv.config();

const __dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));

    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
    });
}

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
    connectDB();
});