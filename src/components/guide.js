import React from "react"
import Fade from 'react-reveal/Fade'

import styles from "../styles/exhibit.css"

export default function Guide() {

  return (
    <>
    <div className="exhibit-child guide-div">
      <Fade top fraction={1} duration={2000}>
        <h3>Click on the part of the supply chain that you'd like to learn more about. You can always return to this screen by presing the "go back" button: __.</h3>
      </Fade>
      <br/><br/>
      <h3>All of our resources are interactive, and include a sound element. If you'd like to turn it off, click the sound icon that looks like this: __.</h3>
      <br/><br/>
      <h3>If you'd like to contribute to our growing set of resources, learn more about our project <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing"><i>here</i></a>. </h3>
    </div>
    </>
  );
}
