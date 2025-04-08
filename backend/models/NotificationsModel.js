const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    type: { type: String, required: true },
    author: { type: String, required: true },
    avatar: { type: String, default: "" }, // Storing avatar as a URL or file path
    time: { type: String, default: "" },
    link: { type: String, default: "" },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Opportunity;
