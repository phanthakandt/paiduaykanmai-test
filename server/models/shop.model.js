const db = require('../configs/db.config')
db.then(() => {
    console.log('shop model is connected.');
})

const shop = db.get('shop')

exports.add_shop = async (data) => {
    return await shop.insert(data)
}

exports.get_shop = async () => {
    return await shop.find()
}

exports.get_shop_by_id = async (id) => {
    return await shop.find({ _id: id })
}

exports.update_shop = async (id, data) => {
    return await shop.update({ _id: id }, { $set: data })
}