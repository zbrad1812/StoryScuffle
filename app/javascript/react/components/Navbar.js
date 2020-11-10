import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return(
    <div className={props.classes}>
      <div className="grid-x grid-padding-x">
        <Link className="cell" to="/stories">
          Check Out The Stories
        </Link>
        <Link className="cell" to="/stories/new">
          Submit Your Own Story
        </Link>
        <Link className="cell" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;