const {Router}=require("express")
const userRouter=Router()
userRouter.post("/signup",function(req,res){
    res.json({
        msg:"h mnmn"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        msg:""
    })
})
userRouter.get("/purchases",function(req,res){
    res.json({
        msg:""
    })
})
module.exports={userRouter:userRouter}