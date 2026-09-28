import { userModel } from "../models/userModel.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { generateRToken } from "../utils/generateToken.js";

const register = async (req,res) => {
    try {
        let {userName,email,password} = req.body 

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/

        if (!passwordRegex.test(password)) {
            return res.status(400).json({message:'password must contain at least one letter and one number'})
        }
        
        const existUser = await userModel.findOne({email})

        if (existUser) {
            return res.status(401).json({message:'account already exist'})
        }
            const hash = await bcrypt.hash(password,10)

            await userModel.create({userName,email,password:hash})

            res.status(201).json({message:'user created Done'})
        

    } catch (err) {
        console.log(err)
        res.status(500).json({message:'error at server request'})
    }
}

const login = async (req,res) => {
    try {
        let {email,password} = req.body

        const existUser = await userModel.findOne({email}).select('+password')

        if (!existUser) {
            return res.status(401).json({message:'invalid email or password'})
        }

        const isMatch = await bcrypt.compare(password,existUser.password)

        if (!isMatch) {
            return res.status(401).json({message:'invalid email or password'})
        }

        const token = generateRToken(existUser._id,existUser.role)

        res.cookie('token',token ,{
            httpOnly: true,
            secure:process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({message:'login done',
            user:{id:existUser._id,userName:existUser.userName , role:existUser.role}
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({message:'error at connecting to server',err})
    }
}

export {register,login}

