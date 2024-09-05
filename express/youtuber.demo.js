//Express setting
const express = require('express')
const app = express()
app.listen(1234)

//Data setting
let youtuber1 = {
  channelTitle : '십오야',
  sub : "596만명",
  vidoNum : "993개"
}
let youtuber2 = {
  channelTitle : '침착맨',
  sub : "227만명",
  vidoNum : " 6.6천개"
}
let youtuber3 = {
  channelTitle : '테오',
  sub : "54.6만명",
  vidoNum : "726개"
}

let db = new Map();
var id = 1 
db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

//REST API 설계 
app.get('/youtubers', function(req,res){
  res.json(db)
})
app.get('/youtuber/:id', function (req, res) {
  let {id} = req.params
  if(db.get(parseInt(id))== undefined){
    res.json({
      message: "정보를 찾을수 없습니다."
    })
  }else{
    res.json(db.get(parseInt(id)))
  }
})

app.use(express.json())//json middleware
app.post('/youtuber', function (req, res) {
  //body에 숨겨져서 들어온 데이터 확인
  db.set(id++,req.body)
  res.send(`${req.body.channelTitle} 등록완료`)
})