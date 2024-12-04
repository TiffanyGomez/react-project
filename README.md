
# Steppy

**Steppy** is a modern, full-stack web application designed to manage and showcase a shoe store. It provides an intuitive shopping experience for customers, complete with a sleek frontend and a robust backend.

---

## Features

### Customer Features
- **Product Browsing**: View a catalog of shoes with detailed descriptions, images, and prices.
- **Shopping Cart**: Add and manage products in your cart.
- **Secure Checkout**: Complete purchases with secure payment options.

### Admin Features
- **Product Management**: Add, update, and delete shoe listings.
- **Order Management**: View and manage customer orders.

---

## Project Structure

### Backend
The backend is built using **Node.js** with Express.js for RESTful APIs and MongoDB for data storage.

- **Key Features**:
  - API endpoints for managing products, users, and orders.
  - Secure user authentication.
  - Environment variables for sensitive data.

#### Main Files and Directories:
- `server.js`: Entry point for the backend server.
- `routes/`: Defines API endpoints.
- `controllers/`: Business logic for API routes.
- `models/`: Database schemas and models.

---

### Frontend
The frontend is developed using **React** with **TailwindCSS** for styling.

- **Key Features**:
  - Dynamic and responsive user interface.
  - Integration with backend APIs for seamless data flow.
  - User-friendly design for browsing and purchasing products.

#### Main Files and Directories:
- `src/`: Contains all React components.
- `public/`: Static assets for the frontend.
- `tailwind.config.js`: Configuration file for TailwindCSS.

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** database setup.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the necessary environment variables:
   ```plaintext
   MONGO_URI=<your_mongo_connection_string>
   PORT=<backend_port>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Launch the backend server to serve API endpoints.
2. Launch the frontend development server to access the web application.
3. Navigate to `http://localhost:<frontend_port>` in your browser to explore the app.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or feedback, reach out to:
- **Email**: support@steppyshoestore.com
- **GitHub Issues**: [Submit an issue](https://github.com/Mahmoud-Mh/Steppy/issues)

---

Thank you for choosing Steppy!
