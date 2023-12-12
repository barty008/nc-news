import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../utilities/axios"
import CommentList from "./CommentList"

const SingleArticle = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)
  const [showComments, setShowComments] = useState(false)
  const [sortByVotes, setSortByVotes] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${articleId}`)
        setArticle(response.data.article)
        setLoading(false)
        setError(null)
      } catch (error) {
        console.error(`Error fetching article with ID ${articleId}:`, error)
        setError("Error fetching the article. Please try again later.")
        setLoading(false)
      }
    }

    fetchArticle()
  }, [articleId])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!article) {
    return <p key="loading">Article not found.</p>
  }

  const toggleComments = () => {
    setShowComments((prev) => !prev)
  }

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <img
        src={article.article_img_url}
        alt={`Image for ${article.title}`}
        width="50%"
      />
      <br></br>

      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <button onClick={() => setSortByVotes(!sortByVotes)}>
        {sortByVotes ? "Most recent comments" : "Sort by Highest Votes"}
      </button>

      {showComments && (
        <CommentList articleId={articleId} sortByVotes={sortByVotes} />
      )}
    </div>
  )
}

export default SingleArticle
