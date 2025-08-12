const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;



mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
})
    .then(() => {
        console.log('Mongodb iS Connected.....')
    }).catch((err) => {
        console.log('Mongodb connection errror ', err);
    })