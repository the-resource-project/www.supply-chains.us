import React from "react"

import WasteImg from "../../images/waste.png"

import styles from "../../styles/timeline.css"

export default function Waste() {

  return (
    <>
    <div className="timeline-child waste-div">
      <img src={WasteImg} alt="waste collage" />
    </div>
    </>
  );
}
