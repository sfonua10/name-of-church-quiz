import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      background: `linear-gradient(80deg, #177C9C 0%, rgba(255, 255, 255, 0.94) 99.99%, rgba(255, 255, 253, 0) 100%)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          color: `#FFFCFC`,
          textShadow: `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`,
        }}
      >
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
