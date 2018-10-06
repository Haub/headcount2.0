import React from 'react';
import { shallow, mount } from 'enzyme';
import { CardContainer } from './index';

describe('CARDCONTAINER', () => {
  let wrapper;
  const mockProps = {
    filteredDistricts: ['Academy 20']
  }
  beforeEach(() => {
    wrapper=shallow(<CardContainer {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});