const express =require("express")
// const req = require("express/lib/request")
const mongoose=require("mongoose")


const dataShcema=mongoose.Schema({
    Name:{
        type:String
        },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String
        },
    Mobilenumber:{
        type:Number
    }
})
module.exports=mongoose.model("Data",dataShcema);