import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function Recycling() {

  return (
    <>
    <div className="exhibit-child recycling-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180574/recycling_ryggx5.png')`
    }}>
      <HomeButton />
      
      <h1 class="exhibit-page-title recycling-title">Recycling</h1>
      <Link to="/end-product"><BackButton /></Link>
      <Link to="/waste"><ForwardButton /></Link>

    </div>
    </>
  );
}
