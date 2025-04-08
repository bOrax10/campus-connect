const Reply = require("../models/ReplyModel");

const getAllReplies = async (req, res) => {
    try {
        const replies = await Reply.find();
        res.json(replies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getReplyById = async (req, res) => {
    try {
        const reply = await Reply.findById(req.params.id);
        if (!reply) return res.status(404).json({ message: "Reply not found" });
        res.json(reply);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createReply = async (req, res) => {
    const reply = new Reply(req.body);
    try {
        const newReply = await reply.save();
        res.status(201).json(newReply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateReply = async (req, res) => {
    try {
        const updatedReply = await Reply.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteReply = async (req, res) => {
    try {
        await Reply.findByIdAndDelete(req.params.id);
        res.json({ message: "Reply deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllReplies,
    getReplyById,
    createReply,
    updateReply,
    deleteReply,
};
