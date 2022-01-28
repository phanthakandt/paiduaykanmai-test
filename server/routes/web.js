const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop.controller')

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.post('/add-new-shop', shopController.add_shop)
router.put('/update-shop', shopController.update_shop)
router.get('/get-shop-by-id/:id',shopController.get_shop_by_id)
router.get('/get-shop', shopController.get_shop)

module.exports = router