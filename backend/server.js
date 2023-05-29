import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import serverRoutes from './routes/server-routes.js';
import userRoutes from './routes/user-routes.js';

const app = express(); //initializing express
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is Runnning');
});

app.use('/api/services', serverRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5005;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
