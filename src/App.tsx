/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Home from "./containers/Home";
import MovieProvider from "./context/MovieProvider";
import MovieListPage from "pages/MovieList";
function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Movie Awesome - Movie Query System | Xzh0u</title>
      </Helmet>
      <Switch>
        <Route
          path="/list"
          component={() => (
            <MovieProvider>
              {/* <Home /> */}
              <MovieListPage />
            </MovieProvider>
          )}
        />
        <Route path="/404">
          <div>404</div>
        </Route>
        <Redirect to="/list" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
