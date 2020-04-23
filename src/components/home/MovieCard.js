import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props; //this is how we are going to get the movie from the props
    return ( //style of moviecard
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" /> 
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}> 
            Movie Details
            <i className="fas fa-chevron-right" /> 
          </Link> 
        </div> 
      </div>
    );
  }
}

export default MovieCard; //each movie will now have their own link to the imdb movie page