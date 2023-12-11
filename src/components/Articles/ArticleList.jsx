import React, { useState, useEffect } from "react"
import axios from "axios"

const ArticleList = () => {
  const [articles, setArticles] = useState([])
  const apiUrl = "https://backend-project-d9id.onrender.com/api/articles"

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl)
        setArticles(response.data.articles)
      } catch (error) {
        console.error("Error fetching articles:", error)
      }
    }

    fetchArticles()
  }, [apiUrl])

  return (
    <div className="article-list">
      <h2>All Articles</h2>
      {articles.map((article) => (
        <div key={article.title} className="article-card">
          <p>Title: {article.title}</p>
          <p>Author: {article.author}</p>
          <img
            width={"100px"}
            src={article.article_img_url}
            alt="article image"
          />
        </div>
      ))}
    </div>
  )
}

export default ArticleList
