import React from "react";
import { movies } from "../data";

function Movies() {
  const titleList = movies.map((movie, index) => {
    const genreList = movie.genres.map((genre, index) => {
      return <li key={index}>{genre}</li>;
    });
    return (
      <div key={index}>
        <h3>{movie.title}</h3>
        <p key={index}>Movie runtime: {movie.time}</p>
        <ul>{genreList}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {titleList}
    </div>
  );
}

export default Movies;
