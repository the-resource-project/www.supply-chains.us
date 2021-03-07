import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RawMaterials from "../components/timeline-components/raw-materials"
import Transport from "../components/timeline-components/transport"
import SmeltRefine from "../components/timeline-components/smelt-refine"
import Manufacturing from "../components/timeline-components/manufacturing"
import EndProduct from "../components/timeline-components/end-product"
import Recycling from "../components/timeline-components/recycling"
import Waste from "../components/timeline-components/waste"

import styles from "../styles/timeline.css"

const Timeline = () => (
  <Layout>
    <SEO title="Timeline" />
    <div className="timeline-wrapper">
      <RawMaterials />
      <Transport />
      <SmeltRefine />
      <Transport />
      <Manufacturing />
      <Transport />
      <EndProduct />
      <Recycling />
      <Waste />
    </div>
  </Layout>
)

export default Timeline
