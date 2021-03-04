import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RawImg from "../images/raw-material.png"
import TransImg from "../images/transport.png"

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
    <div className="timeline-wrapper">
      <div className="timeline-child raw-materials"><img src={RawImg} alt="raw material collage" /></div>
      <div className="timeline-child transport"><img src={TransImg} alt="transport collage" /></div>
      <div className="timeline-child smelting-refining">Smelting & Refining</div>
      <div className="timeline-child transport"><img src={TransImg} alt="transport collage" /></div>
      <div className="timeline-child manufacturing">Manufacturing</div>
      <div className="timeline-child transport"><img src={TransImg} alt="transport collage" /></div>
      <div className="timeline-child end-product">End Product</div>
      <div className="timeline-child disposal">Disposal</div>
      <div className="timeline-child recycling">Recycling</div>
      <div className="timeline-child waste">Waste</div>
    </div>
  </Layout>
)

// <ul>
//   {data.allTimelineCsv.nodes.length > 0 &&
//     data.allTimelineCsv.nodes.map(data => (
//       <li classNameName="timeline-child y">
//        <img src={data.Image} className="timeline-image"/>
//        {data.Step} – {data.Element}
//        {data.Description}
//         <a href="{element.Source}">Source</a>
//       </li>
//     ))
//   }
// </ul>

// export default ElementList
