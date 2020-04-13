import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import Interest from "./../components/about/interest"
import UseAtWork from "./../components/about/use-at-work"
import MyImage from "./../assets/reiyoshizawa.jpg"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="me">
        <div className="me__infos">
          <h1>Rei Yoshizawa</h1>
          <p>
            I’m Rei, full time frontend developer. I currently live and work in
            Vancovuer, Canada{" "}
            <span role="img" aria-label="canada flag">
              🇨🇦
            </span>
          </p>
          <p>
            I am willing to write about what I have lerned so far and share some
            knowledge about mostly programming but I may sometimes post random
            things too.
          </p>
        </div>
        <img className="me__image" src={MyImage} alt="" />
      </div>
      <Interest />
      <UseAtWork />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
