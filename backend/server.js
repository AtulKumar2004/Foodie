import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js"


dotenv.config();

// app config
const app = express();
const port = 4000;

app.use(cookieParser());

// middleware
app.use(express.json());
app.use(cors());


// db connection
connectDB();

// api endpoints
app.use("/api/auth",authRouter);
app.use("/api/food",foodRouter);

app.get('/',(req,res)=>{
    res.send("api working");
});

app.listen(port, async()=>{
    console.log(`server started on port ${port}`);
    await connectDB();
});