import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import TransitionLink from "gatsby-plugin-transition-link"

import Countdown from './countdown'

import styles from '../styles/intro.css'

export default function Intro() {
  // constructor(props) {
  //   super(props);
  //   this.state = { show: false };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // console.log('inside intro');
  // const [faded, setFade] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log('inside useEffect');
  //     window.addEventListener("scroll", () =>
  //       setFade(window.pageYOffset > 200)
  //     );
  //   }
  // }, []);

  return (
    <>
    <div className="intro-wrapper">
      <div className="intro-child" >
        <Fade top delay={1500} fraction={0.9} duration={2000}><h2 className="intro">50 mineral elements are used in 98% of all electronic devices, from consumer cell phones to computers, from  solar panels to electric cars.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">As we head towards an ever more digital future, we are becoming increasingly dependent on extractive and global processes to support it.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">For many of us, the electronic supply chain is characterised by its seamlessness and abstraction. Think: ‘one-click ordering’ or ‘next day delivery’.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">Yet, these processes invariably depend on labour that is often tedious and slow, and carried out under precarious and hazardous conditions.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">At the same time, while many journalists have reported on supply chain working conditions, they sometimes end up reproducing the dominant narratives surrounding these processes.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">Such narratives center the consumer of a marketed end product, forgetting that the electronic supply chain doesn’t stop with the consumer at all...</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">...but continues on into recycling centers, with salvagers, and at e-waste sites around the world.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">They remind us that words like ‘end consumer’ and ‘end product’ are situated, and offer only a partial perspective of consumer technology life cycles.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">They beg the questions: end consumer of what and end product for whom?</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">supply-chains.us is a living archive that traces these uneven geographies, extractive processes, and forgotten labour involved in the production of our digital life.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">This project is updated daily, and is best viewed from a desktop computer. <br/><br/>Time until next release: <Countdown /><a href="https://pretalx.com/mozfest-2021/talk/AK3TFM/">Check back soon, and register for our discussion section here</a>.</h2></Fade>
      </div>
    </div>
    </>
  );
}

// export default Intro
