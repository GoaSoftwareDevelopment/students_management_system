import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';
import adminRoutes from './routes/admin.route.js';


const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/pupils', pupilsRouter);


app.listen(process.env.PORT, () => {
    console.log("Listening on port 3000");
});