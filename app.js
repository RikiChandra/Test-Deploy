const express = require('express')
const path = require('path')

const app = express()
const PORT = 4000
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app