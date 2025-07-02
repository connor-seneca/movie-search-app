import React, {useState} from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const searchMovies = async () => {
    if (!query) {
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <input 
        type='text'
        value={query}
        placeholder='Search Movies...'
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="movie-list">
        {movies.map((movie => (
          <div key={movie.imdbID} className="movie">
            <h3>{movie.Title} ({movie.Year})</h3>
            <img src={movie.Poster} alt={movie.Title}></img>
          </div>
        )))}
      </div>
    </div>
  );
}

export default App;
