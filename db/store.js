/*
 * @Author: liuyr
 * @Date: 2019-11-20 16:32:35
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-11-20 16:45:37
 */
// 封装方法，编写不同的sql语句，处理不同的数据库逻辑
const pool = require('./pool')

/**
 * 查找所有的地址信息
 * @param {Function} handle 函数
 */
let findAll = (handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from store';
    conn.query(sql, [], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 通过id获取地址信息
 * @param {Object} param  {id:1001}
 * @param {Function} handle 
 */
let findById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from store where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

let findByCategory_id = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from store where category_id=?';
    conn.query(sql, [param.category_id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 通过id删除地址信息
 * @param {Object} param  {id:1001}
 * @param {Function} handle
 */
let deleteById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'delete from store where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 添加或修改地址信息
 * @param {Object} param  {id:1001/null,realname:'',telephone:123,password:12111}
 * @param {Function} handle 
 */
let saveOrUpdate = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = '';
    if (param.id) {
      // 更新
      sql = "update store set name=?,tel=?,store=?,addr=?,addre=?,isDefault=?,user_id=? where id=?";
    } else {
      // 新增
      sql = "insert into store(name,tel,store,addr,addre,isDefault,user_id) value(?,?,?,?,?,?,?)";
    }
    conn.query(sql, [param.name, param.tel, param.store, param.addr, param.addre, param.isDefault, param.user_id, param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

module.exports = {
  findById,
  deleteById,
  saveOrUpdate,
  /***********************************************************/
  findAll,
  findByCategory_id
}

