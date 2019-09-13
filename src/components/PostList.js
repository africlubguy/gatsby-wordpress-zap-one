// src/components/PostList.js
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import "./PostList.css"

const PostList = () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressPost(sort: {order: DESC, fields: date}) {
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
		  categories {
            name
          }
          excerpt
          modified(formatString: "dddd, MMM. DD, YYYY, h:mm A")
          slug
          author {
            name
          }          
          date(formatString: "dddd, MMM. DD, YYYY, h:mm A")
        }
      }
    }
  }
    `}
    render={data => (
      <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
		  <div className='parent'>
            <img className='child'
              src={post.node.featured_media.localFile.childImageSharp.fluid.src}
              alt={post.node.featured_media.alt_text}
            />
            <div className= 'child'>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              <p style={{ margin: '10px 0 0', color: "#999", fontSize: '15px',fontFamily: 'arial', lineHeight: '120%', fontWeight: 'bold'}}>
                 WRITTEN by <span style={{ color: '#c33' }}>{post.node.author.name}</span> ON <span style={{ color: "#c33" }}>{post.node.date}.</span>
				 <br />FILED in category: {post.node.categories.map(category => (   
      			 							<span className="category_item" key="{category.name}cat" style={{ color: '#000555' }}>{category.name}</span> 
      			 ))}
				 <br />LAST EDITED on <span style={{ color:'#cc0' }}>{post.node.modified}.</span>
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
	      </div>
          </Link>
        </li>
      ))}
    </ul>
    )}
  />
)

export default PostList