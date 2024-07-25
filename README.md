# CODTECH-Task1

NAME : PRIYANKA JAISWAL
COMPANY : CODTECH IT SOLUTIONS
ID : CT08DS3261
DOMAIN : BACKEND
DURATION : JUNE 25th,2024 to JULY 25th,2024
MENTOR : SRAVANI GOUNI


Project Overview: Express.js (Node.js)

Goal:
The goal of this project is to create a basic RESTful API using Express.js that supports the primary HTTP methods (GET, POST, PUT, DELETE). This API will handle CRUD (Create, Read, Update, Delete) operations for a resource called items.

Technologies Used
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
Project Structure
app.js: The main file that sets up the Express.js server, defines routes and handlers for different HTTP methods, and starts the server.
Functionality
The API provides the following endpoints:

Home Route

GET '/'
Returns a welcome message.
Items Routes

GET '/items'
Returns a message indicating all items are fetched.

POST '/items'
Creates a new item with data received in the request body and returns a message indicating the item was created.

PUT '/items/:id'
Updates an existing item with the specified ID using data received in the request body and returns a message indicating the item was updated.

DELETE '/items/:id'
Deletes the item with the specified ID and returns a message indicating the item was deleted.
