const mongoose = require("mongoose");
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