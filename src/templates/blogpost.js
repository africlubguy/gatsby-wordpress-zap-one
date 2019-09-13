// src/templates/blogpost.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blogpost.css"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h1>{data.wordpressPost.title}</h1>
	
    <p>
      Written by <span className='author'>{data.wordpressPost.author.name}</span> on <span className='written'>{data.wordpressPost.date}</span> 
	  <br />Last edited on <span className='last-edited'>{data.wordpressPost.modified}</span>
	  <br />Category: {data.wordpressPost.categories.map(category => (   
      		<span className="category_item">{category.name}</span> 
                    ))}
    </p>
    <img
      src={data.wordpressPost.featured_media.localFile.childImageSharp.fluid.src}
      alt={data.wordpressPost.featured_media.alt_text}
      style={{ maxHeight: 450 }}
    />
    <div
      style={{ marginTop: 10 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
	  categories{
		name
	  }
      content
      excerpt
      featured_media {
        alt_text
        localFile {
          childImageSharp {
            resolutions {
              width
              height
              src
            }
            resize(height: 100) {
              src
            }
            fluid(maxWidth: 1200) {
			  sizes
              src
            }
          }
        }
      }
      date(formatString: "MMMM DD, YYYY, hh:mm a")
	  modified(formatString: "MMMM DD, YYYY, h:mm a")
      author {
        name
      }
    }
  }
`