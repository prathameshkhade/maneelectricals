# Mane Electricals

## Project Structure

```sh
/src
├── /api
│   ├── apiSlice.js (RTK Query setup)
│   ├── authApi.js (Endpoints for authentication)
│   ├── productsApi.js (Endpoints for products, details, etc.)
│   └── ordersApi.js (Endpoints for ordering and payment integration)
├── /assets
│   ├── /images
│   └── /styles
│       ├── main.css
│       └── variables.css
├── /components
│   ├── /common (Reusable, general components like Button, Card, Header, Footer)
│   │   ├── Button.jsx
│   │   └── Header.jsx
│   └── /ui (Design-system components, if needed)
├── /config
│   └── constants.js (Environment variables, API URLs)
├── /features (Domain-specific logic, components, and state)
│   ├── /products
│   │   ├── components
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductDetail.jsx
│   │   ├── pages
│   │   │   ├── ProductsListPage.jsx
│   │   │   └── ProductDetailPage.jsx
│   │   └── productSlice.js (Local state/logic if needed, otherwise use RTK Query)
│   ├── /cart
│   │   ├── components
│   │   │   └── CartIcon.jsx
│   │   └── cartSlice.js (Cart logic and state)
│   └── /auth
│       ├── components
│       │   └── LoginForm.jsx
│       └── authSlice.js (Authentication state)
├── /hooks
│   ├── useAuth.js
│   └── useCart.js
├── /layouts
│   ├── AppLayout.jsx (Main application layout with Header/Footer)
│   └── AuthLayout.jsx
├── /pages (Top-level route components, can be within /features/domain/pages too)
│   ├── HomePage.jsx
│   └── NotFoundPage.jsx
├── /providers
│   └── AuthProvider.jsx (Context or similar for global state)
├── /store
│   └── store.js (Redux Toolkit store configuration)
├── App.jsx (Main App component, router setup)
├── main.jsx (Entry point, renders App)
└── routes.jsx (Centralized route definitions if using React Router)
```