import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
//thunk to call a function for action instead of object
import thunk from "redux-thunk";
import "./App.css";
import MovieList from "./movies/movieslist";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MovieDetail from "./movies/MovieDetail";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Toggle from "./toggle/toggle";
import { save, load } from "redux-localstorage-simple";

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Toggle />
        <header className="App-header">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/375px-IMDB_Logo_2016.svg.png"
              className="App-logo"
              alt="logo"
            />
          </Link>
        </header>

        <Switch>
          <Route path="/:id" component={MovieDetail} />
          <Route exact path="/" component={MovieList} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
