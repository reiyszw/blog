import React from "react"
import Header from "./haeder"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="wrapper">
      <Header location={location} title={title} />
      <main className="main">
        <div className="main__inner">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
