import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  // console.log('in indexpage')
  <Layout>
    <SEO title="Home" />
    <h1>Hi from index</h1>
    <Link to="/element-list/">Go to element list</Link> <br />
    <p>This is going to turn into a cool website.</p>
  </Layout>
)

export default IndexPage
