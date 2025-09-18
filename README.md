# AI Chat App

A **real-time AI-powered chat application** built with Node.js, Socket.IO, and OpenAI’s GPT-4 model. Users can chat with each other and also interact with an AI assistant that responds intelligently in real-time.  

---

## 🚀 Features

- Real-time chat between multiple users using **Socket.IO**
- AI assistant powered by **OpenAI GPT-4**
- User messages and AI replies displayed in a chat interface
- Current system date injected into AI responses
- Simple and responsive frontend using HTML, CSS, and JavaScript
- Easy deployment to cloud platforms like Render, Railway, or Heroku

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express, Socket.IO  
- **AI:** OpenAI GPT-4 (`gpt-4o-mini`)  
- **Database:** None (chat is in-memory; can be extended to MongoDB/Postgres)  
- **Deployment:** Render / Railway / Heroku  

---

## 💻 Project Structure

ai-chat/
│
├─ client/ # HTML, CSS, JS frontend files
│ └─ index.html
│ └─ style.css
│
├─ server/ # Node.js backend
│ └─ index.js
│ └─ package.json
│ └─ .env # Contains OPENAI_API_KEY (not in repo)
│
└─ README.md

## ⚡ Setup Instructions

1. **Clone the repository**


git clone https://github.com/Gnaneswar99/ai-chat-app.git
cd ai-chat-app/server
Install dependencies


npm install
Create .env file


OPENAI_API_KEY=your_openai_api_key_here
Run the server


npm run dev
Open the frontend

Open client/index.html in your browser.

Start chatting with the AI!

🌐 Deployment
You can deploy the project on Render, Railway, or Heroku.

Set your OPENAI_API_KEY as an environment variable on the platform.

📝 Usage
Enter your message in the chat box and click Send.

Messages appear in the chat window in real-time.

The AI assistant responds with intelligent answers and knows the current system date.

📦 Notes
.env file is not included in GitHub for security reasons.

Chat history is not persisted; you can integrate MongoDB or PostgreSQL for saving messages.

AI responses are generated using the system’s current date to provide accurate time-sensitive answers.

👨‍💻 Author
Gnaneswar Markat
GitHub




