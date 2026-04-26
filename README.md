# 🚀 Job Portal Backend API

A RESTful backend API for a Job Portal built using Node.js, Express.js, and MongoDB with JWT authentication.

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## 📦 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/priyESH88088/jobApp.git
2. Install Dependencies
npm install
3. Setup Environment Variables

Create a .env file in root directory:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Run Server
npm start
🔥 Features
User Authentication (Register/Login with JWT)
Password Encryption using bcrypt
Create / Read / Update / Delete Jobs
MongoDB Database Integration
RESTful API structure
📌 API Routes
Auth
POST /api/v1/auth/register
POST /api/v1/auth/login
Jobs
POST /api/v1/job
GET /api/v1/job
PATCH /api/v1/job/:id
DELETE /api/v1/job/:id
📁 Project Structure
controllers/
models/
routes/
middleware/
utils/
server.js
🚀 Author

Priyesh Dwivedi
