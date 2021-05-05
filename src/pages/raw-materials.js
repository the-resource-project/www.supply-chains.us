import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import useSound from 'use-sound'

import Audio from "../components/audio"
import MiningAudio from "../components/sounds/mining-30.mp3"
import HomeButton from "../components/home-button"
import ForwardButton from "../components/forward-button"

import styles from "../styles/list.css"

export default () => (
  <StaticQuery
    query={graphql
      `
        query AllElements {
          allElementsCsv {
            nodes {
              Name
              Description
              id
            }
          }
        }
      `
    }
  render={data => <RawMaterials data={data} />}
  />
)

const RawMaterials = ({ data }) => (
  <>
    <div className="exhibit-child raw-div">
      <HomeButton />
      <h1 className="exhibit-page-title raw-title"
      style={{
      backgroundImage: `url('https://res.cloudinary.com/aleesteele/image/upload/v1615181142/raw-material_iyuaky.png')`
      }}>Raw Materials</h1>
      <h3 className="exhibit-page-text">Everything we know has been extracted from the earth.</h3>
        <div className="element-list-div-wrapper x">
            {data.allElementsCsv.nodes.length > 0 &&
              data.allElementsCsv.nodes.map((element, index)=> (
                <div className="element-list-child y" key={`{index}`}>
                  <h2><Link to={`/${element.Name}`}>{element.Name}</Link></h2>
                </div>
              ))}
        </div>
        Help us to understand it all: <a href="https://drive.google.com/file/d/1PKj0EQPO6IWKx4M0PpiqIj09_cRzLBzf/view?usp=sharing">elements</a> / <a href="https://docs.google.com/spreadsheets/d/1jTT0r273VGo6D2xxOH5FLzVNxBCutFis2xS3uMJrN-0/edit?usp=sharing">processes</a>.<br/>
      <Link to="/transport-1"><ForwardButton /></Link>
    </div>
  </>
)
