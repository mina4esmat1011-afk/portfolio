import * as SkillController from '../controllers/skillsController.js'
import { protect,adminOnly } from '../middleware/authMiddleware.js'
import express from 'express'

export const skillRouter = express.Router()

skillRouter.post('/addSkill',protect,adminOnly,SkillController.addSkill)
skillRouter.get('/getSkill',SkillController.getSkills)
skillRouter.put('/updateSkill/:id',protect,adminOnly,SkillController.updateSkill)
skillRouter.delete('/deleteSkill/:id',protect,adminOnly,SkillController.deleteSkill)