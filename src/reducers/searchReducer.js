//where all the updated states come 

import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from '../actions/types'; //importing the actions

const initialState= {                   //initial state of the appliation, there are 4 basic states, the search text, the movies search result page, the loading state, amd the single movie page
    text : '',              //either we will have empty text or will have text
    movies : [],            //empty movies array
    loading: false,
    movie: []

}

export default function(state = initialState, action){ 
    switch (action.type){                               //will check what acion type it is (SEARCH_MOVIE ETC)
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload, //the data
                loading: false
            };
            case FETCH_MOVIES: //in this state the app is fetching movies from the API
                return{
                    ...state,
                    movies: action.payload, 
                    loading: false
                };
                case FETCH_MOVIE:
                    return{
                        ...state,
                        movie: action.payload,
                        loading: false
                    };
                    case LOADING:
                        return{
                            ...state,
                            loading: true
                        };
        default:
    return state 
        }
}