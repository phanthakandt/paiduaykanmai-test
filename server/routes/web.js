const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop.controller')
const productController = require('../controllers/product.controller')

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.post('/add-new-shop', shopController.add_shop)
router.put('/update-shop', shopController.update_shop)
router.get('/get-shop-by-id/:id', shopController.get_shop_by_id)
router.get('/get-shop', shopController.get_shop)

router.post('/add-new-product', productController.add_product)
router.get('/get-product-by-owner-id/:id', productController.get_product_by_owner_id)
router.put('/update-product', productController.update_product)
router.get('/get-product-by-id/:id', productController.get_product_by_id)
router.get('/get-product', productController.get_product)
router.delete('/delete-product/:id', productController.delete_product)

module.exports = router