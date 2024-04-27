// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();
const port = 3177;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
