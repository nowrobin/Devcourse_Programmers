
function route(pathname, handle,response, productId){
  console.log('pathName : ' + pathname)
  if(typeof handle[pathname] == 'function'){
  handle[pathname](response, productId)}
  else{
    response.writeHead(404,{'Content-Type' : 'text/html'})
    response.write('404 페이지 없음 한정욱')
    response.end();
  }
}

exports.route=route