const express = require('express')
const categoryDB = require('../db/category')
let category = express.Router();

category.get('/findAll', (req, res) => {
  categoryDB.findAll((results) => {
    res.send(results)
  })
})

category.get('/findById', (req, res) => {
  categoryDB.findById(req.query, (results) => {
    res.send(results)
  })
})

category.get('/deleteById', (req, res) => {
  categoryDB.deleteById(req.query, () => {
    res.send('删除成功')
  })
})

category.post('/saveOrUpdate', (req, res) => {
  categoryDB.saveOrUpdate(req.body, () => {
    res.send('保存成功')
  })
})


module.exports = category;






