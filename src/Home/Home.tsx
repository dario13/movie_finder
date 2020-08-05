import React from "react";
import SearchForm from "./SearchForm";
import { getMovies } from "../services/api";
import { MoviesList } from "./MoviesList";
import Title from "./Title";
import { MovieContext } from "../shared/MovieContext";

type movieId = {
  imdbID: string;
};

export type movieFields = {
  Title: string;
  Year: string;
  Poster?: string;
  Plot?: string;
  Director?: string;
  Genre?: string;
  Languague?: string;
  Country?: string;
  imdbRating?: string;
};

export type movieType = movieId & movieFields;

type State =
  | { status: "empty" }
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: movieType[] };

type Action =
  | { type: "request" }
  | { type: "success"; results: movieType[] }
  | { type: "failure"; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "request":
      return { status: "loading" };
    case "success":
      return { status: "success", data: action.results };
    case "failure":
      return { status: "error", error: action.error };
    default:
      return { status: "empty" };
  }
}

export const Home: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, { status: "empty" });
  //  const [moviesArray, setMoviesArray] = React.useState<movieType[]>([]);
  const [movieName, setMovieName] = React.useState<string>("");
  const { movieSearched, setMovieSearched }: any = React.useContext(
    MovieContext
  );

  React.useEffect(() => {
    if (state.status === "empty" && movieSearched.length > 0) {
      //Load the context if exists
      dispatch({ type: "success", results: movieSearched });
    } else {
      // Else call the api
      if (state.status === "loading" && movieName !== "") {
        getMovies(movieName!)
          .then((respond) => {
            return respond.length > 0
              ? (dispatch({ type: "success", results: respond }),
                setMovieSearched(respond))
              : dispatch({ type: "failure", error: "no hay resultados" });
          })
          .catch((error) => dispatch({ type: "failure", error }));
      }
    }
  }, [movieSearched, movieName, setMovieSearched, state]);

  const handleSubmit = (movieEntered: string) => {
    setMovieName(movieEntered);
    if (movieEntered !== "") dispatch({ type: "request" });
  };

  const printResults = () => {
    switch (state.status) {
      case "empty":
        return <></>;
      case "loading":
        return (
          <div className="centered">
            <div className="custom-spinner"></div>
          </div>
        );
      case "success":
        return (
          <div className="PrintResults-wrapper">
            <MoviesList>{state.data!}</MoviesList>
          </div>
        );
      case "error":
        return (
          <h2 className="subtitle is-2">
            &#128169; There aren't results &#128078; <br />
            Please try again!
          </h2>
        );
    }
  };

  const renderSearchForm = () => {
    switch (state.status) {
      case "empty":
        return "SearchForm-wrapper centered";
      default:
        return "SearchForm-wrapper";
    }
  };

  return (
    <>
      <div className={renderSearchForm()}>
        <Title>Movie Finder</Title>
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      <div className="container">{printResults()}</div>
    </>
  );
};
