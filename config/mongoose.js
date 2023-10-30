const mongoose =require('mongoose');
//connected to database
mongoose.connect('mongodb://localhost/to_Do_db');
//connection acquired
var db=mongoose.connection;
//if there is an error in connection
db.on('error',console.error.bind(console,'Connection Error!'));
//if connection is successful
//once a db is open
db.once('open',function(){
    console.log("Connected to DB");
})