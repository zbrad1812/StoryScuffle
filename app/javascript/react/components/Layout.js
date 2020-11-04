import { useLayoutEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StoriesIndexPage from "./StoriesIndexPage"

const Layout = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={StoriesIndexPage} />
    </Switch>
  );
};

export default Layout