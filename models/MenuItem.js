const mongoose = require ('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);