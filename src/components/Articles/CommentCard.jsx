import React from "react"

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentCard
