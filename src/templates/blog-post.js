import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-post">
        <Link to="/">⬅ Back</Link>
        <hr/>
        <div className="article">
          <h1 className="title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`