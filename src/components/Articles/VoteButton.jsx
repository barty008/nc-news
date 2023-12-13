import React, { useState } from "react"
import axiosInstance from "../utilities/axios"

const VoteButton = ({ articleId, votes, setVotes }) => {
  const [loading, setLoading] = useState(false)

  const handleVote = async (increment) => {
    try {
      setLoading(true)

      // optimistic
      setVotes((prevVotes) => prevVotes + (increment ? 1 : -1))

      await axiosInstance.patch(`/articles/${articleId}`, {
        inc_votes: increment ? 1 : -1,
      })

      setLoading(false)
    } catch (error) {
      console.error("Error voting:", error)

      setVotes((prevVotes) => prevVotes - (increment ? 1 : -1))

      alert("Failed to vote. Please try again later.")
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={() => handleVote(true)} disabled={loading}>
        Upvote
      </button>
      <span>{votes}</span>
      <button onClick={() => handleVote(false)} disabled={loading}>
        Downvote
      </button>
    </div>
  )
}

export default VoteButton
