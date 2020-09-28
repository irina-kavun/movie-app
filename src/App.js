import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NAVIGATION } from "./constants/navigation";

import "./assets/styles/global.styles.scss";
import Movies from "./containers/Movies";
import MovieDetails from "./containers/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={NAVIGATION.MOVIES.INDEX} component={Movies} />
          <Route path={NAVIGATION.MOVIES.ITEM} component={MovieDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
