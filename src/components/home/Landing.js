import React, { Component } from 'react';

import { connect } from 'react-redux';
//below we are importing components for the home/lnding page
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer'; 
import Spinner from '../layout/Spinner';

export class Landing extends Component { //if it is empty it will return spinner, but if the component is ready then it will display the movie
  render() {
    const { loading } = this.props; //to access loading use this.props
    console.log(loading);
    return (
      <div className="container"> 
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div> //use curlybrace if javascript is being used, if true display spinner if false display movies
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading //this will pass loading as a prop into the component
});

export default connect(mapStateToProps)(Landing); //exporting file in order to import it to another file