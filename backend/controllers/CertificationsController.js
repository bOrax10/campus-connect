const Certifications = require("../models/CertificationsModel");

const getAllCertifications = async (req, res) => {
    try {
        const certifications = await Certifications.find();
        res.json(certifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCertificationsById = async (req, res) => {
    try {
        const certification = await Certifications.findById(req.params.id);
        if (!certification) return res.status(404).json({ message: "Certification not found" });
        res.json(certification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCertifications = async (req, res) => {
    const certification = new Certifications(req.body);
    try {
        const newCertification = await certification.save();
        res.status(201).json(newCertification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateCertifications = async (req, res) => {
    try {
        const updated = await Certifications.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCertifications = async (req, res) => {
    try {
        await Certifications.findByIdAndDelete(req.params.id);
        res.json({ message: "Certification deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllCertifications,
    getCertificationsById,
    createCertifications,
    updateCertifications,
    deleteCertifications,
};
