import React, { useState, useEffect } from "react"
import axios from "../utilities/axios"
import ArticleCard from "./ArticleCard"

const ArticleList = () => {
  const axiosInstance = axios
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get("/articles")
        setArticles(response.data.articles)
      } catch (error) {
        console.error("Error fetching articles:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <div className="article-list">
      <h2>All Articles</h2>
      {loading ? (
        <p>Loading articles!...</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))
      )}
    </div>
  )
}

export default ArticleList
