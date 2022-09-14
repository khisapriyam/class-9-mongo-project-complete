const mongoose = require('mongoose');


//create a mongoDB connection
const mongoDBConnect = async () => {

    try{

       await mongoose.connect(process.env.MONGO_SRTING);

       console.log(`MongoDb server is ready`.bgBlue.black);

    }catch(err){
        console.log(`${err}`.bgRed.black);

    }

}

//export connection
module.exports = mongoDBConnect;