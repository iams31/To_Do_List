const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/to_Do_db',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
const toDoSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    taskdetail:{
        type:String,
        required:true
    },
    startdate:{
        type:Date,
        required:true
        
    },
    deadline:{
        type:Date,
        required:true
    },
    sd:{
        type:Number,
        default:0
    }

});
const ToDo=mongoose.model('toDo',toDoSchema);
module.exports=ToDo;