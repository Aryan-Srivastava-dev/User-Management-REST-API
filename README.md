# User-Management-REST-API
A fully functional CRUD application with dynamic frontend-backend interaction, allowing user management with REST API endpoints. Built completely from scratch.

# Full-Stack User Management CRUD App

A **full-stack CRUD application** built from scratch using **Node.js, Express.js, PostgreSQL, and JavaScript (Fetch API)**.  
This project demonstrates end-to-end development skills including database integration, REST API design, frontend-backend communication, and dynamic user interaction.

## Features

- **Backend**
  - Node.js + Express.js server
  - RESTful API with endpoints:
    - `GET /api/users/get` - fetch all users
    - `GET /api/users/get/:id` - fetch individual user by ID
    - `POST /api/users/post` - add a new user
    - `PATCH /api/users/:id` - update user info
    - `DELETE /api/users/:id` - delete a user
  - PostgreSQL integration with **connection pooling** and **parameterized queries**
  - Error handling for database operations
  - Clean server shutdown with `SIGINT`

- **Frontend**
  - HTML, CSS, JavaScript using **fetch() API**
  - Dynamic form handling for adding, updating, and deleting users
  - Toggleable input fields for better UX
  - Supports **enter key submission**
  - Handles optional and null fields gracefully

- **Project Highlights**
  - Fully **built from scratch**, no templates
  - End-to-end integration of frontend and backend
  - Polished UX for all CRUD operations
  - Realistic database management app suitable for production-level learning

## What I Learned

- Full-stack development with **Node.js, Express.js, PostgreSQL**
- REST API design and CRUD operations
- Frontend-backend communication using **fetch() API**
- Dynamic form handling with toggleable inputs and enter-key submission
- Handling optional/null fields in database updates
- Independent testing, debugging, and project integration

## Future Improvements

- Deploy the app online with a live demo
- Add user authentication
- Add validation and error messages in the frontend

