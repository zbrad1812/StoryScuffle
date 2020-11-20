import React, { useEffect, useState } from "react"

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

  debugger

  return(
    <h4 className="about-paragraph"> this is da random page loader</h4>
  )
}

export default RandomPage
