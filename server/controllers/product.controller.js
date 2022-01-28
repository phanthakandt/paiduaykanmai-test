const productModel = require('../models/product.model')

exports.add_product = async (req, res) => {
    try {
        let data = await productModel.add_product({
            ownerId: req.body.ownerId,
            name: req.body.name,
            description: req.body.description,
            cost: req.body.cost,
            unit: req.body.unit,
            timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
        })

        return res.status(200).send(data)
    } catch (err) {
        console.log(err);
        return res.sendStatus(500)
    }
}

exports.get_product_by_id = async (req, res) => {
    try {
        const id = req.params['id']
        let product = await productModel.get_product_by_id(id)

        return res.status(200).send(product)
    } catch (err) {
        return res.sendStatus(500)
    }
}

exports.get_product = async (req, res) => {
    try {
        let product = await productModel.get_product()

        return res.status(200).send(product)
    } catch (err) {
        return res.sendStatus(500)
    }
}

exports.update_product = async (req, res) => {
    try {
        let product = await productModel.update_product(req.body.id, req.body.data)

        return res.status(200).send(product)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}

exports.delete_product = async (req, res) => {
    try {
        let product = await productModel.delete_product(req.params['id'])

        return res.status(200).send(product)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)

    }
}