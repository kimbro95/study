import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest: fetchMovies } = useFetch();

  useEffect(() => {
    const movieList = (data) => {
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }
      setMovies(loadedMovies);
    };

    fetchMovies(
      { url: 'https://react-http-ff0f3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json' },
      movieList
    );
  }, [fetchMovies]);

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
