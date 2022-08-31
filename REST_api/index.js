const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
//  DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongo");
});

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.get("/api/auth/login", (req, res) => {
  res.send("connected to postman login");
});

app.listen(8450, () => {
  console.log("Backend server is running!");
});
