import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="blog-title">
          <Link to={`/`}>{title}</Link>
        </h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header
