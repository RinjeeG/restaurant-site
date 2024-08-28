const express = require('express');
const mongoose = require('mongoose');

const menuItemRoutes = require ('./routes/menuRoutes');

require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.error(err));

// Use routes
app.use('/api/menu-items', menuItemRoutes);

// default routes
app.get('/',(req,res) => {
    res.send('Welcome to the API');
});

// server listening on specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
});