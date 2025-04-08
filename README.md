# 📰 SD NC News – Frontend Application
Live Site → https://sd-news-ap.netlify.app

## 📌 Project Overview
SD NC News is a fully functional news web app built using React on the frontend, which interacts with a RESTful backend API (Node.js, Express, PostgreSQL). The app allows users to:

- Browse all articles

- Filter articles by topic

- View individual articles in detail

- Vote on articles (like/dislike)

- Read and post comments

- Delete comments with authentication

- Navigate through different topics using a dynamic dropdown

The project mimics the experience of a basic news site, offering features like voting systems, comment threads, and topic-based filtering — all powered by live data from a hosted backend API.

## 🚀 Live Demo
Check out the live deployed version:
👉 https://sd-news-ap.netlify.app

(note it may take some time for the backend to retrieve data from the api on first bootup, give it some time!)

## ⚙️ Project Setup (Local Dev)
This repo is the frontend of the NC News project. To get everything running locally:

## 1️⃣ Clone the Repository

```git clone https://github.com/Shemz-ux/nc-news-app-fe```
```cd nc-news-app```

## 2️⃣ Install Dependencies
Make sure you have Node.js installed (v16+ recommended).

```npm install```

## 🧪 Running the App Locally
To start the frontend development server:

```npm run dev```
The app will run locally (usually on http://localhost:5173) and connect to the live backend API (ensure CORS is allowed or use a .env if the backend is local).

## 🔗 Backend API
This frontend communicates with a custom-built RESTful API. If you'd like to clone and run the backend server locally or explore its documentation, check it out here:

## 👉 NC News Backend GitHub Repo

API includes endpoints to:

- Fetch articles, comments, users, topics

- Vote on articles

- Post and delete comments

- Filter articles by topic

## 🧰 Tech Stack
- Frontend Framework: React (Vite)

- Routing: React Router DOM

- HTTP Requests: Axios

- State Management: React hooks (useState, useEffect, useContext)

- Styling: Pure CSS (custom styles)

- Backend API: Node.js, Express, PostgreSQL

## 🌟 Features You Can Explore
- 🧭 Navigation bar with topic filtering dropdown

- 👍 Voting system with one-vote restriction

- 💬 Comment form with username validation before delete

- ⚡ Dynamic routing and query handling via React Router

- 🎯 Clean and responsive layout built with Flexbox

## 🧠 What I Learned
In building this project, I aimed to gain hands-on experience with:

- Connecting a frontend to a live REST API

- Managing application state and API calls efficiently

- React router and query param handling

- Error handling and conditional rendering

- Creating a responsive and interactive UI with modular components

## ✅ Requirements
Node.js v16+

(Optional) If running backend locally: PostgreSQL v14+#