import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Post from "./Post";

import New from "./New";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  );
};

export default Routes;
