import React from "react";
import { Link } from "react-router-dom";

const Story = (props) => {
  let id = props.story.id
  if (props.story !== undefined) {
    return (
        <div className="index-story-div">
          <Link to={`stories/${id}`} >
            <h3 className="index-story-title"> {props.story.title} </h3>
          </Link>
          <h4 className="index-story-desc"> {props.story.description} </h4>
        </div>
    )
  } else {
    return (
      <></>
    );
  }
};

export default Story