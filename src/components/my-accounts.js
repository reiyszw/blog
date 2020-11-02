import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MyAccounts = () => {
  const accounts = [
    {
      icon: "github",
      title: "GitHub",
      name: "reiyszw",
      href: "https://github.com/reiyszw",
    },
    {
      icon: "twitter",
      title: "Twitter",
      name: "reiyszw",
      href: "https://twitter.com/reiyszw",
    },
    {
      icon: "instagram",
      title: "Instagram",
      name: "reiyszw",
      href: "https://www.instagram.com/reiyszw/",
    },
    {
      icon: "linkedin",
      title: "LinkedIn",
      name: "Rei Yoshizawa",
      href: "https://www.linkedin.com/in/reiyoshizawa/",
    },
  ]
  return (
    <div>
      <ul className="accounts">
        {accounts.map(account => {
          return (
            <li key={account.icon} className="accounts__item">
              <FontAwesomeIcon icon={["fab", account.icon]} />
              {account.title}:
              <a href={account.href} target="_blank" className="accounts__link">
                {account.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyAccounts
