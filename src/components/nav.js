import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={`/about`} className="nav__link" activeClassName="nav__active">
        About
      </Link>
      <Link to={`/blog`} className="nav__link" activeClassName="nav__active">
        Articles
      </Link>
      <Link to={`/contact`} className="nav__link" activeClassName="nav__active">
        Contact
      </Link>
    </nav>
  )
}

export default Nav
