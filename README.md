# BookBazaar
  BookBazaar is a comprehensive MERN-based e-commerce platform designed for book enthusiasts and administrators. The platform allows users to explore, purchase, and manage books with seamless functionality. The admin panel enables book management, order monitoring, and revenue tracking.



 # Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Project Repository](#project-repository)
- [Credits](#credits)
- [License](#license)
- [Contact Information](#contact-information)




# Live Demo
Explore the  **BookBazaar**  website live by clicking [**this link**](https://shyamsingh841442.github.io/Movie-Website/).


# Features
- User-Friendly Features:
  - Browse and search books by category.
  - Add books to the cart and complete purchases securely.
  - View order history and details.
- Admin Dashboard:
  - Add, update, and delete books.
  - Manage user orders and monitor sales revenue.
 - Responsive Design:
   - Fully optimized for all screen sizes and devices.
 - Secure Authentication:
   - Role-based access (Admin/User) using Firebase and protected routes.


# Installation
  To get a local copy up and running, follow these steps:

  ### Prerequisites
     Ensure you have the following installed:
      - Node.js and npm.
      - MongoDB (local or cloud setup like MongoDB Atlas)
    
  ### Steps for Frontend: 
    1. Clone the repository:
       git clone https://github.com/ShyamSingh841442/BookBazaar.git

    2. Navigate to the backend directory:
       cd backend
    
    
    3. Install dependencies for the backend:
       npm install
    
    
    4. Create a .env file in the backend folder with the following:
       .env
        MONGO_URI=<Your_MongoDB_URI>
        JWT_SECRET=<Your_JWT_Secret>
        PORT=5000
    5. Start the backend server:
       npm start
       The backend will run at http://localhost:5000.
    
    6. Navigate to the frontend directory:
       cd ../frontend
    
    7. Install dependencies for the frontend:
       npm install
       
    8. Create a .env.local file in the frontend folder with the following:
       env
       VITE_API_BASE_URL=http://localhost:5000
       
    10. Start the frontend server:
        npm run dev
        The frontend will be available at http://localhost:5173.

  ### Steps for Backend:
     1. Clone the repository:
        git clone https://github.com/ShyamSingh841442/BookBazaar.git
      
    
     2. Navigate to the backend directory:
        cd backend
    
    
     3. Install dependencies for the backend:
        npm install
    
    
     4. Create a .env file in the backend folder with the following:
        env
        MONGO_URI=<Your_MongoDB_URI>
        JWT_SECRET=<Your_JWT_Secret>
        PORT=5000
    
    
     5. Start the backend server:
        npm start
        The backend will run at http://localhost:5000.
    
    
     6. Navigate to the frontend directory:
        cd ../frontend
    
    
     7. Install dependencies for the frontend:
        npm install
    
    
     8.  Create a .env.local file in the frontend folder with the following:
         env
         VITE_API_BASE_URL=http://localhost:5000
    
    
     9. Start the frontend server:
        npm run dev
        The frontend will be available at http://localhost:5173.

# Technologies Used
### Frontend:
  - React.js: UI development.
  - Redux Toolkit: State management.
  - Vite: Development environment for faster builds.
### Backend:
- Node.js: Server-side runtime.
- Express.js: API development.
- MongoDB: Database for data storage.
### Others:
- Firebase: For user authentication.
- Chart.js: Data visualization in admin dashboards.
 
  
# Project Structure
    Backend Structure
    
     backend/
            ├── src/
            │   ├── books/
            │   │   ├── book.controller.js
            │   │   ├── book.model.js
            │   │   └── book.route.js
            │   ├── middleware/
            │   │   └── verifyAdminToken.js
            │   ├── orders/
            │   │   ├── order.controller.js
            │   │   ├── order.model.js
            │   │   └── order.route.js
            │   ├── stats/
            │   │   └── admin.stats.js
            │   ├── users/
            │   │   ├── user.model.js
            │   │   └── user.route.js
            │   ├── .env
            │   ├── index.js
            ├── package.json
            ├── package-lock.json
            └── README.md

     Frontend Structure

       frontend/
            ├── public/
            │   ├── books.json
            │   ├── favicon.png
            │   └── vite.svg
            ├── src/
            │   ├── assets/
            │   ├── components/
            │   │   ├── AdminLogin.jsx
            │   │   ├── Footer.jsx
            │   │   ├── Loading.jsx
            │   │   ├── Navbar.jsx
            │   │   └── Register.jsx
            │   ├── context/
            │   │   ├── AuthContext.jsx
            │   │   └── firebase.config.js
            │   ├── pages/
            │   │   ├── books/
            │   │   │   ├── BookCard.jsx
            │   │   │   ├── CartPage.jsx
            │   │   │   └── CheckoutPage.jsx
            │   │   ├── dashboard/
            │   │   │   ├── addBook/
            │   │   │   │   ├── AddBook.jsx
            │   │   │   │   ├── InputField.jsx
            │   │   │   │   └── SelectField.jsx
            │   │   │   ├── manageBooks/
            │   │   │   │   ├── ManageBooks.jsx
            │   │   │   │   ├── EditBook.jsx
            │   │   │   │   └── UpdateBook.jsx
            │   │   │   ├── users/
            │   │   │   │   ├── DashboardLayout.jsx
            │   │   │   │   └── UserDashboard.jsx
            │   │   │   └── RevenueChart.jsx
            │   │   └── home/
            │   │       ├── Banner.jsx
            │   │       ├── Home.jsx
            │   │       ├── News.jsx
            │   │       └── Recommended.jsx
            │   ├── redux/
            │   │   ├── features/
            │   │   │   ├── books/
            │   │   │   │   └── booksApi.js
            │   │   │   ├── cart/
            │   │   │   │   └── cartSlice.js
            │   │   │   └── orders/
            │   │   │       └── ordersApi.js
            │   │   └── store.js
            │   ├── utils/
            │   │   ├── baseURL.js
            │   │   └── getImgUrl.js
            │   ├── App.jsx
            │   ├── App.css
            │   ├── index.css
            │   ├── index.html
            │   └── main.jsx
            ├── package.json
            ├── package-lock.json
            └── README.md


# Usage
  Homepage: Explore books, view recommended titles, and check top sellers.
  
  Admin Dashboard: Add/edit books, monitor orders, and analyze revenue.
  
  User Dashboard: View past orders and account details.



# Project Repository
   The source code for MovieMania is available on GitHub: https://github.com/ShyamSingh841442/BookBazaar.git

# Credits
   MERN Stack Community: For inspiration and resources.
   
   Open Source Tools: Redux Toolkit, Firebase, Chart.js.
   
   
# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


# Contact Information
For any questions or feedback, feel free to reach out:

- Name: Shyam Kumar (BTech Student, CSE)
- Email: [shyamsingh841442@gmail.com](mailto:shyamsingh841442@gmail.com)  
- LinkedIn: [Shyam Kumar LinkedIn](https://www.linkedin.com/in/shyamsingh841442)



Thank you for checking out MovieMania! Enjoy exploring the world of BookBazaar.
