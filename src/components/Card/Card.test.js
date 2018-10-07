import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './index';

describe('CARD', () => {

  it('should match the snapshot', () => {
    const wrapper=shallow(<Card 
      location = {'Academy 20'}
      stats = {{2004: 0.5}}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have class of below if stat value is below 0.5', () => {
    const wrapper=shallow(<Card location={'Academy 20'} mockStats= {{ 2004: 0.3, 2005: 0.6 }} key={1} />);
    expect(wrapper.find('li').is('.below')).toEqual(true);
  });

  it('should have class of above if stat value is above 0.5', () => {
    const wrapper=shallow(<Card location={'Academy 20'} mockStats= {{ 2004: 0.3, 2005: 0.6 }} key={1} />);
    expect(wrapper.find('li').is('.above')).toHaveLength(1);
  });

});