# 🛍️ My E-Commerce App

A performant and scalable e-commerce frontend application built using **Next.js**, **TypeScript**, and **SCSS**, following the **Atomic Design** pattern. This project demonstrates best practices in state management, routing, API integration, performance optimization, and component-driven development.

### 🌐 [Live Demo](https://storeapp-nextjs.netlify.app/)

---

## 📌 Problem Statement

Design and develop a modern e-commerce web application that allows users to:

- Browse a list of products
- View detailed information for each product
- Navigate between product listings and individual product detail pages
- Maintain smooth routing and state transitions
- Avoid unnecessary re-fetching of product data when revisiting the same product detail page

The application must be built using the latest best practices including:

- **Next.js** for server-side rendering and routing
- **TypeScript** for static type checking
- **SCSS** for modular and maintainable styling
- **Atomic Design** for UI component organization
- **React Context + useReducer** for global state management
- **Unit testing** to ensure code quality and stability

API Source: [FakeStore API](https://fakestoreapi.com/docs#tag/Products/operation/addProduct)

---

## 🔧 Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **SCSS (Modules)**
- **React Context API + useReducer**
- **Jest + React Testing Library**
- **Atomic Design Architecture**
- **FakeStore API**

---

## 🚀 Features

- 🔄 Dynamic Routing with Next.js
- 🧱 Atomic Design component structure
- 🛒 Product Listing Page
- 📄 Product Detail Page
- 🧠 Global state management with Context + useReducer
- 🚫 Avoid redundant API calls on same PDP visits
- ✅ Unit tested components
- 💅 Responsive, styled using SCSS modules

---

## 📁 Project Structure
```
my-ecom-app/src
├── __mocks__
├── app/ # Next.js app router (product listing, product details)
├── components/ # Atomic Design components (atoms, molecules, organisms, templates)
├── context/ # Global state context and reducer
├── services
├── styles/ # SCSS modules
└── types/ # TypeScript types
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js (v16 or higher)](https://nodejs.org/)
- npm or yarn

### 🔄 Clone the Repository

```bash
git clone https://github.com/swap7206/my-ecom-app.git
cd my-ecom-app
📦 Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
🏗️ Run Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
App will be available at: http://localhost:3000

🛠️ Build for Production
bash
Copy
Edit
npm run build
npm start
# or
yarn build
yarn start
🧪 Run Test Cases
bash
Copy
Edit
npm run test
# or
yarn test
📦 API Reference
Using FakeStore API:

GET /products - Get list of products

GET /products/:id - Get a specific product by ID

📸 Screenshots
(Add screenshots here if needed)

🧑‍💻 Author
Swapnil

🪪 License
This project is licensed under the MIT License - see the LICENSE file for details.