const express = require('express');
const port = 8000;
// for database
const db = require('./config/mongoose');
const ToDoList=require('./models/todolist')
const app = express();
//for ejs
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('assets'));

// to render
app.get('/',function(req,res){
    ToDoList.find({}).then(function(list){
        return res.render('home',{
        title:"To Do List",
        todolist:list
    });
    }).catch(function(err){
        if(err){
            console.log("error in rednering from database",err);
        }
    })
    
})

// to add list
app.post('/adding-list',function(req,res){
    console.log(req.body);
    ToDoList.create({
        description: req.body.description,
        category:req.body.category,
        date:req.body.date
    }).catch(function(err){
        if(err){
            console.log('error in creating database');
        }
    })
    return res.redirect('back');
})

// to delete
app.get('/delete_list/',function(req,res){
    const id=req.query.id;
    console.log(id);
    if(typeof(id)=="object"){
        let myPromise = new Promise(function(){
            for(let i of id){
               ToDoList.findByIdAndDelete(i).catch(function(e){
                   if(e)
                   {
                   console.log('error in deleting the contact',err);
                }
               })
           }
       })
       
   
       
       return myPromise.then( res.redirect('back'));
    }
    else{
        let promise = new Promise(function(){
            ToDoList.findByIdAndDelete(id).catch(function(e){
                if(e)
                {
                console.log('error in deleting the contact',err);
             }
            })
        })
        return promise.then( res.redirect('back'));
    }
    
    
})


app.listen(port,function(err){
    if(err){
        console.log(`cant listen in port: ${port}`);
    }
    console.log(`successfuly listening to port ${port} `);
})