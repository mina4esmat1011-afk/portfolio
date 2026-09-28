import jwt from 'jsonwebtoken'
import { userModel } from "../models/userModel.js"

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies?.token

        if (!token) {
            return res.status(401).json({ message: 'not authenticated, please login' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET) 

        const user = await userModel.findById(decoded.id)

        if (!user) {
            return res.status(401).json({ message: 'user not found' })
        }

        req.user = user
        next()

    } catch (err) {
        return res.status(401).json({ message: 'invalid or expired token' })
    }
}

export const adminOnly = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'access denied , admin only' })
    }
    next()
}