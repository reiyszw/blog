import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import ThemeTogglerPlugin from "./../plugins/toggler"
import MyImage from "./../assets/me.jpg"

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to={`/`} className="header__link">
          <img className="header__avatar" src={MyImage} alt="" />
          <div className="header__me">{title}</div>
        </Link>
        <Nav />
        <ThemeTogglerPlugin />
      </div>
    </header>
  )
}

export default Header
