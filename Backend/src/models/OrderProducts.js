const moongose = require('moongose')
const oderSchema = new moongose.Schema({
    orderItems:[
        {
            name: {type: String, required: true},
            amount: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            product:{
                type: moongose.Schema.Types.ObjectId,
                ref: 'Product',
                require: true,
            },
        },
    ],
    shippingAdress:{
        fullName: {type: String, required: true},
        adress: {type: String, required: true},
        city: {type: String, required: true},
        phone: {type: Number, required: true},
    },
    paymentMethod: {type: String, required: true},
    itemPrice: {type: Number, required: true},
    shippingPrice: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    user: {type: moongose.Schema.Types.ObjectId, ref: 'User', require: true,},
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date},
    isDelivered: {type: Boolean, default: false},
    deliveredAt: {type: Date},
},
    {
        timestamps: true
    }
);
const Order = moongose.model("Order", orderSchema);
module.exports = Order;