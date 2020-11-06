import React, { useState, useEffect } from "react";
import StoriesList from "./StoriesList"

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


  return (
    <StoriesList stories={allStories}/>
  );

};

export default StoriesIndexPage