import express from "express";
import Admin from "../model/admin.model.js";

const adminRoutes = express.Router();



// Add admin route
adminRoutes.post('/', async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send("ადმინის ექაუნთი წარმატებით შეიქმნა!");
    } catch (error) {
        res.status(400).send("ადმინის ექაუნთის შექმნა ვერ მოხერხდა!");
    }
})

// Delete admin route
adminRoutes.delete('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).send("ადმინის ექაუნთი არ მოიძებნა!");
        res.status(200).send("ადმინის ექაუნთი წარმატებით წაიშალა!");
    } catch (error) {
        res.status(500).send("ადმინის ექაუნთის წაშლა ვერ მოხერხდა!");
    }
})

