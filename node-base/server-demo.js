let http = require('http');
  function onRequest(request, response){
    response.writeHead(200,{'Content-Type: text/html'})
    response.write('Heeeloo')
    response.end()
  }
  
  http.createServer(onRequest).listen(8888)
  //localhost:8888

