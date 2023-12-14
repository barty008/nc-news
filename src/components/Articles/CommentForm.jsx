import React, { useState } from "react"
import axiosInstance from "../utilities/axios"

const CommentForm = ({ articleId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!commentText.trim()) {
      alert("Please enter a comment before submitting.")
      return
    }

    try {
      setLoading(true)

      const response = await axiosInstance.post(
        `/articles/${articleId}/comments`,
        {
          username: "happyamy2016",
          body: commentText,
        }
      )

      // reset
      setCommentText("")
      onCommentSubmit(response.data.comment)

      alert("Comment submitted successfully!")
    } catch (error) {
      console.error("Error submitting comment:", error)
      alert("Failed to submit comment. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment..."
        required
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  )
}

export default CommentForm
