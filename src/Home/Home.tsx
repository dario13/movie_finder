import React from "react";
import SearchForm from "./SearchForm";
import { MoviesList } from "./MoviesList";
import Title from "./Title";
import { MovieContext } from "../shared/MovieContext";
import { useGet } from "../services/useGet";

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
  | { type: "request" } //Movie indicates the movie to search
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
  const [movietoSearch, setMovietoSearch] = React.useState<string>("");
  const { movieSearched, setMovieSearched }: any = React.useContext(
    MovieContext
  );

  let moviesListUrl = "";
  if (movietoSearch !== "")
    moviesListUrl = `${process.env.REACT_APP_MOVIE_URL_AND_API_KEY}&s=${movietoSearch}`;

  const [loading, response, errorGet] = useGet(moviesListUrl);
  console.log(response, errorGet);

  React.useEffect(() => {
    if (state.status === "empty" && movieSearched.length > 0) {
      //Load the context if exists
      dispatch({ type: "success", results: movieSearched });
    } else if (response !== null) {
      dispatch({ type: "success", results: response.Search });
      setMovieSearched(response.Search);
    } else if (errorGet !== null)
      dispatch({ type: "failure", error: errorGet });
  }, [state.status, movieSearched, response, errorGet, setMovieSearched]);

  const handleSubmit = (movieEntered: string) => {
    if (movieEntered !== "") {
      dispatch({ type: "request" });
      setMovietoSearch(movieEntered);
    }
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
          <div className="centered">
            <h2 className="subtitle is-2">
              &#128169; There aren't results &#128078; <br />
              Please try again!
            </h2>
          </div>
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
