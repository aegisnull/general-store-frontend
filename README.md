# General Store 🛒

![Demo](https://github.com/aegisnull/general-store-frontend/assets/27663011/cc56cc35-abc1-41da-93ea-66070441bc31)

This is a general store web application built with Next.js, Mantine UI, Jest, React Testing Library, Cypress, and MongoDB Atlas. The application is divided into an administration section and a customer section. The admin can manage the product inventory, while the customer can view products, add them to the shopping cart, and checkout.

## Requirements ✅

- [Node.js](https://nodejs.org/en/) >= 16
- [npm](https://www.npmjs.com/) >= 6

## Getting Started 🚀

1. Clone the repository

```bash
git clone https://github.com/aegisnull/general-store-frontend.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

This will start the development server on port 3000. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Functionalities 🛠️

- Admin 👤

  - Login 🔑
  - Logout 🔒
  - Add product ➕
  - Edit product 📝
  - Delete product ❌

- Customer 🛒
  - View products 👀
  - Add product to cart 🛍️
  - Remove product from cart ❌
  - Checkout 💰

## Testing 🧪

### Unit Testing 🧩

```bash
npm run test
```

### End-to-End Testing 🔄

```bash
npm run cypress
```

### Coverage 📊

The testing coverage is as follows:

Global: 40.27%

- components/Features: 100%
- components/Hero: 100%
- components/ProductCard: 33.33%
- components/ProductDisplay: 57.69%
- components/ShoppingCart: 11.11%

- contexts/CartContext: 26.66%

- pages/checkout: 47.05%
- pages/index: 88.88%

## Repository 📂

- 📁 [Frontend](https://github.com/aegisnull/general-store-frontend)
- 📁 [Backend](https://github.com/aegisnull/general-store-backend)

## Demo 🌐

- [Frontend](https://store-frontend-aegisnull.vercel.app)
- [Backend](https://general-store-backend-production-62ab.up.railway.app/)

## Contributors 🤝

This project was created by Luis Tellez.

- [GitHub](https://github.com/aegisnull)

- [LinkedIn](https://www.linkedin.com/in/luistellezv/)
