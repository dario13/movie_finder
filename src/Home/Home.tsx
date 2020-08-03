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

export const Home: React.FC = () => {
  const [moviesArray, setMoviesArray] = React.useState<movieType[]>([]);
  const [usedSearch, setusedSearch] = React.useState<boolean>(false);
  const { movieSearched, setMovieSearched }: any = React.useContext(
    MovieContext
  );

  React.useEffect(() => {
    if (movieSearched.length > 0) {
      setMoviesArray(movieSearched);
      setusedSearch(true);
    }
  }, [setMoviesArray, movieSearched, setusedSearch]);

  const handleSubmit = async (movieEntered: string) => {
    await getMovies(movieEntered)
      .then((respond) => {
        setMoviesArray(respond);
        setMovieSearched(respond);
      })
      .catch((error) => console.log("ERROR"));
    setusedSearch(true);
  };

  const printResults = () => {
    return usedSearch === false ? ( //Show nothing if is the first execution
      <></>
    ) : moviesArray?.length === 0 || moviesArray === null ? (
      <h4>&#128169; There aren't results &#128078;</h4>
    ) : (
      <MoviesList>{moviesArray!}</MoviesList>
    );
  };

  return (
    <>
      <Title>Movie Finder</Title>
      <div className="SearchForm-wrapper">
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      <div className="PrintResults-wrapper">{printResults()}</div>
    </>
  );
};
