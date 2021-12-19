import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor, index) => {
    const movieList = actor.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={index}>
        <h3 key={index}>{actor.name}</h3>
        <ul>{movieList}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
}

export default Actors;
