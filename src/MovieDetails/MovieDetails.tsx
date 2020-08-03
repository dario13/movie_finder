import React from "react";
import { useParams, useHistory } from "react-router";
import { getMovieDetails } from "../services/api";
//import { createBrowserHistory } from 'history';
import { movieFields } from "../Home/Home";

export const MovieDetails = () => {
  //const { id } = props.match.params;
  const { id } = useParams();
  const { goBack } = useHistory();
  const [details, setDetails] = React.useState<movieFields | null>();

  React.useEffect(() => {
    getMovieDetails(id)
      .then((respond: movieFields) => setDetails(respond))
      .catch(() => setDetails(null));
  }, [id]);

  const renderDetails = () => {
    return (
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <button className="button is-info" onClick={() => goBack()}>
                    &#8617;
                  </button>
                  <h1 className="title is-1">{details?.Title}</h1>
                  <figure className="image-movie">
                    <img src={details?.Poster} alt="poster"></img>
                  </figure>
                  <h2 className="subtitle is-3">{details?.Year}</h2>
                  <div>
                    <p>
                      <strong>Genre: </strong>
                      {details?.Genre}
                    </p>
                    <p>
                      <strong>Rating: </strong>
                      {details?.imdbRating}/10 &#11088;
                    </p>
                    <p>
                      <strong>Director: </strong>
                      {details?.Director}
                    </p>
                    <p>
                      <strong>Country: </strong>
                      {details?.Country}
                    </p>
                    <p>{details?.Plot}</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  };

  const renderProgressBar = () => {
    return (
      <div className="container">
        <div className="columns is-vcentered">
          <progress className="progress is-large is-info" max="10"></progress>
        </div>
      </div>
    );
  };

  const renderConditional = () => {
    //return renderProgressBar();
    return details === undefined ? renderProgressBar() : renderDetails();
  };

  //<button onClick={(e)=>handlerClick}>Goback</button>
  return <>{renderConditional()}</>;
};
