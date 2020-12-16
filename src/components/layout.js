import React from "react"
import {Link} from "gatsby"
import '../styles/index.scss'
import { Helmet } from "react-helmet"
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Chiunhau You</title>
        </Helmet>
      {children}
    </div>
  )
}