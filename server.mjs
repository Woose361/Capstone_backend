import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.mjs';
import movieRoutes from './routes/MovieRoutes.mjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

//DB
connectDB();

//Middleware
app.use(cors({ origin: 'http://localhost:5173',}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// Routes
app.use('/api/movies', movieRoutes);
app.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
