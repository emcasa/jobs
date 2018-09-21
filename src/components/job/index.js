import React from 'react'

const Job = ({ title, location, area }) => (
  <div className="job">
    <h3>{title}</h3>
    <small>{location}</small>
  </div>
)

export default Job