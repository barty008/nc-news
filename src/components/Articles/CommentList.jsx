import React, { useEffect, useState } from "react"
import axiosInstance from "../utilities/axios"
import CommentCard from "./CommentCard"

const CommentList = ({ articleId, sortByVotes }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  //   console.log(comments)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get(
          `/articles/${articleId}/comments`
        )
        const sortedComments = sortByVotes
          ? response.data.comments.sort((a, b) => b.votes - a.votes)
          : response.data.comments

        setComments(sortedComments)
        setLoading(false)
        setError(null)
      } catch (error) {
        console.error(
          `Error fetching comments for article ${articleId}:`,
          error
        )
        setError("Error fetching comments. Please try again later.")
        setLoading(false)
      }
    }

    fetchComments()
  }, [articleId, sortByVotes])

  if (loading) {
    return <p>Loading comments...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments for this article.</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </div>
  )
}

export default CommentList
