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
        <Fade top delay={1500} fraction={0.9} duration={2000}><h2 className="intro">50 elements are used in 98% of all electronic devices, from consumer cell phones to computers, to solar panels and electric cars. </h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">As we head towards an ever more digital future, we are becoming increasingly more dependent on extractive and global processes to support it.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">These processes are often precarious and dangerous for the people contained within them. But more often than not, they are simply invisible to the everyday consumer.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">For many of us, the supply chain feels both totally seamless and completely abstract.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">At the same time, while journalists and others have written about the working conditions of the supply chain, they sometimes forget that the people within it are not voiceless...</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">...And that the electronic supply chain doesn’t stop with the consumer at all, but continues on into recycling centers, with salvagers, and at e-waste sites around the world.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">These steps — these social lives — of the supply chain usually remain invisible to us.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">supply-chains.us is a living archive that traces these uneven geographies, extractive processes, and the forgotten labour that produces our digital life.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">Please note: this project will be updated daily, and is best viewed on a desktop computer.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro">To explore the supply chain, check back soon.<br/><br/>Time until next release: <Countdown /></h2></Fade>
      </div>
    </div>
    </>
  );
}

// export default Intro
