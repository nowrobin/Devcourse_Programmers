const express = require('express')
const app = express()
app.listen(1234)


let notebook = { 
  productName: 'Notebook',
  price: 2000
}
let cup = { 
  productName: 'Cup',
  price: 2000
}
let chair = { 
  productName: 'Chair',
  price: 2000
}
let db = new Map()
db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)
let id = 1 
let product = db.get(id)
// product.id = id
// product['id'] = id

console.log(product)

// app.get('/:id', function (req, res) {
//   let {id}= req.params
//   id = parseInt(id)
//   if(db.get(id) == undefined){
//     res.json({
//       message: "없는 상품"
//     })
//   }
//   res.json(db.get(id))
// })







// 키로 벨류를 찾을 수 있는 한 쌍을 저장 
//db.set(키, 벨류) 
// db.set(1, notebook)
// db.set(2, cup)
// db.set(3, chair)

// console.log(db)
// console.log(db.get(1))
// console.log(db.get(2))
// console.log(db.get(3))
