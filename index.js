// Libraries include
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.port;

// middleware setup
app.use(cors());
app.use(morgan("dev"));

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