// Libraries include
const mongoose = require("mongoose");
const assert = require("assert");
// const db_url = process.env.DB_URL_LOCAL;
const db_url = process.env.DB_URL;

// Establishing Database Connection
mongoose.connect(
    db_url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true
    },
    (error,link)=>{
        // Check error
        assert.strictEqual(error,null,"Database Connect Fail....");
        // console.log(error);

        // database connect success
        // console.log(link);
        console.log("Connection stablish .......");
    }
);