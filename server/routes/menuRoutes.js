const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

// get all menu items
router.get('/', menuItemController.getMenuItems);

// get single menu item with id
router.get('/:id', menuItemController.getMenuItemById);

module.exports = router;