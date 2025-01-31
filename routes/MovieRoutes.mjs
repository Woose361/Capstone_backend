import express from 'express';
import MovieController from '../controllers/MovieController.mjs';

const router = express.Router();

router.post('/', MovieController.createMovies);

router.get('/', MovieController.readMovies);

router.put('/:id', MovieController.updateMovie);

router.delete('/:id', MovieController.deleteMovie);

router.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

export default router;
