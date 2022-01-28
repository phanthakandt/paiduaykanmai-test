const db = require('../configs/db.config')
db.then(() => {
    console.log('product model is connected.');
})

const product = db.get('product')

exports.add_product = async (data) => {
    return await product.insert(data)
}

exports.get_product = async () => {
    return await product.find()
}

exports.get_product_by_id = async (id) => {
    return await product.find({ _id: id })
}

exports.update_product = async (id, data) => {
    return await product.update({ _id: id }, { $set: data })
}

exports.delete_product = async (id) => {
    return await product.remove({ _id: id })
}