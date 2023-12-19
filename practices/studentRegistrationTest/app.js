// app.js
const express = require('express');
const app = express();
const studentRoutes = require('./router/studentRouter');

app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.use('/students', studentRoutes);



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});