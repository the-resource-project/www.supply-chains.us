import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function Waste() {

  return (
    <>
    <div className="exhibit-child waste-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180510/waste_bu4wpv.png')`
    }}>
      <Link to="/exhibit"><BackButton /></Link>
      <ForwardButton />
      <h1 class="exhibit-page-title waste-title">Waste</h1>
    </div>
    </>
  );
}
