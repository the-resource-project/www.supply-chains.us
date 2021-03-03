import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Locations = ({elementLocations}) => (
  <div className="element-indiv">
    <p className="element-indiv-location">Locations found: {elementLocations}</p>
  </div>
)

Locations.propTypes = {
  elementLocations: PropTypes.string,
}

Locations.defaultProps = {
  elementLocations: ``,
}

export default Locations
