import React from "react"

import MiningAudio from "../sounds/mining-30.mp3"
import RawImg from "../../images/raw-material.png"
import Countdown from "../countdown.js"

import styles from "../../styles/exhibit.css"

export default function RawMaterials() {

  return (
    <>
    <div className="timeline-child raw-materials-div"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
    }}>
    Time until next release: <Countdown /><a href="https://pretalx.com/mozfest-2021/talk/AK3TFM/">Check back soon, and register for our discussion section here</a>
    </div>
    </>
  );
}
