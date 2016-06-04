import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import { DashboardItemContainer } from '../../src/containers';

describe('<DashboardItemContainer />', () => {
  it('renders children in <DashboardItemContainer />', () => {
    const wrapper = shallow(
      <DashboardItemContainer>
        <span>test</span>
      </DashboardItemContainer>
    );
    expect(wrapper.find('span')).to.have.length(1);
  });
});
