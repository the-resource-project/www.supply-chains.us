import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from '../components/intro.js'

const IndexPage = () => (
  // console.log('in indexpage')
  <Layout>
    <SEO title="Home" />
    < Intro />
  </Layout>
)

export default IndexPage
