const express = require('express')
const app = express()




app.get('/', function (req, res) {
  res.json('/')
})

app.listen(3000)