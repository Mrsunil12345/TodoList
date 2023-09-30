const mongoose=require('mongoose')

const TodoList=new mongoose.Schema({
    name:String,
    done: { 
        type: Boolean,
        default:false
     }
})

const TodoListNew=mongoose.model('TodoList',TodoList)
module.exports=TodoListNew