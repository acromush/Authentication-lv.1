# Authentication-lv.1
# A basic authentication app

This repository contains a Node.js application built using Express.js for handling HTTP requests.

## Installation

1. **Install Node.js and npm:**
   - Download and install Node.js from the official website (https://nodejs.org/). This will also install npm (Node Package Manager).

2. **Install project dependencies:**
   - Open your terminal and navigate to the project directory.
   - Run the following command to install the required dependencies:

     ```bash
     npm install express body-parser pg nodemon
     ```

3. **Set up PostgreSQL:**
   - Install PostgreSQL on your system.
   - Create a new database.
   - Execute the SQL queries in `queries.sql` to create tables and other database objects.
  
     
4. **Set up the index.js file:**
   - Add the password and database name in place of "database" and "password"

   
## Running the Application

1. **Start the development server:**
   - Use `nodemon` to automatically restart the server on file changes:

     ```bash
     nodemon index.js 
     ```

   - This will start the server on the default port (usually port 3000).

## Usage

- **You can regester and create an account , simply login into the account and see the secret **

