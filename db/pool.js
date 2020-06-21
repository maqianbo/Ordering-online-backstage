const mysql = require('mysql')
// 创建连接池对象
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'dcfwapp'
})
// 导出
module.exports = pool;