const express = require('express');
const app =express();
// console.log(app)

const port =3000;
app.use(express.json());

const tasks =[
    {
        _id : 1,
        task: "Go to shopping"
    },
    {
        _id : 2,
        task: "Buy Tomato 1kg"
    },
    {
        _id : 3,
        task: "Buy Savala 1kg"
    },
    {
        _id : 4,
        task: "Buy Salt 1pack"
    },
    {
        _id : 5,
        task: "Ruturn Home"
    }
]

app.get("/",(req,res)=>{
res.send(tasks)

})


app.post("/",(req,res)=>{
    
    console.log(req.body)
    const item = req.body
   
    const newTask ={_id:tasks.length +1 , item}
    tasks.push(newTask)
    // tasks.push({
    //     _id :6,
    //     task:item
    // })
    res.send("added new task successfully")
    })

    app.put("/task/:id",(req,res)=>{
        const id = req.params.id;
        const updatedData = req.body;
        tasks[id].task =updatedData.task
        console.log(updatedData)
        res.send("task edited successfully")
        })
app.delete("/task/:index",(req,res)=>{
    console.log(req.params.index)
    tasks.splice(req.params.index ,1)
    res.send("task deleted successfully")
    })

   







app.listen(port,()=>{
    console.log("server is running")
})