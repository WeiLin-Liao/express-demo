/**
 * @ Author: WeiLin
 * @ Email: weilin-liao@qq.com
 * @ Create Time: 2022-07-29 09:40:44
 * @ Modified by: WeiLin
 * @ Modified time: 2022-07-29 09:42:19
 * @ Description:
 */

const mysql = require('mysql')
const Config = require('../config.js')


/**
 * 数据库方法
 */
const $db = {
  _query: function(sql, fn, type) {
    const db = mysql.createConnection(Config.Mysql)

    db.query(sql, function (err, res) {
      if (err) {
        console.log(type, err)
      } else {
        fn(res)
      }
      db.end()
    })
  },
  _execute: function(sql, fn, type) {
    $db._query(sql, fn, type)
  },
  // 增
  insert: function(sql, fn) {
    $db._execute(sql, fn, 'insert：')
  },
  // 删
  delete: function(sql, fn) {
    $db._execute(sql, fn, 'delete：')
  },
  // 改
  update: function(sql, fn) {
    $db._execute(sql, fn, 'update：')
  },
  // 查
  query: function(sql, fn) {
    $db._execute(sql, fn, 'query：')
  }
}

exports = module.exports = $db