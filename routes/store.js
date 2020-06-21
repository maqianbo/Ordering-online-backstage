const express = require('express')
const storeDB = require('../db/store')
let store = express.Router();

store.get('/findAll', (req, res) => {
  storeDB.findAll((results) => {
    res.send(results)
  })
})

store.get('/findById', (req, res) => {
  storeDB.findById(req.query, (results) => {
    res.send(results)
  })
})

store.get('/deleteById', (req, res) => {
  storeDB.deleteById(req.query, () => {
    res.send('删除成功')
  })
})

store.get('/saveOrUpdate', (req, res) => {
  storeDB.saveOrUpdate(req.query, () => {
    res.send('保存成功')
  })
})

store.get('/findByCategory_id', (req, res) => {
  storeDB.findByCategory_id(req.query, (results) => {
    res.send(results)
  })
})


module.exports = store;