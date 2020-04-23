import React, { Component } from 'react';

import { connect } from 'react-redux'; 

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props; 
    
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => ( //we will be mapping/looping through the movies array (from search reducer) checking to see if movie array is empty or mot, and if it isnt empty then it should display the movie that was searched
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies //we will bring the movies state here 
});

export default connect(mapStateToProps)(MoviesContainer);