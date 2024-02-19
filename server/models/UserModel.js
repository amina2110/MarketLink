const mongoose = require('mongoose');
const { Schema } = mongoose;

// User schema
const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model('User', userSchema);

export default User
