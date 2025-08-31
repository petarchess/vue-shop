# 🛍️ Vue Shop

A simple, modern e-commerce frontend built with **Vue 3** and **Tailwind CSS**.  
This project demonstrates a lightweight shopping cart application with pages for products, about, contact, and cart management.  

---

## ✨ Features

- ⚡ **Vue 3 (Composition API)** for clean, reactive state management  
- 🎨 **Tailwind CSS** for modern, responsive styling  
- 🛒 **Shopping cart** with add/remove functionality  
- 📄 Pages: **Shop**, **About**, **Contact**, **Cart**  
- 📦 Reusable components:
  - `ProductCard` – displays product info + add to cart
  - `CartItem` – cart item with remove option
  - `Footer` – reusable footer across all pages
- 📊 Cart total auto-calculated  
- 📧 Contact form and email subscription form  
- 📱 Fully responsive  

---

## 🗂️ Project Structure

`src/
├── components/
│ ├── CartItem.vue
│ ├── Footer.vue
│ ├── HelloWorld.vue
│ └── ProductCard.vue
│
├── pages/
│ ├── About.vue
│ ├── Cart.vue
│ ├── Contact.vue
│ └── Shop.vue
│
├── App.vue
└── main.js`

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/vue-shop.git
cd vue-shop
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

App will be available at: http://localhost:5173/ (default Vite port)

🛠️ Tech Stack
Vue 3 – progressive JS framework

Vite – fast dev server and bundler

Tailwind CSS – utility-first CSS framework

📸 Screenshots
🏪 Shop Page
Displays all products with Add to Cart functionality.

🛒 Cart Page
Lists cart items, allows removing products, and shows the total price.

📝 About & Contact
Static informational pages with contact form and footer.

📌 Next Steps / Improvements
✅ Persist cart in localStorage

✅ Add checkout page with form

✅ Fetch products from a backend API instead of static data

✅ Add authentication (login/register)

✅ Dark mode toggle

📜 License
This project is licensed under the MIT License.
Feel free to use and modify for personal or commercial projects.
