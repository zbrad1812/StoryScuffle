import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return(
    <div className="side-bar navbar off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        <h5 className="new-story-link-h5"><a className="new-story-link" href="/stories/new">Submit Your Own Story!</a></h5>
      </div>
    </div>
  );
};

export default Navbar;