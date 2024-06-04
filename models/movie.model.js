const { Schema, model } = require("mongoose");

const schema = new Schema({
    Title: String,
    description:String

})
const Movie = model ("Movie",schema)

module.exports=Movie