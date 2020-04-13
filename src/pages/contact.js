import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyAccounts from "../components/my-accounts"
import "../styles/index.scss"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="contact">
        <h1>Contact</h1>
        <p className="contact__paragraph">
          If you have any comments, question, common interest, etc, don't
          hesitate to contact me{" "}
          <a href="mailto:reiyoshizawa0418@gmail.com">
            reiyoshizawa0418@gmail.com
          </a>
          !
        </p>
        <p className="contact__paragraph">
          You can also contact me through those accounts.
        </p>
        <MyAccounts />
      </div>
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
