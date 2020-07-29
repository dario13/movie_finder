import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/movie_finder" component={Home} />
      <Route path="movie_finder/movie_details/:id" component={MovieDetails} />
    </Switch>
  </BrowserRouter>
);
 
export default Routes;
