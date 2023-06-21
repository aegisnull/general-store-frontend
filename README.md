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

| File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s            |
| ------------------------- | ------- | -------- | ------- | ------- | ---------------------------- |
| All files                 | 50.18   | 39.02    | 35.52   | 51      |
| api                       | 9.75    | 0        | 0       | 10.25   |
| orders.js                 | 17.64   | 100      | 0       | 20      | 5-17,22-28                   |
| users.js                  | 4.16    | 0        | 0       | 4.16    | 4-57                         |
| components/Features       | 100     | 50       | 100     | 100     |
| Features.jsx              | 100     | 50       | 100     | 100     | 34                           |
| components/Footer         | 100     | 50       | 100     | 100     |
| Footer.jsx                | 100     | 50       | 100     | 100     | 14                           |
| components/Header         | 45.76   | 33.33    | 17.64   | 46.42   |
| Header.jsx                | 45.76   | 33.33    | 17.64   | 46.42   | 137-179,190-409              |
| components/Hero           | 100     | 100      | 100     | 100     |
| Hero.jsx                  | 100     | 100      | 100     | 100     |
| components/OrderHistory   | 80      | 100      | 60      | 78.57   |
| OrderHistory.js           | 80      | 100      | 60      | 78.57   | 14,38-51                     |
| components/ProductCard    | 57.14   | 100      | 50      | 57.14   |
| ProductCard.jsx           | 57.14   | 100      | 50      | 57.14   | 14-20                        |
| components/ProductDisplay | 81.81   | 100      | 66.66   | 81.81   |
| ProductDisplay.jsx        | 81.81   | 100      | 66.66   | 81.81   | 19,27-28,46                  |
| components/ShoppingCart   | 48.88   | 61.53    | 37.5    | 50      |
| ShoppingCart.jsx          | 48.88   | 61.53    | 37.5    | 50      | 22-46,56,122-188             |
| contexts                  | 38.09   | 100      | 0       | 43.75   |
| CartContext.js            | 26.66   | 100      | 0       | 27.27   | 6-19                         |
| UserContext.js            | 66.66   | 100      | 0       | 80      | 6                            |
| pages                     | 47.05   | 20       | 27.27   | 48.48   |
| checkout.js               | 47.05   | 20       | 27.27   | 48.48   | 16-17,21-23,27-50,91,112-122 |

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
