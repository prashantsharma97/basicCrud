# Node.js + MySQL CRUD API with Authentication (JWT) 🚀

This is a REST API built with **Node.js, Express, MySQL, and JWT authentication**. It includes:
- User Registration & Login
- Role-based authentication (Admin & User)
- CRUD operations for users
- Secure routes using JWT

---

## **🛠️ Installation & Setup**
npm install express mysql2 bcryptjs jsonwebtoken dotenv cors body-parser


### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
### 
npm install

### 2️⃣ **Setup Environment Variables**
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_secret_key
PORT=5000

### 3️⃣ **

Run the MySQL Database**
CREATE DATABASE your_database_name;

### 4️⃣ **Start the Server**
npm run dev

### React + Tailwind CSS Install
npm install -D tailwindcss postcss autoprefixer

Phir Tailwind ka config file generate karo:
npx tailwindcss init -p
Ye command tailwind.config.js aur postcss.config.js file bana degi.

✅ 2. tailwind.config.js Ko Update Karo
Jo tailwind.config.js file bani hai, usme content paths set karo:

🔹 tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
✅ 3. Tailwind Ko index.css Me Import Karo
Ab src/index.css file me yeh Tailwind ke base styles add karo:

🔹 src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;



