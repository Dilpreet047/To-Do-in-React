const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    mongoose.connect(
        process.env.DB_URL
    )
    .then(() => {
        console.log("Connection established")
    })
    .catch((error) => {
        console.log("Failed");
        console.log(error);
    })
};

module.exports = dbConnect;