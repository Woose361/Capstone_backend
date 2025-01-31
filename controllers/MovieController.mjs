import Movie from '../models/MovieSchema.mjs';

//Create
async function createMovies(req, res) {
  try {
    let newMovie = new Movie(req.body);

    await newMovie.save();

    res.json(newMovie).json(newMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Read
async function readMovies(req, res) {
  try {
    let allMovies = await Movie.find({});

    res.json(allMovies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Update
async function updateMovie(req, res) {
  try {
    let updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(!updatedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

// Delete
async function deleteMovie(req, res) {
  try {
    let movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    res.json({ msg: 'Deleted Movie' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

export default { createMovies, readMovies, updateMovie, deleteMovie };
