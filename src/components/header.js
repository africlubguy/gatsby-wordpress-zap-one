// src/components/header.js
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
    	  description
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Menu Main" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: `#000555`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <div style={{ display: `flex`, flexDirection: `column` }}>
          	<h1 style={{ margin: 0 }}>
            	<Link
              	to="/"
              	style={{
                	color: `white`,
                	textDecoration: `none`,
              	}}
               	>
              	{data.wordpressSiteMetadata.name}
            	</Link>
          	</h1>
		  	<h4 style={{ color: `#80ffff`, marginTop: `10px` }}>{data.wordpressSiteMetadata.description}</h4>
		  </div>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link
                  to={`/${item.object_slug}`}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: `sans-serif`,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )}
  />
)

export default Header