import React, {useState} from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '';

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
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
    </div>
  );
}

export default App;
