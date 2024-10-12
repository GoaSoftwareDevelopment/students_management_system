import express from "express";
const studentRouter = express.Router();

// სქემები
import Student from "../model/student.model.js";


// სტუდენტის დამატების როუტი
studentRouter.post('/', async (req, res) => {
    // სტუდენტის დამატება მონაცემთა ბაზაში
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);

    } catch (error) {
        // შეცდომის მართვა
        console.error(error);
        res.status(500).send('სტუდენტის დამატებისას დაფიქსირდა შეცდომა!');
    }
})

// ყველა სტუდენტის მიღების როუტი
studentRouter.get('/', async (req, res) => {
    // მონაცემთა ბაზიდან ყველა სტუდენტის მიღება
    try {
        const students = await Student.find({});
        res.status(200).send(students);

    } catch (error) {
        // შეცდომის მართვა
        console.error(error);
        res.status(500).send('სტუდენტების წამოღებისას დაფიქსირდა შეცდომა!');
    }
})

// სტუდენტის მიღება ID-ით როუტი
studentRouter.get('/:id', async (req, res) => {
    // მონაცემთა ბაზიდან სტუდენტის მიღება ID-ის მიხედვით
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send('სტუდენტი ვერ მოიძებნა!');
        res.status(200).send(student);

    } catch (error) {
        // შეცდომის მართვა
        console.error(error);
        res.status(500).send('სტუდენტის ID_ით წამოღებისას დაფიქსირდა შეცდომა!');
    }
})

// სტუდენტის წაშლის როუტი
studentRouter.delete('/:id', async (req, res) => {
    // მონაცემთა ბაზიდან სტუდენტის წაშლა
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).send('სტუდენტი ვერ მოიძებნა!');
        res.status(200).send(student);
    } catch (error) {
        // შეცდომის მართვა
        console.error(error);
        res.status(500).send('სტუდენტის წაშლისას დაფიქსირდა შეცდომა!');
    }
})

// სტუდენტის განახლების როუტი
studentRouter.put('/:id', async (req, res) => {
    // მონაცემთა ბაზაში სტუდენტის განახლება
    res.send(`ID-ით სტუდენტი ${req.params.id} განახლდა`);
})

export default studentRouter;
