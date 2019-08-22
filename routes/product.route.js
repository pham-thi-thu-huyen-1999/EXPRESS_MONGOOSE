var express = require('express')
var router = express.Router();
 

router.get('/', (req, res) => {
    res.render('products/product');
});
router.post('/', (req, res) => {
    res.render('Received a POST HTTP method');
});

router.put('/', (req, res) => {
    res.render('Received a PUT HTTP method');
});

module.exports = router;