import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TimelineNode from "../components/timeline-components/timeline-node"

import styles from "../styles/timeline.css"

export default () => (
  <StaticQuery
    query={graphql
      `
      query allTimeline {
        allTimelineCsv {
          nodes {
            Description
            Element
            Image
            Source
            Type
            Step
          }
        }
      }
      `
    }
  render={data => <Timeline data={data} />}
  />
)

const Timeline = ({ data }) => (
  <Layout>
    <SEO title="Timeline" />
    <div class="timeline-wrapper">
      <ul>
        {data.allTimelineCsv.nodes.length > 0 &&
          data.allTimelineCsv.nodes.map(data => (
            <li class="timeline-child y">
             <img src={data.Image} class="timeline-image"/>
             {data.Step} – {data.Element}
             {data.Description}
              <a href="{element.Source}">Source</a>
            </li>
          ))
        }
      </ul>
    </div>
  </Layout>
)

// export default ElementList
