import React from 'react';
import './style.css';
import './test';
import SearchMovies from "./searchMovie";
import Navigation from "./navbar";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Link from './pages/link';


function App() {
  return (

      <Router>
    <div className="App">
        <div className="container">
        <Navigation/>
        <Switch>
            <Route exact path = "/link" component = { Link } />
        </Switch>
        </div>
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>

    </div>
          </Router>

  );
}

export default App;
