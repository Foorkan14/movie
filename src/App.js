// import React from 'react';
import React, { Component } from 'react'; 
import {Provider} from 'react-redux'; //makes the store available to the nested compnents
import {HashRouter as Router, Route} from 'react-router-dom'; //hashrouter includes current route in url, 
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';

class App extends Component { //to use component we have to use it as a tag
  render() {
  return ( //nesting the components in parent items
      <Provider store={store} >
        <Router>
          <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
      <Footer />
    </div>
    </Router>
    </Provider>
  );
  }
    
}

export default App;
