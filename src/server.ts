import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';

dotenv.config();

connectDB()
const app = express();
// Middlewares
app.use(cors());
app.use(express.json()); // Permite leer JSON en las peticiones

export default app;
