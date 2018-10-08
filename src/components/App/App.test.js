import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the state of app with all districts in componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().filteredDistricts).toHaveLength(181);
  });

  it('filters districts based on user input', () => {
    wrapper.instance().filterDistricts('colorado');
    expect(wrapper.state().filteredDistricts).toHaveLength(2);
  });

  it('should update selectedDistricts in state when selectDistrict is invoked', () => {
    const mockData = 'COLORADO';
    wrapper.instance().selectDistrict(mockData);
    expect(wrapper.state('selectedDistricts').length).toEqual(1);
  });

  it('should unselect a district when unselectDistrict is called', () => {
    const mockData = 'COLORADO';
    wrapper.instance().unselectDistrict(mockData);
    expect(wrapper.state().selectedDistricts.length).toEqual(0);
  });
  
});
