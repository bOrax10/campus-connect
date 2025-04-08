const mongoose = require("mongoose");
const { Schema } = mongoose;
const reviewSchema = require("./ReviewModel");

const courseSchema = new Schema(
    {
        courseCode: {
            type: String,
            required: true,
            unique: true,
        },
        courseName: {
            type: String,
            required: true,
        },
        ratingCount: {
            type: Number,
            default: 0,
        },
        rating: {
            type: Number,
            default: 0,
        },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
