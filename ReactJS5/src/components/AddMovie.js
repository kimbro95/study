import React, { useRef } from 'react';
import useFetch from '../hooks/useFetch';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const { isLoading, error, sendRequest: sendMovieRequest } = useFetch();

  const createMovie = (movie, movieData) => {
    const generatedId = movieData.name; // firebase-specific => "name" contains generated id
    const createdMovie = {
      id: generatedId,
      title: movie.title,
      openingText: movie.openingText,
      releaseDate: movie.releaseDate,
    };
    props.onAddMovie(createdMovie);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    sendMovieRequest(
      {
        url: 'https://react-http-ff0f3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: movie,
      },
      createMovie.bind(null, movie)
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>{isLoading ? 'Loading...' : 'Add Movie'}</button>
      {!isLoading && error && <p>{error}</p>}
    </form>
  );
}

export default AddMovie;
