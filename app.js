const express = require('express');

const app = express();
const PORT = 4000;

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
