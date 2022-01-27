const shopModel = require('../models/shop.model')

exports.add_shop = async (req, res) => {
    try {
        let data = await shopModel.add_shop({
            name: req.body.name,
            description: req.body.description,
            tel: req.body.tel,
            addr: req.body.addr,
            timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
        })

        return res.status(200).send(data)
    } catch (err) {
        return res.sendStatus(500)
    }
}

exports.get_shop_by_id = async (req, res) => {
    try {
        const id = req.params['id']
        let shop = await shopModel.get_shop_by_id(id)

        return res.status(200).send(shop)
    } catch (err) {
        return res.sendStatus(500)
    }
}

exports.get_shop = async (req, res) => {
    try {
        let shop = await shopModel.get_shop()

        return res.status(200).send(shop)
    } catch (err) {
        return res.sendStatus(500)
    }
}