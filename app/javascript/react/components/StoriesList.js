import React from "react";
import Story from "./Story"

const StoriesList = (props) => {
  return (
    <Story story={props.stories[0]}/>
  );
};

export default StoriesList