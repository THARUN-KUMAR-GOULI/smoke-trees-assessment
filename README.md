# User-Address Form

<u></u>

## Overview

* This is a simple `full-stack application` that allows users to register their `name` and `address`.
* The form consists of these 2 input fields with a submit button.

<u></u>

## Technologies Used

* <b>`Backend`</b> :  Node.js, Express.js, MySQL
* <b>`Frontend`</b> :  HTML, CSS, JavaScript
* <b>`Database`</b> :  MySQL

<u></u>

## Setup Instructions

### 1. Clone the Repository ###
* using `git clone` command.

### 2. Set up MySQL Database
* Create Database < db name >.
* Create necessary Tables.

`CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(110) NOT NULL
);`.

`CREATE TABLE address (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  address VARCHAR(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
);`

* Modify the MySQL settings in `backend/db/db.js` file, by replacing with your credentials.


<u></u>

## Set Up the Backend

### 1. Navigate to the `backend` directory
* `cd backend`
### 2. Install the required dependencies
* `npm install`
### 3. Start the backend server
* `node server.js`

## The backend server will run on `http://localhost:5000`.


<u></u>

## Setup the Frontend

1. Navigate to `index.html` file.
2. `index.html` -> `Right-click anywhere` -> `open with Live Server`.
3. The frontend will now be visible and running in the browser.
4. Fill out the fields and click on submit button to store your information.

<u></u>

## API Endpoints

#### POST : /api/register
* To regsiter as a new user.

#### GET : /api/users
* To retrieve all the user details.

<u></u>

## Conclusion

* This project demonstrates a simple full-stack application related to simple user registration.
* The frontend communicates seamlessly with the backend using APIs.