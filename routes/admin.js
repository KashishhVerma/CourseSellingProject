const {Router}=require("express")
const adminRouter=Router()
adminRouter.post("signup/",function(req,res){
    res.json({
        msg:""
    })
})
adminRouter.post("signin/",function(req,res){
    res.json({
        msg:""
    })
})
adminRouter.post("course/",function(req,res){
    res.json({
        msg:""
    })
})
adminRouter.put("course/",function(req,res){
    res.json({
        msg:""
    })
})
adminRouter.get("course/bulk/",function(req,res){
    res.json({
        msg:""
    })
})
module.exports={adminRouter:adminRouter}