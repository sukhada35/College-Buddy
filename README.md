<h1 align="center">College Buddy ✨</h1>

![Demo App](/client/public/screenshot-for-readme.png)

Welcome to the **College Buddy** project! This platform is designed to foster networking, collaboration, and academic engagement within college communities. Students can connect with peers, share resources, and even chat in real time — all in one place.

---

## 🚀 Key Features

- 🔐 **Authentication System** with JWT  
- 🛡️ **Route Protection** for secure access  
- 👤 **User Profile Creation & Updates**  
- 🖼️ **Profile Image Upload** via Cloudinary  
- 🔄 **Interest Matching & Connection**  
- 💬 **Real-time Chat Messaging**  
- 🔔 **Real-time Notifications**  
- 🤖 **AI Chatbot** for Academic Support  
- 📂 **Centralized Resource Sharing**  
- 📱 **Responsive Mobile-first Design**  
- 🧠 **Smart Summarizer** trained on faculty notes  
- ⌛ **PWA Support** for offline accessibility  

---

## 🧰 Technologies & Frameworks

- 🖥️ **Frontend:** React.js, Tailwind CSS  
- ⚙️ **Backend:** Node.js, Express.js  
- 💾 **Database:** Firebase Firestore / Supabase PostgreSQL  
- ☁️ **Image Hosting:** Cloudinary  
- 🤖 **AI Integration:** OpenAI API  
- 🚀 **Deployment:** Vercel (Frontend), Firebase or Render (Backend)  

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/college-buddy.git
```

2️⃣ Navigate to the project directory:
```bash
cd college-buddy
```

3️⃣ Install dependencies:
```bash
npm install
```

⚙️ Setup `.env` file  
In the `server/` directory, create a `.env` file:
```bash
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_very_strong_secret>
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
```

🚧 Development Commands  
Start the backend:
```bash
nodemon index.js
```

Tailwind watch command (for custom CSS):
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Start the frontend:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

👥 Contributors  
- **C013 Ashmit Jain** – ashmit27j  
- **C035 Sukhada Gulhane** – sukhada35  
- **C046 Neerav Reddy**  
- **C058 Tanay Shah**  

🤝 Contributing  
We welcome contributions from the community:  
1. Fork the repository  
2. Create a feature branch  
3. Commit changes with clear messages  
4. Push to your fork  
5. Open a pull request  

📜 License  
We dont have a license 

📞 Contact  
Dont contact us
