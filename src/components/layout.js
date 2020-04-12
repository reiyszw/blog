import React from "react"
import Header from "./haeder"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header location={location} title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
