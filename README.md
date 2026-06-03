# Multi Vendor E-Commerce

A full-stack multi-vendor e-commerce platform built with the MERN stack. The application allows vendors to manage their products while customers can browse, search, and purchase products from multiple sellers through a unified marketplace.

## Features

### Authentication & Authorization

* User registration and login
* JWT-based authentication
* Email verification
* Password reset functionality
* Role-based access control

### Customer Features

* Browse products
* Search and filter products
* View product details
* Shopping cart management
* Order placement
* Order history
* User profile management

### Vendor Features

* Vendor dashboard
* Product management
* Inventory tracking
* Order management
* Sales statistics

### Admin Features

* User management
* Vendor approval and management
* Product moderation
* Order monitoring
* Platform analytics

## Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS / CSS Modules

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

## Project Structure



## Installation

### Clone the Repository

```bash
git clone https://github.com/karan-dangol0/multivendor-ecommerce.git
cd multivendor-ecommerce
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASSWORD=
```

## Database Models

### User

* Full Name
* Email
* Password
* Role
* Verification Status

### Product

* Product Name
* Price
* Product Details
* Categories
* Product Photos
* Total Items
* Sold Items

### Order

* Customer Information
* Ordered Products
* Payment Status
* Order Status

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/verify-email
POST /api/auth/forgot-password
```

### Products

```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

```
GET    /api/orders
POST   /api/orders
GET    /api/orders/:id
```

## Future Improvements

* Payment gateway integration
* Wishlist functionality
* Product reviews and ratings
* Real-time notifications
* Advanced analytics dashboard
* Coupon and discount system
* Vendor payouts
* Multi-language support

## License

This project is licensed under the MIT License.

## Author

Karan Dangol

GitHub: https://github.com/karan-dangol0
