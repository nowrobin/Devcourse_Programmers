const mariadb = require('mysql');

const conn = mariadb.createConnection(
  {
    host:'localhost',
    post: 3306,
    user:'root',
    password:'root',
    database:'Tennis'
  }
);
module.exports =conn;