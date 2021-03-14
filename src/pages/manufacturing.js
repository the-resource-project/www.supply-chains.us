import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function Manufacturing() {

  return (
    <>
    <div className="exhibit-child manufacturing-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181157/manufacturing_a8k6h3.png')`
    }}>
      <HomeButton />
      <h1 className="exhibit-page-title manufacturing-title">Manufacturing</h1>
      <Link to="/exhibit"><BackButton /></Link>
      <Link to="/transport-3"><ForwardButton /></Link>
    </div>
    </>
  );
}
