🚀 Job Portal Backend API (JWT + MongoDB + Deployment)

A RESTful backend API for a Job Portal built using Node.js, Express.js, and MongoDB with JWT authentication.

🌐 Live Demo

https://job-portal-backend-b0dg.onrender.com

📡 Base URL
https://job-portal-backend-b0dg.onrender.com/api/v1
⚙️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcryptjs
Render Deployment
🔥 Features
User Authentication (Register/Login with JWT)
Password Hashing using bcrypt
Create / Read / Update / Delete Jobs
Protected Routes using JWT
MongoDB Atlas Integration
RESTful API Architecture
Deployed on Render
📦 Installation
1. Clone Repository
git clone https://github.com/priyESH88088/jobApp.git
2. Install Dependencies
npm install
3. Create .env file
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Run Server
npm start
📌 API Endpoints
🔐 Auth Routes
Register User
POST /api/v1/auth/register
Login User
POST /api/v1/auth/login
💼 Job Routes
Create Job
POST /api/v1/job
Get All Jobs
GET /api/v1/job
Update Job
PATCH /api/v1/job/:id
Delete Job
DELETE /api/v1/job/:id
🔒 Authentication

For protected routes, pass token in headers:

Authorization: Bearer <your_token>
📁 Project Structure
controllers/
models/
routes/
middleware/
utils/
server.js
👨‍💻 Author

Priyesh Dwivedi
GitHub: https://github.com/priyESH88088

⭐ Future Improvements
Add role-based access (Admin/User)
Add job applications feature
Add frontend (React)
