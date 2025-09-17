const Task=require('../models/taskModel.js')
const createTask=async(req,res)=> {
    try{
        const {title, completed}=req.body;
        const task=new Task({title,completed});
        const newTask=await task.save();
        res.status(201).json(newTask);
    }catch (err){
        res.status(500).json({message:err.message});
    }
};
const getAllTasks=async(req,res)=> {
    try{
        const tasks=await Task.find();
        res.status(200).json(tasks);
    }catch(err) {
        res.status(500).json({message:err.message});
    }
};
const getTaskById=async(req,res)=> {
    try{
        const {id}=req.params;
        const task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message:'Task not found'});
        }
        res.status(200).json(task);
    }catch(err) {
        res.status(500).json({message:err.message});
    }
};
module.exports={createTask, getAllTasks, getTaskById};
