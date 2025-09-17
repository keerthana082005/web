const mongoose = require('mongoose');
const taskSchema=new mongoose.Schema({
    title:{type:String, required:[true,'Task title is required']},
    completed:{type:Boolean, default:false}
});
module.exports=mongoose.model('Task', taskSchema);


// /routers/taskRoutes.js

const express=require('express');
const router=express.Router();
const {
    createTask,
    getAllTasks,
    getTaskById,
} = require('../controllers/taskController');
router.post('/tasks',createTask);
router.get('/tasks',getAllTasks);
router.get('/tasks/:id', getTaskById);
module.exports=router;
