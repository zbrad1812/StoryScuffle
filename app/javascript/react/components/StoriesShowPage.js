import React, { useState, useEffect } from "react"
import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm"

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
      <h2 className="show-title"> {story.title} </h2>
      <h3 className="show-desc"> {story.description} </h3>
      <p className="show-content"> {story.content} </p>
      <h2 className="comments-header">Comments:</h2>
      <CommentForm id={id}/>
      <CommentsList id={id}/>
    </>
  )
}

export default StoriesShowPage