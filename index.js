const express = require('express')
const bodyParser = require('body-parser')
// 导入路由对象
const customer = require('./routes/customer')
const category = require('./routes/category')
const address = require('./routes/address')
const store = require('./routes/store')
const shop = require('./routes/shop')
const order = require('./routes/order')
let app = express();
// 拦截器
// 拦截器
app.all("*", (req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    "Content-Type": "text/plain;charset=utf-8"
  })
  next()
})
// 中间件
app.use(bodyParser.urlencoded({ extended: true }))
// 路由对象 
app.use('/customer', customer)
app.use('/category', category)
app.use('/address', address)
app.use('/store', store)
app.use('/shop', shop)
app.use('/order', order)

app.listen(7000, () => {
  console.log('7000端口已经启动...')
})