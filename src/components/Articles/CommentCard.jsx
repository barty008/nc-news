import React from "react"

const CommentCard = ({ comment }) => {
  const originalDate = comment.created_at
  const formattedDate = new Date(originalDate).toLocaleString()

  return (
    <div className="comment-card">
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>Date: {formattedDate}</p>
    </div>
  )
}

export default CommentCard
