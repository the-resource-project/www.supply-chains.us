import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "../styles/exhibit.css"

export default () => (
  <StaticQuery
    query={graphql
      `
        query AllTransport {
          allTransportCsv {
            nodes {
              Element
              Image
              Description__50_100_Words_
              Media_Type
              Type
              Title
              Source
            }
          }
        }
      `
    }
  render={data => <Transport data={data} />}
  />
)

const Transport = ({ data }) => (
<>
  <div className="exhibit-child transport-div"
    style={{
    backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615180503/transport_lzkjbw.png')`
  }}>
  
    <Link to="/exhibit">Go back</Link>
    <h1 class="raw-title">Raw Materials</h1>
  </div>
</>
)
