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
