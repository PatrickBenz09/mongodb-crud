'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World of NoSQL!')
});

module.exports = router;
