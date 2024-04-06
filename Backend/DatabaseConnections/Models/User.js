const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserId: {
        type: Number,
        required: true,
        unique: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Gender: {
        type: String,
        required: true
    }
},
{
    collection: 'Users'
}
);

const User = mongoose.model('Users', userSchema);

module.exports = User;