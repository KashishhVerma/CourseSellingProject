const express=require("express");
const app=express();
app.use(express.json());

const {userRouter} =require("./routes/users")
const {courseRouter} =require("./routes/course")
app.use("/api/user",userRouter);
app.use("/api/course",courseRouter);
app.listen(3000)