import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import ShipAudio from "../components/sounds/ship.mp3"
import styles from "../styles/exhibit.css"

export default () => (
  <StaticQuery
    query={graphql
      `
        query AllTransport {
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
  render={data => <Transport data={data} />}
  />
)

const Transport = ({ data }) => {
  const [play, { stop, isPlaying }] = useSound(ShipAudio);

  return (
    <div className="exhibit-child transport-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
    }}>

      <Link to="/exhibit"><BackButton /></Link>
      <h1 class="exhibit-page-title raw-title">Transport & Shipping</h1>
      <div><button onClick={play}>Boop!</button></div>
      <ForwardButton />
    </div>
  )

}
