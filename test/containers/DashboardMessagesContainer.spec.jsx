import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import { DashboardMessagesContainer } from '../../src/containers';
import { MessageEntry } from '../../src/components';

describe('<DashboardMessagesContainer />', () => {
  it('renders <MessageEntry />', () => {
    const wrapper = shallow(<DashboardMessagesContainer />);
    expect(wrapper.find(MessageEntry)).to.have.length(1);
  });
});
