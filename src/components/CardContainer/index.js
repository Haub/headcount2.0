import React from 'react';
import { Card } from '../Card';

export const CardContainer = ({ filteredDistricts }) => {
  const districtValues = Object.values(filteredDistricts)
  
  const displayDistrictCards = districtValues.map((district, index) => 
    <Card
      {...district}
      key={index}
    />
  )
  return(
    <div>
      {displayDistrictCards}
    </div>
  )
}