const express=require("express");
const app=express();
app.use(express.json());

const {userRouter} =require("./routes/users")
const {courseRouter} =require("./routes/course")
const {adminRouter}=require("./routes/admin")
app.use("/api/user",userRouter);
app.use("/api/course",courseRouter);
app.use("/api/admin",adminRouter)
app.listen(3000)