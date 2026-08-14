require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const app = express();     // creates an instance of the http server or app

// createUserRoutes(app);
// createCourseRoutes(app);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Listening on port ${process.env.PORT || 3000}`);
        });

    } catch (err) {
        console.log("MongoDB connection failed");
        console.log(err.message);
    }
}

main()