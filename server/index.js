const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
const db=require('./Model/db')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')
 .then(()=>console.log("connect"))

 app.post('/save',(req,res)=>{
  console.log(req.body)
  db.create({name:req.body.data})

 })

 app.get('/getdata',(req,res)=>{
  db.find().then((out)=>res.send(out))
  .catch((err)=>res.send(err))
 })

 app.put('/updateData/:id',(req,res)=>{
  //console.log(req)
    let id=req.params.id
    console.log(id)
    db.findByIdAndUpdate({_id:id},{done:true})
    .then((result)=>{
      console.log(result)
      res.send(result)})
    .catch((err)=>{res.send(err)})
 })

 app.delete('/deleteData/:id',(req,res)=>{
  console.log(req.params.id)
  db.findByIdAndDelete({_id:req.params.id})
  .then((res1)=>{res.send(res1)})
  .catch((err)=>{console.log(err)})
 })

app.listen(8080,()=>{
  console.log("server is runing on the port 8080")
})