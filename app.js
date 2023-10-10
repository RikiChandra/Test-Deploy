const express = require('express');
const path = require('path');

const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);

module.exports = app;
