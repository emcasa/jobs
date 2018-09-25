import React from 'react'
import Layout from '../components/layout'
import './job-template.css'

export default function JobTemplate({
  data
}) {
  const { markdownRemark } = data
  if ( !markdownRemark ) {
    return null
  }

  const { frontmatter, html } = markdownRemark
  return (<Layout internal={true} title={`EmCasa | ${frontmatter.title} (${frontmatter.location})`}>
      <div className="job-template">
        <div className="job-header">
          <h1 className="job-title">{frontmatter.title}</h1>
          <h3 className="job-area">{frontmatter.area} - {frontmatter.location}</h3>
        </div>
        <div className="job-emcasa">
          <p>A EmCasa nasceu para <strong>transformar a experiência de comprar e vender um imóvel no Brasil. </strong>
            Nós usamos tecnologia, inteligência de dados e um modelo de negócio inovador para redefinir o mercado
            brasileiro de Real Estate em favor dos compradores e vendedores.</p>

          <p>Consumidores precisam lidar com serviços de baixa qualidade, falta de transparência, documentação complexa,
            burocracia, problemas de segurança e diversos outros. Além disso, devem pagar altas taxas de 5% a 6%
            sobre o valor do imóvel.</p>

          <p>Todos os dias, tempo e dinheiro são desperdiçados por causa das ineficiências atuais, o que é péssimo para
            o país - A EmCasa surgiu para resolver este problema e transformar o setor através da tecnologia, produto e
            um modelo de negócios inovador.</p>
        </div>
        <div
          className="job-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="job-apply">
          <a href={frontmatter.form} target="_blank">Quero me candidatar</a>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        area
        location
        form
      }
    }
  }
`
