import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import MiningAudio from "../components/sounds/mining-30.mp3"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

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

const RawMaterials = ({ data }) => {
  const [play, { stop, isPlaying }] = useSound(MiningAudio);

  return (
    <div className="exhibit-child raw-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
    }}>
      <Link to="/exhibit"><BackButton /></Link>

      <h1 className="exhibit-page-title raw-title">Raw Materials</h1>
      <div><button onClick={play}>Boop!</button></div>
      <div><h3>Raw materials are the source of</h3></div>

      <Link to="/transport"><ForwardButton /></Link>
    </div>
  )
}
