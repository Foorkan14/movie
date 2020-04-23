//search page
import React, { Component } from 'react';

import { connect } from 'react-redux'; //in order to use state inside component we need connect, which will connect components with the state of the redux

import {
  searchMovie, //importing the search movie action to use in the function below
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component { //we are taking the value of the user's input and we use that value inside the search_movie action
  onChange = e => {
    this.props.searchMovie(e.target.value); //(functions use props not class)
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text); 
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
             className="form-control"
            name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange} //
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ //this is the structuring process, 
  text: state.movies.text //state is the global state object, movies contains all of the reducers inside it, so if we want to call any variable we need to use state.movies. (here goes the variable we are calling)
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading } //using the function mapstatetoprops as one argument and the actions as the other argument for the connect react/redux package
)(SearchForm);