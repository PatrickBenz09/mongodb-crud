'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Index = require('./routers/index');
const Book = require('./routers/book');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', Index);
app.use('/book', Book);

app.listen(process.env.PORT || 4000);
