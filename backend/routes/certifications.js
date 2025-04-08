const express = require("express");
const router = express.Router();
const {
    getAllCertifications,
    getCertificationsById,
    createCertifications,
    updateCertifications,
    deleteCertifications,
} = require("../controllers/CertificationsController");

router.get("/", getAllCertifications);
router.get("/:id", getCertificationsById);
router.post("/", createCertifications);
router.put("/:id", updateCertifications);
router.delete("/:id", deleteCertifications);

module.exports = router;
