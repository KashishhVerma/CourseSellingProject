const {Router}=require("express")
const courseRouter=Router()

courseRouter.post("/purchases",function(req,res){
    res.json({
        msg:""
    })
})
courseRouter.get("/preview",function(req,res){
    res.json({
        msg:"dffd"
    })
})
module.exports={
    courseRouter:courseRouter
}