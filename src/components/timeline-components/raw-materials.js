import React from "react"

import MiningAudio from "../sounds/mining-30.mp3"
import RawImg from "../../images/raw-material.png"

import styles from "../../styles/timeline.css"

export default function RawMaterials() {

  return (
    <>
    <div className="timeline-child raw-materials-div"
      style={{
      backgroundImage: `url("{RawImg}")`
      }}>
      <img src={RawImg} alt="raw materials collage" />
    </div>
    </>
  );
}
