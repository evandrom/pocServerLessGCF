var app = require('express')()
var bodyParser = require('body-parser')

const greeting = require('../service/greetings')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/hello/:tag', (req,res) => {
    res.status(200).json({data : `Tag ${req.params.tag}`})
})
app.post('/hello/:tag', (req,res) => {
    res.status(200).json({data : `Tag ${req.params.tag}`})
})
app.post('/greeting', (req, res) => {
    res.status(200).json({ greeting: greeting.hello(req)})
})

app.use(function(req, res){
    res.status(404).json({ error: 'Not Found' })
})

module.exports = app