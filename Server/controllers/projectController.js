import {projectModel} from '../models/projectModel.js'

const addProject = async (req,res,next) => {
    try {
        let {projectName,projectDesc} = req.body
        const newProject = await projectModel.create({projectName,projectDesc})

        res.status(201).json({message:'created Done',newProject})
        
    } catch (err) {
        next(err)
    }
}

const getProjects = async (req,res,next) => {
    try {
        const projects = await projectModel.find()
        
        res.status(201).json({message:'fetched projects data Done',projects})
    } catch (err) {
        next(err)
    }
}

const updateProject = async (req,res,next) => {
    try {
        let {id} = req.params
        let {projectName,projectDesc} = req.body
    
    const updatedProject = await projectModel.findByIdAndUpdate(id,{projectName,projectDesc},{new:true , runValidators:true})

    res.status(201).json({message:'updated data Done',data:updatedProject})
    } catch (err) {
        next(err)
    }
    
}

const deleteProject = async (req,res,next) => {
    try {
        let {id} = req.params
        const deletedProject = await projectModel.findByIdAndDelete(id)

        if (!deletedProject) {
            return res.status(404).json({message:'project not found'})
        }
        
        res.status(200).json({message:'deleted project Done'})
    } catch (err) {
        next(err)
    }
}
export {addProject,getProjects,updateProject,deleteProject}