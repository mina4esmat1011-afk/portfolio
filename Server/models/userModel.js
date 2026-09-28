import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{type:String,
        required:true,
        trim:true
    },
    email:{type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase: true,
        match:[/(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/gm,'please enter a valid email']
    },
    password:{type:String,
        required:true,
        trim:true,
        minLength:6,
        select: false,
        
    },
    role:{type:String,
        enum: ['user','admin'],
        default:'user'
    }
    
},{timestamps:true})

export const userModel = mongoose.model('user',userSchema)