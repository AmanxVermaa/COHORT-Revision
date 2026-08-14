const mongoose = require("mongoose");

// // MongoDB Connection
// mongoose
//     .connect(
//         "mongodb+srv://av9688754_db_user:aman1234@cluster0.prdjpju.mongodb.net/coursera-app?appName=Cluster0"
//     )
//     .then(() => {
//         console.log("MongoDB connected successfully");
//     })
//     .catch((err) => {
//         console.log("MongoDB connection failed");
//         console.log(err.message);
//     });

// Schema
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// User Schema
const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String
});

// Admin Schema
const adminSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String
});

// Course Schema
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

// Purchase Schema
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

// Models
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

// Export Models
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};