import React, { useState } from "react"
import axiosInstance from "../utilities/axios"

const CommentCard = ({ comment, onDeleteComment }) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false)

  const isCurrentUserCommentAuthor = comment.author === "cooljmessy"

  const handleDeleteComment = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    )
    if (confirmDelete && !deleteButtonDisabled) {
      try {
        setDeleteButtonDisabled(true)
        await axiosInstance.delete(`/comments/${comment.comment_id}`)
        onDeleteComment(comment.comment_id)
        alert("Comment deleted successfully!")
      } catch (error) {
        console.error("Error deleting comment:", error)
        alert("Failed to delete comment. Please try again later.")
      } finally {
        setDeleteButtonDisabled(false)
      }
    }
  }

  return (
    <div className="comment-card">
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
      {isCurrentUserCommentAuthor && (
        <button onClick={handleDeleteComment} disabled={deleteButtonDisabled}>
          Delete Comment
        </button>
      )}
      <p>Votes: {comment.votes}</p>
      <p>Date: {new Date(comment.created_at).toLocaleString()}</p>
    </div>
  )
}

export default CommentCard
