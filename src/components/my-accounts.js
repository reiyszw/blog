import React from "react"

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
          const icon = `fa fa-${account.icon} accounts__icon`
          return (
            <li key={account.icon} className="accounts__item">
              <i className={icon}></i> {account.title}:
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
