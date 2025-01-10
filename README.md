# login_and_register_backend_using-_NodeJS_Express_MongoDB

Description
This project is a simple and secure user authentication system built with the MERN stack backend technologies. It allows users to register, log in, and securely manage their credentials using password hashing and JSON Web Tokens (JWT) for session management.

Features
User Registration: Users can create an account with a unique username and a securely hashed password.
User Login: Validates user credentials and generates a JWT token for authentication.
Password Security: Implements bcrypt to hash passwords and compare them securely.
Token-Based Authentication: Uses JWT for managing user sessions with token expiration.
Error Handling: Includes comprehensive error handling for database operations and authentication.

Tech Stack
Node.js: Backend runtime environment.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for data persistence.
Mongoose: ODM library for MongoDB.
bcrypt: Library for password hashing.
jsonwebtoken (JWT): Library for secure token generation and validation.

Folder Structure
controllers/: Contains logic for user registration and login.
models/: Defines the user schema and methods for password hashing and comparison.
routes/: Handles API endpoints for user registration and login.
config/: Database connection logic.
server.js: Main entry point of the application.

How to Run
Clone the repository.
Install dependencies: 
npm install

Start the MongoDB server on your local machine.
Update the MongoDB URI in config/db.js if necessary.

Run the server:
npm start

Use an API client (e.g., Postman) to test the endpoints:
POST /api/users/register - Register a new user.
POST /api/users/login - Log in as a user and retrieve a JWT.
