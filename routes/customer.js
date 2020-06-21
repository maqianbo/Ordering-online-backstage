const express = require('express')
// customerDB
const customerDB = require('../db/customer')
// 创建路由对象
let customer = express.Router();
// 设置路由
// 查找所有的顾客信息接口
customer.get('/findAll', (req, res) => {
  // 访问dao层，获取数据，响应数据
  customerDB.findAll((results) => {
    // 对results处理之后再响应回去
    res.send(results);
  })
})
// 通过id获取顾客信息接口
customer.get('/findById', (req, res) => {
  // req.query
  // 访问dao层，获取数据，响应数据
  customerDB.findById(req.query, (results) => {
    res.send(results)
  });
})
// 通过id删除顾客信息接口
customer.get('/deleteById', (req, res) => {
  // req.query
  // 访问dao层，获取数据，响应数据
  customerDB.deleteById(req.query, () => {
    res.send('删除成功');
  })
})
// 新增或修改顾客信息接口
// customer.post('/saveOrUpdate', (req, res) => {
//   // req.body
//   // 访问dao层，获取数据，响应数据
//   customerDB.saveOrUpdate(req.body, () => {
//     res.send('保存成功');
//   })

// })

/***************************自加业务模块**********************************/
// 通过手机号获取顾客信息接口
customer.get('/findByTel', (req, res) => {
  // req.query
  // 访问dao层，获取数据，响应数据
  customerDB.findByTel(req.query, (results) => {
    res.send(results)
  });
})
// 新增或修改顾客信息接口
customer.get('/saveOrUpdateCus', (req, res) => {
  // req.body
  console.log('req.query', req.query)
  // 访问dao层，获取数据，响应数据
  customerDB.saveOrUpdateCus(req.query, () => {
    res.send('保存成功');
  })

})
// 导出
module.exports = customer;

