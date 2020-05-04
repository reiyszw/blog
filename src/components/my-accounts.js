import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MyAccounts = () => {
  const accounts = [
    {
      icon: "github",
      title: "GitHub",
      name: "cevicher0",
      href: "https://github.com/cevicher0",
    },
    {
      icon: "twitter",
      title: "Twitter",
      name: "cevicher0",
      href: "https://twitter.com/cevicher0",
    },
    {
      icon: "instagram",
      title: "Instagram",
      name: "cevicher0",
      href: "https://www.instagram.com/cevicher0/",
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
              <a href={account.href} className="accounts__link">
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
