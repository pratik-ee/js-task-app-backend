const Task=require('../model/taskModel');

const createTask=async (req,res)=>{
    try {
        const task=await Task.create(req.body);
        res.status(200).json(task);
     } catch (error) {
        res.status(500).json({msg:error.message});
     }
}
const getAllTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg:error.message}); 
    }
}
const getOneTask=async (req,res) => {
    try {
        const {id}=req.params;
        const onetask=await Task.findById(id);
        if(!onetask){
            return(res.status(404).json(`not found the id :${id}`));
        }
        res.status(200).json(onetask);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}
const deleteTask=async (req,res) => {
    try {
        const {id}=req.params;
        const dtask=await Task.findByIdAndDelete(id);
        if(!dtask){
           return( res.status(404).json(`not found the id :${id}`));
        }
        res.status(200).send("task deleted");
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
    const updateTask=async (req,res) => {
        try {
            const {id}=req.params;
            const utask=await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true});
            if(!utask){
               return( res.status(404).json(`not found the id :${id}`));
            }
            res.status(200).send(utask);
        } catch (error) {
            res.status(500).json({msg:error.message});
        }
}
module.exports={
    createTask,
    getAllTasks,
    getOneTask,
    deleteTask,
    updateTask
}