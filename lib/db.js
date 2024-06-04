const {  mongoose } = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

const connectDb= async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb connected......")
   } catch (error) {
    console.error(error.message)
    process.exit(1);
   }
}
module.exports= connectDb;