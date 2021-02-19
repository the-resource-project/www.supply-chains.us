import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <StaticQuery
    query={graphql`
      query AllElements {
        elementsCsv {
          nodes {
            ...ElementsCsvFragment
          }
        }
      }
    `}
    render={data => <ElementPage data={data} />}
  />
)

const ElementList = ({ data }) => (
  <Layout>
    <SEO title="Element List" />
    <ul>
      {data.allElementsCsv.nodes.length > 0 &&
        data.allElementsCsv.nodes.map(element => (
          <li>
            {element.Name}
          </li>
        ))}
    </ul>
  </Layout>
)

export default ElementList
