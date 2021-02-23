import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Countdown from '../components/countdown.js'
import ElementList from './element-list.js'

const IndexPage = () => (
  // console.log('in indexpage')
  <Layout>
    <SEO title="Home" />
    < Countdown />
  </Layout>
)

export default IndexPage
