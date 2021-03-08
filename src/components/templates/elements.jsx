import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Layout = props => {
  const {
    pageContext: { Image, Location, Map, Name, Use },
  } = props
  console.log('in elements.jsx page')

  return (
    <>
      <Header />
      <SEO title="Element List" />
      <h5><Link to="/element-list/">Go back</Link></h5>
      <div className="element-indiv-wrapper">
        <h1 className="element-indiv-name">{ Name }</h1>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
