import React, { useState, useEffect } from "react"

const CommentForm = (props) => {
  let id = props.id
  let [formFields, setFormFields] = useState({
    commentContent: ""
  })

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let body = new FormData()

    body.append("commentContent", formFields.commentContent)
    body.append("story_id", id)

    fetch("/api/v1/comments", {
      method: "POST",
      body: body,
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        Accept: "image/jpeg",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then((response) => response.json())
    
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
      
      window.location.reload(false);
  };

  return (
    
    <form className="newCommentForm" onSubmit={handleSubmit}>
      <label className="newCommentLabel" htmlFor="commentContent">
        Leave a new comment!
        <input className="commentInputField" type="text" name="commentContent" onChange={handleChange}/>
      </label>

      <div className="new-story-button">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  
  )
}

export default CommentForm