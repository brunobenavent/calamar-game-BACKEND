import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import gameRoutes from './routes/gameRoutes';


dotenv.config();

connectDB()
const app = express();
// Middlewares
app.use(cors());
app.use(express.json()); // Permite leer JSON en las peticiones

// Routes
app.use("/api/games", gameRoutes);
export default app;
