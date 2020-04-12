import React from "react"

const MyAccounts = () => {
  const accounts = [
    {
      title: "Email",
      name: "reiyoshizawa0418@gmail.com",
      href: "mailto:reiyoshizawa0418@gmail.com",
    },
    {
      title: "GitHub",
      name: "cevicher0",
      href: "https://github.com/cevicher0",
    },
    {
      title: "Twitter",
      name: "cevicher0",
      href: "https://twitter.com/taniarascia",
    },
    {
      title: "Instagram",
      name: "cevicher0",
      href: "https://www.instagram.com/cevicher0/",
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
