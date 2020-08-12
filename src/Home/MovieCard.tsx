import React from "react";
import { movieType } from "./Home";
import { Link } from "react-router-dom";

export const Movie: React.FC<movieType> = (props) => {
  const renderImage = () => {
    return props?.Poster === "N/A"
      ? "https://i.redd.it/valbyu8f61gz.jpg"
      : props?.Poster;
  };

  return (
    <Link to={`/movie_details/${props.imdbID}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3 image-card">
            <img src={renderImage()} alt={props.Title}></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.Title}</p>
              <p className="subtitle is-6">{props.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
