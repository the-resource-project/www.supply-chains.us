import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import SEO from "../seo"

import Name from "../element-components/name"
import Photo from "../element-components/photo"
import Locations from "../element-components/locations"
import Map from "../element-components/map"
import Use from "../element-components/Use"

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
        <Photo data={Image} />
        <Name data={Name} />
        <Locations data={Location} />
        <Map data={Map} />
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
