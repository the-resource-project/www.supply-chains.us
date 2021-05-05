import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"

import styles from "../styles/exhibit.css"

export default function Waste() {

  return (
    <>
    <div className="exhibit-child waste-div">
      <HomeButton />
      <h1 class="exhibit-page-title waste-title" style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180510/waste_bu4wpv.png')`
      }}>Waste</h1>
      <h3 className="exhibit-page-text">Finally, it all returns to the earth. But it is litter, and will lie there forever. How long will it last?</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/recycling"><BackButton /></Link>
    </div>
    </>
  );
}
