import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import Interest from "./../components/about/interest"
import UseAtWork from "./../components/about/use-at-work"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h2>Rei Yoshizawa</h2>
      <p>
        I’m Tania Rascia, a full stack software developer, technical writer, and
        former chef. I learn in public and write about everything I know.
      </p>
      <p>
        I aim to create a beautiful corner of the web free of ads, sponsored
        posts, newsletter pop-ups, affiliate links, and the rest of the annoying
        noise we're so accustomed to seeing on the internet these days.
      </p>
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
