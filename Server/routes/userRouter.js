import express from 'express'
import * as controllers from '../controllers/user.js'

export const userRouter = express.Router()

userRouter.post('/register',controllers.register)
userRouter.post('/login',controllers.login)

