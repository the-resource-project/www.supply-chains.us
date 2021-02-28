import React from "react"
import { Link } from "gatsby"

import Header from "../header"
import Footer from "../footer"

import styles from "../../styles/element-single.css"

const Layout = props => {
  const {
    pageContext: { Image, Location, Map, Name, Use },
  } = props

  console.log('in elements.jsx page')

  return (
    <>
      <Header />
      <h5><Link to="/element-list/">Go back</Link></h5>
      <div class="element-list">
        <main>
          <img src={Image} />
          <h1>
            {Name}
          </h1>
          <p>Source: {Location}</p>
          <img src={Map} />
          <p>{Use}</p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
