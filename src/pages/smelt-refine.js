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
    <div className="exhibit-child snr-div">
      <HomeButton />

      <h1 className="exhibit-page-title snr-title" style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181028/s_r_vgajgb.png')`
      }}>Smelting & Refining</h1>
      <h3 className="exhibit-page-text">Materials need to be purified. They have to be turned into something we can use.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>

      <Link to="/transport-1"><BackButton /></Link>
      <Link to="/transport-2"><ForwardButton /></Link>
    </div>
    </>
  );
}
