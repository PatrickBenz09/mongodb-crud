'use strict'

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const url = 'mongodb://localhost:27017/library';
let bookCollection = 'Book'

let findAll = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    db.collection(bookCollection).find({}).toArray(function(err, books) {
      if(err) res.status(400).send(err);
      res.send(books);
    });
    db.close();
  })
}

let findOne = function(req, res) {
  let id = ObjectID(req.params.id)
  MongoClient.connect(url, function(err, db) {
    db.collection(bookCollection).findOne( { _id: id } )
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
    db.close();
  })
}

let createOne = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    db.collection(bookCollection).insertOne(
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, (err, row) => {
      if(err) res.status(400).send(err);
      res.send(row)
    })
    db.close();
  })
}

let deleteOne = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let id = ObjectID(req.params.id);
    db.collection(bookCollection).deleteOne( { _id: id }, (err, row) => {
      if(err) res.status(400).send(err);
      res.send("Successfully Deleted!");
    })
    db.close();
  })
}

let updateOne = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let id = ObjectID(req.params.id);
    db.collection(bookCollection).updateOne(
    { _id: id },
    { $set:
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    })
    .then(() => res.send("successfully edited!"))
    .catch(err => res.send(err))
    db.close();
  })
}

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
};
