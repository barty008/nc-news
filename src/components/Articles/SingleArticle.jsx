import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../utilities/axios"

const SingleArticle = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${articleId}`)
        setArticle(response.data.article)
      } catch (error) {
        console.error(`Error fetching article with ID ${articleId}:`, error)
      }
    }

    fetchArticle()
  }, [articleId])

  if (!article) {
    return <p key="loading">Loading...</p>
  }

  return (
    <div key={articleId} className="single-article">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <img
        src={article.article_img_url}
        alt={`Image for ${article.title}`}
        width="50%"
      />
    </div>
  )
}

export default SingleArticle
