/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/layout.css"

const Layout = ({ location, children }) => {

  console.log('in layout')
  return (
    <>
    <Header />
      <div className="body">
        <main>
        <TransitionProvider location={location}>
        <TransitionViews>
        {children}
        </TransitionViews>
        </TransitionProvider>
        </main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
