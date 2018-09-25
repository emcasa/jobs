import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const Header = ({collapsed}) => (
  <div className={collapsed ? 'header collapsed' : 'header'}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <div className="title">
        {!collapsed && <Logo />}
        {collapsed && (
          <a href="/">
            <Logo />
            <h2>Trabalhe na EmCasa</h2>
          </a>
        )}
      </div>
      {!collapsed &&
      <div className="content">
        <h1>Trabalhe na EmCasa</h1>
        <p>Estamos revolucionando o mercado de real estate no Brasil. Temos oportunidades para trabalho remoto ou nas nossas sedes no RJ e SP. Conheça mais:</p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=1f6a_1orGzM1">O que é a EmCasa?</a></li>
          <li><a href="https://www.youtube.com/watch?v=vv2L-XVde_0&t=485s">EmCasa na IstoÉ dinheiro</a></li>
          <li><a href="https://emcasa.com">Visite nosso produto</a></li>
        </ul>
      </div>}
    </div>
  </div>
)


Header.propTypes = {
  collapsed: PropTypes.bool
}

export default Header
