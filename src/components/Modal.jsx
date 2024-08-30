import React from "react";
import "./Modal.css"; // Estilize o modal com o CSS

function Modal({ movie, closeModal }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${
    movie.backdrop_path || movie.poster_path
  }`;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={imageUrl} alt={movie.title || movie.name} />
        <h2>{movie.title || movie.name}</h2>
        <p>{movie.overview}</p>
        <p>
          <strong>Release Date:</strong>{" "}
          {movie.release_date || movie.first_air_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
}

export default Modal;
