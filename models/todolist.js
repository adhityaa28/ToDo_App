const mongoose=require('mongoose');

const toDoListSchema=new mongoose.Schema({
    description:{
        type: String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});
 const ToDoList= mongoose.model('ToDoList',toDoListSchema);

 module.exports=ToDoList;