# 🌿 PlantPal

**Your Digital Assistant for Plant Care**

---

## 📝 Project Overview

**PlantPal** is a full-stack, mobile-responsive web application designed to help plant lovers easily log, track, and manage care tasks for their indoor and outdoor plants.  
Users can keep track of watering, fertilizing, health checkups, and receive reminders — making plant care effortless and organized.

---

## 🚀 Main Features

- 🌱 **Add & Manage Plants:** Create, update, and delete plant records  
- 🔔 **Reminders:** Schedule watering and fertilizing reminders  
- 💬 **Health Tracker:** Monitor and log plant health over time  
- 🌘 **Dark Mode:** Toggle between light and dark themes  
- 🧭 **Private Routes:** Access detailed plant info and dashboard (requires login)  
- 🎨 **Responsive UI:** Optimized for mobile, tablet, and desktop  
- 🌵 **Themed Design:** Styled based on plant types like succulents, ferns, bonsai  
- ✅ **Feedback System:** Clean success and error messages for user actions

---

## 🧪 Tech Stack

### Frontend

- React `^19.1.0`  
- Tailwind CSS `^4.1.7`  
- DaisyUI `^5.0.35`  
- React Router DOM `^7.6.0`  
- Firebase Authentication `^11.7.3`  
- Lottie React `^2.4.1`  
- React CountUp `^6.5.3`  
- SweetAlert2 `^11.21.2`  
- Swiper.js `^11.2.6`  
- React Icons `^5.5.0`  
- React Tooltip `^5.28.1`

### Backend

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- dotenv  
- CORS  
- REST API

---

### 🌐 Live Demo

🔗 [https://assignment10-tamzid.surge.sh/](https://assignment10-tamzid.surge.sh/)

---

## 🌐 API Endpoints

### Public Routes

| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | `/`              | Check if server is running        |
| GET    | `/plants`        | Get all plants                    |
| GET    | `/plants/recent` | Get 6 most recently added plants  |

### Authenticated/User-Specific Routes (Filtered by Email)

| Method | Endpoint          | Description                       |
|--------|-------------------|-----------------------------------|
| POST   | `/plants`         | Add a new plant                   |
| GET    | `/plants/byEmail` | Get plants filtered by user email|
| GET    | `/plants/:id`     | Get a single plant by ID          |
| PUT    | `/plants/:id`     | Update a plant by ID              |
| DELETE | `/plants/:id`     | Delete a plant by ID              |

---

## 🛠️ Getting Started (Local Setup)

### ⚙️ Prerequisites

- Node.js (v16+)
- MongoDB Atlas account or local MongoDB
- Firebase project credentials

---

### 📦 Backend Setup

1. Clone the full project and go to the server folder:
   ```bash
   git clone https://github.com/tamzid-molla/PlantPal.git
   cd PlantPal/server
2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your environment variables:
    ```ini
    DB_USER=your_mongodb_user
    DB_PASSWORD=your_mongodb_password
    PORT=3000
    ```

4. Start the server:
    ```bash
    nodemon index.js
    ---


### 💻 Frontend Setup

1. In a new terminal, navigate to the client folder:
    ```bash
    cd client
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm run dev
    ```
