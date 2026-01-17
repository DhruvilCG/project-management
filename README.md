# 📋 Project Management Application

> **A modern, full-stack task management platform built with React, Node.js, and MongoDB for efficient task organization and productivity tracking**

[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![React](https://img.shields.io/badge/react-19.2.0-blue)](https://react.dev)
[![Express](https://img.shields.io/badge/express-5.2.1-black)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/mongodb-9.0.1-green)](https://www.mongodb.com)
[![Vite](https://img.shields.io/badge/vite-7.2.4-646CFF)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1.17-38B2AC)](https://tailwindcss.com)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Database](#-database)
- [API Endpoints](#-api-endpoints)
- [Commands](#-commands)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)

---

## 📌 Overview

Project Management Application is a comprehensive task management solution that helps users organize, track, and manage their tasks efficiently. Built with modern web technologies, it provides an intuitive interface for creating tasks, setting priorities, tracking completion status, and monitoring productivity metrics.

### What It Does
- Create, edit, and delete tasks with descriptions and priorities
- Set due dates and track task deadlines
- Organize tasks by status (pending, completed) and priority (low, medium, high)
- Filter tasks by date (today, this week) and priority level
- Track productivity with completion statistics and progress metrics
- Secure user authentication with JWT tokens
- User profile management with customizable settings
- Real-time task updates with responsive UI

---

## 🎬 Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone the repository
git clone <repository-url>
cd project-management

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Install backend dependencies
cd ../backend
npm install

# 4. Set up environment variables
# Create .env file in backend directory (see Environment Setup)

# 5. Start MongoDB (if running locally)
# Or configure MongoDB Atlas connection string

# 6. Start backend server
npm start
# Server runs on http://localhost:4000

# 7. Start frontend development server (in new terminal)
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

**Access the app**: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

### Core Functionality
- ✅ **Task Management** - Create, read, update, and delete tasks
- ✅ **Priority Levels** - Assign Low, Medium, or High priority to tasks
- ✅ **Due Dates** - Set and track task deadlines
- ✅ **Task Status** - Mark tasks as pending or completed
- ✅ **Smart Filtering** - Filter tasks by date, priority, and status
- ✅ **Productivity Tracking** - View completion statistics and progress
- ✅ **User Authentication** - Secure login and registration with JWT
- ✅ **User Profiles** - Manage profile information and settings
- ✅ **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- ✅ **Real-time Updates** - Instant task updates across the application

### Advanced Features
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📊 **Dashboard Analytics** - Task statistics and productivity metrics
- 🎯 **Priority Management** - Organize tasks by importance levels
- 📅 **Date Filtering** - Filter tasks by today, this week, or all
- 🎨 **Modern UI** - Clean, intuitive interface with Lucide icons
- 🌈 **Color-coded Priorities** - Visual priority indicators
- 📱 **Responsive Layout** - Works seamlessly on desktop and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Next-generation frontend build tool
- **React Router DOM 7.10.1** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Axios 1.13.2** - HTTP client for API requests
- **Lucide React 0.560.0** - Beautiful icon library
- **React Toastify 11.0.5** - Toast notifications
- **Date-fns 4.1.0** - Date utility library

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.2.1** - Web application framework
- **MongoDB 9.0.1** - NoSQL database
- **Mongoose 9.0.1** - MongoDB object modeling
- **JWT 9.0.3** - JSON Web Token authentication
- **Bcryptjs 3.0.3** - Password hashing
- **Validator 13.15.23** - Input validation
- **CORS 2.8.5** - Cross-origin resource sharing
- **Dotenv 17.2.3** - Environment variable management

### Development Tools
- **ESLint 9.39.1** - Code linting
- **TypeScript Types** - Type definitions for React
- **Nodemon 3.1.11** - Development server auto-reload (optional)

---

## 📁 Project Structure

```
project-management/
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/              # Assets and constants
│   │   │   ├── dummy.jsx        # Style constants and config
│   │   │   └── react.svg
│   │   ├── components/          # React components
│   │   │   ├── Layout.jsx       # Main layout wrapper
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Sidebar.jsx      # Sidebar navigation
│   │   │   ├── Login.jsx        # Login component
│   │   │   ├── SignUp.jsx       # Registration component
│   │   │   ├── Profile.jsx      # User profile component
│   │   │   ├── TaskItem.jsx     # Task card component
│   │   │   └── TaskModal.jsx    # Task create/edit modal
│   │   ├── pages/               # Page components
│   │   │   ├── Dashboard.jsx    # Main dashboard
│   │   │   ├── PendingPage.jsx  # Pending tasks page
│   │   │   └── CompletePage.jsx # Completed tasks page
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Application entry point
│   │   └── index.css            # Global styles
│   ├── eslint.config.js         # ESLint configuration
│   ├── vite.config.js           # Vite configuration
│   ├── package.json             # Frontend dependencies
│   └── README.md                # Frontend README
│
├── backend/                     # Node.js backend API
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/             # Route controllers
│   │   ├── taskController.js    # Task CRUD operations
│   │   └── userController.js    # User authentication & profile
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/                  # Mongoose models
│   │   ├── taskModel.js         # Task schema
│   │   └── userModel.js         # User schema
│   ├── routes/                  # API routes
│   │   ├── taskRoute.js         # Task endpoints
│   │   └── userRoute.js         # User endpoints
│   ├── server.js                # Express server entry point
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables (create this)
│
└── README.md                    # This file
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Setup Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd project-management
```

#### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### 3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

#### 4. Environment Configuration
Create a `.env` file in the `backend` directory (see [Environment Setup](#-environment-setup) for details).

#### 5. Start MongoDB
**Option A: Local MongoDB**
```bash
# Ensure MongoDB service is running
mongod
```

**Option B: MongoDB Atlas**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Update `mongodbURP` in `.env` file

#### 6. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server runs on http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

Visit [http://localhost:5173](http://localhost:5173) to access the application.

---

## 🔧 Environment Setup

### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection
mongodbURP=mongodb://localhost:27017/project-management
# OR for MongoDB Atlas:
# mongodbURP=mongodb+srv://username:password@cluster.mongodb.net/project-management?retryWrites=true&w=majority

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# JWT Token Expiration (optional, defaults if not set)
TOKEN_EXPIRES=7d

# Server Port (optional, defaults to 4000)
PORT=4000
```

### Frontend Configuration

Update the API base URL in `frontend/src/pages/Dashboard.jsx` if your backend is hosted elsewhere:

```javascript
const API_BASE = "http://localhost:4000/api/tasks";
// Change to your backend URL if deployed
```

Similarly, update API URLs in other components that make API calls.

### Getting Environment Values

#### JWT Secret
Generate a secure random string:
```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Or use any secure random string generator
```

#### MongoDB Connection String
- **Local**: `mongodb://localhost:27017/project-management`
- **Atlas**: Get from MongoDB Atlas dashboard under "Connect" → "Connect your application"

---

## 💾 Database

### Schema Overview

The application uses MongoDB with Mongoose ODM. Key collections:

#### Users Collection
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required)
}
```

#### Tasks Collection
```javascript
{
  title: String (required),
  description: String (optional, default: ''),
  priority: String (enum: ['Low', 'Medium', 'High'], default: 'Low'),
  dueDate: Date (optional),
  owner: ObjectId (ref: 'User', required),
  completed: Boolean (default: false),
  createdAt: Date (default: Date.now)
}
```

### Database Operations

All tasks are user-specific. Users can only access and modify their own tasks. The `owner` field in tasks references the user's `_id`.

---

## 🔌 API Endpoints

### Authentication Endpoints

#### Register User
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Protected Endpoints (Require JWT Token)

Add header: `Authorization: Bearer <token>`

#### Get Current User
```http
GET /api/user/me
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe Updated",
  "email": "newemail@example.com"
}
```

#### Change Password
```http
PUT /api/user/password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

### Task Endpoints

#### Get All Tasks (User's tasks only)
```http
GET /api/tasks/gp
Authorization: Bearer <token>
```

#### Create Task
```http
POST /api/tasks/gp
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the documentation",
  "priority": "High",
  "dueDate": "2024-12-31T00:00:00.000Z",
  "completed": false
}
```

#### Get Task by ID
```http
GET /api/tasks/:id/gp
Authorization: Bearer <token>
```

#### Update Task
```http
PUT /api/tasks/:id/gp
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
```

#### Delete Task
```http
DELETE /api/tasks/:id/gp
Authorization: Bearer <token>
```

---

## ⚡ Commands

### Frontend Commands

```bash
cd frontend

npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Commands

```bash
cd backend

npm start        # Start server (http://localhost:4000)
node server.js   # Alternative start command
```

### Development Tips

- Use `nodemon` for auto-reload during backend development:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```

---

## 📖 Usage

### For New Users

1. **Register** - Click "Sign Up" and create an account
2. **Login** - Use your credentials to log in
3. **Create Tasks** - Click "Add New Task" button
4. **Organize Tasks** - Set priority levels and due dates
5. **Track Progress** - View statistics on the dashboard
6. **Filter Tasks** - Use filters to find specific tasks
7. **Complete Tasks** - Mark tasks as done when finished

### Task Management

#### Creating a Task
1. Click the "Add New Task" button
2. Fill in the task details:
   - **Title** (required)
   - **Description** (optional)
   - **Priority** (Low, Medium, High)
   - **Due Date** (optional)
3. Click "Save" to create the task

#### Editing a Task
1. Click on any task card
2. Modify the fields you want to change
3. Click "Save" to update

#### Deleting a Task
1. Click on a task card
2. Use the delete option in the modal

#### Filtering Tasks
- Use the filter dropdown to view:
  - All tasks
  - Tasks due today
  - Tasks due this week
  - Tasks by priority (High, Medium, Low)

#### Viewing Statistics
- Dashboard shows:
  - Total tasks
  - Low/Medium/High priority counts
  - Completed tasks count
  - Productivity percentage

### Profile Management

1. Click on your profile icon in the navbar
2. Update your name or email
3. Change your password if needed
4. View your account information

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

**Frontend (5173):**
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5173
kill -9 <PID>
```

**Backend (4000):**
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :4000
kill -9 <PID>
```

#### MongoDB Connection Error

**Symptoms:** "DB connected" message doesn't appear or connection fails

**Solutions:**
1. Ensure MongoDB is running:
   ```bash
   # Check MongoDB service
   mongosh  # Should connect successfully
   ```

2. Verify connection string in `.env`:
   ```env
   mongodbURP=mongodb://localhost:27017/project-management
   ```

3. For MongoDB Atlas:
   - Check IP whitelist (allow `0.0.0.0/0` for testing)
   - Verify username and password
   - Ensure connection string is correct

#### Authentication Issues

**Symptoms:** "Not Authorized" or token errors

**Solutions:**
1. Check JWT_SECRET in `.env` is set
2. Verify token is being sent in Authorization header
3. Clear localStorage and login again:
   ```javascript
   localStorage.clear()
   ```

4. Check token expiration (default is 7 days)

#### CORS Errors

**Symptoms:** API requests blocked by browser

**Solutions:**
1. Verify CORS is enabled in `backend/server.js`
2. Check frontend API URL matches backend URL
3. Ensure backend is running before frontend

#### Tasks Not Loading

**Symptoms:** Empty task list or error messages

**Solutions:**
1. Check browser console for errors
2. Verify API endpoint URLs in frontend code
3. Check network tab for failed requests
4. Verify user is logged in and token is valid
5. Check backend logs for errors

### Getting Help

- 📚 Check [React Documentation](https://react.dev)
- 📚 Review [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- 📚 Read [MongoDB Documentation](https://docs.mongodb.com)
- 📚 Consult [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- 🐛 Check browser console for frontend errors
- 💻 Review backend terminal for server errors
- 🔍 Use browser DevTools Network tab for API debugging

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

**Guidelines:**
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Keep commits atomic and descriptive
- Run linter: `npm run lint`

---

## 📝 License

This project is licensed under the MIT License.

---

## 🔗 Quick Links

- 🌐 **React**: https://react.dev
- ⚡ **Vite**: https://vitejs.dev
- 📖 **Express**: https://expressjs.com
- 🍃 **MongoDB**: https://www.mongodb.com
- 📚 **Mongoose**: https://mongoosejs.com
- 🎨 **Tailwind CSS**: https://tailwindcss.com
- 🔐 **JWT**: https://jwt.io
- 📦 **Axios**: https://axios-http.com

---

## 🎯 Roadmap

- [ ] Add task categories/tags
- [ ] Implement task search functionality
- [ ] Add task templates
- [ ] Enable task sharing/collaboration
- [ ] Add task attachments
- [ ] Implement recurring tasks
- [ ] Add task comments/notes
- [ ] Create task export (PDF/CSV)
- [ ] Add dark mode toggle
- [ ] Implement task reminders/notifications
- [ ] Add calendar view
- [ ] Enable task dependencies
- [ ] Create mobile app
- [ ] Add analytics dashboard
- [ ] Implement task time tracking

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Express.js](https://expressjs.com) - Web framework
- [MongoDB](https://www.mongodb.com) - Database
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Lucide](https://lucide.dev) - Icon library

---

<div align="center">

**Built with ❤️ for better task management**

*Stay organized, stay productive*

</div>

