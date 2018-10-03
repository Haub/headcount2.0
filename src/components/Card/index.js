import React from 'react';

export const Card = ({location, stats}) => {
  
  const displayStats = Object.entries(stats).map((stat, index) => 
    <h5 key={index}>{stat[0]}: {stat[1]}</h5>
  )
  
  return(
    <div>
      <h2>{location}</h2>
      {displayStats}
    </div>
  )
}