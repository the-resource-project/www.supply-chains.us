import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Intro = () => (
  <h2>50 elements are used in 98% of all electronic devices, from consumer devices to computers, from solar panels to electric cars.</h2>
  <h2>These elements are often extracted in precarious conditions or through forced labor, and in some of the world’s poorest nations (at least according to GDP).</h2>
  <h2>While many journalists have reported on these conditions, the rest of the supply chain often remains invisible to the average consumer.</h2>
  <h2>This project tries to bridge that gap.</h2>
  <h2><Link to="/element-list/">Go to element list</Link></h2>
)

export default Intro
