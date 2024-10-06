# User Management Application

This is a User Management application built using **React**. It demonstrates CRUD (Create, Read, Update, Delete) operations by interacting with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to manage user data.

## Features

1. **Fetch Users**:
   - Retrieve a list of users from the API and display them in a table format.
   
2. **Create User**:
   - Use a form (inside a modal) to create a new user with validation.
   - The user data is added via a POST request.

3. **Update User**:
   - Edit user details in a modal with the user data pre-filled.
   - The user data is updated via a PUT request.

4. **Delete User**:
   - Delete a user after confirmation in a modal.
   - The user is removed via a DELETE request.

5. **Table UI**:
   - Alternating row colors for improved readability.

6. **Routing**:
   - `react-router-dom` is used to manage routes.
   - Home view (`/`) to list users and detailed user view (`/users/:id`).

7. **Responsive Design**:
   - The application is responsive and works well on both desktop and mobile devices.

8. **Form Validations**:
   - Name: Required, minimum 3 characters.
   - Email: Required, must be a valid email format.
   - Phone: Required, valid phone number.
   - Address (Street, City): Required.
   - Company Name: Optional but must be at least 3 characters if provided.
   - Website: Optional but must be a valid URL if provided.

9. **Error Handling**:
   - Error handling for API requests is implemented using notifications (e.g., toasts or alerts).

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For managing routing.
- **React Hooks**: (useState, useEffect) for state management and lifecycle methods.
- **Fetch API**: To handle API requests (GET, POST, PUT, DELETE).
- **CSS**: For styling and responsive design.
- **JSONPlaceholder**: Fake REST API for fetching, creating, updating, and deleting user data.

## Optional Advanced Features

- **Search Functionality**: Allows filtering users by name.
- **Loading Spinner**: Shows a loading spinner while fetching data.
- **TypeScript Support**: Optional support for type safety.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

cd react-user-management-app

Install the project dependencies:
npm install

Running the Application
To start the development server:
npm start

The application will be running at http://localhost:3000.

Building for Production
To create a production build:
npm run build

Proxy Setup (Optional)
If you run into CORS issues while running the app locally, a proxy middleware is set up in src/setupProxy.js. It proxies API requests to the JSONPlaceholder API.

API Information
The application uses the JSONPlaceholder API for CRUD operations on user data.
API Endpoints Used
GET /users: Fetch all users.
POST /users: Create a new user.
PUT /users/:id: Update a user by ID.
DELETE /users/:id: Delete a user by ID.

Contributing
Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.


This `README.md` file includes all the necessary details about the **User Management Application** project, including the features, technologies, installation steps and API information. You can adjust this content further if needed!


Thank you ........






