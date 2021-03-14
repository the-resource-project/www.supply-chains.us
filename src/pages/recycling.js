import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "../styles/exhibit.css"

export default function Recycling() {

  return (
    <>
    <div className="exhibit-child recycling-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180574/recycling_ryggx5.png')`
    }}>
      <Link to="/exhibit">Go back</Link>
      <h1 class="recycling-title">Recycling</h1>
    </div>
    </>
  );
}
