const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NewsSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        thumbnail:{
            type:String
        },
        medium:{
            type:String

        },
        large:{
            type:String
        }
    }0

)}

module.exports = User = mongoose.model("news", NewsSchema);
