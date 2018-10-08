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
    const expectedState = [
      {"location": "COLORADO", 
         "stats": {
          "2004": 0.24, 
          "2005": 0.278, 
          "2006": 0.337, 
          "2007": 0.395, 
          "2008": 0.536, 
          "2009": 0.598, 
          "2010": 0.64, 
          "2011": 0.672, 
          "2012": 0.695, 
          "2013": 0.703, 
          "2014": 0.741
        } 
      }]
    wrapper.instance().selectDistrict(mockData);
    expect(wrapper.state('selectedDistricts').length).toEqual(1);
  })

  it('should unselect a district when unselectDistrict is called', () => {
    const mockData = 'COLORADO';
    const mockState = [
      {"location": "COLORADO", 
         "stats": {
          "2004": 0.24, 
          "2005": 0.278, 
          "2006": 0.337, 
          "2007": 0.395, 
          "2008": 0.536, 
          "2009": 0.598, 
          "2010": 0.64, 
          "2011": 0.672, 
          "2012": 0.695, 
          "2013": 0.703, 
          "2014": 0.741
        } 
      }]
      wrapper.instance().unselectDistrict('COLORADO');
      expect(wrapper.state().selectedDistricts.length).toEqual(0);
  })
  
});
