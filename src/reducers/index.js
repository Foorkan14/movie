import {combineReducers} from 'redux'; //here we combine all our reducers into one reducer as a signle parent state
import searchReducer from './searchReducer'; //parent reducer for different states my componentes will go through


export default combineReducers({

    movies: searchReducer
});