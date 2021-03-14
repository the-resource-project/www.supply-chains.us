import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BackButton from "../components/back-button"

import styles from "../styles/exhibit.css"

export default function Recycling() {

  return (
    <>
    <div className="exhibit-child recycling-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180574/recycling_ryggx5.png')`
    }}>
      <Link to="/exhibit"><BackButton /></Link>
      <h1 class="exhibit-page-title recycling-title">Recycling</h1>
    </div>
    </>
  );
}
