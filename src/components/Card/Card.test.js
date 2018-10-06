import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from './index';

describe ('CARD', () => {

  let wrapper;
  beforeEach=(() => {
    wrapper=shallow(<Card 
      location = {'Academy 20'}
      stats = {{2004: 0.5}}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have class of below if stat value is below 0.5', () => {
    wrapper=shallow(<Card location={'Academy 20'} mockStats= {{ 2004: 0.3, 2005: 0.6 }} key={1} />)
    expect(wrapper.find('li').is('.below')).toEqual(true);
  })

  it('should have class of above if stat value is above 0.5', () => {
    wrapper=shallow(<Card location={'Academy 20'} mockStats= {{ 2004: 0.3, 2005: 0.6 }} key={1} />)
    expect(wrapper.find('li').is('.above')).toHaveLength(1);
  })

});