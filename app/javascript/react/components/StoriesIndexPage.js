import React, { useState, useEffect } from "react";
import Story from "./Story";

const StoriesIndexPage = (props) => {
const [allStories, setAllStories] = useState([])

useEffect(() => {
  fetch("/api/v1/stories")
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setAllStories(body);
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
}, []);

  let listOfStories = allStories.map(storyObject => {
    return <Story story={storyObject} key={storyObject.id}/>
  })

  return (
    <div className="grid-container full">
      {listOfStories}
    </div>
  );

};

export default StoriesIndexPage