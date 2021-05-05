import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Layout = props => {
  const {
    pageContext: { Name, Description, id },
  } = props
  console.log('in elements.jsx page')

  return (
    <>
      <SEO title="Element List" />
      <h5><Link to="/raw-materials/">Go back</Link></h5>
      <div className="element-indiv-wrapper">
        <div className="element-indiv-child"><h1 className="element-indiv-name">{ Name }</h1></div>
        <div className="element-indiv-child"><h3 className="element-indiv-description">{ Description }</h3></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
