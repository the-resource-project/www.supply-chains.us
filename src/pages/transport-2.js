import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import ShipAudio from "../components/sounds/ship.mp3"
import styles from "../styles/exhibit.css"

export default function TransportTwo() {
  const [play, { stop, isPlaying }] = useSound(ShipAudio);

  return (
    <div className="exhibit-child transport-div">
      <HomeButton />

      <h1 className="exhibit-page-title raw-title" style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
    }}>Transport & Shipping</h1>
      <h3 className="exhibit-page-text">Global logistics are what keep the world afloat. Make, ship, make, ship.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/smelt-refine"><BackButton /></Link>
      <Link to="/manufacturing"><ForwardButton /></Link>
    </div>
  )

}
