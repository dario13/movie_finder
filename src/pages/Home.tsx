import React from "react";
import SearchForm from "../components/SearchForm";
import { getMovies} from "../services/api";
import { MoviesList } from "../components/MoviesList";
import Title from "../components/Title";

type movieId = {
  imdbID: string
}

export type movieFields = {
  Title : string,
  Year: string,
  Poster?: string,
  Plot?: string,
  Director?: string,
  Genre?: string,
  Languague?: string,
  Country?: string,
  imdbRating?: string  
}

export type movieType = movieId & movieFields

export const Home: React.FC = () => {
  const [moviesArray, setMoviesArray] = React.useState<movieType[] >([]);
  const [usedSearch, setusedSearch] = React.useState<boolean>(false)
  const [movieSearched, setMovieSearched] = React.useState<string>("")

  const handleSubmit = async (movieEntered: string) => {
    setMovieSearched(movieEntered)
    await getMovies(movieEntered)
      .then((respond) => setMoviesArray(respond))
      .catch((error) => console.log('ERROR'));
    setusedSearch(true)
  };

  const printResults = () =>{
  console.log(usedSearch);

    return (usedSearch === false) //Show nothing if is the first iterate
    ? (<></>)
    : (((moviesArray?.length === 0) || (moviesArray === null)) 
      ? (<h4>&#128169; There aren't results with the name: {movieSearched}  &#128078;</h4>) 
      : (<MoviesList>{moviesArray!}</MoviesList>))
    }

  //moviesArray.forEach((element:any) => console.log(element))

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
