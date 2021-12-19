import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director, index) => {
    const movieList = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={index}>
        <h3>{director.name}</h3>
        <ul key={index}>{movieList}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
