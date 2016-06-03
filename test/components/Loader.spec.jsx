import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from '../../src/components';

describe('<Loader />', () => {
  it('colors green', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div.green')).to.have.length(1);
  });

  it('colors blue', () => {
    const wrapper = shallow(<Loader color="blue" />);
    expect(wrapper.find('div.blue')).to.have.length(1);
  });
});
