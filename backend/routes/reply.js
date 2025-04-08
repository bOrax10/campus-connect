const express = require("express");
const router = express.Router();
const {
    getAllReplies,
    getReplyById,
    createReply,
    updateReply,
    deleteReply,
} = require("../controllers/ReplyController");

router.get("/", getAllReplies);
router.get("/:id", getReplyById);
router.post("/", createReply);
router.put("/:id", updateReply);
router.delete("/:id", deleteReply);

module.exports = router;
