/**
 *
 *
 * Footer
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "../styles/layout.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with Gatsby. Creative Commons by Anne Lee Steele and Miriam Matthieson.
  </footer>
)

export default Footer

// <h5><Link to="/element-list/">Go back</Link></h5>
// © {new Date().getFullYear()}, Built with
// {` `}
// <a href="https://www.gatsbyjs.org">Gatsby</a>.
