const express=require('express');
const Task=require('../model/taskModel')
const router=express.Router();
const{createTask,getAllTasks,getOneTask,deleteTask, updateTask}=require('../controller/taskcontroller')
router.post("/api/task",createTask);
   router.get("/api/task", getAllTasks);
   router.get("/api/task/:id", getOneTask);
   router.delete("/api/task/:id", deleteTask);
   router.put("/api/task/:id", updateTask);

module.exports=router;