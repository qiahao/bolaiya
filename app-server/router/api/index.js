let express = require('express');
let path = require('path')
let appConf = require('../../config/app.js')

let router = express.Router();


/**
 * set Access-Control-Allow-Origin
 */

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


// get_order_list
router.get('/get_order_list', (req, res, next) => {
    let list = ['list1', 'list2']
    res.send({
        code: 1,
        data: list
    })
})

exports = module.exports = router