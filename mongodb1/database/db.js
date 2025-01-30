// databse/db.js code ...
const mongoose = require('mongoose');
const url = 'mongodb+srv://<Username>:<password>@cluster0.l0tqz.mongodb.net/<databases>';
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
