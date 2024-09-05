//
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/test', function (req, res) {
  res.send('test')
})
app.get('/hello', function (req, res) {
  res.send({
    say : '안녕하세요'
  })
})
app.get('/bye', function (req, res) {
  res.json({
      say : '잘가세요'
    })
})
app.get('/nicetomeetyou', function (req, res) {
  res.send('반가워요')
})