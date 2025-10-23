# User-Management-REST-API
A fully functional CRUD application with dynamic frontend-backend interaction, allowing user management with REST API endpoints. Built completely from scratch.

# Full-Stack User Management CRUD App

A **full-stack CRUD application** built entirely from scratch using **Node.js, Express.js, PostgreSQL, HTML, CSS, and JavaScript (Fetch API)**.  
It demonstrates strong understanding of backend architecture, REST API design, frontend-backend communication, and dynamic UI interactivity.

---

## 🚀 Features

### 🧠 Backend
- Developed with **Node.js** and **Express.js**
- REST API routes:
  - `GET /api/users/get` — fetch all users
  - `GET /api/users/get/:id` — fetch user by ID
  - `POST /api/users/post` — add a new user
  - `PATCH /api/users/:id` — update user data
  - `DELETE /api/users/:id` — remove a user
- Integrated with **PostgreSQL** using connection pooling (`pg` module)
- Supports optional and null fields gracefully
- Implements proper error handling and clean server shutdown logic

---

### 💻 Frontend
- **Built using HTML, CSS, and JS (no frameworks)**
- Connected to backend via **Fetch API**
- Interactive interface to perform all CRUD operations:
  - Fetch all users or specific users by ID
  - Add new users with validation
  - Update user details selectively (supports partial updates)
  - Delete users by ID
- **Dynamic input visibility toggling** for cleaner UX
- **Enter-key submissions** for all actions (no submit buttons required)
- Logs all responses and errors to the browser console for clarity

---

### 🧩 Technical Highlights
- Complete end-to-end frontend–backend integration
- Handles user interactions dynamically with clean event-based logic
- Proper usage of `async/await` for asynchronous API calls
- Input fields adapt to user actions for seamless interactivity
- Independent testing and debugging performed for all routes and scenarios

---

## 📚 What I Learned
- RESTful API development with **Express.js**
- **Database integration** and parameterized queries in PostgreSQL
- Building **frontend logic** using Fetch API
- Handling user inputs dynamically with DOM manipulation
- Managing optional and null values in database updates
- Structuring full-stack projects from scratch

---

## 🔮 Future Enhancements
- Add frontend form validation and inline error messages
- Display fetched users dynamically on the webpage (instead of console)
- Add authentication (JWT-based)
- Deploy to Render or Vercel with hosted PostgreSQL on Supabase

---

## 🧠 Tech Stack
**Frontend:** HTML, CSS, JavaScript (Fetch API)  
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL  
**Other:** REST API, async/await, JSON handling

---

⭐ *Built completely from scratch, demonstrating full ownership of the code, debugging, and feature design.*
