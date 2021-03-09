import React from "react"

import SEO from "../components/seo"

import Guide from "../components/timeline-components/guide"
import RawMaterials from "../components/timeline-components/raw-materials"
import Transport from "../components/timeline-components/transport"
import SmeltRefine from "../components/timeline-components/smelt-refine"
import Manufacturing from "../components/timeline-components/manufacturing"
import EndProduct from "../components/timeline-components/end-product"
import Recycling from "../components/timeline-components/recycling"
import Waste from "../components/timeline-components/waste"

import styles from "../styles/exhibit.css"

const Timeline = () => (
  <>
    <SEO title="Exhibit" />
    <div className="exhibit-wrapper">
      <Guide />
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
  </>
)

export default Timeline
