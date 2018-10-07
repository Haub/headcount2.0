import React from 'react';
import {ComparisonCard} from '../ComparisonCard';

export const ComparisonContainer = ({comparisonObject, selectedDistricts, unselectDistrict}) => {
  
  const locationOne = Object.keys(comparisonObject)[0];
  const locationOneAverage = comparisonObject[locationOne];
  const locationTwo = Object.keys(comparisonObject)[1];
  const locationTwoAverage = comparisonObject[locationTwo];
  const comparedAverage = comparisonObject.compared;

  const displaySelectedCards = selectedDistricts.map(district => 
    <ComparisonCard
      {...district}
      key={district.location}
      unselectDistrict={unselectDistrict}
    />
  )

  return(
    <div>
      {displaySelectedCards[0]}
      { displaySelectedCards.length > 1 &&
        <div>
          <h3>{locationOne}</h3>
          <h3>{locationOneAverage}</h3>
          <h2>{comparedAverage}</h2>
          <h3>{locationTwo}</h3>
          <h3>{locationTwoAverage}</h3>
        </div>
      }
      {displaySelectedCards[1]}
    </div>
  )
}