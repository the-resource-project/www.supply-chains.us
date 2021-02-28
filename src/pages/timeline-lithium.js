import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/element-single.css"

export default () => (
  <StaticQuery
    query={graphql
      `
      query AllLithium {
        allLithiumCsv {
          nodes {
            Description
            Image
            Source
            Step
          }
        }
      }
      `
    }
  render={data => <TimelineLithium data={data} />}
  />
)

const TimelineLithium = ({ data }) => (
  <Layout>
    <SEO title="Lithium List" />
    <div class="timeline-wrapper">
      <ul>
        {data.allLithiumCsv.nodes.length > 0 &&
          data.allLithiumCsv.nodes.map(element => (
            <li class="child">
             <img src={element.Image} class="timeline-image"/>
             {element.Step} – {element.Description}
              <a href="{element.Source}">Source</a>

            </li>
          ))
        }
      </ul>
    </div>
  </Layout>
)

// export default ElementList
