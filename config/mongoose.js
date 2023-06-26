const mongoose=require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/ToDoList_database");
 const db = mongoose.connection;

 db.on('error', console.error.bind(console,'error connecting to ToDoList_database'));

 db.once('open',function(){
    console.log('succesfully connected to ToDoList_database');
 })