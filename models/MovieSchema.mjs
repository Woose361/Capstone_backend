import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  
  overview: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model('Movie', MovieSchema);
export default Movie;