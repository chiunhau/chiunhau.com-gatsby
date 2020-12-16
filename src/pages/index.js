import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BlogEntry from "../components/blog-entry"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>Hi! I am Chiunhau</h1>
        <p style={{marginTop: '1rem', fontWeight: 'normal', fontSize: '1.1rem'}}>I design products and services that work in the present and aim for the future.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogEntry node={node}/>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___index}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`