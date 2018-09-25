import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, internal }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            themeColor
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Trablahe na EmCasa' },
            { name: 'keywords', content: 'emcasa, startup, real estate tech' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          collapsed={internal}
          siteTitle={data.site.siteMetadata.title}
          themeColor={data.site.siteMetadata.themeColor} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}

        </div>
        <div className="footer" />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool
}

export default Layout
