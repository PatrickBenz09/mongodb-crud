# mongodb-crud App

Demo app for basic MongoDB with Representational state transfer (REST)

## MongoDB-Crud REST API

List of basic routes:

| Route       | HTTP | Description                 |
| ----------- |:----:| ---------------------------:|
| /           | GET  | Print Hello World of NoSQL! |

List of user routes:

| Route       | HTTP    | Description                        |
| ----------- |:-------:| :----------------------------------|
| /book       |POST     | Create a book                      |
| /book       |GET      | Get all books info                 |
| /book/:id   |GET      | Get a single book info             |
| /book/:id   |DELETE   | Delete a single book               |
| /book:id    |PUT      | Update a single book with new info |
