import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyAccounts from "../components/my-accounts"
import "../styles/main.scss"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h2>Contact</h2>
      <p>
        If you have any comments, question, common interest, etc, don't hesitate
        to contact me{" "}
        <a href="mailto:reiyoshizawa0418@gmail.com">
          eiyoshizawa0418@gmail.com
        </a>
        !
      </p>
      <h3>My Social Media Accounts</h3>
      <MyAccounts />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
