# 🌿 PlantPal Backend

Welcome to the **PlantPal Backend** — the server-side codebase for the PlantPal plant care tracking application. This backend is built using **Express.js** and **MongoDB**, and is responsible for managing plant data, handling CRUD operations, and powering the frontend.

---

## 🧪 Tech Stack

- ✅ Node.js
- ✅ Express.js
- ✅ MongoDB (Atlas)
- ✅ dotenv
- ✅ CORS
- ✅ REST API

---

## 🚀 Getting Started

## 🧠 Special Logic
* Plants are stored with a createdAt timestamp.
* careLevelPriority is auto-calculated based on the careLevel field:

Care Level	Priority
easy	1
moderate	2
difficult	3

---

## 🌐 API Endpoints

* 🔓 Public Routes
Method	Endpoint	Description
- GET	/	Check if server is running
- GET	/plants	Get all plants
- GET	/plants/recent	Get 6 most recently added plants

---

* 🔐 Auth/User-Specific Routes (Filtered by Email)
Method	Endpoint	Description
- POST	/plants	Add a new plant
- GET	/plants/byEmail	Get plants filtered by user email
- GET	/plants/:id	Get single plant by ID
- PUT	/plants/:id	Update a plant by ID
- DELETE	/plants/:id	Delete a plant by ID


