import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  )
}

export default Navigation
