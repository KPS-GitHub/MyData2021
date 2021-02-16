import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { colors } from '../vars/colors'

const Header = ({ siteTitle, pageTitle, path }) => {
  console.log("colors", colors)
  return (
  <header
    style={{
      background: colors.primary,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textShadow: '2px 2px 2px ' + colors.tertiary,
          }}
        >
          {pageTitle ? pageTitle : siteTitle ? siteTitle : "Page Title"}
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
