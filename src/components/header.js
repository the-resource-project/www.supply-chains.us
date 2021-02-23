import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
    <header>
        <h5>
          <Link to="/">
            {siteTitle}
          </Link>
        </h5>
    </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
