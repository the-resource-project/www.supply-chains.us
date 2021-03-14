import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import MiningAudio from "../components/sounds/mining-30.mp3"
import HomeButton from "../components/home-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function RawMaterials() {
  const [play, { stop, isPlaying }] = useSound(MiningAudio);

  return (
    <div className="exhibit-child raw-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
    }}>
      <HomeButton />
      <h1 className="exhibit-page-title raw-title">Raw Materials</h1>
      <Link to="/transport-1"><ForwardButton /></Link>
    </div>
  )
}
