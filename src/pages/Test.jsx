import React, { useState } from "react";
import "./Test.css";

const movies = [
  {
    id: 1,
    title: "Inception",
    company: "Warner Bros",
    release: "2010",
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal record.",
  },
  {
    id: 2,
    title: "Interstellar",
    company: "Paramount Pictures",
    release: "2014",
    image: "https://m.media-amazon.com/images/I/71y7dcG5A3L._AC_SL1000_.jpg",
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 3,
    title: "The Batman",
    company: "DC Films",
    release: "2022",
    image: "https://m.media-amazon.com/images/I/71XQ1hN1MaL._AC_SL1024_.jpg",
    description:
      "When a sadistic killer leaves behind a trail of cryptic clues, Batman uncovers corruption in Gotham City.",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    company: "Marvel Studios",
    release: "2019",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    description:
      "The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.",
  },
  {
    id: 5,
    title: "Oppenheimer",
    company: "Universal Pictures",
    release: "2023",
    image: "https://m.media-amazon.com/images/I/81Z0xAmh9pL._AC_SL1500_.jpg",
    description:
      "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="app">
      <h1 className="header">🎬 Movie Showcase</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.release}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setSelectedMovie(null)}
            >
              &times;
            </span>
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="modal-poster"
            />
            <div className="modal-details">
              <h2>{selectedMovie.title}</h2>
              <p>
                <strong>Production Company:</strong> {selectedMovie.company}
              </p>
              <p>
                <strong>Release Year:</strong> {selectedMovie.release}
              </p>
              <p className="desc">{selectedMovie.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
