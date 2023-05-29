import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express(); //initializing express
dotenv.config();
connectDB();


app.use(express.json);

app.get('/', (req, res) => {
  res.send('API is Runnning');
});

const PORT = process.env.PORT || 5005;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
