/*
 * @Author: liuyr
 * @Date: 2019-11-20 16:32:35
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-11-20 16:45:37
 */
// 封装方法，编写不同的sql语句，处理不同的数据库逻辑
const pool = require('./pool')

/**
 * 查找所有的订单信息
 * @param {Function} handle 函数
 */
let findAll = (handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from orderall';
    conn.query(sql, [], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 通过id获取订单信息
 * @param {Object} param  {id:1001}
 * @param {Function} handle 
 */
let findById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from orderall where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 通过id删除订单信息
 * @param {Object} param  {id:1001}
 * @param {Function} handle
 */
let deleteById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'delete from orderall where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}
/**
 * 添加或修改订单信息
 * @param {Object} param  {id:1001/null,realname:'',telephone:123,password:12111}
 * @param {Function} handle 
 */
// let saveOrUpdate = (param, handle) => {
//   pool.getConnection((err, conn) => {
//     console.log('params', param)
//     if (err) throw err;
//     let sql = '';
//     if (param.id) {
//       // 更新
//       sql = "update orderall set user_id=?,store_id=?,address_id=?,status=?,sj=? where id=?";
//     } else {
//       // 新增
//       sql = "insert into orderall(user_id,store_id,address_id,status,sj) value(?,?,?,?,?)";
//     }
//     conn.query(sql, [param.user_id, param.store_id, param.address_id, param.status, param.sj, param.id], (err, results) => {
//       if (err) throw err;
//       handle(results);
//       conn.release();
//     })
//   })
// }


let saveOrUpdate = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = '';
    if (param.id) {
      // 更新 ? ,
      sql = "update orderall set user_id=?,store_id=?,address_id=?,status=?,sj=?,price=?,store_name=? where id=?";
    } else {
      sql = "insert into orderall(user_id,store_id,address_id,status,sj,price,store_name) value(?,?,?,?,?,?,?)";
    }
    conn.query(sql, [param.user_id, param.store_id, param.address_id, param.status, param.sj, param.price, param.store_name, param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

let findByUserId = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from orderall where user_id=?';
    conn.query(sql, [param.id], (err, results) => {
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
  findByUserId
}

