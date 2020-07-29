import React from 'react'
import { RouteComponentProps } from 'react-router';
import {getMovieDetails} from '../services/api'
//import { createBrowserHistory } from 'history';
import { movieFields } from "../pages/Home";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

export const MovieDetails: React.FC<Props> = (props) => {
    const { id } = props.match.params
    const [details,setDetails] = React.useState<movieFields | null>()

    //const {Title} = details

    getMovieDetails(id)
    .then((respond: movieFields) => setDetails(respond))
    .catch(()=> setDetails(null))

    
    //<button onClick={(e)=>handlerClick}>Goback</button>
    return (                <div className="card article">
    <div className="card-content">
        <div className="media">
            <div className="media-center">
                <img src={details?.Poster} className="author-image" alt="Placeholder"></img>
            </div>
            <div className="media-content has-text-centered">
                <p className="title article-title">Sapien eget mi proin sed </p>
                <p className="subtitle is-6 article-subtitle">
                    
                </p>
            </div>
        </div>
        <div className="content article-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
            </p>
            <p>
                Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
            </p>
            <h3 className="has-text-centered">Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras tincidunt lobortis feugiat vivamus.</h3>
            <p>
                In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                Arcu non sodales neque sodales ut etiam sit amet.
            </p>
        </div>
    </div>
</div>)
}
