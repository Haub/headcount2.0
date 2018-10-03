import React from 'react';
import { Card } from '../Card';
import PropTypes from 'prop-types';

export const CardContainer = ({ filteredDistricts }) => {
  const districtValues = Object.values(filteredDistricts);
  
  const displayDistrictCards = districtValues.map((district, index) => 
    <Card
      {...district}
      key={index}
    />
  );

  return (
    <div>
      {displayDistrictCards}
    </div>
  );
};

CardContainer.propTypes = {
  filteredDistricts: PropTypes.object.isRequired
};