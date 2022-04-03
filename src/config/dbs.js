const mongoose=require("mongoose");

require("dotenv").config();
const connect=()=>{

    console.log("Listening port 5000")
    console.log("Happy Happy Keep smile I am Connected");

    return mongoose.connect(process.env.MONGODB_URL)

}
module.exports=connect;