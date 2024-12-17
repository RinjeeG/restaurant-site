// import MenuItem from '../models/MenuItem.js';

// // Get all menu items
// export const getMenuItems = async (req, res) => {
//     try {
//         const menuItems = await MenuItem.find();
//         res.setHeader('Content-Type', 'application/json');
//         res.json(menuItems);
//     } catch (error) {
//         console.error('Error fetching menu items:', error.message);
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get one menu item by its ID
// export const getMenuItemById = async (req, res) => {
//     try {
//         const menuItem = await MenuItem.findById(req.params.id);
//         if (!menuItem) {
//             return res.status(404).json({ message: 'Menu item not found' });
//         }
//         res.json(menuItem);
//     } catch (error) {
//         console.error('Error fetching menu item:', error.message);
//         res.status(500).json({ message: error.message });
//     }
// };

// // Example: Placeholder for creating a new menu item (commented-out code)
// // export const createMenuItem = async (req, res) => {
// //     try {
// //         const { name, description, price, isAvailable } = req.body;
// //         const menuItem = new MenuItem({ name, description, price, isAvailable });
// //         const savedMenuItem = await menuItem.save();
// //         res.status(201).json(savedMenuItem);
// //     } catch (error) {
// //         console.error('Error creating menu item:', error.message);
// //         res.status(500).json({ message: error.message });
// //     }
// // };
