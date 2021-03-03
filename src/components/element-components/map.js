import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Map = ({elementMap}) => (
  <div className="element-indiv">
    <img src={ elementMap } className="element-indiv-map"/>
  </div>
)

Map.propTypes = {
  elementMap: PropTypes.string,
}

Map.defaultProps = {
  elementMap: ``,
}

export default Map
