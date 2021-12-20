const {model, Schema, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number, required: false, default: null},
    orders: [{type: Types.ObjectId, required: false, default: null}],
    recievingOrders: [{type: Types.ObjectId, required: false, default: null}]
})

module.exports = model('User', schema)