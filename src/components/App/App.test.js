import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './index';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
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

  
});
