import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './movieslist'
import{ BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import MovieDetail from './MovieDetail'

const App=()=> (
<Router>
<div className="App">
  <header className="App-header">
  <Link to='/'>
  <img src={logo} className="App-logo" alt="logo"/>
  </Link>
  </header>
<Switch>

        <Route  path="/:id" component={MovieDetail} />
        <Route exact path='/' component={MovieList}/>
</Switch>
      </div>
      </Router>
    )



export default App;
