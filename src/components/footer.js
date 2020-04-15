import React from "react"

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
            const icon = `fa fa-${logo.icon} social-media-logos__icon`
            return (
              <li key={logo.icon} className="social-media-logos__item">
                <a href={logo.href} className="social-media-logos__link">
                  <i className={icon}></i>
                </a>
              </li>
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
