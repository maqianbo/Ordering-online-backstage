const express = require('express')
const addressDB = require('../db/address')
let address = express.Router();

address.get('/findAll', (req, res) => {
  addressDB.findAll((results) => {
    res.send(results)
  })
})

address.get('/findById', (req, res) => {
  addressDB.findById(req.query, (results) => {
    res.send(results)
  })
})

address.get('/deleteById', (req, res) => {
  addressDB.deleteById(req.query, () => {
    res.send('删除成功')
  })
})

address.get('/saveOrUpdate', (req, res) => {
  addressDB.saveOrUpdate(req.query, () => {
    res.send('保存成功')
  })
})


module.exports = address;