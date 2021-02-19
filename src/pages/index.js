import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ElementList from 'element-list'

export default () => (
  <StaticQuery
    query={graphql`
      query AllElements {
        allElementsCsv {
          nodes {
            ...ElementsCsvFragment
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Test website</h1>
    { ElementList }
    <p>This is going to turn into a cool website.</p>
    <Link to="/element-list/">Go to element list</Link> <br />
    <Link to="/timeline/">Go to timeline of element</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
