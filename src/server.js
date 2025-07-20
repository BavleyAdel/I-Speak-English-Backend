import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import studentRoutes from './routes/student.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

app.get('/', (_req, res) => {
  res.send('Student CRUD API is running');
});

// Start server
const { PORT = 3000, MONGO_URI } = process.env;
connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
});