import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function Recycling() {

  return (
    <>
    <div className="exhibit-child recycling-div">
      <HomeButton />

      <h1 class="exhibit-page-title recycling-title" style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180574/recycling_ryggx5.png')`
      }}>Recycling</h1>
      <h3 className="exhibit-page-text">The materials we use are used again, and again, and again.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/end-product"><BackButton /></Link>
      <Link to="/waste"><ForwardButton /></Link>

    </div>
    </>
  );
}
