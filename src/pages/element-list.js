import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/list.css"

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
    <div class="element-list-div-wrapper">
      <div class="element-list-subwrapper">
        <ul class="element-list-ul">
          {data.allElementsCsv.nodes.length > 0 &&
            data.allElementsCsv.nodes.map(element => (
              <li class="element-list-li">
                <h2><Link to={`/${element.Name}`}>{element.Name}</Link></h2>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </Layout>
)
