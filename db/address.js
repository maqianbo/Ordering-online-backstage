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
    let sql = 'select * from address';
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
    let sql = 'select * from address where user_id=?';
    conn.query(sql, [param.user_id], (err, results) => {
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
    let sql = 'delete from address where id=?';
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
      sql = "update address set name=?,tel=?,address=?,addr=?,addre=?,isDefault=?,user_id=? where id=?";
    } else {
      // 新增
      sql = "insert into address(name,tel,address,addr,addre,isDefault,user_id) value(?,?,?,?,?,?,?)";
    }
    conn.query(sql, [param.name, param.tel, param.address, param.addr, param.addre, param.isDefault, param.user_id, param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

/**********************************自卸模块***********************************/
// // 通过手机号查询用户信息
// let findByTel = (param, handle) => {
//   pool.getConnection((err, conn) => {
//     if (err) throw err;
//     let sql = 'select * from address where telephone=?';
//     conn.query(sql, [param.telephone], (err, results) => {
//       if (err) throw err;
//       handle(results);
//       conn.release();
//     })
//   })
// }
// // 更新或修改户信息
// let saveOrUpdateCus = (param, handle) => {

//   pool.getConnection((err, conn) => {
//     if (err) throw err;
//     let sql = '';
//     if (param.id) {
//       // 更新
//       sql = "update address set username=?,password=?,name=?,telephone=?,gender=?,idCard=? where id=?";
//       conn.query(sql, [param.username, param.password, param.name, param.telephone, param.gender, param.idCard, param.id], (err, results) => {
//         if (err) throw err;
//         handle(results);
//         conn.release();
//       })
//     } else {
//       // 新增
//       sql = "insert into address(username,password,name,telephone,gender,idCard) value(?,?,?,?,?,?)";
//       conn.query(sql, [param.username, param.password, param.name, param.telephone, param.gender, param.idCard], (err, results) => {
//         if (err) throw err;
//         handle(results);
//         conn.release();
//       })
//     }

//   })
// }
module.exports = {
  findById,
  deleteById,
  saveOrUpdate,
  /***********************************************************/
  findAll,
  // findByTel,
  // saveOrUpdateCus
}

