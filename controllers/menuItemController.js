const MenuItem = require('../models/MenuItem');

// get all menu items
exports.getMenuItems = async(req,res) => {
    try {
        const menuItems = await MenuItem.find();
        res.setHeader('Content-Type', 'application/json');
        res.json(menuItems);
    } catch (error) {
        console.error('Error fetching menu items:', err);
        res.status(500).json({message: error.message});
    }
};

// get one menu item by its id
exports.getMenuItemById = async(req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if(!menuItem) return res.status(404).json({message: 'Menu item not found'});
        res.json(menuItem);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// Create a new menu item
// exports.createMenuItem = async(req,res) => {
//     try {
//         const menuItem = 
//     }
// }

