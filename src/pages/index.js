import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Job from '../components/job';

const IndexPage = ({data}) => {
  const {allMarkdownRemark: {edges}} = data;
  return (
    <Layout>
      <div className="job-list">
        {edges.map(({node}, index) => <Job key={index} {...node.frontmatter} />)}
      </div>
    </Layout>
  );
};

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___location], order: ASC}
    ){
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
