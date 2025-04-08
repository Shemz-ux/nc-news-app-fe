# 📰 SD NC News API

Front end NC news app


## Project Overview

This project is a backend service built with Node.js, Express, and PostgreSQL. It provides endpoints to retrieve, post, update, and delete news-related data such as articles, topics, users, and comments.

## Setup Instructions

### 1️⃣ Clone the Repository

- clone the repo:
``` git clone https://github.com/Shemz-ux/nc-news-app.git ```

cd northcoders-news-be

### 2️⃣ Install Dependencies

- Ensure you have Node.js v16+ and PostgreSQL v14+ installed, then run:

```npm install```

### 3️⃣ Set Up Environment Variables

#### Create two .env files in the project root:

 - ✅ .env.development

```PGDATABASE=nc_news``` (no semi-colons)

- ✅ .env.test

```PGDATABASE=nc_news_test``` (no semi-colons)

✅ Ensure these files are added to .gitignore to prevent exposing credentials.

Note: these files, will connect you to a specific data base [test/dev], based on what environment you are running in.

## Database Setup & Seeding

### 4️⃣ Create the Databases

Run the following command to set up the development and test databases:

```npm run setup-dbs```

### 5️⃣ Seed the Development Database

```npm run seed-dev```

## Running Tests

- To verify functionality and error handling, run:

```npm test```

- For specific test files:

```npm run test-seed```
```npm run app-test```

## Running the Server Locally

### 6️⃣ Start the Server

- Run:
```npm run start```

By default, it will run on port 9090, which will allow you to make various requests to the db using a client simulator like insomnia or postman

## API Endpoints

For a full list of available endpoints and their descriptions, visit:

- GET /api

Example: View ```endpoints.json```

## Tech Stack

- **Frontend**: React, CSS, JS
- **Framework**" Axios

## Minimum Requirements

- Node.js: v16+

- PostgreSQL: v14+