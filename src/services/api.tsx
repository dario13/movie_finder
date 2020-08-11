//import React from "react"
import axios from "axios";
import { movieType } from "../Home/Home";

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const baseUrl = process.env.REACT_APP_MOVIE_API_URL;

export const getMovies = async (movieName: string): Promise<movieType[]> => {
  console.log(apiKey);
  return await axios
    .get(`${baseUrl}${apiKey}&s=${movieName}`)
    .then((response) => {
      // handle success
      return response.data.Error !== undefined
        ? (Promise.reject("The movie was not found"), [])
        : response.data.Search.map((value: movieType) => {
            return value.Poster === "N/A"
              ? ((value.Poster = "https://i.redd.it/valbyu8f61gz.jpg"), value)
              : value;
          });
    })
    .catch(() => {
      // handle error
      Promise.reject("Some error with the api");
    });
};

export const getMovieDetails = async (imdbID: string): Promise<movieType> => {
  return await axios
    .get(`${baseUrl}${apiKey}&i=${imdbID}`)
    .then((response) => {
      // handle success
      if (response.data.Error!) {
        return Promise.reject({}); //If the response has an error return an empty movieType
      } else {
        return response.data.Poster === "N/A"
          ? ((response.data.Poster = "https://i.redd.it/valbyu8f61gz.jpg"),
            response.data)
          : response.data;
      }
    })
    .catch((error) => {
      // handle error
      Promise.reject({}); //If the response has an error return an empty movieType
    });
};
