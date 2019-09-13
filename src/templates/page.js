// src/templates/Page.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
	<p style={{color: "#999"}}>Published on {data.wordpressPage.date}
	<br />Last edited on {data.wordpressPage.modified}
	</p>
	
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      	title
      	excerpt
 		modified(formatString: "dddd, DD MMMM, YYYY, hh:mm a")
      	content
    	date(formatString: "dddd, DD MMMM, YYYY, hh:mm a")
    }
  }
`