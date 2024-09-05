const express = require('express')
const app = express()
app.listen(1234)


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.use(express.json())//json middleware
app.post('/test', function (req, res) {
  //body에 숨겨져서 들어온 데이터 확인
  console.log(req.body.message)
  res.send(req.body.message)
  
})