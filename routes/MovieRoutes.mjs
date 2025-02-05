import express from 'express';
import Movie from '../models/MovieSchema.mjs';
const router = express.Router();

// Create a movie
router.post('/', async (req, res) => {
    try {
        const { title, name, description } = req.body;
        const newMovie = new Movie({ title, name, description });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        console.error('Error creating movie', err);
        res.status(500).json({ msg: 'Failed to add movie ' });
    }
});

// Get all movies
router.get('/', async (req, res) =>     {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const movies = await Movie.find(req.params.id);
        res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});


    // update a Movie
router.put('/:id', async (req, res) => {
    try {
        const { title, name, description } = req.body; 

        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, 
            req.body, { title, name, description,
            new: true,});
            
            if(!updatedMovieovies) {
            return res.status(404).json({ msg: 'Movie not found' });
        } 
        res.status(200).json(updatedMovie);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

    // delete a Movie
router.delete('/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        
        if (!deletedMovie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }
        res.json({ msg: 'Deleted Movie' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;
