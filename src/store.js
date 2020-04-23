import {createStore, applyMiddleware} from 'redux'; //interact with actions that have been dispatched to the store before they reach the store's reducer,AND create store tore that holds the complete state tree of the app
import thunk from 'redux-thunk'; //thunk is used to delay the dispatch of an action, or dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; //imported devtools so that our redux extension would work
import rootReducer from './reducers'; //store is getting all updated states from reducer

const middleWare = [thunk]; 
const initialState = {};


const store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(...middleWare)))

export default store; 

//store sends updated states to components