import React from "react";
import { Link } from "react-router-dom";

const Story = (props) => {
  let id = props.story.id
  if (props.story !== undefined) {
    return (
      <>
        <Link to={`stories/${id}`}>
          <h3> {props.story.title} </h3>
        </Link>
        <h4> {props.story.description} </h4>
      </>
    )
  } else {
    return (
      <>
      </>
    );
  }
};

export default Story