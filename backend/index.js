const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.sucess){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
})


app.post("/todos", function(req, res){})


app.post("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.sucess){
        res.status(411).json({
            msg: "yoy sent the wrong inputs"
        })
        return;
    }
})