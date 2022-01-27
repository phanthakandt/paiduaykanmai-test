const monk = require('monk')
module.exports = monk('mongo:27017/shop',{
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    authSource: 'admin'
})