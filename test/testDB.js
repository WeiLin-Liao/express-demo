const $db = require('../utils/db')

$db.query("SELECT * FROM wp_users", function(res) {
    console.log(res)
})