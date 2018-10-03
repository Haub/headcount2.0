import React from 'react';
import PropTypes from 'prop-types'; 

export const Card = ({location, stats}) => {
  
  const displayStats = Object.entries(stats).map((stat, index) => 
    // const statColor = {stat[1] >= 0.5 ? 'above': 'below'}
    <li key={index}>{stat[0]}: {stat[1]}</li>
  )
  
  return(
    <div>
      <h2>{location}</h2>
      <ul>{displayStats}</ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired 
}