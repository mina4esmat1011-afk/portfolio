import mongoose from "mongoose";


const projectSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true,
        unique:true
    },
    projectDesc:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const projectModel = mongoose.model('project',projectSchema) 