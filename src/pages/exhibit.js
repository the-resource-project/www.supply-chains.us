import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Guide from "../components/guide"
import RawMaterials from "./raw-materials"
import TransportOne from "./transport-1"
import Transport2 from "./transport-2"
import Transport3 from "./transport-3"
import SmeltRefine from "./smelt-refine"
import Manufacturing from "./manufacturing"
import EndProduct from "./end-product"
import Recycling from "./recycling"
import Waste from "./waste"

import styles from "../styles/exhibit.css"

const Exhibit = () => (
  <>
    <SEO title="Exhibit" />
    <div className="exhibit-wrapper">
      <div className="exhibit-child raw-div"
        style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
      }}><h1 className="exhibit-title-link raw-title"><Link to="/raw-materials">Raw Materials</Link></h1>
      </div>

      <div className="exhibit-child transport-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
      }}>
        <h1 className="exhibit-title-link transport-title"><Link to="/transport-1">Transport & Shipping</Link></h1>
      </div>

      <div className="exhibit-child snr-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181028/s_r_vgajgb.png')`
      }}>
        <h1 className="exhibit-title-link snr-title"><Link to="/smelt-refine">Smelting & Refining</Link></h1>
      </div>

      <div className="exhibit-child transport-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
      }}>
        <h1 className="exhibit-title-link transport-title"><Link to="/transport-2">Transport & Shipping</Link></h1>
      </div>

      <div className="exhibit-child manufacturing-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181157/manufacturing_a8k6h3.png')`
      }}>
        <h1 className="exhibit-title-link manufacturing-title"><Link to="/manufacturing">Manufacturing</Link></h1>
      </div>

      <div className="exhibit-child transport-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
      }}>
        <h1 className="exhibit-title-link transport-title"><Link to="/transport-3">Transport & Shipping</Link></h1>
      </div>

      <div className="exhibit-child end-product-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181175/end-product_uusyx7.png')`
      }}>
        <h1 className="exhibit-title-link end-product-title"><Link to="/end-product">End Product</Link></h1>
      </div>

      <div className="exhibit-child recycling-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180574/recycling_ryggx5.png')`
      }}>
        <h1 className="exhibit-title-link recycling-title"><Link to="/recycling">Recycling & Reuse</Link></h1>
      </div>

      <div className="exhibit-child waste-div"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180510/waste_bu4wpv.png')`
      }}>
        <h1 className="exhibit-title-link waste-title"><Link to="/waste">Waste</Link></h1>
      </div>
    </div>
  </>
)

export default Exhibit
