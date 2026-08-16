// const express = require("express");
// const router = express.Router;
const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aman123";

    userRouter.post("/signup", async function(req, res) {
        const { email, password, firstName, lastName } = req.body;  // TODO: Adding zod validation
        //TODO: hash the password && Put inside the try catch block

        await userModel.create ({
            email,
            password,
            firstName,
            lastName
        })
        res.json({
            message: "Signup succeeded"
        })
    })

    userRouter.post("/signin", async function(req, res) {
        const { email, password } = req.body;

        // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
        const user = await userModel.findOne({
            email,
            password
        });

        if(user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD );

            // Do cookie logic

            res.json({
                token : token
            })
        } else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    })

    userRouter.get("/purchases", function(req, res) {
        res.json({
            message: "Signup endpoint"
        })
    })

module.exports = {
    userRouter : userRouter
}