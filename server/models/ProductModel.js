const mongoose = require('mongoose');
const { Schema } = mongoose;

// Item schema
const productSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    _distributor_id: { type: Schema.Types.ObjectId, ref: 'User' },
    image: String,
    old_price: Number,
    new_price: Number,
    available: Boolean,
    stock: Number,
    date: Date
});

const Product = mongoose.model('Product', productSchema);

export default Product

