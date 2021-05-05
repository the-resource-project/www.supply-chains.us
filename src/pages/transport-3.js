import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import ShipAudio from "../components/sounds/ship.mp3"
import styles from "../styles/exhibit.css"

export default function TransportThree () {
  const [play, { stop, isPlaying }] = useSound(ShipAudio);

  return (
    <div className="exhibit-child transport-div">

      <HomeButton />
      <h1 class="exhibit-page-title raw-title" style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
    }}>Transport & Shipping</h1>
      <h3 className="exhibit-page-text">When things move from place to place, they add to a chain of processes that spans the globe.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/manufacturing"><BackButton /></Link>
      <Link to="/end-product"><ForwardButton /></Link>
    </div>
  )

}
