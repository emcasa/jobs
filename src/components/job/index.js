import React from 'react'

const Job = ({ title, location, area }) => (
  <div className="job">
    <h3>{title}</h3>
    <small className="location">{location}</small>
  </div>
)

export default Job