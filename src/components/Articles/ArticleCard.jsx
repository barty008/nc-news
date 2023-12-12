import React from "react"
import { Link } from "react-router-dom"

const ArticleCard = ({ article }) => {
  // console.log("Received Article ID:", article)
  return (
    <div key={article.article_id} className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <p>Title: {article.title}</p>
        <p>Author: {article.author}</p>
        <img
          width={"100px"}
          src={article.article_img_url}
          alt="NC News Article Image"
        />
      </Link>
    </div>
  )
}

export default ArticleCard
