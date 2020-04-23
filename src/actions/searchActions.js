import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios'; //using axios to mke http request instead of fetch 
import {APIKey} from '../APIKey';

export const searchMovie = text => dispatch => { //function/action this action will take a text parameter , when something is triggered in the application that trigger will dispatch a action, dispatch comes from thunk redux
    dispatch({
        type: SEARCH_MOVIE, 
        payload: text
    });
};

export const fetchMovies = text => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)  //action will create http request which will call the api, then it will respond with the movie we are looking for and it will take that movie and put it in the state  

    .then(response => { 
        console.log(response); //testing the console
        dispatch({ //trigger a action
            type: FETCH_MOVIES,
            payload: response.data //using payload to send data from app to the store

        })}
        )
        .catch (err => console.log(err));
};

export const fetchMovie = id => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`) //
    .then(response => dispatch({
        type: FETCH_MOVIE, 
        payload: response.data //sending data to the store
    })
    )
    .catch (err => console.log(err));
};
export const setLoading = () => {
    return {
        type: LOADING
    };
};
