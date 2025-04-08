const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema(
    {
        author: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
        },
        liked: {
            type: Boolean,
            default: false,
        },
        disliked: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = reviewSchema;
