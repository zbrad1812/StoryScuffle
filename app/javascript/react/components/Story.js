import React from "react";

const Story = (props) => {
if (props.story !== undefined) {
  return (
    <h1> {props.story.title} </h1>
  )
} else {
  return (
    <>
    </>
  );
}
};

export default Story