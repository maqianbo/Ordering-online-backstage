const express = require('express')
const orderDB = require('../db/order')
let order = express.Router();

order.get('/findAll', (req, res) => {
  orderDB.findAll((results) => {
    res.send(results)
  })
})

order.get('/findById', (req, res) => {
  orderDB.findById(req.query, (results) => {
    res.send(results)
  })
})

order.get('/deleteById', (req, res) => {
  orderDB.deleteById(req.query, () => {
    res.send('删除成功')
  })
})

order.get('/saveOrUpdate', (req, res) => {
  orderDB.saveOrUpdate(req.query, () => {
    res.send('保存成功');
  })
})

order.get('/findByCategory_id', (req, res) => {
  orderDB.findByCategory_id(req.query, (results) => {
    res.send(results)
  })
})

order.get('/findByUserId', (req, res) => {
  orderDB.findByUserId(req.query, (results) => {
    res.send(results)
  })
})


module.exports = order;