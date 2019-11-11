module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(token, 401, '请先登录')
    const user = AdminUser.findById(id)
    assert(user, 401, '请先登录')
    req.user = user
    await next()
  }
}