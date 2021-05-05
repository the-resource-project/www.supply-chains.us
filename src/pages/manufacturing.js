import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function Manufacturing() {

  return (
    <>
    <div className="exhibit-child manufacturing-div">
      <HomeButton />
      <h1 className="exhibit-page-title manufacturing-title" style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181157/manufacturing_a8k6h3.png')`
      }}>Manufacturing</h1>
      <h3 className="exhibit-page-text">Materials are made into stuff. That stuff is turned into more stuff, stitched together into what we think of as a product.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/exhibit"><BackButton /></Link>
      <Link to="/transport-3"><ForwardButton /></Link>
    </div>
    </>
  );
}
