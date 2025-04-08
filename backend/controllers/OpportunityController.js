const Opportunity = require("../models/OpportunityModel");

const getAllOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find();
        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getOpportunityById = async (req, res) => {
    try {
        const opportunity = await Opportunity.findById(req.params.id);
        if (!opportunity) return res.status(404).json({ message: "Opportunity not found" });
        res.json(opportunity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createOpportunity = async (req, res) => {
    const opportunity = new Opportunity(req.body);
    try {
        const newOpportunity = await opportunity.save();
        res.status(201).json(newOpportunity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateOpportunity = async (req, res) => {
    try {
        const updatedOpportunity = await Opportunity.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedOpportunity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteOpportunity = async (req, res) => {
    try {
        await Opportunity.findByIdAndDelete(req.params.id);
        res.json({ message: "Opportunity deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllOpportunities,
    getOpportunityById,
    createOpportunity,
    updateOpportunity,
    deleteOpportunity,
};
