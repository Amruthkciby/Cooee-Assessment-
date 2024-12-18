Armstrong Number Checker with React

This project implements an Armstrong Number Checker using React, where users can check if a number is an Armstrong number and save results. It includes a logout functionality and dynamically displays a welcome message with the user's name.

Features

1. Login Integration

Login functionality is managed in the App.js file.

Username is passed from App.js to the Armstrong.js component.

2. Armstrong Number Checker

Users can input a number to check if it is an Armstrong number.

Armstrong numbers are calculated by summing each digit raised to the power of the total number of digits.

3. Save and Display Armstrong Numbers

Valid Armstrong numbers are saved in a list during the session.

The list of saved numbers is dynamically displayed below the checker.

4. Logout Functionality

A logout button allows users to log out and return to the login page.

5. Dynamic Welcome Message

The username from login is displayed in the welcome message on the Armstrong checker page.

File Structure

1. App.js

Handles:

Login functionality.

Managing authentication state (isLoggedIn and username).

Rendering the Armstrong.js component post-login.

2. Armstrong.js

Core functionality includes:

Accepting a number input from the user.

Checking if the input is an Armstrong number.

Saving valid Armstrong numbers.

Displaying saved Armstrong numbers.

Providing logout functionality.

3. App.css

Contains the styling for:

Form components.

Buttons (Submit, Logout).

Layout for saved numbers and messages.

How to Run

Clone the Repository:

git clone <repository-url>
cd <repository-folder>

Install Dependencies:

npm install

Start the Development Server:

npm start

The application will be accessible at http://localhost:3000.

Usage

Login

Login via the interface in App.js using your username and password.

Armstrong Number Checker

Enter a number in the input field.

Click "Check Armstrong".

If valid, the number will be added to the list of saved Armstrong numbers.

Logout

Click the "Logout" button at the top-right corner to return to the login page.

Example Armstrong Numbers

153: 1^3 + 5^3 + 3^3 = 153

9474: 9^4 + 4^4 + 7^4 + 4^4 = 9474

Styling Highlights

Buttons

Submit Button: Styled for clear visibility and usability.

Logout Button: Positioned at the top-right corner for easy access.

Saved Numbers Section

Displays a list of saved Armstrong numbers dynamically.

Styled with proper spacing and alignment.

Future Improvements

Add persistent storage (e.g., local storage or a database).

Extend functionality to include a history of checked numbers.

Improve validation and error handling.

Technologies Used

React: For building the user interface.

CSS: For styling the application.

