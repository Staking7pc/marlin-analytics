import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";
function routes(props) {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/marlin/analytics/:clusterId" component={App} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default routes;
