import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import SmeltAudio from "../components/sounds/smelter-15.mp3"
import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function SmeltRefine() {
  const [play, { stop, isPlaying }] = useSound(SmeltAudio);

  return (
    <>
    <div className="exhibit-child snr-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181028/s_r_vgajgb.png')`
    }}>
      <HomeButton />

      <h1 className="exhibit-page-title snr-title">Smelting & Refining</h1>

      <Link to="/transport-1"><BackButton /></Link>
      <Link to="/transport-2"><ForwardButton /></Link>
    </div>
    </>
  );
}
