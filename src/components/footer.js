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
    © {new Date().getFullYear()}, ALS & MM. Check our image sources <a href="https://docs.google.com/document/d/1cX0GQGtkAw0wxWU7Rz__dIEi4Z6ylaQoAFhDk3ogt7A/edit?usp=sharing">here</a>.
  </footer>
)

export default Footer
