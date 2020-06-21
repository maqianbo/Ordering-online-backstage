const pool = require('./pool')

let findAll = (handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from category';
    conn.query(sql, [], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

let findById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'select * from ej_category where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}


let deleteById = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    let sql = 'delete from ej_category where id=?';
    conn.query(sql, [param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}

let saveOrUpdate = (param, handle) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    if (param.id) {
      // 更新
      sql = "update ej_category set name=?,num=? where id=?";
    } else {
      // 新增
      sql = "insert into ej_category(name,num) value(?,?)";
    }
    conn.query(sql, [param.name, param.num, param.id], (err, results) => {
      if (err) throw err;
      handle(results);
      conn.release();
    })
  })
}



module.exports = {
  findAll,
  findById,
  deleteById,
  saveOrUpdate
}