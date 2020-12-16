import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
export default function BlogEntry({node}) {
  return (
    <div key={node.id} className="blog-entry">
      <Link to={node.fields.slug} className="image">
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
      </Link>
      <div className="content" style={{paddingLeft: '1rem'}}>
        <h3 style={{marginTop: 0, marginBottom: '1rem'}}>{node.frontmatter.title}</h3>
        <p className="description">{node.frontmatter.description}</p>
        <Link to={node.fields.slug}>Read More</Link>
      </div>
      
    </div>

  )
}
