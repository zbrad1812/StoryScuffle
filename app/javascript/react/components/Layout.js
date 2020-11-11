import { useLayoutEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StoriesIndexPage from "./StoriesIndexPage"
import StoriesShowPage from "./StoriesShowPage"
import StoriesNewPage from "./StoriesNewPage"
import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StoriesIndexPage} />
        <Route exact path="/stories" component={StoriesIndexPage} />
        <Route exact path="/stories/new" component={StoriesNewPage} />
        <Route exact path="/stories/:id" component={StoriesShowPage} />
    </Switch>
  </div>
  );
};

export default Layout