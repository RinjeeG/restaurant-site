const mongoose = require ('mongoose');

const MenuItemSchema = new mongoose.schema({
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

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

export default MenuItem;