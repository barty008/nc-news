import React, { useEffect, useState } from "react"
import axiosInstance from "../utilities/axios"
import CommentCard from "./CommentCard"

const CommentList = ({ articleId, sortByVotes }) => {
  const [comments, setComments] = useState([])
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
      } catch (error) {
        console.error(
          `Error fetching comments for article ${articleId}:`,
          error
        )
      }
    }

    fetchComments()
  }, [articleId, sortByVotes])

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
