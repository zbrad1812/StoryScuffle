import React from "react"

const Comment = (props) => {
  let commentContent = props.comment?.commentContent

  return(
    <h4> {commentContent} </h4>
  )
}

export default Comment