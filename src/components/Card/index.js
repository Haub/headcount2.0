import React from 'react';
import './card.css';
import PropTypes from 'prop-types'; 

export const Card = ({location, stats, selectDistrict}) => {
 
  const displayStats = Object.keys(stats).map((stat, index) => {
    return (
      <li key={index} className={stats[stat] < 0.5 ? 'below': 'above'}>{stat}: {stats[stat]}</li>
    );
    
  });
  
  return (
    <div className='district-cards' onClick={()=>selectDistrict(location)}>
      <h2 className='location'>{location}</h2>
      <ul className='stats'>{displayStats}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object,
  selectDistrict: PropTypes.func
};