import { skillModel } from "../models/skillsModel.js"

const addSkill = async (req,res,next) => {
    try {
        let {skillName,skillDesc} = req.body
        const newSkill = await skillModel.create({skillName,skillDesc})

        res.status(201).json({message:"Done",newSkill})

    } catch (err) {
        next(err)
    }
}

const getSkills = async (req,res,next) => {
    try {
        const skills = await skillModel.find()

        res.status(201).json({message:"fetched data Done",skills})
    } catch (err) {
        next(err)
    }
}

const updateSkill = async (req,res,next) => {

    try {
        let {id} = req.params
        let { skillName, skillDesc } = req.body

        const updatedSkill = await skillModel.findByIdAndUpdate(
        id,{skillName,skillDesc}, { new: true, runValidators: true }
    )

    if (!updatedSkill) {
        return res.status(404).json({message:'skill not found'})
    }
    res.status(200).json({message:"skill updated Done",updateSkill})
    } catch (err) {
        next(err)
    }
    
}

const deleteSkill = async (req,res,next) => {
    try {
        let {id} = req.params
        const deletedSkill = await skillModel.findByIdAndDelete(id)

        if (!deletedSkill) {
            return res.status(404).json({ message: 'skill not found' })
        }

        res.status(200).json({ message: 'skill deleted done' })
    } catch (err) {
        next(err)
    }
}

export {addSkill,getSkills,updateSkill,deleteSkill}