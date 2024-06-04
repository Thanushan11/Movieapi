const { Schema, model } = require("mongoose");

const schema = new Schema({
    Title: {type:String,
            required:true,
            unique:true},
    description:{
        type:String,
        required:true,
        unique:false
        }

})
const Movie = model ("Movie",schema)

module.exports=Movie;