import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

describe('SEARCH', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should invoke handleChange on the onChange of the input', () => {
    const handleChangeMock = jest.fn();
    const event = {target: { value: 'COLORADO'}};
    const wrapper = shallow(<Search filterDistricts={handleChangeMock}/>);
    wrapper.find('.search').simulate('change', event);
    expect(handleChangeMock).toHaveBeenCalled();
  });
});