import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"

import styles from "../styles/exhibit.css"

export default function Waste() {

  return (
    <>
    <div className="exhibit-child waste-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180510/waste_bu4wpv.png')`
    }}>
      <HomeButton />
      
      <h1 class="exhibit-page-title waste-title">Waste</h1>
      <Link to="/recycling"><BackButton /></Link>
    </div>
    </>
  );
}
