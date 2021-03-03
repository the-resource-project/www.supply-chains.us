import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

import styles from "../../styles/element.css"

const Photo = ({elementPhoto}) => (
  <div className="element-indiv">
    <img src="${ elementPhoto }" className="element-indiv-photo"/>
  </div>
)

Photo.propTypes = {
  elementPhoto: PropTypes.string,
}

Photo.defaultProps = {
  elementPhoto: ``,
}

export default Photo
