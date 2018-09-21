import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Job from '../components/job';

const IndexPage = ({data}) => {
  const {allMarkdownRemark: {edges}} = data;
  return (
    <Layout>
      <h1>Oportunidades</h1>
      <div className="job-list">
        {edges.map(({node}, index) => <Job key={index} {...node.frontmatter} />)}
      </div>
    </Layout>
  );
};

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            location
            area
          }
        }
      }
    }
  }
`
