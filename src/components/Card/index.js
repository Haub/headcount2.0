import React from 'react';
import './card.css';
import PropTypes from 'prop-types'; 

export const Card = ({location, stats}) => {
  
  const displayStats = Object.entries(stats).map((stat, index) => 
    // const statColor = {stat[1] >= 0.5 ? 'above': 'below'}
    <li key={index} className='individualStats'>{stat[0]}: {stat[1]}</li>
  );
  
  return (
    <div className='district-cards'>
      <h2 className='location'>{location}</h2>
      <ul className='stats'>{displayStats}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired 
};