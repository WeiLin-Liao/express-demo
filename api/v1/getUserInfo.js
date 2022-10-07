const express = require('express')
const router = express.Router()
const $db = require('../../utils/db')
const $return = require('../../utils/return')

router.post('/getUserInfo', (req, res) => {
    $db.query('SELECT * FROM wp_users', result => {
        res.json($return.success(result))
    })
})

module.exports = router