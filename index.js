// index.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const OpenAI = require("openai");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // for now allow all origins
    methods: ["GET", "POST"],
  },
});

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("chat message", async (msg) => {
    console.log("Message received:", msg);

    // Broadcast user message to all clients
    io.emit("chat message", { sender: "user", text: msg });

    try {
      // Get today's system date
      const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Call OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant. Today's date is ${today}.`,
          },
          { role: "user", content: msg },
        ],
      });

      const aiReply = completion.choices[0].message.content;

      // Send AI response
      io.emit("chat message", { sender: "ai", text: aiReply });
    } catch (error) {
      console.error("OpenAI error:", error);
      io.emit("chat message", {
        sender: "ai",
        text: "⚠️ Sorry, I had trouble replying.",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
