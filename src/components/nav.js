import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
          <Link to={`about`}>About</Link>
          <Link to={`contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
