// Include Libraries
const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const bodyparser = require("body-parser");
const { check,validationResult, body } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// link user model
const user = require("./../models/user");
const token_key = process.env.TOKEN_KEY;

// Middleware setup
Router.use(bodyparser.json());
Router.use(bodyparser.urlencoded({extended:true}));

// Default route
// Access Public
// Url:http://localhost:500/api/users/
Router.get(
    "/",
    (req,res)=>{
        res.status(200).json(
            {
                "Status":true,
                "Message":"User Default route"
            }
        );
    }
);

module.exports=Router;