import React from 'react';
import { Card } from '../Card';
import PropTypes from 'prop-types';

export const CardContainer = ({ filteredDistricts, selectDistrict }) => {
  
  const displayDistrictCards = filteredDistricts.map((district, index) => 
    <Card
      {...district}
      key={index}
      selectDistrict={selectDistrict}
    />
  );

  return (
    <div>
      {displayDistrictCards}
    </div>
  );
};

CardContainer.propTypes = {
  filteredDistricts: PropTypes.array.isRequired
};