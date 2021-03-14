import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "../styles/exhibit.css"

export default function Waste() {

  return (
    <>
    <div className="exhibit-child waste-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180510/waste_bu4wpv.png')`
    }}>
      <Link to="/exhibit">Go back</Link>
      <h1 class="waste-title">Waste</h1>
    </div>
    </>
  );
}
