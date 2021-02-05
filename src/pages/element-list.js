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

const ElementPage = ({ data }) => (
  <Layout>
    <SEO title="Element List" />
    <ul>
      {data.allElementsCsv.nodes.length > 0 &&
        data.allElementsCsv.nodes.map(person => (
          <li>
            <Link to={`${person.FirstName}-${person.LastName}`}>
              {person.FirstName}
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
)
