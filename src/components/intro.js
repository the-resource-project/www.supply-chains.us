import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Fade from 'react-reveal/Fade'

import styles from '../styles/intro.css'

export default function Intro() {
  // constructor(props) {
  //   super(props);
  //   this.state = { show: false };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  console.log('inside intro');
  const [faded, setFade] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log('inside useEffect');
      window.addEventListener("scroll", () =>
        setFade(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <>
    <div className="intro-wrapper">
      <div className="intro-child" >
        <Fade top delay={1500} fraction={0.8} duration={2000}><h2 className="intro">50 elements are used in 98% of all electronic devices, from consumer devices to computers, from solar panels to electric cars. These elements are often extracted in precarious conditions or through forced labor, and in some of the world’s poorest nations (at least according to GDP).</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={0.9} duration={2000}><h2 className="intro">While many journalists have reported on these conditions, the rest of the supply chain often remains invisible to the average consumer. Modern design and project management has meant that most of these people and processes appear seemless, and are abstracted away.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={0.9} duration={2000}><h2 className="intro">At the same time, discussions about the human rights implications of the supply chain tend to remove agency from the people within it. Lives within the supply chain are varied – but this tends to get lost in homogenous descriptions about what they are.</h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={0.9} duration={2000}><h2 className="intro">This project plays two roles. The first is to introduce you to information you might not know about supply chains, and give you the facts. The second is to collect the narratives within it, and show you .
        </h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={0.9} duration={2000}><h2 className="intro">Ultimately, this project seeks to bridge the gap between the statistical and the emotional, between the factual and the emotive. It tries to remind you that behind every computer, every iPhone, every clock – are people – distributed across the world.
        </h2></Fade>
      </div>
      <div className="intro-child">
        <Fade top fraction={1} duration={2000}><h2 className="intro"><Link to="/timeline/">Explore the supply chain</Link></h2></Fade>
      </div>
    </div>
    </>
  );
}

// export default Intro
