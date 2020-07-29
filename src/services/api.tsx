//import React from "react"
import axios from "axios";
import { movieType } from "../pages/Home";

const apiKey = "26277d7a";

export const getMovies = async (movieName: string): Promise<movieType[]> => {
  return await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`)
    .then((response) => {
      // handle success
      return response.data.Error !== undefined
        ? (Promise.reject("No fue encontrado"), [])
        : response.data.Search.map((value: movieType) => {
            return value;
          });
    })
    .catch(() => {
      // handle error
      Promise.reject("Otro error con la api");
      return []
    });
};

export const getMovieDetails = async (imdbID: string): Promise<movieType> => {
  return await axios
    .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
    .then((response) => {
      // handle success
      if (response.data.Error!) {
        return Promise.reject({}); //If the response has an error return an empty movieType
      } else {
        //return movieList
        return response.data;
      }
    })
    .catch((error) => {
      // handle error
      Promise.reject({}); //If the response has an error return an empty movieType
    });
};
