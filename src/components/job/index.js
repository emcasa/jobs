import React from 'react'

const Job = ({ title, location, path }) => (
  <a href={path} className="job">
    <h3>{title}</h3>
    <small className="location">{location}</small>
  </a>
)

export default Job