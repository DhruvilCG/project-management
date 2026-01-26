

# 📋 Project Management Application

## 🎥 Project Video Walkthrough

[![Watch the video](https://img.youtube.com/vi/pGvUvoeNctI/0.jpg)](https://www.youtube.com/watch?v=pGvUvoeNctI)

[Watch on YouTube](https://www.youtube.com/watch?v=pGvUvoeNctI)

---

## 🚀 Deployed Application

[https://projectmanagement-ivory-beta.vercel.app/](https://projectmanagement-ivory-beta.vercel.app/)

---

> **A modern, full-stack task management platform built with React, Node.js, and MongoDB for efficient task organization and productivity tracking**

[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![React](https://img.shields.io/badge/react-19.2.0-blue)](https://react.dev)
[![Express](https://img.shields.io/badge/express-5.2.1-black)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/mongodb-9.0.1-green)](https://www.mongodb.com)
[![Vite](https://img.shields.io/badge/vite-7.2.4-646CFF)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1.17-38B2AC)](https://tailwindcss.com)

---


## ✨ Features

- Create, edit, and delete tasks
- Set priorities and due dates
- Organize by status and priority
- Filter and search tasks
- Track productivity with stats
- Secure authentication (JWT)
- User profile management
- Real-time updates, responsive UI

---

git clone <repository-url>

## 🎬 Quick Start

```bash
# Clone & install
git clone <repository-url>
cd project-management
cd frontend && npm install
cd ../backend && npm install

# Start servers
npm start   # in backend
# In another terminal:
cd ../frontend && npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173)

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

**Frontend:** React, Vite, Tailwind CSS, Axios, Lucide, Toastify

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Bcryptjs

---


# Project Management App

[![Watch the video](https://img.youtube.com/vi/pGvUvoeNctI/0.jpg)](https://www.youtube.com/watch?v=pGvUvoeNctI)

[Live Demo](https://projectmanagement-ivory-beta.vercel.app/)

Manage tasks, priorities, and productivity with a modern web app.

## Quick Start
```bash
git clone <repository-url>
cd project-management
cd frontend && npm install
cd ../backend && npm install
npm start   # in backend
# In another terminal:
cd ../frontend && npm run dev
```
Frontend: http://localhost:5173


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

1. Register and log in
2. Add, edit, or delete tasks
3. Set priorities and due dates
4. Filter and track your progress

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

