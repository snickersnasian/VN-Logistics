const {model, Schema, Types} = require('mongoose').Schema

const schema = new Schema({
    weight: {type: Number, required: true},
    pricePerWeight: {type: Number, required: true},
    status: {type: String, required: true},
    payedAmount: {type: Number, required: true, default: 0},
    remainedAmount: {type: Number, required: true},
    comment: {type: String, required: true, default: ''},
    client: {type: Types.ObjectId, required: true, ref: 'User'},
    paymentMethod: {type: String, required: true, default: ''},
    currency: {type: String, required: true, default: 'USD'},
    recipient: [{type: Types.ObjectId, required: true, ref: 'User'}],
})