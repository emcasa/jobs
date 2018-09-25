import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import opengraphImage from '../../images/opengraph.png';
import './layout.css'

const Layout = ({ children, internal, title }) => (
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
          title={title ||data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A EmCasa nasceu para transformar a experiência de comprar e vender um imóvel no Brasil. Nós usamos tecnologia, inteligência de dados e um modelo de negócio inovador para redefinir o mercado brasileiro de Real Estate em favor dos compradores e vendedores.' },
            { name: 'keywords', content: 'emcasa, startup, real estate tech' },
            { name: 'og:image', content: opengraphImage }
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
  internal: PropTypes.bool,
  title: PropTypes.string
}

export default Layout
