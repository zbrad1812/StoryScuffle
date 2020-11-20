import { useLayoutEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StoriesIndexPage from "./StoriesIndexPage"
import StoriesShowPage from "./StoriesShowPage"
import StoriesNewPage from "./StoriesNewPage"
import Navbar from "./Navbar"
import AboutPage from "./AboutPage"

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={StoriesIndexPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/stories" component={StoriesIndexPage}/>
        <Route exact path="/stories/new" component={StoriesNewPage}/>
        <Route exact path="/stories/:id" component={StoriesShowPage}/>
    </Switch>
  </div>
  );
};

export default Layout