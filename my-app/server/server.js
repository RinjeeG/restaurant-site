const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const menuItemRoutes = require ('./routes/menuRoutes');

require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after a successful DB connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);  // Exit the process with an error code if DB connection fails
});

// Use routes
app.use('/menu', menuItemRoutes);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
