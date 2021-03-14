import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "../styles/exhibit.css"

export default function SmeltRefine() {

  return (
    <>
    <div className="exhibit-child snr-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181028/s_r_vgajgb.png')`
    }}>
      <Link to="/exhibit">Go back</Link>
      <h1 class="snr-title">Smelting & Refining</h1>
    </div>
    </>
  );
}
