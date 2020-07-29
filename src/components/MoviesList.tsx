import React from "react";
import { movieType } from "../pages/Home";
import { Movie } from "./Movie";

type ListProps = {
  children: movieType[]; //Array of objects
};

export const MoviesList: React.FC<ListProps> = (props) => {

  const printList = props.children.map((element) => (
    <div className="MoviesList-item flip-scale-up-hor" key={element.imdbID}>
      <Movie
        Poster={element.Poster}
        Year={element.Year}
        Title={element.Title}
        imdbID={element.imdbID}
      />
    </div>
  ));

  return (
    <>
      <div className="MoviesList">{printList}</div>
    </>
  );
};
