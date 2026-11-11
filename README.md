# Task Manager

A compact **Node.js, Express, and MongoDB** task-management app with server-rendered pages. The project demonstrates a conventional CRUD workflow using controllers, routes, and a Mongoose data model.

## What the code covers

- Create and list tasks
- View individual tasks
- Edit and delete tasks
- Separate active and completed tasks in the home view
- Server-rendered views using EJS

## Tech stack

Node.js · Express · MongoDB · Mongoose · EJS · Tailwind CSS

## Getting started

Prerequisites: Node.js, npm, and access to a MongoDB database for local development.

```bash
git clone https://github.com/Abi0l9/task-manager.git
cd task-manager
npm install
```

Create a local `.env` file and provide the database connection setting read by `utils/config.js`:

```dotenv
DB=mongodb://127.0.0.1:27017/task-manager
```

Use your own **local, disposable development database**. Never commit credentials or an environment file.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:8000`.

Optional CSS build:

```bash
npm run build-css
```

## Code map

- `index.js`: Express app, middleware, and routes
- `router/tasks.js`: task endpoints
- `controllers/`: request handling
- `models/`: Mongoose data models
- `views/`: EJS pages
- `db.js`: MongoDB connection

## Project scope

This is a learning/portfolio application rather than a hosted production service. It showcases backend structure, MongoDB persistence, and a server-rendered workflow.
