import mongoose from "mongoose";


const skillSchema = mongoose.Schema({
    skillName:{
        type:String,
        required:true,
        unique: true
    },
    skillDesc:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const skillModel= mongoose.model('skill',skillSchema)