import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from 'mongoose';

import studentRouter from './routes/student.router.js';


const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/student', studentRouter);

// Connect mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB"); 
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 3000");
        });
    })
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    });


