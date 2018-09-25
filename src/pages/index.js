import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Job from '../components/job';

const IndexPage = ({data}) => {
  const {allMarkdownRemark: {edges}} = data;
  const jobsByArea = edges.reduce((areas, {node}) => {
    const key = node.frontmatter.area
    if (!areas[key]) {
      areas[key] = []
    }
    areas[key].push(node)
    return areas
  }, {});
  return (
    <Layout>
      <div>
        {Object.keys(jobsByArea).map((area, index) => (
          <div key={`area-${index}`} className="job-area">
            <h2>{area}</h2>
            <div className="job-list">
              {jobsByArea[area].map((job, j) => <Job key={`area-${index}-job-${j}`}{...job.frontmatter} />)}
            </div>
          </div>
        ))}
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
            path
          }
        }
      }
    }
  }
`
