import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './index';

describe ('CARD', () => {

  let wrapper;
  beforeEach=(() => {
    wrapper=shallow(<Card />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});