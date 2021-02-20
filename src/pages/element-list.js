import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <StaticQuery
    query={graphql
      `
        query AllElements {
          allElementsCsv {
            nodes {
              Image
              Location
              Map
              Name
              Use
            }
          }
        }
      `
    }
  render={data => <ElementList data={data} />}
  />
)

const ElementList = ({ data }) => (
  <Layout>
    <SEO title="Element List" />
    <ul>
      {data.allElementsCsv.nodes.length > 0 &&
        data.allElementsCsv.nodes.map(element => (
          <li>
            <Link to={`/${element.Name}`}>{element.Name}</Link>
          </li>
        ))}
    </ul>
  </Layout>
)

// export default ElementList
