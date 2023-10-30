const ToDo=require('../modals/toDo');
const asyncHandler=require('express-async-handler');
const bcypt=require('bcrypt');


//get home controller
const getHome=asyncHandler(async function(req,res){
    ToDo.find({}).then(function(todo){
    
        return res.render('home',{
            title:"To Do List",
            tasks:todo
        }); 
    
      })
       .catch(function(err){
        console.log("Error Encountered!");
      })
});
//Create taks 
const createTask=asyncHandler(async function(req,res){
    const{task,taskdetail,startdate,deadline,sd}=req.body;
    //confirm data
    //create and store new task;
    // let date
    const taskObj={task,taskdetail,startdate,deadline};
    const newTask=await ToDo.create(taskObj);
    return res.redirect('back');
});
//Move task to runnig
const moveToRunning=asyncHandler(async function(req,res){
    const id = req.query
    const to=await ToDo.findByIdAndUpdate({_id:id.id}, {$set:{ sd:1}}); 
    res.redirect('back')
});
//Move to done task 
const moveToDone=asyncHandler(async function(req,res){
    const id = req.query
    const to=await ToDo.findByIdAndUpdate({_id:id.id}, {$set:{ sd:2}}); 
    res.redirect('back')
});
const deleteTask=asyncHandler(async function(req,res){
    const id = req.query.id
    const to=await ToDo.findByIdAndDelete(id);
    res.redirect('back')
});
//Export the function 
module.exports={
    getHome,
    createTask,
    moveToRunning,
    moveToDone,
    deleteTask
}

