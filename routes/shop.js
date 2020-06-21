const express = require('express')
const shopDB = require('../db/shop')
let shop = express.Router();

shop.get('/findAll', (req, res) => {
  shopDB.findAll((results) => {
    res.send(results)
  })
})

shop.get('/findById', (req, res) => {
  shopDB.findById(req.query, (results) => {
    res.send(results)
  })
})

shop.get('/deleteById', (req, res) => {
  shopDB.deleteById(req.query, () => {
    res.send('删除成功')
  })
})

shop.get('/saveOrUpdate', (req, res) => {
  shopDB.saveOrUpdate(req.query, () => {
    res.send('保存成功')
  })
})

shop.get('/findByCategory_id', (req, res) => {
  shopDB.findByCategory_id(req.query, (results) => {
    res.send(results)
  })
})

shop.get('/findByStoreId', (req, res) => {
  shopDB.findByStoreId(req.query, (results) => {
    res.send(results)
  })
})


module.exports = shop;