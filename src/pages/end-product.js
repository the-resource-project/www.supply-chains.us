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
    >
      <HomeButton />

      <h1 class="exhibit-page-title end-product-title" style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181175/end-product_uusyx7.png')`
      }}>End Product</h1>
      <h3 className="exhibit-page-text">We think it ends here, but it doesn't. The "end" has supply chains of its own, from software to the things that make our digital lives.</h3>
      <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">Help us to understand it all.</a><br/>
      <Link to="/transport-3"><BackButton /></Link>
      <Link to="/recycling"><ForwardButton /></Link>
    </div>
    </>
  );
}
