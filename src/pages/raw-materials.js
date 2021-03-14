import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import MiningAudio from "../components/sounds/mining-30.mp3"
import BackButton from "../components/back-button"

import styles from "../styles/exhibit.css"

export default () => (
  <StaticQuery
    query={graphql
      `
        query AllRawMaterials {
          allTransportCsv {
            nodes {
              Element
              Image
              Description__50_100_Words_
              Media_Type
              Type
              Title
              Source
            }
          }
        }
      `
    }
  render={data => <RawMaterials data={data} />}
  />
)

const RawMaterials = ({ data }) => (
  <>
    <div className="exhibit-child raw-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
    }}>
      <Link to="/exhibit"><BackButton /></Link>
      <h1 class="raw-title">Raw Materials</h1>
    </div>
  </>
)
