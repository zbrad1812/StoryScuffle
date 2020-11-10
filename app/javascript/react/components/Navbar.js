import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return(
    <div class="navbar off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
      <div class="row column">
        <h5>Mike Mikerson</h5>
        <p>Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.</p>
      </div>
    </div>
  );
};

export default Navbar;