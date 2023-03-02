const Todo = require('../models/Todo')

const getTasks  = async (req,res) => {
    const todos = await Todo.find();
    res.json(todos);
}

const createTask = (req,res) => {
    const todo = new Todo({
        text: req.body.text
      });
      todo.save();
      res.json(todo);
}

const deleteTask = async(req,res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
}

// const completeTask = async(req,res) => {
//     const todo = await Todo.findById(req.params.id);
//     todo.complete = !todo.complete;
//     todo.save(); //save it back to the db
  
//     res.json(todo);
// }

const getTask = async(req,res) => {
    const {id:todoID}=req.params
    const todo = await Todo.findOne({_id:todoID});
    res.json(todo)
}

const updateTask = async(req,res) => {
    const {id:todoId}=req.params
    const todo=await Todo.findOneAndUpdate({_id:todoId},req.body,{
        new:true,runValidators:true//new:always returns new items..the one that is updated
    })
    res.json({id:todoId,data:req.body})
}


module.exports = {
    getTasks,
    createTask,
    // completeTask,
    getTask,
    updateTask,
    deleteTask,
  }