const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MenuItem = require('../models/MenuItem');

// load environment variables
dotenv.config();

// connect to database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.error('MongoDB connection error', err);
    });

    const menuItems = [
        {
            name: 'Dal Bhat',
            description: 'Steamed rice served with lentil soup and a variety of side dishes like vegetables, pickles, and curry.',
            price: 8.99,
            isAvailable: true,
        },
        {
            name: 'Momo',
            description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with a spicy dipping sauce.',
            price: 6.99,
            isAvailable: true,
        },
        {
            name: 'Sel Roti',
            description: 'A traditional homemade, sweet, ring-shaped rice bread, typically eaten during festivals.',
            price: 3.99,
            isAvailable: true,
        },
        {
            name: 'Gundruk',
            description: 'Fermented leafy greens, typically served as a side dish or pickle.',
            price: 4.99,
            isAvailable: true,
        },
        {
            name: 'Thukpa',
            description: 'A hearty noodle soup, commonly served with vegetables and meat, especially in the mountainous regions.',
            price: 7.99,
            isAvailable: true,
        },
        {
            name: 'Chhoila',
            description: 'Spicy grilled meat, usually buffalo, marinated in spices, traditionally served with beaten rice (chiura).',
            price: 9.99,
            isAvailable: true,
        },
        {
            name: 'Chatamari',
            description: 'Also known as "Nepali Pizza," a rice flour crepe topped with meat, eggs, and spices.',
            price: 6.49,
            isAvailable: true,
        },
        {
            name: 'Aloo Tama',
            description: 'A tangy curry made with potatoes, bamboo shoots, and black-eyed peas.',
            price: 7.49,
            isAvailable: true,
        },
        {
            name: 'Yomari',
            description: 'A sweet dumpling made from rice flour and filled with molasses and sesame seeds, typically enjoyed during festivals.',
            price: 4.49,
            isAvailable: true,
        },
        {
            name: 'Kheer',
            description: 'A creamy rice pudding flavored with cardamom, nuts, and raisins, often served as a dessert.',
            price: 5.99,
            isAvailable: true,
        },
    ];
    

const seedMenuItems = async () => {
    try {
        // Delete existing menu items
        await MenuItem.deleteMany({});
        console.log('Existing menu items deleted');

        // Insert the seed data
        await MenuItem.insertMany(menuItems);
        console.log('Database seeded with menu items');

        // Disconnect from MongoDB
        mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (err) {
        console.error('Seeding error:', err);
        mongoose.disconnect();
    }
};

seedMenuItems();
