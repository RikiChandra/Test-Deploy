const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index'); // Menghilangkan indexRouter dari argumen res.render()
});

app.get('/about', (req, res) => {
    res.render('about');
});

module.exports = app;
