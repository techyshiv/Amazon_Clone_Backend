// Libraries include
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.port;
const database = require("./database");

// user route
const userRoute = require("./routes/users");

// middleware setup
app.use(cors());
app.use(morgan("dev"));
app.use("/api/users",userRoute);

// route
app.get('/',(req,res)=>{
    return res.status(200).json({
        "Status":true,
        "Message":"Amazon clone rest api homepage."
    })
})

// Start Server
app.listen(port,()=>{
    console.log(`Server Running at Port Number:${port}`);
})