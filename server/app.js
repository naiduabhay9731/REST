const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors());
const mongoserver = process.env.mongo2;

mongoose.connect('mongodb+srv://'+mongoserver);
const task = {
    title: String,
    description: String,
    status1: String

  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));  
const Taskmodel=mongoose.model("tasks", task);
app.route("/tasks")
  .get(async function (req, res) {
    const x = await Taskmodel.find({});
    res.send(x);
  })
  .post(async function (req, res) {
    
    const newtask = new Taskmodel({
      title: req.body.title,
      description: req.body.description,
      status1:req.body.status1
    })
    await newtask.save().then(
      res.send("Done")
    )

  })
  .put(async(req,res)=>{
    const art_name= req.body.title;
    
    const found =await Taskmodel.findOneAndUpdate({title:art_name},{title:req.body.title,description:req.body.description,status1:req.body.status1},{overwrite :true}).then(
      
    )
    if(found){
        res.send("Updated")
    }
    else{
        const newtask1 = new Taskmodel({
            title: req.body.title,
            description: req.body.description?req.body.description:" ",
            status1:req.body.status1?req.body.status1:" "
          })
          await newtask1.save().then(
            res.send("Created item")
          )
    }
  })

  .patch(async(req,res)=>{
    const art_name= req.body.title;
    const found=await Taskmodel.findOneAndUpdate({title:art_name},{title:req.body.title,description:req.body.description?req.body.description:" ",status1:req.body.status1?req.body.status1:" "}).then(
      
    )
    if(found){
        res.send("Updated")
    }
    else{
        res.send("Item not found")
    }
  })

  .delete(async (req,res)=>{
    const art_name= req.body.title;
    await Taskmodel.deleteOne({title :art_name}).then(
      res.send("Deleted")
    )
  })


















app.listen(5000, function () {
    console.log("Server started on port 3000");
  });