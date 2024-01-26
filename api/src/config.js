 const mongoose = require('mongoose');
require('dotenv').config();

const db = () => {
    mongoose.connect(process.env.URL);
    console.log("Conecteichonnnn!!!")
};

module.exports = db;