const express=require("express");
const app=express();
app.post("/user/signup",function(req,res){
    res.json({
        msg:""
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        msg:""
    })
})
app.get("/user/purchases",function(req,res){
    res.json({
        msg:""
    })
})
app.post("/course/purchases",function(req,res){
    res.json({
        msg:""
    })
})
app.post("/courses",function(req,res){
    res.json({
        msg:""
    })
})

app.listen(3000)