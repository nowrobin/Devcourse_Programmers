const express = require('express')
const app = express()

let youtuber1 = {
  channelTitle : '십오야',
  sub : "596만명"
  vidoNum : " 993개"
}
let youtuber2 = {
  channelTitle : '침착맨',
  sub : "227만명"
  vidoNum : " 6.6천개"
}
let youtuber3 = {
  channelTitle : '테오',
  sub : "54.6만명"
  vidoNum : " 726개"
}

app.get('/:nickname', function (req, res) {
  const {nickname} = req.param

  if(nickname == "@15ya.fullmoon"){
    res.json(youtuber1)
  }else if (nickname== "@ChimChakMan_Official"){
    res.json(youtuber2)
  }else if (nickname == "@TEO_universe"){
    res.json(youtuber3)
  }else { 
    res.json({
      message: "Error"
    })
  }
  // res.json({
  //   channel:nickname
  // })
  //개발자가 예상하지 못한 에러 = 예외가 발생한다  = 예외처리  
})

app.listen(3000)