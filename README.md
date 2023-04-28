# Simple-chat-app

### Technologies Used

#### Languages

* HTML
* CSS
* JavaScript

#### Frameworks

* ChakraUI
* ExpressJS
* NodeJS
* REST API

#### Database Management System

* MongoDB

### Installation Instructions

1. Clone the Repository
2. Open in Visual Studio
3. Install the dependencies for the server:
    * Open Terminal and navigate to the server directory.
    * Type `npm install` to install the dependencies automatically.

4. Create an environment variable in the server folder.
    - Create a new file named `.env`
    - Inside the '.env' file, input:  
    ```
    PORT=8000
    MONGO_URI=<insert the link from the connection string of your MongoDB account>
    JWT_SECRET=itsasecret
    ```

5. Install the dependencies for the client:
    * Open a new terminal.
    * Navigate to the client directory.
    * Type `npm install` to install the dependencies.

6. Turn on the project:
    * Open a new terminal.
    * Navigate to the server directory.
    * Type `npm start`.
    * Open another new terminal.
    * Navigate to the client directory.
    * Type `npm start`.
    * Wait until the client automatically redirects you to your current web browser.
