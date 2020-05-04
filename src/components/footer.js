import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const socialMediaLogos = [
  {
    icon: "github",
    href: "https://github.com/cevicher0",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/cevicher0",
  },
  {
    icon: "instagram",
    href: "https://www.instagram.com/cevicher0/",
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/reiyoshizawa/",
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <ul className="social-media-logos">
          {socialMediaLogos.map(logo => {
            return (
              <a
                href={logo.href}
                className="social-media-logos__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.icon}
              >
                <FontAwesomeIcon icon={["fab", logo.icon]} />
              </a>
            )
          })}
        </ul>
        <div className="footer__copyright">
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://reiyoshizawa.com/">Rei Yoshizawa</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
