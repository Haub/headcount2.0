import React from 'react';

export const ComparisonContainer = ({comparisonObject}) => {
  const locationOne = Object.keys(comparisonObject)[0];
  const locationOneAverage = comparisonObject[locationOne];
  const locationTwo = Object.keys(comparisonObject)[1];
  const locationTwoAverage = comparisonObject[locationTwo];
  const comparedAverage = comparisonObject.compared

  return(
    <div>
      <h3>{locationOne}</h3>
      <h3>{locationOneAverage}</h3>
      <h2>{comparedAverage}</h2>
      <h3>{locationTwo}</h3>
      <h3>{locationTwoAverage}</h3>
    </div>
  )
}