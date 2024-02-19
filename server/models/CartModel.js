const mongoose = require('mongoose');
const { Schema } = mongoose;

// Cart schema
const cartSchema = new Schema({
    _iid: Schema.Types.ObjectId,
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    items: [{
        _id: Schema.Types.ObjectId,
        itemId: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart
