import * as projectController from '../controllers/projectController.js'
import { protect,adminOnly } from '../middleware/authMiddleware.js'
import express from 'express'

export const projectRouter = express.Router()

projectRouter.post('/addProject',protect,adminOnly,projectController.addProject)
projectRouter.get('/getProjects',projectController.getProjects)
projectRouter.put('/updateProjects/:id',protect,adminOnly,projectController.updateProject)
projectRouter.delete('/deleteProject/:id',protect,adminOnly,projectController.deleteProject)

