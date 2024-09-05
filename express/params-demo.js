const express = require('express')
const app = express()


app.listen(1234)

app.get('/', function (req, res) {
  // res.json({"hi"})
})

  
app.get('/watch', function (req, res) {
  const q = req.query
  console.log(q.v)
  console.log(q.t)
  res.json({
    video: q.v,
    timeline: q.t
  })
})
