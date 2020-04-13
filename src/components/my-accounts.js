import React from "react"

const MyAccounts = () => {
  const accounts = [
    {
      title: "GitHub",
      name: "cevicher0",
      href: "https://github.com/cevicher0",
    },
    {
      title: "Twitter",
      name: "cevicher0",
      href: "https://twitter.com/cevicher0",
    },
    {
      title: "Instagram",
      name: "cevicher0",
      href: "https://www.instagram.com/cevicher0/",
    },
    {
      title: "LinkedIn",
      name: "Rei Yoshizawa",
      href: "https://www.linkedin.com/in/reiyoshizawa/",
    },
  ]
  return (
    <div>
      <ul>
        {accounts.map((account, index) => {
          return (
            <li key={index}>
              {account.title}: <a href={account.href}>{account.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyAccounts
