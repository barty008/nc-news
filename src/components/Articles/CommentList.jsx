import React, { useEffect, useState } from "react"
import axiosInstance from "../utilities/axios"
import CommentCard from "./CommentCard"

const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get(
          `/articles/${articleId}/comments`
        )
        setComments(response.data.comments)
      } catch (error) {
        console.error(
          `Error fetching comments for article ${articleId}:`,
          error
        )
      }
    }

    fetchComments()
  }, [articleId])

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
