import React, { useEffect, useState, Redirect } from "react"

const RandomPage = (props) => {
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

  if (allStories[0]) {
    let allStoryIds = allStories.map(storyObject => {
      return storyObject.id
    })
    const randomId = allStoryIds[Math.floor(Math.random() * allStoryIds.length)];
    if(randomId){
      window.location.replace(`/stories/${randomId}`);
    }
  }


  return(
    <h4 className="about-paragraph"> this is da random page loader</h4>
  )
}

export default RandomPage
