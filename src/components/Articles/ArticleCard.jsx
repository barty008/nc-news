import React from "react"

const ArticleCard = ({ article }) => {
  return (
    <div key={article.title} className="article-card">
      <p>Title: {article.title}</p>
      <p>Author: {article.author}</p>
      <img
        width={"100px"}
        src={article.article_img_url}
        alt="NC News Article Image"
      />
    </div>
  )
}

export default ArticleCard
