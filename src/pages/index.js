// src/pages/index.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PostList />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          featured_media {
            alt_text
            localFile {
              childImageSharp {
          		fluid(maxWidth: 1200) {
            		src
          		}
              }
            }
          }
          title
          excerpt
          modified(formatString: "dddd, MMMM DD, YYYY, H:mm")
          slug
          author {
            name
          }
          categories {
            name
          }
          date(formatString: "dddd, MMMM DD, YYYY, H:mm")
        }
      }
    }
  }
`