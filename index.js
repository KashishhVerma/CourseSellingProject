const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/admin", adminRouter);
async function main() {
  await mongoose.connect(
    "mongodb+srv://kashishverma2304_db_user:123@cluster0.pey2suy.mongodb.net/coursera",
  );
  app.listen(3000);
}
main();
