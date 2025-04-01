# Node REST API

This project was created using TypeScript, SOLID principles, and Design Patterns.

**The focus of this project is to show how to implement the SOLID principles and Design Patterns (Dependency Injection and Factory Method).**

### Technologies:

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [MongoDB](https://www.mongodb.com/)
- [Zod](https://zod.dev/)

### Topics

- SOLID

### Design Patterns

- Dependecy Injection
- Factory Method

### Features

- CRUD User
- Data Validation using [Zod](https://zod.dev/)
- Tests

### How to run the project

- **npm install** (to install node modules)
- **npm run dev** (to start the server)
- **npm run build** (to build the project)
- **npm run test** (to run the tests)

# Routes

Here are the routes that have already been created:

### Users

| `/users`   |                              |                       |     |
| ---------- | ---------------------------- | --------------------- | --- |
| **Method** | **Route**                    | **Description**       |
| POST       | `/users`                     | create a new user     |
| GET        | `/users/get-user/:id`        | get one user by id    |
| GET        | `/users`                     | get all users         |
| PUT        | `/users/:id`                 | update one user       |
| PUT        | `/users/update-password/:id` | update user password  |
| DELETE     | `/users/:id`                 | delete one user by id |
