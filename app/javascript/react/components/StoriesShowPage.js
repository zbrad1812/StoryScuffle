import React, { useState, useEffect } from "react"

const StoriesShowPage = (props) => {
  let id = props.match.params.id
  let [story, setStory] = useState({})

  useEffect(() => {
    fetch(`/api/v1/stories/${id}`)
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
        setStory(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);


  return(
    <>
      <h2> {story.title} </h2>
      <h3> {story.description} </h3>
      <p> {story.content} </p>
    </>
  )
}

export default StoriesShowPage