import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
      <Link to="/exhibit"><BackButton /></Link>

      <h1 class="exhibit-page-title end-product-title">End Product</h1>

      <ForwardButton />
    </div>
    </>
  );
}
