import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import HomeButton from "../components/home-button"
import BackButton from "../components/back-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/exhibit.css"

export default function EndProduct() {

  return (
    <>
    <div className="exhibit-child end-product-div"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181175/end-product_uusyx7.png')`
    }}>
      <HomeButton />

      <h1 class="exhibit-page-title end-product-title">End Product</h1>
      <Link to="/transport-3"><BackButton /></Link>
      <Link to="/recycling"><ForwardButton /></Link>
    </div>
    </>
  );
}
