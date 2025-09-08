# Library Management System (LMS)

A simple *Library Management System* built with Node.js, Express, and Sequelize (MySQL).
This project allows users to borrow and return books, track fines, and manage records. Admins can view all borrow records with associated user and fine details.

## Features

### User Management

* CRUD operations for users

* User roles (Admin/User)

### Book Management

* Add, update, delete, and list books

* Track available copies

* Borrow & Return Books

* Borrow a book if available

* Return a book and calculate fines if overdue

* Prevent duplicate or invalid borrow/return actions

### Fine Management

* Automatic fine calculation based on due date

* Associate fines with borrow records and users

### Admin Dashboard

* Admins can fetch all borrow records with user, book, and fine details

## Tech Stack

* Backend: Node.js, Express.js

* Database: MySQL (Sequelize ORM)

* Authentication: JWT (optional, based on your implementation)

* Utilities: Custom fine calculator

## Setup Instructions

Clone the repository

```
git clone https://github.com/Jiken-Patel/Library-Management-System.git
cd LMS
```


* Install dependencies

```npm install```

Configure Environment:-
Create a .env file:

```base
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```
 Create the Database:-
```sql
CREATE DATABASE DATABASENAME;
```

Start the Server

```npm start```


Server will run on http://localhost:3000 (or your configured port)

### API Endpoints
Users
```
POST /users - Create user

GET /users - List users

GET /users/:id - Get user by ID

PUT /users/:id - Update user

DELETE /users/:id - Delete user
```

Books
```
POST /books - Add a new book

GET /books - List all books

GET /books/:id - Get book by ID

PUT /books/:id - Update book

DELETE /books/:id - Delete book
```

Borrow Records
```

POST /borrow - Borrow a book

POST /return - Return a book

GET /records - Admin only: Get all borrow records
```

## Fines

Handled automatically during book return

Fine table stores fineAmount, paidStatus, and references borrowId & userId

## Testing API
You can use:

* Postman (Recommended)

* Hoppscotch (Browser-based)

* Thunder Client (VS Code extension)

## Contributing
Feel free to contribute and suggest improvements!
