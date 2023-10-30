const express=require('express');
const port =8000;

//require the library of database
const db=require('./config/mongoose');
const toDo=require('./modals/toDo');
const app=express();
const moment = require("moment");

app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
  });
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
//use express router
app.use('/',require('./routes/index'));
//set up view engine
app.use(express.static('assets'))
app.listen(port,function(err){
    if(err){
        console.log(`Error occured in server ${err}`);
    }
    console.log(`Server is currenty running over : ${port}`);
})
