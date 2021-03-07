import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Use = ({elementUse}) => (
  <div className="element-indiv">
    <p className="element-indiv-use">{elementUse}</p>
  </div>
)

Use.propTypes = {
  elementMap: PropTypes.string,
}

Use.defaultProps = {
  elementMap: ``,
}

export default Use
