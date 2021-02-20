import React from "react"

import Header from "../header"
import Footer from "../footer"
import "../layout.css"

const Layout = props => {
  const {
    pageContext: { Image, Location, Map, Name, Use },
  } = props

  console.log('in elements.jsx page')

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <img src={Image} />
          <h1>
            {Name}
          </h1>
          <p>Source: {Location}</p>
          <p>{Use}</p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
