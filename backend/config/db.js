const mongoose = require("mongoose");
require("dotenv").config(); // MUST be on top

const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI =", MONGO_URI); // DEBUG

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
})
    .then(() => {
        console.log('✅ Mongodb iS Connected.....')
    }).catch((err) => {
        console.log('Mongodb connection errror ', err);
    })    