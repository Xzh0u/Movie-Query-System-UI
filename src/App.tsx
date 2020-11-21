/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Home from "./containers/Home";
import MovieProvider from "./context/MovieProvider";
import MovieList from "pages/MovieList";
function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Movie Query System -- QueryX</title>
      </Helmet>
      <Switch>
        <Route
          path="/home"
          component={() => (
            <MovieProvider>
              {/* <Home /> */}
              <MovieList />
            </MovieProvider>
          )}
        />
        <Route path="/404">
          <div>404</div>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
