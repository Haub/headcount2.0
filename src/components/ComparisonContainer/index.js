import React from 'react';
import { ComparisonCard } from '../ComparisonCard';
import PropTypes from 'prop-types';
import './comparisonContainer.css';

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
  );

  return (
    <div className='comparison-layout'>
      {displaySelectedCards[0]}
      
      { displaySelectedCards.length > 1 &&
        <div className='comparison-cards comparison-card'>
          <h3 className='comparison-location'>{locationOne}</h3>
          <h3 className='location-average'>{locationOneAverage}</h3>
          <h2 className='comparison-average'>{comparedAverage}</h2>
          <h3 className='comparison-location'>{locationTwo}</h3>
          <h3 className='location-average'>{locationTwoAverage}</h3>
        </div>
      }
      {displaySelectedCards[1]}
    </div>
  );
};

ComparisonContainer.propTypes = {
  comparisonObject: PropTypes.object,
  selectedDistricts: PropTypes.array, 
  unselectDistrict: PropTypes.func
};