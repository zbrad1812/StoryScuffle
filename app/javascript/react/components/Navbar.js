import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return(
    <div class="side-bar navbar off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
      <div class="row column">
        <br></br><br></br><br></br>
        <h5><a href="/stories/new">Submit your own story! Sorry about this text color im going to change that soon!</a></h5>
      </div>
    </div>
  );
};

export default Navbar;