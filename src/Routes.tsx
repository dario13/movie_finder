/**
 * cmmb / rfca
 */

import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Home/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { MovieContext } from "./shared/MovieContext";
import { movieType } from "./Home/Home";
import { Page404 } from "./404/404";

export const Routes: React.FC = () => {
  const [movieSearched, setMovieSearched] = React.useState<movieType[]>([]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MovieContext.Provider value={{ movieSearched, setMovieSearched }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie_details/:id" component={MovieDetails} />
          <Route component={Page404} />
        </Switch>
      </MovieContext.Provider>
    </BrowserRouter>
  );
};
