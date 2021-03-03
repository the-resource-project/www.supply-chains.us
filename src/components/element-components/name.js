import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Name = ({elementName}) => (
  <div className="element-indiv">
    <h1 className="element-indiv-name">
      { elementName }
      test name
    </h1>
  </div>
)

Name.propTypes = {
  elementName: PropTypes.string,
}

Name.defaultProps = {
  elementName: ``,
}

export default Name
