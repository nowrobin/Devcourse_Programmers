let http = require('http');
let url = require('url');
const { route } = require('./router');

function start(route,handle) {
  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname;
    let queryData = url.parse(request.url,true).query;

    route(pathname, handle, response, queryData.productId);
  }
  
  http.createServer(onRequest).listen(8888)
  //localhost:8888
}

exports.start=start;