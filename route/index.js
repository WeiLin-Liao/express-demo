const express = require("express")
const router = express.Router()

router.use(require('../api/v1/getUserInfo'))


module.exports = router