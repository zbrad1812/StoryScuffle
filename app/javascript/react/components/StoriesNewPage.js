import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const StoriesNewPage = (props) => {
  const [storyId, setStoryId] = useState(0)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [formFields, setFormFields] = useState({
    id: -1,
    title: "",
    description: "",
    content: ""
  });

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let body = new FormData();

    body.append("title", formFields.title);
    body.append("description", formFields.description);
    body.append("content", formFields.content);

    fetch("/api/v1/stories", {
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
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.id) {
          setStoryId(body.id);
          setShouldRedirect(true)
        } else if (body.errors) {
          setErrors(body.errors);
        } else {
          console.error("ERROR: Unexpected server response");
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to={`/stories/${storyId}`} />;
  }

  return(
    <div>
    <h1> I still need to style this page... </h1>
    <form className="newStoryForm" onSubmit={handleSubmit}>
      <label className="new-story-title" htmlFor="title">
        Title:
        <input type="text" name="title" onChange={handleChange}/>
      </label>

      <label className="new-story-desc" htmlFor="description">
        Description:
        <input type="text" name="description" onChange={handleChange}/>
      </label>

      <textarea className="new-story-content" name="content" form="content" placeholder="Your story goes here..." onChange={handleChange}>
      </textarea>

      <div className="new-story-buttons">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
    </div>
  )
}

export default StoriesNewPage