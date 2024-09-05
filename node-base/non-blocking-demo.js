function first(){
  console.log('1')
}
function second(){
  console.log('2')
}
function third(){
  console.log('3')
}
first()
setTimeout(second,1000)
second()
third()