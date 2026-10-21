Here is a updated, professional **`README.md`** tailored specifically to your exact repository structure (`frontend/` and `backend/` instead of `client/` and `server/`):

---

# 🌐 Sidra - Bilingual Corporate Website (MERN Stack)

A modern, responsive corporate website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), featuring full **Arabic** and **English** bilingual support. The platform includes an intuitive administrative dashboard that enables authorized users to manage company news, image galleries, and announcements efficiently.

---

## 🚀 Features

* 🌍 **Bilingual Support**: Native support for English (LTR) and Arabic (RTL) layouts.
* 📱 **Responsive Design**: Fully responsive interface optimized for mobile, tablet, and desktop devices.
* 📰 **News Management**: Create, edit, and publish company news via the admin panel.
* 🖼️ **Image Gallery**: Organize and manage media/photo galleries seamlessly.
* 📢 **Announcements**: Publish, update, and manage official company announcements.
* 🔐 **Role-Based Access Control (RBAC)**: Secure access restrictions ensuring administrative tools are protected based on user roles.
* 🛠️ **Admin Dashboard**: A centralized content management workspace.
* ⚡ **Performance & Usability**: Clean component architecture designed for high maintainability, smooth UI interactions, and fast load times.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **MongoDB** | NoSQL Database for flexible dynamic content management |
| **Express.js** | Lightweight web framework for RESTful backend APIs |
| **React.js** | Frontend library for building interactive, multi-language UI |
| **Node.js** | Server runtime environment |

---

## 🏗️ Project Structure

```text
Sidra-main/
├── backend/                # Node.js & Express API Server
│   ├── controllers/        # Route controllers / business logic
│   ├── middleware/         # Auth, RBAC, and error handlers
│   ├── models/             # Mongoose database schemas
│   ├── routes/             # REST API endpoints
│   ├── .env                # Environment configuration (ignored)
│   └── package.json
├── frontend/               # React client application
│   ├── public/             # Static files & assets
│   ├── src/                # Components, pages, and locales (ar/en)
│   └── package.json
├── .gitignore
├── package-lock.json
└── README.md

```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following software installed locally:

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB](https://www.mongodb.com/) (Local instance or Atlas connection string)
* [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Sidra-main

```

---

### 2. Backend Setup

1. **Navigate to the backend directory:**
```bash
cd backend

```


2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```


4. **Run the Backend Server:**
```bash
npm run dev

```


*(The server usually starts on `http://localhost:5000`)*

---

### 3. Frontend Setup

1. **Open a new terminal tab/window and navigate to the frontend directory:**
```bash
cd frontend

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the Frontend Development Server:**
```bash
npm run dev
# or
npm start

```


4. Open `http://localhost:3000` (or the URL outputted by Vite/React) in your browser.

---

## 🔒 Security Highlights

* **Role-Based Access Control (RBAC)**: Enforces backend middleware authentication checks before granting permission to administrative endpoints.
* **Separation of Concerns**: Strict boundary between public frontend components and backend administrative API routes.
* **Environment Variable Hygiene**: Sensitive configuration values (database connection strings, API secrets) are excluded via `.gitignore`.

---

## 🌍 Language & Localization Support

* **English**: Left-to-Right (LTR) default layout.
* **Arabic**: Right-to-Left (RTL) complete direction adjustment for text and navigation.

---

## 🎯 Project Objectives

* Deliver an intuitive corporate web presence for both Arabic and English audiences.
* Provide dynamic management tools for internal teams via a secure admin interface.
* Maintain clean code standards across MERN modules for easy scalability.

---

⭐ **If you find this repository useful, feel free to give it a star!**
