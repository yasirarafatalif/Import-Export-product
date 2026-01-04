# 📦 Import-Exports: Product Exchange Platform

This project is a web application through which users can view various products, **import** them for personal use, and **export** (sell or supply) new products to the platform.

---

## ✨ Key Features

### **Extensive Catalog**

A simple and beautiful presentation of all available products.

### **Product Import**

Users can add any product to their personal list or stock.

### **Product Export**

Users can upload their own products to the platform to offer them for sale or supply to others.

### **User Authentication**

Secure sign-up, login, and logout system using **Firebase Authentication**.

### **Fast and Responsive UI**

Fast-loading and responsive interface suitable for all devices, built with **Tailwind CSS** and **React**.

---

## 🛠️ Tech Stack

### **Frontend**

* **React.js** – JavaScript library for building user interfaces.
* **Tailwind CSS** – Utility-first CSS framework for fast and maintainable styling.
* **React Router** – For managing client-side routing.

### **Services**

* **Firebase** – Used for Firestore database and authentication, accessed directly from the frontend.

---

## 🚀 Installation & Setup

Follow the steps below to run this project locally on your system.

### **1. Clone the Repository**

```bash
git clone https://github.com/yasiralif/Import-Export-product.git
cd import-exports
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Set Environment Variables (.env)**

Create a `.env` file in the project root and add your Firebase configuration:

```
# Firebase Configuration (Replace with your actual values)
VITE_FIREBASE_API_KEY="AIzaSy..."
VITE_FIREBASE_AUTH_DOMAIN="import-exports.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="import-exports"
# ... other Firebase configurations
```

### **4. Run the Project**

```bash
npm run dev
# or
npm start
```

The application will typically run at:

```
http://localhost:3000
```

---

## 🤝 Contributing

If you wish to contribute to this project, please create a pull request. Before making major changes, please open an issue or start a discussion.

---

## © Credits

© [Yasir Arafat Alif]
