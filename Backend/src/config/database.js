const mongoose = require("mongoose")


async function connectToDB(){
       try {await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected with Database")
    } 
    catch(error){
        console.error(error.message);
    }
}

module.exports = connectToDB