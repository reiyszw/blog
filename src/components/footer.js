import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://reiyoshizawa.com/">Rei Yoshi</a>
      </div>
    </footer>
  )
}

export default Footer
