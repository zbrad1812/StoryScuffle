import React, { useEffect, useState } from "react"
import Comment from "./Comment"
const CommentsList = (props) => {
  let id = props.id
  let [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`/api/v1/comments/${id}`)
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
        setComments(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let listOfComments = comments.map(commentObject => {
    return (<Comment comment={commentObject}/>)
  })

  return (
    <>
      {listOfComments}
    </>
  )
}

export default CommentsList