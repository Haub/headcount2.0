import React from 'react';
import PropTypes from 'prop-types'; 
import './comparisonCard.css';

export const ComparisonCard = ({location, stats, unselectDistrict}) => {
 
  const displayStats = Object.keys(stats).map((stat, index) => {
    return (
      <li key={index} className={stats[stat] < 0.5 ? 'below': 'above'}>{stat}: {stats[stat]}</li>
    );
    
  });
  
  return (
    <div className='comparison-cards' onClick={()=>unselectDistrict(location)}>
      <h2 className='location'>{location}</h2>
      <ul className='stats'>{displayStats}</ul>
    </div>
  );
};

ComparisonCard.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object,
  unselectDistrict: PropTypes.func 
};