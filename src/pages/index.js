import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import SEO from "../components/seo"

import Intro from '../components/intro.js'

const IndexPage = () => (
  // console.log('in indexpage')
  <>
    <SEO title="Home" />
    < Intro />
  </>
)

export default IndexPage
